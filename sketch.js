let textbox;
let hue, sat, bright = 100;
var pendown = true; 

var Command = {
    fd: function (dist) {
        if(pendown) {
            line(0, 0, dist, 0)
        }
        translate(dist, 0);
    },

    bd: function (dist) {
        if(pendown) {
            line(0, 0, -dist, 0)
        }
        translate(-dist, 0);
    },

    rt: function (dist) {
        rotate(dist)
    },

    lt: function (dist) {
        rotate(-dist)
    },

    //TODO: Combine hu, st, br into one big clr function where the syntax is clr[h,s,b] (NO SPACES)
    hu: function(col) {
        hue = col;
    },

    st: function(col) {
        sat = col;
    },

    br: function(col) {
        bright = col;
    }
};

function setup() {
    angleMode(DEGREES);
    colorMode(HSB);
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
    
        pendown = true;

        console.log(tokens);

        //loop through tokens, find commands and run correlated functions
        for(var i = 0; i < tokens.length; i++) {
            try {
                stroke(hue, sat, bright);
                Command[tokens[i]](tokens[++i]);
            } catch (error) {
                alert(tokens[i] + " is not a valid function");
            }
            
        }
    });
    
    //when clear button is pressed
    clearB.mousePressed(function() {
        background(0);
    });

    //TODO: Add run button and pu/pd
    /*
    More complicated command ideas:
    clr (color)
    lp (loop)
    */

}
  
function draw() {
    
}