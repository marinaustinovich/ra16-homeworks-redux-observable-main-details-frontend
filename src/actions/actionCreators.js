import {
  SERVICES_REQUEST,
  SERVICES_FAILURE,
  SERVICES_SUCCESS,
  SELECTED_SERVICES_REQUEST,
  SELECTED_SERVICES_FAILURE,
  SELECTED_SERVICES_SUCCESS,
} from './actionTypes';


export const servicesRequest = () => ({
  type: SERVICES_REQUEST,
});

export const servicesFailure = error => ({
  type: SERVICES_FAILURE,
  payload: {error},
});

export const servicesSuccess = services => ({
  type: SERVICES_SUCCESS,
  payload: {services},
});

export const selectedServicesRequest = (id) => ({
  type: SELECTED_SERVICES_REQUEST,
  payload: {id},
});

export const selectedServicesFailure = err => ({
  type: SELECTED_SERVICES_FAILURE,
  payload: {err},
});

export const selectedServicesSuccess = service => ({
  type: SELECTED_SERVICES_SUCCESS,
  payload: {service},
});