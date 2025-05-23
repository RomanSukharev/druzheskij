export var hiddenCarrotMessenger = (value: boolean) => {
  var carrotquest = document.getElementById("carrotquest-messenger-collapsed-container");

  if (value && carrotquest) {
    carrotquest.style.display = "none";
  } else if (carrotquest) {
    carrotquest.style.display = "";
  }
};
