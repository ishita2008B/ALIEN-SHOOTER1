class alien {
  constructor (x,y,w,h,image){
    var options = {
      isStatic:true
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = loadImage("clipart4321245 (2).png");
  }
  display(){
    var pos = this.body.position;
    push();
   imageMode(CENTER);
    image(pos.x,pos.y,this.w,this.h);
   pop();

  }
  
}
