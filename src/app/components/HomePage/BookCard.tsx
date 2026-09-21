import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiStar } from 'react-icons/fi';

const BookCard = ({ book }) => {

    const { id,
        title,
        author,
        category,
        price,
        rating,
        thumbnail,
        tags = [], } = book;

    return (

        <>

            <Link
                href={`/book/${book.id}`}
                className="block rounded-2xl border border-gray-200 bg-white p-4 transition-shadow duration-300 hover:shadow-lg"
            >
                {/* Book Cover */}
                <div className="flex h-40 items-center justify-center rounded-xl bg-gray-100 p-4">
                    <div className="relative h-full w-full">
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 250px"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Title */}
                <h2 className="mt-3 line-clamp-2 text-xl font-semibold text-gray-900">
                    {title}
                </h2>

                {/* Author */}
                <p className="mt-2 text-sm text-gray-600">
                    By : {author}
                </p>

                {/* Divider */}
                <div className="my-3 border-t border-dashed border-gray-300" />

                {/* Category and Rating */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{category}</span>

                    <div className="flex items-center gap-2">
                        <span>{rating.toFixed(2)}</span>
                        <FiStar className="h-4 w-4 text-gray-700" />
                    </div>
                </div>

                {/* Price */}
                <p className="mt-3 text-lg font-bold text-gray-900">
                    ৳{price}
                </p>
            </Link>

        </>

    );
};

export default BookCard;