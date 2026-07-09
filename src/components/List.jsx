import {useContext} from 'react'
import { Context } from '../context/Context'
import Deletebutton from './Deletebutton'

const List = () => {

    const {todo} = useContext(Context)

  return (
    <div className='list-section'>
        {todo.map((item)=>(
            <div className="content">
                  <ul key={item.id} >
                    <li  className='list-item'>{item.todo}</li>
                  </ul>
                  <Deletebutton id={item.id} />
            </div>
          
        ))}
    </div>
  )
}

export default List
