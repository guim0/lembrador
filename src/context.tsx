import React, { createContext, useState } from "react";

type DataType = {
  name: string;
  surname: string;
  role: string;
};

type ContextType = {
  data: DataType;
  updateData: (newData: DataType) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};
export const UserContext = createContext<ContextType>({
  data: { name: "", surname: "", role: "" },
  updateData: () => {},
});

export const UserContextProvider: React.FC = ({
  children,
}: UserContextProviderProps) => {
  const [data, setData] = useState<DataType>({
    name: "",
    surname: "",
    role: "",
  });

  const updateData = (newData: DataType) => {
    setData(newData);
  };

  return (
    <UserContext.Provider value={{ data, updateData }}>
      {children}
    </UserContext.Provider>
  );
};
