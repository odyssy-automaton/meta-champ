import React, { useContext } from 'react';

import { BoxContext } from '../../contexts/Store';

const NewCrop = () => {
  const sample = {
    id: '123',
    size: '20',
  };

  const [box] = useContext(BoxContext);

  const addToBox = async () => {
    console.log('adding');
    await box.space.public.set(sample.id, sample);

    const favorite = await box.space.public.get(sample.id);

    console.log('favorite', favorite);
  };

  console.log('box', box);
  return (
    <div className="View">
      <h1>New Crop Form</h1>
      {box ? <button onClick={() => addToBox()}>ADD TO BOX</button> : null}
    </div>
  );
};

export default NewCrop;
