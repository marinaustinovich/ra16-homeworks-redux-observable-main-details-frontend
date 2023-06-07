import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SELECTED_SERVICES_REQUEST, SERVICES_REQUEST } from '../actions/actionTypes';
import { servicesSuccess, servicesFailure, selectedServicesSuccess, selectedServicesFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const uploadServicesEpic = action$ => action$.pipe(
    ofType(SERVICES_REQUEST),
    switchMap(o => 
        ajax.getJSON(process.env.REACT_APP_SERVICES_URL).pipe(
            map(o => servicesSuccess(o)),
            catchError(e => of(servicesFailure(new Error(e.message)))),
        )
    ),
);

export const uploadSelectedServiceEpic = action$ => action$.pipe(
    ofType(SELECTED_SERVICES_REQUEST),
    switchMap(action => {
        const { id } = action.payload;
        
        return ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}/${id}`).pipe(
            map(o => selectedServicesSuccess(o)),
            catchError(e => of(selectedServicesFailure(new Error(e.message)))),
        );
    })
);