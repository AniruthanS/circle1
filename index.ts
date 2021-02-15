interface Configuration{
    radius: number;
    color: string;
    //getRadius: number;
    //getColor: string;
    //toString: string;
    //getArea: number;
    //getCircumference: number;
}

class Circle {
    radius
    color
constructor(obj: Configuration){
    this.radius=obj.radius;                                             
    this.color=obj.color;
    
}
getRadius(){
    console.log(this.radius);
}
getColor(){
    console.log(this.color);
}
toString(){
    console.log("Circle[radius="+this.radius+',color='+this.color);
}
getArea(){
    let area=(22/7)*this.radius*this.radius;
    console.log('Area='+area);
}
getCircumference(){
    let circum=2*(22/7)*this.radius;
    console.log("circumference="+circum);
}
}
let obj={
    radius:1.0,
    color:'red'
}
let cc=new Circle(obj);
console.log(cc);

cc.getRadius();
cc.getColor();
cc.toString();
cc.getArea();
cc.getCircumference();



//cc.brand='sdfsdf';
//cc.noofseat=7;
//cc.start()