var postcss = require('postcss');
var cssvariables = require('postcss-css-variables');
var cssnano = require('cssnano');

var fs = require('fs');
var milligram = fs.readFileSync('public/css/milligram.css', 'utf8');

const normal = function (variables) {
  return postcss([
      cssvariables(variables)
  ])
  .process(milligram)
  .css;
}
/*
const minified = function (variables) {
  return postcss([
      cssvariables(variables),
      cssnano()
  ])
  .process(milligram)
  .css;
}*/

module.exports = (config) => {
  const opts = { variables: config.variables };
  //if (config.minify) return minified(opts);
  return normal(opts);
};
