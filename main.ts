let x_value = 0
let y = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(1000)
        x_value += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y)
        basic.pause(1000)
        y += 1
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(1000)
        x_value += -1
        basic.clearScreen()
        x_value += 1
    }
})
