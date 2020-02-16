import React from 'react';
import SampleForm from '../../components/forms/SampleForm';

const NewSample = (props) => {
  console.log('jajaja', props.match.params.sampleId);
  
  return (
    <div className="View">
      <h1>New Sample Form</h1>
      <SampleForm sampleId={props.match.params.sampleId} />
    </div>
  );
};

export default NewSample;
