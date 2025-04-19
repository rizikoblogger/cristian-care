module.exports = {


  friendlyName: 'View releases',


  description: 'Display "Releases" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/releases'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      versions:
        [
          {
            date: '2025-04-16',
            name: '2025.1-Leviticus',
            url: '/versions/cuidado-cristao-2025-1.zip',
            details: 'Added Dockerfile for containerization and optimized asset paths in layout files. Added Forum capabilities'
          },
          {
            date: '2024-06-01',
            name: '0.0.2-Exodus',
            url: '',
            details: 'Added Sermon feature'
          },
          {
            date: '2024-01-05',
            name: '0.0.1-Genesys',
            url: '',
            details: 'First version with full features added to GitHub repository'
          },
        ]
    };

  }


};
