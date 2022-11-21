// this is for displaying all the posts from the same category
import React from 'react';
import { useRouter } from 'next/router';
import { PostCard, Categories } from '../../components';
import { getPostsByCategory, getCategories } from '../../services';

function PostsByCategory({ posts }) {
  //   console.log('PostsByCategory >>>> posts =', posts);
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Posts are loading...</h2>;
  }

  const categoryHasPosts = posts.length > 0;

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {categoryHasPosts ? (
            posts.map((post, index) => <PostCard key={index} post={post} />)
          ) : (
            <div className="inline bg-white text-xl p-6 rounded-3xl shadow-xl">
              This category does not have any posts yet.
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// fetch data using getStaticProps in next.js:
export async function getStaticProps({ params }) {
  const posts = await getPostsByCategory(params.slug);
  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostsByCategory;
