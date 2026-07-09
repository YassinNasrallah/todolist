import {useContext} from 'react'
import { Context } from '../context/Context'

const Addbutton = () => {

  const {handleadd} = useContext(Context)
  return (
    <button className='add-btn' type='button' onClick={handleadd}>Add</button>
  )
}

export default Addbutton
