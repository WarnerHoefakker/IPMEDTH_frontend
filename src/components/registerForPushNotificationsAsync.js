import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { getPushTokenEndpoint } from "./api";
let PUSH_ENDPOINT = getPushTokenEndpoint();
async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token);

  // here the RN app will send the token (generated when the app first installs) to the node.js. Later node.js backend will loop through those tokens from different devices to send notification to them.
  try {
    let res = await fetch(PUSH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });
    // console.log(res);
    if (!res.ok) {
      let data = await res.json();
      throw Error(data.error);
    }
  } catch (error) {
    console.log("error in registerForPushNotificationsAsync");
    console.log(error.message);
  }
}
export default registerForPushNotificationsAsync;
