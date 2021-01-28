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
import allocationResultData from "../../data/total_allocation.json";
import allocationWeightData from "../../data/strategies_weight.json";
import moment from "moment";
import { MarketRisk } from "../../images/Market";
import HistoricalLineGraph from "./HistoricalLineGraph";

const Allocation = () => {
  const classes = usestyles();
  const [startDate, setStartDate] = useState(
    moment().subtract(4, "years").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [interval, setInterval] = useState(1);
  const [allocationDataset, setAllocationDataset] = useState(
    allocationResultData
  );
  const [allocationWeightDataset, setAllocationWeightDataset] = useState(
    allocationWeightData
  );
  const [monthAndYearExpression, setMonthAndYearExpression] = useState(true);

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
        setInterval(1);
        setMonthAndYearExpression(true);
        break;
      case "one-year":
        setStartDate(moment().subtract(1, "years").format("YYYY-MM-DD"));
        setInterval(1);
        setMonthAndYearExpression(true);
        break;

      case "one-month":
        setStartDate(moment().subtract(1, "months").format("YYYY-MM-DD"));
        setInterval(1);
        setMonthAndYearExpression(false);
        break;

      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="2xl">
      <Container maxWidth="sm">
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h5">Global Allocation</Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid item xs={6} align="center">
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h6" className={classes.subtitle}>
                Historical Allocation
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} align="center">
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h6" className={classes.subtitle}>
                Current Market Analysis
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="2xl">
        <Grid container className={classes.gridContainer}>
          <Grid item xs={6} align="center" className={classes.gridLayout}>
            <Paper className={classes.specialPaper} elevation={3}>
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
              <HistoricalLineGraph
                allocationDataset={allocationDataset}
                allocationWeightDataset={allocationWeightDataset}
                monthAndYearExpression={monthAndYearExpression}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} align="center" className={classes.gridLayout}>
            <Paper className={classes.specialPaper} elevation={3}>
              <img src={MarketRisk} height="100%" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Allocation;


