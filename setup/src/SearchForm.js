import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()
  return (
    // on submit prevent default behaviour of refreshing every time submitted
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
    </form>
  )
}

export default SearchForm
