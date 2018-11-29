let textbox;
var pendown = true;

const COMMANDS = ["fd", "bd", "rt", "lt", "pu", "pd", "clr", "rpt"];

var Command = {
    fd: function(dist) {
        if(pendown) {
            line(0, 0, dist, 0)
        }
        translate(dist, 0);
    },

    bd: function(dist) {
        if(pendown) {
            line(0, 0, -dist, 0)
        }
        translate(-dist, 0);
    },

    rt: function(dist) {
        rotate(dist)
    },

    lt: function(dist) {
        rotate(-dist)
    },

    pu: function(dist) {
        pendown = false;
    },

    pd: function(dist) {
        pendown = true;
    },

    clr: function(r, g, b) { //more than one parameter will be separated by commas: clr[255,0,255]
        stroke(r, g, b);
    }
};

function setup() {
    angleMode(DEGREES);
    createCanvas(400, 400);
    stroke(255, 255, 255);
    background(0);

    //create buttons and get textbox by id
    runB = createButton('Run');
    clearB = createButton('Clear');
    textbox = select('#turtle-text')

    //when run button is pressed
    runB.mousePressed(function() {
        background(0);
        translate(width/2, height/2);
        let text = textbox.value();

        if(text.includes("[")) { //clean up parameters
            /*
                PLAN: 
                FIRST: Find all the text in brackets using REGEX
                THEN: Go there and get rid of spaces again using REGEX
            */
            //  REGEX FOR BRACKETS     \[.*?\]/g
        }

        let tokens = text.split(' ');

        //TODO: Make it so parameters separated by commas can have spaces in between them
        //eg. clr[255, 0, 0] rather than clr[255,0,0]

        //loop through tokens, find commands and run correlated functions
        for(var i = 0; i < tokens.length; i++) {
            console.log(tokens[i]);
            if(tokens[i].includes("[")) { // if the command in question takes more than one parameter

                /**************************************************************************************** */
                let command = getCommand(tokens[i]);
                if(COMMANDS.includes(command)) { //function that takes in arguments like clr[r,g,b] 
                    let parameters = getParams(tokens[i])
                    Command[command].apply(null, parameters); //run command based on parameters
                } else { //function like a loop rpt 3[code]

                }
                /**************************************************************************************** */
                
            } else {
                Command[tokens[i]](tokens[++i]);
            }  
        }
    });
    
    //when clear button is pressed
    clearB.mousePressed(function() {
        background(0);
    });
}

function getParams(token) {
    let openBrack = token.indexOf("["); 
    let closeBrack = token.indexOf("]");
    let parameters = token.substr(openBrack+1,closeBrack-openBrack-1);

    return parameters.split(",")
}

function getCommand(token) {
    let openBrack = token.indexOf("[");
    return token.substr(0, openBrack);  
}

function draw() {
    
}

