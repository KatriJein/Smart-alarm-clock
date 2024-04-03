import { Audio } from "expo-av";
import rain from "../assets/sounds/rain.mp3"
import { Vibration } from "react-native";

const sound = new Audio.Sound()
let isVibration = false;
let vibrationPattern = [];

export const cancelSound = async () => {
    if (sound._loaded) {
        await sound.stopAsync();
        await sound.unloadAsync();
    }
    Vibration.cancel();
}

const chooseSong = (fileName) => {
    switch (fileName) {
        case "rain.mp3":
            return rain;
            break;
    }

}

export const updateSound = async (fileName, doVibrate, pattern) => {
    if (sound._loaded) {
        await cancelSound();
    }
    isVibration = doVibrate;
    vibrationPattern = pattern;
    const song = chooseSong(fileName);
    await sound.loadAsync(song);
    await sound.setIsLoopingAsync(true);
}

export const startSound = async () => {
    if (isVibration) {
        Vibration.vibrate(vibrationPattern, true);
    }
    if (sound._loaded) {
    await sound.playAsync();
    }
}