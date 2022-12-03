import React from 'react';
import useActiveUser from '../../Hooks/useActiveUser';

const ProfileLeft = () => {
    const [user] = useActiveUser();

    return (
        <div className='shadow-lg rounded p-2 bg-light'>
            <div className="profile text-center">
                <img src={user?.profile} alt={user?.userName} className='mx-auto rounded-pill d-block' style={{ height: '100px', width: '100px' }} />
                <h5 className='text-capitalize mt-3'>{user?.userName}</h5>
            </div>
            <div className="extra-profile">
                <hr />
                <h6>Email : <span className='ms-5'>{user?.email}</span></h6>
                <hr />
                <h6>Phone : <span className='ms-5'>{user?.phone ? user?.phone : <span>Add your Mobile number</span>}</span></h6>
                <hr />
                <h6>Address : <span className='ms-5'>{user?.address ? user?.address : <span>Add your Address</span>}</span></h6>
            </div>
        </div>
    );
};

export default ProfileLeft;