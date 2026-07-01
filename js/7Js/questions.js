function movieselection(profile) {
    return new Promise((res, rej) => {
        console.log("you are selecting a movie")

        setTimeout(() => {
            console.log("your movie is selected")
            res({
                movie : "Avengers",
                seats :  2 ,
                amount : 600
            })
        }, 1000)
    })
}

function seatselection(order) {
    return new Promise((res, rej) => {
        console.log("you are selecting seats")

        setTimeout(() => {
            console.log("your seats are selected")
            res()
        }, 2000)
    })
}
function payment(pay) {
    return new Promise((res, rej) => {
        console.log("your payment is in progress")

        setTimeout(() => {
            console.log("payment successfull")
            res()
        }, 3000)
    })
}

function ticket() {
    return new Promise((res, rej) => {
        console.log("generating tickects")

        setTimeout(() => {
            console.log("tickects generated😊👍🎶 ")
            res()
        }, 3000)
    })
}

movieselection()
.then (seatselection)
.then(payment)
.then(ticket)

.catch((err) => {
    console.log("some unknown error occured")
})