import { Game } from "./Game.js";
const fullscreenBtn = document.querySelector("[data-fullscreen-btn]");
const cnvs = document.querySelector("[data-screen]");
const App = {
    init: function (e) {
        Game.init(cnvs);
        fullscreenBtn?.onclick = (e) => { };
    },
    toggleFullscreen: function () {
    }
};
window.onload = App.init.bind(App);
