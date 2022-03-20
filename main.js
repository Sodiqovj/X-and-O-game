let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let computer = document.querySelector(".computer")
let player = document.querySelector(".player")
let victory = document.querySelector('.victory')
let game = document.querySelector(".game")
let select = document. querySelector(".select")
let clock = document.querySelector(".click")
let click_sound = document.querySelector('.click_sound')
let back_icon = document.querySelector(".fa-x")
let number = [one,two,three,four,five,six,seven,eight,nine]
let select_menu = "double"
let turn = "player"
let text = document.querySelector("h1")
let firstX = 'X'
let firstY = 'O'
let level = true
let press = false
let press2 = false
let press3 = false
let press4 = false
let press5 = false
let press6 = false
let press7 = false
let press8 = false
let press9 = false
let win = false
let draw = 0


// back_icon
back_icon.addEventListener("click",function(){
	select.style.display = "block"
	game.style.display = "none"
	back_icon.style.display = "none"
	clock.play()
})

// computer
computer.addEventListener("click",function(){
	clock.play()
	setTimeout(function() {
	select.style.display = "none"
	game.style.display = "block"
	select_menu = "bot"
	back_icon.style.display = "block"
	 one.textContent = ""
	 two.textContent = ""
	 three.textContent = ""
	 four.textContent = ""
	 five.textContent = ""
	 six.textContent = ""
	 seven.textContent = ""
	 eight.textContent = ""
	 nine.textContent = ""
	 text.textContent = ""
	 repeat.style.display = "none"
	 press = false
	 press2 = false
	 press3 = false
	 press4 = false
	 press5 = false
	 press6 = false
	 press7 = false
	 press8 = false
	 press9 = false
	 run_music = true
	 level = true
	 win = false
	}, 500);
})

// player
player.addEventListener("click",function(){
	clock.play()
	setTimeout(function() {
		select.style.display = "none"
	game.style.display = "block"
	back_icon.style.display = "block"
	 one.textContent = ""
	 two.textContent = ""
	 three.textContent = ""
	 four.textContent = ""
	 five.textContent = ""
	 six.textContent = ""
	 seven.textContent = ""
	 eight.textContent = ""
	 nine.textContent = ""
	 text.textContent = ""
	 repeat.style.display = "none"
	 press = false
	 press2 = false
	 press3 = false
	 press4 = false
	 press5 = false
	 press6 = false
	 press7 = false
	 press8 = false
	 press9 = false
	 run_music = true
	 level = true
	 win = false
	}, 500);
})

// div-box
one.addEventListener('click',function(){
	if (level == true && win ==false && press==false) {
		one.textContent = firstX
		level = false
		press = true
	}
	else if(level == false && win ==false && press==false){
		one.textContent = firstY
		level = true
		press = true
	}
	click_sound.play();
})
two.addEventListener('click',function(){
	if (level == true && win ==false && press2==false) {
		two.textContent = firstX
		level = false
		press2 = true
	}
	else if(level == false && win ==false && press2==false){
		two.textContent = firstY
		level = true
		press2 = true
	}
	click_sound.play();
})
three.addEventListener('click',function(){
	if (level == true && win ==false && press3==false) {
		three.textContent = firstX
		level = false
		press3 = true
	}
	else if(level == false && win ==false && press3==false){
		three.textContent = firstY
		level = true
		press3 = true
	}
	click_sound.play();
})
four.addEventListener('click',function(){
	if (level == true && win ==false && press4==false) {
		four.textContent = firstX
		level = false
		press4 = true
	}
	else if(level == false && win ==false && press4==false){
		four.textContent = firstY
		level = true
		press4 = true
	}
	click_sound.play();
})
five.addEventListener('click',function(){
	if (level == true && win ==false && press5==false) {
		five.textContent = firstX
		level = false
		press5 = true
	}
	else if(level == false && win ==false && press5==false){
		five.textContent = firstY
		level = true
		press5 = true
	}
	click_sound.play();
})
six.addEventListener('click',function(){
	if (level == true && win ==false && press6==false) {
		six.textContent = firstX
		level = false
		press6 = true
	}
	else if(level == false && win ==false && press6==false){
		six.textContent = firstY
		level = true
		press6 = true
	}
	click_sound.play();
})
seven.addEventListener('click',function(){
	if (level == true && win ==false && press7==false) {
		seven.textContent = firstX
		level = false
		press7 = true
	}
	else if(level == false && win ==false && press7==false){
		seven.textContent = firstY
		level = true
		press7 = true
	}
	click_sound.play();
})
eight.addEventListener('click',function(){
	if (level == true && win ==false && press8==false) {
		eight.textContent = firstX
		level = false
		press8 = true
	}
	else if(level == false && win ==false && press8==false){
		eight.textContent = firstY
		level = true
		press8 = true
	}
	click_sound.play();
})
nine.addEventListener('click',function(){
	if (level == true && win ==false && press9==false) {
		nine.textContent = firstX
		level = false
		press9 = true
	}
	else if(level == false && win ==false && press9==false){
		nine.textContent = firstY
		level = true
		press9 = true
	}
	click_sound.play();
})

