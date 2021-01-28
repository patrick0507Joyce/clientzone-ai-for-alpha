import React from "react";
import usestyles from "./styles";
import { Container, Paper, Avatar, Typography, Grid } from "@material-ui/core";
import pnlData from "../../data/total_pnl.json";
import PerformanceTable from "./PerformanceTable";
import LineGraph from "./LineGraph";

const Performance = () => {
  const classes = usestyles();
  return (
    <Container component="main" maxWidth="lg">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={4} align="center">
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h6" className={classes.subtitle}>
                Historical Performance
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={9} align="center">
            <Paper className={classes.paper} elevation={3}>
              <LineGraph />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={4} align="center">
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h6" className={classes.subtitle}>
                Performance Indicators
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={9} align="center">
            <Paper className={classes.paper} elevation={3}>
              <PerformanceTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Performance;
