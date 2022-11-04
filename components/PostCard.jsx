import React from 'react';
import moment from 'moment'; // moment is to format the date
import Link from 'next/link';

function PostCard({ post }) {
  // console.log(post)
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      {/* below is for images */}
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src={post.featuredImage.url} alt={post.title}
      className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>
    <h1 className="transition duration-400 text-center mb-8 cursor-pointer
    hover:text-gray-600 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`} key={post.title}>
        {post.title}
      </Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 item-center">
        <img 
            className="align-middle rounded-full"
            src={post.author.photo.url} 
            alt={post.author.name}
            height="35px" width="35px"
        />
        <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
      </p>
      <div className="text-right">
        <Link href={`/post/${post.slug}`} key={post.title}>
          <span className="transition duration-400 ease transform hover:-translate-y-1.5 inline-block bg-yellow-500 text-sm font-light rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard