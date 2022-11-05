import { useContext, useEffect } from "react";
import { ItemContext } from "../Context/ItemContext";
import { UserContext } from "../Context/UserContext";

const Logout = () => {
    const { removeInfoUser } = useContext(UserContext);
    const { removeSale } = useContext(ItemContext);

    useEffect(() => {
        removeInfoUser();
        removeSale();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null;
}

export default Logout;