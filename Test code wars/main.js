let arr=[1,2,3,4,5,6];
let n=4;
let arr1=[]
for (let i=0; i<=arr.length-n; i++) {
    let arr2=[]
    let f=i;
    for (let j=0; j<n;j++)
    {
    arr2[j]=arr[f]
        f=f+1;
    }
    arr1[arr1.length]=arr2
}
console.log(arr1)


function eachConst(arr,n){
    return  arr.reduce((accumulator,value,index, arr)=>{
    if(index<=arr.length-n){
       accumulator.push(arr.slice(index,index+n))}
    return accumulator},
    []
)}
console.log(eachConst(arr,4));
