import React from 'react'
import { Line } from "react-chartjs-2";
import moment from "moment";

const HistoricalLineGraph = ({allocationDataset, allocationWeightDataset, monthAndYearExpression}) => {
    return (
        <Line
              data={{
                labels: allocationDataset.map(({ Dates }) => {
                  const momentString = moment(Dates, "DD/MM/YYYY");
                  if (monthAndYearExpression) {
                    return momentString.format("MMM-YYYY");
                  } else {
                    return momentString.format("DD-MMM-YYYY");
                  }
                }),
                datasets: [
                  {
                    data: allocationDataset.map(
                      (data) => data.Total_Allocation
                    ),
                    label: "Global Allocation",
                    borderColor: "#01579B",
                    backgroundColor: "rgb(129, 212, 250, 0.5)",
                    fill: false,
                  },
                  {
                    data: allocationWeightDataset.map(
                      (data) => data["US_S&P_500"]
                    ),
                    label: "US S&P 500",
                    borderColor: "#0B1D78",
                    backgroundColor: "transparent",
                    fill: false,
                    hidden: true,
                  },
                  {
                    data: allocationWeightDataset.map(
                      (data) => data["US_Nasdaq_100"]
                    ),
                    label: "US Nasdaq 100",
                    borderColor: "#0045A5",
                    backgroundColor: "transparent",
                    fill: false,
                    hidden: true,
                  },
                  {
                    data: allocationWeightDataset.map(
                      (data) => data["EU_Euro_Stoxx_50"]
                    ),
                    label: "EU Euro Stoxx 50",
                    borderColor: "#0069C0",
                    backgroundColor: "transparent",
                    fill: false,
                    hidden: true,
                  },
                  {
                    data: allocationWeightDataset.map(
                      (data) => data["UK_FTSE_100"]
                    ),
                    label: "UK FTSE 100",
                    borderColor: "#008AC5",
                    backgroundColor: "transparent",
                    fill: false,
                    hidden: true,
                  },
                  {
                    data: allocationWeightDataset.map(
                      (data) => data["Japan_Nikkei_225"]
                    ),
                    label: "Japan Nikkei 225",
                    borderColor: "#00A9B5",
                    backgroundColor: "transparent",
                    fill: false,
                    hidden: true,
                  },
                  {
                    data: allocationWeightDataset.map(
                      (data) => data["MSCI_EM_USD"]
                    ),
                    label: "MSCI EM USD",
                    borderColor: "#1FE074",
                    backgroundColor: "transparent",
                    fill: false,
                    hidden: true,
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
                hover: {
                  mode: "nearest",
                  intersect: true,
                },
                legend: {
                  labels: {
                    fontSize: 15,
                    fontStyle: "bold",
                  },
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        min: -1,
                        max: 1, // Your absolute max value
                        callback: function (value) {
                          return (value * 100).toFixed(1) + "%"; // convert it to percentage
                        },
                      },
                      scaleLabel: {
                        display: false,
                        labelString: "Percentage",
                      },
                    },
                  ],
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

export default HistoricalLineGraph
