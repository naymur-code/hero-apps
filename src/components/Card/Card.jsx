import { ArrowDownToLine, Star } from "lucide-react";
import app from '../../assets/demo-app (1).webp'
import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          src={app}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Forest: Focus for Productivity</h2>

        <div className="card-actions justify-between">
          <button className="btn btn- text-green-400">
            <ArrowDownToLine width="20px" /> 9M
          </button>
          <button className="btn btn-sm text-yellow-500">
            <Star width="20px" /> 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
