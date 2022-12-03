import React from 'react';
import { Link } from 'react-router-dom';


const NoMatch = () => {

    const custom4 = {
        fontSize: '100px'
    }

    return (
        <div className='container text-center' style={{ marginTop: '150px' }}>
            <h1 className='fw-bold text-dark' style={custom4}>4<span className='text-danger'>0</span>4</h1>
            <h5 className='text-dark'>We can't find this pages. please go to <Link to='/' className='text-light btn btn-danger rounded-pill'>HomePages</Link></h5>
        </div>
    );
};

export default NoMatch;