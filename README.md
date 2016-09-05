# React Simple (react-simple)
Simple React Boilerplate with Webpack and React Router

###### How to Reproduce, (init based on http://bit.ly/react-es6-webpack-babel)
1. Install Webpack Dev Server globaly : `npm install -g webpack-dev-server`
2. Create New Folder (name it react-simple for example) and *enter it*
3. `npm init`
4. `npm install --save react react-dom`
5. `npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react`
6. `npm install --save webpack` and if it's not working or shown webpack not installed, install it globally `npm install -g webpack`
7. Copy webpack.config.js as shown below:
```
var webpack = require('webpack');
var path = require('path');
 
module.exports = {
  entry: './app/router.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
```
8. Change the scripts in `package.json`
```
"scripts": {
    "start": "webpack-dev-server --hot --progress --colors",
    "build": "webpack --progress --colors"
}
```
###### How to Use
1. `git clone https://github.com/rizkiandrianto/react-simple.git`
2. `npm install`
3. `npm start` or `webpack-dev-server --hot --progress --colors`
