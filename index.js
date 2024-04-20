// Code your solution here
function findMatching(arr,str){
    const newArr = arr.filter(match => match.toLowerCase() === str.toLowerCase());
    return newArr;
}

function fuzzyMatch(arr,str){
    const newArr = arr.filter(match => match[0] === str[0]);
    return newArr; 
}

function matchName(arr,str){
const newArr = arr.filter(obj => obj.name === str); 
return newArr; 
}