import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

/* useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of the component. */

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  function handleCommentSubmission() {
    setError(false);
    const { value: comment} = commentEl.current;
    const { value: name} = nameEl.current;
    const { value: email} = emailEl.current;
    const { checked: storeData} = storeDataEl.current;

    if (!comment || !name || !email) {
      return setError(true);
    }

    const commentObj = { comment, name, email, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj).then((res) => {
      setSuccessMessage(true);
      setTimeout(()=> {
        setSuccessMessage(false);
      }, 3000)
    })
  }
  
  // same as componentDidMount() but it will accept a second argument to decide when to run if the argument value changed
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
        </h3>
        <p>Your email address will not be published. Required fields are marked *</p>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea ref={commentEl}
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment *" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input type="text" ref={nameEl}
            className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name *" name="name" />
          <input type="email" ref={emailEl}
            className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
            <label htmlFor="storeData" className="text-yellow-700 cursor-pointer ml-2">
              I'd like to save my name & email for next time. 
              </label>
          </div>
        </div>
        {error && <p className="text-xs text-red-500">
          All fields are required.
          </p>}
        <div className="mt-8">
          <button type="button" onClick={handleCommentSubmission}
            className="transition duration-500 ease inline-block bg-yellow-500 text-lg px-4 py-2  rounded-full hover:-translate-y-1">
              Submit
          </button>
          {successMessage && <span className="text-xl float-right font-semibold m-2 text-green-500">Comment submitted for review.</span>}
        </div>
    </div>
  )
}

export default CommentsForm