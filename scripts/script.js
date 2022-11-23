const clickButton = document.querySelector('#click');
// console.log(clickButton)
function clickHandler()
{
    alert("BONK")
    // clickButton.removeEventListener("click",clickHandler)
}
clickButton.addEventListener("click", clickHandler, {once:true})
// this is alt method the {once:true}

function changeBGPink()
{
// document.body.style.backgroundColor = "pink";
document.body.classList.add("pinkBG")

}
clickButton.addEventListener("click",changeBGPink)


function ChangeText()
{
    if (clickButton.textContent ==="CLICK ME!") {clickButton.textContent = "CLICKED"}
    else clickButton.textContent = "CLICK ME!"
}
clickButton.addEventListener("click", ChangeText)

const img = document.querySelector("#cart")
// console.log(img)
function updateImage()
{
img.src = "img/263142.png"
img.alt = "Shopping Cart"
img.width = "100"
img.height = "100"
}
clickButton.addEventListener("click", updateImage);

const buttonContainer = document.querySelector('.button-container')
buttonContainer.addEventListener("mouseover", changegreen)

function changegreen(e)
{
    // console.log(e.target)
    if (e.target.tagName === "BUTTON")

    e.target.style.backgroundColor = "green"
}
buttonContainer.addEventListener("click", changeButtonTextColor)
function changeButtonTextColor(e)
{
    e.target.style.color = e.target.textContent;
}

