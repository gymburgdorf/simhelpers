// @ts-ignore Import module
//import * as PIXI from 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.1.4/pixi.min.mjs';
import * as PIXI from 'pixi.js';

type TCoord = { x: number, y: number }
type TDim = {w: number, h: number}
type TGrid = {step?: number, onlyX?: boolean, onlyY?: boolean}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

type Background = {img?: string, color?: Color}
type Dimension = {unit?: string, w?: number, h?: number, minUnits?: TCoord, maxPx?: {w: number, h: number}}
type WorldParams = {element?: Element | null} & Background & Dimension
type CoordProps = {step: number, color: Color, onlyX: boolean, onlyY: boolean}
let latestWorld: World

function getImageUrl(img: string) {
    if(img.startsWith("simhelpers")) return `https://gymburgdorf.github.io/${img}`
    return img
}

export class World {
    readonly originalParams: WorldParams
    readonly element: HTMLElement
    private img?: string
    private minUnits: TCoord
    private maxPx: TDim
    private color: Color
    private background?: PIXI.Sprite
    actors: Drawable[]
    readonly app: PIXI.Application
    private readonly unitContainer: PIXI.Container
    private coordProps?: {container: PIXI.Container} & Partial<CoordProps>
    private updater: ()=>void

    constructor(params: WorldParams) {
        this.originalParams = params        
        this.element = params.element as HTMLElement || document.body
        this.maxPx = params.maxPx || this.getAutoSize()
        // todo default coords middle
        // todo image cover
        this.minUnits = params.minUnits || {x: 0, y: 0}
        this.img = params.img || ""
        this.color = params.color || "#111";
        //todo color
        this.app = new PIXI.Application({
            background: this.color,
            antialias: true,
        });
        this.unitContainer = new PIXI.Container();
        this.app.stage.addChild(this.unitContainer)
        this.element.appendChild(this.app.view as unknown as HTMLElement)
        this.actors = []
        this.adaptSize()
        this.loadBackground()
        this.onResizeContainer()
        latestWorld = this
        window.addEventListener("resize", ()=>this.onResizeContainer())       
        //add resizeObserver
        this.updater = () => this.update()
        this.app.ticker.add(this.updater)
    }
    private getAutoSize() {
        return {w: Math.min(window.innerWidth, this.element.getBoundingClientRect().width), h: window.innerHeight}
    }
    getAspectRatio() {
        return this.getForcedRatio() || this.getStoredRatio() || window.innerWidth / window.innerHeight
    }
    private getForcedRatio() {
        const {w, h} = this.originalParams
        return w && h ? w / h : null
    }
    private getStoredRatio() {
        return localStorage[this.getAspectKey()] || null
    }
    private getAspectKey() {
        return `simhelpers-ratio-${this.img}`
    }
    adaptSize() {
        const {w: wPx, h: hPx} = this.dimPx()
        this.app.view.width = wPx
        this.app.view.height = hPx
        this.app.renderer.resize(wPx, hPx);
        this.unitContainer.scale.set(wPx/this.w, -hPx/this.h)
        this.unitContainer.position.y = hPx;
    }
    dimPx() {
        const {w: wMax, h: hMax} = this.maxPx
        const {w, h} = this.dim()        
        const limit = wMax > this.getAspectRatio() * hMax ? "H" : "W"
        const pxPerUnit = limit === "W" ? wMax / w : hMax / h
        return {w: w * pxPerUnit, h: h * pxPerUnit, pxPerUnit}
    }
    dim() {
        const {w, h} = this.originalParams
        return {
            w: w || (h && h * this.getAspectRatio()) || this.maxPx.w,
            h: h || (w && w / this.getAspectRatio()) || this.maxPx.h,
        }
    }
    get w() {
        return this.dim().w
    }
    get h() {
        return this.dim().h
    }
    set w(w: number) {
        this.originalParams.w = w
        this.adaptSize()
    }
    set h(h: number) {
        this.originalParams.h = h
        this.adaptSize()
    }
    private loadBackground() {
        const img = this.img
        if (img) {
            this.background = PIXI.Sprite.from(getImageUrl(img));
            this.background.texture.rotate = 8
            this.unitContainer.addChild(this.background)
            this.onloadBackground()
            this.background.texture.baseTexture.on("loaded", () => {
                this.onloadBackground()
            })
        }
    }
    private onloadBackground() {
        if(!this.background?.texture?.valid) return
        const {width, height} = this.background.texture.baseTexture
        const imgRatio = width / height
        if(!this.getForcedRatio()) {
            localStorage[this.getAspectKey()] = imgRatio
        }      
        this.adaptSize()
        this.adaptBgSize() 
    }
    private adaptBgSize() {
        if(!this.background) return
        this.background.width = this.w
        this.background.height = this.h
    }
    private onResizeContainer() {
        if(!this.originalParams.maxPx) {
            this.maxPx = this.getAutoSize()
        }
        this.updateAxis()
        this.adaptSize()
    }
    render() {
        this.app.renderer.render(this.app.stage)
    }
    add(drawable: Drawable) {
        this.actors.push(drawable) 
        this.unitContainer.addChild(drawable.obj)
        this.render()
    }
    remove(drawable: Drawable) {
        this.actors.splice(this.actors.indexOf(drawable), 1);
        this.unitContainer.removeChild(drawable.obj)
        this.render()
    }
    // xToPx(xUnit: number) {
    //     return (xUnit - this.minUnits.x) * this.getPxPerUnit()
    // }
    // yToPx(yUnit: number) {
    //     return this.dimPx().h - (yUnit - this.minUnits.y) * this.getPxPerUnit()
    // }
    // unitsToPx(units: TCoord) {
    //     return { x: this.xToPx(units.x), y: this.yToPx(units.y) }
    // }
    // xToUnits(xPx: number) {
    //     return xPx / this.getPxPerUnit() + this.minUnits.x
    // }
    // yToUnits(yPx: number) {
    //     return (this.dimPx().h - yPx) / this.getPxPerUnit() + this.minUnits.y
    // }
    getPxPerUnit() {
        return this.dimPx().pxPerUnit
    }
    // pxToUnits(px: TCoord) {
    //     return { x: this.xToUnits(px.x), y: this.yToUnits(px.y) }
    // }
    update() {
        this.actors.forEach(a => a.draw())
        this.render()
    }
    addTicker(fn: (dt: number)=>void) {
        this.app.ticker.remove(this.updater)
        this.app.ticker.add((dtframes: number) => {
            fn(dtframes / 60)
        })
        this.app.ticker.add(this.updater)
    }
    private updateAxis() {
        if(!this.coordProps) return
        let {container, step, color = "#444", onlyX = false, onlyY = false} = this.coordProps
        container.removeChildren()

        step = step || 10**Math.log10(Math.ceil(this.w) - 1)
        var world = this;
        //  var koordinatenachse = new PIXI.Graphics();
        //  koordinatenachse.lineStyle(4, 0xFFFFFF, 1);
        //  koordinatenachse.moveTo(0, maxHeight);
        //  koordinatenachse.lineTo(0, 0);
        //  stage.addChild(koordinatenachse);
        var offset = { x: 8 / this.getPxPerUnit(), y: 2 / this.getPxPerUnit()} //px von Rand;
        var createLabel = (val: number, axis: string) => {
            //var number = axis == "x" ? world.xToPx(val) : world.yToPx(val)
            var skala = new PIXI.Text(val + " " + world.originalParams.unit, { fontFamily: "Tahoma", fontSize: world.dim().w / 40, fill: color});
            skala.resolution = 2 * this.getPxPerUnit()
            skala.scale.y = -1
            skala.position.x = axis == "x" ? val : offset.x;
            skala.position.y = axis == "y" ? val : offset.y;
            skala.anchor.x = axis == "x" ? 0.5 : 0;
            skala.anchor.y = axis == "y" ? 0.5 : 1;
            container!.addChild(skala);
        };

        if (!onlyX) {
            const maxY = world.minUnits.y + world.dim().h
            for (let i = step * Math.ceil((world.minUnits.y + 0.1 * step) / step); i < maxY - 0.1 * step; i += step) { createLabel(i, "y"); }
        }
        if (!onlyY) {
            const maxX = world.minUnits.x + world.dim().w
            for (let i = step * Math.ceil((world.minUnits.x + 0.1 * step) / step); i < maxX - 0.1 * step; i += step) { createLabel(i, "x"); }
        }
        this.render();
    }
    createAxis(p: Partial<CoordProps>) {
        const container = new PIXI.Container()
        this.coordProps = {container, ...p}
        this.unitContainer.addChild(container)
        this.updateAxis()
    }
}

