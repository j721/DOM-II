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

const navigation = document.querySelectorAll("a");
navigation.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.transition ="color 0.5s";
        element.style.color ="purple";
    });
})


const body = document.querySelector("body");

body.addEventListener('click', () => {
  body.style.backgroundColor="#62beca4d";
});

const header = document.querySelector('header');
header.addEventListener('click',()=>{
    header.style.backgroundColor="papayawhip";
});