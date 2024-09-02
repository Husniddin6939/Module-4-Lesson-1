import React from 'react';
import type { ContainerProps } from '../../../types';
import "./style.scss";


export const Container:React.FC<ContainerProps> = ({children, className}) => {
    return (
        <div className={`container ${className && className}`}>
            {children}
        </div>
    );
};

