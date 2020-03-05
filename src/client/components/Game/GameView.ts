import React from 'react';
import { Application, Loader, Sprite } from 'pixi.js';
import { useSelector } from 'react-redux';

import SpriteFactory from './SpriteFactory';
import { Store } from '../../redux/store';

const canvas = new Application();

// Constants
export const TILE_SIZE = 32;

canvas.renderer.view.style.position = 'absolute';
canvas.renderer.view.style.display = 'block';

export default class GameView {
  app = new Application({ antialias: false });

  loader = Loader.shared;

  renderer = this.app.renderer;

  view = this.app.view;

  stage = this.app.stage;

  spriteFactory: SpriteFactory;

  constructor() {
    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.display = 'block';

    this.spriteFactory = new SpriteFactory(factory => {
      function createTestTiles(idx: number): Sprite {
        switch (idx) {
          case 0:
            return factory.test.unknown;
          case 1:
            return factory.test.flagged;
          case 2:
            return factory.test.exploded;
          case 3:
            return factory.test.zero;
          case 4:
            return factory.test.one;
          case 5:
            return factory.test.two;
          case 6:
            return factory.test.three;
          case 7:
            return factory.test.four;
          case 8:
            return factory.test.five;
          case 9:
            return factory.test.six;
          case 10:
            return factory.test.seven;
          case 11:
            return factory.test.eight;
          default:
            return factory.test.eight;
        }
      }
      for (let y = 0; y < 640; y += TILE_SIZE) {
        for (let x = 0; x < 480; x += TILE_SIZE) {
          const randIdx = Math.floor(Math.random() * 12);
          const newSprite = createTestTiles(randIdx);
          newSprite.x = x;
          newSprite.y = y;
          newSprite.scale.set(2, 2);
          this.stage.addChild(newSprite);
        }
      }
    });
  }
}
