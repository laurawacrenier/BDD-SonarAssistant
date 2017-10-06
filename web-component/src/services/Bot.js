import AggressiveBehavior from './AggressiveBehavior'
import PoshBehavior from './PoshBehavior'
import GeekBehavior from './GeekBehavior'

export default class Bot {
  constructor() {
    this.behavior = this.selectBehavior().rules
  }

  selectBehavior() {
    var allBehaviors = [new PoshBehavior(), new GeekBehavior(), new AggressiveBehavior()]
    var randomIndex = Math.floor((Math.random() * 3) + 1)
    return allBehaviors[randomIndex]
  }

  answerQuestion(input) {
    var lowerCaseInput = input.toLowerCase()
    var rule = this.behavior.find(function(element) {
      return new RegExp(element.pattern).test(lowerCaseInput)
    })

    if (rule === undefined) {
      return {
        msg:
          'I am not sure to understand the question. Could you reword your question?'
      }
    } else {
      return rule.answer
    }
  }
}
