parasails.registerPage('forum', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    showModal: false,
    showAnswerModal: false,
    text: '',
    question: {}
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    save: function () {
      Cloud.saveForum.with({
        text: this.text,
        isModerated: false,
        creator: this.me.id,
      }).then(() => {
        this.text = ''
        alert('OK')
        window.location.reload()
      }).catch(err => {
        console.log(err)
        alert('Erro: \n' + JSON.stringify(err))
      })
    },
    approve: function (question) {
      question.isModerated=true
      Cloud
        .saveForum
        .with(question)
        .then(()=>{
          alert('OK')
          window.location.reload()
        })
        .catch(err=>{
          console.log(err);
          alert('Erro: \n' + JSON.stringify(err))
        })
    },
    reply: function (question) {
       if(!question.forumanswers || question.forumanswers.length===0){
         question.forumanswers = []
       }
       this.question = question
       this.showAnswerModal = true
    },
    saveReply: function () {
      Cloud.saveForumanswer.with({
        text: this.text,
        creator: this.me.id,
        forumquestion: this.question.id,
        isModerated: false,
      }).then(() => {
        this.text = ''
        this.question = {}
        this.questions.forEach(q=>{
          if(q.id===this.question.id){
            q.forumanswers.push(this.text)
          }
        })
        alert('OK')
        this.windows.location.reload()
      }).catch(err => {
        console.log(err)
      })

    },
    approveReply: function (answer) {
      Cloud.saveForumanswer.with({
        id: answer.id,
        text: answer.text,
        creator: answer.creator,
        forumquestion: answer.forumquestion,
        isModerated: true,
      }).then(() => {
        alert('OK')
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    }
  }
});
