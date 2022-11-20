import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment/moment';


function FeaturedPostCard({ featuredPosts }) {
    const posts = featuredPosts;
    console.log('post in FeaturedPostCard post =', posts)
    return (<div id="carouselExampleIndicators" className="carousel slide relative mb-10" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            {posts.map((featuredPost, index) => {
                const post = featuredPost.node;
                if (index === 0) {
                    return (<button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={`${index}`}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                    ></button>)
                } else {
                    return (<button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={`${index}`}
                    aria-label={`Slide ${index + 1}`}
                    ></button>)
                }
                })}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
            {posts.map((featuredPost, index) => {
                const post = featuredPost.node;
                if (index === 0) {
                    return  (<div className="carousel-item active float-left w-full">
                        <img
                        src={post.featuredImage.url}
                        className="block w-full"
                        alt={post.title}
                        />
                        </div>) 
                } else {
                    return  (<div className="carousel-item float-left w-full">
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
              <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
              <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>)


{/*  (    <div className='relative h-72'>
         <div className='absolute h-72 w-full inline-block rounded-lg bg-center bg-no-repeat bg-cover shadow-md' style={{ backgroundImage: `url('post.featuredImage.url')`}}>
             <div className='absolute h-72 w-full rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black'>
                     {posts.map((post) => (
                 <div className='flex flex-col absolute h-full w-full p-4 rounded-lg items-center justify-center'>
                        <p className='text-xs text-white text-shadow font-semibold mb-4'>
                         {moment(post.node.createdAt).format('MMM DD, YYYY')}
                     </p>
                     <p className='text-2xl text-white text-shadow font-semibold mb-4'>
                         {post.node.title}
                     </p>
                     <div className='flex absolute w-full items-center justify-center bottom-4'>
                         <Image 
                         className='align-middle drop-shadow-lg rounded-full'
                         src={post.author.photo.url}
                         alt={post.author.name}
                         unoptimized height='30px' width='30px'
                          />
                          <p className='inline text-white font-medium text-shadow align-middle ml-2'>
                             {post.author.name}
                          </p>
                     </div> 
                 </div>
                     ))}
                    
                 <Link href={`/post/${post.node.slug}`}><span className='absolute h-full w-full cursor-pointer'></span></Link>
             </div>
         </div>
     </div>) */}
}

export default FeaturedPostCard