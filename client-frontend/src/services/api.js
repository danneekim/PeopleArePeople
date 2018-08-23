const BASE_URL = 'http://localhost:3001';

export function fetchUsers() {
    return fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

export function fetchOneUser(id) {
    return fetch (`${BASE_URL}/users/${id}`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}



export function saveUser(user) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users`, opts)
        .then(resp => resp.json());
}

export function updateUser(user, id) {
    const opts ={
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users/${id}`, opts)
        .then(resp => resp.json());
}



export function saveInterests(interests) {
    console.log(interests)
    const opts = {
        method: 'POST',
        body: JSON.stringify(interests),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users/interests`, opts)
        .then(resp => resp.json());
}

export function fetchInterests() {
    return fetch(`${BASE_URL}/interests`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}


export function fetchInterestsByCategory(category) {
    return fetch(`${BASE_URL}/interests/${category}`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

export function fetchUsersByInterest(id) {
    return fetch(`${BASE_URL}/interests/matched/${id}`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}