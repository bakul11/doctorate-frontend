import React from 'react';
import { useNavigate } from 'react-router-dom';
import useActiveUser from '../../Hooks/useActiveUser';

const Protected = ({ children }) => {
    const [user] = useActiveUser();
    const navigate = useNavigate();


    if (!user?.email) {
        navigate('/login')
    }
    return children
};

export default Protected;