let x_value = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, 0)
        basic.pause(1000)
        basic.clearScreen()
        x_value += 1
        led.plot(x_value, 0)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        y = 0
        led.plot(0, y)
        basic.pause(1000)
        basic.clearScreen()
        y += 1
        led.plot(0, y)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
