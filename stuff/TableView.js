import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchData } from "../api/node";
import ForegroundNotification from "./Notification";

const TableView = () => {
  const data = {
    id: 1,
    title: "Item 1",
    vin: "1234AUDI",
    RCA: "2024-03-19",
    BatteryLevel: "44 %",
    BatteryHealth: "45 %",
  };

  const today = new Date();
  const expirationDate = new Date(data["RCA"]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
    console.log(count);
    console.log(data["RCA"]);
  }, []);

  const RenderItem = () => {
    return Object.keys(data).map((key) => {
      if (
        (key === "RCA" && today < expirationDate) ||
        (key === "BatteryLevel" && data[key] <= "50%") ||
        (key === "BatteryHealth" && data[key] <= "50%")
      ) {
        handleNotification(key);
        return (
          <View style={styles.alert} key={key}>
            <ForegroundNotification />
            <Text style={(styles.column, styles.alert)}>{key}</Text>
            <Text style={(styles.column, styles.alert)}>{data[key]}</Text>
          </View>
        );
      } else {
        return (
          <View style={styles.row} key={key}>
            <Text style={styles.column}>{key}</Text>
            <Text style={styles.column}>{data[key]}</Text>
          </View>
        );
      }
    });
  };

  return (
    <View>
      <RenderItem />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  column: {
    flex: 1,
    textAlign: "center",
    padding: 20,
    borderBottomColor: "#ccc",
  },
  alert: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default TableView;
