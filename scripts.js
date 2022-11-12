const infopage = document.getElementById("info")

new URLSearchParams(window.location.search).forEach((value, name) => {
    infopage.append(`${name} : ${value}`)
    infopage.append(document.createElement("br"))
  })

document.getElementById("submit").addEventListener("click", sendBtn);

function sendBtn() {
    alert("Thank you for your time and we will reach out to you soon!")
}