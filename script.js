var reviews = [
    {
        id:0,
        personName:'Jessica',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review1.png",
    },
    {
        id:1,
        personName:'Franka',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review2.png",
    },
    {
        id:2,
        personName:'Jessica',
        date:'Oct 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review3.png",
    },
    {
        id:3,
        personName:'Joy',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review4.png",
    },
    {
        id:4,
        personName:'Jessica',
        date:'Oct 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review5.png",
    },
    
    {
        id:5,
        personName:'Franka',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review6.png",
    },
    {
        id:6,
        personName:'Daniel',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review7.png",
    },
    {
        id:7,
        personName:'Franka',
        date:'Oct 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review8.png",
    },
    {
        id:8,
        personName:'Jessica',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review5.png",
    },
    {
        id:9,
        personName:'Franka',
        date:'Oct 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review4.png",
    },
    {
        id:10,
        personName:'Daniel',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review9.png",
    },
    {
        id:11,
        personName:'Jessica',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review9.png",
    },
    {
        id:12,
        personName:'Franka',
        date:'Oct 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review7.png",
    },
    {
        id:13,
        personName:'Jessica',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review9.png",
    },
    {
        id:14,
        personName:'Joy',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review8.png",
    },
    {
        id:15,
        personName:'Jessica',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review5.png",
    },
    
    {
        id:16,
        personName:'Franka',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review4.png",
    },
    {
        id:17,
        personName:'Daniel',
        date:'Aug 3, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review3.png",
    },
    {
        id:18,
        personName:'Franka',
        date:'Aug 26, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review9.png",
    },
    {
        id:19,
        personName:'Jessica',
        date:'Oct 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review2.png",
    },
    {
        id:20,
        personName:'Franka',
        date:'Aug 2, 2023',
        text:'Lorem ipsum dolor sit amet consectetur. Pharetra gravida nisl pellentesque sodales curabitur scelerisque enim nulla dui. ',
        img:"./assets/reviews/review1.png",
    },
]

var hamburger = document.querySelector('.hamburger')
var mobilelinks = document.querySelector('.mobile-links')
hamburger.addEventListener('click', function(){
    if(mobilelinks.classList.contains('active')){
        mobilelinks.classList.remove('active')
    }else{
        mobilelinks.classList.add('active')
    }
})


var totalReview = document.querySelector('.total-review')
totalReview.innerHTML = `${reviews.length} reviews`

var reviewImgs = document.querySelector('.review-images')
reviews.filter((review)=>{return review.id<9&&review.id>2}).map((review)=>{
    var image = document.createElement('img')
    image.src = review.img
    reviewImgs.append(image)
})



const showReview = function(currentTab){
    var reviewCards = document.querySelector('.review-cards')
    reviewCards.replaceChildren()
    reviews.filter(review=>{return review.id<currentTab*3 && review.id>=(currentTab-1)*3}).map((review)=>{
        var reviewCard = document.createElement('div')
        reviewCard.classList.add('review-card')
        var image = document.createElement('img')
        image.src = review.img
        reviewCard.append(image)
        var reviewInfo = document.createElement('div')
        reviewInfo.classList.add('review-info')
        var reviewName = document.createElement('h4')
        reviewName.innerHTML=review.personName
        var reviewDate = document.createElement('p')
        reviewDate.classList.add('date')
        reviewDate.innerHTML=review.date
        var reviewText = document.createElement('p')
        reviewText.classList.add('review-text')
        reviewText.innerHTML=review.text
        reviewInfo.appendChild(reviewName)
        reviewInfo.appendChild(reviewDate)
        reviewInfo.appendChild(reviewText)
        reviewCard.appendChild(reviewInfo)
        reviewCards.append(reviewCard)
    })
    }
const setActive = function(currentTab){
    var reviewTabs = document.querySelectorAll('.tab')
    reviewTabs.forEach(tab=>{
        if(Number(tab.id)===currentTab){
            tab.classList.add('active')
        }else{
            tab.classList.remove('active')
        }
    })
}


var reviewTabs = document.querySelector('.tabs-number')
var totalReviewNumber = Math.ceil(reviews.length/3)
for(i=0; i<totalReviewNumber; i++){
    var tab = document.createElement('div')
    tab.innerHTML = i+1
    tab.classList.add('tab')
    tab.id=i+1
    reviewTabs.appendChild(tab)
}
var tabs = document.querySelectorAll('.tab')
tabs.forEach(tab=>{
    tab.addEventListener('click', function(){
        currentTab=Number(tab.id)
        showReview(currentTab)
        setActive(currentTab)
    })
})
var tabDecrease = document.querySelector('.tab-decrease')
var tabIncrease = document.querySelector('.tab-increase')
tabDecrease.addEventListener('click', function(){
    if(currentTab>1){
        currentTab--
        showReview(currentTab)
        setActive(currentTab)
    }
})
tabIncrease.addEventListener('click', function(){
    if(currentTab<totalReviewNumber){
        currentTab++
        showReview(currentTab)
        setActive(currentTab)
    }
})



var currentTab=1
showReview(currentTab)
setActive(currentTab)



