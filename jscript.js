const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addtask(){
	if(inputBox.value == ''){
		alert("Write Some Text");
	}
	else{
		let lt = document.createElement("li");
		lt.innerHTML = inputBox.value;
		listContainer.appendChild(lt);
		let spant = document.createElement("span");
		spant.innerHTML = "\u00d7";
		lt.appendChild(spant);
	}
	inputBox.value = "";
	savenotes();
}
listContainer.addEventListener("click", function(ed){	// ed - event of clicking button
	if(ed.target.tagName == 'LI'){
		ed.target.classList.toggle("checked");
		savenotes();
	}
	else if(ed.target.tagName == 'SPAN'){
		ed.target.parentElement.remove();
		savenotes();
	}
},false)

function savenotes(){
	localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showtask();