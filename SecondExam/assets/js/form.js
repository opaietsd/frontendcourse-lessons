let users = [];

const addUser = (ev) =>{
    ev.preventDefault();

    let user = {
        id: Date.now(),
        mobile: document.getElementById('number').value,
        email: document.getElementById('email').value
    }

    users.push(user);
    document.forms[0].reset();

    console.warn('added', {users});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '/n' + JSON.stringify(users, '/t', 2);

    localStorage.setItem('OurUsers', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addUser)
});