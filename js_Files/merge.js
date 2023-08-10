async function merge(low, mid, high, ele){
    document.querySelector('#Time_Worst').innerText = '	O(n log(n))';
    document.querySelector('#Time_Average').innerText = 'θ(n log(n))';
    document.querySelector('#Time_Best').innerText = 'Ω(n log(n))';
    document.querySelector('#Space_Worst').innerText = 'O(n log(n))'
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        console.log('In merge right loop');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'blue';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'blue';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        console.log("In while if n1 is left");
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'blue';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        console.log("In while if n2 is left");
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'blue';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(i, j, ele) {
    if(i >= j) {
        return;
    }
    const mid = i + Math.floor((j - i) / 2);
    await mergeSort(i, mid, ele);
    await mergeSort(mid + 1, j, ele);
    await merge(i, mid, j, ele);
}
const mergeSortBtn = document.querySelector('.mergeSort');
mergeSortBtn.addEventListener('click', async function() {
    const ele = document.querySelectorAll('.bar');
    let i = 0;
    let j = parseInt(ele.length) - 1;
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingbtn();
    await mergeSort(i, j, ele);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});