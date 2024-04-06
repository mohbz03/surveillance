let but = document.getElementById("but");
let textbut = document.getElementById("textbtn");
let inli = document.getElementById("in1");
let outlin = document.getElementById("textInline");
let retour1 = document.getElementById("retour1");

//const searchBox = document.querySelector('.search-box'); 
const searchBox = document.getElementById("X1"); 
const searchBox2 = document.getElementById("X2"); 
const options = document.querySelectorAll('.options li'); 
const selectedOption = document.querySelector('.selected-option');
let btnY = document.getElementById( 'btnY' );
let SB1 = document.getElementById( 'SB1' );

textbut.addEventListener( "click", function() {
    but.classList.add("butT")
    inli.classList.add("inlineBT")
    outlin.classList.add("textInlineCT")
});
retour1.addEventListener( "click", function() {
    but.classList.remove("butT")
    inli.classList.remove("inlineBT")
    outlin.classList.remove("textInlineCT")
	SB1.classList.remove("showS");
    but.classList.remove("butAn")
});

but.addEventListener("click",function(){
    SB1.classList.toggle("showS");
    but.classList.toggle("butAn")
});

/****************************/


// Check if search country present in menu list 
searchBox.addEventListener('input', () => { 
	const searchTerm = searchBox.value.toLowerCase(); 

	options.forEach(option => { 
		const text = option.textContent.toLowerCase(); 
		if (text.includes(searchTerm)) { 
			option.style.display = 'block'; 
		} else { 
			option.style.display = 'none'; 
		} 
	}); 
}); 
searchBox2.addEventListener('input', () => { 
	const searchTerm = searchBox2.value.toLowerCase(); 

	options.forEach(option => { 
		const text = option.textContent.toLowerCase(); 
		if (text.includes(searchTerm)) { 
			option.style.display = 'block'; 
		} else { 
			option.style.display = 'none'; 
		} 
	}); 
}); 

// Iterating and printing the selected country name 
for (const option of options) { 
	option.addEventListener('click', () => { 
		const value = option.getAttribute('data-value'); 
		btnY.innerText=value;
		searchBox.value = value; 
		for (const opt of options) { 
			opt.style.display = 'block'; 
		} 
	}); 
} 


let btnY1 = document.getElementById( 'btnY1' );
let SB2 = document.getElementById( 'SB2' );
let but1 = document.getElementById("but1");
let textbut1 = document.getElementById("textbtn1");
let inli1 = document.getElementById("in11");
let outlin1 = document.getElementById("textInline1");
let retour2 = document.getElementById("retour2");


textbut1.addEventListener( "click", function() {
    but1.classList.toggle("butT")
    inli1.classList.toggle("inlineBT")
    outlin1.classList.toggle("textInlineCT")
});
but1.addEventListener("click",function(){
    SB2.classList.toggle("showS");
    but1.classList.toggle("butAn")
});

retour2.addEventListener( "click", function() {
    but1.classList.remove("butT")
    inli1.classList.remove("inlineBT")
    outlin1.classList.remove("textInlineCT")
	SB2.classList.remove("showS");
    but1.classList.remove("butAn")
});

/******************************************************** */
let btnY2 = document.getElementById( 'btnY2' );
let but2 = document.getElementById("but2");
let btnY3 = document.getElementById( 'btnY3' );
let but3 = document.getElementById("but3");
let textbut12 = document.getElementById("textbtn12");
let inli12 = document.getElementById("in12");
let outlin2 = document.getElementById("textInline2");
let retour3 = document.getElementById("retour3");
let LinkLogo1 = document.getElementById("LinkLogo1");
let SB3 = document.getElementById( 'SB3' );
let SB4 = document.getElementById( 'SB4' );


textbut12.addEventListener( "click", function() {
	but3.classList.add("butT");
    but2.classList.add("butP");
    inli12.classList.add("inlineBT");
    outlin2.classList.add("textInlineCT");
	LinkLogo1.classList.add("shrA");
});
but2.addEventListener("click",function(){
    SB3.classList.toggle("showS");
    but2.classList.toggle("butAn")
});
but3.addEventListener("click",function(){
    SB4.classList.toggle("showS");
    but3.classList.toggle("butAn")
});

retour3.addEventListener( "click", function() {
    but2.classList.remove("butP");
    but3.classList.remove("butT");
    inli12.classList.remove("inlineBT");
    outlin2.classList.remove("textInlineCT");
	SB4.classList.remove("showS");
	SB3.classList.remove("showS");
    but2.classList.remove("butAn");
    but3.classList.remove("butAn");
	LinkLogo1.classList.remove("shrA");
});
/******************************************************** */
let btnY4 = document.getElementById( 'btnY4' );
let but4 = document.getElementById("but4");
let btnY5 = document.getElementById( 'btnY5' );
let but5 = document.getElementById("but5");
let textbut13 = document.getElementById("textbtn13");
let inli13 = document.getElementById("in13");
let outlin3 = document.getElementById("textInline3");
let retour4 = document.getElementById("retour4");
let LinkLogo2 = document.getElementById("LinkLogo2");
let SB5 = document.getElementById( 'SB5' );
let SB6 = document.getElementById( 'SB6' );


textbut13.addEventListener( "click", function() {
	but5.classList.add("butT");
    but4.classList.add("butP");
    inli13.classList.add("inlineBT");
    outlin3.classList.add("textInlineCT");
	LinkLogo2.classList.add("shrA");
});
but4.addEventListener("click",function(){
    SB5.classList.toggle("showS");
    but4.classList.toggle("butAn")
});
but5.addEventListener("click",function(){
    SB6.classList.toggle("showS");
    but5.classList.toggle("butAn")
});

retour4.addEventListener( "click", function() {
    but4.classList.remove("butP");
    but5.classList.remove("butT");
    inli13.classList.remove("inlineBT");
    outlin3.classList.remove("textInlineCT");
	SB5.classList.remove("showS");
	SB6.classList.remove("showS");
    but4.classList.remove("butAn");
    but5.classList.remove("butAn");
	LinkLogo2.classList.remove("shrA");
});
// Check if search country present in menu list 
searchBox.addEventListener('input', () => { 
	const searchTerm = searchBox.value.toLowerCase(); 

	options.forEach(option => { 
		const text = option.textContent.toLowerCase(); 
		if (text.includes(searchTerm)) { 
			option.style.display = 'block'; 
		} else { 
			option.style.display = 'none'; 
		} 
	}); 
}); 

// Iterating and printing the selected country name 
for (const option of options) { 
	option.addEventListener('click', () => { 
		const value = option.getAttribute('data-value'); 
		btnY.innerText=value;
		searchBox.value = value; 
		for (const opt of options) { 
			opt.style.display = 'block'; 
		} 
	}); 
}