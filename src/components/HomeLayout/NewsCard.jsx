import React from "react";
import {
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaEye,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(author.published_date).toDateString();

  return (

    <div className="card bg-base-100 shadow-md">

      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-bold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-4 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>

      </div>

      {/* Body */}

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-4">
          {title}
        </h2>

        <img
          src={image_url}
          alt=""
          className="rounded-xl w-full h-64 object-cover"
        />

        <p className="mt-5 text-gray-600">
          {details.length > 200
            ? details.slice(0, 200) + "..."
            : details}

          <span className="text-orange-500 font-semibold cursor-pointer ml-2">
            Read More
          </span>
        </p>

        <div className="divider"></div>

        {/* Footer */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-1">

            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating.number
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}

            <span className="ml-2 font-semibold">
              {rating.number}
            </span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default NewsCard;