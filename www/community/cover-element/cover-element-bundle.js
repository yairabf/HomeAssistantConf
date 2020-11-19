(function () {
    "use strict";

    function a() {
        const b = k(["\n      @media (max-width: 400px) {\n        .content {\n          transform: scale(var(--narrow-scale-factor, 0.8));\n          transform-origin: top;\n        }\n      }\n      .content {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n      }\n      .label {\n        text-align: center;\n        margin-top: var(--label-margin-top, 10px);\n        color: var(--label-color);\n        font-size: var(--label-font-size);\n        font-weight: var(--label-font-weight);\n      }\n      .position {\n        text-align: center;\n        margin-top: var(--position-label-margin-top, -5px);\n        color: var(--position-label-color);\n        font-size: var(--position-label-font-size);\n        font-weight: var(--position-label-font-weight);\n      }\n    "]);
        return a = function () {
            return b
        }, b
    }

    function b() {
        const a = k([""]);
        return b = function () {
            return a
        }, a
    }

    function c() {
        const a = k(["\n              <div class=\"position\">\n                ", "\n              </div>\n            "]);
        return c = function () {
            return a
        }, a
    }

    function d() {
        const a = k(["\n              <ha-cover-controls\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-cover-controls>\n            "]);
        return d = function () {
            return a
        }, a
    }

    function e() {
        const a = k(["\n              <ha-cover-tilt-controls\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-cover-tilt-controls>\n            "]);
        return e = function () {
            return a
        }, a
    }

    function f() {
        const a = k([""]);
        return f = function () {
            return a
        }, a
    }

    function g() {
        const a = k(["\n              <div class=\"label\">\n                ", "\n              </div>\n            "]);
        return g = function () {
            return a
        }, a
    }

    function h() {
        const a = k(["\n      <div class=\"content\">\n        ", "\n        ", "\n        ", "\n      </div>\n    "]);
        return h = function () {
            return a
        }, a
    }

    function i() {
        const a = k(["\n        <hui-warning>Entity not found</hui-warning>\n      "]);
        return i = function () {
            return a
        }, a
    }

    function j() {
        const a = k([""]);
        return j = function () {
            return a
        }, a
    }

    function k(a, b) {
        return b || (b = a.slice(0)), Object.freeze(Object.defineProperties(a, {
            raw: {
                value: Object.freeze(b)
            }
        }))
    }

    function l(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = null == arguments[b] ? {} : arguments[b],
                d = Object.keys(c);
            "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function (a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable
            }))), d.forEach(function (b) {
                m(a, b, c[b])
            })
        }
        return a
    }

    function m(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a
    }(function (a, b) {
        "object" == typeof exports && "undefined" != typeof module ? b() : "function" == typeof define && define.amd ? define(b) : b()
    })(this, function () {
        function k(a) {
            const b = o(a) || p(a) || q(a),
                c = r(a) || s(a) || t(a);
            return c && !b
        }
        class m {
            static get LitElement() {
                return Object.getPrototypeOf(customElements.get("home-assistant-main"))
            }
            static get LitHtml() {
                return this.LitElement.prototype.html
            }
            static get LitCSS() {
                return this.LitElement.prototype.css
            }
            static callService(a, b, c, d, e) {
                a.callService(b, c, l({
                    entity_id: d
                }, e))
            }
            static popUp(a, b, c) {
                let d = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3],
                    e = document.createElement("div");
                e.innerHTML = "\n      <style>\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n        }\n      </style>\n      <app-toolbar>\n        <paper-icon-button\n          icon=\"hass:close\"\n          dialog-dismiss=\"\"\n        ></paper-icon-button>\n        <div class=\"main-title\" main-title=\"\">\n          ".concat(b, "\n        </div>\n      </app-toolbar>\n    "), e.appendChild(c), this.moreInfo(Object.keys(a.states)[0]);
                let f = document.querySelector("home-assistant")._moreInfoEl;
                return f._page = "none", f.shadowRoot.appendChild(e), f.style.width = "570px", document.querySelector("home-assistant").provideHass(c), setTimeout(() => {
                    let a = setInterval(() => {
                        f.getAttribute("aria-hidden") && (e.parentNode.removeChild(e), clearInterval(a))
                    }, 100)
                }, 1e3), f
            }
            static closePopUp() {
                let a = document.querySelector("home-assistant")._moreInfoEl;
                a && a.close()
            }
            static moreInfo(a) {
                this.fireEvent("hass-more-info", {
                    entityId: a
                })
            }
            static fireEvent(a, b) {
                let c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (a = new Event(a, {
                        bubbles: !0,
                        cancelable: !1,
                        composed: !0
                    }), a.detail = b || {}, c) c.dispatchEvent(a);
                else {
                    var d = document.querySelector("home-assistant");
                    d = d && d.shadowRoot, d = d && d.querySelector("home-assistant-main"), d = d && d.shadowRoot, d = d && d.querySelector("app-drawer-layout partial-panel-resolver"), d = d && d.shadowRoot || d, d = d && d.querySelector("ha-panel-lovelace"), d = d && d.shadowRoot, d = d && d.querySelector("hui-root"), d = d && d.shadowRoot, d = d && d.querySelector("ha-app-layout #view"), d = d && d.firstElementChild, d && d.dispatchEvent(a)
                }
            }
        }
        const n = (a, b) => 0 != (a.attributes.supported_features & b),
            o = a => n(a, 1),
            p = a => n(a, 2),
            q = a => n(a, 8),
            r = a => n(a, 16),
            s = a => n(a, 32),
            t = a => n(a, 64);
        class u extends m.LitElement {
            constructor() {
                super(), this._config = {}
            }
            static get properties() {
                return {
                    hass: {},
                    config: {}
                }
            }
            setConfig(a) {
                if (!a.entity) throw Error("Invalid Configuration: 'entity' required");
                if (a.tap_action) throw Error("Invalid Configuration: 'tap_action' not allowed");
                if (a.hold_action) throw Error("Invalid Configuration: 'hold_action' not allowed");
                this._config = a
            }
            render() {
                if (!this._config || !this.hass) return m.LitHtml(j());
                const a = this.hass.states[this._config.entity];
                return a ? m.LitHtml(h(), this._config.label ? m.LitHtml(g(), this._config.label) : m.LitHtml(f()), k(a) ? m.LitHtml(e(), this.hass, a) : m.LitHtml(d(), this.hass, a), this._config.position_label && this._config.position_label.show ? m.LitHtml(c(), this._computePosition(a)) : m.LitHtml(b())) : m.LitHtml(i())
            }
            _computePosition(a) {
                if (a.attributes.current_position === void 0) return "";
                const b = a.attributes.current_position;
                return 0 === b ? this._config.position_label.closed_text ? this._config.position_label.closed_text : "closed" : 100 === b ? this._config.position_label.open_text ? this._config.position_label.open_text : "open" : b + "% " + (this._config.position_label.interim_text ? this._config.position_label.interim_text : "open")
            }
            static get styles() {
                return m.LitCSS(a())
            }
        }
        customElements.define("cover-element", u)
    })
})();