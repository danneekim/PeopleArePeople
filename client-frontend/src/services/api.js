const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';
// const BASE_URL = 'http://localhost:3001';

// Fetch all users from DB
export function fetchUsers() {
    return fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// Fetch a single user to display for editing
export function fetchOneUser(id) {
    return fetch (`${BASE_URL}/users/${id}`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// Save a new users information
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

// Update a single users information (name, cohort and horoscope)
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

// Save a users interests after creation 
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

// Show all interests to the users
export function fetchInterests() {
    return fetch(`${BASE_URL}/interests`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// Show all interests for a specific category
export function fetchInterestsByCategory(category) {
    return fetch(`${BASE_URL}/interests/${category}`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// Show all interests for a user to delete
export function fetchInterestsByUserId(id) {
    return fetch(`${BASE_URL}/users/${id}/interests`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        })
}

// Display all users who have saved the same interest
export function fetchUsersByInterest(id) {
    return fetch(`${BASE_URL}/interests/matched/${id}`)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// Allows a user to delete a previously saved interest
export function removeInterest(userId, interestId) {
    const opts = {
        method: 'DELETE',
        body: JSON.stringify({ interestId }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users/${userId}/interests`, opts)
        .then(resp => resp.json())
}