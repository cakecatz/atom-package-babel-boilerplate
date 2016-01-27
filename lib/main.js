'use babel';

import configSchema from './config-schema';

export default {
  config: configSchema,

  activate: () => {
    this.subscription = atom.commands.add('atom-text-editor', 'atom-package-babel-boilerplate:show-info', () => {
      this.showInfo();
    });
  },

  deactivate: () => {
    this.subscription.dispose();
  },

  showInfo: () => {
    console.log('atom-package-babel-boilerplate@0.0.1');
  },
};
