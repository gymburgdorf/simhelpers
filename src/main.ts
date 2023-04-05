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
const glider = new Actor({img: "https://gymburgdorf.github.io/simhelpers/img/Segelflieger50.png", x: 100, y: 100, wUnits: 100, autorotate: false});
const line = new Line({from: {x: 100, y: 200}, to: {x: 200, y: 100}, color: 0xccddee});
const circle = new Circle({x: 150, y: 100, r: 30, color: 0x440000});
circle.onClick((m)=>console.log(123, m))

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
glider.vx = 25;
glider.vy = 0;
glider.onClick((m)=>console.log(123, m))

window.addEventListener("keydown", taste);

function taste(event: { key: string; }) {
	console.log("Eine Taste wurde gedrückt:", event.key)
} 


let track = new Actor({
  img: `https://upload.wikimedia.org/wikipedia/commons/6/63/Irungattukottai_Race_Track_map_--_Full_track.svg`,
  x: 50,
  y: 20,
  wUnits: 5000,
  autorotate: false
})

let a = 0
function loop(dt: number) {
	flugi.x += flugi.vx * dt
	flugi2.x += flugi2.vx * dt
	glider.rotation += 0.1
    a += dt
    track.setAnchor({x: 10*Math.sin(a), y: 60*Math.cos(a)})
    track.rotation += 0.01
 }

 
world.addTicker(loop)