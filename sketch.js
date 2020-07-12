let textbox;
var pendown = true;

const COMMANDS = ["fd", "bd", "rt", "lt", "pu", "pd", "clr", "rpt"];

var Command = {
    fd: dist => {
        if(pendown) {
            line(0, 0, dist, 0)
        }
        
        translate(dist, 0);
        
    },

    bd: dist => {
        if(pendown) {
            line(0, 0, -dist, 0)
        }
        
        translate(-dist, 0);
        
    },

    rt: deg => {
        
        rotate(deg)
        
    },

    lt: deg => {
        
        rotate(-deg)
        
    },

    pu: () => {
        pendown = false;
    },

    pd: () => {
        pendown = true;
    },
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

        let tokens = text.split(' ');

        //loop through tokens, find commands and run correlated functions
        for(var i = 0; i < tokens.length; i++) {
            console.log(i);
            console.log(tokens[i]);
            if(Command[tokens[i]]) {
              Command[tokens[i]](tokens[i+1]);
            }
        }
    });
    
    //when clear button is pressed
    clearB.mousePressed(function() {
        background(0);
    });
}

function getCommand(token) {
    let openBrack = token.indexOf("[");
    return token.substr(0, openBrack);  
}

function draw() {
    
}

