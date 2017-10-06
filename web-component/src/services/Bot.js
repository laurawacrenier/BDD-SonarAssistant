import Behavior from './Behavior'

export default class Bot {
  constructor() {
    this.behavior = new Behavior().rules
  }

  answerQuestion(input) {
    var lowerCaseInput = input.toLowerCase()
    var rule = this.behavior.find(function(element) {
      return new RegExp(element.pattern).test(lowerCaseInput)
    })

    if (rule === undefined) {
      return {
        msg: 'I am not sure to understand the question. Could you reword your question?'
      }
    } else {
      return rule.answer
    }
  }
}
