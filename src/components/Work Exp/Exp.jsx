import uniqid from 'uniqid';
import { workExp } from '../../portfolio';
import ExpContainer from '../ExpContainer/ExpContainer';
import './Exp.css';


export default function Exp(){

    if (workExp.length === 0) return null;
    
    return (
        <section id='workExp' className='section workExp'>
            <h2 className='section__title'>Work History</h2>

            <div className='workExp__grid'>
                {workExp.map((exp) => (
                    // <div key={uniqid()} className='workExp__item'>
                    //     <h3 className='workExp__item__title'>{exp.title}</h3>
                    //     <p className='workExp__item__company'>{exp.company}</p>
                    //     <p className='workExp__item__date'>{exp.date}</p>
                    //     <p className='workExp__item__description'>{exp.description}</p>
                    // </div>
                    <ExpContainer key={uniqid()} exp={exp} />
                ))}
            </div>
        </section>
    )
 };
