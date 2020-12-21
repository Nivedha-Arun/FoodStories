$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse'); 
    })    
});

$('.move-up span').click(function() {
    $('html,body').animate({
        scrollTop:0
    },3000);
})

$('.site-background button').click(function() {
    $('html,body').animate({
        scrollTop:600
    },2000);
})

$('.site-background button').click(function() {
    $('html,body').animate({
        scrollTop:600
    },2000);
})

$(window).resize(function(){ location.reload()});

const controls=document.querySelector(".controls")
const container=document.querySelector(".thumbnail-container");
const allBox=container.children;


const containerWidth=container.offsetWidth;
const margin=50;
 var items=0;
 var totalItems=0;
 var jumpSlideWidth=0;

 responsive=[
    {breakPoint:{width:0,item:1}}, 
    {breakPoint:{width:600,item:2}}, 
    {breakPoint:{width:1000,item:3}}
    ]

    function load(){
        for(let i=0; i<responsive.length;i++){
            if(window.innerWidth>responsive[i].breakPoint.width){
                items=responsive[i].breakPoint.item
            }
        }
        start();
     }

     function start(){
        var totalItemsWidth=0
         for(let i=0; i<allBox.length;i++){
             allBox[i].style.width= (containerWidth/items)-margin + "px";
             allBox[i].style.margin = margin/2 + "px";
             totalItemsWidth+=containerWidth/items;
             totalItems++;
         }

         container.style.width=totalItemsWidth + "px";

    const allSlides=Math.ceil(totalItems/items); 
    for(let i=1;i<allSlides;i++){
        var li = document.createElement("IMG");
             li.setAttribute("src", "/images/circle-regular.svg");
             li.setAttribute("width", "10");
             li.setAttribute("id", i);
             li.setAttribute("class","img"+i);
             li.setAttribute("alt", "circle-regular");
             li.setAttribute("onclick","controlSlides(this)");
             if(i==1){
                 li.setAttribute("src", "/images/circle-solid.svg");
                 li.setAttribute("alt", "circle-solid");
             }
        controls.appendChild(li);
      }
     
}

function controlSlides(ele){
    const ul=controls.children;
    const li=ul[0];

    var active;

     for(let i=0;i<ul.length;i++){
         if(ul[i].alt=="circle-solid"){
             active=i;
             ul[i].setAttribute("src", "/images/circle-regular.svg");
             ul[i].setAttribute("alt", "circle-regular");
         }
     }
     ele.setAttribute("src", "/images/circle-solid.svg");
     ele.setAttribute("alt", "circle-solid");

        var numb=(ele.id-1)-active;
        jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
        container.style.marginLeft=-jumpSlideWidth + "px";
}

     window.onload=load();