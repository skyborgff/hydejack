/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v8.1.1 <https://hydejack.com/>
 */
!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
            return t[e]
        }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 76)
}([, function (t, e, n) {
    "use strict";
    (function (t) {
        n.d(e, "a", function () {
            return i
        });
        var r = "undefined" != typeof window && window,
            o = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            i = r || void 0 !== t && t || o
    }).call(this, n(6))
}, , function (t, e) {
    var n = t.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = n)
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    t.exports = function (t) {
        return "object" === n(t) ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    n(56), t.exports = n(3).Function.bind
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var r;
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
    }
    t.exports = r
}, function (t, e, n) {
    var r = n(8), o = n(3), i = n(12), s = n(47), a = n(20), u = function t(e, n, u) {
        var c, l, f, h, p = e & t.F, d = e & t.G, y = e & t.P, m = e & t.B,
            v = d ? r : e & t.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, b = d ? o : o[n] || (o[n] = {}),
            g = b.prototype || (b.prototype = {});
        for (c in d && (u = n), u) f = ((l = !p && v && void 0 !== v[c]) ? v : u)[c], h = m && l ? a(f, r) : y && "function" == typeof f ? a(Function.call, f) : f, v && s(v, c, f, e & t.U), b[c] != f && i(b, c, h), y && g[c] != f && (g[c] = f)
    };
    r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e, n) {
    var r = n(53)("wks"), o = n(19), i = n(8).Symbol, s = "function" == typeof i;
    (t.exports = function (t) {
        return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
    }).store = r
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var n = function () {
                if ("undefined" != typeof Map) return Map;

                function t(t, e) {
                    var n = -1;
                    return t.some(function (t, r) {
                        return t[0] === e && (n = r, !0)
                    }), n
                }

                return function () {
                    function e() {
                        this.__entries__ = []
                    }

                    var n = {size: {configurable: !0}};
                    return n.size.get = function () {
                        return this.__entries__.length
                    }, e.prototype.get = function (e) {
                        var n = t(this.__entries__, e), r = this.__entries__[n];
                        return r && r[1]
                    }, e.prototype.set = function (e, n) {
                        var r = t(this.__entries__, e);
                        ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                    }, e.prototype.delete = function (e) {
                        var n = this.__entries__, r = t(n, e);
                        ~r && n.splice(r, 1)
                    }, e.prototype.has = function (e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function () {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function (t, e) {
                        void 0 === e && (e = null);
                        for (var n = 0, r = this.__entries__; n < r.length; n += 1) {
                            var o = r[n];
                            t.call(e, o[1], o[0])
                        }
                    }, Object.defineProperties(e.prototype, n), e
                }()
            }(), r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            o = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
            i = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function (t) {
                return setTimeout(function () {
                    return t(Date.now())
                }, 1e3 / 60)
            }, s = 2, a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            u = "undefined" != typeof MutationObserver, c = function () {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                    var n = !1, r = !1, o = 0;

                    function a() {
                        n && (n = !1, t()), r && c()
                    }

                    function u() {
                        i(a)
                    }

                    function c() {
                        var t = Date.now();
                        if (n) {
                            if (t - o < s) return;
                            r = !0
                        } else n = !0, r = !1, setTimeout(u, e);
                        o = t
                    }

                    return c
                }(this.refresh.bind(this), 20)
            };
        c.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, c.prototype.removeObserver = function (t) {
            var e = this.observers_, n = e.indexOf(t);
            ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
        }, c.prototype.refresh = function () {
            this.updateObservers_() && this.refresh()
        }, c.prototype.updateObservers_ = function () {
            var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive()
            });
            return t.forEach(function (t) {
                return t.broadcastActive()
            }), t.length > 0
        }, c.prototype.connect_ = function () {
            r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, c.prototype.disconnect_ = function () {
            r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, c.prototype.onTransitionEnd_ = function (t) {
            var e = t.propertyName;
            void 0 === e && (e = ""), a.some(function (t) {
                return !!~e.indexOf(t)
            }) && this.refresh()
        }, c.getInstance = function () {
            return this.instance_ || (this.instance_ = new c), this.instance_
        }, c.instance_ = null;
        var l = function (t, e) {
            for (var n = 0, r = Object.keys(e); n < r.length; n += 1) {
                var o = r[n];
                Object.defineProperty(t, o, {value: e[o], enumerable: !1, writable: !1, configurable: !0})
            }
            return t
        }, f = function (t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || o
        }, h = b(0, 0, 0, 0);

        function p(t) {
            return parseFloat(t) || 0
        }

        function d(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
            return e.reduce(function (e, n) {
                return e + p(t["border-" + n + "-width"])
            }, 0)
        }

        function y(t) {
            var e = t.clientWidth, n = t.clientHeight;
            if (!e && !n) return h;
            var r = f(t).getComputedStyle(t), o = function (t) {
                for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n += 1) {
                    var o = r[n], i = t["padding-" + o];
                    e[o] = p(i)
                }
                return e
            }(r), i = o.left + o.right, s = o.top + o.bottom, a = p(r.width), u = p(r.height);
            if ("border-box" === r.boxSizing && (Math.round(a + i) !== e && (a -= d(r, "left", "right") + i), Math.round(u + s) !== n && (u -= d(r, "top", "bottom") + s)), !function (t) {
                return t === f(t).document.documentElement
            }(t)) {
                var c = Math.round(a + i) - e, l = Math.round(u + s) - n;
                1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
            }
            return b(o.left, o.top, a, u)
        }

        var m = "undefined" != typeof SVGGraphicsElement ? function (t) {
            return t instanceof f(t).SVGGraphicsElement
        } : function (t) {
            return t instanceof f(t).SVGElement && "function" == typeof t.getBBox
        };

        function v(t) {
            return r ? m(t) ? function (t) {
                var e = t.getBBox();
                return b(0, 0, e.width, e.height)
            }(t) : y(t) : h
        }

        function b(t, e, n, r) {
            return {x: t, y: e, width: n, height: r}
        }

        var g = function (t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = t
        };
        g.prototype.isActive = function () {
            var t = v(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, g.prototype.broadcastRect = function () {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        };
        var w = function (t, e) {
            var n = function (t) {
                var e = t.x, n = t.y, r = t.width, o = t.height,
                    i = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                    s = Object.create(i.prototype);
                return l(s, {x: e, y: n, width: r, height: o, top: n, right: e + r, bottom: o + n, left: e}), s
            }(e);
            l(this, {target: t, contentRect: n})
        }, _ = function (t, e, r) {
            if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
        };
        _.prototype.observe = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new g(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, _.prototype.unobserve = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
            }
        }, _.prototype.disconnect = function () {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, _.prototype.gatherActive = function () {
            var t = this;
            this.clearActive(), this.observations_.forEach(function (e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }, _.prototype.broadcastActive = function () {
            if (this.hasActive()) {
                var t = this.callbackCtx_, e = this.activeObservations_.map(function (t) {
                    return new w(t.target, t.broadcastRect())
                });
                this.callback_.call(t, e, t), this.clearActive()
            }
        }, _.prototype.clearActive = function () {
            this.activeObservations_.splice(0)
        }, _.prototype.hasActive = function () {
            return this.activeObservations_.length > 0
        };
        var E = "undefined" != typeof WeakMap ? new WeakMap : new n, S = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var n = c.getInstance(), r = new _(e, n, this);
            E.set(this, r)
        };
        ["observe", "unobserve", "disconnect"].forEach(function (t) {
            S.prototype[t] = function () {
                return (e = E.get(this))[t].apply(e, arguments);
                var e
            }
        });
        var x = void 0 !== o.ResizeObserver ? o.ResizeObserver : S;
        e.a = x
    }).call(this, n(6))
}, function (t, e, n) {
    n(40), t.exports = n(3).Array.forEach
}, function (t, e, n) {
    var r = n(41), o = n(46);
    t.exports = n(13) ? function (t, e, n) {
        return r.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    t.exports = !n(14)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function () {
        var t = document.createElement("div");
        return t.setAttribute("data-a-b", "c"), Boolean(t.dataset && "c" === t.dataset.aB)
    }() ? function (t) {
        return t.dataset
    } : function (t) {
        var e = {}, n = t.attributes;

        function r() {
            return this.value
        }

        function o(t, e) {
            void 0 === e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }

        for (var i = 0, s = n.length; i < s; i++) {
            var a = n[i];
            if (a) {
                var u = a.name;
                if (0 === u.indexOf("data-")) {
                    var c = u.slice(5).replace(/-./g, function (t) {
                        return t.charAt(1).toUpperCase()
                    }), l = a.value;
                    Object.defineProperty(e, c, {enumerable: !0, get: r.bind({value: l || ""}), set: o.bind(t, u)})
                }
            }
        }
        return e
    }
}, , function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var r = n(20), o = n(23), i = n(49), s = n(24), a = n(50);
    t.exports = function (t, e) {
        var n = 1 == t, u = 2 == t, c = 3 == t, l = 4 == t, f = 6 == t, h = 5 == t || f, p = e || a;
        return function (e, a, d) {
            for (var y, m, v = i(e), b = o(v), g = r(a, d, 3), w = s(b.length), _ = 0, E = n ? p(e, w) : u ? p(e, 0) : void 0; w > _; _++) if ((h || _ in b) && (m = g(y = b[_], _, v), t)) if (n) E[_] = m; else if (m) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return y;
                case 6:
                    return _;
                case 2:
                    E.push(y)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : E
        }
    }
}, function (t, e, n) {
    var r = n(15);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    var r = n(25), o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(9)("unscopables"), o = Array.prototype;
    void 0 == o[r] && n(12)(o, r, {}), t.exports = function (t) {
        o[r][t] = !0
    }
}, function (t, e, n) {
    "use strict";
    t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function (t, e, n) {
    var r = n(27), o = {};
    for (var i in r) r.hasOwnProperty(i) && (o[r[i]] = i);
    var s = t.exports = {
        rgb: {channels: 3, labels: "rgb"},
        hsl: {channels: 3, labels: "hsl"},
        hsv: {channels: 3, labels: "hsv"},
        hwb: {channels: 3, labels: "hwb"},
        cmyk: {channels: 4, labels: "cmyk"},
        xyz: {channels: 3, labels: "xyz"},
        lab: {channels: 3, labels: "lab"},
        lch: {channels: 3, labels: "lch"},
        hex: {channels: 1, labels: ["hex"]},
        keyword: {channels: 1, labels: ["keyword"]},
        ansi16: {channels: 1, labels: ["ansi16"]},
        ansi256: {channels: 1, labels: ["ansi256"]},
        hcg: {channels: 3, labels: ["h", "c", "g"]},
        apple: {channels: 3, labels: ["r16", "g16", "b16"]},
        gray: {channels: 1, labels: ["gray"]}
    };
    for (var a in s) if (s.hasOwnProperty(a)) {
        if (!("channels" in s[a])) throw new Error("missing channels property: " + a);
        if (!("labels" in s[a])) throw new Error("missing channel labels property: " + a);
        if (s[a].labels.length !== s[a].channels) throw new Error("channel and label counts mismatch: " + a);
        var u = s[a].channels, c = s[a].labels;
        delete s[a].channels, delete s[a].labels, Object.defineProperty(s[a], "channels", {value: u}), Object.defineProperty(s[a], "labels", {value: c})
    }

    function l(t, e) {
        return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2)
    }

    s.rgb.hsl = function (t) {
        var e, n, r = t[0] / 255, o = t[1] / 255, i = t[2] / 255, s = Math.min(r, o, i), a = Math.max(r, o, i),
            u = a - s;
        return a === s ? e = 0 : r === a ? e = (o - i) / u : o === a ? e = 2 + (i - r) / u : i === a && (e = 4 + (r - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (s + a) / 2, [e, 100 * (a === s ? 0 : n <= .5 ? u / (a + s) : u / (2 - a - s)), 100 * n]
    }, s.rgb.hsv = function (t) {
        var e, n, r = t[0], o = t[1], i = t[2], s = Math.min(r, o, i), a = Math.max(r, o, i), u = a - s;
        return n = 0 === a ? 0 : u / a * 1e3 / 10, a === s ? e = 0 : r === a ? e = (o - i) / u : o === a ? e = 2 + (i - r) / u : i === a && (e = 4 + (r - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, a / 255 * 1e3 / 10]
    }, s.rgb.hwb = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return [s.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
    }, s.rgb.cmyk = function (t) {
        var e, n = t[0] / 255, r = t[1] / 255, o = t[2] / 255;
        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - o))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
    }, s.rgb.keyword = function (t) {
        var e = o[t];
        if (e) return e;
        var n, i = 1 / 0;
        for (var s in r) if (r.hasOwnProperty(s)) {
            var a = l(t, r[s]);
            a < i && (i = a, n = s)
        }
        return n
    }, s.keyword.rgb = function (t) {
        return r[t]
    }, s.rgb.xyz = function (t) {
        var e = t[0] / 255, n = t[1] / 255, r = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
    }, s.rgb.lab = function (t) {
        var e = s.rgb.xyz(t), n = e[0], r = e[1], o = e[2];
        return r /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
    }, s.hsl.rgb = function (t) {
        var e, n, r, o, i, s = t[0] / 360, a = t[1] / 100, u = t[2] / 100;
        if (0 === a) return [i = 255 * u, i, i];
        e = 2 * u - (n = u < .5 ? u * (1 + a) : u + a - u * a), o = [0, 0, 0];
        for (var c = 0; c < 3; c++) (r = s + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, i = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, o[c] = 255 * i;
        return o
    }, s.hsl.hsv = function (t) {
        var e = t[0], n = t[1] / 100, r = t[2] / 100, o = n, i = Math.max(r, .01);
        return n *= (r *= 2) <= 1 ? r : 2 - r, o *= i <= 1 ? i : 2 - i, [e, 100 * (0 === r ? 2 * o / (i + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
    }, s.hsv.rgb = function (t) {
        var e = t[0] / 60, n = t[1] / 100, r = t[2] / 100, o = Math.floor(e) % 6, i = e - Math.floor(e),
            s = 255 * r * (1 - n), a = 255 * r * (1 - n * i), u = 255 * r * (1 - n * (1 - i));
        switch (r *= 255, o) {
            case 0:
                return [r, u, s];
            case 1:
                return [a, r, s];
            case 2:
                return [s, r, u];
            case 3:
                return [s, a, r];
            case 4:
                return [u, s, r];
            case 5:
                return [r, s, a]
        }
    }, s.hsv.hsl = function (t) {
        var e, n, r, o = t[0], i = t[1] / 100, s = t[2] / 100, a = Math.max(s, .01);
        return r = (2 - i) * s, n = i * a, [o, 100 * (n = (n /= (e = (2 - i) * a) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
    }, s.hwb.rgb = function (t) {
        var e, n, r, o, i, s, a, u = t[0] / 360, c = t[1] / 100, l = t[2] / 100, f = c + l;
        switch (f > 1 && (c /= f, l /= f), n = 1 - l, r = 6 * u - (e = Math.floor(6 * u)), 0 != (1 & e) && (r = 1 - r), o = c + r * (n - c), e) {
            default:
            case 6:
            case 0:
                i = n, s = o, a = c;
                break;
            case 1:
                i = o, s = n, a = c;
                break;
            case 2:
                i = c, s = n, a = o;
                break;
            case 3:
                i = c, s = o, a = n;
                break;
            case 4:
                i = o, s = c, a = n;
                break;
            case 5:
                i = n, s = c, a = o
        }
        return [255 * i, 255 * s, 255 * a]
    }, s.cmyk.rgb = function (t) {
        var e = t[0] / 100, n = t[1] / 100, r = t[2] / 100, o = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
    }, s.xyz.rgb = function (t) {
        var e, n, r, o = t[0] / 100, i = t[1] / 100, s = t[2] / 100;
        return n = -.9689 * o + 1.8758 * i + .0415 * s, r = .0557 * o + -.204 * i + 1.057 * s, e = (e = 3.2406 * o + -1.5372 * i + -.4986 * s) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
    }, s.xyz.lab = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return n /= 100, r /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
    }, s.lab.xyz = function (t) {
        var e, n, r, o = t[0], i = t[1], s = t[2];
        e = i / 500 + (n = (o + 16) / 116), r = n - s / 200;
        var a = Math.pow(n, 3), u = Math.pow(e, 3), c = Math.pow(r, 3);
        return n = a > .008856 ? a : (n - 16 / 116) / 7.787, e = u > .008856 ? u : (e - 16 / 116) / 7.787, r = c > .008856 ? c : (r - 16 / 116) / 7.787, [e *= 95.047, n *= 100, r *= 108.883]
    }, s.lab.lch = function (t) {
        var e, n = t[0], r = t[1], o = t[2];
        return (e = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(r * r + o * o), e]
    }, s.lch.lab = function (t) {
        var e, n = t[0], r = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [n, r * Math.cos(e), r * Math.sin(e)]
    }, s.rgb.ansi16 = function (t) {
        var e = t[0], n = t[1], r = t[2], o = 1 in arguments ? arguments[1] : s.rgb.hsv(t)[2];
        if (0 === (o = Math.round(o / 50))) return 30;
        var i = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
        return 2 === o && (i += 60), i
    }, s.hsv.ansi16 = function (t) {
        return s.rgb.ansi16(s.hsv.rgb(t), t[2])
    }, s.rgb.ansi256 = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
    }, s.ansi16.rgb = function (t) {
        var e = t % 10;
        if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
        var n = .5 * (1 + ~~(t > 50));
        return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
    }, s.ansi256.rgb = function (t) {
        if (t >= 232) {
            var e = 10 * (t - 232) + 8;
            return [e, e, e]
        }
        var n;
        return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
    }, s.rgb.hex = function (t) {
        var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
        return "000000".substring(e.length) + e
    }, s.hex.rgb = function (t) {
        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e) return [0, 0, 0];
        var n = e[0];
        3 === e[0].length && (n = n.split("").map(function (t) {
            return t + t
        }).join(""));
        var r = parseInt(n, 16);
        return [r >> 16 & 255, r >> 8 & 255, 255 & r]
    }, s.rgb.hcg = function (t) {
        var e, n, r = t[0] / 255, o = t[1] / 255, i = t[2] / 255, s = Math.max(Math.max(r, o), i),
            a = Math.min(Math.min(r, o), i), u = s - a;
        return e = u < 1 ? a / (1 - u) : 0, n = u <= 0 ? 0 : s === r ? (o - i) / u % 6 : s === o ? 2 + (i - r) / u : 4 + (r - o) / u + 4, n /= 6, [360 * (n %= 1), 100 * u, 100 * e]
    }, s.hsl.hcg = function (t) {
        var e = t[1] / 100, n = t[2] / 100, r = 1, o = 0;
        return (r = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [t[0], 100 * r, 100 * o]
    }, s.hsv.hcg = function (t) {
        var e = t[1] / 100, n = t[2] / 100, r = e * n, o = 0;
        return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
    }, s.hcg.rgb = function (t) {
        var e = t[0] / 360, n = t[1] / 100, r = t[2] / 100;
        if (0 === n) return [255 * r, 255 * r, 255 * r];
        var o, i = [0, 0, 0], s = e % 1 * 6, a = s % 1, u = 1 - a;
        switch (Math.floor(s)) {
            case 0:
                i[0] = 1, i[1] = a, i[2] = 0;
                break;
            case 1:
                i[0] = u, i[1] = 1, i[2] = 0;
                break;
            case 2:
                i[0] = 0, i[1] = 1, i[2] = a;
                break;
            case 3:
                i[0] = 0, i[1] = u, i[2] = 1;
                break;
            case 4:
                i[0] = a, i[1] = 0, i[2] = 1;
                break;
            default:
                i[0] = 1, i[1] = 0, i[2] = u
        }
        return o = (1 - n) * r, [255 * (n * i[0] + o), 255 * (n * i[1] + o), 255 * (n * i[2] + o)]
    }, s.hcg.hsv = function (t) {
        var e = t[1] / 100, n = e + t[2] / 100 * (1 - e), r = 0;
        return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
    }, s.hcg.hsl = function (t) {
        var e = t[1] / 100, n = t[2] / 100 * (1 - e) + .5 * e, r = 0;
        return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n]
    }, s.hcg.hwb = function (t) {
        var e = t[1] / 100, n = e + t[2] / 100 * (1 - e);
        return [t[0], 100 * (n - e), 100 * (1 - n)]
    }, s.hwb.hcg = function (t) {
        var e = t[1] / 100, n = 1 - t[2] / 100, r = n - e, o = 0;
        return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
    }, s.apple.rgb = function (t) {
        return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
    }, s.rgb.apple = function (t) {
        return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
    }, s.gray.rgb = function (t) {
        return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
    }, s.gray.hsl = s.gray.hsv = function (t) {
        return [0, 0, t[0]]
    }, s.gray.hwb = function (t) {
        return [0, 100, t[0]]
    }, s.gray.cmyk = function (t) {
        return [0, 0, 0, t[0]]
    }, s.gray.lab = function (t) {
        return [t[0], 0, 0]
    }, s.gray.hex = function (t) {
        var e = 255 & Math.round(t[0] / 100 * 255), n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
        return "000000".substring(n.length) + n
    }, s.rgb.gray = function (t) {
        return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
    }
}, function (t, e, n) {
    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    !function () {
        "use strict";

        function n() {
            var t = window, e = document;
            if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                var n = t.HTMLElement || t.Element, o = 468, i = {
                        scroll: t.scroll || t.scrollTo,
                        scrollBy: t.scrollBy,
                        elementScroll: n.prototype.scroll || u,
                        scrollIntoView: n.prototype.scrollIntoView
                    }, s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                    a = function (t) {
                        return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                    }(t.navigator.userAgent) ? 1 : 0;
                t.scroll = t.scrollTo = function () {
                    void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? d.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : i.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== r(arguments[0]) ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                }, t.scrollBy = function () {
                    void 0 !== arguments[0] && (c(arguments[0]) ? i.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== r(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : d.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                }, n.prototype.scroll = n.prototype.scrollTo = function () {
                    if (void 0 !== arguments[0]) if (!0 !== c(arguments[0])) {
                        var t = arguments[0].left, e = arguments[0].top;
                        d.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                    } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== r(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
                }, n.prototype.scrollBy = function () {
                    void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior
                    }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                }, n.prototype.scrollIntoView = function () {
                    if (!0 !== c(arguments[0])) {
                        var n = function (t) {
                            var n;
                            do {
                                n = (t = t.parentNode) === e.body
                            } while (!1 === n && !1 === h(t));
                            return n = null, t
                        }(this), r = n.getBoundingClientRect(), o = this.getBoundingClientRect();
                        n !== e.body ? (d.call(this, n, n.scrollLeft + o.left - r.left, n.scrollTop + o.top - r.top), "fixed" !== t.getComputedStyle(n).position && t.scrollBy({
                            left: r.left,
                            top: r.top,
                            behavior: "smooth"
                        })) : t.scrollBy({left: o.left, top: o.top, behavior: "smooth"})
                    } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                }
            }

            function u(t, e) {
                this.scrollLeft = t, this.scrollTop = e
            }

            function c(t) {
                if (null === t || "object" !== r(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                if ("object" === r(t) && "smooth" === t.behavior) return !1;
                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
            }

            function l(t, e) {
                return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
            }

            function f(e, n) {
                var r = t.getComputedStyle(e, null)["overflow" + n];
                return "auto" === r || "scroll" === r
            }

            function h(t) {
                var e = l(t, "Y") && f(t, "Y"), n = l(t, "X") && f(t, "X");
                return e || n
            }

            function p(e) {
                var n, r, i, a = (s() - e.startTime) / o;
                n = function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }(a = a > 1 ? 1 : a), r = e.startX + (e.x - e.startX) * n, i = e.startY + (e.y - e.startY) * n, e.method.call(e.scrollable, r, i), r === e.x && i === e.y || t.requestAnimationFrame(p.bind(t, e))
            }

            function d(n, r, o) {
                var a, c, l, f, h = s();
                n === e.body ? (a = t, c = t.scrollX || t.pageXOffset, l = t.scrollY || t.pageYOffset, f = i.scroll) : (a = n, c = n.scrollLeft, l = n.scrollTop, f = u), p({
                    scrollable: a,
                    method: f,
                    startTime: h,
                    startX: c,
                    startY: l,
                    x: r,
                    y: o
                })
            }
        }

        "object" === r(e) && void 0 !== t ? t.exports = {polyfill: n} : n()
    }()
}, function (t, e, n) {
    "use strict";
    var r = n(66), o = n(69), i = [].slice, s = ["keyword", "gray", "hex"], a = {};
    Object.keys(o).forEach(function (t) {
        a[i.call(o[t].labels).sort().join("")] = t
    });
    var u = {};

    function c(t, e) {
        if (!(this instanceof c)) return new c(t, e);
        if (e && e in s && (e = null), e && !(e in o)) throw new Error("Unknown model: " + e);
        var n, l;
        if (t) if (t instanceof c) this.model = t.model, this.color = t.color.slice(), this.valpha = t.valpha; else if ("string" == typeof t) {
            var f = r.get(t);
            if (null === f) throw new Error("Unable to parse color from string: " + t);
            this.model = f.model, l = o[this.model].channels, this.color = f.value.slice(0, l), this.valpha = "number" == typeof f.value[l] ? f.value[l] : 1
        } else if (t.length) {
            this.model = e || "rgb", l = o[this.model].channels;
            var p = i.call(t, 0, l);
            this.color = h(p, l), this.valpha = "number" == typeof t[l] ? t[l] : 1
        } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [t >> 16 & 255, t >> 8 & 255, 255 & t], this.valpha = 1; else {
            this.valpha = 1;
            var d = Object.keys(t);
            "alpha" in t && (d.splice(d.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
            var y = d.sort().join("");
            if (!(y in a)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
            this.model = a[y];
            var m = o[this.model].labels, v = [];
            for (n = 0; n < m.length; n++) v.push(t[m[n]]);
            this.color = h(v)
        } else this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
        if (u[this.model]) for (l = o[this.model].channels, n = 0; n < l; n++) {
            var b = u[this.model][n];
            b && (this.color[n] = b(this.color[n]))
        }
        this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
    }

    function l(t, e, n) {
        return (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
            (u[t] || (u[t] = []))[e] = n
        }), t = t[0], function (r) {
            var o;
            return arguments.length ? (n && (r = n(r)), (o = this[t]()).color[e] = r, o) : (o = this[t]().color[e], n && (o = n(o)), o)
        }
    }

    function f(t) {
        return function (e) {
            return Math.max(0, Math.min(t, e))
        }
    }

    function h(t, e) {
        for (var n = 0; n < e; n++) "number" != typeof t[n] && (t[n] = 0);
        return t
    }

    c.prototype = {
        toString: function () {
            return this.string()
        },
        toJSON: function () {
            return this[this.model]()
        },
        string: function (t) {
            var e = this.model in r.to ? this : this.rgb(),
                n = 1 === (e = e.round("number" == typeof t ? t : 1)).valpha ? e.color : e.color.concat(this.valpha);
            return r.to[e.model](n)
        },
        percentString: function (t) {
            var e = this.rgb().round("number" == typeof t ? t : 1),
                n = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
            return r.to.rgb.percent(n)
        },
        array: function () {
            return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
        },
        object: function () {
            for (var t = {}, e = o[this.model].channels, n = o[this.model].labels, r = 0; r < e; r++) t[n[r]] = this.color[r];
            return 1 !== this.valpha && (t.alpha = this.valpha), t
        },
        unitArray: function () {
            var t = this.rgb().color;
            return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), t
        },
        unitObject: function () {
            var t = this.rgb().object();
            return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), t
        },
        round: function (t) {
            return t = Math.max(t || 0, 0), new c(this.color.map(function (t) {
                return function (e) {
                    return function (t, e) {
                        return Number(t.toFixed(e))
                    }(e, t)
                }
            }(t)).concat(this.valpha), this.model)
        },
        alpha: function (t) {
            return arguments.length ? new c(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha
        },
        red: l("rgb", 0, f(255)),
        green: l("rgb", 1, f(255)),
        blue: l("rgb", 2, f(255)),
        hue: l(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (t) {
            return (t % 360 + 360) % 360
        }),
        saturationl: l("hsl", 1, f(100)),
        lightness: l("hsl", 2, f(100)),
        saturationv: l("hsv", 1, f(100)),
        value: l("hsv", 2, f(100)),
        chroma: l("hcg", 1, f(100)),
        gray: l("hcg", 2, f(100)),
        white: l("hwb", 1, f(100)),
        wblack: l("hwb", 2, f(100)),
        cyan: l("cmyk", 0, f(100)),
        magenta: l("cmyk", 1, f(100)),
        yellow: l("cmyk", 2, f(100)),
        black: l("cmyk", 3, f(100)),
        x: l("xyz", 0, f(100)),
        y: l("xyz", 1, f(100)),
        z: l("xyz", 2, f(100)),
        l: l("lab", 0, f(100)),
        a: l("lab", 1),
        b: l("lab", 2),
        keyword: function (t) {
            return arguments.length ? new c(t) : o[this.model].keyword(this.color)
        },
        hex: function (t) {
            return arguments.length ? new c(t) : r.to.hex(this.rgb().round().color)
        },
        rgbNumber: function () {
            var t = this.rgb().color;
            return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2]
        },
        luminosity: function () {
            for (var t = this.rgb().color, e = [], n = 0; n < t.length; n++) {
                var r = t[n] / 255;
                e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function (t) {
            var e = this.luminosity(), n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        },
        level: function (t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        isDark: function () {
            var t = this.rgb().color;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        isLight: function () {
            return !this.isDark()
        },
        negate: function () {
            for (var t = this.rgb(), e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
            return t
        },
        lighten: function (t) {
            var e = this.hsl();
            return e.color[2] += e.color[2] * t, e
        },
        darken: function (t) {
            var e = this.hsl();
            return e.color[2] -= e.color[2] * t, e
        },
        saturate: function (t) {
            var e = this.hsl();
            return e.color[1] += e.color[1] * t, e
        },
        desaturate: function (t) {
            var e = this.hsl();
            return e.color[1] -= e.color[1] * t, e
        },
        whiten: function (t) {
            var e = this.hwb();
            return e.color[1] += e.color[1] * t, e
        },
        blacken: function (t) {
            var e = this.hwb();
            return e.color[2] += e.color[2] * t, e
        },
        grayscale: function () {
            var t = this.rgb().color, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return c.rgb(e, e, e)
        },
        fade: function (t) {
            return this.alpha(this.valpha - this.valpha * t)
        },
        opaquer: function (t) {
            return this.alpha(this.valpha + this.valpha * t)
        },
        rotate: function (t) {
            var e = this.hsl(), n = e.color[0];
            return n = (n = (n + t) % 360) < 0 ? 360 + n : n, e.color[0] = n, e
        },
        mix: function (t, e) {
            var n = t.rgb(), r = this.rgb(), o = void 0 === e ? .5 : e, i = 2 * o - 1, s = n.alpha() - r.alpha(),
                a = ((i * s == -1 ? i : (i + s) / (1 + i * s)) + 1) / 2, u = 1 - a;
            return c.rgb(a * n.red() + u * r.red(), a * n.green() + u * r.green(), a * n.blue() + u * r.blue(), n.alpha() * o + r.alpha() * (1 - o))
        }
    }, Object.keys(o).forEach(function (t) {
        if (-1 === s.indexOf(t)) {
            var e = o[t].channels;
            c.prototype[t] = function () {
                if (this.model === t) return new c(this);
                if (arguments.length) return new c(arguments, t);
                var n = "number" == typeof arguments[e] ? e : this.valpha;
                return new c(function (t) {
                    return Array.isArray(t) ? t : [t]
                }(o[this.model][t].raw(this.color)).concat(n), t)
            }, c[t] = function (n) {
                return "number" == typeof n && (n = h(i.call(arguments), e)), new c(n, t)
            }
        }
    }), t.exports = c
}, function (t, e, n) {
    (function (t, e) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        /**
         @license @nocompile
         Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
         Code distributed by Google as part of the polymer project is also
         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
         */
        /**
         @license @nocompile
         Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
         Code distributed by Google as part of the polymer project is also
         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
         */
        (function () {
            "use strict";
            var r, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
                t != Array.prototype && t != Object.prototype && (t[e] = n.value)
            }, i = "undefined" != typeof window && window === this ? this : void 0 !== t && null != t ? t : this;

            function s() {
                s = function () {
                }, i.Symbol || (i.Symbol = u)
            }

            var a, u = function () {
                var t = 0;
                return function (e) {
                    return "jscomp_symbol_" + (e || "") + t++
                }
            }();

            function c() {
                s();
                var t = i.Symbol.iterator;
                t || (t = i.Symbol.iterator = i.Symbol("iterator")), "function" != typeof Array.prototype[t] && o(Array.prototype, t, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return l(this)
                    }
                }), c = function () {
                }
            }

            function l(t) {
                var e = 0;
                return function (t) {
                    return c(), (t = {next: t})[i.Symbol.iterator] = function () {
                        return this
                    }, t
                }(function () {
                    return e < t.length ? {done: !1, value: t[e++]} : {done: !0}
                })
            }

            function f(t) {
                c();
                var e = t[Symbol.iterator];
                return e ? e.call(t) : l(t)
            }

            if ("function" == typeof Object.setPrototypeOf) a = Object.setPrototypeOf; else {
                var h;
                t:{
                    var p = {};
                    try {
                        p.__proto__ = {Pa: !0}, h = p.Pa;
                        break t
                    } catch (t) {
                    }
                    h = !1
                }
                a = h ? function (t, e) {
                    if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
                    return t
                } : null
            }
            var d = a;

            function y() {
                this.f = !1, this.b = null, this.fa = void 0, this.a = 1, this.G = 0, this.c = null
            }

            function m(t) {
                if (t.f) throw new TypeError("Generator is already running");
                t.f = !0
            }

            function v(t, e) {
                t.c = {Ra: e, Va: !0}, t.a = t.G
            }

            function b(t, e) {
                return t.a = 3, {value: e}
            }

            function g(t, e, n, r) {
                try {
                    var o = e.call(t.a.b, n);
                    if (!(o instanceof Object)) throw new TypeError("Iterator result " + o + " is not an object");
                    if (!o.done) return t.a.f = !1, o;
                    var i = o.value
                } catch (e) {
                    return t.a.b = null, v(t.a, e), w(t)
                }
                return t.a.b = null, r.call(t.a, i), w(t)
            }

            function w(t) {
                for (; t.a.a;) try {
                    var e = t.b(t.a);
                    if (e) return t.a.f = !1, {value: e.value, done: !1}
                } catch (e) {
                    t.a.fa = void 0, v(t.a, e)
                }
                if (t.a.f = !1, t.a.c) {
                    if (e = t.a.c, t.a.c = null, e.Va) throw e.Ra;
                    return {value: e.return, done: !0}
                }
                return {value: void 0, done: !0}
            }

            function _(t) {
                this.next = function (e) {
                    return m(t.a), t.a.b ? e = g(t, t.a.b.next, e, t.a.m) : (t.a.m(e), e = w(t)), e
                }, this.throw = function (e) {
                    return m(t.a), t.a.b ? e = g(t, t.a.b.throw, e, t.a.m) : (v(t.a, e), e = w(t)), e
                }, this.return = function (e) {
                    return function (t, e) {
                        m(t.a);
                        var n = t.a.b;
                        return n ? g(t, "return" in n ? n.return : function (t) {
                            return {value: t, done: !0}
                        }, e, t.a.return) : (t.a.return(e), w(t))
                    }(t, e)
                }, c(), this[Symbol.iterator] = function () {
                    return this
                }
            }

            function E(t, e) {
                return e = new _(new function (t) {
                    this.a = new y, this.b = t
                }(e)), d && d(e, t.prototype), e
            }

            y.prototype.m = function (t) {
                this.fa = t
            }, y.prototype.return = function (t) {
                this.c = {return: t}, this.a = this.G
            }, function () {
                if (!function () {
                    var t = document.createEvent("Event");
                    return t.initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented
                }()) {
                    var t = Event.prototype.preventDefault;
                    Event.prototype.preventDefault = function () {
                        this.cancelable && (t.call(this), Object.defineProperty(this, "defaultPrevented", {
                            get: function () {
                                return !0
                            }, configurable: !0
                        }))
                    }
                }
                var e = /Trident/.test(navigator.userAgent);
                if ((!window.CustomEvent || e && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (t, e) {
                    e = e || {};
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail), n
                }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || e && "function" != typeof window.Event) {
                    var n = window.Event;
                    if (window.Event = function (t, e) {
                        e = e || {};
                        var n = document.createEvent("Event");
                        return n.initEvent(t, !!e.bubbles, !!e.cancelable), n
                    }, n) for (var r in n) window.Event[r] = n[r];
                    window.Event.prototype = n.prototype
                }
                if (!window.MouseEvent || e && "function" != typeof window.MouseEvent) {
                    if (e = window.MouseEvent, window.MouseEvent = function (t, e) {
                        e = e || {};
                        var n = document.createEvent("MouseEvent");
                        return n.initMouseEvent(t, !!e.bubbles, !!e.cancelable, e.view || window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), n
                    }, e) for (r in e) window.MouseEvent[r] = e[r];
                    window.MouseEvent.prototype = e.prototype
                }
                Array.from || (Array.from = function (t) {
                    return [].slice.call(t)
                }), Object.assign || (Object.assign = function (t, e) {
                    for (var n, r = [].slice.call(arguments, 1), o = 0; o < r.length; o++) if (n = r[o]) for (var i = t, s = n, a = Object.getOwnPropertyNames(s), u = 0; u < a.length; u++) i[n = a[u]] = s[n];
                    return t
                })
            }(window.WebComponents), function () {
                function t() {
                }

                function e(t, e) {
                    if (!t.childNodes.length) return [];
                    switch (t.nodeType) {
                        case Node.DOCUMENT_NODE:
                            return y.call(t, e);
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            return m.call(t, e);
                        default:
                            return d.call(t, e)
                    }
                }

                var n = "undefined" == typeof HTMLTemplateElement,
                    r = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), o = !1;
                /Trident/.test(navigator.userAgent) && function () {
                    function t(t, e) {
                        if (t instanceof DocumentFragment) for (var r; r = t.firstChild;) n.call(this, r, e); else n.call(this, t, e);
                        return t
                    }

                    o = !0;
                    var e = Node.prototype.cloneNode;
                    Node.prototype.cloneNode = function (t) {
                        return t = e.call(this, t), this instanceof DocumentFragment && (t.__proto__ = DocumentFragment.prototype), t
                    }, DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll, DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector, Object.defineProperties(DocumentFragment.prototype, {
                        nodeType: {
                            get: function () {
                                return Node.DOCUMENT_FRAGMENT_NODE
                            }, configurable: !0
                        }, localName: {
                            get: function () {
                            }, configurable: !0
                        }, nodeName: {
                            get: function () {
                                return "#document-fragment"
                            }, configurable: !0
                        }
                    });
                    var n = Node.prototype.insertBefore;
                    Node.prototype.insertBefore = t;
                    var r = Node.prototype.appendChild;
                    Node.prototype.appendChild = function (e) {
                        return e instanceof DocumentFragment ? t.call(this, e, null) : r.call(this, e), e
                    };
                    var i = Node.prototype.removeChild, s = Node.prototype.replaceChild;
                    Node.prototype.replaceChild = function (e, n) {
                        return e instanceof DocumentFragment ? (t.call(this, e, n), i.call(this, n)) : s.call(this, e, n), n
                    }, Document.prototype.createDocumentFragment = function () {
                        var t = this.createElement("df");
                        return t.__proto__ = DocumentFragment.prototype, t
                    };
                    var a = Document.prototype.importNode;
                    Document.prototype.importNode = function (t, e) {
                        return e = a.call(this, t, e || !1), t instanceof DocumentFragment && (e.__proto__ = DocumentFragment.prototype), e
                    }
                }();
                var i = Node.prototype.cloneNode, s = Document.prototype.createElement,
                    a = Document.prototype.importNode, u = Node.prototype.removeChild, c = Node.prototype.appendChild,
                    l = Node.prototype.replaceChild, f = DOMParser.prototype.parseFromString,
                    h = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
                    p = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes"),
                    d = Element.prototype.querySelectorAll, y = Document.prototype.querySelectorAll,
                    m = DocumentFragment.prototype.querySelectorAll, v = function () {
                        if (!n) {
                            var t = document.createElement("template"), e = document.createElement("template");
                            return e.content.appendChild(document.createElement("div")), t.content.appendChild(e), 0 === (t = t.cloneNode(!0)).content.childNodes.length || 0 === t.content.firstChild.content.childNodes.length || r
                        }
                    }();
                if (n) {
                    var b = document.implementation.createHTMLDocument("template"), g = !0,
                        w = document.createElement("style");
                    w.textContent = "template{display:none;}";
                    var _ = document.head;
                    _.insertBefore(w, _.firstElementChild), t.prototype = Object.create(HTMLElement.prototype);
                    var E = !document.createElement("div").hasOwnProperty("innerHTML");
                    t.R = function (e) {
                        if (!e.content && e.namespaceURI === document.documentElement.namespaceURI) {
                            e.content = b.createDocumentFragment();
                            for (var n; n = e.firstChild;) c.call(e.content, n);
                            if (E) e.__proto__ = t.prototype; else if (e.cloneNode = function (e) {
                                return t.b(this, e)
                            }, g) try {
                                x(e), O(e)
                            } catch (t) {
                                g = !1
                            }
                            t.a(e.content)
                        }
                    };
                    var S = {
                        option: ["select"],
                        thead: ["table"],
                        col: ["colgroup", "table"],
                        tr: ["tbody", "table"],
                        th: ["tr", "tbody", "table"],
                        td: ["tr", "tbody", "table"]
                    }, x = function (e) {
                        Object.defineProperty(e, "innerHTML", {
                            get: function () {
                                return A(this)
                            }, set: function (e) {
                                var n = S[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(e) || ["", ""])[1].toLowerCase()];
                                if (n) for (var r = 0; r < n.length; r++) e = "<" + n[r] + ">" + e + "</" + n[r] + ">";
                                for (b.body.innerHTML = e, t.a(b); this.content.firstChild;) u.call(this.content, this.content.firstChild);
                                if (e = b.body, n) for (r = 0; r < n.length; r++) e = e.lastChild;
                                for (; e.firstChild;) c.call(this.content, e.firstChild)
                            }, configurable: !0
                        })
                    }, O = function (t) {
                        Object.defineProperty(t, "outerHTML", {
                            get: function () {
                                return "<template>" + this.innerHTML + "</template>"
                            }, set: function (t) {
                                if (!this.parentNode) throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                                for (b.body.innerHTML = t, t = this.ownerDocument.createDocumentFragment(); b.body.firstChild;) c.call(t, b.body.firstChild);
                                l.call(this.parentNode, t, this)
                            }, configurable: !0
                        })
                    };
                    x(t.prototype), O(t.prototype), t.a = function (n) {
                        for (var r, o = 0, i = (n = e(n, "template")).length; o < i && (r = n[o]); o++) t.R(r)
                    }, document.addEventListener("DOMContentLoaded", function () {
                        t.a(document)
                    }), Document.prototype.createElement = function () {
                        var e = s.apply(this, arguments);
                        return "template" === e.localName && t.R(e), e
                    }, DOMParser.prototype.parseFromString = function () {
                        var e = f.apply(this, arguments);
                        return t.a(e), e
                    }, Object.defineProperty(HTMLElement.prototype, "innerHTML", {
                        get: function () {
                            return A(this)
                        }, set: function (e) {
                            h.set.call(this, e), t.a(this)
                        }, configurable: !0, enumerable: !0
                    });
                    var T = /[&\u00A0"]/g, C = /[&\u00A0<>]/g, N = function (t) {
                            switch (t) {
                                case"&":
                                    return "&amp;";
                                case"<":
                                    return "&lt;";
                                case">":
                                    return "&gt;";
                                case'"':
                                    return "&quot;";
                                case" ":
                                    return "&nbsp;"
                            }
                        }, k = (w = function (t) {
                            for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
                            return e
                        })("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                        j = w("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
                        A = function t(e, n) {
                            "template" === e.localName && (e = e.content);
                            for (var r, o = "", i = n ? n(e) : p.get.call(e), s = 0, a = i.length; s < a && (r = i[s]); s++) {
                                t:{
                                    var u = r, c = e, l = n;
                                    switch (u.nodeType) {
                                        case Node.ELEMENT_NODE:
                                            for (var f = u.localName, h = "<" + f, d = u.attributes, y = 0; c = d[y]; y++) h += " " + c.name + '="' + c.value.replace(T, N) + '"';
                                            h += ">", u = k[f] ? h : h + t(u, l) + "</" + f + ">";
                                            break t;
                                        case Node.TEXT_NODE:
                                            u = u.data, u = c && j[c.localName] ? u : u.replace(C, N);
                                            break t;
                                        case Node.COMMENT_NODE:
                                            u = "\x3c!--" + u.data + "--\x3e";
                                            break t;
                                        default:
                                            throw window.console.error(u), Error("not implemented")
                                    }
                                }
                                o += u
                            }
                            return o
                        }
                }
                if (n || v) {
                    t.b = function (t, e) {
                        var n = i.call(t, !1);
                        return this.R && this.R(n), e && (c.call(n.content, i.call(t.content, !0)), M(n.content, t.content)), n
                    };
                    var M = function (n, r) {
                        if (r.querySelectorAll && 0 !== (r = e(r, "template")).length) for (var o, i, s = 0, a = (n = e(n, "template")).length; s < a; s++) i = r[s], o = n[s], t && t.R && t.R(i), l.call(o.parentNode, P.call(i, !0), o)
                    }, P = Node.prototype.cloneNode = function (e) {
                        if (!o && r && this instanceof DocumentFragment) {
                            if (!e) return this.ownerDocument.createDocumentFragment();
                            var n = R.call(this.ownerDocument, this, !0)
                        } else n = this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? t.b(this, e) : i.call(this, e);
                        return e && M(n, this), n
                    }, R = Document.prototype.importNode = function (n, r) {
                        if (r = r || !1, "template" === n.localName) return t.b(n, r);
                        var o = a.call(this, n, r);
                        if (r) {
                            M(o, n), n = e(o, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                            for (var i, u = 0; u < n.length; u++) {
                                i = n[u], (r = s.call(document, "script")).textContent = i.textContent;
                                for (var c, f = i.attributes, h = 0; h < f.length; h++) c = f[h], r.setAttribute(c.name, c.value);
                                l.call(i.parentNode, r, i)
                            }
                        }
                        return o
                    }
                }
                n && (window.HTMLTemplateElement = t)
            }();
            var S = setTimeout;

            function x() {
            }

            function O(t) {
                if (!(this instanceof O)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this.J = 0, this.wa = !1, this.A = void 0, this.U = [], j(t, this)
            }

            function T(t, e) {
                for (; 3 === t.J;) t = t.A;
                0 === t.J ? t.U.push(e) : (t.wa = !0, O.a(function () {
                    var n = 1 === t.J ? e.Xa : e.Ya;
                    if (null === n) (1 === t.J ? C : N)(e.qa, t.A); else {
                        try {
                            var r = n(t.A)
                        } catch (t) {
                            return void N(e.qa, t)
                        }
                        C(e.qa, r)
                    }
                }))
            }

            function C(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" === n(e) || "function" == typeof e)) {
                        var r = e.then;
                        if (e instanceof O) return t.J = 3, t.A = e, void k(t);
                        if ("function" == typeof r) return void j(function (t, e) {
                            return function () {
                                t.apply(e, arguments)
                            }
                        }(r, e), t)
                    }
                    t.J = 1, t.A = e, k(t)
                } catch (e) {
                    N(t, e)
                }
            }

            function N(t, e) {
                t.J = 2, t.A = e, k(t)
            }

            function k(t) {
                2 === t.J && 0 === t.U.length && O.a(function () {
                    t.wa || O.b(t.A)
                });
                for (var e = 0, n = t.U.length; e < n; e++) T(t, t.U[e]);
                t.U = null
            }

            function j(t, e) {
                var n = !1;
                try {
                    t(function (t) {
                        n || (n = !0, C(e, t))
                    }, function (t) {
                        n || (n = !0, N(e, t))
                    })
                } catch (t) {
                    n || (n = !0, N(e, t))
                }
            }

            if (O.prototype.catch = function (t) {
                return this.then(null, t)
            }, O.prototype.then = function (t, e) {
                var n = new this.constructor(x);
                return T(this, new function (t, e, n) {
                    this.Xa = "function" == typeof t ? t : null, this.Ya = "function" == typeof e ? e : null, this.qa = n
                }(t, e, n)), n
            }, O.prototype.finally = function (t) {
                var e = this.constructor;
                return this.then(function (n) {
                    return e.resolve(t()).then(function () {
                        return n
                    })
                }, function (n) {
                    return e.resolve(t()).then(function () {
                        return e.reject(n)
                    })
                })
            }, O.c = function (t) {
                return new O(function (e, r) {
                    function o(t, a) {
                        try {
                            if (a && ("object" === n(a) || "function" == typeof a)) {
                                var u = a.then;
                                if ("function" == typeof u) return void u.call(a, function (e) {
                                    o(t, e)
                                }, r)
                            }
                            i[t] = a, 0 == --s && e(i)
                        } catch (t) {
                            r(t)
                        }
                    }

                    if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length) return e([]);
                    for (var s = i.length, a = 0; a < i.length; a++) o(a, i[a])
                })
            }, O.resolve = function (t) {
                return t && "object" === n(t) && t.constructor === O ? t : new O(function (e) {
                    e(t)
                })
            }, O.reject = function (t) {
                return new O(function (e, n) {
                    n(t)
                })
            }, O.f = function (t) {
                return new O(function (e, n) {
                    for (var r = 0, o = t.length; r < o; r++) t[r].then(e, n)
                })
            }, O.a = "function" == typeof e && function (t) {
                e(t)
            } || function (t) {
                S(t, 0)
            }, O.b = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }, !window.Promise && (window.Promise = O, O.prototype.then = O.prototype.then, O.all = O.c, O.race = O.f, O.resolve = O.resolve, O.reject = O.reject, !window.setImmediate)) {
                var A = document.createTextNode(""), M = [];
                new MutationObserver(function () {
                    for (var t = M.length, e = 0; e < t; e++) M[e]();
                    M.splice(0, t)
                }).observe(A, {characterData: !0}), O.a = function (t) {
                    M.push(t), A.textContent = 0 < A.textContent.length ? "" : "a"
                }
            }
            var P = {}, R = Object.create, L = Object.defineProperties, I = Object.defineProperty;

            function D(t, e) {
                return {value: t, configurable: !!(e = void 0 === e ? {} : e).xa, writable: !!e.eb, enumerable: !!e.e}
            }

            var F = void 0;
            try {
                F = 1 === I({}, "y", {
                    get: function () {
                        return 1
                    }
                }).y
            } catch (t) {
                F = !1
            }
            var q = {};
            var H = R(null);

            function U(t) {
                if (this instanceof U) throw new TypeError("Symbol is not a constructor");
                var e = function (t) {
                    t = String(t);
                    for (var e = "", n = 0; q[t + e];) e = n += 1;
                    q[t + e] = 1;
                    var r = "Symbol(" + t + e + ")";
                    return F && I(Object.prototype, r, {
                        get: void 0, set: function (t) {
                            I(this, r, D(t, {xa: !0, eb: !0}))
                        }, configurable: !0, enumerable: !1
                    }), r
                }(t = void 0 === t ? "" : String(t));
                return F ? R(H, {ta: D(t), Ja: D(e)}) : e
            }

            L(U, {
                for: D(function (t) {
                    if (t = String(t), P[t]) return P[t];
                    var e = U(t);
                    return P[t] = e
                }), keyFor: D(function (t) {
                    if (F && (!t || "Symbol" !== t[U.toStringTag])) throw new TypeError(t + " is not a symbol");
                    for (var e in P) if (P[e] === t) return F ? P[e].ta : P[e].substr(7, P[e].length - 8)
                })
            }), L(U, {
                vb: D(U("hasInstance")),
                wb: D(U("isConcatSpreadable")),
                iterator: D(U("iterator")),
                match: D(U("match")),
                replace: D(U("replace")),
                search: D(U("search")),
                yb: D(U("species")),
                split: D(U("split")),
                zb: D(U("toPrimitive")),
                toStringTag: D(U("toStringTag")),
                unscopables: D(U("unscopables"))
            }), L(H, {
                constructor: D(U), toString: D(function () {
                    return this.Ja
                }), valueOf: D(function () {
                    return "Symbol(" + this.ta + ")"
                })
            }), F && I(H, U.toStringTag, D("Symbol", {xa: !0}));
            var z = "function" == typeof Symbol ? Symbol : U;
            if (!window.Symbol) {
                window.Symbol = z;
                var B = window.Symbol.iterator;
                Array.prototype[B] = function t() {
                    var e, n = this;
                    return E(t, function (t) {
                        if (1 == t.a && (e = 0), 3 != t.a) return e < n.length ? t = b(t, n[e]) : (t.a = 0, t = void 0), t;
                        e++, t.a = 2
                    })
                }, Set.prototype[B] = function t() {
                    var e, n, r = this;
                    return E(t, function (t) {
                        if (1 == t.a && (e = [], r.forEach(function (t) {
                            e.push(t)
                        }), n = 0), 3 != t.a) return n < e.length ? t = b(t, e[n]) : (t.a = 0, t = void 0), t;
                        n++, t.a = 2
                    })
                }, Map.prototype[B] = function t() {
                    var e, n, r = this;
                    return E(t, function (t) {
                        if (1 == t.a && (e = [], r.forEach(function (t, n) {
                            e.push([n, t])
                        }), n = 0), 3 != t.a) return n < e.length ? t = b(t, e[n]) : (t.a = 0, t = void 0), t;
                        n++, t.a = 2
                    })
                }, String.prototype[B] = function t() {
                    var e, n = this;
                    return E(t, function (t) {
                        if (1 == t.a && (e = 0), 3 != t.a) return e < n.length ? t = b(t, n[e]) : (t.a = 0, t = void 0), t;
                        e++, t.a = 2
                    })
                }
            }
            window.WebComponents = window.WebComponents || {flags: {}};
            var W = document.querySelector('script[src*="webcomponents-bundle"]'), V = /wc-(.+)/, $ = {};
            if (!$.noOpts) {
                if (location.search.slice(1).split("&").forEach(function (t) {
                    var e;
                    (t = t.split("="))[0] && (e = t[0].match(V)) && ($[e[1]] = t[1] || !0)
                }), W) for (var X, G = 0; X = W.attributes[G]; G++) "src" !== X.name && ($[X.name] = X.value || !0);
                if ($.log && $.log.split) {
                    var Y = $.log.split(",");
                    $.log = {}, Y.forEach(function (t) {
                        $.log[t] = !0
                    })
                } else $.log = {}
            }
            window.WebComponents.flags = $;
            var K = $.shadydom;
            K && (window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = K);
            var J = $.register || $.ce;

            function Z() {
                this.Aa = this.root = null, this.da = !1, this.N = this.$ = this.ma = this.assignedSlot = this.assignedNodes = this.S = null, this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.V = void 0, this.Fa = this.ua = !1, this.Z = {}
            }

            function Q(t) {
                return t.ka || (t.ka = new Z), t.ka
            }

            function tt(t) {
                return t && t.ka
            }

            J && window.customElements && (window.customElements.forcePolyfill = J), Z.prototype.toJSON = function () {
                return {}
            };
            var et = window.ShadyDOM || {};
            et.Ta = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
            var nt = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
            et.K = !!(nt && nt.configurable && nt.get), et.oa = et.force || !et.Ta;
            var rt = navigator.userAgent.match("Trident"), ot = navigator.userAgent.match("Edge");

            function it(t) {
                return (t = tt(t)) && void 0 !== t.firstChild
            }

            function st(t) {
                return "ShadyRoot" === t.La
            }

            function at(t) {
                if (st(t = t.getRootNode())) return t
            }

            void 0 === et.Ca && (et.Ca = et.K && (rt || ot));
            var ut = Element.prototype,
                ct = ut.matches || ut.matchesSelector || ut.mozMatchesSelector || ut.msMatchesSelector || ut.oMatchesSelector || ut.webkitMatchesSelector;

            function lt(t, e) {
                if (t && e) for (var n, r = Object.getOwnPropertyNames(e), o = 0; o < r.length && (n = r[o]); o++) {
                    var i = n, s = t, a = Object.getOwnPropertyDescriptor(e, i);
                    a && Object.defineProperty(s, i, a)
                }
            }

            function ft(t, e) {
                for (var n = [], r = 1; r < arguments.length; ++r) n[r - 1] = arguments[r];
                for (r = 0; r < n.length; r++) lt(t, n[r]);
                return t
            }

            var ht = document.createTextNode(""), pt = 0, dt = [];

            function yt(t) {
                dt.push(t), ht.textContent = pt++
            }

            new MutationObserver(function () {
                for (; dt.length;) try {
                    dt.shift()()
                } catch (t) {
                    throw ht.textContent = pt++, t
                }
            }).observe(ht, {characterData: !0});
            var mt = !!document.contains;

            function vt(t, e) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function bt(t) {
                for (var e = t.length - 1; 0 <= e; e--) {
                    var n = t[e], r = n.getAttribute("id") || n.getAttribute("name");
                    r && "length" !== r && isNaN(r) && (t[r] = n)
                }
                return t.item = function (e) {
                    return t[e]
                }, t.namedItem = function (e) {
                    if ("length" !== e && isNaN(e) && t[e]) return t[e];
                    for (var n = f(t), r = n.next(); !r.done; r = n.next()) if (((r = r.value).getAttribute("id") || r.getAttribute("name")) == e) return r;
                    return null
                }, t
            }

            var gt, wt = [];

            function _t(t) {
                gt || (gt = !0, yt(Et)), wt.push(t)
            }

            function Et() {
                gt = !1;
                for (var t = !!wt.length; wt.length;) wt.shift()();
                return t
            }

            function St() {
                this.a = !1, this.addedNodes = [], this.removedNodes = [], this.ca = new Set
            }

            Et.list = wt, St.prototype.flush = function () {
                if (this.a) {
                    this.a = !1;
                    var t = this.takeRecords();
                    t.length && this.ca.forEach(function (e) {
                        e(t)
                    })
                }
            }, St.prototype.takeRecords = function () {
                if (this.addedNodes.length || this.removedNodes.length) {
                    var t = [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
                    return this.addedNodes = [], this.removedNodes = [], t
                }
                return []
            };
            var xt = Element.prototype.insertBefore, Ot = Element.prototype.replaceChild,
                Tt = Element.prototype.removeChild, Ct = Element.prototype.setAttribute,
                Nt = Element.prototype.removeAttribute, kt = Element.prototype.cloneNode,
                jt = Document.prototype.importNode, At = Element.prototype.addEventListener,
                Mt = Element.prototype.removeEventListener, Pt = Window.prototype.addEventListener,
                Rt = Window.prototype.removeEventListener, Lt = Element.prototype.dispatchEvent,
                It = Node.prototype.contains || HTMLElement.prototype.contains, Dt = Document.prototype.getElementById,
                Ft = Element.prototype.querySelector, qt = DocumentFragment.prototype.querySelector,
                Ht = Document.prototype.querySelector, Ut = Element.prototype.querySelectorAll,
                zt = DocumentFragment.prototype.querySelectorAll, Bt = Document.prototype.querySelectorAll, Wt = {};
            Wt.appendChild = Element.prototype.appendChild, Wt.insertBefore = xt, Wt.replaceChild = Ot, Wt.removeChild = Tt, Wt.setAttribute = Ct, Wt.removeAttribute = Nt, Wt.cloneNode = kt, Wt.importNode = jt, Wt.addEventListener = At, Wt.removeEventListener = Mt, Wt.fb = Pt, Wt.gb = Rt, Wt.dispatchEvent = Lt, Wt.contains = It, Wt.getElementById = Dt, Wt.pb = Ft, Wt.tb = qt, Wt.nb = Ht, Wt.querySelector = function (t) {
                switch (this.nodeType) {
                    case Node.ELEMENT_NODE:
                        return Ft.call(this, t);
                    case Node.DOCUMENT_NODE:
                        return Ht.call(this, t);
                    default:
                        return qt.call(this, t)
                }
            }, Wt.qb = Ut, Wt.ub = zt, Wt.ob = Bt, Wt.querySelectorAll = function (t) {
                switch (this.nodeType) {
                    case Node.ELEMENT_NODE:
                        return Ut.call(this, t);
                    case Node.DOCUMENT_NODE:
                        return Bt.call(this, t);
                    default:
                        return zt.call(this, t)
                }
            };
            var Vt = /[&\u00A0"]/g, $t = /[&\u00A0<>]/g;

            function Xt(t) {
                switch (t) {
                    case"&":
                        return "&amp;";
                    case"<":
                        return "&lt;";
                    case">":
                        return "&gt;";
                    case'"':
                        return "&quot;";
                    case" ":
                        return "&nbsp;"
                }
            }

            function Gt(t) {
                for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
                return e
            }

            var Yt = Gt("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                Kt = Gt("style script xmp iframe noembed noframes plaintext noscript".split(" "));

            function Jt(t, e) {
                "template" === t.localName && (t = t.content);
                for (var n, r = "", o = e ? e(t) : t.childNodes, i = 0, s = o.length; i < s && (n = o[i]); i++) {
                    t:{
                        var a = n, u = t, c = e;
                        switch (a.nodeType) {
                            case Node.ELEMENT_NODE:
                                for (var l = a.localName, f = "<" + l, h = a.attributes, p = 0; u = h[p]; p++) f += " " + u.name + '="' + u.value.replace(Vt, Xt) + '"';
                                f += ">", a = Yt[l] ? f : f + Jt(a, c) + "</" + l + ">";
                                break t;
                            case Node.TEXT_NODE:
                                a = a.data, a = u && Kt[u.localName] ? a : a.replace($t, Xt);
                                break t;
                            case Node.COMMENT_NODE:
                                a = "\x3c!--" + a.data + "--\x3e";
                                break t;
                            default:
                                throw window.console.error(a), Error("not implemented")
                        }
                    }
                    r += a
                }
                return r
            }

            var Zt = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
                Qt = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);

            function te(t) {
                var e = [];
                for (Zt.currentNode = t, t = Zt.firstChild(); t;) e.push(t), t = Zt.nextSibling();
                return e
            }

            var ee = {
                parentNode: function (t) {
                    return Zt.currentNode = t, Zt.parentNode()
                }, firstChild: function (t) {
                    return Zt.currentNode = t, Zt.firstChild()
                }, lastChild: function (t) {
                    return Zt.currentNode = t, Zt.lastChild()
                }, previousSibling: function (t) {
                    return Zt.currentNode = t, Zt.previousSibling()
                }, nextSibling: function (t) {
                    return Zt.currentNode = t, Zt.nextSibling()
                }
            };
            ee.childNodes = te, ee.parentElement = function (t) {
                return Qt.currentNode = t, Qt.parentNode()
            }, ee.firstElementChild = function (t) {
                return Qt.currentNode = t, Qt.firstChild()
            }, ee.lastElementChild = function (t) {
                return Qt.currentNode = t, Qt.lastChild()
            }, ee.previousElementSibling = function (t) {
                return Qt.currentNode = t, Qt.previousSibling()
            }, ee.nextElementSibling = function (t) {
                return Qt.currentNode = t, Qt.nextSibling()
            }, ee.children = function (t) {
                var e = [];
                for (Qt.currentNode = t, t = Qt.firstChild(); t;) e.push(t), t = Qt.nextSibling();
                return bt(e)
            }, ee.innerHTML = function (t) {
                return Jt(t, function (t) {
                    return te(t)
                })
            }, ee.textContent = function (t) {
                switch (t.nodeType) {
                    case Node.ELEMENT_NODE:
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        t = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, null, !1);
                        for (var e, n = ""; e = t.nextNode();) n += e.nodeValue;
                        return n;
                    default:
                        return t.nodeValue
                }
            };
            var ne = et.K, re = [Node.prototype, Element.prototype, HTMLElement.prototype];

            function oe(t) {
                var e;
                t:{
                    for (e = 0; e < re.length; e++) {
                        var n = re[e];
                        if (n.hasOwnProperty(t)) {
                            e = n;
                            break t
                        }
                    }
                    e = void 0
                }
                if (!e) throw Error("Could not find descriptor for " + t);
                return Object.getOwnPropertyDescriptor(e, t)
            }

            var ie = ne ? {
                parentNode: oe("parentNode"),
                firstChild: oe("firstChild"),
                lastChild: oe("lastChild"),
                previousSibling: oe("previousSibling"),
                nextSibling: oe("nextSibling"),
                childNodes: oe("childNodes"),
                parentElement: oe("parentElement"),
                previousElementSibling: oe("previousElementSibling"),
                nextElementSibling: oe("nextElementSibling"),
                innerHTML: oe("innerHTML"),
                textContent: oe("textContent"),
                firstElementChild: oe("firstElementChild"),
                lastElementChild: oe("lastElementChild"),
                children: oe("children")
            } : {}, se = ne ? {
                firstElementChild: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "firstElementChild"),
                lastElementChild: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "lastElementChild"),
                children: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "children")
            } : {}, ae = ne ? {
                firstElementChild: Object.getOwnPropertyDescriptor(Document.prototype, "firstElementChild"),
                lastElementChild: Object.getOwnPropertyDescriptor(Document.prototype, "lastElementChild"),
                children: Object.getOwnPropertyDescriptor(Document.prototype, "children")
            } : {}, ue = {
                za: ie, sb: se, mb: ae, parentNode: function (t) {
                    return ie.parentNode.get.call(t)
                }, firstChild: function (t) {
                    return ie.firstChild.get.call(t)
                }, lastChild: function (t) {
                    return ie.lastChild.get.call(t)
                }, previousSibling: function (t) {
                    return ie.previousSibling.get.call(t)
                }, nextSibling: function (t) {
                    return ie.nextSibling.get.call(t)
                }, childNodes: function (t) {
                    return Array.prototype.slice.call(ie.childNodes.get.call(t))
                }, parentElement: function (t) {
                    return ie.parentElement.get.call(t)
                }, previousElementSibling: function (t) {
                    return ie.previousElementSibling.get.call(t)
                }, nextElementSibling: function (t) {
                    return ie.nextElementSibling.get.call(t)
                }, innerHTML: function (t) {
                    return ie.innerHTML.get.call(t)
                }, textContent: function (t) {
                    return ie.textContent.get.call(t)
                }, children: function (t) {
                    switch (t.nodeType) {
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            return se.children.get.call(t);
                        case Node.DOCUMENT_NODE:
                            return ae.children.get.call(t);
                        default:
                            return ie.children.get.call(t)
                    }
                }, firstElementChild: function (t) {
                    switch (t.nodeType) {
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            return se.firstElementChild.get.call(t);
                        case Node.DOCUMENT_NODE:
                            return ae.firstElementChild.get.call(t);
                        default:
                            return ie.firstElementChild.get.call(t)
                    }
                }, lastElementChild: function (t) {
                    switch (t.nodeType) {
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            return se.lastElementChild.get.call(t);
                        case Node.DOCUMENT_NODE:
                            return ae.lastElementChild.get.call(t);
                        default:
                            return ie.lastElementChild.get.call(t)
                    }
                }
            }, ce = et.Ca ? ue : ee;

            function le(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            }

            var fe = et.K, he = document.implementation.createHTMLDocument("inert"),
                pe = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"), de = pe && pe.get,
                ye = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), me = {
                    parentElement: {
                        get: function () {
                            var t = tt(this);
                            return (t = t && t.parentNode) && t.nodeType !== Node.ELEMENT_NODE && (t = null), void 0 !== t ? t : ce.parentElement(this)
                        }, configurable: !0
                    }, parentNode: {
                        get: function () {
                            var t = tt(this);
                            return void 0 !== (t = t && t.parentNode) ? t : ce.parentNode(this)
                        }, configurable: !0
                    }, nextSibling: {
                        get: function () {
                            var t = tt(this);
                            return void 0 !== (t = t && t.nextSibling) ? t : ce.nextSibling(this)
                        }, configurable: !0
                    }, previousSibling: {
                        get: function () {
                            var t = tt(this);
                            return void 0 !== (t = t && t.previousSibling) ? t : ce.previousSibling(this)
                        }, configurable: !0
                    }, nextElementSibling: {
                        get: function () {
                            var t = tt(this);
                            if (t && void 0 !== t.nextSibling) {
                                for (t = this.nextSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.nextSibling;
                                return t
                            }
                            return ce.nextElementSibling(this)
                        }, configurable: !0
                    }, previousElementSibling: {
                        get: function () {
                            var t = tt(this);
                            if (t && void 0 !== t.previousSibling) {
                                for (t = this.previousSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.previousSibling;
                                return t
                            }
                            return ce.previousElementSibling(this)
                        }, configurable: !0
                    }
                }, ve = {
                    className: {
                        get: function () {
                            return this.getAttribute("class") || ""
                        }, set: function (t) {
                            this.setAttribute("class", t)
                        }, configurable: !0
                    }
                }, be = {
                    childNodes: {
                        get: function () {
                            if (it(this)) {
                                var t = tt(this);
                                if (!t.childNodes) {
                                    t.childNodes = [];
                                    for (var e = this.firstChild; e; e = e.nextSibling) t.childNodes.push(e)
                                }
                                var n = t.childNodes
                            } else n = ce.childNodes(this);
                            return n.item = function (t) {
                                return n[t]
                            }, n
                        }, configurable: !0
                    }, childElementCount: {
                        get: function () {
                            return this.children.length
                        }, configurable: !0
                    }, firstChild: {
                        get: function () {
                            var t = tt(this);
                            return void 0 !== (t = t && t.firstChild) ? t : ce.firstChild(this)
                        }, configurable: !0
                    }, lastChild: {
                        get: function () {
                            var t = tt(this);
                            return void 0 !== (t = t && t.lastChild) ? t : ce.lastChild(this)
                        }, configurable: !0
                    }, textContent: {
                        get: function () {
                            if (it(this)) {
                                for (var t, e = [], n = 0, r = this.childNodes; t = r[n]; n++) t.nodeType !== Node.COMMENT_NODE && e.push(t.textContent);
                                return e.join("")
                            }
                            return ce.textContent(this)
                        }, set: function (t) {
                            switch (void 0 !== t && null !== t || (t = ""), this.nodeType) {
                                case Node.ELEMENT_NODE:
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    if (!it(this) && fe) {
                                        var e = this.firstChild;
                                        (e != this.lastChild || e && e.nodeType != Node.TEXT_NODE) && le(this), ue.za.textContent.set.call(this, t)
                                    } else le(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(t));
                                    break;
                                default:
                                    this.nodeValue = t
                            }
                        }, configurable: !0
                    }, firstElementChild: {
                        get: function () {
                            var t = tt(this);
                            if (t && void 0 !== t.firstChild) {
                                for (t = this.firstChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.nextSibling;
                                return t
                            }
                            return ce.firstElementChild(this)
                        }, configurable: !0
                    }, lastElementChild: {
                        get: function () {
                            var t = tt(this);
                            if (t && void 0 !== t.lastChild) {
                                for (t = this.lastChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.previousSibling;
                                return t
                            }
                            return ce.lastElementChild(this)
                        }, configurable: !0
                    }, children: {
                        get: function () {
                            return it(this) ? bt(Array.prototype.filter.call(this.childNodes, function (t) {
                                return t.nodeType === Node.ELEMENT_NODE
                            })) : ce.children(this)
                        }, configurable: !0
                    }, innerHTML: {
                        get: function () {
                            return it(this) ? Jt("template" === this.localName ? this.content : this) : ce.innerHTML(this)
                        }, set: function (t) {
                            var e = "template" === this.localName ? this.content : this;
                            le(e);
                            var n = this.localName || "div";
                            for (n = this.namespaceURI && this.namespaceURI !== he.namespaceURI ? he.createElementNS(this.namespaceURI, n) : he.createElement(n), fe ? ue.za.innerHTML.set.call(n, t) : n.innerHTML = t, t = "template" === this.localName ? n.content : n; t.firstChild;) e.appendChild(t.firstChild)
                        }, configurable: !0
                    }
                }, ge = {
                    shadowRoot: {
                        get: function () {
                            var t = tt(this);
                            return t && t.Aa || null
                        }, configurable: !0
                    }
                }, we = {
                    activeElement: {
                        get: function () {
                            var t = ye && ye.get ? ye.get.call(document) : et.K ? void 0 : document.activeElement;
                            if (t && t.nodeType) {
                                var e = !!st(this);
                                if (this === document || e && this.host !== t && Wt.contains.call(this.host, t)) {
                                    for (e = at(t); e && e !== this;) e = at(t = e.host);
                                    t = this === document ? e ? null : t : e === this ? t : null
                                } else t = null
                            } else t = null;
                            return t
                        }, set: function () {
                        }, configurable: !0
                    }
                };

            function _e(t, e, n) {
                for (var r in e) {
                    var o = Object.getOwnPropertyDescriptor(t, r);
                    o && o.configurable || !o && n ? Object.defineProperty(t, r, e[r]) : n && console.warn("Could not define", r, "on", t)
                }
            }

            function Ee(t) {
                _e(t, me), _e(t, ve), _e(t, be), _e(t, we)
            }

            var Se = et.K ? function () {
            } : function (t) {
                var e = Q(t);
                e.ua || (e.ua = !0, _e(t, me, !0), _e(t, ve, !0))
            }, xe = et.K ? function () {
            } : function (t) {
                Q(t).Fa || (_e(t, be, !0), _e(t, ge, !0))
            }, Oe = ce.childNodes;

            function Te(t, e, n) {
                Se(t), n = n || null;
                var r = Q(t), o = Q(e), i = n ? Q(n) : null;
                r.previousSibling = n ? i.previousSibling : e.lastChild, (i = tt(r.previousSibling)) && (i.nextSibling = t), (i = tt(r.nextSibling = n)) && (i.previousSibling = t), r.parentNode = e, n ? n === o.firstChild && (o.firstChild = t) : (o.lastChild = t, o.firstChild || (o.firstChild = t)), o.childNodes = null
            }

            function Ce(t) {
                var e = Q(t);
                if (void 0 === e.firstChild) {
                    e.childNodes = null;
                    var n = Oe(t);
                    for (e.firstChild = n[0] || null, e.lastChild = n[n.length - 1] || null, xe(t), e = 0; e < n.length; e++) {
                        var r = n[e], o = Q(r);
                        o.parentNode = t, o.nextSibling = n[e + 1] || null, o.previousSibling = n[e - 1] || null, Se(r)
                    }
                }
            }

            var Ne = ce.parentNode;

            function ke(t, e, n) {
                if (e === t) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
                if (n) {
                    var r = tt(n);
                    if (void 0 !== (r = r && r.parentNode) && r !== t || void 0 === r && Ne(n) !== t) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")
                }
                if (n === e) return e;
                var o, i;
                if (e.parentNode && je(e.parentNode, e), r = !0, !e.__noInsertionPoint) {
                    var s;
                    if (i = o = at(t)) "slot" === e.localName ? s = [e] : e.querySelectorAll && (s = e.querySelectorAll("slot")), i = s && s.length ? s : void 0;
                    if (i) {
                        var a = i;
                        (s = o).a = s.a || [], s.o = s.o || [], s.w = s.w || {}, s.a.push.apply(s.a, a instanceof Array ? a : function (t) {
                            for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                            return n
                        }(f(a)))
                    }
                }
                if (("slot" === t.localName || i) && (o = o || at(t)) && pn(o), it(t)) {
                    if (o = n, xe(t), void 0 !== (i = Q(t)).firstChild && (i.childNodes = null), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        for (i = e.childNodes, s = 0; s < i.length; s++) Te(i[s], t, o);
                        i = void 0 !== (o = Q(e)).firstChild ? null : void 0, o.firstChild = o.lastChild = i, o.childNodes = i
                    } else Te(e, t, o);
                    o = tt(t), Ae(t) ? (pn(o.root), r = !1) : o.root && (r = !1)
                }
                return r ? (r = st(t) ? t.host : t, n ? (n = function t(e) {
                    var n = e;
                    e && "slot" === e.localName && (n = (n = (n = tt(e)) && n.N) && n.length ? n[0] : t(e.nextSibling));
                    return n
                }(n), Wt.insertBefore.call(r, e, n)) : Wt.appendChild.call(r, e)) : e.ownerDocument !== t.ownerDocument && t.ownerDocument.adoptNode(e), Pe(t, e), e
            }

            function je(t, e) {
                if (e.parentNode !== t) throw Error("The node to be removed is not a child of this node: " + e);
                var n = at(e), r = tt(t);
                if (it(t)) {
                    var o = Q(e), i = Q(t);
                    e === i.firstChild && (i.firstChild = o.nextSibling), e === i.lastChild && (i.lastChild = o.previousSibling);
                    var s = o.previousSibling, a = o.nextSibling;
                    if (s && (Q(s).nextSibling = a), a && (Q(a).previousSibling = s), o.parentNode = o.previousSibling = o.nextSibling = void 0, void 0 !== i.childNodes && (i.childNodes = null), Ae(t)) {
                        pn(r.root);
                        var u = !0
                    }
                }
                if (function t(e) {
                    var n = tt(e);
                    if (n && void 0 !== n.V) for (var r, o = 0, i = (n = e.childNodes).length; o < i && (r = n[o]); o++) t(r);
                    (e = tt(e)) && (e.V = void 0)
                }(e), n) {
                    if ((o = t && "slot" === t.localName) && (u = !0), n.o) {
                        for (d in bn(n), i = n.w) for (s = i[d], a = 0; a < s.length; a++) {
                            var c = s[a];
                            if (vt(e, c)) {
                                s.splice(a, 1);
                                var l = n.o.indexOf(c);
                                if (0 <= l && n.o.splice(l, 1), a--, c = (l = tt(c)).N) for (var f = 0; f < c.length; f++) {
                                    var h = c[f], p = an(h);
                                    p && Wt.removeChild.call(p, h)
                                }
                                l.N = [], l.assignedNodes = [], l = !0
                            }
                        }
                        var d = l
                    } else d = void 0;
                    (d || o) && pn(n)
                }
                return u || (u = st(t) ? t.host : t, (!r.root && "slot" !== e.localName || u === Ne(e)) && Wt.removeChild.call(u, e)), Pe(t, null, e), e
            }

            function Ae(t) {
                return (t = (t = tt(t)) && t.root) && _n(t)
            }

            function Me(t, e) {
                if ("slot" === e) Ae(t = t.parentNode) && pn(tt(t).root); else if ("slot" === t.localName && "name" === e && (e = at(t))) {
                    if (e.o) {
                        bn(e);
                        var n = t.Ia, r = gn(t);
                        if (r !== n) {
                            var o = (n = e.w[n]).indexOf(t);
                            0 <= o && n.splice(o, 1), (n = e.w[r] || (e.w[r] = [])).push(t), 1 < n.length && (e.w[r] = wn(n))
                        }
                    }
                    pn(e)
                }
            }

            function Pe(t, e, n) {
                (t = (t = tt(t)) && t.S) && (e && t.addedNodes.push(e), n && t.removedNodes.push(n), function (t) {
                    t.a || (t.a = !0, yt(function () {
                        t.flush()
                    }))
                }(t))
            }

            function Re(t, e, n) {
                var r = [];
                return function t(e, n, r, o) {
                    for (var i, s = 0, a = e.length; s < a && (i = e[s]); s++) {
                        var u;
                        if (u = i.nodeType === Node.ELEMENT_NODE) {
                            var c = n, l = r, f = o, h = c(u = i);
                            h && f.push(u), l && l(h) ? u = h : (t(u.childNodes, c, l, f), u = void 0)
                        }
                        if (u) break
                    }
                }(t.childNodes, e, n, r), r
            }

            var Le = null;

            function Ie(t, e, n) {
                Le || (Le = window.ShadyCSS && window.ShadyCSS.ScopingShim), Le && "class" === e ? Le.setElementClass(t, n) : (Wt.setAttribute.call(t, e, n), Me(t, e))
            }

            var De = "__eventWrappers" + Date.now(), Fe = function () {
                var t = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
                return t ? function (e) {
                    return t.get.call(e)
                } : null
            }(), qe = {
                blur: !0,
                focus: !0,
                focusin: !0,
                focusout: !0,
                click: !0,
                dblclick: !0,
                mousedown: !0,
                mouseenter: !0,
                mouseleave: !0,
                mousemove: !0,
                mouseout: !0,
                mouseover: !0,
                mouseup: !0,
                wheel: !0,
                beforeinput: !0,
                input: !0,
                keydown: !0,
                keyup: !0,
                compositionstart: !0,
                compositionupdate: !0,
                compositionend: !0,
                touchstart: !0,
                touchend: !0,
                touchmove: !0,
                touchcancel: !0,
                pointerover: !0,
                pointerenter: !0,
                pointerdown: !0,
                pointermove: !0,
                pointerup: !0,
                pointercancel: !0,
                pointerout: !0,
                pointerleave: !0,
                gotpointercapture: !0,
                lostpointercapture: !0,
                dragstart: !0,
                drag: !0,
                dragenter: !0,
                dragleave: !0,
                dragover: !0,
                drop: !0,
                dragend: !0,
                DOMActivate: !0,
                DOMFocusIn: !0,
                DOMFocusOut: !0,
                keypress: !0
            }, He = {
                DOMAttrModified: !0,
                DOMAttributeNameChanged: !0,
                DOMCharacterDataModified: !0,
                DOMElementNameChanged: !0,
                DOMNodeInserted: !0,
                DOMNodeInsertedIntoDocument: !0,
                DOMNodeRemoved: !0,
                DOMNodeRemovedFromDocument: !0,
                DOMSubtreeModified: !0
            };

            function Ue(t, e) {
                var n = [], r = t;
                for (t = t === window ? window : t.getRootNode(); r;) n.push(r), r = r.assignedSlot ? r.assignedSlot : r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host && (e || r !== t) ? r.host : r.parentNode;
                return n[n.length - 1] === document && n.push(window), n
            }

            function ze(t, e) {
                if (!st) return t;
                t = Ue(t, !0);
                for (var n, r, o, i, s = 0; s < e.length; s++) if ((o = (n = e[s]) === window ? window : n.getRootNode()) !== r && (i = t.indexOf(o), r = o), !st(o) || -1 < i) return n
            }

            var Be = {
                get composed() {
                    return void 0 === this.Y && (Fe ? this.Y = Fe(this) : !1 !== this.isTrusted && (this.Y = qe[this.type])), this.Y || !1
                }, composedPath: function () {
                    return this.sa || (this.sa = Ue(this.__target, this.composed)), this.sa
                }, get target() {
                    return ze(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
                }, get relatedTarget() {
                    return this.ja ? (this.va || (this.va = Ue(this.ja, !0)), ze(this.currentTarget || this.__previousCurrentTarget, this.va)) : null
                }, stopPropagation: function () {
                    Event.prototype.stopPropagation.call(this), this.ia = !0
                }, stopImmediatePropagation: function () {
                    Event.prototype.stopImmediatePropagation.call(this), this.ia = this.Ea = !0
                }
            };

            function We(t) {
                function e(e, n) {
                    return (e = new t(e, n)).Y = n && !!n.composed, e
                }

                return function (t, e) {
                    for (var n in e) t[n] = e[n]
                }(e, t), e.prototype = t.prototype, e
            }

            var Ve = {focus: !0, blur: !0};

            function $e(t) {
                return t.__target !== t.target || t.ja !== t.relatedTarget
            }

            function Xe(t, e, n) {
                if (n = e.__handlers && e.__handlers[t.type] && e.__handlers[t.type][n]) for (var r, o = 0; (r = n[o]) && (!$e(t) || t.target !== t.relatedTarget) && (r.call(e, t), !t.Ea); o++) ;
            }

            function Ge(t) {
                var e, n = t.composedPath();
                Object.defineProperty(t, "currentTarget", {
                    get: function () {
                        return o
                    }, configurable: !0
                });
                for (var r = n.length - 1; 0 <= r; r--) {
                    var o = n[r];
                    if (Xe(t, o, "capture"), t.ia) return
                }
                for (Object.defineProperty(t, "eventPhase", {
                    get: function () {
                        return Event.AT_TARGET
                    }
                }), r = 0; r < n.length; r++) {
                    var i = tt(o = n[r]);
                    if (i = i && i.root, (0 === r || i && i === e) && (Xe(t, o, "bubble"), o !== window && (e = o.getRootNode()), t.ia)) break
                }
            }

            function Ye(t, e, n, r, o, i) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s], u = a.type, c = a.capture, l = a.once, f = a.passive;
                    if (e === a.node && n === u && r === c && o === l && i === f) return s
                }
                return -1
            }

            function Ke(t, e, r) {
                if (e) {
                    var o = n(e);
                    if (("function" === o || "object" === o) && ("object" !== o || e.handleEvent && "function" == typeof e.handleEvent)) {
                        var i = this instanceof Window ? Wt.fb : Wt.addEventListener;
                        if (He[t]) return i.call(this, t, e, r);
                        if (r && "object" === n(r)) var s = !!r.capture, a = !!r.once,
                            u = !!r.passive; else s = !!r, u = a = !1;
                        var c = r && r.la || this, l = e[De];
                        if (l) {
                            if (-1 < Ye(l, c, t, s, a, u)) return
                        } else e[De] = [];
                        l = function (n) {
                            if (a && this.removeEventListener(t, e, r), n.__target || Ze(n), c !== this) {
                                var i = Object.getOwnPropertyDescriptor(n, "currentTarget");
                                Object.defineProperty(n, "currentTarget", {
                                    get: function () {
                                        return c
                                    }, configurable: !0
                                })
                            }
                            if (n.__previousCurrentTarget = n.currentTarget, (!st(c) || -1 != n.composedPath().indexOf(c)) && (n.composed || -1 < n.composedPath().indexOf(c))) if ($e(n) && n.target === n.relatedTarget) n.eventPhase === Event.BUBBLING_PHASE && n.stopImmediatePropagation(); else if (n.eventPhase === Event.CAPTURING_PHASE || n.bubbles || n.target === c || c instanceof Window) {
                                var s = "function" === o ? e.call(c, n) : e.handleEvent && e.handleEvent(n);
                                return c !== this && (i ? (Object.defineProperty(n, "currentTarget", i), i = null) : delete n.currentTarget), s
                            }
                        }, e[De].push({
                            node: c,
                            type: t,
                            capture: s,
                            once: a,
                            passive: u,
                            hb: l
                        }), Ve[t] ? (this.__handlers = this.__handlers || {}, this.__handlers[t] = this.__handlers[t] || {
                            capture: [],
                            bubble: []
                        }, this.__handlers[t][s ? "capture" : "bubble"].push(l)) : i.call(this, t, l, r)
                    }
                }
            }

            function Je(t, e, r) {
                if (e) {
                    var o = this instanceof Window ? Wt.gb : Wt.removeEventListener;
                    if (He[t]) return o.call(this, t, e, r);
                    if (r && "object" === n(r)) var i = !!r.capture, s = !!r.once,
                        a = !!r.passive; else i = !!r, a = s = !1;
                    var u = r && r.la || this, c = void 0, l = null;
                    try {
                        l = e[De]
                    } catch (t) {
                    }
                    l && (-1 < (s = Ye(l, u, t, i, s, a)) && (c = l.splice(s, 1)[0].hb, l.length || (e[De] = void 0))), o.call(this, t, c || e, r), c && Ve[t] && this.__handlers && this.__handlers[t] && (-1 < (c = (t = this.__handlers[t][i ? "capture" : "bubble"]).indexOf(c)) && t.splice(c, 1))
                }
            }

            function Ze(t) {
                if (t.__target = t.target, t.ja = t.relatedTarget, et.K) {
                    var e = Object.getPrototypeOf(t);
                    if (!e.hasOwnProperty("__patchProto")) {
                        var n = Object.create(e);
                        n.jb = e, lt(n, Be), e.__patchProto = n
                    }
                    t.__proto__ = e.__patchProto
                } else lt(t, Be)
            }

            var Qe = We(window.Event), tn = We(window.CustomEvent), en = We(window.MouseEvent);

            function nn(t, e) {
                return {index: t, W: [], ba: e}
            }

            function rn(t, e, n, r) {
                var o = 0, i = 0, s = 0, a = 0, u = Math.min(e - o, r - i);
                if (0 == o && 0 == i) t:{
                    for (s = 0; s < u; s++) if (t[s] !== n[s]) break t;
                    s = u
                }
                if (e == t.length && r == n.length) {
                    a = t.length;
                    for (var c = n.length, l = 0; l < u - s && on(t[--a], n[--c]);) l++;
                    a = l
                }
                if (i += s, r -= a, 0 == (e -= a) - (o += s) && 0 == r - i) return [];
                if (o == e) {
                    for (e = nn(o, 0); i < r;) e.W.push(n[i++]);
                    return [e]
                }
                if (i == r) return [nn(o, e - o)];
                for (r = r - (s = i) + 1, a = e - (u = o) + 1, e = Array(r), c = 0; c < r; c++) e[c] = Array(a), e[c][0] = c;
                for (c = 0; c < a; c++) e[0][c] = c;
                for (c = 1; c < r; c++) for (l = 1; l < a; l++) if (t[u + l - 1] === n[s + c - 1]) e[c][l] = e[c - 1][l - 1]; else {
                    var f = e[c - 1][l] + 1, h = e[c][l - 1] + 1;
                    e[c][l] = f < h ? f : h
                }
                for (u = e.length - 1, s = e[0].length - 1, r = e[u][s], t = []; 0 < u || 0 < s;) 0 == u ? (t.push(2), s--) : 0 == s ? (t.push(3), u--) : (a = e[u - 1][s - 1], (f = (c = e[u - 1][s]) < (l = e[u][s - 1]) ? c < a ? c : a : l < a ? l : a) == a ? (a == r ? t.push(0) : (t.push(1), r = a), u--, s--) : f == c ? (t.push(3), u--, r = c) : (t.push(2), s--, r = l));
                for (t.reverse(), e = void 0, u = [], s = 0; s < t.length; s++) switch (t[s]) {
                    case 0:
                        e && (u.push(e), e = void 0), o++, i++;
                        break;
                    case 1:
                        e || (e = nn(o, 0)), e.ba++, o++, e.W.push(n[i]), i++;
                        break;
                    case 2:
                        e || (e = nn(o, 0)), e.ba++, o++;
                        break;
                    case 3:
                        e || (e = nn(o, 0)), e.W.push(n[i]), i++
                }
                return e && u.push(e), u
            }

            function on(t, e) {
                return t === e
            }

            var sn, an = ce.parentNode, un = ce.childNodes, cn = {},
                ln = et.deferConnectionCallbacks && "loading" === document.readyState;

            function fn(t) {
                var e = [];
                do {
                    e.unshift(t)
                } while (t = t.parentNode);
                return e
            }

            function hn(t, e, n) {
                if (t !== cn) throw new TypeError("Illegal constructor");
                this.La = "ShadyRoot", this.host = e, this.c = n && n.mode, Ce(e), (t = Q(e)).root = this, t.Aa = "closed" !== this.c ? this : null, (t = Q(this)).firstChild = t.lastChild = t.parentNode = t.nextSibling = t.previousSibling = null, t.childNodes = [], this.b = this.aa = !1, this.a = this.w = this.o = null, pn(this)
            }

            function pn(t) {
                t.aa || (t.aa = !0, _t(function () {
                    return dn(t)
                }))
            }

            function dn(t) {
                for (var e; t;) {
                    t.aa && (e = t);
                    t:{
                        var n = t;
                        if (st(t = n.host.getRootNode())) for (var r = n.host.childNodes, o = 0; o < r.length; o++) if ("slot" == (n = r[o]).localName) break t;
                        t = void 0
                    }
                }
                e && e._renderRoot()
            }

            function yn(t, e, n) {
                var r = Q(e), o = r.$;
                r.$ = null, n || (n = (t = t.w[e.slot || "__catchall"]) && t[0]), n ? (Q(n).assignedNodes.push(e), r.assignedSlot = n) : r.assignedSlot = void 0, o !== r.assignedSlot && r.assignedSlot && (Q(r.assignedSlot).da = !0)
            }

            function mn(t, e, n) {
                for (var r, o = 0; o < n.length && (r = n[o]); o++) if ("slot" == r.localName) {
                    var i = tt(r).assignedNodes;
                    i && i.length && mn(t, e, i)
                } else e.push(n[o])
            }

            function vn(t, e) {
                Wt.dispatchEvent.call(e, new Event("slotchange")), (e = tt(e)).assignedSlot && vn(t, e.assignedSlot)
            }

            function bn(t) {
                if (t.a && t.a.length) {
                    for (var e, n = t.a, r = 0; r < n.length; r++) {
                        var o = n[r];
                        Ce(o), Ce(o.parentNode);
                        var i = gn(o);
                        t.w[i] ? ((e = e || {})[i] = !0, t.w[i].push(o)) : t.w[i] = [o], t.o.push(o)
                    }
                    if (e) for (var s in e) t.w[s] = wn(t.w[s]);
                    t.a = []
                }
            }

            function gn(t) {
                var e = t.name || t.getAttribute("name") || "__catchall";
                return t.Ia = e
            }

            function wn(t) {
                return t.sort(function (t, e) {
                    t = fn(t);
                    for (var n = fn(e), r = 0; r < t.length; r++) {
                        e = t[r];
                        var o = n[r];
                        if (e !== o) return (t = Array.from(e.parentNode.childNodes)).indexOf(e) - t.indexOf(o)
                    }
                })
            }

            function _n(t) {
                return bn(t), !(!t.o || !t.o.length)
            }

            if (hn.prototype._renderRoot = function () {
                var t = ln;
                if (ln = !0, this.aa = !1, this.o) {
                    bn(this);
                    for (var e, n = 0; n < this.o.length; n++) {
                        var r = tt(e = this.o[n]), o = r.assignedNodes;
                        if (r.assignedNodes = [], r.N = [], r.ma = o) for (r = 0; r < o.length; r++) {
                            var i = tt(o[r]);
                            i.$ = i.assignedSlot, i.assignedSlot === e && (i.assignedSlot = null)
                        }
                    }
                    for (e = this.host.firstChild; e; e = e.nextSibling) yn(this, e);
                    for (n = 0; n < this.o.length; n++) {
                        if (!(o = tt(e = this.o[n])).assignedNodes.length) for (r = e.firstChild; r; r = r.nextSibling) yn(this, r, e);
                        if ((r = (r = tt(e.parentNode)) && r.root) && _n(r) && r._renderRoot(), mn(this, o.N, o.assignedNodes), r = o.ma) {
                            for (i = 0; i < r.length; i++) tt(r[i]).$ = null;
                            o.ma = null, r.length > o.assignedNodes.length && (o.da = !0)
                        }
                        o.da && (o.da = !1, vn(this, e))
                    }
                    for (n = this.o, e = [], o = 0; o < n.length; o++) (i = tt(r = n[o].parentNode)) && i.root || !(0 > e.indexOf(r)) || e.push(r);
                    for (n = 0; n < e.length; n++) {
                        r = (o = e[n]) === this ? this.host : o, i = [], o = o.childNodes;
                        for (var s = 0; s < o.length; s++) {
                            var a = o[s];
                            if ("slot" == a.localName) {
                                a = tt(a).N;
                                for (var u = 0; u < a.length; u++) i.push(a[u])
                            } else i.push(a)
                        }
                        o = void 0, s = un(r), a = rn(i, i.length, s, s.length);
                        for (var c = u = 0; u < a.length && (o = a[u]); u++) {
                            for (var l, f = 0; f < o.W.length && (l = o.W[f]); f++) an(l) === r && Wt.removeChild.call(r, l), s.splice(o.index + c, 1);
                            c -= o.ba
                        }
                        for (c = 0; c < a.length && (o = a[c]); c++) for (u = s[o.index], f = o.index; f < o.index + o.ba; f++) l = i[f], Wt.insertBefore.call(r, l, u), s.splice(f, 0, l)
                    }
                }
                if (!this.b) for (e = 0, n = (l = this.host.childNodes).length; e < n; e++) r = tt(o = l[e]), an(o) !== this.host || "slot" !== o.localName && r.assignedSlot || Wt.removeChild.call(this.host, o);
                this.b = !0, ln = t, sn && sn()
            }, window.customElements && et.oa) {
                var En = new Map;
                sn = function () {
                    var t = Array.from(En);
                    En.clear();
                    for (var e = (t = f(t)).next(); !e.done; e = t.next()) {
                        var n = (e = f(e.value)).next().value;
                        e.next().value ? n.Ga() : n.Ha()
                    }
                }, ln && document.addEventListener("readystatechange", function () {
                    ln = !1, sn()
                }, {once: !0});
                var Sn = window.customElements.define;
                Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
                    value: function (t, e) {
                        var n = e.prototype.connectedCallback, r = e.prototype.disconnectedCallback;
                        Sn.call(window.customElements, t, function (t, e, n) {
                            var r = 0, o = "__isConnected" + r++;
                            return (e || n) && (t.prototype.connectedCallback = t.prototype.Ga = function () {
                                ln ? En.set(this, !0) : this[o] || (this[o] = !0, e && e.call(this))
                            }, t.prototype.disconnectedCallback = t.prototype.Ha = function () {
                                ln ? this.isConnected || En.set(this, !1) : this[o] && (this[o] = !1, n && n.call(this))
                            }), t
                        }(e, n, r)), e.prototype.connectedCallback = n, e.prototype.disconnectedCallback = r
                    }
                })
            }

            function xn(t) {
                var e = t.getRootNode();
                return st(e) && dn(e), (t = tt(t)) && t.assignedSlot || null
            }

            var On = {addEventListener: Ke.bind(window), removeEventListener: Je.bind(window)}, Tn = {
                addEventListener: Ke, removeEventListener: Je, appendChild: function (t) {
                    return ke(this, t)
                }, insertBefore: function (t, e) {
                    return ke(this, t, e)
                }, removeChild: function (t) {
                    return je(this, t)
                }, replaceChild: function (t, e) {
                    return ke(this, t, e), je(this, e), t
                }, cloneNode: function (t) {
                    if ("template" == this.localName) var e = Wt.cloneNode.call(this, t); else if (e = Wt.cloneNode.call(this, !1), t && e.nodeType !== Node.ATTRIBUTE_NODE) {
                        t = this.childNodes;
                        for (var n, r = 0; r < t.length; r++) n = t[r].cloneNode(!0), e.appendChild(n)
                    }
                    return e
                }, getRootNode: function () {
                    return function t(e) {
                        if (e && e.nodeType) {
                            var n = Q(e), r = n.V;
                            return void 0 === r && (st(e) ? (r = e, n.V = r) : (r = (r = e.parentNode) ? t(r) : e, Wt.contains.call(document.documentElement, e) && (n.V = r))), r
                        }
                    }(this)
                }, contains: function (t) {
                    return vt(this, t)
                }, dispatchEvent: function (t) {
                    return Et(), Wt.dispatchEvent.call(this, t)
                }
            };
            Object.defineProperties(Tn, {
                isConnected: {
                    get: function () {
                        if (de && de.call(this)) return !0;
                        if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
                        var t = this.ownerDocument;
                        if (mt) {
                            if (Wt.contains.call(t, this)) return !0
                        } else if (t.documentElement && Wt.contains.call(t.documentElement, this)) return !0;
                        for (t = this; t && !(t instanceof Document);) t = t.parentNode || (st(t) ? t.host : void 0);
                        return !!(t && t instanceof Document)
                    }, configurable: !0
                }
            });
            var Cn = {
                get assignedSlot() {
                    return xn(this)
                }
            }, Nn = {
                querySelector: function (t) {
                    return Re(this, function (e) {
                        return ct.call(e, t)
                    }, function (t) {
                        return !!t
                    })[0] || null
                }, querySelectorAll: function (t, e) {
                    if (e) {
                        e = Array.prototype.slice.call(Wt.querySelectorAll.call(this, t));
                        var n = this.getRootNode();
                        return e.filter(function (t) {
                            return t.getRootNode() == n
                        })
                    }
                    return Re(this, function (e) {
                        return ct.call(e, t)
                    })
                }
            }, kn = {
                assignedNodes: function (t) {
                    if ("slot" === this.localName) {
                        var e = this.getRootNode();
                        return st(e) && dn(e), (e = tt(this)) && (t && t.flatten ? e.N : e.assignedNodes) || []
                    }
                }
            }, jn = ft({
                setAttribute: function (t, e) {
                    Ie(this, t, e)
                }, removeAttribute: function (t) {
                    Wt.removeAttribute.call(this, t), Me(this, t)
                }, attachShadow: function (t) {
                    if (!this) throw"Must provide a host.";
                    if (!t) throw"Not enough arguments.";
                    return new hn(cn, this, t)
                }, get slot() {
                    return this.getAttribute("slot")
                }, set slot(t) {
                    Ie(this, "slot", t)
                }, get assignedSlot() {
                    return xn(this)
                }
            }, Nn, kn);
            Object.defineProperties(jn, ge);
            var An = ft({
                importNode: function (t, e) {
                    return function t(e, n) {
                        if (e.ownerDocument !== document || "template" === e.localName) return Wt.importNode.call(document, e, n);
                        var r = Wt.importNode.call(document, e, !1);
                        if (n) {
                            e = e.childNodes, n = 0;
                            for (var o; n < e.length; n++) o = t(e[n], !0), r.appendChild(o)
                        }
                        return r
                    }(t, e)
                }, getElementById: function (t) {
                    return Re(this, function (e) {
                        return e.id == t
                    }, function (t) {
                        return !!t
                    })[0] || null
                }
            }, Nn);
            Object.defineProperties(An, {_activeElement: we.activeElement});
            for (var Mn = HTMLElement.prototype.blur, Pn = {
                blur: function () {
                    var t = tt(this);
                    (t = (t = t && t.root) && t.activeElement) ? t.blur() : Mn.call(this)
                }
            }, Rn = {}, Ln = f(Object.getOwnPropertyNames(Document.prototype)), In = Ln.next(); !In.done; Rn = {H: Rn.H}, In = Ln.next()) Rn.H = In.value, "on" === Rn.H.substring(0, 2) && Object.defineProperty(Pn, Rn.H, {
                set: function (t) {
                    return function (e) {
                        var n = Q(this), r = t.H.substring(2);
                        n.Z[t.H] && this.removeEventListener(r, n.Z[t.H]), this.addEventListener(r, e, {}), n.Z[t.H] = e
                    }
                }(Rn), get: function (t) {
                    return function () {
                        var e = tt(this);
                        return e && e.Z[t.H]
                    }
                }(Rn), configurable: !0
            });
            var Dn = {
                addEventListener: function (t, e, r) {
                    "object" !== n(r) && (r = {capture: !!r}), r.la = this, this.host.addEventListener(t, e, r)
                }, removeEventListener: function (t, e, r) {
                    "object" !== n(r) && (r = {capture: !!r}), r.la = this, this.host.removeEventListener(t, e, r)
                }, getElementById: function (t) {
                    return Re(this, function (e) {
                        return e.id == t
                    }, function (t) {
                        return !!t
                    })[0] || null
                }
            };

            function Fn(t, e) {
                for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                    var o = n[r], i = Object.getOwnPropertyDescriptor(e, o);
                    i.value ? t[o] = i.value : Object.defineProperty(t, o, i)
                }
            }

            if (et.oa) {
                var qn = {
                    inUse: et.oa, patch: function (t) {
                        return xe(t), Se(t), t
                    }, isShadyRoot: st, enqueue: _t, flush: Et, settings: et, filterMutations: function (t, e) {
                        var n = e.getRootNode();
                        return t.map(function (t) {
                            var e = n === t.target.getRootNode();
                            if (e && t.addedNodes) {
                                if ((e = Array.from(t.addedNodes).filter(function (t) {
                                    return n === t.getRootNode()
                                })).length) return t = Object.create(t), Object.defineProperty(t, "addedNodes", {
                                    value: e,
                                    configurable: !0
                                }), t
                            } else if (e) return t
                        }).filter(function (t) {
                            return t
                        })
                    }, observeChildren: function (t, e) {
                        var n = Q(t);
                        n.S || (n.S = new St), n.S.ca.add(e);
                        var r = n.S;
                        return {
                            Ka: e, P: r, Ma: t, takeRecords: function () {
                                return r.takeRecords()
                            }
                        }
                    }, unobserveChildren: function (t) {
                        var e = t && t.P;
                        e && (e.ca.delete(t.Ka), e.ca.size || (Q(t.Ma).S = null))
                    }, nativeMethods: Wt, nativeTree: ce, deferConnectionCallbacks: et.deferConnectionCallbacks
                };
                window.ShadyDOM = qn, function () {
                    if (window.Event = Qe, window.CustomEvent = tn, window.MouseEvent = en, function () {
                        for (var t in Ve) window.addEventListener(t, function (t) {
                            t.__target || (Ze(t), Ge(t))
                        }, !0)
                    }(), !Fe && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
                        var t = function () {
                            var t = new MouseEvent("click", {bubbles: !0, cancelable: !0, composed: !0});
                            this.dispatchEvent(t)
                        };
                        Element.prototype.click ? Element.prototype.click = t : HTMLElement.prototype.click && (HTMLElement.prototype.click = t)
                    }
                }();
                var Hn = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
                Fn(hn.prototype, Dn), Fn(window.Node.prototype, Tn), Fn(window.Window.prototype, On), Fn(window.Text.prototype, Cn), Fn(window.DocumentFragment.prototype, Nn), Fn(window.Element.prototype, jn), Fn(window.Document.prototype, An), window.HTMLSlotElement && Fn(window.HTMLSlotElement.prototype, kn), Fn(Hn.prototype, Pn), et.K && (Ee(window.Node.prototype), Ee(window.Text.prototype), Ee(window.DocumentFragment.prototype), Ee(window.Element.prototype), Ee(Hn.prototype), Ee(window.Document.prototype), window.HTMLSlotElement && Ee(window.HTMLSlotElement.prototype)), function () {
                    var t = hn.prototype;
                    t.__proto__ = DocumentFragment.prototype, _e(t, me, !0), _e(t, be, !0), _e(t, we, !0), Object.defineProperties(t, {
                        nodeType: {
                            value: Node.DOCUMENT_FRAGMENT_NODE,
                            configurable: !0
                        },
                        nodeName: {value: "#document-fragment", configurable: !0},
                        nodeValue: {value: null, configurable: !0}
                    }), ["localName", "namespaceURI", "prefix"].forEach(function (e) {
                        Object.defineProperty(t, e, {value: void 0, configurable: !0})
                    }), ["ownerDocument", "baseURI", "isConnected"].forEach(function (e) {
                        Object.defineProperty(t, e, {
                            get: function () {
                                return this.host[e]
                            }, configurable: !0
                        })
                    })
                }(), window.ShadowRoot = hn
            }
            var Un = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

            function zn(t) {
                var e = Un.has(t);
                return t = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t), !e && t
            }

            function Bn(t) {
                var e = t.isConnected;
                if (void 0 !== e) return e;
                for (; t && !(t.__CE_isImportDocument || t instanceof Document);) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
                return !(!t || !(t.__CE_isImportDocument || t instanceof Document))
            }

            function Wn(t, e) {
                for (; e && e !== t && !e.nextSibling;) e = e.parentNode;
                return e && e !== t ? e.nextSibling : null
            }

            function Vn(t, e, n) {
                n = void 0 === n ? new Set : n;
                for (var r = t; r;) {
                    if (r.nodeType === Node.ELEMENT_NODE) {
                        var o = r;
                        e(o);
                        var i = o.localName;
                        if ("link" === i && "import" === o.getAttribute("rel")) {
                            if ((r = o.import) instanceof Node && !n.has(r)) for (n.add(r), r = r.firstChild; r; r = r.nextSibling) Vn(r, e, n);
                            r = Wn(t, o);
                            continue
                        }
                        if ("template" === i) {
                            r = Wn(t, o);
                            continue
                        }
                        if (o = o.__CE_shadowRoot) for (o = o.firstChild; o; o = o.nextSibling) Vn(o, e, n)
                    }
                    r = r.firstChild ? r.firstChild : Wn(t, r)
                }
            }

            function $n(t, e, n) {
                t[e] = n
            }

            function Xn() {
                this.a = new Map, this.m = new Map, this.f = [], this.c = !1
            }

            function Gn(t, e) {
                t.c = !0, t.f.push(e)
            }

            function Yn(t, e) {
                t.c && Vn(e, function (e) {
                    return t.b(e)
                })
            }

            function Kn(t, e) {
                var n = [];
                for (Vn(e, function (t) {
                    return n.push(t)
                }), e = 0; e < n.length; e++) {
                    var r = n[e];
                    1 === r.__CE_state ? t.connectedCallback(r) : Qn(t, r)
                }
            }

            function Jn(t, e) {
                var n = [];
                for (Vn(e, function (t) {
                    return n.push(t)
                }), e = 0; e < n.length; e++) {
                    var r = n[e];
                    1 === r.__CE_state && t.disconnectedCallback(r)
                }
            }

            function Zn(t, e, n) {
                var r = (n = void 0 === n ? {} : n).cb || new Set, o = n.ha || function (e) {
                    return Qn(t, e)
                }, i = [];
                if (Vn(e, function (e) {
                    if ("link" === e.localName && "import" === e.getAttribute("rel")) {
                        var n = e.import;
                        n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function () {
                            var n = e.import;
                            if (!n.__CE_documentLoadHandled) {
                                n.__CE_documentLoadHandled = !0;
                                var i = new Set(r);
                                i.delete(n), Zn(t, n, {cb: i, ha: o})
                            }
                        })
                    } else i.push(e)
                }, r), t.c) for (e = 0; e < i.length; e++) t.b(i[e]);
                for (e = 0; e < i.length; e++) o(i[e])
            }

            function Qn(t, e) {
                if (void 0 === e.__CE_state) {
                    var n = e.ownerDocument;
                    if ((n.defaultView || n.__CE_isImportDocument && n.__CE_hasRegistry) && (n = t.a.get(e.localName))) {
                        n.constructionStack.push(e);
                        var r = n.constructor;
                        try {
                            try {
                                if (new r !== e) throw Error("The custom element constructor did not produce the element being upgraded.")
                            } finally {
                                n.constructionStack.pop()
                            }
                        } catch (t) {
                            throw e.__CE_state = 2, t
                        }
                        if (e.__CE_state = 1, e.__CE_definition = n, n.attributeChangedCallback) for (n = n.observedAttributes, r = 0; r < n.length; r++) {
                            var o = n[r], i = e.getAttribute(o);
                            null !== i && t.attributeChangedCallback(e, o, null, i, null)
                        }
                        Bn(e) && t.connectedCallback(e)
                    }
                }
            }

            function tr(t) {
                var e = document;
                this.b = t, this.a = e, this.P = void 0, Zn(this.b, this.a), "loading" === this.a.readyState && (this.P = new MutationObserver(this.c.bind(this)), this.P.observe(this.a, {
                    childList: !0,
                    subtree: !0
                }))
            }

            function er(t) {
                t.P && t.P.disconnect()
            }

            function nr() {
                var t = this;
                this.a = this.A = void 0, this.b = new Promise(function (e) {
                    t.a = e, t.A && e(t.A)
                })
            }

            function rr(t) {
                this.c = !1, this.a = t, this.G = new Map, this.f = function (t) {
                    return t()
                }, this.b = !1, this.m = [], this.fa = new tr(t)
            }

            Xn.prototype.b = function (t) {
                if (this.c && !t.__CE_patched) {
                    t.__CE_patched = !0;
                    for (var e = 0; e < this.f.length; e++) this.f[e](t)
                }
            }, Xn.prototype.connectedCallback = function (t) {
                var e = t.__CE_definition;
                e.connectedCallback && e.connectedCallback.call(t)
            }, Xn.prototype.disconnectedCallback = function (t) {
                var e = t.__CE_definition;
                e.disconnectedCallback && e.disconnectedCallback.call(t)
            }, Xn.prototype.attributeChangedCallback = function (t, e, n, r, o) {
                var i = t.__CE_definition;
                i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(e) && i.attributeChangedCallback.call(t, e, n, r, o)
            }, tr.prototype.c = function (t) {
                var e = this.a.readyState;
                for ("interactive" !== e && "complete" !== e || er(this), e = 0; e < t.length; e++) for (var n = t[e].addedNodes, r = 0; r < n.length; r++) Zn(this.b, n[r])
            }, nr.prototype.resolve = function (t) {
                if (this.A) throw Error("Already resolved.");
                this.A = t, this.a && this.a(t)
            }, (r = rr.prototype).define = function (t, e) {
                var n = this;
                if (!(e instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
                if (!zn(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
                if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
                if (this.c) throw Error("A custom element is already being defined.");
                this.c = !0;
                try {
                    var r = function (t) {
                        var e = o[t];
                        if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
                        return e
                    }, o = e.prototype;
                    if (!(o instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                    var i = r("connectedCallback"), s = r("disconnectedCallback"), a = r("adoptedCallback"),
                        u = r("attributeChangedCallback"), c = e.observedAttributes || []
                } catch (t) {
                    return
                } finally {
                    this.c = !1
                }
                e = {
                    localName: t,
                    constructor: e,
                    connectedCallback: i,
                    disconnectedCallback: s,
                    adoptedCallback: a,
                    attributeChangedCallback: u,
                    observedAttributes: c,
                    constructionStack: []
                }, function (t, e, n) {
                    t.a.set(e, n), t.m.set(n.constructor, n)
                }(this.a, t, e), this.m.push(e), this.b || (this.b = !0, this.f(function () {
                    return function (t) {
                        if (!1 !== t.b) {
                            t.b = !1;
                            for (var e = t.m, n = [], r = new Map, o = 0; o < e.length; o++) r.set(e[o].localName, []);
                            for (Zn(t.a, document, {
                                ha: function (e) {
                                    if (void 0 === e.__CE_state) {
                                        var o = e.localName, i = r.get(o);
                                        i ? i.push(e) : t.a.a.get(o) && n.push(e)
                                    }
                                }
                            }), o = 0; o < n.length; o++) Qn(t.a, n[o]);
                            for (; 0 < e.length;) {
                                var i = e.shift();
                                o = i.localName, i = r.get(i.localName);
                                for (var s = 0; s < i.length; s++) Qn(t.a, i[s]);
                                (o = t.G.get(o)) && o.resolve(void 0)
                            }
                        }
                    }(n)
                }))
            }, r.ha = function (t) {
                Zn(this.a, t)
            }, r.get = function (t) {
                if (t = this.a.a.get(t)) return t.constructor
            }, r.Da = function (t) {
                if (!zn(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
                var e = this.G.get(t);
                return e ? e.b : (e = new nr, this.G.set(t, e), this.a.a.get(t) && !this.m.some(function (e) {
                    return e.localName === t
                }) && e.resolve(void 0), e.b)
            }, r.Za = function (t) {
                er(this.fa);
                var e = this.f;
                this.f = function (n) {
                    return t(function () {
                        return e(n)
                    })
                }
            }, window.CustomElementRegistry = rr, rr.prototype.define = rr.prototype.define, rr.prototype.upgrade = rr.prototype.ha, rr.prototype.get = rr.prototype.get, rr.prototype.whenDefined = rr.prototype.Da, rr.prototype.polyfillWrapFlushCallback = rr.prototype.Za;
            var or = window.Document.prototype.createElement, ir = window.Document.prototype.createElementNS,
                sr = window.Document.prototype.importNode, ar = window.Document.prototype.prepend,
                ur = window.Document.prototype.append, cr = window.DocumentFragment.prototype.prepend,
                lr = window.DocumentFragment.prototype.append, fr = window.Node.prototype.cloneNode,
                hr = window.Node.prototype.appendChild, pr = window.Node.prototype.insertBefore,
                dr = window.Node.prototype.removeChild, yr = window.Node.prototype.replaceChild,
                mr = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
                vr = window.Element.prototype.attachShadow,
                br = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
                gr = window.Element.prototype.getAttribute, wr = window.Element.prototype.setAttribute,
                _r = window.Element.prototype.removeAttribute, Er = window.Element.prototype.getAttributeNS,
                Sr = window.Element.prototype.setAttributeNS, xr = window.Element.prototype.removeAttributeNS,
                Or = window.Element.prototype.insertAdjacentElement, Tr = window.Element.prototype.insertAdjacentHTML,
                Cr = window.Element.prototype.prepend, Nr = window.Element.prototype.append,
                kr = window.Element.prototype.before, jr = window.Element.prototype.after,
                Ar = window.Element.prototype.replaceWith, Mr = window.Element.prototype.remove,
                Pr = window.HTMLElement,
                Rr = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
                Lr = window.HTMLElement.prototype.insertAdjacentElement,
                Ir = window.HTMLElement.prototype.insertAdjacentHTML, Dr = new function () {
                };

            function Fr(t, e, n) {
                function r(e) {
                    return function (n) {
                        for (var r = [], o = 0; o < arguments.length; ++o) r[o] = arguments[o];
                        o = [];
                        for (var i = [], s = 0; s < r.length; s++) {
                            var a = r[s];
                            if (a instanceof Element && Bn(a) && i.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) o.push(a); else o.push(a)
                        }
                        for (e.apply(this, r), r = 0; r < i.length; r++) Jn(t, i[r]);
                        if (Bn(this)) for (r = 0; r < o.length; r++) (i = o[r]) instanceof Element && Kn(t, i)
                    }
                }

                void 0 !== n.ga && (e.prepend = r(n.ga)), void 0 !== n.append && (e.append = r(n.append))
            }

            var qr = window.customElements;
            if (!qr || qr.forcePolyfill || "function" != typeof qr.define || "function" != typeof qr.get) {
                var Hr = new Xn;
                !function () {
                    var t = Hr;
                    window.HTMLElement = function () {
                        function e() {
                            var e = this.constructor, n = t.m.get(e);
                            if (!n) throw Error("The custom element being constructed was not registered with `customElements`.");
                            var r = n.constructionStack;
                            if (0 === r.length) return r = or.call(document, n.localName), Object.setPrototypeOf(r, e.prototype), r.__CE_state = 1, r.__CE_definition = n, t.b(r), r;
                            var o = r[n = r.length - 1];
                            if (o === Dr) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                            return r[n] = Dr, Object.setPrototypeOf(o, e.prototype), t.b(o), o
                        }

                        return e.prototype = Pr.prototype, Object.defineProperty(e.prototype, "constructor", {
                            writable: !0,
                            configurable: !0,
                            enumerable: !1,
                            value: e
                        }), e
                    }()
                }(), function () {
                    var t = Hr;
                    $n(Document.prototype, "createElement", function (e) {
                        if (this.__CE_hasRegistry) {
                            var n = t.a.get(e);
                            if (n) return new n.constructor
                        }
                        return e = or.call(this, e), t.b(e), e
                    }), $n(Document.prototype, "importNode", function (e, n) {
                        return e = sr.call(this, e, n), this.__CE_hasRegistry ? Zn(t, e) : Yn(t, e), e
                    }), $n(Document.prototype, "createElementNS", function (e, n) {
                        if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
                            var r = t.a.get(n);
                            if (r) return new r.constructor
                        }
                        return e = ir.call(this, e, n), t.b(e), e
                    }), Fr(t, Document.prototype, {ga: ar, append: ur})
                }(), Fr(Hr, DocumentFragment.prototype, {ga: cr, append: lr}), function () {
                    function t(t, n) {
                        Object.defineProperty(t, "textContent", {
                            enumerable: n.enumerable,
                            configurable: !0,
                            get: n.get,
                            set: function (t) {
                                if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t); else {
                                    var r = void 0;
                                    if (this.firstChild) {
                                        var o = this.childNodes, i = o.length;
                                        if (0 < i && Bn(this)) {
                                            r = Array(i);
                                            for (var s = 0; s < i; s++) r[s] = o[s]
                                        }
                                    }
                                    if (n.set.call(this, t), r) for (t = 0; t < r.length; t++) Jn(e, r[t])
                                }
                            }
                        })
                    }

                    var e = Hr;
                    $n(Node.prototype, "insertBefore", function (t, n) {
                        if (t instanceof DocumentFragment) {
                            var r = Array.prototype.slice.apply(t.childNodes);
                            if (t = pr.call(this, t, n), Bn(this)) for (n = 0; n < r.length; n++) Kn(e, r[n]);
                            return t
                        }
                        return r = Bn(t), n = pr.call(this, t, n), r && Jn(e, t), Bn(this) && Kn(e, t), n
                    }), $n(Node.prototype, "appendChild", function (t) {
                        if (t instanceof DocumentFragment) {
                            var n = Array.prototype.slice.apply(t.childNodes);
                            if (t = hr.call(this, t), Bn(this)) for (var r = 0; r < n.length; r++) Kn(e, n[r]);
                            return t
                        }
                        return n = Bn(t), r = hr.call(this, t), n && Jn(e, t), Bn(this) && Kn(e, t), r
                    }), $n(Node.prototype, "cloneNode", function (t) {
                        return t = fr.call(this, t), this.ownerDocument.__CE_hasRegistry ? Zn(e, t) : Yn(e, t), t
                    }), $n(Node.prototype, "removeChild", function (t) {
                        var n = Bn(t), r = dr.call(this, t);
                        return n && Jn(e, t), r
                    }), $n(Node.prototype, "replaceChild", function (t, n) {
                        if (t instanceof DocumentFragment) {
                            var r = Array.prototype.slice.apply(t.childNodes);
                            if (t = yr.call(this, t, n), Bn(this)) for (Jn(e, n), n = 0; n < r.length; n++) Kn(e, r[n]);
                            return t
                        }
                        r = Bn(t);
                        var o = yr.call(this, t, n), i = Bn(this);
                        return i && Jn(e, n), r && Jn(e, t), i && Kn(e, t), o
                    }), mr && mr.get ? t(Node.prototype, mr) : Gn(e, function (e) {
                        t(e, {
                            enumerable: !0, configurable: !0, get: function () {
                                for (var t = [], e = 0; e < this.childNodes.length; e++) t.push(this.childNodes[e].textContent);
                                return t.join("")
                            }, set: function (t) {
                                for (; this.firstChild;) dr.call(this, this.firstChild);
                                hr.call(this, document.createTextNode(t))
                            }
                        })
                    })
                }(), function () {
                    function t(t, e) {
                        Object.defineProperty(t, "innerHTML", {
                            enumerable: e.enumerable,
                            configurable: !0,
                            get: e.get,
                            set: function (t) {
                                var n = this, o = void 0;
                                if (Bn(this) && (o = [], Vn(this, function (t) {
                                    t !== n && o.push(t)
                                })), e.set.call(this, t), o) for (var i = 0; i < o.length; i++) {
                                    var s = o[i];
                                    1 === s.__CE_state && r.disconnectedCallback(s)
                                }
                                return this.ownerDocument.__CE_hasRegistry ? Zn(r, this) : Yn(r, this), t
                            }
                        })
                    }

                    function e(t, e) {
                        $n(t, "insertAdjacentElement", function (t, n) {
                            var o = Bn(n);
                            return t = e.call(this, t, n), o && Jn(r, n), Bn(t) && Kn(r, n), t
                        })
                    }

                    function n(t, e) {
                        function n(t, e) {
                            for (var n = []; t !== e; t = t.nextSibling) n.push(t);
                            for (e = 0; e < n.length; e++) Zn(r, n[e])
                        }

                        $n(t, "insertAdjacentHTML", function (t, r) {
                            if ("beforebegin" === (t = t.toLowerCase())) {
                                var o = this.previousSibling;
                                e.call(this, t, r), n(o || this.parentNode.firstChild, this)
                            } else if ("afterbegin" === t) o = this.firstChild, e.call(this, t, r), n(this.firstChild, o); else if ("beforeend" === t) o = this.lastChild, e.call(this, t, r), n(o || this.firstChild, null); else {
                                if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                                o = this.nextSibling, e.call(this, t, r), n(this.nextSibling, o)
                            }
                        })
                    }

                    var r = Hr;
                    vr && $n(Element.prototype, "attachShadow", function (t) {
                        return this.__CE_shadowRoot = vr.call(this, t)
                    }), br && br.get ? t(Element.prototype, br) : Rr && Rr.get ? t(HTMLElement.prototype, Rr) : Gn(r, function (e) {
                        t(e, {
                            enumerable: !0, configurable: !0, get: function () {
                                return fr.call(this, !0).innerHTML
                            }, set: function (t) {
                                var e = "template" === this.localName, n = e ? this.content : this,
                                    r = ir.call(document, this.namespaceURI, this.localName);
                                for (r.innerHTML = t; 0 < n.childNodes.length;) dr.call(n, n.childNodes[0]);
                                for (t = e ? r.content : r; 0 < t.childNodes.length;) hr.call(n, t.childNodes[0])
                            }
                        })
                    }), $n(Element.prototype, "setAttribute", function (t, e) {
                        if (1 !== this.__CE_state) return wr.call(this, t, e);
                        var n = gr.call(this, t);
                        wr.call(this, t, e), e = gr.call(this, t), r.attributeChangedCallback(this, t, n, e, null)
                    }), $n(Element.prototype, "setAttributeNS", function (t, e, n) {
                        if (1 !== this.__CE_state) return Sr.call(this, t, e, n);
                        var o = Er.call(this, t, e);
                        Sr.call(this, t, e, n), n = Er.call(this, t, e), r.attributeChangedCallback(this, e, o, n, t)
                    }), $n(Element.prototype, "removeAttribute", function (t) {
                        if (1 !== this.__CE_state) return _r.call(this, t);
                        var e = gr.call(this, t);
                        _r.call(this, t), null !== e && r.attributeChangedCallback(this, t, e, null, null)
                    }), $n(Element.prototype, "removeAttributeNS", function (t, e) {
                        if (1 !== this.__CE_state) return xr.call(this, t, e);
                        var n = Er.call(this, t, e);
                        xr.call(this, t, e);
                        var o = Er.call(this, t, e);
                        n !== o && r.attributeChangedCallback(this, e, n, o, t)
                    }), Lr ? e(HTMLElement.prototype, Lr) : Or ? e(Element.prototype, Or) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), Ir ? n(HTMLElement.prototype, Ir) : Tr ? n(Element.prototype, Tr) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), Fr(r, Element.prototype, {
                        ga: Cr,
                        append: Nr
                    }), function (t) {
                        function e(e) {
                            return function (n) {
                                for (var r = [], o = 0; o < arguments.length; ++o) r[o] = arguments[o];
                                o = [];
                                for (var i = [], s = 0; s < r.length; s++) {
                                    var a = r[s];
                                    if (a instanceof Element && Bn(a) && i.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) o.push(a); else o.push(a)
                                }
                                for (e.apply(this, r), r = 0; r < i.length; r++) Jn(t, i[r]);
                                if (Bn(this)) for (r = 0; r < o.length; r++) (i = o[r]) instanceof Element && Kn(t, i)
                            }
                        }

                        var n = Element.prototype;
                        void 0 !== kr && (n.before = e(kr)), void 0 !== kr && (n.after = e(jr)), void 0 !== Ar && $n(n, "replaceWith", function (e) {
                            for (var n = [], r = 0; r < arguments.length; ++r) n[r] = arguments[r];
                            r = [];
                            for (var o = [], i = 0; i < n.length; i++) {
                                var s = n[i];
                                if (s instanceof Element && Bn(s) && o.push(s), s instanceof DocumentFragment) for (s = s.firstChild; s; s = s.nextSibling) r.push(s); else r.push(s)
                            }
                            for (i = Bn(this), Ar.apply(this, n), n = 0; n < o.length; n++) Jn(t, o[n]);
                            if (i) for (Jn(t, this), n = 0; n < r.length; n++) (o = r[n]) instanceof Element && Kn(t, o)
                        }), void 0 !== Mr && $n(n, "remove", function () {
                            var e = Bn(this);
                            Mr.call(this), e && Jn(t, this)
                        })
                    }(r)
                }(), document.__CE_hasRegistry = !0;
                var Ur = new rr(Hr);
                Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: Ur})
            }

            function zr() {
                this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", this.atRule = !1, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = ""
            }

            function Br(t) {
                var e = Wr, n = t = t.replace(Kr, "").replace(Jr, ""), r = new zr;
                r.start = 0, r.end = n.length;
                for (var o = r, i = 0, s = n.length; i < s; i++) if ("{" === n[i]) {
                    o.rules || (o.rules = []);
                    var a = o, u = a.rules[a.rules.length - 1] || null;
                    (o = new zr).start = i + 1, o.parent = a, o.previous = u, a.rules.push(o)
                } else "}" === n[i] && (o.end = i + 1, o = o.parent || r);
                return e(r, t)
            }

            function Wr(t, e) {
                var n = e.substring(t.start, t.end - 1);
                if (t.parsedCssText = t.cssText = n.trim(), t.parent && (n = (n = (n = function (t) {
                    return t.replace(/\\([0-9a-f]{1,6})\s/gi, function (t, e) {
                        for (e = 6 - (t = e).length; e--;) t = "0" + t;
                        return "\\" + t
                    })
                }(n = e.substring(t.previous ? t.previous.end : t.parent.start, t.start - 1))).replace(ro, " ")).substring(n.lastIndexOf(";") + 1), n = t.parsedSelector = t.selector = n.trim(), t.atRule = 0 === n.indexOf("@"), t.atRule ? 0 === n.indexOf("@media") ? t.type = Gr : n.match(no) && (t.type = Xr, t.keyframesName = t.selector.split(ro).pop()) : t.type = 0 === n.indexOf("--") ? Yr : $r), n = t.rules) for (var r, o = 0, i = n.length; o < i && (r = n[o]); o++) Wr(r, e);
                return t
            }

            var Vr, $r = 1, Xr = 7, Gr = 4, Yr = 1e3, Kr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, Jr = /@import[^;]*;/gim,
                Zr = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
                Qr = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
                to = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, eo = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
                no = /^@[^\s]*keyframes/, ro = /\s+/g, oo = !(window.ShadyDOM && window.ShadyDOM.inUse);

            function io(t) {
                Vr = (!t || !t.shimcssproperties) && (oo || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")))
            }

            window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Vr = window.ShadyCSS.nativeCss : window.ShadyCSS ? (io(window.ShadyCSS), window.ShadyCSS = void 0) : io(window.WebComponents && window.WebComponents.flags);
            var so = Vr,
                ao = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
                uo = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, co = /(--[\w-]+)\s*([:,;)]|$)/gi,
                lo = /(animation\s*:)|(animation-name\s*:)/, fo = /@media\s(.*)/, ho = /\{[^}]*\}/g, po = new Set;

            function yo(t, e) {
                return t ? ("string" == typeof t && (t = Br(t)), e && bo(t, e), function t(e, n, r) {
                    r = void 0 === r ? "" : r;
                    var o = "";
                    if (e.cssText || e.rules) {
                        var i, s = e.rules;
                        if ((i = s) && (i = !((i = s[0]) && i.selector && 0 === i.selector.indexOf("--"))), i) {
                            i = 0;
                            for (var a, u = s.length; i < u && (a = s[i]); i++) o = t(a, n, o)
                        } else n = n ? e.cssText : (n = (n = e.cssText).replace(Zr, "").replace(Qr, "")).replace(to, "").replace(eo, ""), (o = n.trim()) && (o = "  " + o + "\n")
                    }
                    return o && (e.selector && (r += e.selector + " {\n"), r += o, e.selector && (r += "}\n\n")), r
                }(t, so)) : ""
            }

            function mo(t) {
                return !t.__cssRules && t.textContent && (t.__cssRules = Br(t.textContent)), t.__cssRules || null
            }

            function vo(t) {
                return !!t.parent && t.parent.type === Xr
            }

            function bo(t, e, n, r) {
                if (t) {
                    var o = !1, i = t.type;
                    if (r && i === Gr) {
                        var s = t.selector.match(fo);
                        s && (window.matchMedia(s[1]).matches || (o = !0))
                    }
                    if (i === $r ? e(t) : n && i === Xr ? n(t) : i === Yr && (o = !0), (t = t.rules) && !o) {
                        o = 0, i = t.length;
                        for (var a; o < i && (a = t[o]); o++) bo(a, e, n, r)
                    }
                }
            }

            function go(t, e, n, r) {
                var o = document.createElement("style");
                return e && o.setAttribute("scope", e), o.textContent = t, Eo(o, n, r), o
            }

            var wo = null;

            function _o(t) {
                t = document.createComment(" Shady DOM styles for " + t + " ");
                var e = document.head;
                return e.insertBefore(t, (wo ? wo.nextSibling : null) || e.firstChild), wo = t
            }

            function Eo(t, e, n) {
                (e = e || document.head).insertBefore(t, n && n.nextSibling || e.firstChild), wo ? t.compareDocumentPosition(wo) === Node.DOCUMENT_POSITION_PRECEDING && (wo = t) : wo = t
            }

            function So(t, e) {
                for (var n = 0, r = t.length; e < r; e++) if ("(" === t[e]) n++; else if (")" === t[e] && 0 == --n) return e;
                return -1
            }

            function xo(t, e) {
                oo ? t.setAttribute("class", e) : window.ShadyDOM.nativeMethods.setAttribute.call(t, "class", e)
            }

            function Oo(t) {
                var e = t.localName, n = "";
                return e ? -1 < e.indexOf("-") || (n = e, e = t.getAttribute && t.getAttribute("is") || "") : (e = t.is, n = t.extends), {
                    is: e,
                    X: n
                }
            }

            function To(t) {
                for (var e = [], n = "", r = 0; 0 <= r && r < t.length; r++) if ("(" === t[r]) {
                    var o = So(t, r);
                    n += t.slice(r, o + 1), r = o
                } else "," === t[r] ? (e.push(n), n = "") : n += t[r];
                return n && e.push(n), e
            }

            function Co() {
            }

            function No(t, e, n) {
                if (e.nodeType === Node.ELEMENT_NODE && n(e), e = "template" === e.localName ? (e.content || e.kb || e).childNodes : e.children || e.childNodes) for (var r = 0; r < e.length; r++) No(t, e[r], n)
            }

            function ko(t, e, n) {
                if (e) if (t.classList) n ? (t.classList.remove("style-scope"), t.classList.remove(e)) : (t.classList.add("style-scope"), t.classList.add(e)); else if (t.getAttribute) {
                    var r = t.getAttribute(Zo);
                    n ? r && xo(t, e = r.replace("style-scope", "").replace(e, "")) : xo(t, (r ? r + " " : "") + "style-scope " + e)
                }
            }

            function jo(t, e, n) {
                var r = ei;
                t.__styleScoped ? t.__styleScoped = null : No(r, t, function (t) {
                    ko(t, e, !0), ko(t, n)
                })
            }

            function Ao(t, e) {
                var n = ei;
                t.__styleScoped ? t.__styleScoped = null : No(n, t, function (t) {
                    ko(t, e || "", !0)
                })
            }

            function Mo(t, e, n) {
                var r = ei, o = t.__cssBuild;
                return oo || "shady" === o ? e = yo(e, n) : e = function (t, e, n, r, o) {
                    var i = Po(n, r);
                    return n = n ? Ko + n : "", yo(e, function (e) {
                        e.c || (e.selector = e.F = Ro(t, e, t.b, n, i), e.c = !0), o && o(e, n, i)
                    })
                }(r, e, (t = Oo(t)).is, t.X, n) + "\n\n", e.trim()
            }

            function Po(t, e) {
                return e ? "[is=" + t + "]" : t
            }

            function Ro(t, e, n, r, o) {
                var i = To(e.selector);
                if (!vo(e)) {
                    e = 0;
                    for (var s, a = i.length; e < a && (s = i[e]); e++) i[e] = n.call(t, s, r, o)
                }
                return i.filter(function (t) {
                    return !!t
                }).join(Ho)
            }

            function Lo(t) {
                return t.replace(Fo, function (t, e, n) {
                    return -1 < n.indexOf("+") ? n = n.replace(/\+/g, "___") : -1 < n.indexOf("___") && (n = n.replace(/___/g, "+")), ":" + e + "(" + n + ")"
                })
            }

            function Io(t, e) {
                return (t = t.split(Jo))[0] += e, t.join(Jo)
            }

            function Do(t) {
                t.selector === Wo && (t.selector = "html")
            }

            Co.prototype.b = function (t, e, n) {
                var r = !1;
                t = t.trim();
                var o = Fo.test(t);
                o && (t = Lo(t = t.replace(Fo, function (t, e, n) {
                    return ":" + e + "(" + n.replace(/\s/g, "") + ")"
                })));
                var i = ti.test(t);
                if (i) {
                    var s = function (t) {
                        for (var e, n = []; e = t.match(ti);) {
                            var r = e.index, o = So(t, r);
                            if (-1 === o) throw Error(e.input + " selector missing ')'");
                            e = t.slice(r, o + 1), t = t.replace(e, ""), n.push(e)
                        }
                        return {ra: t, matches: n}
                    }(t);
                    t = s.ra, s = s.matches
                }
                return t = (t = t.replace($o, Bo + " $1")).replace(Uo, function (t, o, i) {
                    return r || (t = function (t, e, n, r) {
                        var o = t.indexOf(Vo);
                        if (0 <= t.indexOf(Bo) ? t = function (t, e) {
                            var n = t.match(Xo);
                            return (n = n && n[2].trim() || "") ? n[0].match(zo) ? t.replace(Xo, function (t, n, r) {
                                return e + r
                            }) : n.split(zo)[0] === e ? n : Qo : t.replace(Bo, e)
                        }(t, r) : 0 !== o && (t = n ? Io(t, n) : t), n = !1, 0 <= o && (e = "", n = !0), n) {
                            var i = !0;
                            n && (t = t.replace(Go, function (t, e) {
                                return " > " + e
                            }))
                        }
                        return {
                            value: t = t.replace(Yo, function (t, e, n) {
                                return '[dir="' + n + '"] ' + e + ", " + e + '[dir="' + n + '"]'
                            }), Qa: e, stop: i
                        }
                    }(i, o, e, n), r = r || t.stop, o = t.Qa, i = t.value), o + i
                }), i && (t = function (t, e) {
                    var n = t.split("");
                    return e.reduce(function (t, e, r) {
                        return t + e + n[r + 1]
                    }, n[0])
                }(t, s)), o && (t = Lo(t)), t
            }, Co.prototype.c = function (t) {
                return t.match(Bo) ? "" : t.match(Vo) ? this.b(t, qo) : Io(t.trim(), qo)
            }, i.Object.defineProperties(Co.prototype, {
                a: {
                    configurable: !0, enumerable: !0, get: function () {
                        return "style-scope"
                    }
                }
            });
            var Fo = /:(nth[-\w]+)\(([^)]+)\)/, qo = ":not(.style-scope)", Ho = ",",
                Uo = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, zo = /[[.:#*]/, Bo = ":host", Wo = ":root",
                Vo = "::slotted", $o = new RegExp("^(" + Vo + ")"), Xo = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
                Go = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Yo = /(.*):dir\((?:(ltr|rtl))\)/, Ko = ".",
                Jo = ":", Zo = "class", Qo = "should_not_match", ti = /:(?:matches|any|-(?:webkit|moz)-any)/,
                ei = new Co;

            function ni(t, e, n, r) {
                this.M = t || null, this.b = e || null, this.pa = n || [], this.T = null, this.X = r || "", this.a = this.I = this.O = null
            }

            function ri(t) {
                return t ? t.__styleInfo : null
            }

            function oi(t, e) {
                return t.__styleInfo = e
            }

            function ii(t) {
                var e = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
                return e && e.call(this, t)
            }

            ni.prototype.c = function () {
                return this.M
            }, ni.prototype._getStyleRules = ni.prototype.c;
            var si = navigator.userAgent.match("Trident");

            function ai() {
            }

            function ui(t) {
                if (!t.B) {
                    var e = {}, n = {};
                    ci(t, n) && (e.L = n, t.rules = null), e.cssText = t.parsedCssText.replace(ho, "").replace(ao, ""), t.B = e
                }
            }

            function ci(t, e) {
                var n = t.B;
                if (!n) {
                    n = t.parsedCssText;
                    for (var r; t = ao.exec(n);) "inherit" === (r = (t[2] || t[3]).trim()) && "unset" === r || (e[t[1].trim()] = r), r = !0;
                    return r
                }
                if (n.L) return Object.assign(e, n.L), !0
            }

            function li(t, e, n) {
                return e && (e = 0 <= e.indexOf(";") ? fi(t, e, n) : function t(e, n) {
                    var r = e.indexOf("var(");
                    if (-1 === r) return n(e, "", "", "");
                    var o = So(e, r + 3), i = e.substring(r + 4, o);
                    return r = e.substring(0, r), e = t(e.substring(o + 1), n), -1 === (o = i.indexOf(",")) ? n(r, i.trim(), "", e) : n(r, i.substring(0, o).trim(), i.substring(o + 1).trim(), e)
                }(e, function (e, r, o, i) {
                    return r ? ((r = li(t, n[r], n)) && "initial" !== r ? "apply-shim-inherit" === r && (r = "inherit") : r = li(t, n[o] || o, n) || o, e + (r || "") + i) : e + i
                })), e && e.trim() || ""
            }

            function fi(t, e, n) {
                e = e.split(";");
                for (var r, o, i = 0; i < e.length; i++) if (r = e[i]) {
                    if (uo.lastIndex = 0, o = uo.exec(r)) r = li(t, n[o[1]], n); else if (-1 !== (o = r.indexOf(":"))) {
                        var s = r.substring(o);
                        s = li(t, s = s.trim(), n) || s, r = r.substring(0, o) + s
                    }
                    e[i] = r && r.lastIndexOf(";") === r.length - 1 ? r.slice(0, -1) : r || ""
                }
                return e.join(";")
            }

            function hi(t, e) {
                var n = {}, r = {}, o = e && e.__cssBuild;
                return bo(e, function (e) {
                    !function (t, e, n, r) {
                        if (e.B || ui(e), e.B.L) {
                            var o = Oo(t);
                            t = o.is, o = o.X, o = t ? Po(t, o) : "html";
                            var i = e.parsedSelector, s = ":host > *" === i || "html" === i,
                                a = 0 === i.indexOf(":host") && !s;
                            "shady" === n && (a = !(s = i === o + " > *." + o || -1 !== i.indexOf("html")) && 0 === i.indexOf(o)), "shadow" === n && (s = ":host > *" === i || "html" === i, a = a && !s), (s || a) && (n = o, a && (e.F || (e.F = Ro(ei, e, ei.b, t ? Ko + t : "", o)), n = e.F || o), r({
                                ra: n,
                                Wa: a,
                                xb: s
                            }))
                        }
                    }(t, e, o, function (o) {
                        ii.call(t.lb || t, o.ra) && (o.Wa ? ci(e, n) : ci(e, r))
                    })
                }, null, !0), {$a: r, Ua: n}
            }

            function pi(t, e, n, r) {
                var o = Oo(e), i = Po(o.is, o.X),
                    s = new RegExp("(?:^|[^.#[:])" + (e.extends ? "\\" + i.slice(0, -1) + "\\]" : i) + "($|[.:[\\s>+~])"),
                    a = function (t, e) {
                        t = t.b;
                        var n = {};
                        if (!oo && t) for (var r = 0, o = t[r]; r < t.length; o = t[++r]) {
                            var i = o, s = e;
                            i.f = new RegExp("\\b" + i.keyframesName + "(?!\\B|-)", "g"), i.a = i.keyframesName + "-" + s, i.F = i.F || i.selector, i.selector = i.F.replace(i.keyframesName, i.a), n[o.keyframesName] = di(o)
                        }
                        return n
                    }(o = ri(e).M, r);
                return Mo(e, o, function (e) {
                    var o = "";
                    if (e.B || ui(e), e.B.cssText && (o = fi(t, e.B.cssText, n)), e.cssText = o, !oo && !vo(e) && e.cssText) {
                        var u = o = e.cssText;
                        if (null == e.ya && (e.ya = lo.test(o)), e.ya) if (null == e.ea) for (var c in e.ea = [], a) o !== (u = (u = a[c])(o)) && (o = u, e.ea.push(c)); else {
                            for (c = 0; c < e.ea.length; ++c) o = (u = a[e.ea[c]])(o);
                            u = o
                        }
                        e.cssText = u, e.F = e.F || e.selector, o = "." + r, u = 0;
                        for (var l, f = (c = To(e.F)).length; u < f && (l = c[u]); u++) c[u] = l.match(s) ? l.replace(i, o) : o + " " + l;
                        e.selector = c.join(",")
                    }
                })
            }

            function di(t) {
                return function (e) {
                    return e.replace(t.f, t.a)
                }
            }

            function yi(t, e) {
                var n = mi, r = mo(t);
                t.textContent = yo(r, function (t) {
                    var r = t.cssText = t.parsedCssText;
                    t.B && t.B.cssText && (r = r.replace(Zr, "").replace(Qr, ""), t.cssText = fi(n, r, e))
                })
            }

            i.Object.defineProperties(ai.prototype, {
                a: {
                    configurable: !0, enumerable: !0, get: function () {
                        return "x-scope"
                    }
                }
            });
            var mi = new ai, vi = {}, bi = window.customElements;
            if (bi && !oo) {
                var gi = bi.define;
                bi.define = function (t, e, n) {
                    vi[t] || (vi[t] = _o(t)), gi.call(bi, t, e, n)
                }
            }

            function wi() {
                this.cache = {}
            }

            function _i() {
            }

            function Ei(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.target !== document.documentElement && n.target !== document.head) for (var r = 0; r < n.addedNodes.length; r++) {
                        var o = n.addedNodes[r];
                        if (o.nodeType === Node.ELEMENT_NODE) {
                            var i = o.getRootNode(), s = o, a = [];
                            if (s.classList ? a = Array.from(s.classList) : s instanceof window.SVGElement && s.hasAttribute("class") && (a = s.getAttribute("class").split(/\s+/)), (s = -1 < (a = (s = a).indexOf(ei.a)) ? s[a + 1] : "") && i === o.ownerDocument) Ao(o, s); else if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (i = i.host)) for ((i = Oo(i).is) !== s && jo(o, s, i), o = window.ShadyDOM.nativeMethods.querySelectorAll.call(o, ":not(." + ei.a + ")"), i = 0; i < o.length; i++) (a = (s = o[i]).getRootNode().host) && ko(s, a = Oo(a).is)
                        }
                    }
                }
            }

            if (wi.prototype.store = function (t, e, n, r) {
                var o = this.cache[t] || [];
                o.push({L: e, styleElement: n, I: r}), 100 < o.length && o.shift(), this.cache[t] = o
            }, wi.prototype.fetch = function (t, e, n) {
                if (t = this.cache[t]) for (var r = t.length - 1; 0 <= r; r--) {
                    var o, i = t[r];
                    t:{
                        for (o = 0; o < n.length; o++) {
                            var s = n[o];
                            if (i.L[s] !== e[s]) {
                                o = !1;
                                break t
                            }
                        }
                        o = !0
                    }
                    if (o) return i
                }
            }, !oo) {
                var Si = new MutationObserver(Ei), xi = function (t) {
                    Si.observe(t, {childList: !0, subtree: !0})
                };
                if (window.customElements && !window.customElements.polyfillWrapFlushCallback) xi(document); else {
                    var Oi = function () {
                        xi(document.body)
                    };
                    window.HTMLImports ? window.HTMLImports.whenReady(Oi) : requestAnimationFrame(function () {
                        if ("loading" === document.readyState) {
                            document.addEventListener("readystatechange", function t() {
                                Oi(), document.removeEventListener("readystatechange", t)
                            })
                        } else Oi()
                    })
                }
                _i = function () {
                    Ei(Si.takeRecords())
                }
            }
            var Ti = _i, Ci = {}, Ni = Promise.resolve();

            function ki(t) {
                (t = Ci[t]) && (t._applyShimCurrentVersion = t._applyShimCurrentVersion || 0, t._applyShimValidatingVersion = t._applyShimValidatingVersion || 0, t._applyShimNextVersion = (t._applyShimNextVersion || 0) + 1)
            }

            function ji(t) {
                return t._applyShimCurrentVersion === t._applyShimNextVersion
            }

            var Ai = new wi;

            function Mi() {
                this.G = {}, this.c = document.documentElement;
                var t = new zr;
                t.rules = [], this.f = oi(this.c, new ni(t)), this.m = !1, this.b = this.a = null
            }

            function Pi(t) {
                !t.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (t.a = window.ShadyCSS.ApplyShim, t.a.invalidCallback = ki), function (t) {
                    !t.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (t.b = window.ShadyCSS.CustomStyleInterface, t.b.transformCallback = function (e) {
                        t.Ba(e)
                    }, t.b.validateCallback = function () {
                        requestAnimationFrame(function () {
                            (t.b.enqueued || t.m) && t.flushCustomStyles()
                        })
                    })
                }(t)
            }

            function Ri(t, e) {
                return (e = e.getRootNode().host) ? ri(e) ? e : Ri(t, e) : t.c
            }

            function Li(t, e, n) {
                var r = ri(t = Ri(t, e));
                t = Object.create(r.O || null);
                var o = hi(e, n.M);
                for (var i in e = function (t, e) {
                    var n = {}, r = [];
                    return bo(t, function (t) {
                        t.B || ui(t);
                        var o = t.F || t.parsedSelector;
                        e && t.B.L && o && ii.call(e, o) && (ci(t, n), t = t.index, o = parseInt(t / 32, 10), r[o] = (r[o] || 0) | 1 << t % 32)
                    }, null, !0), {L: n, key: r}
                }(r.M, e).L, Object.assign(t, o.Ua, e, o.$a), e = n.T) ((o = e[i]) || 0 === o) && (t[i] = o);
                for (i = mi, e = Object.getOwnPropertyNames(t), o = 0; o < e.length; o++) t[r = e[o]] = li(i, t[r], t);
                n.O = t
            }

            (r = Mi.prototype).flush = function () {
                Ti()
            }, r.Sa = function (t) {
                return mo(t)
            }, r.bb = function (t) {
                return yo(t)
            }, r.prepareTemplate = function (t, e, n) {
                this.prepareTemplateDom(t, e), this.prepareTemplateStyles(t, e, n)
            }, r.prepareTemplateStyles = function (t, e, n) {
                if (!t.m) {
                    oo || vi[e] || (vi[e] = _o(e)), t.m = !0, t.name = e, t.extends = n, Ci[e] = t;
                    for (var r = (r = t.content.querySelector("style")) && r.getAttribute("css-build") || "", o = [], i = t.content.querySelectorAll("style"), s = 0; s < i.length; s++) {
                        var a = i[s];
                        if (a.hasAttribute("shady-unscoped")) {
                            if (!oo) {
                                var u = a.textContent;
                                po.has(u) || (po.add(u), u = a.cloneNode(!0), document.head.appendChild(u)), a.parentNode.removeChild(a)
                            }
                        } else o.push(a.textContent), a.parentNode.removeChild(a)
                    }
                    o = o.join("").trim(), n = {
                        is: e,
                        extends: n,
                        ib: r
                    }, Pi(this), i = uo.test(o) || ao.test(o), uo.lastIndex = 0, ao.lastIndex = 0, o = Br(o), i && so && this.a && this.a.transformRules(o, e), t._styleAst = o, t.G = r, r = [], so || (r = function (t) {
                        var e = {}, n = [], r = 0;
                        for (var o in bo(t, function (t) {
                            ui(t), t.index = r++, t = t.B.cssText;
                            for (var n; n = co.exec(t);) {
                                var o = n[1];
                                ":" !== n[2] && (e[o] = !0)
                            }
                        }, function (t) {
                            n.push(t)
                        }), t.b = n, t = [], e) t.push(o);
                        return t
                    }(t._styleAst)), r.length && !so || (o = oo ? t.content : null, e = vi[e] || null, e = (i = Mo(n, t._styleAst)).length ? go(i, n.is, o, e) : void 0, t.a = e), t.f = r
                }
            }, r.prepareTemplateDom = function (t, e) {
                oo || t.c || (t.c = !0, function (t, e) {
                    var n = ei;
                    t.__styleScoped ? t.__styleScoped = null : No(n, t, function (t) {
                        ko(t, e || "")
                    })
                }(t.content, e))
            }, r.flushCustomStyles = function () {
                if (Pi(this), this.b) {
                    var t = this.b.processStyles();
                    if (this.b.enqueued) {
                        if (so) for (var e = 0; e < t.length; e++) {
                            var n = this.b.getStyleForCustomStyle(t[e]);
                            if (n && so && this.a) {
                                var r = mo(n);
                                Pi(this), this.a.transformRules(r), n.textContent = yo(r)
                            }
                        } else for (Li(this, this.c, this.f), e = 0; e < t.length; e++) (n = this.b.getStyleForCustomStyle(t[e])) && yi(n, this.f.O);
                        this.b.enqueued = !1, this.m && !so && this.styleDocument()
                    }
                }
            }, r.styleElement = function (t, e) {
                var n = Oo(t).is, r = ri(t);
                if (!r) {
                    var o = Oo(t);
                    r = o.is, o = o.X;
                    var i = vi[r] || null;
                    if (r = Ci[r]) var s = r._styleAst, a = r.f;
                    s = new ni(s, i, a, o), r && oi(t, s), r = s
                }
                if (t !== this.c && (this.m = !0), e && (r.T = r.T || {}, Object.assign(r.T, e)), so) {
                    if (r.T) for (var u in e = r.T) null === u ? t.style.removeProperty(u) : t.style.setProperty(u, e[u]);
                    ((u = Ci[n]) || t === this.c) && u && u.a && !ji(u) && ((ji(u) || u._applyShimValidatingVersion !== u._applyShimNextVersion) && (Pi(this), this.a && this.a.transformRules(u._styleAst, n), u.a.textContent = Mo(t, r.M), function (t) {
                        t._applyShimValidatingVersion = t._applyShimNextVersion, t.b || (t.b = !0, Ni.then(function () {
                            t._applyShimCurrentVersion = t._applyShimNextVersion, t.b = !1
                        }))
                    }(u)), oo && (n = t.shadowRoot) && (n.querySelector("style").textContent = Mo(t, r.M)), r.M = u._styleAst)
                } else if (this.flush(), Li(this, t, r), r.pa && r.pa.length) {
                    n = r, u = Oo(t).is, r = (e = Ai.fetch(u, n.O, n.pa)) ? e.styleElement : null, s = n.I, (a = e && e.I) || (a = u + "-" + (a = this.G[u] = (this.G[u] || 0) + 1)), n.I = a, a = n.I, o = mi, o = r ? r.textContent || "" : pi(o, t, n.O, a);
                    var c = (i = ri(t)).a;
                    c && !oo && c !== r && (c._useCount--, 0 >= c._useCount && c.parentNode && c.parentNode.removeChild(c)), oo ? i.a ? (i.a.textContent = o, r = i.a) : o && (r = go(o, a, t.shadowRoot, i.b)) : r ? r.parentNode || (si && -1 < o.indexOf("@media") && (r.textContent = o), Eo(r, null, i.b)) : o && (r = go(o, a, null, i.b)), r && (r._useCount = r._useCount || 0, i.a != r && r._useCount++, i.a = r), a = r, oo || (r = n.I, i = o = t.getAttribute("class") || "", s && (i = o.replace(new RegExp("\\s*x-scope\\s*" + s + "\\s*", "g"), " ")), o !== (i += (i ? " " : "") + "x-scope " + r) && xo(t, i)), e || Ai.store(u, n.O, a, n.I)
                }
            }, r.styleDocument = function (t) {
                this.styleSubtree(this.c, t)
            }, r.styleSubtree = function (t, e) {
                var n = t.shadowRoot;
                if ((n || t === this.c) && this.styleElement(t, e), e = n && (n.children || n.childNodes)) for (t = 0; t < e.length; t++) this.styleSubtree(e[t]); else if (t = t.children || t.childNodes) for (e = 0; e < t.length; e++) this.styleSubtree(t[e])
            }, r.Ba = function (t) {
                var e = this, n = mo(t);
                bo(n, function (t) {
                    if (oo) Do(t); else {
                        var n = ei;
                        t.selector = t.parsedSelector, Do(t), t.selector = t.F = Ro(n, t, n.c, void 0, void 0)
                    }
                    so && (Pi(e), e.a && e.a.transformRule(t))
                }), so ? t.textContent = yo(n) : this.f.M.rules.push(n)
            }, r.getComputedStyleValue = function (t, e) {
                var n;
                return so || (n = (ri(t) || ri(Ri(this, t))).O[e]), (n = n || window.getComputedStyle(t).getPropertyValue(e)) ? n.trim() : ""
            }, r.ab = function (t, e) {
                var n = t.getRootNode();
                if (e = e ? e.split(/\s/) : [], !(n = n.host && n.host.localName)) {
                    var r = t.getAttribute("class");
                    if (r) {
                        r = r.split(/\s/);
                        for (var o = 0; o < r.length; o++) if (r[o] === ei.a) {
                            n = r[o + 1];
                            break
                        }
                    }
                }
                n && e.push(ei.a, n), so || (n = ri(t)) && n.I && e.push(mi.a, n.I), xo(t, e.join(" "))
            }, r.Na = function (t) {
                return ri(t)
            }, Mi.prototype.flush = Mi.prototype.flush, Mi.prototype.prepareTemplate = Mi.prototype.prepareTemplate, Mi.prototype.styleElement = Mi.prototype.styleElement, Mi.prototype.styleDocument = Mi.prototype.styleDocument, Mi.prototype.styleSubtree = Mi.prototype.styleSubtree, Mi.prototype.getComputedStyleValue = Mi.prototype.getComputedStyleValue, Mi.prototype.setElementClass = Mi.prototype.ab, Mi.prototype._styleInfoForNode = Mi.prototype.Na, Mi.prototype.transformCustomStyleForDocument = Mi.prototype.Ba, Mi.prototype.getStyleAst = Mi.prototype.Sa, Mi.prototype.styleAstToString = Mi.prototype.bb, Mi.prototype.flushCustomStyles = Mi.prototype.flushCustomStyles, Object.defineProperties(Mi.prototype, {
                nativeShadow: {
                    get: function () {
                        return oo
                    }
                }, nativeCss: {
                    get: function () {
                        return so
                    }
                }
            });
            var Ii, Di, Fi = new Mi;
            window.ShadyCSS && (Ii = window.ShadyCSS.ApplyShim, Di = window.ShadyCSS.CustomStyleInterface), window.ShadyCSS = {
                ScopingShim: Fi,
                prepareTemplate: function (t, e, n) {
                    Fi.flushCustomStyles(), Fi.prepareTemplate(t, e, n)
                },
                prepareTemplateDom: function (t, e) {
                    Fi.prepareTemplateDom(t, e)
                },
                prepareTemplateStyles: function (t, e, n) {
                    Fi.flushCustomStyles(), Fi.prepareTemplateStyles(t, e, n)
                },
                styleSubtree: function (t, e) {
                    Fi.flushCustomStyles(), Fi.styleSubtree(t, e)
                },
                styleElement: function (t) {
                    Fi.flushCustomStyles(), Fi.styleElement(t)
                },
                styleDocument: function (t) {
                    Fi.flushCustomStyles(), Fi.styleDocument(t)
                },
                flushCustomStyles: function () {
                    Fi.flushCustomStyles()
                },
                getComputedStyleValue: function (t, e) {
                    return Fi.getComputedStyleValue(t, e)
                },
                nativeCss: so,
                nativeShadow: oo
            }, Ii && (window.ShadyCSS.ApplyShim = Ii), Di && (window.ShadyCSS.CustomStyleInterface = Di), function (t) {
                function e(t) {
                    return "" == t && (i.call(this), this.i = !0), t.toLowerCase()
                }

                function n(t) {
                    var e = t.charCodeAt(0);
                    return 32 < e && 127 > e && -1 == [34, 35, 60, 62, 63, 96].indexOf(e) ? t : encodeURIComponent(t)
                }

                function r(t) {
                    var e = t.charCodeAt(0);
                    return 32 < e && 127 > e && -1 == [34, 35, 60, 62, 96].indexOf(e) ? t : encodeURIComponent(t)
                }

                function o(t, o, s) {
                    function a(t) {
                        v.push(t)
                    }

                    var u = o || "scheme start", p = 0, d = "", y = !1, m = !1, v = [];
                    t:for (; (void 0 != t[p - 1] || 0 == p) && !this.i;) {
                        var b = t[p];
                        switch (u) {
                            case"scheme start":
                                if (!b || !f.test(b)) {
                                    if (o) {
                                        a("Invalid scheme.");
                                        break t
                                    }
                                    d = "", u = "no scheme";
                                    continue
                                }
                                d += b.toLowerCase(), u = "scheme";
                                break;
                            case"scheme":
                                if (b && h.test(b)) d += b.toLowerCase(); else {
                                    if (":" != b) {
                                        if (o) {
                                            void 0 != b && a("Code point not allowed in scheme: " + b);
                                            break t
                                        }
                                        d = "", p = 0, u = "no scheme";
                                        continue
                                    }
                                    if (this.h = d, d = "", o) break t;
                                    void 0 !== c[this.h] && (this.D = !0), u = "file" == this.h ? "relative" : this.D && s && s.h == this.h ? "relative or authority" : this.D ? "authority first slash" : "scheme data"
                                }
                                break;
                            case"scheme data":
                                "?" == b ? (this.u = "?", u = "query") : "#" == b ? (this.C = "#", u = "fragment") : void 0 != b && "\t" != b && "\n" != b && "\r" != b && (this.na += n(b));
                                break;
                            case"no scheme":
                                if (s && void 0 !== c[s.h]) {
                                    u = "relative";
                                    continue
                                }
                                a("Missing scheme."), i.call(this), this.i = !0;
                                break;
                            case"relative or authority":
                                if ("/" != b || "/" != t[p + 1]) {
                                    a("Expected /, got: " + b), u = "relative";
                                    continue
                                }
                                u = "authority ignore slashes";
                                break;
                            case"relative":
                                if (this.D = !0, "file" != this.h && (this.h = s.h), void 0 == b) {
                                    this.j = s.j, this.s = s.s, this.l = s.l.slice(), this.u = s.u, this.v = s.v, this.g = s.g;
                                    break t
                                }
                                if ("/" == b || "\\" == b) "\\" == b && a("\\ is an invalid code point."), u = "relative slash"; else if ("?" == b) this.j = s.j, this.s = s.s, this.l = s.l.slice(), this.u = "?", this.v = s.v, this.g = s.g, u = "query"; else {
                                    if ("#" != b) {
                                        u = t[p + 1];
                                        var g = t[p + 2];
                                        ("file" != this.h || !f.test(b) || ":" != u && "|" != u || void 0 != g && "/" != g && "\\" != g && "?" != g && "#" != g) && (this.j = s.j, this.s = s.s, this.v = s.v, this.g = s.g, this.l = s.l.slice(), this.l.pop()), u = "relative path";
                                        continue
                                    }
                                    this.j = s.j, this.s = s.s, this.l = s.l.slice(), this.u = s.u, this.C = "#", this.v = s.v, this.g = s.g, u = "fragment"
                                }
                                break;
                            case"relative slash":
                                if ("/" != b && "\\" != b) {
                                    "file" != this.h && (this.j = s.j, this.s = s.s, this.v = s.v, this.g = s.g), u = "relative path";
                                    continue
                                }
                                "\\" == b && a("\\ is an invalid code point."), u = "file" == this.h ? "file host" : "authority ignore slashes";
                                break;
                            case"authority first slash":
                                if ("/" != b) {
                                    a("Expected '/', got: " + b), u = "authority ignore slashes";
                                    continue
                                }
                                u = "authority second slash";
                                break;
                            case"authority second slash":
                                if (u = "authority ignore slashes", "/" != b) {
                                    a("Expected '/', got: " + b);
                                    continue
                                }
                                break;
                            case"authority ignore slashes":
                                if ("/" != b && "\\" != b) {
                                    u = "authority";
                                    continue
                                }
                                a("Expected authority, got: " + b);
                                break;
                            case"authority":
                                if ("@" == b) {
                                    for (y && (a("@ already seen."), d += "%40"), y = !0, b = 0; b < d.length; b++) "\t" == (g = d[b]) || "\n" == g || "\r" == g ? a("Invalid whitespace in authority.") : ":" == g && null === this.g ? this.g = "" : (g = n(g), null !== this.g ? this.g += g : this.v += g);
                                    d = ""
                                } else {
                                    if (void 0 == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
                                        p -= d.length, d = "", u = "host";
                                        continue
                                    }
                                    d += b
                                }
                                break;
                            case"file host":
                                if (void 0 == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
                                    2 != d.length || !f.test(d[0]) || ":" != d[1] && "|" != d[1] ? (0 != d.length && (this.j = e.call(this, d), d = ""), u = "relative path start") : u = "relative path";
                                    continue
                                }
                                "\t" == b || "\n" == b || "\r" == b ? a("Invalid whitespace in file host.") : d += b;
                                break;
                            case"host":
                            case"hostname":
                                if (":" != b || m) {
                                    if (void 0 == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
                                        if (this.j = e.call(this, d), d = "", u = "relative path start", o) break t;
                                        continue
                                    }
                                    "\t" != b && "\n" != b && "\r" != b ? ("[" == b ? m = !0 : "]" == b && (m = !1), d += b) : a("Invalid code point in host/hostname: " + b)
                                } else if (this.j = e.call(this, d), d = "", u = "port", "hostname" == o) break t;
                                break;
                            case"port":
                                if (/[0-9]/.test(b)) d += b; else {
                                    if (void 0 == b || "/" == b || "\\" == b || "?" == b || "#" == b || o) {
                                        if ("" != d && ((d = parseInt(d, 10)) != c[this.h] && (this.s = d + ""), d = ""), o) break t;
                                        u = "relative path start";
                                        continue
                                    }
                                    "\t" == b || "\n" == b || "\r" == b ? a("Invalid code point in port: " + b) : (i.call(this), this.i = !0)
                                }
                                break;
                            case"relative path start":
                                if ("\\" == b && a("'\\' not allowed in path."), u = "relative path", "/" != b && "\\" != b) continue;
                                break;
                            case"relative path":
                                void 0 != b && "/" != b && "\\" != b && (o || "?" != b && "#" != b) ? "\t" != b && "\n" != b && "\r" != b && (d += n(b)) : ("\\" == b && a("\\ not allowed in relative path."), (g = l[d.toLowerCase()]) && (d = g), ".." == d ? (this.l.pop(), "/" != b && "\\" != b && this.l.push("")) : "." == d && "/" != b && "\\" != b ? this.l.push("") : "." != d && ("file" == this.h && 0 == this.l.length && 2 == d.length && f.test(d[0]) && "|" == d[1] && (d = d[0] + ":"), this.l.push(d)), d = "", "?" == b ? (this.u = "?", u = "query") : "#" == b && (this.C = "#", u = "fragment"));
                                break;
                            case"query":
                                o || "#" != b ? void 0 != b && "\t" != b && "\n" != b && "\r" != b && (this.u += r(b)) : (this.C = "#", u = "fragment");
                                break;
                            case"fragment":
                                void 0 != b && "\t" != b && "\n" != b && "\r" != b && (this.C += b)
                        }
                        p++
                    }
                }

                function i() {
                    this.v = this.na = this.h = "", this.g = null, this.s = this.j = "", this.l = [], this.C = this.u = "", this.D = this.i = !1
                }

                function s(t, e) {
                    void 0 === e || e instanceof s || (e = new s(String(e))), this.Oa = t, i.call(this), t = t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), o.call(this, t, null, e)
                }

                var a = !1;
                if (!t.rb) try {
                    var u = new URL("b", "http://a");
                    u.pathname = "c%20d", a = "http://a/c%20d" === u.href
                } catch (t) {
                }
                if (!a) {
                    var c = Object.create(null);
                    c.ftp = 21, c.file = 0, c.gopher = 70, c.http = 80, c.https = 443, c.ws = 80, c.wss = 443;
                    var l = Object.create(null);
                    l["%2e"] = ".", l[".%2e"] = "..", l["%2e."] = "..", l["%2e%2e"] = "..";
                    var f = /[a-zA-Z]/, h = /[a-zA-Z0-9\+\-\.]/;
                    s.prototype = {
                        toString: function () {
                            return this.href
                        }, get href() {
                            if (this.i) return this.Oa;
                            var t = "";
                            return "" == this.v && null == this.g || (t = this.v + (null != this.g ? ":" + this.g : "") + "@"), this.protocol + (this.D ? "//" + t + this.host : "") + this.pathname + this.u + this.C
                        }, set href(t) {
                            i.call(this), o.call(this, t)
                        }, get protocol() {
                            return this.h + ":"
                        }, set protocol(t) {
                            this.i || o.call(this, t + ":", "scheme start")
                        }, get host() {
                            return this.i ? "" : this.s ? this.j + ":" + this.s : this.j
                        }, set host(t) {
                            !this.i && this.D && o.call(this, t, "host")
                        }, get hostname() {
                            return this.j
                        }, set hostname(t) {
                            !this.i && this.D && o.call(this, t, "hostname")
                        }, get port() {
                            return this.s
                        }, set port(t) {
                            !this.i && this.D && o.call(this, t, "port")
                        }, get pathname() {
                            return this.i ? "" : this.D ? "/" + this.l.join("/") : this.na
                        }, set pathname(t) {
                            !this.i && this.D && (this.l = [], o.call(this, t, "relative path start"))
                        }, get search() {
                            return this.i || !this.u || "?" == this.u ? "" : this.u
                        }, set search(t) {
                            !this.i && this.D && (this.u = "?", "?" == t[0] && (t = t.slice(1)), o.call(this, t, "query"))
                        }, get hash() {
                            return this.i || !this.C || "#" == this.C ? "" : this.C
                        }, set hash(t) {
                            this.i || (this.C = "#", "#" == t[0] && (t = t.slice(1)), o.call(this, t, "fragment"))
                        }, get origin() {
                            var t;
                            if (this.i || !this.h) return "";
                            switch (this.h) {
                                case"data":
                                case"file":
                                case"javascript":
                                case"mailto":
                                    return "null"
                            }
                            return (t = this.host) ? this.h + "://" + t : ""
                        }
                    };
                    var p = t.URL;
                    p && (s.createObjectURL = function (t) {
                        return p.createObjectURL.apply(p, arguments)
                    }, s.revokeObjectURL = function (t) {
                        p.revokeObjectURL(t)
                    }), t.URL = s
                }
            }(window), Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
                get: function () {
                    var t = (this.ownerDocument || this).querySelector("base[href]");
                    return t && t.href || window.location.href
                }, configurable: !0, enumerable: !0
            });
            var qi = document.createElement("style");
            qi.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
            var Hi = document.querySelector("head");
            Hi.insertBefore(qi, Hi.firstChild);
            var Ui = window.customElements, zi = !1, Bi = null;

            function Wi() {
                window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document), Bi && Bi(), zi = !0, window.WebComponents.ready = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
            }

            Ui.polyfillWrapFlushCallback && Ui.polyfillWrapFlushCallback(function (t) {
                Bi = t, zi && t()
            }), "complete" !== document.readyState ? (window.addEventListener("load", Wi), window.addEventListener("DOMContentLoaded", function () {
                window.removeEventListener("load", Wi), Wi()
            })) : Wi()
        }).call(this)
    }).call(this, n(6), n(32).setImmediate)
}, function (t, e, n) {
    (function (t) {
        var r = void 0 !== t && t || "undefined" != typeof self && self || window, o = Function.prototype.apply;

        function i(t, e) {
            this._id = t, this._clearFn = e
        }

        e.setTimeout = function () {
            return new i(o.call(setTimeout, r, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new i(o.call(setInterval, r, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(r, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(33), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(6))
}, function (t, e, n) {
    (function (t, e) {
        !function (t, n) {
            "use strict";
            if (!t.setImmediate) {
                var r, o = 1, i = {}, s = !1, a = t.document, u = Object.getPrototypeOf && Object.getPrototypeOf(t);
                u = u && u.setTimeout ? u : t, "[object process]" === {}.toString.call(t.process) ? r = function (t) {
                    e.nextTick(function () {
                        l(t)
                    })
                } : function () {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0, n = t.onmessage;
                        return t.onmessage = function () {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? function () {
                    var e = "setImmediate$" + Math.random() + "$", n = function (n) {
                        n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && l(+n.data.slice(e.length))
                    };
                    t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), r = function (n) {
                        t.postMessage(e + n, "*")
                    }
                }() : t.MessageChannel ? function () {
                    var t = new MessageChannel;
                    t.port1.onmessage = function (t) {
                        l(t.data)
                    }, r = function (e) {
                        t.port2.postMessage(e)
                    }
                }() : a && "onreadystatechange" in a.createElement("script") ? function () {
                    var t = a.documentElement;
                    r = function (e) {
                        var n = a.createElement("script");
                        n.onreadystatechange = function () {
                            l(e), n.onreadystatechange = null, t.removeChild(n), n = null
                        }, t.appendChild(n)
                    }
                }() : r = function (t) {
                    setTimeout(l, 0, t)
                }, u.setImmediate = function (t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var s = {callback: t, args: e};
                    return i[o] = s, r(o), o++
                }, u.clearImmediate = c
            }

            function c(t) {
                delete i[t]
            }

            function l(t) {
                if (s) setTimeout(l, 0, t); else {
                    var e = i[t];
                    if (e) {
                        s = !0;
                        try {
                            !function (t) {
                                var e = t.callback, r = t.args;
                                switch (r.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(r[0]);
                                        break;
                                    case 2:
                                        e(r[0], r[1]);
                                        break;
                                    case 3:
                                        e(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        e.apply(n, r)
                                }
                            }(e)
                        } finally {
                            c(t), s = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(6), n(34))
}, function (t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var u, c = [], l = !1, f = -1;

    function h() {
        l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
    }

    function p() {
        if (!l) {
            var t = a(h);
            l = !0;
            for (var e = c.length; e;) {
                for (u = c, c = []; ++f < e;) u && u[f].run();
                f = -1, e = c.length
            }
            u = null, l = !1, function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function y() {
    }

    o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new d(t, e)), 1 !== c.length || l || a(p)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (t) {
        return []
    }, o.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (t, e) {
    !function (t, e) {
        "use strict";
        if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function () {
                return this.intersectionRatio > 0
            }
        }); else {
            var n = [];
            o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.USE_MUTATION_OBSERVER = !0, o.prototype.observe = function (t) {
                if (!this._observationTargets.some(function (e) {
                    return e.element == t
                })) {
                    if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: t,
                        entry: null
                    }), this._monitorIntersections(), this._checkForIntersections()
                }
            }, o.prototype.unobserve = function (t) {
                this._observationTargets = this._observationTargets.filter(function (e) {
                    return e.element != t
                }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
            }, o.prototype.disconnect = function () {
                this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
            }, o.prototype.takeRecords = function () {
                var t = this._queuedEntries.slice();
                return this._queuedEntries = [], t
            }, o.prototype._initThresholds = function (t) {
                var e = t || [0];
                return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, n) {
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return t !== n[e - 1]
                })
            }, o.prototype._parseRootMargin = function (t) {
                var e = (t || "0px").split(/\s+/).map(function (t) {
                    var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                    if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                    return {value: parseFloat(e[1]), unit: e[2]}
                });
                return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
            }, o.prototype._monitorIntersections = function () {
                this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(t, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
            }, o.prototype._unmonitorIntersections = function () {
                this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
            }, o.prototype._checkForIntersections = function () {
                var e = this._rootIsInDom(),
                    n = e ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
                this._observationTargets.forEach(function (o) {
                    var i = o.element, s = u(i), a = this._rootContainsTarget(i), c = o.entry,
                        l = e && a && this._computeTargetAndRootIntersection(i, n), f = o.entry = new r({
                            time: t.performance && performance.now && performance.now(),
                            target: i,
                            boundingClientRect: s,
                            rootBounds: n,
                            intersectionRect: l
                        });
                    c ? e && a ? this._hasCrossedThreshold(c, f) && this._queuedEntries.push(f) : c && c.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f)
                }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }, o.prototype._computeTargetAndRootIntersection = function (n, r) {
                if ("none" != t.getComputedStyle(n).display) {
                    for (var o = u(n), i = l(n), s = !1; !s;) {
                        var c = null, f = 1 == i.nodeType ? t.getComputedStyle(i) : {};
                        if ("none" == f.display) return;
                        if (i == this.root || i == e ? (s = !0, c = r) : i != e.body && i != e.documentElement && "visible" != f.overflow && (c = u(i)), c && !(o = a(c, o))) break;
                        i = l(i)
                    }
                    return o
                }
            }, o.prototype._getRootRect = function () {
                var t;
                if (this.root) t = u(this.root); else {
                    var n = e.documentElement, r = e.body;
                    t = {
                        top: 0,
                        left: 0,
                        right: n.clientWidth || r.clientWidth,
                        width: n.clientWidth || r.clientWidth,
                        bottom: n.clientHeight || r.clientHeight,
                        height: n.clientHeight || r.clientHeight
                    }
                }
                return this._expandRectByRootMargin(t)
            }, o.prototype._expandRectByRootMargin = function (t) {
                var e = this._rootMarginValues.map(function (e, n) {
                    return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                }), n = {top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3]};
                return n.width = n.right - n.left, n.height = n.bottom - n.top, n
            }, o.prototype._hasCrossedThreshold = function (t, e) {
                var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                    r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                if (n !== r) for (var o = 0; o < this.thresholds.length; o++) {
                    var i = this.thresholds[o];
                    if (i == n || i == r || i < n != i < r) return !0
                }
            }, o.prototype._rootIsInDom = function () {
                return !this.root || c(e, this.root)
            }, o.prototype._rootContainsTarget = function (t) {
                return c(this.root || e, t)
            }, o.prototype._registerInstance = function () {
                n.indexOf(this) < 0 && n.push(this)
            }, o.prototype._unregisterInstance = function () {
                var t = n.indexOf(this);
                -1 != t && n.splice(t, 1)
            }, t.IntersectionObserver = o, t.IntersectionObserverEntry = r
        }

        function r(t) {
            this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect, n = e.width * e.height, r = this.intersectionRect, o = r.width * r.height;
            this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
        }

        function o(t, e) {
            var n = e || {};
            if ("function" != typeof t) throw new Error("callback must be a function");
            if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = function (t, e) {
                var n = null;
                return function () {
                    n || (n = setTimeout(function () {
                        t(), n = null
                    }, e))
                }
            }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
                return t.value + t.unit
            }).join(" ")
        }

        function i(t, e, n, r) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
        }

        function s(t, e, n, r) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
        }

        function a(t, e) {
            var n = Math.max(t.top, e.top), r = Math.min(t.bottom, e.bottom), o = Math.max(t.left, e.left),
                i = Math.min(t.right, e.right), s = i - o, a = r - n;
            return s >= 0 && a >= 0 && {top: n, bottom: r, left: o, right: i, width: s, height: a}
        }

        function u(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {
            }
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }), e) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
        }

        function c(t, e) {
            for (var n = e; n;) {
                if (n == t) return !0;
                n = l(n)
            }
            return !1
        }

        function l(t) {
            var e = t.parentNode;
            return e && 11 == e.nodeType && e.host ? e.host : e
        }
    }(window, document)
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    !function (t, e) {
        var r = {}, o = {};
        !function (t, e) {
            function n() {
                this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = h
            }

            function r() {
                return t.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0)
            }

            function o(e, r, o) {
                var i = new n;
                return r && (i.fill = "both", i.duration = "auto"), "number" != typeof e || isNaN(e) ? void 0 !== e && Object.getOwnPropertyNames(e).forEach(function (n) {
                    if ("auto" != e[n]) {
                        if (("number" == typeof i[n] || "duration" == n) && ("number" != typeof e[n] || isNaN(e[n]))) return;
                        if ("fill" == n && -1 == l.indexOf(e[n])) return;
                        if ("direction" == n && -1 == f.indexOf(e[n])) return;
                        if ("playbackRate" == n && 1 !== e[n] && t.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
                        i[n] = e[n]
                    }
                }) : i.duration = e, i
            }

            function i(t, e, n, r) {
                return t < 0 || t > 1 || n < 0 || n > 1 ? h : function (o) {
                    function i(t, e, n) {
                        return 3 * t * (1 - n) * (1 - n) * n + 3 * e * (1 - n) * n * n + n * n * n
                    }

                    if (o <= 0) {
                        var s = 0;
                        return t > 0 ? s = e / t : !e && n > 0 && (s = r / n), s * o
                    }
                    if (o >= 1) {
                        var a = 0;
                        return n < 1 ? a = (r - 1) / (n - 1) : 1 == n && t < 1 && (a = (e - 1) / (t - 1)), 1 + a * (o - 1)
                    }
                    for (var u = 0, c = 1; u < c;) {
                        var l = (u + c) / 2, f = i(t, n, l);
                        if (Math.abs(o - f) < 1e-5) return i(e, r, l);
                        f < o ? u = l : c = l
                    }
                    return i(e, r, l)
                }
            }

            function s(t, e) {
                return function (n) {
                    if (n >= 1) return 1;
                    var r = 1 / t;
                    return (n += e * r) - n % r
                }
            }

            function a(t) {
                v || (v = document.createElement("div").style), v.animationTimingFunction = "", v.animationTimingFunction = t;
                var e = v.animationTimingFunction;
                if ("" == e && r()) throw new TypeError(t + " is not a valid value for easing");
                return e
            }

            function u(t) {
                if ("linear" == t) return h;
                var e = g.exec(t);
                if (e) return i.apply(this, e.slice(1).map(Number));
                var n = w.exec(t);
                return n ? s(Number(n[1]), {start: p, middle: d, end: y}[n[2]]) : m[t] || h
            }

            function c(t, e, n) {
                if (null == e) return _;
                var r = n.delay + t + n.endDelay;
                return e < Math.min(n.delay, r) ? E : e >= Math.min(n.delay + t, r) ? S : x
            }

            var l = "backwards|forwards|both|none".split("|"), f = "reverse|alternate|alternate-reverse".split("|"),
                h = function (t) {
                    return t
                };
            n.prototype = {
                _setMember: function (e, n) {
                    this["_" + e] = n, this._effect && (this._effect._timingInput[e] = n, this._effect._timing = t.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = t.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
                }, get playbackRate() {
                    return this._playbackRate
                }, set delay(t) {
                    this._setMember("delay", t)
                }, get delay() {
                    return this._delay
                }, set endDelay(t) {
                    this._setMember("endDelay", t)
                }, get endDelay() {
                    return this._endDelay
                }, set fill(t) {
                    this._setMember("fill", t)
                }, get fill() {
                    return this._fill
                }, set iterationStart(t) {
                    if ((isNaN(t) || t < 0) && r()) throw new TypeError("iterationStart must be a non-negative number, received: " + timing.iterationStart);
                    this._setMember("iterationStart", t)
                }, get iterationStart() {
                    return this._iterationStart
                }, set duration(t) {
                    if ("auto" != t && (isNaN(t) || t < 0) && r()) throw new TypeError("duration must be non-negative or auto, received: " + t);
                    this._setMember("duration", t)
                }, get duration() {
                    return this._duration
                }, set direction(t) {
                    this._setMember("direction", t)
                }, get direction() {
                    return this._direction
                }, set easing(t) {
                    this._easingFunction = u(a(t)), this._setMember("easing", t)
                }, get easing() {
                    return this._easing
                }, set iterations(t) {
                    if ((isNaN(t) || t < 0) && r()) throw new TypeError("iterations must be non-negative, received: " + t);
                    this._setMember("iterations", t)
                }, get iterations() {
                    return this._iterations
                }
            };
            var p = 1, d = .5, y = 0, m = {
                    ease: i(.25, .1, .25, 1),
                    "ease-in": i(.42, 0, 1, 1),
                    "ease-out": i(0, 0, .58, 1),
                    "ease-in-out": i(.42, 0, .58, 1),
                    "step-start": s(1, p),
                    "step-middle": s(1, d),
                    "step-end": s(1, y)
                }, v = null, b = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
                g = new RegExp("cubic-bezier\\(" + b + "," + b + "," + b + "," + b + "\\)"),
                w = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/, _ = 0, E = 1, S = 2, x = 3;
            t.cloneTimingInput = function (t) {
                if ("number" == typeof t) return t;
                var e = {};
                for (var n in t) e[n] = t[n];
                return e
            }, t.makeTiming = o, t.numericTimingToObject = function (t) {
                return "number" == typeof t && (t = isNaN(t) ? {duration: 0} : {duration: t}), t
            }, t.normalizeTimingInput = function (e, n) {
                return o(e = t.numericTimingToObject(e), n)
            }, t.calculateActiveDuration = function (t) {
                return Math.abs(function (t) {
                    return 0 === t.duration || 0 === t.iterations ? 0 : t.duration * t.iterations
                }(t) / t.playbackRate)
            }, t.calculateIterationProgress = function (t, e, n) {
                var r = c(t, e, n), o = function (t, e, n, r, o) {
                    switch (r) {
                        case E:
                            return "backwards" == e || "both" == e ? 0 : null;
                        case x:
                            return n - o;
                        case S:
                            return "forwards" == e || "both" == e ? t : null;
                        case _:
                            return null
                    }
                }(t, n.fill, e, r, n.delay);
                if (null === o) return null;
                var i = function (t, e, n, r, o) {
                    var i = o;
                    return 0 === t ? e !== E && (i += n) : i += r / t, i
                }(n.duration, r, n.iterations, o, n.iterationStart), s = function (t, e, n, r, o, i) {
                    var s = t === 1 / 0 ? e % 1 : t % 1;
                    return 0 !== s || n !== S || 0 === r || 0 === o && 0 !== i || (s = 1), s
                }(i, n.iterationStart, r, n.iterations, o, n.duration), a = function (t, e, n, r) {
                    return t === S && e === 1 / 0 ? 1 / 0 : 1 === n ? Math.floor(r) - 1 : Math.floor(r)
                }(r, n.iterations, s, i), u = function (t, e, n) {
                    var r = t;
                    if ("normal" !== t && "reverse" !== t) {
                        var o = e;
                        "alternate-reverse" === t && (o += 1), r = "normal", o !== 1 / 0 && o % 2 != 0 && (r = "reverse")
                    }
                    return "normal" === r ? n : 1 - n
                }(n.direction, a, s);
                return n._easingFunction(u)
            }, t.calculatePhase = c, t.normalizeEasing = a, t.parseEasingFunction = u
        }(r), function (t, e) {
            function n(t, e) {
                return t in u && u[t][e] || e
            }

            function r(t, e, r) {
                if (!function (t) {
                    return "display" === t || 0 === t.lastIndexOf("animation", 0) || 0 === t.lastIndexOf("transition", 0)
                }(t)) {
                    var o = i[t];
                    if (o) for (var a in s.style[t] = e, o) {
                        var u = o[a], c = s.style[u];
                        r[u] = n(u, c)
                    } else r[t] = n(t, e)
                }
            }

            function o(t) {
                var e = [];
                for (var n in t) if (!(n in ["easing", "offset", "composite"])) {
                    var r = t[n];
                    Array.isArray(r) || (r = [r]);
                    for (var o, i = r.length, s = 0; s < i; s++) (o = {}).offset = "offset" in t ? t.offset : 1 == i ? 1 : s / (i - 1), "easing" in t && (o.easing = t.easing), "composite" in t && (o.composite = t.composite), o[n] = r[s], e.push(o)
                }
                return e.sort(function (t, e) {
                    return t.offset - e.offset
                }), e
            }

            var i = {
                    background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
                    border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
                    borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
                    borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
                    borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
                    borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
                    borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
                    borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
                    flex: ["flexGrow", "flexShrink", "flexBasis"],
                    font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
                    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
                    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
                    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
                }, s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
                a = {thin: "1px", medium: "3px", thick: "5px"}, u = {
                    borderBottomWidth: a,
                    borderLeftWidth: a,
                    borderRightWidth: a,
                    borderTopWidth: a,
                    fontSize: {
                        "xx-small": "60%",
                        "x-small": "75%",
                        small: "89%",
                        medium: "100%",
                        large: "120%",
                        "x-large": "150%",
                        "xx-large": "200%"
                    },
                    fontWeight: {normal: "400", bold: "700"},
                    outlineWidth: a,
                    textShadow: {none: "0px 0px 0px transparent"},
                    boxShadow: {none: "0px 0px 0px 0px transparent"}
                };
            t.convertToArrayForm = o, t.normalizeKeyframes = function (e) {
                if (null == e) return [];
                window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || (e = o(e));
                for (var n = e.map(function (e) {
                    var n = {};
                    for (var o in e) {
                        var i = e[o];
                        if ("offset" == o) {
                            if (null != i) {
                                if (i = Number(i), !isFinite(i)) throw new TypeError("Keyframe offsets must be numbers.");
                                if (i < 0 || i > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.")
                            }
                        } else if ("composite" == o) {
                            if ("add" == i || "accumulate" == i) throw{
                                type: DOMException.NOT_SUPPORTED_ERR,
                                name: "NotSupportedError",
                                message: "add compositing is not supported"
                            };
                            if ("replace" != i) throw new TypeError("Invalid composite mode " + i + ".")
                        } else i = "easing" == o ? t.normalizeEasing(i) : "" + i;
                        r(o, i, n)
                    }
                    return void 0 == n.offset && (n.offset = null), void 0 == n.easing && (n.easing = "linear"), n
                }), i = !0, s = -1 / 0, a = 0; a < n.length; a++) {
                    var u = n[a].offset;
                    if (null != u) {
                        if (u < s) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
                        s = u
                    } else i = !1
                }
                return n = n.filter(function (t) {
                    return t.offset >= 0 && t.offset <= 1
                }), i || function () {
                    var t = n.length;
                    null == n[t - 1].offset && (n[t - 1].offset = 1), t > 1 && null == n[0].offset && (n[0].offset = 0);
                    for (var e = 0, r = n[0].offset, o = 1; o < t; o++) {
                        var i = n[o].offset;
                        if (null != i) {
                            for (var s = 1; s < o - e; s++) n[e + s].offset = r + (i - r) * s / (o - e);
                            e = o, r = i
                        }
                    }
                }(), n
            }
        }(r), function (t) {
            var e = {};
            t.isDeprecated = function (t, n, r, o) {
                var i = o ? "are" : "is", s = new Date, a = new Date(n);
                return a.setMonth(a.getMonth() + 3), !(s < a && (t in e || console.warn("Web Animations: " + t + " " + i + " deprecated and will stop working on " + a.toDateString() + ". " + r), e[t] = !0, 1))
            }, t.deprecated = function (e, n, r, o) {
                var i = o ? "are" : "is";
                if (t.isDeprecated(e, n, r, o)) throw new Error(e + " " + i + " no longer supported. " + r)
            }
        }(r), function () {
            if (document.documentElement.animate) {
                var t = document.documentElement.animate([], 0), e = !0;
                if (t && (e = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (n) {
                    void 0 === t[n] && (e = !0)
                })), !e) return
            }
            !function (t, e, n) {
                e.convertEffectInput = function (n) {
                    var r = function (t) {
                        for (var e = {}, n = 0; n < t.length; n++) for (var r in t[n]) if ("offset" != r && "easing" != r && "composite" != r) {
                            var o = {offset: t[n].offset, easing: t[n].easing, value: t[n][r]};
                            e[r] = e[r] || [], e[r].push(o)
                        }
                        for (var i in e) {
                            var s = e[i];
                            if (0 != s[0].offset || 1 != s[s.length - 1].offset) throw{
                                type: DOMException.NOT_SUPPORTED_ERR,
                                name: "NotSupportedError",
                                message: "Partial keyframes are not supported"
                            }
                        }
                        return e
                    }(t.normalizeKeyframes(n)), o = function (n) {
                        var r = [];
                        for (var o in n) for (var i = n[o], s = 0; s < i.length - 1; s++) {
                            var a = s, u = s + 1, c = i[a].offset, l = i[u].offset, f = c, h = l;
                            0 == s && (f = -1 / 0, 0 == l && (u = a)), s == i.length - 2 && (h = 1 / 0, 1 == c && (a = u)), r.push({
                                applyFrom: f,
                                applyTo: h,
                                startOffset: i[a].offset,
                                endOffset: i[u].offset,
                                easingFunction: t.parseEasingFunction(i[a].easing),
                                property: o,
                                interpolation: e.propertyInterpolation(o, i[a].value, i[u].value)
                            })
                        }
                        return r.sort(function (t, e) {
                            return t.startOffset - e.startOffset
                        }), r
                    }(r);
                    return function (t, n) {
                        if (null != n) o.filter(function (t) {
                            return n >= t.applyFrom && n < t.applyTo
                        }).forEach(function (r) {
                            var o = n - r.startOffset, i = r.endOffset - r.startOffset,
                                s = 0 == i ? 0 : r.easingFunction(o / i);
                            e.apply(t, r.property, r.interpolation(s))
                        }); else for (var i in r) "offset" != i && "easing" != i && "composite" != i && e.clear(t, i)
                    }
                }
            }(r, o), function (t, e, n) {
                function r(t) {
                    return t.replace(/-(.)/g, function (t, e) {
                        return e.toUpperCase()
                    })
                }

                function o(t, e, n) {
                    i[n] = i[n] || [], i[n].push([t, e])
                }

                var i = {};
                e.addPropertiesHandler = function (t, e, n) {
                    for (var i = 0; i < n.length; i++) o(t, e, r(n[i]))
                };
                var s = {
                    backgroundColor: "transparent",
                    backgroundPosition: "0% 0%",
                    borderBottomColor: "currentColor",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderBottomWidth: "3px",
                    borderLeftColor: "currentColor",
                    borderLeftWidth: "3px",
                    borderRightColor: "currentColor",
                    borderRightWidth: "3px",
                    borderSpacing: "2px",
                    borderTopColor: "currentColor",
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderTopWidth: "3px",
                    bottom: "auto",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    color: "black",
                    fontSize: "100%",
                    fontWeight: "400",
                    height: "auto",
                    left: "auto",
                    letterSpacing: "normal",
                    lineHeight: "120%",
                    marginBottom: "0px",
                    marginLeft: "0px",
                    marginRight: "0px",
                    marginTop: "0px",
                    maxHeight: "none",
                    maxWidth: "none",
                    minHeight: "0px",
                    minWidth: "0px",
                    opacity: "1.0",
                    outlineColor: "invert",
                    outlineOffset: "0px",
                    outlineWidth: "3px",
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    right: "auto",
                    strokeDasharray: "none",
                    strokeDashoffset: "0px",
                    textIndent: "0px",
                    textShadow: "0px 0px 0px transparent",
                    top: "auto",
                    transform: "",
                    verticalAlign: "0px",
                    visibility: "visible",
                    width: "auto",
                    wordSpacing: "normal",
                    zIndex: "auto"
                };
                e.propertyInterpolation = function (n, o, a) {
                    var u = n;
                    /-/.test(n) && !t.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (u = r(n)), "initial" != o && "initial" != a || ("initial" == o && (o = s[u]), "initial" == a && (a = s[u]));
                    for (var c = o == a ? [] : i[u], l = 0; c && l < c.length; l++) {
                        var f = c[l][0](o), h = c[l][0](a);
                        if (void 0 !== f && void 0 !== h) {
                            var p = c[l][1](f, h);
                            if (p) {
                                var d = e.Interpolation.apply(null, p);
                                return function (t) {
                                    return 0 == t ? o : 1 == t ? a : d(t)
                                }
                            }
                        }
                    }
                    return e.Interpolation(!1, !0, function (t) {
                        return t ? a : o
                    })
                }
            }(r, o), function (t, e, n) {
                e.KeyframeEffect = function (n, r, o, i) {
                    var s, a = function (e) {
                        var n = t.calculateActiveDuration(e), r = function (r) {
                            return t.calculateIterationProgress(n, r, e)
                        };
                        return r._totalDuration = e.delay + n + e.endDelay, r
                    }(t.normalizeTimingInput(o)), u = e.convertEffectInput(r), c = function () {
                        u(n, s)
                    };
                    return c._update = function (t) {
                        return null !== (s = a(t))
                    }, c._clear = function () {
                        u(n, null)
                    }, c._hasSameTarget = function (t) {
                        return n === t
                    }, c._target = n, c._totalDuration = a._totalDuration, c._id = i, c
                }
            }(r, o), function (t, e) {
                function n(t, e, n) {
                    n.enumerable = !0, n.configurable = !0, Object.defineProperty(t, e, n)
                }

                function r(t) {
                    this._element = t, this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style, this._style = t.style, this._length = 0, this._isAnimatedProperty = {}, this._updateSvgTransformAttr = function (t, e) {
                        return !(!e.namespaceURI || -1 == e.namespaceURI.indexOf("/svg")) && (i in t || (t[i] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)), t[i])
                    }(window, t), this._savedTransformAttr = null;
                    for (var e = 0; e < this._style.length; e++) {
                        var n = this._style[e];
                        this._surrogateStyle[n] = this._style[n]
                    }
                    this._updateIndices()
                }

                function o(t) {
                    if (!t._webAnimationsPatchedStyle) {
                        var e = new r(t);
                        try {
                            n(t, "style", {
                                get: function () {
                                    return e
                                }
                            })
                        } catch (e) {
                            t.style._set = function (e, n) {
                                t.style[e] = n
                            }, t.style._clear = function (e) {
                                t.style[e] = ""
                            }
                        }
                        t._webAnimationsPatchedStyle = t.style
                    }
                }

                var i = "_webAnimationsUpdateSvgTransformAttr", s = {cssText: 1, length: 1, parentRule: 1}, a = {
                    getPropertyCSSValue: 1,
                    getPropertyPriority: 1,
                    getPropertyValue: 1,
                    item: 1,
                    removeProperty: 1,
                    setProperty: 1
                }, u = {removeProperty: 1, setProperty: 1};
                for (var c in r.prototype = {
                    get cssText() {
                        return this._surrogateStyle.cssText
                    }, set cssText(t) {
                        for (var e = {}, n = 0; n < this._surrogateStyle.length; n++) e[this._surrogateStyle[n]] = !0;
                        this._surrogateStyle.cssText = t, this._updateIndices();
                        for (n = 0; n < this._surrogateStyle.length; n++) e[this._surrogateStyle[n]] = !0;
                        for (var r in e) this._isAnimatedProperty[r] || this._style.setProperty(r, this._surrogateStyle.getPropertyValue(r))
                    }, get length() {
                        return this._surrogateStyle.length
                    }, get parentRule() {
                        return this._style.parentRule
                    }, _updateIndices: function () {
                        for (; this._length < this._surrogateStyle.length;) Object.defineProperty(this, this._length, {
                            configurable: !0,
                            enumerable: !1,
                            get: function (t) {
                                return function () {
                                    return this._surrogateStyle[t]
                                }
                            }(this._length)
                        }), this._length++;
                        for (; this._length > this._surrogateStyle.length;) this._length--, Object.defineProperty(this, this._length, {
                            configurable: !0,
                            enumerable: !1,
                            value: void 0
                        })
                    }, _set: function (e, n) {
                        this._style[e] = n, this._isAnimatedProperty[e] = !0, this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (null == this._savedTransformAttr && (this._savedTransformAttr = this._element.getAttribute("transform")), this._element.setAttribute("transform", t.transformToSvgMatrix(n)))
                    }, _clear: function (e) {
                        this._style[e] = this._surrogateStyle[e], this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (this._savedTransformAttr ? this._element.setAttribute("transform", this._savedTransformAttr) : this._element.removeAttribute("transform"), this._savedTransformAttr = null), delete this._isAnimatedProperty[e]
                    }
                }, a) r.prototype[c] = function (t, e) {
                    return function () {
                        var n = this._surrogateStyle[t].apply(this._surrogateStyle, arguments);
                        return e && (this._isAnimatedProperty[arguments[0]] || this._style[t].apply(this._style, arguments), this._updateIndices()), n
                    }
                }(c, c in u);
                for (var l in document.documentElement.style) l in s || l in a || function (t) {
                    n(r.prototype, t, {
                        get: function () {
                            return this._surrogateStyle[t]
                        }, set: function (e) {
                            this._surrogateStyle[t] = e, this._updateIndices(), this._isAnimatedProperty[t] || (this._style[t] = e)
                        }
                    })
                }(l);
                t.apply = function (e, n, r) {
                    o(e), e.style._set(t.propertyName(n), r)
                }, t.clear = function (e, n) {
                    e._webAnimationsPatchedStyle && e.style._clear(t.propertyName(n))
                }
            }(o), function (t) {
                window.Element.prototype.animate = function (e, n) {
                    var r = "";
                    return n && n.id && (r = n.id), t.timeline._play(t.KeyframeEffect(this, e, n, r))
                }
            }(o), function (t, e) {
                o.Interpolation = function (t, e, n) {
                    return function (r) {
                        return n(function t(e, n, r) {
                            if ("number" == typeof e && "number" == typeof n) return e * (1 - r) + n * r;
                            if ("boolean" == typeof e && "boolean" == typeof n) return r < .5 ? e : n;
                            if (e.length == n.length) {
                                for (var o = [], i = 0; i < e.length; i++) o.push(t(e[i], n[i], r));
                                return o
                            }
                            throw"Mismatched interpolation arguments " + e + ":" + n
                        }(t, e, r))
                    }
                }
            }(), function (t, e) {
                var n = function () {
                    function t(t, e) {
                        for (var n = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], r = 0; r < 4; r++) for (var o = 0; o < 4; o++) for (var i = 0; i < 4; i++) n[r][o] += e[r][i] * t[i][o];
                        return n
                    }

                    return function (e, n, r, o, i) {
                        for (var s = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], a = 0; a < 4; a++) s[a][3] = i[a];
                        for (a = 0; a < 3; a++) for (var u = 0; u < 3; u++) s[3][a] += e[u] * s[u][a];
                        var c = o[0], l = o[1], f = o[2], h = o[3],
                            p = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
                        p[0][0] = 1 - 2 * (l * l + f * f), p[0][1] = 2 * (c * l - f * h), p[0][2] = 2 * (c * f + l * h), p[1][0] = 2 * (c * l + f * h), p[1][1] = 1 - 2 * (c * c + f * f), p[1][2] = 2 * (l * f - c * h), p[2][0] = 2 * (c * f - l * h), p[2][1] = 2 * (l * f + c * h), p[2][2] = 1 - 2 * (c * c + l * l), s = t(s, p);
                        var d = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
                        for (r[2] && (d[2][1] = r[2], s = t(s, d)), r[1] && (d[2][1] = 0, d[2][0] = r[0], s = t(s, d)), r[0] && (d[2][0] = 0, d[1][0] = r[0], s = t(s, d)), a = 0; a < 3; a++) for (u = 0; u < 3; u++) s[a][u] *= n[a];
                        return function (t) {
                            return 0 == t[0][2] && 0 == t[0][3] && 0 == t[1][2] && 0 == t[1][3] && 0 == t[2][0] && 0 == t[2][1] && 1 == t[2][2] && 0 == t[2][3] && 0 == t[3][2] && 1 == t[3][3]
                        }(s) ? [s[0][0], s[0][1], s[1][0], s[1][1], s[3][0], s[3][1]] : s[0].concat(s[1], s[2], s[3])
                    }
                }();
                t.composeMatrix = n, t.quat = function (e, n, r) {
                    var o = t.dot(e, n), i = [];
                    if (1 === (o = function (t, e, n) {
                        return Math.max(Math.min(t, n), e)
                    }(o, -1, 1))) i = e; else for (var s = Math.acos(o), a = 1 * Math.sin(r * s) / Math.sqrt(1 - o * o), u = 0; u < 4; u++) i.push(e[u] * (Math.cos(r * s) - o * a) + n[u] * a);
                    return i
                }
            }(o), function (t, e, n) {
                t.sequenceNumber = 0;
                e.Animation = function (e) {
                    this.id = "", e && e._id && (this.id = e._id), this._sequenceNumber = t.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = e, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1
                }, e.Animation.prototype = {
                    _ensureAlive: function () {
                        this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, e.timeline._animations.push(this))
                    }, _tickCurrentTime: function (t, e) {
                        t != this._currentTime && (this._currentTime = t, this._isFinished && !e && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive())
                    }, get currentTime() {
                        return this._idle || this._currentTimePending ? null : this._currentTime
                    }, set currentTime(t) {
                        t = +t, isNaN(t) || (e.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - t / this._playbackRate), this._currentTimePending = !1, this._currentTime != t && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(t, !0), e.applyDirtiedAnimation(this)))
                    }, get startTime() {
                        return this._startTime
                    }, set startTime(t) {
                        t = +t, isNaN(t) || this._paused || this._idle || (this._startTime = t, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), e.applyDirtiedAnimation(this))
                    }, get playbackRate() {
                        return this._playbackRate
                    }, set playbackRate(t) {
                        if (t != this._playbackRate) {
                            var n = this.currentTime;
                            this._playbackRate = t, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)), null != n && (this.currentTime = n)
                        }
                    }, get _isFinished() {
                        return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
                    }, get _totalDuration() {
                        return this._effect._totalDuration
                    }, get playState() {
                        return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
                    }, _rewind: function () {
                        if (this._playbackRate >= 0) this._currentTime = 0; else {
                            if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
                            this._currentTime = this._totalDuration
                        }
                    }, play: function () {
                        this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)
                    }, pause: function () {
                        this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0
                    }, finish: function () {
                        this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, e.applyDirtiedAnimation(this))
                    }, cancel: function () {
                        this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._isFinished = !0, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), e.applyDirtiedAnimation(this))
                    }, reverse: function () {
                        this.playbackRate *= -1, this.play()
                    }, addEventListener: function (t, e) {
                        "function" == typeof e && "finish" == t && this._finishHandlers.push(e)
                    }, removeEventListener: function (t, e) {
                        if ("finish" == t) {
                            var n = this._finishHandlers.indexOf(e);
                            n >= 0 && this._finishHandlers.splice(n, 1)
                        }
                    }, _fireEvents: function (t) {
                        if (this._isFinished) {
                            if (!this._finishedFlag) {
                                var e = new function (t, e, n) {
                                        this.target = t, this.currentTime = e, this.timelineTime = n, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
                                    }(this, this._currentTime, t),
                                    n = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                                setTimeout(function () {
                                    n.forEach(function (t) {
                                        t.call(e.target, e)
                                    })
                                }, 0), this._finishedFlag = !0
                            }
                        } else this._finishedFlag = !1
                    }, _tick: function (t, e) {
                        this._idle || this._paused || (null == this._startTime ? e && (this.startTime = t - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((t - this._startTime) * this.playbackRate)), e && (this._currentTimePending = !1, this._fireEvents(t))
                    }, get _needsTick() {
                        return this.playState in {pending: 1, running: 1} || !this._finishedFlag
                    }, _targetAnimations: function () {
                        var t = this._effect._target;
                        return t._activeAnimations || (t._activeAnimations = []), t._activeAnimations
                    }, _markTarget: function () {
                        var t = this._targetAnimations();
                        -1 === t.indexOf(this) && t.push(this)
                    }, _unmarkTarget: function () {
                        var t = this._targetAnimations(), e = t.indexOf(this);
                        -1 !== e && t.splice(e, 1)
                    }
                }
            }(r, o), function (t, e, n) {
                function r(t) {
                    var e = c;
                    c = [], t < y.currentTime && (t = y.currentTime), y._animations.sort(o), y._animations = a(t, !0, y._animations)[0], e.forEach(function (e) {
                        e[1](t)
                    }), s(), void 0
                }

                function o(t, e) {
                    return t._sequenceNumber - e._sequenceNumber
                }

                function i() {
                    this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0
                }

                function s() {
                    p.forEach(function (t) {
                        t()
                    }), p.length = 0
                }

                function a(t, n, r) {
                    d = !0, h = !1, e.timeline.currentTime = t, f = !1;
                    var o = [], i = [], s = [], a = [];
                    return r.forEach(function (e) {
                        e._tick(t, n), e._inEffect ? (i.push(e._effect), e._markTarget()) : (o.push(e._effect), e._unmarkTarget()), e._needsTick && (f = !0);
                        var r = e._inEffect || e._needsTick;
                        e._inTimeline = r, r ? s.push(e) : a.push(e)
                    }), p.push.apply(p, o), p.push.apply(p, i), f && requestAnimationFrame(function () {
                    }), d = !1, [s, a]
                }

                var u = window.requestAnimationFrame, c = [], l = 0;
                window.requestAnimationFrame = function (t) {
                    var e = l++;
                    return 0 == c.length && u(r), c.push([e, t]), e
                }, window.cancelAnimationFrame = function (t) {
                    c.forEach(function (e) {
                        e[0] == t && (e[1] = function () {
                        })
                    })
                }, i.prototype = {
                    _play: function (n) {
                        n._timing = t.normalizeTimingInput(n.timing);
                        var r = new e.Animation(n);
                        return r._idle = !1, r._timeline = this, this._animations.push(r), e.restart(), e.applyDirtiedAnimation(r), r
                    }
                };
                var f = !1, h = !1;
                e.restart = function () {
                    return f || (f = !0, requestAnimationFrame(function () {
                    }), h = !0), h
                }, e.applyDirtiedAnimation = function (t) {
                    if (!d) {
                        t._markTarget();
                        var n = t._targetAnimations();
                        n.sort(o), a(e.timeline.currentTime, !1, n.slice())[1].forEach(function (t) {
                            var e = y._animations.indexOf(t);
                            -1 !== e && y._animations.splice(e, 1)
                        }), s()
                    }
                };
                var p = [], d = !1, y = new i;
                e.timeline = y
            }(r, o), function (t, e) {
                function n(t, e) {
                    for (var n = 0, r = 0; r < t.length; r++) n += t[r] * e[r];
                    return n
                }

                function r(t, e) {
                    return [t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15]]
                }

                function o(t) {
                    var e = t.rad || 0;
                    return ((t.deg || 0) / 360 + (t.grad || 0) / 400 + (t.turn || 0)) * (2 * Math.PI) + e
                }

                function i(t) {
                    switch (t.t) {
                        case"rotatex":
                            var e = o(t.d[0]);
                            return [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1];
                        case"rotatey":
                            e = o(t.d[0]);
                            return [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1];
                        case"rotate":
                        case"rotatez":
                            e = o(t.d[0]);
                            return [Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"rotate3d":
                            var n = t.d[0], r = t.d[1], i = t.d[2], s = (e = o(t.d[3]), n * n + r * r + i * i);
                            if (0 === s) n = 1, r = 0, i = 0; else if (1 !== s) {
                                var a = Math.sqrt(s);
                                n /= a, r /= a, i /= a
                            }
                            var u = Math.sin(e / 2), c = u * Math.cos(e / 2), l = u * u;
                            return [1 - 2 * (r * r + i * i) * l, 2 * (n * r * l + i * c), 2 * (n * i * l - r * c), 0, 2 * (n * r * l - i * c), 1 - 2 * (n * n + i * i) * l, 2 * (r * i * l + n * c), 0, 2 * (n * i * l + r * c), 2 * (r * i * l - n * c), 1 - 2 * (n * n + r * r) * l, 0, 0, 0, 0, 1];
                        case"scale":
                            return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"scalex":
                            return [t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"scaley":
                            return [1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"scalez":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1];
                        case"scale3d":
                            return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, t.d[2], 0, 0, 0, 0, 1];
                        case"skew":
                            var f = o(t.d[0]), h = o(t.d[1]);
                            return [1, Math.tan(h), 0, 0, Math.tan(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"skewx":
                            e = o(t.d[0]);
                            return [1, 0, 0, 0, Math.tan(e), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"skewy":
                            e = o(t.d[0]);
                            return [1, Math.tan(e), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case"translate":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, r = t.d[1].px || 0, 0, 1];
                        case"translatex":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, 0, 0, 1];
                        case"translatey":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, r = t.d[0].px || 0, 0, 1];
                        case"translatez":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, i = t.d[0].px || 0, 1];
                        case"translate3d":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, r = t.d[1].px || 0, i = t.d[2].px || 0, 1];
                        case"perspective":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t.d[0].px ? -1 / t.d[0].px : 0, 0, 0, 0, 1];
                        case"matrix":
                            return [t.d[0], t.d[1], 0, 0, t.d[2], t.d[3], 0, 0, 0, 0, 1, 0, t.d[4], t.d[5], 0, 1];
                        case"matrix3d":
                            return t.d
                    }
                }

                function s(t) {
                    return 0 === t.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : t.map(i).reduce(r)
                }

                var a = function () {
                    function t(t) {
                        return t[0][0] * t[1][1] * t[2][2] + t[1][0] * t[2][1] * t[0][2] + t[2][0] * t[0][1] * t[1][2] - t[0][2] * t[1][1] * t[2][0] - t[1][2] * t[2][1] * t[0][0] - t[2][2] * t[0][1] * t[1][0]
                    }

                    function e(t) {
                        var e = r(t);
                        return [t[0] / e, t[1] / e, t[2] / e]
                    }

                    function r(t) {
                        return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
                    }

                    function o(t, e, n, r) {
                        return [n * t[0] + r * e[0], n * t[1] + r * e[1], n * t[2] + r * e[2]]
                    }

                    return function (i) {
                        var s = [i.slice(0, 4), i.slice(4, 8), i.slice(8, 12), i.slice(12, 16)];
                        if (1 !== s[3][3]) return null;
                        for (var a = [], u = 0; u < 4; u++) a.push(s[u].slice());
                        for (u = 0; u < 3; u++) a[u][3] = 0;
                        if (0 === t(a)) return null;
                        var c, l = [];
                        s[0][3] || s[1][3] || s[2][3] ? (l.push(s[0][3]), l.push(s[1][3]), l.push(s[2][3]), l.push(s[3][3]), c = function (t, e) {
                            for (var n = [], r = 0; r < 4; r++) {
                                for (var o = 0, i = 0; i < 4; i++) o += t[i] * e[i][r];
                                n.push(o)
                            }
                            return n
                        }(l, function (t) {
                            return [[t[0][0], t[1][0], t[2][0], t[3][0]], [t[0][1], t[1][1], t[2][1], t[3][1]], [t[0][2], t[1][2], t[2][2], t[3][2]], [t[0][3], t[1][3], t[2][3], t[3][3]]]
                        }(function (e) {
                            for (var n = 1 / t(e), r = e[0][0], o = e[0][1], i = e[0][2], s = e[1][0], a = e[1][1], u = e[1][2], c = e[2][0], l = e[2][1], f = e[2][2], h = [[(a * f - u * l) * n, (i * l - o * f) * n, (o * u - i * a) * n, 0], [(u * c - s * f) * n, (r * f - i * c) * n, (i * s - r * u) * n, 0], [(s * l - a * c) * n, (c * o - r * l) * n, (r * a - o * s) * n, 0]], p = [], d = 0; d < 3; d++) {
                                for (var y = 0, m = 0; m < 3; m++) y += e[3][m] * h[m][d];
                                p.push(y)
                            }
                            return p.push(1), h.push(p), h
                        }(a)))) : c = [0, 0, 0, 1];
                        var f = s[3].slice(0, 3), h = [];
                        h.push(s[0].slice(0, 3));
                        var p = [];
                        p.push(r(h[0])), h[0] = e(h[0]);
                        var d = [];
                        h.push(s[1].slice(0, 3)), d.push(n(h[0], h[1])), h[1] = o(h[1], h[0], 1, -d[0]), p.push(r(h[1])), h[1] = e(h[1]), d[0] /= p[1], h.push(s[2].slice(0, 3)), d.push(n(h[0], h[2])), h[2] = o(h[2], h[0], 1, -d[1]), d.push(n(h[1], h[2])), h[2] = o(h[2], h[1], 1, -d[2]), p.push(r(h[2])), h[2] = e(h[2]), d[1] /= p[2], d[2] /= p[2];
                        var y = function (t, e) {
                            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                        }(h[1], h[2]);
                        if (n(h[0], y) < 0) for (u = 0; u < 3; u++) p[u] *= -1, h[u][0] *= -1, h[u][1] *= -1, h[u][2] *= -1;
                        var m, v, b = h[0][0] + h[1][1] + h[2][2] + 1;
                        return b > 1e-4 ? (m = .5 / Math.sqrt(b), v = [(h[2][1] - h[1][2]) * m, (h[0][2] - h[2][0]) * m, (h[1][0] - h[0][1]) * m, .25 / m]) : h[0][0] > h[1][1] && h[0][0] > h[2][2] ? v = [.25 * (m = 2 * Math.sqrt(1 + h[0][0] - h[1][1] - h[2][2])), (h[0][1] + h[1][0]) / m, (h[0][2] + h[2][0]) / m, (h[2][1] - h[1][2]) / m] : h[1][1] > h[2][2] ? (m = 2 * Math.sqrt(1 + h[1][1] - h[0][0] - h[2][2]), v = [(h[0][1] + h[1][0]) / m, .25 * m, (h[1][2] + h[2][1]) / m, (h[0][2] - h[2][0]) / m]) : (m = 2 * Math.sqrt(1 + h[2][2] - h[0][0] - h[1][1]), v = [(h[0][2] + h[2][0]) / m, (h[1][2] + h[2][1]) / m, .25 * m, (h[1][0] - h[0][1]) / m]), [f, p, d, v, c]
                    }
                }();
                t.dot = n, t.makeMatrixDecomposition = function (t) {
                    return [a(s(t))]
                }, t.transformListToMatrix = s
            }(o), function (t) {
                function e(t, e) {
                    var n = t.exec(e);
                    if (n) return [n = t.ignoreCase ? n[0].toLowerCase() : n[0], e.substr(n.length)]
                }

                function n(t, e) {
                    var n = t(e = e.replace(/^\s*/, ""));
                    if (n) return [n[0], n[1].replace(/^\s*/, "")]
                }

                function r(t, e, n, r, o) {
                    for (var i = [], s = [], a = [], u = function (t, e) {
                        for (var n = t, r = e; n && r;) n > r ? n %= r : r %= n;
                        return t * e / (n + r)
                    }(r.length, o.length), c = 0; c < u; c++) {
                        var l = e(r[c % r.length], o[c % o.length]);
                        if (!l) return;
                        i.push(l[0]), s.push(l[1]), a.push(l[2])
                    }
                    return [i, s, function (e) {
                        var r = e.map(function (t, e) {
                            return a[e](t)
                        }).join(n);
                        return t ? t(r) : r
                    }]
                }

                t.consumeToken = e, t.consumeTrimmed = n, t.consumeRepeated = function (t, r, o) {
                    t = n.bind(null, t);
                    for (var i = []; ;) {
                        var s = t(o);
                        if (!s) return [i, o];
                        if (i.push(s[0]), !(s = e(r, o = s[1])) || "" == s[1]) return [i, o];
                        o = s[1]
                    }
                }, t.consumeParenthesised = function (t, e) {
                    for (var n = 0, r = 0; r < e.length && (!/\s|,/.test(e[r]) || 0 != n); r++) if ("(" == e[r]) n++; else if (")" == e[r] && (0 == --n && r++, n <= 0)) break;
                    var o = t(e.substr(0, r));
                    return void 0 == o ? void 0 : [o, e.substr(r)]
                }, t.ignore = function (t) {
                    return function (e) {
                        var n = t(e);
                        return n && (n[0] = void 0), n
                    }
                }, t.optional = function (t, e) {
                    return function (n) {
                        return t(n) || [e, n]
                    }
                }, t.consumeList = function (e, n) {
                    for (var r = [], o = 0; o < e.length; o++) {
                        var i = t.consumeTrimmed(e[o], n);
                        if (!i || "" == i[0]) return;
                        void 0 !== i[0] && r.push(i[0]), n = i[1]
                    }
                    if ("" == n) return r
                }, t.mergeNestedRepeated = r.bind(null, null), t.mergeWrappedNestedRepeated = r, t.mergeList = function (t, e, n) {
                    for (var r = [], o = [], i = [], s = 0, a = 0; a < n.length; a++) if ("function" == typeof n[a]) {
                        var u = n[a](t[s], e[s++]);
                        r.push(u[0]), o.push(u[1]), i.push(u[2])
                    } else !function (t) {
                        r.push(!1), o.push(!1), i.push(function () {
                            return n[t]
                        })
                    }(a);
                    return [r, o, function (t) {
                        for (var e = "", n = 0; n < t.length; n++) e += i[n](t[n]);
                        return e
                    }]
                }
            }(o), function (t) {
                function e(e) {
                    var n = {inset: !1, lengths: [], color: null}, r = t.consumeRepeated(function (e) {
                        var r;
                        return (r = t.consumeToken(/^inset/i, e)) ? (n.inset = !0, r) : (r = t.consumeLengthOrPercent(e)) ? (n.lengths.push(r[0]), r) : (r = t.consumeColor(e)) ? (n.color = r[0], r) : void 0
                    }, /^/, e);
                    if (r && r[0].length) return [n, r[1]]
                }

                var n = function (e, n, r, o) {
                    function i(t) {
                        return {inset: t, color: [0, 0, 0, 0], lengths: [{px: 0}, {px: 0}, {px: 0}, {px: 0}]}
                    }

                    for (var s = [], a = [], u = 0; u < r.length || u < o.length; u++) {
                        var c = r[u] || i(o[u].inset), l = o[u] || i(r[u].inset);
                        s.push(c), a.push(l)
                    }
                    return t.mergeNestedRepeated(e, n, s, a)
                }.bind(null, function (e, n) {
                    for (; e.lengths.length < Math.max(e.lengths.length, n.lengths.length);) e.lengths.push({px: 0});
                    for (; n.lengths.length < Math.max(e.lengths.length, n.lengths.length);) n.lengths.push({px: 0});
                    if (e.inset == n.inset && !!e.color == !!n.color) {
                        for (var r, o = [], i = [[], 0], s = [[], 0], a = 0; a < e.lengths.length; a++) {
                            var u = t.mergeDimensions(e.lengths[a], n.lengths[a], 2 == a);
                            i[0].push(u[0]), s[0].push(u[1]), o.push(u[2])
                        }
                        if (e.color && n.color) {
                            var c = t.mergeColors(e.color, n.color);
                            i[1] = c[0], s[1] = c[1], r = c[2]
                        }
                        return [i, s, function (t) {
                            for (var n = e.inset ? "inset " : " ", i = 0; i < o.length; i++) n += o[i](t[0][i]) + " ";
                            return r && (n += r(t[1])), n
                        }]
                    }
                }, ", ");
                t.addPropertiesHandler(function (n) {
                    var r = t.consumeRepeated(e, /^,/, n);
                    if (r && "" == r[1]) return r[0]
                }, n, ["box-shadow", "text-shadow"])
            }(o), function (t, e) {
                function n(t) {
                    return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")
                }

                function r(t, e, n) {
                    return Math.min(e, Math.max(t, n))
                }

                function o(t) {
                    if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t)
                }

                function i(t, e) {
                    return function (o, i) {
                        return [o, i, function (o) {
                            return n(r(t, e, o))
                        }]
                    }
                }

                function s(t) {
                    var e = t.trim().split(/\s*[\s,]\s*/);
                    if (0 !== e.length) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var i = o(e[r]);
                            if (void 0 === i) return;
                            n.push(i)
                        }
                        return n
                    }
                }

                t.clamp = r, t.addPropertiesHandler(s, function (t, e) {
                    if (t.length == e.length) return [t, e, function (t) {
                        return t.map(n).join(" ")
                    }]
                }, ["stroke-dasharray"]), t.addPropertiesHandler(o, i(0, 1 / 0), ["border-image-width", "line-height"]), t.addPropertiesHandler(o, i(0, 1), ["opacity", "shape-image-threshold"]), t.addPropertiesHandler(o, function (t, e) {
                    if (0 != t) return i(0, 1 / 0)(t, e)
                }, ["flex-grow", "flex-shrink"]), t.addPropertiesHandler(o, function (t, e) {
                    return [t, e, function (t) {
                        return Math.round(r(1, 1 / 0, t))
                    }]
                }, ["orphans", "widows"]), t.addPropertiesHandler(o, function (t, e) {
                    return [t, e, Math.round]
                }, ["z-index"]), t.parseNumber = o, t.parseNumberList = s, t.mergeNumbers = function (t, e) {
                    return [t, e, n]
                }, t.numberToString = n
            }(o), function (t, e) {
                o.addPropertiesHandler(String, function (t, e) {
                    if ("visible" == t || "visible" == e) return [0, 1, function (n) {
                        return n <= 0 ? t : n >= 1 ? e : "visible"
                    }]
                }, ["visibility"])
            }(), function (t, e) {
                function n(t) {
                    t = t.trim(), i.fillStyle = "#000", i.fillStyle = t;
                    var e = i.fillStyle;
                    if (i.fillStyle = "#fff", i.fillStyle = t, e == i.fillStyle) {
                        i.fillRect(0, 0, 1, 1);
                        var n = i.getImageData(0, 0, 1, 1).data;
                        i.clearRect(0, 0, 1, 1);
                        var r = n[3] / 255;
                        return [n[0] * r, n[1] * r, n[2] * r, r]
                    }
                }

                function r(e, n) {
                    return [e, n, function (e) {
                        function n(t) {
                            return Math.max(0, Math.min(255, t))
                        }

                        if (e[3]) for (var r = 0; r < 3; r++) e[r] = Math.round(n(e[r] / e[3]));
                        return e[3] = t.numberToString(t.clamp(0, 1, e[3])), "rgba(" + e.join(",") + ")"
                    }]
                }

                var o = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                o.width = o.height = 1;
                var i = o.getContext("2d");
                t.addPropertiesHandler(n, r, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), t.consumeColor = t.consumeParenthesised.bind(null, n), t.mergeColors = r
            }(o), function (t, e) {
                function n(t) {
                    function e() {
                        var e = s.exec(t);
                        i = e ? e[0] : void 0
                    }

                    function n() {
                        if ("(" !== i) return function () {
                            var t = Number(i);
                            return e(), t
                        }();
                        e();
                        var t = o();
                        return ")" !== i ? NaN : (e(), t)
                    }

                    function r() {
                        for (var t = n(); "*" === i || "/" === i;) {
                            var r = i;
                            e();
                            var o = n();
                            "*" === r ? t *= o : t /= o
                        }
                        return t
                    }

                    function o() {
                        for (var t = r(); "+" === i || "-" === i;) {
                            var n = i;
                            e();
                            var o = r();
                            "+" === n ? t += o : t -= o
                        }
                        return t
                    }

                    var i, s = /([\+\-\w\.]+|[\(\)\*\/])/g;
                    return e(), o()
                }

                function r(t, e) {
                    if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0) return {px: 0};
                    if (/^[^(]*$|^calc/.test(e)) {
                        var r = {};
                        e = (e = e.replace(/calc\(/g, "(")).replace(t, function (t) {
                            return r[t] = null, "U" + t
                        });
                        for (var o = "U(" + t.source + ")", i = e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + o, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), s = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], a = 0; a < s.length;) s[a].test(i) ? (i = i.replace(s[a], "$1"), a = 0) : a++;
                        if ("D" == i) {
                            for (var u in r) {
                                var c = n(e.replace(new RegExp("U" + u, "g"), "").replace(new RegExp(o, "g"), "*0"));
                                if (!isFinite(c)) return;
                                r[u] = c
                            }
                            return r
                        }
                    }
                }

                function o(t, e) {
                    return i(t, e, !0)
                }

                function i(e, n, r) {
                    var o, i = [];
                    for (o in e) i.push(o);
                    for (o in n) i.indexOf(o) < 0 && i.push(o);
                    return e = i.map(function (t) {
                        return e[t] || 0
                    }), n = i.map(function (t) {
                        return n[t] || 0
                    }), [e, n, function (e) {
                        var n = e.map(function (n, o) {
                            return 1 == e.length && r && (n = Math.max(n, 0)), t.numberToString(n) + i[o]
                        }).join(" + ");
                        return e.length > 1 ? "calc(" + n + ")" : n
                    }]
                }

                var s = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc", a = r.bind(null, new RegExp(s, "g")),
                    u = r.bind(null, new RegExp(s + "|%", "g")), c = r.bind(null, /deg|rad|grad|turn/g);
                t.parseLength = a, t.parseLengthOrPercent = u, t.consumeLengthOrPercent = t.consumeParenthesised.bind(null, u), t.parseAngle = c, t.mergeDimensions = i;
                var l = t.consumeParenthesised.bind(null, a), f = t.consumeRepeated.bind(void 0, l, /^/),
                    h = t.consumeRepeated.bind(void 0, f, /^,/);
                t.consumeSizePairList = h;
                var p = t.mergeNestedRepeated.bind(void 0, o, " "), d = t.mergeNestedRepeated.bind(void 0, p, ",");
                t.mergeNonNegativeSizePair = p, t.addPropertiesHandler(function (t) {
                    var e = h(t);
                    if (e && "" == e[1]) return e[0]
                }, d, ["background-size"]), t.addPropertiesHandler(u, o, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), t.addPropertiesHandler(u, i, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"])
            }(o), function (t, e) {
                function n(e) {
                    return t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
                }

                function r(e) {
                    var r = t.consumeList([t.ignore(t.consumeToken.bind(null, /^rect/)), t.ignore(t.consumeToken.bind(null, /^\(/)), t.consumeRepeated.bind(null, n, /^,/), t.ignore(t.consumeToken.bind(null, /^\)/))], e);
                    if (r && 4 == r[0].length) return r[0]
                }

                var o = t.mergeWrappedNestedRepeated.bind(null, function (t) {
                    return "rect(" + t + ")"
                }, function (e, n) {
                    return "auto" == e || "auto" == n ? [!0, !1, function (r) {
                        var o = r ? e : n;
                        if ("auto" == o) return "auto";
                        var i = t.mergeDimensions(o, o);
                        return i[2](i[0])
                    }] : t.mergeDimensions(e, n)
                }, ", ");
                t.parseBox = r, t.mergeBoxes = o, t.addPropertiesHandler(r, o, ["clip"])
            }(o), function (t, e) {
                function n(t) {
                    return function (e) {
                        var n = 0;
                        return t.map(function (t) {
                            return t === c ? e[n++] : t
                        })
                    }
                }

                function r(t) {
                    return t
                }

                function o(e) {
                    if ("none" == (e = e.toLowerCase().trim())) return [];
                    for (var n, r = /\s*(\w+)\(([^)]*)\)/g, o = [], i = 0; n = r.exec(e);) {
                        if (n.index != i) return;
                        i = n.index + n[0].length;
                        var s = n[1], a = h[s];
                        if (!a) return;
                        var u = n[2].split(","), c = a[0];
                        if (c.length < u.length) return;
                        for (var p = [], d = 0; d < c.length; d++) {
                            var y, m = u[d], v = c[d];
                            if (void 0 === (y = m ? {
                                A: function (e) {
                                    return "0" == e.trim() ? f : t.parseAngle(e)
                                }, N: t.parseNumber, T: t.parseLengthOrPercent, L: t.parseLength
                            }[v.toUpperCase()](m) : {a: f, n: p[0], t: l}[v])) return;
                            p.push(y)
                        }
                        if (o.push({t: s, d: p}), r.lastIndex == e.length) return o
                    }
                }

                function i(t) {
                    return t.toFixed(6).replace(".000000", "")
                }

                function s(e, n) {
                    if (e.decompositionPair !== n) {
                        e.decompositionPair = n;
                        var r = t.makeMatrixDecomposition(e)
                    }
                    if (n.decompositionPair !== e) {
                        n.decompositionPair = e;
                        var o = t.makeMatrixDecomposition(n)
                    }
                    return null == r[0] || null == o[0] ? [[!1], [!0], function (t) {
                        return t ? n[0].d : e[0].d
                    }] : (r[0].push(0), o[0].push(1), [r, o, function (e) {
                        var n = t.quat(r[0][3], o[0][3], e[5]);
                        return t.composeMatrix(e[0], e[1], e[2], n, e[4]).map(i).join(",")
                    }])
                }

                function a(t) {
                    return t.replace(/[xy]/, "")
                }

                function u(t) {
                    return t.replace(/(x|y|z|3d)?$/, "3d")
                }

                var c = null, l = {px: 0}, f = {deg: 0}, h = {
                    matrix: ["NNNNNN", [c, c, 0, 0, c, c, 0, 0, 0, 0, 1, 0, c, c, 0, 1], r],
                    matrix3d: ["NNNNNNNNNNNNNNNN", r],
                    rotate: ["A"],
                    rotatex: ["A"],
                    rotatey: ["A"],
                    rotatez: ["A"],
                    rotate3d: ["NNNA"],
                    perspective: ["L"],
                    scale: ["Nn", n([c, c, 1]), r],
                    scalex: ["N", n([c, 1, 1]), n([c, 1])],
                    scaley: ["N", n([1, c, 1]), n([1, c])],
                    scalez: ["N", n([1, 1, c])],
                    scale3d: ["NNN", r],
                    skew: ["Aa", null, r],
                    skewx: ["A", null, n([c, f])],
                    skewy: ["A", null, n([f, c])],
                    translate: ["Tt", n([c, c, l]), r],
                    translatex: ["T", n([c, l, l]), n([c, l])],
                    translatey: ["T", n([l, c, l]), n([l, c])],
                    translatez: ["L", n([l, l, c])],
                    translate3d: ["TTL", r]
                };
                t.addPropertiesHandler(o, function (e, n) {
                    var r = t.makeMatrixDecomposition && !0, o = !1;
                    if (!e.length || !n.length) {
                        e.length || (o = !0, e = n, n = []);
                        for (var i = 0; i < e.length; i++) {
                            var c = e[i].t, l = e[i].d, f = "scale" == c.substr(0, 5) ? 1 : 0;
                            n.push({
                                t: c, d: l.map(function (t) {
                                    if ("number" == typeof t) return f;
                                    var e = {};
                                    for (var n in t) e[n] = f;
                                    return e
                                })
                            })
                        }
                    }
                    var p = function (t, e) {
                        return "perspective" == t && "perspective" == e || ("matrix" == t || "matrix3d" == t) && ("matrix" == e || "matrix3d" == e)
                    }, d = [], y = [], m = [];
                    if (e.length != n.length) {
                        if (!r) return;
                        d = [(S = s(e, n))[0]], y = [S[1]], m = [["matrix", [S[2]]]]
                    } else for (i = 0; i < e.length; i++) {
                        var v = e[i].t, b = n[i].t, g = e[i].d, w = n[i].d, _ = h[v], E = h[b];
                        if (p(v, b)) {
                            if (!r) return;
                            var S = s([e[i]], [n[i]]);
                            d.push(S[0]), y.push(S[1]), m.push(["matrix", [S[2]]])
                        } else {
                            if (v == b) c = v; else if (_[2] && E[2] && a(v) == a(b)) c = a(v), g = _[2](g), w = E[2](w); else {
                                if (!_[1] || !E[1] || u(v) != u(b)) {
                                    if (!r) return;
                                    d = [(S = s(e, n))[0]], y = [S[1]], m = [["matrix", [S[2]]]];
                                    break
                                }
                                c = u(v), g = _[1](g), w = E[1](w)
                            }
                            for (var x = [], O = [], T = [], C = 0; C < g.length; C++) S = ("number" == typeof g[C] ? t.mergeNumbers : t.mergeDimensions)(g[C], w[C]), x[C] = S[0], O[C] = S[1], T.push(S[2]);
                            d.push(x), y.push(O), m.push([c, T])
                        }
                    }
                    if (o) {
                        var N = d;
                        d = y, y = N
                    }
                    return [d, y, function (t) {
                        return t.map(function (t, e) {
                            var n = t.map(function (t, n) {
                                return m[e][1][n](t)
                            }).join(",");
                            return "matrix" == m[e][0] && 16 == n.split(",").length && (m[e][0] = "matrix3d"), m[e][0] + "(" + n + ")"
                        }).join(" ")
                    }]
                }, ["transform"]), t.transformToSvgMatrix = function (e) {
                    var n = t.transformListToMatrix(o(e));
                    return "matrix(" + i(n[0]) + " " + i(n[1]) + " " + i(n[4]) + " " + i(n[5]) + " " + i(n[12]) + " " + i(n[13]) + ")"
                }
            }(o), function (t) {
                function e(e) {
                    return e = 100 * Math.round(e / 100), 400 === (e = t.clamp(100, 900, e)) ? "normal" : 700 === e ? "bold" : String(e)
                }

                t.addPropertiesHandler(function (t) {
                    var e = Number(t);
                    if (!(isNaN(e) || e < 100 || e > 900 || e % 100 != 0)) return e
                }, function (t, n) {
                    return [t, n, e]
                }, ["font-weight"])
            }(o), function (t) {
                function e(t) {
                    var e = {};
                    for (var n in t) e[n] = -t[n];
                    return e
                }

                function r(e) {
                    return t.consumeToken(/^(left|center|right|top|bottom)\b/i, e) || t.consumeLengthOrPercent(e)
                }

                function o(e, o) {
                    var i = t.consumeRepeated(r, /^/, o);
                    if (i && "" == i[1]) {
                        var a = i[0];
                        if (a[0] = a[0] || "center", a[1] = a[1] || "center", 3 == e && (a[2] = a[2] || {px: 0}), a.length == e) {
                            if (/top|bottom/.test(a[0]) || /left|right/.test(a[1])) {
                                var u = a[0];
                                a[0] = a[1], a[1] = u
                            }
                            if (/left|right|center|Object/.test(a[0]) && /top|bottom|center|Object/.test(a[1])) return a.map(function (t) {
                                return "object" == n(t) ? t : s[t]
                            })
                        }
                    }
                }

                function i(n) {
                    var o = t.consumeRepeated(r, /^/, n);
                    if (o) {
                        for (var i = o[0], a = [{"%": 50}, {"%": 50}], u = 0, c = !1, l = 0; l < i.length; l++) {
                            var f = i[l];
                            "string" == typeof f ? (c = /bottom|right/.test(f), a[u = {
                                left: 0,
                                right: 0,
                                center: u,
                                top: 1,
                                bottom: 1
                            }[f]] = s[f], "center" == f && u++) : (c && ((f = e(f))["%"] = (f["%"] || 0) + 100), a[u] = f, u++, c = !1)
                        }
                        return [a, o[1]]
                    }
                }

                var s = {left: {"%": 0}, center: {"%": 50}, right: {"%": 100}, top: {"%": 0}, bottom: {"%": 100}},
                    a = t.mergeNestedRepeated.bind(null, t.mergeDimensions, " ");
                t.addPropertiesHandler(o.bind(null, 3), a, ["transform-origin"]), t.addPropertiesHandler(o.bind(null, 2), a, ["perspective-origin"]), t.consumePosition = i, t.mergeOffsetList = a;
                var u = t.mergeNestedRepeated.bind(null, a, ", ");
                t.addPropertiesHandler(function (e) {
                    var n = t.consumeRepeated(i, /^,/, e);
                    if (n && "" == n[1]) return n[0]
                }, u, ["background-position", "object-position"])
            }(o), function (t) {
                var e = t.consumeParenthesised.bind(null, t.parseLengthOrPercent),
                    n = t.consumeRepeated.bind(void 0, e, /^/),
                    r = t.mergeNestedRepeated.bind(void 0, t.mergeDimensions, " "),
                    o = t.mergeNestedRepeated.bind(void 0, r, ",");
                t.addPropertiesHandler(function (r) {
                    var o = t.consumeToken(/^circle/, r);
                    if (o && o[0]) return ["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), e, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], o[1]));
                    var i = t.consumeToken(/^ellipse/, r);
                    if (i && i[0]) return ["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), n, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], i[1]));
                    var s = t.consumeToken(/^polygon/, r);
                    return s && s[0] ? ["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), t.optional(t.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), t.consumeSizePairList, t.ignore(t.consumeToken.bind(void 0, /^\)/))], s[1])) : void 0
                }, function (e, n) {
                    if (e[0] === n[0]) return "circle" == e[0] ? t.mergeList(e.slice(1), n.slice(1), ["circle(", t.mergeDimensions, " at ", t.mergeOffsetList, ")"]) : "ellipse" == e[0] ? t.mergeList(e.slice(1), n.slice(1), ["ellipse(", t.mergeNonNegativeSizePair, " at ", t.mergeOffsetList, ")"]) : "polygon" == e[0] && e[1] == n[1] ? t.mergeList(e.slice(2), n.slice(2), ["polygon(", e[1], o, ")"]) : void 0
                }, ["shape-outside"])
            }(o), function (t, e) {
                function n(t, e) {
                    e.concat([t]).forEach(function (e) {
                        e in document.documentElement.style && (r[t] = e), o[e] = t
                    })
                }

                var r = {}, o = {};
                n("transform", ["webkitTransform", "msTransform"]), n("transformOrigin", ["webkitTransformOrigin"]), n("perspective", ["webkitPerspective"]), n("perspectiveOrigin", ["webkitPerspectiveOrigin"]), t.propertyName = function (t) {
                    return r[t] || t
                }, t.unprefixedPropertyName = function (t) {
                    return o[t] || t
                }
            }(o)
        }(), function () {
            if (void 0 === document.createElement("div").animate([]).oncancel) {
                if (window.performance && performance.now) var t = function () {
                    return performance.now()
                }; else t = function () {
                    return Date.now()
                };
                var e = window.Element.prototype.animate;
                window.Element.prototype.animate = function (n, r) {
                    var o = e.call(this, n, r);
                    o._cancelHandlers = [], o.oncancel = null;
                    var i = o.cancel;
                    o.cancel = function () {
                        i.call(this);
                        var e = new function (t, e, n) {
                            this.target = t, this.currentTime = e, this.timelineTime = n, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
                        }(this, null, t()), n = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
                        setTimeout(function () {
                            n.forEach(function (t) {
                                t.call(e.target, e)
                            })
                        }, 0)
                    };
                    var s = o.addEventListener;
                    o.addEventListener = function (t, e) {
                        "function" == typeof e && "cancel" == t ? this._cancelHandlers.push(e) : s.call(this, t, e)
                    };
                    var a = o.removeEventListener;
                    return o.removeEventListener = function (t, e) {
                        if ("cancel" == t) {
                            var n = this._cancelHandlers.indexOf(e);
                            n >= 0 && this._cancelHandlers.splice(n, 1)
                        } else a.call(this, t, e)
                    }, o
                }
            }
        }(), function (t) {
            var e = document.documentElement, n = null, r = !1;
            try {
                var o = "0" == getComputedStyle(e).getPropertyValue("opacity") ? "1" : "0";
                (n = e.animate({opacity: [o, o]}, {duration: 1})).currentTime = 0, r = getComputedStyle(e).getPropertyValue("opacity") == o
            } catch (t) {
            } finally {
                n && n.cancel()
            }
            if (!r) {
                var i = window.Element.prototype.animate;
                window.Element.prototype.animate = function (e, n) {
                    return window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || null === e || (e = t.convertToArrayForm(e)), i.call(this, e, n)
                }
            }
        }(r), e.true = {}
    }(0, function () {
        return this
    }())
}, function (t, e) {
    window.requestIdleCallback = window.requestIdleCallback || function (t) {
        return window.setTimeout(t, 0)
    }, window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    !function (t, e, r) {
        var o = [], i = {
            _version: "3.6.0",
            _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !1},
            _q: [],
            on: function (t, e) {
                var n = this;
                setTimeout(function () {
                    e(n[t])
                }, 0)
            },
            addTest: function (t, e, n) {
                o.push({name: t, fn: e, options: n})
            },
            addAsyncTest: function (t) {
                o.push({name: null, fn: t})
            }
        }, s = function () {
        };
        s.prototype = i, (s = new s).addTest("customelements", "customElements" in t), s.addTest("customevent", "CustomEvent" in t && "function" == typeof t.CustomEvent), s.addTest("eventlistener", "addEventListener" in t), s.addTest("history", function () {
            var e = navigator.userAgent;
            return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState" in t.history)
        }), s.addTest("queryselector", "querySelector" in e && "querySelectorAll" in e), s.addTest("promises", function () {
            return "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function () {
                var e;
                return new t.Promise(function (t) {
                    e = t
                }), "function" == typeof e
            }()
        });
        var a = [];

        function u(t, e) {
            return n(t) === e
        }

        var c = i._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        i._prefixes = c;
        var l = e.documentElement;

        function f(t) {
            return t.replace(/([a-z])-([a-z])/g, function (t, e, n) {
                return e + n.toUpperCase()
            }).replace(/^-/, "")
        }

        s.addTest("classlist", "classList" in l), s.addTest("documentfragment", function () {
            return "createDocumentFragment" in e && "appendChild" in l
        });
        var h = "svg" === l.nodeName.toLowerCase();

        function p() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : h ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function d(t, n, r, o) {
            var i, s, a, u, c = "modernizr", f = p("div"), d = function () {
                var t = e.body;
                return t || ((t = p(h ? "svg" : "body")).fake = !0), t
            }();
            if (parseInt(r, 10)) for (; r--;) (a = p("div")).id = o ? o[r] : c + (r + 1), f.appendChild(a);
            return (i = p("style")).type = "text/css", i.id = "s" + c, (d.fake ? d : f).appendChild(i), d.appendChild(f), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(e.createTextNode(t)), f.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = l.style.overflow, l.style.overflow = "hidden", l.appendChild(d)), s = n(f, t), d.fake ? (d.parentNode.removeChild(d), l.style.overflow = u, l.offsetHeight) : f.parentNode.removeChild(f), !!s
        }

        s.addTest("opacity", function () {
            var t = p("a").style;
            return t.cssText = c.join("opacity:.55;"), /^0.55$/.test(t.opacity)
        }), s.addTest("csspointerevents", function () {
            var t = p("a").style;
            return t.cssText = "pointer-events:auto", "auto" === t.pointerEvents
        }), s.addTest("cssremunit", function () {
            var t = p("a").style;
            try {
                t.fontSize = "3rem"
            } catch (t) {
            }
            return /rem/.test(t.fontSize)
        });
        var y = i.testStyles = d;
        s.addTest("touchevents", function () {
            var n;
            if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) n = !0; else {
                var r = ["@media (", c.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                y(r, function (t) {
                    n = 9 === t.offsetTop
                })
            }
            return n
        });
        var m = i._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];
        i._cssomPrefixes = m;
        var v = function (e) {
            var n, o = c.length, i = t.CSSRule;
            if (void 0 === i) return r;
            if (!e) return !1;
            if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + e;
            for (var s = 0; s < o; s++) {
                var a = c[s];
                if (a.toUpperCase() + "_" + n in i) return "@-" + a.toLowerCase() + "-" + e
            }
            return !1
        };
        i.atRule = v;
        var b = i._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];

        function g(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function w(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        i._domPrefixes = b;
        var _ = {elem: p("modernizr")};
        s._q.push(function () {
            delete _.elem
        });
        var E = {style: _.elem.style};

        function S(t) {
            return t.replace(/([A-Z])/g, function (t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function x(e, n) {
            var o = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; o--;) if (t.CSS.supports(S(e[o]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var i = []; o--;) i.push("(" + S(e[o]) + ":" + n + ")");
                return d("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == function (e, n, r) {
                        var o;
                        if ("getComputedStyle" in t) {
                            o = getComputedStyle.call(t, e, n);
                            var i = t.console;
                            null !== o ? r && (o = o.getPropertyValue(r)) : i && i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        } else o = !n && e.currentStyle && e.currentStyle[r];
                        return o
                    }(e, null, "position")
                })
            }
            return r
        }

        function O(t, e, n, o, i) {
            var s = t.charAt(0).toUpperCase() + t.slice(1), a = (t + " " + m.join(s + " ") + s).split(" ");
            return u(e, "string") || u(e, "undefined") ? function (t, e, n, o) {
                if (o = !u(o, "undefined") && o, !u(n, "undefined")) {
                    var i = x(t, n);
                    if (!u(i, "undefined")) return i
                }
                for (var s, a, c, l, h, d = ["modernizr", "tspan", "samp"]; !E.style && d.length;) s = !0, E.modElem = p(d.shift()), E.style = E.modElem.style;

                function y() {
                    s && (delete E.style, delete E.modElem)
                }

                for (c = t.length, a = 0; a < c; a++) if (l = t[a], h = E.style[l], g(l, "-") && (l = f(l)), E.style[l] !== r) {
                    if (o || u(n, "undefined")) return y(), "pfx" != e || l;
                    try {
                        E.style[l] = n
                    } catch (t) {
                    }
                    if (E.style[l] != h) return y(), "pfx" != e || l
                }
                return y(), !1
            }(a, e, o, i) : function (t, e, n) {
                var r;
                for (var o in t) if (t[o] in e) return !1 === n ? t[o] : u(r = e[t[o]], "function") ? w(r, n || e) : r;
                return !1
            }(a = (t + " " + b.join(s + " ") + s).split(" "), e, n)
        }

        s._q.unshift(function () {
            delete E.style
        }), i.testAllProps = O;
        var T = i.prefixed = function (t, e, n) {
            return 0 === t.indexOf("@") ? v(t) : (-1 != t.indexOf("-") && (t = f(t)), e ? O(t, e, n) : O(t, "pfx"))
        };

        function C(t, e, n) {
            return O(t, r, r, e, n)
        }

        s.addTest("requestanimationframe", !!T("requestAnimationFrame", t), {aliases: ["raf"]}), s.addTest("matchmedia", !!T("matchMedia", t)), i.testAllProps = C, s.addTest("cssanimations", C("animationName", "a", !0)), s.addTest("csstransforms", function () {
            return -1 === navigator.userAgent.indexOf("Android 2.") && C("transform", "scale(1)", !0)
        }), s.addTest("template", "content" in p("template")), function () {
            var t, e, n, r, i, c;
            for (var l in o) if (o.hasOwnProperty(l)) {
                if (t = [], (e = o[l]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                for (r = u(e.fn, "function") ? e.fn() : e.fn, i = 0; i < t.length; i++) 1 === (c = t[i].split(".")).length ? s[c[0]] = r : (!s[c[0]] || s[c[0]] instanceof Boolean || (s[c[0]] = new Boolean(s[c[0]])), s[c[0]][c[1]] = r), a.push((r ? "" : "no-") + c.join("-"))
            }
        }(), delete i.addTest, delete i.addAsyncTest;
        for (var N = 0; N < s._q.length; N++) s._q[N]();
        t.Modernizr = s
    }(window, document)
}, function (t, e) {
    console.log(" __  __                __                                     __         \r\n/\\ \\/\\ \\              /\\ \\             __                    /\\ \\        \r\n\\ \\ \\_\\ \\   __  __    \\_\\ \\      __   /\\_\\      __       ___ \\ \\ \\/'\\    \r\n \\ \\  _  \\ /\\ \\/\\ \\   /'_` \\   /'__`\\ \\/\\ \\   /'__`\\    /'___\\\\ \\ , <    \r\n  \\ \\ \\ \\ \\\\ \\ \\_\\ \\ /\\ \\L\\ \\ /\\  __/  \\ \\ \\ /\\ \\L\\.\\_ /\\ \\__/ \\ \\ \\\\`\\  \r\n   \\ \\_\\ \\_\\\\/`____ \\\\ \\___,_\\\\ \\____\\ _\\ \\ \\\\ \\__/.\\_\\\\ \\____\\ \\ \\_\\ \\_\\\r\n    \\/_/\\/_/ `/___/> \\\\/__,_ / \\/____//\\ \\_\\ \\\\/__/\\/_/ \\/____/  \\/_/\\/_/\r\n                /\\___/                \\ \\____/                           \r\n                \\/__/                  \\/___/                            \n\n"), console.log("Powered by Hydejack v8.1.1 <https://hydejack.com/>")
}, function (t, e, n) {
    "use strict";
    var r = n(7), o = n(22)(0), i = n(55)([].forEach, !0);
    r(r.P + r.F * !i, "Array", {
        forEach: function (t) {
            return o(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    var r = n(42), o = n(43), i = n(45), s = Object.defineProperty;
    e.f = n(13) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return s(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(4);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    t.exports = !n(13) && !n(14)(function () {
        return 7 != Object.defineProperty(n(44)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(4), o = n(8).document, i = r(o) && r(o.createElement);
    t.exports = function (t) {
        return i ? o.createElement(t) : {}
    }
}, function (t, e, n) {
    var r = n(4);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r = n(8), o = n(12), i = n(48), s = n(19)("src"), a = Function.toString, u = ("" + a).split("toString");
    n(3).inspectSource = function (t) {
        return a.call(t)
    }, (t.exports = function (t, e, n, a) {
        var c = "function" == typeof n;
        c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[s] || a.call(this)
    })
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(16);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e, n) {
    var r = n(51);
    t.exports = function (t, e) {
        return new (r(t))(e)
    }
}, function (t, e, n) {
    var r = n(4), o = n(52), i = n(9)("species");
    t.exports = function (t) {
        var e;
        return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function (t, e, n) {
    var r = n(15);
    t.exports = Array.isArray || function (t) {
        return "Array" == r(t)
    }
}, function (t, e, n) {
    var r = n(3), o = n(8), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(54) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    "use strict";
    var r = n(14);
    t.exports = function (t, e) {
        return !!t && r(function () {
            e ? t.call(null, function () {
            }, 1) : t.call(null)
        })
    }
}, function (t, e, n) {
    var r = n(7);
    r(r.P, "Function", {bind: n(57)})
}, function (t, e, n) {
    "use strict";
    var r = n(21), o = n(4), i = n(58), s = [].slice, a = {};
    t.exports = Function.bind || function (t) {
        var e = r(this), n = s.call(arguments, 1), u = function r() {
            var o = n.concat(s.call(arguments));
            return this instanceof r ? function (t, e, n) {
                if (!(e in a)) {
                    for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
                    a[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                }
                return a[e](t, n)
            }(e, o.length, o) : i(e, o, t)
        };
        return o(e.prototype) && (u.prototype = e.prototype), u
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function (t, e, n) {
    n(60), t.exports = n(3).String.includes
}, function (t, e, n) {
    "use strict";
    var r = n(7), o = n(61);
    r(r.P + r.F * n(63)("includes"), "String", {
        includes: function (t) {
            return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(62), o = n(16);
    t.exports = function (t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(t))
    }
}, function (t, e, n) {
    var r = n(4), o = n(15), i = n(9)("match");
    t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
    }
}, function (t, e, n) {
    var r = n(9)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./"[t](e)
            } catch (t) {
            }
        }
        return !0
    }
}, function (t, e, n) {
    n(65), t.exports = n(3).Array.find
}, function (t, e, n) {
    "use strict";
    var r = n(7), o = n(22)(5), i = !0;
    "find" in [] && Array(1).find(function () {
        i = !1
    }), r(r.P + r.F * i, "Array", {
        find: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(26)("find")
}, function (t, e, n) {
    var r = n(27), o = n(67), i = {};
    for (var s in r) r.hasOwnProperty(s) && (i[r[s]] = s);
    var a = t.exports = {to: {}};

    function u(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function c(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }

    a.get = function (t) {
        var e, n;
        switch (t.substring(0, 3).toLowerCase()) {
            case"hsl":
                e = a.get.hsl(t), n = "hsl";
                break;
            case"hwb":
                e = a.get.hwb(t), n = "hwb";
                break;
            default:
                e = a.get.rgb(t), n = "rgb"
        }
        return e ? {model: n, value: e} : null
    }, a.get.rgb = function (t) {
        if (!t) return null;
        var e, n, o, i = [0, 0, 0, 1];
        if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
            for (o = e[2], e = e[1], n = 0; n < 3; n++) {
                var s = 2 * n;
                i[n] = parseInt(e.slice(s, s + 2), 16)
            }
            o && (i[3] = Math.round(parseInt(o, 16) / 255 * 100) / 100)
        } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
            for (o = (e = e[1])[3], n = 0; n < 3; n++) i[n] = parseInt(e[n] + e[n], 16);
            o && (i[3] = Math.round(parseInt(o + o, 16) / 255 * 100) / 100)
        } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
            for (n = 0; n < 3; n++) i[n] = parseInt(e[n + 1], 0);
            e[4] && (i[3] = parseFloat(e[4]))
        } else {
            if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (e = t.match(/(\D+)/)) ? "transparent" === e[1] ? [0, 0, 0, 0] : (i = r[e[1]]) ? (i[3] = 1, i) : null : null;
            for (n = 0; n < 3; n++) i[n] = Math.round(2.55 * parseFloat(e[n + 1]));
            e[4] && (i[3] = parseFloat(e[4]))
        }
        for (n = 0; n < 3; n++) i[n] = u(i[n], 0, 255);
        return i[3] = u(i[3], 0, 1), i
    }, a.get.hsl = function (t) {
        if (!t) return null;
        var e = t.match(/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (e) {
            var n = parseFloat(e[4]);
            return [(parseFloat(e[1]) % 360 + 360) % 360, u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
        }
        return null
    }, a.get.hwb = function (t) {
        if (!t) return null;
        var e = t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (e) {
            var n = parseFloat(e[4]);
            return [(parseFloat(e[1]) % 360 + 360) % 360, u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
        }
        return null
    }, a.to.hex = function () {
        var t = o(arguments);
        return "#" + c(t[0]) + c(t[1]) + c(t[2]) + (t[3] < 1 ? c(Math.round(255 * t[3])) : "")
    }, a.to.rgb = function () {
        var t = o(arguments);
        return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")"
    }, a.to.rgb.percent = function () {
        var t = o(arguments), e = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100),
            r = Math.round(t[2] / 255 * 100);
        return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + n + "%, " + r + "%)" : "rgba(" + e + "%, " + n + "%, " + r + "%, " + t[3] + ")"
    }, a.to.hsl = function () {
        var t = o(arguments);
        return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")"
    }, a.to.hwb = function () {
        var t = o(arguments), e = "";
        return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")"
    }, a.to.keyword = function (t) {
        return i[t.slice(0, 3)]
    }
}, function (t, e, n) {
    "use strict";
    var r = n(68), o = Array.prototype.concat, i = Array.prototype.slice, s = t.exports = function (t) {
        for (var e = [], n = 0, s = t.length; n < s; n++) {
            var a = t[n];
            r(a) ? e = o.call(e, i.call(a)) : e.push(a)
        }
        return e
    };
    s.wrap = function (t) {
        return function () {
            return t(s(arguments))
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name))
    }
}, function (t, e, n) {
    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var o = n(28), i = n(70), s = {};
    Object.keys(o).forEach(function (t) {
        s[t] = {}, Object.defineProperty(s[t], "channels", {value: o[t].channels}), Object.defineProperty(s[t], "labels", {value: o[t].labels});
        var e = i(t);
        Object.keys(e).forEach(function (n) {
            var o = e[n];
            s[t][n] = function (t) {
                var e = function (e) {
                    if (void 0 === e || null === e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" === r(n)) for (var o = n.length, i = 0; i < o; i++) n[i] = Math.round(n[i]);
                    return n
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(o), s[t][n].raw = function (t) {
                var e = function (e) {
                    return void 0 === e || null === e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(o)
        })
    }), t.exports = s
}, function (t, e, n) {
    var r = n(28);

    function o(t) {
        var e = function () {
            for (var t = {}, e = Object.keys(r), n = e.length, o = 0; o < n; o++) t[e[o]] = {
                distance: -1,
                parent: null
            };
            return t
        }(), n = [t];
        for (e[t].distance = 0; n.length;) for (var o = n.pop(), i = Object.keys(r[o]), s = i.length, a = 0; a < s; a++) {
            var u = i[a], c = e[u];
            -1 === c.distance && (c.distance = e[o].distance + 1, c.parent = o, n.unshift(u))
        }
        return e
    }

    function i(t, e) {
        return function (n) {
            return e(t(n))
        }
    }

    function s(t, e) {
        for (var n = [e[t].parent, t], o = r[e[t].parent][t], s = e[t].parent; e[s].parent;) n.unshift(e[s].parent), o = i(r[e[s].parent][s], o), s = e[s].parent;
        return o.conversion = n, o
    }

    t.exports = function (t) {
        for (var e = o(t), n = {}, r = Object.keys(e), i = r.length, a = 0; a < i; a++) {
            var u = r[a];
            null !== e[u].parent && (n[u] = s(u, e))
        }
        return n
    }
}, function (t, e, n) {
    n(72), t.exports = n(3).Array.includes
}, function (t, e, n) {
    "use strict";
    var r = n(7), o = n(73)(!0);
    r(r.P, "Array", {
        includes: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(26)("includes")
}, function (t, e, n) {
    var r = n(74), o = n(24), i = n(75);
    t.exports = function (t) {
        return function (e, n, s) {
            var a, u = r(e), c = o(u.length), l = i(s, c);
            if (t && n != n) {
                for (; c > l;) if ((a = u[l++]) != a) return !0
            } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var r = n(23), o = n(16);
    t.exports = function (t) {
        return r(o(t))
    }
}, function (t, e, n) {
    var r = n(25), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    n(31), n(35);
    var r = n(10), o = (n(36), n(29)), i = n.n(o),
        s = (n(37), n(38), n(39), n(11), "undefined" != typeof Set && 1 === new Set([1]).size ? Set : function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return (t = t.filter(function (e, n) {
                return n === t.indexOf(e)
            })).size = t.length, t.has = function (e) {
                return t.indexOf(e) > -1
            }, t.add = function (e) {
                return t.has(e) || (t.size++, t.push(e)), t
            }, t.delete = function (e) {
                var n;
                return (n = t.has(e)) && (t.size--, t.splice(t.indexOf(e), 1)), n
            }, t.clear = function () {
                for (; t.pop();) ;
                t.size = 0
            }, t
        });

    function a(t, e) {
        return t ? t(e) : e
    }

    function u(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
        return t.replace(/([a-z\d])([A-Z])/g, "$1".concat(e, "$2")).replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1".concat(e, "$2")).toLowerCase()
    }

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function f(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function p(t, e) {
        return (p = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    var y = new s(["customevent"]), m = Symbol || function (t) {
        return "_".concat(t)
    }, v = m("sroot"), b = m("state");
    window.process = window.process || {}, window.process.env = window.process.env || {}, window.requestIdleCallback = window.requestIdleCallback || function (t) {
        return window.setTimeout(t, 0)
    }, window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout;
    var g = function t() {
        d(this, t)
    }, w = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
        return function (e) {
            function n() {
                return d(this, n), f(this, h(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && p(t, e)
            }(n, t), function (t, e, n) {
                e && l(t.prototype, e), n && l(t, n)
            }(n, [{
                key: "setupComponent", value: function (t, e) {
                    var n = this.constructor.defaults;
                    this[b] = Object.assign({}, n, e), this.setupProperties(this), this[v] = this.setupShadowDOM(t)
                }
            }, {
                key: "setupShadowDOM", value: function (t) {
                    return t
                }
            }, {
                key: "connectComponent", value: function () {
                }
            }, {
                key: "disconnectComponent", value: function () {
                }
            }, {
                key: "adoptComponent", value: function () {
                }
            }, {
                key: "getRoot", value: function () {
                    return this[v]
                }
            }, {
                key: "getEl", value: function () {
                    return this[v]
                }
            }, {
                key: "fireEvent", value: function (t, e) {
                    var n = this.constructor.componentName, r = new CustomEvent("".concat(n, "-").concat(t), e);
                    this.el.dispatchEvent(r)
                }
            }, {
                key: "setInternalState", value: function (t, e) {
                    this[b][t] = e
                }
            }, {
                key: "setupProperties", value: function () {
                    var t = this, e = this.constructor.sideEffects;
                    Object.keys(this[b]).forEach(function (n) {
                        var r = e[n];
                        t.setupProperty(n, r)
                    })
                }
            }, {
                key: "setupProperty", value: function (t, e) {
                    var n = this;
                    Object.defineProperty(this, t, {
                        get: function () {
                            return n[b][t]
                        }, set: function (r) {
                            var o = n[b][t];
                            n.setInternalState(t, r), e && e.call(n, r, o)
                        }, enumerable: !0, configurable: !0
                    })
                }
            }, {
                key: "sroot", get: function () {
                    return this.getRoot()
                }
            }, {
                key: "el", get: function () {
                    return this.getEl()
                }
            }]), n
        }()
    };

    function _(t) {
        return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function E(t, e, n) {
        return (E = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = S(t));) ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(n) : o.value
            }
        })(t, e, n || t)
    }

    function S(t) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function x(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function O(t, e, n) {
        return e && x(t.prototype, e), n && x(t, n), t
    }

    function T(t, e) {
        return (T = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function C(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    var N = new s(function (t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }(y).concat(["template", "customelements"])), k = null, j = function (t) {
        return function (e) {
            function n() {
                var t, e;
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return (e = function (t, e) {
                    return !e || "object" !== _(e) && "function" != typeof e ? C(t) : e
                }(this, (t = S(n)).call.apply(t, [this].concat(o)))).setupComponent(C(C(e)), e.getStateFromAttributes()), e
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && T(t, e)
            }(n, t), O(n, null, [{
                key: "getObservedAttributes", value: function () {
                    var t = this.types;
                    return Object.keys(t).map(function (t) {
                        return u(t)
                    })
                }
            }]), O(n, [{
                key: "reflectAttribute", value: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = u(t);
                    n && (k = r);
                    var o = this.constructor.types[t].stringify(e);
                    null == o ? this.removeAttribute(r) : this.setAttribute(r, o)
                }
            }, {
                key: "getStateFromAttributes", value: function () {
                    var t = this, e = this.constructor.types, n = {};
                    return Object.keys(e).forEach(function (r) {
                        var o = u(r), i = t.hasAttribute(o) ? t.getAttribute(o) : null, s = a(e[r], i);
                        null != s && (n[r] = s)
                    }), n
                }
            }, {
                key: "connectedCallback", value: function () {
                    this.connectComponent()
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    this.disconnectComponent()
                }
            }, {
                key: "adoptedCallback", value: function () {
                    this.adoptComponent()
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, n) {
                    if (k === t) k = null; else if (e !== n) {
                        var r = this.constructor.types, o = function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            var r = [].map.call(e, function (t) {
                                return t.trim()
                            }).filter(function (t) {
                                return t.length
                            }).join("-");
                            return 0 === r.length ? "" : 1 === r.length ? r.toLowerCase() : (r = function (t) {
                                for (var e = t, n = !1, r = !1, o = !1, i = 0; i < e.length; i++) {
                                    var s = e.charAt(i);
                                    n && /[a-zA-Z]/.test(s) && s.toUpperCase() === s ? (e = "".concat(e.substr(0, i), "-").concat(e.substr(i)), n = !1, o = r, r = !0, i++) : r && o && /[a-zA-Z]/.test(s) && s.toLowerCase() === s ? (e = "".concat(e.substr(0, i - 1), "-").concat(e.substr(i - 1)), o = r, r = !1, n = !0) : (n = s.toLowerCase() === s, o = r, r = s.toUpperCase() === s)
                                }
                                return e
                            }(r)).replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function (t, e) {
                                return e.toUpperCase()
                            })
                        }(t), i = a(r[o], n);
                        this[o] = null != i ? i : this.constructor.defaults[o]
                    }
                }
            }, {
                key: "setInternalState", value: function (t, e) {
                    E(S(n.prototype), "setInternalState", this).call(this, t, e), this.reflectAttribute(t, e, !0)
                }
            }, {
                key: "setupShadowDOM", value: function (t) {
                    var e = this.getTemplate();
                    if (e) {
                        if ("attachShadow" in Element.prototype) return t.attachShadow({mode: "open"}), t.shadowRoot.appendChild(e), t.shadowRoot;
                        throw Error("ShadowDOM API not supported")
                    }
                    return t
                }
            }, {
                key: "getEl", value: function () {
                    return this
                }
            }, {
                key: "getTemplate", value: function () {
                    var t = this.constructor.componentName;
                    return document.querySelector('link[href*="'.concat(t, '"]')).import.querySelector("#".concat(t, "-template")).content.cloneNode(!0)
                }
            }, {
                key: "template", get: function () {
                    return this.getTemplate()
                }
            }]), n
        }()
    };

    function A() {
        var t = "function" == typeof window.HTMLElement ? window.HTMLElement : function () {
        };
        return Reflect.construct(t, [], this.__proto__.constructor)
    }

    Object.setPrototypeOf && (Object.setPrototypeOf(A.prototype, HTMLElement.prototype), Object.setPrototypeOf(A, HTMLElement));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var M = function (t, e) {
        return (M = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(t, e)
    };

    function P(t, e) {
        function n() {
            this.constructor = t
        }

        M(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    function R(t) {
        return "function" == typeof t
    }

    var L = !1, I = {
        Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
            t && (new Error).stack;
            L = t
        }, get useDeprecatedSynchronousErrorHandling() {
            return L
        }
    };

    function D(t) {
        setTimeout(function () {
            throw t
        })
    }

    var F = {
        closed: !0, next: function (t) {
        }, error: function (t) {
            if (I.useDeprecatedSynchronousErrorHandling) throw t;
            D(t)
        }, complete: function () {
        }
    }, q = Array.isArray || function (t) {
        return t && "number" == typeof t.length
    };

    function H(t) {
        return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function U(t) {
        return null != t && "object" === H(t)
    }

    var z, B = {e: {}};

    function W() {
        try {
            return z.apply(this, arguments)
        } catch (t) {
            return B.e = t, B
        }
    }

    function V(t) {
        return z = t, W
    }

    function $(t) {
        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (t, e) {
            return e + 1 + ") " + t.toString()
        }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
    }

    $.prototype = Object.create(Error.prototype);
    var X = $;

    function G(t) {
        return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var Y = function () {
        function t(t) {
            this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
        }

        return t.prototype.unsubscribe = function () {
            var t, e = !1;
            if (!this.closed) {
                var n = this._parent, r = this._parents, o = this._unsubscribe, i = this._subscriptions;
                this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                for (var s = -1, a = r ? r.length : 0; n;) n.remove(this), n = ++s < a && r[s] || null;
                if (R(o)) V(o).call(this) === B && (e = !0, t = t || (B.e instanceof X ? K(B.e.errors) : [B.e]));
                if (q(i)) for (s = -1, a = i.length; ++s < a;) {
                    var u = i[s];
                    if (U(u)) if (V(u.unsubscribe).call(u) === B) {
                        e = !0, t = t || [];
                        var c = B.e;
                        c instanceof X ? t = t.concat(K(c.errors)) : t.push(c)
                    }
                }
                if (e) throw new X(t)
            }
        }, t.prototype.add = function (e) {
            if (!e || e === t.EMPTY) return t.EMPTY;
            if (e === this) return this;
            var n = e;
            switch (G(e)) {
                case"function":
                    n = new t(e);
                case"object":
                    if (n.closed || "function" != typeof n.unsubscribe) return n;
                    if (this.closed) return n.unsubscribe(), n;
                    if ("function" != typeof n._addParent) {
                        var r = n;
                        (n = new t)._subscriptions = [r]
                    }
                    break;
                default:
                    throw new Error("unrecognized teardown " + e + " added to Subscription.")
            }
            return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
        }, t.prototype.remove = function (t) {
            var e = this._subscriptions;
            if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1)
            }
        }, t.prototype._addParent = function (t) {
            var e = this._parent, n = this._parents;
            e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
        }, t.EMPTY = function (t) {
            return t.closed = !0, t
        }(new t), t
    }();

    function K(t) {
        return t.reduce(function (t, e) {
            return t.concat(e instanceof X ? e.errors : e)
        }, [])
    }

    var J = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("rxSubscriber") : "@@rxSubscriber";

    function Z(t) {
        return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var Q = function (t) {
        function e(e, n, r) {
            var o = t.call(this) || this;
            switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, o._parentSubscription = null, arguments.length) {
                case 0:
                    o.destination = F;
                    break;
                case 1:
                    if (!e) {
                        o.destination = F;
                        break
                    }
                    if ("object" === Z(e)) {
                        if (function (t) {
                            return t instanceof Q || "syncErrorThrowable" in t && t[J]
                        }(e)) {
                            var i = e[J]();
                            o.syncErrorThrowable = i.syncErrorThrowable, o.destination = i, i._addParentTeardownLogic(o)
                        } else o.syncErrorThrowable = !0, o.destination = new tt(o, e);
                        break
                    }
                default:
                    o.syncErrorThrowable = !0, o.destination = new tt(o, e, n, r)
            }
            return o
        }

        return P(e, t), e.prototype[J] = function () {
            return this
        }, e.create = function (t, n, r) {
            var o = new e(t, n, r);
            return o.syncErrorThrowable = !1, o
        }, e.prototype.next = function (t) {
            this.isStopped || this._next(t)
        }, e.prototype.error = function (t) {
            this.isStopped || (this.isStopped = !0, this._error(t), this._unsubscribeParentSubscription())
        }, e.prototype.complete = function () {
            this.isStopped || (this.isStopped = !0, this._complete(), this._unsubscribeParentSubscription())
        }, e.prototype.unsubscribe = function () {
            this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
        }, e.prototype._next = function (t) {
            this.destination.next(t)
        }, e.prototype._error = function (t) {
            this.destination.error(t), this.unsubscribe()
        }, e.prototype._complete = function () {
            this.destination.complete(), this.unsubscribe()
        }, e.prototype._addParentTeardownLogic = function (t) {
            t !== this && (this._parentSubscription = this.add(t))
        }, e.prototype._unsubscribeParentSubscription = function () {
            null !== this._parentSubscription && this._parentSubscription.unsubscribe()
        }, e.prototype._unsubscribeAndRecycle = function () {
            var t = this._parent, e = this._parents;
            return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this._parentSubscription = null, this
        }, e
    }(Y), tt = function (t) {
        function e(e, n, r, o) {
            var i, s = t.call(this) || this;
            s._parentSubscriber = e;
            var a = s;
            return R(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== F && (R((a = Object.create(n)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = i, s._error = r, s._complete = o, s
        }

        return P(e, t), e.prototype.next = function (t) {
            if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                I.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
        }, e.prototype.error = function (t) {
            if (!this.isStopped) {
                var e = this._parentSubscriber, n = I.useDeprecatedSynchronousErrorHandling;
                if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : D(t), this.unsubscribe(); else {
                    if (this.unsubscribe(), n) throw t;
                    D(t)
                }
            }
        }, e.prototype.complete = function () {
            var t = this;
            if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                    var n = function () {
                        return t._complete.call(t._context)
                    };
                    I.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                } else this.unsubscribe()
            }
        }, e.prototype.__tryOrUnsub = function (t, e) {
            try {
                t.call(this._context, e)
            } catch (t) {
                if (this.unsubscribe(), I.useDeprecatedSynchronousErrorHandling) throw t;
                D(t)
            }
        }, e.prototype.__tryOrSetError = function (t, e, n) {
            if (!I.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
                e.call(this._context, n)
            } catch (e) {
                return I.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (D(e), !0)
            }
            return !1
        }, e.prototype._unsubscribe = function () {
            var t = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, t.unsubscribe()
        }, e
    }(Q);
    var et = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function nt() {
    }

    function rt(t) {
        return t ? 1 === t.length ? t[0] : function (e) {
            return t.reduce(function (t, e) {
                return e(t)
            }, e)
        } : nt
    }

    var ot = function () {
        function t(t) {
            this._isScalar = !1, t && (this._subscribe = t)
        }

        return t.prototype.lift = function (e) {
            var n = new t;
            return n.source = this, n.operator = e, n
        }, t.prototype.subscribe = function (t, e, n) {
            var r = this.operator, o = function (t, e, n) {
                if (t) {
                    if (t instanceof Q) return t;
                    if (t[J]) return t[J]()
                }
                return t || e || n ? new Q(t, e, n) : new Q(F)
            }(t, e, n);
            if (r ? r.call(o, this.source) : o._addParentTeardownLogic(this.source || I.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), I.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
            return o
        }, t.prototype._trySubscribe = function (t) {
            try {
                return this._subscribe(t)
            } catch (e) {
                I.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), t.error(e)
            }
        }, t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = it(e))(function (e, r) {
                var o;
                o = n.subscribe(function (e) {
                    try {
                        t(e)
                    } catch (t) {
                        r(t), o && o.unsubscribe()
                    }
                }, r, e)
            })
        }, t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t)
        }, t.prototype[et] = function () {
            return this
        }, t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : rt(t)(this)
        }, t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = it(t))(function (t, n) {
                var r;
                e.subscribe(function (t) {
                    return r = t
                }, function (t) {
                    return n(t)
                }, function () {
                    return t(r)
                })
            })
        }, t.create = function (e) {
            return new t(e)
        }, t
    }();

    function it(t) {
        if (t || (t = I.Promise || Promise), !t) throw new Error("no Promise impl found");
        return t
    }

    function st() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
    }

    st.prototype = Object.create(Error.prototype);
    var at = st, ut = function (t) {
        function e(e, n) {
            var r = t.call(this) || this;
            return r.subject = e, r.subscriber = n, r.closed = !1, r
        }

        return P(e, t), e.prototype.unsubscribe = function () {
            if (!this.closed) {
                this.closed = !0;
                var t = this.subject, e = t.observers;
                if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                    var n = e.indexOf(this.subscriber);
                    -1 !== n && e.splice(n, 1)
                }
            }
        }, e
    }(Y), ct = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.destination = e, n
        }

        return P(e, t), e
    }(Q), lt = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
        }

        return P(e, t), e.prototype[J] = function () {
            return new ct(this)
        }, e.prototype.lift = function (t) {
            var e = new ft(this, this);
            return e.operator = t, e
        }, e.prototype.next = function (t) {
            if (this.closed) throw new at;
            if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
        }, e.prototype.error = function (t) {
            if (this.closed) throw new at;
            this.hasError = !0, this.thrownError = t, this.isStopped = !0;
            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
            this.observers.length = 0
        }, e.prototype.complete = function () {
            if (this.closed) throw new at;
            this.isStopped = !0;
            for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0
        }, e.prototype.unsubscribe = function () {
            this.isStopped = !0, this.closed = !0, this.observers = null
        }, e.prototype._trySubscribe = function (e) {
            if (this.closed) throw new at;
            return t.prototype._trySubscribe.call(this, e)
        }, e.prototype._subscribe = function (t) {
            if (this.closed) throw new at;
            return this.hasError ? (t.error(this.thrownError), Y.EMPTY) : this.isStopped ? (t.complete(), Y.EMPTY) : (this.observers.push(t), new ut(this, t))
        }, e.prototype.asObservable = function () {
            var t = new ot;
            return t.source = this, t
        }, e.create = function (t, e) {
            return new ft(t, e)
        }, e
    }(ot), ft = function (t) {
        function e(e, n) {
            var r = t.call(this) || this;
            return r.destination = e, r.source = n, r
        }

        return P(e, t), e.prototype.next = function (t) {
            var e = this.destination;
            e && e.next && e.next(t)
        }, e.prototype.error = function (t) {
            var e = this.destination;
            e && e.error && this.destination.error(t)
        }, e.prototype.complete = function () {
            var t = this.destination;
            t && t.complete && this.destination.complete()
        }, e.prototype._subscribe = function (t) {
            return this.source ? this.source.subscribe(t) : Y.EMPTY
        }, e
    }(lt), ht = function (t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.scheduler = e, r.work = n, r.pending = !1, r
        }

        return P(e, t), e.prototype.schedule = function (t, e) {
            if (void 0 === e && (e = 0), this.closed) return this;
            this.state = t;
            var n = this.id, r = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
        }, e.prototype.requestAsyncId = function (t, e, n) {
            return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
        }, e.prototype.recycleAsyncId = function (t, e, n) {
            if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
            clearInterval(e)
        }, e.prototype.execute = function (t, e) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(t, e);
            if (n) return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, e.prototype._execute = function (t, e) {
            var n = !1, r = void 0;
            try {
                this.work(t)
            } catch (t) {
                n = !0, r = !!t && t || new Error(t)
            }
            if (n) return this.unsubscribe(), r
        }, e.prototype._unsubscribe = function () {
            var t = this.id, e = this.scheduler, n = e.actions, r = n.indexOf(this);
            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
        }, e
    }(function (t) {
        function e(e, n) {
            return t.call(this) || this
        }

        return P(e, t), e.prototype.schedule = function (t, e) {
            return void 0 === e && (e = 0), this
        }, e
    }(Y)), pt = function (t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.scheduler = e, r.work = n, r
        }

        return P(e, t), e.prototype.schedule = function (e, n) {
            return void 0 === n && (n = 0), n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n, this.state = e, this.scheduler.flush(this), this)
        }, e.prototype.execute = function (e, n) {
            return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
        }, e.prototype.requestAsyncId = function (e, n, r) {
            return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : e.flush(this)
        }, e
    }(ht), dt = function () {
        function t(e, n) {
            void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
        }

        return t.prototype.schedule = function (t, e, n) {
            return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
        }, t.now = function () {
            return Date.now()
        }, t
    }(), yt = function (t) {
        function e(n, r) {
            void 0 === r && (r = dt.now);
            var o = t.call(this, n, function () {
                return e.delegate && e.delegate !== o ? e.delegate.now() : r()
            }) || this;
            return o.actions = [], o.active = !1, o.scheduled = void 0, o
        }

        return P(e, t), e.prototype.schedule = function (n, r, o) {
            return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, o) : t.prototype.schedule.call(this, n, r, o)
        }, e.prototype.flush = function (t) {
            var e = this.actions;
            if (this.active) e.push(t); else {
                var n;
                this.active = !0;
                do {
                    if (n = t.execute(t.state, t.delay)) break
                } while (t = e.shift());
                if (this.active = !1, n) {
                    for (; t = e.shift();) t.unsubscribe();
                    throw n
                }
            }
        }, e
    }(dt), mt = new (function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return P(e, t), e
    }(yt))(pt), vt = new ot(function (t) {
        return t.complete()
    });

    function bt(t) {
        return t ? function (t) {
            return new ot(function (e) {
                return t.schedule(function () {
                    return e.complete()
                })
            })
        }(t) : vt
    }

    function gt(t) {
        return t && "function" == typeof t.schedule
    }

    var wt = function (t) {
        return function (e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.closed || e.complete()
        }
    };

    function _t(t, e) {
        return new ot(e ? function (n) {
            var r = new Y, o = 0;
            return r.add(e.schedule(function () {
                o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
            })), r
        } : wt(t))
    }

    function Et(t) {
        var e = new ot(function (e) {
            e.next(t), e.complete()
        });
        return e._isScalar = !0, e.value = t, e
    }

    function St() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        switch (gt(n) ? t.pop() : n = void 0, t.length) {
            case 0:
                return bt(n);
            case 1:
                return n ? _t(t, n) : Et(t[0]);
            default:
                return _t(t, n)
        }
    }

    function xt(t) {
        var e = t.error;
        t.subscriber.error(e)
    }

    var Ot = function () {
        function t(t, e, n) {
            this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
        }

        return t.prototype.observe = function (t) {
            switch (this.kind) {
                case"N":
                    return t.next && t.next(this.value);
                case"E":
                    return t.error && t.error(this.error);
                case"C":
                    return t.complete && t.complete()
            }
        }, t.prototype.do = function (t, e, n) {
            switch (this.kind) {
                case"N":
                    return t && t(this.value);
                case"E":
                    return e && e(this.error);
                case"C":
                    return n && n()
            }
        }, t.prototype.accept = function (t, e, n) {
            return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
        }, t.prototype.toObservable = function () {
            switch (this.kind) {
                case"N":
                    return St(this.value);
                case"E":
                    return function (t, e) {
                        return new ot(e ? function (n) {
                            return e.schedule(xt, 0, {error: t, subscriber: n})
                        } : function (e) {
                            return e.error(t)
                        })
                    }(this.error);
                case"C":
                    return bt()
            }
            throw new Error("unexpected notification kind value")
        }, t.createNext = function (e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
        }, t.createError = function (e) {
            return new t("E", void 0, e)
        }, t.createComplete = function () {
            return t.completeNotification
        }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
    }();
    var Tt = function () {
        function t(t, e) {
            void 0 === e && (e = 0), this.scheduler = t, this.delay = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Ct(t, this.scheduler, this.delay))
        }, t
    }(), Ct = function (t) {
        function e(e, n, r) {
            void 0 === r && (r = 0);
            var o = t.call(this, e) || this;
            return o.scheduler = n, o.delay = r, o
        }

        return P(e, t), e.dispatch = function (t) {
            var e = t.notification, n = t.destination;
            e.observe(n), this.unsubscribe()
        }, e.prototype.scheduleMessage = function (t) {
            this.add(this.scheduler.schedule(e.dispatch, this.delay, new Nt(t, this.destination)))
        }, e.prototype._next = function (t) {
            this.scheduleMessage(Ot.createNext(t))
        }, e.prototype._error = function (t) {
            this.scheduleMessage(Ot.createError(t))
        }, e.prototype._complete = function () {
            this.scheduleMessage(Ot.createComplete())
        }, e
    }(Q), Nt = function () {
        return function (t, e) {
            this.notification = t, this.destination = e
        }
    }(), kt = function (t) {
        function e(e, n, r) {
            void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
            var o = t.call(this) || this;
            return o.scheduler = r, o._events = [], o._infiniteTimeWindow = !1, o._bufferSize = e < 1 ? 1 : e, o._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (o._infiniteTimeWindow = !0, o.next = o.nextInfiniteTimeWindow) : o.next = o.nextTimeWindow, o
        }

        return P(e, t), e.prototype.nextInfiniteTimeWindow = function (e) {
            var n = this._events;
            n.push(e), n.length > this._bufferSize && n.shift(), t.prototype.next.call(this, e)
        }, e.prototype.nextTimeWindow = function (e) {
            this._events.push(new jt(this._getNow(), e)), this._trimBufferThenGetEvents(), t.prototype.next.call(this, e)
        }, e.prototype._subscribe = function (t) {
            var e, n = this._infiniteTimeWindow, r = n ? this._events : this._trimBufferThenGetEvents(),
                o = this.scheduler, i = r.length;
            if (this.closed) throw new at;
            if (this.isStopped || this.hasError ? e = Y.EMPTY : (this.observers.push(t), e = new ut(this, t)), o && t.add(t = new Ct(t, o)), n) for (var s = 0; s < i && !t.closed; s++) t.next(r[s]); else for (s = 0; s < i && !t.closed; s++) t.next(r[s].value);
            return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
        }, e.prototype._getNow = function () {
            return (this.scheduler || mt).now()
        }, e.prototype._trimBufferThenGetEvents = function () {
            for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, r = this._events, o = r.length, i = 0; i < o && !(t - r[i].time < n);) i++;
            return o > e && (i = Math.max(i, o - e)), i > 0 && r.splice(0, i), r
        }, e
    }(lt), jt = function () {
        return function (t, e) {
            this.time = t, this.value = e
        }
    }();

    function At(t) {
        return (At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Mt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Pt(t, e) {
        return !e || "object" !== At(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Rt(t, e, n) {
        return (Rt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Lt(t));) ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(n) : o.value
            }
        })(t, e, n || t)
    }

    function Lt(t) {
        return (Lt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function It(t, e) {
        return (It = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Dt = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Pt(this, Lt(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && It(t, e)
            }(n, t), function (t, e, n) {
                e && Mt(t.prototype, e), n && Mt(t, n)
            }(n, [{
                key: "setupComponent", value: function (t, e) {
                    var r = this, o = {};
                    this.subjects = {}, this.subjects.disconnect = new lt, this.subjects.document = new kt, Object.keys(this.constructor.types).map(function (t) {
                        r.subjects[t] = new kt(1), o[t] = function (e) {
                            return r.subjects[t].next(e)
                        }
                    }), Object.defineProperty(this.constructor, "sideEffects", {
                        get: function () {
                            return o
                        }, set: function () {
                        }, enumerable: !0, configurable: !0
                    }), Rt(Lt(n.prototype), "setupComponent", this).call(this, t, e)
                }
            }, {
                key: "connectComponent", value: function () {
                    var t = this;
                    Rt(Lt(n.prototype), "connectComponent", this).call(this), this.subjects.document.next(document), Object.keys(this.constructor.types).map(function (e) {
                        return t.subjects[e].next(t[e])
                    })
                }
            }, {
                key: "disconnectComponent", value: function () {
                    Rt(Lt(n.prototype), "disconnectComponent", this).call(this), this.subjects.disconnect.next({})
                }
            }, {
                key: "adaptComponent", value: function () {
                    Rt(Lt(n.prototype), "adaptComponent", this).call(this), this.subjects.document.next(document)
                }
            }]), n
        }()
    }, Ft = function (t) {
        return function (e, n, r) {
            return ot.create(function (o) {
                var i = o.next.bind(o), s = new t(function (t) {
                    return Array.from(t).forEach(i)
                }, n);
                return s.observe(e, r), function () {
                    s.unobserve(e)
                }
            })
        }
    }, qt = function (t) {
        return null == t ? null : t.trim().replace(/^\[?(.*?)\]?$/, "$1").split(",").map(function (t) {
            return t.trim()
        }) || null
    };
    qt.stringify = function (t) {
        return t && t.length > 0 ? t.join(",") : null
    };
    var Ht = function (t) {
        var e = function (e) {
            if (null == e) return null;
            var n = qt(e).map(t);
            return n.reduce(function (t, e) {
                return t && null !== e
            }, !0) ? n : null
        };
        return e.stringify = function (e) {
            var n = e && e.map && e.map(t.stringify);
            return n && n.reduce(function (t, e) {
                return t && null !== e
            }, !0) ? qt.stringify(n) : null
        }, e
    }, Ut = function (t) {
        if (null == t) return !1;
        var e = t.trim && t.trim() || t;
        return !("false" === e || "null" === e || "undefined" === e || "0" === e || !1 === e)
    };
    Ut.stringify = function (t) {
        return t ? "" : null
    };
    var zt = function (t) {
        return null == t ? null : Number(t)
    };
    zt.stringify = function (t) {
        return null == t ? null : "".concat(t)
    };
    var Bt = function (t) {
        var e = function (e) {
            if (null == e) return null;
            var n = t.indexOf(e);
            return n > -1 ? t[n] : null
        };
        return e.stringify = function (e) {
            return -1 !== t.indexOf(e) ? e : null
        }, e
    }, Wt = function (t) {
        if (null == t) return null;
        var e = (t.trim && t.trim() || t).match(/^\/?(.*?)(\/([gimy]*))?$/);
        return new RegExp(e[1], e[3])
    };
    Wt.stringify = function (t) {
        return t && t.toString() || null
    };
    var Vt = function (t) {
        return t
    };
    Vt.stringify = function (t) {
        return t
    };
    var $t = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return P(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
            this.destination.next(e)
        }, e.prototype.notifyError = function (t, e) {
            this.destination.error(t)
        }, e.prototype.notifyComplete = function (t) {
            this.destination.complete()
        }, e
    }(Q), Xt = function (t) {
        function e(e, n, r) {
            var o = t.call(this) || this;
            return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
        }

        return P(e, t), e.prototype._next = function (t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
        }, e.prototype._error = function (t) {
            this.parent.notifyError(t, this), this.unsubscribe()
        }, e.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe()
        }, e
    }(Q), Gt = function (t) {
        return function (e) {
            return t.then(function (t) {
                e.closed || (e.next(t), e.complete())
            }, function (t) {
                return e.error(t)
            }).then(null, D), e
        }
    };
    var Yt = function () {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }(), Kt = function (t) {
        return function (e) {
            for (var n = t[Yt](); ;) {
                var r = n.next();
                if (r.done) {
                    e.complete();
                    break
                }
                if (e.next(r.value), e.closed) break
            }
            return "function" == typeof n.return && e.add(function () {
                n.return && n.return()
            }), e
        }
    }, Jt = function (t) {
        return function (e) {
            var n = t[et]();
            if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return n.subscribe(e)
        }
    }, Zt = function (t) {
        return t && "number" == typeof t.length && "function" != typeof t
    };

    function Qt(t) {
        return t && "function" != typeof t.subscribe && "function" == typeof t.then
    }

    var te = function (t) {
        if (t instanceof ot) return function (e) {
            return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
        };
        if (t && "function" == typeof t[et]) return Jt(t);
        if (Zt(t)) return wt(t);
        if (Qt(t)) return Gt(t);
        if (t && "function" == typeof t[Yt]) return Kt(t);
        var e = U(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };

    function ee(t, e, n, r, o) {
        if (void 0 === o && (o = new Xt(t, n, r)), !o.closed) return te(e)(o)
    }

    var ne = {};

    function re() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null, r = null;
        return gt(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && q(t[0]) && (t = t[0]), _t(t, r).lift(new oe(n))
    }

    var oe = function () {
        function t(t) {
            this.resultSelector = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new ie(t, this.resultSelector))
        }, t
    }(), ie = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
        }

        return P(e, t), e.prototype._next = function (t) {
            this.values.push(ne), this.observables.push(t)
        }, e.prototype._complete = function () {
            var t = this.observables, e = t.length;
            if (0 === e) this.destination.complete(); else {
                this.active = e, this.toRespond = e;
                for (var n = 0; n < e; n++) {
                    var r = t[n];
                    this.add(ee(this, r, r, n))
                }
            }
        }, e.prototype.notifyComplete = function (t) {
            0 == (this.active -= 1) && this.destination.complete()
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
            var i = this.values, s = i[n], a = this.toRespond ? s === ne ? --this.toRespond : this.toRespond : 0;
            i[n] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
        }, e.prototype._tryResultSelector = function (t) {
            var e;
            try {
                e = this.resultSelector.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }($t);

    function se(t, e) {
        return function (n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new ae(t, e))
        }
    }

    var ae = function () {
        function t(t, e) {
            this.project = t, this.thisArg = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new ue(t, this.project, this.thisArg))
        }, t
    }(), ue = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.project = n, o.count = 0, o.thisArg = r || o, o
        }

        return P(e, t), e.prototype._next = function (t) {
            var e;
            try {
                e = this.project.call(this.thisArg, t, this.count++)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }(Q);

    function ce(t) {
        return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function le(t, e) {
        if (!e) return t instanceof ot ? t : new ot(te(t));
        if (null != t) {
            if (function (t) {
                return t && "function" == typeof t[et]
            }(t)) return function (t, e) {
                return new ot(e ? function (n) {
                    var r = new Y;
                    return r.add(e.schedule(function () {
                        var o = t[et]();
                        r.add(o.subscribe({
                            next: function (t) {
                                r.add(e.schedule(function () {
                                    return n.next(t)
                                }))
                            }, error: function (t) {
                                r.add(e.schedule(function () {
                                    return n.error(t)
                                }))
                            }, complete: function () {
                                r.add(e.schedule(function () {
                                    return n.complete()
                                }))
                            }
                        }))
                    })), r
                } : Jt(t))
            }(t, e);
            if (Qt(t)) return function (t, e) {
                return new ot(e ? function (n) {
                    var r = new Y;
                    return r.add(e.schedule(function () {
                        return t.then(function (t) {
                            r.add(e.schedule(function () {
                                n.next(t), r.add(e.schedule(function () {
                                    return n.complete()
                                }))
                            }))
                        }, function (t) {
                            r.add(e.schedule(function () {
                                return n.error(t)
                            }))
                        })
                    })), r
                } : Gt(t))
            }(t, e);
            if (Zt(t)) return _t(t, e);
            if (function (t) {
                return t && "function" == typeof t[Yt]
            }(t) || "string" == typeof t) return function (t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new ot(e ? function (n) {
                    var r, o = new Y;
                    return o.add(function () {
                        r && "function" == typeof r.return && r.return()
                    }), o.add(e.schedule(function () {
                        r = t[Yt](), o.add(e.schedule(function () {
                            if (!n.closed) {
                                var t, e;
                                try {
                                    var o = r.next();
                                    t = o.value, e = o.done
                                } catch (t) {
                                    return void n.error(t)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                            }
                        }))
                    })), o
                } : Kt(t))
            }(t, e)
        }
        throw new TypeError((null !== t && ce(t) || t) + " is not observable")
    }

    function fe(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function (r) {
            return r.pipe(fe(function (n, r) {
                return le(t(n, r)).pipe(se(function (t, o) {
                    return e(n, t, r, o)
                }))
            }, n))
        } : ("number" == typeof e && (n = e), function (e) {
            return e.lift(new he(t, n))
        })
    }

    var he = function () {
        function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new pe(t, this.project, this.concurrent))
        }, t
    }(), pe = function (t) {
        function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = t.call(this, e) || this;
            return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
        }

        return P(e, t), e.prototype._next = function (t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
        }, e.prototype._tryNext = function (t) {
            var e, n = this.index++;
            try {
                e = this.project(t, n)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.active++, this._innerSub(e, t, n)
        }, e.prototype._innerSub = function (t, e, n) {
            var r = new Xt(this, void 0, void 0);
            this.add(r), ee(this, t, e, n, r)
        }, e.prototype._complete = function () {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
            this.destination.next(e)
        }, e.prototype.notifyComplete = function (t) {
            var e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }, e
    }($t);

    function de(t) {
        return t
    }

    function ye(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), fe(de, t)
    }

    function me() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY, r = null, o = t[t.length - 1];
        return gt(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof ot ? t[0] : ye(n)(_t(t, r))
    }

    var ve = new ot(nt);
    Object.prototype.toString;

    function be(t, e, n, r) {
        return R(n) && (r = n, n = void 0), r ? be(t, e, n).pipe(se(function (t) {
            return q(t) ? r.apply(void 0, t) : r(t)
        })) : new ot(function (r) {
            !function t(e, n, r, o, i) {
                var s;
                if (function (t) {
                    return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }(e)) {
                    var a = e;
                    e.addEventListener(n, r, i), s = function () {
                        return a.removeEventListener(n, r, i)
                    }
                } else if (function (t) {
                    return t && "function" == typeof t.on && "function" == typeof t.off
                }(e)) {
                    var u = e;
                    e.on(n, r), s = function () {
                        return u.off(n, r)
                    }
                } else if (function (t) {
                    return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                }(e)) {
                    var c = e;
                    e.addListener(n, r), s = function () {
                        return c.removeListener(n, r)
                    }
                } else {
                    if (!e || !e.length) throw new TypeError("Invalid event target");
                    for (var l = 0, f = e.length; l < f; l++) t(e[l], n, r, o, i)
                }
                o.add(s)
            }(t, e, function (t) {
                arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
            }, r, n)
        })
    }

    var ge = n(1);

    function we(t, e) {
        return void 0 === e && (e = null), new Ce({method: "GET", url: t, headers: e})
    }

    function _e(t, e, n) {
        return new Ce({method: "POST", url: t, body: e, headers: n})
    }

    function Ee(t, e) {
        return new Ce({method: "DELETE", url: t, headers: e})
    }

    function Se(t, e, n) {
        return new Ce({method: "PUT", url: t, body: e, headers: n})
    }

    function xe(t, e, n) {
        return new Ce({method: "PATCH", url: t, body: e, headers: n})
    }

    var Oe = se(function (t, e) {
        return t.response
    });

    function Te(t, e) {
        return Oe(new Ce({method: "GET", url: t, responseType: "json", headers: e}))
    }

    var Ce = function (t) {
        function e(e) {
            var n = t.call(this) || this, r = {
                async: !0, createXHR: function () {
                    return this.crossDomain ? function () {
                        if (ge.a.XMLHttpRequest) return new ge.a.XMLHttpRequest;
                        if (ge.a.XDomainRequest) return new ge.a.XDomainRequest;
                        throw new Error("CORS is not supported by your browser")
                    }() : function () {
                        if (ge.a.XMLHttpRequest) return new ge.a.XMLHttpRequest;
                        var t = void 0;
                        try {
                            for (var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], n = 0; n < 3; n++) try {
                                if (t = e[n], new ge.a.ActiveXObject(t)) break
                            } catch (t) {
                            }
                            return new ge.a.ActiveXObject(t)
                        } catch (t) {
                            throw new Error("XMLHttpRequest is not supported by your browser")
                        }
                    }()
                }, crossDomain: !0, withCredentials: !1, headers: {}, method: "GET", responseType: "json", timeout: 0
            };
            if ("string" == typeof e) r.url = e; else for (var o in e) e.hasOwnProperty(o) && (r[o] = e[o]);
            return n.request = r, n
        }

        return P(e, t), e.prototype._subscribe = function (t) {
            return new Ne(t, this.request)
        }, e.create = function () {
            var t = function (t) {
                return new e(t)
            };
            return t.get = we, t.post = _e, t.delete = Ee, t.put = Se, t.patch = xe, t.getJSON = Te, t
        }(), e
    }(ot), Ne = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            r.request = n, r.done = !1;
            var o = n.headers = n.headers || {};
            return n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), "Content-Type" in o || ge.a.FormData && n.body instanceof ge.a.FormData || void 0 === n.body || (o["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), n.body = r.serializeBody(n.body, n.headers["Content-Type"]), r.send(), r
        }

        return P(e, t), e.prototype.next = function (t) {
            this.done = !0;
            var e = this.xhr, n = this.request, r = this.destination, o = new ke(t, e, n);
            o.response === B ? r.error(B.e) : r.next(o)
        }, e.prototype.send = function () {
            var t = this.request, e = this.request, n = e.user, r = e.method, o = e.url, i = e.async, s = e.password,
                a = e.headers, u = e.body, c = V(t.createXHR).call(t);
            if (c === B) this.error(B.e); else {
                this.xhr = c, this.setupEvents(c, t);
                if ((n ? V(c.open).call(c, r, o, i, n, s) : V(c.open).call(c, r, o, i)) === B) return this.error(B.e), null;
                if (i && (c.timeout = t.timeout, c.responseType = t.responseType), "withCredentials" in c && (c.withCredentials = !!t.withCredentials), this.setHeaders(c, a), (u ? V(c.send).call(c, u) : V(c.send).call(c)) === B) return this.error(B.e), null
            }
            return c
        }, e.prototype.serializeBody = function (t, e) {
            if (!t || "string" == typeof t) return t;
            if (ge.a.FormData && t instanceof ge.a.FormData) return t;
            if (e) {
                var n = e.indexOf(";");
                -1 !== n && (e = e.substring(0, n))
            }
            switch (e) {
                case"application/x-www-form-urlencoded":
                    return Object.keys(t).map(function (e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    }).join("&");
                case"application/json":
                    return JSON.stringify(t);
                default:
                    return t
            }
        }, e.prototype.setHeaders = function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && t.setRequestHeader(n, e[n])
        }, e.prototype.setupEvents = function (t, e) {
            var n = e.progressSubscriber;

            function r(t) {
                var e = r, n = e.subscriber, o = e.progressSubscriber, i = e.request;
                o && o.error(t);
                var s = new Re(this, i);
                s.response === B ? n.error(B.e) : n.error(s)
            }

            if (t.ontimeout = r, r.request = e, r.subscriber = this, r.progressSubscriber = n, t.upload && "withCredentials" in t) {
                var o, i;
                if (n) o = function (t) {
                    o.progressSubscriber.next(t)
                }, ge.a.XDomainRequest ? t.onprogress = o : t.upload.onprogress = o, o.progressSubscriber = n;
                i = function (t) {
                    var e = i, n = e.progressSubscriber, r = e.subscriber, o = e.request;
                    n && n.error(t);
                    var s = new Ae("ajax error", this, o);
                    s.response === B ? r.error(B.e) : r.error(s)
                }, t.onerror = i, i.request = e, i.subscriber = this, i.progressSubscriber = n
            }

            function s(t) {
            }

            function a(t) {
                var e = a, n = e.subscriber, r = e.progressSubscriber, o = e.request;
                if (4 === this.readyState) {
                    var i = 1223 === this.status ? 204 : this.status,
                        s = "text" === this.responseType ? this.response || this.responseText : this.response;
                    if (0 === i && (i = s ? 200 : 0), i < 400) r && r.complete(), n.next(t), n.complete(); else {
                        r && r.error(t);
                        var u = new Ae("ajax error " + i, this, o);
                        u.response === B ? n.error(B.e) : n.error(u)
                    }
                }
            }

            t.onreadystatechange = s, s.subscriber = this, s.progressSubscriber = n, s.request = e, t.onload = a, a.subscriber = this, a.progressSubscriber = n, a.request = e
        }, e.prototype.unsubscribe = function () {
            var e = this.done, n = this.xhr;
            !e && n && 4 !== n.readyState && "function" == typeof n.abort && n.abort(), t.prototype.unsubscribe.call(this)
        }, e
    }(Q), ke = function () {
        return function (t, e, n) {
            this.originalEvent = t, this.xhr = e, this.request = n, this.status = e.status, this.responseType = e.responseType || n.responseType, this.response = Pe(this.responseType, e)
        }
    }();

    function je(t, e, n) {
        return Error.call(this), this.message = t, this.name = "AjaxError", this.xhr = e, this.request = n, this.status = e.status, this.responseType = e.responseType || n.responseType, this.response = Pe(this.responseType, e), this
    }

    je.prototype = Object.create(Error.prototype);
    var Ae = je;

    function Me(t) {
        return "response" in t ? t.responseType ? t.response : JSON.parse(t.response || t.responseText || "null") : JSON.parse(t.responseText || "null")
    }

    function Pe(t, e) {
        switch (t) {
            case"json":
                return V(Me)(e);
            case"xml":
                return e.responseXML;
            case"text":
            default:
                return "response" in e ? e.response : e.responseText
        }
    }

    var Re = function (t, e) {
        return Ae.call(this, "ajax timeout", t, e), this.name = "AjaxTimeoutError", this
    }, Le = Ce.create;

    function Ie() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return 1 === t.length || 2 === t.length && gt(t[1]) ? le(t[0]) : ye(1)(St.apply(void 0, t))
    }

    function De() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
            var n = t[t.length - 1];
            gt(n) ? t.pop() : n = null;
            var r = t.length;
            return Ie(1 !== r || n ? r > 0 ? _t(t, n) : bt(n) : Et(t[0]), e)
        }
    }

    function Fe(t) {
        return function (e) {
            return e.lift(new qe(t))
        }
    }

    var qe = function () {
        function t(t) {
            this.notifier = t
        }

        return t.prototype.call = function (t, e) {
            var n = new He(t), r = ee(n, this.notifier);
            return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
        }, t
    }(), He = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.seenValue = !1, n
        }

        return P(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
            this.seenValue = !0, this.complete()
        }, e.prototype.notifyComplete = function () {
        }, e
    }($t);

    function Ue(t, e) {
        return "function" == typeof e ? function (n) {
            return n.pipe(Ue(function (n, r) {
                return le(t(n, r)).pipe(se(function (t, o) {
                    return e(n, t, r, o)
                }))
            }))
        } : function (e) {
            return e.lift(new ze(t))
        }
    }

    var ze = function () {
        function t(t) {
            this.project = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Be(t, this.project))
        }, t
    }(), Be = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.project = n, r.index = 0, r
        }

        return P(e, t), e.prototype._next = function (t) {
            var e, n = this.index++;
            try {
                e = this.project(t, n)
            } catch (t) {
                return void this.destination.error(t)
            }
            this._innerSub(e, t, n)
        }, e.prototype._innerSub = function (t, e, n) {
            var r = this.innerSubscription;
            r && r.unsubscribe();
            var o = new Xt(this, void 0, void 0);
            this.add(o), this.innerSubscription = ee(this, t, e, n, o)
        }, e.prototype._complete = function () {
            var e = this.innerSubscription;
            e && !e.closed || t.prototype._complete.call(this)
        }, e.prototype._unsubscribe = function () {
            this.innerSubscription = null
        }, e.prototype.notifyComplete = function (e) {
            this.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
            this.destination.next(e)
        }, e
    }($t);

    function We() {
        return function (t) {
            return t.lift(new Ve(t))
        }
    }

    var Ve = function () {
        function t(t) {
            this.connectable = t
        }

        return t.prototype.call = function (t, e) {
            var n = this.connectable;
            n._refCount++;
            var r = new $e(t, n), o = e.subscribe(r);
            return r.closed || (r.connection = n.connect()), o
        }, t
    }(), $e = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.connectable = n, r
        }

        return P(e, t), e.prototype._unsubscribe = function () {
            var t = this.connectable;
            if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
                    var n = this.connection, r = t._connection;
                    this.connection = null, !r || n && r !== n || r.unsubscribe()
                }
            } else this.connection = null
        }, e
    }(Q), Xe = function (t) {
        function e(e, n) {
            var r = t.call(this) || this;
            return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
        }

        return P(e, t), e.prototype._subscribe = function (t) {
            return this.getSubject().subscribe(t)
        }, e.prototype.getSubject = function () {
            var t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
        }, e.prototype.connect = function () {
            var t = this._connection;
            return t || (this._isComplete = !1, (t = this._connection = new Y).add(this.source.subscribe(new Ye(this.getSubject(), this))), t.closed ? (this._connection = null, t = Y.EMPTY) : this._connection = t), t
        }, e.prototype.refCount = function () {
            return We()(this)
        }, e
    }(ot).prototype, Ge = {
        operator: {value: null},
        _refCount: {value: 0, writable: !0},
        _subject: {value: null, writable: !0},
        _connection: {value: null, writable: !0},
        _subscribe: {value: Xe._subscribe},
        _isComplete: {value: Xe._isComplete, writable: !0},
        getSubject: {value: Xe.getSubject},
        connect: {value: Xe.connect},
        refCount: {value: Xe.refCount}
    }, Ye = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.connectable = n, r
        }

        return P(e, t), e.prototype._error = function (e) {
            this._unsubscribe(), t.prototype._error.call(this, e)
        }, e.prototype._complete = function () {
            this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
        }, e.prototype._unsubscribe = function () {
            var t = this.connectable;
            if (t) {
                this.connectable = null;
                var e = t._connection;
                t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
            }
        }, e
    }(ct);
    var Ke = function () {
        function t(t, e) {
            this.subjectFactory = t, this.selector = e
        }

        return t.prototype.call = function (t, e) {
            var n = this.selector, r = this.subjectFactory(), o = n(r).subscribe(t);
            return o.add(e.subscribe(r)), o
        }, t
    }();

    function Je() {
        return new lt
    }

    function Ze() {
        return function (t) {
            return We()(function (t, e) {
                return function (n) {
                    var r;
                    if (r = "function" == typeof t ? t : function () {
                        return t
                    }, "function" == typeof e) return n.lift(new Ke(r, e));
                    var o = Object.create(n, Ge);
                    return o.source = n, o.subjectFactory = r, o
                }
            }(Je)(t))
        }
    }

    function Qe(t, e) {
        return function (n) {
            return n.lift(new tn(t, e))
        }
    }

    var tn = function () {
        function t(t, e) {
            this.predicate = t, this.thisArg = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new en(t, this.predicate, this.thisArg))
        }, t
    }(), en = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.predicate = n, o.thisArg = r, o.count = 0, o
        }

        return P(e, t), e.prototype._next = function (t) {
            var e;
            try {
                e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (t) {
                return void this.destination.error(t)
            }
            e && this.destination.next(t)
        }, e
    }(Q);

    function nn(t, e) {
        return function (n) {
            return n.lift(new rn(t, e))
        }
    }

    var rn = function () {
        function t(t, e) {
            this.compare = t, this.keySelector = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new on(t, this.compare, this.keySelector))
        }, t
    }(), on = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.keySelector = r, o.hasKey = !1, "function" == typeof n && (o.compare = n), o
        }

        return P(e, t), e.prototype.compare = function (t, e) {
            return t === e
        }, e.prototype._next = function (t) {
            var e = t;
            if (this.keySelector && (e = V(this.keySelector)(t)) === B) return this.destination.error(B.e);
            var n = !1;
            if (this.hasKey) {
                if ((n = V(this.compare)(this.key, e)) === B) return this.destination.error(B.e)
            } else this.hasKey = !0;
            !1 === Boolean(n) && (this.key = e, this.destination.next(t))
        }, e
    }(Q);

    function sn(t, e, n) {
        return function (r) {
            return r.lift(new an(t, e, n))
        }
    }

    var an = function () {
        function t(t, e, n) {
            this.nextOrObserver = t, this.error = e, this.complete = n
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new un(t, this.nextOrObserver, this.error, this.complete))
        }, t
    }(), un = function (t) {
        function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return i._tapNext = nt, i._tapError = nt, i._tapComplete = nt, i._tapError = r || nt, i._tapComplete = o || nt, R(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || nt, i._tapError = n.error || nt, i._tapComplete = n.complete || nt), i
        }

        return P(e, t), e.prototype._next = function (t) {
            try {
                this._tapNext.call(this._context, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(t)
        }, e.prototype._error = function (t) {
            try {
                this._tapError.call(this._context, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.error(t)
        }, e.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context)
            } catch (t) {
                return void this.destination.error(t)
            }
            return this.destination.complete()
        }, e
    }(Q), cn = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number;

    function ln(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var fn = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;

    function hn(t) {
        return new dn([{url: t, width: void 0, dpr: 1}])
    }

    function pn(t) {
        for (var e, n = []; e = fn.exec(t);) {
            var r = e[1], o = void 0, i = void 0;
            if (e[2]) {
                var s = e[3].toLowerCase();
                if ("w" == s) o = parseInt(e[2], 10); else {
                    if ("x" != s) continue;
                    i = parseFloat(e[2])
                }
            } else i = 1;
            n.push({url: r, width: o, dpr: i})
        }
        return new dn(n)
    }

    var dn = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.sources_ = e;
            for (var n = !1, r = !1, o = 0; o < e.length; o++) {
                var i = e[o];
                n = n || !!i.width, r = r || !!i.dpr
            }
            e.sort(n ? yn : mn), this.widthBased_ = n, this.dprBased_ = r
        }

        return function (t, e, n) {
            e && ln(t.prototype, e), n && ln(t, n)
        }(t, [{
            key: "select", value: function (t, e) {
                var n = 0;
                return n = this.widthBased_ ? this.selectByWidth_(t * e) : this.selectByDpr_(e), this.sources_[n].url
            }
        }, {
            key: "selectByWidth_", value: function (t) {
                for (var e = this.sources_, n = 0, r = 1 / 0, o = 1 / 0, i = 0; i < e.length; i++) {
                    var s = e[i].width, a = Math.abs(s - t);
                    if (!(a <= 1.1 * r || t / o > 1.2)) break;
                    n = i, r = a, o = s
                }
                return n
            }
        }, {
            key: "selectByDpr_", value: function (t) {
                for (var e = this.sources_, n = 0, r = 1 / 0, o = 0; o < e.length; o++) {
                    var i = Math.abs(e[o].dpr - t);
                    if (!(i <= r)) break;
                    n = o, r = i
                }
                return n
            }
        }, {
            key: "getUrls", value: function () {
                return this.sources_.map(function (t) {
                    return t.url
                })
            }
        }, {
            key: "stringify", value: function (t) {
                for (var e = [], n = this.sources_, r = 0; r < n.length; r++) {
                    var o = n[r], i = o.url;
                    t && (i = t(i)), this.widthBased_ ? i += " ".concat(o.width, "w") : i += " ".concat(o.dpr, "x"), e.push(i)
                }
                return e.join(", ")
            }
        }]), t
    }();

    function yn(t, e) {
        return t.width - e.width
    }

    function mn(t, e) {
        return t.dpr - e.dpr
    }

    function vn(t) {
        return (vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function bn(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function gn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function wn(t, e) {
        return !e || "object" !== vn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function _n(t, e, n) {
        return (_n = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = En(t));) ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(n) : o.value
            }
        })(t, e, n || t)
    }

    function En(t) {
        return (En = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Sn(t, e) {
        return (Sn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var xn = new s(function (t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }(y).concat(["eventlistener", "queryselector", "requestanimationframe"])), On = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), wn(this, En(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Sn(t, e)
            }(n, Dt(w(t))), function (t, e, n) {
                e && gn(t.prototype, e), n && gn(t, n)
            }(n, [{
                key: "setupComponent", value: function (t, e) {
                    _n(En(n.prototype), "setupComponent", this).call(this, t, e), this.loadImage$ = new lt
                }
            }, {
                key: "connectComponent", value: function () {
                    var t = this;
                    _n(En(n.prototype), "connectComponent", this).call(this), this.img = document.createElement("img"), this.sizer = document.createElement("div"), this.loading = this.el.querySelector('[slot="loading"]'), this.loading && this.sizer.appendChild(this.loading), cn ? this.img.attributeStyleMap.set("display", "block") : this.img.style.display = "block", this.el.appendChild(this.sizer);
                    var e = {contentRect: this.el.getBoundingClientRect()};
                    this.resize$ = "ResizeObserver" in window ? Ft(ResizeObserver)(this.el).pipe(De(e)) : St(e);
                    var r = function (t, e) {
                            return t || e
                        }, o = re(this.subjects.width, this.subjects.dataWidth, r),
                        i = re(this.subjects.height, this.subjects.dataHeight, r), s = re(this.resize$, o, i),
                        a = re(this.subjects.root, this.subjects.rootMargin).pipe(Fe(this.subjects.disconnect), Ue(function (e) {
                            var n = bn(e, 2), r = n[0], o = n[1];
                            return "IntersectionObserver" in window ? Ft(IntersectionObserver)(t.el, {
                                root: r,
                                rootMargin: o
                            }) : St({isIntersecting: !0})
                        }), se(function (t) {
                            return t.isIntersecting
                        }));
                    this.trigger$ = me(a, this.loadImage$).pipe(Ze()), s.pipe(Fe(this.subjects.disconnect)).subscribe(this.updateSizerStyle.bind(this)), this.trigger$.pipe(Qe(function (t) {
                        return t
                    }), nn()).subscribe(this.triggered.bind(this)), this.fireEvent("init")
                }
            }, {
                key: "triggered", value: function () {
                    var t = this,
                        e = (this.cache = new Map, re(this.subjects.src, this.subjects.srcset).pipe(Qe(function (t) {
                            var e = bn(t, 2), n = e[0], r = e[1];
                            return null != n || null != r
                        }), nn(function (t, e) {
                            var n = bn(t, 2), r = n[0], o = n[1], i = bn(e, 2), s = i[0], a = i[1];
                            return r === s && o === a
                        }), se(function (t) {
                            var e = bn(t, 2), n = e[0], r = e[1];
                            return r ? pn(r) : hn(n)
                        })));
                    re(re(this.resize$, e).pipe(se(this.selectImgURL.bind(this)), function (t, e) {
                        return nn(function (n, r) {
                            return e ? e(n[t], r[t]) : n[t] === r[t]
                        })
                    }("href")), this.trigger$.pipe(nn(), De(!0))).pipe(Fe(this.subjects.disconnect), sn(function () {
                        return t.loading && t.loading.removeAttribute("hidden")
                    }), Ue(this.makeRequest.bind(this)), Ue(this.setImgSrcAndLoad.bind(this))).subscribe(function () {
                        null != t.sizer.parentNode && t.el.removeChild(t.sizer), null == t.img.parentNode && t.el.appendChild(t.img), t.fireEvent("load")
                    }, function (e) {
                        t.loadImageFallback()
                    }), this.updateAttr = this.updateAttr.bind(this), this.subjects.alt.subscribe(this.updateAttr("alt")), this.subjects.decoding.subscribe(this.updateAttr("decoding")), this.subjects.longdesc.subscribe(this.updateAttr("longdesc")), this.subjects.ismap.subscribe(this.updateAttr("ismap")), this.subjects.usemap.subscribe(this.updateAttr("usemap"))
                }
            }, {
                key: "selectImgURL", value: function (t) {
                    var e = bn(t, 2), n = e[0], r = e[1], o = n.contentRect.width;
                    return new URL(r.select(o || window.screen.width, window.devicePixelRatio || 1), window.location)
                }
            }, {
                key: "makeRequest", value: function (t) {
                    var e = bn(t, 2), n = e[0], r = e[1], o = n.href, i = this.cache;
                    return r && !i.has(o) ? Le({
                        method: "GET", responseType: "blob", url: n, crossDomain: function (t) {
                            var e = t.protocol, n = t.host,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
                            return e !== r.protocol || n !== r.host
                        }(n), headers: {Accept: "image/*"}
                    }).pipe(se(function (t) {
                        var e = t.response;
                        return URL.createObjectURL(e)
                    }), sn(function (t) {
                        return i.set(o, t)
                    })) : i.has(o) ? St(i.get(o)) : ve
                }
            }, {
                key: "setImgSrcAndLoad", value: function (t) {
                    var e = be(this.img, "load");
                    return this.img.src = t, e
                }
            }, {
                key: "updateAttr", value: function (t) {
                    var e = this;
                    return function (n) {
                        return null == n || !1 === n ? e.img.removeAttribute(t) : e.img.setAttribute(t, !0 === n ? "" : n)
                    }
                }
            }, {
                key: "loadImageFallback", value: function () {
                    this.el.hasAttribute("sizes") && this.img.setAttribute("sizes", this.getAttribute("sizes")), this.el.hasAttribute("crossorigin") && this.img.setAttribute("crossorigin", this.getAttribute("crossorigin")), this.el.hasAttribute("referrerpolicy") && this.img.setAttribute("referrerpolicy", this.getAttribute("referrerpolicy")), this.srcset && (this.img.srcset = this.srcset), this.src && (this.img.src = this.src), null != this.sizer.parentNode && this.el.removeChild(this.sizer), null == this.img.parentNode && this.el.appendChild(this.img), this.fireEvent("load")
                }
            }, {
                key: "updateSizerStyle", value: function (t) {
                    var e = bn(t, 3), n = e[0], r = e[1], o = e[2], i = n.contentRect.width;
                    cn ? (this.sizer.attributeStyleMap.set("position", "relative"), null != r && null != o ? r >= i ? (this.sizer.attributeStyleMap.set("width", CSS.percent(100)), this.sizer.attributeStyleMap.set("padding-top", CSS.percent(o / r * 100))) : (this.sizer.attributeStyleMap.set("width", CSS.px(r)), this.sizer.attributeStyleMap.set("height", CSS.px(o))) : (this.sizer.attributeStyleMap.set("width", CSS.percent(100)), this.sizer.attributeStyleMap.set("height", CSS.percent(100)))) : (this.sizer.style.position = "relative", null != r && null != o ? r >= i ? (this.sizer.style.width = "100%", this.sizer.style.paddingTop = "".concat(o / r * 100, "%")) : (this.sizer.style.width = "".concat(r, "px"), this.sizer.style.height = "".concat(o, "px")) : (this.sizer.style.width = "100%", this.sizer.style.height = "100%"))
                }
            }, {
                key: "disconnectComponent", value: function () {
                    _n(En(n.prototype), "disconnectComponent", this).call(this), this.cache && this.cache.forEach(function (t) {
                        URL.revokeObjectURL(t)
                    })
                }
            }, {
                key: "loadImage", value: function () {
                    this.loadImage$.next(!0)
                }
            }], [{
                key: "componentName", get: function () {
                    return "hy-img"
                }
            }, {
                key: "defaults", get: function () {
                    return {
                        root: null,
                        rootMargin: "0px",
                        src: null,
                        srcset: null,
                        width: null,
                        height: null,
                        dataWidth: null,
                        dataHeight: null,
                        alt: null,
                        decoding: null,
                        longdesc: null,
                        ismap: !1,
                        usemap: null
                    }
                }
            }, {
                key: "types", get: function () {
                    return {
                        root: Vt,
                        rootMargin: Vt,
                        src: Vt,
                        srcset: Vt,
                        width: zt,
                        height: zt,
                        dataWidth: zt,
                        dataHeight: zt,
                        alt: Vt,
                        decoding: Bt(["sync", "async", "auto"]),
                        longdesc: Vt,
                        ismap: Ut,
                        usemap: Vt
                    }
                }
            }]), n
        }()
    };

    function Tn(t) {
        return (Tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Cn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Nn(t, e) {
        return !e || "object" !== Tn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function kn(t) {
        return (kn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function jn(t, e) {
        return (jn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function An(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var Mn = new s(An(N).concat(An(xn))), Pn = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Nn(this, kn(e).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && jn(t, e)
            }(e, j(On(A))), function (t, e, n) {
                e && Cn(t.prototype, e), n && Cn(t, n)
            }(e, [{
                key: "getTemplate", value: function () {
                    return null
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return this.getObservedAttributes()
                }
            }]), e
        }(), Rn = (n(5), navigator.userAgent.toLowerCase()), Ln = Rn.indexOf("safari") > 0 && Rn.indexOf("chrome") < 0,
        In = Rn.indexOf("mobile") > 0, Dn = Ln && In, Fn = Rn.indexOf("ucbrowser") > 0, qn = Rn.indexOf("firefox") > 0,
        Hn = Rn.indexOf("fxios") > 0 && Rn.indexOf("safari") > 0,
        Un = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number;

    function zn(t) {
        var e = !0;
        return t.forEach(function (t) {
            var n = window.Modernizr[t];
            e = e && n
        }), e
    }

    function Bn() {
        for (; this.firstChild;) this.removeChild(this.firstChild)
    }

    function Wn(t, e, n) {
        return ot.create(function (r) {
            var o = t.animate(e, n);
            return o.addEventListener("finish", function (t) {
                return r.next(t), requestAnimationFrame(function () {
                    return requestAnimationFrame(r.complete.bind(r))
                })
            }), function () {
                "finished" !== o.playState && o.cancel()
            }
        })
    }

    function Vn(t) {
        var e = document.getElementById(t);
        return e && document.importNode(e.content, !0)
    }

    function $n(t) {
        return new ot(function (e) {
            var n;
            try {
                n = t()
            } catch (t) {
                return void e.error(t)
            }
            return (n ? le(n) : bt()).subscribe(e)
        })
    }

    zn(Mn) ? window.customElements.define("hy-img", Pn) : Array.prototype.forEach.call(document.getElementsByTagName("hy-img"), function (t) {
        return t.innerHTML = t.children[0].innerText
    });
    var Xn = function (t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.scheduler = e, r.work = n, r
        }

        return P(e, t), e.prototype.requestAsyncId = function (e, n, r) {
            return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame(function () {
                return e.flush(null)
            })))
        }, e.prototype.recycleAsyncId = function (e, n, r) {
            if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
            0 === e.actions.length && (cancelAnimationFrame(n), e.scheduled = void 0)
        }, e
    }(ht), Gn = new (function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return P(e, t), e.prototype.flush = function (t) {
            this.active = !0, this.scheduled = void 0;
            var e, n = this.actions, r = -1, o = n.length;
            t = t || n.shift();
            do {
                if (e = t.execute(t.state, t.delay)) break
            } while (++r < o && (t = n.shift()));
            if (this.active = !1, e) {
                for (; ++r < o && (t = n.shift());) t.unsubscribe();
                throw e
            }
        }, e
    }(yt))(Xn);

    function Yn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
            var n;
            "function" == typeof t[t.length - 1] && (n = t.pop());
            var r = t;
            return e.lift(new Kn(r, n))
        }
    }

    var Kn = function () {
        function t(t, e) {
            this.observables = t, this.project = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Jn(t, this.observables, this.project))
        }, t
    }(), Jn = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            o.observables = n, o.project = r, o.toRespond = [];
            var i = n.length;
            o.values = new Array(i);
            for (var s = 0; s < i; s++) o.toRespond.push(s);
            for (s = 0; s < i; s++) {
                var a = n[s];
                o.add(ee(o, a, a, s))
            }
            return o
        }

        return P(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
            this.values[n] = e;
            var i = this.toRespond;
            if (i.length > 0) {
                var s = i.indexOf(n);
                -1 !== s && i.splice(s, 1)
            }
        }, e.prototype.notifyComplete = function () {
        }, e.prototype._next = function (t) {
            if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e)
            }
        }, e.prototype._tryProject = function (t) {
            var e;
            try {
                e = this.project.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }($t);
    var Zn = function () {
        function t(t) {
            this.notifier = t
        }

        return t.prototype.call = function (t, e) {
            var n = new Qn(t), r = e.subscribe(n);
            return r.add(ee(n, this.notifier)), r
        }, t
    }(), Qn = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hasValue = !1, e
        }

        return P(e, t), e.prototype._next = function (t) {
            this.value = t, this.hasValue = !0
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
            this.emitValue()
        }, e.prototype.notifyComplete = function () {
            this.emitValue()
        }, e.prototype.emitValue = function () {
            this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
        }, e
    }($t), tr = new yt(ht);
    var er = function () {
        return function (t, e) {
            this.value = t, this.timestamp = e
        }
    }();

    function nr() {
        return function (t) {
            return t.lift(new rr)
        }
    }

    var rr = function () {
        function t() {
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new or(t))
        }, t
    }(), or = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.hasPrev = !1, n
        }

        return P(e, t), e.prototype._next = function (t) {
            this.hasPrev ? this.destination.next([this.prev, t]) : this.hasPrev = !0, this.prev = t
        }, e
    }(Q);

    function ir(t) {
        return function (e) {
            return e.lift(new sr(t))
        }
    }

    var sr = function () {
        function t(t) {
            this.total = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new ar(t, this.total))
        }, t
    }(), ar = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.total = n, r.count = 0, r
        }

        return P(e, t), e.prototype._next = function (t) {
            ++this.count > this.total && this.destination.next(t)
        }, e
    }(Q);

    function ur(t, e, n, r, o) {
        return ot.create(function (i) {
            var s, a = requestAnimationFrame(function u(c) {
                var l = c - (s = s || c);
                l < r ? (i.next(t(l, e, n, r, o)), a = requestAnimationFrame(u)) : (i.next(t(r, e, n, r, o)), a = requestAnimationFrame(function () {
                    return i.complete()
                }))
            });
            return function () {
                a && cancelAnimationFrame(a)
            }
        })
    }

    function cr(t, e, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + e
    }

    function lr(t) {
        return pr(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || hr()
    }

    function fr(t, e) {
        return pr(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || hr()
    }

    function hr() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }

    function pr(t) {
        if (Array.isArray(t)) return t
    }

    var dr = function (t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return function (e) {
            return 0 === n.length ? e.pipe(Yn(t), Qe(function (t) {
                return fr(t, 2)[1]
            }), se(function (t) {
                return fr(t, 1)[0]
            })) : e.pipe(Yn.apply(void 0, [t].concat(n)), Qe(function (t) {
                return lr(t).slice(1).every(function (t) {
                    return t
                })
            }), se(function (t) {
                return fr(t, 1)[0]
            }))
        }
    };

    function yr(t) {
        return (yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function mr(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function vr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function br(t, e) {
        return !e || "object" !== yr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function gr(t) {
        return (gr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function wr(t, e) {
        return (wr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var _r = Math.min.bind(Math), Er = Math.max.bind(Math), Sr = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), br(this, gr(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && wr(t, e)
            }(n, t), function (t, e, n) {
                e && vr(t.prototype, e), n && vr(t, n)
            }(n, [{
                key: "calcIsInRange", value: function (t, e) {
                    switch (this.align) {
                        case"left":
                            var n = this.range[0], r = this.range[1];
                            return t > n && (e || t < r);
                        case"right":
                            var o = window.innerWidth - this.range[0], i = window.innerWidth - this.range[1];
                            return t < o && (e || t > i);
                        default:
                            throw Error()
                    }
                }
            }, {
                key: "calcIsSwipe", value: function (t) {
                    var e = mr(t, 4), n = e[0].clientX, r = e[1].clientX, o = e[2], i = e[3];
                    return n !== r || o > 0 && o < i
                }
            }, {
                key: "calcWillOpen", value: function (t) {
                    var e = mr(t, 5), n = e[2], r = e[3], o = e[4];
                    switch (this.align) {
                        case"left":
                            return o > .15 || !(o < -.15) && n >= r / 2;
                        case"right":
                            return -o > .15 || !(-o < -.15) && n <= -r / 2;
                        default:
                            throw Error()
                    }
                }
            }, {
                key: "calcTranslateX", value: function (t, e, n, r) {
                    switch (this.align) {
                        case"left":
                            return Er(0, _r(r, n + (t - e)));
                        case"right":
                            return _r(0, Er(-r, n + (t - e)));
                        default:
                            throw Error()
                    }
                }
            }]), n
        }()
    };

    function xr(t) {
        return (xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Or(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Tr(t, e) {
        return !e || "object" !== xr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Cr(t) {
        return (Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Nr(t, e) {
        return (Nr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var kr = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number, jr = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Tr(this, Cr(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Nr(t, e)
            }(n, t), function (t, e, n) {
                e && Or(t.prototype, e), n && Or(t, n)
            }(n, [{
                key: "histId", value: function () {
                    return this.el.id || this.constructor.componentName
                }
            }, {
                key: "prepareInteraction", value: function () {
                    kr ? (this.contentEl.attributeStyleMap.set("will-change", "transform"), this.scrimEl.attributeStyleMap.set("will-change", "opacity")) : (this.contentEl.style.willChange = "transform", this.scrimEl.style.willChange = "opacity"), this.fireEvent("prepare")
                }
            }, {
                key: "cleanupInteraction", value: function (t) {
                    kr ? (this.contentEl.attributeStyleMap.delete("will-change"), this.scrimEl.attributeStyleMap.delete("will-change"), t ? this.scrimEl.attributeStyleMap.set("pointer-events", new CSSKeywordValue("all")) : this.scrimEl.attributeStyleMap.delete("pointer-events")) : (this.scrimEl.style.willChange = "", this.contentEl.style.willChange = "", this.scrimEl.style.pointerEvents = t ? "all" : ""), this.fireEvent("transitioned", {detail: t})
                }
            }, {
                key: "updateDOM", value: function (t, e) {
                    this.translateX = t;
                    var n = "left" === this.align ? 1 : -1, r = this.opacity = t / e * n;
                    this.moveCallback && this.moveCallback({
                        translateX: t,
                        opacity: r
                    }), kr ? (this.contentEl.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(t), CSS.px(0))])), this.scrimEl.attributeStyleMap.set("opacity", this.opacity)) : (this.contentEl.style.transform = "translateX(".concat(t, "px)"), this.scrimEl.style.opacity = this.opacity)
                }
            }]), n
        }()
    };

    function Ar(t) {
        return function (e) {
            return e.lift(new Mr(t))
        }
    }

    var Mr = function () {
        function t(t) {
            this.value = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Pr(t, this.value))
        }, t
    }(), Pr = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.value = n, r
        }

        return P(e, t), e.prototype._next = function (t) {
            this.destination.next(this.value)
        }, e
    }(Q);

    function Rr() {
        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
    }

    Rr.prototype = Object.create(Error.prototype);
    var Lr = Rr;

    function Ir(t) {
        return function (e) {
            return 0 === t ? bt() : e.lift(new Dr(t))
        }
    }

    var Dr = function () {
        function t(t) {
            if (this.total = t, this.total < 0) throw new Lr
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Fr(t, this.total))
        }, t
    }(), Fr = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.total = n, r.count = 0, r
        }

        return P(e, t), e.prototype._next = function (t) {
            var e = this.total, n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
        }, e
    }(Q);
    var qr = function () {
        function t(t) {
            this.notifier = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Hr(t, this.notifier, e))
        }, t
    }(), Hr = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.notifier = n, o.source = r, o.sourceIsBeingSubscribedTo = !0, o
        }

        return P(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
            this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
        }, e.prototype.notifyComplete = function (e) {
            if (!1 === this.sourceIsBeingSubscribedTo) return t.prototype.complete.call(this)
        }, e.prototype.complete = function () {
            if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next()
            }
        }, e.prototype._unsubscribe = function () {
            var t = this.notifications, e = this.retriesSubscription;
            t && (t.unsubscribe(), this.notifications = null), e && (e.unsubscribe(), this.retriesSubscription = null), this.retries = null
        }, e.prototype._unsubscribeAndRecycle = function () {
            var e = this._unsubscribe;
            return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = e, this
        }, e.prototype.subscribeToRetries = function () {
            this.notifications = new lt;
            var e = V(this.notifier)(this.notifications);
            if (e === B) return t.prototype.complete.call(this);
            this.retries = e, this.retriesSubscription = ee(this, e)
        }, e
    }($t);
    var Ur = function () {
        function t(t) {
            this.predicate = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new zr(t, this.predicate))
        }, t
    }(), zr = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.predicate = n, r.skipping = !0, r.index = 0, r
        }

        return P(e, t), e.prototype._next = function (t) {
            var e = this.destination;
            this.skipping && this.tryCallPredicate(t), this.skipping || e.next(t)
        }, e.prototype.tryCallPredicate = function (t) {
            try {
                var e = this.predicate(t, this.index++);
                this.skipping = Boolean(e)
            } catch (t) {
                this.destination.error(t)
            }
        }, e
    }(Q);

    function Br(t) {
        return (Br = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Wr(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Vr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function $r(t, e) {
        return !e || "object" !== Br(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Xr(t) {
        return (Xr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Gr(t, e) {
        return (Gr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Yr = Math.abs.bind(Math), Kr = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), $r(this, Xr(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Gr(t, e)
            }(n, t), function (t, e, n) {
                e && Vr(t.prototype, e), n && Vr(t, n)
            }(n, [{
                key: "getStartObservable", value: function () {
                    return re(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents).pipe(Ue(function (t) {
                        var e = Wr(t, 3), n = e[0], r = e[1], o = e[2];
                        return me(r ? be(n, "touchstart", {passive: !0}).pipe(Qe(function (t) {
                            return 1 === t.touches.length
                        }), se(function (t) {
                            return t.touches[0]
                        })) : ve, o ? be(n, "mousedown").pipe(sn(function (t) {
                            return t.event = t, t
                        })) : ve)
                    }))
                }
            }, {
                key: "getMoveObservable", value: function (t, e) {
                    return re(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents, this.subjects.preventDefault).pipe(Ue(function (n) {
                        var r = Wr(n, 4), o = r[0], i = r[1], s = r[2], a = r[3];
                        return me(i ? be(o, "touchmove", {passive: !a}).pipe(se(function (t) {
                            return t.touches[0].event = t, t.touches[0]
                        })) : ve, s ? be(o, "mousemove", {passive: !a}).pipe(function (t) {
                            return function (e) {
                                return t.pipe(Ue(function (t) {
                                    return t ? e : ve
                                }))
                            }
                        }(me(t.pipe(Ar(!0)), e.pipe(Ar(!1)))), sn(function (t) {
                            return t.event = t, t
                        })) : ve)
                    }))
                }
            }, {
                key: "getEndObservable", value: function () {
                    return re(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents).pipe(Ue(function (t) {
                        var e = Wr(t, 3), n = e[0], r = e[1], o = e[2];
                        return me(r ? be(n, "touchend", {passive: !0}).pipe(Qe(function (t) {
                            return 0 === t.touches.length
                        }), se(function (t) {
                            return t.changedTouches[0]
                        })) : ve, o ? be(n, "mouseup", {passive: !0}) : ve)
                    }))
                }
            }, {
                key: "getIsSlidingObservable", value: function (t, e, n) {
                    return this.getIsSlidingObservable2(t, e).pipe(Ir(1), De(void 0), function (t) {
                        return function (e) {
                            return e.lift(new qr(t))
                        }
                    }(function () {
                        return n
                    }))
                }
            }, {
                key: "getIsSlidingObservable2", value: function (t, e) {
                    var n = this;
                    return this.threshold ? t.pipe(Yn(e), function (t) {
                        return function (e) {
                            return e.lift(new Ur(t))
                        }
                    }(function (t) {
                        var e = Wr(t, 2), r = e[0], o = r.clientX, i = r.clientY, s = e[1], a = s.clientX,
                            u = s.clientY;
                        return Yr(u - i) < n.threshold && Yr(a - o) < n.threshold
                    }), se(function (t) {
                        var e = Wr(t, 2), n = e[0], r = n.clientX, o = n.clientY, i = e[1], s = i.clientX,
                            a = i.clientY;
                        return Yr(s - r) >= Yr(a - o)
                    })) : t.pipe(Yn(e), se(function (t) {
                        var e = Wr(t, 2), r = e[0], o = r.clientX, i = r.clientY, s = r.event, a = e[1], u = a.clientX,
                            c = a.clientY, l = Yr(u - o) >= Yr(c - i);
                        return n.preventDefault && l && s.preventDefault(), l
                    }))
                }
            }]), n
        }()
    };

    function Jr(t) {
        return (Jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Zr(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Qr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function to(t, e) {
        return !e || "object" !== Jr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function eo(t) {
        return (eo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function no(t, e) {
        return (no = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ro = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), to(this, eo(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && no(t, e)
            }(n, Kr(jr(Sr(t)))), function (t, e, n) {
                e && Qr(t.prototype, e), n && Qr(t, n)
            }(n, [{
                key: "setupObservables", value: function () {
                    var t = this, e = {contentRect: this.contentEl.getBoundingClientRect()},
                        n = ("ResizeObserver" in window ? Ft(ResizeObserver)(this.contentEl).pipe(De(e)) : St(e)).pipe(Fe(this.subjects.disconnect), se(function (t) {
                            return t.contentRect.width
                        }), Ze(), De(e.contentRect.width));
                    this._peek$ && (n = re(n, this._peek$).pipe(se(function (t) {
                        var e = Zr(t, 2);
                        return e[0] - e[1]
                    })));
                    var r = this.subjects.persistent.pipe(se(function (t) {
                            return !t
                        })), o = this.getStartObservable().pipe(Fe(this.subjects.disconnect), dr(r), Ze()),
                        i = $n(function () {
                            return t.translateX$.pipe(se(function (t) {
                                return 0 != t
                            }))
                        }), s = o.pipe(Yn(i), se(function (e) {
                            var n = Zr(e, 2), r = n[0].clientX, o = n[1];
                            return t.calcIsInRange(r, o)
                        }), sn(function (e) {
                            e && (t.mouseEvents && t.contentEl.classList.add("hy-drawer-grabbing"), t.prepareInteraction())
                        }), Ze()), a = this.getEndObservable().pipe(Fe(this.subjects.disconnect), dr(r, s), Ze()),
                        u = this.getMoveObservable(o, a).pipe(Fe(this.subjects.disconnect), dr(r, s), Ze()),
                        c = this.getIsSlidingObservable(u, o, a).pipe(sn(function (e) {
                            e && t.fireEvent("slidestart", {detail: t.opened})
                        }));
                    this.translateX$ = $n(function () {
                        return me(t.tween$, u.pipe(dr(c), sn(function (e) {
                            var n = e.event;
                            return t.preventDefault && n.preventDefault()
                        }), Yn(o, t.startTranslateX$, n), function (t, e) {
                            return void 0 === e && (e = 0), function (n) {
                                return n.lift(new Tt(t, e))
                            }
                        }(Gn), se(function (e) {
                            var n = Zr(e, 4), r = n[0].clientX, o = n[1].clientX, i = n[2], s = n[3];
                            return t.calcTranslateX(r, o, i, s)
                        })), re(t.subjects.opened, t.subjects.align, n).pipe(sn(function (e) {
                            var n = Zr(e, 1)[0];
                            return t.cleanupInteraction(n)
                        }), se(function (t) {
                            var e = Zr(t, 3), n = e[0], r = e[1], o = e[2];
                            return n ? o * ("left" === r ? 1 : -1) : 0
                        })))
                    }).pipe(Fe(this.subjects.disconnect), Ze()), this.startTranslateX$ = this.translateX$.pipe(function (t) {
                        return function (e) {
                            return e.lift(new Zn(t))
                        }
                    }(o));
                    var l = this.translateX$.pipe(function (t) {
                        return void 0 === t && (t = tr), se(function (e) {
                            return new er(e, t.now())
                        })
                    }(), nr(), Qe(function (t) {
                        var e = Zr(t, 2), n = e[0].timestamp;
                        return e[1].timestamp - n > 0
                    }), se(function (t) {
                        var e = Zr(t, 2), n = e[0], r = n.value, o = n.timestamp, i = e[1];
                        return (i.value - r) / (i.timestamp - o)
                    }), De(0)), f = me(a.pipe(sn(function () {
                        return t.contentEl.classList.remove("hy-drawer-grabbing")
                    }), Yn(o, this.translateX$, n, l), Qe(this.calcIsSwipe.bind(this)), se(this.calcWillOpen.bind(this)), sn(function (e) {
                        return t.fireEvent("slideend", {detail: e})
                    })), this.animateTo$.pipe(sn(this.prepareInteraction.bind(this))));
                    this.tween$ = f.pipe(sn(function (e) {
                        return t.setInternalState("opened", e)
                    }), Yn(this.translateX$, n), Ue(function (e) {
                        var n = Zr(e, 3), r = n[0], i = n[1], s = n[2], a = "left" === t.align ? 1 : -1;
                        return ur(cr, i, (r ? s * a : 0) - i, 200 + .15 * s).pipe(sn({
                            complete: function () {
                                return t.subjects.opened.next(r)
                            }
                        }), Fe(o), Fe(t.subjects.align.pipe(ir(1))), Ze())
                    })), this.translateX$.pipe(Yn(n)).subscribe(function (e) {
                        var n = Zr(e, 2), r = n[0], o = n[1];
                        return t.updateDOM(r, o)
                    }), be(this.scrimEl, "click").pipe(Fe(this.subjects.disconnect)).subscribe(function () {
                        return t.close()
                    }), r.pipe(Fe(this.subjects.disconnect)).subscribe(function (e) {
                        t.scrimEl.style.display = e ? "block" : "none"
                    }), this.subjects.align.pipe(Fe(this.subjects.disconnect)).subscribe(function (e) {
                        t.contentEl.classList.remove("hy-drawer-left"), t.contentEl.classList.remove("hy-drawer-right"), t.contentEl.classList.add("hy-drawer-".concat(e))
                    }), this.subjects.mouseEvents.pipe(Fe(this.subjects.disconnect), Ue(function (e) {
                        return e ? t.contentEl.classList.add("hy-drawer-grab") : t.contentEl.classList.remove("hy-drawer-grab"), e ? o.pipe(Yn(s)) : ve
                    })).subscribe(function (t) {
                        var e = Zr(t, 2), n = e[0].event;
                        return e[1] && n && n.preventDefault()
                    }), this.fireEvent("init", {detail: this.opened})
                }
            }]), n
        }()
    };

    function oo(t) {
        return (oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function io(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function so(t, e) {
        return !e || "object" !== oo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ao(t, e, n) {
        return (ao = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = uo(t));) ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(n) : o.value
            }
        })(t, e, n || t)
    }

    function uo(t) {
        return (uo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function co(t, e) {
        return (co = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var lo = new s(function (t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }(y).concat(["eventlistener", "queryselector", "requestanimationframe", "classlist", "opacity", "csstransforms", "csspointerevents"])),
        fo = function (t) {
            return function (e) {
                function n() {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), so(this, uo(n).apply(this, arguments))
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && co(t, e)
                }(n, ro(Dt(w(t)))), function (t, e, n) {
                    e && io(t.prototype, e), n && io(t, n)
                }(n, [{
                    key: "setupComponent", value: function (t, e) {
                        ao(uo(n.prototype), "setupComponent", this).call(this, t, e), this.animateTo$ = new lt, this.scrimEl = this.sroot.querySelector(".hy-drawer-scrim"), this.contentEl = this.sroot.querySelector(".hy-drawer-content"), this.contentEl.classList.add("hy-drawer-".concat(this.align))
                    }
                }, {
                    key: "connectComponent", value: function () {
                        this.setupObservables(), ao(uo(n.prototype), "connectComponent", this).call(this)
                    }
                }, {
                    key: "open", value: function () {
                        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.animateTo$.next(!0) : this.opened = !0
                    }
                }, {
                    key: "close", value: function () {
                        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.animateTo$.next(!1) : this.opened = !1
                    }
                }, {
                    key: "toggle", value: function () {
                        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.animateTo$.next(!this.opened) : this.opened = !this.opened
                    }
                }], [{
                    key: "componentName", get: function () {
                        return "hy-drawer"
                    }
                }, {
                    key: "types", get: function () {
                        return {
                            opened: Ut,
                            align: Bt(["left", "right"]),
                            persistent: Ut,
                            range: Ht(zt),
                            threshold: zt,
                            preventDefault: Ut,
                            touchEvents: Ut,
                            mouseEvents: Ut
                        }
                    }
                }, {
                    key: "defaults", get: function () {
                        return {
                            opened: !1,
                            align: "left",
                            persistent: !1,
                            range: [0, 100],
                            threshold: 10,
                            preventDefault: !1,
                            touchEvents: !1,
                            mouseEvents: !1
                        }
                    }
                }]), n
            }()
        };

    function ho(t) {
        return (ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function po(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function yo(t, e) {
        return !e || "object" !== ho(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function mo(t) {
        return (mo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function vo(t, e) {
        return (vo = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function bo(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var go = new s(bo(N).concat(bo(lo))), wo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), yo(this, mo(e).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && vo(t, e)
        }(e, j(fo(A))), function (t, e, n) {
            e && po(t.prototype, e), n && po(t, n)
        }(e, [{
            key: "getTemplate", value: function () {
                return function (t) {
                    return document.createRange().createContextualFragment(t)
                }('<div class="hy-drawer-scrim"></div> <div class="hy-drawer-content"> <slot></slot> </div> <style> @media screen { .hy-drawer-scrim { position: fixed; top: 0; left: 0; height: 100vh; width: 100vw; opacity: 0; pointer-events: none; transform: translateX(0); -webkit-tap-highlight-color: transparent; @apply --hy-drawer-scrim-container; background: rgba(0, 0, 0, 0.5); background: var(--hy-drawer-scrim-background, rgba(0, 0, 0, 0.5)); z-index: 20; z-index: var(--hy-drawer-scrim-z-index, 20); } .hy-drawer-content { position: fixed; top: 0; height: 100vh; overflow-x: hidden; overflow-y: auto; transform: translateX(0); contain: strict; -webkit-overflow-scrolling: touch; @apply --hy-drawer-content-container; width: 300px; width: var(--hy-drawer-width, 300px); background: #e8e8e8; background: var(--hy-drawer-background, #e8e8e8); box-shadow: 0 0 15px rgba(0, 0, 0, 0.25); box-shadow: var(--hy-drawer-box-shadow, 0 0 15px rgba(0, 0, 0, 0.25)); z-index: 30; z-index: var(--hy-drawer-z-index, 30); } .hy-drawer-content.hy-drawer-left { left: -300px; left: calc( -1 * var(--hy-drawer-slide-width, var(--hy-drawer-width, 300px))); } .hy-drawer-content.hy-drawer-right { right: -300px; right: calc( -1 * var(--hy-drawer-slide-width, var(--hy-drawer-width, 300px))); } .hy-drawer-grab { cursor: move; cursor: -webkit-grab; cursor: -moz-grab; cursor: grab; } .hy-drawer-grabbing { cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing; } } @media print { .hy-drawer-scrim { display: none !important; } .hy-drawer-content { transform: none !important; } } </style>')
            }
        }], [{
            key: "observedAttributes", get: function () {
                return this.getObservedAttributes()
            }
        }]), e
    }();

    function _o(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var Eo = new s(function (t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }(go).concat(["cssremunit", "classlist", "eventlistener", "matchmedia"])), So = "(min-width: 64em)",
        xo = "(min-width: 1666px)", Oo = 21, To = 28, Co = 1, No = 2, ko = 3;

    function jo() {
        return parseFloat(getComputedStyle(document.documentElement).fontSize)
    }

    function Ao() {
        return Oo * jo()
    }

    function Mo() {
        return document.body.clientWidth / 2 - To * jo()
    }

    var Po = function (t) {
        return function (e) {
            return t.pipe(Ue(function (t) {
                return t ? e : ve
            }))
        }
    };
    window._noDrawer || !zn(Eo) || Fn || requestIdleCallback(function () {
        var t = document.getElementsByTagName("hy-drawer")[0], e = document.getElementById("_menu"),
            n = document.getElementById("_sidebar"), o = document.querySelector(".sidebar-sticky");

        function i() {
            var i = Ft(r.a)(t).pipe(se(function () {
                    return window.matchMedia(xo).matches ? ko : window.matchMedia(So).matches ? No : Co
                }), Ze(), De(window.matchMedia(xo).matches ? ko : window.matchMedia(So).matches ? No : Co)),
                a = i.pipe(se(function (t) {
                    return t >= ko ? Mo() : Ao()
                })), u = a.pipe(Yn(i), se(function (t) {
                    var e = _o(t, 2), n = e[0];
                    return e[1] >= No ? document.body.clientWidth / 2 - n / 2 : document.body.clientWidth / 2
                })), c = a.pipe(Yn(i), se(function (t) {
                    var e = _o(t, 2), n = e[0];
                    return e[1] >= No ? [0, n] : Dn && !navigator.standalone ? [35, 150] : [0, 150]
                }));
            ot.create(function (e) {
                return t.moveCallback = function (t) {
                    return e.next(t)
                }
            }).pipe(Yn(u, i)).subscribe(function (t) {
                var e = _o(t, 3), n = e[0].opacity, r = e[1];
                return s(e[2] >= No, r, n)
            }), t.addEventListener("hy-drawer-prepare", function () {
                Un ? (n.attributeStyleMap.set("will-change", "transform"), o.attributeStyleMap.set("will-change", "opacity")) : (n.style.willChange = "transform", o.style.willChange = "opacity")
            }), t.addEventListener("hy-drawer-transitioned", function () {
                Un ? (n.attributeStyleMap.delete("will-change"), o.attributeStyleMap.delete("will-change")) : (n.style.willChange = "", o.style.willChange = "")
            }), e.addEventListener("click", function (t) {
                Dn && t.preventDefault(), window._drawer.toggle()
            });
            var l = be(t, "hy-drawer-transitioned").pipe(se(function (t) {
                return t.detail
            }), nn(), sn(function (t) {
                return !t && function () {
                    var t = document.getElementById("_swipe");
                    t && t.parentNode.removeChild(t)
                }()
            }));
            be(window, "popstate", {passive: !0}).pipe(Po(l)).subscribe(function () {
                return window._drawer.close()
            });
            var f = window.pageYOffset || document.body.scrollTop, h = t.classList.contains("cover") && f <= 0;
            t._peek$ = i.pipe(se(function (t) {
                switch (t) {
                    case ko:
                        return Mo();
                    case No:
                        return Ao();
                    case Co:
                        return .5 * jo()
                }
            }));
            var p = h ? null : t.getBoundingClientRect().height;
            t.addEventListener("hy-drawer-init", function () {
                !function () {
                    var t = document.getElementById("_hrefSwipeSVG");
                    if (t) {
                        var e = document.createElement("img");
                        e.id = "_swipe", e.src = t.href, e.alt = "Swipe image", e.addEventListener("click", function () {
                            return window._drawer.close()
                        }), document.getElementById("_sidebar").appendChild(e)
                    }
                }(), t.classList.add("loaded"), p && f >= p && window.scrollTo(0, f - p)
            }, {once: !0}), u.pipe(Yn(i), ir(1)).subscribe(function (e) {
                var n = _o(e, 2), r = n[0];
                return s(n[1] >= No, r, void 0 !== t.opacity ? t.opacity : h ? 1 : 0)
            }), window._drawer = function (t, e) {
                return e && t.setAttribute("opened", ""), Ln && t.setAttribute("threshold", 0), In || t.setAttribute("mouse-events", ""), qn && t.removeAttribute("prevent-default"), window.customElements.define("hy-drawer", wo), t
            }(t, h), c.subscribe(function (e) {
                return t.range = e
            })
        }

        function s(t, e, r) {
            var i = 1 - r;
            if (Un) {
                var s = new CSSTransformValue([new CSSTranslate(CSS.px(e * i), CSS.px(0))]);
                n.attributeStyleMap.set("transform", s), o.attributeStyleMap.set("opacity", t ? 1 : r)
            } else n.style.transform = "translateX(".concat(e * i, "px)"), o.style.opacity = t ? 1 : r
        }

        !function e() {
            getComputedStyle(t).getPropertyValue("--hy-drawer-width") ? i() : setTimeout(e, 300)
        }()
    });
    n(59);
    var Ro = window.URL;
    if (!(Ro && Ro.prototype && "href" in Ro.prototype)) {
        (Ro = function (t, e) {
            if (!t) throw new TypeError("Invalid argument");
            var n = document.implementation.createHTMLDocument("");
            if (e) {
                var r = n.createElement("base");
                r.href = e, n.head.appendChild(r)
            }
            var o = n.createElement("a");
            if (o.href = t, n.body.appendChild(o), ":" === o.protocol || !/:/.test(o.href)) throw new TypeError("Invalid URL");
            Object.defineProperty(this, "_anchorElement", {value: o})
        }).prototype = {
            toString: function () {
                return this.href
            }, get href() {
                return this._anchorElement.href
            }, set href(t) {
                this._anchorElement.href = t
            }, get protocol() {
                return this._anchorElement.protocol
            }, set protocol(t) {
                this._anchorElement.protocol = t
            }, get host() {
                return this._anchorElement.host
            }, set host(t) {
                this._anchorElement.host = t
            }, get hostname() {
                return this._anchorElement.hostname
            }, set hostname(t) {
                this._anchorElement.hostname = t
            }, get port() {
                return this._anchorElement.port
            }, set port(t) {
                this._anchorElement.port = t
            }, get pathname() {
                return this._anchorElement.pathname
            }, set pathname(t) {
                this._anchorElement.pathname = t
            }, get search() {
                return this._anchorElement.search
            }, set search(t) {
                this._anchorElement.search = t
            }, get hash() {
                return this._anchorElement.hash
            }, set hash(t) {
                this._anchorElement.hash = t
            }
        };
        var Lo = window.URL || window.webkitURL || window.mozURL;
        Ro.createObjectURL = function (t) {
            return Lo.createObjectURL.apply(Lo, arguments)
        }, Ro.revokeObjectURL = function (t) {
            return Lo.revokeObjectURL.apply(Lo, arguments)
        }, Object.defineProperty(Ro.prototype, "toString", {enumerable: !1})
    }
    var Io = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector;

    function Do(t) {
        var e = t.protocol, n = t.host,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        return e !== r.protocol || n !== r.host
    }

    function Fo() {
        return window.pageYOffset || document.body.scrollTop
    }

    var qo = "push";

    function Ho(t, e) {
        return function (n) {
            return [Qe(t, e)(n), Qe(function (t, e) {
                function n() {
                    return !n.pred.apply(n.thisArg, arguments)
                }

                return n.pred = t, n.thisArg = e, n
            }(t, e))(n)]
        }
    }

    function Uo(t) {
        return function (e) {
            var n = new zo(t), r = e.lift(n);
            return n.caught = r
        }
    }

    var zo = function () {
        function t(t) {
            this.selector = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Bo(t, this.selector, this.caught))
        }, t
    }(), Bo = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.selector = n, o.caught = r, o
        }

        return P(e, t), e.prototype.error = function (e) {
            if (!this.isStopped) {
                var n = void 0;
                try {
                    n = this.selector(e, this.caught)
                } catch (e) {
                    return void t.prototype.error.call(this, e)
                }
                this._unsubscribeAndRecycle();
                var r = new Xt(this, void 0, void 0);
                this.add(r), ee(this, n, void 0, void 0, r)
            }
        }, e
    }($t);

    function Wo(t) {
        return (Wo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Vo(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function $o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Xo(t, e) {
        return !e || "object" !== Wo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Go(t) {
        return (Go = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Yo(t, e) {
        return (Yo = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Ko = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Xo(this, Go(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Yo(t, e)
            }(n, t), function (t, e, n) {
                e && $o(t.prototype, e), n && $o(t, n)
            }(n, [{
                key: "histId", value: function () {
                    return this.el.id || this.constructor.componentName
                }
            }, {
                key: "shouldLoadAnchor", value: function (t, e) {
                    return t && "" === t.target && (!e || -1 !== t.href.search(e))
                }
            }, {
                key: "isPushEvent", value: function (t) {
                    var e = t.url, n = t.anchor, r = t.event, o = r.metaKey, i = r.ctrlKey;
                    return !o && !i && this.shouldLoadAnchor(n, this.hrefRegex) && !Do(e, this)
                }
            }, {
                key: "isHintEvent", value: function (t) {
                    var e = t.url, n = t.anchor;
                    return this.shouldLoadAnchor(n, this.hrefRegex) && !Do(e, this) && !function (t) {
                        var e = t.hash, n = t.origin, r = t.pathname,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
                        return "" !== e && n === o.origin && r === o.pathname
                    }(e, this)
                }
            }, {
                key: "isHashChange", value: function (t) {
                    var e = Vo(t, 2), n = e[0].url.pathname, r = e[1], o = r.url, i = o.pathname, s = o.hash,
                        a = r.type;
                    return i === n && ("pop" === a || a === qo && "" !== s)
                }
            }]), n
        }()
    };

    function Jo(t) {
        return (Jo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Zo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Qo(t, e) {
        return !e || "object" !== Jo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ti(t) {
        return (ti = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ei(t, e) {
        return (ei = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ni = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Qo(this, ti(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ei(t, e)
            }(n, t), function (t, e, n) {
                e && Zo(t.prototype, e), n && Zo(t, n)
            }(n, [{
                key: "assignScrollPosition", value: function (t) {
                    var e = this.histId();
                    return Object.assign(t, function (t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }({}, e, Object.assign(t[e] || {}, {
                        scrollTop: Fo(), scrollHeight: function () {
                            var t = document.documentElement, e = document.body, n = "scrollHeight";
                            return t[n] || e[n]
                        }()
                    })))
                }
            }, {
                key: "manageScrollPostion", value: function (t) {
                    var e = t.type, n = t.url.hash;
                    switch (e) {
                        case qo:
                            this.scrollHashIntoView(n, {behavior: "smooth", block: "start", inline: "nearest"});
                            break;
                        case"pop":
                            this.restoreScrollPostion();
                            break;
                        case INIT:
                            break;
                        default:
                            0
                    }
                }
            }, {
                key: "scrollHashIntoView", value: function (t, e) {
                    if (t) {
                        var n = document.getElementById(t.substr(1));
                        n && n.scrollIntoView(e)
                    } else window.scroll(window.pageXOffset, 0)
                }
            }, {
                key: "restoreScrollPostion", value: function () {
                    var t = this.histId(), e = window.history.state && window.history.state[t] || {}, n = e.scrollTop;
                    e.scrollHeight;
                    null != n && window.scroll(window.pageXOffset, n)
                }
            }, {
                key: "restoreScrollPostionOnReload", value: function () {
                    0 != Fo() || this.restoreScrollPostion()
                }
            }]), n
        }()
    };

    function ri(t) {
        return (ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function oi(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function ii(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function si(t, e) {
        return !e || "object" !== ri(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ai(t) {
        return (ai = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ui(t, e) {
        return (ui = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ci = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), si(this, ai(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ui(t, e)
            }(n, ni(t)), function (t, e, n) {
                e && ii(t.prototype, e), n && ii(t, n)
            }(n, [{
                key: "updateHistoryState", value: function (t) {
                    var e = t.type, n = t.replace, r = t.url.href;
                    if (!Do(this)) switch (e) {
                        case"init":
                        case qo:
                            var o = this.histId(), i = n || r === window.location.href ? "replaceState" : "pushState",
                                s = Object.assign(window.history.state || {}, oi({}, o, {}));
                            window.history[i](s, document.title, r);
                        case"pop":
                            break;
                        default:
                            0
                    }
                }
            }, {
                key: "updateHistoryStateHash", value: function (t) {
                    var e = t.type, n = t.url;
                    if (!Do(this) && e === qo) {
                        var r = this.histId();
                        window.history.pushState(oi({}, r, {}), document.title, n)
                    }
                }
            }, {
                key: "updateHistoryTitle", value: function (t) {
                    var e = t.type, n = t.title;
                    document.title = n, Do(this) || e !== qo || window.history.replaceState(window.history.state, n, window.location)
                }
            }, {
                key: "saveScrollPosition", value: function () {
                    if (!Do(this)) {
                        var t = this.assignScrollPosition(window.history.state || {});
                        window.history.replaceState(t, document.title, window.location)
                    }
                }
            }]), n
        }()
    };

    function li() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return "function" == typeof n && t.pop(), _t(t, void 0).lift(new fi(n))
    }

    var fi = function () {
        function t(t) {
            this.resultSelector = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new hi(t, this.resultSelector))
        }, t
    }(), hi = function (t) {
        function e(e, n, r) {
            void 0 === r && (r = Object.create(null));
            var o = t.call(this, e) || this;
            return o.iterators = [], o.active = 0, o.resultSelector = "function" == typeof n ? n : null, o.values = r, o
        }

        return P(e, t), e.prototype._next = function (t) {
            var e = this.iterators;
            q(t) ? e.push(new di(t)) : "function" == typeof t[Yt] ? e.push(new pi(t[Yt]())) : e.push(new yi(this.destination, this, t))
        }, e.prototype._complete = function () {
            var t = this.iterators, e = t.length;
            if (0 !== e) {
                this.active = e;
                for (var n = 0; n < e; n++) {
                    var r = t[n];
                    r.stillUnsubscribed ? this.add(r.subscribe(r, n)) : this.active--
                }
            } else this.destination.complete()
        }, e.prototype.notifyInactive = function () {
            this.active--, 0 === this.active && this.destination.complete()
        }, e.prototype.checkIterators = function () {
            for (var t = this.iterators, e = t.length, n = this.destination, r = 0; r < e; r++) {
                if ("function" == typeof(s = t[r]).hasValue && !s.hasValue()) return
            }
            var o = !1, i = [];
            for (r = 0; r < e; r++) {
                var s, a = (s = t[r]).next();
                if (s.hasCompleted() && (o = !0), a.done) return void n.complete();
                i.push(a.value)
            }
            this.resultSelector ? this._tryresultSelector(i) : n.next(i), o && n.complete()
        }, e.prototype._tryresultSelector = function (t) {
            var e;
            try {
                e = this.resultSelector.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }(Q), pi = function () {
        function t(t) {
            this.iterator = t, this.nextResult = t.next()
        }

        return t.prototype.hasValue = function () {
            return !0
        }, t.prototype.next = function () {
            var t = this.nextResult;
            return this.nextResult = this.iterator.next(), t
        }, t.prototype.hasCompleted = function () {
            var t = this.nextResult;
            return t && t.done
        }, t
    }(), di = function () {
        function t(t) {
            this.array = t, this.index = 0, this.length = 0, this.length = t.length
        }

        return t.prototype[Yt] = function () {
            return this
        }, t.prototype.next = function (t) {
            var e = this.index++, n = this.array;
            return e < this.length ? {value: n[e], done: !1} : {value: null, done: !0}
        }, t.prototype.hasValue = function () {
            return this.array.length > this.index
        }, t.prototype.hasCompleted = function () {
            return this.array.length === this.index
        }, t
    }(), yi = function (t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.parent = n, o.observable = r, o.stillUnsubscribed = !0, o.buffer = [], o.isComplete = !1, o
        }

        return P(e, t), e.prototype[Yt] = function () {
            return this
        }, e.prototype.next = function () {
            var t = this.buffer;
            return 0 === t.length && this.isComplete ? {value: null, done: !0} : {value: t.shift(), done: !1}
        }, e.prototype.hasValue = function () {
            return this.buffer.length > 0
        }, e.prototype.hasCompleted = function () {
            return 0 === this.buffer.length && this.isComplete
        }, e.prototype.notifyComplete = function () {
            this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
            this.buffer.push(e), this.parent.checkIterators()
        }, e.prototype.subscribe = function (t, e) {
            return ee(this, this.observable, this, e)
        }, e
    }($t);

    function mi(t) {
        return (mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function vi(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function bi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function gi(t, e) {
        return !e || "object" !== mi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function wi(t) {
        return (wi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function _i(t, e) {
        return (_i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Ei = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), gi(this, wi(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && _i(t, e)
            }(n, t), function (t, e, n) {
                e && bi(t.prototype, e), n && bi(t, n)
            }(n, [{
                key: "makeRequest", value: function (t) {
                    var e = this;
                    return Le({
                        method: "GET",
                        responseType: "text",
                        url: t.url,
                        crossDomain: Do(this),
                        headers: {Accept: "text/html"}
                    }).pipe(se(function (e) {
                        var n = e.response;
                        return Object.assign(t, {response: n})
                    }), Uo(function (n) {
                        return e.recoverIfResponse(t, n)
                    }))
                }
            }, {
                key: "recoverIfResponse", value: function (t, e) {
                    var n = e.status, r = e.xhr;
                    return r && r.response && n > 400 && n < 598 ? St(Object.assign(t, {response: r.response})) : St(Object.assign(t, {error: e}))
                }
            }, {
                key: "getFetch$", value: function (t, e, n) {
                    return t.url.href === e.url.href && null == e.error ? St(e) : n.pipe(Ir(1))
                }
            }, {
                key: "getResponse", value: function (t, e) {
                    var n = vi(e, 2), r = n[0], o = n[1];
                    return li(this.getFetch$(r, o, t).pipe(se(function (t) {
                        return Object.assign(t, r)
                    })), this.animPromise, function (t) {
                        return t
                    })
                }
            }]), n
        }()
    };

    function Si(t) {
        return (Si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function xi(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Oi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ti(t, e) {
        return !e || "object" !== Si(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ci(t) {
        return (Ci = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ni(t, e) {
        return (Ni = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ki = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Ti(this, Ci(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ni(t, e)
            }(n, t), function (t, e, n) {
                e && Oi(t.prototype, e), n && Oi(t, n)
            }(n, [{
                key: "tempRemoveScriptTags", value: function (t) {
                    var e = this, n = [];
                    return t.forEach(function (t) {
                        return Array.from(t.querySelectorAll(e.scriptSelector)).forEach(function (t) {
                            var e = [t, t.previousSibling];
                            t.parentNode.removeChild(t), n.push(e)
                        })
                    }), n
                }
            }, {
                key: "insertScript", value: function (t) {
                    var e = xi(t, 2), n = e[0], r = e[1], o = document.write;
                    return document.write = function () {
                        for (var t = document.createElement("div"), e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        t.innerHTML = n.join(), Array.from(t.childNodes).forEach(function (t) {
                            r.parentNode.insertBefore(t, r.nextSibling)
                        })
                    }, "" !== n.src ? ot.create(function (t) {
                        n.addEventListener("load", function (e) {
                            document.write = o, t.complete(e)
                        }), n.addEventListener("error", function (e) {
                            document.write = o, t.error(e)
                        }), r.parentNode.insertBefore(n, r.nextSibling)
                    }) : St({}).pipe(sn(function () {
                        r.parentNode.insertBefore(n, r.nextSibling), document.write = o
                    }))
                }
            }, {
                key: "reinsertScriptTags", value: function (t) {
                    return this.scriptSelector ? le(t.scripts).pipe(function (t, e) {
                        return fe(t, e, 1)
                    }(this.insertScript.bind(this)), Uo(function (e) {
                        throw Object.assign(t, {error: e})
                    })).toPromise().then(function () {
                        return t
                    }) : St(t)
                }
            }]), n
        }()
    };

    function ji(t) {
        return (ji = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ai(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Mi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Pi(t, e) {
        return !e || "object" !== ji(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ri(t) {
        return (Ri = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Li(t, e) {
        return (Li = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Ii = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Pi(this, Ri(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Li(t, e)
            }(n, ki(t)), function (t, e, n) {
                e && Mi(t.prototype, e), n && Mi(t, n)
            }(n, [{
                key: "getTitle", value: function (t) {
                    return (t.querySelector("title") || {}).textContent
                }
            }, {
                key: "getReplaceElements", value: function (t) {
                    if (this.replaceIds.length > 0) return this.replaceIds.map(function (e) {
                        return t.getElementById(e)
                    });
                    if (this.el.id) return [t.getElementById(this.el.id)];
                    var e = Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);
                    return [t.querySelectorAll(this.el.tagName)[e]]
                }
            }, {
                key: "responseToContent", value: function (t) {
                    var e = function (t) {
                        return document.createRange().createContextualFragment(t)
                    }(t.response), n = this.getTitle(e), r = this.getReplaceElements(e);
                    if (r.some(function (t) {
                        return null == t
                    })) throw Object.assign(t, {replaceElMissing: !0});
                    var o = this.scriptSelector ? this.tempRemoveScriptTags(r) : [];
                    return Object.assign(t, {documentFragment: e, title: n, replaceEls: r, scripts: o})
                }
            }, {
                key: "replaceContentByIds", value: function (t) {
                    this.replaceIds.map(function (t) {
                        return document.getElementById(t)
                    }).forEach(function (e, n) {
                        return e.parentNode.replaceChild(t[n], e)
                    })
                }
            }, {
                key: "replaceContentWholesale", value: function (t) {
                    var e = Ai(t, 1)[0];
                    this.el.innerHTML = e.innerHTML
                }
            }, {
                key: "replaceContent", value: function (t) {
                    this.replaceIds.length > 0 ? this.replaceContentByIds(t) : this.replaceContentWholesale(t)
                }
            }, {
                key: "updateDOM", value: function (t) {
                    try {
                        var e = t.replaceEls;
                        this.updateHistoryTitle(t), Do(this) && this.rewriteURLs(e), this.replaceContent(e)
                    } catch (e) {
                        throw Object.assign(t, {error: e})
                    }
                }
            }, {
                key: "rewriteURLs", value: function (t) {
                    var e = this;
                    t.forEach(function (t) {
                        t.querySelectorAll("[href]").forEach(e.rewriteURL("href")), t.querySelectorAll("[src]").forEach(e.rewriteURL("src")), t.querySelectorAll("img[srcset]").forEach(e.rewriteURLSrcSet("srcset")), t.querySelectorAll("blockquote[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("del[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("ins[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("q[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("img[longdesc]").forEach(e.rewriteURL("longdesc")), t.querySelectorAll("frame[longdesc]").forEach(e.rewriteURL("longdesc")), t.querySelectorAll("iframe[longdesc]").forEach(e.rewriteURL("longdesc")), t.querySelectorAll("img[usemap]").forEach(e.rewriteURL("usemap")), t.querySelectorAll("input[usemap]").forEach(e.rewriteURL("usemap")), t.querySelectorAll("object[usemap]").forEach(e.rewriteURL("usemap")), t.querySelectorAll("form[action]").forEach(e.rewriteURL("action")), t.querySelectorAll("button[formaction]").forEach(e.rewriteURL("formaction")), t.querySelectorAll("input[formaction]").forEach(e.rewriteURL("formaction")), t.querySelectorAll("video[poster]").forEach(e.rewriteURL("poster")), t.querySelectorAll("object[data]").forEach(e.rewriteURL("data")), t.querySelectorAll("object[codebase]").forEach(e.rewriteURL("codebase")), t.querySelectorAll("object[archive]").forEach(e.rewriteURLList("archive"))
                    })
                }
            }, {
                key: "rewriteURL", value: function (t) {
                    var e = this;
                    return function (n) {
                        try {
                            n.setAttribute(t, new URL(n.getAttribute(t), e.href).href)
                        } catch (t) {
                            0
                        }
                    }
                }
            }, {
                key: "rewriteURLSrcSet", value: function (t) {
                    var e = this;
                    return function (n) {
                        try {
                            n.setAttribute(t, n.getAttribute(t).split(/\s*,\s*/).map(function (t) {
                                var n = t.split(/\s+/);
                                return n[0] = new URL(n[0], e.href).href, n.join(" ")
                            }).join(", "))
                        } catch (t) {
                            0
                        }
                    }
                }
            }, {
                key: "rewriteURLList", value: function (t) {
                    var e = this;
                    return function (n) {
                        try {
                            n.setAttribute(t, n.getAttribute(t).split(/[\s,]+/).map(function (t) {
                                return new URL(t, e.href).href
                            }).join(", "))
                        } catch (t) {
                            0
                        }
                    }
                }
            }]), n
        }()
    };

    function Di(t) {
        return !q(t) && t - parseFloat(t) + 1 >= 0
    }

    function Fi(t, e, n) {
        void 0 === t && (t = 0);
        var r = -1;
        return Di(e) ? r = Number(e) < 1 ? 1 : Number(e) : gt(e) && (n = e), gt(n) || (n = tr), new ot(function (e) {
            var o = Di(t) ? t : +t - n.now();
            return n.schedule(qi, o, {index: 0, period: r, subscriber: e})
        })
    }

    function qi(t) {
        var e = t.index, n = t.period, r = t.subscriber;
        if (r.next(e), !r.closed) {
            if (-1 === n) return r.complete();
            t.index = e + 1, this.schedule(t, n)
        }
    }

    function Hi(t) {
        return (Hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ui(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function zi(t, e) {
        return !e || "object" !== Hi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Bi(t) {
        return (Bi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Wi(t, e) {
        return (Wi = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Vi = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), zi(this, Bi(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Wi(t, e)
            }(n, t), function (t, e, n) {
                e && Ui(t.prototype, e), n && Ui(t, n)
            }(n, [{
                key: "onStart", value: function (t) {
                    var e = this;
                    this.animPromise = Fi(this.duration);
                    this.fireEvent("start", {
                        detail: Object.assign(t, {
                            transitionUntil: function (t) {
                                e.animPromise = t
                            }
                        })
                    })
                }
            }, {
                key: "onDOMError", value: function (t) {
                    var e = t.replaceElMissing, n = t.url;
                    e ? (window.history.back(), setTimeout(function () {
                        document.location.href = n
                    }, 100)) : this.fireEvent("error", {detail: t})
                }
            }, {
                key: "onNetworkError", value: function (t) {
                    this.fireEvent("networkerror", {detail: t})
                }
            }, {
                key: "onError", value: function (t) {
                    this.fireEvent("error", {detail: t})
                }
            }, {
                key: "onReady", value: function (t) {
                    this.fireEvent("ready", {detail: t})
                }
            }, {
                key: "onAfter", value: function (t) {
                    this.fireEvent("after", {detail: t})
                }
            }, {
                key: "onProgress", value: function (t) {
                    this.fireEvent("progress", {detail: t})
                }
            }, {
                key: "onLoad", value: function (t) {
                    this.fireEvent("load", {detail: t})
                }
            }]), n
        }()
    };

    function $i(t) {
        return ($i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Xi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Gi(t, e) {
        return !e || "object" !== $i(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Yi(t) {
        return (Yi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ki(t, e) {
        return (Ki = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Ji = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), Gi(this, Yi(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ki(t, e)
            }(n, t), function (t, e, n) {
                e && Xi(t.prototype, e), n && Xi(t, n)
            }(n, [{
                key: "setupEventListeners", value: function () {
                    var t = this;
                    if ("MutationObserver" in window && "WeakSet" in window) {
                        var e = new WeakSet, n = this.pushSubject.next.bind(this.pushSubject),
                            r = this.hintSubject.next.bind(this.hintSubject), o = function (t) {
                                e.has(t) || (e.add(t), t.addEventListener("click", n), t.addEventListener("mouseenter", r, {passive: !0}), t.addEventListener("touchstart", r, {passive: !0}), t.addEventListener("focus", r, {passive: !0}))
                            }, i = function (e) {
                                e instanceof Element && (Io.call(e, t.linkSelector) ? o(e) : Array.from(e.querySelectorAll(t.linkSelector)).forEach(o))
                            }, s = function (t) {
                                e.delete(t), t.removeEventListener("click", n), t.removeEventListener("mouseenter", r, {passive: !0}), t.removeEventListener("touchstart", r, {passive: !0}), t.removeEventListener("focus", r, {passive: !0})
                            };
                        Ft(MutationObserver)(this.el, {}, {childList: !0, subtree: !0}).subscribe(function (e) {
                            var n = e.addedNodes, r = e.removedNodes;
                            Array.from(r).forEach(function (e) {
                                e instanceof Element && (Io.call(e, t.linkSelector) ? s(e) : Array.from(e.querySelectorAll(t.linkSelector)).forEach(s))
                            }.bind(t)), Array.from(n).forEach(i.bind(t))
                        }), this.subjects.linkSelector.subscribe(function () {
                            Array.from(e).forEach(s), i.call(t, t.el)
                        })
                    } else this.el.addEventListener("click", function (e) {
                        var n = function (t) {
                            for (var e = this; e !== document && e !== document.documentElement;) {
                                if (Io.call(e, t)) return e;
                                e = e.parentNode
                            }
                            return null
                        }.call(e.target, t.linkSelector);
                        n && n.href && (e.currentTarget = n, pushSubject.next(e))
                    })
                }
            }]), n
        }()
    };

    function Zi(t) {
        return (Zi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Qi(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ts(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function es(t, e) {
        return !e || "object" !== Zi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ns(t) {
        return (ns = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function rs(t, e) {
        return (rs = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var os = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), es(this, ns(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && rs(t, e)
            }(n, Ji(Vi(Ii(Ei(ci(Ko(t))))))), function (t, e, n) {
                e && ts(t.prototype, e), n && ts(t, n)
            }(n, [{
                key: "compareContext", value: function (t, e) {
                    return t.url.href === e.url.href && t.error === e.error && t.cacheNr === e.cacheNr
                }
            }, {
                key: "setupObservables", value: function () {
                    var t = this;
                    this.cacheNr = 1, this.pushSubject = new lt, this.hintSubject = new lt;
                    var e = Qi(me(this.pushSubject.pipe(Fe(this.subjects.disconnect), se(function (e) {
                        return {
                            type: qo,
                            url: new Ro(e.currentTarget.href, t.href),
                            anchor: e.currentTarget,
                            event: e,
                            cacheNr: t.cacheNr
                        }
                    }), Qe(this.isPushEvent.bind(this)), sn(function (e) {
                        e.event.preventDefault(), t.saveScrollPosition()
                    })), be(window, "popstate").pipe(Fe(this.subjects.disconnect), Qe(function () {
                        return window.history.state && window.history.state[t.histId()]
                    }), se(function (e) {
                        return {type: "pop", url: new Ro(window.location, t.href), event: e, cacheNr: t.cacheNr}
                    })), this.reload$.pipe(Fe(this.subjects.disconnect))).pipe(De({url: new Ro(this.initialHref)}), sn(function (e) {
                        var n = e.url;
                        return t._url = n
                    }), nr(), Ze(), Ho(this.isHashChange)).map(function (t) {
                        return t.pipe(se(function (t) {
                            return Qi(t, 2)[1]
                        }), Ze())
                    }), 2), n = e[0], r = e[1], o = me(this.subjects.prefetch.pipe(Ue(function (e) {
                        if (!e) return ve;
                        var n = $n(function () {
                            return me(r.pipe(Ar(!0)), t.fetch$.pipe(Ar(!1)))
                        }).pipe(De(!1), Ze());
                        return t.hintSubject.pipe(Fe(t.subjects.disconnect), function (t) {
                            return function (e) {
                                return t.pipe(Ue(function (t) {
                                    return t ? ve : e
                                }))
                            }
                        }(n), se(function (e) {
                            return {
                                type: "hint",
                                url: new Ro(e.currentTarget.href, t.href),
                                anchor: e.currentTarget,
                                event: e,
                                cacheNr: t.cacheNr
                            }
                        }), Qe(t.isHintEvent.bind(t)))
                    })), r).pipe(nn(this.compareContext.bind(this)), Ue(this.makeRequest.bind(this)), De({url: {}}), Ze());
                    this.fetch$ = r.pipe(sn(function (e) {
                        t.updateHistoryState(e), t.onStart(e)
                    }), Yn(o), Ue(this.getResponse.bind(this, o)), Ze());
                    var i = Qi(this.fetch$.pipe(Ho(function (t) {
                        return !t.error
                    })), 2), s = i[0], a = i[1];
                    s.pipe(se(this.responseToContent.bind(this)), sn(function (e) {
                        t.onReady(e), t.updateDOM(e), t.onAfter(e), t.manageScrollPostion(e)
                    }), sn({
                        error: function (e) {
                            return t.onDOMError(e)
                        }
                    }), Uo(function (t, e) {
                        return e
                    }), Ue(this.reinsertScriptTags.bind(this)), sn({
                        error: function (e) {
                            return t.onError(e)
                        }
                    }), Uo(function (t, e) {
                        return e
                    })).subscribe(this.onLoad.bind(this)), n.subscribe(function (e) {
                        t.updateHistoryStateHash(e), t.manageScrollPostion(e)
                    }), a.subscribe(this.onNetworkError.bind(this)), r.pipe(Ue(function (e) {
                        return $n(function () {
                            return t.animPromise
                        }).pipe(Fe(t.fetch$), Ar(e))
                    })).subscribe(this.onProgress.bind(this)), this.setupEventListeners()
                }
            }]), n
        }()
    };

    function is(t) {
        return (is = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ss(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function as(t, e) {
        return !e || "object" !== is(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function us(t, e, n) {
        return (us = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = cs(t));) ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(n) : o.value
            }
        })(t, e, n || t)
    }

    function cs(t) {
        return (cs = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ls(t, e) {
        return (ls = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var fs = new s(function (t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }(y).concat(["documentfragment", "eventlistener", "history", "promises", "queryselector", "requestanimationframe"]));
    DocumentFragment.prototype.getElementById = DocumentFragment.prototype.getElementById || function (t) {
        return this.querySelector("#".concat(t))
    };
    var hs = function (t) {
        return function (e) {
            function n() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), as(this, cs(n).apply(this, arguments))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ls(t, e)
            }(n, os(Dt(w(t)))), function (t, e, n) {
                e && ss(t.prototype, e), n && ss(t, n)
            }(n, [{
                key: "setupComponent", value: function (t, e) {
                    us(cs(n.prototype), "setupComponent", this).call(this, t, e), this.saveScrollPosition = this.saveScrollPosition.bind(this), this.reload$ = new lt
                }
            }, {
                key: "setupShadowDOM", value: function (t) {
                    return t
                }
            }, {
                key: "connectComponent", value: function () {
                    "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), this.restoreScrollPostionOnReload(), window.addEventListener("beforeunload", this.saveScrollPosition), this.setupObservables(), us(cs(n.prototype), "connectComponent", this).call(this);
                    var t = new Ro(this.initialHref);
                    this.updateHistoryState({type: "init", replace: !0, url: t});
                    var e = this.getReplaceElements(document);
                    Do(this) && this.rewriteURLs(e), this.fireEvent("init"), this.onLoad({
                        type: "init",
                        title: this.getTitle(document),
                        replaceEls: e,
                        url: t,
                        cacheNr: this.cacheNr
                    })
                }
            }, {
                key: "disconnectComponent", value: function () {
                    us(cs(n.prototype), "disconnectComponent", this).call(this), window.removeEventListener("beforeunload", this.saveScrollPosition)
                }
            }, {
                key: "assign", value: function (t) {
                    this.reload$.next({type: qo, url: new Ro(t, this.href), cacheNr: ++this.cacheNr})
                }
            }, {
                key: "reload", value: function () {
                    this.reload$.next({type: qo, url: new Ro(this.href), cacheNr: ++this.cacheNr, replace: !0})
                }
            }, {
                key: "replace", value: function (t) {
                    this.reload$.next({type: qo, url: new Ro(t, this.href), cacheNr: ++this.cacheNr, replace: !0})
                }
            }, {
                key: "hash", get: function () {
                    return this._url.hash
                }
            }, {
                key: "host", get: function () {
                    return this._url.host
                }
            }, {
                key: "hostname", get: function () {
                    return this._url.hostname
                }
            }, {
                key: "href", get: function () {
                    return this._url.href
                }
            }, {
                key: "origin", get: function () {
                    return this._url.origin
                }
            }, {
                key: "pathname", get: function () {
                    return this._url.pathname
                }
            }, {
                key: "port", get: function () {
                    return this._url.port
                }
            }, {
                key: "protocol", get: function () {
                    return this._url.protocol
                }
            }, {
                key: "search", get: function () {
                    return this._url.search
                }
            }], [{
                key: "componentName", get: function () {
                    return "hy-push-state"
                }
            }, {
                key: "types", get: function () {
                    return {
                        replaceIds: qt,
                        linkSelector: Vt,
                        duration: zt,
                        hrefRegex: Wt,
                        scriptSelector: Vt,
                        initialHref: Vt,
                        prefetch: Ut
                    }
                }
            }, {
                key: "defaults", get: function () {
                    return {
                        replaceIds: [],
                        linkSelector: "a[href]:not(.no-push-state)",
                        duration: 0,
                        hrefRegex: null,
                        scriptSelector: null,
                        initialHref: window.location.href,
                        prefetch: !1
                    }
                }
            }]), n
        }()
    };

    function ps(t) {
        return (ps = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ds(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function ys(t, e) {
        return !e || "object" !== ps(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ms(t) {
        return (ms = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function vs(t, e) {
        return (vs = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function bs(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var gs = new s(bs(N).concat(bs(fs))), ws = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ys(this, ms(e).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && vs(t, e)
        }(e, j(hs(A))), function (t, e, n) {
            e && ds(t.prototype, e), n && ds(t, n)
        }(e, [{
            key: "getTemplate", value: function () {
                return null
            }
        }], [{
            key: "observedAttributes", get: function () {
                return this.getObservedAttributes()
            }
        }]), e
    }();
    var _s = function () {
        function t(t) {
            this.project = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Es(t, this.project))
        }, t
    }(), Es = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.project = n, r.hasSubscription = !1, r.hasCompleted = !1, r.index = 0, r
        }

        return P(e, t), e.prototype._next = function (t) {
            this.hasSubscription || this.tryNext(t)
        }, e.prototype.tryNext = function (t) {
            var e, n = this.index++;
            try {
                e = this.project(t, n)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.hasSubscription = !0, this._innerSub(e, t, n)
        }, e.prototype._innerSub = function (t, e, n) {
            var r = new Xt(this, void 0, void 0);
            this.add(r), ee(this, t, e, n, r)
        }, e.prototype._complete = function () {
            this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
            this.destination.next(e)
        }, e.prototype.notifyError = function (t) {
            this.destination.error(t)
        }, e.prototype.notifyComplete = function (t) {
            this.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
        }, e
    }($t), Ss = (n(64), n(30)), xs = n.n(Ss);

    function Os(t) {
        return function (e) {
            return e.lift(new Ts(t))
        }
    }

    var Ts = function () {
        function t(t) {
            this.callback = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Cs(t, this.callback))
        }, t
    }(), Cs = function (t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new Y(n)), r
        }

        return P(e, t), e
    }(Q), Ns = n(17), ks = n.n(Ns);

    function js(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function As(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var Ms = function (t) {
        var e = t.background, n = t.color, r = t.image, o = t.overlay;
        return "".concat(n).concat(r || e).concat("" === o ? "overlay" : "")
    };
    var Ps = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = document.getElementById("_main"), r = document.getElementById("_pageStyle"),
                o = Array.from(document.styleSheets).find(function (t) {
                    return t.ownerNode === r
                }) || {};
            this.sidebar = document.getElementById("_sidebar"), this.fadeDuration = e, this.rules = o.cssRules || o.rules, this.prevHash = Ms(ks()(n)), this.themeColorEl = document.querySelector('meta[name="theme-color"]')
        }

        return function (t, e, n) {
            e && As(t.prototype, e), n && As(t, n)
        }(t, [{
            key: "fetchImage2", value: function (t) {
                var e = t.background, n = t.image;
                if (e || !n || "" === n || "none" === n) return St(null);
                var r = new URL(n, window.location);
                return Le({
                    method: "GET", responseType: "blob", url: r, crossDomain: function (t) {
                        var e = t.protocol, n = t.host,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
                        return e !== r.protocol || n !== r.host
                    }(r), headers: {Accept: "image/*"}
                }).pipe(se(function (t) {
                    var e = t.response;
                    return URL.createObjectURL(e)
                }), Uo(function () {
                    return St(n)
                }))
            }
        }, {
            key: "fetchImage", value: function (t) {
                var e = ks()(t), n = e.background, r = e.color, o = e.image, i = e.overlay, s = Ms(e);
                return s === this.prevHash ? bt() : this.fetchImage2(e).pipe(se(function (t) {
                    var a = document.createElement("div");
                    return a.classList.add("sidebar-bg"), "none" !== o && "" === i && a.classList.add("sidebar-overlay"), n ? a.style.background = n : (a.style.backgroundColor = r, t && (a.style.backgroundImage = "url(".concat(t, ")"), a.objectURL = t)), [a, e, s]
                }))
            }
        }, {
            key: "updateStyle", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.color,
                    r = void 0 === n ? "#4fb1ba" : n, o = e.themeColor, i = void 0 === o ? "#193747" : o;
                if (this.themeColorEl && window.setTimeout(function () {
                    return t.themeColorEl.content = i
                }, 250), this.rules) try {
                    var s = xs()(r), a = s.darken(.1);
                    this.rules[0].style.color = r, this.rules[0].style.borderColor = s.fade(.8).string(), this.rules[1].style.borderColor = r, this.rules[2].style.outlineColor = r, this.rules[3].style.backgroundColor = r, this.rules[3].style.borderColor = r, this.rules[4].style.boxShadow = "0 0 0 3px ".concat(s.fade(.5)), this.rules[5].style.backgroundColor = a, this.rules[5].style.borderColor = a, this.rules[6].style.backgroundColor = r, this.rules[6].style.borderColor = r, this.rules[7].style.backgroundColor = a, this.rules[7].style.borderColor = a, this.rules[this.rules.length - 1].style.backgroundColor = r
                } catch (t) {
                    console.error(t)
                }
            }
        }, {
            key: "fade", value: function (t, e) {
                var n = js(t, 1)[0], r = js(e, 3), o = r[0], i = r[1], s = r[2];
                return n.parentNode.insertBefore(o, n.nextElementSibling), this.updateStyle(i), this.prevHash = s, Wn(o, [{opacity: 0}, {opacity: 1}], {
                    duration: this.fadeDuration,
                    easing: "ease"
                }).pipe(Os(function () {
                    n.objectURL && URL.revokeObjectURL(n.objectURL), n.parentNode.removeChild(n)
                }))
            }
        }]), t
    }(), Rs = !1, Ls = !1;

    function Is(t) {
        try {
            for (var e = t.previousElementSibling; e && !e.classList.contains("MathJax_Preview");) e = e.previousElementSibling;
            var n = t.textContent.replace("% <![CDATA[", "").replace("%]]>", "");
            t.outerHTML = window.katex.renderToString(n, {displayMode: "math/tex; mode=display" === t.type}), e && function () {
                this.style.display = "none", this.style.visibility = "hidden"
            }.call(e)
        } catch (t) {
            0
        }
    }

    var Ds = zn(["classlist", "eventlistener", "queryselector"]) ? function () {
        var t = document.querySelectorAll('script[type^="math/tex"]');
        t.length && (Rs && Ls ? Array.from(t).forEach(Is) : (loadJS(document.getElementById("_hrefKatexJS").href).addEventListener("load", function () {
            (Rs = !0) && Ls && Ds()
        }), loadCSS(document.getElementById("_hrefKatexCSS").href).addEventListener("load", function () {
            Ls = !0, Rs && Ls && Ds()
        })))
    } : function () {
    };
    Ds();
    n(71);

    function Fs(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var qs = ".page-title, .post-title";
    var Hs = ["title"];

    function Us(t, e, n, r) {
        var o = t.pipe(Qe(function (t) {
            var e = t.flipType;
            return !Hs.includes(e)
        }));
        return me(function (t, e, n, r) {
            var o = r.animationMain, i = r.settings;
            if (!o) return t;
            var s = t.pipe(Qe(function (t) {
                return "title" === t.flipType
            }), Ue(function (t) {
                var e = t.anchor;
                if (!e) return St({});
                var n = document.createElement("h1");
                n.classList.add("page-title"), n.textContent = e.textContent, n.style.transformOrigin = "left top";
                var r = o.querySelector(".page");
                if (!r) return St({});
                Bn.call(r), r.appendChild(n), o.style.position = "fixed", o.style.opacity = 1;
                var s = e.getBoundingClientRect(), a = n.getBoundingClientRect(),
                    u = parseInt(getComputedStyle(e).fontSize, 10), c = parseInt(getComputedStyle(n).fontSize, 10),
                    l = s.left - a.left, f = s.top - a.top, h = u / c;
                return e.style.opacity = 0, Wn(n, [{transform: "translate3d(".concat(l, "px, ").concat(f, "px, 0) scale(").concat(h, ")")}, {transform: "translate3d(0, 0, 0) scale(1)"}], i).pipe(sn({
                    complete: function () {
                        o.style.position = "absolute"
                    }
                }))
            }));
            return t.pipe(Ue(function (t) {
                var r = t.flipType;
                return li(e.pipe(Qe(function () {
                    return "title" === r
                }), se(function (t) {
                    var e = Fs(t.replaceEls, 1)[0].querySelector(qs);
                    return e && (e.style.opacity = 0), e
                })), n, function (t) {
                    return t
                }).pipe(sn(function (t) {
                    t && (t.style.opacity = 1), o.style.opacity = 0
                }), Os(function () {
                    o.style.opacity = 0
                }))
            })).subscribe(), s
        }(t, e, n, r), o)
    }

    function zs(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var Bs = new s(function (t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }(gs).concat(["classlist", "cssanimations", "cssremunit", "documentfragment", "eventlistener", "history", "matchmedia", "opacity", "queryselector", "requestanimationframe"])),
        Ws = [{opacity: 1}, {opacity: 0}],
        Vs = [{opacity: 0, transform: "translateY(-3rem)"}, {opacity: 1, transform: "translateY(0)"}],
        $s = {duration: 250, easing: "ease-out", fill: "forwards"};

    function Xs(t) {
        var e = Vn("_permalink-template"), n = e.querySelector(".permalink");
        requestAnimationFrame(function () {
            return n.href = "#".concat(t.id), t.appendChild(e)
        })
    }

    function Gs(t) {
        t.type;
        var e = t.main, n = Wn(e, Ws, $s).pipe(Ar({main: e}));
        return window._drawer && window._drawer.opened ? (window._drawer.close(), li(n, be(window._drawer.el, "hy-drawer-transitioned").pipe(Ir(1)), function (t) {
            return t
        })) : n
    }

    function Ys(t) {
        t.type;
        var e = zs(t.replaceEls, 1)[0], n = t.flipType;
        return Wn(e, Vs, $s).pipe(Ar({main: e, flipType: n}))
    }

    window._noPushState || !zn(Bs) || Hn || requestIdleCallback(function () {
        var t = !!navigator.standalone || window.matchMedia("(display-mode: standalone)").matches,
            e = document.getElementsByTagName("hy-push-state")[0],
            n = document.querySelector("#_navbar > .content > .nav-btn-bar"),
            r = document.querySelector("link[rel=canonical]"), o = document.querySelector("meta[name=description]"),
            i = function (t) {
                var e = Vn("_animation-template");
                return t.parentNode.insertBefore(e, t), t.previousElementSibling
            }(e), s = function (t) {
                var e = Vn("_loading-template");
                return t.appendChild(e), t.lastElementChild
            }(n);
        t && function (t, e, n) {
            var r = Vn(e);
            r.querySelector(".nav-btn").addEventListener("click", n), t.appendChild(r), t.lastElementChild
        }(n, "_back-template", function () {
            return window.history.back()
        });
        var a = be(e, "hy-push-state-start").pipe(se(function (t) {
            var e = t.detail;
            return Object.assign(e, {
                flipType: function (t) {
                    return t && t.classList ? t.classList.contains("flip-title") ? "title" : t.classList.contains("flip-project") ? "project" : t.getAttribute && t.getAttribute("data-flip") : null
                }(e.anchor)
            })
        }), Ze()), u = be(e, "hy-push-state-ready").pipe(se(function (t) {
            return t.detail
        }), Ze()), c = be(e, "hy-push-state-after").pipe(se(function (t) {
            return t.detail
        }), Ze()), l = be(e, "hy-push-state-progress").pipe(se(function (t) {
            return t.detail
        }), Ze()), f = be(e, "hy-push-state-networkerror").pipe(se(function (t) {
            return t.detail
        }), Ze()), h = a.pipe(se(function (t) {
            return Object.assign(t, {main: document.getElementById("_main")})
        }), sn(function (t) {
            return t.main.style.pointerEvents = "none"
        }), function t(e, n) {
            return n ? function (r) {
                return r.pipe(t(function (t, r) {
                    return le(e(t, r)).pipe(se(function (e, o) {
                        return n(t, e, r, o)
                    }))
                }))
            } : function (t) {
                return t.lift(new _s(e))
            }
        }(Gs), sn(function (t) {
            var e = t.main;
            return Bn.call(e)
        }), Ze());
        l.subscribe(function () {
            return s.style.display = "block"
        }), u.pipe(De({replaceEls: [document.getElementById("_main")]})).subscribe(function (t) {
            var e = zs(t.replaceEls, 1)[0];
            e.classList.remove("fade-in"), requestAnimationFrame(function () {
                return s.style.display = "none"
            }), requestIdleCallback(function () {
                return Array.from(e.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")).forEach(Xs)
            })
        }), c.pipe(De({
            replaceEls: [document.getElementById("_main")],
            documentFragment: document
        })).subscribe(function (t) {
            var e = zs(t.replaceEls, 1)[0], n = t.documentFragment, i = n.querySelector("link[rel=canonical]");
            r && i && (r.href = i.href);
            var s = n.querySelector("meta[name=description]");
            o && s && (o.content = s.content), Array.from(e.querySelectorAll("li[id^='fn:']")).forEach(function (t) {
                return t.tabIndex = 0
            }), Array.from(e.querySelectorAll("a[href^='#fn:']")).forEach(function (t) {
                return t.addEventListener("click", function (t) {
                    return document.getElementById(t.currentTarget.hash.substr(1)).focus()
                })
            })
        });
        var p = c.pipe(Ue(Ys), Ze()), d = Us(a, u, me(p, f), {animationMain: i, settings: $s}).pipe(Ze());
        a.pipe(Ue(function (t) {
            var e = li(Fi(250), h, d).toPromise();
            return t.transitionUntil(e), e
        })).subscribe(), h.subscribe(), d.subscribe();
        var y = new Ps(1e3);
        c.pipe(Ue(function (t) {
            var e = zs(t.replaceEls, 1)[0];
            return li(y.fetchImage(e), p, function (t) {
                return t
            }).pipe(Fe(a))
        }), De([document.querySelector(".sidebar-bg")]), nr(), fe(function (t) {
            var e = zs(t, 2), n = e[0], r = e[1];
            return y.fade(n, r)
        })).subscribe(), p.subscribe(function () {
            return Ds()
        }), f.pipe(Ue(function (t) {
            var e = t.url;
            s.style.display = "none";
            var n = document.getElementById("_main");
            return n.style.pointerEvents = "", Bn.call(i.querySelector(".page")), Bn.call(n), function (t, e) {
                var n = e.pathname, r = Vn("_error-template"), o = r.querySelector(".this-link");
                o && (o.href = n, o.textContent = n), t.appendChild(r), t.lastElementChild
            }(n, e), Wn(n, Vs, $s)
        })).subscribe(), window._pushState = function (t) {
            return window.customElements.define("hy-push-state", ws), t
        }(e)
    }), window.ResizeObserver = window.ResizeObserver || r.a, i.a.polyfill()
}]);