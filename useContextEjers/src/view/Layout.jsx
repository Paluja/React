import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import Btn from '../components/Btn'
import Counter from '../components/Counter'
import BtnTheme from '../components/BtnTheme'
import BtnLang from '../components/BtnLang'

function Layout() {
    const { theme } = useThemeContext();
    const style = {
        background: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
    }
  
    return (
    <div id='root' style={style}>
        <BtnTheme/>
        <Counter/>
        <Btn/>
        <BtnLang/>
    </div>
  )
}

export default Layout