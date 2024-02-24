import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio.tsx';
import './About.css';
import Pdf from '../../Resume_of_Omar_Shalaby.pdf';

const About: React.FC = () => {
  
  const { name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1 className='about__center'>
          <span className='typing'>Hi, I am <span className='about__name'>{name}</span></span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={Pdf}>
            <button className='btn btn--outline'>
              Resume
            </button>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
};

export default About;
