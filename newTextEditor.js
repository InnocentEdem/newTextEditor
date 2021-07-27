
function newTextEditor(operations){
    
    let prevOp=[];
    let result=[];
    let copy = [];
    for(let i = 0; i<operations.length; i++){
        let thisop=operations[i];
        operate(thisop.toLowerCase());
    }
    function operate (operators){
         operator=operators.split(' '); 
        let text;
        if(operator.length>1){
         text= operator[1]
        }
        switch(operator[0]){
            case 'insert': text1 = text.split('');result=[...result,...text1]; prevOp.push(['insert',text]);
                break;
            case 'delete': if(result.length){ prevOp.push(['delete',result.pop()])};
                break;
            case 'copy' : if(+text <= result.length){ copy=[]; copy = result.slice(+text); } else { return ''}
                break;
            case 'paste': result=[...result,...copy];
                break;
            case 'undo' : let todo = prevOp.pop();
                                if(todo[0]==='delete'){result.push(todo[1])}
                                else if(todo[0]==='insert'){result.splice(result.length-todo[1].length, todo[1].length)}
        }
         console.log(result)
         console.log(copy)
    }
    return result.join('');

}

console.log(newTextEditor(['INSERT code', 'INSERT signal','DELETE','UNDO']))

 console.log(newTextEditor(['INSERT Da','COPY 0',"UNDO",'PASTE','PASTE', 'COPY 2','PASTE', 'PASTE', 'DELETE','INSERT aaam' ]))
