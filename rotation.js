// AFRAME.registerComponent("terrain-rotation", {
//     schema: {
//       speedOfRotation: {type: "number", default: 0}    
//     },

//     init: function() {
//       window.addEventListener("keydown", (e) => {
//         if (e.key === "ArrowRight"){
//           if (this.data.speedOfRotation < 0.1){
//             this.data.speedOfRotation += 0.01;
//           }
//         }

//         if (e.key === "ArrowLeft"){
//           if (this.data.speedOfRotation > -0.1){
//             this.data.speedOfRotation -= 0.01;
//           }
//         }
//       });
//     },

//     tick: function() {
//       var mapRotation = this.el.getAttribute("rotation");
  
//       mapRotation.y += this.data.speedOfRotation;
  
//       this.el.setAttribute("rotation", {
//         x: mapRotation.x,
//         y: mapRotation.y,
//         z: mapRotation.z
//       });
//     }
// });

AFRAME.registerComponent("diver-rotation", {
    schema: {
        speedOfRotation: {type: "number", default: 0},
        speedOfAscent: {type: "number", default: 0}
    },

    init: function(){
        window.addEventListener("keydown", (e) => {
            var diverRotation = this.data.speedOfRotation;
            this.data.speedOfRotation = this.el.getAttribute("rotation");

            var diverPosition = this.data.speedOfAscent;
            this.data.speedOfAscent = this.el.getAttribute("position");

            if(e.key === "ArrowRight"){
                if(diverRotation.y > 10){
                  diverRotation.y -= 1;

                  this.el.setAttribute("rotation", diverRotation);
                }
            }

            if(e.key === "ArrowLeft"){
                if(diverRotation.y > 10){
                  diverRotation.y += 1;

                  this.el.setAttribute("rotation", diverRotation);
                }
            }

            if(e.key === "ArrowUp"){
                if(diverPosition.y < 2){
                  diverPosition.y += 0.01;

                  this.el.setAttribute("position", diverPosition);
                }
            }

            if(e.key === "ArrowDown"){
                if(diverPosition.y > -2){
                  diverPosition.y -= 0.01;

                  this.el.setAttribute("position", diverPosition);
                }
            }
        })
    }
})

AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: {type: "number", default: 0},
    speedOfMovement: {type: "number", default: 0}
  },

  init: function(){
    window.addEventListener("keydown", (e) => {
      var diverRotation = this.data.speedOfRotation;      
      var diverPosition = this.data.speedOfMovement;

      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfMovement = this.el.getAttribute("position");

      if(e.key === "ArrowDown"){
        if(diverPosition.z < 20){
          diverPosition.z += 0.1;

          this.el.setAttribute("position", diverPosition);
        }
      }

      if(e.key === "ArrowUp"){
        if(diverPosition.z> -10){
          diverPosition.z -= 0.1;

          this.el.setAttribute("position", diverPosition);
        }
      }

      if(e.key === "ArrowRight"){
        if(diverRotation.y > -360){
          diverRotation.y -= 0.5;

          this.el.setAttribute("rotation", diverRotation);
        }

        if(diverPosition.x < 20){
          diverPosition.x += 0.05;

          this.el.setAttribute("position", diverPosition);
        }
      }

      if(e.key === "ArrowLeft"){
        if(diverRotation.y <360){
          diverRotation.y += 0.5;

          this.el.setAttribute("rotation", diverRotation);
        }

        if(diverPosition.x > -20){
          diverPosition.x -= 0.05;

          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});
