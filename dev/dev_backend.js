// fff

let status = document.getElementsByClassName('appStatus');

for (let i = 0; i < status.length; i++) {
  let stat = status[i];
  let text = stat.innerText.toLowerCase();

  // Color the status text accordingly
  (text === "dead") ? stat.style.color = "red" : stat.style.color = "green";
}
