import React from 'react'

import{ CountContext } from '../context/CountContext'
import { useCountContext } from '../context/CountContext';
import { useLangContext } from '../context/LangContext'
function Counter() {
  const {count} = useCountContext();
  const { lang } = useLangContext();
  return (
    <>
        <h2>{ lang === true ? 'Counter' : 'Contador'}</h2>
        <p>{count}</p>
    </>
  )
}

export default Counter