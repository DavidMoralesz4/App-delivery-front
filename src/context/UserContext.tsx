import { createContext, useContext, useState } from "react";

// TIPOS PARA VALOR POR DEFECTO DE "UserContext"
export type UserRoleType = "visitor" | "user" | "restaurant" | "delivery"; 

export type UserType = {
	userName: string,
	userRole: UserRoleType,
}	

export type UserDataType = {
	userData: UserType, 
	setUserData: React.Dispatch<React.SetStateAction<UserType>>
}


// VALOR POR DEFECTO PARA "UserContext" (Obligatorio en TypeScript)
const userData: UserDataType = {
	userData: {
		userName: "",
		userRole: "visitor",
	},
	setUserData: () => { }
};


const UserContext = createContext<UserDataType>(userData);




type UserProviderProps = {
	children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
	const [userRole, setUserData] = useState<UserType>({userName: "", userRole: "visitor"});

	const userData: UserDataType = {
		userData: userRole,
		setUserData: setUserData
	};

	return (
		<UserContext.Provider value={userData}>
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