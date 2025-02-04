Date.now =
  Date.now ||
  function () {
    // thanks IE8
    return new Date().getTime();
  };

if (typeof window !== "undefined") {
  if ("performance" in window === false) {
    window.performance = {};
  }
  if ("now" in window.performance === false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }
}

class RAF {
  constructor() {
    this.funcs = {};
    this.lastPass = {};
    this.framerates = {};
    this.nextFramePendingFuncs = [];
    this.nextFrameFuncs = [];
    this.postFrameFuncs = [];
    this.dt = Infinity;
    this.timeElapsed = 0;
    this.frame = 0;
    this.dictonary = [];
    this.last = performance.now();
    this.initTime = performance.now();
    this.isBlurred = false;
    this.onBefore = function () {};
    this.onAfter = function () {};

    if (typeof window !== "undefined") {
      this.init();
    }
  }

  subscribe(id, func, framerate = null) {
    if (this.funcs[id]) {
      // console.warn('RAF - A listener with this id already exists.')
      return;
    }

    this.dictonary.push(id);
    this.funcs[id] = func;
    this.lastPass[id] = Date.now();

    if (framerate !== null) {
      this.framerates[id] = 1 / framerate;
    } else {
      this.framerates[id] = framerate;
      // this.framerates[id] = framerate
    }
  }

  unsubscribe(id) {
    if (this.funcs[id]) {
      this.dictonary.splice(this.dictonary.indexOf(id), 1);
      delete this.funcs[id];
    }
  }

  init() {
    window.addEventListener("focus", () => {
      this.last = performance.now();
    });

    window.addEventListener("visibilitychange", (e) => {
      if (document.visibilityState === "visible") {
        this.isBlurred = false;
      } else {
        this.isBlurred = true;
      }
    });

    this.update = this.update.bind(this);
    this.update();
  }

  nextFrame(func) {
    this.nextFramePendingFuncs.push(func);
  }

  postFrame(func) {
    this.postFrameFuncs.push(func);
  }

  update() {
    requestAnimationFrame(this.update);
    if (this.isBlurred) return;

    this.onBefore();

    this.frame++;
    this.dt = performance.now() - this.last;
    this.timeElapsed += this.dt;

    while (this.nextFrameFuncs.length > 0) {
      this.nextFrameFuncs.splice(0, 1)[0]();
    }
    while (this.nextFramePendingFuncs.length > 0) {
      this.nextFrameFuncs.push(this.nextFramePendingFuncs.splice(0, 1)[0]);
    }

    // CHECK: Possible to use performance.now ?
    const now = Date.now();

    for (let i = 0; i < this.dictonary.length; i++) {
      if (
        this.framerates[this.dictonary[i]] !== null &&
        now - this.lastPass[this.dictonary[i]] <
          this.framerates[this.dictonary[i]] * 1000
      ) {
        continue;
      }
      if (typeof this.funcs[this.dictonary[i]] === "function") {
        this.lastPass[this.dictonary[i]] = now;
        this.funcs[this.dictonary[i]]();
      }
    }

    while (this.postFrameFuncs.length > 0) {
      this.postFrameFuncs.splice(0, 1)[0]();
    }

    this.onAfter();

    this.last = performance.now();
  }
}
const out = new RAF();
export default out;
