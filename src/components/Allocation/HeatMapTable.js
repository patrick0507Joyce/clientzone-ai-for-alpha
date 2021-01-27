import React from 'react'

const HeatMapTable = () => {
    return (
        <Paper>
          <Avatar className={classes.avatar}>
          <MdSyncProblem />
        </Avatar>
        <Typography variant="h5">Probability Heat Map Analysis</Typography>
        <Table className={classes.table}>
          <TableHead align="center">
            <TableRow>
              <TableCell align="center">Asset</TableCell>
              <TableCell align="center">Current Allocation</TableCell>
              <TableCell align="center">Market Risk</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ProbabilityHeatMap.map((data, index) => (
              <TableRow key={index}>
                <TableCell align="center">{data.Asset}</TableCell>
                <TableCell align="center">
                  {data.Current_Allocation + "%"}
                </TableCell>
                <TableCell align="center">
                  {Number(data.Current_Allocation) > 10 ? (
                    <StopIcon style={{ color: green[500] }}></StopIcon>
                  ) : (
                    <div>
                      <StopIcon style={{ color: green[500] }}></StopIcon>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className={classes.tableLegend}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                EXPLAINER
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <div style={{ justifyContent: "center" }}>
                  <StopIcon style={{ color: green[500] }}></StopIcon>
                </div>
              </TableCell>
              <TableCell align="center">
                <div style={{ justifyContent: "center" }}>
                  <p>Bull Market</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <div style={{ justifyContent: "center" }}>
                  <StopIcon style={{ color: yellow[500] }}></StopIcon>
                </div>
              </TableCell>
              <TableCell align="center">
                <div style={{ justifyContent: "center" }}>
                  <p>Neutral</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <div style={{ justifyContent: "center" }}>
                  <StopIcon style={{ color: red[500] }}></StopIcon>
                </div>
              </TableCell>
              <TableCell align="center">
                <div style={{ justifyContent: "center" }}>
                  <p>Bear Market</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </Paper>
    )
}

export default HeatMapTable
