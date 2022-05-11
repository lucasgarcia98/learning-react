import React, { useEffect, useState } from "react";
import api from './../service/api';



export default function App() {
   
        const users = Query();

        return Retorno(users);

}

function Query(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setInterval(() => {
            api.get("users").then(({data}) => {
                setUsers(data);
            });
        }, 5000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return users;
}

function Retorno(users){
    if (!users) return null;
    
    return (
        <div>
            {users.map(
                (user) => 
                    <div>
                        <p>Id: {user.id}</p>
                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Admin: {user.admin ? 'Sim' : 'Não'}</p>
                        <h2>Posts: </h2>
                        { user.post.map(
                            (post) => 
                                <p>{post.title}</p>
                        )}
                        <h2>Messages: </h2>
                        {
                            user.messages.map(
                                (message) => 
                                    <p>{message.message}</p>
                        )}
                        <br /> 
                    </div>
            )}
        </div>
    );
}