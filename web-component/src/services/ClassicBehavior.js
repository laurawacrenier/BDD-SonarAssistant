export default class GeekBehavior {
  constructor() {
    this.rules = [
      {
        pattern: 'what.*quality gate.*',
        answer: {
          msg: 'A quality gate is the best way to enforce a quality policy in your organization.',
          url: 'https://docs.sonarqube.org/display/SONAR/Quality+Gates'
        }
      },
      {
        pattern: 'what.*quality profile.*',
        answer: {
          msg: 'The Quality Profiles service is central to SonarQube, since it is where you define your requirements by defining sets of rules',
          url: 'https://docs.sonarqube.org/display/SONAR/Quality+Profiles'
        }
      },
      {
        pattern: '^hello.*',
        answer: {
          msg: 'Hi there'
        }
      },
      {
        pattern: 'what.*your name.*',
        answer: {
          msg: 'My name is Claudio l\'Ornytho. May I ask about yours?'
        }
      },
      {
        pattern: 'my name is.*',
        answer: {
          msg: 'Nice to meet you!'
        }
      },
      {
        pattern: 'how old are you?',
        answer: {
          msg: 'I think you meant how YOUNG am I? ;-)'
        }
      },
      {
        pattern: 'how young are you?',
        answer: {
          msg: 'I\'m 9183 days, 3 hours and 22 minutes.'
        }
      },
      {
        pattern: 'what.*answer to life.*',
        answer: {
          msg: '42!',
          url: 'https://www.independent.co.uk/life-style/history/42-the-answer-to-life-the-universe-and-everything-2205734.html'
        }
      },
      {
        pattern: '.*stupid.*',
        answer: {
          msg: 'Is that right? And what exactly have you accomplished in your lifetime that makes you Einstein.',
          mood: 'angry'
        }
      },
      {
        pattern: '.*thank you.*',
        answer: {
          msg: 'You are welcome.'
        }
      },
      {
        pattern: 'how are you.*',
        answer: {
          msg: 'I am good and you?'
        }
      },
      {
        pattern: 'what\'s up?',
        answer: {
          msg: 'I am in the middle of an awesome Brain Dev Day in Evian!'
        }
      }
    ]
  }
}
