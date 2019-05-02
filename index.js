// Your code here

class Polygon{
    constructor(lengths){
        this.lengths = lengths.sort();
    }
    get getCount(){
        return this.lengths.length;
    }
    get perimeter(){
        return this.lengths.reduce((sum, n) => {return sum+n})
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.getCount === 3 && this.lengths[2] < (this.lengths[0] + this.lengths[1])){
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        
        if (this.lengths.every((l) => {return l === this.lengths[0]})){
            return true
        }
        else {
            return false
        }
    }

    get area(){
        return Math.pow(this.lengths[0], 2)
    }
}