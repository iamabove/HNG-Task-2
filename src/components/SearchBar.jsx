import React from 'react'
import { Form } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'


const SearchBar = () => {
  return (
    <Form>
    <div className='position-relative'>
        <input type="text" placeholder='What do you want to watch'/>
        <div className='position-absolute searchdiv'>
           <FiSearch size={20} color='white'/> 
        </div>
    </div>
    </Form>
  )
}

export default SearchBar