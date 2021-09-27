(function() {
    let buttons = document.querySelectorAll('.btn')
    let count = 0

    // adding events for all buttons and create functionality
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.classList.contains('LowerCount')) {
                count--
            } else {
                count++
            }


            // select the counter text
            const counter = document.querySelector('#counter')
            counter.textContent = count
            if(count > 0) {
                counter.style.color = "green"
            } else if(count < 0) {
                counter.style.color = "red"
            } else {
                counter.style.color = 'black'
            }
        })
    })
})()

