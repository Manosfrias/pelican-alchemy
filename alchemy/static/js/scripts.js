let scrollpos = window.scrollY
const header = document.querySelector("header")
const siteHeader = document.querySelector(".cabecera")
const siteNav = document.querySelector(".navegacion")
const header_height = header.offsetHeight
const add_class_on_scroll = function (){
	header.classList.add("minimize");
	siteHeader.classList.add("col-md-2");
	siteNav.classList.add("col-md-6 ");

} 
const remove_class_on_scroll = function (){
	header.classList.remove("minimize");
	siteHeader.classList.remove("col-md-2");
	siteNav.classList.remove("col-md-6 ");

} 
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
    console.log(scrollpos)
  })