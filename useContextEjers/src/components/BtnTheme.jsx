import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function BtnTheme() {
    const { theme, toggleTheme } = useThemeContext();
  
    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'dark' ? '🌞' : '🌙'}
            </button>
        </>
  )
}

export default BtnTheme