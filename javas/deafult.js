a = 0;
b = quest.length;
c = a;


document.getElementById("q1").innerHTML = question1[0][0] + "<br />";
document.getElementById("q2").innerHTML = question1[0][1];
document.getElementById("verse").innerHTML = quest[a][2];



function next() {

	if (a < b){
	a++;
	c = a;
	document.getElementById("verse").innerHTML = quest[a][2];
	} else {
		a=0;
		c = a;
		document.getElementById("verse").innerHTML = quest[a][2];
		
	}
}


function marking() {

if (quest[a][2] === question1[0][2]) {
document.getElementById("mark").innerHTML = "Correct";
setTimeout(warn, 3000);

quest.splice(c,1);
question1.splice(0,1);
c = a;
b = quest.length - 1;
document.getElementById("question").innerHTML = question1[0][0] + " " + question1[0][1];
document.getElementById("verse").innerHTML = quest[a][2];
}

else
{
 	const element = document.querySelector('.apple');
	element.classList.add('animate__animated','animate__shakeX');
	document.getElementById("mark").innerHTML = "Wrong";
	setTimeout(warn, 3000);
}

};

function warn() {
	document.getElementById("mark").innerHTML = " ";

}

