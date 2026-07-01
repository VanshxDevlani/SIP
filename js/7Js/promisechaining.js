function loginuser(profile) {
    return new Promise((res, rej) => {
        console.log("you are being logged in")

        setTimeout(() => {
            console.log("you are loged in ")
            res()
        }, 1000)
    })
}

function getProfile(order) {
    return new Promise((res, rej) => {
        console.log("your profile is being fetched")

        setTimeout(() => {
            console.log("your profile is fetched")
            res()
        }, 2000)
    })
}
function getOrder(pay) {
    return new Promise((res, rej) => {
        console.log("your order is being prepared")

        setTimeout(() => {
            console.log("order is prepared")
            res()
        }, 3000)
    })
}

function payment() {
    return new Promise((res, rej) => {
        console.log("payment is under processing")

        setTimeout(() => {
            console.log("payment successful😊👍🎶 ")
            res()
        }, 4000)
    })
}

loginuser()
.then(getProfile)
.then (getOrder)
.then (payment)

.catch((err) => {
        console.log("some error occured")

})