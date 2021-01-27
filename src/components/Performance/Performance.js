import React from "react";
import usestyles from "./styles";
import { Container, Paper, Avatar, Typography } from "@material-ui/core";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import pnlData from "../../data/total_pnl.json";
import { Line } from "react-chartjs-2";
import moment from "moment";

const Performance = () => {
  const classes = usestyles();

  const dataset = pnlData.filter((data, index) => index % 60 === 0);

  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Current Market Analysis</Typography>
        <Line
          data={{
            labels: dataset.map(({ Dates }) => {
              const momentString = moment(Dates, "DD-MM-YYYY")
                .format("YYYY-MM")
                .toLocaleLowerCase();

              return momentString;
            }),
            datasets: [
              {
                data: dataset.map((data) =>
                  String(Number((data.Pnl - 1)).toFixed(2))
                ),
                label: "Profit and Lost",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
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
                        return ((value) * 100).toFixed(2) + "%"; // convert it to percentage
                      },
                    },
                    scaleLabel: {
                      display: false,
                      labelString: "Percentage",
                    },
                  },
                ],
              },
            hover: {
              mode: "nearest",
              intersect: true,
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Performance;
