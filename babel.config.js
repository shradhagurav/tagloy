module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          component: './src/component',
          navigation: './src/navigation',
          models: './src/models',
          store: './src/store',
          assets: './src/assets',
          constants: './src/constants',
          services: './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
