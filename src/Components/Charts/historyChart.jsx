import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const TChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Figure 1",
          data: [200, 230, 240, 210, 270, 360, 280, 240, 290, 300, 250],
        },
        {
          name: "Figure 2",
          data: [76, 30, 10, 88, 66, 65, 20, 30, 70, 90, 40],
        },
        {
          name: "Figure 3",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 41, 89],
        },
        {
          name: "Figure 4",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 82, 98],
        },
        {
          name: "Figure 5",
          data: [35, 41, 36, 26, , 22, 100, 45, 48, 52, 53],
        },
      ],
      chart: {
        type: "bar",
        height: 520,

        toolbar: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "left",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
        ],
      },
      // yaxis: {
      //   title: {
      //     text: "$ (thousands)",
      //   },
      // },
      fill: {
        opacity: 1,
      },
      // tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return "$ " + val + " thousands";
      //     },
      //   },
      // },
    };

    const chart = new ApexCharts(document.querySelector("#Bchart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="Bchart"></div>;
};

const HistoryChart = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex py-24 flex-col items-center justify-center text-left">
          <div className="lg:px-[177px] md:px-[140px] sm:px-24 px-4 text-left w-full">
            <h1 className=" text-[#1D1D1D] text-[25px] font-semibold leading-[57.6px] tracking-[ -0.05em]">
              Film still performs high inflationary periodsFilm still performs
              high inflationary periods
            </h1>
            <p className=" text-[#1D1D1D] text-[16px] leading-[23.4px] tracking-[-1%]">
              Source: BP Statistical Review of Film 2023
            </p>
            <TChart />
          </div>
        </div>
      </div>
    </>
  );
};
export default HistoryChart;
