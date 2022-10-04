let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("how many baskets are there in a basket ball match")
    number = randint(0, 2)
})
input.onGesture(Gesture.Shake, function () {
    if (number == 2) {
        basic.showString("yes")
    } else if (number == 1) {
        basic.showString("no")
    } else {
        basic.showString("maybe")
    }
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
    music.playMelody("C5 B A G A B C5 - ", 120)
})
basic.forever(function () {
	
})
