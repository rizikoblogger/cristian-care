module.exports = {


  friendlyName: 'View plans',


  description: 'Display "Plans" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/contribute/plans'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
