module.exports = {


  friendlyName: 'View step by step',


  description: 'Display "Step by step" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/step-by-step'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
