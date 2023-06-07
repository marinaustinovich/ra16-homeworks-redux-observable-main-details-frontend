import { combineReducers, compose, } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import servicesReducer from '../reducers/services';
import { uploadSelectedServiceEpic, uploadServicesEpic } from '../epics';

const rootReducer = combineReducers({
  services: servicesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  uploadSelectedServiceEpic,
  uploadServicesEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer, 
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware),
  devTools: composeEnhancers,
});

epicMiddleware.run(epic);

export default store;