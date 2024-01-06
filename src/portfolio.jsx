const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Fedbca123.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Omar Shalaby',
  role: 'New Grad Software Engineer',
  description:
    'I am a software engineer with a passion for building things. I have experience building full-stack web applications, mobile applications, and machine learning models. I am always looking for new opportunities to learn and grow.',
  resume: '',
  social: {
    linkedin: 'https://linkedin.com/in/omar-shalaby/',
    github: 'https://github.com/Fedbca123',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Workout Buddy',
    description:
      'A workout app made for people who want to workout with their friends or just get into working out. Users can use premade workouts/exercises or create their own to schedule. Friends can see when their peer is planning to workout to then try and coordinate with them to find a workout partner.',
    stack: ['React Native', 'JavaScript', 'Azure', 'Node.js', 'Express.js', 'MongoDB', 'Azure'],
    sourceCode: 'https://github.com/Fedbca123/workout-planner',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Our Cooking Mama',
    description:
      'A social media app for users to share their recipes and cooking experiences with their friends. Users can create their own recipes and share them with their friends. Users can also follow their friends to see what they are cooking and like their recipes.',
    stack: ['React Native', 'React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Heroku'],
    sourceCode: 'https://github.com/Fedbca123/Large-Project-POOSD/tree/herokuTest',
    // livePreview: 'https://github.com',
  },
  {
    name: 'ESRB Rating Predictor',
    description:
      'A machine learning model that predicts the ESRB rating of a video game based on its features. The model was trained on a dataset of over 18,000 video games. The model was able to achieve an accuracy of 95%. This project was used in a Kaggle competition and placed in the top 5% of submissions amongst hundreds of other people\'s submissions.',
    stack: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas', 'NumPy'],
    sourceCode: 'https://github.com/Fedbca123/ESRB-Rating-Predictor',
    // livePreview: 'https://github.com',
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
  'Heroku',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shalabymomar@gmail.com',
}

export { header, about, projects, skills, contact }
