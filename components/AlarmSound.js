import { Audio, InterruptionModeAndroid } from "expo-av";
import classic from "../assets/sounds/classic-alarm.mp3"
import birds from "../assets/sounds/chirping.mp3"
import cute from "../assets/sounds/cute.mp3"
import krid from "../assets/sounds/egor-krid.mp3"
import electric from "../assets/sounds/electronic-signal.mp3"
import school from "../assets/sounds/for-school.mp3"
import loud from "../assets/sounds/loud.mp3"
import minions from "../assets/sounds/minions.mp3"
import pain from "../assets/sounds/pain.mp3"
import siren from "../assets/sounds/siren.mp3"
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
        case "classic-alarm.mp3":
            return classic;
        case "chirping.mp3":
            return birds;
        case "cute.mp3":
            return cute;
        case "egor-krid.mp3":
            return krid;
        case "electronic-signal.mp3":
            return electric;
        case "for-school.mp3":
            return school;
        case "loud.mp3":
            return loud;
        case "minions.mp3":
            return minions;
        case "pain.mp3":
            return pain;
        case "siren.mp3":
            return siren;
        default:
            return classic;
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