const coin = {
    state: 0,
  
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
        return this.state;
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
      if(this.flip() === 0){
          return "Heads"
      }
      return "Tails"
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      // Colocar uma imagem correspondente a essa valor.
      if(this.toString() === 'Heads'){
        image.src = "./imgs/d-pedroII-head.png"
        image.alt = "Heads"
      }
      image.src = "./imgs/d-pedroII-tail.png"
        image.alt = "Tails"
      
      return image;
    },
  };