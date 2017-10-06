export default class Bot {
  answerQuestion(input) {
    var lowerCaseInput = input.toLowerCase()

    switch (true) {
      case lowerCaseInput.startsWith('what'):
        return this.matchWhatInput(lowerCaseInput)
      case lowerCaseInput.startsWith('how'):
        return this.matchHowInput(lowerCaseInput)
    }

    return 'I am not sure to understand the question. Could you reword your question?'
  }

  initializeBehavior() {
    
  }
}
