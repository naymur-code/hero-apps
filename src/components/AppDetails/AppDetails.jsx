import { ArrowDownToLine, MessageSquareHeart, Star } from "lucide-react";
import { useLoaderData, useParams } from "react-router";
import { addItem } from "../../utility/AddToLS";
import { useState } from "react";

const AppDetails = () => {
  const [disable, setDisable] = useState(false);
  const apps = useLoaderData();

  const id = parseInt(useParams().id);

  const selectApp = apps.find((app) => app.id === id);

  const { image, title, downloads, ratingAvg, reviews } = selectApp;

  console.log(apps, id);

  return (
    <div className="my-20">
      <div className="flex items-center gap-5">
        <div>
          <img src={image} alt="" className="md:w-80" />
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>
            Developed by <span className="text-indigo-500">productive.io</span>
          </p>
          <hr className="border border-gray-200 my-3" />
          <div className="flex gap-30">
            <div className="space-y-4">
              <ArrowDownToLine className="text-green-400" />
              <p>Downloads</p>
              <h2 className="text-4xl font-bold">{downloads}</h2>
            </div>

            <div className="space-y-4">
              <Star width="20px" className="text-yellow-500" />
              <p>Average Ratings</p>
              <h2 className="text-4xl font-bold">{ratingAvg}</h2>
            </div>
            <div className="space-y-4">
              <MessageSquareHeart className="text-indigo-500" />
              <p>Total Reviews</p>
              <h2 className="text-4xl font-bold">{reviews}</h2>
            </div>
          </div>
          <button
            onClick={() => {
              addItem(selectApp.id);
              setDisable(true);
            }}
            class="btn btn-success my-5 text-white"
            disabled={disable}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
