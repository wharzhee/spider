radio.onReceivedString(function (receivedString) {
    Control = receivedString
    if (Control.compare("F") == 0) {
        OmniBit.CarRun(OmniBit.enCarRun.Forward, 255)
    } else if (Control.compare("B") == 0) {
        OmniBit.CarRun(OmniBit.enCarRun.Back, 255)
    } else if (Control.compare("L") == 0) {
        OmniBit.CarRun(OmniBit.enCarRun.MoveLeft, 255)
    } else if (Control.compare("R") == 0) {
        OmniBit.CarRun(OmniBit.enCarRun.MoveRight, 255)
    } else if (Control.compare("D") == 0) {
        OmniBit.CarRun(OmniBit.enCarRun.CarStop, 0)
    } else if (Control.compare("C") == 0) {
        SuperBit.Music(SuperBit.enMusic.ringtone)
    } else if (Control.compare("K") == 0) {
        SuperBit.Music(SuperBit.enMusic.blues)
    } else if (Control.compare("A") == 0) {
        SuperBit.Music(SuperBit.enMusic.birthday)
    } else if (Control.compare("Z") == 0) {
        SuperBit.Music(SuperBit.enMusic.entertainer)
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
