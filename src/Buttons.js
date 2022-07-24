import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {isLoading, page, nbPages, handlePage} = useGlobalContext()
  return (
    <div className='btn-container'>
      {/* button is shortly disabled and cursor changes(look index.css) every time loading is true */}
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>{page + 1} of {nbPages}</p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  )
}

export default Buttons
