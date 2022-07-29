import React, { useState } from 'react';

const StatusComponent = ({ contact }) => {

    const [online, setOnline] = useState(false)

    const changeStatus = () => {
        setOnline(!online)
    }

    return (
        <div>
            <p>{online ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
            <button onClick={ changeStatus }>
                Cambiar estado
            </button>
        </div>
    );
};




export default StatusComponent;
