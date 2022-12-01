window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const startPage = document.getElementById('start-page');
  const startPageRecipe = document.getElementById('start-page-recipe');
  const startButton = document.getElementById('start');
  const startGameButton = document.getElementById('start-game');
  
  startButton.onclick = function () {
    startPage.style = "display: none";
    startPageRecipe.classList.remove('hidden');
    startPageRecipe.style = "display: flex"
  }


startGameButton.onclick = function () {
  startPageRecipe.style = "display: none";
  canvas.classList.remove('hidden');
  const game = new Game(ctx);
  game.start();
}
}