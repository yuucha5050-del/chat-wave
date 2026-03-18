import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const messagesDiv = document.getElementById("messages");

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, (snapshot) => {
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");
    div.textContent = data.text;
    messagesDiv.appendChild(div);
  });
});

window.send = async () => {
  const input = document.getElementById("msg");

  if (!input.value) return;

  await addDoc(collection(db, "messages"), {
    text: input.value,
    time: Date.now()
  });

  input.value = "";
};
