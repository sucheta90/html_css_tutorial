
// function rant(message){
//     console.log(message.toUpperCase())
// }

// rant('I hate beets')

// functions exercise #40
// let array = []
// function lastElement(array){
//     if (array.length !== 0){
//         let last= array[array.length -1 ]
//         return last
//     }
//     else return null
// }

// functions exercise #41
// function capitalize(str){
//     let firstLetter = str.charAt(0).toUpperCase();
//     let remaining = str.slice(1,);
//     let final = firstLetter + remaining
//     return final}


//functions exercise #42

// function sumArray(anArray){
//     for(let nums of anArray){
//         sumTotal += nums;
//     }
//     return sumTotal
//}

// function sumArray(anArray){
//     let i = 0;
//     let sumTotal = 0;
//     while(i < anArray.length){
//         sumTotal += anArray[i];
//         i += 1;
//     }
//     return sumTotal
// }
// console.log(sumArray([1,10,100,1000,1000]))
// console.log(sumArray([-10,-5,5,10]))

// function returnDay(number){
//     const daysOfWeek = {1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thrusday',5:'Friday',6:'Saturday',7:'Sunday'};
//     if (Object.keys(daysOfWeek) < 1 || Object.keys(daysOfWeek) > 7){return null}
//     else  
//     {return Object.values(daysOfWeek)} 
    
// }

// returnDay(7)

// const daysOfWeek = {1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thrusday',5:'Friday',6:'Saturday',7:'Sunday'};
// Object.keys(daysOfWeek)

// function returnDay(number){
//     const daysOfWeek = {1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thrusday',5:'Friday',6:'Saturday',7:'Sunday'};
//     if ((number < 1) || (number > 7)){return null}
//     else return daysOfWeek[number]
    
// }

// console.log(returnDay(7))

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
// const person = fullNames.forEach(function(person){console.log(person)})
// Object.keys
// fullNames.forEach(function(names){
    
//     console.log(names.first)
// })


// fullNames.map(function(name){
//     return name.first
       
// })
// const firstName= fullNames.map(function(name){
//     return name.first
       
// })
// console.log(firstName)

// const userNames = ['abcdefght90','Moana90','qwetryushgfg','mobile360','doggy']
// const userNames = ['abcdefght90','Moana90','qwetryushgfg','mobile360','doggy']

// // function validUserNames(strings){return strings.filter(string =>{if(string.length < 10){return string}})
// // }

// function validUserNames(strings){return strings.filter(string =>{return string.length < 10})


// }

// const final = validUserNames(['abcdefght90','Moana90','qwetryushgfg','mobile360','doggy'])
// console.log(final)


// { userNames.filter(userNames => {return userNames.length < 10})}

// const final = validUserNames(['abcdefght90','Moana90','qwetryushgfg','mobile360','doggy'])
// console.log(final)


// var searchInsert = function(nums, target) {
    
//     for(let number of nums){
//         // console.log(number);
//         if (number === target){
//         console.log (nums.indexOf(number))}
//         else{
//             while(target !== number){
//                 if(target < number){return nums.indexOf(number) }
//                 else return nums.indexOf(number)+ 1
//             }
//         }
            
//     } 
    
// };
// searchInsert(nums=[1,3,4,9], target=4);
// console.log(searchInsert)

// // nums.filter(number =>{ if (target === number){return nums.indexOf(number)}})

// var searchInsert = function(nums, target) {
//     for(i=0;i< nums.length;i++){
//         if (nums[i]>=target){return i}
//     }
//   };

//   searchInsert(nums=[1,3,5,6],target=7)

// let list1 =[1,2,4]
// let list2 =[1,3,4] 
// var mergeTwoLists = function(list1, list2){ 
//     let finalList=[];
//     for (let num of list1){
//         finalList.push(num)
//     }
//     for (let nums of list2){
//         finalList.push(nums)
//     }
//     return finalList.sort()
    
// };

// console.log(mergeTwoLists(list1,list2))