//   // Listen for animate update
//   app.ticker.add((delta) => {
//       // rotate the container!
//       // use delta to create frame-independent transform
//       container.rotation -= 0.01 * delta;
//   });

interface IDrawable {
    obj: PIXI.DisplayObject,
    x: number,
    y: number,
    w?: number,
    h?: number,
    rotation: number,
    anchor: TCoord,
    alpha: number,
    world: World,
}

abstract class Drawable implements IDrawable {
    forceUnits: Partial<TDim>
    constructor(
        public obj: PIXI.DisplayObject,
        public x: number,
        public y: number,
        w?: number,
        h?: number,
        public rotation: number = 0,
        public anchor: TCoord = { x: 0.5, y: 0.5 },
        public alpha: number = 1,
        public world: World = latestWorld,
    ) {
        this.forceUnits = {...w && {w}, ...h && {h}}
        this.obj.alpha = this.alpha
        this.setAnchor(this.anchor)
    }
    get w() {
        return this.forceUnits.w || this.warn()
    }
    get h() {
        return this.forceUnits.h || this.warn()
    }
    getResolution() {return {x: 1, y: 1}}
    warn(): number {
        throw new Error("can't find dim")
    }
    destroy() {
        this.world.remove(this);
    }
    abstract onResize(): void
    draw() {
        this.obj.rotation = this.rotation
        this.obj.position = {x: this.x, y: this.y};
    }
    setAnchor(coords: TCoord) {
        this.anchor = coords
        const {x, y} = this.getResolution()
        this.obj.pivot.set(x * coords.x * this.w, y * coords.y * this.h)
    }
    onClick(fn: (e: PIXI.FederatedEvent)=>void) {
        this.obj.eventMode = "dynamic"
        this.obj.on("click", (e: PIXI.FederatedPointerEvent)=>{
            const {x, y} = this.obj.toLocal(e.global);
            const canvas = this.world.app.renderer.extract.canvas(this.obj);
            const context = canvas.getContext('2d')!
            const pixelData = context.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
            const alpha = pixelData[3]
            if(alpha > 0) fn(e)        
        })
    }
    on(type: keyof PIXI.DisplayObjectEvents, fn: (...args: unknown[])=>void) {
        this.obj.interactive = true
        this.obj.on(type, fn)        
    }
}

