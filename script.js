document.addEventListener("DOMContentLoaded", function() {

	var curio = document.querySelector("#curio");
	var curioArray = [
		"ciekawostka 1",
		"ciekawostka 2",
		"ciekawostka 3",
		"ciekawostka 4",
		"Lorem ipsum dolor sit amet nunc venenatis tristique, urna viverra sit amet nibh. Maecenas in metus. Aliquam orci. Vestibulum non eros. Mauris pretium wisi, eu quam. Nulla dolor sit amet mauris eget felis non nibh wisi, dapibus risus. Suspendisse in sollicitudin lorem, at libero. In ornare euismod. Integer non felis. Donec libero a dolor. Mauris eget leo ac dolor. Nam id sapien eu tincidunt nonummy, tellus nec felis laoreet commodo, tortor vehicula viverra. Cras aliquet. Quisque vitae ligula tempor vitae, congue risus vel sodales arcu, eget volutpat quis, interdum wisi at fermentum ut, blandit velit wisi, aliquam iaculis pede cursus tristique, urna dapibus tellus. Morbi accumsan rutrum, libero odio eget sapien pede bibendum tellus, at quam. Phasellus tellus dui at tellus wisi, mollis lobortis. In cursus ante. Proin cursus non, posuere dui. Suspendisse et magnis dis parturient montes, nascetur ridiculus mus. Nam molestie. Vivamus orci sit amet wisi. Mauris ultrices. Sed diam iaculis et, enim. Duis at neque. Nunc placerat porta tincidunt",
		"ciekaowstka 5",
			"",
];
	var arrayLenght= (curioArray.length -1);
	var number = Math.floor(Math.random() * arrayLenght);

	curio.innerHTML= curioArray[number];

});