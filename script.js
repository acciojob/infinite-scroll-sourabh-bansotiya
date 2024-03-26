//your code here!
let list = document.querySelector("#infiList");

list.innerText = "
	      <li>Item 1</li>
		  <li>Item 2</li>
		  <li>Item 3</li>
		  <li>Item 4</li>
		  <li>Item 5</li>
		  <li>Item 6</li>
		  <li>Item 7</li>
		  <li>Item 8</li>
		  <li>Item 9</li>
		  <li>Item 10</li>
		  <li>Item 11</li>
		  <li>Item 12</li>
		
	";

function infiList() {
             const para = document.createElement("li");
	         const paraText = document.createTextNode("Sourabh")
             para.appendChild (para);
             document.body.appendChild(para);
            }


