'use client';

import { useState, useEffect } from 'react';

import ButtonPrincipalOffCanvas from "./ButtonPrincipallOffCanvas";

export default function Buttons() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [isBlueTheme, setIsBlueTheme] = useState(false)
    
    function toggleTheme() {
        const principalHtml = document.documentElement;
        
        if (isDarkTheme) {
            principalHtml.setAttribute('data-bs-theme', 'light');
            setIsDarkTheme(!isDarkTheme)
        } else {
            principalHtml.setAttribute('data-bs-theme', 'dark');
            setIsDarkTheme(!isDarkTheme)
        }
    }
    
    function useBlueTheme() {
        const principalHtml = document.documentElement;

        let currentTheme = principalHtml.getAttribute('data-bs-theme')

        if (currentTheme != 'blue') {
            principalHtml.setAttribute('data-bs-theme', 'blue');
            setIsBlueTheme(!isBlueTheme)
        } else {
            isDarkTheme ? principalHtml.setAttribute('data-bs-theme', 'dark') : principalHtml.setAttribute('data-bs-theme', 'light');
            setIsBlueTheme(!isBlueTheme)
        }
    }

    useEffect(() => {
        const principalHtml = document.documentElement;
        let currentTheme = principalHtml.getAttribute('data-bs-theme')

        if (currentTheme == 'dark') {
            setIsDarkTheme(true)
        }
    }, [])

    return (
        <>
            <div className="col buttons-example">
                <ButtonPrincipalOffCanvas />
                <button className={`btn ${isDarkTheme ? 'btn-light' : 'btn-dark'}`} onClick={toggleTheme}>{isDarkTheme ? 'Modo claro' : 'Modo oscuro'}</button>
                <button className="btn btn-primary" onClick={useBlueTheme}>{isBlueTheme ? 'Modo anterior' : 'Modo azul'}</button>
                <p>*Esta pagina sigue en desarrollo*</p>
            </div>
        </>
    );
  }
  