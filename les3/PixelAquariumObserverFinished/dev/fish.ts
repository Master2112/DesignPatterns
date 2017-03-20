class Fish implements GameObject {

    private swimBehavior : SwimBehavior;
    public div : HTMLElement;
    public x : number = 0;
    public y : number = 0;
    
    public flip : number = 0;

    public setSwimBehavior(behavior : SwimBehavior) {
        this.swimBehavior = behavior;
    }

    constructor() {
        this.createElement();
    }

    private createElement() : void{
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);

        // random positie
        let startx:number = (Math.random() * window.innerWidth);
        let starty:number = (Math.random() * window.innerHeight);      
        
        this.x = startx;
        this.y = starty;
        
        // random kleur
        let color:number = Math.random() * 360;
        
        this.div.style.webkitFilter = "hue-rotate("+color+"deg)";
        this.div.style.filter = "hue-rotate("+color+"deg)";
    }
 
    public update() : void {
        this.swimBehavior.updatePosition();
    }

    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotatey(" + this.flip + "deg)";
    }

    public breadAdded(bread : Bread) {
        this.swimBehavior.breadAdded(bread);
    }

    public flipFish() : void {
        this.flip = this.flip == 0 ? 180 : 0;
    }
}