/**
 * Created by evanmeigs1 on 11/16/15.
 */
// Sprite variables
var
    fishSprite,
    backgroundSprite,
    foregroundSprite,
    topCoralSprite,
    bottomCoralSprite,
    textSprites,
    scoreSprite,
    splashScreenSprite,
    okButtonSprite,
    smallNumberSprite,
    largeNumberSprite;

/**
 * Sprite class
 * @param {Image} img - sprite sheet image
 * @param {number} x - x-position in sprite sheet
 * @param {number} y - y-position in sprite sheet
 * @param {number} width - width of sprite
 * @param {number} height - height of sprite
 */
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}

/**
 * Draw sprite to canvas context
 *
 * @param {CanvasRenderingContext2D} renderingContext context used for drawing
 * @param {number} x   x-position on canvas to draw from
 * @param {number} y   y-position on canvas to draw from
 */
Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height,
        x, y, this.width, this.height);
};

/**
 * Initate all sprite
 * @param {Image} img spritesheet image
 */
function initSprites(img) {

    fishSprite = [
        new Sprite(img, 278, 115, 48, 28),
        new Sprite(img, 278, 144, 48, 30),
        new Sprite(img, 278, 173, 48, 32)
    ];

    backgroundSprite = new Sprite(img, 0, 0, 200, 114);
    backgroundSprite.color = "#8BE4FD"; // save background color
    foregroundSprite = new Sprite(img, 0, 240, 150, 40);

    topCoralSprite = new Sprite(img, 333, 105, 65, 150);
    bottomCoralSprite = new Sprite(img, 331, 20, 67, 40);

    textSprites = {
        floppyFish: new Sprite(img, 59, 114, 96, 22),
        gameOver: new Sprite(img, 59, 136, 94, 19),
        getReady: new Sprite(img, 61, 184, 89, 21),
        forestLevel: new Sprite(img, 0, 118, 45, 15),
        caveLevel: new Sprite(img, 50, 118, 45, 15)
    };

    okButtonSprite = new Sprite(img, 121, 220, 40, 14);

    scoreSprite = new Sprite(img, 138, 56, 113, 58);
    splashScreenSprite = new Sprite(img, 0, 114, 59, 49);

}







