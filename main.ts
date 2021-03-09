input.onButtonPressed(Button.A, function () {
    TemperaturA = input.temperature()
    basic.showNumber(TemperaturA)
    Temperaturliste.push(TemperaturA)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(TemperaturA)
})
input.onButtonPressed(Button.B, function () {
    for (let TemperaturB of Temperaturliste) {
        basic.showNumber(TemperaturB)
        serial.writeValue("Temperatur", TemperaturB)
        basic.showIcon(IconNames.Sword)
        basic.clearScreen()
    }
})
let TemperaturA = 0
let Temperaturliste: number[] = []
Temperaturliste = []
basic.forever(function () {
	
})
