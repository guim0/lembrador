import { createContext, useState } from "react";

interface IUserContext {
  children: React.ReactNode;
}
type IRole = {
  role: "job" | "college" | "personal";
};
export const UserContext = createContext({
  name: "",
  setName: (name: string) => {},
  surname: "",
  setSurname: (surname: string) => {},
  role: "personal",
  setRole: (role: IRole) => {},
});

export const UserContextProvider = ({ children }: IUserContext) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState<IRole>(null);
  return (
    <UserContext.Provider
      value={{ name, setName, surname, setSurname, setRole, role }}
    >
      {children}
    </UserContext.Provider>
  );
};
