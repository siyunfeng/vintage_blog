import React from 'react'
import Image from 'next/image'

function Author( { author }) {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-35">
      <div className="absolute left-0 right-0 -top-12">
        <Image
          className="align-middle rounded-full"
          unoptimized
          src={author.photo.url}
          alt={author.name}
          height="110"
          width="110"
        />
      </div>
        <h2 className="m-2 text-lg font-bold">{author.name}</h2>
        <p className="text-left px-4 m-6">{author.bio}</p>
    </div>
  )
}

export default Author