class rectangle{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }

    area(){
        console.log(this)
        return this.height*this.width
    }

    print(){
        return `rectangle with color ${this.color}`
    }
}

const rect = new rectangle(5,2,'blue');
const area = rect.area()
const print = rect.print()
console.log("area: "+area)
console.log(print)