type ActorParams = {
    img: string
    x?: number
    y?: number
    wUnits?: number
    hUnits?: number
    world?: World
    autorotate?: boolean
    rotation?: number
    anchor?: TCoord
    alpha?: number
}
export class Actor extends Drawable {
    vx = 0
    vy = 0
    img: string
    // x: number
    // y: number
    // forceUnits: Partial<TDim>
    // world: World
    autorotate: boolean
    // rotation: number
    // anchor: TCoord
    // alpha: number
    obj: PIXI.Sprite
    constructor(params: ActorParams) {
        const {alpha = 1, x = 0, y = 0, wUnits, hUnits, rotation = 0, anchor, world, img} = params
        const obj = PIXI.Sprite.from(getImageUrl(img), {resolution: 1})
        obj.texture.rotate = 8   
        super(obj, x, y, wUnits, hUnits, rotation, anchor, alpha, world)
        this.obj = obj            
        this.img = img
        this.obj.texture.baseTexture.on("loaded", () => {    
            this.onResize()
        })
        this.autorotate = params.autorotate ?? true;
        this.onResize()
        this.setAnchor(params.anchor || { x: 0.5, y: 0.5 })
        this.world.add(this);
    }
    onResize() {
        const {w, h} = this.forceUnits
        const {width, height} = this.obj.texture.baseTexture
        const nativeRatio = width / height
        if(w) {
            this.obj.width = w
            this.obj.height = w / nativeRatio
        }
        if(h) {
            this.obj.height = h
            if (!w) this.obj.width = h * nativeRatio; // allow distortion
        }
        this.setAnchor(this.anchor)
    }
    getResolution() {
        const {width, height} = this.obj.texture.baseTexture
        return {x: width / this.w, y: height / this.h}
    }
    resize(dim: Partial<TDim>) {
        this.forceUnits = dim
        this.onResize()
    }
    get w() {
        return this.forceUnits.w || this.obj.width
    }
    get h() {
        return this.forceUnits.h || this.obj.height
    }
    draw() {
        super.draw()
        if (this.autorotate && !(this.vx === 0 && this.vy === 0)) { this.obj.rotation = Math.atan2(this.vy, this.vx); }
    }
}

