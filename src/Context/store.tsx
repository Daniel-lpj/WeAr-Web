"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const MyContext = createContext<ContextProps>({
  token: "",
  setToken: (): string => "",
});

export const MyContextProvider = ({ children }: any) => {
  const [token, setToken] = useState<string>("");

  return (
    <MyContext.Provider value={{ token, setToken }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
