import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {isLoading, page, nbPages, hnadlePage} = useGlobalContext()
  return <div className="btn-container">
    {/* button is shortly disabled and cursor changes(look index.css) every time loading is true */}
    <button disabled={isLoading} onClick={() => hnadlePage('dec')}>
      prev
    </button>
    <p></p>
  </div>
}

export default Buttons
