// Task 1
let products = []

const getProducts = document.querySelectorAll('.as-imagegrid-item')

for(let index = 0; index < getProducts.length; index++) {    
    products.push(getProducts[index].innerText.replace('\nSupport',''))
}

// Task 2
let accordion = document.querySelector('.accordion-homepage')
let section = document.createElement('section')
section.className = 'parent'
let heading = document.createElement('h3')
heading.innerText = 'My New FAQ'
section.appendChild = heading
accordion.appendChild = section

// Task 3
let serviceNum = document.querySelector('.service-number')
serviceNum.innerText = '7584839948'

// Task 4
const button = document.querySelector('.diwali-deals-product-sale-btn')
button.innerText = 'Check out'

// Task 5
let searchInput = document.querySelector('.searchinput___19uW0')
searchInput.addEventListener('mouseover', function() {
    searchInput.style.backgroundColor = 'red'
}) 

// Task 6
let searchBox = document.querySelector('#hp-search-input')
searchBox.value = 'CSS Selector'

// Task 7
let languages = document.querySelectorAll('#SIvCob a')  
languages[1].remove()
languages[2].remove()
languages[4].remove()
languages[5].remove()

// Task 8
let displayHeading = document.querySelectorAll('.display-heading-1')
displayHeading[0].style.color = 'red'
displayHeading[0].style.fontFamily = 'monospace'

// Task 9
let button = document.querySelectorAll('.login-btn-text')
button[1].addEventListener('mouseover', () => { 
    button[1].style.backgroundColor = 'red' 
})

// Task 10
let gutter = document.querySelector(".gutter-xl .col-xl-4 .btn-sm")
gutter.style.backgroundColor = 'blue'

// Task 11
let headingText = document.querySelectorAll('.fl-heading-text')
headingText[0].innerText = 'JSBOOTCAMP'

// Task 12
let hotDealHeading = document.querySelector('.HotDealsAll__Heading__2fIbe')
hotDealHeading.style.fontSize = '80px'

// Task 13
let psTitle = document.querySelectorAll('.ps-top .ps-title')
psTitle.forEach((arr,index) => {
    psTitle[index].style.fontAlign = 'end'
})

// Task 14
let developerHeading = document.querySelector('.section-title_title__VEDfK')
developerHeading.innerHTML = 'Start with Scratch'

// Task 15
let btn = document.querySelector('.btn-container')
let date = new Date()
btn.innerHTML = date

// Task 16
let footer = document.querySelector('.p-f03-footer-container .p-footer')
footer.style.backgroundColor = 'orange'

// Task 17
let logo = document.querySelector('.logo')
logo.setAttribute('src')

// Task 18
let desc = document.querySelectorAll('.desc')
desc.forEach((arr,index) => { 
    desc[index].style.color = 'orange' 
})

// Task 19
let logos = document.querySelector('.icon-logo')
logos.style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')"

// Task 20
let heading = document.querySelector(".side-bar .crayons-card .crayons-subtitle-2")
heading.innerHTML = "iNeuron"

let paragraph = document.querySelector(".side-bar .color-base-70")
paragraph.innerHTML = "I Write Code"