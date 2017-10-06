export default class Bot {
  answerQuestion(input) {
    var lowerCaseInput = input.toLowerCase()

    switch (true) {
      case lowerCaseInput.startsWith('what'):
        return this.matchWhatInput(lowerCaseInput)
      case lowerCaseInput.startsWith('how'):
        return this.matchHowInput(lowerCaseInput)
    }
  }

  matchWhatInput(input) {
    switch (true) {
      case /.*quality gate.*/.test(input):
        return {
          msg: 'A quality gate is the best way to enforce a quality policy in your organization.',
          url: 'https://docs.sonarqube.org/display/SONAR/Quality+Gates'
        }
      case /.*quality profile.*/.test(input):
        return {
          msg: 'The Quality Profiles service is central to SonarQube, since it is where you define your requirements by defining sets of rules',
          url: 'https://docs.sonarqube.org/display/SONAR/Quality+Profiles'
        }
    }
  }

  matchHowInput(input) {
    return ''
  }
}
