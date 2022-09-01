import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const NewsKizi = ({ imageuri, title, subtext, onPress }) => {
  var date = new Date(subtext);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var koukaihiduke = year + "年" + month + "月" + day + "日";

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.moziBox}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{koukaihiduke}</Text>
      </View>

      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} source={{ url: imageuri }} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsKizi;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  moziBox: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },

  gazoBox: {
    width: 100,
  },

  text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "darkblue",
  },
});
