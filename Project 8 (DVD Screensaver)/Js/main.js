var img=new Image();
img.src="Image/dvd_Logo.png";
img.style.width='100px';
img.style.height='100px';

window.addEventListener('resize', function(event) {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}, true);

const canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
var image_dimension=window.innerWidth/8;
var x=Math.floor(Math.random() *(canvas.width-image_dimension));
var y=Math.floor(Math.random() *(canvas.height-image_dimension));
var xvelo=Math.floor((Math.random()-0.5)*5);
var yvelo=Math.floor((Math.random()-0.5)*5);
var invert=true;
var invert_Value=100;

function update(){
    c.drawImage(img,x,y,image_dimension,image_dimension);
    x+=xvelo;
    y+=yvelo;
    if (x>canvas.width-image_dimension || x<0 ){
        xvelo= -xvelo;
    }
    if(y>canvas.height-image_dimension|| y<0){
        yvelo= -yvelo;
    }
}

function animate(){ 
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    update();
}

setInterval(()=>{
    if(invert){
        invert_Value=100;
        invert=false;
    }
    else{
        invert_Value=0;
        invert=true;
    }
    canvas.style="filter: invert("+invert_Value+"%)";
},10000);

animate();