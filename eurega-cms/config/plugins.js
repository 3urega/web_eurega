module.exports = {
  ckeditor: {
    enabled: true,
    config: {
      plugin: {
        // disable data-theme tag setting // 
        // setAttribute:false,
        // disable strapi theme, will use default ckeditor theme //
        // strapiTheme:false,
        // styles applied to editor container (global scope) //
        // styles:`
        // .ck-content pre{
        //   background-color:#fafafa;
        //   padding:5px;
        //   border-radius: 4px;
        // }
        // `
      },
      editor: {
        // editor default config
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'imageInsert',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'htmlEmbed',
            'codeBlock',
            '|',
            'mathType', // Añadimos el botón para LaTeX
            'chemType', // Para fórmulas químicas si lo necesitas
            '|',
            'undo',
            'redo'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // if you need markdown support and output set: removePlugins: [''],
        // default is 
        removePlugins: ['Markdown'],
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        // options: basic, standard, full
        preset: 'standard',
      },
    },
  },
}; 