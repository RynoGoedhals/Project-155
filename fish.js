AFRAME.registerComponent("swim", {
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `fish${i}`;

            var posX = Math.floor(Math.random() *100 + -50);
            var posY = Math.floor(Math.random() *5 + 5);
            var posZ = Math.floor(Math.random() *60 + -40);

            var position = {
                x: posX,
                y: posY,
                z: posZ
            };

            this.swimmingFish(id, position);
        }
    },

    swimmingFish: function(id, position){
        var fishEntity = document.querySelector("#fishModels");

        var fishEl = document.createElement("a-entity");

        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position", position);
        fishEl.setAttribute("scale", {x: 0.1, y: 0.1, z: 0.1});
        fishEl.setAttribute("gltf-model", "./models/fish/scene.gltf");
        fishEl.setAttribute("animation", {
            property: "position",
            to: "100 10 -20",
            loop: "true",
            dur: 20000
        });
        fishEl.setAttribute("animation-mixer", {});
        fishEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 5
        });
        fishEl.setAttribute("game-play", {
            elementId: `#${id}`
        });

        fishEntity.appendChild(fishEl);
    }
})