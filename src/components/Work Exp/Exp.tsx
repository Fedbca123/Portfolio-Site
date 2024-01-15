import uniqid from 'uniqid';
import { workExp } from '../../portfolio.tsx';
import ExpContainer from '../ExpContainer/ExpContainer.tsx';
import './Exp.css';


export default function Exp(){

    if (workExp.length === 0) return null;
    
    return (
        <section id='workExp' className='section workExp'>
            <h2 className='section__title'>Work History</h2>

            <div className='workExp__grid'>
                {workExp.map((exp: {title:string, company:string, date:string, description:string}) => (
                    <ExpContainer key={uniqid()} exp={exp} />
                ))}
            </div>
        </section>
    )
 };
