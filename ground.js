class ground{
 constructor(x,y,width,height){
     var options={
         isStatic : true,
         'restitution':0,
         'friction':0,
         'density':1
     }

    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
   
 }
 display(){
     rectMode(CENTER);
     FileList(255)
     rect(this.body.position.x,this.body.position.y,this.width,this.height)
     
 }
};