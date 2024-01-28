import './employee-info.styles.css';
import TimeCard from '../time-card/time-card.component';

const EmployeeInfo = ({ employee }) => {
    if(!employee) {
        return (
            <div className='empty'>
                <h3>No Employee Selected</h3>
            </div>
        )
    } else if(employee.history.length === 0) {
        return (
            <div className='empty'>
                <h3>Work History Empty</h3>
            </div>
        )
    }

    return (
        <div className='info-container'>
            {employee.history.map((event, index) => <TimeCard key={index} event={event}/>)}
        </div>
    )
}

export default EmployeeInfo;