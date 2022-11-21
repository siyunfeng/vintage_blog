import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

function Comments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <div>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comment(s)
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 mb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                {' on '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              {/* whitespace-pre-line: to preserve newlines but not spaces within an element. 
                Text will be wrapped normally. */}
              <p className="whitespace-pre-line text-gray-700 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comments;
