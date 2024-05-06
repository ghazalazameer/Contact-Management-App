import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChart from "../ApexLineChart";
import LeafletMap from "../LeafletMap";
import Sidebar from "../Sidebar";
import { useQuery } from "react-query"; // deals with server-side data fetching.

const Charts = () => {
  const [content, setContent] = useState(true);

  const toggle = () => {
    setContent(!content);
  };

  // Used the useQuery hook to fetch data from the URL and destructures the result into data, error, and isLoading variables.
  const {
    data: data,
    error: error,
    isLoading: isLoading,
  } = useQuery("getGraphData", async () => { // The useQuery hook takes two arguments: a unique key (getGraphData: identifying the query) and an async function that fetches the data.
    const res = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return res.json();
  });

  console.log(data, "line graph data using react query");

  const [cases, setCases] = useState([] as any);
  const [deaths, setDeaths] = useState([] as any);
  const [recovered, setRecovered] = useState([] as any);

  const getData = async () => {
    axios // fetches data from the URL and sets the data to the respective state variables.
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        let { cases, deaths, recovered } = response.data;

        // The data is then mapped to an array of objects with x and y properties.
        let casesDataPoints = [] as any; 
        let deathsDataPoints = [] as any;
        let recoveredDataPoints = [] as any;

        Object.entries(cases).map((item) =>
          casesDataPoints.push({ x: item[0], y: item[1] })
        );

        Object.entries(deaths).map((item) =>
          deathsDataPoints.push({ x: item[0], y: item[1] })
        );

        Object.entries(recovered).map((item) =>
          recoveredDataPoints.push({ x: item[0], y: item[1] })
        );

        setCases(casesDataPoints);
        setDeaths(deathsDataPoints);
        setRecovered(recoveredDataPoints);
        // console.log(recoveredDataPoints);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  if (error) {
    return <p>Error occured</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex lg:flex-row flex-col">
      <Sidebar />
      <div className="lg:w-[1190px] w-full flex flex-col justify-center items-center">
        {content ? (
          <div className="flex items-center gap-5">
            <p className="p-4 text-lg text-cyan uppercase cursor-pointer font-medium">
              Line Graph
            </p>
            <p
              className="p-4 text-lg text-primary uppercase cursor-pointer font-medium"
              onClick={toggle}
            >
              Leaflet Map
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <p
              className="p-4 text-lg text-primary uppercase cursor-pointer font-medium"
              onClick={toggle}
            >
              Line Graph
            </p>
            <p className="p-4 text-lg text-cyan uppercase ursor-pointer font-medium">
              Leaflet Map
            </p>
          </div>
        )}

        {content ? (
          <div className="w-full">
            <LineChart cases={cases} deaths={deaths} recovered={recovered} />
          </div>
        ) : (
          <>
            <LeafletMap />
          </>
        )}
      </div>
    </div>
  );
};

export default Charts;