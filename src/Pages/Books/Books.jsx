import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks,setAllBooks]=useState([])

    // useEffect(()=> {
    //     fetch('/bookData.json').then(res => res.json()).then(data => {
    //         setAllBooks(data)
    //     })
    // },[])

    return (
      <div>
        <h2 className="text-2xl font-bold text-center p-5">Books</h2>
        <Suspense fallback={<span>Loading....</span>}>
          <div className='  grid grid-cols-1 md:grid-cols-3'>
            {data.map((singleBook) => (
              <Book singleBook={singleBook} key={singleBook.bookId}></Book>
            ))}
          </div>
        </Suspense>
      </div>
    );
};

export default Books;