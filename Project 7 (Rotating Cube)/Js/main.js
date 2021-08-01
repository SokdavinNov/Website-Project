const cube1=document.getElementById("cube1");
const cube2=document.getElementById("cube2");
const cube3=document.getElementById("cube3");

var cube1Rotation=1;
var cube2Rotation=1;
var cube3Rotation=1;

document.getElementById("cube1").addEventListener('click',rotateCube1);
document.getElementById("cube2").addEventListener('click',rotateCube2);
document.getElementById("cube3").addEventListener('click',rotateCube3);

function rotateCube1(){
    var cube1rotationName=-cube1Rotation*90+"deg";
    var cube2rotationName=-cube2Rotation*90+"deg";

    cube1.style.transform="rotateY("+cube1rotationName+")";
    cube2.style.transform="rotateY("+cube2rotationName+")";

    cube1Rotation++;
    cube2Rotation++;
}

function rotateCube2(){
    var cube1rotationName=-cube1Rotation*90+"deg";
    var cube2rotationName=-cube2Rotation*90+"deg";
    var cube3rotationName=-cube3Rotation*90+"deg";


    cube1.style.transform="rotateY("+cube1rotationName+")";
    cube2.style.transform="rotateY("+cube2rotationName+")";
    cube3.style.transform="rotateY("+cube3rotationName+")";

    cube1Rotation++;
    cube2Rotation++;
    cube3Rotation++;

}

function rotateCube3(){
    var cube2rotationName=-cube2Rotation*90+"deg";
    var cube3rotationName=-cube3Rotation*90+"deg";


    cube2.style.transform="rotateY("+cube2rotationName+")";
    cube3.style.transform="rotateY("+cube3rotationName+")";

    cube2Rotation++;
    cube3Rotation++;

}


