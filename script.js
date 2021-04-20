let start = prompt("What would you like to do");
let todos=[];
while(start){
    
    if(start === "new"){
        let task = prompt("Enter new To-do");
        console.log(task+" added to list");
        todos.push(task);
    }
    else if(start === "list"){
        console.log("*************************");
        for(let i=0;i<todos.length;i++){
            console.log(i+": "+todos[i]);
        }
        console.log("*************************");
    }
    else if(start === 'delete'){
        let idx = parseInt(prompt("write index you want to remove from todo"));
        if(!Number.isNaN(idx)){
            todos.splice(idx,1);
            console.log("*************************");
            for(let i=0;i<todos.length;i++){
                console.log(i+": "+todos[i]);
            }
            console.log("*************************");
        }
        else {
            console.log("Enter a valid Index");
        }
    }
    else if(start === 'quit'){
        console.log("You quit the app");
        break;
    }
    else if(start){
        start= prompt("Enter a valid command");
        continue;
    }
   
        start= prompt("What would you like to do");
}