//const farContainer = document.querySelector('.faq-container');
//const faqTitle = document.querySelector(".faq-title");
//const faqContent = document.querySelector(".faq-content");
//const faqIcon = document.querySelector(".faq-icon");

//faqTitle.onclick = () => {
  //faqContent.classList.toggle("show");

  //faqIcon.classList.toggle("rotate-45")
//};


//Casing 
//Pansal Case(UserName, FirstName, LastName)
//Snake Case (user_name)
//Kebab Case(first-name)
//Camel Case (firstName)

//faqContainer.addEventListener ('click', () => {
  //event.target = element that we click
 //console.log(event.target.closest ('article'). querySelector('.faq-content'));

 //const clickArticle = event.target.closest('article')
// const clickedFaqContent = clickArticle.querySelector('.faq-content')
// const clickFaqIcon = clickArticle.querySelector('.faq-icon')

 //clickedFaqContent.classList.toggle('show');
 //clickFaqIcon.classList.toggle('rotate-45')

 //event.target.closest ('.faq-content')
//});

//Imperative-how to do (step by step)
//Declarative-what to do
//declarative approach is based on imperative approach

//imperative example

//let faqData = [
  //{
 //   title: '',
  //  content: '',
  //},
  //{
   // title: '',
//    content: '',
//  },
//  {
 //   title: '',
 //   content: '',
 // },
 // {
 //   title: '',
  //  content: '',
  //}
//]

//for (let i=0; i<faqData.length; i++){
  //const articleEl = document.createElement("article");
  //articleEl.classList.add("mt-8");
  //articleEl.innerHtML = `
   //<div class="flex item-center justify-between gap-2 p-4 border border-black faq-title">
   // <p>${faqData[i].title}</p> 
   // <i class="fa-solid fa-circle-plus fa-add faq-icon"></i>
  //</div><div class="p-4 border border-black border-t-0 faq-content show">
  //  ${faqData[i].content}
  //</div>`;
//
 //   faqContainer.appendChild(articleEl)
//}

//React

//for (let i=0; i<faqData.length; i++){
//  `<article class="mt-8>
  // <div class="flex item-center justify-between gap-2 p-4 border border-black faq-title">
    //<p>${faqData[i].title}</p> 
   // <i class="fa-solid fa-circle-plus fa-add faq-icon"></i>
  //</div><div class="p-4 border border-black border-t-0 faq-content show">
    // ${faqData[i].content}
    //</div>
    //</article>`;
//}

const faqContainer = document.querySelector(".faq-container");
const faqTitle = document.querySelector(".faq-title");
const faqContent = document.querySelector(".faq-content");
const faqIcon = document.querySelector(".faq-icon");

const burger = document.querySelector(".burger");
const dropdownMenu = document.querySelector(".dropdown");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("h-0")) {
    dropdownMenu.classList.remove("h-0");
    dropdownMenu.style.height = "198px";
    nav.style.backgroundColor = "white";
  } else {
    dropdownMenu.classList.add("h-0");
    dropdownMenu.style.height = "0px";
    nav.style.backgroundColor = "#FBBE24";
  }
});

faqContainer.addEventListener("click", (event) => {
  // event.target = element that we click
  const clickedArticle = event.target.closest("article");
  const clickedFaqContent = clickedArticle.querySelector(".faq-content");
  const clickedFaqIcon = clickedArticle.querySelector(".faq-icon");

  clickedFaqContent.classList.toggle("show");
  clickedFaqIcon.classList.toggle("rotate-45");
});