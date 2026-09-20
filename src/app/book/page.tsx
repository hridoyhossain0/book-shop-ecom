import React from 'react';
import BookCard from '../components/HomePage/BookCard';

const getBook = async () => {
    const res = await fetch('http://localhost:4000/books');
    return res.json();
}

const BookPage = async () => {
    const books = await getBook();

    return (
        <div className='container mt-7 mx-auto'>
            <div className='grid grid-cols-3  gap-3.5'>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default BookPage;