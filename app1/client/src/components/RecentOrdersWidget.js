import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { orders } from "../data";
//import { useAlertContext } from "shell/useAlert";

export default function RecentOrdersWidget() {
  //const alertContext = useAlertContext();
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Box flex={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(({id, date, name, shipTo, paymentMethod, amount}) => (
              <TableRow key={id}>
                <TableCell>{date}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{shipTo}</TableCell>
                <TableCell>{paymentMethod}</TableCell>
                <TableCell align="right">{amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
{/*      <Box mt={3}>
        <Button color="primary" onClick={() => {
          alertContext.handleOpen('No more orders')
        }}>See more orders</Button>
      </Box>*/}
    </Box>
  );
}
