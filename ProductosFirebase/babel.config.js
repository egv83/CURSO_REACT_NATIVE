module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        extensions: ['.tsx', '.ts', '.js', '.json']
      }],
      // Reanimated plugin SIEMPRE al final
      'react-native-reanimated/plugin'
    ]
  };
};