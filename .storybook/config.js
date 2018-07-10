import { configure } from '@storybook/react';
import 'normalize.css';
import '../src/styles/global';

const req = require.context('../stories', true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
