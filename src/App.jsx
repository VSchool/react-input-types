import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    theme: '',
    contact: '',
    message: '',
    isChecked: false
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
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

        <select
          name='theme'
          value={formData.theme}
          onChange={handleChange}
        >
          <option value=''>Choose Theme</option>
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
        </select>

        <p>Choose Preferred Contact Method</p>

        <label>
          Email
          <input
            type='radio'
            name='contact'
            value='Email'
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            type='radio'
            name='contact'
            value="Phone"
            onChange={handleChange}
          />
        </label>

        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Message...'
          rows='5'
        />
        <input
          type='checkbox'
          name='isChecked'
          checked={formData.isChecked}
          onChange={handleChange}
        ></input>
      </form>
    </>
  )
}

export default App
