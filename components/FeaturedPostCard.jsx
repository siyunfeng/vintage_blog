import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment/moment';


function FeaturedPostCard({ featuredPosts }) {
    const posts = featuredPosts;
    console.log('post in FeaturedPostCard post =', posts)
    return <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner relative w-full overflow-hidden">
      <div className="carousel-item active float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          className="block w-full"
          alt="Wild Landscape"
        />
      </div>
      <div className="carousel-item float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          className="block w-full"
          alt="Camera"
        />
      </div>
      <div className="carousel-item float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          className="block w-full"
          alt="Exotic Fruits"
        />
      </div>
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
  </div>


     {/* return <div>
     {posts.map((featuredPost, index) => {
        const post = featuredPost.node;
        return (
        <div>
        <div>{post.author.name}</div>
        <img src={post.author.photo.url} 
        height='80px' width='80px'/>
        <div>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
        <div>{post.slug}</div>
        <div>{post.title}</div>
        <img src={post.featuredImage.url} className='object-fit-cover'
        height='600px' width='800px' />
</div>
     )
     })}
    </div> */}

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