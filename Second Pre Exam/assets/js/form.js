//var name = document.getElementById("name");
//var number = document.getElementById("tel");
//var question = document.getElementById("quetion");

let questions = [];

const addQuestion = (ev)=>{
    ev.preventDefault();
    let question = {
        id: Date.now(),
        name: document.getElementById('name').value,
        number: document.getElementById('tel').value,
        ask: document.getElementById('ask').value
    }

    questions.push(question);
    document.forms[0].reset();
     
    //for display
    console.warn('added', {questions} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '/n' + JSON.stringify(questions, '/t', 2);

    localStorage.setItem('OurQuetions', JSON.stringify(questions));

}



document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addQuestion)
});