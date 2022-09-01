module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    //add this plugins
    plugins: ["react-native-reanimated/plugin"],
  };
};
