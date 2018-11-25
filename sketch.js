let textbox;
var pendown = true; 

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

    clr: function(r, g, b) { //more than one parameter will be separated by spaces: clr[255 0 255]
        stroke(r, g, b);
    }
};

function setup() {
    angleMode(DEGREES);
    createCanvas(400, 400);
    stroke(255, 0, 255);
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
            try {
                stroke(hue, sat, bright);
                if(tokens[i].includes("[")) {
                    let parameters = tokens[i].match(/\[.*?\]/)[1] //what's inside of [] 

                    console.log(parameters) //Find what's inside of []
                } else {
                    Command[tokens[i]](tokens[++i]);
                }
            //if we can't find the function we throw an error
            } catch (error) {
                alert(tokens[i] + " is not a valid function");
            }
            
        }
    });
    
    //when clear button is pressed
    clearB.mousePressed(function() {
        background(0);
    });
}
  
function draw() {
    
}

