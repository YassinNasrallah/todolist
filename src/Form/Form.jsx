import {useContext} from 'react'
import Input from '../components/Input'

import Addbutton from '../components/Addbutton'

const Form = () => {
  return (
          <form className='form-section'>
             <Input />
             <Addbutton />
          </form>
  )
}

export default Form
