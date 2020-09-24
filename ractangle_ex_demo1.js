let Rectangle = function (length1,width1){
    this.length1 = length1;
    this.width1 = width1;

    this.getLength = function (){
        return this.length1;
    }
    this.getWidth = function (){
        return this.width1;
    }
    this.getArea = function (){
        return this.length1*this.width1;
    }
    this.getPerimeter = function (){
        return (this.width1+this.width1)*2;
    }
}
let rectangle = new Rectangle(300,100);
let length1 = rectangle.getLength();
let width1 = rectangle.getWidth();
let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
document.getElementById("ketqua").innerHTML=("Diện tích: "+ area + " Chu vi: "+ perimeter);
function createRectangle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.rect(20,20,length1,width1);
    ctx.fill();
}
createRectangle();