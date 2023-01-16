radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.turnleft()
    } else if (receivedNumber == 2) {
        cuteBot.turnleft()
    } else if (receivedNumber == 3) {
        cuteBot.forward()
    }
})
radio.setGroup(1)
