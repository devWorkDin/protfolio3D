document.addEventListener("DOMContentLoaded",()=>{
    let appear , appearb , mesprojets , nouveautes ,accueil,body,propos,buta,diva,alllogo
    let intro , img_work , triangles
    let phrase1 , img_laptop

   // let logob = document.querySelector(".alllogo .logob")
    cv = document.querySelector(".cv") 
    phrase1 = document.querySelector(".phrase1")
    img_laptop = document.querySelector(".img_laptop")
    intro = document.querySelector(".intro")
    img_work = document.querySelector(".img_work")
    triangles = document.querySelector(".triangles")
    //alllogo = document.querySelector(".alllogo")
    diva = document.querySelector(".diva")
    buta = document.querySelector(".buta")
    body = document.querySelector("body")
    appear = document.querySelector(".appear")
    appearb = document.querySelector(".appearb")
    accueil = document.querySelectorAll("ul>li")[0]
    mesprojets = document.querySelectorAll("ul>li")[1]
    nouveautes = document.querySelectorAll("ul>li")[2]
    propos = document.querySelectorAll("ul>li")[3]
let app
app =()=>{
   // alllogo.classList.add("alllogo")
    //alllogo.classList.remove("alllogo_none")
    triangles.classList.add("triangles")
    triangles.classList.remove("triangles_appear")
    intro.classList.add("intro")
    intro.classList.remove("intro_appear")
    img_work.classList.add("img_work")
    img_work.classList.remove("img_work_appear")
}


app(0.2)
console.log(intro)
console.log(mesprojets)

    mesprojets.addEventListener("mouseover",()=>{
        appear.classList.remove("appear")
        appear.classList.add("appeara")
        appearb.classList.remove("appearba")
        appearb.classList.add("appearb")
    })


    nouveautes.addEventListener("mouseover",()=>{
        appear.classList.remove("appeara")
        appear.classList.add("appear")
        appearb.classList.remove("appearb")
        appearb.classList.add("appearba")

    })
    accueil.addEventListener("mouseover",()=>{
        appear.classList.add("appear")
        appear.classList.remove("appeara")
        appearb.classList.add("appearb")
        appearb.classList.remove("appearba")

    })

    accueil.addEventListener("click",()=>{
        diva.classList.add("diva")
        diva.classList.remove("diva_active")
      //  alllogo.classList.add("alllogo")
//alllogo.classList.remove("alllogo_none")
        triangles.classList.add("triangles")
        triangles.classList.remove("triangles_appear")
        intro.classList.add("intro")
        intro.classList.remove("intro_appear")
        img_work.classList.add("img_work")
        img_work.classList.remove("img_work_appear")
        img_laptop.classList.add("img_laptop")
        img_laptop.classList.remove("img_laptop_appear")
        phrase1.classList.add("phrase1")
        phrase1.classList.remove("phrase1_appear")
        cv.classList.add("cv")
    
        cv.classList.remove("cv_appear")
    


    })
    propos.addEventListener("mouseover",()=>{
        appear.classList.add("appear")
        appear.classList.remove("appeara")
        appearb.classList.add("appearb")
        appearb.classList.remove("appearba")

    })

buta.addEventListener("click",()=>{
    diva.classList.remove("diva")
    diva.classList.add("diva_active")
   // alllogo.classList.remove("alllogo")
   // logob.classList.remove("alllogo")
    //logob.classList.add("alllogo_none")
   // alllogo.classList.add("alllogo_none")
    triangles.classList.remove("triangles")
    triangles.classList.add("triangles_appear")
    intro.classList.remove("intro")
    intro.classList.add("intro_appear")
    img_work.classList.remove("img_work")
    img_work.classList.add("img_work_appear")
    img_laptop.classList.remove("img_laptop")
    img_laptop.classList.add("img_laptop_appear")
    phrase1.classList.remove("phrase1")
    phrase1.classList.add("phrase1_appear")
    cv.classList.remove("cv")

    cv.classList.add("cv_appear")





})
let secret =document.querySelector('.secret')


let sun = document.querySelector(".sun")
sun.setAttribute("src", "./asset/sun.png");
let compteur = 1

sun.addEventListener("click",()=>{
compteur++
console.log(compteur)
if(compteur%2==0){
    cv.style.backgroundColor = "black"
    secret.classList.toggle("secret_white")
    sun.setAttribute("src", "./asset/moon.png");

}else{
    cv.style.backgroundColor = "rgb(28, 150, 221)"
    sun.setAttribute("src", "./asset/sun.png");
    secret.classList.toggle("secret_white")


}
    
})



})