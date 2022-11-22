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


function updateImage()
{

}
clickButton.addEventListener("click", updateImage);