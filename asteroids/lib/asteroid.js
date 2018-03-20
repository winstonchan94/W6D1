const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

class Asteroid extends MovingObject {
  constructor (pos) {
    super({pos: pos,
       color: DEFAULTS.COLOR,
       radius: DEFAULTS.RADIUS,
        vel: Util.randomVec(DEFAULTS.SPEED) });
  }

}
