const site = document.forms[0];



site.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(site);
});

site.addEventListener("formdata", event => {
  // event.formData grabs the object
  const data = event.formData;

  // get the data
  const entries = [...data.entries()];

  console.log(entries);

  const values = [...data.values()];

  if(values[1].length < 5){
  	Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'У тебя слишком короткий пароль!'  
	});
  }
  else if(!(values[1] === values[2])){
  		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Пароли не совпадают!'
	});
  }
  else{
  		Swal.fire("Вы зарегистрировались!");
  		document.getElementById('id01').style.display='none';
  		document.getElementById('pod').style.display='inline-block';
  }

  console.log(values);
});