import React, { useState } from 'react'
import { saveProduit } from '../app/app'

const NewProduit = () => {
  const [inputs,setInputs]=useState({name:'',price:0,checked:false})
  const handleChangeProduit = (event)=>{
    const {name,value,type,checked}=event.target
    const inputvalue= type==='checkbox'?checked:value
    setInputs({...inputs,[name]:inputvalue})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs)
    console.log(inputs)
    saveProduit(inputs)
    .then(res=>{
    })
  }
  return (
    <div className='row mt-2 p-1'>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" className='form-control' name="name" onChange={handleChangeProduit} value={inputs.name}/>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className='form-label'>Price</label>
                <input type="text" className='form-control' name="price" onChange={handleChangeProduit} value={inputs.price}/>
              </div>
              <div className="form-check">
                <input type="checkbox" className='form-check-input' name="checked" onChange={handleChangeProduit} checked={inputs.checked} />
                <label htmlFor="checked" className='form-check-label'>Checked</label>
              </div>
              <button className='btb btn-success'>Save</button>
            </form>
          </div>
        </div>


      </div>
    </div>
  )
}

export default NewProduit
