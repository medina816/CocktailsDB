import React, { useState } from 'react';
import './Header.css';
import { IoIosMenu } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 ) {
            navigate(`/search/${text}`);
            setText('');
        }
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                <img 
                    src="https://www.thecocktaildb.com/images/logo.png" 
                    alt="Логотип" 
                    className="logo"
                />
                <div className='nav-right'>
                    <button className='home-btn' onClick={() => navigate('/')}>Home</button>
                    <input 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        type="text" 
                        placeholder='Поиск по букве...' 
                        onKeyDown={handleKeyDown} 
                    />
                </div>
                <div className='burger'>
                    <IoIosMenu className='icon' />
                </div>
            </nav>
        </header>
    );
}

export default Header;
