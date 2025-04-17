module.exports = {


  friendlyName: 'Save forum',


  description: '',


  inputs: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
      type: 'string'
    },

    text: {
      type: 'string',
      required: true,
    },

    isModerated: {
      type: 'boolean',
      defaultsTo: false,
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    forumanswers: {
      type: 'ref',
      description: 'List of model/Forumanswer.js Object'
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    const Forumquestion = sails.models.forumquestion;

    if(inputs.id){
      const question = await Forumquestion.updateOne({id: inputs.id}).set({text: inputs.text, isModerated: inputs.isModerated, forumanswers: []});
      const map = inputs.forumanswers.map(answer => {answer.id})
      await Forumquestion.addToCollection(inputs.id, 'forumanswers').members(map)
      return {question: question};
    }else{
      const question = await Forumquestion.create(
        {
          text: inputs.text,
          isModerated: false,
          forumanswers: [],
          creator: this.req.me.id,
        }
      ).fetch()
      return {question: question};

    }

  }


};
