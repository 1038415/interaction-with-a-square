import * as PIXI from 'pixi.js'
import greenImage from "./images/green.png"
import trollImage from "./images/trollface.png"
import redImage from "./images/red.png"
import yellowImage from "./images/yellow.png"
import backgroundImage from "./images/background.png"
import { Application } from 'pixi.js'

const pixi = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(pixi.view);

// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from(greenImage);

// Set the initial position
sprite.scale.set(0.1);
sprite.anchor.set(0.5);
sprite.x = pixi.screen.width / 2;
sprite.y = pixi.screen.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);


// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

pixi.stage.addChild(sprite);

function onClick() {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}

function onS() {
    sprite.scale.x *= 0.99;
    sprite.scale.y *= 0.99;
}

window.addEventListener("keydown", (s: KeyboardEvent) => onS() )