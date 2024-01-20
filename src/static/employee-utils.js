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

const getEmployeeById = (id) => {
    return getEmployees().find(employee => employee.id === id);
}

const createEmployee = ({firstName, lastName, password, isWorking}) => {
    const prevEmployees = hasEmployees() ? getEmployees() : [];
    localStorage.setItem('employees', JSON.stringify([...prevEmployees, {id: uuidv4(), firstName, lastName, password, isWorking}]));
    window.location.reload();
}

const removeEmployee = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().filter(employee => employee.id !== id)));
    window.location.reload();
}

const setIsWorking = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, isWorking: !employee.isWorking } : employee)));
}

const logEmployeeTime = (id, { date, time }) => {
    setIsWorking(id);

    console.log(date + " " + time);
}

export { hasEmployees, getEmployees, getEmployeeByName, getEmployeeById, createEmployee, setIsWorking, removeEmployee, logEmployeeTime };