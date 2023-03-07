import { createContext, useState } from 'react';
export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [billShown, setBillShown] = useState(false);
    return (
        <UserContext.Provider value={{ cartCount, setCartCount ,billShown, setBillShown }}>
            {children}
        </UserContext.Provider>
    );
};
