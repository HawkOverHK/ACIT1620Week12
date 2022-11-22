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