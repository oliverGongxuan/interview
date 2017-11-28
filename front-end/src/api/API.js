const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:8080';


const headers = {
    'Accept': 'application/json'
};

export const doSignup = (payload) =>
    fetch(`${api}/student/add`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is add error");
            return error;
        });
export const doDeleteStudent = (payload) =>
    fetch(`${api}/student/delete`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is delete error");
            return error;
        });
export const doUpdate = (payload) =>
    fetch(`${api}/student/update`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is delete error");
            return error;
        });

export const getCourses = () =>
    fetch(`${api}/course/all`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is getCourses error.");
            return error;
        });
