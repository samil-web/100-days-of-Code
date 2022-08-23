const textInput = document.querySelector('input');
const countingInput = document.querySelector('#remaincount');

function countDown(event){
    const inputLength = event.target.value.length;
    const remainLength = 60-inputLength;
    countingInput.textContent = remainLength;
    if (remainLength < 10){
        countingInput.classList.add('warning');
    } 
    else{
        countingInput.classList.remove('warning');
    }
    return countingInput;
}

// It may seem that everytime our const variables inputLength and remainLength updates, but actually 
// once your function runs all variables inside it are thrown away!!! 
// Also it may seem we change const variables countingInput and textInput
// But actually we are just changing property of countingInput and apply method to textInput 

textInput.addEventListener('input',countDown);
