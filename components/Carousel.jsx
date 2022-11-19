import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Carousel () {
    return (
        <div id="theCarousel" className="carousel slide" data-ride='carousel'>
            <ol className='carousel-indicators'>
                <li data-target='#theCarousel'></li>
                <li data-target='#theCarousel'></li>
            </ol>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <h1>Feature Posts</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='carousel-container'>
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;