import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    background: 0x886644,
    antialias: true,
});
const unitContainer = new PIXI.Container();
unitContainer.position.y = app.renderer.height;
const W = 100
app.stage.addChild(unitContainer)

let el = document.querySelector(".app") as HTMLElement
el.appendChild(app.canvas as unknown as HTMLElement)

const s1 = PIXI.Sprite.from("/img/flugi.png");
s1.position.set(10, 10)
const s2 = PIXI.Sprite.from("/img/submarine.png");
//s2.texture.rotate = 8
s2.anchor.set(0.5)
s2.position.set(50, 50)
s2.width = 10
s2.height = 10
app.stage.addChild(s1)
unitContainer.addChild(s2)
app.render()

function resize() {
    app.canvas.height = window.innerHeight
    app.canvas.width = window.innerWidth
    unitContainer.position.y = app.renderer.height / app.renderer.resolution;
    const scale = Math.min(app.canvas.width, app.canvas.height) / W
    unitContainer.scale.set(scale, -scale)
    console.log({w: app.canvas.width, uc: unitContainer.width});
}

resize()

window.addEventListener("resize", resize)

