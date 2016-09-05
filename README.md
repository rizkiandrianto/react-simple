# React Simple (react-simple)
Simple React Boilerplate with Webpack and React Router.
Fit for every beginners who want to learn react for the first time (like me).

Made it with frustration of ReactJS :joy:

### How to Reproduce, (init based on http://bit.ly/react-es6-webpack-babel)
1. Install Webpack Dev Server globaly : `npm install -g webpack-dev-server`
2. Create New Folder (name it react-simple for example) and *enter it*
3. `npm init`
4. `npm install --save react react-dom`
5. `npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react`
6. `npm install --save webpack` and if it's shown webpack not installed at `npm start` or `webpack-dev-server --hot --progress --colors`, install it globally `npm install -g webpack`
7. Copy `webpack.config.js` as shown below:
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
And then change the scripts in `package.json`

```
"scripts": {
    "start": "webpack-dev-server --hot --progress --colors",
    "build": "webpack --progress --colors"
}
```
### How to Use
1. `git clone https://github.com/rizkiandrianto/react-simple.git`
2. `cd react-simple` and then `npm install`
3. `npm start` or `webpack-dev-server --hot --progress --colors`

###### P.S. :
*if npm start not working because of 'webpack not installed', install webpack globally `npm install -g webpack`*

### How to Build for Production
`npm run build`

