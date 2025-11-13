import React from "react";
import app from "../../assets/demo-app (1).webp";
import { ArrowDownToLine, MessageSquareHeart, Star } from "lucide-react";

const AppDetails = () => {
  return (
    <div className="my-20">
      <div className="flex items-center gap-5">
        <div>
          <img src={app} alt="" />
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-bold">SmPlan: ToDo List with Reminder</h3>
          <p>
            Developed by <span className="text-indigo-500">productive.io</span>
          </p>
          <hr className="border border-gray-200 my-3" />
          <div className="flex gap-30">
            <div className="space-y-4">
              <ArrowDownToLine className="text-green-400" />
              <p>Downloads</p>
              <h2 className="text-4xl font-bold">8M</h2>
            </div>

            <div className="space-y-4">
              <Star width="20px" className="text-yellow-500" />
              <p>Average Ratings</p>
              <h2 className="text-4xl font-bold">4.9</h2>
            </div>
            <div className="space-y-4">
              <MessageSquareHeart className="text-indigo-500" />
              <p>Total Reviews</p>
              <h2 className="text-4xl font-bold">54K</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
