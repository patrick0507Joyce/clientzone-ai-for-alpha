import React from 'react'
import PerformanceTableData from '../../data/performanceTable.json'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const PerformanceTable = () => {
    return (
        <Paper>
        <Table>
          <TableHead align="center" style={{backgroundColor: "lightblue", color:"white"}}>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Annualized Return</TableCell>
              <TableCell align="center">Annualized Volability</TableCell>
              <TableCell align="center">Sharpe</TableCell> 
              <TableCell align="center">Sortino</TableCell>
              <TableCell align="center">Drawdown</TableCell>
              <TableCell align="center">Turnover</TableCell>
              <TableCell align="center">Equity Correlation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PerformanceTableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell align="center">{data["year"]}</TableCell>
                <TableCell align="center">{data["Annualized Return"]+ "%"}</TableCell>
                <TableCell align="center">{data["Annualized Volatility"]+ "%"}</TableCell>
                <TableCell align="center">{data["Sharpe"]}</TableCell>
                <TableCell align="center">{data["Sortino"]}</TableCell>
                <TableCell align="center">{data["Drawdown"]+ "%"}</TableCell>
                <TableCell align="center">{data["Turnover"]}</TableCell>
                <TableCell align="center">{data["Equity Correlation"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
    )
}

export default PerformanceTable
