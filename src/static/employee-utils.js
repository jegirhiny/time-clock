import { v4 as uuidv4 } from 'uuid';

const hasEmployees = () => {
    return localStorage.getItem('employees') !== null;
}

const getEmployees = () => {
    return JSON.parse(localStorage.getItem('employees')) || [];
}

const getEmployeeByName = (value) => {
    const employees = getEmployees();

    return employees.filter((employee) => {
        const fullName = employee.firstName + employee.lastName;

        return fullName.includes(value.replace(' ', ''));
    }, []);
}

const createEmployee = ({firstName, lastName, password, isWorking}) => {
    if(hasEmployees()) {
        const prevEmployees = JSON.parse(localStorage.getItem('employees'));

        localStorage.setItem('employees', JSON.stringify([...prevEmployees, {id: uuidv4(), firstName, lastName, password, isWorking}]));
    } else {
        localStorage.setItem('employees', JSON.stringify([{id: uuidv4(), firstName, lastName, password, isWorking}]));
    }
}

const getEmployeeIndex = (id) => {
    return getEmployees().findIndex((employee) => employee.id === id);
}

const removeEmployee = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().filter((employee) => employee.id !== id)));
}

const setIsWorking = (id) => {
    const employee = (JSON.parse(localStorage.getItem('employees'))).find((employee) => employee.id === id);
    employee.isWorking = !employee.isWorking;

    console.log(employee);
}

const getIsWorking = (id) => {
    // const employee = (JSON.parse(localStorage.getItem('employees'))).filter((employee) => employee.id === employee);
}

export { hasEmployees, getEmployees, getEmployeeByName, createEmployee, setIsWorking, getIsWorking, removeEmployee};