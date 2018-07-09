const webpush = require('web-push');

// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();
const vapidKeys = {
    publicKey: 'BFGn9idzPilV42NILunZfj36dmtxre7UPtfBOpl0UKTzxctZptTvaspJG7mhCi3cbWDqXFT063wFvHN16aYX3mQ',
    privateKey: 'XDXPjj19lvYV38XH3cNcquFALd4FqItq0JnBT39Ly68'
};

webpush.setGCMAPIKey('AIzaSyDfd8Ri5k-i4u20woh-wvVig4hVZo9HxGc');
webpush.setVapidDetails(
  'https://f1amp.bedroomvillas.com/',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/ebCsgHj-J_U:APA91bEcJbU_rS-EP6iEWVFKt51fN5hjbCCtH5Uad6MAkGlnKK2_9MWfETv2oyodRbC6FoNMVW_xDy2Zn5FvBHK6TGc0wi-hNUzUJ7iqn7Lti3dgeXykkYBXa_dtgyFsvLW4dC81uK6ogsRCcmrc_1PeUjnDGOhmtA',
  keys: {
    auth: 'kPbYsOHW7SqLdRQT_WWsaw',
    p256dh: 'BHgzXrvddMcVOQUWeXrN2GffbB-5XmnxvYMjXq2eISztfIk4GohIjJMN80bV2Lvr2XV-nxpjHXMo8a5FEByUSnM'
  }
};


webpush.sendNotification(pushSubscription, JSON.stringify({
    title: 'Your Push Payload Text. lala',
    url: 'https://f1amp.bedroomvillas.com/canada'
}));

console.log(webpush);
