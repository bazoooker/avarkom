


// 	var priceHolder = document.getElementById("price-holder");
// 	var priceTotal = 0;


// function openTab(evt, tabId) {

// 	var i, tabcontent, tablinks, tabShown, tabChecks;


// 	tabcontent = document.getElementsByClassName("tab-content");
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}

// 	tablinks = document.getElementsByClassName("site-type-tabs__tab");
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].classList.remove("site-type-tabs__tab_active");
// 	}

// 	tabShown = document.getElementById(tabId);
// 	tabShown.style.display = "block";
// 	evt.currentTarget.className += " site-type-tabs__tab_active";

	

// 	var tabChecks = document.getElementsByClassName("toggle-round");
// 	for (i = 0; i < tabChecks.length; i++) {
// 		tabChecks[i].checked = false;
// 	}


// 	if (tabId == "promo") {
// 		priceTotal = 40000;
// 	}
// 	else if (tabId == "corp") {
// 		priceTotal = 60000;
// 	}
// 	else if (tabId == "shop") {
// 		priceTotal = 80000;
// 	}
// 	else {
// 		priceHolder.innerHTML = 0;		
// 	}
// 	priceHolder.innerHTML = priceTotal;
// }

// function addFeature(modificator) {
// 	if (event.currentTarget.checked) {
// 		priceTotal += modificator;	
// 	}
// 	else if (!event.currentTarget.checked) {
// 		priceTotal -= modificator;
// 	}
	
// 	priceHolder.innerHTML = priceTotal;
// }




// var rangeSlider, output;

// rangeSlider = document.getElementById("range-slider");
// output = document.getElementById("output");
// output.innerHTML = rangeSlider.value;

// rangeSlider.oninput = function() {
// 	output.innerHTML = this.value;
// }




// новая версия


var sitePrice, mod1, mod2, mod3, mod4, pages, priceTotal, priceHolder;

sitePrice = 0;
mod1 = 0;
mod2 = 0;
mod3 = 0;
mod4 = 0;
pages = document.getElementById("range-slider").value;
priceHolder = document.getElementById("price-holder");



function sitePick(evt, siteId, price) {

	var allTabs, tabContent, tabShown;

	allTabs 	= document.getElementsByClassName("site-type-tabs__tab");
	tabContent 	= document.getElementsByClassName("tab-content");
	tabShown 	= document.getElementById(siteId);
	sitePrice	= price;

	// удаляем у всех вкладок класс "active"
	for (var i = 0; i < allTabs.length; i++) {
		allTabs[i].classList.remove("site-type-tabs__tab_active")
	}

	// скрываем все табы
	for (var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
	// покажем выбранный таб
	tabShown.style.display = "block";
	evt.currentTarget.className += " site-type-tabs__tab_active";

	// пересчитаем стоимость проекта
	priceTotal = sitePrice + mod1 + mod2 + mod3 + mod4 + (+pages); 

	// обновим цену проекта
	priceHolder.innerHTML = priceTotal;
}



// добавляем стоимость чекбоксами
function addFeature(featureNum, featurePrice) {
	// если чекбокс не зачекан - передаем параметр в переменную, если зачекан - обнуляем переменную 
	if (featureNum == 'feature1' && event.currentTarget.checked) {
		mod1 = featurePrice;
	}
	else if (featureNum == 'feature1' && !event.currentTarget.checked) {
		mod1 = 0;
	}

	if (featureNum == 'feature2' && event.currentTarget.checked) {
		mod2 = featurePrice;
	}
	else if (featureNum == 'feature2' && !event.currentTarget.checked) {
		mod2 = 0;
	}

	if (featureNum == 'feature3' && event.currentTarget.checked) {
		mod3 = featurePrice;
	}
	else if (featureNum == 'feature3' && !event.currentTarget.checked) {
		mod3 = 0;
	}
	if (featureNum == 'feature4' && event.currentTarget.checked) {
		mod4 = featurePrice;
	}
	else if (featureNum == 'feature4' && !event.currentTarget.checked) {
		mod4 = 0;
	}


	// пересчитаем стоимость проекта
	priceTotal = sitePrice + mod1 + mod2 + mod3 + mod4 + (+pages); 

	// обновим цену проекта
	priceHolder.innerHTML = priceTotal;
}

function updatePagePrice(val) {
	pages = val;
	var output = document.getElementById("output");
	output.innerHTML = pages;
	// пересчитаем стоимость проекта
	priceTotal = sitePrice + mod1 + mod2 + mod3 + mod4 + (+pages); 

	// обновим цену проекта
	priceHolder.innerHTML = priceTotal;
}







// 	1. пометить активность вкладки
// 		убрать у всех вкладок класс "active"
// 		текущей дать класс "active"
// 		показать содержимое таба "active"



// 	2. сделать ее активной
// 	3. у всех остальных убрать класс "активная"
// 	4. Пролистать все элементы "чекбокс" и установить в unchecked
// 	5. Найти бегунок и установить его положение в ноль
// 	6. Принять аргумент "цена сайта" и записать его в переменную "цена сайта"
// 	7. Сделать перерасчет конечной стоимости: цена сайта + модификаторы + стр
// 	8. Вывести конечную стоимость
// }

// выборСайта()
// 1. Пролистать все элементы "чекбокс" и установить в unchecked
// 2. Найти бегунок и установить его положение в ноль
// 3. Принять аргумент "цена сайта" и записать его в переменную "цена сайта"
// 5. Сделать перерасчет конечной стоимости: цена сайта + модификаторы + стр
// 6. Вывести конечную стоимость

// модификатор чекбокс
// 1. Проверить, checked\unchecked
// 2. Если checked - записать переданный аргумент в переменную "модификаторы-чекбоксы"
// 3. Если unchecked - присвоить значение 0
// 4. Сделать перерасчет конечной стоимости: цена сайта + модификаторы + стр
// 5. Вывести конечную стоимость

// модификатор слайдер
// 1. При каждом изменении value прибавлять это значение 
// к переменной "страницы"
// 2. При каждом изменении переменной "страницы" делать перерасчет конечной стоимости сайта
// 3. Выводить конечную стоимость.



// создать переменные для:
// "цена сайта" - цена сайта без допов
// "модификаторы-чекбоксы" - цены на допы
// "страницы" - значение бегунка
// "конечная стоимость" - "цена сайта" + "модификаторы" + "страницы"

