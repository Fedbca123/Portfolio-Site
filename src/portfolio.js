const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Fedbca123.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Omar Shalaby',
  role: 'Software Engineer',
  description:
    'I am a software engineer with a passion for building things. I have experience building full-stack web applications, mobile applications, and machine learning models. I am always looking for new opportunities to learn and grow.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/omar-shalaby/',
    github: 'https://github.com/Fedbca123',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'MongoDB',
  'Node.js',
  'Express.js',
  'Jest',
  'Enzyme',
  'C#',
  '.NET',
  'MySQL',
  'Python',
  'TensorFlow',
  'Keras',
  'C',
  'C++',
  'Java',
  'Azure',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shalabymomar@gmail.com',
}

export { header, about, projects, skills, contact }
