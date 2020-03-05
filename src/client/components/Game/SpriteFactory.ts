import { Loader, Sprite, Spritesheet } from 'pixi.js';
import ENV from '../../../../env';

const loader = new Loader(ENV.SPRITES);

export interface Atlas {
  path: string;
  baseTex: any;
  getSprite: Record<string, Sprite>;
}

const TEST = 'TestTiles.json';

export default class SpriteFactory {
  test: Record<string, Sprite> = {};

  constructor(loaderCallback: (factory: SpriteFactory) => void = (): undefined => undefined) {
    loader.add(TEST).load((ldr, res) => {
      const testSheet = res[TEST]?.spritesheet?.textures;
      this.test = {
        get unknown(): Sprite {
          return new Sprite(testSheet.UNKNOWN);
        },
        get flagged(): Sprite {
          return new Sprite(testSheet.FLAGGED);
        },
        get exploded(): Sprite {
          return new Sprite(testSheet.EXPLODED);
        },
        get zero(): Sprite {
          return new Sprite(testSheet.ZERO);
        },
        get one(): Sprite {
          return new Sprite(testSheet.ONE);
        },
        get two(): Sprite {
          return new Sprite(testSheet.TWO);
        },
        get three(): Sprite {
          return new Sprite(testSheet.THREE);
        },
        get four(): Sprite {
          return new Sprite(testSheet.FOUR);
        },
        get five(): Sprite {
          return new Sprite(testSheet.FIVE);
        },
        get six(): Sprite {
          return new Sprite(testSheet.SIX);
        },
        get seven(): Sprite {
          return new Sprite(testSheet.SEVEN);
        },
        get eight(): Sprite {
          return new Sprite(testSheet.EIGHT);
        },
      };

      loaderCallback(this);
    });
  }
}
