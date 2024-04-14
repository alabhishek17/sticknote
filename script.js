// function revers(str){
//     var rev='';
//     for(let i=str.length-1;i>=0;i--){
//           rev+=str[i];
//     }
//     return rev;
// }
// // const input="hello";
// // let rev=revers(input);
// // console.log(rev);
// console.log(revers("hello"));

// function revers(str1 ,str2){
//    let temp=str1;
//    str1=str2;
//    str2=temp;
//    console.log(str1+" "+str2);
// }
// revers("hello","hi");

// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];
// let newarr=[...arr1,...arr2];
// let newarr2=arr1.concat(arr2);
// console.log(newarr);
// console.log(newarr2);

let arr1=[1,2,3,4,5];
 let arr2=[6,7,8,9,10];

 if(arr1.length!=arr2.length){
    return false;
 }
 arr1.split();
 arr2.split();
 
 for(let i=0;i<arr1.length;i++){
    if(arr1[i]===arr2[i]){
    return arr1[i]
    }else{
        return false;
    }
 }