import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Search</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  searchContainer: {
    flexGrow: 0,
    backgroundColor: "red",
    padding: 16,
  },
  listContainer: {
    flexGrow: 1,
    backgroundColor: "green",
    padding: 16,
  },
});
