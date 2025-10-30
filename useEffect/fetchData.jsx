import {useEffect, useState} from 'react';

export default function App(){
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);
    
    return (
        <>
            {user ? <h3>{user.name}</h3> : <p>Loading...</p>}
        </>
    );
}
