function Particle (x,y) 
{
  //instance variables for the particle object every particle has its own vector for position, velocity and acceleration
  this.position = new Vector(x,y)
  this.acceleration = new Vector(0,0)
  this.velocity = new Vector(0,0)
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.lineWidth = 0;
}
Particle.prototype.timeStep = function()
{
	//add the acceleration to the velocity of the particle then add the velocity to the position
		this.velocity.add(this.acceleration)
		this.position.add(this.velocity)
}
Particle.prototype.draw = function (context) {
	//draw the particle
  context.save();
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY); 
  context.lineWidth = this.lineWidth;
  context.fillStyle = "rgba(255, 245, 243, 100)";
  context.beginPath();
  context.arc(this.position.x, this.position.y, 2, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }
  context.restore();
};
Particle.prototype.attraction = function(body){
	//subtract the position of the particle from the body to get the distance
	var direction = body.subtract(this.position)
	//square the distance
	var dSquared = direction.magnitudeSquared()
	//constrain the distance value so as not to divide by 0
	dSquared = constrain(dSquared, 5, 50)
	//universal gravitional constant figure for the canvas
	var G = 6.67408;
	//universal gravitational formula between two objects equation assuming both the masses of th objects is 1
	var magnitude = G/dSquared;
	//set the vector of the new magnitude to the variable x
	var x = direction.setMagnitude(magnitude);
	//add the new vector to the acceleration
	this.acceleration = x

}