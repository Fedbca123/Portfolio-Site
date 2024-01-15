import { contact } from '../../portfolio.tsx';
import './Contact.css';

const Contact:React.FC = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <button type='button' className='btn btn--outline'>
          Email me
        </button>
      </a>
    </section>
  )
}

export default Contact;
