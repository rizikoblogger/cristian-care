const {inputs: answer} = require("./forum/save-forum");
module.exports = {


  friendlyName: 'View forum',


  description: 'Display "Forum" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/forum'
    }

  },


  fn: async function () {

    const Forumquestion = sails.models.forumquestion;

    const isSuperAdmin = this.req.me.isSuperAdmin

    let questions = [];

    if (isSuperAdmin) {
      questions = await Forumquestion
        .find()
        .populate('forumanswers')
        .sort('createdAt DESC');
    } else {
      questions = await Forumquestion
        .find({isModerated: true})
        .populate('forumanswers')
        .sort('createdAt DESC');
    }

    return {questions: questions};

  }


};
