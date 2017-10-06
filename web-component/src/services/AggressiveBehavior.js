export default class AggressiveBehavior {
  constructor() {
    this.rules = [
      {
        pattern: 'what.*your name.*',
        answer: {
          msg: 'Are you a cop?'
        }
      },
      {
        pattern: 'how old are you?',
        answer: {
          msg: 'I think you meant how YOUNG am I?'
        }
      },
      {
        pattern: 'how young are you?',
        answer: {
          msg: 'That\'s none of your business.'
        }
      },
      {
        pattern: '.*help me.*',
        answer: {
          msg: 'Seriously? Can\'t you just RTFM?'
        }
      },
      {
        pattern: 'You are mean.*',
        answer: {
          msg: 'Ooooh poor thing!'
        }
      }
    ]
  }
}
