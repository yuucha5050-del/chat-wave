// Firebase設定（自分のに置き換え）
const firebaseConfig = {
  apiKey: "AIzaSyBq5gZtI1opF5D8kljr_insUzRvbOA7HpA",
  authDomain: "chat-wave-a927f.firebaseapp.com",
  projectId: "chat-wave-a927f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
