input.onButtonPressed(Button.A, function () {
    if (cesta != 1 && fin == 0) {
        led.unplot(cesta, 4)
        cesta = cesta - 1
        led.plot(cesta, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (cesta != 3 && fin == 0) {
        led.unplot(cesta, 4)
        cesta = cesta + 1
        led.plot(cesta, 4)
    }
})
let y = 0
let x = 0
let cesta = 0
let fin = 0
fin = 0
let v = 500
cesta = 2
led.plot(cesta, 4)
basic.forever(function () {
    while (fin <= 0) {
        basic.pause(1000)
        fin = fin + 1
    }
})
basic.forever(function () {
    if (fin == 0) {
        x = randint(1, 3)
        y = 0
        led.plot(x, y)
        for (let index = 0; index < 4; index++) {
            basic.pause(v)
            if (fin == 0) {
                break;
            } else {
                led.unplot(x, y)
                y = y + 1
                led.plot(x, y)
            }
        }
        if (x == cesta && y == 4) {
            fin = 1
        } else if (fin <= 0) {
            led.unplot(x, y)
        } else {
            let p = 0
            basic.showString("" + (p))
        }
        basic.pause(v)
    }
})
