import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment/moment';


function FeaturedPostCard({ featuredPosts }) {
    const posts = featuredPosts;
    return (<div id="carouselFeaturedPosts" className="carousel slide carousel-fade carousel-dark relative mb-10" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            {posts.map((featuredPost, index) => {
                const post = featuredPost.node;
                if (index === 0) {
                    return (<button
                    type="button"
                    data-bs-target="#carouselFeaturedPosts"
                    data-bs-slide-to={`${index}`}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                    ></button>)
                } else {
                    return (<button
                    type="button"
                    data-bs-target="#carouselFeaturedPosts"
                    data-bs-slide-to={`${index}`}
                    aria-label={`Slide ${index + 1}`}
                    ></button>)
                }
                })}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden object-cover ">
            {posts.map((featuredPost, index) => {
                const post = featuredPost.node;
                if (index === 0) {
                    return  (<div className="carousel-item active float-left w-full h-[900px]">
                        <img
                        src={post.featuredImage.url}
                        className="block w-full"
                        alt={post.title}
                        />
                        </div>) 
                } else {
                    return  (<div className="carousel-item float-left w-full ">
                    <img
                    src={post.featuredImage.url}
                    className="block w-full"
                    alt={post.title}
                    />
                    </div>)
                }
                })}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselFeaturedPosts"
          data-bs-slide="prev"
        >
              <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselFeaturedPosts"
          data-bs-slide="next"
        >
              <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>)

}

export default FeaturedPostCard