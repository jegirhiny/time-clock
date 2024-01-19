import { v4 as uuidv4 } from 'uuid';

const hasEmployees = () => {
    return localStorage.getItem('employees') !== null;
}

const getEmployees = () => {
    return JSON.parse(localStorage.getItem('employees')) || [];
}

const getEmployeeByName = (value) => {
    return getEmployees().filter(employee => (employee.firstName + employee.lastName).includes(value.replace(' ', '')), []);
}

const createEmployee = ({firstName, lastName, password, isWorking}) => {
    const prevEmployees = hasEmployees() ? JSON.parse(localStorage.getItem('employees')) : [];
    
    localStorage.setItem('employees', JSON.stringify([...prevEmployees, {id: uuidv4(), firstName, lastName, password, isWorking}]));
}

const removeEmployee = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().filter(employee => employee.id !== id)));
}

const setIsWorking = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, isWorking: !employee.isWorking } : employee)));
}

export { hasEmployees, getEmployees, getEmployeeByName, createEmployee, setIsWorking, removeEmployee};