import {
  SERVICES_REQUEST,
  SERVICES_FAILURE,
  SERVICES_SUCCESS,
  SELECTED_SERVICES_REQUEST,
  SELECTED_SERVICES_FAILURE,
  SELECTED_SERVICES_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  selectedService: null,
  services: [],
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SERVICES_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case SERVICES_SUCCESS:
      const {services} = action.payload;
      return {
        ...state, 
        loading: false, 
        error: null,
        services
      };
      case SELECTED_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SELECTED_SERVICES_FAILURE:
      const {err} = action.payload;
      return {
        ...state,
        loading: false,
        error: err,
      };
    case SELECTED_SERVICES_SUCCESS:
      const {service} = action.payload;
      return {
        ...state, 
        loading: false, 
        error: null,
        service
      };
    default:
      return state;
  }
}
