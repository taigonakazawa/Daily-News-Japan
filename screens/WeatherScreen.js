import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import WeatherItem from "../components/WeatherItem";
import Constants from "expo-constants";
import axios from "axios";

//各地域のAPI情報
const Hokkaido = {
  name: "北海道",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Asahikawa&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Touhoku = {
  name: "東北",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Yamagata&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Kantou = {
  name: "関東",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Hokuriku = {
  name: "北陸",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Nagano&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Toukai = {
  name: "東海",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Nagoya&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Kinnki = {
  name: "近畿",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Osaka&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Tyugoku = {
  name: "中国",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Hiroshima&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const sikoku = {
  name: "四国",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Matsuyama&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Kyusyu = {
  name: "九州",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Ozu&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
const Okinawa = {
  name: "沖縄",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Okinawa&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`,
};
//各地域のAPI情報を配列に格納
const TotalUri = [
  Hokkaido,
  Touhoku,
  Kantou,
  Hokuriku,
  Toukai,
  Kinnki,
  Tyugoku,
  sikoku,
  Kyusyu,
  Okinawa,
];

export default function WeatherScreen() {
  const [weather, setWeathers] = useState([]);

  useEffect(() => {
    //それぞれの地域ごとに天気情報を取得
    TotalUri.forEach((info) => {
      getWeathers(info);
    });
  }, []);
  //天気情報を取得
  const getWeathers = async (info) => {
    //APIで非同期処理を実行
    const response = await axios.get(info.uri);
    //取得したデータから天気情報を取得
    const uriData = response.data.weather;
    //天気情報に地域名を追加
    uriData[0].name = info.name;
    //weatherに天気情報・地域名を設定する
    setWeathers((weather) => [...weather, uriData[0]]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weather}
        renderItem={({ item }) => (
          <WeatherItem
            description={item.description}
            icon={item.icon}
            name={item.name}
          />
        )}
        keyExtractor={(contact, index) => String(index)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
