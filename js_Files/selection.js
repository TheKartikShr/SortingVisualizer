async function selection() {
    document.querySelector("#Time_Worst").innerText = "O(N^2)";
    document.querySelector("#Time_Average").innerText = "Θ(N^2)";
    document.querySelector("#Time_Best").innerText = "Ω(N^2)";
    document.getElementById("Space_Worst").innerText="O(1)";
    const ele = document.querySelectorAll('.bar');
    for(let i = 0; i < ele.length; i++){
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j = i + 1; j < ele.length; j++){
            ele[j].style.background = 'red';
            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i) {
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }else{
                ele[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = 'cyan';
        ele[i].style.background = 'green';
    }
}

const selectionBtn = document.querySelector('.selectionSort');
selectionBtn.addEventListener('click', async function() {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingbtn();
    await selection();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
})