// new game
let repeat = document.querySelector('img')
repeat.addEventListener("click",function(){
	 click_sound.play()
	 one.textContent = ""
	 two.textContent = ""
	 three.textContent = ""
	 four.textContent = ""
	 five.textContent = ""
	 six.textContent = ""
	 seven.textContent = ""
	 eight.textContent = ""
	 nine.textContent = ""
	 text.textContent = ""
	 repeat.style.display = "none"
	 press = false
	 press2 = false
	 press3 = false
	 press4 = false
	 press5 = false
	 press6 = false
	 press7 = false
	 press8 = false
	 press9 = false
	 run_music = true
	 level = true
	 win = false
})

// win game
let run_music = true
let game_over = setInterval(function() {
	 if(one.textContent==firstX&&five.textContent==firstX&&nine.textContent==firstX){              
	 	text.textContent = "Ikkinchi o'yinchi yutdi"
   if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    
    win = true
    text.textContent = "X g'alaba qozondi"
	 }  
	 if(one.textContent==firstY&&five.textContent==firstY&&nine.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }     
	 
	 if(three.textContent==firstX&&five.textContent==firstX&&seven.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }     
	 
	  if(three.textContent==firstY&&five.textContent==firstY&&seven.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 } 
	 
	  if(one.textContent==firstX&&two.textContent==firstX&&three.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }     
	 
	  if(one.textContent==firstY&&two.textContent==firstY&&three.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }  
	 
	  if(four.textContent==firstX&&five.textContent==firstX&&six.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }  
	 
	 if(four.textContent==firstY&&five.textContent==firstY&&six.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }
	 
	 if(seven.textContent==firstX&&eight.textContent==firstX&&nine.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }  
	 
	 if(seven.textContent==firstY&&eight.textContent==firstY&&nine.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }  
	 
	 if(one.textContent==firstX&&four.textContent==firstX&seven.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }  
	 
	  if(one.textContent==firstY&&four.textContent==firstY&seven.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }  
	 
	  if(two.textContent==firstX&&five.textContent==firstX&eight.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }  
	 
	  if(two.textContent==firstY&&five.textContent==firstY&eight.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }
	 
	  if(three.textContent==firstX&&six.textContent==firstX&nine.textContent==firstX){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "X g'alaba qozondi"
	 }  
	 
	 if(three.textContent==firstY&&six.textContent==firstY&nine.textContent==firstY){
	 	text.style.display = 'block'
    if(run_music == true){
    		victory.play();
    		run_music = false
    }
    repeat.style.display = 'block'
    win = true
    text.textContent = "O g'alaba qozondi"
	 }
	 
	 // Do'stlik g'alaba
	// if(one.textContent!=''&&two.textContent!=''&&three.textContent!=''&&four.textContent!=''&&five.textContent!=''&&six.textContent!=''&&seven.textContent!=''&&eight.textContent!=''&&nine.textContent!=''){               
	// 	text.style.display = 'block'
  //  if(run_music == true){
    //		victory.play();
   // 		run_music = false
  //  }
//    repeat.style.display = "block"
  //  win = true
 //   text.textContent = "Do'stlik g'olib bo'ldi"
	// }
	
	 else if (number[0].textContent!==""&&number[1].textContent!==""&&number[2].textContent!==""&&number[3].textContent!==""&&number[4].textContent!==""&&number[5].textContent!==""&&number[6].textContent!==""&&number[7].textContent!==""&&number[8].textContent!=="") {
	 text.style.display = 'block'
   if(run_music == true){
   victory.play();
   run_music = false
   }
   repeat.style.display = "block"
   win = true
   text.textContent = "Do'stlik g'olib bo'ldi"
	}

	 
	 
}, 10)

//  win game
