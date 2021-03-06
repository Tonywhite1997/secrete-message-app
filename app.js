const messageDiv = document.querySelector(".message__div")
const messageField = document.querySelector("#message__inputField")
const encryptButton = document.querySelector(".message__encrypt__button")
const encryptedMessageDiv = document.querySelector(".encrypted__message__div")
const encryptedMessageLink = document.querySelector(".encrypted__message__link")
const copyButton = document.querySelector(".fas")
const revealMessageDiv = document.querySelector(".reveal__message__div")
const revealedMessage = document.querySelector(".the__message")

encryptButton.addEventListener("click", ()=>{
    const encryptedMessage = btoa(messageField.value)
    if(!messageField.value || messageField.value[0] === " "){
        return
    }
    const encryptedLink = `${window.location}#${encryptedMessage}`
    encryptedMessageLink.value = encryptedLink
    messageDiv.classList.add("hide")
    encryptedMessageDiv.style.display = "flex"

})

async function copyTextToClipboard(){
    try{
        await navigator.clipboard.writeText(encryptedMessageLink.value)
        alert("link copied to clipboard")
    }
    catch(err){
        throw err
    }
}

copyButton.addEventListener("click", copyTextToClipboard)

if(window.location.hash !== ""){
    let hash = window.location.hash
    message = atob(hash.slice(1))
    revealedMessage.innerText = message
    messageDiv.classList.add("hide")
    revealMessageDiv.style.display = "initial"
}
