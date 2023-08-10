async function insertion() {
    document.querySelector("#Time_Worst").innerText = "O(N^2)";
    document.querySelector("#Time_Average").innerText = "Θ(N^2)";
    document.querySelector("#Time_Best").innerText = "Ω(n)";
    document.getElementById("Space_Worst").innerText="O(1)";
    const ele = document.querySelectorAll('.bar');
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++) {
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';
        while(j >= 0 && parseInt(ele[j].style.height) > parseInt(key)){
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await waitforme(delay);
            for(let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingbtn();
    await insertion();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});