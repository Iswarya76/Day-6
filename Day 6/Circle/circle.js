//Convert the UML diagram to Typescript class. - use number for double
//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
 class Circle{ 
     constructor(radius=1.0,color="red"){ 
         this.radius = radius; 
         this.color = color; 
     } 
     toString(radius=this.radius){ 
         this.radius = radius; 
         return `After converting to string ${(this.radius).toString()+" "+(this.color).toString()}` 
     } 
     circle(){ 
         return `color is ${this.color} and radius is ${this.radius}`; 
     } 
     circle(radius){ 
         this.radius=radius; 
         return `radius is ${this.radius}`; 
     } 
     circle(radius,color){ 
         this.radius=radius; 
         this.color=color; 
         return `The radius is ${this.radius} and color is ${this.color}`; 
     } 
     setRadius(radius=1.0){ 
         this.radius=radius; 
     } 
     getRadius(){ 
         return `The radius by get and set is ${this.radius}`; 
     } 
     setColor(color="red"){ 
         this.color=color; 
     } 
     getColor(){ 
         return `The color by get and set is ${this.color}`; 
     } 
  
     getArea(){ 
         return `The area is ${(this.radius)*(this.radius)*4}`; 
     } 
     getCircumference(){ 
         return `The circumference is ${(this.radius)*2*(Math.PI)}`; 
     } 
 } 
 let circ = new Circle(6,"Green"); 
 console.log(circ); 
 console.log(circ.circle()); //undefined since the medthod1 is overrided by method2 and by method3 
 console.log(circ.circle(5)); //radius is 5 and color is undefined because method2 is overrided by method 3 
 console.log(circ.circle(4,"Orange")); //radius is 4 and color is Orange executes with no issues
 circ.setRadius(); 
 console.log(circ.getRadius()); //set radius to default to 1.0 and accessed by getRadius() method
 circ.setColor(); 
 console.log(circ.getColor()); //set color to default red and accessed by getColor() method
 console.log(circ.toString(6)); 
 console.log(circ.getArea());  
 console.log(circ.getCircumference());