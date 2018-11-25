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
    
    background(0);
    runB = createButton('Run');
    clearB = createButton('Clear');
    textbox = select('#turtle-text')

    runB.mousePressed(function() {
        translate(width/2, height/2);
        let text = textbox.value();
        let tokens = text.split(' ');
    
        pendown = true;

        console.table(tokens);
        
        //loop through tokens, find commands and run correlated functions
        for(var i = 0; i < tokens.length; i++) {
            Command[tokens[i]](tokens[++i]);
        }
    });
    
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