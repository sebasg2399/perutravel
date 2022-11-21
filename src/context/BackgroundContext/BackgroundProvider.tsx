import { backgroundImages } from "~/assets/images";
import React, { createContext, useContext, useEffect, useState } from "react";

interface BackgroundStateProps {
  isLoading: boolean;
  backgroundURL: string;
}

interface BackgroundContextState {
  isLoading: boolean;
  backgroundURL: string;

  setBackground: (backgroundURL: string) => void;
}

const BackgroundContext = createContext<BackgroundContextState>(
  {} as BackgroundContextState
);

const INITIAL_STATE: BackgroundStateProps = {
  isLoading: true,
  backgroundURL: backgroundImages.macchuPicchu,
};

export const BackgroundProvider = ({ children }: any) => {
  const [state, setState] = useState<BackgroundStateProps>(INITIAL_STATE);
  const setBackground = (backgroundUrl: string) => {
    setState({ isLoading: false, backgroundURL: backgroundUrl });
  };
  return (
    <BackgroundContext.Provider value={{ ...state, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
