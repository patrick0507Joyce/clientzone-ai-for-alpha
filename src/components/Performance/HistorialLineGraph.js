import React from 'react'
import { Line } from "react-chartjs-2";
import pnlData from "../../data/total_pnl.json";

import moment from "moment";

const LineGraph = () => {
    const dataset = pnlData.filter((data, index) => index % 1 === 0);

    return (
        <Line
              data={{
                labels: dataset.map((data) => {
                  const momentString = moment(data["Dates"], "DD-MM-YYYY")
                    .format("MMM-YYYY")
                    .toString();

                  return momentString;
                }),
                datasets: [
                  {
                    data: dataset.map((data) =>
                      String(Number(data.Pnl - 1).toFixed(2))
                    ),
                    label: "Profit and Loss",
                    borderColor: "red",
                    fill: false,
                  },
                ],
              }}
              options={{
                title: {
                  display: false,
                  text: "Custom Chart Title",
                },
                tooltips: {
                  mode: "index",
                  intersect: false,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        min: 0,
                        max: 1.2, // Your absolute max value
                        callback: function (value) {
                          return (value * 100).toFixed(2) + "%"; // convert it to percentage
                        },
                      },
                      scaleLabel: {
                        display: false,
                        labelString: "Percentage",
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
                hover: {
                  mode: "nearest",
                  intersect: true,
                },
                elements: {
                  point: {
                    radius: 0,
                  },
                },
              }}
            />
    )
}

export default LineGraph
