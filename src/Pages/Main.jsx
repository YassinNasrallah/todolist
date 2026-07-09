import {useState, useRef} from 'react'
import { Context } from '../context/Context'
import Title from '../components/Title'
import Form from '../Form/Form'
import List from '../components/List'
import '../style/Main.css'


const Main = () => {
    
    const [todolist, settodolist] = useState([])
    const [input, setinput] = useState('')

    const  nextId = useRef(1)
    
    const handelChange=(event)=>{
       setinput(event.target.value)
    }

    const handeldelete =(id)=>{
      settodolist((todo)=>todo.filter((item)=>item.id !==id))
    }
     
    
    const handleadd =()=>{
      if(input === '') return
         settodolist((prev)=>[
        ...todolist,

         {
          id:nextId.current ,
          todo:input
        }
       ]
       
      )
      nextId.current ++
      setinput('')
    }
  return (
    <div className='todo-card'>
       <Title />
       <Context.Provider
         value={{handelChange,
           todo:todolist,
           input:input,
           handleadd,
           handeldelete,
         }}
       >
          <Form />
          <List />
       </Context.Provider>
       
    </div>
  )
}

export default Main
