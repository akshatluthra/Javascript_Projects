window.onload = () =>{
    const listings = Array.from(document.getElementsByClassName("listings"));
    listings.forEach(listing => handleSlider(listing));
}
// function to handle slider
const handleSlider = listing => {
    const listingGrid = listing.getElementsByClassName("listing-grid")[0]
    const leftArrow = listing.getElementsByClassName("left")[0]
    const rightArrow = listing.getElementsByClassName("right")[0]

    if(!listingGrid || !leftArrow || !rightArrow){
        console.log(listing)
        return
    }
rightArrow.addEventListener('click', e =>{
    e.preventDefault()
    handleclass('right')

    listingGrid.scrollTo({
        left: listingGrid.offsetWidth,
        behaviour : 'smooth'
    })
})
leftArrow.addEventListener('click', e =>{
    e.preventDefault()
    handleclass('left')
    listingGrid.scrollTo({
        left: 0,
        behaviour : 'smooth'
    })
})
const handleclass = direction => {
    if(direction == 'right'){
        rightArrow.classList.remove('dark')
        leftArrow.classList.add('dark')
        console.log('right is being Clicked');
    }
    else if (direction == 'left') {
        leftArrow.classList.remove('dark')
        rightArrow.classList.add('dark')
        console.log('left is being clicked');
    }
    }

}

