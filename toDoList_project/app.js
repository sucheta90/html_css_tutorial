const toDoList = ['cook','dance','play']
let userInput = prompt("What would you like to do?")

while(userInput !== 'quit' && userInput !== 'q'){
    if (userInput.toLowerCase() === 'list'){
        console.log('***********')
        for(let i=0; i < toDoList.length; i++){
            console.log(`${i}: ${toDoList[i]}`)
        }
        console.log('***********')
    }
     
    else if (userInput.toLowerCase() === "new"){
        const toDo = prompt('Enter new to do');
        toDoList.push(toDo);
        console.log(`${toDo} added to the list.`)
    }
    else if ( userInput === 'delete'){
        const index = parseInt(prompt ('ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = toDoList.splice(index, 1);
            console.log(`ok ${deleted} has been deleted`)}
        
    else{
        console.log('Unknown index')
    }
        
        

    }
    
        userInput = prompt("What would you like to do?")
}
console.log('Ok! YOU QUIT THE APP!')