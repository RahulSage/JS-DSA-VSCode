function processData(input) {
    //Enter your code here

    var processStack = [];
    var currentString = "";

    function add(str){
        processStack.push(currentString);
        currentString+= str;
    }

    function del(index){
        processStack.push(currentString);
        currentString =  currentString.substring(0,currentString.length - index);

    }

    function print(index){
        console.log(currentString[index-1] ? currentString[index-1] : "");
    }

    function undo(){
        currentString = processStack.pop();
    }
    
    const ops = input.split("\n").slice(1);	
    ops.forEach(op => {
        let o = op.split(" ");           
        switch (o[0])
        {
            case "1": add(o[1]); break;
            case "2": del(Number(o[1])); break;
            case "3": print(Number(o[1])); break; 
            case "4": undo(); break; 
        }
    })
} 