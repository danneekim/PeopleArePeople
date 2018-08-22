const BASE_URL = 'http://localhost:3001';

export function fetchUsers() {
    return fetch(`${BASE_URL}/users`)
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



export function saveInterests(interests) {
    console.log(interests)
    const opts = {
        method: 'POST',
        body: JSON.stringify(interests),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users/:id/interests`, opts)
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