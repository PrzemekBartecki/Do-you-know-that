document.addEventListener("DOMContentLoaded", function() {

	var curio = document.querySelector("#curio");
	var curioArray = [
		"Międzynarodowa Federacja Kynologiczna uznaje obecnie 332 rasy psów.",
		"W 1015 roku w kierunku Wysp Brytyjskich ruszyła flota wikingów tak wielka, że podobnej nigdy jeszcze nie widziano. Źródła różnią się w ocenie, ile statków liczyła – padają liczby od 200 do 1000. Na jej czele stał Knut, około osiemnastoletni brat króla Danii. Rzeczywiście, płynęła w nim piastowska krew, bo jego matka – niesłusznie zwana Świętosławą – była córką Mieszka I i siostrą Bolesława Chrobrego. Oczywiście, „pół-Polak” to chwyt retoryczny, bo na podobnej zasadzie Bolesławowie Chrobry i Krzywousty byli „pół-Czechami”, Kazimierzowie Odnowiciel i Sprawiedliwy „pół-Niemcami”, a królowa Jadwiga Andegaweńska „pół-Bośniaczką”.",
		"Enigmę została złamana przez trójkę polaków: Mariana Rejewskiego, Jerzego Różyckiego i Henryka Zygalskiego ",
		"Najdłuższy wyraz na świecie składa się z 189,819 liter. Wyraz ten jest chemiczną nazwą tytyny, czyli długiego, włóknistego białka mięśni poprzecznie prążkowanych u kręgowców. Tytyna jest największym znanym białkiem. Wymówienie pełnej nazwy zajmuje 3 godziny i 33 minuty.",
		"To czy chleb spadnie na podłogę posmarowaną stroną zależy od wysokości stołu ",
			""
		];
	var arrayLenght= (curioArray.length -1);
	var number = Math.floor(Math.random() * arrayLenght);

	curio.innerHTML= curioArray[number];

});