import React from 'react';
import { useNavigate } from 'react-router-dom';
import './alphabet.css';

const Alphabet = () => {
    const navigate = useNavigate();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    return (
        <div className="alphabet-grid">
            {letters.map((letter) => (
                <button
                    key={letter}
                    onClick={() => navigate(`/alphabet/${letter}`)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Alphabet;
