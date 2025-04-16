// function StopWatch() {
//   let isStarted = false;
//
//   let isStoped = false;
//
//   let duration = 0;
//
//   let startingTime = 0;
//
//   Object.defineProperty(this, "duration", {
//     get() {
//       if (!isStarted) return 0;
//       if (isStarted && !isStoped) return Date.now() - startingTime + duration;
//       return duration;
//     },
//   });
//
//   this.start = () => {
//     if (isStarted && !isStoped) {
//       console.error("timer is already started");
//       return;
//     }
//     if (isStoped) {
//       isStoped = false;
//     }
//     isStarted = true;
//     startingTime = Date.now();
//   };
//   this.stop = () => {
//     if (!isStarted || isStoped) {
//       console.error("its not started yet");
//       return;
//     }
//     isStoped = true;
//     duration = Date.now() - startingTime + duration;
//   };
//   this.reset = () => {
//     isStarted = false;
//     isStoped = false;
//     duration = 0;
//     startingTime = 0;
//   };
// }

function HtmlElement() {
  this.click = () => {
    console.log("click");
  };
}

HtmlElement.prototype.focus = () => {
  console.log("focus");
};

let e = new HtmlElement();

function HtmlSelectElement(elements = ["hello", "world"]) {
  let storedItems = elements;

  Object.defineProperty(this, "items", {
    get: () => {
      return storedItems;
    },
  });

  this.addElement = (element) => {
    storedItems.push(element);
  };

  this.removeElement = (element) => {
    storedItems = storedItems.filter((e) => {
      if (e !== element) return e;
    });
  };

  this.render = () => {
    let htmlOutPut = storedItems
      .map((i) => {
        return `<div>${i}</div>`;
      })
      .join("");
    return htmlOutPut;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImgElement(src = "") {
  this.src = src;
  this.render = () => {
    let imgHtml = `<img src=${src}>`;
    return imgHtml;
  };
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

let ie = new HtmlImgElement("http what ever");
