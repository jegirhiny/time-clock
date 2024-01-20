function getTime() {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Date().toLocaleTimeString('en-US', options);
}

function getEmployeeTime() {
    const date = new Date();

    return {
        date: `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`, 
        time: getTime()
    }
}

export { getTime, getEmployeeTime }