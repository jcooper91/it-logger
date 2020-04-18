import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if(firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the First and Lastname of the tech' })
    } else {
      console.log(firstName, lastName)
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id='add-tech-modal' className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="firstName" value={firstName} onChange={ e => firstName(e.target.value) } />
            <label htmlFor="firstName" className="active">First name</label>
          </div>
        </div>
        
        <div className="row">
          <div className="input-field">
            <input type="text" name="lastName" value={lastName} onChange={ e => lastName(e.target.value) } />
            <label htmlFor="lastName" className="active">Last name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">
          Enter
        </a>
      </div>
    </div>
  )
}

export default AddTechModal
