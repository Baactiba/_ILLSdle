this.wordle = this.wordle || {},
this.wordle.bundle = function(e) {
    "use strict";
    function t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, a)
        }
        return n
    }
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
    }
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
    }
    function r(e, t, n) {
        return t && s(e.prototype, t),
        n && s(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && c(e, t)
    }
    function l(e) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        l(e)
    }
    function c(e, t) {
        return c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        c(e, t)
    }
    function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function d(e, t, n) {
        return d = u() ? Reflect.construct : function(e, t, n) {
            var a = [null];
            a.push.apply(a, t);
            var s = new (Function.bind.apply(e, a));
            return n && c(s, n.prototype),
            s
        }
        ,
        d.apply(null, arguments)
    }
    function p(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return p = function(e) {
            if (null === e || (n = e,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return e;
            var n;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, a)
            }
            function a() {
                return d(e, arguments, l(this).constructor)
            }
            return a.prototype = Object.create(e.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            c(a, e)
        }
        ,
        p(e)
    }
    function h(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function m(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return h(e)
    }
    function f(e) {
        var t = u();
        return function() {
            var n, a = l(e);
            if (t) {
                var s = l(this).constructor;
                n = Reflect.construct(a, arguments, s)
            } else
                n = a.apply(this, arguments);
            return m(this, n)
        }
    }
    function y(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var a, s, r = [], o = !0, i = !1;
            try {
                for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value),
                !t || r.length !== t); o = !0)
                    ;
            } catch (e) {
                i = !0,
                s = e
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (i)
                        throw s
                }
            }
            return r
        }(e, t) || v(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(e) {
        return function(e) {
            if (Array.isArray(e))
                return b(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || v(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function v(e, t) {
        if (e) {
            if ("string" == typeof e)
                return b(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
        }
    }
    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++)
            a[n] = e[n];
        return a
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var w = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            o(h(e = t.call(this)), "_letter", ""),
            o(h(e), "_state", "empty"),
            o(h(e), "_animation", "idle"),
            o(h(e), "_last", !1),
            o(h(e), "_reveal", !1),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                this.$tile = this.shadowRoot.querySelector(".tile"),
                this.$tile.addEventListener("animationend", (function(t) {
                    "PopIn" === t.animationName && (e._animation = "idle"),
                    "FlipIn" === t.animationName && (e.$tile.dataset.state = e._state,
                    e._animation = "flip-out"),
                    "FlipOut" === t.animationName && (e._animation = "idle",
                    e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row",{
                        bubbles: !0,
                        composed: !0
                    }))),
                    e._render()
                }
                )),
                this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, t, n) {
                switch (e) {
                case "letter":
                    if (n === t)
                        break;
                    var a = "null" === n ? "" : n;
                    this._letter = a,
                    this._state = a ? "tbd" : "empty",
                    this._animation = a ? "pop" : "idle";
                    break;
                case "evaluation":
                    if (!n)
                        break;
                    this._state = n;
                    break;
                case "reveal":
                    this._animation = "flip-in",
                    this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter,
                ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-tile", w);
    var _ = document.createElement("template");
    _.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e._letters = "",
            e._evaluation = [],
            e._length,
            e
        }
        return r(n, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var t = this;
                this._evaluation = e,
                this.$tiles && this.$tiles.forEach((function(e, n) {
                    e.setAttribute("evaluation", t._evaluation[n]),
                    setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }
                    ), 300 * n)
                }
                ))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(_.content.cloneNode(!0)),
                this.$row = this.shadowRoot.querySelector(".row");
                for (var t = function(t) {
                    var n = document.createElement("game-tile")
                      , a = e._letters[t];
                    (a && n.setAttribute("letter", a),
                    e._evaluation[t]) && (n.setAttribute("evaluation", e._evaluation[t]),
                    setTimeout((function() {
                        n.setAttribute("reveal", "")
                    }
                    ), 100 * t));
                    t === e._length - 1 && (n.last = !0),
                    e.$row.appendChild(n)
                }, n = 0; n < this._length; n++)
                    t(n);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                this.addEventListener("animationend", (function(t) {
                    "Shake" === t.animationName && e.removeAttribute("invalid")
                }
                ))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, t, n) {
                switch (e) {
                case "letters":
                    this._letters = n || "";
                    break;
                case "length":
                    this._length = parseInt(n, 10);
                    break;
                case "win":
                    if (null === n) {
                        this.$tiles.forEach((function(e) {
                            e.classList.remove("win")
                        }
                        ));
                        break
                    }
                    this.$tiles.forEach((function(e, t) {
                        e.classList.add("win"),
                        e.style.animationDelay = "".concat(100 * t, "ms")
                    }
                    ))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(t, n) {
                    var a = e._letters[n];
                    a ? t.setAttribute("letter", a) : t.removeAttribute("letter")
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-row", x);
    var S = document.createElement("template");
    S.innerHTML = "\n  <slot></slot>\n";
    var z = "nyt-wordle-darkmode"
      , j = "nyt-wordle-cbmode"
      , E = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            a(this, n),
            o(h(e = t.call(this)), "isDarkTheme", !1),
            o(h(e), "isColorBlindTheme", !1),
            e.attachShadow({
                mode: "open"
            });
            var s = JSON.parse(window.localStorage.getItem(z))
              , r = window.matchMedia("(prefers-color-scheme: dark)").matches
              , i = JSON.parse(window.localStorage.getItem(j));
            return !0 === s || !1 === s ? e.setDarkTheme(s) : r && e.setDarkTheme(!0),
            !0 !== i && !1 !== i || e.setColorBlindTheme(i),
            window.themeManager = h(e),
            e
        }
        return r(n, [{
            key: "setDarkTheme",
            value: function(e) {
                var t = document.querySelector("body");
                e && !t.classList.contains("nightmode") ? t.classList.add("nightmode") : t.classList.remove("nightmode"),
                this.isDarkTheme = e,
                window.localStorage.setItem(z, JSON.stringify(e))
            }
        }, {
            key: "setColorBlindTheme",
            value: function(e) {
                var t = document.querySelector("body");
                e && !t.classList.contains("colorblind") ? t.classList.add("colorblind") : t.classList.remove("colorblind"),
                this.isColorBlindTheme = e,
                window.localStorage.setItem(j, JSON.stringify(e))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(S.content.cloneNode(!0)),
                this.shadowRoot.addEventListener("game-setting-change", (function(t) {
                    var n = t.detail
                      , a = n.name
                      , s = n.checked;
                    switch (a) {
                    case "dark-theme":
                        return void e.setDarkTheme(s);
                    case "color-blind-theme":
                        return void e.setColorBlindTheme(s)
                    }
                }
                ))
            }
        }]),
        n
    }(p(HTMLElement));
    function T(e, t) {
        return e === t || e != e && t != t
    }
    function C(e, t) {
        for (var n = e.length; n--; )
            if (T(e[n][0], t))
                return n;
        return -1
    }
    customElements.define("game-theme-manager", E);
    var O = Array.prototype.splice;
    function L(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    L.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    }
    ,
    L.prototype.delete = function(e) {
        var t = this.__data__
          , n = C(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : O.call(t, n, 1),
        --this.size,
        !0)
    }
    ,
    L.prototype.get = function(e) {
        var t = this.__data__
          , n = C(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    ,
    L.prototype.has = function(e) {
        return C(this.__data__, e) > -1
    }
    ,
    L.prototype.set = function(e, t) {
        var n = this.__data__
          , a = C(n, e);
        return a < 0 ? (++this.size,
        n.push([e, t])) : n[a][1] = t,
        this
    }
    ;
    var I = "object" == ("undefined" == typeof global ? "undefined" : n(global)) && global && global.Object === Object && global
      , R = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
      , q = I || R || Function("return this")()
      , M = q.Symbol
      , A = Object.prototype
      , N = A.hasOwnProperty
      , P = A.toString
      , D = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var B = M ? M.toStringTag : void 0;
    function F(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : B && B in Object(e) ? function(e) {
            var t = N.call(e, D)
              , n = e[D];
            try {
                e[D] = void 0;
                var a = !0
            } catch (e) {}
            var s = P.call(e);
            return a && (t ? e[D] = n : delete e[D]),
            s
        }(e) : function(e) {
            return H.call(e)
        }(e)
    }
    function U(e) {
        var t = n(e);
        return null != e && ("object" == t || "function" == t)
    }
    function $(e) {
        if (!U(e))
            return !1;
        var t = F(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
    var G, Y = q["__core-js_shared__"], W = (G = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + G : "";
    var V = Function.prototype.toString;
    var J = /^\[object .+?Constructor\]$/
      , X = Function.prototype
      , K = Object.prototype
      , Z = X.toString
      , Q = K.hasOwnProperty
      , ee = RegExp("^" + Z.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function te(e) {
        return !(!U(e) || (t = e,
        W && W in t)) && ($(e) ? ee : J).test(function(e) {
            if (null != e) {
                try {
                    return V.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var t
    }
    function ne(e, t) {
        var n = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return te(n) ? n : void 0
    }
    var ae = ne(q, "Map")
      , se = ne(Object, "create");
    var re = Object.prototype.hasOwnProperty;
    var oe = Object.prototype.hasOwnProperty;
    function ie(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    function le(e, t) {
        var a, s, r = e.__data__;
        return ("string" == (s = n(a = t)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== a : null === a) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
    function ce(e) {
        var t = -1
          , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    ie.prototype.clear = function() {
        this.__data__ = se ? se(null) : {},
        this.size = 0
    }
    ,
    ie.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0,
        t
    }
    ,
    ie.prototype.get = function(e) {
        var t = this.__data__;
        if (se) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return re.call(t, e) ? t[e] : void 0
    }
    ,
    ie.prototype.has = function(e) {
        var t = this.__data__;
        return se ? void 0 !== t[e] : oe.call(t, e)
    }
    ,
    ie.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        n[e] = se && void 0 === t ? "__lodash_hash_undefined__" : t,
        this
    }
    ,
    ce.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new ie,
            map: new (ae || L),
            string: new ie
        }
    }
    ,
    ce.prototype.delete = function(e) {
        var t = le(this, e).delete(e);
        return this.size -= t ? 1 : 0,
        t
    }
    ,
    ce.prototype.get = function(e) {
        return le(this, e).get(e)
    }
    ,
    ce.prototype.has = function(e) {
        return le(this, e).has(e)
    }
    ,
    ce.prototype.set = function(e, t) {
        var n = le(this, e)
          , a = n.size;
        return n.set(e, t),
        this.size += n.size == a ? 0 : 1,
        this
    }
    ;
    function ue(e) {
        var t = this.__data__ = new L(e);
        this.size = t.size
    }
    ue.prototype.clear = function() {
        this.__data__ = new L,
        this.size = 0
    }
    ,
    ue.prototype.delete = function(e) {
        var t = this.__data__
          , n = t.delete(e);
        return this.size = t.size,
        n
    }
    ,
    ue.prototype.get = function(e) {
        return this.__data__.get(e)
    }
    ,
    ue.prototype.has = function(e) {
        return this.__data__.has(e)
    }
    ,
    ue.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof L) {
            var a = n.__data__;
            if (!ae || a.length < 199)
                return a.push([e, t]),
                this.size = ++n.size,
                this;
            n = this.__data__ = new ce(a)
        }
        return n.set(e, t),
        this.size = n.size,
        this
    }
    ;
    var de = function() {
        try {
            var e = ne(Object, "defineProperty");
            return e({}, "", {}),
            e
        } catch (e) {}
    }()
      , pe = de;
    function he(e, t, n) {
        "__proto__" == t && pe ? pe(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    function me(e, t, n) {
        (void 0 !== n && !T(e[t], n) || void 0 === n && !(t in e)) && he(e, t, n)
    }
    var fe, ye = function(e, t, n) {
        for (var a = -1, s = Object(e), r = n(e), o = r.length; o--; ) {
            var i = r[fe ? o : ++a];
            if (!1 === t(s[i], i, s))
                break
        }
        return e
    }, ge = "object" == (void 0 === e ? "undefined" : n(e)) && e && !e.nodeType && e, ve = ge && "object" == ("undefined" == typeof module ? "undefined" : n(module)) && module && !module.nodeType && module, be = ve && ve.exports === ge ? q.Buffer : void 0, ke = be ? be.allocUnsafe : void 0;
    var we = q.Uint8Array;
    function _e(e, t) {
        var n, a, s = t ? (n = e.buffer,
        a = new n.constructor(n.byteLength),
        new we(a).set(new we(n)),
        a) : e.buffer;
        return new e.constructor(s,e.byteOffset,e.length)
    }
    var xe = Object.create
      , Se = function() {
        function e() {}
        return function(t) {
            if (!U(t))
                return {};
            if (xe)
                return xe(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0,
            n
        }
    }();
    var ze, je, Ee = (ze = Object.getPrototypeOf,
    je = Object,
    function(e) {
        return ze(je(e))
    }
    ), Te = Object.prototype;
    function Ce(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || Te)
    }
    function Oe(e) {
        return null != e && "object" == n(e)
    }
    function Le(e) {
        return Oe(e) && "[object Arguments]" == F(e)
    }
    var Ie = Object.prototype
      , Re = Ie.hasOwnProperty
      , qe = Ie.propertyIsEnumerable
      , Me = Le(function() {
        return arguments
    }()) ? Le : function(e) {
        return Oe(e) && Re.call(e, "callee") && !qe.call(e, "callee")
    }
      , Ae = Me
      , Ne = Array.isArray;
    function Pe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function De(e) {
        return null != e && Pe(e.length) && !$(e)
    }
    var He = "object" == (void 0 === e ? "undefined" : n(e)) && e && !e.nodeType && e
      , Be = He && "object" == ("undefined" == typeof module ? "undefined" : n(module)) && module && !module.nodeType && module
      , Fe = Be && Be.exports === He ? q.Buffer : void 0
      , Ue = (Fe ? Fe.isBuffer : void 0) || function() {
        return !1
    }
      , $e = Function.prototype
      , Ge = Object.prototype
      , Ye = $e.toString
      , We = Ge.hasOwnProperty
      , Ve = Ye.call(Object);
    var Je = {};
    Je["[object Float32Array]"] = Je["[object Float64Array]"] = Je["[object Int8Array]"] = Je["[object Int16Array]"] = Je["[object Int32Array]"] = Je["[object Uint8Array]"] = Je["[object Uint8ClampedArray]"] = Je["[object Uint16Array]"] = Je["[object Uint32Array]"] = !0,
    Je["[object Arguments]"] = Je["[object Array]"] = Je["[object ArrayBuffer]"] = Je["[object Boolean]"] = Je["[object DataView]"] = Je["[object Date]"] = Je["[object Error]"] = Je["[object Function]"] = Je["[object Map]"] = Je["[object Number]"] = Je["[object Object]"] = Je["[object RegExp]"] = Je["[object Set]"] = Je["[object String]"] = Je["[object WeakMap]"] = !1;
    var Xe = "object" == (void 0 === e ? "undefined" : n(e)) && e && !e.nodeType && e
      , Ke = Xe && "object" == ("undefined" == typeof module ? "undefined" : n(module)) && module && !module.nodeType && module
      , Ze = Ke && Ke.exports === Xe && I.process
      , Qe = function() {
        try {
            var e = Ke && Ke.require && Ke.require("util").types;
            return e || Ze && Ze.binding && Ze.binding("util")
        } catch (e) {}
    }()
      , et = Qe && Qe.isTypedArray
      , tt = et ? function(e) {
        return function(t) {
            return e(t)
        }
    }(et) : function(e) {
        return Oe(e) && Pe(e.length) && !!Je[F(e)]
    }
      , nt = tt;
    function at(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
            return e[t]
    }
    var st = Object.prototype.hasOwnProperty;
    function rt(e, t, n) {
        var a = e[t];
        st.call(e, t) && T(a, n) && (void 0 !== n || t in e) || he(e, t, n)
    }
    var ot = /^(?:0|[1-9]\d*)$/;
    function it(e, t) {
        var a = n(e);
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == a || "symbol" != a && ot.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var lt = Object.prototype.hasOwnProperty;
    function ct(e, t) {
        var n = Ne(e)
          , a = !n && Ae(e)
          , s = !n && !a && Ue(e)
          , r = !n && !a && !s && nt(e)
          , o = n || a || s || r
          , i = o ? function(e, t) {
            for (var n = -1, a = Array(e); ++n < e; )
                a[n] = t(n);
            return a
        }(e.length, String) : []
          , l = i.length;
        for (var c in e)
            !t && !lt.call(e, c) || o && ("length" == c || s && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || it(c, l)) || i.push(c);
        return i
    }
    var ut = Object.prototype.hasOwnProperty;
    function dt(e) {
        if (!U(e))
            return function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e))
                        t.push(n);
                return t
            }(e);
        var t = Ce(e)
          , n = [];
        for (var a in e)
            ("constructor" != a || !t && ut.call(e, a)) && n.push(a);
        return n
    }
    function pt(e) {
        return De(e) ? ct(e, !0) : dt(e)
    }
    function ht(e) {
        return function(e, t, n, a) {
            var s = !n;
            n || (n = {});
            for (var r = -1, o = t.length; ++r < o; ) {
                var i = t[r]
                  , l = a ? a(n[i], e[i], i, n, e) : void 0;
                void 0 === l && (l = e[i]),
                s ? he(n, i, l) : rt(n, i, l)
            }
            return n
        }(e, pt(e))
    }
    function mt(e, t, n, a, s, r, o) {
        var i = at(e, n)
          , l = at(t, n)
          , c = o.get(l);
        if (c)
            me(e, n, c);
        else {
            var u, d = r ? r(i, l, n + "", e, t, o) : void 0, p = void 0 === d;
            if (p) {
                var h = Ne(l)
                  , m = !h && Ue(l)
                  , f = !h && !m && nt(l);
                d = l,
                h || m || f ? Ne(i) ? d = i : Oe(u = i) && De(u) ? d = function(e, t) {
                    var n = -1
                      , a = e.length;
                    for (t || (t = Array(a)); ++n < a; )
                        t[n] = e[n];
                    return t
                }(i) : m ? (p = !1,
                d = function(e, t) {
                    if (t)
                        return e.slice();
                    var n = e.length
                      , a = ke ? ke(n) : new e.constructor(n);
                    return e.copy(a),
                    a
                }(l, !0)) : f ? (p = !1,
                d = _e(l, !0)) : d = [] : function(e) {
                    if (!Oe(e) || "[object Object]" != F(e))
                        return !1;
                    var t = Ee(e);
                    if (null === t)
                        return !0;
                    var n = We.call(t, "constructor") && t.constructor;
                    return "function" == typeof n && n instanceof n && Ye.call(n) == Ve
                }(l) || Ae(l) ? (d = i,
                Ae(i) ? d = ht(i) : U(i) && !$(i) || (d = function(e) {
                    return "function" != typeof e.constructor || Ce(e) ? {} : Se(Ee(e))
                }(l))) : p = !1
            }
            p && (o.set(l, d),
            s(d, l, a, r, o),
            o.delete(l)),
            me(e, n, d)
        }
    }
    function ft(e, t, n, a, s) {
        e !== t && ye(t, (function(r, o) {
            if (s || (s = new ue),
            U(r))
                mt(e, t, o, n, ft, a, s);
            else {
                var i = a ? a(at(e, o), r, o + "", e, t, s) : void 0;
                void 0 === i && (i = r),
                me(e, o, i)
            }
        }
        ), pt)
    }
    function yt(e) {
        return e
    }
    function gt(e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    var vt = Math.max;
    var bt = pe ? function(e, t) {
        return pe(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (n = t,
            function() {
                return n
            }
            ),
            writable: !0
        });
        var n
    }
    : yt
      , kt = bt
      , wt = Date.now;
    var _t = function(e) {
        var t = 0
          , n = 0;
        return function() {
            var a = wt()
              , s = 16 - (a - n);
            if (n = a,
            s > 0) {
                if (++t >= 800)
                    return arguments[0]
            } else
                t = 0;
            return e.apply(void 0, arguments)
        }
    }(kt)
      , xt = _t;
    function St(e, t) {
        return xt(function(e, t, n) {
            return t = vt(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var a = arguments, s = -1, r = vt(a.length - t, 0), o = Array(r); ++s < r; )
                    o[s] = a[t + s];
                s = -1;
                for (var i = Array(t + 1); ++s < t; )
                    i[s] = a[s];
                return i[t] = n(o),
                gt(e, this, i)
            }
        }(e, t, yt), e + "")
    }
    var zt, jt = (zt = function(e, t, n) {
        ft(e, t, n)
    }
    ,
    St((function(e, t) {
        var a = -1
          , s = t.length
          , r = s > 1 ? t[s - 1] : void 0
          , o = s > 2 ? t[2] : void 0;
        for (r = zt.length > 3 && "function" == typeof r ? (s--,
        r) : void 0,
        o && function(e, t, a) {
            if (!U(a))
                return !1;
            var s = n(t);
            return !!("number" == s ? De(a) && it(t, a.length) : "string" == s && t in a) && T(a[t], e)
        }(t[0], t[1], o) && (r = s < 3 ? void 0 : r,
        s = 1),
        e = Object(e); ++a < s; ) {
            var i = t[a];
            i && zt(e, i, a, r)
        }
        return e
    }
    ))), Et = function(e, t) {
        return Et = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        Et(e, t)
    };
    function Tt(e, t) {
        function n() {
            this.constructor = e
        }
        Et(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var Ct, Ot = function() {
        return Ot = Object.assign || function(e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var s in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }
        ,
        Ot.apply(this, arguments)
    };
    function Lt(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , a = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && a >= e.length && (e = void 0),
                    {
                        value: e && e[a++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function It(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var a, s, r = n.call(e), o = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(a = r.next()).done; )
                o.push(a.value)
        } catch (e) {
            s = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (n = r.return) && n.call(r)
            } finally {
                if (s)
                    throw s.error
            }
        }
        return o
    }
    function Rt() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(It(arguments[t]));
        return e
    }
    function qt() {
        return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }
    function Mt(e, t) {
        return e.require(t)
    }
    !function(e) {
        e.Fatal = "fatal",
        e.Error = "error",
        e.Warning = "warning",
        e.Log = "log",
        e.Info = "info",
        e.Debug = "debug",
        e.Critical = "critical"
    }(Ct || (Ct = {}));
    var At = {};
    function Nt() {
        return qt() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : At
    }
    function Pt(e, t, n) {
        var a = n || Nt()
          , s = a.__SENTRY__ = a.__SENTRY__ || {};
        return s[e] || (s[e] = t())
    }
    var Dt = Object.prototype.toString;
    function Ht(e) {
        switch (Dt.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return Xt(e, Error)
        }
    }
    function Bt(e, t) {
        return Dt.call(e) === "[object " + t + "]"
    }
    function Ft(e) {
        return Bt(e, "ErrorEvent")
    }
    function Ut(e) {
        return Bt(e, "DOMError")
    }
    function $t(e) {
        return Bt(e, "String")
    }
    function Gt(e) {
        return null === e || "object" !== n(e) && "function" != typeof e
    }
    function Yt(e) {
        return Bt(e, "Object")
    }
    function Wt(e) {
        return "undefined" != typeof Event && Xt(e, Event)
    }
    function Vt(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }
    function Jt(e) {
        return "number" == typeof e && e != e
    }
    function Xt(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    function Kt(e, t) {
        try {
            for (var n = e, a = [], s = 0, r = 0, o = " > ".length, i = void 0; n && s++ < 5 && !("html" === (i = Zt(n, t)) || s > 1 && r + a.length * o + i.length >= 80); )
                a.push(i),
                r += i.length,
                n = n.parentNode;
            return a.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }
    function Zt(e, t) {
        var n, a, s, r, o, i = e, l = [];
        if (!i || !i.tagName)
            return "";
        l.push(i.tagName.toLowerCase());
        var c = t && t.length ? t.filter((function(e) {
            return i.getAttribute(e)
        }
        )).map((function(e) {
            return [e, i.getAttribute(e)]
        }
        )) : null;
        if (c && c.length)
            c.forEach((function(e) {
                l.push("[" + e[0] + '="' + e[1] + '"]')
            }
            ));
        else if (i.id && l.push("#" + i.id),
        (n = i.className) && $t(n))
            for (a = n.split(/\s+/),
            o = 0; o < a.length; o++)
                l.push("." + a[o]);
        var u = ["type", "name", "title", "alt"];
        for (o = 0; o < u.length; o++)
            s = u[o],
            (r = i.getAttribute(s)) && l.push("[" + s + '="' + r + '"]');
        return l.join("")
    }
    var Qt = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(e, t) {
        return e.__proto__ = t,
        e
    }
    : function(e, t) {
        for (var n in t)
            Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
        return e
    }
    );
    var en = function(e) {
        function t(t) {
            var n = this.constructor
              , a = e.call(this, t) || this;
            return a.message = t,
            a.name = n.prototype.constructor.name,
            Qt(a, n.prototype),
            a
        }
        return Tt(t, e),
        t
    }(Error)
      , tn = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
      , nn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function an(e, t) {
        void 0 === t && (t = !1);
        var n = e.host
          , a = e.path
          , s = e.pass
          , r = e.port
          , o = e.projectId;
        return e.protocol + "://" + e.publicKey + (t && s ? ":" + s : "") + "@" + n + (r ? ":" + r : "") + "/" + (a ? a + "/" : a) + o
    }
    function sn(e) {
        return "user"in e && !("publicKey"in e) && (e.publicKey = e.user),
        {
            user: e.publicKey || "",
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }
    function rn(e) {
        var t = "string" == typeof e ? function(e) {
            var t = nn.exec(e);
            if (!t)
                throw new en("Invalid Sentry Dsn: " + e);
            var n = It(t.slice(1), 6)
              , a = n[0]
              , s = n[1]
              , r = n[2]
              , o = void 0 === r ? "" : r
              , i = n[3]
              , l = n[4]
              , c = void 0 === l ? "" : l
              , u = ""
              , d = n[5]
              , p = d.split("/");
            if (p.length > 1 && (u = p.slice(0, -1).join("/"),
            d = p.pop()),
            d) {
                var h = d.match(/^\d+/);
                h && (d = h[0])
            }
            return sn({
                host: i,
                pass: o,
                path: u,
                projectId: d,
                port: c,
                protocol: a,
                publicKey: s
            })
        }(e) : sn(e);
        return function(e) {
            if (tn) {
                var t = e.port
                  , n = e.projectId
                  , a = e.protocol;
                if (["protocol", "publicKey", "host", "projectId"].forEach((function(t) {
                    if (!e[t])
                        throw new en("Invalid Sentry Dsn: " + t + " missing")
                }
                )),
                !n.match(/^\d+$/))
                    throw new en("Invalid Sentry Dsn: Invalid projectId " + n);
                if (!function(e) {
                    return "http" === e || "https" === e
                }(a))
                    throw new en("Invalid Sentry Dsn: Invalid protocol " + a);
                if (t && isNaN(parseInt(t, 10)))
                    throw new en("Invalid Sentry Dsn: Invalid port " + t)
            }
        }(t),
        t
    }
    var on, ln = ["fatal", "error", "warning", "log", "info", "debug", "critical"], cn = Nt(), un = "Sentry Logger ", dn = ["debug", "info", "warn", "error", "log", "assert"];
    function pn(e) {
        var t = Nt();
        if (!("console"in t))
            return e();
        var n = t.console
          , a = {};
        dn.forEach((function(e) {
            var s = n[e] && n[e].__sentry_original__;
            e in t.console && s && (a[e] = n[e],
            n[e] = s)
        }
        ));
        try {
            return e()
        } finally {
            Object.keys(a).forEach((function(e) {
                n[e] = a[e]
            }
            ))
        }
    }
    function hn() {
        var e = !1
          , t = {
            enable: function() {
                e = !0
            },
            disable: function() {
                e = !1
            }
        };
        return tn ? dn.forEach((function(n) {
            t[n] = function() {
                for (var t = [], a = 0; a < arguments.length; a++)
                    t[a] = arguments[a];
                e && pn((function() {
                    var e;
                    (e = cn.console)[n].apply(e, Rt([un + "[" + n + "]:"], t))
                }
                ))
            }
        }
        )) : dn.forEach((function(e) {
            t[e] = function() {}
        }
        )),
        t
    }
    function mn(e, t) {
        return void 0 === t && (t = 0),
        "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }
    function fn(e, t) {
        if (!Array.isArray(e))
            return "";
        for (var n = [], a = 0; a < e.length; a++) {
            var s = e[a];
            try {
                n.push(String(s))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }
    function yn(e, t) {
        return !!$t(e) && (Bt(t, "RegExp") ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t))
    }
    function gn(e, t, n) {
        if (t in e) {
            var a = e[t]
              , s = n(a);
            if ("function" == typeof s)
                try {
                    bn(s, a)
                } catch (e) {}
            e[t] = s
        }
    }
    function vn(e, t, n) {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }
    function bn(e, t) {
        var n = t.prototype || {};
        e.prototype = t.prototype = n,
        vn(e, "__sentry_original__", t)
    }
    function kn(e) {
        return e.__sentry_original__
    }
    function wn(e) {
        var t = e;
        if (Ht(e))
            t = Ot({
                message: e.message,
                name: e.name,
                stack: e.stack
            }, xn(e));
        else if (Wt(e)) {
            var n = e;
            t = Ot({
                type: n.type,
                target: _n(n.target),
                currentTarget: _n(n.currentTarget)
            }, xn(n)),
            "undefined" != typeof CustomEvent && Xt(e, CustomEvent) && (t.detail = n.detail)
        }
        return t
    }
    function _n(e) {
        try {
            return t = e,
            "undefined" != typeof Element && Xt(t, Element) ? Kt(e) : Object.prototype.toString.call(e)
        } catch (e) {
            return "<unknown>"
        }
        var t
    }
    function xn(e) {
        var t = {};
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    }
    function Sn(e, t) {
        void 0 === t && (t = 40);
        var n = Object.keys(wn(e));
        if (n.sort(),
        !n.length)
            return "[object has no keys]";
        if (n[0].length >= t)
            return mn(n[0], t);
        for (var a = n.length; a > 0; a--) {
            var s = n.slice(0, a).join(", ");
            if (!(s.length > t))
                return a === n.length ? s : mn(s, t)
        }
        return ""
    }
    function zn(e) {
        var t, n;
        if (Yt(e)) {
            var a = {};
            try {
                for (var s = Lt(Object.keys(e)), r = s.next(); !r.done; r = s.next()) {
                    var o = r.value;
                    void 0 !== e[o] && (a[o] = zn(e[o]))
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = s.return) && n.call(s)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return a
        }
        return Array.isArray(e) ? e.map(zn) : e
    }
    on = tn ? Pt("logger", hn) : hn();
    function jn(e) {
        if (!e.length)
            return [];
        var t = e
          , n = t[0].function || ""
          , a = t[t.length - 1].function || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)),
        -1 !== a.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t.slice(0, 50).map((function(e) {
            return Ot(Ot({}, e), {
                filename: e.filename || t[0].filename,
                function: e.function || "?"
            })
        }
        )).reverse()
    }
    var En = "<anonymous>";
    function Tn(e) {
        try {
            return e && "function" == typeof e && e.name || En
        } catch (e) {
            return En
        }
    }
    function Cn() {
        if (!("fetch"in Nt()))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (e) {
            return !1
        }
    }
    function On(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }
    function Ln() {
        if (!Cn())
            return !1;
        try {
            return new Request("_",{
                referrerPolicy: "origin"
            }),
            !0
        } catch (e) {
            return !1
        }
    }
    var In, Rn = Nt(), qn = {}, Mn = {};
    function An(e) {
        if (!Mn[e])
            switch (Mn[e] = !0,
            e) {
            case "console":
                !function() {
                    if (!("console"in Rn))
                        return;
                    dn.forEach((function(e) {
                        e in Rn.console && gn(Rn.console, e, (function(t) {
                            return function() {
                                for (var n = [], a = 0; a < arguments.length; a++)
                                    n[a] = arguments[a];
                                Pn("console", {
                                    args: n,
                                    level: e
                                }),
                                t && t.apply(Rn.console, n)
                            }
                        }
                        ))
                    }
                    ))
                }();
                break;
            case "dom":
                !function() {
                    if (!("document"in Rn))
                        return;
                    var e = Pn.bind(null, "dom")
                      , t = Un(e, !0);
                    Rn.document.addEventListener("click", t, !1),
                    Rn.document.addEventListener("keypress", t, !1),
                    ["EventTarget", "Node"].forEach((function(t) {
                        var n = Rn[t] && Rn[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (gn(n, "addEventListener", (function(t) {
                            return function(n, a, s) {
                                if ("click" === n || "keypress" == n)
                                    try {
                                        var r = this
                                          , o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                                          , i = o[n] = o[n] || {
                                            refCount: 0
                                        };
                                        if (!i.handler) {
                                            var l = Un(e);
                                            i.handler = l,
                                            t.call(this, n, l, s)
                                        }
                                        i.refCount += 1
                                    } catch (e) {}
                                return t.call(this, n, a, s)
                            }
                        }
                        )),
                        gn(n, "removeEventListener", (function(e) {
                            return function(t, n, a) {
                                if ("click" === t || "keypress" == t)
                                    try {
                                        var s = this
                                          , r = s.__sentry_instrumentation_handlers__ || {}
                                          , o = r[t];
                                        o && (o.refCount -= 1,
                                        o.refCount <= 0 && (e.call(this, t, o.handler, a),
                                        o.handler = void 0,
                                        delete r[t]),
                                        0 === Object.keys(r).length && delete s.__sentry_instrumentation_handlers__)
                                    } catch (e) {}
                                return e.call(this, t, n, a)
                            }
                        }
                        )))
                    }
                    ))
                }();
                break;
            case "xhr":
                !function() {
                    if (!("XMLHttpRequest"in Rn))
                        return;
                    var e = XMLHttpRequest.prototype;
                    gn(e, "open", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var a = this
                              , s = t[1]
                              , r = a.__sentry_xhr__ = {
                                method: $t(t[0]) ? t[0].toUpperCase() : t[0],
                                url: t[1]
                            };
                            $t(s) && "POST" === r.method && s.match(/sentry_key/) && (a.__sentry_own_request__ = !0);
                            var o = function() {
                                if (4 === a.readyState) {
                                    try {
                                        r.status_code = a.status
                                    } catch (e) {}
                                    Pn("xhr", {
                                        args: t,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: a
                                    })
                                }
                            };
                            return "onreadystatechange"in a && "function" == typeof a.onreadystatechange ? gn(a, "onreadystatechange", (function(e) {
                                return function() {
                                    for (var t = [], n = 0; n < arguments.length; n++)
                                        t[n] = arguments[n];
                                    return o(),
                                    e.apply(a, t)
                                }
                            }
                            )) : a.addEventListener("readystatechange", o),
                            e.apply(a, t)
                        }
                    }
                    )),
                    gn(e, "send", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            return this.__sentry_xhr__ && void 0 !== t[0] && (this.__sentry_xhr__.body = t[0]),
                            Pn("xhr", {
                                args: t,
                                startTimestamp: Date.now(),
                                xhr: this
                            }),
                            e.apply(this, t)
                        }
                    }
                    ))
                }();
                break;
            case "fetch":
                !function() {
                    if (!function() {
                        if (!Cn())
                            return !1;
                        var e = Nt();
                        if (On(e.fetch))
                            return !0;
                        var t = !1
                          , n = e.document;
                        if (n && "function" == typeof n.createElement)
                            try {
                                var a = n.createElement("iframe");
                                a.hidden = !0,
                                n.head.appendChild(a),
                                a.contentWindow && a.contentWindow.fetch && (t = On(a.contentWindow.fetch)),
                                n.head.removeChild(a)
                            } catch (e) {
                                tn && on.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                            }
                        return t
                    }())
                        return;
                    gn(Rn, "fetch", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var a = {
                                args: t,
                                fetchData: {
                                    method: Dn(t),
                                    url: Hn(t)
                                },
                                startTimestamp: Date.now()
                            };
                            return Pn("fetch", Ot({}, a)),
                            e.apply(Rn, t).then((function(e) {
                                return Pn("fetch", Ot(Ot({}, a), {
                                    endTimestamp: Date.now(),
                                    response: e
                                })),
                                e
                            }
                            ), (function(e) {
                                throw Pn("fetch", Ot(Ot({}, a), {
                                    endTimestamp: Date.now(),
                                    error: e
                                })),
                                e
                            }
                            ))
                        }
                    }
                    ))
                }();
                break;
            case "history":
                !function() {
                    if (!function() {
                        var e = Nt()
                          , t = e.chrome
                          , n = t && t.app && t.app.runtime
                          , a = "history"in e && !!e.history.pushState && !!e.history.replaceState;
                        return !n && a
                    }())
                        return;
                    var e = Rn.onpopstate;
                    function t(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var a = t.length > 2 ? t[2] : void 0;
                            if (a) {
                                var s = In
                                  , r = String(a);
                                In = r,
                                Pn("history", {
                                    from: s,
                                    to: r
                                })
                            }
                            return e.apply(this, t)
                        }
                    }
                    Rn.onpopstate = function() {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        var a = Rn.location.href
                          , s = In;
                        if (In = a,
                        Pn("history", {
                            from: s,
                            to: a
                        }),
                        e)
                            try {
                                return e.apply(this, t)
                            } catch (e) {}
                    }
                    ,
                    gn(Rn.history, "pushState", t),
                    gn(Rn.history, "replaceState", t)
                }();
                break;
            case "error":
                $n = Rn.onerror,
                Rn.onerror = function(e, t, n, a, s) {
                    return Pn("error", {
                        column: a,
                        error: s,
                        line: n,
                        msg: e,
                        url: t
                    }),
                    !!$n && $n.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                Gn = Rn.onunhandledrejection,
                Rn.onunhandledrejection = function(e) {
                    return Pn("unhandledrejection", e),
                    !Gn || Gn.apply(this, arguments)
                }
                ;
                break;
            default:
                return void (tn && on.warn("unknown instrumentation type:", e))
            }
    }
    function Nn(e, t) {
        qn[e] = qn[e] || [],
        qn[e].push(t),
        An(e)
    }
    function Pn(e, t) {
        var n, a;
        if (e && qn[e])
            try {
                for (var s = Lt(qn[e] || []), r = s.next(); !r.done; r = s.next()) {
                    var o = r.value;
                    try {
                        o(t)
                    } catch (t) {
                        tn && on.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Tn(o) + "\nError:", t)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (a = s.return) && a.call(s)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    function Dn(e) {
        return void 0 === e && (e = []),
        "Request"in Rn && Xt(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }
    function Hn(e) {
        return void 0 === e && (e = []),
        "string" == typeof e[0] ? e[0] : "Request"in Rn && Xt(e[0], Request) ? e[0].url : String(e[0])
    }
    var Bn, Fn;
    function Un(e, t) {
        return void 0 === t && (t = !1),
        function(n) {
            if (n && Fn !== n && !function(e) {
                if ("keypress" !== e.type)
                    return !1;
                try {
                    var t = e.target;
                    if (!t || !t.tagName)
                        return !0;
                    if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable)
                        return !1
                } catch (e) {}
                return !0
            }(n)) {
                var a = "keypress" === n.type ? "input" : n.type;
                (void 0 === Bn || function(e, t) {
                    if (!e)
                        return !0;
                    if (e.type !== t.type)
                        return !0;
                    try {
                        if (e.target !== t.target)
                            return !0
                    } catch (e) {}
                    return !1
                }(Fn, n)) && (e({
                    event: n,
                    name: a,
                    global: t
                }),
                Fn = n),
                clearTimeout(Bn),
                Bn = Rn.setTimeout((function() {
                    Bn = void 0
                }
                ), 1e3)
            }
        }
    }
    var $n = null;
    var Gn = null;
    function Yn() {
        var e = Nt()
          , t = e.crypto || e.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n),
            n[3] = 4095 & n[3] | 16384,
            n[4] = 16383 & n[4] | 32768;
            var a = function(e) {
                for (var t = e.toString(16); t.length < 4; )
                    t = "0" + t;
                return t
            };
            return a(n[0]) + a(n[1]) + a(n[2]) + a(n[3]) + a(n[4]) + a(n[5]) + a(n[6]) + a(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }
        ))
    }
    function Wn(e) {
        if (!e)
            return {};
        var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t)
            return {};
        var n = t[6] || ""
          , a = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + a
        }
    }
    function Vn(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }
    function Jn(e) {
        var t = e.message
          , n = e.event_id;
        if (t)
            return t;
        var a = Vn(e);
        return a ? a.type && a.value ? a.type + ": " + a.value : a.type || a.value || n || "<unknown>" : n || "<unknown>"
    }
    function Xn(e, t, n) {
        var a = e.exception = e.exception || {}
          , s = a.values = a.values || []
          , r = s[0] = s[0] || {};
        r.value || (r.value = t || ""),
        r.type || (r.type = n || "Error")
    }
    function Kn(e, t) {
        var n = Vn(e);
        if (n) {
            var a = n.mechanism;
            if (n.mechanism = Ot(Ot(Ot({}, {
                type: "generic",
                handled: !0
            }), a), t),
            t && "data"in t) {
                var s = Ot(Ot({}, a && a.data), t.data);
                n.mechanism.data = s
            }
        }
    }
    function Zn(e) {
        if (e && e.__sentry_captured__)
            return !0;
        try {
            vn(e, "__sentry_captured__", !0)
        } catch (e) {}
        return !1
    }
    function Qn(e, t, n) {
        void 0 === t && (t = 1 / 0),
        void 0 === n && (n = 1 / 0);
        try {
            return ta("", e, t, n)
        } catch (e) {
            return {
                ERROR: "**non-serializable** (" + e + ")"
            }
        }
    }
    function ea(e, t, n) {
        void 0 === t && (t = 3),
        void 0 === n && (n = 102400);
        var a, s = Qn(e, t);
        return a = s,
        function(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(a)) > n ? ea(e, t - 1, n) : s
    }
    function ta(e, t, a, s, r) {
        var o, i;
        void 0 === a && (a = 1 / 0),
        void 0 === s && (s = 1 / 0),
        void 0 === r && (o = "function" == typeof WeakSet,
        i = o ? new WeakSet : [],
        r = [function(e) {
            if (o)
                return !!i.has(e) || (i.add(e),
                !1);
            for (var t = 0; t < i.length; t++)
                if (i[t] === e)
                    return !0;
            return i.push(e),
            !1
        }
        , function(e) {
            if (o)
                i.delete(e);
            else
                for (var t = 0; t < i.length; t++)
                    if (i[t] === e) {
                        i.splice(t, 1);
                        break
                    }
        }
        ]);
        var l = It(r, 2)
          , c = l[0]
          , u = l[1]
          , d = t;
        if (d && "function" == typeof d.toJSON)
            try {
                return d.toJSON()
            } catch (e) {}
        if (null === t || ["number", "boolean", "string"].includes(n(t)) && !Jt(t))
            return t;
        var p = function(e, t) {
            try {
                return "domain" === e && t && "object" === n(t) && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Yt(a = t) && "nativeEvent"in a && "preventDefault"in a && "stopPropagation"in a ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + Tn(t) + "]" : "symbol" === n(t) ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : "[object " + Object.getPrototypeOf(t).constructor.name + "]"
            } catch (e) {
                return "**non-serializable** (" + e + ")"
            }
            var a
        }(e, t);
        if (!p.startsWith("[object "))
            return p;
        if (0 === a)
            return p.replace("object ", "");
        if (c(t))
            return "[Circular ~]";
        var h = Array.isArray(t) ? [] : {}
          , m = 0
          , f = Ht(t) || Wt(t) ? wn(t) : t;
        for (var y in f)
            if (Object.prototype.hasOwnProperty.call(f, y)) {
                if (m >= s) {
                    h[y] = "[MaxProperties ~]";
                    break
                }
                var g = f[y];
                h[y] = ta(y, g, a - 1, s, r),
                m += 1
            }
        return u(t),
        h
    }
    function na(e) {
        return new sa((function(t) {
            t(e)
        }
        ))
    }
    function aa(e) {
        return new sa((function(t, n) {
            n(e)
        }
        ))
    }
    var sa = function() {
        function e(e) {
            var t = this;
            this._state = 0,
            this._handlers = [],
            this._resolve = function(e) {
                t._setResult(1, e)
            }
            ,
            this._reject = function(e) {
                t._setResult(2, e)
            }
            ,
            this._setResult = function(e, n) {
                0 === t._state && (Vt(n) ? n.then(t._resolve, t._reject) : (t._state = e,
                t._value = n,
                t._executeHandlers()))
            }
            ,
            this._executeHandlers = function() {
                if (0 !== t._state) {
                    var e = t._handlers.slice();
                    t._handlers = [],
                    e.forEach((function(e) {
                        e[0] || (1 === t._state && e[1](t._value),
                        2 === t._state && e[2](t._value),
                        e[0] = !0)
                    }
                    ))
                }
            }
            ;
            try {
                e(this._resolve, this._reject)
            } catch (e) {
                this._reject(e)
            }
        }
        return e.prototype.then = function(t, n) {
            var a = this;
            return new e((function(e, s) {
                a._handlers.push([!1, function(n) {
                    if (t)
                        try {
                            e(t(n))
                        } catch (e) {
                            s(e)
                        }
                    else
                        e(n)
                }
                , function(t) {
                    if (n)
                        try {
                            e(n(t))
                        } catch (e) {
                            s(e)
                        }
                    else
                        s(t)
                }
                ]),
                a._executeHandlers()
            }
            ))
        }
        ,
        e.prototype.catch = function(e) {
            return this.then((function(e) {
                return e
            }
            ), e)
        }
        ,
        e.prototype.finally = function(t) {
            var n = this;
            return new e((function(e, a) {
                var s, r;
                return n.then((function(e) {
                    r = !1,
                    s = e,
                    t && t()
                }
                ), (function(e) {
                    r = !0,
                    s = e,
                    t && t()
                }
                )).then((function() {
                    r ? a(s) : e(s)
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    function ra(e) {
        var t = [];
        function n(e) {
            return t.splice(t.indexOf(e), 1)[0]
        }
        return {
            $: t,
            add: function(a) {
                if (!(void 0 === e || t.length < e))
                    return aa(new en("Not adding Promise due to buffer limit reached."));
                var s = a();
                return -1 === t.indexOf(s) && t.push(s),
                s.then((function() {
                    return n(s)
                }
                )).then(null, (function() {
                    return n(s).then(null, (function() {}
                    ))
                }
                )),
                s
            },
            drain: function(e) {
                return new sa((function(n, a) {
                    var s = t.length;
                    if (!s)
                        return n(!0);
                    var r = setTimeout((function() {
                        e && e > 0 && n(!1)
                    }
                    ), e);
                    t.forEach((function(e) {
                        na(e).then((function() {
                            --s || (clearTimeout(r),
                            n(!0))
                        }
                        ), a)
                    }
                    ))
                }
                ))
            }
        }
    }
    function oa(e) {
        return "warn" === e ? Ct.Warning : function(e) {
            return -1 !== ln.indexOf(e)
        }(e) ? e : Ct.Log
    }
    function ia(e) {
        return e >= 200 && e < 300 ? "success" : 429 === e ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown"
    }
    var la = {
        nowSeconds: function() {
            return Date.now() / 1e3
        }
    };
    var ca = qt() ? function() {
        try {
            return Mt(module, "perf_hooks").performance
        } catch (e) {
            return
        }
    }() : function() {
        var e = Nt().performance;
        if (e && e.now)
            return {
                now: function() {
                    return e.now()
                },
                timeOrigin: Date.now() - e.now()
            }
    }()
      , ua = void 0 === ca ? la : {
        nowSeconds: function() {
            return (ca.timeOrigin + ca.now()) / 1e3
        }
    }
      , da = la.nowSeconds.bind(la)
      , pa = ua.nowSeconds.bind(ua)
      , ha = pa
      , ma = function() {
        var e = Nt().performance;
        if (e && e.now) {
            var t = 36e5
              , n = e.now()
              , a = Date.now()
              , s = e.timeOrigin ? Math.abs(e.timeOrigin + n - a) : t
              , r = s < t
              , o = e.timing && e.timing.navigationStart
              , i = "number" == typeof o ? Math.abs(o + n - a) : t;
            return r || i < t ? s <= i ? e.timeOrigin : o : a
        }
    }()
      , fa = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
    function ya(e, t) {
        return void 0 === t && (t = []),
        [e, t]
    }
    function ga(e) {
        var t = It(e, 2)
          , n = t[0]
          , a = t[1]
          , s = JSON.stringify(n);
        return a.reduce((function(e, t) {
            var n = It(t, 2)
              , a = n[0]
              , s = n[1]
              , r = Gt(s) ? String(s) : JSON.stringify(s);
            return e + "\n" + JSON.stringify(a) + "\n" + r
        }
        ), s)
    }
    function va(e, t) {
        return e[t] || e.all || 0
    }
    function ba(e, t, n) {
        return void 0 === n && (n = Date.now()),
        va(e, t) > n
    }
    function ka(e, t, n) {
        var a, s, r, o;
        void 0 === n && (n = Date.now());
        var i = Ot({}, e)
          , l = t["x-sentry-rate-limits"]
          , c = t["retry-after"];
        if (l)
            try {
                for (var u = Lt(l.trim().split(",")), d = u.next(); !d.done; d = u.next()) {
                    var p = d.value.split(":", 2)
                      , h = parseInt(p[0], 10)
                      , m = 1e3 * (isNaN(h) ? 60 : h);
                    if (p[1])
                        try {
                            for (var f = (r = void 0,
                            Lt(p[1].split(";"))), y = f.next(); !y.done; y = f.next()) {
                                i[y.value] = n + m
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                y && !y.done && (o = f.return) && o.call(f)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                    else
                        i.all = n + m
                }
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    d && !d.done && (s = u.return) && s.call(u)
                } finally {
                    if (a)
                        throw a.error
                }
            }
        else
            c && (i.all = n + function(e, t) {
                void 0 === t && (t = Date.now());
                var n = parseInt("" + e, 10);
                if (!isNaN(n))
                    return 1e3 * n;
                var a = Date.parse("" + e);
                return isNaN(a) ? 6e4 : a - t
            }(c, n));
        return i
    }
    var wa = function() {
        function e() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {},
            this._sdkProcessingMetadata = {}
        }
        return e.clone = function(t) {
            var n = new e;
            return t && (n._breadcrumbs = Rt(t._breadcrumbs),
            n._tags = Ot({}, t._tags),
            n._extra = Ot({}, t._extra),
            n._contexts = Ot({}, t._contexts),
            n._user = t._user,
            n._level = t._level,
            n._span = t._span,
            n._session = t._session,
            n._transactionName = t._transactionName,
            n._fingerprint = t._fingerprint,
            n._eventProcessors = Rt(t._eventProcessors),
            n._requestSession = t._requestSession),
            n
        }
        ,
        e.prototype.addScopeListener = function(e) {
            this._scopeListeners.push(e)
        }
        ,
        e.prototype.addEventProcessor = function(e) {
            return this._eventProcessors.push(e),
            this
        }
        ,
        e.prototype.setUser = function(e) {
            return this._user = e || {},
            this._session && this._session.update({
                user: e
            }),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.getUser = function() {
            return this._user
        }
        ,
        e.prototype.getRequestSession = function() {
            return this._requestSession
        }
        ,
        e.prototype.setRequestSession = function(e) {
            return this._requestSession = e,
            this
        }
        ,
        e.prototype.setTags = function(e) {
            return this._tags = Ot(Ot({}, this._tags), e),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setTag = function(e, t) {
            var n;
            return this._tags = Ot(Ot({}, this._tags), ((n = {})[e] = t,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setExtras = function(e) {
            return this._extra = Ot(Ot({}, this._extra), e),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setExtra = function(e, t) {
            var n;
            return this._extra = Ot(Ot({}, this._extra), ((n = {})[e] = t,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setFingerprint = function(e) {
            return this._fingerprint = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setLevel = function(e) {
            return this._level = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setTransactionName = function(e) {
            return this._transactionName = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setTransaction = function(e) {
            return this.setTransactionName(e)
        }
        ,
        e.prototype.setContext = function(e, t) {
            var n;
            return null === t ? delete this._contexts[e] : this._contexts = Ot(Ot({}, this._contexts), ((n = {})[e] = t,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setSpan = function(e) {
            return this._span = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.getSpan = function() {
            return this._span
        }
        ,
        e.prototype.getTransaction = function() {
            var e = this.getSpan();
            return e && e.transaction
        }
        ,
        e.prototype.setSession = function(e) {
            return e ? this._session = e : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.getSession = function() {
            return this._session
        }
        ,
        e.prototype.update = function(t) {
            if (!t)
                return this;
            if ("function" == typeof t) {
                var n = t(this);
                return n instanceof e ? n : this
            }
            return t instanceof e ? (this._tags = Ot(Ot({}, this._tags), t._tags),
            this._extra = Ot(Ot({}, this._extra), t._extra),
            this._contexts = Ot(Ot({}, this._contexts), t._contexts),
            t._user && Object.keys(t._user).length && (this._user = t._user),
            t._level && (this._level = t._level),
            t._fingerprint && (this._fingerprint = t._fingerprint),
            t._requestSession && (this._requestSession = t._requestSession)) : Yt(t) && (t = t,
            this._tags = Ot(Ot({}, this._tags), t.tags),
            this._extra = Ot(Ot({}, this._extra), t.extra),
            this._contexts = Ot(Ot({}, this._contexts), t.contexts),
            t.user && (this._user = t.user),
            t.level && (this._level = t.level),
            t.fingerprint && (this._fingerprint = t.fingerprint),
            t.requestSession && (this._requestSession = t.requestSession)),
            this
        }
        ,
        e.prototype.clear = function() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._requestSession = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.addBreadcrumb = function(e, t) {
            var n = "number" == typeof t ? Math.min(t, 100) : 100;
            if (n <= 0)
                return this;
            var a = Ot({
                timestamp: da()
            }, e);
            return this._breadcrumbs = Rt(this._breadcrumbs, [a]).slice(-n),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.clearBreadcrumbs = function() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.applyToEvent = function(e, t) {
            if (this._extra && Object.keys(this._extra).length && (e.extra = Ot(Ot({}, this._extra), e.extra)),
            this._tags && Object.keys(this._tags).length && (e.tags = Ot(Ot({}, this._tags), e.tags)),
            this._user && Object.keys(this._user).length && (e.user = Ot(Ot({}, this._user), e.user)),
            this._contexts && Object.keys(this._contexts).length && (e.contexts = Ot(Ot({}, this._contexts), e.contexts)),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span) {
                e.contexts = Ot({
                    trace: this._span.getTraceContext()
                }, e.contexts);
                var n = this._span.transaction && this._span.transaction.name;
                n && (e.tags = Ot({
                    transaction: n
                }, e.tags))
            }
            return this._applyFingerprint(e),
            e.breadcrumbs = Rt(e.breadcrumbs || [], this._breadcrumbs),
            e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
            e.sdkProcessingMetadata = this._sdkProcessingMetadata,
            this._notifyEventProcessors(Rt(_a(), this._eventProcessors), e, t)
        }
        ,
        e.prototype.setSDKProcessingMetadata = function(e) {
            return this._sdkProcessingMetadata = Ot(Ot({}, this._sdkProcessingMetadata), e),
            this
        }
        ,
        e.prototype._notifyEventProcessors = function(e, t, n, a) {
            var s = this;
            return void 0 === a && (a = 0),
            new sa((function(r, o) {
                var i = e[a];
                if (null === t || "function" != typeof i)
                    r(t);
                else {
                    var l = i(Ot({}, t), n);
                    Vt(l) ? l.then((function(t) {
                        return s._notifyEventProcessors(e, t, n, a + 1).then(r)
                    }
                    )).then(null, o) : s._notifyEventProcessors(e, l, n, a + 1).then(r).then(null, o)
                }
            }
            ))
        }
        ,
        e.prototype._notifyScopeListeners = function() {
            var e = this;
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((function(t) {
                t(e)
            }
            )),
            this._notifyingListeners = !1)
        }
        ,
        e.prototype._applyFingerprint = function(e) {
            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
            this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
        ,
        e
    }();
    function _a() {
        return Pt("globalEventProcessors", (function() {
            return []
        }
        ))
    }
    function xa(e) {
        _a().push(e)
    }
    var Sa = function() {
        function e(e) {
            this.errors = 0,
            this.sid = Yn(),
            this.duration = 0,
            this.status = "ok",
            this.init = !0,
            this.ignoreDuration = !1;
            var t = pa();
            this.timestamp = t,
            this.started = t,
            e && this.update(e)
        }
        return e.prototype.update = function(e) {
            if (void 0 === e && (e = {}),
            e.user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address),
            this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)),
            this.timestamp = e.timestamp || pa(),
            e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration),
            e.sid && (this.sid = 32 === e.sid.length ? e.sid : Yn()),
            void 0 !== e.init && (this.init = e.init),
            !this.did && e.did && (this.did = "" + e.did),
            "number" == typeof e.started && (this.started = e.started),
            this.ignoreDuration)
                this.duration = void 0;
            else if ("number" == typeof e.duration)
                this.duration = e.duration;
            else {
                var t = this.timestamp - this.started;
                this.duration = t >= 0 ? t : 0
            }
            e.release && (this.release = e.release),
            e.environment && (this.environment = e.environment),
            !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress),
            !this.userAgent && e.userAgent && (this.userAgent = e.userAgent),
            "number" == typeof e.errors && (this.errors = e.errors),
            e.status && (this.status = e.status)
        }
        ,
        e.prototype.close = function(e) {
            e ? this.update({
                status: e
            }) : "ok" === this.status ? this.update({
                status: "exited"
            }) : this.update()
        }
        ,
        e.prototype.toJSON = function() {
            return zn({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(1e3 * this.started).toISOString(),
                timestamp: new Date(1e3 * this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                duration: this.duration,
                attrs: {
                    release: this.release,
                    environment: this.environment,
                    ip_address: this.ipAddress,
                    user_agent: this.userAgent
                }
            })
        }
        ,
        e
    }()
      , za = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
      , ja = function() {
        function e(e, t, n) {
            void 0 === t && (t = new wa),
            void 0 === n && (n = 4),
            this._version = n,
            this._stack = [{}],
            this.getStackTop().scope = t,
            e && this.bindClient(e)
        }
        return e.prototype.isOlderThan = function(e) {
            return this._version < e
        }
        ,
        e.prototype.bindClient = function(e) {
            this.getStackTop().client = e,
            e && e.setupIntegrations && e.setupIntegrations()
        }
        ,
        e.prototype.pushScope = function() {
            var e = wa.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }),
            e
        }
        ,
        e.prototype.popScope = function() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        ,
        e.prototype.withScope = function(e) {
            var t = this.pushScope();
            try {
                e(t)
            } finally {
                this.popScope()
            }
        }
        ,
        e.prototype.getClient = function() {
            return this.getStackTop().client
        }
        ,
        e.prototype.getScope = function() {
            return this.getStackTop().scope
        }
        ,
        e.prototype.getStack = function() {
            return this._stack
        }
        ,
        e.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }
        ,
        e.prototype.captureException = function(e, t) {
            var n = this._lastEventId = t && t.event_id ? t.event_id : Yn()
              , a = t;
            if (!t) {
                var s = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (e) {
                    s = e
                }
                a = {
                    originalException: e,
                    syntheticException: s
                }
            }
            return this._invokeClient("captureException", e, Ot(Ot({}, a), {
                event_id: n
            })),
            n
        }
        ,
        e.prototype.captureMessage = function(e, t, n) {
            var a = this._lastEventId = n && n.event_id ? n.event_id : Yn()
              , s = n;
            if (!n) {
                var r = void 0;
                try {
                    throw new Error(e)
                } catch (e) {
                    r = e
                }
                s = {
                    originalException: e,
                    syntheticException: r
                }
            }
            return this._invokeClient("captureMessage", e, t, Ot(Ot({}, s), {
                event_id: a
            })),
            a
        }
        ,
        e.prototype.captureEvent = function(e, t) {
            var n = t && t.event_id ? t.event_id : Yn();
            return "transaction" !== e.type && (this._lastEventId = n),
            this._invokeClient("captureEvent", e, Ot(Ot({}, t), {
                event_id: n
            })),
            n
        }
        ,
        e.prototype.lastEventId = function() {
            return this._lastEventId
        }
        ,
        e.prototype.addBreadcrumb = function(e, t) {
            var n = this.getStackTop()
              , a = n.scope
              , s = n.client;
            if (a && s) {
                var r = s.getOptions && s.getOptions() || {}
                  , o = r.beforeBreadcrumb
                  , i = void 0 === o ? null : o
                  , l = r.maxBreadcrumbs
                  , c = void 0 === l ? 100 : l;
                if (!(c <= 0)) {
                    var u = da()
                      , d = Ot({
                        timestamp: u
                    }, e)
                      , p = i ? pn((function() {
                        return i(d, t)
                    }
                    )) : d;
                    null !== p && a.addBreadcrumb(p, c)
                }
            }
        }
        ,
        e.prototype.setUser = function(e) {
            var t = this.getScope();
            t && t.setUser(e)
        }
        ,
        e.prototype.setTags = function(e) {
            var t = this.getScope();
            t && t.setTags(e)
        }
        ,
        e.prototype.setExtras = function(e) {
            var t = this.getScope();
            t && t.setExtras(e)
        }
        ,
        e.prototype.setTag = function(e, t) {
            var n = this.getScope();
            n && n.setTag(e, t)
        }
        ,
        e.prototype.setExtra = function(e, t) {
            var n = this.getScope();
            n && n.setExtra(e, t)
        }
        ,
        e.prototype.setContext = function(e, t) {
            var n = this.getScope();
            n && n.setContext(e, t)
        }
        ,
        e.prototype.configureScope = function(e) {
            var t = this.getStackTop()
              , n = t.scope
              , a = t.client;
            n && a && e(n)
        }
        ,
        e.prototype.run = function(e) {
            var t = Ta(this);
            try {
                e(this)
            } finally {
                Ta(t)
            }
        }
        ,
        e.prototype.getIntegration = function(e) {
            var t = this.getClient();
            if (!t)
                return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return za && on.warn("Cannot retrieve integration " + e.id + " from the current Hub"),
                null
            }
        }
        ,
        e.prototype.startSpan = function(e) {
            return this._callExtensionMethod("startSpan", e)
        }
        ,
        e.prototype.startTransaction = function(e, t) {
            return this._callExtensionMethod("startTransaction", e, t)
        }
        ,
        e.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }
        ,
        e.prototype.captureSession = function(e) {
            if (void 0 === e && (e = !1),
            e)
                return this.endSession();
            this._sendSessionUpdate()
        }
        ,
        e.prototype.endSession = function() {
            var e = this.getStackTop()
              , t = e && e.scope
              , n = t && t.getSession();
            n && n.close(),
            this._sendSessionUpdate(),
            t && t.setSession()
        }
        ,
        e.prototype.startSession = function(e) {
            var t = this.getStackTop()
              , n = t.scope
              , a = t.client
              , s = a && a.getOptions() || {}
              , r = s.release
              , o = s.environment
              , i = (Nt().navigator || {}).userAgent
              , l = new Sa(Ot(Ot(Ot({
                release: r,
                environment: o
            }, n && {
                user: n.getUser()
            }), i && {
                userAgent: i
            }), e));
            if (n) {
                var c = n.getSession && n.getSession();
                c && "ok" === c.status && c.update({
                    status: "exited"
                }),
                this.endSession(),
                n.setSession(l)
            }
            return l
        }
        ,
        e.prototype._sendSessionUpdate = function() {
            var e = this.getStackTop()
              , t = e.scope
              , n = e.client;
            if (t) {
                var a = t.getSession && t.getSession();
                a && n && n.captureSession && n.captureSession(a)
            }
        }
        ,
        e.prototype._invokeClient = function(e) {
            for (var t, n = [], a = 1; a < arguments.length; a++)
                n[a - 1] = arguments[a];
            var s = this.getStackTop()
              , r = s.scope
              , o = s.client;
            o && o[e] && (t = o)[e].apply(t, Rt(n, [r]))
        }
        ,
        e.prototype._callExtensionMethod = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var a = Ea()
              , s = a.__SENTRY__;
            if (s && s.extensions && "function" == typeof s.extensions[e])
                return s.extensions[e].apply(this, t);
            za && on.warn("Extension method " + e + " couldn't be found, doing nothing.")
        }
        ,
        e
    }();
    function Ea() {
        var e = Nt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        e
    }
    function Ta(e) {
        var t = Ea()
          , n = La(t);
        return Ia(t, e),
        n
    }
    function Ca() {
        var e = Ea();
        return Oa(e) && !La(e).isOlderThan(4) || Ia(e, new ja),
        qt() ? function(e) {
            try {
                var t = Ea().__SENTRY__
                  , n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                if (!n)
                    return La(e);
                if (!Oa(n) || La(n).isOlderThan(4)) {
                    var a = La(e).getStackTop();
                    Ia(n, new ja(a.client,wa.clone(a.scope)))
                }
                return La(n)
            } catch (t) {
                return La(e)
            }
        }(e) : La(e)
    }
    function Oa(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }
    function La(e) {
        return Pt("hub", (function() {
            return new ja
        }
        ), e)
    }
    function Ia(e, t) {
        return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t,
        !0)
    }
    function Ra(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var a = Ca();
        if (a && a[e])
            return a[e].apply(a, Rt(t));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }
    function qa(e, t) {
        return Ra("captureException", e, {
            captureContext: t,
            originalException: e,
            syntheticException: new Error("Sentry syntheticException")
        })
    }
    function Ma(e) {
        Ra("withScope", e)
    }
    function Aa(e, t, n) {
        return {
            initDsn: e,
            metadata: t || {},
            dsn: rn(e),
            tunnel: n
        }
    }
    function Na(e) {
        var t = e.protocol ? e.protocol + ":" : ""
          , n = e.port ? ":" + e.port : "";
        return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
    }
    function Pa(e, t) {
        return "" + Na(e) + e.projectId + "/" + t + "/"
    }
    function Da(e) {
        return t = {
            sentry_key: e.publicKey,
            sentry_version: "7"
        },
        Object.keys(t).map((function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
        }
        )).join("&");
        var t
    }
    function Ha(e) {
        return function(e) {
            return Pa(e, "store")
        }(e) + "?" + Da(e)
    }
    function Ba(e, t) {
        return t || function(e) {
            return Pa(e, "envelope")
        }(e) + "?" + Da(e)
    }
    var Fa = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
      , Ua = [];
    function $a(e) {
        return e.reduce((function(e, t) {
            return e.every((function(e) {
                return t.name !== e.name
            }
            )) && e.push(t),
            e
        }
        ), [])
    }
    function Ga(e) {
        var t = {};
        return function(e) {
            var t = e.defaultIntegrations && Rt(e.defaultIntegrations) || []
              , n = e.integrations
              , a = Rt($a(t));
            Array.isArray(n) ? a = Rt(a.filter((function(e) {
                return n.every((function(t) {
                    return t.name !== e.name
                }
                ))
            }
            )), $a(n)) : "function" == typeof n && (a = n(a),
            a = Array.isArray(a) ? a : [a]);
            var s = a.map((function(e) {
                return e.name
            }
            ))
              , r = "Debug";
            return -1 !== s.indexOf(r) && a.push.apply(a, Rt(a.splice(s.indexOf(r), 1))),
            a
        }(e).forEach((function(e) {
            t[e.name] = e,
            function(e) {
                -1 === Ua.indexOf(e.name) && (e.setupOnce(xa, Ca),
                Ua.push(e.name),
                Fa && on.log("Integration installed: " + e.name))
            }(e)
        }
        )),
        vn(t, "initialized", !0),
        t
    }
    var Ya = "Not capturing exception because it's already been captured."
      , Wa = function() {
        function e(e, t) {
            this._integrations = {},
            this._numProcessing = 0,
            this._backend = new e(t),
            this._options = t,
            t.dsn && (this._dsn = rn(t.dsn))
        }
        return e.prototype.captureException = function(e, t, n) {
            var a = this;
            if (!Zn(e)) {
                var s = t && t.event_id;
                return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
                    return a._captureEvent(e, t, n)
                }
                )).then((function(e) {
                    s = e
                }
                ))),
                s
            }
            Fa && on.log(Ya)
        }
        ,
        e.prototype.captureMessage = function(e, t, n, a) {
            var s = this
              , r = n && n.event_id
              , o = Gt(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
            return this._process(o.then((function(e) {
                return s._captureEvent(e, n, a)
            }
            )).then((function(e) {
                r = e
            }
            ))),
            r
        }
        ,
        e.prototype.captureEvent = function(e, t, n) {
            if (!(t && t.originalException && Zn(t.originalException))) {
                var a = t && t.event_id;
                return this._process(this._captureEvent(e, t, n).then((function(e) {
                    a = e
                }
                ))),
                a
            }
            Fa && on.log(Ya)
        }
        ,
        e.prototype.captureSession = function(e) {
            this._isEnabled() ? "string" != typeof e.release ? Fa && on.warn("Discarded session because of missing or non-string release") : (this._sendSession(e),
            e.update({
                init: !1
            })) : Fa && on.warn("SDK not enabled, will not capture session.")
        }
        ,
        e.prototype.getDsn = function() {
            return this._dsn
        }
        ,
        e.prototype.getOptions = function() {
            return this._options
        }
        ,
        e.prototype.getTransport = function() {
            return this._getBackend().getTransport()
        }
        ,
        e.prototype.flush = function(e) {
            var t = this;
            return this._isClientDoneProcessing(e).then((function(n) {
                return t.getTransport().close(e).then((function(e) {
                    return n && e
                }
                ))
            }
            ))
        }
        ,
        e.prototype.close = function(e) {
            var t = this;
            return this.flush(e).then((function(e) {
                return t.getOptions().enabled = !1,
                e
            }
            ))
        }
        ,
        e.prototype.setupIntegrations = function() {
            this._isEnabled() && !this._integrations.initialized && (this._integrations = Ga(this._options))
        }
        ,
        e.prototype.getIntegration = function(e) {
            try {
                return this._integrations[e.id] || null
            } catch (t) {
                return Fa && on.warn("Cannot retrieve integration " + e.id + " from the current Client"),
                null
            }
        }
        ,
        e.prototype._updateSessionFromEvent = function(e, t) {
            var n, a, s = !1, r = !1, o = t.exception && t.exception.values;
            if (o) {
                r = !0;
                try {
                    for (var i = Lt(o), l = i.next(); !l.done; l = i.next()) {
                        var c = l.value.mechanism;
                        if (c && !1 === c.handled) {
                            s = !0;
                            break
                        }
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        l && !l.done && (a = i.return) && a.call(i)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            var u = "ok" === e.status;
            (u && 0 === e.errors || u && s) && (e.update(Ot(Ot({}, s && {
                status: "crashed"
            }), {
                errors: e.errors || Number(r || s)
            })),
            this.captureSession(e))
        }
        ,
        e.prototype._sendSession = function(e) {
            this._getBackend().sendSession(e)
        }
        ,
        e.prototype._isClientDoneProcessing = function(e) {
            var t = this;
            return new sa((function(n) {
                var a = 0
                  , s = setInterval((function() {
                    0 == t._numProcessing ? (clearInterval(s),
                    n(!0)) : (a += 1,
                    e && a >= e && (clearInterval(s),
                    n(!1)))
                }
                ), 1)
            }
            ))
        }
        ,
        e.prototype._getBackend = function() {
            return this._backend
        }
        ,
        e.prototype._isEnabled = function() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
        }
        ,
        e.prototype._prepareEvent = function(e, t, a) {
            var s = this
              , r = this.getOptions()
              , o = r.normalizeDepth
              , i = void 0 === o ? 3 : o
              , l = r.normalizeMaxBreadth
              , c = void 0 === l ? 1e3 : l
              , u = Ot(Ot({}, e), {
                event_id: e.event_id || (a && a.event_id ? a.event_id : Yn()),
                timestamp: e.timestamp || da()
            });
            this._applyClientOptions(u),
            this._applyIntegrationsMetadata(u);
            var d = t;
            a && a.captureContext && (d = wa.clone(d).update(a.captureContext));
            var p = na(u);
            return d && (p = d.applyToEvent(u, a)),
            p.then((function(e) {
                return e && (e.sdkProcessingMetadata = Ot(Ot({}, e.sdkProcessingMetadata), {
                    normalizeDepth: Qn(i) + " (" + n(i) + ")"
                })),
                "number" == typeof i && i > 0 ? s._normalizeEvent(e, i, c) : e
            }
            ))
        }
        ,
        e.prototype._normalizeEvent = function(e, t, n) {
            if (!e)
                return null;
            var a = Ot(Ot(Ot(Ot(Ot({}, e), e.breadcrumbs && {
                breadcrumbs: e.breadcrumbs.map((function(e) {
                    return Ot(Ot({}, e), e.data && {
                        data: Qn(e.data, t, n)
                    })
                }
                ))
            }), e.user && {
                user: Qn(e.user, t, n)
            }), e.contexts && {
                contexts: Qn(e.contexts, t, n)
            }), e.extra && {
                extra: Qn(e.extra, t, n)
            });
            return e.contexts && e.contexts.trace && (a.contexts.trace = e.contexts.trace),
            a.sdkProcessingMetadata = Ot(Ot({}, a.sdkProcessingMetadata), {
                baseClientNormalized: !0
            }),
            a
        }
        ,
        e.prototype._applyClientOptions = function(e) {
            var t = this.getOptions()
              , n = t.environment
              , a = t.release
              , s = t.dist
              , r = t.maxValueLength
              , o = void 0 === r ? 250 : r;
            "environment"in e || (e.environment = "environment"in t ? n : "production"),
            void 0 === e.release && void 0 !== a && (e.release = a),
            void 0 === e.dist && void 0 !== s && (e.dist = s),
            e.message && (e.message = mn(e.message, o));
            var i = e.exception && e.exception.values && e.exception.values[0];
            i && i.value && (i.value = mn(i.value, o));
            var l = e.request;
            l && l.url && (l.url = mn(l.url, o))
        }
        ,
        e.prototype._applyIntegrationsMetadata = function(e) {
            var t = Object.keys(this._integrations);
            t.length > 0 && (e.sdk = e.sdk || {},
            e.sdk.integrations = Rt(e.sdk.integrations || [], t))
        }
        ,
        e.prototype._sendEvent = function(e) {
            this._getBackend().sendEvent(e)
        }
        ,
        e.prototype._captureEvent = function(e, t, n) {
            return this._processEvent(e, t, n).then((function(e) {
                return e.event_id
            }
            ), (function(e) {
                Fa && on.error(e)
            }
            ))
        }
        ,
        e.prototype._processEvent = function(e, t, n) {
            var a = this
              , s = this.getOptions()
              , r = s.beforeSend
              , o = s.sampleRate
              , i = this.getTransport();
            function l(e, t) {
                i.recordLostEvent && i.recordLostEvent(e, t)
            }
            if (!this._isEnabled())
                return aa(new en("SDK not enabled, will not capture event."));
            var c = "transaction" === e.type;
            return !c && "number" == typeof o && Math.random() > o ? (l("sample_rate", "event"),
            aa(new en("Discarding event because it's not included in the random sample (sampling rate = " + o + ")"))) : this._prepareEvent(e, n, t).then((function(n) {
                if (null === n)
                    throw l("event_processor", e.type || "event"),
                    new en("An event processor returned null, will not send event.");
                return t && t.data && !0 === t.data.__sentry__ || c || !r ? n : function(e) {
                    var t = "`beforeSend` method has to return `null` or a valid event.";
                    if (Vt(e))
                        return e.then((function(e) {
                            if (!Yt(e) && null !== e)
                                throw new en(t);
                            return e
                        }
                        ), (function(e) {
                            throw new en("beforeSend rejected with " + e)
                        }
                        ));
                    if (!Yt(e) && null !== e)
                        throw new en(t);
                    return e
                }(r(n, t))
            }
            )).then((function(t) {
                if (null === t)
                    throw l("before_send", e.type || "event"),
                    new en("`beforeSend` returned `null`, will not send event.");
                var s = n && n.getSession && n.getSession();
                return !c && s && a._updateSessionFromEvent(s, t),
                a._sendEvent(t),
                t
            }
            )).then(null, (function(e) {
                if (e instanceof en)
                    throw e;
                throw a.captureException(e, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: e
                }),
                new en("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
            }
            ))
        }
        ,
        e.prototype._process = function(e) {
            var t = this;
            this._numProcessing += 1,
            e.then((function(e) {
                return t._numProcessing -= 1,
                e
            }
            ), (function(e) {
                return t._numProcessing -= 1,
                e
            }
            ))
        }
        ,
        e
    }();
    function Va(e) {
        if (e.metadata && e.metadata.sdk) {
            var t = e.metadata.sdk;
            return {
                name: t.name,
                version: t.version
            }
        }
    }
    function Ja(e, t) {
        return t ? (e.sdk = e.sdk || {},
        e.sdk.name = e.sdk.name || t.name,
        e.sdk.version = e.sdk.version || t.version,
        e.sdk.integrations = Rt(e.sdk.integrations || [], t.integrations || []),
        e.sdk.packages = Rt(e.sdk.packages || [], t.packages || []),
        e) : e
    }
    function Xa(e, t) {
        var n = Va(t)
          , a = "aggregates"in e ? "sessions" : "session";
        return [ya(Ot(Ot({
            sent_at: (new Date).toISOString()
        }, n && {
            sdk: n
        }), !!t.tunnel && {
            dsn: an(t.dsn)
        }), [[{
            type: a
        }, e]]), a]
    }
    var Ka = function() {
        function e() {}
        return e.prototype.sendEvent = function(e) {
            return na({
                reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: "skipped"
            })
        }
        ,
        e.prototype.close = function(e) {
            return na(!0)
        }
        ,
        e
    }()
      , Za = function() {
        function e(e) {
            this._options = e,
            this._options.dsn || Fa && on.warn("No DSN provided, backend will not do anything."),
            this._transport = this._setupTransport()
        }
        return e.prototype.eventFromException = function(e, t) {
            throw new en("Backend has to implement `eventFromException` method")
        }
        ,
        e.prototype.eventFromMessage = function(e, t, n) {
            throw new en("Backend has to implement `eventFromMessage` method")
        }
        ,
        e.prototype.sendEvent = function(e) {
            if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                var t = function(e, t) {
                    var n = Va(t)
                      , a = e.type || "event"
                      , s = (e.sdkProcessingMetadata || {}).transactionSampling || {}
                      , r = s.method
                      , o = s.rate;
                    return Ja(e, t.metadata.sdk),
                    e.tags = e.tags || {},
                    e.extra = e.extra || {},
                    e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0,
                    e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"),
                    delete e.sdkProcessingMetadata,
                    ya(Ot(Ot({
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString()
                    }, n && {
                        sdk: n
                    }), !!t.tunnel && {
                        dsn: an(t.dsn)
                    }), [[{
                        type: a,
                        sample_rates: [{
                            id: r,
                            rate: o
                        }]
                    }, e]])
                }(e, Aa(this._options.dsn, this._options._metadata, this._options.tunnel));
                this._newTransport.send(t).then(null, (function(e) {
                    Fa && on.error("Error while sending event:", e)
                }
                ))
            } else
                this._transport.sendEvent(e).then(null, (function(e) {
                    Fa && on.error("Error while sending event:", e)
                }
                ))
        }
        ,
        e.prototype.sendSession = function(e) {
            if (this._transport.sendSession)
                if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                    var t = It(Xa(e, Aa(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0];
                    this._newTransport.send(t).then(null, (function(e) {
                        Fa && on.error("Error while sending session:", e)
                    }
                    ))
                } else
                    this._transport.sendSession(e).then(null, (function(e) {
                        Fa && on.error("Error while sending session:", e)
                    }
                    ));
            else
                Fa && on.warn("Dropping session because custom transport doesn't implement sendSession")
        }
        ,
        e.prototype.getTransport = function() {
            return this._transport
        }
        ,
        e.prototype._setupTransport = function() {
            return new Ka
        }
        ,
        e
    }();
    function Qa(e, t, n) {
        void 0 === n && (n = ra(e.bufferSize || 30));
        var a = {};
        return {
            send: function(e) {
                var s = function(e) {
                    var t = It(e, 2)
                      , n = It(t[1], 1);
                    return It(n[0], 1)[0].type
                }(e)
                  , r = "event" === s ? "error" : s
                  , o = {
                    category: r,
                    body: ga(e)
                };
                return ba(a, r) ? aa({
                    status: "rate_limit",
                    reason: es(a, r)
                }) : n.add((function() {
                    return t(o).then((function(e) {
                        var t = e.body
                          , n = e.headers
                          , s = e.reason
                          , o = ia(e.statusCode);
                        return n && (a = ka(a, n)),
                        "success" === o ? na({
                            status: o,
                            reason: s
                        }) : aa({
                            status: o,
                            reason: s || t || ("rate_limit" === o ? es(a, r) : "Unknown transport error")
                        })
                    }
                    ))
                }
                ))
            },
            flush: function(e) {
                return n.drain(e)
            }
        }
    }
    function es(e, t) {
        return "Too many " + t + " requests, backing off until: " + new Date(va(e, t)).toISOString()
    }
    var ts, ns = "6.19.7", as = function() {
        function e() {
            this.name = e.id
        }
        return e.prototype.setupOnce = function() {
            ts = Function.prototype.toString,
            Function.prototype.toString = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = kn(this) || this;
                return ts.apply(n, e)
            }
        }
        ,
        e.id = "FunctionToString",
        e
    }(), ss = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], rs = function() {
        function e(t) {
            void 0 === t && (t = {}),
            this._options = t,
            this.name = e.id
        }
        return e.prototype.setupOnce = function(t, n) {
            t((function(t) {
                var a = n();
                if (a) {
                    var s = a.getIntegration(e);
                    if (s) {
                        var r = a.getClient()
                          , o = r ? r.getOptions() : {}
                          , i = function(e, t) {
                            void 0 === e && (e = {});
                            void 0 === t && (t = {});
                            return {
                                allowUrls: Rt(e.whitelistUrls || [], e.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                                denyUrls: Rt(e.blacklistUrls || [], e.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                                ignoreErrors: Rt(e.ignoreErrors || [], t.ignoreErrors || [], ss),
                                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                            }
                        }(s._options, o);
                        return function(e, t) {
                            if (t.ignoreInternal && function(e) {
                                try {
                                    return "SentryError" === e.exception.values[0].type
                                } catch (e) {}
                                return !1
                            }(e))
                                return Fa && on.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Jn(e)),
                                !0;
                            if (function(e, t) {
                                if (!t || !t.length)
                                    return !1;
                                return function(e) {
                                    if (e.message)
                                        return [e.message];
                                    if (e.exception)
                                        try {
                                            var t = e.exception.values && e.exception.values[0] || {}
                                              , n = t.type
                                              , a = void 0 === n ? "" : n
                                              , s = t.value
                                              , r = void 0 === s ? "" : s;
                                            return ["" + r, a + ": " + r]
                                        } catch (t) {
                                            return Fa && on.error("Cannot extract message for event " + Jn(e)),
                                            []
                                        }
                                    return []
                                }(e).some((function(e) {
                                    return t.some((function(t) {
                                        return yn(e, t)
                                    }
                                    ))
                                }
                                ))
                            }(e, t.ignoreErrors))
                                return Fa && on.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Jn(e)),
                                !0;
                            if (function(e, t) {
                                if (!t || !t.length)
                                    return !1;
                                var n = is(e);
                                return !!n && t.some((function(e) {
                                    return yn(n, e)
                                }
                                ))
                            }(e, t.denyUrls))
                                return Fa && on.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Jn(e) + ".\nUrl: " + is(e)),
                                !0;
                            if (!function(e, t) {
                                if (!t || !t.length)
                                    return !0;
                                var n = is(e);
                                return !n || t.some((function(e) {
                                    return yn(n, e)
                                }
                                ))
                            }(e, t.allowUrls))
                                return Fa && on.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Jn(e) + ".\nUrl: " + is(e)),
                                !0;
                            return !1
                        }(t, i) ? null : t
                    }
                }
                return t
            }
            ))
        }
        ,
        e.id = "InboundFilters",
        e
    }();
    function os(e) {
        void 0 === e && (e = []);
        for (var t = e.length - 1; t >= 0; t--) {
            var n = e[t];
            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                return n.filename || null
        }
        return null
    }
    function is(e) {
        try {
            if (e.stacktrace)
                return os(e.stacktrace.frames);
            var t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch (e) {}
            return t ? os(t) : null
        } catch (t) {
            return Fa && on.error("Cannot extract url for event " + Jn(e)),
            null
        }
    }
    var ls = "?";
    function cs(e, t, n, a) {
        var s = {
            filename: e,
            function: t,
            in_app: !0
        };
        return void 0 !== n && (s.lineno = n),
        void 0 !== a && (s.colno = a),
        s
    }
    var us = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , ds = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , ps = [30, function(e) {
        var t = us.exec(e);
        if (t) {
            if (t[2] && 0 === t[2].indexOf("eval")) {
                var n = ds.exec(t[2]);
                n && (t[2] = n[1],
                t[3] = n[2],
                t[4] = n[3])
            }
            var a = It(_s(t[1] || ls, t[2]), 2)
              , s = a[0];
            return cs(a[1], s, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
        }
    }
    ]
      , hs = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , ms = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , fs = [50, function(e) {
        var t, n = hs.exec(e);
        if (n) {
            if (n[3] && n[3].indexOf(" > eval") > -1) {
                var a = ms.exec(n[3]);
                a && (n[1] = n[1] || "eval",
                n[3] = a[1],
                n[4] = a[2],
                n[5] = "")
            }
            var s = n[3]
              , r = n[1] || ls;
            return r = (t = It(_s(r, s), 2))[0],
            cs(s = t[1], r, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
        }
    }
    ]
      , ys = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , gs = [40, function(e) {
        var t = ys.exec(e);
        return t ? cs(t[2], t[1] || ls, +t[3], t[4] ? +t[4] : void 0) : void 0
    }
    ]
      , vs = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
      , bs = [10, function(e) {
        var t = vs.exec(e);
        return t ? cs(t[2], t[3] || ls, +t[1]) : void 0
    }
    ]
      , ks = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
      , ws = [20, function(e) {
        var t = ks.exec(e);
        return t ? cs(t[5], t[3] || t[4] || ls, +t[1], +t[2]) : void 0
    }
    ]
      , _s = function(e, t) {
        var n = -1 !== e.indexOf("safari-extension")
          , a = -1 !== e.indexOf("safari-web-extension");
        return n || a ? [-1 !== e.indexOf("@") ? e.split("@")[0] : ls, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
    };
    function xs(e) {
        var t = zs(e)
          , n = {
            type: e && e.name,
            value: Es(e)
        };
        return t.length && (n.stacktrace = {
            frames: t
        }),
        void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
        n
    }
    function Ss(e) {
        return {
            exception: {
                values: [xs(e)]
            }
        }
    }
    function zs(e) {
        var t = e.stacktrace || e.stack || ""
          , n = function(e) {
            if (e) {
                if ("number" == typeof e.framesToPop)
                    return e.framesToPop;
                if (js.test(e.message))
                    return 1
            }
            return 0
        }(e);
        try {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = e.sort((function(e, t) {
                    return e[0] - t[0]
                }
                )).map((function(e) {
                    return e[1]
                }
                ));
                return function(e, t) {
                    var a, s, r, o;
                    void 0 === t && (t = 0);
                    var i = [];
                    try {
                        for (var l = Lt(e.split("\n").slice(t)), c = l.next(); !c.done; c = l.next()) {
                            var u = c.value;
                            try {
                                for (var d = (r = void 0,
                                Lt(n)), p = d.next(); !p.done; p = d.next()) {
                                    var h = (0,
                                    p.value)(u);
                                    if (h) {
                                        i.push(h);
                                        break
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    p && !p.done && (o = d.return) && o.call(d)
                                } finally {
                                    if (r)
                                        throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (s = l.return) && s.call(l)
                        } finally {
                            if (a)
                                throw a.error
                        }
                    }
                    return jn(i)
                }
            }(bs, ws, ps, gs, fs)(t, n)
        } catch (e) {}
        return []
    }
    var js = /Minified React error #\d+;/i;
    function Es(e) {
        var t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }
    function Ts(e, t, n, a) {
        var s;
        if (Ft(e) && e.error)
            return Ss(e.error);
        if (Ut(e) || Bt(e, "DOMException")) {
            var r = e;
            if ("stack"in e)
                s = Ss(e);
            else {
                var o = r.name || (Ut(r) ? "DOMError" : "DOMException")
                  , i = r.message ? o + ": " + r.message : o;
                Xn(s = Cs(i, t, n), i)
            }
            return "code"in r && (s.tags = Ot(Ot({}, s.tags), {
                "DOMException.code": "" + r.code
            })),
            s
        }
        return Ht(e) ? Ss(e) : Yt(e) || Wt(e) ? (s = function(e, t, n) {
            var a = {
                exception: {
                    values: [{
                        type: Wt(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Sn(e)
                    }]
                },
                extra: {
                    __serialized__: ea(e)
                }
            };
            if (t) {
                var s = zs(t);
                s.length && (a.stacktrace = {
                    frames: s
                })
            }
            return a
        }(e, t, a),
        Kn(s, {
            synthetic: !0
        }),
        s) : (Xn(s = Cs(e, t, n), "" + e, void 0),
        Kn(s, {
            synthetic: !0
        }),
        s)
    }
    function Cs(e, t, n) {
        var a = {
            message: e
        };
        if (n && t) {
            var s = zs(t);
            s.length && (a.stacktrace = {
                frames: s
            })
        }
        return a
    }
    var Os, Ls = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, Is = Nt();
    function Rs() {
        if (Os)
            return Os;
        if (On(Is.fetch))
            return Os = Is.fetch.bind(Is);
        var e = Is.document
          , t = Is.fetch;
        if (e && "function" == typeof e.createElement)
            try {
                var n = e.createElement("iframe");
                n.hidden = !0,
                e.head.appendChild(n);
                var a = n.contentWindow;
                a && a.fetch && (t = a.fetch),
                e.head.removeChild(n)
            } catch (e) {
                Ls && on.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
        return Os = t.bind(Is)
    }
    function qs(e) {
        return "event" === e ? "error" : e
    }
    var Ms = Nt()
      , As = function() {
        function e(e) {
            var t = this;
            this.options = e,
            this._buffer = ra(30),
            this._rateLimits = {},
            this._outcomes = {},
            this._api = Aa(e.dsn, e._metadata, e.tunnel),
            this.url = Ha(this._api.dsn),
            this.options.sendClientReports && Ms.document && Ms.document.addEventListener("visibilitychange", (function() {
                "hidden" === Ms.document.visibilityState && t._flushOutcomes()
            }
            ))
        }
        return e.prototype.sendEvent = function(e) {
            return this._sendRequest(function(e, t) {
                var n, a = Va(t), s = e.type || "event", r = "transaction" === s || !!t.tunnel, o = (e.sdkProcessingMetadata || {}).transactionSampling || {}, i = o.method, l = o.rate;
                Ja(e, t.metadata.sdk),
                e.tags = e.tags || {},
                e.extra = e.extra || {},
                e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0,
                e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"),
                delete e.sdkProcessingMetadata;
                try {
                    n = JSON.stringify(e)
                } catch (t) {
                    e.tags.JSONStringifyError = !0,
                    e.extra.JSONStringifyError = t;
                    try {
                        n = JSON.stringify(Qn(e))
                    } catch (e) {
                        var c = e;
                        n = JSON.stringify({
                            message: "JSON.stringify error after renormalization",
                            extra: {
                                message: c.message,
                                stack: c.stack
                            }
                        })
                    }
                }
                var u = {
                    body: n,
                    type: s,
                    url: r ? Ba(t.dsn, t.tunnel) : Ha(t.dsn)
                };
                if (r) {
                    var d = ya(Ot(Ot({
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString()
                    }, a && {
                        sdk: a
                    }), !!t.tunnel && {
                        dsn: an(t.dsn)
                    }), [[{
                        type: s,
                        sample_rates: [{
                            id: i,
                            rate: l
                        }]
                    }, u.body]]);
                    u.body = ga(d)
                }
                return u
            }(e, this._api), e)
        }
        ,
        e.prototype.sendSession = function(e) {
            return this._sendRequest(function(e, t) {
                var n = It(Xa(e, t), 2)
                  , a = n[0]
                  , s = n[1];
                return {
                    body: ga(a),
                    type: s,
                    url: Ba(t.dsn, t.tunnel)
                }
            }(e, this._api), e)
        }
        ,
        e.prototype.close = function(e) {
            return this._buffer.drain(e)
        }
        ,
        e.prototype.recordLostEvent = function(e, t) {
            var n;
            if (this.options.sendClientReports) {
                var a = qs(t) + ":" + e;
                Ls && on.log("Adding outcome: " + a),
                this._outcomes[a] = (null != (n = this._outcomes[a]) ? n : 0) + 1
            }
        }
        ,
        e.prototype._flushOutcomes = function() {
            if (this.options.sendClientReports) {
                var e = this._outcomes;
                if (this._outcomes = {},
                Object.keys(e).length) {
                    Ls && on.log("Flushing outcomes:\n" + JSON.stringify(e, null, 2));
                    var t, n, a, s = Ba(this._api.dsn, this._api.tunnel), r = Object.keys(e).map((function(t) {
                        var n = It(t.split(":"), 2)
                          , a = n[0];
                        return {
                            reason: n[1],
                            category: a,
                            quantity: e[t]
                        }
                    }
                    )), o = (t = r,
                    ya((n = this._api.tunnel && an(this._api.dsn)) ? {
                        dsn: n
                    } : {}, [[{
                        type: "client_report"
                    }, {
                        timestamp: a || da(),
                        discarded_events: t
                    }]]));
                    try {
                        !function(e, t) {
                            if ("[object Navigator]" === Object.prototype.toString.call(Is && Is.navigator) && "function" == typeof Is.navigator.sendBeacon)
                                return Is.navigator.sendBeacon.bind(Is.navigator)(e, t);
                            if (false && Cn()) {
                                Rs()(e, {
                                    body: t,
                                    method: "POST",
                                    credentials: "omit",
                                    keepalive: !0
                                }).then(null, (function(e) {}
                                ))
                            }
                        }(s, ga(o))
                    } catch (e) {
                        Ls && on.error(e)
                    }
                } else
                    Ls && on.log("No outcomes to flush")
            }
        }
        ,
        e.prototype._handleResponse = function(e) {
            var t = e.requestType
              , n = e.response
              , a = e.headers
              , s = e.resolve
              , r = e.reject
              , o = ia(n.status);
            this._rateLimits = ka(this._rateLimits, a),
            this._isRateLimited(t) && Ls && on.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)),
            "success" !== o ? r(n) : s({
                status: o
            })
        }
        ,
        e.prototype._disabledUntil = function(e) {
            var t = qs(e);
            return new Date(va(this._rateLimits, t))
        }
        ,
        e.prototype._isRateLimited = function(e) {
            var t = qs(e);
            return ba(this._rateLimits, t)
        }
        ,
        e
    }()
      , Ns = function(e) {
        function t(t, n) {
            void 0 === n && (n = Rs());
            var a = e.call(this, t) || this;
            return a._fetch = n,
            a
        }
        return Tt(t, e),
        t.prototype._sendRequest = function(e, t) {
            var n = this;
            if (this._isRateLimited(e.type))
                return this.recordLostEvent("ratelimit_backoff", e.type),
                Promise.reject({
                    event: t,
                    type: e.type,
                    reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                    status: 429
                });
            var a = {
                body: e.body,
                method: "POST",
                referrerPolicy: Ln() ? "origin" : ""
            };
            return void 0 !== this.options.fetchParameters && Object.assign(a, this.options.fetchParameters),
            void 0 !== this.options.headers && (a.headers = this.options.headers),
            this._buffer.add((function() {
                return new sa((function(t, s) {
                    /*n._fetch(e.url, a).then((function(a) {
                        var r = {
                            "x-sentry-rate-limits": a.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": a.headers.get("Retry-After")
                        };
                        n._handleResponse({
                            requestType: e.type,
                            response: a,
                            headers: r,
                            resolve: t,
                            reject: s
                        })
                    }
                    )).catch(s)*/
                }
                ))
            }
            )).then(void 0, (function(t) {
                throw t instanceof en ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type),
                t
            }
            ))
        }
        ,
        t
    }(As)
      , Ps = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Tt(t, e),
        t.prototype._sendRequest = function(e, t) {
            var n = this;
            return this._isRateLimited(e.type) ? (this.recordLostEvent("ratelimit_backoff", e.type),
            Promise.reject({
                event: t,
                type: e.type,
                reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                status: 429
            })) : this._buffer.add((function() {
                return new sa((function(t, a) {
                    var s = new XMLHttpRequest;
                    for (var r in s.onreadystatechange = function() {
                        if (4 === s.readyState) {
                            var r = {
                                "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": s.getResponseHeader("Retry-After")
                            };
                            n._handleResponse({
                                requestType: e.type,
                                response: s,
                                headers: r,
                                resolve: t,
                                reject: a
                            })
                        }
                    }
                    ,
                    s.open("POST", e.url),
                    n.options.headers)
                        Object.prototype.hasOwnProperty.call(n.options.headers, r) && s.setRequestHeader(r, n.options.headers[r]);
                    //s.send(e.body)
                }
                ))
            }
            )).then(void 0, (function(t) {
                throw t instanceof en ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type),
                t
            }
            ))
        }
        ,
        t
    }(As);
    var Ds = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Tt(t, e),
        t.prototype.eventFromException = function(e, t) {
            return function(e, t, n) {
                var a = Ts(e, t && t.syntheticException || void 0, n);
                return Kn(a),
                a.level = Ct.Error,
                t && t.event_id && (a.event_id = t.event_id),
                na(a)
            }(e, t, this._options.attachStacktrace)
        }
        ,
        t.prototype.eventFromMessage = function(e, t, n) {
            return void 0 === t && (t = Ct.Info),
            function(e, t, n, a) {
                void 0 === t && (t = Ct.Info);
                var s = Cs(e, n && n.syntheticException || void 0, a);
                return s.level = t,
                n && n.event_id && (s.event_id = n.event_id),
                na(s)
            }(e, t, n, this._options.attachStacktrace)
        }
        ,
        t.prototype._setupTransport = function() {
            if (!this._options.dsn)
                return e.prototype._setupTransport.call(this);
            var t, n, a = Ot(Ot({}, this._options.transportOptions), {
                dsn: this._options.dsn,
                tunnel: this._options.tunnel,
                sendClientReports: this._options.sendClientReports,
                _metadata: this._options._metadata
            }), s = Aa(a.dsn, a._metadata, a.tunnel), r = Ba(s.dsn, s.tunnel);
            if (this._options.transport)
                return new this._options.transport(a);
            if (Cn()) {
                var o = Ot({}, a.fetchParameters);
                return this._newTransport = (t = {
                    requestOptions: o,
                    url: r
                },
                void 0 === n && (n = Rs()),
                Qa({
                    bufferSize: t.bufferSize
                }, (function(e) {
                    var a = Ot({
                        body: e.body,
                        method: "POST",
                        referrerPolicy: "origin"
                    }, t.requestOptions);
                    return n(t.url, a).then((function(e) {
                        return e.text().then((function(t) {
                            return {
                                body: t,
                                headers: {
                                    "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": e.headers.get("Retry-After")
                                },
                                reason: e.statusText,
                                statusCode: e.status
                            }
                        }
                        ))
                    }
                    ))
                }
                ))),
                new Ns(a)
            }
            return this._newTransport = function(e) {
                return Qa({
                    bufferSize: e.bufferSize
                }, (function(t) {
                    return new sa((function(n, a) {
                        var s = new XMLHttpRequest;
                        for (var r in s.onreadystatechange = function() {
                            if (4 === s.readyState) {
                                var e = {
                                    body: s.response,
                                    headers: {
                                        "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": s.getResponseHeader("Retry-After")
                                    },
                                    reason: s.statusText,
                                    statusCode: s.status
                                };
                                n(e)
                            }
                        }
                        ,
                        s.open("POST", e.url),
                        e.headers)
                            Object.prototype.hasOwnProperty.call(e.headers, r) && s.setRequestHeader(r, e.headers[r]);
                        //s.send(t.body)
                    }
                    ))
                }
                ))
            }({
                url: r,
                headers: a.headers
            }),
            new Ps(a)
        }
        ,
        t
    }(Za)
      , Hs = Nt()
      , Bs = 0;
    function Fs() {
        return Bs > 0
    }
    function Us() {
        Bs += 1,
        setTimeout((function() {
            Bs -= 1
        }
        ))
    }
    function $s(e, t, n) {
        if (void 0 === t && (t = {}),
        "function" != typeof e)
            return e;
        try {
            var a = e.__sentry_wrapped__;
            if (a)
                return a;
            if (kn(e))
                return e
        } catch (t) {
            return e
        }
        var s = function() {
            var a = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var s = a.map((function(e) {
                    return $s(e, t)
                }
                ));
                return e.apply(this, s)
            } catch (e) {
                throw Us(),
                Ma((function(n) {
                    n.addEventProcessor((function(e) {
                        return t.mechanism && (Xn(e, void 0, void 0),
                        Kn(e, t.mechanism)),
                        e.extra = Ot(Ot({}, e.extra), {
                            arguments: a
                        }),
                        e
                    }
                    )),
                    qa(e)
                }
                )),
                e
            }
        };
        try {
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (s[r] = e[r])
        } catch (e) {}
        bn(s, e),
        vn(e, "__sentry_wrapped__", s);
        try {
            Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (e) {}
        return s
    }
    function Gs(e) {
        if (void 0 === e && (e = {}),
        Hs.document)
            if (e.eventId)
                if (e.dsn) {
                    var t = Hs.document.createElement("script");
                    t.async = !0,
                    t.src = function(e, t) {
                        var n = rn(e)
                          , a = Na(n) + "embed/error-page/"
                          , s = "dsn=" + an(n);
                        for (var r in t)
                            if ("dsn" !== r)
                                if ("user" === r) {
                                    if (!t.user)
                                        continue;
                                    t.user.name && (s += "&name=" + encodeURIComponent(t.user.name)),
                                    t.user.email && (s += "&email=" + encodeURIComponent(t.user.email))
                                } else
                                    s += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
                        return a + "?" + s
                    }(e.dsn, e),
                    e.onLoad && (t.onload = e.onLoad);
                    var n = Hs.document.head || Hs.document.body;
                    n && n.appendChild(t)
                } else
                    Ls && on.error("Missing dsn option in showReportDialog call");
            else
                Ls && on.error("Missing eventId option in showReportDialog call")
    }
    var Ys = function() {
        function e(t) {
            this.name = e.id,
            this._installFunc = {
                onerror: Ws,
                onunhandledrejection: Vs
            },
            this._options = Ot({
                onerror: !0,
                onunhandledrejection: !0
            }, t)
        }
        return e.prototype.setupOnce = function() {
            Error.stackTraceLimit = 50;
            var e, t = this._options;
            for (var n in t) {
                var a = this._installFunc[n];
                a && t[n] && (e = n,
                Ls && on.log("Global Handler attached: " + e),
                a(),
                this._installFunc[n] = void 0)
            }
        }
        ,
        e.id = "GlobalHandlers",
        e
    }();
    function Ws() {
        Nn("error", (function(e) {
            var t = It(Ks(), 2)
              , n = t[0]
              , a = t[1];
            if (n.getIntegration(Ys)) {
                var s = e.msg
                  , r = e.url
                  , o = e.line
                  , i = e.column
                  , l = e.error;
                if (!(Fs() || l && l.__sentry_own_request__)) {
                    var c = void 0 === l && $t(s) ? function(e, t, n, a) {
                        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                          , r = Ft(e) ? e.message : e
                          , o = "Error"
                          , i = r.match(s);
                        i && (o = i[1],
                        r = i[2]);
                        return Js({
                            exception: {
                                values: [{
                                    type: o,
                                    value: r
                                }]
                            }
                        }, t, n, a)
                    }(s, r, o, i) : Js(Ts(l || s, void 0, a, !1), r, o, i);
                    c.level = Ct.Error,
                    Xs(n, l, c, "onerror")
                }
            }
        }
        ))
    }
    function Vs() {
        Nn("unhandledrejection", (function(e) {
            var t = It(Ks(), 2)
              , n = t[0]
              , a = t[1];
            if (n.getIntegration(Ys)) {
                var s = e;
                try {
                    "reason"in e ? s = e.reason : "detail"in e && "reason"in e.detail && (s = e.detail.reason)
                } catch (e) {}
                if (Fs() || s && s.__sentry_own_request__)
                    return !0;
                var r = Gt(s) ? {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + String(s)
                        }]
                    }
                } : Ts(s, void 0, a, !0);
                r.level = Ct.Error,
                Xs(n, s, r, "onunhandledrejection")
            }
        }
        ))
    }
    function Js(e, t, n, a) {
        var s = e.exception = e.exception || {}
          , r = s.values = s.values || []
          , o = r[0] = r[0] || {}
          , i = o.stacktrace = o.stacktrace || {}
          , l = i.frames = i.frames || []
          , c = isNaN(parseInt(a, 10)) ? void 0 : a
          , u = isNaN(parseInt(n, 10)) ? void 0 : n
          , d = $t(t) && t.length > 0 ? t : function() {
            var e = Nt();
            try {
                return e.document.location.href
            } catch (e) {
                return ""
            }
        }();
        return 0 === l.length && l.push({
            colno: c,
            filename: d,
            function: "?",
            in_app: !0,
            lineno: u
        }),
        e
    }
    function Xs(e, t, n, a) {
        Kn(n, {
            handled: !1,
            type: a
        }),
        e.captureEvent(n, {
            originalException: t
        })
    }
    function Ks() {
        var e = Ca()
          , t = e.getClient();
        return [e, t && t.getOptions().attachStacktrace]
    }
    var Zs = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , Qs = function() {
        function e(t) {
            this.name = e.id,
            this._options = Ot({
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0
            }, t)
        }
        return e.prototype.setupOnce = function() {
            var e = Nt();
            this._options.setTimeout && gn(e, "setTimeout", er),
            this._options.setInterval && gn(e, "setInterval", er),
            this._options.requestAnimationFrame && gn(e, "requestAnimationFrame", tr),
            this._options.XMLHttpRequest && "XMLHttpRequest"in e && gn(XMLHttpRequest.prototype, "send", nr);
            var t = this._options.eventTarget;
            t && (Array.isArray(t) ? t : Zs).forEach(ar)
        }
        ,
        e.id = "TryCatch",
        e
    }();
    function er(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var a = t[0];
            return t[0] = $s(a, {
                mechanism: {
                    data: {
                        function: Tn(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }),
            e.apply(this, t)
        }
    }
    function tr(e) {
        return function(t) {
            return e.apply(this, [$s(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Tn(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }
    function nr(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var a = this
              , s = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return s.forEach((function(e) {
                e in a && "function" == typeof a[e] && gn(a, e, (function(t) {
                    var n = {
                        mechanism: {
                            data: {
                                function: e,
                                handler: Tn(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }
                      , a = kn(t);
                    return a && (n.mechanism.data.handler = Tn(a)),
                    $s(t, n)
                }
                ))
            }
            )),
            e.apply(this, t)
        }
    }
    function ar(e) {
        var t = Nt()
          , n = t[e] && t[e].prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (gn(n, "addEventListener", (function(t) {
            return function(n, a, s) {
                try {
                    "function" == typeof a.handleEvent && (a.handleEvent = $s(a.handleEvent.bind(a), {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Tn(a),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch (e) {}
                return t.apply(this, [n, $s(a, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Tn(a),
                            target: e
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), s])
            }
        }
        )),
        gn(n, "removeEventListener", (function(e) {
            return function(t, n, a) {
                var s = n;
                try {
                    var r = s && s.__sentry_wrapped__;
                    r && e.call(this, t, r, a)
                } catch (e) {}
                return e.call(this, t, s, a)
            }
        }
        )))
    }
    var sr = function() {
        function e(t) {
            this.name = e.id,
            this._options = Ot({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, t)
        }
        return e.prototype.addSentryBreadcrumb = function(e) {
            this._options.sentry && Ca().addBreadcrumb({
                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                event_id: e.event_id,
                level: e.level,
                message: Jn(e)
            }, {
                event: e
            })
        }
        ,
        e.prototype.setupOnce = function() {
            this._options.console && Nn("console", rr),
            this._options.dom && Nn("dom", function(e) {
                function t(t) {
                    var a, s = "object" === n(e) ? e.serializeAttribute : void 0;
                    "string" == typeof s && (s = [s]);
                    try {
                        a = t.event.target ? Kt(t.event.target, s) : Kt(t.event, s)
                    } catch (e) {
                        a = "<unknown>"
                    }
                    0 !== a.length && Ca().addBreadcrumb({
                        category: "ui." + t.name,
                        message: a
                    }, {
                        event: t.event,
                        name: t.name,
                        global: t.global
                    })
                }
                return t
            }(this._options.dom)),
            this._options.xhr && Nn("xhr", or),
            this._options.fetch && Nn("fetch", ir),
            this._options.history && Nn("history", lr)
        }
        ,
        e.id = "Breadcrumbs",
        e
    }();
    function rr(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: oa(e.level),
            message: fn(e.args, " ")
        };
        if ("assert" === e.level) {
            if (!1 !== e.args[0])
                return;
            t.message = "Assertion failed: " + (fn(e.args.slice(1), " ") || "console.assert"),
            t.data.arguments = e.args.slice(1)
        }
        Ca().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }
    function or(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__)
                return;
            var t = e.xhr.__sentry_xhr__ || {}
              , n = t.method
              , a = t.url
              , s = t.status_code
              , r = t.body;
            Ca().addBreadcrumb({
                category: "xhr",
                data: {
                    method: n,
                    url: a,
                    status_code: s
                },
                type: "http"
            }, {
                xhr: e.xhr,
                input: r
            })
        } else
            ;
    }
    function ir(e) {
        e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Ca().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: Ct.Error,
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Ca().addBreadcrumb({
            category: "fetch",
            data: Ot(Ot({}, e.fetchData), {
                status_code: e.response.status
            }),
            type: "http"
        }, {
            input: e.args,
            response: e.response
        })))
    }
    function lr(e) {
        var t = Nt()
          , n = e.from
          , a = e.to
          , s = Wn(t.location.href)
          , r = Wn(n)
          , o = Wn(a);
        r.path || (r = s),
        s.protocol === o.protocol && s.host === o.host && (a = o.relative),
        s.protocol === r.protocol && s.host === r.host && (n = r.relative),
        Ca().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: a
            }
        })
    }
    var cr = function() {
        function e(t) {
            void 0 === t && (t = {}),
            this.name = e.id,
            this._key = t.key || "cause",
            this._limit = t.limit || 5
        }
        return e.prototype.setupOnce = function() {
            xa((function(t, n) {
                var a = Ca().getIntegration(e);
                return a ? function(e, t, n, a) {
                    if (!(n.exception && n.exception.values && a && Xt(a.originalException, Error)))
                        return n;
                    var s = ur(t, a.originalException, e);
                    return n.exception.values = Rt(s, n.exception.values),
                    n
                }(a._key, a._limit, t, n) : t
            }
            ))
        }
        ,
        e.id = "LinkedErrors",
        e
    }();
    function ur(e, t, n, a) {
        if (void 0 === a && (a = []),
        !Xt(t[n], Error) || a.length + 1 >= e)
            return a;
        var s = xs(t[n]);
        return ur(e, t[n], n, Rt([s], a))
    }
    var dr = Nt()
      , pr = function() {
        function e() {
            this.name = e.id
        }
        return e.prototype.setupOnce = function() {
            xa((function(t) {
                if (Ca().getIntegration(e)) {
                    if (!dr.navigator && !dr.location && !dr.document)
                        return t;
                    var n = t.request && t.request.url || dr.location && dr.location.href
                      , a = (dr.document || {}).referrer
                      , s = (dr.navigator || {}).userAgent
                      , r = Ot(Ot(Ot({}, t.request && t.request.headers), a && {
                        Referer: a
                    }), s && {
                        "User-Agent": s
                    })
                      , o = Ot(Ot({}, n && {
                        url: n
                    }), {
                        headers: r
                    });
                    return Ot(Ot({}, t), {
                        request: o
                    })
                }
                return t
            }
            ))
        }
        ,
        e.id = "UserAgent",
        e
    }()
      , hr = function() {
        function e() {
            this.name = e.id
        }
        return e.prototype.setupOnce = function(t, n) {
            t((function(t) {
                var a = n().getIntegration(e);
                if (a) {
                    try {
                        if (function(e, t) {
                            if (!t)
                                return !1;
                            if (function(e, t) {
                                var n = e.message
                                  , a = t.message;
                                if (!n && !a)
                                    return !1;
                                if (n && !a || !n && a)
                                    return !1;
                                if (n !== a)
                                    return !1;
                                if (!fr(e, t))
                                    return !1;
                                if (!mr(e, t))
                                    return !1;
                                return !0
                            }(e, t))
                                return !0;
                            if (function(e, t) {
                                var n = yr(t)
                                  , a = yr(e);
                                if (!n || !a)
                                    return !1;
                                if (n.type !== a.type || n.value !== a.value)
                                    return !1;
                                if (!fr(e, t))
                                    return !1;
                                if (!mr(e, t))
                                    return !1;
                                return !0
                            }(e, t))
                                return !0;
                            return !1
                        }(t, a._previousEvent))
                            return Ls && on.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                    } catch (e) {
                        return a._previousEvent = t
                    }
                    return a._previousEvent = t
                }
                return t
            }
            ))
        }
        ,
        e.id = "Dedupe",
        e
    }();
    function mr(e, t) {
        var n = gr(e)
          , a = gr(t);
        if (!n && !a)
            return !0;
        if (n && !a || !n && a)
            return !1;
        if (n = n,
        (a = a).length !== n.length)
            return !1;
        for (var s = 0; s < a.length; s++) {
            var r = a[s]
              , o = n[s];
            if (r.filename !== o.filename || r.lineno !== o.lineno || r.colno !== o.colno || r.function !== o.function)
                return !1
        }
        return !0
    }
    function fr(e, t) {
        var n = e.fingerprint
          , a = t.fingerprint;
        if (!n && !a)
            return !0;
        if (n && !a || !n && a)
            return !1;
        n = n,
        a = a;
        try {
            return !(n.join("") !== a.join(""))
        } catch (e) {
            return !1
        }
    }
    function yr(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }
    function gr(e) {
        var t = e.exception;
        if (t)
            try {
                return t.values[0].stacktrace.frames
            } catch (e) {
                return
            }
        else if (e.stacktrace)
            return e.stacktrace.frames
    }
    var vr = function(e) {
        function t(t) {
            void 0 === t && (t = {});
            return t._metadata = t._metadata || {},
            t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: ns
                }],
                version: ns
            },
            e.call(this, Ds, t) || this
        }
        return Tt(t, e),
        t.prototype.showReportDialog = function(e) {
            void 0 === e && (e = {}),
            Nt().document && (this._isEnabled() ? Gs(Ot(Ot({}, e), {
                dsn: e.dsn || this.getDsn()
            })) : Ls && on.error("Trying to call showReportDialog with Sentry Client disabled"))
        }
        ,
        t.prototype._prepareEvent = function(t, n, a) {
            return t.platform = t.platform || "javascript",
            e.prototype._prepareEvent.call(this, t, n, a)
        }
        ,
        t.prototype._sendEvent = function(t) {
            var n = this.getIntegration(sr);
            n && n.addSentryBreadcrumb(t),
            e.prototype._sendEvent.call(this, t)
        }
        ,
        t
    }(Wa)
      , br = [new rs, new as, new Qs, new sr, new Ys, new cr, new hr, new pr];
    function kr(e) {
        if (void 0 === e && (e = {}),
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = br),
        void 0 === e.release) {
            var t = Nt();
            t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
        }
        void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
        void 0 === e.sendClientReports && (e.sendClientReports = !0),
        function(e, t) {
            !0 === t.debug && Fa && on.enable();
            var n = Ca()
              , a = n.getScope();
            a && a.update(t.initialScope);
            var s = new e(t);
            n.bindClient(s)
        }(vr, e),
        e.autoSessionTracking && function() {
            if (void 0 === Nt().document)
                return void (Ls && on.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
            var e = Ca();
            if (!e.captureSession)
                return;
            wr(e),
            Nn("history", (function(e) {
                var t = e.from
                  , n = e.to;
                void 0 !== t && t !== n && wr(Ca())
            }
            ))
        }()
    }
    function wr(e) {
        e.startSession({
            ignoreDuration: !0
        }),
        e.captureSession()
    }
    var _r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    function xr(e) {
        var t = Ca().getClient()
          , n = e || t && t.getOptions();
        return !!n && ("tracesSampleRate"in n || "tracesSampler"in n)
    }
    function Sr(e) {
        var t = (e || Ca()).getScope();
        return t && t.getTransaction()
    }
    function zr(e) {
        return e / 1e3
    }
    function jr() {
        var e = Sr();
        if (e) {
            var t = "internal_error";
            _r && on.log("[Tracing] Transaction: " + t + " -> Global error occured"),
            e.setStatus(t)
        }
    }
    var Er = "finishReason"
      , Tr = ["heartbeatFailed", "idleTimeout", "documentHidden"]
      , Cr = function() {
        function e(e) {
            void 0 === e && (e = 1e3),
            this.spans = [],
            this._maxlen = e
        }
        return e.prototype.add = function(e) {
            this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
        }
        ,
        e
    }();
    var Or = function(e) {
        function t(t, n) {
            var a = e.call(this, t) || this;
            return a._measurements = {},
            a._hub = Ca(),
            Xt(n, ja) && (a._hub = n),
            a.name = t.name || "",
            a.metadata = t.metadata || {},
            a._trimEnd = t.trimEnd,
            a.transaction = a,
            a
        }
        return Tt(t, e),
        t.prototype.setName = function(e) {
            this.name = e
        }
        ,
        t.prototype.initSpanRecorder = function(e) {
            void 0 === e && (e = 1e3),
            this.spanRecorder || (this.spanRecorder = new Cr(e)),
            this.spanRecorder.add(this)
        }
        ,
        t.prototype.setMeasurements = function(e) {
            this._measurements = Ot({}, e)
        }
        ,
        t.prototype.setMetadata = function(e) {
            this.metadata = Ot(Ot({}, this.metadata), e)
        }
        ,
        t.prototype.finish = function(t) {
            var n = this;
            if (void 0 === this.endTimestamp) {
                if (this.name || (_r && on.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                this.name = "<unlabeled transaction>"),
                e.prototype.finish.call(this, t),
                !0 === this.sampled) {
                    var a = this.spanRecorder ? this.spanRecorder.spans.filter((function(e) {
                        return e !== n && e.endTimestamp
                    }
                    )) : [];
                    this._trimEnd && a.length > 0 && (this.endTimestamp = a.reduce((function(e, t) {
                        return e.endTimestamp && t.endTimestamp ? e.endTimestamp > t.endTimestamp ? e : t : e
                    }
                    )).endTimestamp);
                    var s = {
                        contexts: {
                            trace: this.getTraceContext()
                        },
                        spans: a,
                        start_timestamp: this.startTimestamp,
                        tags: this.tags,
                        timestamp: this.endTimestamp,
                        transaction: this.name,
                        type: "transaction",
                        sdkProcessingMetadata: this.metadata
                    };
                    return Object.keys(this._measurements).length > 0 && (_r && on.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                    s.measurements = this._measurements),
                    _r && on.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + "."),
                    this._hub.captureEvent(s)
                }
                _r && on.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
                var r = this._hub.getClient()
                  , o = r && r.getTransport && r.getTransport();
                o && o.recordLostEvent && o.recordLostEvent("sample_rate", "transaction")
            }
        }
        ,
        t.prototype.toContext = function() {
            var t = e.prototype.toContext.call(this);
            return zn(Ot(Ot({}, t), {
                name: this.name,
                trimEnd: this._trimEnd
            }))
        }
        ,
        t.prototype.updateWithContext = function(t) {
            var n;
            return e.prototype.updateWithContext.call(this, t),
            this.name = null != (n = t.name) ? n : "",
            this._trimEnd = t.trimEnd,
            this
        }
        ,
        t
    }(function() {
        function e(e) {
            if (this.traceId = Yn(),
            this.spanId = Yn().substring(16),
            this.startTimestamp = ha(),
            this.tags = {},
            this.data = {},
            !e)
                return this;
            e.traceId && (this.traceId = e.traceId),
            e.spanId && (this.spanId = e.spanId),
            e.parentSpanId && (this.parentSpanId = e.parentSpanId),
            "sampled"in e && (this.sampled = e.sampled),
            e.op && (this.op = e.op),
            e.description && (this.description = e.description),
            e.data && (this.data = e.data),
            e.tags && (this.tags = e.tags),
            e.status && (this.status = e.status),
            e.startTimestamp && (this.startTimestamp = e.startTimestamp),
            e.endTimestamp && (this.endTimestamp = e.endTimestamp)
        }
        return e.prototype.child = function(e) {
            return this.startChild(e)
        }
        ,
        e.prototype.startChild = function(t) {
            var n = new e(Ot(Ot({}, t), {
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId
            }));
            return n.spanRecorder = this.spanRecorder,
            n.spanRecorder && n.spanRecorder.add(n),
            n.transaction = this.transaction,
            n
        }
        ,
        e.prototype.setTag = function(e, t) {
            var n;
            return this.tags = Ot(Ot({}, this.tags), ((n = {})[e] = t,
            n)),
            this
        }
        ,
        e.prototype.setData = function(e, t) {
            var n;
            return this.data = Ot(Ot({}, this.data), ((n = {})[e] = t,
            n)),
            this
        }
        ,
        e.prototype.setStatus = function(e) {
            return this.status = e,
            this
        }
        ,
        e.prototype.setHttpStatus = function(e) {
            this.setTag("http.status_code", String(e));
            var t = function(e) {
                if (e < 400 && e >= 100)
                    return "ok";
                if (e >= 400 && e < 500)
                    switch (e) {
                    case 401:
                        return "unauthenticated";
                    case 403:
                        return "permission_denied";
                    case 404:
                        return "not_found";
                    case 409:
                        return "already_exists";
                    case 413:
                        return "failed_precondition";
                    case 429:
                        return "resource_exhausted";
                    default:
                        return "invalid_argument"
                    }
                if (e >= 500 && e < 600)
                    switch (e) {
                    case 501:
                        return "unimplemented";
                    case 503:
                        return "unavailable";
                    case 504:
                        return "deadline_exceeded";
                    default:
                        return "internal_error"
                    }
                return "unknown_error"
            }(e);
            return "unknown_error" !== t && this.setStatus(t),
            this
        }
        ,
        e.prototype.isSuccess = function() {
            return "ok" === this.status
        }
        ,
        e.prototype.finish = function(e) {
            this.endTimestamp = "number" == typeof e ? e : ha()
        }
        ,
        e.prototype.toTraceparent = function() {
            var e = "";
            return void 0 !== this.sampled && (e = this.sampled ? "-1" : "-0"),
            this.traceId + "-" + this.spanId + e
        }
        ,
        e.prototype.toContext = function() {
            return zn({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId
            })
        }
        ,
        e.prototype.updateWithContext = function(e) {
            var t, n, a, s, r;
            return this.data = null != (t = e.data) ? t : {},
            this.description = e.description,
            this.endTimestamp = e.endTimestamp,
            this.op = e.op,
            this.parentSpanId = e.parentSpanId,
            this.sampled = e.sampled,
            this.spanId = null != (n = e.spanId) ? n : this.spanId,
            this.startTimestamp = null != (a = e.startTimestamp) ? a : this.startTimestamp,
            this.status = e.status,
            this.tags = null != (s = e.tags) ? s : {},
            this.traceId = null != (r = e.traceId) ? r : this.traceId,
            this
        }
        ,
        e.prototype.getTraceContext = function() {
            return zn({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId
            })
        }
        ,
        e.prototype.toJSON = function() {
            return zn({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId
            })
        }
        ,
        e
    }())
      , Lr = function(e) {
        function t(t, n, a, s) {
            void 0 === a && (a = "");
            var r = e.call(this, s) || this;
            return r._pushActivity = t,
            r._popActivity = n,
            r.transactionSpanId = a,
            r
        }
        return Tt(t, e),
        t.prototype.add = function(t) {
            var n = this;
            t.spanId !== this.transactionSpanId && (t.finish = function(e) {
                t.endTimestamp = "number" == typeof e ? e : ha(),
                n._popActivity(t.spanId)
            }
            ,
            void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
            e.prototype.add.call(this, t)
        }
        ,
        t
    }(Cr)
      , Ir = function(e) {
        function t(t, n, a, s) {
            void 0 === a && (a = 1e3),
            void 0 === s && (s = !1);
            var r = e.call(this, t, n) || this;
            return r._idleHub = n,
            r._idleTimeout = a,
            r._onScope = s,
            r.activities = {},
            r._heartbeatCounter = 0,
            r._finished = !1,
            r._beforeFinishCallbacks = [],
            n && s && (Rr(n),
            _r && on.log("Setting idle transaction on scope. Span ID: " + r.spanId),
            n.configureScope((function(e) {
                return e.setSpan(r)
            }
            ))),
            r._initTimeout = setTimeout((function() {
                r._finished || r.finish()
            }
            ), r._idleTimeout),
            r
        }
        return Tt(t, e),
        t.prototype.finish = function(t) {
            var n, a, s = this;
            if (void 0 === t && (t = ha()),
            this._finished = !0,
            this.activities = {},
            this.spanRecorder) {
                _r && on.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
                try {
                    for (var r = Lt(this._beforeFinishCallbacks), o = r.next(); !o.done; o = r.next()) {
                        (0,
                        o.value)(this, t)
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (a = r.return) && a.call(r)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
                this.spanRecorder.spans = this.spanRecorder.spans.filter((function(e) {
                    if (e.spanId === s.spanId)
                        return !0;
                    e.endTimestamp || (e.endTimestamp = t,
                    e.setStatus("cancelled"),
                    _r && on.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                    var n = e.startTimestamp < t;
                    return n || _r && on.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)),
                    n
                }
                )),
                _r && on.log("[Tracing] flushing IdleTransaction")
            } else
                _r && on.log("[Tracing] No active IdleTransaction");
            return this._onScope && Rr(this._idleHub),
            e.prototype.finish.call(this, t)
        }
        ,
        t.prototype.registerBeforeFinishCallback = function(e) {
            this._beforeFinishCallbacks.push(e)
        }
        ,
        t.prototype.initSpanRecorder = function(e) {
            var t = this;
            if (!this.spanRecorder) {
                this.spanRecorder = new Lr((function(e) {
                    t._finished || t._pushActivity(e)
                }
                ),(function(e) {
                    t._finished || t._popActivity(e)
                }
                ),this.spanId,e),
                _r && on.log("Starting heartbeat"),
                this._pingHeartbeat()
            }
            this.spanRecorder.add(this)
        }
        ,
        t.prototype._pushActivity = function(e) {
            this._initTimeout && (clearTimeout(this._initTimeout),
            this._initTimeout = void 0),
            _r && on.log("[Tracing] pushActivity: " + e),
            this.activities[e] = !0,
            _r && on.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        ,
        t.prototype._popActivity = function(e) {
            var t = this;
            if (this.activities[e] && (_r && on.log("[Tracing] popActivity " + e),
            delete this.activities[e],
            _r && on.log("[Tracing] new activities count", Object.keys(this.activities).length)),
            0 === Object.keys(this.activities).length) {
                var n = this._idleTimeout
                  , a = ha() + n / 1e3;
                setTimeout((function() {
                    t._finished || (t.setTag(Er, Tr[1]),
                    t.finish(a))
                }
                ), n)
            }
        }
        ,
        t.prototype._beat = function() {
            if (!this._finished) {
                var e = Object.keys(this.activities).join("");
                e === this._prevHeartbeatString ? this._heartbeatCounter += 1 : this._heartbeatCounter = 1,
                this._prevHeartbeatString = e,
                this._heartbeatCounter >= 3 ? (_r && on.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                this.setStatus("deadline_exceeded"),
                this.setTag(Er, Tr[0]),
                this.finish()) : this._pingHeartbeat()
            }
        }
        ,
        t.prototype._pingHeartbeat = function() {
            var e = this;
            _r && on.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter),
            setTimeout((function() {
                e._beat()
            }
            ), 5e3)
        }
        ,
        t
    }(Or);
    function Rr(e) {
        if (e) {
            var t = e.getScope();
            if (t)
                t.getTransaction() && t.setSpan(void 0)
        }
    }
    function qr() {
        var e = this.getScope();
        if (e) {
            var t = e.getSpan();
            if (t)
                return {
                    "sentry-trace": t.toTraceparent()
                }
        }
        return {}
    }
    function Mr(e, t, a) {
        return xr(t) ? void 0 !== e.sampled ? (e.setMetadata({
            transactionSampling: {
                method: "explicitly_set"
            }
        }),
        e) : ("function" == typeof t.tracesSampler ? (s = t.tracesSampler(a),
        e.setMetadata({
            transactionSampling: {
                method: "client_sampler",
                rate: Number(s)
            }
        })) : void 0 !== a.parentSampled ? (s = a.parentSampled,
        e.setMetadata({
            transactionSampling: {
                method: "inheritance"
            }
        })) : (s = t.tracesSampleRate,
        e.setMetadata({
            transactionSampling: {
                method: "client_rate",
                rate: Number(s)
            }
        })),
        function(e) {
            if (Jt(e) || "number" != typeof e && "boolean" != typeof e)
                return _r && on.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(n(e)) + "."),
                !1;
            if (e < 0 || e > 1)
                return _r && on.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + "."),
                !1;
            return !0
        }(s) ? s ? (e.sampled = Math.random() < s,
        e.sampled ? (_r && on.log("[Tracing] starting " + e.op + " transaction - " + e.name),
        e) : (_r && on.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(s) + ")"),
        e)) : (_r && on.log("[Tracing] Discarding transaction because " + ("function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")),
        e.sampled = !1,
        e) : (_r && on.warn("[Tracing] Discarding transaction because of invalid sample rate."),
        e.sampled = !1,
        e)) : (e.sampled = !1,
        e);
        var s
    }
    function Ar(e, t) {
        var n = this.getClient()
          , a = n && n.getOptions() || {}
          , s = new Or(e,this);
        return (s = Mr(s, a, Ot({
            parentSampled: e.parentSampled,
            transactionContext: e
        }, t))).sampled && s.initSpanRecorder(a._experiments && a._experiments.maxSpans),
        s
    }
    function Nr() {
        var e = Ea();
        if (e.__SENTRY__) {
            var t = {
                mongodb: function() {
                    return new (Mt(module, "./integrations/node/mongo").Mongo)
                },
                mongoose: function() {
                    return new (Mt(module, "./integrations/node/mongo").Mongo)({
                        mongoose: !0
                    })
                },
                mysql: function() {
                    return new (Mt(module, "./integrations/node/mysql").Mysql)
                },
                pg: function() {
                    return new (Mt(module, "./integrations/node/postgres").Postgres)
                }
            }
              , n = Object.keys(t).filter((function(e) {
                return !!function(e) {
                    var t;
                    try {
                        t = Mt(module, e)
                    } catch (e) {}
                    try {
                        var n = Mt(module, "process").cwd;
                        t = Mt(module, n() + "/node_modules/" + e)
                    } catch (e) {}
                    return t
                }(e)
            }
            )).map((function(e) {
                try {
                    return t[e]()
                } catch (e) {
                    return
                }
            }
            )).filter((function(e) {
                return e
            }
            ));
            n.length > 0 && (e.__SENTRY__.integrations = Rt(e.__SENTRY__.integrations || [], n))
        }
    }
    var Pr = Nt();
    var Dr = function(e, t, n) {
        var a;
        return function(s) {
            t.value >= 0 && (s || n) && (t.delta = t.value - (a || 0),
            (t.delta || void 0 === a) && (a = t.value,
            e(t)))
        }
    }
      , Hr = function(e, t) {
        return {
            name: e,
            value: null != t ? t : -1,
            delta: 0,
            entries: [],
            id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    }
      , Br = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming"in self))
                    return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }
                ));
                return n.observe({
                    type: e,
                    buffered: !0
                }),
                n
            }
        } catch (e) {}
    }
      , Fr = function(e, t) {
        var n = function n(a) {
            "pagehide" !== a.type && "hidden" !== Nt().document.visibilityState || (e(a),
            t && (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0)
    }
      , Ur = -1
      , $r = function() {
        return Ur < 0 && (Ur = "hidden" === Nt().document.visibilityState ? 0 : 1 / 0,
        Fr((function(e) {
            var t = e.timeStamp;
            Ur = t
        }
        ), !0)),
        {
            get firstHiddenTime() {
                return Ur
            }
        }
    }
      , Gr = {}
      , Yr = Nt()
      , Wr = function() {
        function e(e) {
            void 0 === e && (e = !1),
            this._reportAllChanges = e,
            this._measurements = {},
            this._performanceCursor = 0,
            !qt() && Yr && Yr.performance && Yr.document && (Yr.performance.mark && Yr.performance.mark("sentry-tracing-init"),
            this._trackCLS(),
            this._trackLCP(),
            this._trackFID())
        }
        return e.prototype.addPerformanceEntries = function(e) {
            var t = this;
            if (Yr && Yr.performance && Yr.performance.getEntries && ma) {
                _r && on.log("[Tracing] Adding & adjusting spans using Performance API");
                var n, a, s = zr(ma);
                if (Yr.performance.getEntries().slice(this._performanceCursor).forEach((function(r) {
                    var o = zr(r.startTime)
                      , i = zr(r.duration);
                    if (!("navigation" === e.op && s + o < e.startTimestamp))
                        switch (r.entryType) {
                        case "navigation":
                            !function(e, t, n) {
                                ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((function(a) {
                                    Vr(e, t, a, n)
                                }
                                )),
                                Vr(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                                Vr(e, t, "fetch", n, "cache", "domainLookupStart"),
                                Vr(e, t, "domainLookup", n, "DNS"),
                                function(e, t, n) {
                                    Jr(e, {
                                        op: "browser",
                                        description: "request",
                                        startTimestamp: n + zr(t.requestStart),
                                        endTimestamp: n + zr(t.responseEnd)
                                    }),
                                    Jr(e, {
                                        op: "browser",
                                        description: "response",
                                        startTimestamp: n + zr(t.responseStart),
                                        endTimestamp: n + zr(t.responseEnd)
                                    })
                                }(e, t, n)
                            }(e, r, s),
                            n = s + zr(r.responseStart),
                            a = s + zr(r.requestStart);
                            break;
                        case "mark":
                        case "paint":
                        case "measure":
                            var l = function(e, t, n, a, s) {
                                var r = s + n
                                  , o = r + a;
                                return Jr(e, {
                                    description: t.name,
                                    endTimestamp: o,
                                    op: t.entryType,
                                    startTimestamp: r
                                }),
                                r
                            }(e, r, o, i, s)
                              , c = $r()
                              , u = r.startTime < c.firstHiddenTime;
                            "first-paint" === r.name && u && (_r && on.log("[Measurements] Adding FP"),
                            t._measurements.fp = {
                                value: r.startTime
                            },
                            t._measurements["mark.fp"] = {
                                value: l
                            }),
                            "first-contentful-paint" === r.name && u && (_r && on.log("[Measurements] Adding FCP"),
                            t._measurements.fcp = {
                                value: r.startTime
                            },
                            t._measurements["mark.fcp"] = {
                                value: l
                            });
                            break;
                        case "resource":
                            var d = r.name.replace(Yr.location.origin, "");
                            !function(e, t, n, a, s, r) {
                                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
                                    return;
                                var o = {};
                                "transferSize"in t && (o["Transfer Size"] = t.transferSize);
                                "encodedBodySize"in t && (o["Encoded Body Size"] = t.encodedBodySize);
                                "decodedBodySize"in t && (o["Decoded Body Size"] = t.decodedBodySize);
                                var i = r + a;
                                Jr(e, {
                                    description: n,
                                    endTimestamp: i + s,
                                    op: t.initiatorType ? "resource." + t.initiatorType : "resource",
                                    startTimestamp: i,
                                    data: o
                                })
                            }(e, r, d, o, i, s)
                        }
                }
                )),
                this._performanceCursor = Math.max(performance.getEntries().length - 1, 0),
                this._trackNavigator(e),
                "pageload" === e.op) {
                    var r = zr(ma);
                    "number" == typeof n && (_r && on.log("[Measurements] Adding TTFB"),
                    this._measurements.ttfb = {
                        value: 1e3 * (n - e.startTimestamp)
                    },
                    "number" == typeof a && a <= n && (this._measurements["ttfb.requestTime"] = {
                        value: 1e3 * (n - a)
                    })),
                    ["fcp", "fp", "lcp"].forEach((function(n) {
                        if (t._measurements[n] && !(r >= e.startTimestamp)) {
                            var a = t._measurements[n].value
                              , s = r + zr(a)
                              , o = Math.abs(1e3 * (s - e.startTimestamp))
                              , i = o - a;
                            _r && on.log("[Measurements] Normalized " + n + " from " + a + " to " + o + " (" + i + ")"),
                            t._measurements[n].value = o
                        }
                    }
                    )),
                    this._measurements["mark.fid"] && this._measurements.fid && Jr(e, {
                        description: "first input delay",
                        endTimestamp: this._measurements["mark.fid"].value + zr(this._measurements.fid.value),
                        op: "web.vitals",
                        startTimestamp: this._measurements["mark.fid"].value
                    }),
                    "fcp"in this._measurements || delete this._measurements.cls,
                    e.setMeasurements(this._measurements),
                    function(e, t, n) {
                        t && (_r && on.log("[Measurements] Adding LCP Data"),
                        t.element && e.setTag("lcp.element", Kt(t.element)),
                        t.id && e.setTag("lcp.id", t.id),
                        t.url && e.setTag("lcp.url", t.url.trim().slice(0, 200)),
                        e.setTag("lcp.size", t.size));
                        n && n.sources && (_r && on.log("[Measurements] Adding CLS Data"),
                        n.sources.forEach((function(t, n) {
                            return e.setTag("cls.source." + (n + 1), Kt(t.node))
                        }
                        )))
                    }(e, this._lcpEntry, this._clsEntry),
                    e.setTag("sentry_reportAllChanges", this._reportAllChanges)
                }
            }
        }
        ,
        e.prototype._trackNavigator = function(e) {
            var t = Yr.navigator;
            if (t) {
                var n = t.connection;
                n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
                n.type && e.setTag("connectionType", n.type),
                Xr(n.rtt) && (this._measurements["connection.rtt"] = {
                    value: n.rtt
                }),
                Xr(n.downlink) && (this._measurements["connection.downlink"] = {
                    value: n.downlink
                })),
                Xr(t.deviceMemory) && e.setTag("deviceMemory", String(t.deviceMemory)),
                Xr(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
            }
        }
        ,
        e.prototype._trackCLS = function() {
            var e, t, n, a, s, r, o, i, l = this;
            e = function(e) {
                var t = e.entries.pop();
                t && (_r && on.log("[Measurements] Adding CLS"),
                l._measurements.cls = {
                    value: e.value
                },
                l._clsEntry = t)
            }
            ,
            a = Hr("CLS", 0),
            s = 0,
            r = [],
            (i = Br("layout-shift", o = function(e) {
                if (e && !e.hadRecentInput) {
                    var t = r[0]
                      , o = r[r.length - 1];
                    s && 0 !== r.length && e.startTime - o.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value,
                    r.push(e)) : (s = e.value,
                    r = [e]),
                    s > a.value && (a.value = s,
                    a.entries = r,
                    n && n())
                }
            }
            )) && (n = Dr(e, a, t),
            Fr((function() {
                i.takeRecords().map(o),
                n(!0)
            }
            )))
        }
        ,
        e.prototype._trackLCP = function() {
            var e = this;
            !function(e, t) {
                var n, a = $r(), s = Hr("LCP"), r = function(e) {
                    var t = e.startTime;
                    t < a.firstHiddenTime && (s.value = t,
                    s.entries.push(e)),
                    n && n()
                }, o = Br("largest-contentful-paint", r);
                if (o) {
                    n = Dr(e, s, t);
                    var i = function() {
                        Gr[s.id] || (o.takeRecords().map(r),
                        o.disconnect(),
                        Gr[s.id] = !0,
                        n(!0))
                    };
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, i, {
                            once: !0,
                            capture: !0
                        })
                    }
                    )),
                    Fr(i, !0)
                }
            }((function(t) {
                var n = t.entries.pop();
                if (n) {
                    var a = zr(ma)
                      , s = zr(n.startTime);
                    _r && on.log("[Measurements] Adding LCP"),
                    e._measurements.lcp = {
                        value: t.value
                    },
                    e._measurements["mark.lcp"] = {
                        value: a + s
                    },
                    e._lcpEntry = n
                }
            }
            ), this._reportAllChanges)
        }
        ,
        e.prototype._trackFID = function() {
            var e, t, n, a, s, r, o, i = this;
            e = function(e) {
                var t = e.entries.pop();
                if (t) {
                    var n = zr(ma)
                      , a = zr(t.startTime);
                    _r && on.log("[Measurements] Adding FID"),
                    i._measurements.fid = {
                        value: e.value
                    },
                    i._measurements["mark.fid"] = {
                        value: n + a
                    }
                }
            }
            ,
            a = $r(),
            s = Hr("FID"),
            (o = Br("first-input", r = function(e) {
                n && e.startTime < a.firstHiddenTime && (s.value = e.processingStart - e.startTime,
                s.entries.push(e),
                n(!0))
            }
            )) && (n = Dr(e, s, t),
            Fr((function() {
                o.takeRecords().map(r),
                o.disconnect()
            }
            ), !0))
        }
        ,
        e
    }();
    function Vr(e, t, n, a, s, r) {
        var o = r ? t[r] : t[n + "End"]
          , i = t[n + "Start"];
        i && o && Jr(e, {
            op: "browser",
            description: null != s ? s : n,
            startTimestamp: a + zr(i),
            endTimestamp: a + zr(o)
        })
    }
    function Jr(e, t) {
        var n = t.startTimestamp
          , a = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (a = Object.getOwnPropertySymbols(e); s < a.length; s++)
                    t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
            }
            return n
        }(t, ["startTimestamp"]);
        return n && e.startTimestamp > n && (e.startTimestamp = n),
        e.startChild(Ot({
            startTimestamp: n
        }, a))
    }
    function Xr(e) {
        return "number" == typeof e && isFinite(e)
    }
    var Kr = {
        traceFetch: !0,
        traceXHR: !0,
        tracingOrigins: ["localhost", /^\//]
    };
    function Zr(e) {
        var t = Ot(Ot({}, Kr), e)
          , n = t.traceFetch
          , a = t.traceXHR
          , s = t.tracingOrigins
          , r = t.shouldCreateSpanForRequest
          , o = {}
          , i = function(e) {
            if (o[e])
                return o[e];
            var t = s;
            return o[e] = t.some((function(t) {
                return yn(e, t)
            }
            )) && !yn(e, "sentry_key"),
            o[e]
        }
          , l = i;
        "function" == typeof r && (l = function(e) {
            return i(e) && r(e)
        }
        );
        var c = {};
        n && Nn("fetch", (function(e) {
            !function(e, t, n) {
                if (!xr() || !e.fetchData || !t(e.fetchData.url))
                    return;
                if (e.endTimestamp) {
                    var a = e.fetchData.__span;
                    if (!a)
                        return;
                    return void ((r = n[a]) && (e.response ? r.setHttpStatus(e.response.status) : e.error && r.setStatus("internal_error"),
                    r.finish(),
                    delete n[a]))
                }
                var s = Sr();
                if (s) {
                    var r = s.startChild({
                        data: Ot(Ot({}, e.fetchData), {
                            type: "fetch"
                        }),
                        description: e.fetchData.method + " " + e.fetchData.url,
                        op: "http.client"
                    });
                    e.fetchData.__span = r.spanId,
                    n[r.spanId] = r;
                    var o = e.args[0] = e.args[0]
                      , i = e.args[1] = e.args[1] || {}
                      , l = i.headers;
                    Xt(o, Request) && (l = o.headers),
                    l ? "function" == typeof l.append ? l.append("sentry-trace", r.toTraceparent()) : l = Array.isArray(l) ? Rt(l, [["sentry-trace", r.toTraceparent()]]) : Ot(Ot({}, l), {
                        "sentry-trace": r.toTraceparent()
                    }) : l = {
                        "sentry-trace": r.toTraceparent()
                    },
                    i.headers = l
                }
            }(e, l, c)
        }
        )),
        a && Nn("xhr", (function(e) {
            !function(e, t, n) {
                if (!xr() || e.xhr && e.xhr.__sentry_own_request__ || !(e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url)))
                    return;
                var a = e.xhr.__sentry_xhr__;
                if (e.endTimestamp) {
                    var s = e.xhr.__sentry_xhr_span_id__;
                    if (!s)
                        return;
                    return void ((o = n[s]) && (o.setHttpStatus(a.status_code),
                    o.finish(),
                    delete n[s]))
                }
                var r = Sr();
                if (r) {
                    var o = r.startChild({
                        data: Ot(Ot({}, a.data), {
                            type: "xhr",
                            method: a.method,
                            url: a.url
                        }),
                        description: a.method + " " + a.url,
                        op: "http.client"
                    });
                    if (e.xhr.__sentry_xhr_span_id__ = o.spanId,
                    n[e.xhr.__sentry_xhr_span_id__] = o,
                    e.xhr.setRequestHeader)
                        try {
                            e.xhr.setRequestHeader("sentry-trace", o.toTraceparent())
                        } catch (e) {}
                }
            }(e, l, c)
        }
        ))
    }
    var Qr = Nt();
    var eo, to, no = Ot({
        idleTimeout: 1e3,
        markBackgroundTransactions: !0,
        maxTransactionDuration: 600,
        routingInstrumentation: function(e, t, n) {
            if (void 0 === t && (t = !0),
            void 0 === n && (n = !0),
            Qr && Qr.location) {
                var a, s = Qr.location.href;
                t && (a = e({
                    name: Qr.location.pathname,
                    op: "pageload"
                })),
                n && Nn("history", (function(t) {
                    var n = t.to
                      , r = t.from;
                    void 0 === r && s && -1 !== s.indexOf(n) ? s = void 0 : r !== n && (s = void 0,
                    a && (_r && on.log("[Tracing] Finishing current transaction with op: " + a.op),
                    a.finish()),
                    a = e({
                        name: Qr.location.pathname,
                        op: "navigation"
                    }))
                }
                ))
            } else
                _r && on.warn("Could not initialize routing instrumentation due to invalid location")
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0
    }, Kr), ao = function() {
        function e(t) {
            this.name = e.id,
            this._configuredIdleTimeout = void 0;
            var n = Kr.tracingOrigins;
            t && (this._configuredIdleTimeout = t.idleTimeout,
            t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length ? n = t.tracingOrigins : _r && (this._emitOptionsWarning = !0)),
            this.options = Ot(Ot(Ot({}, no), t), {
                tracingOrigins: n
            });
            var a = this.options._metricOptions;
            this._metrics = new Wr(a && a._reportAllChanges)
        }
        return e.prototype.setupOnce = function(e, t) {
            var n = this;
            this._getCurrentHub = t,
            this._emitOptionsWarning && (_r && on.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),
            _r && on.warn("[Tracing] We added a reasonable default for you: " + Kr.tracingOrigins));
            var a = this.options
              , s = a.routingInstrumentation
              , r = a.startTransactionOnLocationChange
              , o = a.startTransactionOnPageLoad
              , i = a.markBackgroundTransactions
              , l = a.traceFetch
              , c = a.traceXHR
              , u = a.tracingOrigins
              , d = a.shouldCreateSpanForRequest;
            s((function(e) {
                return n._createRouteTransaction(e)
            }
            ), o, r),
            i && (Pr && Pr.document ? Pr.document.addEventListener("visibilitychange", (function() {
                var e = Sr();
                if (Pr.document.hidden && e) {
                    var t = "cancelled";
                    _r && on.log("[Tracing] Transaction: cancelled -> since tab moved to the background, op: " + e.op),
                    e.status || e.setStatus(t),
                    e.setTag("visibilitychange", "document.hidden"),
                    e.setTag(Er, Tr[2]),
                    e.finish()
                }
            }
            )) : _r && on.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
            Zr({
                traceFetch: l,
                traceXHR: c,
                tracingOrigins: u,
                shouldCreateSpanForRequest: d
            })
        }
        ,
        e.prototype._createRouteTransaction = function(e) {
            var t = this;
            if (this._getCurrentHub) {
                var n = this.options
                  , a = n.beforeNavigate
                  , s = n.idleTimeout
                  , r = n.maxTransactionDuration
                  , o = "pageload" === e.op ? function() {
                    var e = (t = "sentry-trace",
                    n = Nt().document.querySelector("meta[name=" + t + "]"),
                    n ? n.getAttribute("content") : null);
                    var t, n;
                    if (e)
                        return function(e) {
                            var t = e.match(fa);
                            if (t) {
                                var n = void 0;
                                return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1),
                                {
                                    traceId: t[1],
                                    parentSampled: n,
                                    parentSpanId: t[2]
                                }
                            }
                        }(e);
                    return
                }() : void 0
                  , i = Ot(Ot(Ot({}, e), o), {
                    trimEnd: !0
                })
                  , l = "function" == typeof a ? a(i) : i
                  , c = void 0 === l ? Ot(Ot({}, i), {
                    sampled: !1
                }) : l;
                !1 === c.sampled && _r && on.log("[Tracing] Will not send " + c.op + " transaction because of beforeNavigate."),
                _r && on.log("[Tracing] Starting " + c.op + " transaction on scope");
                var u = function(e, t, n, a, s) {
                    var r = e.getClient()
                      , o = r && r.getOptions() || {}
                      , i = new Ir(t,e,n,a);
                    return (i = Mr(i, o, Ot({
                        parentSampled: t.parentSampled,
                        transactionContext: t
                    }, s))).sampled && i.initSpanRecorder(o._experiments && o._experiments.maxSpans),
                    i
                }(this._getCurrentHub(), c, s, !0, {
                    location: Nt().location
                });
                return u.registerBeforeFinishCallback((function(e, n) {
                    t._metrics.addPerformanceEntries(e),
                    function(e, t, n) {
                        var a = n - t.startTimestamp;
                        n && (a > e || a < 0) && (t.setStatus("deadline_exceeded"),
                        t.setTag("maxTransactionDurationExceeded", "true"))
                    }(1e3 * r, e, n)
                }
                )),
                u.setTag("idleTimeout", this._configuredIdleTimeout),
                u
            }
            _r && on.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.")
        }
        ,
        e.id = "BrowserTracing",
        e
    }();
    (eo = Ea()).__SENTRY__ && (eo.__SENTRY__.extensions = eo.__SENTRY__.extensions || {},
    eo.__SENTRY__.extensions.startTransaction || (eo.__SENTRY__.extensions.startTransaction = Ar),
    eo.__SENTRY__.extensions.traceHeaders || (eo.__SENTRY__.extensions.traceHeaders = qr)),
    qt() && Nr(),
    Nn("error", jr),
    Nn("unhandledrejection", jr);
    var so = {
        dsn: "https://412ad7ade69c4fd59ced026a41c8a644@o82024.ingest.sentry.io/6236168",
        maxBreadcrumbs: 30,
        integrations: [new ao],
        release: (null === (to = window.wordle) || void 0 === to ? void 0 : to.hash) || "",
        tracesSampleRate: .005,
        sampleRate: .005,
        denyUrls: [/extensions\//i, /^chrome:\/\//i, /safari-extension/, /safari-web-extension/, /moz-extension/, /chrome-extension/, /data:application/, /file:\/\/\//, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i, /translate\.goog/, /googletagservices/, /moatads/, /adtech/, /contextual\.media\.net/, /platform\.iteratehq\.com/, /chartbeat/, /flashtalking/, /doubleverify/, /google-analytics/, /3lift/, /celtra/, /4everproxy/, /hideproxy/, /proxysite/, /us-proxy/, /geoedge/, /grumi-ip/]
    }
      , ro = function(e) {
        qa(e)
    }
      , oo = "nyt-wordle-state"
      , io = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
    };
    function lo() {
        try {
            var e = window.localStorage.getItem(oo) || JSON.stringify(io);
            return JSON.parse(e)
        } catch (e) {
            return ro(e),
            function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? t(Object(a), !0).forEach((function(t) {
                        o(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }({}, io)
        }
    }
    function co(e) {
        var t = lo();
        !function(e) {
            try {
                window.localStorage.setItem(oo, JSON.stringify(e))
            } catch (e) {
                ro(e)
            }
        }(jt(t, e))
    }
    function uo() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }
    function po() {
        var e = navigator.userAgent;
        return e.match(/chrome|chromium|crios/i) ? "chrome" : e.match(/firefox|fxios/i) ? "firefox" : e.match(/safari/i) ? "safari" : e.match(/opr\//i) ? "opera" : e.match(/edg/i) ? "edge" : "No browser detection"
    }
    var ho = "mailto:nytgames@nytimes.com";
    function mo(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var fo = function(e) {
        var t = [];
        return Object.keys(e).forEach((function(n) {
            t.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(e[n])))
        }
        )),
        "?".concat(t.join("&"))
    }
      , yo = document.createElement("template");
    yo.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">High Contrast Mode</div>\n          <div class="description">For improved color vision</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="'.concat(function() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Wordle Feedback", n = (new Date).getTimezoneOffset(), a = "\r\n\r\n\n--\nDevice summary:\nPage: /games/wordle\nPlatform: ".concat(uo() ? "Web (Mobile)" : "Web (Desktop)", " \nBrowser: ").concat(mo(po()), "\nScreen Resolution: ").concat(window.screen.width, " x ").concat(window.screen.height, "\nViewport Size: ").concat(document.documentElement.clientWidth, " x ").concat(document.documentElement.clientHeight, "\nTimezone: ", "UTC".concat(n > 0 ? "" : "+").concat(n / -60), "\nBuild: ").concat(null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, "\n  ");
        return ho + fo({
            subject: t,
            body: a
        })
    }(), '" title="nytgames@nytimes.com">Email</a>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Community</div>\n        </div>\n        <div class="control">\n          <a href="https://twitter.com/NYTGames" target="blank" title="@NYTGames">Twitter</a>\n        </div>\n      </div>\n      <div class="setting">\n      <div class="text">\n        <div class="title">Questions?</div>\n      </div>\n      <div class="control">\n        <a href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB" target="blank">FAQ</a>\n      </div>\n    </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">&#169; ').concat((new Date).getFullYear(), ' The New York Times Company</div>\n    <div>\n      <div id="puzzle-number"></div>\n    </div>\n  </div>\n');
    var go = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            o(h(e = t.call(this)), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(yo.content.cloneNode(!0)),
                this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
                this.shadowRoot.addEventListener("game-switch-change", (function(t) {
                    t.stopPropagation();
                    var n = t.detail
                      , a = n.name
                      , s = n.checked
                      , r = n.disabled;
                    e.dispatchEvent(new CustomEvent("game-setting-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: a,
                            checked: s,
                            disabled: r
                        }
                    })),
                    e.render()
                }
                )),
                this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var t = lo();
                t.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                t.hardMode || "IN_PROGRESS" !== t.gameStatus || 0 === t.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-settings", go);
    var vo = document.createElement("template");
    vo.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var bo = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            o(h(e = t.call(this)), "_duration", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(vo.content.cloneNode(!0));
                var t = this.shadowRoot.querySelector(".toast");
                t.textContent = this.getAttribute("text"),
                this._duration = this.getAttribute("duration") || 1e3,
                "Infinity" !== this._duration && setTimeout((function() {
                    t.classList.add("fade")
                }
                ), this._duration),
                t.addEventListener("transitionend", (function(t) {
                    e.parentNode.removeChild(e)
                }
                ))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-toast", bo);
    var ko = ["bills", "cills", "dills", "fills", "gills", "hills", "jills", "kills", "mills", "nills", "pills", "rills", "sills", "tills", "vills", "wills", "yills", "zills", "lills"]
      , wo = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "trash", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "shine", "gecko", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "egret", "lilac", "sever", "field", "fluff", "agape", "voice", "stead", "berth", "madam", "night", "bland", "liver", "wedge", "roomy", "wacky", "flock", "angry", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "waste", "merit", "woven", "needy", "clown", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "doubt", "parer", "chute", "stick", "trice", "alike", "recap", "saint", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave", "bobby", "eclat", "fella", "gaily", "harry", "hasty", "hydro", "liege", "octal", "ombre", "payer", "sooth", "unset", "unlit", "vomit", "fanny", "fetus", "butch", "stalk", "flack", "widow", "augur", "aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "acted", "actin", "acton", "acyls", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adhan", "adieu", "adios", "adits", "adman", "admen", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "aflaj", "afore", "afrit", "afros", "agama", "agami", "agars", "agast", "agave", "agaze", "agene", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agora", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aided", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alifs", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee", "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas", "annal", "annas", "annat", "anoas", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphis", "apian", "apiol", "apish", "apism", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "artic", "artis", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner", "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs", "baffy", "bafts", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "balls", "bally", "balms", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "based", "basen", "baser", "bases", "basho", "basij", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bated", "bates", "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazoo", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begem", "begot", "begum", "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belee", "belga", "bells", "belon", "belts", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "biccy", "bices", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "bings", "bingy", "binit", "binks", "bints", "biogs", "biont", "biota", "biped", "bipod", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bitch", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear", "blebs", "blech", "blees", "blent", "blert", "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "blobs", "blocs", "blogs", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boppy", "borak", "boral", "boras", "borde", "bords", "bored", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bosun", "botas", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bowed", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee", "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "casts", "casus", "cates", "cauda", "cauks", "cauld", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "cripe", "crips", "crise", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine", "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf", "decan", "decko", "decks", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "denar", "denay", "dench", "denes", "denet", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge", "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowar", "dowds", "dowed", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil", "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edged", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido", "ekkas", "elain", "eland", "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embog", "embow", "embox", "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended", "ender", "endew", "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct", "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esses", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethyl", "etics", "etnas", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "faced", "facer", "faces", "facia", "facta", "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "fells", "felly", "felts", "felty", "femal", "femes", "femmy", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibre", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca", "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixit", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues", "fluey", "fluky", "flump", "fluor", "flurr", "fluty", "fluyt", "flyby", "flype", "flyte", "foals", "foams", "foehn", "fogey", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist", "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungo", "fungs", "funks", "fural", "furan", "furca", "furls", "furol", "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs", "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazed", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecks", "geeks", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genii", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "girds", "girls", "girns", "giron", "giros", "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glace", "glads", "glady", "glaik", "glair", "glams", "glans", "glary", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "glost", "glout", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa", "gonch", "gonef", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "goofs", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grans", "grapy", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "grone", "groof", "grosz", "grots", "grouf", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "gucks", "gucky", "gudes", "guffs", "gugas", "guids", "guimp", "guiro", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumma", "gummi", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hated", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "hause", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast", "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "heids", "heigh", "heils", "heirs", "hejab", "hejra", "heled", "heles", "helio", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howbe", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "hunks", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husos", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymns", "hynde", "hyoid", "hyped", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideas", "idees", "ident", "idled", "idles", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "inion", "inked", "inker", "inkle", "inned", "innit", "inorb", "inrun", "inset", "inspo", "intel", "intil", "intis", "intra", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "iotas", "ippon", "irade", "irids", "iring", "irked", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jeune", "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joked", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumby", "jumps", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kapus", "kaput", "karas", "karat", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khafs", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinos", "kiore", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "knees", "knell", "knish", "knits", "knive", "knobs", "knops", "knosp", "knots", "knout", "knowe", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koran", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "labia", "labis", "labra", "laced", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "lader", "lades", "laers", "laevo", "lagan", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamps", "lanai", "lanas", "lanch", "lande", "lands", "lanes", "lanks", "lants", "lapin", "lapis", "lapje", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leese", "leets", "leeze", "lefte", "lefts", "leger", "leges", "legge", "leggo", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "litho", "liths", "litre", "lived", "liven", "lives", "livor", "livre", "llano", "loach", "loads", "loafs", "loams", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loved", "loves", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes", "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynch", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "maced", "macer", "maces", "mache", "machi", "machs", "macks", "macle", "macon", "madge", "madid", "madre", "maerl", "mafic", "mages", "maggs", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "makar", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mamee", "mamey", "mamie", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "mangs", "manis", "manky", "manna", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "massa", "massy", "masts", "masty", "masus", "matai", "mated", "mater", "mates", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "mebos", "mechs", "mecks", "medii", "medle", "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melic", "melik", "mells", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "meted", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "middy", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimsy", "minae", "minar", "minas", "mincy", "minds", "mined", "mines", "minge", "mings", "mingy", "minis", "minke", "minks", "minny", "minos", "mints", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "mises", "misgo", "misos", "missa", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixen", "mixer", "mixes", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mochi", "mochs", "mochy", "mocks", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molas", "molds", "moled", "moles", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "morra", "morro", "morse", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosts", "moted", "moten", "motes", "motet", "motey", "moths", "mothy", "motis", "motte", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moups", "moust", "mousy", "moved", "moves", "mowas", "mowed", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucor", "mucro", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulct", "muled", "mules", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mumps", "mumsy", "mumus", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "mused", "muser", "muses", "muset", "musha", "musit", "musks", "musos", "musse", "mussy", "musth", "musts", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "named", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nashi", "natch", "nates", "natis", "natty", "nauch", "naunt", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "nosed", "noser", "noses", "notal", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nyaff", "nyala", "nying", "nyssa", "oaked", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octan", "octas", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiled", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombus", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onium", "onkus", "onlay", "onned", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "oozes", "opahs", "opals", "opens", "opepe", "oping", "oppos", "opsin", "opted", "opter", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orcas", "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outed", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs", "ovist", "ovoli", "ovolo", "ovule", "owche", "owies", "owled", "owler", "owlet", "owned", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paire", "pairs", "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panko", "panne", "panni", "panto", "pants", "panty", "paoli", "paolo", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "pares", "pareu", "parev", "parge", "pargo", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parti", "parts", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasts", "pated", "paten", "pater", "pates", "paths", "patin", "patka", "patly", "patte", "patus", "pauas", "pauls", "pavan", "paved", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payor", "paysd", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pechs", "pecke", "pecks", "pecky", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penni", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesos", "pests", "pesty", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phono", "phons", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "pians", "pibal", "pical", "picas", "piccy", "picks", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pined", "pines", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitta", "piums", "pixes", "pized", "pizes", "plaas", "plack", "plage", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "playa", "plays", "pleas", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "plues", "pluff", "plugs", "plums", "plumy", "pluot", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "pokal", "poked", "pokes", "pokey", "pokie", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "polls", "polly", "polos", "polts", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "popsy", "porae", "poral", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poses", "posey", "posho", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pouts", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prays", "predy", "preed", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "pricy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "prink", "prion", "prise", "priss", "proas", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "pronk", "props", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prows", "proyn", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupal", "pupas", "pupus", "purda", "pured", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pusle", "pussy", "putid", "puton", "putti", "putto", "putts", "puzel", "pwned", "pyats", "pyets", "pygal", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queme", "quena", "quern", "queyn", "queys", "quich", "quids", "quiff", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "quran", "qursh", "quyte", "rabat", "rabic", "rabis", "raced", "races", "rache", "racks", "racon", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raits", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "ramal", "ramee", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "rands", "ranee", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratus", "rauns", "raupo", "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "razed", "razee", "razer", "razes", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rears", "reast", "reata", "reate", "reave", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebuy", "recal", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relet", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remix", "renay", "rends", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retem", "retia", "retie", "retox", "revet", "revie", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhody", "rhomb", "rhone", "rhumb", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifte", "rifts", "rifty", "riggs", "rigol", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rings", "rinks", "rioja", "riots", "riped", "ripes", "ripps", "rises", "rishi", "risks", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roams", "roans", "roars", "roary", "roate", "robed", "robes", "roble", "rocks", "roded", "rodes", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotos", "rotte", "rouen", "roues", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "roves", "rowan", "rowed", "rowel", "rowen", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "ruggy", "ruing", "ruins", "rukhs", "ruled", "rules", "rumal", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sados", "sadza", "safed", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salue", "salut", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "satai", "satay", "sated", "satem", "sates", "satis", "sauba", "sauch", "saugh", "sauls", "sault", "saunt", "saury", "sauts", "saved", "saver", "saves", "savey", "savin", "sawah", "sawed", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schmo", "schul", "schwa", "sclim", "scody", "scogs", "scoog", "scoot", "scopa", "scops", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scran", "scrat", "scraw", "scray", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segni", "segno", "segol", "segos", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "sewan", "sewar", "sewed", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shads", "shags", "shahs", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "sharn", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "showd", "shows", "shoyu", "shred", "shris", "shrow", "shtik", "shtum", "shtup", "shule", "shuln", "shuls", "shuns", "shura", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skies", "skiey", "skimo", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slave", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloot", "slops", "slopy", "slorm", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurs", "sluse", "sluts", "slyer", "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smirr", "smirs", "smits", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snies", "snift", "snigs", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solon", "solos", "solum", "solus", "soman", "somas", "sonce", "sonde", "sones", "songs", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "souls", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowed", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spets", "speug", "spews", "spewy", "spial", "spica", "spick", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splay", "splog", "spode", "spods", "spoom", "spoor", "spoot", "spork", "sposh", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squaw", "squeg", "squid", "squit", "squiz", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "staph", "staps", "starn", "starr", "stars", "stats", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoln", "stoma", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "stubs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stuns", "stupa", "stupe", "sture", "sturt", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulph", "sulus", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swats", "swayl", "sways", "sweal", "swede", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals", "taata", "taber", "tabes", "tabid", "tabis", "tabla", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacks", "tacos", "tacts", "taels", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal", "tamed", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tangs", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapis", "tappa", "tapus", "taras", "tardo", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teats", "teaze", "techs", "techy", "tecta", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terry", "terts", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theow", "therm", "thesp", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe", "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timed", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tired", "tires", "tirls", "tiros", "tirrs", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs", "tomes", "tomia", "tommy", "tomos", "tondi", "tondo", "toned", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "toter", "totes", "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "tragi", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trass", "trats", "tratt", "trave", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "tride", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweel", "tween", "tweep", "tweer", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirp", "twite", "twits", "twoer", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "units", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unman", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unsew", "unsex", "unsod", "untax", "untin", "unwet", "unwit", "unwon", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urged", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "users", "usnea", "usque", "usure", "usury", "uteri", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valis", "valse", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "vents", "venus", "verbs", "verra", "verry", "verst", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "viold", "viols", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "visas", "vised", "vises", "visie", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "votes", "vouge", "voulu", "vowed", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "waacs", "wacke", "wacko", "wacks", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "waged", "wages", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wench", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whift", "whigs", "whilk", "whims", "whins", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whore", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "wooed", "woofs", "woofy", "woold", "wools", "woons", "woops", "woopy", "woose", "woosh", "wootz", "words", "works", "worms", "wormy", "worts", "wowed", "wowee", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wryer", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"]
      , _o = "present"
      , xo = "correct"
      , So = "absent";
    var zo = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };
    function jo(e, t) {
        var n = {};
        return e.forEach((function(e, a) {
            if (t[a])
                for (var s = 0; s < e.length; s++) {
                    var r = e[s]
                      , o = t[a][s]
                      , i = n[r] || "unknown";
                    zo[o] > zo[i] && (n[r] = o)
                }
        }
        )),
        n
    }
    function Eo(e) {
        var t = ["th", "st", "nd", "rd"]
          , n = e % 100;
        return e + (t[(n - 20) % 10] || t[n] || t[0])
    }
    var To = new Date(2021,5,19,0,0,0,0);
    function Co(e, t) {
        var n = new Date(e)
          , a = new Date(t).setHours(0, 0, 0, 0) - n.setHours(0, 0, 0, 0);
        return Math.round(a / 864e5)
    }
    function Oo(e) {
        var t, n = Lo(e);
        return t = n % ko.length,
        ko[Math.floor(Math.random() * ko.length)]
    }
    function Lo(e) {
        return Co(To, e)
    }
    var Io = "abcdefghijklmnopqrstuvwxyz";
    var Ro = "nyt-wordle-statistics"
      , qo = "fail"
      , Mo = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: o({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }, qo, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };
    function Ao() {
        try {
            var e = window.localStorage.getItem(Ro) || JSON.stringify(Mo);
            return JSON.parse(e)
        } catch (e) {
            ro(e)
        }
    }
    function No(e) {
        var t = e.isWin
          , n = e.isStreak
          , a = e.numGuesses
          , s = Ao();
        t ? (s.guesses[a] += 1,
        n ? s.currentStreak += 1 : s.currentStreak = 1) : (s.currentStreak = 0,
        s.guesses.fail += 1),
        s.maxStreak = Math.max(s.currentStreak, s.maxStreak),
        s.gamesPlayed += 1,
        s.gamesWon += t ? 1 : 0,
        s.winPercentage = Math.round(s.gamesWon / s.gamesPlayed * 100),
        s.averageGuesses = Math.round(Object.entries(s.guesses).reduce((function(e, t) {
            var n = y(t, 2)
              , a = n[0]
              , s = n[1];
            return a !== qo ? e += a * s : e
        }
        ), 0) / s.gamesWon),
        function(e) {
            try {
                window.localStorage.setItem(Ro, JSON.stringify(e))
            } catch (e) {
                ro(e)
            }
        }(s)
    }
    var Po, Do = "nyt-wordle-refresh", Ho = window.localStorage;
    function Bo() {
        return Po || (Po = setInterval((function() {
            Ho.getItem(Do) && (Ho.removeItem(Do),
            window.location.href.match(/.*\.nytimes\.com/g) ? window.location.reload(!0) : window.location.replace("https://www.nytimes.com/games/wordle"))
        }
        ), 432e5))
    }
    var Fo = "nyt-wordle-statistics"
      , Uo = window.localStorage;
    function $o(e, t) {
        if (!e.gamesPlayed)
            return !1;
        var n = function() {
            var e = {
                gamesPlayed: 0
            };
            try {
                var t = JSON.parse(Uo.getItem(Fo));
                if (t && t.gamesPlayed)
                    return t
            } catch (t) {
                return e
            }
            return e
        }();
        return !(n.gamesPlayed && !t) || e.gamesPlayed > n.gamesPlayed
    }
    function Go() {
        if (Uo) {
            try {
                var e = new Proxy(new URLSearchParams(window.location.search),{
                    get: function(e, t) {
                        return e.get(t)
                    }
                });
                if (e.data)
                    !function(e) {
                        if (!e.statistics)
                            throw new Error("User local data does not contain statistics. Aborting transfer.");
                        if ($o(e.statistics, e.force)) {
                            Uo.setItem(Fo, JSON.stringify(e.statistics));
                            var t = e.darkTheme;
                            window.themeManager.setDarkTheme(t);
                            var n = !!e.colorBlindTheme;
                            window.themeManager.setColorBlindTheme(n)
                        }
                    }(JSON.parse(e.data))
            } catch (e) {}
            window.history.replaceState({}, document.title, new URL(location.pathname,location.href).href)
        }
    }
    var Yo = document.createElement("template");
    Yo.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: calc(100% - var(--header-height));\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-family: \'nyt-karnakcondensed\';\n    font-weight: 700;\n    font-size: 37px;\n    line-height: 100%;\n    letter-spacing: 0.01em;\n    text-align: center;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n  .menu-left {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    align-items: center;\n    width: 70px;\n    justify-content: flex-start;\n  }\n  .menu-right {\n    display: flex;\n    width: 70px;\n    justify-content: flex-end;\n  }\n  #nav-button {\n    padding-top: 2px;\n  }\n\n  @media (min-width: 415px) {\n    header {\n      padding: 0px 16px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n  <header>\n  <div class="menu-left">\n    <button id="nav-button" class="icon" aria-label="Navigation menu. Click for links to other NYT Games and our Privacy Policy." tabindex="-1">\n      <nav-icon></nav-icon>\n    </button>\n    <button id="help-button" class="icon" aria-label="Help" tabindex="-1">\n      <game-icon icon="help"></game-icon>\n    </button>\n  </div>\n  <div class="title">\n    Wordle\n  </div>\n  <div class="menu-right">\n    <button id="statistics-button" class="icon" aria-label="Statistics" tabindex="-1">\n      <game-icon icon="statistics"></game-icon>\n    </button>\n    <button id="settings-button" class="icon" aria-label="Settings" tabindex="-1">\n      <game-icon icon="settings"></game-icon>\n    </button>\n  </div>\n</header>\n    <div id="game">\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-nav-modal></game-nav-modal>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Wo = document.createElement("template");
    Wo.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Vo = "IN_PROGRESS"
      , Jo = "WIN"
      , Xo = "FAIL"
      , Ko = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"]
      , Zo = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            a(this, n),
            o(h(e = t.call(this)), "tileIndex", 0),
            o(h(e), "rowIndex", 0),
            o(h(e), "solution", void 0),
            o(h(e), "boardState", void 0),
            o(h(e), "evaluations", void 0),
            o(h(e), "canInput", !0),
            o(h(e), "gameStatus", Vo),
            o(h(e), "letterEvaluations", {}),
            o(h(e), "$board", void 0),
            o(h(e), "$keyboard", void 0),
            o(h(e), "$game", void 0),
            o(h(e), "today", void 0),
            o(h(e), "lastPlayedTs", void 0),
            o(h(e), "lastCompletedTs", void 0),
            o(h(e), "hardMode", void 0),
            o(h(e), "dayOffset", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.today = new Date,
            e.refreshTimer = Bo(),
            function() {
                try {
                    kr(so)
                } catch (e) {}
            }();
            var s = lo();
            return function() {
                try {
                    window.localStorage.removeItem("nyt-wordle-moogle/ANON")
                } catch (e) {
                    ro(e)
                }
            }(),
            e.lastPlayedTs = s.lastPlayedTs,
            e.lastCompletedTs = s.lastCompletedTs,
            !e.lastPlayedTs || Co(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""),
            e.evaluations = new Array(6).fill(null),
            e.solution = Oo(e.today),
            e.dayOffset = Lo(e.today),
            e.lastCompletedTs = s.lastCompletedTs,
            e.hardMode = s.hardMode,
            e.restoringFromLocalStorage = !1,
            co({
                rowIndex: e.rowIndex,
                boardState: e.boardState,
                evaluations: e.evaluations,
                solution: e.solution,
                gameStatus: e.gameStatus
            })) : (e.boardState = s.boardState,
            e.evaluations = s.evaluations,
            e.rowIndex = s.rowIndex,
            e.solution = s.solution,
            e.dayOffset = Lo(e.today),
            e.letterEvaluations = jo(e.boardState, e.evaluations),
            e.gameStatus = s.gameStatus,
            e.lastCompletedTs = s.lastCompletedTs,
            e.hardMode = s.hardMode,
            e.gameStatus !== Vo && (e.canInput = !1),
            e.restoringFromLocalStorage = !0),
            e
        }
        return r(n, [{
            key: "evaluateRow",
            value: function() {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                    var e, t = this.$board.querySelectorAll("game-row")[this.rowIndex], n = this.boardState[this.rowIndex];
                    if (e = n,
                    !wo.includes(e) && !ko.includes(e))
                        return t.setAttribute("invalid", ""),
                        void this.addToast("Not in word list");
                    if (this.hardMode) {
                        var a = function(e, t, n) {
                            if (!e || !t || !n)
                                return {
                                    validGuess: !0
                                };
                            for (var a = 0; a < n.length; a++)
                                if (n[a] === xo && e[a] !== t[a])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "".concat(Eo(a + 1), " letter must be ").concat(t[a].toUpperCase())
                                    };
                            for (var s = {}, r = 0; r < n.length; r++)
                                [xo, _o].includes(n[r]) && (s[t[r]] ? s[t[r]] += 1 : s[t[r]] = 1);
                            var o = e.split("").reduce((function(e, t) {
                                return e[t] ? e[t] += 1 : e[t] = 1,
                                e
                            }
                            ), {});
                            for (var i in s)
                                if ((o[i] || 0) < s[i])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                    };
                            return {
                                validGuess: !0
                            }
                        }(n, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1])
                          , s = a.validGuess
                          , r = a.errorMessage;
                        if (!s)
                            return t.setAttribute("invalid", ""),
                            void this.addToast(r || "Not valid in hard mode")
                    }
                    var o = function(e, t) {
                        for (var n = Array(t.length).fill(So), a = Array(t.length).fill(!0), s = Array(t.length).fill(!0), r = 0; r < e.length; r++)
                            e[r] === t[r] && s[r] && (n[r] = xo,
                            a[r] = !1,
                            s[r] = !1);
                        for (var o = 0; o < e.length; o++) {
                            var i = e[o];
                            if (a[o])
                                for (var l = 0; l < t.length; l++) {
                                    var c = t[l];
                                    if (s[l] && i === c) {
                                        n[o] = _o,
                                        s[l] = !1;
                                        break
                                    }
                                }
                        }
                        return n
                    }(n, this.solution);
                    this.evaluations[this.rowIndex] = o,
                    this.letterEvaluations = jo(this.boardState, this.evaluations),
                    t.evaluation = this.evaluations[this.rowIndex],
                    this.rowIndex += 1;
                    var i = this.rowIndex >= 6
                      , l = o.every((function(e) {
                        return "correct" === e
                    }
                    ));
                    if (i || l)
                        No({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Co(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }),
                        co({
                            lastCompletedTs: Date.now()
                        }),
                        this.gameStatus = l ? Jo : Xo,
                        Ho.setItem(Do, !0);
                    this.tileIndex = 0,
                    this.canInput = !1,
                    co({
                        rowIndex: this.rowIndex,
                        boardState: this.boardState,
                        evaluations: this.evaluations,
                        solution: this.solution,
                        gameStatus: this.gameStatus,
                        lastPlayedTs: Date.now()
                    })
                }
            }
        }, {
            key: "addLetter",
            value: function(e) {
                this.gameStatus === Vo && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e,
                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                this.tileIndex += 1)))
            }
        }, {
            key: "removeLetter",
            value: function() {
                if (this.gameStatus === Vo && this.canInput && !(this.tileIndex <= 0)) {
                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                    var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                    this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    this.tileIndex -= 1
                }
            }
        }, {
            key: "submitGuess",
            value: function() {
                if (this.gameStatus === Vo && this.canInput) {
                    if (5 !== this.tileIndex)
                        return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                        void this.addToast("Not enough letters");
                    this.evaluateRow()
                }
            }
        }, {
            key: "addToast",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , a = document.createElement("game-toast");
                a.setAttribute("text", e),
                t && a.setAttribute("duration", t),
                n ? this.shadowRoot.querySelector("#system-toaster").prepend(a) : this.shadowRoot.querySelector("#game-toaster").prepend(a)
            }
        }, {
            key: "sizeBoard",
            value: function() {
                var e = this.shadowRoot.querySelector("#board-container")
                  , t = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350)
                  , n = 6 * Math.floor(t / 5);
                this.$board.style.width = "".concat(t, "px"),
                this.$board.style.height = "".concat(n, "px")
            }
        }, {
            key: "showStatsModal",
            value: function() {
                var e = this.$game.querySelector("game-modal")
                  , t = document.createElement("game-stats");
                this.gameStatus === Jo && this.rowIndex <= 6 && t.setAttribute("highlight-guess", this.rowIndex),
                t.gameApp = this,
                e.appendChild(t),
                e.setAttribute("open", "")
            }
        }, {
            key: "showNavModal",
            value: function() {
                var e = this.$game.querySelector("game-nav-modal")
                  , t = document.createElement("game-nav");
                t.gameApp = this,
                e.appendChild(t),
                e.setAttribute("open", "")
            }
        }, {
            key: "showHelpModal",
            value: function() {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                e.setAttribute("open", "")
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e, t, n, a, s, r, o, i, l, c = this;
                this.shadowRoot.appendChild(Yo.content.cloneNode(!0)),
                this.$game = this.shadowRoot.querySelector("#game"),
                this.$board = this.shadowRoot.querySelector("#board"),
                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                this.sizeBoard(),
                this.lastPlayedTs || setTimeout((function() {
                    return c.showHelpModal()
                }
                ), 100);
                for (var u = 0; u < 6; u++) {
                    var d = document.createElement("game-row");
                    d.setAttribute("letters", this.boardState[u]),
                    d.setAttribute("length", 5),
                    this.evaluations[u] && (d.evaluation = this.evaluations[u]),
                    this.$board.appendChild(d)
                }
                this.$game.addEventListener("game-key-press", (function(e) {
                    var t = e.detail.key;
                    "←" === t || "Backspace" === t ? c.removeLetter() : "↵" === t || "Enter" === t ? c.submitGuess() : Io.includes(t.toLowerCase()) && c.addLetter(t.toLowerCase())
                }
                )),
                this.$game.addEventListener("game-last-tile-revealed-in-row", (function(e) {
                    c.$keyboard.letterEvaluations = c.letterEvaluations,
                    c.rowIndex < 6 && (c.canInput = !0);
                    var t = c.$board.querySelectorAll("game-row")[c.rowIndex - 1];
                    (e.path || e.composedPath && e.composedPath()).includes(t) && ([Jo, Xo].includes(c.gameStatus) && (c.restoringFromLocalStorage ? c.showStatsModal() : (c.gameStatus === Jo && (t.setAttribute("win", ""),
                    c.addToast(Ko[c.rowIndex - 1], 2e3)),
                    c.gameStatus === Xo && c.addToast(c.solution.toUpperCase(), 1 / 0),
                    setTimeout((function() {
                        c.showStatsModal()
                    }
                    ), 2500))),
                    c.restoringFromLocalStorage = !1)
                }
                )),
                this.shadowRoot.addEventListener("game-setting-change", (function(e) {
                    var t = e.detail
                      , n = t.name
                      , a = t.checked
                      , s = t.disabled;
                    "hard-mode" !== n || (s ? c.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (c.hardMode = a,
                    co({
                        hardMode: a
                    })))
                }
                )),
                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(e) {
                    var t = c.$game.querySelector("game-page")
                      , n = document.createTextNode("Settings");
                    t.appendChild(n);
                    var a = document.createElement("game-settings");
                    a.setAttribute("slot", "content"),
                    a.gameApp = c,
                    t.appendChild(a),
                    t.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("help-button").addEventListener("click", (function(e) {
                    var t = c.$game.querySelector("game-page")
                      , n = document.createTextNode("How to play");
                    t.appendChild(n);
                    var a = document.createElement("game-help");
                    a.setAttribute("page", ""),
                    a.setAttribute("slot", "content"),
                    t.appendChild(a),
                    t.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(e) {
                    c.showStatsModal()
                }
                )),
                this.shadowRoot.getElementById("nav-button").addEventListener("click", (function(e) {
                    c.showNavModal()
                }
                )),
                window.addEventListener("resize", this.sizeBoard.bind(this)),
                Go(),
                i = {
                    container: "GTM-P528B3",
                    prdstring: "&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130",
                    devstring: "&gtm_auth=WiJyA7zv1sohHCWSZ3mF1Q&gtm_preview=env-8",
                    stgstring: "&gtm_auth=FOuAsPhG-4kWeLk6Kq5AzQ&gtm_preview=env-7",
                    dataLayer: "",
                    modifier: "",
                    env: document.location.host.indexOf(".dev.") > -1 ? "dev" : document.location.host.indexOf(".stg.") > -1 || document.location.host.indexOf(".stage.") > -1 ? "stg" : "prod"
                },
                l = {
                    event: "pageDataReady",
                    application: {
                        name: "games-crosswords",
                        environment: i.env
                    }
                },
                i.modifier = i.prdstring,
                "dev" === i.env ? i.modifier = i.devstring : "stg" === i.env && (i.modifier = i.stgstring),
                function(e, t, n, a, s, r) {
                    e[a] = e[a] || [],
                    e[a].push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    });
                    var o = t.getElementsByTagName(n)[0]
                      , i = t.createElement(n);
                    i.async = !0,
                    i.src = "https://www.googletagmanager.com/gtm.js?id=" + s + r + "&gtm_cookies_win=x";
                }(window, document, "script", "dataLayer", i.container, i.modifier),
                e = l,
                t = i.env,
                a = t && "prod" === t ? "a.nytimes.com" : "a.dev.nytimes.com",
                s = encodeURIComponent(document.referrer),
                r = encodeURIComponent((n = document.querySelector("link[rel=canonical]")) ? n.href : document.location.href),
                (o = new XMLHttpRequest).withCredentials = !0,
                o.open("GET", "https://" + a + "/svc/nyt/data-layer?sourceApp=" + e.application.name + "&referrer=" + s + "&assetUrl=" + r, !0),
                o.onload = function() {
                    var t = JSON.parse(o.responseText);
                    t.event = "userDataReady",
                    window.dataLayer.push(t),
                    window.dataLayer.push(e)
                }
                ,
                o.addEventListener("error", (function() {
                    window.dataLayer.push(e)
                }
                ));
                //o.send()
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.refreshTimer)
            }
        }, {
            key: "debugTools",
            value: function() {
                var e = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(Wo.content.cloneNode(!0)),
                this.shadowRoot.getElementById("toast").addEventListener("click", (function(t) {
                    e.addToast("hello world")
                }
                )),
                this.shadowRoot.getElementById("modal").addEventListener("click", (function(t) {
                    var n = e.$game.querySelector("game-modal");
                    n.textContent = "hello plz",
                    n.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                    e.evaluateRow()
                }
                )),
                this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                }
                )),
                this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                    var t = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    "" === t.getAttribute("win") ? t.removeAttribute("win") : t.setAttribute("win", "")
                }
                ))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-app", Zo);
    var Qo = document.createElement("template");
    Qo.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ei = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Qo.content.cloneNode(!0)),
                this.addEventListener("click", (function(t) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(t) {
                    "SlideOut" === t.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-modal", ei);
    var ti = document.createElement("template");
    ti.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var ni = document.createElement("template");
    ni.innerHTML = "\n  <button>key</button>\n";
    var ai = document.createElement("template");
    ai.innerHTML = '\n  <div class="spacer"></div>\n';
    var si = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]]
      , ri = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            o(h(e = t.call(this)), "_letterEvaluations", {}),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "letterEvaluations",
            set: function(e) {
                this._letterEvaluations = e,
                this._render()
            }
        }, {
            key: "dispatchKeyPressEvent",
            value: function(e) {
                this.dispatchEvent(new CustomEvent("game-key-press",{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        key: e
                    }
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(ti.content.cloneNode(!0)),
                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                this.$keyboard.addEventListener("click", (function(t) {
                    var n = t.target.closest("button");
                    n && e.$keyboard.contains(n) && e.dispatchKeyPressEvent(n.dataset.key)
                }
                )),
                window.addEventListener("keydown", (function(t) {
                    if (!0 !== t.repeat) {
                        var n = t.key
                          , a = t.metaKey
                          , s = t.ctrlKey;
                        a || s || (Io.includes(n.toLowerCase()) || "Backspace" === n || "Enter" === n) && e.dispatchKeyPressEvent(n)
                    }
                }
                )),
                this.$keyboard.addEventListener("transitionend", (function(t) {
                    var n = t.target.closest("button");
                    n && e.$keyboard.contains(n) && n.classList.remove("fade")
                }
                )),
                si.forEach((function(t) {
                    var n = document.createElement("div");
                    n.classList.add("row"),
                    t.forEach((function(e) {
                        var t;
                        if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                            if ((t = ni.content.cloneNode(!0).firstElementChild).dataset.key = e,
                            t.textContent = e,
                            "←" === e) {
                                var a = document.createElement("game-icon");
                                a.setAttribute("icon", "backspace"),
                                t.textContent = "",
                                t.appendChild(a),
                                t.classList.add("one-and-a-half")
                            }
                            "↵" == e && (t.textContent = "enter",
                            t.classList.add("one-and-a-half"))
                        } else
                            (t = ai.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        n.appendChild(t)
                    }
                    )),
                    e.$keyboard.appendChild(n)
                }
                )),
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                for (var e in this._letterEvaluations) {
                    var t = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                    t.dataset.state = this._letterEvaluations[e],
                    t.classList.add("fade")
                }
            }
        }]),
        n
    }(p(HTMLElement));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function oi(e, t, n, a) {
        return new (n || (n = Promise))((function(s, r) {
            function o(e) {
                try {
                    l(a.next(e))
                } catch (e) {
                    r(e)
                }
            }
            function i(e) {
                try {
                    l(a.throw(e))
                } catch (e) {
                    r(e)
                }
            }
            function l(e) {
                var t;
                e.done ? s(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, i)
            }
            l((a = a.apply(e, t || [])).next())
        }
        ))
    }
    function ii(e, t) {
        var n, a, s, r, o = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: i(0),
            throw: i(1),
            return: i(2)
        },
        "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }
        ),
        r;
        function i(r) {
            return function(i) {
                return function(r) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (n = 1,
                            a && (s = 2 & r[0] ? a.return : r[0] ? a.throw || ((s = a.return) && s.call(a),
                            0) : a.next) && !(s = s.call(a, r[1])).done)
                                return s;
                            switch (a = 0,
                            s && (r = [2 & r[0], s.value]),
                            r[0]) {
                            case 0:
                            case 1:
                                s = r;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                a = r[1],
                                r = [0];
                                continue;
                            case 7:
                                r = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!((s = (s = o.trys).length > 0 && s[s.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
                                    o.label = r[1];
                                    break
                                }
                                if (6 === r[0] && o.label < s[1]) {
                                    o.label = s[1],
                                    s = r;
                                    break
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2],
                                    o.ops.push(r);
                                    break
                                }
                                s[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            r = t.call(e, o)
                        } catch (e) {
                            r = [6, e],
                            a = 0
                        } finally {
                            n = s = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, i])
            }
        }
    }
    customElements.define("game-keyboard", ri),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }
    .bind("[clipboard-polyfill]");
    var li, ci, ui, di, pi = "undefined" == typeof navigator ? void 0 : navigator, hi = null == pi ? void 0 : pi.clipboard;
    null === (li = null == hi ? void 0 : hi.read) || void 0 === li || li.bind(hi),
    null === (ci = null == hi ? void 0 : hi.readText) || void 0 === ci || ci.bind(hi);
    var mi = (null === (ui = null == hi ? void 0 : hi.write) || void 0 === ui || ui.bind(hi),
    null === (di = null == hi ? void 0 : hi.writeText) || void 0 === di ? void 0 : di.bind(hi))
      , fi = "undefined" == typeof window ? void 0 : window
      , yi = (null == fi || fi.ClipboardItem,
    fi);
    var gi = function() {
        this.success = !1
    };
    function vi(e, t, n) {
        for (var a in e.success = !0,
        t) {
            var s = t[a]
              , r = n.clipboardData;
            r.setData(a, s),
            "text/plain" === a && r.getData(a) !== s && (e.success = !1)
        }
        n.preventDefault()
    }
    function bi(e) {
        var t = new gi
          , n = vi.bind(this, t, e);
        document.addEventListener("copy", n);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", n)
        }
        return t.success
    }
    function ki(e, t) {
        wi(e);
        var n = bi(t);
        return _i(),
        n
    }
    function wi(e) {
        var t = document.getSelection();
        if (t) {
            var n = document.createRange();
            n.selectNodeContents(e),
            t.removeAllRanges(),
            t.addRange(n)
        }
    }
    function _i() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }
    function xi(e) {
        return oi(this, void 0, void 0, (function() {
            var t;
            return ii(this, (function(n) {
                if (t = "text/plain"in e,
                "undefined" == typeof ClipboardEvent && void 0 !== yi.clipboardData && void 0 !== yi.clipboardData.setData) {
                    if (!t)
                        throw new Error("No `text/plain` value was specified.");
                    if (a = e["text/plain"],
                    yi.clipboardData.setData("Text", a))
                        return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var a;
                return bi(e) || navigator.userAgent.indexOf("Edge") > -1 || ki(document.body, e) || function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("style", "-webkit-user-select: text !important"),
                    t.textContent = "temporary element",
                    document.body.appendChild(t);
                    var n = ki(t, e);
                    return document.body.removeChild(t),
                    n
                }(e) || function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("style", "-webkit-user-select: text !important");
                    var n = t;
                    t.attachShadow && (n = t.attachShadow({
                        mode: "open"
                    }));
                    var a = document.createElement("span");
                    a.innerText = e,
                    n.appendChild(a),
                    document.body.appendChild(t),
                    wi(a);
                    var s = document.execCommand("copy");
                    return _i(),
                    document.body.removeChild(t),
                    s
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }
            ))
        }
        ))
    }
    function Si(e, t, n) {
        try {
            uo() && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e) ? navigator.share(e) : function(e) {
                return oi(this, void 0, void 0, (function() {
                    return ii(this, (function(t) {
                        if (mi)
                            return [2, mi(e)];
                        if (!xi(function(e) {
                            var t = {};
                            return t["text/plain"] = e,
                            t
                        }(e)))
                            throw new Error("writeText() failed");
                        return [2]
                    }
                    ))
                }
                ))
            }(e.text).then(t, n)
        } catch (e) {
            n()
        }
    }
    var zi = document.createElement("template");
    zi.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding-top: 16px;\n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    #promo {\n      margin-top: 12px;\n      width: 100%;\n    }\n\n    .promo-link {\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: flex-start;\n      text-decoration: none;\n      padding-top: 16px;\n    }\n\n    .promo-text {\n      font-family: nyt-franklin;\n      font-size: 14px;\n      line-height: 16px;\n      color: var(--color-tone-1);\n      flex-grow: 2;\n    }\n\n    @media (max-width: 500px) {\n      .promo-text-primary {\n        display: block;\n      }\n\n      .promo-text-secondary {\n        display: block;\n      }\n    }\n\n    .promo-cta {\n      display: block;\n      font-family: nyt-franklin-700;\n      margin-top: 4px;\n    }\n\n    .promo-link:hover .promo-cta {\n      text-decoration: underline;\n    }\n\n    .promo-icon {\n      width: var(--promo-icon-width);\n      height: var(--promo-icon-height);\n      margin-right: 16px;\n      border-radius: var(--promo-icon-border-radius);\n      padding: var(--promo-icon-padding);\n    }\n\n    .promo-arrow {\n      justify-self: flex-end;\n    }\n\n    .promo-link:hover {\n      --svg-arrow-fill: var(--svg-arrow-fill-hover);\n      --svg-arrow-stroke: var(--svg-arrow-stroke-hover);\n    } \n\n    .rule {\n      margin-left: -16px;\n      height: 1px;\n      position: absolute;\n      width: 100%;\n      background-color: var(--color-tone-4);\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n    <div id="promo"></div>\n  </div>\n';
    var ji = document.createElement("template");
    ji.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ei = document.createElement("template");
    Ei.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Ti = document.createElement("template");
    Ti.innerHTML = '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ci = document.createElement("template");
    Ci.innerHTML = '\n  <div class="rule"></div>\n  <a href="https://www.nytimes.com/puzzles/spelling-bee" class="promo-link">\n    <div class="promo-icon">\n      <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M24.9528 14.8924L28.952 21.8171L24.9528 28.7417H16.9628L12.9636 21.8171L16.9628 14.8924H24.9528Z" fill="#F7DA21" stroke="#F7DA21" stroke-width="0.495011"/>\n        <path d="M12.9892 21.7667L16.9884 28.6914L12.9892 35.616H4.99921L1 28.6914L4.99921 21.7667H12.9892Z" fill="white" stroke="#121212" stroke-width="1.5"/>\n        <path d="M17.0056 14.8493L13.0064 7.92463L17.0056 1L24.9955 1L28.9948 7.92463L24.9955 14.8493L17.0056 14.8493Z" fill="white" stroke="#121212" stroke-width="1.5"/>\n        <path d="M37.0008 7.96736L41 14.892L37.0008 21.8166H29.0108L25.0116 14.892L29.0108 7.96736H37.0008Z" fill="white" stroke="#121212" stroke-width="1.5"/>\n        <path d="M12.9972 7.96736L16.9964 14.892L12.9972 21.8166H5.00727L1.00806 14.892L5.00727 7.96736H12.9972Z" fill="white" stroke="#121212" stroke-width="1.5"/>\n        <path d="M37.0008 21.8089L41 28.7335L37.0008 35.6582H29.0108L25.0116 28.7335L29.0108 21.8089H37.0008Z" fill="white" stroke="#121212" stroke-width="1.5"/>\n        <path d="M24.9947 28.7333L28.9939 35.658L24.9947 42.5826H17.0047L13.0055 35.658L17.0047 28.7333H24.9947Z" fill="white" stroke="#121212" stroke-width="1.5"/>\n      </svg>\n    </div>\n    <div class="promo-text">\n      <span class="promo-text-primary">How many words can you find </span>\n      <span class="promo=text-secondary">using 7 letters?</span>\n      <span class="promo-cta">Play Spelling Bee</span>\n    </div>\n    <div class="promo-arrow">\n      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="12" cy="12" r="12" fill="var(--svg-arrow-fill)"/>\n        <path d="M10.4038 6L15.8076 11.4038L10.4038 16.8076" stroke="var(--svg-arrow-stroke)" stroke-width="1.5" stroke-linecap="round"/>\n      </svg>\n\n    </div>\n  </a>\n';
    var Oi = {
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        winPercentage: "Win %",
        gamesPlayed: "Played",
        gamesWon: "Won",
        averageGuesses: "Av. Guesses"
    }
      , Li = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            o(h(e = t.call(this)), "stats", {}),
            o(h(e), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.stats = Ao(),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(zi.content.cloneNode(!0));
                var t = this.shadowRoot.getElementById("statistics")
                  , n = this.shadowRoot.getElementById("guess-distribution")
                  , a = this.shadowRoot.getElementById("promo")
                  , s = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (a.appendChild(Ci.content.cloneNode(!0)),
                a.addEventListener("click", (function(e) {
                    e.stopPropagation()
                }
                )),
                Object.values(this.stats.guesses).every((function(e) {
                    return 0 === e
                }
                ))) {
                    var r = document.createElement("div");
                    r.classList.add("no-data"),
                    r.innerText = "No Data",
                    n.appendChild(r)
                } else
                    for (var o = 1; o < Object.keys(this.stats.guesses).length; o++) {
                        var i = o
                          , l = this.stats.guesses[o]
                          , c = Ei.content.cloneNode(!0)
                          , u = Math.max(7, Math.round(l / s * 100));
                        c.querySelector(".guess").textContent = i;
                        var d = c.querySelector(".graph-bar");
                        if (d.style.width = "".concat(u, "%"),
                        "number" == typeof l) {
                            c.querySelector(".num-guesses").textContent = l,
                            l > 0 && d.classList.add("align-right");
                            var p = parseInt(this.getAttribute("highlight-guess"), 10);
                            p && o === p && d.classList.add("highlight")
                        }
                        n.appendChild(c)
                    }
                if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(n) {
                    var a = Oi[n]
                      , s = e.stats[n]
                      , r = ji.content.cloneNode(!0);
                    r.querySelector(".label").textContent = a,
                    r.querySelector(".statistic").textContent = s,
                    t.appendChild(r)
                }
                )),
                this.gameApp.gameStatus !== Vo) {
                    var h = this.shadowRoot.querySelector(".footer")
                      , m = Ti.content.cloneNode(!0);
                    h.appendChild(m),
                    this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(t) {
                        t.preventDefault(),
                        t.stopPropagation();
                        Si(function(e) {
                            var t = e.evaluations
                              , n = e.dayOffset
                              , a = e.rowIndex
                              , s = e.isHardMode
                              , r = e.isWin
                              , o = JSON.parse(window.localStorage.getItem(z))
                              , i = JSON.parse(window.localStorage.getItem(j))
                              , l = "Wordle ".concat(n);
                            l += " ".concat(r ? a : "X", "/").concat(6),
                            s && (l += "*");
                            var c = "";
                            return t.forEach((function(e) {
                                e && (e.forEach((function(e) {
                                    if (e) {
                                        var t = "";
                                        switch (e) {
                                        case xo:
                                            t = function(e) {
                                                return e ? "🟧" : "🟩"
                                            }(i);
                                            break;
                                        case _o:
                                            t = function(e) {
                                                return e ? "🟦" : "🟨"
                                            }(i);
                                            break;
                                        case So:
                                            t = function(e) {
                                                return e ? "⬛" : "⬜"
                                            }(o)
                                        }
                                        c += t
                                    }
                                }
                                )),
                                c += "\n")
                            }
                            )),
                            {
                                text: "".concat(l, "\n\n").concat(c.trimEnd())
                            }
                        }({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === Jo
                        }), (function() {
                            e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                        }
                        ), (function() {
                            e.gameApp.addToast("Share failed", 2e3, !0)
                        }
                        ))
                    }
                    ))
                }
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-stats", Li);
    var Ii = document.createElement("template")
      , Ri = [{
        id: "spelling-bee",
        name: "Spelling Bee",
        url: "/puzzles/spelling-bee?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--spelling-bee)"
    }, {
        id: "crossword",
        name: "The Crossword",
        url: "/crosswords/game/daily?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--daily)"
    }, {
        id: "mini",
        name: "The Mini",
        url: "/crosswords/game/mini?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--mini)"
    }, {
        id: "wordlebot",
        name: "WordleBot: Your Daily Wordle Companion",
        url: "/interactive/2022/upshot/wordle-bot.html?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--wordlebot)"
    }, {
        id: "chess",
        name: "Chess",
        url: "/spotlight/chess-puzzles?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--chess)"
    }, {
        id: "gameplay-stories",
        name: "Gameplay Stories",
        url: "/column/wordplay?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav"
    }, {
        id: "more-games",
        name: "More Games",
        url: "/puzzles?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav"
    }].map((function(e) {
        return "\n    <a href=".concat(e.url, " id=").concat(e.id, '>\n      <div class="nav-item" style="--hover-color: var(--color-nav-hover)">\n        <span style="background-image: ').concat(e.backgroundImage, '; background-size: 20px;"class="nav-icon"></span>\n          ').concat(e.name, " \n      </div>\n    </a>\n    ")
    }
    )).join("")
      , qi = [{
        id: "nyt",
        name: "The New York Times",
        url: "https://www.nytimes.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--nyt)"
    }, {
        id: "cooking",
        name: "New York Times Cooking",
        url: "https://cooking.nytimes.com",
        backgroundImage: "var(--cooking)"
    }, {
        id: "wirecutter",
        name: "New York Times Wirecutter",
        url: "https://www.nytimes.com/wirecutter/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--wirecutter)"
    }, {
        id: "athletic",
        name: "The Athletic",
        url: "https://theathletic.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
        backgroundImage: "var(--athletic)"
    }].map((function(e) {
        return "\n    <a href=".concat(e.url, " id=").concat(e.id, '>\n      <div class="nav-item" style="--hover-color: var(--color-nav-hover)">\n        <span style="background-image: ').concat(e.backgroundImage, '; background-size: 20px;"class="nav-icon"></span>\n          ').concat(e.name, " \n      </div>\n    </a>\n    ")
    }
    )).join("");
    Ii.innerHTML = "\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: left;\n      justify-content: center;\n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    .nav-container {\n      flex: 1;\n    }\n\n    .nav-container .nav {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .nav-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    .game-list, .nyt-list {\n        list-style: none;\n        color: var(--color-tone-1);\n        padding: unset;\n        margin: unset;\n    }\n\n    .nyt-list {\n      margin-top: 5px;\n      padding: 12px 0px;\n      border-top: 1px solid #DCDCDC;\n    }\n\n    .nav-item {\n        display: flex;\n        justify-content: left;\n        align-items: center;\n        height: 40px;\n        font-weight: 500;\n        font-family: 'nyt-franklin';\n        font-size: 16px;\n        line-height: 16px;\n        padding-left: 18px;\n    }\n\n    .nav-item:hover {\n        background-color: var(--hover-color);\n    }\n\n    .nav-icon {\n        padding-bottom: 2px;\n        content: '';\n        height: 20px;\n        width: 28px;\n        padding-right: 8px;\n        display: inline-block;\n        vertical-align: middle;\n        background-repeat: no-repeat;\n    }\n\n    #nav {\n      padding-bottom: 10px;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    .more-text {\n        font-family: 'nyt-franklin-700';\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 12px;\n        line-height: 12px;\n        margin: 32px 0px 24px 0px;\n        padding-left: 18px;\n    }\n\n    .nav-header {\n        padding-top: 18px;\n        padding-left: 18px;\n    }\n\n    .privacy {\n      letter-spacing: .5px;\n      font-family: 'nyt-franklin';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 0px 25px 0px 17px;\n      padding: 12px 0px;\n      border-top: 1px solid #DCDCDC;\n      color: var(--color-tone-1);\n      font-size: 15px;\n      text-align: right;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end;\n    }\n  </style>\n\n  <div class=\"container\">\n    <span class=\"nav-header\">\n        <nyt-icon></nyt-icon>\n    </span>\n    <span class=\"more-text\">More From New York Times Games</span>\n    <div class=\"game-list\">".concat(Ri, '</div>\n    <div class="nyt-list">').concat(qi, '</div>\n    <div class="privacy">\n      <a href="https://www.nytimes.com/privacy/privacy-policy" onmouseover="this.style.textDecoration=\'underline\';" \n      onmouseout="this.style.textDecoration=\'none\';">\n        Privacy Policy\n      </a>\n    </div>\n  </div>\n');
    var Mi = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            o(h(e = t.call(this)), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Ii.content.cloneNode(!0))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-nav", Mi);
    var Ai = document.createElement("template");
    Ai.innerHTML = "\n  <style>\n    .overlay-nav {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: ".concat(3e3, ';\n      background-color: transparent;\n      justify-content: left;\n      align-items: unset;\n    }\n\n    :host([open]) .overlay-nav {\n      display: flex;\n    }\n\n    .content-nav {\n      position: relative;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      overflow-y: auto;\n      animation: SlideRight 200ms;\n      max-width: var(--game-max-width);\n      box-sizing: border-box;\n      width: 100%;\n      border-radius: 0px;\n      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.15);\n      max-height: calc(100% - var(--header-height) - 1px);\n      margin-top: calc(var(--header-height) + 1px);\n      padding: 0px;\n    }\n\n    @media (min-width: 415px) {\n      .content-nav {\n        width: 375px;\n      }\n    }\n\n    .content-nav.closing-nav {\n      animation: SlideLeft 200ms;\n    }\n\n    .close-icon-nav {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideRight {\n      0% {\n        transform: translateX(-100px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideLeft {\n      0% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateX(-200px);\n      }\n    }\n  </style>\n  <div class="overlay-nav">\n    <div class="content-nav">\n      <slot></slot>\n      <div class="close-icon-nav">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var Ni = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ai.content.cloneNode(!0)),
                this.addEventListener("click", (function(t) {
                    e.shadowRoot.querySelector(".content-nav").classList.add("closing-nav")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(t) {
                    "SlideLeft" === t.animationName && (e.shadowRoot.querySelector(".content-nav").classList.remove("closing-nav"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-nav-modal", Ni);
    var Pi = document.createElement("template");
    Pi.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Di = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Pi.content.cloneNode(!0)),
                this.shadowRoot.querySelector(".container").addEventListener("click", (function(t) {
                    t.stopPropagation(),
                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                    e.dispatchEvent(new CustomEvent("game-switch-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-switch", Di);
    var Hi = document.createElement("template");
    Hi.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE</strong> in six tries.</p>\n      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new WORDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Bi = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Hi.content.cloneNode(!0))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-help", Bi);
    var Fi = document.createElement("template");
    Fi.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ui = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Fi.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(t) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(t) {
                    "SlideOut" === t.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                    Array.from(e.childNodes).forEach((function(t) {
                        e.removeChild(t)
                    }
                    )),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-page", Ui);
    var $i = document.createElement("template");
    $i.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-1) />\n  </svg>\n';
    var Gi = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
    }
      , Yi = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild($i.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Gi[e]),
                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("game-icon", Yi);
    var Wi = document.createElement("template");
    Wi.innerHTML = '\n  <a href="https://www.nytimes.com/crosswords">\n  <svg\n    className="pz-nav__logo"\n    width="95"\n    height="18"\n    viewBox="0 0 138 25"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-label="New York Times Games Logo. Click for more puzzles"\n  >\n    <rect width="138" height="25" fill="none" />\n    <path\n      d="M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z"\n      fill=var(--color-tone-1)\n    />\n  </svg>\n  </a>\n';
    var Vi = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Wi.content.cloneNode(!0))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("nyt-icon", Vi);
    var Ji = document.createElement("template");
    Ji.innerHTML = '\n<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <rect x="0.172974" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n</svg>\n';
    var Xi = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            return a(this, n),
            (e = t.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return r(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Ji.content.cloneNode(!0))
            }
        }]),
        n
    }(p(HTMLElement));
    customElements.define("nav-icon", Xi);
    var Ki = document.createElement("template");
    Ki.innerHTML = '\n  <div id="timer"></div>\n';
    var Zi = 6e4
      , Qi = 36e5
      , el = function(e) {
        i(n, e);
        var t = f(n);
        function n() {
            var e;
            a(this, n),
            o(h(e = t.call(this)), "targetEpochMS", void 0),
            o(h(e), "intervalId", void 0),
            o(h(e), "$timer", void 0),
            e.attachShadow({
                mode: "open"
            });
            var s = new Date;
            return s.setDate(s.getDate() + 1),
            s.setHours(0, 0, 0, 0),
            e.targetEpochMS = s.getTime(),
            e
        }
        return r(n, [{
            key: "padDigit",
            value: function(e) {
                return e.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer",
            value: function() {
                var e, t = (new Date).getTime(), n = Math.floor(this.targetEpochMS - t);
                if (n <= 0)
                    e = "00:00:00";
                else {
                    var a = Math.floor(n % 864e5 / Qi)
                      , s = Math.floor(n % Qi / Zi)
                      , r = Math.floor(n % Zi / 1e3);
                    e = "".concat(this.padDigit(a), ":").concat(this.padDigit(s), ":").concat(this.padDigit(r))
                }
                this.$timer.textContent = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ki.content.cloneNode(!0)),
                this.$timer = this.shadowRoot.querySelector("#timer"),
                this.intervalId = setInterval((function() {
                    e.updateTimer()
                }
                ), 200)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.intervalId)
            }
        }]),
        n
    }(p(HTMLElement));
    return customElements.define("countdown-timer", el),
    e.CountdownTimer = el,
    e.GameApp = Zo,
    e.GameHelp = Bi,
    e.GameIcon = Yi,
    e.GameKeyboard = ri,
    e.GameModal = ei,
    e.GameNav = Mi,
    e.GamePage = Ui,
    e.GameRow = x,
    e.GameSettings = go,
    e.GameStats = Li,
    e.GameSwitch = Di,
    e.GameThemeManager = E,
    e.GameTile = w,
    e.GameToast = bo,
    e.NYTIcon = Vi,
    e.NavIcon = Xi,
    e.NavModal = Ni,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});