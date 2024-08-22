class Rectangle {
    constructor(height,weight,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }
    
    area(){
        return this.width*this.height;
    }

    paint(){
        console.log(`paint it using ${this.color} color`);
    }
}

const rect = new Rectangle(2,5,"red");//instantiation of class
console.log(rect.area());
console.log(rect.height);
console.log(rect.width);
console.log(rect.area());
rect.paint()