
	let myHeading = document.querySelector("h1");
	myHeading.textContent = "Hello World";
	
	document.querySelector("html").onclick = function(){
		alert("别戳我，我怕疼。");
	}
	let myButton = document.querySelector("button");

	function setUserName(){
		let myName = prompt("请输入你的名字。");
		if(!myName || myName == null){
			setUserName();
		} else {
			localStorage.setItem("name", myName);
			myHeading.textContent = "酷毙了，" + myName;
		}
	}
	
	if(!localStorage.getItem("name")){
		setUserName();
	} else {
		let stroedName = localStorage.getItem("name");
		myHeading.textContent = "酷毙了，" + stroedName;
	}
	
	myButton.onclick = function(){
		setUserName();
	}