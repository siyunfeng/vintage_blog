import React, { useContext } from 'react';
import Link from 'next/link';

const categories = [{name: 'React', slug: 'react'}, {name: 'Web Development', slug: 'web-dev'}]

function Header() {
  return (
    <div className='container mx-auto mb-8 px-10'>
        {/* py: padding vertical axis */}
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            {/* md: medium devices */}
            <div className='md:float-left block'>
                <Link href='/'>
                    {/* xl: extra large */}
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                         Vintage Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
               {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                    {category.name}
                </span>
                </Link>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Header