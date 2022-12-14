import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  // useEffect only run whenever slug changes
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  // console.log('POST', relatedPosts, setRelatedPosts)
  const hasPost = relatedPosts.length > 0;

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {hasPost ? (
        relatedPosts.map((post, index) => (
          <div key={index} className='flex item-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <img
                className='align-middle rounded-full object-cover'
                src={post.featuredImage.url}
                alt={post.title}
                // height="60px"
                // width="60px"
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-600 font-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link
                href={`/post/${post.slug}`}
                key={index}
                className='text-yellow-700 text-md hover:underline underline-offset-8'
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>There is no related posts yet. </div>
      )}
    </div>
  );
}

export default PostWidget;

/* 
useState() returns an array, and you can access and use those array values inside your component using array destructuring.
The first item in the array is the state,
The second item in the array is a function to update the value, usually use "setNameOfTheStateVariable".
useState() can take one argument as the initial value of the state

function  vs  class
useState() => setState()
useEffect() => componentDidMount()

No dependency passed:
useEffect(() => {
  //Runs on every render
});

An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
*/
