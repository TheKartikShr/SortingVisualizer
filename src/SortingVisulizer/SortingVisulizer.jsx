import React from "react";
import {mergeSortt} from '../sortingAlgorithm/sortingAlgorithm.js';
import './SortingVisulizer.css'


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 7;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#622569';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'white';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
  
    componentDidMount() {
      this.resetArray();
    }

    mergeSort() {
      const animations = mergeSortt(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}
  
    resetArray() {
      const array = [];
      for (let i = 0; i < 100; i++) {
        array.push(randomIntFromInterval(5, 500));
      }
      this.setState({array});
    }  
    
    test() {
      for(let i = 0; i < 100; i++){
        const array = [];
        for(let i = 0; i < randomIntFromInterval(1, 1000); i++){
          array.push(randomIntFromInterval(-1000, 1000));
        }
        const JsSortedArray = this.state.array
        .slice()
        .sort((a, b) => a - b);
        const sortedArray = mergeSortt(this.state.array);
        console.log(flag(JsSortedArray, sortedArray));
      }
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, index) => (
                    <div className="array-bar" key={index} style={{
                      backgroundColor: PRIMARY_COLOR,
                      height: `${value}px`,
                    }}></div>
                ))}
                <div className="button-container">
                    <button className="btn" onClick={() => this.resetArray()}>Generate New array</button>
                    <button className="btn" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="btn" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="btn" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className="btn" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="btn" onClick={() => this.test()}>Test Sorting Algorithm</button>
                </div>
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function flag(JsSortedArray, sortedArray) {
  if(JsSortedArray.lenght !== sortedArray.lenght){
    return false;
  }
  for(let i = 0; i < JsSortedArray.lenght; i++){
    if(JsSortedArray[i] !== sortedArray[i]){
      return false;
    }
  }
  return true;
}