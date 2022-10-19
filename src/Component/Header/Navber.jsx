import React, { useContext } from 'react';
import { UserContext } from '../../Context/Contextapi';

const Navber = () => {

    const data = useContext(UserContext)
    console.log(data);
    return (
        <div>
            This is navber
        </div>
    );
};

export default Navber;