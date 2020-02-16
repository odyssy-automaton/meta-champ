import React from 'react';
import ProfileForm from '../../components/forms/ProfileForm';

const Profile = (props) => {
  
  return (
    <div className="View">
      <h1>Profile</h1>
      <ProfileForm sampleId={props.match.params.address} />
    </div>
  );
};

export default Profile;
