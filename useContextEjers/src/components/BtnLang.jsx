import React from 'react'
import { useLangContext } from '../context/LangContext'

function BtnLang() {
    const { lang, toggleLang } = useLangContext();
    console.log(lang)
    return (
    <>
        <button onClick={toggleLang}>
            {lang === true ? 'en' : 'es'}
        </button>
    </>
  )
}

export default BtnLang