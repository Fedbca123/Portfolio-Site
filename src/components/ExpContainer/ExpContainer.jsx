// import uniqid from 'uniqid';
import './ExpContainer.css';

export default function ExpContainer({ exp }) {

    return (
        <div className='exp'>
        <h3>{exp.company}</h3>
        <h4>{exp.title}</h4>
        <h4>{exp.date}</h4>
        <p>{exp.description}</p>
    </div>
    )
    
 };