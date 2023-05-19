import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchData } from "../api/node";
import { DataTable } from "react-native-paper";

const TableView = () => {
  const data = {
    id: 1,
    title: "Item 1",
    VIN: "1234AUDI",
    RCA: "2023-04-26",
    BatteryLevel: 44,
    BatteryHealth: 51,
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
          <DataTable.Row
            style={{ border: 0, backgroundColor: "red" }}
            key={key}
          >
            <DataTable.Cell>{key}</DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              {data[key]}
            </DataTable.Cell>
          </DataTable.Row>
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
          <DataTable.Row
            style={{
              border: 0,
              backgroundColor: "red",
            }}
            key={key}
          >
            <DataTable.Cell style={{ justifyContent: "flex-start" }}>
              {key}
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              {data[key]} %
            </DataTable.Cell>
          </DataTable.Row>
        );
      } else {
        return (
          <DataTable.Row
            style={{ border: 0, alignContent: "center" }}
            key={key}
          >
            <DataTable.Cell>{key}</DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              {data[key]}{" "}
            </DataTable.Cell>
          </DataTable.Row>
        );
      }
    });
  };

  return (
    <View style={{ backgroundColor: "white", borderRadius: 15 }}>
      <DataTable style={{ width: 250 }}>
        <RenderItem />
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
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
