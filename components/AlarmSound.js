import { Audio, InterruptionModeAndroid } from "expo-av";
import rain from "../assets/sounds/rain.mp3"
import birds from "../assets/sounds/birds.mp3"
import frogs from "../assets/sounds/frogs.mp3"
import river from "../assets/sounds/river.mp3"
import { Vibration } from "react-native";
import { postponeSound } from "./common-functions/CommonFunctions";
import * as Notifications from "expo-notifications"

const sound = new Audio.Sound();
let songMelody = null;
let isVibration = false;
let vibrationPattern = [];
let soundVolume = 50;
let continueSoundNotificationId = "";

export const cancelSound = async () => {
    await Notifications.cancelScheduledNotificationAsync(continueSoundNotificationId);
    if (sound._loaded) {
        await sound.stopAsync();
        await sound.unloadAsync();
    }
    Vibration.cancel();
}

export const interruptSound = async () => {
    await sound.stopAsync();
    Vibration.cancel();
    continueSoundNotificationId = await postponeSound();
}

export const continueSound = async () => {
    await sound.playAsync();
    if (isVibration) {
        Vibration.vibrate(vibrationPattern, true);
    }
}

const chooseSong = (fileName) => {
    switch (fileName) {
        case "rain.mp3":
            return rain;
        case "birds.mp3":
            return birds;
        case "river.mp3":
            return river;
        case "frogs.mp3":
            return frogs;
        default:
            return rain;
    }

}

export const updateSound = async (fileName, doVibrate, pattern, volume) => {
    await cancelSound();
    soundVolume = volume;
    isVibration = doVibrate;
    vibrationPattern = pattern;
    const song = chooseSong(fileName);
    songMelody = song;
}

export const startSound = async () => {
    if (isVibration) {
        Vibration.vibrate(vibrationPattern, true);
    }
    await sound.loadAsync(songMelody);
    await sound.setVolumeAsync(soundVolume);
    await sound.setIsLoopingAsync(true)
    await sound.playAsync();
}