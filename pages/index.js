import Head from 'next/head';
import { PostCard, Categories, PostWidget, Carousel } from '../components';
import { getPosts } from '../services';
// import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  return (
    // <div className={styles.container}>
    // mx: margin horizontal axis; px: padding horizontal axis; mb: margin bottom
    // {styles.container}
    <div className="container mx-auto px-10 mb-8">
      {/* <FeaturedPosts /> */}
      <div className="carousel mb-10">
        <Carousel />
      </div>
      {/* col: column; lg: large */}
      {/* {styles.grid} */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
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
  return {
    props: { posts },
  };
}
