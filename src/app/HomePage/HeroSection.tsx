import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="container my-5 mx-auto  bg-gray-400 rounded-3xl p-[3em]">
            <div className='lg:flex justify-between'>
                <div className="space-y-8 self-center">
                    <p className="text-5xl ">Books to freshen up <br /> your bookshelf</p>
                    <button className="btn bg-green-400 border-0">View The List</button>
                </div>
                <div>
                    <Image src='https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg' width={300} height={600} alt="book pic"></Image>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;