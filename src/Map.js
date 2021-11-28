// Your CODE goes here
let pacmanMap = `
WWWWWWWWWWWWW.WWWWWWWWWWWWWW
W........................WWW
W.WWWW..WWW...WWWW.......WWW
W.W..W.W...W.W*.....WWWW.WWW
W.WWWW.WWWWW.W......WWWW.WWW
W.W....W...W..WWWW........WW
W.........................WW
W.WWW...WW....WWWW...WWWW..W
W...W..WWWW..WWWWWW.WWWWWW.W
WWW.W.WWWW...W.WW.W.W.WW.W.W
W...W.WWW*...WWWWWW.WWWWWW.W
W.WWW.WWWW...WWWWWW.WWWWWW.W
W...W..WWWW..W.WW.W.W.WW.W.W
WWW.W...WW.................W
WWW.W......WW.WWW.WWWWWWWW.W
.*....WWWWWWW.WWW.WWW.......
W..WW..............WW.WWWWWW
WW.WWWWWW.WWW--WWW.WW......W
WW......W.WooooooW.WWWWWWW.W
WWWWWWW.W.WooooooW.WW......W
W.......W*WooooooW.WWWW.WW.W
W.WWWWWWW.WWWWWWWW.WWWW.WW.W
W..........................W
WWWWWWWWWWWW.WWWWWWWW.WWWWWW
WWW.......................WW
WWW..WW..WW...WWW..WW...W.WW
WWW.W..WW..W.W...W.W*W..W.WW
WWW.W......W.WWWWW.W..W.W.WW
WWW.W......W.W...W.W...WW.WW
WWW......................*WW
WWWWWWWWWWWWW.WWWWWWWWWWWWWW
`;

class Map {
    constructor(ctx,initialPos = {x: 0, y: 0}) {
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;
        /* Fill the code */
        this.origin = { x: initialPos.x, y: initialPos.y };
    }

    keyboard_event() { }
    update() { }
    draw(ctx) {
        /* Fill the code */
        let delta = {x: Math.round(500/28), y: Math.round(500/31)};
        let arrayOfRows = pacmanMap.match(/.{1,28}/g).forEach((e, y) => {
            let arrayOfChars = e.split("").forEach((element, x) => {
                switch (element) {
                    case "W": //Dibuja pared
                        ctx.strokeStyle = "#623864";
                        ctx.fillStyle = "#623864";
                        ctx.fillRect((x*delta.x), (y*delta.y), delta.x, delta.y);
                        break;
                    case ".": //Dibuja comida
                        ctx.beginPath();
                        ctx.arc((x*delta.x + delta.x/2), (y*delta.y + delta.y/2), (delta.x/5), 0, 2 * Math.PI);
                        ctx.strokeStyle = "#FAC249";
                        ctx.fillStyle = "#FAC249";
                        ctx.fill();
                        break;
                        case "*": //Dibuja come-fantasmas
                        ctx.beginPath();
                        ctx.arc((x*delta.x + delta.x/2), (y*delta.y + delta.y/2), (delta.x/4), 0, 2 * Math.PI);
                        ctx.strokeStyle = "#4A6E43";
                        ctx.fillStyle = "#4A6E43";
                        ctx.fill();
                        break;
                    case "o": //Dibuja hueco fantasmas
                        ctx.strokeStyle = "#FFDFD3";
                        ctx.fillStyle = "#FFDFD3";
                        ctx.fillRect((x*delta.x), (y*delta.y), delta.x, delta.y);
                        break;
                    case "-":
                        ctx.strokeStyle = "#FFDFD3";
                        ctx.fillStyle = "#FFDFD3";
                        ctx.fillRect((x*delta.x), (y*delta.y), delta.x, delta.y);
                        break;
                }
            })
        })
    }
}

