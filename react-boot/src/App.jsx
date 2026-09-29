import { useState } from 'react'
import './App.css'
import { UseRefHook } from './hooks/useref/UseRef-hook'
import { UseMemoEx } from './hooks/useMemo/UseMemoEx'
function App() {

  return (
    <>
      <div className='overflow-y'>
        <UseRefHook />
        <UseMemoEx/>
      </div>
    </>
  )
}

export default App
