
// back to top of the
let backToTopBtn=document.querySelector('.back-to-top')
window.onscroll = () => {
    if(document.body.scrollTop>200 || document.documentElement.scrollTop>200) {
        backToTopBtn.style.display='flex'
    }else
        backToTopBtn.style.display='none'
}

let menuItem=document.getElementsByClassName('.menu-item')
Array.from(menuItem).forEach((item,index) => {
    item.onclick = (e) => {
        let currMenu=document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

//food category menu

let foodMenuList=document.querySelector('.food-item-wrap')
let foodCategory=document.querySelector('.food-category')
let categories=foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item,index) => {
    item.onclick = (e) => {
        let currCat=foodCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList='food-item-wrap '+e.target.getAttribute('data-food-type')        
    }
})
// Onscroll animation
let scroll=window.requestAnimationFrame||function(callback) {window.setTimeout(callback,1000/60)}

let elToShow=document.querySelectorAll('.play-on-scroll')

isElInViewport=(el) => {
    let rect=el.getBoundingClientRect()
    return (
        (rect.top <= 0 && rect.bottom>=0)
        || 
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight ||document.documentElement.clientHeight))
        || 
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () =>{
    elToShow.forEach((item,index)=>{
        if(isElInViewport(item)) {
            item.classList.add('start')
        }else
            item.classList.remove('start')
    })
}