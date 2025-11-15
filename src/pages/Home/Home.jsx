import { Suspense } from "react";
import Hero from "../../components/Hero/Hero";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const apps = fetch("/apps.json").then((res) => res.json());
const Home = () => {
  const appsPromise = apps;

  return (
    <div>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="flex justify-center p-5">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <TrendingApps appsPromise={appsPromise}></TrendingApps>
      </Suspense>
    </div>
  );
};

export default Home;
