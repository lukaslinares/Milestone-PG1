class AudioController{
    constructor(){
        this.bgMusic = new Audio('Assets/Sounds/bg.mp3');
        this.flipSound = new Audio('Assets/Sounds/flip.wav');
        this.matchSound = new Audio('Assets/Sounds/match.mp3');
        this.victorySound = new Audio('Assets/Sounds/victory.wav');
        this.gameOverSound = new Audio('Assets/Sounds/gameOver.mp3');
        this.bgMusic.volume = 0.1;
        this.bgMusic.loop = true; 
        this.gameOverSound.volume = 0.3;
    }
    startMusic(){
        this.bgMusic.play();
    }
    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip(){
        this.flipSound.play();
    }
    match(){
        this.matchSound.play();
    }
    victory(){
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}