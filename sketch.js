var boxes = [];
var h2;
var seven, eight, nine, plus;
var four, five, six, minus;
var one, two, three, multiply;
var ce, zero, equal, divide;

function setup() {
	createCanvas(480,700);
	background('white');
	h2 = createElement('h2', 'Select broken keys');
	h2.position(10,10);
	seven = createCheckbox('7');
	seven.position(10,60);
	eight = createCheckbox('8');
	eight.position(50,60);
	nine = createCheckbox('9');
	nine.position(90,60);
	plus = createCheckbox('+');
	plus.position(130,60);
	four = createCheckbox('4');
	four.position(10,80);
	five = createCheckbox('5');
	five.position(50,80);
	six = createCheckbox('6');
	six.position(90,80);
	minus = createCheckbox('-');
	minus.position(130,80);
	one = createCheckbox('1');
	one.position(10,100);
	two = createCheckbox('2');
	two.position(50,100);
	three = createCheckbox('3');
	three.position(90,100);
	multiply = createCheckbox('x');
	multiply.position(130,100);
	ce = createCheckbox('CE');
	ce.position(10,120);
	zero = createCheckbox('0');
	zero.position(50,120);
	equal = createCheckbox('=');
	equal.position(90,120);
	divide = createCheckbox('/');
	divide.position(130,120);

}

function draw() {
	calculator();
	drawX();
}

function calculator() {
	fill('green');
	stroke(0);
	strokeWeight(1);
	rect(40,200, 320,400);
	// 40, 360
	// 200, 600
	fill('white');
	rect(42,202,316,76);
	var w = 80;
	for(j=0; j<4; j++){
		for(i=0; i<4; i++){
			fill('white');
			rect(42+i*w, 282+j*w,76, 76);
		}
	}
	fill('black');
	textSize(30);
	text('0',320, 250)
	text('7', 40+30, 280+50);
	text('8', 120+30, 280+50);
	text('9', 200+30, 280+50);
	text('+', 280+30, 280+50);

	text('4', 40+30, 360+50);
	text('5', 120+30, 360+50);
	text('6', 200+30, 360+50);
	text('-', 280+30, 360+50);

	text('1', 40+30, 440+50);
	text('2', 120+30, 440+50);
	text('3', 200+30, 440+50);
	text('x', 280+30, 440+50);

	text('.', 40+20, 520+50);
	text('0', 120+30, 520+50);
	text('=', 200+30, 520+50);
	text('/', 280+30, 520+50);

}

function cross(x,y){
	stroke('red');
	strokeWeight(4);
	line(x,y,x+72,y+72);
	line(x,y+72,x+72,y);
}

function drawX() {
	if(seven.checked()){
		cross(44,284);
	}
	if(eight.checked()){
		cross(124,284);
	}if(nine.checked()){
		cross(204,284);
	}if(plus.checked()){
		cross(284,284);
	}if(four.checked()){
		cross(44,364);
	}if(five.checked()){
		cross(124,364);
	}if(six.checked()){
		cross(204,364);
	}if(minus.checked()){
		cross(284,364);
	}if(one.checked()){
		cross(44,444);
	}if(two.checked()){
		cross(124,444);
	}if(three.checked()){
		cross(204,444);
	}if(multiply.checked()){
		cross(284,444);
	}if(ce.checked()){
		cross(44,524);
	}if(zero.checked()){
		cross(124,524);
	}if(equal.checked()){
		cross(204,524);
	}if(divide.checked()){
		cross(284,524);
	}
}
