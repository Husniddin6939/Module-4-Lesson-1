import {useContext, FC} from 'react';
import "./style.scss";
import { themeContext } from '../../../context/theme-context';
import type { ContextType } from '../../../types';
import { languageContext } from '../../../context/lang-context';
import { Select } from '../select';

interface LanguageType{
    lang:string
}



export const Card:FC = () => {
    const {theme, toggleTheme}:ContextType = useContext(themeContext);
    const {lang}:LanguageType = useContext(languageContext)

    const cardStyle = {
        backgroundColor: theme === 'light'? '#fff' : '#333',
        color: theme === 'light'? '#333' : '#fff',
    };

    return (
        <div className='card' style={cardStyle} onClick={toggleTheme}>
            <img src="https://picsum.photos/id/122/300/250" alt="photo"/>
            <div className="card-body">
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className='btn btn-primary'>Go somewhere</a>
                <Select/>
            </div>
        </div>
    );
};

