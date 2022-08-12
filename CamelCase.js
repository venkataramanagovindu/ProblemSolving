function processData(input) {
    //Enter your code here
    var inputLine = input.split('\n');
    
    inputLine.forEach((eachInput) => {
        var splitedInputLine = eachInput.split(';');
        
        splitedInputLine[2] = splitedInputLine[2].trim();
        var output = "";
        if(splitedInputLine[0] == 'S'){
            for(let i = 0; i < splitedInputLine[2].length; i++){
                let char = splitedInputLine[2][i];
                
                if(char != '(' && char != ')' &&  char == char.toUpperCase())
                    char = " " + char.toLowerCase();
                    
                
                output += char; 
                
            }
            
            if(splitedInputLine[1] == 'M')
                output = output.substr(0, output.length - 2);
                    
            if(splitedInputLine[1] == 'C')
                output = output.substr(1, output.length);
        
        }

        

        if(splitedInputLine[0] == 'C'){
            for(let i = 0; i < splitedInputLine[2].length; i++){
                let char = splitedInputLine[2][i];
                
                if(char == " "){
                    i++;
                    char = splitedInputLine[2][i].toUpperCase();
                }

                output += char; 
                
            }
            
            if(splitedInputLine[1] == 'M')
                output += output.length && "()";
                    
            if(splitedInputLine[1] == 'C')
                output = output.length && output[0].toUpperCase() + output.substr(1, output.length);
        }
        
        console.log(output.trim());
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
