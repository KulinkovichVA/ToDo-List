import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const GreetingsText = () => {
    const { user } = useAuth0();
    console.log(user);
    const name = user ? user.name : 'Unknown Chuck';
    return <div>{<h1>Hello, {name}!</h1>}</div>;
};

export default GreetingsText;
