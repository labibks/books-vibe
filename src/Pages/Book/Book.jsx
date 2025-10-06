import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    const { bookName, image, bookId, category, rating, publisher,yearOfPublishing,tags } = singleBook;
    return (
      <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-[300px] shadow-sm mt-3 p-3 border border-gray-100">
          <figure className="bg-gray-100 p-6">
            <img className="h-[150px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center items-center gap-6">
              {
              tags.map((tag) => (
                <button className="btn bg-green-100 rounded-lg">{tag}</button>
              ))
              }
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>Published By: {publisher}</p>
            <div className="border-t-1 border-dashed"></div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline border-none">{category}</div>
              <div className="badge badge-outline border-none">
                {rating}
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Book;