import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

function Header() {
    const [ categories, setCategories ] = useState([]);
    
    useEffect(()=> {
      getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    
  return (
    <div className='container mx-auto mb-8 px-10'>
        {/* py: padding vertical axis; md: medium devices; xl: extra large*/}
        <div className='border-b-2 w-full inline-block border-yellow-800 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-5xl text-black'>
                         Vintage Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
               {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-black text-lg bg-yellow-50 px-4 ml-4 font-semibold cursor-pointer'>
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