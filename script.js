var cpuChoice;
var userChoice;
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var enemy_rock = document.getElementById("enemy_rock");
var enemy_paper = document.getElementById("enemy_paper");
var enemy_scissors = document.getElementById("enemy_scissors");


rock.addEventListener('click', function(){
	moveRock(event);
})

paper.addEventListener('click', function(){
	movePaper(event);
})

scissors.addEventListener('click', function(){
	moveScissors(event);
})

function moveRock(e) {
   rock.style.left = "350px";
   paper.style.display = "none";
   scissors.style.display = "none";
   vs.style.display = "initial";
   you.style.display = "initial";
   cpu.style.display = "initial";
}

function movePaper(e) {
   paper.style.left = "350px";
   rock.style.display = "none";
   scissors.style.display = "none";
   vs.style.display = "initial";
   you.style.display = "initial";
   cpu.style.display = "initial";
}

function moveScissors(e) {
   scissors.style.left = "350px";
   rock.style.display = "none";
   paper.style.display = "none";
   vs.style.display = "initial";
   you.style.display = "initial";
   cpu.style.display = "initial";
}

cpuChoice = Math.floor((Math.random() * 3) + 1);

document.querySelector('.rock').addEventListener('click', function() {
	userChoice = 1;
	if(cpuChoice === 1){
		enemy_rock.style.display = "initial";
		youTie.style.display = "initial";
	} else if(cpuChoice === 2){
		enemy_paper.style.display = "initial";
		youLose.style.display = "initial";
	} else if(cpuChoice === 3){
		enemy_scissors.style.display = "initial";
		youWin.style.display = "initial";
	}
});

document.querySelector('.paper').addEventListener('click', function() {
	userChoice = 2;
	if(cpuChoice === 1){
		enemy_rock.style.display = "initial";
		youWin.style.display = "initial";
	} else if(cpuChoice === 2){
		enemy_paper.style.display = "initial";
		youTie.style.display = "initial";
	} else if(cpuChoice === 3){
		enemy_scissors.style.display = "initial";
		youLose.style.display = "initial";
	}
});

document.querySelector('.scissors').addEventListener('click', function() {
	userChoice = 3;
	if(cpuChoice === 1){
		enemy_rock.style.display = "initial";
		youLose.style.display = "initial";
	} else if(cpuChoice === 2){
		enemy_paper.style.display = "initial";
		youWin.style.display = "initial";
	} else if(cpuChoice === 3){
		enemy_scissors.style.display = "initial";
		youTie.style.display = "initial";
	}
});