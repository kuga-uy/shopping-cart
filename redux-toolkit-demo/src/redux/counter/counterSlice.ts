import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { fetchCount } from "../../api/CounterApi";

const ACTION_TYPE = {
  INCREMENT_COUNT: "INCREMENT_COUNT",
};

export const REQUEST_STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS", //FULFILLED
  FAILED: "FAILED", //REJECTED
};

interface ICounter {
  value: number;
  status: string;
}

const initialState: ICounter = {
  value: 0,
  status: REQUEST_STATUS.IDLE, //inactivo
};

// ACTION
/* Las actions internamente cuentan con 4 estados idle, pending, fullfiled, rejected
los cuales podemos manejar con las funciones addCase para, dependiendo del resultado
ejecutar determinada funcionalidad, como por ejemplo, mostrar un mensaje o alerta al usuario */
export const incrementAsync = createAsyncThunk<number, number>(
  ACTION_TYPE.INCREMENT_COUNT, //description for the action
  async (amount: number) => {
    const response = await fetchCount(amount);
    //El valor que retorna es 'fulfilled' action payload
    return response;
  }
);

//SLICE recibe 3 parametros, name, initial state y reducers

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //los reducers dentro de los slice estan mezclados con actions
    increment: (state) => {
      state.value += 1;
    },
    // ejemplo de modificacion {...state, state.value: +=1}
    /*en cada uno de estos cambios estamos "mutando el estado", cuando en
        redux generalmente se hace una copia del mismo y luego se modifica, pero
        redux no muta el estado sino que detecta cambios a traves de una libreria interna y produce un nuevo estado inmutable
        basado en estos */

    decrement: (state) => {
      state.value -= 1;
    },

    // esta forma es la mas habitual ya que hacemos cambios directamente desde el payload
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  /* Extra reducers, son los que manejan acciones asincronas, para esto se usan las
funciones addCase y addMacher */

  extraReducers: (builder) => {
    // pending, fulfilled, rejected? son propiedades de createAsyncThunk
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.IDLE;
        state.value += action.payload;
      })
      .addMatcher(isFulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

// hacer accesibles los elementos del slice (actions y reducer) en nuestro proyecto

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
