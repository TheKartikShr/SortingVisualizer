async function partition(ele, l, r) {
    document.querySelector("#Time_Worst").innerText = "O(N^2)";
    document.querySelector("#Time_Average").innerText = "θ(n log(n))";
    document.querySelector("#Time_Best").innerText = "Ω(n log(n))";
    document.getElementById("Space_Worst").innerText="O(log N)";
    let i = l - 1;
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        ele[j].style.background = 'yellow';
        await waitforme(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'orange';
            if(i != j){
                ele[j].style.background = 'orange';
            }
            await waitforme(delay);
       }else{
            ele[j].style.background = 'pink';
       }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]);
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    await waitforme(delay);
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green') {
            ele[k].style.background = 'cyan';
        }
    }
    return i;
}

async function quickSort(ele, l, r) {
    if(l < r) {
        let pivotIndex = await partition(ele, l, r);
        await quickSort(ele, l, pivotIndex - 1);
        await quickSort(ele, pivotIndex + 1, r);
    } else {
        if(l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickSortBtn = document.querySelector('.quickSort');
quickSortBtn.addEventListener('click', async function() {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});