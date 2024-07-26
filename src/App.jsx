import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    theme: '',
    canContact: false,
    contact: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  console.log(formData)

  return (
    <>
      <form>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
        />
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Age'
        />

        {/* Select/Option */}


        {/* Checkbox */}


        {/* Radio */}


        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Message...'
          rows='5'
        />
      </form>
    </>
  )
}

export default App
