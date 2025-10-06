import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)

    const {
      image,
      bookName,
      author,
      category,
      review,
      tags,
      totalPages,
      publisher,
      yearOfPublishing,
      rating,
    } = singleBook;


    const handleMarkAsRead =(id)=>{

        addToStoredDB(id)

       MySwal.fire({
         title: "Custom width, padding, color, background.",
         width: 600,
         padding: "3em",
         color: "#716add",
         background: "#fff url(/images/trees.png)",
         backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
       });
    }


    return (
      <div className="flex justify-between items-center gap-5 ">
        <div className="flex-1 bg-gray-200 p-11 rounded-md">
          <img className="h-[400px] mx-auto p-4" src={image} alt="" />
        </div>
        <div className="flex-1 mt-9">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <div className="divider "></div>
          <p>{category}</p>
          <div className="divider "></div>
          <p>
            <b>Review:</b>
            {review}
          </p>

          <div className="flex justify-center items-center gap-6">
            {tags.map((tag) => (
              <button className="btn bg-green-100 rounded-lg">#{tag}</button>
            ))}
          </div>
          <div className="divider divider-neutral"></div>
          <p className="mt-2">Number Of Pages: {totalPages}</p>
          <p className="mt-2">
            Publisher: <b>{publisher}</b>
          </p>
          <p className="mt-2">
            Year Of Publishing: <b>{yearOfPublishing}</b>
          </p>
          <p className="mt-2">Rating: {rating}</p>

          <button onClick={()=>handleMarkAsRead(id)} className="btn mr-3 mt-4">
            Mark As Read
          </button>
          <button className="btn bg-[#50B1C9] mt-4 text-white">
            Add To Wishlist
          </button>
        </div>
      </div>
    );
};

export default BookDetails;