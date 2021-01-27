import React, { useState } from "react";
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
import { GoBook } from "react-icons/go";
import {
  EUEuroStoxx,
  JapanNikkei225,
  MSCIEMUSD,
  UKFTSE100,
  USNasdaq100,
  USSP500,
} from "../../images/Market";
import { Image } from "@material-ui/icons";

const Explain = () => {
  const classes = usestyles();
  const [imageSrc, setImageSrc] = useState(EUEuroStoxx);


  const handleMarketChange = (event) => {
    const src = event.currentTarget.value;
    switch (src) {
      case "eu-euro-stoxx":
        setImageSrc(EUEuroStoxx);
        break;

      case "japan-nikkei-225":
        setImageSrc(JapanNikkei225);
        break;
      case "msci-em-usd":
        setImageSrc(MSCIEMUSD);
        break;
      case "uk-ftse-100":
        setImageSrc(UKFTSE100);
        break;
      case "us-nasdaq-100":
        setImageSrc(USNasdaq100);
        break;
      case "us-sp-500":
        setImageSrc(USSP500);
        break;
      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Market Indicators</Typography>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Typography variant="h6">Market: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Toolbar className={classes.navbar}>
              <Button
                variant="outlined"
                className={classes.navItem}
                size="small"
                value="eu-euro-stoxx"
                onClick={handleMarketChange}
                color="primary"
              >
                EU Euro Stoxx
              </Button>
              <Button
                variant="outlined"
                className={classes.navItem}
                size="small"
                value="japan-nikkei-225"
                onClick={handleMarketChange}
                color="primary"
              >
                Japan Nikkei 225
              </Button>
              <Button
                variant="outlined"
                className={classes.navItem}
                size="small"
                value="msci-em-usd"
                onClick={handleMarketChange}
                color="primary"
              >
                MSCI EM USD
              </Button>
              <Button
                variant="outlined"
                className={classes.navItem}
                size="small"
                value="uk-ftse-100"
                onClick={handleMarketChange}
                color="primary"
              >
                UK FTSE 100
              </Button>
              <Button
                variant="outlined"
                className={classes.navItem}
                size="small"
                value="us-nasdaq-100"
                onClick={handleMarketChange}
                color="primary"
              >
                US Nasdaq 100
              </Button>
              <Button
                variant="outlined"
                className={classes.navItem}
                size="small"
                value="us-sp-500"
                onClick={handleMarketChange}
                color="primary"
              >
                US S&P 500
              </Button>
            </Toolbar>
          </Grid>
        </Grid>
        <img src={imageSrc} class={classes.image} width="60%"/>
      </Paper>
    </Container>
  );
};

export default Explain;
