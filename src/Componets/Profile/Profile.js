import React from 'react';
import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';

const Profile = () => {
    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className="row gy-2">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <ProfileLeft />
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                    <ProfileRight />
                </div>
            </div>
        </div>
    );
};

export default Profile;