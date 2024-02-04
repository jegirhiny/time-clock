import { v4 as uuidv4 } from 'uuid';
import { getEmployeeTime } from './time-utils';

const hasEmployees = () => {
    return localStorage.getItem('employees') !== null;
}

const getEmployees = () => {
    return JSON.parse(localStorage.getItem('employees')) || [];
}

const getEmployeesByName = (value) => {
    return getEmployees().filter(employee => (employee.firstName + ' ' + employee.lastName).toLowerCase().includes(value.toLowerCase()), []);
}

const getEmployeeById = (id) => {
    return getEmployees().find(employee => employee.id === id);
}

const getstatus = (id) => {
    return getEmployeeById(id).status;
}

const sortEmployees = (employees) => {
    return employees.sort((a, b) => {
        const nameA = a.lastName.toUpperCase();
        const nameB = b.lastName.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
};

const createEmployee = ({firstName, lastName, password, status, history, firstLogin}) => {
    const prevEmployees = getEmployees();
    localStorage.setItem('employees', JSON.stringify([...prevEmployees, {id: uuidv4(), firstName, lastName, password, status, history, firstLogin}]));
    window.location.reload();
}

const removeEmployee = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().filter(employee => employee.id !== id)));
    window.location.reload();
}

const setPassword = (id, password) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, password: password } : employee)));
}

const setFirstLogin = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, firstLogin: false } : employee)));
}

const setstatus = (id) => {
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, status: !employee.status } : employee)));
}

const logTime = (id) => {
    setstatus(id);
    localStorage.setItem('employees', JSON.stringify(getEmployees().map(employee => (employee.id === id) ? { ...employee, history: [...employee.history, {...getEmployeeTime(), status: getstatus(id)}] } : employee)));
}

export { hasEmployees, getEmployees, sortEmployees, getEmployeesByName, getEmployeeById, createEmployee, setstatus, getstatus, removeEmployee, logTime, setFirstLogin, setPassword};