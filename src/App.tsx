import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import FormModal from './components/modals/formModal'

function App() {
  const [addBtn,setAddBtn] = useState(false)
  return (
    <>
      <div
      className='m-5'
      >
        <button
        className='border-2'
        onClick={()=>setAddBtn(true)}
        > <FontAwesomeIcon icon={faPlus} /> create new form</button>
      </div>
      <div>
        <FormModal
        isOpen={addBtn}
        onClose={()=>setAddBtn(false)}
        />
      </div>
    </>
  )
}

export default App
