import {useContext,React} from 'react'
import { Context } from '../context/Context'

const Input = () => {
    const {handelChange, input} = useContext(Context)
  return (
    <div className='input-section'>
        <input type="text" placeholder='to do' onChange={handelChange} value={input}/>
    </div>
  )
}

export default Input
