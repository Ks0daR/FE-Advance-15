(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,i){},QfWi:function(n,t,i){"use strict";i.r(t);i("L1EO"),i("UOjr"),i("JBxO"),i("FdtR");var e=i("jffb"),o=i.n(e),r={inputText:document.querySelector(".js-input"),output:document.querySelector(".display-info")},a=(i("8cZI"),i("lmye"),i("D/wG"),i("dIfx"));i("hi3g");var u=function(n){r.output.insertAdjacentHTML("afterbegin",[].concat(n))};var l=function(){r.output.innerHTML=""};var c=function(n){if(n.length>10&&a.a.error("Введите больше символов!"),n.length<10&&n.length>2){l();var t=n.map((function(n){return"<li>"+n.name+"</li>"})).join("");u(t)}if(1===n.length){l();var i=n.map((function(n){return"<li>"+n.name+'</li>\n      <li><img class="js-image" src="'+n.flag+'" alt=""></li>\n      <li>Сapital: '+n.capital+"</li>\n      <li>TopLevelDomain: "+n.topLevelDomain+"</li>\n      <li>Рopulation: "+n.population+"</li>"})).join("");u(i)}},p="https://restcountries.eu/rest/v2/name/";var f=o()((function(n){var t=n.target.value;fetch(""+p+t).then((function(n){return n.json()})).then((function(n){c(n)})).catch((function(n){return console.error("Error: ",n)}))}),500);r.inputText.addEventListener("input",f)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.75eec862a1e10531b7ba.js.map