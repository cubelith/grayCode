var n;

var dec2bin=function(dec){
    return (dec >>> 0).toString(2);
};

var decToBin=function(){
  return dec2bin(n,2);
  //return 0;
};
var decToGray=function(){
  return dec2bin(n^(n/2),2);
};

  n=5;
  size(400,400,1);
  var f = createFont("monospace");
textFont(f);

draw=function(){
  //background(0);
  fill(0,0,0,15);
  noStroke();
  rect(0,0,width,height);
  
  fill(0,191,255);
  textSize(30);
  textAlign(RIGHT,CENTER);
  
  text("dec:",width-10,85);
  text(n,width-10,115);
  text("bin:",width-10,185);
  text(decToBin(),width-10,215);
  text("Gray code:",width-10,285);
  text(decToGray(),width-10,315);
};

keyPressed=function(){
if(keyCode>=48 && keyCode<=57){
n=n*10+keyCode-48;
}
if(keyCode===8){
//backspace
//n=n/10;
n=floor(n/10);
}
if(keyCode===UP){
 n++;   
}
if(keyCode===DOWN){
    n--;
    if(n<0){
     n=0;   
    }
}


};

