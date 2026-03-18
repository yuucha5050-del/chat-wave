import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ここに貼る",
  authDomain: "ここに貼る",
  projectId: "ここに貼る",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function setup() {
  const serverId = "server1";
  const userId = "user123";

  await setDoc(doc(db, "servers", serverId), {
    name: "テストサーバー",
    owner: userId,
    ticketCounter: 0
  });

  await setDoc(doc(db, "servers", serverId, "members", userId), {
    role: "admin"
  });

  await setDoc(doc(db, "servers", serverId, "roles", "admin"), {
    name: "管理者",
    permissions: ["SEND_MESSAGE", "DELETE_MESSAGE"]
  });

  const channelId = "channel1";

  await setDoc(doc(db, "channels", channelId), {
    name: "一般",
    serverId: serverId
  });

  await addDoc(
    collection(db, "channels", channelId, "messages"),
    {
      text: "初めてのメッセージ！",
      uid: userId,
      created: serverTimestamp()
    }
  );

  console.log("✅ 完了！");
}

setup();