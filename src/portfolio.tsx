const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://oshalaby.dev',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Omar Shalaby',
  role: 'New Grad Software Engineer',
  description:
    'I am a software engineer with a passion for building things. I have experience building full-stack web applications, mobile applications, and machine learning models. I am always looking for new opportunities to learn and grow.',
  resume: 'temp',
  social: {
    linkedin: 'https://linkedin.com/in/omar-shalaby/',
    github: 'https://github.com/Fedbca123',
  },
}

const workExp = [
  // experience can be added an removed
  // if there are no experience, Work Experience section won't show up
  {
    title: 'Software Engineer Intern',
    company: 'ADT',
    date: 'May 2023 - September 2023',
    description: 'Worked on a small team of 2 as mainly the frontend dev making a user permissions management web application to be used internally for supervisor/director use from scratch. The tech stack used was the Salesforce Lightning Web Components (comprised of HTML, CSS, and JavaScript) framework for the frontend, and used a combination of Apex and Salesforce SOQL for the backend.',
  },
  {
    title: 'FoodRunner',
    company: 'Universal Orlando Resort',
    date: 'June 2018 - May 2023',
    description: 'I originally started as a host and then worked my way up and became a busser and later a food runner. I was responsible for delivering food to guests in a timely manner and ensuring that the food was correct while making sure it accomdated the guests allergies.',
  },
];

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

const skills: string[] = [
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
  'Vite',
  'Vercel',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shalabymomar@gmail.com',
}

export { header, about, workExp, projects, skills, contact };
