import { useState, useEffect } from "react";

const useActiveUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://dortorate-project.onrender.com/auth/activeUser`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(result => setUser(result))
    }, [user])
    return [user]

}

export default useActiveUser;