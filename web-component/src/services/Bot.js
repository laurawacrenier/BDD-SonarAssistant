import ClassicBehavior from './ClassicBehavior'

export default class Bot {
  constructor() {
    this.behavior = new ClassicBehavior().rules
  }

  answerQuestion(input) {
    var lowerCaseInput = input.toLowerCase()
    var rule = this.behavior.find(function(element) {
      return new RegExp(element.pattern).test(lowerCaseInput)
    })

    if (rule === undefined) {
      if (input.endsWith('?')) {
        return { msg: 'I am not sure to understand the question. Could you reword your question?' }
      } else {
        return { msg: 'Ok' }
      }
    } else {
      return rule.answer
    }
  }
}
