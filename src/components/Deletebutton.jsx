import {useContext} from 'react'
import { Context } from '../context/Context'

const Deletebutton = ({id}) => {
  const {handeldelete} = useContext(Context)
  return (
    <button className='deletbutton' type='button' onClick={()=>handeldelete(id)}>X</button>
  )
}

export default Deletebutton
