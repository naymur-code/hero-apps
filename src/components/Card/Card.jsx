import { ArrowDownToLine, Star } from "lucide-react";
// import app from '../../assets/demo-app (1).webp'
import React from "react";
import { Link } from "react-router";

const Card = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <Link to={`/app-details/${id}`}>
      <div className="card bg-base-100 shadow-sm cursor-pointer">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title mx-auto">{title}</h2>

          <div className="card-actions justify-between">
            <button className="btn btn- text-green-400">
              <ArrowDownToLine width="20px" /> {downloads}
            </button>
            <button className="btn btn-sm text-yellow-500">
              <Star width="20px" /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
