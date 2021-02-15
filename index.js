var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.radius = obj.radius;
        this.color = obj.color;
    }
    Circle.prototype.getRadius = function () {
        console.log(this.radius);
    };
    Circle.prototype.getColor = function () {
        console.log(this.color);
    };
    Circle.prototype.toString = function () {
        console.log("Circle[radius=" + this.radius + ',color=' + this.color);
    };
    Circle.prototype.getArea = function () {
        var area = (22 / 7) * this.radius * this.radius;
        console.log('Area=' + area);
    };
    Circle.prototype.getCircumference = function () {
        var circum = 2 * (22 / 7) * this.radius;
        console.log("circumference=" + circum);
    };
    return Circle;
}());
var obj = {
    radius: 1.0,
    color: 'red'
};
var cc = new Circle(obj);
console.log(cc);
cc.getRadius();
cc.getColor();
cc.toString();
cc.getArea();
cc.getCircumference();
//cc.brand='sdfsdf';
//cc.noofseat=7;
//cc.start()
