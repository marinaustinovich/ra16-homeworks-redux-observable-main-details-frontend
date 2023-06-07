import React, {Fragment, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedServicesRequest } from '../../actions/actionCreators';
import Loader from '../Loader/Loader';
import ServerError from '../ServerError/ServerError';
import { useParams } from 'react-router-dom';

export default function ServiceDetails() {
    const { service, loading, error } = useSelector(state => state.services);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectedServicesRequest(id));
    }, [dispatch, id]);

    return (
        <Fragment>
            {loading && <Loader/>}
            {error 
                ? <ServerError id={id}/>
                : service && 
                <div className="container" style={{display: 'flex'}}>
                    <div className="card border-light mx-auto">
                        <div className="card-body">
                            <h1 className="card-title">Service Details</h1>
                            <p className="card-text">ID: {service.id}</p>
                            <p className="card-text">Name: {service.name}</p>
                            <p className="card-text">Price: {service.price}</p>
                            <p className="card-text">Description: {service.content}</p>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
        
    )
}
