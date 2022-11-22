const clickButton = document.querySelector('#click');
// console.log(clickButton)
function clickHandler()
{
    alert("BONK")
}
clickButton.addEventListener("click", clickHandler)