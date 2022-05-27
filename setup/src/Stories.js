import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits } = useGlobalContext()
  // in case of loading being true display spinner; search for class loading in css file
  if (isLoading) {
    return <div className='loading'></div>
  }
  console.log(hits);
  return (
    <section className='stories'>
      {hits.map((story) => {
        console.log(story)
        return <article className='story'>single story</article>
      })}
    </section>
  )
}

export default Stories
