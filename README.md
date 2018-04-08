# CSS Modules Webpack Demo using preprocessors like Less

A working demo of [CSS Modules], using [Webpack]'s [css-loader] in [module mode]. Inspired by [CSS Modules Webpack demo].
Scss (sass) is used along with the less just to show that they can work together (in the same build)! The styles there
are copied, so it does not carry any logic b/w the preprocessors.

**Attention!** This demo uses [stylelint-webpack-plugin] with `fix: true` (only for less files which don't end with "old.less"),
so it will try to auto-fix them if it finds any errors.
If you don't wish to use that, change it to `fix: false` in the `webpack.config.js`.
Rules of the stylelint are extended from the [Stylelint SuitCSS config], but indentation changed to 4,
added max nesting level: 3, "composes" rule is placed 1st in order and deleted the following rules:
```
"at-rule-empty-line-before",
"color-hex-length",
"comment-empty-line-before",
"rule-empty-line-before",
/* all suitCSS root-related rules as well */
```

## Install dependencies (required step)
In order to run or build this application, the dependencies need to be installed.
First, install [Node.js](https://nodejs.org/en/), then install [yarn](https://yarnpkg.com/lang/en/docs/install/). (The latter is optional but recommended. Using LTS version in both should work, otherwise use `Node.js` v6.14.1 and `yarn` v1.2.1)

### Using `yarn` (recommended)

```bash
$ yarn
```

### Using `npm`
```bash
$ npm install
```

## Run the example
### Using `yarn` (recommended)

```bash
$ yarn run start
```

### Using `npm`
```bash
$ npm start
```

Then go to [http://localhost:8080](http://localhost:8080) and see the result.

## Build the bundle (optional)
### *Unix/Linux*: Using `yarn` (recommended)

```bash
$ yarn run build-prod
```

### *Unix/Linux*: Using `npm`

```bash
$ npm run build-prod
```


### *Windows*: Using `yarn` (recommended)

```bash
$ yarn run build-prod-windows
```

### *Windows*: Using `npm`

```bash
$ npm run build-prod-windows
```

## License

[MIT]

[Stylelint SuitCSS config]: https://github.com/suitcss/stylelint-config-suitcss
[stylelint-webpack-plugin]: https://github.com/webpack-contrib/stylelint-webpack-plugin
[CSS Modules Webpack demo]: https://github.com/css-modules/webpack-demo
[CSS Modules]: https://github.com/css-modules/css-modules
[Webpack]: http://webpack.github.io
[webpack-dev-server]: https://webpack.github.io/docs/webpack-dev-server.html
[css-loader]: https://github.com/webpack/css-loader
[module mode]: https://github.com/webpack/css-loader/#css-modules
[style-loader]: https://github.com/webpack/style-loader
[url-loader]: https://github.com/webpack/url-loader
[file-loader]: https://github.com/webpack/file-loader
[raw-loader]: https://github.com/webpack/raw-loader
[babel]: https://babeljs.io
[node-libs-browser]: https://github.com/webpack/node-libs-browser
[MIT]: https://github.com/spaguette/webpack-less-demo/blob/master/LICENSE
