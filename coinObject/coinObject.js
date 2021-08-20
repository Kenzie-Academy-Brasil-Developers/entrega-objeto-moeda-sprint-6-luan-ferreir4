const mainContent = document.createElement('main');
document.body.appendChild(mainContent);
mainContent.classList.add('mainStyle')
const strDiv = document.createElement('div');
strDiv.classList.add('mainStyle__strDiv')
mainContent.appendChild(strDiv);

const imgsDiv = document.createElement('imgsDiv');
imgsDiv.classList.add('mainStyle__imgsDiv')
mainContent.appendChild(imgsDiv);

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
  const resultsArr = [];

  for(let trow = 0; trow < 20; trow++){
    let side = document.createElement('p')
    let result = coin.toString();
    resultsArr.push(result);

    side.append(result);
    strDiv.appendChild(side);
  }
  
  return resultsArr;
}

const display20images = () => {
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