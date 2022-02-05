radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        magicbit.MotorRunDual(magicbit.Motors.M3, 150, magicbit.Motors.M4, 150)
        magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M2, -150)
    } else if (receivedNumber == 2) {
        magicbit.MotorRunDual(magicbit.Motors.M3, 150, magicbit.Motors.M4, 150)
        magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, 150)
    } else if (receivedNumber == 3) {
        magicbit.MotorRunDual(magicbit.Motors.M3, -150, magicbit.Motors.M4, -150)
        magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, 150)
    } else if (receivedNumber == 4) {
        magicbit.MotorRunDual(magicbit.Motors.M3, -150, magicbit.Motors.M4, -150)
        magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M2, -150)
    } else if (receivedNumber == 10) {
        magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M2, 150)
        magicbit.MotorRunDual(magicbit.Motors.M3, 150, magicbit.Motors.M4, -150)
    } else if (receivedNumber == 11) {
        magicbit.MotorRunDual(magicbit.Motors.M3, -150, magicbit.Motors.M4, 150)
        magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M2, -150)
    } else {
    	
    }
    basic.pause(100)
    magicbit.MotorStopAll()
})
radio.setGroup(2)
magicbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red, rgb_ColorEffect.None)
magicbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Green, rgb_ColorEffect.None)
magicbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Indigo, rgb_ColorEffect.None)
magicbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Purple, rgb_ColorEffect.None)
basic.forever(function () {
	
})
