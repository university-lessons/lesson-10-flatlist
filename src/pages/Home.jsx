import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import apiData from "../services/api_data";

export default function Home() {
  const handleClickMovie = (item) => {
    console.log("Clicked on item " + item.id);
    console.log("navigator.navigate para: ", item);
  };

  const Movie = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickMovie(item)}
      >
        <Text style={styles.movieTitle}>{item.title}</Text>

        <View style={styles.movieFooter}>
          <Text>{item.year}</Text>
          <Text>{item.ticketPrice}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.title}>Movie Database</Text>
      <FlatList
        data={apiData}
        renderItem={Movie}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  itemContainer: {
    backgroundColor: "#ddd",
    marginBottom: 8,
    padding: 8,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movieFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
