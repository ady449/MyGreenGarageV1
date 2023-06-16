import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchData } from "../api/node";
import { DataTable } from "react-native-paper";

const TableView = ({ data }) => {
  const dataName = [
    "title",
    "VIN",
    "Insurance",
    "Battery Level",
    "Battery Health",
  ];
  const car = {
    "Manufacture Date": data.dateofmanufacture,
    "Battery Health": data.batterylife,
    "Battery Level": data.batterylevel,
    Insurance: data.insurance,
    Range: data.range,
    VIN: data.vin,
    "Door locked": data.isLocked,
    Km: data.km,
  };

  const today = new Date();
  const expirationDate = new Date(data["insurance"]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  const RenderItem = () => {
    return Object.keys(car).map((key) => {
      if (key === "Insurance" && today < expirationDate) {
        return (
          <DataTable.Row
            style={{ border: 0, backgroundColor: "red" }}
            key={key}
          >
            <DataTable.Cell>{key}</DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              {car[key]}
            </DataTable.Cell>
          </DataTable.Row>
        );
      } else if (
        (key === "Battery Level" || key === "Battery Health") &&
        car[key] <= 50
      ) {
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
              {car[key]}
            </DataTable.Cell>
          </DataTable.Row>
        );
      } else if (key === "Door locked") {
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
              {car[key] ? "locked" : "unlocked"}
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
              {car[key]}{" "}
            </DataTable.Cell>
          </DataTable.Row>
        );
      }
    });
  };

  //   const RenderItem = () => {
  //     //   Object.keys(data).map((key, value) => {
  //     //     console.log(data["_id"]);
  //     //   });
  //     // console.log(data._id);
  //   };

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
