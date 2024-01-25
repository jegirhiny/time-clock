import TimeCard from '../time-card/time-card.component';
import './employee-info.styles.css';

const EmployeeInfo = ({ employee }) => {
    if(!employee) {
        return (
            <div className='info-container'>
                <h3 className='marg-left'>{employee.firstName} {employee.lastName}</h3>
                <div className='events'>
                    <h3>No Employee Selected</h3>
                </div>
            </div>
        )
    } else if(employee.history.length === 0) {
        return (
            <div className='info-container'>
                <h3 className='marg-left'>{employee.firstName} {employee.lastName}</h3>
                <div className='events'>
                    <h3>Log History Empty</h3>
                </div>
            </div>
        )
    }

    return (
        <div className='info-container'>
            <h3 className='marg-left'>{employee.firstName} {employee.lastName}</h3>
            {employee.history.map((event, index) => <TimeCard key={index} event={event}/>)}
        </div>
    )
}

export default EmployeeInfo;