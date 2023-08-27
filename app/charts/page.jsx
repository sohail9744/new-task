"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Chart from "chart.js";

const CovidChart = () => {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://disease.sh/v3/covid-19/all");
        const data = await res.json();
        setCovidData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (covidData) {
      createChart();
    }
  }, [covidData]);

  const createChart = () => {
    const ctx = document.getElementById("covidChart").getContext("2d");

    new window.Chart(ctx, {
      type: "line",
      data: {
        labels: ["Cases", "Deaths", "Recovered"],
        datasets: [
          {
            label: "COVID-19 Data",
            data: [covidData.cases, covidData.deaths, covidData.recovered],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
          },
        ],
      },
    });
  };

  return (
    <>
      <SideBar />
      <main className="w-full">
        <canvas id="covidChart" />
      </main>
    </>
  );
};

export default CovidChart;