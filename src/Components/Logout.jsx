import { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";

const Logout = () => {
    const { removeInfoUser } = useContext(UserContext);

    useEffect(() => {
        removeInfoUser();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null;
}

export default Logout;