
let notification = "";

export const updateNotification = (id) => {
    notification = id;
}

export const getNotificationId = () => {
    return notification;
}