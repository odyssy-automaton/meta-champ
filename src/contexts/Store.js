import React, { createContext, useState } from 'react';

export const BoxContext = createContext();
export const FortmaticContext = createContext();

const Store = ({ children }) => {
  const [box, setBox] = useState();
  const [fortmatic, setFortmatic] = useState();

  return (
    <FortmaticContext.Provider value={[box, setBox]}>
      <BoxContext.Provider value={[fortmatic, setFortmatic]}>
        {children}
      </BoxContext.Provider>
    </FortmaticContext.Provider>
  );
};

export default Store;
