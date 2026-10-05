import { useState } from 'react'
import './App.css'
import { UseRefHook } from './hooks/useref/UseRef-hook'
import { UseMemoEx } from './hooks/useMemo/UseMemoEx'
import { Parent } from './hooks/useCallBack/Parent'
import { Main } from './hooks/customHook/Main'
import { CartContainer } from './components/CartWithContext/CartContainer'
function App() {

  return (
    <>
      <div className='overflow-y'>
        <UseRefHook />
        <UseMemoEx/>
        <Parent/>
        <Main/>

        <CartContainer/>
      </div>
    </>
  )
}

export default App
