import React from 'react'
import { useContext } from 'react'
import{ CountContext } from '../context/CountContext'
import { useCountContext } from '../context/CountContext'
import { useLangContext } from '../context/LangContext'


function Btn() {
  const { count, setCount} = useCountContext();
  const { lang } = useLangContext();
  return (
    <>
        <h2>{ lang === true ? 'Press to increase' : 'Pulsa para incrementar'}</h2>
        <button onClick={() => setCount(count + 1)}>
        { lang === true ? 'Increase' : 'Incrementar'}
        </button>

    </>
  )
}

export default Btn