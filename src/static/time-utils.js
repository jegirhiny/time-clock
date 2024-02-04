const getTime = () => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Date().toLocaleTimeString('en-US', options);
}

const getEmployeeTime = () => {
    const date = new Date();

    return {
        date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`, 
        time: getTime()
    }
}

const getTimeDifference = (fromHistory, toHistory) => {
    const fromDateTime = new Date(`${fromHistory.date}`);
    const toDateTime = new Date(`${toHistory.date}`);

    if (toDateTime > fromDateTime) {
        return true;
    }

    return false;
};

export { getTime, getEmployeeTime, getTimeDifference }