import { useState } from 'react'
import './App.css'
import { UseRefHook } from './hooks/useref/UseRef-hook'
import { UseMemoEx } from './hooks/useMemo/UseMemoEx'
import { Parent } from './hooks/useCallBack/Parent'
function App() {

  return (
    <>
      <div className='overflow-y'>
        <UseRefHook />
        <UseMemoEx/>
        <Parent/>
      </div>
    </>
  )
}

export default App
