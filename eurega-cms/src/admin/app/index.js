import mathIcon from './extensions/mathIcon.js';

export default {
  bootstrap(app) {
    app.getPlugin('ckeditor').registerExtension({
      name: 'mathType',
      plugins: [],
      toolbar: {
        items: ['mathType'],
        config: {
          mathType: {
            icon: mathIcon,
            label: 'Math Type',
            key: 'math-type',
          },
        },
      },
    });
  },
}; 