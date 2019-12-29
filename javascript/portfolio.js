let snake_game = document.getElementById("snake-game");

function reset_snake_game () {
    snake_game.style.minWidth = (Math.ceil(snake_game.offsetWidth/10)*10).toString() + 'px'
    snake_game.style.minHeight = snake_game.style.minWidth;
}

reset_snake_game();

window.addEventListener('resize', reset_snake_game);