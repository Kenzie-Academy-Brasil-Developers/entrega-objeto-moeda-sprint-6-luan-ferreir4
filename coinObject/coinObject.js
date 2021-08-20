const coin = {
    state: 0,
  
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
        return this.state;
    },
  
    toString: function () {
      if(this.flip() === 0){
        return "Heads";
      }
     
        return "Tails"
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      
      if(this.toString() === 'Heads'){
        image.src = "./imgs/d-pedroII-head.png";
        image.alt = "Heads";

        return image;
      }
      
        image.src = "./imgs/d-pedroII-tail.png"
        image.alt = "Tails";
      
        return image;
    }
}

const display20Flips = () => {
  const arrDiv = document.getElementById('arrDiv')
  const resultsArr = [];

  for(let trow = 0; trow < 20; trow++){
    let result = coin.flip();
    resultsArr.push(result);
  }
  arrDiv.innerText = JSON.stringify(resultsArr);

  return resultsArr;
}

const display20images = () => {
  const imgsDiv = document.getElementById('imgsDiv');
  const resultsArr = [];

  for(let trow = 0; trow < 20; trow++){
    let result = coin.toHTML();
    resultsArr.push(result);
    imgsDiv.appendChild(result);
  }

  return resultsArr;
}

display20Flips();
display20images();