input.onPinPressed(TouchPin.P0, function () {
    Message += 1
    basic.showNumber(Message)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    Message += 1
    if (Message > 10) {
        Message = 0
    }
    basic.showString("" + (alphabet[Message]))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (alphabet[Message]))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Message += -1
    if (Message < 0) {
        Message = 0
    }
    basic.showString("" + (alphabet[Message]))
})
let Message = 0
let alphabet: string[] = []
radio.setGroup(1)
alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
Message = 0
basic.forever(function () {
	
})
