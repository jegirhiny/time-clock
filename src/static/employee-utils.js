import { v4 as uuidv4 } from 'uuid';

const hasEmployees = () => {
    return localStorage.getItem('employees') !== null;
}

const getEmployees = () => {
    return JSON.parse(localStorage.getItem('employees'));
}

const createEmployee = ({firstName, lastName, password, isWorking}) => {
    if(hasEmployees()) {
        const prevEmployees = JSON.parse(localStorage.getItem('employees'));

        localStorage.setItem('employees', JSON.stringify([...prevEmployees, {id: uuidv4(), firstName, lastName, password, isWorking}]));
    } else {
        localStorage.setItem('employees', JSON.stringify([{id: uuidv4(), firstName, lastName, password, isWorking}]));
    }
}

const setIsWorking = (id) => {
    const employee = (JSON.parse(localStorage.getItem('employees'))).find((employee) => employee.id === id);
    employee.isWorking = !employee.isWorking;

    console.log(employee);
}

const getIsWorking = (id) => {
    const employee = (JSON.parse(localStorage.getItem('employees'))).filter((employee) => employee.id === employee);
}

export { hasEmployees, getEmployees, createEmployee, setIsWorking, getIsWorking};