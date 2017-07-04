# React.js - Studies
This repository was created to store some coding from the course React From The Ground Up, on Udemy.

# Anotations

## Chapter 5 - Stateless Compoenents
- Facebook recomends to use Stateless compoenents as much as possible, because it's easy to maintain and scale the project

##  Chapter 6 - Components Lifecycle
- Adding a component to the dom -> mounting the component, and unmounting for the inverse task

## Chapter 7 - Classes
- An introduction to Classes on ES6 and how React deals with it. The way classes are created and declared is cleaner and things start to be more intuitive.
- If you don't need states, use a stateless component

## Chapter 8 - Project Setup
- Dependencies: react, react-dom webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react, babel-preset-stage-1
- Commands to setup project:
touch webpack.config.js
touch .babelrc

- Fixing webpack "invalid configuration project" error:
npm uninstall webpack --save-dev
followed by
npm install webpack@2.1.0-beta.22 --save-dev

## Chapter 9 - Project
- cp -R eight nine
- To create apps with react without worrying with config, use https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html.
- Creating project:
create-react-app pokedashboard
import whatwg-fecth for making requests

## Chapter 10 - Getting started with Redux
- Quick es6 setup:
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-3 webpack webpack-dev-server --save
touch webpack.config.js
webpack.config.js ->

```
module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules,
			loader: 'babel'
		}]
	}
}
```

touch .babelrc
.babelrc ->

```
{
	"presets": ["es2015", "stage-3"]
}
```
- Another fetch api to use: Axios

## Creator
Luiz Baldi