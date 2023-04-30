input.onButtonPressed(Button.A, function () {
    if (juega && coche > 1) {
        led.unplot(coche, 4)
        coche = coche - 1
        led.plot(coche, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    espera = 500
    coche = 2
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    led.plot(coche, 4)
    juega = true
})
input.onButtonPressed(Button.B, function () {
    if (juega && coche < 3) {
        led.unplot(coche, 4)
        coche = coche + 1
        led.plot(coche, 4)
    }
})
let puntos = 0
let y = 0
let x = 0
let espera = 0
let coche = 0
let juega = false
juega = false
basic.forever(function () {
    if (juega) {
        x = randint(1, 3)
        y = 0
        led.plot(x, y)
        for (let index = 0; index < 4; index++) {
            basic.pause(espera)
            led.unplot(x, y)
            y = y + 1
            led.plot(x, y)
        }
        if (x == coche && y == 4) {
            juega = false
            basic.showNumber(puntos)
            basic.pause(500)
            basic.clearScreen()
        } else {
            puntos = puntos + 1
            espera = espera - 25
            led.unplot(x, y)
            basic.pause(espera)
        }
    }
})
