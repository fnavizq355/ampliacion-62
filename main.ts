input.onButtonPressed(Button.A, function () {
    if (cesta > 1 && fin == 0) {
        led.unplot(cesta, 4)
        cesta = cesta - 1
        led.plot(cesta, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    v = 500
    cesta = 2
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    led.plot(cesta, 4)
    fin = 0
})
input.onButtonPressed(Button.B, function () {
    if (cesta < 3 && fin == 0) {
        led.unplot(cesta, 4)
        cesta = cesta + 1
        led.plot(cesta, 4)
    }
})
let p = 0
let y = 0
let x = 0
let v = 0
let cesta = 0
let fin = 0
fin = 1
basic.forever(function () {
    if (fin == 0) {
        x = randint(1, 3)
        y = 0
        led.plot(x, y)
        for (let index = 0; index < 4; index++) {
            basic.pause(v)
            led.unplot(x, y)
            y = y + 1
            led.plot(x, y)
        }
        if (x == cesta && y == 4) {
            fin = 1
            basic.showNumber(p)
            basic.pause(500)
            basic.clearScreen()
        } else {
            p = p + 1
            v = v - 25
            led.unplot(x, y)
            basic.pause(v)
        }
    }
})
