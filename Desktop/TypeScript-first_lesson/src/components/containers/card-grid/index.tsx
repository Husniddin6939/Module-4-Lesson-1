import { FC, useContext } from "react";
import "./style.scss";
import { languageContext } from "../../../context/lang-context";
import type { CardGridProps } from "../../../types";
import type { langContext } from "../../../types";



export const CardGrid:FC<CardGridProps>  = ({children}) => {
    const {lang}:langContext=useContext(languageContext);
    return (
        <div>
            <h1>{lang}</h1>
            <div className="card-grid">
            {children}
        </div>
        </div>
    );
};

