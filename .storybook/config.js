import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/table.js');
}

configure(loadStories, module);
