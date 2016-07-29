const express = require('express');
const router = express.Router();
var gen = require('./generator');

/* GET home page. */

router.get('/', (req, res) => {
  res.render('index', { title: 'Milligram Customizer <3' });
});

router.get('/generate', (req, res) => {
  const configs = {
    minify: false,
    variables: {
      '--color-initial': { value: '#fff' },
      '--color-primary': { value: '#9b4dca' },
      '--color-secondary': { value: '#606c76' },
      '--color-tertiary': { value: '#f4f5f6' },
      '--color-quaternary': { value: '#d1d1d1' }
    }
  };

  if (req.query['color-initial']) {
    configs.variables['--color-initial'].value = req.query['color-initial'];
  }

  if (req.query['color-primary']) {
    configs.variables['--color-primary'].value = req.query['color-primary'];
  }

  if (req.query['color-secondary']) {
    configs.variables['--color-secondary'].value = req.query['color-secondary'];
  }

  if (req.query['color-tertiary']) {
    configs.variables['--color-tertiary'].value = req.query['color-tertiary'];
  }

  if (req.query['color-quaternary']) {
    configs.variables['--color-quaternary'].value = req.query['color-quaternary'];
  }

  return res.status(200).send(gen(configs));
});

module.exports = router;
