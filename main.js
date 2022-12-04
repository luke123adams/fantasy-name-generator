










function biasGenerator(){
    // This function adds bias by using a random number to determine whether to run 1 of 2 other funtions.
    let randomNumber = Math.floor(Math.random() *10 (+1))
    if (randomNumber > 5){
    getWinner();
    }
    else {
        getLoser();
    }
  }

