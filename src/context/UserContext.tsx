import { createContext, useContext, useState } from "react";

// TIPOS PARA VALOR POR DEFECTO DE "UserContext"

// v = visitor   c = client   r = restaurant  d = delivery   El resto son conjuntos de estos tipos
export type UserRolesType = "v" | "c" | "cr" | "cd" | "crd";
export type UserActualRoleType = "v" | "c" | "r" | "d";

export type UserType = {
  userName: string;
  userRoles: UserRolesType;
  userActualRole: UserActualRoleType;
};

export type UserDataType = {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
};

// VALOR POR DEFECTO PARA "UserContext" (Obligatorio en TypeScript)
const userData: UserDataType = {
  userData: {
    userName: "",
    userRoles: "v",
    userActualRole: "v"
  },
  setUserData: () => {}
};

const UserContext = createContext<UserDataType>(userData);

type UserProviderProps = {
  children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserType>({
    userName: "Salvador Freixedo",
    userRoles: "crd",
    userActualRole: "c"
  });

  const userDataContext: UserDataType = {
    userData: userData,
    setUserData: setUserData
  };

  return (
    <UserContext.Provider value={userDataContext}>
      {children}
    </UserContext.Provider>
  );
}

// CUSTOM HOOK PARA OBTENER EL UserContext
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used inside the ThemeProvider");
  }

  return context;
}
