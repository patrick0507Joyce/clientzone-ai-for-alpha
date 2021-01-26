import React, { useState, useEffect } from "react";
import usestyles from "./styles";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Toolbar,
  Button,
  Grid,
} from "@material-ui/core";
import { IoBarChartSharp } from "react-icons/io5";
import { MdSyncProblem } from 'react-icons/md';
import StopIcon from '@material-ui/icons/Stop';
import allocationResultData from "../../data/total_allocation.json";
import allocationWeightData from "../../data/strategies_weight.json";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { Table, TableHead, TableRow, TableBody } from "@material-ui/core";
import ProbabilityHeatMap from '../../data/probabilities2.json'
import { TableCell } from "@material-ui/core";
import { green, red } from '@material-ui/core/colors';


const Allocation = () => {
  const classes = usestyles();
  const [startDate, setStartDate] = useState(
    moment().subtract(4, "years").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [interval, setInterval] = useState(30);
  const [allocationDataset, setAllocationDataset] = useState(
    allocationResultData
  );
  const [allocationWeightDataset, setAllocationWeightDataset] = useState(
    allocationWeightData
  );

  const datasetHook = () => {
    setAllocationDataset(
      allocationResultData.filter((data, index) => {
        return (
          index % interval === 0 &&
          moment(
            moment(data["Dates"], "DD/MM/YYYY").format("YYYY-MM-DD")
          ).isBetween(startDate, endDate)
        );
      })
    );

    setAllocationWeightDataset(
      allocationWeightData.filter((data, index) => {
        return (
          index % interval === 0 &&
          moment(
            moment(data["Dates"], "DD/MM/YYYY").format("YYYY-MM-DD")
          ).isBetween(startDate, endDate)
        );
      })
    );
  };
  useEffect(datasetHook, [startDate, endDate, interval]);

  const handleDurationChange = (event) => {
    const duration = event.currentTarget.value;
    switch (duration) {
      case "three-years":
        setStartDate(moment().subtract(3, "years").format("YYYY-MM-DD"));
        setInterval(30);
        break;
      case "one-year":
        setStartDate(moment().subtract(1, "years").format("YYYY-MM-DD"));
        setInterval(7);
        break;

      case "one-month":
        setStartDate(moment().subtract(1, "months").format("YYYY-MM-DD"));
        setInterval(1);
        break;

      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <IoBarChartSharp />
        </Avatar>
        <Typography variant="h5">Global Allocation</Typography>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={false}>
            <Typography variant="h6">Duration: </Typography>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Toolbar className={classes.navbar}>
              <div>
                <Button
                  variant="outlined"
                  className={classes.navItem}
                  size="small"
                  value="three-years"
                  onClick={handleDurationChange}
                >
                  3 years
                </Button>
                <Button
                  variant="outlined"
                  className={classes.navItem}
                  size="small"
                  value="one-year"
                  onClick={handleDurationChange}
                >
                  1 year
                </Button>
                <Button
                  variant="outlined"
                  className={classes.navItem}
                  size="small"
                  value="one-month"
                  onClick={handleDurationChange}
                >
                  1 month
                </Button>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
        <Line
          data={{
            labels: allocationDataset.map(({ Dates }) => {
              const momentString = moment(Dates, "DD/MM/YYYY");
              if (interval >= 30) {
                return momentString.format("YYYY-MM");
              } else {
                return momentString.format("YYYY-MM-DD");
              }
            }),
            datasets: [
              {
                data: allocationDataset.map((data) => data.Total_Allocation),
                label: "Allocation Ratio",
                borderColor: "#01579B",
                backgroundColor: "rgb(129, 212, 250, 0.5)",
                fill: true,
              },
              {
                data: allocationWeightDataset.map((data) => data["US_S&P_500"]),
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
                fontSize: 12,
                fontStyle: "bold",
              },
            },
          }}
        />
        <Avatar className={classes.avatar}>
          <MdSyncProblem />
        </Avatar>
        <Typography variant="h5">Probability Heat Map Analysis</Typography>
        <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Asset
                </TableCell>
                <TableCell>
                  Current Allocation
                </TableCell>
                <TableCell>
                  Market Risk
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ProbabilityHeatMap.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.Asset}</TableCell>
                  <TableCell>{data.Current_Allocation}</TableCell>
                  <TableCell>
                  {
                    (Number(data.Current_Allocation) > 10 ?
                    <StopIcon style={{ color: green[500] }}></StopIcon> :
                    <div>
                      <StopIcon style={{ color: red[700] }}></StopIcon>
                      <StopIcon style={{ color: red[700] }}></StopIcon>
                    </div>
                    )
                  }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

        </Table>
      </Paper>
    </Container>
  );
};

export default Allocation;
