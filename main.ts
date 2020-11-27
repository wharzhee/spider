radio.onReceivedString(function (receivedString) {
    Control = receivedString
    if (Control.compare("F") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (Control.compare("B") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (Control.compare("L") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (Control.compare("R") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (Control.compare("D") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    } else if (Control.compare("C") == 0) {
        SuperBit.Music(SuperBit.enMusic.entertainer)
    } else if (Control.compare("K") == 0) {
        SuperBit.Music(SuperBit.enMusic.funereal)
    } else if (Control.compare("A") == 0) {
        SuperBit.Music(SuperBit.enMusic.ode)
    } else if (Control.compare("Z") == 0) {
        SuperBit.Music(SuperBit.enMusic.ringtone)
    }
})
let Control = ""
radio.setGroup(3)
radio.setTransmitPower(7)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
