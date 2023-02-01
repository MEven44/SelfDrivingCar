class Controls {
    constructor() {
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListeners()
    }

    #addKeyboardListeners() {
        document.onkeydown=e=>{
            switch(e.key){
                case 'ArrowLeft':
                    this.left=true;
                case 'ArrowRight':
                    this.right=true;
                case 'ArrowDown':
                    this.reverse=true;
                case 'ArrowUp':
                    this.forward=true;
                    break;
            }
            console.table(this)
        }
        document.onkeyup = (e) => {
          switch (e.key) {
            case "ArrowLeft":
              this.left = false;
            case "ArrowRight":
              this.right = false;
            case "ArrowDown":
              this.reverse = false;
            case "ArrowUp":
              this.forward = false;
              break;
          }
          console.table(this);
        };
    }
}