const countDown = (ms) => {

    let clock = setInterval(() => {

        ms--
        if (ms > 0) {
            console.log(ms)
        } else {
            console.log("DONE!")
            clearInterval(clock)
        }



    }, 1000)



}


const randomGame = () => {

    let rand = 0
    let count = 0

    let clock = setInterval(() => {

        rand = Math.random()

        if (rand > .75) {

            count++
            console.log(count)
            clearInterval(clock)

        } else {

            count++

        }






    }, 1000)



}