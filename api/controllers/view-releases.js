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
            date: '2024-11-16',
            name: '1.0.0-Leviticus',
            url: '',
            details: 'Deleted outdated build.sh script and associated deploy commands from package.json. Updated configuration files to use environment variables for flexibility. Added Dockerfile for containerization and optimized asset paths in layout files.'
          },
          {
            date: '2024-06-01',
            name: '0.0.2-Exodus',
            url: '',
            details: 'Added Sermon feature'},
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
