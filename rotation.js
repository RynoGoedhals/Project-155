AFRAME.registerComponent("terrain-rotation", {
    schema: {
      speedOfRotation: {type: "number", default: 0}    
    },

    init: function() {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight"){
          if (this.data.speedOfRotation < 0.1){
            this.data.speedOfRotation += 0.01;
          }
        }

        if (e.key === "ArrowLeft"){
          if (this.data.speedOfRotation > -0.1){
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },

    tick: function() {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
});

AFRAME.registerComponent("diver-rotation", {
    schema: {
        speedOfRotation: {type: "number", default: 0},
        speedOfAscent: {type: "number", default: 0}
    },

    init: function(){
        window.addEventListener("keydown", (e) => {
            var planeRotation = this.data.speedOfRotation;
            this.data.speedOfRotation = this.el.getAttribute("rotation");

            var planePosition = this.data.speedOfAscent;
            this.data.speedOfAscent = this.el.getAttribute("position");

            if(e.key === "ArrowRight"){
                if(planeRotation.y > 10){
                    planeRotation.y -= 0.3;

                    this.el.setAttribute("rotation", planeRotation);
                }
            }

            if(e.key === "ArrowLeft"){
                if(planeRotation.y > 10){
                    planeRotation.y += 0.3;

                    this.el.setAttribute("rotation", planeRotation);
                }
            }

            if(e.key === "ArrowUp"){
                if(planePosition.y < 2){
                    planePosition.y += 0.01;

                    this.el.setAttribute("position", planePosition);
                }
            }

            if(e.key === "ArrowDown"){
                if(planePosition.y > -2){
                    planePosition.y -= 0.01;

                    this.el.setAttribute("position", planePosition);
                }
            }
        })
    }
})