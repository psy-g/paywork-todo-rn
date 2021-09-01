module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['babel-plugin-styled-components'],
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
          '@': './src',
          '@components': './src/components',
          '@containers': './src/containers',
          '@store': './src/store',
          '@scenes': './src/scenes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
