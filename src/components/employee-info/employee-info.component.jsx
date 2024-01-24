import './employee-info.styles.css';

const EmployeeInfo = ({ employee }) => {
    console.log(employee.timeWorked)

    if(!employee) {
        return (
            <h3>Employee Not Selected</h3>
        )
    }

    return (
        <div>
            <h3>{employee.firstName}</h3>
            {/* {
                employee.timeWorked.map(() => {
                    
                })
            } */}
        </div>
    )
}

export default EmployeeInfo;