function swap(ele1, ele2){
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

function disableSortingbtn() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let arraySize = document.querySelector('#arr_sz');

arraySize.addEventListener('input', function() {
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function() {
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


let array = [];

createNewArray();

function createNewArray(noOfBars = 40){
    deleteChild();
    array = [];
    for(let i = 0; i < noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);
    const bars = document.querySelector('#bars');
    for(let i = 0; i < noOfBars; i++){
        const bar = document.createElement('div');
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function() {
    document.querySelector("#Time_Worst").innerText = '';
    document.querySelector("#Time_Average").innerText = '';
    document.querySelector("#Time_Best").innerText = '';
    document.querySelector("#Space_Worst").innerText='';
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});