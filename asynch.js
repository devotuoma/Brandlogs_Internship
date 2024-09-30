// Function with a promise that resolves after 2 seconds
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

// Async function calling the resolveAfter2Seconds function
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result); // Logs 'resolved' after 2 seconds
    return 'end';
}

asyncCall().then(console.log); // Logs 'end' after logging 'resolved'

// Example before async/await: Promise chaining
function getData() {
    return getIssue()
    .then(issue => getOwner(issue.ownerId))
    .then(owner => sendEmail(owner.email, 'Some text'));
}
// Assuming all the above functions return a Promise

// Example after async/await for improved readability
async function getData() {
    const issue = await getIssue();
    const owner = await getOwner(issue.ownerId);
    await sendEmail(owner.email, 'Some text');
}

// Example of chaining async/await operations
const getFirstUserData = async () => {
    const response = await fetch('/users.json'); // Fetch user list
    const users = await response.json(); // Parse JSON response
    const user = users[0]; // Pick the first user

    const userResponse = await fetch(`/users/${user.name}`); // Fetch first user's details
    const userData = await userResponse.json(); // Parse JSON user data

    return userData; // Return user data
}

// Use getFirstUserData and handle response or error
getFirstUserData().then(userData => {
    console.log(userData); // Log user data of the first user
}).catch(error => {
    console.error('Error fetching user data:', error); // Handle errors
});