abstract class GraphicsSprite extends Drawable {
    obj: PIXI.Graphics
    color: number
    constructor(props: Partial<IDrawable> & {color: number}) {
        const {x = 0, y = 0, w: wUnits, h: hUnits, alpha, anchor, rotation, world, color} = props
        const obj = new PIXI.Graphics()
        super(obj, x, y, wUnits, hUnits, alpha, anchor, rotation, world)
        this.obj = obj
        this.color = color
    }
    abstract resetGraphic(): void
    onResize() {
        this.resetGraphic()
    }
    setColor(value: number) {
        this.color = value
        this.resetGraphic()
    }
}

type LinePos = {from: TCoord, to: TCoord} | {x1: number, y1: number, x2: number, y2: number}
type LineParams = LinePos & {
    color?: number
    thickness?: number
    alpha?: number
    world?: World
}
export class Line extends GraphicsSprite {
    thickness: number
    from: TCoord
    to: TCoord
    constructor(params: LineParams) {
        const from = "from" in params ? params.from : {x: params.x1, y: params.y1}
        const to = "to" in params ? params.to : {x: params.x2, y: params.y2}
        const {alpha = 1, color = 0x112233, thickness = 3, world} = params
        const x = 0 //(from.x + to.x) / 2
        const y = 0 //(from.y + to.y) / 2
        super({x, y, w: Math.abs(to.x - from.x), h: Math.abs(to.y - from.y), alpha, world, color, anchor: {x:0, y:0}})
        this.thickness = params.thickness || 3
        this.from = from
        this.to = to
        this.resetGraphic()
        this.draw()
        this.world.add(this)
    }
    resetGraphic() {
        this.obj.clear()
        this.obj.lineStyle(this.thickness * this.world.getPxPerUnit(), this.color, this.alpha);
        const dx = this.to.x - this.from.x
        const dy = this.to.y - this.from.y
        this.obj.moveTo(0,0);
        this.obj.lineTo(dx, dy);
    }
    draw() {
        this.obj.position = this.from;
        this.resetGraphic()
    }
}

type CircleParams = TCoord & {
    color?: number
    alpha?: number
    world?: World
    r: number
}
export class Circle extends GraphicsSprite {
    forceUnits: TDim;
    constructor(params: CircleParams) {
        const {x = 0, y = 0, alpha = 1, color = 0xaabbcc, r = 1, world} = params
        super({x, y, w: 2 * r, h: 2 * r, alpha, world, color})
        this.forceUnits = {w: 2*r, h: 2*r}
        this.resetGraphic()
        this.draw()
        this.world.add(this)
    }
    setRadius(r: number) {
        this.forceUnits = {w: 2*r, h: 2*r}
        this.resetGraphic()
    }
    resetGraphic() {
        this.obj.clear()
        this.obj.beginFill(this.color);
        this.obj.drawCircle(this.w! / 2, this.h! / 2, this.w! / 2);
        this.obj.endFill();
    }
}
  
//   function PassiveSprite(params) {
//     var params = params || {};
//     this.world = params.world || world;
//     var texture = params.texture || new PIXI.Texture.fromImage(params.img);
//       this.sprite = new PIXI.Sprite(texture);
//     this.x = params.x || 0;
//     this.y = params.y || 0;
//     this.sprite.position = this.world.unitsToPx(this);
//     this.sprite.rotation = params.rotation || 0;
//     this.sprite.scale = params.scale || {x:1, y:1};
//     if(params.wUnits) {
//       this.sprite.scale.x = params.wUnits * this.world.pxPerUnit / texture.width;
//       this.sprite.scale.y = this.sprite.scale.x;
//     }
//     if(params.hUnits) {
//       this.sprite.scale.y = params.hUnits * this.world.pxPerUnit / texture.height;
//       if(!params.wUnits) this.sprite.scale.x = this.sprite.scale.y; //Verzerren möglich, falls erwünscht
//     }
//     this.sprite.anchor = params.anchor || {x:0.5, y:0.5};
//     this.sprite.alpha = params.alpha || 1;
//     this.world.stage.addChildAt(this.sprite, params.background ? 0 : this.world.stage.children.length);
//     this.world.render();
//     return this;
//   }

//@ts-ignore export to global scope for non-module use
window.simhelpers = {
    World, Actor, Line, Circle
}