// let query = document.querySelector('p');

// function clicked(){
//     query.textContent = 'Clicked';
//     console.log('Paragraph clicked');
// }

// query.addEventListener('click',clicked);

let inputElement = document.querySelector('input');

function retrieveUserInput(event){
    // let text = inputElement.value;
    // let eventVar = event.data; -> This is different, it shows every event lonely without adding previous events
    let eventVar = event.target.value;
    console.log(eventVar);
}

inputElement.addEventListener('input',retrieveUserInput);
