import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits } = useGlobalContext()
  // in case of loading being true display spinner; search for class loading in css file
  if (isLoading) {
    return <div className='loading'></div>
  }
  console.log(hits)
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return <article key={objectID} className='story'>
          <h4 className="title">{title}</h4>
          <p className="info">{points} points by <span>{author} |</span> {num_comments}{' '} comments</p>
        </article>
      })}
    </section>
  )
}

export default Stories
