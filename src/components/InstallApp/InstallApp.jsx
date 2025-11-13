import { ArrowDownToLine, Star } from "lucide-react";
import React from "react";

const InstallApp = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-between shadow border-1 p-4 border-gray-200">
      <div className="md:flex gap-4">
        <div className="md:w-30">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt=""
          />
        </div>
        <div className="space-y-3 mt-5 md:mt-0 ">
          <h4 className="text-2xl text-center">Forest: Focus for Productivity</h4>
          <div className="flex gap-5 md:justify-start justify-center">
            <div className="flex gap-2 text-green-400">
              <ArrowDownToLine width="20px" /> 9M
            </div>
            <div className="flex gap-2 text-yellow-500">
              <Star width="20px" /> 5
            </div>
            <p className="text-gray-400">258 MB</p>
          </div>
        </div>
      </div>
      <button class="btn btn-success text-white">Uninstall</button>

    </div>
  );
};

export default InstallApp;
