function Vector(x, y) {
	this.x = x;
	this.y = y;

}
Vector.prototype.add = function (v) {
	//add the two vectors 
	this.x = this.x + v.x;
	this.y = this.y + v.y;
}
Vector.prototype.subtract = function (v) {
	//return a new vector object with the subtracted values
	var a = this.x
	var b = this.y
	var x = v.x;
	var y = v.y
	return new Vector((a - x), (b - y))
}
Vector.prototype.multiply = function (n) {
	//return new vector object with the multiplied values
	var x = this.x * n;
	var y = this.y * n;
	return new Vector(x, y)
}
Vector.prototype.divide = function (n) {
	//return new vector object with the divided values
	var x = this.x / n
	var y = this.y / n
	return new Vector(x, y)
}
Vector.prototype.magnitude = function () 
{
	//return the magnitude of the vector using the formula h = √a^2+b^2
	return Math.sqrt((this.x * this.x) + (this.y * this.y));

}
Vector.prototype.magnitudeSquared = function () {
	//return the value of the magnitude of the vector squared
	var x = this.x;
	var y = this.y;
	return (x * x + y * y)
}
Vector.prototype.normalize = function () {
	//return the normalized magnitude provided the magnitude is not 0
	var mag = this.magnitude()
	if (mag != 0) {
		return this.divide(mag)
	} else if (mag == 0) {
		//console.log("magnitude is 0")
	}
}
Vector.prototype.setMagnitude = function (n) {
	// set the magnitude of a vector 
	var x = this.normalize().multiply(n)
		//console.log(x)
	return x
}

function constrain(a, b, c) {
	//constrain a value with a max and min value
	return Math.max(Math.min(a, c), b);
}