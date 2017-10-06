export default class PoshBehavior {
  constructor() {
    this.rules = [
      {
        pattern: 'what.*your name.*',
        answer: {
          msg: 'My name is Claudio Platypus the 3rd.'
        }
      }
    ]
  }
}
