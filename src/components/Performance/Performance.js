import React from "react";
import usestyles from "./styles";
import { Container, Paper, Avatar, Typography, Grid } from "@material-ui/core";
import pnlData from "../../data/total_pnl.json";
import { Line } from "react-chartjs-2";
import moment from "moment";
import PerformanceTable from "./PerformanceTable";

const Performance = () => {
  const classes = usestyles();

  const dataset = pnlData.filter((data, index) => index % 1 === 0);

  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={2}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} align="center">
            <Typography variant="h6" className={classes.title}>
              Historical Performance
            </Typography>
          </Grid>
          <Grid item xs={7} align="center">
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
          </Grid>
          <Grid item xs={6} align="center">
            <Typography variant="h6" className={classes.title}>
              Performance Indicators
            </Typography>
          </Grid>
          <Grid item xs={8} align="center">
            <PerformanceTable />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Performance;
