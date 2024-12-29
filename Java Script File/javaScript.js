let mainDiv = document.querySelector(".gallery-mid")
let lightBox = document.querySelector(".lightBox")
let lightBoxInner = document.querySelector(".lightBoxInner")
let img = document.querySelector(".lightBoxInner img")
let closeZoomed = document.querySelector(".lightBoxInner h1 span")

mainDiv.addEventListener("click",(event)=>{
    if(event.target.tagName=="IMG"){
       let currentSrc = event.target.src;
       lightBox.classList.add('lightBoxShow')
       lightBoxInner.classList.add('lightBoxInnerShow')
       img.src=currentSrc;
    }
})

closeZoomed.addEventListener("click",()=>{
    lightBox.classList.remove('lightBoxShow')
    lightBoxInner.classList.remove('lightBoxInnerShow')
})

// Arrow
let arrow = document.querySelector("#arrow");
window.addEventListener("scroll",()=>{
    if(window.scrollY>=100){
        arrow.style.display="block";
    }
    else{
        arrow.style.display="none";
    }
})
arrow.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// Mobile Menu
let mobileMenuOpen = document.querySelector("#menuButton")
let mobileMenuView =document.querySelector(".MobileIcon")
let mobileMenuClose = document.querySelector(".MobileIcon h1 span")
mobileMenuOpen.addEventListener("click",()=>{
    mobileMenuView.classList.add('show')
})
mobileMenuClose.addEventListener("click",()=>{
    mobileMenuView.classList.remove('show')
})
//when click on mobile menu item close mobile menu
let mobileItem = document.querySelector(".MobileIcon .mobileNav")
mobileItem.addEventListener("click",(event)=>{
    if(event.target.tagName=="A"){
        mobileMenuView.classList.remove('show')
    }
})


/* For send message */

let btn = document.querySelector("#btn");
let para = document.querySelector(".para")
let input = document.querySelectorAll(".enterMessage .div input.value")

btn.addEventListener("click",()=>{
   if(input.value==''){
        alert('hi')
   }
para.innerHTML="hello"
} )


//Form Validation
let box = document.querySelector(".enterMessage")
let allInput = document.querySelectorAll(".enterMessage input")
let allSpan = document.querySelectorAll(".enterMessage span")

let errorShow=[
    {
        'inputName':'uname',
        'errorMessage':'Enter your Name',
        'regexAllow':true,
        'regex': /^[a-zA-Z ]+$/,
        'regexError':'Enter valid name'
    },
    {
        'inputName':'email',
        'errorMessage':'Enter your Email',
        'regexAllow':true,
            'regex':/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
             'regexError':'Please enter valid Email'
    },
    {
        'inputName':'number',
        'errorMessage':'Enter your Number',
        'regexAllow':true,
             'regex':/^\d{10}$/,
            'regexError':'10 digit required'
    }
]
box.addEventListener("click",(e)=>{
    if(e.target.tagName=="BUTTON"){
        allInput.forEach((element,index)=>{
            allSpan[index].innerHTML=''
            if(element.value==''){
                allSpan[index].innerHTML=errorShow[index].errorMessage
            }
            else if(errorShow[index].regexAllow){
                if(!errorShow[index].regex.test(element.value)){
                    allSpan[index].innerHTML=errorShow[index].regexError
                    
                }
                
            }
        })
        
    }
    
})


//digital clock
let displayClock = document.querySelector(".digitalClock span")
let dClock=()=>{
    let date = new Date();
    let hour = (date.getHours()>12 ? date.getHours()-12 : date.getHours())
    let currentHour = hour<10 ? "0"+hour : hour
    let currentMin = date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()
    let currentSec = date.getSeconds()< 10 ? "0"+date.getSeconds() : date.getSeconds()
    let hourType = hour>12 ? "PM" : "AM"
    displayClock.innerHTML=`${currentHour} : ${currentMin} : ${currentSec} ${hourType}`;  
}
setInterval(dClock,1000)
dClock()

/* <!--Frequently Ask Question--> */
let faq = document.querySelector(".FrequentlyAskQues")
let ques = document.querySelectorAll(".faqInner h2")
faq.addEventListener("click",(event)=>{
    if(event.target.tagName=="H2"){
        ques.forEach((e)=>{
              //  e.children[0].innerHTML="+";
            //    e.children[0].style.transform="rotate(0deg)";
            
            e.children[0].classList.remove('span-show')
                e.nextElementSibling.classList.remove('faq-Show')
        })
      //  event.target.children[0].innerHTML="-";
    //   event.target.children[0].style.transform="rotate(180deg)";
    event.target.children[0].classList.add('span-show')
        event.target.nextElementSibling.classList.toggle('faq-Show')
    }
})




