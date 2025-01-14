import {World, Actor, Line, Circle} from "./simhelpers"

const world = new World({
    element: document.querySelector(".app"),
    h: 200,
    unit: "m",
    minUnits: {x: 0, y:0},
    img: "https://gymburgdorf.github.io/simhelpers/img/oceanSky.jpg", 
});
world.createAxis({step: 50, color: "#fff"})


// const world2 = await World.create({
//     element: document.querySelector(".app2"),
//     w: 100,
//     h: 100,
//     unit: "m",
//     color: "#999", 
// });
//    grid: {step: 50},
//fontColor: "#ffffff"

const flugi = new Actor({img: "https://gymburgdorf.github.io/simhelpers/img/flugi50.png", x: -40, y: 60, wUnits: 14});
const flugi2 = new Actor({img: "https://gymburgdorf.github.io/simhelpers/img/Segelflieger50.png", x: -40, y: 60, wUnits: 14});

const line = new Line({from: {x: 100, y: 200}, to: {x: 200, y: 100}, color: 0xccddee});
const line2 = new Line({from: {x: 100, y: 100}, to: {x: 200, y: 200}, color: 0xffddcc});
const circle = new Circle({x: 150, y: 100, r: 30, color: 0x440000});
line.onClick((m)=>console.log(123, m))

setTimeout(()=>{
    line.setColor(0xddeeff)
    circle.setColor(0x000000)
}, 1000)

let t = 0;
const dt = 0.016;       // Zeitschritt in Sekunden
flugi.vx = 35;
flugi.vy = 0;
flugi2.vx = 35;
flugi2.vy = 0;

window.addEventListener("keydown", taste);

function taste(event: { key: string; }) {
	console.log("Eine Taste wurde gedrückt:", event.key)
} 

let glider = new Actor({
  img: `https://gymburgdorf.github.io/simhelpers/img/Segelflieger-100.png`,
  x: 50,
  y: 20,
  wUnits: 50,
  autorotate: false
})
glider.vx = 0.11
glider.vy = 0.11


let track = new Actor({
    img: "img/Track.svg",
    x: 100,
    y: 100,
    wUnits: 50,
    autorotate: false
});

glider.onClick(e=>{
    console.log(e)
})

let a = 0
function loop(dt: number) {
	flugi.x += flugi.vx * dt
	flugi2.x += flugi2.vx * dt
    track.setAnchor({x: 0.674, y: 0.5})
	track.rotation += 0.01
    t += dt
    //track.setAnchor({x: 10*Math.sin(a), y: 60*Math.cos(a)})
    glider.rotation += 0.01
 }


world.addTicker(loop)