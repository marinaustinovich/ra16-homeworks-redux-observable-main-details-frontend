import React from 'react';
import './ServerError.css';
import { useDispatch } from 'react-redux';
import { selectedServicesRequest, servicesRequest } from '../../actions/actionCreators';
import { useSelector } from 'react-redux';

export default function ServerError({ id }) {
    const {error} = useSelector(state => state.services)
    const dispatch = useDispatch();

    const handleRetry = () => {
        if (id) {
            dispatch(selectedServicesRequest(id));
        } else {
            dispatch(servicesRequest());
        }
    };

    return (
            <div className="error-container">
                <div className="text-danger">Произошла ошибка: {error.message}</div>
                <button className="btn btn-primary" onClick={handleRetry}>Повторить запрос</button>
            </div>
    )
}
