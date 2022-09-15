// Change the text to say "Logout" when clicking the "Login" button

function logout(e) {
  // console.log(e);
  // console.log(e.innerText);
  if (e.innerText != "Logout") {
    return (e.innerText = "Logout");
  } else {
    return (e.innerText = "Login");
  }
}

// Remove the Add Definition button when it is clicked

function removeButton(e) {
  return e.remove();
}

// Alert "Ninja was liked" when click a like button

function likeButton(e) {
  console.log(e);
}

function alertLike() {
  return alert("Ninja was liked");
}
