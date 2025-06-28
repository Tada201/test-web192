import React, { createContext, useContext } from 'react';

export const MdxModeContext = createContext<{ mdxMode: boolean; setMdxMode: (v: boolean) => void }>({ mdxMode: false, setMdxMode: () => {} });

export const useMdxMode = () => useContext(MdxModeContext);
