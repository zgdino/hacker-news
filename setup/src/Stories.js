import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading } = useGlobalContext()
  // in case of loading being true display spinner; search for class loading in css file
  if (isLoading) {
    return <div className='loading'></div>
  }

  return <h2>stories component</h2>
}

export default Stories
