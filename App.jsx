import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const getValueInput = document.querySelector('.inputTextInput')

function Appp(){
  const [count,setCount] = useState()
  const element = <div className='toDoElement'>
  <p className='valueToDoElem'> hell</p><button className='deliteToDoElement'>delite</button>  </div>
  return(
<>
  <div className='bodySaut'>
<div className='header'>
<p className='zagalovoc'>TO-DO-LIST</p>
</div>
<div className='inputTextVvod'>
  <input className='inputTextInput'></input>
  <button className='pushToDoList'
    onClick ={()=>setCount((count)=>element)}  >
    ADD
  </button>
</div>
<div className='TO-DO-LIST'></div>
{count}
  </div>

</>
  )
}





export default Appp
