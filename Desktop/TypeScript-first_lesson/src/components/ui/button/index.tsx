import React from 'react';
import "./style.scss";
import type { ButtonProps } from '../../../types';



export const Button:React.FC<ButtonProps> = ({children, text, type, className, onClick}) => {
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>
           {children ? children : (text ? text : "")}   
        </button>
    );
};

