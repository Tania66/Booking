import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { destinationReducer } from "../features/redux/hotelSlice";
import { hotelReducer } from "../features/redux/filterCitySlice";
import mySaga from "../features/sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
  destination: destinationReducer,
  hotel: hotelReducer,
});

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
