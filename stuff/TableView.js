import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchData } from "../api/node";
// import { makeStyles } from "@material-ui/core/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import ForegroundNotification from "./Notification";

const TableView = () => {
  const data = {
    id: 1,
    title: "Item 1",
    VIN: "1234AUDI",
    RCA: "2023-04-26",
    BatteryLevel: 44,
    BatteryHealth: 50,
  };

  const dataName = ["title", "VIN", "RCA", "Battery Level", "Battery Health"];

  const today = new Date();
  const expirationDate = new Date(data["RCA"]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
    console.log(count);
    console.log(data["RCA"]);
    console.log(today);
  }, []);

  const RenderItem = () => {
    return Object.keys(data).map((key) => {
      if (key === "RCA" && today < expirationDate) {
        return (
          <TableRow
            key={key}
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
                backgroundColor: "red",
              },
            }}
          >
            <TableCell component="th" scope="row">
              {key}
            </TableCell>
            <TableCell align="right">{data[key]}</TableCell>
          </TableRow>
        );
      } else if (
        (key === "BatteryLevel" || key === "BatteryHealth") &&
        data[key] <= 50
      ) {
        console.log(
          key,
          " avem ",
          data[key],
          " pentru ",
          data[key] < 50,
          " si ",
          (key === "BatteryLevel" || key === "BatteryHealth") && data[key] <= 50
        );
        return (
          <TableRow
            key={key}
            sx={{
              border: 0,
              backgroundColor: "red",
            }}
          >
            <TableCell component="th" scope="row">
              {key}
            </TableCell>
            <TableCell align="right">{data[key]} %</TableCell>
          </TableRow>
        );
      } else {
        return (
          <TableRow
            key={key}
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell component="th" scope="row">
              {key}
            </TableCell>
            <TableCell align="right">{data[key]}</TableCell>
          </TableRow>
        );
      }
    });
  };

  return (
    <View>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <RenderItem />
          </TableBody>
        </Table>
      </TableContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginTop: 20,
    backgroundColor: "green",
  },
  column1: {
    flex: 1,
    textAlign: "center",
    padding: 20,
    left: 0,
    borderBottomColor: "#ccc",
  },
  column2: {
    flex: 1,
    textAlign: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  alert: {
    backgroundColor: "red",
    flex: 1,
    textAlign: "center",
    padding: 20,
    borderWidth: 1,

    borderColor: "#ccc",
  },
});

export default TableView;
