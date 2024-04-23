import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName: "Пользователь",
    userAvatarUri: "",
    phone: "+7 (934) 254-01-24",
    email: "Sonic.x.exe@yandex.ru",
    themeName: "Кварц",
    notificationsEnabled: false
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
        updateUserAvatarUri: (state, action) => {
            state.userAvatarUri = action.payload;
        },
        updateUserPhone: (state, action) => {
            state.phone = action.payload;
        },
        updateUserEmail: (state, action) => {
            state.email = action.payload;
        },
        updateTheme: (state, action) => {
            state.themeName = action.payload;
        },
        updateAreNotificationsEnabled: (state, action) => {
            state.notificationsEnabled = action.payload;
        }
    }
})

export const {updateUserName, updateUserAvatarUri, updateUserPhone, updateUserEmail, updateTheme, updateAreNotificationsEnabled } = settingsSlice.actions;
export default settingsSlice.reducer;