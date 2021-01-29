document.querySelector("#button").addEventListener('click', getdata);

function getdata(e){
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.icndb.com/jokes/random/4', true);

	xhr.onload = function(){
		if(this.status==200){
			const results = JSON.parse(this.responseText);
			let html = '<ul>';

			results.value.forEach(function(res){
				html +=`<li>${res.joke}</li>`;
			});

			html +='</ul>';
			document.querySelector("#result").innerHTML = html;
		}
	}

	xhr.send();
}