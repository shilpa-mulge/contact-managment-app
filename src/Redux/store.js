import { configureStore } from "@reduxjs/toolkit";
import Contactreducer from "./Reducer";

const store = configureStore({
  reducer: {
    reducer: Contactreducer,
  },
});

export default store;
