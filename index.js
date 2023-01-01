let incrementScore = function (inParent, inValue)
{
  let scorePanel = document.getElementById(`${inParent}-score`);
  scorePanel.textContent = parseInt(scorePanel.textContent) + parseInt(inValue);
}

let buttonsOnPage = document.getElementsByTagName("button");

for (i = 0; i < buttonsOnPage.length; i++)
{
  buttonsOnPage[i].addEventListener('click',
    incrementScore.bind(null, buttonsOnPage[i].parentNode.id, `${buttonsOnPage[i].innerText}`,),
    false);
}