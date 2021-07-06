// Your code goes here

//Guided Project Lecture Notes

// function clickEventHandler(event){
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget);
// }

// console.log('something');

// homeLink.addEventListener(
//     'click',//string with the name of the event
//     () =>{
//         //things we want happening when this link gets clicked
//         console.log('the link got clicked');
//     })

// document.querySelector('nav').addEventListener('click', ()=>{
//     console.log('the nav got clicked');
// })

// // atach a 'click' event listener to the header lement
// //and console.log('')


// document.querySelector('header').addEventListener('click', ()=>{
//     console.log('the header got clicked');
// })

// document.querySelector('body').addEventListener('click', ()=>{
//     console.log('the body of the page got clicked');
// })

// document.addEventListener('click',(event)=>{
//     console.log('You clocked on the document');
// })

// document.addEventListener('click', clickEventHandler)


// document.querySelector('a').addEventListener('click', clickEventHandler)
// document.querySelector('a').addEventListener('click', event =>{
//     event.stopPropagation()
//     //this will sabotage bubbling
//     //seldom good reason to do this
//     console.log('hahaa, sabotaging propagation!')
// })
// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler,{capture:true})
// document.body.addEventListener('click', clickEventHandler)
// document.addEventListener('click', clickEventHandler)
// window.addEventListener('click', clickEventHandler)


//Start of Today's Project

// click

const navBar= document.querySelector(".nav");
navBar.addEventListener("click",(e)=>{
    e.preventDefault();
})

const navigation = document.querySelectorAll(".nav a");
navigation.forEach(element =>{
    element.addEventListener("click", (e)=>{
        e.stopPropagation();
        e.preventDefault();
        console.log(`${e.target.innerText} was clicked`)
    });
})


// // mouseleave

busImg.addEventListener('mouseleave', ()=>{
    busImg.style.transform ="scale(1)";
    busImg.style.transition ="transform 1s";
})

// //mouseenter

busImg.addEventListener("mouseenter", ()=>{
    busImg.style.transform ="scale(0.7)";
})


// //mouseover

const button = document.querySelectorAll('.btn');
button.forEach(el =>{el.addEventListener("mouseover",()=>{
    el.style.color ="black";
    el.style.backgroundColor="#9980FA";
})
    ;})

// //mouseout

button.forEach(el =>{el.addEventListener("mouseout",()=>{
    el.style.color ="white";
    el.style.backgroundColor="#17A2B8";
})
    ;})


// //double click event
const changeImg = document.querySelector('#beachImg');
changeImg.addEventListener("dblclick",()=>{
    changeImg.src ="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80";
})

// //keydown 
const bodyThree = document.querySelector('body');
bodyThree.addEventListener("keydown",()=>{
    bodyThree.style.backgroundColor="#62beca4d";
})

// //keyup

const bodyTwo = document.querySelector("body");
bodyTwo.addEventListener("keyup",()=>{
    bodyTwo.style.backgroundColor= "pink";
});



// //scroll
const paragraph =document.querySelector('p');
window.addEventListener('scroll', () => {
  paragraph.style.color="purple";
})

//copy 

const source =document.querySelector('body');
source.addEventListener('copy',(e)=>{
    alert('DO NOT COPY');
})

//focus
// const heading =document.querySelector('header');
// heading.addEventListener('focus',()=>{
//     heading.style.backgroundColor="green";
// })


//resize

const lastImg = document.querySelector(".img-fluid");

window.addEventListener('resize', (event) => {
    lastImg.src="../img/fun.jpg"
    alert('resizing image');
});


// //keypress
const paragraphs = document.querySelectorAll("p");
document.body.addEventListener("keypress",(event)=>{
    console.log(event.keyCode);
    paragraphs.forEach(item =>{
            item.style.color ="green";
    })
 
})

//         paragraph2.style.color = "green";
// })
