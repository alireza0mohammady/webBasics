function StopWatch() {
  let isStarted = false;

  let isStoped = false;

  let duration = 0;

  let startingTime = 0;

  Object.defineProperty(this, "duration", {
    get() {
      if (!isStarted) return 0;
      if (isStarted && !isStoped) return Date.now() - startingTime + duration;
      return duration;
    },
  });

  this.start = () => {
    if (isStarted && !isStoped) {
      console.error("timer is already started");
      return;
    }
    if (isStoped) {
      isStoped = false;
    }
    isStarted = true;
    startingTime = Date.now();
  };
  this.stop = () => {
    if (!isStarted || isStoped) {
      console.error("its not started yet");
      return;
    }
    isStoped = true;
    duration = Date.now() - startingTime + duration;
  };
  this.reset = () => {
    isStarted = false;
    isStoped = false;
    duration = 0;
    startingTime = 0;
  };
}
