import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';

function Carousel({ posts }) {
  return (
    <div
      id="featuredPosts"
      className="carousel carousel-dark slide carousel-fade relative bg-yellow-800/50 mb-10"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {posts.map((post, index) => {
          if (index === 0) {
            return (
              <button
                type="button"
                data-bs-target="#featuredPosts"
                data-bs-slide-to={`${index}`}
                className="active"
                aria-current="true"
                aria-label={`Slide ${index + 1}`}
              ></button>
            );
          } else {
            return (
              <button
                type="button"
                data-bs-target="#featuredPosts"
                data-bs-slide-to={`${index}`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            );
          }
        })}
      </div>
      <div className="carousel-inner">
        {posts.map((post, index) => {
          if (index === 0) {
            return (
              <div
                className="carousel-item align-center active "
                data-bs-interval="10000"
              >
                <div className="m-auto">
                  <img
                    src={post.featuredImage.url}
                    className="d-block object-cover"
                    alt={post.title}
                    height="600px"
                    width="800px"
                  />
                </div>
                <div className="carousel-caption mb-6 d-none d-md-block">
                  <h3 className="inline-flex bg-white p-2">{post.title}</h3>
                  <p className="inline-flex bg-white pl-6 p-2">
                    by {post.author.name}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="carousel-item align-center"
                data-bs-interval="2000"
              >
                <div className="m-auto">
                  <img
                    src={post.featuredImage.url}
                    className="d-block object-cover"
                    alt={post.title}
                    height="600px"
                    width="800px"
                  />
                </div>
                <div className="carousel-caption mb-6 d-none d-md-block">
                  <h3 className="inline-flex bg-white p-2">{post.title}</h3>
                  <p className="inline-flex bg-white pl-6 p-2">
                    by {post.author.name}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#featuredPosts"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#featuredPosts"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
