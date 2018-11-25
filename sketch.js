let textbox;
var pendown = true; 

var Command = {
    fd: function (dist) {
        if(pendown) {
            stroke(255);
            strokeWeight(5);
            line(0, 0, dist, 0)
        }
        translate(dist, 0);
    },

    bd: function (dist) {
        if(pendown) {
            stroke(255);
            strokeWeight(5);
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

    pu: function(dist) {
        pendown = false;
    },

    pd: function(dist) {
        pendown = true;
    }
};

function setup() {
    angleMode(DEGREES);
    createCanvas(400, 400);
    translate(width/2, height/2);
    background(0);
    textbox = select('#turtle-text')

    let text = textbox.value();
    let tokens = text.split(' ');

    pendown = true;
    
    //loop through tokens, find commands and run correlated functions
    for(var i = 0; i < tokens.length; i++) {
        Command[tokens[i]](tokens[++i]);
    }
    
    //TODO: Add run button and pu/pd
    /*
    More complicated command ideas:
    clr (color)
    lp (loop)
    */

}
  
function draw() {
    
}