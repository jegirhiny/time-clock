import TimeCard from '../time-card/time-card.component';
import './employee-info.styles.css';

const EmployeeInfo = ({ employee }) => {
    if(!employee) {
        return (
            <h3>Employee Not Selected</h3>
        )
    }

    return (
        <div className='info-container'>
            <h3>{employee.firstName} {employee.lastName}</h3>
            {employee.history.map((event, index) => <TimeCard key={index} event={event}/>)}
        </div>
    )
}

export default EmployeeInfo;