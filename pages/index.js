import Head from 'next/head';
import {
  PostCard,
  Categories,
  PostWidget,
  FeaturedPostCard,
} from '../components';
import { getPosts, getFreaturedPosts } from '../services';
import { FeaturedPosts } from '../sections';
import Carousel from '../components/Carousel';

export default function Home({ posts, featuredPosts }) {
  return (
    // mx: margin horizontal axis; px: padding horizontal axis; mb: margin bottom; col: column; lg: large
    <div className="container mx-auto px-10 mb-8">
      {/* <FeaturedPostCard featuredPosts={featuredPosts} /> */}
      <Carousel featuredPosts={featuredPosts} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.reverse().map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// fetch data using getStaticProps in next.js:
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const featuredPosts = (await getFreaturedPosts()) || [];
  return {
    props: { posts, featuredPosts },
  };
}
