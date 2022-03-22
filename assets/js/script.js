// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {

    // Flip Button Click Handler
    let flippedHeads = Math.random() < 0.5

        // TODO: Determine flip outcome
        if (flippedHeads) {
            
        // TODO: Update image and status message in the DOM
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'You Flipped Heads!'

        // Update the scorboard
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
        }

        // TODO: Calculate the total number of rolls/flips
        let total = headsRoll + tailsRolls

        // Make variables to track the percentages of heads and tails
        let percentHeads = 0
        let percentTails = 0

        // TODO: Use the calculated total to calculate the percentages
        if (total >0){
            percentHeads = Math.round ((headsRolls / total) * 100)
            percentTails = Math.round ((tailsRolls / total) * 100)
        }
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        {
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
        }
})