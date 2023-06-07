import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { servicesRequest } from '../../actions/actionCreators';
import {  useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ServerError from '../ServerError/ServerError';

export default function ServiceList() {
    const { services, loading, error } = useSelector(state => state.services);
    console.log(services,  error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(servicesRequest())
    }, [dispatch]);

    const handleRemove = (id) => { 
        if (window.confirm('Вы действительно хотите удалить эту услугу?')) {
            // dispatch(removeService(id));
            // dispatch(resetServiceField());
        }
    };

    const handleChange = (o) => {
        // dispatch(loadServiceData(o));
    }; 

    const onClick = (id) => {
        navigate(`/${id}/details`);
    };

    return (
        <Fragment>
            {loading && <Loader/>}
            {error 
                        ? <ServerError />
                        : <ul className="list-group">
                            {services.map(o => (
                                <li key={o.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => onClick(o.id)}>
                                    <div>
                                        {o.name} {o.price}
                                    </div>
                                    <div>
                                        <button className="btn btn-change" onClick={() => handleChange(o)}>✎</button>  
                                        <button className="btn btn-danger" onClick={() => handleRemove(o.id)}>✕</button>
                                    </div>
                                    
                                </li>
                            ))}
                        </ul>
                    }
        </Fragment>
    )
}