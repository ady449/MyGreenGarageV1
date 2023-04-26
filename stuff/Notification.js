// react-native-push-notification/index.js
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import messaging from "@react-native-firebase/messaging";

const ForegroundNotification = () => {
  useEffect(() => {
    const subs = messaging().setBackgroundMessageHandler(
      async (remoteMessage) => {
        console.log("Received background message", remoteMessage);
        PushNotification.localNotification({
          title: remoteMessage.notification.title,
          message: remoteMessage.notification.body,
        });
      }
    );
  }, []);
};

export default ForegroundNotification;
