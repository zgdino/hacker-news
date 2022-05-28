import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()
  // in case of loading being true display spinner; search for class loading in css file
  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} |</span> {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                className='remove-btn'
                // when remove button clicked it will trigger remove story functionality set up in context.js
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
