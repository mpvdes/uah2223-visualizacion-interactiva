var mapimg;


var lat=-0.8891;
var lon=41.6488;
var zoom=12;

var clat=0;
var clon=0;
var time=0.0;
var earthquakes;

function preload(){
    mapimg= loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-0.8891,41.6488,12,0/500x500?access_token=pk.eyJ1IjoiamFuZWJldGE3IiwiYSI6ImNqdHJmM3J2dDBuN3k0M3BjbnUwcmRzd3QifQ.gO1dFOUH5tWI60sK7lXxpQ');
    earthquakes= loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}


function mercX(lon){
    lon= radians(lon);
    var a= (256/PI)*pow(2, zoom);
    var b= lon+PI;
    return a*b;
}

function mercY(lat){
    lat= radians(lat);
    var a= (256/PI)*pow(2, zoom);
    var b= tan(PI/4+ lat/2);
    var c= PI- log(b);
    return a*c;
}


function setup(){
    createCanvas(500, 500);
    translate(width/2,height/2);
    imageMode(CENTER);
    image(mapimg,0,0);
    noStroke();

    // for(var i=0;i<earthquakes.length;i++){
    //     var data= earthquakes[i].split(/,/);
    //     //console.log(data);
    //     var lat= data[1];
    //     var lon= data[2];
    //     var x= mercX(lon)- cx;
    //     var y= mercY(lat)- cy;
    //     fill(0,235,255,200);
    //
    //     var r= random(10);
    //     ellipse(x,y,r,r);
    // }

}

function draw(){
    //background(mapimg);
    translate(width/2,height/2);
    imageMode(CENTER);
    //background(mapimg);
    //background(mapimg)

    for(var i=0;i<earthquakes.length;i++){
        var data= earthquakes[i].split(/,/);
        //console.log(data);
        var lat= data[1];
        var lon= data[2];
        var rad= data[4];

        var cx= mercX(clon);
        var cy= mercY(clat);
        var x= mercX(lon)- cx;
        var y= mercY(lat)- cy;
        fill(255,230-map(rad,0,3,0,100),0,80);

        // var r= noise(time+abs(rad))*20;
        var r= noise(time+abs(rad))*30;


        ellipse(x,y,r,r);
        //stroke(0,200,250);
        fill(255,255,0);
        ellipse(x,y,2,2);

    }

    time= time+0.1;

}
