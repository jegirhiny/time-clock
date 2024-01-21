import { v4 as uuidv4 } from 'uuid';
import { getEmployeeTime } from './time-utils';

const hasEmployees = () => {
    return localStorage.getItem('employees') !== null;
}

const getEmployees = () => {
    return JSON.parse(localStorage.getItem('employees')) || [];
}

const getEmployeeByName = (value) => {
    return getEmployees().filter(employee => (employee.firstName + employee.lastName).includes(value.replace(' ', '')), []);
}

const getEmployeeById = (id) => {
    return getEmployees().find(employee => employee.id === id);
}

const createEmployee = ({firstName, lastName, password, isWorking, timeWorked}) => {
    const prevEmployees = hasEmployees() ? getEmployees() : [];
    localStorage.setItem('employees', JSON.stringify([...prevEmployees, {id: uuidv4(), firstName, lastName, password, isWorking, timeWorked}]));
    window.location.reload();
}

const logTime = (id) => {
    setIsWorking(id);
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, timeWorked: [...employee.timeWorked, {...getEmployeeTime(), isWorking: getIsWorking(id)}] } : employee)));
}

const removeEmployee = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().filter(employee => employee.id !== id)));
    window.location.reload();
}

const getIsWorking = (id) => {
    return getEmployeeById(id).isWorking;
}

const setIsWorking = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, isWorking: !employee.isWorking } : employee)));
}

export { hasEmployees, getEmployees, getEmployeeByName, getEmployeeById, createEmployee, setIsWorking, getIsWorking, removeEmployee, logTime };