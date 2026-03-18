function send() {
  const msg = document.getElementById("msg").value;
  db.collection("messages").add({
    text: msg,
    created: Date.now()
  });
}

db.collection("messages").orderBy("created")
.onSnapshot(snap => {
  const list = document.getElementById("list");
  list.innerHTML = "";
  snap.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().text;
    list.appendChild(li);
  });
});
