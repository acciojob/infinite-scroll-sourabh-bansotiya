//your code here!
let list = document.querySelector("#infiList");

let addItems = (start, end) => {
	for (let i = start; i < end; i++) {
		let listItems = document.createElement('li');
		listItems.textContent = `Items ${i}`;
		list.appendChild(listItems);
	}
};

addItems(1,13);

list.addEventListener('scroll',() => {
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){

		const currItems = list.childElementCount;
		addItems(currItems + 1, currItems + 2);

	}
})


