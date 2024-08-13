import React from 'react';
import './Input.css';

function Input({ label, type, name, id, placeholder }) { // Ajout des props
    return (
        <div className='input'>
            <label htmlFor={id}>{label}</label> {/* Utilisation de id dans htmlFor */}
            <input type={type} name={name} id={id} placeholder={placeholder} /> {/* Utilisation des props */}
        </div>
    );
}

export default Input;
