var jo = Object.defineProperty;
var Wo = (e, t, s) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Q = (e, t, s) => (Wo(e, typeof t != "symbol" ? t + "" : t, s), s);
var ye = /* @__PURE__ */ ((e) => (e[e.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", e[e.WEBGL = 1] = "WEBGL", e[e.WEBGL2 = 2] = "WEBGL2", e))(ye || {}), yn = /* @__PURE__ */ ((e) => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WEBGL = 1] = "WEBGL", e[e.CANVAS = 2] = "CANVAS", e))(yn || {}), Ii = /* @__PURE__ */ ((e) => (e[e.COLOR = 16384] = "COLOR", e[e.DEPTH = 256] = "DEPTH", e[e.STENCIL = 1024] = "STENCIL", e))(Ii || {}), G = /* @__PURE__ */ ((e) => (e[e.NORMAL = 0] = "NORMAL", e[e.ADD = 1] = "ADD", e[e.MULTIPLY = 2] = "MULTIPLY", e[e.SCREEN = 3] = "SCREEN", e[e.OVERLAY = 4] = "OVERLAY", e[e.DARKEN = 5] = "DARKEN", e[e.LIGHTEN = 6] = "LIGHTEN", e[e.COLOR_DODGE = 7] = "COLOR_DODGE", e[e.COLOR_BURN = 8] = "COLOR_BURN", e[e.HARD_LIGHT = 9] = "HARD_LIGHT", e[e.SOFT_LIGHT = 10] = "SOFT_LIGHT", e[e.DIFFERENCE = 11] = "DIFFERENCE", e[e.EXCLUSION = 12] = "EXCLUSION", e[e.HUE = 13] = "HUE", e[e.SATURATION = 14] = "SATURATION", e[e.COLOR = 15] = "COLOR", e[e.LUMINOSITY = 16] = "LUMINOSITY", e[e.NORMAL_NPM = 17] = "NORMAL_NPM", e[e.ADD_NPM = 18] = "ADD_NPM", e[e.SCREEN_NPM = 19] = "SCREEN_NPM", e[e.NONE = 20] = "NONE", e[e.SRC_OVER = 0] = "SRC_OVER", e[e.SRC_IN = 21] = "SRC_IN", e[e.SRC_OUT = 22] = "SRC_OUT", e[e.SRC_ATOP = 23] = "SRC_ATOP", e[e.DST_OVER = 24] = "DST_OVER", e[e.DST_IN = 25] = "DST_IN", e[e.DST_OUT = 26] = "DST_OUT", e[e.DST_ATOP = 27] = "DST_ATOP", e[e.ERASE = 26] = "ERASE", e[e.SUBTRACT = 28] = "SUBTRACT", e[e.XOR = 29] = "XOR", e))(G || {}), Vt = /* @__PURE__ */ ((e) => (e[e.POINTS = 0] = "POINTS", e[e.LINES = 1] = "LINES", e[e.LINE_LOOP = 2] = "LINE_LOOP", e[e.LINE_STRIP = 3] = "LINE_STRIP", e[e.TRIANGLES = 4] = "TRIANGLES", e[e.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", e[e.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", e))(Vt || {}), C = /* @__PURE__ */ ((e) => (e[e.RGBA = 6408] = "RGBA", e[e.RGB = 6407] = "RGB", e[e.RG = 33319] = "RG", e[e.RED = 6403] = "RED", e[e.RGBA_INTEGER = 36249] = "RGBA_INTEGER", e[e.RGB_INTEGER = 36248] = "RGB_INTEGER", e[e.RG_INTEGER = 33320] = "RG_INTEGER", e[e.RED_INTEGER = 36244] = "RED_INTEGER", e[e.ALPHA = 6406] = "ALPHA", e[e.LUMINANCE = 6409] = "LUMINANCE", e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", e))(C || {}), Me = /* @__PURE__ */ ((e) => (e[e.TEXTURE_2D = 3553] = "TEXTURE_2D", e[e.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", e[e.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", e[e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", e[e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", e[e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", e[e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", e))(Me || {}), k = /* @__PURE__ */ ((e) => (e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", e[e.UNSIGNED_INT = 5125] = "UNSIGNED_INT", e[e.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", e[e.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", e[e.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", e[e.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", e[e.BYTE = 5120] = "BYTE", e[e.SHORT = 5122] = "SHORT", e[e.INT = 5124] = "INT", e[e.FLOAT = 5126] = "FLOAT", e[e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", e[e.HALF_FLOAT = 36193] = "HALF_FLOAT", e))(k || {}), Ri = /* @__PURE__ */ ((e) => (e[e.FLOAT = 0] = "FLOAT", e[e.INT = 1] = "INT", e[e.UINT = 2] = "UINT", e))(Ri || {}), Zt = /* @__PURE__ */ ((e) => (e[e.NEAREST = 0] = "NEAREST", e[e.LINEAR = 1] = "LINEAR", e))(Zt || {}), ie = /* @__PURE__ */ ((e) => (e[e.CLAMP = 33071] = "CLAMP", e[e.REPEAT = 10497] = "REPEAT", e[e.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", e))(ie || {}), $t = /* @__PURE__ */ ((e) => (e[e.OFF = 0] = "OFF", e[e.POW2 = 1] = "POW2", e[e.ON = 2] = "ON", e[e.ON_MANUAL = 3] = "ON_MANUAL", e))($t || {}), kt = /* @__PURE__ */ ((e) => (e[e.NPM = 0] = "NPM", e[e.UNPACK = 1] = "UNPACK", e[e.PMA = 2] = "PMA", e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", e[e.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", e))(kt || {}), Xt = /* @__PURE__ */ ((e) => (e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e[e.AUTO = 2] = "AUTO", e[e.BLEND = 0] = "BLEND", e[e.CLEAR = 1] = "CLEAR", e[e.BLIT = 2] = "BLIT", e))(Xt || {}), nr = /* @__PURE__ */ ((e) => (e[e.AUTO = 0] = "AUTO", e[e.MANUAL = 1] = "MANUAL", e))(nr || {}), At = /* @__PURE__ */ ((e) => (e.LOW = "lowp", e.MEDIUM = "mediump", e.HIGH = "highp", e))(At || {}), ct = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.SCISSOR = 1] = "SCISSOR", e[e.STENCIL = 2] = "STENCIL", e[e.SPRITE = 3] = "SPRITE", e[e.COLOR = 4] = "COLOR", e))(ct || {}), nt = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.LOW = 2] = "LOW", e[e.MEDIUM = 4] = "MEDIUM", e[e.HIGH = 8] = "HIGH", e))(nt || {}), jt = /* @__PURE__ */ ((e) => (e[e.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", e[e.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", e[e.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", e))(jt || {});
const $o = {
  createCanvas: (e, t) => {
    const s = document.createElement("canvas");
    return s.width = e, s.height = t, s;
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (e, t) => fetch(e, t),
  parseXML: (e) => new DOMParser().parseFromString(e, "text/xml")
}, M = {
  ADAPTER: $o,
  RESOLUTION: 1,
  RENDER_OPTIONS: {
    view: null,
    width: 800,
    height: 600,
    autoDensity: !1,
    backgroundColor: 0,
    backgroundAlpha: 1,
    clearBeforeRender: !0,
    antialias: !1,
    premultipliedAlpha: !0,
    preserveDrawingBuffer: !1,
    hello: !1
  },
  CREATE_IMAGE_BITMAP: !1,
  ROUND_PIXELS: !1
};
var ii = /iPhone/i, gr = /iPod/i, _r = /iPad/i, xr = /\biOS-universal(?:.+)Mac\b/i, ri = /\bAndroid(?:.+)Mobile\b/i, vr = /Android/i, Te = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, ls = /Silk/i, qt = /Windows Phone/i, yr = /\bWindows(?:.+)ARM\b/i, br = /BlackBerry/i, Tr = /BB10/i, Er = /Opera Mini/i, wr = /\b(CriOS|Chrome)(?:.+)Mobile/i, Ar = /Mobile(?:.+)Firefox\b/i, Sr = function(e) {
  return typeof e < "u" && e.platform === "MacIntel" && typeof e.maxTouchPoints == "number" && e.maxTouchPoints > 1 && typeof MSStream > "u";
};
function Yo(e) {
  return function(t) {
    return t.test(e);
  };
}
function qo(e) {
  var t = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  !e && typeof navigator < "u" ? t = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints || 0
  } : typeof e == "string" ? t.userAgent = e : e && e.userAgent && (t = {
    userAgent: e.userAgent,
    platform: e.platform,
    maxTouchPoints: e.maxTouchPoints || 0
  });
  var s = t.userAgent, i = s.split("[FBAN");
  typeof i[1] < "u" && (s = i[0]), i = s.split("Twitter"), typeof i[1] < "u" && (s = i[0]);
  var r = Yo(s), n = {
    apple: {
      phone: r(ii) && !r(qt),
      ipod: r(gr),
      tablet: !r(ii) && (r(_r) || Sr(t)) && !r(qt),
      universal: r(xr),
      device: (r(ii) || r(gr) || r(_r) || r(xr) || Sr(t)) && !r(qt)
    },
    amazon: {
      phone: r(Te),
      tablet: !r(Te) && r(ls),
      device: r(Te) || r(ls)
    },
    android: {
      phone: !r(qt) && r(Te) || !r(qt) && r(ri),
      tablet: !r(qt) && !r(Te) && !r(ri) && (r(ls) || r(vr)),
      device: !r(qt) && (r(Te) || r(ls) || r(ri) || r(vr)) || r(/\bokhttp\b/i)
    },
    windows: {
      phone: r(qt),
      tablet: r(yr),
      device: r(qt) || r(yr)
    },
    other: {
      blackberry: r(br),
      blackberry10: r(Tr),
      opera: r(Er),
      firefox: r(Ar),
      chrome: r(wr),
      device: r(br) || r(Tr) || r(Er) || r(Ar) || r(wr)
    },
    any: !1,
    phone: !1,
    tablet: !1
  };
  return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n;
}
const Jt = qo(globalThis.navigator);
M.RETINA_PREFIX = /@([0-9\.]+)x/;
M.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var ni = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = {}, Ko = {
  get exports() {
    return ge;
  },
  set exports(e) {
    ge = e;
  }
};
(function(e) {
  var t = Object.prototype.hasOwnProperty, s = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (s = !1));
  function r(h, l, c) {
    this.fn = h, this.context = l, this.once = c || !1;
  }
  function n(h, l, c, u, d) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var f = new r(c, u || h, d), p = s ? s + l : l;
    return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], f] : h._events[p].push(f) : (h._events[p] = f, h._eventsCount++), h;
  }
  function o(h, l) {
    --h._eventsCount === 0 ? h._events = new i() : delete h._events[l];
  }
  function a() {
    this._events = new i(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var l = [], c, u;
    if (this._eventsCount === 0)
      return l;
    for (u in c = this._events)
      t.call(c, u) && l.push(s ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
  }, a.prototype.listeners = function(l) {
    var c = s ? s + l : l, u = this._events[c];
    if (!u)
      return [];
    if (u.fn)
      return [u.fn];
    for (var d = 0, f = u.length, p = new Array(f); d < f; d++)
      p[d] = u[d].fn;
    return p;
  }, a.prototype.listenerCount = function(l) {
    var c = s ? s + l : l, u = this._events[c];
    return u ? u.fn ? 1 : u.length : 0;
  }, a.prototype.emit = function(l, c, u, d, f, p) {
    var _ = s ? s + l : l;
    if (!this._events[_])
      return !1;
    var m = this._events[_], v = arguments.length, y, g;
    if (m.fn) {
      switch (m.once && this.removeListener(l, m.fn, void 0, !0), v) {
        case 1:
          return m.fn.call(m.context), !0;
        case 2:
          return m.fn.call(m.context, c), !0;
        case 3:
          return m.fn.call(m.context, c, u), !0;
        case 4:
          return m.fn.call(m.context, c, u, d), !0;
        case 5:
          return m.fn.call(m.context, c, u, d, f), !0;
        case 6:
          return m.fn.call(m.context, c, u, d, f, p), !0;
      }
      for (g = 1, y = new Array(v - 1); g < v; g++)
        y[g - 1] = arguments[g];
      m.fn.apply(m.context, y);
    } else {
      var x = m.length, T;
      for (g = 0; g < x; g++)
        switch (m[g].once && this.removeListener(l, m[g].fn, void 0, !0), v) {
          case 1:
            m[g].fn.call(m[g].context);
            break;
          case 2:
            m[g].fn.call(m[g].context, c);
            break;
          case 3:
            m[g].fn.call(m[g].context, c, u);
            break;
          case 4:
            m[g].fn.call(m[g].context, c, u, d);
            break;
          default:
            if (!y)
              for (T = 1, y = new Array(v - 1); T < v; T++)
                y[T - 1] = arguments[T];
            m[g].fn.apply(m[g].context, y);
        }
    }
    return !0;
  }, a.prototype.on = function(l, c, u) {
    return n(this, l, c, u, !1);
  }, a.prototype.once = function(l, c, u) {
    return n(this, l, c, u, !0);
  }, a.prototype.removeListener = function(l, c, u, d) {
    var f = s ? s + l : l;
    if (!this._events[f])
      return this;
    if (!c)
      return o(this, f), this;
    var p = this._events[f];
    if (p.fn)
      p.fn === c && (!d || p.once) && (!u || p.context === u) && o(this, f);
    else {
      for (var _ = 0, m = [], v = p.length; _ < v; _++)
        (p[_].fn !== c || d && !p[_].once || u && p[_].context !== u) && m.push(p[_]);
      m.length ? this._events[f] = m.length === 1 ? m[0] : m : o(this, f);
    }
    return this;
  }, a.prototype.removeAllListeners = function(l) {
    var c;
    return l ? (c = s ? s + l : l, this._events[c] && o(this, c)) : (this._events = new i(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = s, a.EventEmitter = a, e.exports = a;
})(Ko);
var Ls = {}, Zo = {
  get exports() {
    return Ls;
  },
  set exports(e) {
    Ls = e;
  }
};
Zo.exports = Ys;
Ls.default = Ys;
function Ys(e, t, s) {
  s = s || 2;
  var i = t && t.length, r = i ? t[0] * s : e.length, n = bn(e, 0, r, s, !0), o = [];
  if (!n || n.next === n.prev)
    return o;
  var a, h, l, c, u, d, f;
  if (i && (n = sa(e, t, n, s)), e.length > 80 * s) {
    a = l = e[0], h = c = e[1];
    for (var p = s; p < r; p += s)
      u = e[p], d = e[p + 1], u < a && (a = u), d < h && (h = d), u > l && (l = u), d > c && (c = d);
    f = Math.max(l - a, c - h), f = f !== 0 ? 32767 / f : 0;
  }
  return Ze(n, o, s, a, h, f, 0), o;
}
function bn(e, t, s, i, r) {
  var n, o;
  if (r === Bi(e, t, s, i) > 0)
    for (n = t; n < s; n += i)
      o = Cr(n, e[n], e[n + 1], o);
  else
    for (n = s - i; n >= t; n -= i)
      o = Cr(n, e[n], e[n + 1], o);
  return o && qs(o, o.next) && (Qe(o), o = o.next), o;
}
function _e(e, t) {
  if (!e)
    return e;
  t || (t = e);
  var s = e, i;
  do
    if (i = !1, !s.steiner && (qs(s, s.next) || st(s.prev, s, s.next) === 0)) {
      if (Qe(s), s = t = s.prev, s === s.next)
        break;
      i = !0;
    } else
      s = s.next;
  while (i || s !== t);
  return t;
}
function Ze(e, t, s, i, r, n, o) {
  if (e) {
    !o && n && aa(e, i, r, n);
    for (var a = e, h, l; e.prev !== e.next; ) {
      if (h = e.prev, l = e.next, n ? Qo(e, i, r, n) : Jo(e)) {
        t.push(h.i / s | 0), t.push(e.i / s | 0), t.push(l.i / s | 0), Qe(e), e = l.next, a = l.next;
        continue;
      }
      if (e = l, e === a) {
        o ? o === 1 ? (e = ta(_e(e), t, s), Ze(e, t, s, i, r, n, 2)) : o === 2 && ea(e, t, s, i, r, n) : Ze(_e(e), t, s, i, r, n, 1);
        break;
      }
    }
  }
}
function Jo(e) {
  var t = e.prev, s = e, i = e.next;
  if (st(t, s, i) >= 0)
    return !1;
  for (var r = t.x, n = s.x, o = i.x, a = t.y, h = s.y, l = i.y, c = r < n ? r < o ? r : o : n < o ? n : o, u = a < h ? a < l ? a : l : h < l ? h : l, d = r > n ? r > o ? r : o : n > o ? n : o, f = a > h ? a > l ? a : l : h > l ? h : l, p = i.next; p !== t; ) {
    if (p.x >= c && p.x <= d && p.y >= u && p.y <= f && Ie(r, a, n, h, o, l, p.x, p.y) && st(p.prev, p, p.next) >= 0)
      return !1;
    p = p.next;
  }
  return !0;
}
function Qo(e, t, s, i) {
  var r = e.prev, n = e, o = e.next;
  if (st(r, n, o) >= 0)
    return !1;
  for (var a = r.x, h = n.x, l = o.x, c = r.y, u = n.y, d = o.y, f = a < h ? a < l ? a : l : h < l ? h : l, p = c < u ? c < d ? c : d : u < d ? u : d, _ = a > h ? a > l ? a : l : h > l ? h : l, m = c > u ? c > d ? c : d : u > d ? u : d, v = Pi(f, p, t, s, i), y = Pi(_, m, t, s, i), g = e.prevZ, x = e.nextZ; g && g.z >= v && x && x.z <= y; ) {
    if (g.x >= f && g.x <= _ && g.y >= p && g.y <= m && g !== r && g !== o && Ie(a, c, h, u, l, d, g.x, g.y) && st(g.prev, g, g.next) >= 0 || (g = g.prevZ, x.x >= f && x.x <= _ && x.y >= p && x.y <= m && x !== r && x !== o && Ie(a, c, h, u, l, d, x.x, x.y) && st(x.prev, x, x.next) >= 0))
      return !1;
    x = x.nextZ;
  }
  for (; g && g.z >= v; ) {
    if (g.x >= f && g.x <= _ && g.y >= p && g.y <= m && g !== r && g !== o && Ie(a, c, h, u, l, d, g.x, g.y) && st(g.prev, g, g.next) >= 0)
      return !1;
    g = g.prevZ;
  }
  for (; x && x.z <= y; ) {
    if (x.x >= f && x.x <= _ && x.y >= p && x.y <= m && x !== r && x !== o && Ie(a, c, h, u, l, d, x.x, x.y) && st(x.prev, x, x.next) >= 0)
      return !1;
    x = x.nextZ;
  }
  return !0;
}
function ta(e, t, s) {
  var i = e;
  do {
    var r = i.prev, n = i.next.next;
    !qs(r, n) && Tn(r, i, i.next, n) && Je(r, n) && Je(n, r) && (t.push(r.i / s | 0), t.push(i.i / s | 0), t.push(n.i / s | 0), Qe(i), Qe(i.next), i = e = n), i = i.next;
  } while (i !== e);
  return _e(i);
}
function ea(e, t, s, i, r, n) {
  var o = e;
  do {
    for (var a = o.next.next; a !== o.prev; ) {
      if (o.i !== a.i && ca(o, a)) {
        var h = En(o, a);
        o = _e(o, o.next), h = _e(h, h.next), Ze(o, t, s, i, r, n, 0), Ze(h, t, s, i, r, n, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== e);
}
function sa(e, t, s, i) {
  var r = [], n, o, a, h, l;
  for (n = 0, o = t.length; n < o; n++)
    a = t[n] * i, h = n < o - 1 ? t[n + 1] * i : e.length, l = bn(e, a, h, i, !1), l === l.next && (l.steiner = !0), r.push(la(l));
  for (r.sort(ia), n = 0; n < r.length; n++)
    s = ra(r[n], s);
  return s;
}
function ia(e, t) {
  return e.x - t.x;
}
function ra(e, t) {
  var s = na(e, t);
  if (!s)
    return t;
  var i = En(s, e);
  return _e(i, i.next), _e(s, s.next);
}
function na(e, t) {
  var s = t, i = e.x, r = e.y, n = -1 / 0, o;
  do {
    if (r <= s.y && r >= s.next.y && s.next.y !== s.y) {
      var a = s.x + (r - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
      if (a <= i && a > n && (n = a, o = s.x < s.next.x ? s : s.next, a === i))
        return o;
    }
    s = s.next;
  } while (s !== t);
  if (!o)
    return null;
  var h = o, l = o.x, c = o.y, u = 1 / 0, d;
  s = o;
  do
    i >= s.x && s.x >= l && i !== s.x && Ie(r < c ? i : n, r, l, c, r < c ? n : i, r, s.x, s.y) && (d = Math.abs(r - s.y) / (i - s.x), Je(s, e) && (d < u || d === u && (s.x > o.x || s.x === o.x && oa(o, s))) && (o = s, u = d)), s = s.next;
  while (s !== h);
  return o;
}
function oa(e, t) {
  return st(e.prev, e, t.prev) < 0 && st(t.next, e, e.next) < 0;
}
function aa(e, t, s, i) {
  var r = e;
  do
    r.z === 0 && (r.z = Pi(r.x, r.y, t, s, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, ha(r);
}
function ha(e) {
  var t, s, i, r, n, o, a, h, l = 1;
  do {
    for (s = e, e = null, n = null, o = 0; s; ) {
      for (o++, i = s, a = 0, t = 0; t < l && (a++, i = i.nextZ, !!i); t++)
        ;
      for (h = l; a > 0 || h > 0 && i; )
        a !== 0 && (h === 0 || !i || s.z <= i.z) ? (r = s, s = s.nextZ, a--) : (r = i, i = i.nextZ, h--), n ? n.nextZ = r : e = r, r.prevZ = n, n = r;
      s = i;
    }
    n.nextZ = null, l *= 2;
  } while (o > 1);
  return e;
}
function Pi(e, t, s, i, r) {
  return e = (e - s) * r | 0, t = (t - i) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function la(e) {
  var t = e, s = e;
  do
    (t.x < s.x || t.x === s.x && t.y < s.y) && (s = t), t = t.next;
  while (t !== e);
  return s;
}
function Ie(e, t, s, i, r, n, o, a) {
  return (r - o) * (t - a) >= (e - o) * (n - a) && (e - o) * (i - a) >= (s - o) * (t - a) && (s - o) * (n - a) >= (r - o) * (i - a);
}
function ca(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !ua(e, t) && // dones't intersect other edges
  (Je(e, t) && Je(t, e) && da(e, t) && // locally visible
  (st(e.prev, e, t.prev) || st(e, t.prev, t)) || // does not create opposite-facing sectors
  qs(e, t) && st(e.prev, e, e.next) > 0 && st(t.prev, t, t.next) > 0);
}
function st(e, t, s) {
  return (t.y - e.y) * (s.x - t.x) - (t.x - e.x) * (s.y - t.y);
}
function qs(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Tn(e, t, s, i) {
  var r = us(st(e, t, s)), n = us(st(e, t, i)), o = us(st(s, i, e)), a = us(st(s, i, t));
  return !!(r !== n && o !== a || r === 0 && cs(e, s, t) || n === 0 && cs(e, i, t) || o === 0 && cs(s, e, i) || a === 0 && cs(s, t, i));
}
function cs(e, t, s) {
  return t.x <= Math.max(e.x, s.x) && t.x >= Math.min(e.x, s.x) && t.y <= Math.max(e.y, s.y) && t.y >= Math.min(e.y, s.y);
}
function us(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function ua(e, t) {
  var s = e;
  do {
    if (s.i !== e.i && s.next.i !== e.i && s.i !== t.i && s.next.i !== t.i && Tn(s, s.next, e, t))
      return !0;
    s = s.next;
  } while (s !== e);
  return !1;
}
function Je(e, t) {
  return st(e.prev, e, e.next) < 0 ? st(e, t, e.next) >= 0 && st(e, e.prev, t) >= 0 : st(e, t, e.prev) < 0 || st(e, e.next, t) < 0;
}
function da(e, t) {
  var s = e, i = !1, r = (e.x + t.x) / 2, n = (e.y + t.y) / 2;
  do
    s.y > n != s.next.y > n && s.next.y !== s.y && r < (s.next.x - s.x) * (n - s.y) / (s.next.y - s.y) + s.x && (i = !i), s = s.next;
  while (s !== e);
  return i;
}
function En(e, t) {
  var s = new Mi(e.i, e.x, e.y), i = new Mi(t.i, t.x, t.y), r = e.next, n = t.prev;
  return e.next = t, t.prev = e, s.next = r, r.prev = s, i.next = s, s.prev = i, n.next = i, i.prev = n, i;
}
function Cr(e, t, s, i) {
  var r = new Mi(e, t, s);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function Qe(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Mi(e, t, s) {
  this.i = e, this.x = t, this.y = s, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
Ys.deviation = function(e, t, s, i) {
  var r = t && t.length, n = r ? t[0] * s : e.length, o = Math.abs(Bi(e, 0, n, s));
  if (r)
    for (var a = 0, h = t.length; a < h; a++) {
      var l = t[a] * s, c = a < h - 1 ? t[a + 1] * s : e.length;
      o -= Math.abs(Bi(e, l, c, s));
    }
  var u = 0;
  for (a = 0; a < i.length; a += 3) {
    var d = i[a] * s, f = i[a + 1] * s, p = i[a + 2] * s;
    u += Math.abs(
      (e[d] - e[p]) * (e[f + 1] - e[d + 1]) - (e[d] - e[f]) * (e[p + 1] - e[d + 1])
    );
  }
  return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o);
};
function Bi(e, t, s, i) {
  for (var r = 0, n = t, o = s - i; n < s; n += i)
    r += (e[o] - e[n]) * (e[n + 1] + e[o + 1]), o = n;
  return r;
}
Ys.flatten = function(e) {
  for (var t = e[0][0].length, s = { vertices: [], holes: [], dimensions: t }, i = 0, r = 0; r < e.length; r++) {
    for (var n = 0; n < e[r].length; n++)
      for (var o = 0; o < t; o++)
        s.vertices.push(e[r][n][o]);
    r > 0 && (i += e[r - 1].length, s.holes.push(i));
  }
  return s;
};
var Ns = {}, fa = {
  get exports() {
    return Ns;
  },
  set exports(e) {
    Ns = e;
  }
};
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(s) {
    var i = t && !t.nodeType && t, r = e && !e.nodeType && e, n = typeof ni == "object" && ni;
    (n.global === n || n.window === n || n.self === n) && (s = n);
    var o, a = 2147483647, h = 36, l = 1, c = 26, u = 38, d = 700, f = 72, p = 128, _ = "-", m = /^xn--/, v = /[^\x20-\x7E]/, y = /[\x2E\u3002\uFF0E\uFF61]/g, g = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, x = h - l, T = Math.floor, I = String.fromCharCode, S;
    function E(A) {
      throw RangeError(g[A]);
    }
    function N(A, H) {
      for (var W = A.length, K = []; W--; )
        K[W] = H(A[W]);
      return K;
    }
    function U(A, H) {
      var W = A.split("@"), K = "";
      W.length > 1 && (K = W[0] + "@", A = W[1]), A = A.replace(y, ".");
      var Z = A.split("."), ut = N(Z, H).join(".");
      return K + ut;
    }
    function R(A) {
      for (var H = [], W = 0, K = A.length, Z, ut; W < K; )
        Z = A.charCodeAt(W++), Z >= 55296 && Z <= 56319 && W < K ? (ut = A.charCodeAt(W++), (ut & 64512) == 56320 ? H.push(((Z & 1023) << 10) + (ut & 1023) + 65536) : (H.push(Z), W--)) : H.push(Z);
      return H;
    }
    function F(A) {
      return N(A, function(H) {
        var W = "";
        return H > 65535 && (H -= 65536, W += I(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), W += I(H), W;
      }).join("");
    }
    function w(A) {
      return A - 48 < 10 ? A - 22 : A - 65 < 26 ? A - 65 : A - 97 < 26 ? A - 97 : h;
    }
    function b(A, H) {
      return A + 22 + 75 * (A < 26) - ((H != 0) << 5);
    }
    function z(A, H, W) {
      var K = 0;
      for (A = W ? T(A / d) : A >> 1, A += T(A / H); A > x * c >> 1; K += h)
        A = T(A / x);
      return T(K + (x + 1) * A / (A + u));
    }
    function j(A) {
      var H = [], W = A.length, K, Z = 0, ut = p, at = f, dt, xt, Tt, ft, J, ht, lt, Ut, Gt;
      for (dt = A.lastIndexOf(_), dt < 0 && (dt = 0), xt = 0; xt < dt; ++xt)
        A.charCodeAt(xt) >= 128 && E("not-basic"), H.push(A.charCodeAt(xt));
      for (Tt = dt > 0 ? dt + 1 : 0; Tt < W; ) {
        for (ft = Z, J = 1, ht = h; Tt >= W && E("invalid-input"), lt = w(A.charCodeAt(Tt++)), (lt >= h || lt > T((a - Z) / J)) && E("overflow"), Z += lt * J, Ut = ht <= at ? l : ht >= at + c ? c : ht - at, !(lt < Ut); ht += h)
          Gt = h - Ut, J > T(a / Gt) && E("overflow"), J *= Gt;
        K = H.length + 1, at = z(Z - ft, K, ft == 0), T(Z / K) > a - ut && E("overflow"), ut += T(Z / K), Z %= K, H.splice(Z++, 0, ut);
      }
      return F(H);
    }
    function B(A) {
      var H, W, K, Z, ut, at, dt, xt, Tt, ft, J, ht = [], lt, Ut, Gt, Ge;
      for (A = R(A), lt = A.length, H = p, W = 0, ut = f, at = 0; at < lt; ++at)
        J = A[at], J < 128 && ht.push(I(J));
      for (K = Z = ht.length, Z && ht.push(_); K < lt; ) {
        for (dt = a, at = 0; at < lt; ++at)
          J = A[at], J >= H && J < dt && (dt = J);
        for (Ut = K + 1, dt - H > T((a - W) / Ut) && E("overflow"), W += (dt - H) * Ut, H = dt, at = 0; at < lt; ++at)
          if (J = A[at], J < H && ++W > a && E("overflow"), J == H) {
            for (xt = W, Tt = h; ft = Tt <= ut ? l : Tt >= ut + c ? c : Tt - ut, !(xt < ft); Tt += h)
              Ge = xt - ft, Gt = h - ft, ht.push(
                I(b(ft + Ge % Gt, 0))
              ), xt = T(Ge / Gt);
            ht.push(I(b(xt, 0))), ut = z(W, Ut, K == Z), W = 0, ++K;
          }
        ++W, ++H;
      }
      return ht.join("");
    }
    function q(A) {
      return U(A, function(H) {
        return m.test(H) ? j(H.slice(4).toLowerCase()) : H;
      });
    }
    function rt(A) {
      return U(A, function(H) {
        return v.test(H) ? "xn--" + B(H) : H;
      });
    }
    if (o = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.3.2",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: R,
        encode: F
      },
      decode: j,
      encode: B,
      toASCII: rt,
      toUnicode: q
    }, i && r)
      if (e.exports == i)
        r.exports = o;
      else
        for (S in o)
          o.hasOwnProperty(S) && (i[S] = o[S]);
    else
      s.punycode = o;
  })(ni);
})(fa, Ns);
var pa = {
  isString: function(e) {
    return typeof e == "string";
  },
  isObject: function(e) {
    return typeof e == "object" && e !== null;
  },
  isNull: function(e) {
    return e === null;
  },
  isNullOrUndefined: function(e) {
    return e == null;
  }
}, ts = {};
function ma(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var ga = function(e, t, s, i) {
  t = t || "&", s = s || "=";
  var r = {};
  if (typeof e != "string" || e.length === 0)
    return r;
  var n = /\+/g;
  e = e.split(t);
  var o = 1e3;
  i && typeof i.maxKeys == "number" && (o = i.maxKeys);
  var a = e.length;
  o > 0 && a > o && (a = o);
  for (var h = 0; h < a; ++h) {
    var l = e[h].replace(n, "%20"), c = l.indexOf(s), u, d, f, p;
    c >= 0 ? (u = l.substr(0, c), d = l.substr(c + 1)) : (u = l, d = ""), f = decodeURIComponent(u), p = decodeURIComponent(d), ma(r, f) ? Array.isArray(r[f]) ? r[f].push(p) : r[f] = [r[f], p] : r[f] = p;
  }
  return r;
}, He = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, _a = function(e, t, s, i) {
  return t = t || "&", s = s || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(r) {
    var n = encodeURIComponent(He(r)) + s;
    return Array.isArray(e[r]) ? e[r].map(function(o) {
      return n + encodeURIComponent(He(o));
    }).join(t) : n + encodeURIComponent(He(e[r]));
  }).join(t) : i ? encodeURIComponent(He(i)) + s + encodeURIComponent(He(e)) : "";
};
ts.decode = ts.parse = ga;
ts.encode = ts.stringify = _a;
var xa = Ns, zt = pa, va = Ks, ya = Ma, ba = Pa;
function Lt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Ta = /^([a-z0-9.+-]+:)/i, Ea = /:[0-9]*$/, wa = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Aa = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Sa = ["{", "}", "|", "\\", "^", "`"].concat(Aa), Di = ["'"].concat(Sa), Ir = ["%", "/", "?", ";", "#"].concat(Di), Rr = ["/", "?", "#"], Ca = 255, Pr = /^[+a-z0-9A-Z_-]{0,63}$/, Ia = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ra = {
  javascript: !0,
  "javascript:": !0
}, Fi = {
  javascript: !0,
  "javascript:": !0
}, Be = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, Li = ts;
function Ks(e, t, s) {
  if (e && zt.isObject(e) && e instanceof Lt)
    return e;
  var i = new Lt();
  return i.parse(e, t, s), i;
}
Lt.prototype.parse = function(e, t, s) {
  if (!zt.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"), r = i !== -1 && i < e.indexOf("#") ? "?" : "#", n = e.split(r), o = /\\/g;
  n[0] = n[0].replace(o, "/"), e = n.join(r);
  var a = e;
  if (a = a.trim(), !s && e.split("#").length === 1) {
    var h = wa.exec(a);
    if (h)
      return this.path = a, this.href = a, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = Li.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var l = Ta.exec(a);
  if (l) {
    l = l[0];
    var c = l.toLowerCase();
    this.protocol = c, a = a.substr(l.length);
  }
  if (s || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var u = a.substr(0, 2) === "//";
    u && !(l && Fi[l]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!Fi[l] && (u || l && !Be[l])) {
    for (var d = -1, f = 0; f < Rr.length; f++) {
      var p = a.indexOf(Rr[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var _, m;
    d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (_ = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(_)), d = -1;
    for (var f = 0; f < Ir.length; f++) {
      var p = a.indexOf(Ir[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var v = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!v)
      for (var y = this.hostname.split(/\./), f = 0, g = y.length; f < g; f++) {
        var x = y[f];
        if (x && !x.match(Pr)) {
          for (var T = "", I = 0, S = x.length; I < S; I++)
            x.charCodeAt(I) > 127 ? T += "x" : T += x[I];
          if (!T.match(Pr)) {
            var E = y.slice(0, f), N = y.slice(f + 1), U = x.match(Ia);
            U && (E.push(U[1]), N.unshift(U[2])), N.length && (a = "/" + N.join(".") + a), this.hostname = E.join(".");
            break;
          }
        }
      }
    this.hostname.length > Ca ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), v || (this.hostname = xa.toASCII(this.hostname));
    var R = this.port ? ":" + this.port : "", F = this.hostname || "";
    this.host = F + R, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!Ra[c])
    for (var f = 0, g = Di.length; f < g; f++) {
      var w = Di[f];
      if (a.indexOf(w) !== -1) {
        var b = encodeURIComponent(w);
        b === w && (b = escape(w)), a = a.split(w).join(b);
      }
    }
  var z = a.indexOf("#");
  z !== -1 && (this.hash = a.substr(z), a = a.slice(0, z));
  var j = a.indexOf("?");
  if (j !== -1 ? (this.search = a.substr(j), this.query = a.substr(j + 1), t && (this.query = Li.parse(this.query)), a = a.slice(0, j)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), Be[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var R = this.pathname || "", B = this.search || "";
    this.path = R + B;
  }
  return this.href = this.format(), this;
};
function Pa(e) {
  return zt.isString(e) && (e = Ks(e)), e instanceof Lt ? e.format() : Lt.prototype.format.call(e);
}
Lt.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", s = this.pathname || "", i = this.hash || "", r = !1, n = "";
  this.host ? r = e + this.host : this.hostname && (r = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && zt.isObject(this.query) && Object.keys(this.query).length && (n = Li.stringify(this.query));
  var o = this.search || n && "?" + n || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Be[t]) && r !== !1 ? (r = "//" + (r || ""), s && s.charAt(0) !== "/" && (s = "/" + s)) : r || (r = ""), i && i.charAt(0) !== "#" && (i = "#" + i), o && o.charAt(0) !== "?" && (o = "?" + o), s = s.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), o = o.replace("#", "%23"), t + r + s + o + i;
};
function Ma(e, t) {
  return Ks(e, !1, !0).resolve(t);
}
Lt.prototype.resolve = function(e) {
  return this.resolveObject(Ks(e, !1, !0)).format();
};
Lt.prototype.resolveObject = function(e) {
  if (zt.isString(e)) {
    var t = new Lt();
    t.parse(e, !1, !0), e = t;
  }
  for (var s = new Lt(), i = Object.keys(this), r = 0; r < i.length; r++) {
    var n = i[r];
    s[n] = this[n];
  }
  if (s.hash = e.hash, e.href === "")
    return s.href = s.format(), s;
  if (e.slashes && !e.protocol) {
    for (var o = Object.keys(e), a = 0; a < o.length; a++) {
      var h = o[a];
      h !== "protocol" && (s[h] = e[h]);
    }
    return Be[s.protocol] && s.hostname && !s.pathname && (s.path = s.pathname = "/"), s.href = s.format(), s;
  }
  if (e.protocol && e.protocol !== s.protocol) {
    if (!Be[e.protocol]) {
      for (var l = Object.keys(e), c = 0; c < l.length; c++) {
        var u = l[c];
        s[u] = e[u];
      }
      return s.href = s.format(), s;
    }
    if (s.protocol = e.protocol, !e.host && !Fi[e.protocol]) {
      for (var g = (e.pathname || "").split("/"); g.length && !(e.host = g.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), s.pathname = g.join("/");
    } else
      s.pathname = e.pathname;
    if (s.search = e.search, s.query = e.query, s.host = e.host || "", s.auth = e.auth, s.hostname = e.hostname || e.host, s.port = e.port, s.pathname || s.search) {
      var d = s.pathname || "", f = s.search || "";
      s.path = d + f;
    }
    return s.slashes = s.slashes || e.slashes, s.href = s.format(), s;
  }
  var p = s.pathname && s.pathname.charAt(0) === "/", _ = e.host || e.pathname && e.pathname.charAt(0) === "/", m = _ || p || s.host && e.pathname, v = m, y = s.pathname && s.pathname.split("/") || [], g = e.pathname && e.pathname.split("/") || [], x = s.protocol && !Be[s.protocol];
  if (x && (s.hostname = "", s.port = null, s.host && (y[0] === "" ? y[0] = s.host : y.unshift(s.host)), s.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (g[0] === "" ? g[0] = e.host : g.unshift(e.host)), e.host = null), m = m && (g[0] === "" || y[0] === "")), _)
    s.host = e.host || e.host === "" ? e.host : s.host, s.hostname = e.hostname || e.hostname === "" ? e.hostname : s.hostname, s.search = e.search, s.query = e.query, y = g;
  else if (g.length)
    y || (y = []), y.pop(), y = y.concat(g), s.search = e.search, s.query = e.query;
  else if (!zt.isNullOrUndefined(e.search)) {
    if (x) {
      s.hostname = s.host = y.shift();
      var T = s.host && s.host.indexOf("@") > 0 ? s.host.split("@") : !1;
      T && (s.auth = T.shift(), s.host = s.hostname = T.shift());
    }
    return s.search = e.search, s.query = e.query, (!zt.isNull(s.pathname) || !zt.isNull(s.search)) && (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")), s.href = s.format(), s;
  }
  if (!y.length)
    return s.pathname = null, s.search ? s.path = "/" + s.search : s.path = null, s.href = s.format(), s;
  for (var I = y.slice(-1)[0], S = (s.host || e.host || y.length > 1) && (I === "." || I === "..") || I === "", E = 0, N = y.length; N >= 0; N--)
    I = y[N], I === "." ? y.splice(N, 1) : I === ".." ? (y.splice(N, 1), E++) : E && (y.splice(N, 1), E--);
  if (!m && !v)
    for (; E--; E)
      y.unshift("..");
  m && y[0] !== "" && (!y[0] || y[0].charAt(0) !== "/") && y.unshift(""), S && y.join("/").substr(-1) !== "/" && y.push("");
  var U = y[0] === "" || y[0] && y[0].charAt(0) === "/";
  if (x) {
    s.hostname = s.host = U ? "" : y.length ? y.shift() : "";
    var T = s.host && s.host.indexOf("@") > 0 ? s.host.split("@") : !1;
    T && (s.auth = T.shift(), s.host = s.hostname = T.shift());
  }
  return m = m || s.host && y.length, m && !U && y.unshift(""), y.length ? s.pathname = y.join("/") : (s.pathname = null, s.path = null), (!zt.isNull(s.pathname) || !zt.isNull(s.search)) && (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")), s.auth = e.auth || s.auth, s.slashes = s.slashes || e.slashes, s.href = s.format(), s;
};
Lt.prototype.parseHost = function() {
  var e = this.host, t = Ea.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Ba = {
  parse: va,
  format: ba,
  resolve: ya
};
function St(e) {
  if (typeof e != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
}
function Xe(e) {
  return e.split("?")[0].split("#")[0];
}
function Da(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Fa(e, t, s) {
  return e.replace(new RegExp(Da(t), "g"), s);
}
function La(e, t) {
  let s = "", i = 0, r = -1, n = 0, o = -1;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      o = e.charCodeAt(a);
    else {
      if (o === 47)
        break;
      o = 47;
    }
    if (o === 47) {
      if (!(r === a - 1 || n === 1))
        if (r !== a - 1 && n === 2) {
          if (s.length < 2 || i !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
            if (s.length > 2) {
              const h = s.lastIndexOf("/");
              if (h !== s.length - 1) {
                h === -1 ? (s = "", i = 0) : (s = s.slice(0, h), i = s.length - 1 - s.lastIndexOf("/")), r = a, n = 0;
                continue;
              }
            } else if (s.length === 2 || s.length === 1) {
              s = "", i = 0, r = a, n = 0;
              continue;
            }
          }
          t && (s.length > 0 ? s += "/.." : s = "..", i = 2);
        } else
          s.length > 0 ? s += `/${e.slice(r + 1, a)}` : s = e.slice(r + 1, a), i = a - r - 1;
      r = a, n = 0;
    } else
      o === 46 && n !== -1 ? ++n : n = -1;
  }
  return s;
}
const _t = {
  toPosix(e) {
    return Fa(e, "\\", "/");
  },
  isUrl(e) {
    return /^https?:/.test(this.toPosix(e));
  },
  isDataUrl(e) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e);
  },
  hasProtocol(e) {
    return /^[^/:]+:\//.test(this.toPosix(e));
  },
  getProtocol(e) {
    St(e), e = this.toPosix(e);
    let t = "";
    const s = /^file:\/\/\//.exec(e), i = /^[^/:]+:\/\//.exec(e), r = /^[^/:]+:\//.exec(e);
    if (s || i || r) {
      const n = (s == null ? void 0 : s[0]) || (i == null ? void 0 : i[0]) || (r == null ? void 0 : r[0]);
      t = n, e = e.slice(n.length);
    }
    return t;
  },
  toAbsolute(e, t, s) {
    if (this.isDataUrl(e))
      return e;
    const i = Xe(this.toPosix(t ?? M.ADAPTER.getBaseUrl())), r = Xe(this.toPosix(s ?? this.rootname(i)));
    return St(e), e = this.toPosix(e), e.startsWith("/") ? _t.join(r, e.slice(1)) : this.isAbsolute(e) ? e : this.join(i, e);
  },
  normalize(e) {
    if (e = this.toPosix(e), St(e), e.length === 0)
      return ".";
    let t = "";
    const s = e.startsWith("/");
    this.hasProtocol(e) && (t = this.rootname(e), e = e.slice(t.length));
    const i = e.endsWith("/");
    return e = La(e, !1), e.length > 0 && i && (e += "/"), s ? `/${e}` : t + e;
  },
  isAbsolute(e) {
    return St(e), e = this.toPosix(e), this.hasProtocol(e) ? !0 : e.startsWith("/");
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    let t;
    for (let s = 0; s < e.length; ++s) {
      const i = e[s];
      if (St(i), i.length > 0)
        if (t === void 0)
          t = i;
        else {
          const r = e[s - 1] ?? "";
          this.extname(r) ? t += `/../${i}` : t += `/${i}`;
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  dirname(e) {
    if (St(e), e.length === 0)
      return ".";
    e = this.toPosix(e);
    let t = e.charCodeAt(0);
    const s = t === 47;
    let i = -1, r = !0;
    const n = this.getProtocol(e), o = e;
    e = e.slice(n.length);
    for (let a = e.length - 1; a >= 1; --a)
      if (t = e.charCodeAt(a), t === 47) {
        if (!r) {
          i = a;
          break;
        }
      } else
        r = !1;
    return i === -1 ? s ? "/" : this.isUrl(o) ? n + e : n : s && i === 1 ? "//" : n + e.slice(0, i);
  },
  rootname(e) {
    St(e), e = this.toPosix(e);
    let t = "";
    if (e.startsWith("/") ? t = "/" : t = this.getProtocol(e), this.isUrl(e)) {
      const s = e.indexOf("/", t.length);
      s !== -1 ? t = e.slice(0, s) : t = e, t.endsWith("/") || (t += "/");
    }
    return t;
  },
  basename(e, t) {
    St(e), t && St(t), e = Xe(this.toPosix(e));
    let s = 0, i = -1, r = !0, n;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e)
        return "";
      let o = t.length - 1, a = -1;
      for (n = e.length - 1; n >= 0; --n) {
        const h = e.charCodeAt(n);
        if (h === 47) {
          if (!r) {
            s = n + 1;
            break;
          }
        } else
          a === -1 && (r = !1, a = n + 1), o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = a));
      }
      return s === i ? i = a : i === -1 && (i = e.length), e.slice(s, i);
    }
    for (n = e.length - 1; n >= 0; --n)
      if (e.charCodeAt(n) === 47) {
        if (!r) {
          s = n + 1;
          break;
        }
      } else
        i === -1 && (r = !1, i = n + 1);
    return i === -1 ? "" : e.slice(s, i);
  },
  extname(e) {
    St(e), e = Xe(this.toPosix(e));
    let t = -1, s = 0, i = -1, r = !0, n = 0;
    for (let o = e.length - 1; o >= 0; --o) {
      const a = e.charCodeAt(o);
      if (a === 47) {
        if (!r) {
          s = o + 1;
          break;
        }
        continue;
      }
      i === -1 && (r = !1, i = o + 1), a === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === s + 1 ? "" : e.slice(t, i);
  },
  parse(e) {
    St(e);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    e = Xe(this.toPosix(e));
    let s = e.charCodeAt(0);
    const i = this.isAbsolute(e);
    let r;
    t.root = this.rootname(e), i || this.hasProtocol(e) ? r = 1 : r = 0;
    let n = -1, o = 0, a = -1, h = !0, l = e.length - 1, c = 0;
    for (; l >= r; --l) {
      if (s = e.charCodeAt(l), s === 47) {
        if (!h) {
          o = l + 1;
          break;
        }
        continue;
      }
      a === -1 && (h = !1, a = l + 1), s === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
    }
    return n === -1 || a === -1 || c === 0 || c === 1 && n === a - 1 && n === o + 1 ? a !== -1 && (o === 0 && i ? t.base = t.name = e.slice(1, a) : t.base = t.name = e.slice(o, a)) : (o === 0 && i ? (t.name = e.slice(1, n), t.base = e.slice(1, a)) : (t.name = e.slice(o, n), t.base = e.slice(o, a)), t.ext = e.slice(n, a)), t.dir = this.dirname(e), t;
  },
  sep: "/",
  delimiter: ":"
}, Mr = {};
function Y(e, t, s = 3) {
  if (Mr[t])
    return;
  let i = new Error().stack;
  typeof i > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${e}`) : (i = i.split(`
`).splice(s).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${e}`), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${e}`), console.warn(i))), Mr[t] = !0;
}
let oi;
function Na() {
  return typeof oi > "u" && (oi = function() {
    var s;
    const t = {
      stencil: !0,
      failIfMajorPerformanceCaveat: M.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
    };
    try {
      if (!M.ADAPTER.getWebGLRenderingContext())
        return !1;
      const i = M.ADAPTER.createCanvas();
      let r = i.getContext("webgl", t) || i.getContext("experimental-webgl", t);
      const n = !!((s = r == null ? void 0 : r.getContextAttributes()) != null && s.stencil);
      if (r) {
        const o = r.getExtension("WEBGL_lose_context");
        o && o.loseContext();
      }
      return r = null, n;
    } catch {
      return !1;
    }
  }()), oi;
}
var Oa = "#f0f8ff", ka = "#faebd7", Ua = "#00ffff", Ga = "#7fffd4", Ha = "#f0ffff", Xa = "#f5f5dc", za = "#ffe4c4", Va = "#000000", ja = "#ffebcd", Wa = "#0000ff", $a = "#8a2be2", Ya = "#a52a2a", qa = "#deb887", Ka = "#5f9ea0", Za = "#7fff00", Ja = "#d2691e", Qa = "#ff7f50", th = "#6495ed", eh = "#fff8dc", sh = "#dc143c", ih = "#00ffff", rh = "#00008b", nh = "#008b8b", oh = "#b8860b", ah = "#a9a9a9", hh = "#006400", lh = "#a9a9a9", ch = "#bdb76b", uh = "#8b008b", dh = "#556b2f", fh = "#ff8c00", ph = "#9932cc", mh = "#8b0000", gh = "#e9967a", _h = "#8fbc8f", xh = "#483d8b", vh = "#2f4f4f", yh = "#2f4f4f", bh = "#00ced1", Th = "#9400d3", Eh = "#ff1493", wh = "#00bfff", Ah = "#696969", Sh = "#696969", Ch = "#1e90ff", Ih = "#b22222", Rh = "#fffaf0", Ph = "#228b22", Mh = "#ff00ff", Bh = "#dcdcdc", Dh = "#f8f8ff", Fh = "#daa520", Lh = "#ffd700", Nh = "#808080", Oh = "#008000", kh = "#adff2f", Uh = "#808080", Gh = "#f0fff0", Hh = "#ff69b4", Xh = "#cd5c5c", zh = "#4b0082", Vh = "#fffff0", jh = "#f0e68c", Wh = "#fff0f5", $h = "#e6e6fa", Yh = "#7cfc00", qh = "#fffacd", Kh = "#add8e6", Zh = "#f08080", Jh = "#e0ffff", Qh = "#fafad2", tl = "#d3d3d3", el = "#90ee90", sl = "#d3d3d3", il = "#ffb6c1", rl = "#ffa07a", nl = "#20b2aa", ol = "#87cefa", al = "#778899", hl = "#778899", ll = "#b0c4de", cl = "#ffffe0", ul = "#00ff00", dl = "#32cd32", fl = "#faf0e6", pl = "#ff00ff", ml = "#800000", gl = "#66cdaa", _l = "#0000cd", xl = "#ba55d3", vl = "#9370db", yl = "#3cb371", bl = "#7b68ee", Tl = "#00fa9a", El = "#48d1cc", wl = "#c71585", Al = "#191970", Sl = "#f5fffa", Cl = "#ffe4e1", Il = "#ffe4b5", Rl = "#ffdead", Pl = "#000080", Ml = "#fdf5e6", Bl = "#808000", Dl = "#6b8e23", Fl = "#ffa500", Ll = "#ff4500", Nl = "#da70d6", Ol = "#eee8aa", kl = "#98fb98", Ul = "#afeeee", Gl = "#db7093", Hl = "#ffefd5", Xl = "#ffdab9", zl = "#cd853f", Vl = "#ffc0cb", jl = "#dda0dd", Wl = "#b0e0e6", $l = "#800080", Yl = "#663399", ql = "#ff0000", Kl = "#bc8f8f", Zl = "#4169e1", Jl = "#8b4513", Ql = "#fa8072", tc = "#f4a460", ec = "#2e8b57", sc = "#fff5ee", ic = "#a0522d", rc = "#c0c0c0", nc = "#87ceeb", oc = "#6a5acd", ac = "#708090", hc = "#708090", lc = "#fffafa", cc = "#00ff7f", uc = "#4682b4", dc = "#d2b48c", fc = "#008080", pc = "#d8bfd8", mc = "#ff6347", gc = "#40e0d0", _c = "#ee82ee", xc = "#f5deb3", vc = "#ffffff", yc = "#f5f5f5", bc = "#ffff00", Tc = "#9acd32", Ec = {
  aliceblue: Oa,
  antiquewhite: ka,
  aqua: Ua,
  aquamarine: Ga,
  azure: Ha,
  beige: Xa,
  bisque: za,
  black: Va,
  blanchedalmond: ja,
  blue: Wa,
  blueviolet: $a,
  brown: Ya,
  burlywood: qa,
  cadetblue: Ka,
  chartreuse: Za,
  chocolate: Ja,
  coral: Qa,
  cornflowerblue: th,
  cornsilk: eh,
  crimson: sh,
  cyan: ih,
  darkblue: rh,
  darkcyan: nh,
  darkgoldenrod: oh,
  darkgray: ah,
  darkgreen: hh,
  darkgrey: lh,
  darkkhaki: ch,
  darkmagenta: uh,
  darkolivegreen: dh,
  darkorange: fh,
  darkorchid: ph,
  darkred: mh,
  darksalmon: gh,
  darkseagreen: _h,
  darkslateblue: xh,
  darkslategray: vh,
  darkslategrey: yh,
  darkturquoise: bh,
  darkviolet: Th,
  deeppink: Eh,
  deepskyblue: wh,
  dimgray: Ah,
  dimgrey: Sh,
  dodgerblue: Ch,
  firebrick: Ih,
  floralwhite: Rh,
  forestgreen: Ph,
  fuchsia: Mh,
  gainsboro: Bh,
  ghostwhite: Dh,
  goldenrod: Fh,
  gold: Lh,
  gray: Nh,
  green: Oh,
  greenyellow: kh,
  grey: Uh,
  honeydew: Gh,
  hotpink: Hh,
  indianred: Xh,
  indigo: zh,
  ivory: Vh,
  khaki: jh,
  lavenderblush: Wh,
  lavender: $h,
  lawngreen: Yh,
  lemonchiffon: qh,
  lightblue: Kh,
  lightcoral: Zh,
  lightcyan: Jh,
  lightgoldenrodyellow: Qh,
  lightgray: tl,
  lightgreen: el,
  lightgrey: sl,
  lightpink: il,
  lightsalmon: rl,
  lightseagreen: nl,
  lightskyblue: ol,
  lightslategray: al,
  lightslategrey: hl,
  lightsteelblue: ll,
  lightyellow: cl,
  lime: ul,
  limegreen: dl,
  linen: fl,
  magenta: pl,
  maroon: ml,
  mediumaquamarine: gl,
  mediumblue: _l,
  mediumorchid: xl,
  mediumpurple: vl,
  mediumseagreen: yl,
  mediumslateblue: bl,
  mediumspringgreen: Tl,
  mediumturquoise: El,
  mediumvioletred: wl,
  midnightblue: Al,
  mintcream: Sl,
  mistyrose: Cl,
  moccasin: Il,
  navajowhite: Rl,
  navy: Pl,
  oldlace: Ml,
  olive: Bl,
  olivedrab: Dl,
  orange: Fl,
  orangered: Ll,
  orchid: Nl,
  palegoldenrod: Ol,
  palegreen: kl,
  paleturquoise: Ul,
  palevioletred: Gl,
  papayawhip: Hl,
  peachpuff: Xl,
  peru: zl,
  pink: Vl,
  plum: jl,
  powderblue: Wl,
  purple: $l,
  rebeccapurple: Yl,
  red: ql,
  rosybrown: Kl,
  royalblue: Zl,
  saddlebrown: Jl,
  salmon: Ql,
  sandybrown: tc,
  seagreen: ec,
  seashell: sc,
  sienna: ic,
  silver: rc,
  skyblue: nc,
  slateblue: oc,
  slategray: ac,
  slategrey: hc,
  snow: lc,
  springgreen: cc,
  steelblue: uc,
  tan: dc,
  teal: fc,
  thistle: pc,
  tomato: mc,
  turquoise: gc,
  violet: _c,
  wheat: xc,
  white: vc,
  whitesmoke: yc,
  yellow: bc,
  yellowgreen: Tc
};
function es(e, t = []) {
  return t[0] = (e >> 16 & 255) / 255, t[1] = (e >> 8 & 255) / 255, t[2] = (e & 255) / 255, t;
}
function wn(e) {
  let t = e.toString(16);
  return t = "000000".substring(0, 6 - t.length) + t, `#${t}`;
}
function or(e) {
  if (typeof e == "string" && (e = Ec[e.toLowerCase()] || e, e[0] === "#" && (e = e.slice(1)), e.length === 3)) {
    const [t, s, i] = e;
    e = t + t + s + s + i + i;
  }
  return parseInt(e, 16);
}
function wc() {
  const e = [], t = [];
  for (let i = 0; i < 32; i++)
    e[i] = i, t[i] = i;
  e[G.NORMAL_NPM] = G.NORMAL, e[G.ADD_NPM] = G.ADD, e[G.SCREEN_NPM] = G.SCREEN, t[G.NORMAL] = G.NORMAL_NPM, t[G.ADD] = G.ADD_NPM, t[G.SCREEN] = G.SCREEN_NPM;
  const s = [];
  return s.push(t), s.push(e), s;
}
const An = wc();
function Sn(e, t) {
  return An[t ? 1 : 0][e];
}
function Ac(e, t, s, i) {
  return s = s || new Float32Array(4), i || i === void 0 ? (s[0] = e[0] * t, s[1] = e[1] * t, s[2] = e[2] * t) : (s[0] = e[0], s[1] = e[1], s[2] = e[2]), s[3] = t, s;
}
function ar(e, t) {
  if (t === 1)
    return (t * 255 << 24) + e;
  if (t === 0)
    return 0;
  let s = e >> 16 & 255, i = e >> 8 & 255, r = e & 255;
  return s = s * t + 0.5 | 0, i = i * t + 0.5 | 0, r = r * t + 0.5 | 0, (t * 255 << 24) + (s << 16) + (i << 8) + r;
}
function Cn(e, t, s, i) {
  return s = s || new Float32Array(4), s[0] = (e >> 16 & 255) / 255, s[1] = (e >> 8 & 255) / 255, s[2] = (e & 255) / 255, (i || i === void 0) && (s[0] *= t, s[1] *= t, s[2] *= t), s[3] = t, s;
}
function Sc(e, t = null) {
  const s = e * 6;
  if (t = t || new Uint16Array(s), t.length !== s)
    throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${s}`);
  for (let i = 0, r = 0; i < s; i += 6, r += 4)
    t[i + 0] = r + 0, t[i + 1] = r + 1, t[i + 2] = r + 2, t[i + 3] = r + 0, t[i + 4] = r + 2, t[i + 5] = r + 3;
  return t;
}
function In(e) {
  if (e.BYTES_PER_ELEMENT === 4)
    return e instanceof Float32Array ? "Float32Array" : e instanceof Uint32Array ? "Uint32Array" : "Int32Array";
  if (e.BYTES_PER_ELEMENT === 2) {
    if (e instanceof Uint16Array)
      return "Uint16Array";
  } else if (e.BYTES_PER_ELEMENT === 1 && e instanceof Uint8Array)
    return "Uint8Array";
  return null;
}
function Os(e) {
  return e += e === 0 ? 1 : 0, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1;
}
function Br(e) {
  return !(e & e - 1) && !!e;
}
function Dr(e) {
  let t = (e > 65535 ? 1 : 0) << 4;
  e >>>= t;
  let s = (e > 255 ? 1 : 0) << 3;
  return e >>>= s, t |= s, s = (e > 15 ? 1 : 0) << 2, e >>>= s, t |= s, s = (e > 3 ? 1 : 0) << 1, e >>>= s, t |= s, t | e >> 1;
}
function De(e, t, s) {
  const i = e.length;
  let r;
  if (t >= i || s === 0)
    return;
  s = t + s > i ? i - t : s;
  const n = i - s;
  for (r = t; r < n; ++r)
    e[r] = e[r + s];
  e.length = n;
}
function Re(e) {
  return e === 0 ? 0 : e < 0 ? -1 : 1;
}
let Cc = 0;
function xe() {
  return ++Cc;
}
const Rn = class {
  constructor(e, t, s, i) {
    this.left = e, this.top = t, this.right = s, this.bottom = i;
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
let Ni = Rn;
Ni.EMPTY = new Rn(0, 0, 0, 0);
const Fr = {}, Ht = /* @__PURE__ */ Object.create(null), ee = /* @__PURE__ */ Object.create(null);
class Lr {
  constructor(t, s, i) {
    this._canvas = M.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = i || M.RESOLUTION, this.resize(t, s);
  }
  clear() {
    this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(t, s) {
    this._checkDestroyed(), this._canvas.width = Math.round(t * this.resolution), this._canvas.height = Math.round(s * this.resolution);
  }
  destroy() {
    this._context = null, this._canvas = null;
  }
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(t) {
    this._checkDestroyed(), this._canvas.width = Math.round(t);
  }
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(t) {
    this._checkDestroyed(), this._canvas.height = Math.round(t);
  }
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null)
      throw new TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function Nr(e, t, s) {
  for (let i = 0, r = 4 * s * t; i < t; ++i, r += 4)
    if (e[r + 3] !== 0)
      return !1;
  return !0;
}
function Or(e, t, s, i, r) {
  const n = 4 * t;
  for (let o = i, a = i * n + 4 * s; o <= r; ++o, a += n)
    if (e[a + 3] !== 0)
      return !1;
  return !0;
}
function Ic(e) {
  const { width: t, height: s } = e, i = e.getContext("2d", {
    willReadFrequently: !0
  });
  if (i === null)
    throw new TypeError("Failed to get canvas 2D context");
  const n = i.getImageData(0, 0, t, s).data;
  let o = 0, a = 0, h = t - 1, l = s - 1;
  for (; a < s && Nr(n, t, a); )
    ++a;
  if (a === s)
    return Ni.EMPTY;
  for (; Nr(n, t, l); )
    --l;
  for (; Or(n, t, o, a, l); )
    ++o;
  for (; Or(n, t, h, a, l); )
    --h;
  return ++h, ++l, new Ni(o, a, h, l);
}
function Rc(e) {
  const t = Ic(e), { width: s, height: i } = t;
  let r = null;
  if (!t.isEmpty()) {
    const n = e.getContext("2d");
    if (n === null)
      throw new TypeError("Failed to get canvas 2D context");
    r = n.getImageData(t.left, t.top, s, i);
  }
  return { width: s, height: i, data: r };
}
let ds;
function Pc(e, t = globalThis.location) {
  if (e.startsWith("data:"))
    return "";
  t = t || globalThis.location, ds || (ds = document.createElement("a")), ds.href = e;
  const s = Ba.parse(ds.href), i = !s.port && t.port === "" || s.port === t.port;
  return s.hostname !== t.hostname || !i || s.protocol !== t.protocol ? "anonymous" : "";
}
function re(e, t = 1) {
  var i;
  const s = (i = M.RETINA_PREFIX) == null ? void 0 : i.exec(e);
  return s ? parseFloat(s[1]) : t;
}
var P = /* @__PURE__ */ ((e) => (e.Renderer = "renderer", e.Application = "application", e.RendererSystem = "renderer-webgl-system", e.RendererPlugin = "renderer-webgl-plugin", e.CanvasRendererSystem = "renderer-canvas-system", e.CanvasRendererPlugin = "renderer-canvas-plugin", e.Asset = "asset", e.LoadParser = "load-parser", e.ResolveParser = "resolve-parser", e.CacheParser = "cache-parser", e.DetectionParser = "detection-parser", e))(P || {});
const Oi = (e) => {
  if (typeof e == "function" || typeof e == "object" && e.extension) {
    if (!e.extension)
      throw new Error("Extension class must have an extension object");
    e = { ...typeof e.extension != "object" ? { type: e.extension } : e.extension, ref: e };
  }
  if (typeof e == "object")
    e = { ...e };
  else
    throw new Error("Invalid extension type");
  return typeof e.type == "string" && (e.type = [e.type]), e;
}, kr = (e, t) => Oi(e).priority ?? t, O = {
  _addHandlers: {},
  _removeHandlers: {},
  _queue: {},
  remove(...e) {
    return e.map(Oi).forEach((t) => {
      t.type.forEach((s) => {
        var i, r;
        return (r = (i = this._removeHandlers)[s]) == null ? void 0 : r.call(i, t);
      });
    }), this;
  },
  add(...e) {
    return e.map(Oi).forEach((t) => {
      t.type.forEach((s) => {
        const i = this._addHandlers, r = this._queue;
        i[s] ? i[s](t) : (r[s] = r[s] || [], r[s].push(t));
      });
    }), this;
  },
  handle(e, t, s) {
    const i = this._addHandlers, r = this._removeHandlers;
    if (i[e] || r[e])
      throw new Error(`Extension type ${e} already has a handler`);
    i[e] = t, r[e] = s;
    const n = this._queue;
    return n[e] && (n[e].forEach((o) => t(o)), delete n[e]), this;
  },
  handleByMap(e, t) {
    return this.handle(e, (s) => {
      t[s.name] = s.ref;
    }, (s) => {
      delete t[s.name];
    });
  },
  handleByList(e, t, s = -1) {
    return this.handle(e, (i) => {
      t.includes(i.ref) || (t.push(i.ref), t.sort((r, n) => kr(n, s) - kr(r, s)));
    }, (i) => {
      const r = t.indexOf(i.ref);
      r !== -1 && t.splice(r, 1);
    });
  }
};
class ki {
  constructor(t) {
    typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
  }
  get int8View() {
    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
  }
  get uint8View() {
    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
  }
  get int16View() {
    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
  }
  get uint16View() {
    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
  }
  get int32View() {
    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
const Mc = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join(`
`);
function Bc(e) {
  let t = "";
  for (let s = 0; s < e; ++s)
    s > 0 && (t += `
else `), s < e - 1 && (t += `if(test == ${s}.0){}`);
  return t;
}
function Dc(e, t) {
  if (e === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const s = t.createShader(t.FRAGMENT_SHADER);
  for (; ; ) {
    const i = Mc.replace(/%forloop%/gi, Bc(e));
    if (t.shaderSource(s, i), t.compileShader(s), !t.getShaderParameter(s, t.COMPILE_STATUS))
      e = e / 2 | 0;
    else
      break;
  }
  return e;
}
const ai = 0, hi = 1, li = 2, ci = 3, ui = 4, di = 5;
class te {
  constructor() {
    this.data = 0, this.blendMode = G.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
  }
  get blend() {
    return !!(this.data & 1 << ai);
  }
  set blend(t) {
    !!(this.data & 1 << ai) !== t && (this.data ^= 1 << ai);
  }
  get offsets() {
    return !!(this.data & 1 << hi);
  }
  set offsets(t) {
    !!(this.data & 1 << hi) !== t && (this.data ^= 1 << hi);
  }
  get culling() {
    return !!(this.data & 1 << li);
  }
  set culling(t) {
    !!(this.data & 1 << li) !== t && (this.data ^= 1 << li);
  }
  get depthTest() {
    return !!(this.data & 1 << ci);
  }
  set depthTest(t) {
    !!(this.data & 1 << ci) !== t && (this.data ^= 1 << ci);
  }
  get depthMask() {
    return !!(this.data & 1 << di);
  }
  set depthMask(t) {
    !!(this.data & 1 << di) !== t && (this.data ^= 1 << di);
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << ui);
  }
  set clockwiseFrontFace(t) {
    !!(this.data & 1 << ui) !== t && (this.data ^= 1 << ui);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this.blend = t !== G.NONE, this._blendMode = t;
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    this.offsets = !!t, this._polygonOffset = t;
  }
  toString() {
    return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
  }
  static for2d() {
    const t = new te();
    return t.depthTest = !1, t.blend = !0, t;
  }
}
const Ui = [];
function Pn(e, t) {
  if (!e)
    return null;
  let s = "";
  if (typeof e == "string") {
    const i = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
    i && (s = i[1].toLowerCase());
  }
  for (let i = Ui.length - 1; i >= 0; --i) {
    const r = Ui[i];
    if (r.test && r.test(e, s))
      return new r(e, t);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class Nt {
  constructor(t) {
    this.items = [], this._name = t, this._aliasCount = 0;
  }
  emit(t, s, i, r, n, o, a, h) {
    if (arguments.length > 8)
      throw new Error("max arguments reached");
    const { name: l, items: c } = this;
    this._aliasCount++;
    for (let u = 0, d = c.length; u < d; u++)
      c[u][l](t, s, i, r, n, o, a, h);
    return c === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
  }
  add(t) {
    return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this;
  }
  remove(t) {
    const s = this.items.indexOf(t);
    return s !== -1 && (this.ensureNonAliasedItems(), this.items.splice(s, 1)), this;
  }
  contains(t) {
    return this.items.includes(t);
  }
  removeAll() {
    return this.ensureNonAliasedItems(), this.items.length = 0, this;
  }
  destroy() {
    this.removeAll(), this.items = null, this._name = null;
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(Nt.prototype, {
  dispatch: { value: Nt.prototype.emit },
  run: { value: Nt.prototype.emit }
});
class ss {
  constructor(t = 0, s = 0) {
    this._width = t, this._height = s, this.destroyed = !1, this.internal = !1, this.onResize = new Nt("setRealSize"), this.onUpdate = new Nt("update"), this.onError = new Nt("onError");
  }
  bind(t) {
    this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height);
  }
  unbind(t) {
    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
  }
  resize(t, s) {
    (t !== this._width || s !== this._height) && (this._width = t, this._height = s, this.onResize.emit(t, s));
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(t, s, i) {
    return !1;
  }
  dispose() {
  }
  destroy() {
    this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
  }
  static test(t, s) {
    return !1;
  }
}
class ns extends ss {
  constructor(t, s) {
    const { width: i, height: r } = s || {};
    if (!i || !r)
      throw new Error("BufferResource width or height invalid");
    super(i, r), this.data = t;
  }
  upload(t, s, i) {
    const r = t.gl;
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.alphaMode === kt.UNPACK);
    const n = s.realWidth, o = s.realHeight;
    return i.width === n && i.height === o ? r.texSubImage2D(s.target, 0, 0, 0, n, o, s.format, i.type, this.data) : (i.width = n, i.height = o, r.texImage2D(s.target, 0, i.internalFormat, n, o, 0, s.format, i.type, this.data)), !0;
  }
  dispose() {
    this.data = null;
  }
  static test(t) {
    return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array;
  }
}
const Fc = {
  scaleMode: Zt.NEAREST,
  format: C.RGBA,
  alphaMode: kt.NPM
}, Ae = class extends ge {
  constructor(e = null, t = null) {
    super(), t = Object.assign({}, Ae.defaultOptions, t);
    const {
      alphaMode: s,
      mipmap: i,
      anisotropicLevel: r,
      scaleMode: n,
      width: o,
      height: a,
      wrapMode: h,
      format: l,
      type: c,
      target: u,
      resolution: d,
      resourceOptions: f
    } = t;
    e && !(e instanceof ss) && (e = Pn(e, f), e.internal = !0), this.resolution = d || M.RESOLUTION, this.width = Math.round((o || 0) * this.resolution) / this.resolution, this.height = Math.round((a || 0) * this.resolution) / this.resolution, this._mipmap = i, this.anisotropicLevel = r, this._wrapMode = h, this._scaleMode = n, this.format = l, this.type = c, this.target = u, this.alphaMode = s, this.uid = xe(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = o > 0 && a > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(e);
  }
  get realWidth() {
    return Math.round(this.width * this.resolution);
  }
  get realHeight() {
    return Math.round(this.height * this.resolution);
  }
  get mipmap() {
    return this._mipmap;
  }
  set mipmap(e) {
    this._mipmap !== e && (this._mipmap = e, this.dirtyStyleId++);
  }
  get scaleMode() {
    return this._scaleMode;
  }
  set scaleMode(e) {
    this._scaleMode !== e && (this._scaleMode = e, this.dirtyStyleId++);
  }
  get wrapMode() {
    return this._wrapMode;
  }
  set wrapMode(e) {
    this._wrapMode !== e && (this._wrapMode = e, this.dirtyStyleId++);
  }
  setStyle(e, t) {
    let s;
    return e !== void 0 && e !== this.scaleMode && (this.scaleMode = e, s = !0), t !== void 0 && t !== this.mipmap && (this.mipmap = t, s = !0), s && this.dirtyStyleId++, this;
  }
  setSize(e, t, s) {
    return s = s || this.resolution, this.setRealSize(e * s, t * s, s);
  }
  setRealSize(e, t, s) {
    return this.resolution = s || this.resolution, this.width = Math.round(e) / this.resolution, this.height = Math.round(t) / this.resolution, this._refreshPOT(), this.update(), this;
  }
  _refreshPOT() {
    this.isPowerOfTwo = Br(this.realWidth) && Br(this.realHeight);
  }
  setResolution(e) {
    const t = this.resolution;
    return t === e ? this : (this.resolution = e, this.valid && (this.width = Math.round(this.width * t) / e, this.height = Math.round(this.height * t) / e, this.emit("update", this)), this._refreshPOT(), this);
  }
  setResource(e) {
    if (this.resource === e)
      return this;
    if (this.resource)
      throw new Error("Resource can be set only once");
    return e.bind(this), this.resource = e, this;
  }
  update() {
    this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this));
  }
  onError(e) {
    this.emit("error", this, e);
  }
  destroy() {
    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete ee[this.cacheId], delete Ht[this.cacheId], this.cacheId = null), this.dispose(), Ae.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0;
  }
  dispose() {
    this.emit("dispose", this);
  }
  castToBaseTexture() {
    return this;
  }
  static from(e, t, s = M.STRICT_TEXTURE_CACHE) {
    const i = typeof e == "string";
    let r = null;
    if (i)
      r = e;
    else {
      if (!e._pixiId) {
        const o = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
        e._pixiId = `${o}_${xe()}`;
      }
      r = e._pixiId;
    }
    let n = ee[r];
    if (i && s && !n)
      throw new Error(`The cacheId "${r}" does not exist in BaseTextureCache.`);
    return n || (n = new Ae(e, t), n.cacheId = r, Ae.addToCache(n, r)), n;
  }
  static fromBuffer(e, t, s, i) {
    e = e || new Float32Array(t * s * 4);
    const r = new ns(e, { width: t, height: s }), n = e instanceof Float32Array ? k.FLOAT : k.UNSIGNED_BYTE;
    return new Ae(r, Object.assign({}, Fc, i || { width: t, height: s, type: n }));
  }
  static addToCache(e, t) {
    t && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t), ee[t] && ee[t] !== e && console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`), ee[t] = e);
  }
  static removeFromCache(e) {
    if (typeof e == "string") {
      const t = ee[e];
      if (t) {
        const s = t.textureCacheIds.indexOf(e);
        return s > -1 && t.textureCacheIds.splice(s, 1), delete ee[e], t;
      }
    } else if (e != null && e.textureCacheIds) {
      for (let t = 0; t < e.textureCacheIds.length; ++t)
        delete ee[e.textureCacheIds[t]];
      return e.textureCacheIds.length = 0, e;
    }
    return null;
  }
};
let X = Ae;
X.defaultOptions = {
  mipmap: $t.POW2,
  anisotropicLevel: 0,
  scaleMode: Zt.LINEAR,
  wrapMode: ie.CLAMP,
  alphaMode: kt.UNPACK,
  target: Me.TEXTURE_2D,
  format: C.RGBA,
  type: k.UNSIGNED_BYTE
};
X._globalBatch = 0;
class Gi {
  constructor() {
    this.texArray = null, this.blend = 0, this.type = Vt.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
  }
}
let Lc = 0;
class ot {
  constructor(t, s = !0, i = !1) {
    this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = s, this.id = Lc++, this.disposeRunner = new Nt("disposeBuffer");
  }
  update(t) {
    t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), this.data = null;
  }
  set index(t) {
    this.type = t ? jt.ELEMENT_ARRAY_BUFFER : jt.ARRAY_BUFFER;
  }
  get index() {
    return this.type === jt.ELEMENT_ARRAY_BUFFER;
  }
  static from(t) {
    return t instanceof Array && (t = new Float32Array(t)), new ot(t);
  }
}
class ks {
  constructor(t, s = 0, i = !1, r = k.FLOAT, n, o, a, h = 1) {
    this.buffer = t, this.size = s, this.normalized = i, this.type = r, this.stride = n, this.start = o, this.instance = a, this.divisor = h;
  }
  destroy() {
    this.buffer = null;
  }
  static from(t, s, i, r, n) {
    return new ks(t, s, i, r, n);
  }
}
const Nc = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function Oc(e, t) {
  let s = 0, i = 0;
  const r = {};
  for (let h = 0; h < e.length; h++)
    i += t[h], s += e[h].length;
  const n = new ArrayBuffer(s * 4);
  let o = null, a = 0;
  for (let h = 0; h < e.length; h++) {
    const l = t[h], c = e[h], u = In(c);
    r[u] || (r[u] = new Nc[u](n)), o = r[u];
    for (let d = 0; d < c.length; d++) {
      const f = (d / l | 0) * i + a, p = d % l;
      o[f + p] = c[d];
    }
    a += l;
  }
  return new Float32Array(n);
}
const Ur = { 5126: 4, 5123: 2, 5121: 1 };
let kc = 0;
const Uc = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array,
  Uint16Array
};
class ne {
  constructor(t = [], s = {}) {
    this.buffers = t, this.indexBuffer = null, this.attributes = s, this.glVertexArrayObjects = {}, this.id = kc++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Nt("disposeGeometry"), this.refCount = 0;
  }
  addAttribute(t, s, i = 0, r = !1, n, o, a, h = !1) {
    if (!s)
      throw new Error("You must pass a buffer when creating an attribute");
    s instanceof ot || (s instanceof Array && (s = new Float32Array(s)), s = new ot(s));
    const l = t.split("|");
    if (l.length > 1) {
      for (let u = 0; u < l.length; u++)
        this.addAttribute(l[u], s, i, r, n);
      return this;
    }
    let c = this.buffers.indexOf(s);
    return c === -1 && (this.buffers.push(s), c = this.buffers.length - 1), this.attributes[t] = new ks(c, i, r, n, o, a, h), this.instanced = this.instanced || h, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getBuffer(t) {
    return this.buffers[this.getAttribute(t).buffer];
  }
  addIndex(t) {
    return t instanceof ot || (t instanceof Array && (t = new Uint16Array(t)), t = new ot(t)), t.type = jt.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this;
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
      return this;
    const t = [], s = [], i = new ot();
    let r;
    for (r in this.attributes) {
      const n = this.attributes[r], o = this.buffers[n.buffer];
      t.push(o.data), s.push(n.size * Ur[n.type] / 4), n.buffer = 0;
    }
    for (i.data = Oc(t, s), r = 0; r < this.buffers.length; r++)
      this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy();
    return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
  }
  getSize() {
    for (const t in this.attributes) {
      const s = this.attributes[t];
      return this.buffers[s.buffer].data.length / (s.stride / 4 || s.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
  }
  clone() {
    const t = new ne();
    for (let s = 0; s < this.buffers.length; s++)
      t.buffers[s] = new ot(this.buffers[s].data.slice(0));
    for (const s in this.attributes) {
      const i = this.attributes[s];
      t.attributes[s] = new ks(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance);
    }
    return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = jt.ELEMENT_ARRAY_BUFFER), t;
  }
  static merge(t) {
    const s = new ne(), i = [], r = [], n = [];
    let o;
    for (let a = 0; a < t.length; a++) {
      o = t[a];
      for (let h = 0; h < o.buffers.length; h++)
        r[h] = r[h] || 0, r[h] += o.buffers[h].data.length, n[h] = 0;
    }
    for (let a = 0; a < o.buffers.length; a++)
      i[a] = new Uc[In(o.buffers[a].data)](r[a]), s.buffers[a] = new ot(i[a]);
    for (let a = 0; a < t.length; a++) {
      o = t[a];
      for (let h = 0; h < o.buffers.length; h++)
        i[h].set(o.buffers[h].data, n[h]), n[h] += o.buffers[h].data.length;
    }
    if (s.attributes = o.attributes, o.indexBuffer) {
      s.indexBuffer = s.buffers[o.buffers.indexOf(o.indexBuffer)], s.indexBuffer.type = jt.ELEMENT_ARRAY_BUFFER;
      let a = 0, h = 0, l = 0, c = 0;
      for (let u = 0; u < o.buffers.length; u++)
        if (o.buffers[u] !== o.indexBuffer) {
          c = u;
          break;
        }
      for (const u in o.attributes) {
        const d = o.attributes[u];
        (d.buffer | 0) === c && (h += d.size * Ur[d.type] / 4);
      }
      for (let u = 0; u < t.length; u++) {
        const d = t[u].indexBuffer.data;
        for (let f = 0; f < d.length; f++)
          s.indexBuffer.data[f + l] += a;
        a += t[u].buffers[c].data.length / h, l += d.length;
      }
    }
    return s;
  }
}
class Mn extends ne {
  constructor(t = !1) {
    super(), this._buffer = new ot(null, t, !1), this._indexBuffer = new ot(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, k.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, k.FLOAT).addAttribute("aColor", this._buffer, 4, !0, k.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, k.FLOAT).addIndex(this._indexBuffer);
  }
}
const Us = Math.PI * 2, Gc = 180 / Math.PI, Hc = Math.PI / 180;
var mt = /* @__PURE__ */ ((e) => (e[e.POLY = 0] = "POLY", e[e.RECT = 1] = "RECT", e[e.CIRC = 2] = "CIRC", e[e.ELIP = 3] = "ELIP", e[e.RREC = 4] = "RREC", e))(mt || {});
class $ {
  constructor(t = 0, s = 0) {
    this.x = 0, this.y = 0, this.x = t, this.y = s;
  }
  clone() {
    return new $(this.x, this.y);
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, s = t) {
    return this.x = t, this.y = s, this;
  }
  toString() {
    return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
  }
}
const fs = [new $(), new $(), new $(), new $()];
class V {
  constructor(t = 0, s = 0, i = 0, r = 0) {
    this.x = Number(t), this.y = Number(s), this.width = Number(i), this.height = Number(r), this.type = mt.RECT;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new V(0, 0, 0, 0);
  }
  clone() {
    return new V(this.x, this.y, this.width, this.height);
  }
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
  }
  copyTo(t) {
    return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
  }
  contains(t, s) {
    return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && s >= this.y && s < this.y + this.height;
  }
  intersects(t, s) {
    if (!s) {
      const E = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= E)
        return !1;
      const U = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > U;
    }
    const i = this.left, r = this.right, n = this.top, o = this.bottom;
    if (r <= i || o <= n)
      return !1;
    const a = fs[0].set(t.left, t.top), h = fs[1].set(t.left, t.bottom), l = fs[2].set(t.right, t.top), c = fs[3].set(t.right, t.bottom);
    if (l.x <= a.x || h.y <= a.y)
      return !1;
    const u = Math.sign(s.a * s.d - s.b * s.c);
    if (u === 0 || (s.apply(a, a), s.apply(h, h), s.apply(l, l), s.apply(c, c), Math.max(a.x, h.x, l.x, c.x) <= i || Math.min(a.x, h.x, l.x, c.x) >= r || Math.max(a.y, h.y, l.y, c.y) <= n || Math.min(a.y, h.y, l.y, c.y) >= o))
      return !1;
    const d = u * (h.y - a.y), f = u * (a.x - h.x), p = d * i + f * n, _ = d * r + f * n, m = d * i + f * o, v = d * r + f * o;
    if (Math.max(p, _, m, v) <= d * a.x + f * a.y || Math.min(p, _, m, v) >= d * c.x + f * c.y)
      return !1;
    const y = u * (a.y - l.y), g = u * (l.x - a.x), x = y * i + g * n, T = y * r + g * n, I = y * i + g * o, S = y * r + g * o;
    return !(Math.max(x, T, I, S) <= y * a.x + g * a.y || Math.min(x, T, I, S) >= y * c.x + g * c.y);
  }
  pad(t = 0, s = t) {
    return this.x -= t, this.y -= s, this.width += t * 2, this.height += s * 2, this;
  }
  fit(t) {
    const s = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
    return this.x = s, this.width = Math.max(i - s, 0), this.y = r, this.height = Math.max(n - r, 0), this;
  }
  ceil(t = 1, s = 1e-3) {
    const i = Math.ceil((this.x + this.width - s) * t) / t, r = Math.ceil((this.y + this.height - s) * t) / t;
    return this.x = Math.floor((this.x + s) * t) / t, this.y = Math.floor((this.y + s) * t) / t, this.width = i - this.x, this.height = r - this.y, this;
  }
  enlarge(t) {
    const s = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
    return this.x = s, this.width = i - s, this.y = r, this.height = n - r, this;
  }
  toString() {
    return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
let Xc = class Bn {
  constructor(t = 0, s = 0, i = 0) {
    this.x = t, this.y = s, this.radius = i, this.type = mt.CIRC;
  }
  clone() {
    return new Bn(this.x, this.y, this.radius);
  }
  contains(t, s) {
    if (this.radius <= 0)
      return !1;
    const i = this.radius * this.radius;
    let r = this.x - t, n = this.y - s;
    return r *= r, n *= n, r + n <= i;
  }
  getBounds() {
    return new V(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
  toString() {
    return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
  }
};
class hr {
  constructor(t = 0, s = 0, i = 0, r = 0) {
    this.x = t, this.y = s, this.width = i, this.height = r, this.type = mt.ELIP;
  }
  clone() {
    return new hr(this.x, this.y, this.width, this.height);
  }
  contains(t, s) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    let i = (t - this.x) / this.width, r = (s - this.y) / this.height;
    return i *= i, r *= r, i + r <= 1;
  }
  getBounds() {
    return new V(this.x - this.width, this.y - this.height, this.width, this.height);
  }
  toString() {
    return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
class Fe {
  constructor(...t) {
    let s = Array.isArray(t[0]) ? t[0] : t;
    if (typeof s[0] != "number") {
      const i = [];
      for (let r = 0, n = s.length; r < n; r++)
        i.push(s[r].x, s[r].y);
      s = i;
    }
    this.points = s, this.type = mt.POLY, this.closeStroke = !0;
  }
  clone() {
    const t = this.points.slice(), s = new Fe(t);
    return s.closeStroke = this.closeStroke, s;
  }
  contains(t, s) {
    let i = !1;
    const r = this.points.length / 2;
    for (let n = 0, o = r - 1; n < r; o = n++) {
      const a = this.points[n * 2], h = this.points[n * 2 + 1], l = this.points[o * 2], c = this.points[o * 2 + 1];
      h > s != c > s && t < (l - a) * ((s - h) / (c - h)) + a && (i = !i);
    }
    return i;
  }
  toString() {
    return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((t, s) => `${t}, ${s}`, "")}]`;
  }
}
class lr {
  constructor(t = 0, s = 0, i = 0, r = 0, n = 20) {
    this.x = t, this.y = s, this.width = i, this.height = r, this.radius = n, this.type = mt.RREC;
  }
  clone() {
    return new lr(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(t, s) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    if (t >= this.x && t <= this.x + this.width && s >= this.y && s <= this.y + this.height) {
      const i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (s >= this.y + i && s <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i)
        return !0;
      let r = t - (this.x + i), n = s - (this.y + i);
      const o = i * i;
      if (r * r + n * n <= o || (r = t - (this.x + this.width - i), r * r + n * n <= o) || (n = s - (this.y + this.height - i), r * r + n * n <= o) || (r = t - (this.x + i), r * r + n * n <= o))
        return !0;
    }
    return !1;
  }
  toString() {
    return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
  }
}
class tt {
  constructor(t = 1, s = 0, i = 0, r = 1, n = 0, o = 0) {
    this.array = null, this.a = t, this.b = s, this.c = i, this.d = r, this.tx = n, this.ty = o;
  }
  fromArray(t) {
    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
  }
  set(t, s, i, r, n, o) {
    return this.a = t, this.b = s, this.c = i, this.d = r, this.tx = n, this.ty = o, this;
  }
  toArray(t, s) {
    this.array || (this.array = new Float32Array(9));
    const i = s || this.array;
    return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i;
  }
  apply(t, s) {
    s = s || new $();
    const i = t.x, r = t.y;
    return s.x = this.a * i + this.c * r + this.tx, s.y = this.b * i + this.d * r + this.ty, s;
  }
  applyInverse(t, s) {
    s = s || new $();
    const i = 1 / (this.a * this.d + this.c * -this.b), r = t.x, n = t.y;
    return s.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, s.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, s;
  }
  translate(t, s) {
    return this.tx += t, this.ty += s, this;
  }
  scale(t, s) {
    return this.a *= t, this.d *= s, this.c *= t, this.b *= s, this.tx *= t, this.ty *= s, this;
  }
  rotate(t) {
    const s = Math.cos(t), i = Math.sin(t), r = this.a, n = this.c, o = this.tx;
    return this.a = r * s - this.b * i, this.b = r * i + this.b * s, this.c = n * s - this.d * i, this.d = n * i + this.d * s, this.tx = o * s - this.ty * i, this.ty = o * i + this.ty * s, this;
  }
  append(t) {
    const s = this.a, i = this.b, r = this.c, n = this.d;
    return this.a = t.a * s + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * s + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * s + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this;
  }
  setTransform(t, s, i, r, n, o, a, h, l) {
    return this.a = Math.cos(a + l) * n, this.b = Math.sin(a + l) * n, this.c = -Math.sin(a - h) * o, this.d = Math.cos(a - h) * o, this.tx = t - (i * this.a + r * this.c), this.ty = s - (i * this.b + r * this.d), this;
  }
  prepend(t) {
    const s = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const i = this.a, r = this.c;
      this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
    }
    return this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty, this;
  }
  decompose(t) {
    const s = this.a, i = this.b, r = this.c, n = this.d, o = t.pivot, a = -Math.atan2(-r, n), h = Math.atan2(i, s), l = Math.abs(a + h);
    return l < 1e-5 || Math.abs(Us - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = h), t.scale.x = Math.sqrt(s * s + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * s + o.y * r), t.position.y = this.ty + (o.x * i + o.y * n), t;
  }
  invert() {
    const t = this.a, s = this.b, i = this.c, r = this.d, n = this.tx, o = t * r - s * i;
    return this.a = r / o, this.b = -s / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - s * n) / o, this;
  }
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
  }
  clone() {
    const t = new tt();
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  copyTo(t) {
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  copyFrom(t) {
    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
  }
  toString() {
    return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  static get IDENTITY() {
    return new tt();
  }
  static get TEMP_MATRIX() {
    return new tt();
  }
}
const ce = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], ue = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], de = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], fe = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], Hi = [], Dn = [], ps = Math.sign;
function zc() {
  for (let e = 0; e < 16; e++) {
    const t = [];
    Hi.push(t);
    for (let s = 0; s < 16; s++) {
      const i = ps(ce[e] * ce[s] + de[e] * ue[s]), r = ps(ue[e] * ce[s] + fe[e] * ue[s]), n = ps(ce[e] * de[s] + de[e] * fe[s]), o = ps(ue[e] * de[s] + fe[e] * fe[s]);
      for (let a = 0; a < 16; a++)
        if (ce[a] === i && ue[a] === r && de[a] === n && fe[a] === o) {
          t.push(a);
          break;
        }
    }
  }
  for (let e = 0; e < 16; e++) {
    const t = new tt();
    t.set(ce[e], ue[e], de[e], fe[e], 0, 0), Dn.push(t);
  }
}
zc();
const et = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: (e) => ce[e],
  uY: (e) => ue[e],
  vX: (e) => de[e],
  vY: (e) => fe[e],
  inv: (e) => e & 8 ? e & 15 : -e & 7,
  add: (e, t) => Hi[e][t],
  sub: (e, t) => Hi[e][et.inv(t)],
  rotate180: (e) => e ^ 4,
  isVertical: (e) => (e & 3) === 2,
  byDirection: (e, t) => Math.abs(e) * 2 <= Math.abs(t) ? t >= 0 ? et.S : et.N : Math.abs(t) * 2 <= Math.abs(e) ? e > 0 ? et.E : et.W : t > 0 ? e > 0 ? et.SE : et.SW : e > 0 ? et.NE : et.NW,
  matrixAppendRotationInv: (e, t, s = 0, i = 0) => {
    const r = Dn[et.inv(t)];
    r.tx = s, r.ty = i, e.append(r);
  }
};
class se {
  constructor(t, s, i = 0, r = 0) {
    this._x = i, this._y = r, this.cb = t, this.scope = s;
  }
  clone(t = this.cb, s = this.scope) {
    return new se(t, s, this._x, this._y);
  }
  set(t = 0, s = t) {
    return (this._x !== t || this._y !== s) && (this._x = t, this._y = s, this.cb.call(this.scope)), this;
  }
  copyFrom(t) {
    return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this;
  }
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  toString() {
    return `[@pixi/math:ObservablePoint x=${0} y=${0} scope=${this.scope}]`;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && (this._x = t, this.cb.call(this.scope));
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && (this._y = t, this.cb.call(this.scope));
  }
}
const Fn = class {
  constructor() {
    this.worldTransform = new tt(), this.localTransform = new tt(), this.position = new se(this.onChange, this, 0, 0), this.scale = new se(this.onChange, this, 1, 1), this.pivot = new se(this.onChange, this, 0, 0), this.skew = new se(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
  }
  toString() {
    return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
  }
  updateLocalTransform() {
    const e = this.localTransform;
    this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1);
  }
  updateTransform(e) {
    const t = this.localTransform;
    if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== e._worldID) {
      const s = e.worldTransform, i = this.worldTransform;
      i.a = t.a * s.a + t.b * s.c, i.b = t.a * s.b + t.b * s.d, i.c = t.c * s.a + t.d * s.c, i.d = t.c * s.b + t.d * s.d, i.tx = t.tx * s.a + t.ty * s.c + s.tx, i.ty = t.tx * s.b + t.ty * s.d + s.ty, this._parentID = e._worldID, this._worldID++;
    }
  }
  setFromMatrix(e) {
    e.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    this._rotation !== e && (this._rotation = e, this.updateSkew());
  }
};
let cr = Fn;
cr.IDENTITY = new Fn();
var Vc = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`, jc = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function Gr(e, t, s) {
  const i = e.createShader(t);
  return e.shaderSource(i, s), e.compileShader(i), i;
}
function fi(e) {
  const t = new Array(e);
  for (let s = 0; s < t.length; s++)
    t[s] = !1;
  return t;
}
function Ln(e, t) {
  switch (e) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * t);
    case "vec3":
      return new Float32Array(3 * t);
    case "vec4":
      return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * t);
    case "ivec3":
      return new Int32Array(3 * t);
    case "ivec4":
      return new Int32Array(4 * t);
    case "uvec2":
      return new Uint32Array(2 * t);
    case "uvec3":
      return new Uint32Array(3 * t);
    case "uvec4":
      return new Uint32Array(4 * t);
    case "bool":
      return !1;
    case "bvec2":
      return fi(2 * t);
    case "bvec3":
      return fi(3 * t);
    case "bvec4":
      return fi(4 * t);
    case "mat2":
      return new Float32Array([
        1,
        0,
        0,
        1
      ]);
    case "mat3":
      return new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]);
    case "mat4":
      return new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
  }
  return null;
}
const Le = [
  {
    test: (e) => e.type === "float" && e.size === 1 && !e.isArray,
    code: (e) => `
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `
  },
  {
    test: (e, t) => (e.type === "sampler2D" || e.type === "samplerCube" || e.type === "sampler2DArray") && e.size === 1 && !e.isArray && (t == null || t.castToBaseTexture !== void 0),
    code: (e) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`
  },
  {
    test: (e, t) => e.type === "mat3" && e.size === 1 && !e.isArray && t.a !== void 0,
    code: (e) => `
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,
    codeUbo: (e) => `
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];
        
                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];
        
                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `
  },
  {
    test: (e, t) => e.type === "vec2" && e.size === 1 && !e.isArray && t.x !== void 0,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,
    codeUbo: (e) => `
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
  },
  {
    test: (e) => e.type === "vec2" && e.size === 1 && !e.isArray,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `
  },
  {
    test: (e, t) => e.type === "vec4" && e.size === 1 && !e.isArray && t.width !== void 0,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,
    codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
  },
  {
    test: (e) => e.type === "vec4" && e.size === 1 && !e.isArray,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`
  }
], Wc = {
  float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
  vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
  vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
  vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
  int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
  uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
  uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
  uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
  bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
  bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
}, $c = {
  float: "gl.uniform1fv(location, v)",
  vec2: "gl.uniform2fv(location, v)",
  vec3: "gl.uniform3fv(location, v)",
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
};
function Yc(e, t) {
  var i;
  const s = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const r in e.uniforms) {
    const n = t[r];
    if (!n) {
      (i = e.uniforms[r]) != null && i.group && (e.uniforms[r].ubo ? s.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `) : s.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));
      continue;
    }
    const o = e.uniforms[r];
    let a = !1;
    for (let h = 0; h < Le.length; h++)
      if (Le[h].test(n, o)) {
        s.push(Le[h].code(r, o)), a = !0;
        break;
      }
    if (!a) {
      const l = (n.size === 1 && !n.isArray ? Wc : $c)[n.type].replace("location", `ud["${r}"].location`);
      s.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${l};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", s.join(`
`));
}
const Nn = {};
let Ee = Nn;
function qc() {
  if (Ee === Nn || Ee != null && Ee.isContextLost()) {
    const e = M.ADAPTER.createCanvas();
    let t;
    M.PREFER_ENV >= ye.WEBGL2 && (t = e.getContext("webgl2", {})), t || (t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), Ee = t;
  }
  return Ee;
}
let ms;
function Kc() {
  if (!ms) {
    ms = At.MEDIUM;
    const e = qc();
    e && e.getShaderPrecisionFormat && (ms = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision ? At.HIGH : At.MEDIUM);
  }
  return ms;
}
function Hr(e, t) {
  const s = e.getShaderSource(t).split(`
`).map((l, c) => `${c}: ${l}`), i = e.getShaderInfoLog(t), r = i.split(`
`), n = {}, o = r.map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((l) => l && !n[l] ? (n[l] = !0, !0) : !1), a = [""];
  o.forEach((l) => {
    s[l - 1] = `%c${s[l - 1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const h = s.join(`
`);
  a[0] = h, console.error(i), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd();
}
function Zc(e, t, s, i) {
  e.getProgramParameter(t, e.LINK_STATUS) || (e.getShaderParameter(s, e.COMPILE_STATUS) || Hr(e, s), e.getShaderParameter(i, e.COMPILE_STATUS) || Hr(e, i), console.error("PixiJS Error: Could not initialize shader."), e.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(t)));
}
const Jc = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function On(e) {
  return Jc[e];
}
let gs = null;
const Xr = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function kn(e, t) {
  if (!gs) {
    const s = Object.keys(Xr);
    gs = {};
    for (let i = 0; i < s.length; ++i) {
      const r = s[i];
      gs[e[r]] = Xr[r];
    }
  }
  return gs[t];
}
function zr(e, t, s) {
  if (e.substring(0, 9) !== "precision") {
    let i = t;
    return t === At.HIGH && s !== At.HIGH && (i = At.MEDIUM), `precision ${i} float;
${e}`;
  } else if (s !== At.HIGH && e.substring(0, 15) === "precision highp")
    return e.replace("precision highp", "precision mediump");
  return e;
}
let ze;
function Qc() {
  if (typeof ze == "boolean")
    return ze;
  try {
    ze = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
  } catch {
    ze = !1;
  }
  return ze;
}
let tu = 0;
const _s = {}, Se = class {
  constructor(e, t, s = "pixi-shader", i = {}) {
    this.extra = {}, this.id = tu++, this.vertexSrc = e || Se.defaultVertexSrc, this.fragmentSrc = t || Se.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = i, this.vertexSrc.substring(0, 8) !== "#version" && (s = s.replace(/\s+/g, "-"), _s[s] ? (_s[s]++, s += `-${_s[s]}`) : _s[s] = 1, this.vertexSrc = `#define SHADER_NAME ${s}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${s}
${this.fragmentSrc}`, this.vertexSrc = zr(this.vertexSrc, Se.defaultVertexPrecision, At.HIGH), this.fragmentSrc = zr(this.fragmentSrc, Se.defaultFragmentPrecision, Kc())), this.glPrograms = {}, this.syncUniforms = null;
  }
  static get defaultVertexSrc() {
    return jc;
  }
  static get defaultFragmentSrc() {
    return Vc;
  }
  static from(e, t, s) {
    const i = e + t;
    let r = Fr[i];
    return r || (Fr[i] = r = new Se(e, t, s)), r;
  }
};
let Ft = Se;
Ft.defaultVertexPrecision = At.HIGH;
Ft.defaultFragmentPrecision = Jt.apple.device ? At.HIGH : At.MEDIUM;
let eu = 0;
class Ot {
  constructor(t, s, i) {
    this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = eu++, this.static = !!s, this.ubo = !!i, t instanceof ot ? (this.buffer = t, this.buffer.type = jt.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new ot(new Float32Array(1)), this.buffer.type = jt.UNIFORM_BUFFER, this.autoManage = !0));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(t, s, i) {
    if (!this.ubo)
      this.uniforms[t] = new Ot(s, i);
    else
      throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
  }
  static from(t, s, i) {
    return new Ot(t, s, i);
  }
  static uboFrom(t, s) {
    return new Ot(t, s ?? !0, !0);
  }
}
class Wt {
  constructor(t, s) {
    this.uniformBindCount = 0, this.program = t, s ? s instanceof Ot ? this.uniformGroup = s : this.uniformGroup = new Ot(s) : this.uniformGroup = new Ot({}), this.disposeRunner = new Nt("disposeShader");
  }
  checkUniformExists(t, s) {
    if (s.uniforms[t])
      return !0;
    for (const i in s.uniforms) {
      const r = s.uniforms[i];
      if (r.group && this.checkUniformExists(t, r))
        return !0;
    }
    return !1;
  }
  destroy() {
    this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(t, s, i) {
    const r = Ft.from(t, s);
    return new Wt(r, i);
  }
}
class su {
  constructor(t, s) {
    if (this.vertexSrc = t, this.fragTemplate = s, this.programCache = {}, this.defaultGroupCache = {}, !s.includes("%count%"))
      throw new Error('Fragment template must contain "%count%".');
    if (!s.includes("%forloop%"))
      throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(t) {
    if (!this.programCache[t]) {
      const i = new Int32Array(t);
      for (let n = 0; n < t; n++)
        i[n] = n;
      this.defaultGroupCache[t] = Ot.from({ uSamplers: i }, !0);
      let r = this.fragTemplate;
      r = r.replace(/%count%/gi, `${t}`), r = r.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Ft(this.vertexSrc, r);
    }
    const s = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new tt(),
      default: this.defaultGroupCache[t]
    };
    return new Wt(this.programCache[t], s);
  }
  generateSampleSrc(t) {
    let s = "";
    s += `
`, s += `
`;
    for (let i = 0; i < t; i++)
      i > 0 && (s += `
else `), i < t - 1 && (s += `if(vTextureId < ${i}.5)`), s += `
{`, s += `
	color = texture2D(uSamplers[${i}], vTextureCoord);`, s += `
}`;
    return s += `
`, s += `
`, s;
  }
}
class Xi {
  constructor() {
    this.elements = [], this.ids = [], this.count = 0;
  }
  clear() {
    for (let t = 0; t < this.count; t++)
      this.elements[t] = null;
    this.count = 0;
  }
}
function iu() {
  return !Jt.apple.device;
}
function ru(e) {
  let t = !0;
  const s = M.ADAPTER.getNavigator();
  if (Jt.tablet || Jt.phone) {
    if (Jt.apple.device) {
      const i = s.userAgent.match(/OS (\d+)_(\d+)?/);
      i && parseInt(i[1], 10) < 11 && (t = !1);
    }
    if (Jt.android.device) {
      const i = s.userAgent.match(/Android\s([0-9.]*)/);
      i && parseInt(i[1], 10) < 7 && (t = !1);
    }
  }
  return t ? e : 4;
}
class Zs {
  constructor(t) {
    this.renderer = t;
  }
  flush() {
  }
  destroy() {
    this.renderer = null;
  }
  start() {
  }
  stop() {
    this.flush();
  }
  render(t) {
  }
}
var nu = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`, ou = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const It = class extends Zs {
  constructor(e) {
    super(e), this.setShaderGenerator(), this.geometryClass = Mn, this.vertexSize = 6, this.state = te.for2d(), this.size = It.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = [];
  }
  static get defaultMaxTextures() {
    return this._defaultMaxTextures = this._defaultMaxTextures ?? ru(32), this._defaultMaxTextures;
  }
  static set defaultMaxTextures(e) {
    this._defaultMaxTextures = e;
  }
  static get canUploadSameBuffer() {
    return this._canUploadSameBuffer = this._canUploadSameBuffer ?? iu(), this._canUploadSameBuffer;
  }
  static set canUploadSameBuffer(e) {
    this._canUploadSameBuffer = e;
  }
  get MAX_TEXTURES() {
    return Y("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures;
  }
  static get defaultVertexSrc() {
    return ou;
  }
  static get defaultFragmentTemplate() {
    return nu;
  }
  setShaderGenerator({
    vertex: e = It.defaultVertexSrc,
    fragment: t = It.defaultFragmentTemplate
  } = {}) {
    this.shaderGenerator = new su(e, t);
  }
  contextChange() {
    const e = this.renderer.gl;
    M.PREFER_ENV === ye.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), It.defaultMaxTextures), this.maxTextures = Dc(this.maxTextures, e)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let t = 0; t < this._packedGeometryPoolSize; t++)
      this._packedGeometries[t] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const {
      _drawCallPool: e,
      _textureArrayPool: t
    } = It, s = this.size / 4, i = Math.floor(s / this.maxTextures) + 1;
    for (; e.length < s; )
      e.push(new Gi());
    for (; t.length < i; )
      t.push(new Xi());
    for (let r = 0; r < this.maxTextures; r++)
      this._tempBoundTextures[r] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(e) {
    e._texture.valid && (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += e.vertexData.length / 2, this._indexCount += e.indices.length, this._bufferedTextures[this._bufferSize] = e._texture.baseTexture, this._bufferedElements[this._bufferSize++] = e);
  }
  buildTexturesAndDrawCalls() {
    const {
      _bufferedTextures: e,
      maxTextures: t
    } = this, s = It._textureArrayPool, i = this.renderer.batch, r = this._tempBoundTextures, n = this.renderer.textureGC.count;
    let o = ++X._globalBatch, a = 0, h = s[0], l = 0;
    i.copyBoundTextures(r, t);
    for (let c = 0; c < this._bufferSize; ++c) {
      const u = e[c];
      e[c] = null, u._batchEnabled !== o && (h.count >= t && (i.boundArray(h, r, o, t), this.buildDrawCalls(h, l, c), l = c, h = s[++a], ++o), u._batchEnabled = o, u.touched = n, h.elements[h.count++] = u);
    }
    h.count > 0 && (i.boundArray(h, r, o, t), this.buildDrawCalls(h, l, this._bufferSize), ++a, ++o);
    for (let c = 0; c < r.length; c++)
      r[c] = null;
    X._globalBatch = o;
  }
  buildDrawCalls(e, t, s) {
    const {
      _bufferedElements: i,
      _attributeBuffer: r,
      _indexBuffer: n,
      vertexSize: o
    } = this, a = It._drawCallPool;
    let h = this._dcIndex, l = this._aIndex, c = this._iIndex, u = a[h];
    u.start = this._iIndex, u.texArray = e;
    for (let d = t; d < s; ++d) {
      const f = i[d], p = f._texture.baseTexture, _ = An[p.alphaMode ? 1 : 0][f.blendMode];
      i[d] = null, t < d && u.blend !== _ && (u.size = c - u.start, t = d, u = a[++h], u.texArray = e, u.start = c), this.packInterleavedGeometry(f, r, n, l, c), l += f.vertexData.length / 2 * o, c += f.indices.length, u.blend = _;
    }
    t < s && (u.size = c - u.start, ++h), this._dcIndex = h, this._aIndex = l, this._iIndex = c;
  }
  bindAndClearTexArray(e) {
    const t = this.renderer.texture;
    for (let s = 0; s < e.count; s++)
      t.bind(e.elements[s], e.ids[s]), e.elements[s] = null;
    e.count = 0;
  }
  updateGeometry() {
    const {
      _packedGeometries: e,
      _attributeBuffer: t,
      _indexBuffer: s
    } = this;
    It.canUploadSameBuffer ? (e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(s), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass()), e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(s), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
  }
  drawBatches() {
    const e = this._dcIndex, { gl: t, state: s } = this.renderer, i = It._drawCallPool;
    let r = null;
    for (let n = 0; n < e; n++) {
      const { texArray: o, type: a, size: h, start: l, blend: c } = i[n];
      r !== o && (r = o, this.bindAndClearTexArray(o)), this.state.blendMode = c, s.set(this.state), t.drawElements(a, h, t.UNSIGNED_SHORT, l * 2);
    }
  }
  flush() {
    this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
  }
  start() {
    this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), It.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] && this._packedGeometries[e].destroy();
    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy();
  }
  getAttributeBuffer(e) {
    const t = Os(Math.ceil(e / 8)), s = Dr(t), i = t * 8;
    this._aBuffers.length <= s && (this._iBuffers.length = s + 1);
    let r = this._aBuffers[i];
    return r || (this._aBuffers[i] = r = new ki(i * this.vertexSize * 4)), r;
  }
  getIndexBuffer(e) {
    const t = Os(Math.ceil(e / 12)), s = Dr(t), i = t * 12;
    this._iBuffers.length <= s && (this._iBuffers.length = s + 1);
    let r = this._iBuffers[s];
    return r || (this._iBuffers[s] = r = new Uint16Array(i)), r;
  }
  packInterleavedGeometry(e, t, s, i, r) {
    const {
      uint32View: n,
      float32View: o
    } = t, a = i / this.vertexSize, h = e.uvs, l = e.indices, c = e.vertexData, u = e._texture.baseTexture._batchLocation, d = Math.min(e.worldAlpha, 1), f = d < 1 && e._texture.baseTexture.alphaMode ? ar(e._tintRGB, d) : e._tintRGB + (d * 255 << 24);
    for (let p = 0; p < c.length; p += 2)
      o[i++] = c[p], o[i++] = c[p + 1], o[i++] = h[p], o[i++] = h[p + 1], n[i++] = f, o[i++] = u;
    for (let p = 0; p < l.length; p++)
      s[r++] = a + l[p];
  }
};
let Bt = It;
Bt.defaultBatchSize = 4096;
Bt.extension = {
  name: "batch",
  type: P.RendererPlugin
};
Bt._drawCallPool = [];
Bt._textureArrayPool = [];
O.add(Bt);
var au = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`, hu = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const $e = class extends Wt {
  constructor(e, t, s) {
    const i = Ft.from(e || $e.defaultVertexSrc, t || $e.defaultFragmentSrc);
    super(i, s), this.padding = 0, this.resolution = $e.defaultResolution, this.multisample = $e.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new te();
  }
  apply(e, t, s, i, r) {
    e.applyFilter(this, t, s, i);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._resolution = e;
  }
  static get defaultVertexSrc() {
    return hu;
  }
  static get defaultFragmentSrc() {
    return au;
  }
};
let gt = $e;
gt.defaultResolution = 1;
gt.defaultMultisample = nt.NONE;
class Un {
  constructor() {
    this.clearBeforeRender = !0, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 1], this._backgroundColorString = "#000000", this.color = this._backgroundColor, this.alpha = 1;
  }
  init(t) {
    this.clearBeforeRender = t.clearBeforeRender, t.color && (this.color = typeof t.color == "string" ? or(t.color) : t.color), this.alpha = t.alpha;
  }
  get color() {
    return this._backgroundColor;
  }
  set color(t) {
    this._backgroundColor = t, this._backgroundColorString = wn(t), es(t, this._backgroundColorRgba);
  }
  get alpha() {
    return this._backgroundColorRgba[3];
  }
  set alpha(t) {
    this._backgroundColorRgba[3] = t;
  }
  get colorRgba() {
    return this._backgroundColorRgba;
  }
  get colorString() {
    return this._backgroundColorString;
  }
  destroy() {
  }
}
Un.extension = {
  type: [
    P.RendererSystem,
    P.CanvasRendererSystem
  ],
  name: "background"
};
O.add(Un);
class Gn {
  constructor(t) {
    this.renderer = t, this.emptyRenderer = new Zs(t), this.currentRenderer = this.emptyRenderer;
  }
  setObjectRenderer(t) {
    this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start());
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(t, s) {
    const { boundTextures: i } = this.renderer.texture;
    for (let r = s - 1; r >= 0; --r)
      t[r] = i[r] || null, t[r] && (t[r]._batchLocation = r);
  }
  boundArray(t, s, i, r) {
    const { elements: n, ids: o, count: a } = t;
    let h = 0;
    for (let l = 0; l < a; l++) {
      const c = n[l], u = c._batchLocation;
      if (u >= 0 && u < r && s[u] === c) {
        o[l] = u;
        continue;
      }
      for (; h < r; ) {
        const d = s[h];
        if (d && d._batchEnabled === i && d._batchLocation === h) {
          h++;
          continue;
        }
        o[l] = h, c._batchLocation = h, s[h] = c;
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
Gn.extension = {
  type: P.RendererSystem,
  name: "batch"
};
O.add(Gn);
let Vr = 0;
class Hn {
  constructor(t) {
    this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
      uint32Indices: !1
    }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(t) {
    this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = Vr++;
  }
  init(t) {
    if (t.context)
      this.initFromContext(t.context);
    else {
      const s = this.renderer.background.alpha < 1, i = t.premultipliedAlpha;
      this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({
        alpha: s,
        premultipliedAlpha: i,
        antialias: t.antialias,
        stencil: !0,
        preserveDrawingBuffer: t.preserveDrawingBuffer,
        powerPreference: t.powerPreference
      });
    }
  }
  initFromContext(t) {
    this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = Vr++, this.renderer.runners.contextChange.emit(t);
    const s = this.renderer.view;
    s.addEventListener !== void 0 && (s.addEventListener("webglcontextlost", this.handleContextLost, !1), s.addEventListener("webglcontextrestored", this.handleContextRestored, !1));
  }
  initFromOptions(t) {
    const s = this.createContext(this.renderer.view, t);
    this.initFromContext(s);
  }
  createContext(t, s) {
    let i;
    if (M.PREFER_ENV >= ye.WEBGL2 && (i = t.getContext("webgl2", s)), i)
      this.webGLVersion = 2;
    else if (this.webGLVersion = 1, i = t.getContext("webgl", s) || t.getContext("experimental-webgl", s), !i)
      throw new Error("This browser does not support WebGL. Try using the canvas renderer");
    return this.gl = i, this.getExtensions(), this.gl;
  }
  getExtensions() {
    const { gl: t } = this, s = {
      loseContext: t.getExtension("WEBGL_lose_context"),
      anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      etc: t.getExtension("WEBGL_compressed_texture_etc"),
      etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: t.getExtension("WEBGL_compressed_texture_atc"),
      astc: t.getExtension("WEBGL_compressed_texture_astc")
    };
    this.webGLVersion === 1 ? Object.assign(this.extensions, s, {
      drawBuffers: t.getExtension("WEBGL_draw_buffers"),
      depthTexture: t.getExtension("WEBGL_depth_texture"),
      vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
      uint32ElementIndex: t.getExtension("OES_element_index_uint"),
      floatTexture: t.getExtension("OES_texture_float"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      textureHalfFloat: t.getExtension("OES_texture_half_float"),
      textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
    }) : this.webGLVersion === 2 && Object.assign(this.extensions, s, {
      colorBufferFloat: t.getExtension("EXT_color_buffer_float")
    });
  }
  handleContextLost(t) {
    t.preventDefault(), setTimeout(() => {
      this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext();
    }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const t = this.renderer.view;
    this.renderer = null, t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  validateContext(t) {
    const s = t.getContextAttributes(), i = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
    i && (this.webGLVersion = 2), s && !s.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    const r = i || !!t.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = r, r || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
  }
}
Hn.extension = {
  type: P.RendererSystem,
  name: "context"
};
O.add(Hn);
class lu extends ns {
  upload(t, s, i) {
    const r = t.gl;
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.alphaMode === kt.UNPACK);
    const n = s.realWidth, o = s.realHeight;
    return i.width === n && i.height === o ? r.texSubImage2D(s.target, 0, 0, 0, n, o, s.format, i.type, this.data) : (i.width = n, i.height = o, r.texImage2D(s.target, 0, i.internalFormat, n, o, 0, s.format, i.type, this.data)), !0;
  }
}
class zi {
  constructor(t, s) {
    this.width = Math.round(t || 100), this.height = Math.round(s || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new Nt("disposeFramebuffer"), this.multisample = nt.NONE;
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(t = 0, s) {
    return this.colorTextures[t] = s || new X(null, {
      scaleMode: Zt.NEAREST,
      resolution: 1,
      mipmap: $t.OFF,
      width: this.width,
      height: this.height
    }), this.dirtyId++, this.dirtyFormat++, this;
  }
  addDepthTexture(t) {
    return this.depthTexture = t || new X(new lu(null, { width: this.width, height: this.height }), {
      scaleMode: Zt.NEAREST,
      resolution: 1,
      width: this.width,
      height: this.height,
      mipmap: $t.OFF,
      format: C.DEPTH_COMPONENT,
      type: k.UNSIGNED_SHORT
    }), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableDepth() {
    return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(t, s) {
    if (t = Math.round(t), s = Math.round(s), !(t === this.width && s === this.height)) {
      this.width = t, this.height = s, this.dirtyId++, this.dirtySize++;
      for (let i = 0; i < this.colorTextures.length; i++) {
        const r = this.colorTextures[i], n = r.resolution;
        r.setSize(t / n, s / n);
      }
      if (this.depthTexture) {
        const i = this.depthTexture.resolution;
        this.depthTexture.setSize(t / i, s / i);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroyDepthTexture() {
    this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
  }
}
class Xn extends X {
  constructor(t = {}) {
    if (typeof t == "number") {
      const s = arguments[0], i = arguments[1], r = arguments[2], n = arguments[3];
      t = { width: s, height: i, scaleMode: r, resolution: n };
    }
    t.width = t.width || 100, t.height = t.height || 100, t.multisample ?? (t.multisample = nt.NONE), super(null, t), this.mipmap = $t.OFF, this.valid = !0, this.clearColor = [0, 0, 0, 0], this.framebuffer = new zi(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = t.multisample, this.maskStack = [], this.filterStack = [{}];
  }
  resize(t, s) {
    this.framebuffer.resize(t * this.resolution, s * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
  }
}
class oe extends ss {
  constructor(t) {
    const s = t, i = s.naturalWidth || s.videoWidth || s.width, r = s.naturalHeight || s.videoHeight || s.height;
    super(i, r), this.source = t, this.noSubImage = !1;
  }
  static crossOrigin(t, s, i) {
    i === void 0 && !s.startsWith("data:") ? t.crossOrigin = Pc(s) : i !== !1 && (t.crossOrigin = typeof i == "string" ? i : "anonymous");
  }
  upload(t, s, i, r) {
    const n = t.gl, o = s.realWidth, a = s.realHeight;
    if (r = r || this.source, typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) {
      if (!r.complete || r.naturalWidth === 0)
        return !1;
    } else if (typeof HTMLVideoElement < "u" && r instanceof HTMLVideoElement && r.readyState <= 1 && r.buffered.length === 0)
      return !1;
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.alphaMode === kt.UNPACK), !this.noSubImage && s.target === n.TEXTURE_2D && i.width === o && i.height === a ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, s.format, i.type, r) : (i.width = o, i.height = a, n.texImage2D(s.target, 0, i.internalFormat, s.format, i.type, r)), !0;
  }
  update() {
    if (this.destroyed)
      return;
    const t = this.source, s = t.naturalWidth || t.videoWidth || t.width, i = t.naturalHeight || t.videoHeight || t.height;
    this.resize(s, i), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class zn extends oe {
  constructor(t, s) {
    if (s = s || {}, typeof t == "string") {
      const i = new Image();
      oe.crossOrigin(i, t, s.crossorigin), i.src = t, t = i;
    }
    super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (s.createBitmap ?? M.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof s.alphaMode == "number" ? s.alphaMode : null, this.bitmap = null, this._load = null, s.autoLoad !== !1 && this.load();
  }
  load(t) {
    return this._load ? this._load : (t !== void 0 && (this.createBitmap = t), this._load = new Promise((s, i) => {
      const r = this.source;
      this.url = r.src;
      const n = () => {
        this.destroyed || (r.onload = null, r.onerror = null, this.resize(r.width, r.height), this._load = null, this.createBitmap ? s(this.process()) : s(this));
      };
      r.complete && r.src ? n() : (r.onload = n, r.onerror = (o) => {
        i(o), this.onError.emit(o);
      });
    }), this._load);
  }
  process() {
    const t = this.source;
    if (this._process !== null)
      return this._process;
    if (this.bitmap !== null || !globalThis.createImageBitmap)
      return Promise.resolve(this);
    const s = globalThis.createImageBitmap, i = !t.crossOrigin || t.crossOrigin === "anonymous";
    return this._process = fetch(t.src, {
      mode: i ? "cors" : "no-cors"
    }).then((r) => r.blob()).then((r) => s(r, 0, 0, t.width, t.height, {
      premultiplyAlpha: this.alphaMode === null || this.alphaMode === kt.UNPACK ? "premultiply" : "none"
    })).then((r) => this.destroyed ? Promise.reject() : (this.bitmap = r, this.update(), this._process = null, Promise.resolve(this))), this._process;
  }
  upload(t, s, i) {
    if (typeof this.alphaMode == "number" && (s.alphaMode = this.alphaMode), !this.createBitmap)
      return super.upload(t, s, i);
    if (!this.bitmap && (this.process(), !this.bitmap))
      return !1;
    if (super.upload(t, s, i, this.bitmap), !this.preserveBitmap) {
      let r = !0;
      const n = s._glTextures;
      for (const o in n) {
        const a = n[o];
        if (a !== i && a.dirtyId !== s.dirtyId) {
          r = !1;
          break;
        }
      }
      r && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
    }
    return !0;
  }
  dispose() {
    this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
  }
  static test(t) {
    return typeof HTMLImageElement < "u" && (typeof t == "string" || t instanceof HTMLImageElement);
  }
}
class Vn {
  constructor() {
    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
  }
  set(t, s, i) {
    const r = s.width, n = s.height;
    if (i) {
      const o = t.width / 2 / r, a = t.height / 2 / n, h = t.x / r + o, l = t.y / n + a;
      i = et.add(i, et.NW), this.x0 = h + o * et.uX(i), this.y0 = l + a * et.uY(i), i = et.add(i, 2), this.x1 = h + o * et.uX(i), this.y1 = l + a * et.uY(i), i = et.add(i, 2), this.x2 = h + o * et.uX(i), this.y2 = l + a * et.uY(i), i = et.add(i, 2), this.x3 = h + o * et.uX(i), this.y3 = l + a * et.uY(i);
    } else
      this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
  }
  toString() {
    return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
  }
}
const jr = new Vn();
function xs(e) {
  e.destroy = function() {
  }, e.on = function() {
  }, e.once = function() {
  }, e.emit = function() {
  };
}
class L extends ge {
  constructor(t, s, i, r, n, o) {
    if (super(), this.noFrame = !1, s || (this.noFrame = !0, s = new V(0, 0, 1, 1)), t instanceof L && (t = t.baseTexture), this.baseTexture = t, this._frame = s, this.trim = r, this.valid = !1, this._uvs = jr, this.uvMatrix = null, this.orig = i || s, this._rotate = Number(n || 0), n === !0)
      this._rotate = 2;
    else if (this._rotate % 2 !== 0)
      throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    this.defaultAnchor = o ? new $(o.x, o.y) : new $(0, 0), this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = s : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
  }
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  onBaseTextureUpdated(t) {
    if (this.noFrame) {
      if (!this.baseTexture.valid)
        return;
      this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
    } else
      this.frame = this._frame;
    this.emit("update", this);
  }
  destroy(t) {
    if (this.baseTexture) {
      if (t) {
        const { resource: s } = this.baseTexture;
        s != null && s.url && Ht[s.url] && L.removeFromCache(s.url), this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
    }
    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, L.removeFromCache(this), this.textureCacheIds = null;
  }
  clone() {
    var r;
    const t = this._frame.clone(), s = this._frame === this.orig ? t : this.orig.clone(), i = new L(this.baseTexture, !this.noFrame && t, s, (r = this.trim) == null ? void 0 : r.clone(), this.rotate, this.defaultAnchor);
    return this.noFrame && (i._frame = t), i;
  }
  updateUvs() {
    this._uvs === jr && (this._uvs = new Vn()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
  }
  static from(t, s = {}, i = M.STRICT_TEXTURE_CACHE) {
    const r = typeof t == "string";
    let n = null;
    if (r)
      n = t;
    else if (t instanceof X) {
      if (!t.cacheId) {
        const a = (s == null ? void 0 : s.pixiIdPrefix) || "pixiid";
        t.cacheId = `${a}-${xe()}`, X.addToCache(t, t.cacheId);
      }
      n = t.cacheId;
    } else {
      if (!t._pixiId) {
        const a = (s == null ? void 0 : s.pixiIdPrefix) || "pixiid";
        t._pixiId = `${a}_${xe()}`;
      }
      n = t._pixiId;
    }
    let o = Ht[n];
    if (r && i && !o)
      throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
    return !o && !(t instanceof X) ? (s.resolution || (s.resolution = re(t)), o = new L(new X(t, s)), o.baseTexture.cacheId = n, X.addToCache(o.baseTexture, n), L.addToCache(o, n)) : !o && t instanceof X && (o = new L(t), L.addToCache(o, n)), o;
  }
  static fromURL(t, s) {
    const i = Object.assign({ autoLoad: !1 }, s == null ? void 0 : s.resourceOptions), r = L.from(t, Object.assign({ resourceOptions: i }, s), !1), n = r.baseTexture.resource;
    return r.baseTexture.valid ? Promise.resolve(r) : n.load().then(() => Promise.resolve(r));
  }
  static fromBuffer(t, s, i, r) {
    return new L(X.fromBuffer(t, s, i, r));
  }
  static fromLoader(t, s, i, r) {
    const n = new X(t, Object.assign({
      scaleMode: X.defaultOptions.scaleMode,
      resolution: re(s)
    }, r)), { resource: o } = n;
    o instanceof zn && (o.url = s);
    const a = new L(n);
    return i || (i = s), X.addToCache(a.baseTexture, i), L.addToCache(a, i), i !== s && (X.addToCache(a.baseTexture, s), L.addToCache(a, s)), a.baseTexture.valid ? Promise.resolve(a) : new Promise((h) => {
      a.baseTexture.once("loaded", () => h(a));
    });
  }
  static addToCache(t, s) {
    s && (t.textureCacheIds.includes(s) || t.textureCacheIds.push(s), Ht[s] && Ht[s] !== t && console.warn(`Texture added to the cache with an id [${s}] that already had an entry`), Ht[s] = t);
  }
  static removeFromCache(t) {
    if (typeof t == "string") {
      const s = Ht[t];
      if (s) {
        const i = s.textureCacheIds.indexOf(t);
        return i > -1 && s.textureCacheIds.splice(i, 1), delete Ht[t], s;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let s = 0; s < t.textureCacheIds.length; ++s)
        Ht[t.textureCacheIds[s]] === t && delete Ht[t.textureCacheIds[s]];
      return t.textureCacheIds.length = 0, t;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(t) {
    this._frame = t, this.noFrame = !1;
    const { x: s, y: i, width: r, height: n } = t, o = s + r > this.baseTexture.width, a = i + n > this.baseTexture.height;
    if (o || a) {
      const h = o && a ? "and" : "or", l = `X: ${s} + ${r} = ${s + r} > ${this.baseTexture.width}`, c = `Y: ${i} + ${n} = ${i + n} > ${this.baseTexture.height}`;
      throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${c}`);
    }
    this.valid = r && n && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs();
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(t) {
    this._rotate = t, this.valid && this.updateUvs();
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    return L._EMPTY || (L._EMPTY = new L(new X()), xs(L._EMPTY), xs(L._EMPTY.baseTexture)), L._EMPTY;
  }
  static get WHITE() {
    if (!L._WHITE) {
      const t = M.ADAPTER.createCanvas(16, 16), s = t.getContext("2d");
      t.width = 16, t.height = 16, s.fillStyle = "white", s.fillRect(0, 0, 16, 16), L._WHITE = new L(X.from(t)), xs(L._WHITE), xs(L._WHITE.baseTexture);
    }
    return L._WHITE;
  }
}
class ae extends L {
  constructor(t, s) {
    super(t, s), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, s, i = !0) {
    const r = this.baseTexture.resolution, n = Math.round(t * r) / r, o = Math.round(s * r) / r;
    this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, i && this.baseTexture.resize(n, o), this.updateUvs();
  }
  setResolution(t) {
    const { baseTexture: s } = this;
    s.resolution !== t && (s.setResolution(t), this.resize(s.width, s.height, !1));
  }
  static create(t) {
    return new ae(new Xn(t));
  }
}
class jn {
  constructor(t) {
    this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
  }
  createTexture(t, s, i = nt.NONE) {
    const r = new Xn(Object.assign({
      width: t,
      height: s,
      resolution: 1,
      multisample: i
    }, this.textureOptions));
    return new ae(r);
  }
  getOptimalTexture(t, s, i = 1, r = nt.NONE) {
    let n;
    t = Math.ceil(t * i - 1e-6), s = Math.ceil(s * i - 1e-6), !this.enableFullScreen || t !== this._pixelsWidth || s !== this._pixelsHeight ? (t = Os(t), s = Os(s), n = ((t & 65535) << 16 | s & 65535) >>> 0, r > 1 && (n += r * 4294967296)) : n = r > 1 ? -r : -1, this.texturePool[n] || (this.texturePool[n] = []);
    let o = this.texturePool[n].pop();
    return o || (o = this.createTexture(t, s, r)), o.filterPoolKey = n, o.setResolution(i), o;
  }
  getFilterTexture(t, s, i) {
    const r = this.getOptimalTexture(t.width, t.height, s || t.resolution, i || nt.NONE);
    return r.filterFrame = t.filterFrame, r;
  }
  returnTexture(t) {
    const s = t.filterPoolKey;
    t.filterFrame = null, this.texturePool[s].push(t);
  }
  returnFilterTexture(t) {
    this.returnTexture(t);
  }
  clear(t) {
    if (t = t !== !1, t)
      for (const s in this.texturePool) {
        const i = this.texturePool[s];
        if (i)
          for (let r = 0; r < i.length; r++)
            i[r].destroy(!0);
      }
    this.texturePool = {};
  }
  setScreenSize(t) {
    if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
      this.enableFullScreen = t.width > 0 && t.height > 0;
      for (const s in this.texturePool) {
        if (!(Number(s) < 0))
          continue;
        const i = this.texturePool[s];
        if (i)
          for (let r = 0; r < i.length; r++)
            i[r].destroy(!0);
        this.texturePool[s] = [];
      }
      this._pixelsWidth = t.width, this._pixelsHeight = t.height;
    }
  }
}
jn.SCREEN_KEY = -1;
class cu extends ne {
  constructor() {
    super(), this.addAttribute("aVertexPosition", new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ])).addIndex([0, 1, 3, 2]);
  }
}
class Wn extends ne {
  constructor() {
    super(), this.vertices = new Float32Array([
      -1,
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1
    ]), this.uvs = new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ]), this.vertexBuffer = new ot(this.vertices), this.uvBuffer = new ot(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(t, s) {
    let i = 0, r = 0;
    return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + s.width / t.width, this.uvs[3] = r, this.uvs[4] = i + s.width / t.width, this.uvs[5] = r + s.height / t.height, this.uvs[6] = i, this.uvs[7] = r + s.height / t.height, i = s.x, r = s.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + s.width, this.vertices[3] = r, this.vertices[4] = i + s.width, this.vertices[5] = r + s.height, this.vertices[6] = i, this.vertices[7] = r + s.height, this.invalidate(), this;
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class uu {
  constructor() {
    this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = nt.NONE, this.sourceFrame = new V(), this.destinationFrame = new V(), this.bindingSourceFrame = new V(), this.bindingDestinationFrame = new V(), this.filters = [], this.transform = null;
  }
  clear() {
    this.target = null, this.filters = null, this.renderTexture = null;
  }
}
const vs = [new $(), new $(), new $(), new $()], pi = new tt();
class $n {
  constructor(t) {
    this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new jn(), this.statePool = [], this.quad = new cu(), this.quadUv = new Wn(), this.tempRect = new V(), this.activeState = {}, this.globalUniforms = new Ot({
      outputFrame: new V(),
      inputSize: new Float32Array(4),
      inputPixel: new Float32Array(4),
      inputClamp: new Float32Array(4),
      resolution: 1,
      filterArea: new Float32Array(4),
      filterClamp: new Float32Array(4)
    }, !0), this.forceClear = !1, this.useMaxPadding = !1;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(t, s) {
    const i = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new uu(), o = this.renderer.renderTexture;
    let a = s[0].resolution, h = s[0].multisample, l = s[0].padding, c = s[0].autoFit, u = s[0].legacy ?? !0;
    for (let p = 1; p < s.length; p++) {
      const _ = s[p];
      a = Math.min(a, _.resolution), h = Math.min(h, _.multisample), l = this.useMaxPadding ? Math.max(l, _.padding) : l + _.padding, c = c && _.autoFit, u = u || (_.legacy ?? !0);
    }
    r.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), r.push(n), n.resolution = a, n.multisample = h, n.legacy = u, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(l);
    const d = this.tempRect.copyFrom(o.sourceFrame);
    i.projection.transform && this.transformAABB(pi.copyFrom(i.projection.transform).invert(), d), c ? (n.sourceFrame.fit(d), (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0, n.sourceFrame.height = 0)) : n.sourceFrame.intersects(d) || (n.sourceFrame.width = 0, n.sourceFrame.height = 0), this.roundFrame(n.sourceFrame, o.current ? o.current.resolution : i.resolution, o.sourceFrame, o.destinationFrame, i.projection.transform), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, a, h), n.filters = s, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height;
    const f = this.tempRect;
    f.x = 0, f.y = 0, f.width = n.sourceFrame.width, f.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(o.sourceFrame), n.bindingDestinationFrame.copyFrom(o.destinationFrame), n.transform = i.projection.transform, i.projection.transform = null, o.bind(n.renderTexture, n.sourceFrame, f), i.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const t = this.defaultFilterStack, s = t.pop(), i = s.filters;
    this.activeState = s;
    const r = this.globalUniforms.uniforms;
    r.outputFrame = s.sourceFrame, r.resolution = s.resolution;
    const n = r.inputSize, o = r.inputPixel, a = r.inputClamp;
    if (n[0] = s.destinationFrame.width, n[1] = s.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * s.resolution), o[1] = Math.round(n[1] * s.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = 0.5 * o[2], a[1] = 0.5 * o[3], a[2] = s.sourceFrame.width * n[2] - 0.5 * o[2], a[3] = s.sourceFrame.height * n[3] - 0.5 * o[3], s.legacy) {
      const l = r.filterArea;
      l[0] = s.destinationFrame.width, l[1] = s.destinationFrame.height, l[2] = s.sourceFrame.x, l[3] = s.sourceFrame.y, r.filterClamp = r.inputClamp;
    }
    this.globalUniforms.update();
    const h = t[t.length - 1];
    if (this.renderer.framebuffer.blit(), i.length === 1)
      i[0].apply(this, s.renderTexture, h.renderTexture, Xt.BLEND, s), this.returnFilterTexture(s.renderTexture);
    else {
      let l = s.renderTexture, c = this.getOptimalFilterTexture(l.width, l.height, s.resolution);
      c.filterFrame = l.filterFrame;
      let u = 0;
      for (u = 0; u < i.length - 1; ++u) {
        u === 1 && s.multisample > 1 && (c = this.getOptimalFilterTexture(l.width, l.height, s.resolution), c.filterFrame = l.filterFrame), i[u].apply(this, l, c, Xt.CLEAR, s);
        const d = l;
        l = c, c = d;
      }
      i[u].apply(this, l, h.renderTexture, Xt.BLEND, s), u > 1 && s.multisample > 1 && this.returnFilterTexture(s.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(c);
    }
    s.clear(), this.statePool.push(s);
  }
  bindAndClear(t, s = Xt.CLEAR) {
    const {
      renderTexture: i,
      state: r
    } = this.renderer;
    if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t != null && t.filterFrame) {
      const o = this.tempRect;
      o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, i.bind(t, t.filterFrame, o);
    } else
      t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? i.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
    const n = r.stateId & 1 || this.forceClear;
    (s === Xt.CLEAR || s === Xt.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(t, s, i, r) {
    const n = this.renderer;
    n.state.set(t.state), this.bindAndClear(i, r), t.uniforms.uSampler = s, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(s._frame, s.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(Vt.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(Vt.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(t, s) {
    const { sourceFrame: i, destinationFrame: r } = this.activeState, { orig: n } = s._texture, o = t.set(r.width, 0, 0, r.height, i.x, i.y), a = s.worldTransform.copyTo(tt.TEMP_MATRIX);
    return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(s.anchor.x, s.anchor.y), o;
  }
  destroy() {
    this.renderer = null, this.texturePool.clear(!1);
  }
  getOptimalFilterTexture(t, s, i = 1, r = nt.NONE) {
    return this.texturePool.getOptimalTexture(t, s, i, r);
  }
  getFilterTexture(t, s, i) {
    if (typeof t == "number") {
      const n = t;
      t = s, s = n;
    }
    t = t || this.activeState.renderTexture;
    const r = this.texturePool.getOptimalTexture(t.width, t.height, s || t.resolution, i || nt.NONE);
    return r.filterFrame = t.filterFrame, r;
  }
  returnFilterTexture(t) {
    this.texturePool.returnTexture(t);
  }
  emptyPool() {
    this.texturePool.clear(!0);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(t, s) {
    const i = vs[0], r = vs[1], n = vs[2], o = vs[3];
    i.set(s.left, s.top), r.set(s.left, s.bottom), n.set(s.right, s.top), o.set(s.right, s.bottom), t.apply(i, i), t.apply(r, r), t.apply(n, n), t.apply(o, o);
    const a = Math.min(i.x, r.x, n.x, o.x), h = Math.min(i.y, r.y, n.y, o.y), l = Math.max(i.x, r.x, n.x, o.x), c = Math.max(i.y, r.y, n.y, o.y);
    s.x = a, s.y = h, s.width = l - a, s.height = c - h;
  }
  roundFrame(t, s, i, r, n) {
    if (!(t.width <= 0 || t.height <= 0 || i.width <= 0 || i.height <= 0)) {
      if (n) {
        const { a: o, b: a, c: h, d: l } = n;
        if ((Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4))
          return;
      }
      n = n ? pi.copyFrom(n) : pi.identity(), n.translate(-i.x, -i.y).scale(r.width / i.width, r.height / i.height).translate(r.x, r.y), this.transformAABB(n, t), t.ceil(s), this.transformAABB(n.invert(), t);
    }
  }
}
$n.extension = {
  type: P.RendererSystem,
  name: "filter"
};
O.add($n);
class du {
  constructor(t) {
    this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = nt.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
  }
}
const fu = new V();
class Yn {
  constructor(t) {
    this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new zi(10, 10), this.msaaSamples = null;
  }
  contextChange() {
    this.disposeAll(!0);
    const t = this.gl = this.renderer.gl;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new V(), this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
      let s = this.renderer.context.extensions.drawBuffers, i = this.renderer.context.extensions.depthTexture;
      M.PREFER_ENV === ye.WEBGL_LEGACY && (s = null, i = null), s ? t.drawBuffers = (r) => s.drawBuffersWEBGL(r) : (this.hasMRT = !1, t.drawBuffers = () => {
      }), i || (this.writeDepthTexture = !1);
    } else
      this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES);
  }
  bind(t, s, i = 0) {
    const { gl: r } = this;
    if (t) {
      const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
      this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== i && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = i), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, i)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
      for (let o = 0; o < t.colorTextures.length; o++) {
        const a = t.colorTextures[o];
        this.renderer.texture.unbind(a.parentTextureArray || a);
      }
      if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), s) {
        const o = s.width >> i, a = s.height >> i, h = o / s.width;
        this.setViewport(s.x * h, s.y * h, o, a);
      } else {
        const o = t.width >> i, a = t.height >> i;
        this.setViewport(0, 0, o, a);
      }
    } else
      this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), s ? this.setViewport(s.x, s.y, s.width, s.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(t, s, i, r) {
    const n = this.viewport;
    t = Math.round(t), s = Math.round(s), i = Math.round(i), r = Math.round(r), (n.width !== i || n.height !== r || n.x !== t || n.y !== s) && (n.x = t, n.y = s, n.width = i, n.height = r, this.gl.viewport(t, s, i, r));
  }
  get size() {
    return this.current ? { x: 0, y: 0, width: this.current.width, height: this.current.height } : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
  }
  clear(t, s, i, r, n = Ii.COLOR | Ii.DEPTH) {
    const { gl: o } = this;
    o.clearColor(t, s, i, r), o.clear(n);
  }
  initFramebuffer(t) {
    const { gl: s } = this, i = new du(s.createFramebuffer());
    return i.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = i, this.managedFramebuffers.push(t), t.disposeRunner.add(this), i;
  }
  resizeFramebuffer(t) {
    const { gl: s } = this, i = t.glFramebuffers[this.CONTEXT_UID];
    i.stencil && (s.bindRenderbuffer(s.RENDERBUFFER, i.stencil), i.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, i.multisample, s.DEPTH24_STENCIL8, t.width, t.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, t.width, t.height));
    const r = t.colorTextures;
    let n = r.length;
    s.drawBuffers || (n = Math.min(n, 1));
    for (let o = 0; o < n; o++) {
      const a = r[o], h = a.parentTextureArray || a;
      this.renderer.texture.bind(h, 0), o === 0 && i.msaaBuffer && (s.bindRenderbuffer(s.RENDERBUFFER, i.msaaBuffer), s.renderbufferStorageMultisample(s.RENDERBUFFER, i.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height));
    }
    t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0);
  }
  updateFramebuffer(t, s) {
    const { gl: i } = this, r = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures;
    let o = n.length;
    i.drawBuffers || (o = Math.min(o, 1)), r.multisample > 1 && this.canMultisampleFramebuffer(t) ? r.msaaBuffer = r.msaaBuffer || i.createRenderbuffer() : r.msaaBuffer && (i.deleteRenderbuffer(r.msaaBuffer), r.msaaBuffer = null, r.blitFramebuffer && (r.blitFramebuffer.dispose(), r.blitFramebuffer = null));
    const a = [];
    for (let h = 0; h < o; h++) {
      const l = n[h], c = l.parentTextureArray || l;
      this.renderer.texture.bind(c, 0), h === 0 && r.msaaBuffer ? (i.bindRenderbuffer(i.RENDERBUFFER, r.msaaBuffer), i.renderbufferStorageMultisample(i.RENDERBUFFER, r.multisample, c._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, r.msaaBuffer)) : (i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + h, l.target, c._glTextures[this.CONTEXT_UID].texture, s), a.push(i.COLOR_ATTACHMENT0 + h));
    }
    if (a.length > 1 && i.drawBuffers(a), t.depthTexture && this.writeDepthTexture) {
      const l = t.depthTexture;
      this.renderer.texture.bind(l, 0), i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, s);
    }
    (t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture) ? (r.stencil = r.stencil || i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, r.stencil), r.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, r.multisample, i.DEPTH24_STENCIL8, t.width, t.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t.width, t.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, r.stencil)) : r.stencil && (i.deleteRenderbuffer(r.stencil), r.stencil = null);
  }
  canMultisampleFramebuffer(t) {
    return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture;
  }
  detectSamples(t) {
    const { msaaSamples: s } = this;
    let i = nt.NONE;
    if (t <= 1 || s === null)
      return i;
    for (let r = 0; r < s.length; r++)
      if (s[r] <= t) {
        i = s[r];
        break;
      }
    return i === 1 && (i = nt.NONE), i;
  }
  blit(t, s, i) {
    const { current: r, renderer: n, gl: o, CONTEXT_UID: a } = this;
    if (n.context.webGLVersion !== 2 || !r)
      return;
    const h = r.glFramebuffers[a];
    if (!h)
      return;
    if (!t) {
      if (!h.msaaBuffer)
        return;
      const c = r.colorTextures[0];
      if (!c)
        return;
      h.blitFramebuffer || (h.blitFramebuffer = new zi(r.width, r.height), h.blitFramebuffer.addColorTexture(0, c)), t = h.blitFramebuffer, t.colorTextures[0] !== c && (t.colorTextures[0] = c, t.dirtyId++, t.dirtyFormat++), (t.width !== r.width || t.height !== r.height) && (t.width = r.width, t.height = r.height, t.dirtyId++, t.dirtySize++);
    }
    s || (s = fu, s.width = r.width, s.height = r.height), i || (i = s);
    const l = s.width === i.width && s.height === i.height;
    this.bind(t), o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer), o.blitFramebuffer(s.left, s.top, s.right, s.bottom, i.left, i.top, i.right, i.bottom, o.COLOR_BUFFER_BIT, l ? o.NEAREST : o.LINEAR);
  }
  disposeFramebuffer(t, s) {
    const i = t.glFramebuffers[this.CONTEXT_UID], r = this.gl;
    if (!i)
      return;
    delete t.glFramebuffers[this.CONTEXT_UID];
    const n = this.managedFramebuffers.indexOf(t);
    n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), s || (r.deleteFramebuffer(i.framebuffer), i.msaaBuffer && r.deleteRenderbuffer(i.msaaBuffer), i.stencil && r.deleteRenderbuffer(i.stencil)), i.blitFramebuffer && i.blitFramebuffer.dispose();
  }
  disposeAll(t) {
    const s = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let i = 0; i < s.length; i++)
      this.disposeFramebuffer(s[i], t);
  }
  forceStencil() {
    const t = this.current;
    if (!t)
      return;
    const s = t.glFramebuffers[this.CONTEXT_UID];
    if (!s || s.stencil)
      return;
    t.stencil = !0;
    const i = t.width, r = t.height, n = this.gl, o = n.createRenderbuffer();
    n.bindRenderbuffer(n.RENDERBUFFER, o), s.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, s.multisample, n.DEPTH24_STENCIL8, i, r) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, i, r), s.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o);
  }
  reset() {
    this.current = this.unknownFramebuffer, this.viewport = new V();
  }
  destroy() {
    this.renderer = null;
  }
}
Yn.extension = {
  type: P.RendererSystem,
  name: "framebuffer"
};
O.add(Yn);
const mi = { 5126: 4, 5123: 2, 5121: 1 };
class qn {
  constructor(t) {
    this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {};
  }
  contextChange() {
    this.disposeAll(!0);
    const t = this.gl = this.renderer.gl, s = this.renderer.context;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, s.webGLVersion !== 2) {
      let i = this.renderer.context.extensions.vertexArrayObject;
      M.PREFER_ENV === ye.WEBGL_LEGACY && (i = null), i ? (t.createVertexArray = () => i.createVertexArrayOES(), t.bindVertexArray = (r) => i.bindVertexArrayOES(r), t.deleteVertexArray = (r) => i.deleteVertexArrayOES(r)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null);
    }
    if (s.webGLVersion !== 2) {
      const i = t.getExtension("ANGLE_instanced_arrays");
      i ? (t.vertexAttribDivisor = (r, n) => i.vertexAttribDivisorANGLE(r, n), t.drawElementsInstanced = (r, n, o, a, h) => i.drawElementsInstancedANGLE(r, n, o, a, h), t.drawArraysInstanced = (r, n, o, a) => i.drawArraysInstancedANGLE(r, n, o, a)) : this.hasInstance = !1;
    }
    this.canUseUInt32ElementIndex = s.webGLVersion === 2 || !!s.extensions.uint32ElementIndex;
  }
  bind(t, s) {
    s = s || this.renderer.shader.shader;
    const { gl: i } = this;
    let r = t.glVertexArrayObjects[this.CONTEXT_UID], n = !1;
    r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, n = !0);
    const o = r[s.program.id] || this.initGeometryVao(t, s, n);
    this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? i.bindVertexArray(o) : this.activateVao(t, s.program)), this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const t = this._activeGeometry, s = this.renderer.buffer;
    for (let i = 0; i < t.buffers.length; i++) {
      const r = t.buffers[i];
      s.update(r);
    }
  }
  checkCompatibility(t, s) {
    const i = t.attributes, r = s.attributeData;
    for (const n in r)
      if (!i[n])
        throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`);
  }
  getSignature(t, s) {
    const i = t.attributes, r = s.attributeData, n = ["g", t.id];
    for (const o in i)
      r[o] && n.push(o, r[o].location);
    return n.join("-");
  }
  initGeometryVao(t, s, i = !0) {
    const r = this.gl, n = this.CONTEXT_UID, o = this.renderer.buffer, a = s.program;
    a.glPrograms[n] || this.renderer.shader.generateProgram(s), this.checkCompatibility(t, a);
    const h = this.getSignature(t, a), l = t.glVertexArrayObjects[this.CONTEXT_UID];
    let c = l[h];
    if (c)
      return l[a.id] = c, c;
    const u = t.buffers, d = t.attributes, f = {}, p = {};
    for (const _ in u)
      f[_] = 0, p[_] = 0;
    for (const _ in d)
      !d[_].size && a.attributeData[_] ? d[_].size = a.attributeData[_].size : d[_].size || console.warn(`PIXI Geometry attribute '${_}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[_].buffer] += d[_].size * mi[d[_].type];
    for (const _ in d) {
      const m = d[_], v = m.size;
      m.stride === void 0 && (f[m.buffer] === v * mi[m.type] ? m.stride = 0 : m.stride = f[m.buffer]), m.start === void 0 && (m.start = p[m.buffer], p[m.buffer] += v * mi[m.type]);
    }
    c = r.createVertexArray(), r.bindVertexArray(c);
    for (let _ = 0; _ < u.length; _++) {
      const m = u[_];
      o.bind(m), i && m._glBuffers[n].refCount++;
    }
    return this.activateVao(t, a), l[a.id] = c, l[h] = c, r.bindVertexArray(null), o.unbind(jt.ARRAY_BUFFER), c;
  }
  disposeGeometry(t, s) {
    var a;
    if (!this.managedGeometries[t.id])
      return;
    delete this.managedGeometries[t.id];
    const i = t.glVertexArrayObjects[this.CONTEXT_UID], r = this.gl, n = t.buffers, o = (a = this.renderer) == null ? void 0 : a.buffer;
    if (t.disposeRunner.remove(this), !!i) {
      if (o)
        for (let h = 0; h < n.length; h++) {
          const l = n[h]._glBuffers[this.CONTEXT_UID];
          l && (l.refCount--, l.refCount === 0 && !s && o.dispose(n[h], s));
        }
      if (!s) {
        for (const h in i)
          if (h[0] === "g") {
            const l = i[h];
            this._activeVao === l && this.unbind(), r.deleteVertexArray(l);
          }
      }
      delete t.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(t) {
    const s = Object.keys(this.managedGeometries);
    for (let i = 0; i < s.length; i++)
      this.disposeGeometry(this.managedGeometries[s[i]], t);
  }
  activateVao(t, s) {
    const i = this.gl, r = this.CONTEXT_UID, n = this.renderer.buffer, o = t.buffers, a = t.attributes;
    t.indexBuffer && n.bind(t.indexBuffer);
    let h = null;
    for (const l in a) {
      const c = a[l], u = o[c.buffer], d = u._glBuffers[r];
      if (s.attributeData[l]) {
        h !== d && (n.bind(u), h = d);
        const f = s.attributeData[l].location;
        if (i.enableVertexAttribArray(f), i.vertexAttribPointer(f, c.size, c.type || i.FLOAT, c.normalized, c.stride, c.start), c.instance)
          if (this.hasInstance)
            i.vertexAttribDivisor(f, c.divisor);
          else
            throw new Error("geometry error, GPU Instancing is not supported on this device");
      }
    }
  }
  draw(t, s, i, r) {
    const { gl: n } = this, o = this._activeGeometry;
    if (o.indexBuffer) {
      const a = o.indexBuffer.data.BYTES_PER_ELEMENT, h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
      a === 2 || a === 4 && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, s || o.indexBuffer.data.length, h, (i || 0) * a, r || 1) : n.drawElements(t, s || o.indexBuffer.data.length, h, (i || 0) * a) : console.warn("unsupported index buffer type: uint32");
    } else
      o.instanced ? n.drawArraysInstanced(t, i, s || o.getSize(), r || 1) : n.drawArrays(t, i, s || o.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
qn.extension = {
  type: P.RendererSystem,
  name: "geometry"
};
O.add(qn);
const Wr = new tt();
class Kn {
  constructor(t, s) {
    this._texture = t, this.mapCoord = new tt(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof s > "u" ? 0.5 : s, this.isSimple = !1;
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture = t, this._textureID = -1;
  }
  multiplyUvs(t, s) {
    s === void 0 && (s = t);
    const i = this.mapCoord;
    for (let r = 0; r < t.length; r += 2) {
      const n = t[r], o = t[r + 1];
      s[r] = n * i.a + o * i.c + i.tx, s[r + 1] = n * i.b + o * i.d + i.ty;
    }
    return s;
  }
  update(t) {
    const s = this._texture;
    if (!s || !s.valid || !t && this._textureID === s._updateID)
      return !1;
    this._textureID = s._updateID, this._updateID++;
    const i = s._uvs;
    this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
    const r = s.orig, n = s.trim;
    n && (Wr.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Wr));
    const o = s.baseTexture, a = this.uClampFrame, h = this.clampMargin / o.resolution, l = this.clampOffset;
    return a[0] = (s._frame.x + h + l) / o.width, a[1] = (s._frame.y + h + l) / o.height, a[2] = (s._frame.x + s._frame.width - h + l) / o.width, a[3] = (s._frame.y + s._frame.height - h + l) / o.height, this.uClampOffset[0] = l / o.realWidth, this.uClampOffset[1] = l / o.realHeight, this.isSimple = s._frame.width === o.width && s._frame.height === o.height && s.rotate === 0, !0;
  }
}
var pu = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`, mu = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class gu extends gt {
  constructor(t, s, i) {
    let r = null;
    typeof t != "string" && s === void 0 && i === void 0 && (r = t, t = void 0, s = void 0, i = void 0), super(t || mu, s || pu, i), this.maskSprite = r, this.maskMatrix = new tt();
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(t) {
    this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1);
  }
  apply(t, s, i, r) {
    const n = this._maskSprite, o = n._texture;
    o.valid && (o.uvMatrix || (o.uvMatrix = new Kn(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, s, i, r));
  }
}
class _u {
  constructor(t = null) {
    this.type = ct.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = gt.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null;
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(t) {
    t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null;
  }
  reset() {
    this.pooled && (this.maskObject = null, this.type = ct.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null;
  }
  copyCountersOrReset(t) {
    t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
  }
}
class Zn {
  constructor(t) {
    this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
  }
  setMaskStack(t) {
    this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
  }
  push(t, s) {
    let i = s;
    if (!i.isMaskData) {
      const n = this.maskDataPool.pop() || new _u();
      n.pooled = !0, n.maskObject = s, i = n;
    }
    const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    if (i.copyCountersOrReset(r), i._colorMask = r ? r._colorMask : 15, i.autoDetect && this.detect(i), i._target = t, i.type !== ct.SPRITE && this.maskStack.push(i), i.enabled)
      switch (i.type) {
        case ct.SCISSOR:
          this.renderer.scissor.push(i);
          break;
        case ct.STENCIL:
          this.renderer.stencil.push(i);
          break;
        case ct.SPRITE:
          i.copyCountersOrReset(null), this.pushSpriteMask(i);
          break;
        case ct.COLOR:
          this.pushColorMask(i);
          break;
      }
    i.type === ct.SPRITE && this.maskStack.push(i);
  }
  pop(t) {
    const s = this.maskStack.pop();
    if (!(!s || s._target !== t)) {
      if (s.enabled)
        switch (s.type) {
          case ct.SCISSOR:
            this.renderer.scissor.pop(s);
            break;
          case ct.STENCIL:
            this.renderer.stencil.pop(s.maskObject);
            break;
          case ct.SPRITE:
            this.popSpriteMask(s);
            break;
          case ct.COLOR:
            this.popColorMask(s);
            break;
        }
      if (s.reset(), s.pooled && this.maskDataPool.push(s), this.maskStack.length !== 0) {
        const i = this.maskStack[this.maskStack.length - 1];
        i.type === ct.SPRITE && i._filters && (i._filters[0].maskSprite = i.maskObject);
      }
    }
  }
  detect(t) {
    const s = t.maskObject;
    s ? s.isSprite ? t.type = ct.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = ct.SCISSOR : t.type = ct.STENCIL : t.type = ct.COLOR;
  }
  pushSpriteMask(t) {
    const { maskObject: s } = t, i = t._target;
    let r = t._filters;
    r || (r = this.alphaMaskPool[this.alphaMaskIndex], r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new gu()]));
    const n = this.renderer, o = n.renderTexture;
    let a, h;
    if (o.current) {
      const c = o.current;
      a = t.resolution || c.resolution, h = t.multisample ?? c.multisample;
    } else
      a = t.resolution || n.resolution, h = t.multisample ?? n.multisample;
    r[0].resolution = a, r[0].multisample = h, r[0].maskSprite = s;
    const l = i.filterArea;
    i.filterArea = s.getBounds(!0), n.filter.push(i, r), i.filterArea = l, t._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(t) {
    this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
  }
  pushColorMask(t) {
    const s = t._colorMask, i = t._colorMask = s & t.colorMask;
    i !== s && this.renderer.gl.colorMask((i & 1) !== 0, (i & 2) !== 0, (i & 4) !== 0, (i & 8) !== 0);
  }
  popColorMask(t) {
    const s = t._colorMask, i = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    i !== s && this.renderer.gl.colorMask((i & 1) !== 0, (i & 2) !== 0, (i & 4) !== 0, (i & 8) !== 0);
  }
  destroy() {
    this.renderer = null;
  }
}
Zn.extension = {
  type: P.RendererSystem,
  name: "mask"
};
O.add(Zn);
class Jn {
  constructor(t) {
    this.renderer = t, this.maskStack = [], this.glConst = 0;
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(t) {
    const { gl: s } = this.renderer, i = this.getStackLength();
    this.maskStack = t;
    const r = this.getStackLength();
    r !== i && (r === 0 ? s.disable(this.glConst) : (s.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {
  }
  destroy() {
    this.renderer = null, this.maskStack = null;
  }
}
const $r = new tt(), Yr = [], Rs = class extends Jn {
  constructor(e) {
    super(e), this.glConst = M.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const e = this.maskStack[this.maskStack.length - 1];
    return e ? e._scissorCounter : 0;
  }
  calcScissorRect(e) {
    if (e._scissorRectLocal)
      return;
    const t = e._scissorRect, { maskObject: s } = e, { renderer: i } = this, r = i.renderTexture, n = s.getBounds(!0, Yr.pop() ?? new V());
    this.roundFrameToPixels(n, r.current ? r.current.resolution : i.resolution, r.sourceFrame, r.destinationFrame, i.projection.transform), t && n.fit(t), e._scissorRectLocal = n;
  }
  static isMatrixRotated(e) {
    if (!e)
      return !1;
    const { a: t, b: s, c: i, d: r } = e;
    return (Math.abs(s) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4);
  }
  testScissor(e) {
    const { maskObject: t } = e;
    if (!t.isFastRect || !t.isFastRect() || Rs.isMatrixRotated(t.worldTransform) || Rs.isMatrixRotated(this.renderer.projection.transform))
      return !1;
    this.calcScissorRect(e);
    const s = e._scissorRectLocal;
    return s.width > 0 && s.height > 0;
  }
  roundFrameToPixels(e, t, s, i, r) {
    Rs.isMatrixRotated(r) || (r = r ? $r.copyFrom(r) : $r.identity(), r.translate(-s.x, -s.y).scale(i.width / s.width, i.height / s.height).translate(i.x, i.y), this.renderer.filter.transformAABB(r, e), e.fit(i), e.x = Math.round(e.x * t), e.y = Math.round(e.y * t), e.width = Math.round(e.width * t), e.height = Math.round(e.height * t));
  }
  push(e) {
    e._scissorRectLocal || this.calcScissorRect(e);
    const { gl: t } = this.renderer;
    e._scissorRect || t.enable(t.SCISSOR_TEST), e._scissorCounter++, e._scissorRect = e._scissorRectLocal, this._useCurrent();
  }
  pop(e) {
    const { gl: t } = this.renderer;
    e && Yr.push(e._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
  }
  _useCurrent() {
    const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let t;
    this.renderer.renderTexture.current ? t = e.y : t = this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, t, e.width, e.height);
  }
};
let Qn = Rs;
Qn.extension = {
  type: P.RendererSystem,
  name: "scissor"
};
O.add(Qn);
class to extends Jn {
  constructor(t) {
    super(t), this.glConst = M.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    return t ? t._stencilCounter : 0;
  }
  push(t) {
    const s = t.maskObject, { gl: i } = this.renderer, r = t._stencilCounter;
    r === 0 && (this.renderer.framebuffer.forceStencil(), i.clearStencil(0), i.clear(i.STENCIL_BUFFER_BIT), i.enable(i.STENCIL_TEST)), t._stencilCounter++;
    const n = t._colorMask;
    n !== 0 && (t._colorMask = 0, i.colorMask(!1, !1, !1, !1)), i.stencilFunc(i.EQUAL, r, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.INCR), s.renderable = !0, s.render(this.renderer), this.renderer.batch.flush(), s.renderable = !1, n !== 0 && (t._colorMask = n, i.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)), this._useCurrent();
  }
  pop(t) {
    const s = this.renderer.gl;
    if (this.getStackLength() === 0)
      s.disable(s.STENCIL_TEST);
    else {
      const i = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null, r = i ? i._colorMask : 15;
      r !== 0 && (i._colorMask = 0, s.colorMask(!1, !1, !1, !1)), s.stencilOp(s.KEEP, s.KEEP, s.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, r !== 0 && (i._colorMask = r, s.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)), this._useCurrent();
    }
  }
  _useCurrent() {
    const t = this.renderer.gl;
    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
  }
}
to.extension = {
  type: P.RendererSystem,
  name: "stencil"
};
O.add(to);
class eo {
  constructor(t) {
    this.renderer = t, this.plugins = {}, Object.defineProperties(this.plugins, {
      extract: {
        enumerable: !1,
        get() {
          return Y("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), t.extract;
        }
      },
      prepare: {
        enumerable: !1,
        get() {
          return Y("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), t.prepare;
        }
      },
      interaction: {
        enumerable: !1,
        get() {
          return Y("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), t.events;
        }
      }
    });
  }
  init(t) {
    for (const s in t)
      this.plugins[s] = new t[s](this.renderer);
  }
  destroy() {
    for (const t in this.plugins)
      this.plugins[t].destroy(), this.plugins[t] = null;
  }
}
eo.extension = {
  type: [
    P.RendererSystem,
    P.CanvasRendererSystem
  ],
  name: "_plugin"
};
O.add(eo);
class so {
  constructor(t) {
    this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new tt(), this.transform = null;
  }
  update(t, s, i, r) {
    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = s || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
    const n = this.renderer;
    n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
  }
  calculateProjection(t, s, i, r) {
    const n = this.projectionMatrix, o = r ? -1 : 1;
    n.identity(), n.a = 1 / s.width * 2, n.d = o * (1 / s.height * 2), n.tx = -1 - s.x * n.a, n.ty = -o - s.y * n.d;
  }
  setTransform(t) {
  }
  destroy() {
    this.renderer = null;
  }
}
so.extension = {
  type: P.RendererSystem,
  name: "projection"
};
O.add(so);
const xu = new cr();
class io {
  constructor(t) {
    this.renderer = t, this._tempMatrix = new tt();
  }
  generateTexture(t, s) {
    const { region: i, ...r } = s || {}, n = i || t.getLocalBounds(null, !0);
    n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1);
    const o = ae.create({
      width: n.width,
      height: n.height,
      ...r
    });
    this._tempMatrix.tx = -n.x, this._tempMatrix.ty = -n.y;
    const a = t.transform;
    return t.transform = xu, this.renderer.render(t, {
      renderTexture: o,
      transform: this._tempMatrix,
      skipUpdateTransform: !!t.parent,
      blit: !0
    }), t.transform = a, o;
  }
  destroy() {
  }
}
io.extension = {
  type: [
    P.RendererSystem,
    P.CanvasRendererSystem
  ],
  name: "textureGenerator"
};
O.add(io);
const he = new V(), Ve = new V();
class ro {
  constructor(t) {
    this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new V(), this.destinationFrame = new V(), this.viewportFrame = new V();
  }
  bind(t = null, s, i) {
    const r = this.renderer;
    this.current = t;
    let n, o, a;
    t ? (n = t.baseTexture, a = n.resolution, s || (he.width = t.frame.width, he.height = t.frame.height, s = he), i || (Ve.x = t.frame.x, Ve.y = t.frame.y, Ve.width = s.width, Ve.height = s.height, i = Ve), o = n.framebuffer) : (a = r.resolution, s || (he.width = r._view.screen.width, he.height = r._view.screen.height, s = he), i || (i = he, i.width = s.width, i.height = s.height));
    const h = this.viewportFrame;
    h.x = i.x * a, h.y = i.y * a, h.width = i.width * a, h.height = i.height * a, t || (h.y = r.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(o, h), this.renderer.projection.update(i, s, a, !o), t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(s), this.destinationFrame.copyFrom(i);
  }
  clear(t, s) {
    this.current ? t = t || this.current.baseTexture.clearColor : t = t || this.renderer.background.colorRgba;
    const i = this.destinationFrame, r = this.current ? this.current.baseTexture : this.renderer._view.screen, n = i.width !== r.width || i.height !== r.height;
    if (n) {
      let { x: o, y: a, width: h, height: l } = this.viewportFrame;
      o = Math.round(o), a = Math.round(a), h = Math.round(h), l = Math.round(l), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(o, a, h, l);
    }
    this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], s), n && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
ro.extension = {
  type: P.RendererSystem,
  name: "renderTexture"
};
O.add(ro);
class vu {
  constructor(t, s) {
    this.program = t, this.uniformData = s, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
  }
  destroy() {
    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
  }
}
function yu(e, t) {
  const s = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const n = t.getActiveAttrib(e, r);
    if (n.name.startsWith("gl_"))
      continue;
    const o = kn(t, n.type), a = {
      type: o,
      name: n.name,
      size: On(o),
      location: t.getAttribLocation(e, n.name)
    };
    s[n.name] = a;
  }
  return s;
}
function bu(e, t) {
  const s = {}, i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
  for (let r = 0; r < i; r++) {
    const n = t.getActiveUniform(e, r), o = n.name.replace(/\[.*?\]$/, ""), a = !!n.name.match(/\[.*?\]$/), h = kn(t, n.type);
    s[o] = {
      name: o,
      index: r,
      type: h,
      size: n.size,
      isArray: a,
      value: Ln(h, n.size)
    };
  }
  return s;
}
function Tu(e, t) {
  var h;
  const s = Gr(e, e.VERTEX_SHADER, t.vertexSrc), i = Gr(e, e.FRAGMENT_SHADER, t.fragmentSrc), r = e.createProgram();
  e.attachShader(r, s), e.attachShader(r, i);
  const n = (h = t.extra) == null ? void 0 : h.transformFeedbackVaryings;
  if (n && (typeof e.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : e.transformFeedbackVaryings(r, n.names, n.bufferMode === "separate" ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS)), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS) || Zc(e, r, s, i), t.attributeData = yu(r, e), t.uniformData = bu(r, e), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
    const l = Object.keys(t.attributeData);
    l.sort((c, u) => c > u ? 1 : -1);
    for (let c = 0; c < l.length; c++)
      t.attributeData[l[c]].location = c, e.bindAttribLocation(r, c, l[c]);
    e.linkProgram(r);
  }
  e.deleteShader(s), e.deleteShader(i);
  const o = {};
  for (const l in t.uniformData) {
    const c = t.uniformData[l];
    o[l] = {
      location: e.getUniformLocation(r, l),
      value: Ln(c.type, c.size)
    };
  }
  return new vu(r, o);
}
function Eu(e, t, s, i, r) {
  s.buffer.update(r);
}
const wu = {
  float: `
        data[offset] = v;
    `,
  vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
  vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
  vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
  mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
  mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
  mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
}, no = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  int: 4,
  ivec2: 8,
  ivec3: 12,
  ivec4: 16,
  uint: 4,
  uvec2: 8,
  uvec3: 12,
  uvec4: 16,
  bool: 4,
  bvec2: 8,
  bvec3: 12,
  bvec4: 16,
  mat2: 16 * 2,
  mat3: 16 * 3,
  mat4: 16 * 4
};
function Au(e) {
  const t = e.map((n) => ({
    data: n,
    offset: 0,
    dataLen: 0,
    dirty: 0
  }));
  let s = 0, i = 0, r = 0;
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (s = no[o.data.type], o.data.size > 1 && (s = Math.max(s, 16) * o.data.size), o.dataLen = s, i % s !== 0 && i < 16) {
      const a = i % s % 16;
      i += a, r += a;
    }
    i + s > 16 ? (r = Math.ceil(r / 16) * 16, o.offset = r, r += s, i = s) : (o.offset = r, i += s, r += s);
  }
  return r = Math.ceil(r / 16) * 16, { uboElements: t, size: r };
}
function Su(e, t) {
  const s = [];
  for (const i in e)
    t[i] && s.push(t[i]);
  return s.sort((i, r) => i.index - r.index), s;
}
function Cu(e, t) {
  if (!e.autoManage)
    return { size: 0, syncFunc: Eu };
  const s = Su(e.uniforms, t), { uboElements: i, size: r } = Au(s), n = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let o = 0; o < i.length; o++) {
    const a = i[o], h = e.uniforms[a.data.name], l = a.data.name;
    let c = !1;
    for (let u = 0; u < Le.length; u++) {
      const d = Le[u];
      if (d.codeUbo && d.test(a.data, h)) {
        n.push(`offset = ${a.offset / 4};`, Le[u].codeUbo(a.data.name, h)), c = !0;
        break;
      }
    }
    if (!c)
      if (a.data.size > 1) {
        const u = On(a.data.type), d = Math.max(no[a.data.type] / 16, 1), f = u / d, p = (4 - f % 4) % 4;
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};

                t = 0;

                for(var i=0; i < ${a.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
      } else {
        const u = wu[a.data.type];
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};
                ${u};
                `);
      }
  }
  return n.push(`
       renderer.buffer.update(buffer);
    `), {
    size: r,
    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join(`
`))
  };
}
let Iu = 0;
const ys = { textureCount: 0, uboCount: 0 };
class oo {
  constructor(t) {
    this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = Iu++;
  }
  systemCheck() {
    if (!Qc())
      throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
  }
  contextChange(t) {
    this.gl = t, this.reset();
  }
  bind(t, s) {
    t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms;
    const i = t.program, r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
    return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), s || (ys.textureCount = 0, ys.uboCount = 0, this.syncUniformGroup(t.uniformGroup, ys)), r;
  }
  setUniforms(t) {
    const s = this.shader.program, i = s.glPrograms[this.renderer.CONTEXT_UID];
    s.syncUniforms(i.uniformData, t, this.renderer);
  }
  syncUniformGroup(t, s) {
    const i = this.getGlProgram();
    (!t.static || t.dirtyId !== i.uniformDirtyGroups[t.id]) && (i.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, i, s));
  }
  syncUniforms(t, s, i) {
    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(s.uniformData, t.uniforms, this.renderer, i);
  }
  createSyncGroups(t) {
    const s = this.getSignature(t, this.shader.program.uniformData, "u");
    return this.cache[s] || (this.cache[s] = Yc(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[s], t.syncUniforms[this.shader.program.id];
  }
  syncUniformBufferGroup(t, s) {
    const i = this.getGlProgram();
    if (!t.static || t.dirtyId !== 0 || !i.uniformGroups[t.id]) {
      t.dirtyId = 0;
      const r = i.uniformGroups[t.id] || this.createSyncBufferGroup(t, i, s);
      t.buffer.update(), r(i.uniformData, t.uniforms, this.renderer, ys, t.buffer);
    }
    this.renderer.buffer.bindBufferBase(t.buffer, i.uniformBufferBindings[s]);
  }
  createSyncBufferGroup(t, s, i) {
    const { gl: r } = this.renderer;
    this.renderer.buffer.bind(t.buffer);
    const n = this.gl.getUniformBlockIndex(s.program, i);
    s.uniformBufferBindings[i] = this.shader.uniformBindCount, r.uniformBlockBinding(s.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
    const o = this.getSignature(t, this.shader.program.uniformData, "ubo");
    let a = this._uboCache[o];
    if (a || (a = this._uboCache[o] = Cu(t, this.shader.program.uniformData)), t.autoManage) {
      const h = new Float32Array(a.size / 4);
      t.buffer.update(h);
    }
    return s.uniformGroups[t.id] = a.syncFunc, s.uniformGroups[t.id];
  }
  getSignature(t, s, i) {
    const r = t.uniforms, n = [`${i}-`];
    for (const o in r)
      n.push(o), s[o] && n.push(s[o].type);
    return n.join("-");
  }
  getGlProgram() {
    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
  }
  generateProgram(t) {
    const s = this.gl, i = t.program, r = Tu(s, i);
    return i.glPrograms[this.renderer.CONTEXT_UID] = r, r;
  }
  reset() {
    this.program = null, this.shader = null;
  }
  disposeShader(t) {
    this.shader === t && (this.shader = null);
  }
  destroy() {
    this.renderer = null, this.destroyed = !0;
  }
}
oo.extension = {
  type: P.RendererSystem,
  name: "shader"
};
O.add(oo);
class ao {
  constructor(t) {
    this.renderer = t;
  }
  run(t) {
    const s = this.renderer;
    s.emitWithCustomOptions(s.runners.init, t), t.hello && console.log(`PixiJS 7.1.4 - ${s.rendererLogId} - https://pixijs.com`), s.resize(this.renderer.screen.width, this.renderer.screen.height);
  }
  destroy() {
  }
}
ao.extension = {
  type: [
    P.RendererSystem,
    P.CanvasRendererSystem
  ],
  name: "startup"
};
O.add(ao);
function Ru(e, t = []) {
  return t[G.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.ADD] = [e.ONE, e.ONE], t[G.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.NONE] = [0, 0], t[G.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], t[G.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SRC_IN] = [e.DST_ALPHA, e.ZERO], t[G.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO], t[G.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[G.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE], t[G.DST_IN] = [e.ZERO, e.SRC_ALPHA], t[G.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], t[G.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA], t[G.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[G.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD], t;
}
const Pu = 0, Mu = 1, Bu = 2, Du = 3, Fu = 4, Lu = 5, Vi = class {
  constructor() {
    this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = G.NONE, this._blendEq = !1, this.map = [], this.map[Pu] = this.setBlend, this.map[Mu] = this.setOffset, this.map[Bu] = this.setCullFace, this.map[Du] = this.setDepthTest, this.map[Fu] = this.setFrontFace, this.map[Lu] = this.setDepthMask, this.checks = [], this.defaultState = new te(), this.defaultState.blend = !0;
  }
  contextChange(e) {
    this.gl = e, this.blendModes = Ru(e), this.set(this.defaultState), this.reset();
  }
  set(e) {
    if (e = e || this.defaultState, this.stateId !== e.data) {
      let t = this.stateId ^ e.data, s = 0;
      for (; t; )
        t & 1 && this.map[s].call(this, !!(e.data & 1 << s)), t = t >> 1, s++;
      this.stateId = e.data;
    }
    for (let t = 0; t < this.checks.length; t++)
      this.checks[t](this, e);
  }
  forceState(e) {
    e = e || this.defaultState;
    for (let t = 0; t < this.map.length; t++)
      this.map[t].call(this, !!(e.data & 1 << t));
    for (let t = 0; t < this.checks.length; t++)
      this.checks[t](this, e);
    this.stateId = e.data;
  }
  setBlend(e) {
    this.updateCheck(Vi.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(e) {
    this.updateCheck(Vi.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  setDepthTest(e) {
    this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  setDepthMask(e) {
    this.gl.depthMask(e);
  }
  setCullFace(e) {
    this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  setFrontFace(e) {
    this.gl.frontFace(this.gl[e ? "CW" : "CCW"]);
  }
  setBlendMode(e) {
    if (e === this.blendMode)
      return;
    this.blendMode = e;
    const t = this.blendModes[e], s = this.gl;
    t.length === 2 ? s.blendFunc(t[0], t[1]) : s.blendFuncSeparate(t[0], t[1], t[2], t[3]), t.length === 6 ? (this._blendEq = !0, s.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, s.blendEquationSeparate(s.FUNC_ADD, s.FUNC_ADD));
  }
  setPolygonOffset(e, t) {
    this.gl.polygonOffset(e, t);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0);
  }
  updateCheck(e, t) {
    const s = this.checks.indexOf(e);
    t && s === -1 ? this.checks.push(e) : !t && s !== -1 && this.checks.splice(s, 1);
  }
  static checkBlendMode(e, t) {
    e.setBlendMode(t.blendMode);
  }
  static checkPolygonOffset(e, t) {
    e.setPolygonOffset(1, t.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
let ho = Vi;
ho.extension = {
  type: P.RendererSystem,
  name: "state"
};
O.add(ho);
class Nu extends ge {
  constructor() {
    super(...arguments), this.runners = {}, this._systemsHash = {};
  }
  setup(t) {
    this.addRunners(...t.runners);
    const s = (t.priority ?? []).filter((r) => t.systems[r]), i = [
      ...s,
      ...Object.keys(t.systems).filter((r) => !s.includes(r))
    ];
    for (const r of i)
      this.addSystem(t.systems[r], r);
  }
  addRunners(...t) {
    t.forEach((s) => {
      this.runners[s] = new Nt(s);
    });
  }
  addSystem(t, s) {
    const i = new t(this);
    if (this[s])
      throw new Error(`Whoops! The name "${s}" is already in use`);
    this[s] = i, this._systemsHash[s] = i;
    for (const r in this.runners)
      this.runners[r].add(i);
    return this;
  }
  emitWithCustomOptions(t, s) {
    const i = Object.keys(this._systemsHash);
    t.items.forEach((r) => {
      const n = i.find((o) => this._systemsHash[o] === r);
      r[t.name](s[n]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((t) => {
      t.destroy();
    }), this._systemsHash = {};
  }
}
const Ps = class {
  constructor(e) {
    this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = Ps.defaultMaxIdle, this.checkCountMax = Ps.defaultCheckCountMax, this.mode = Ps.defaultMode;
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== nr.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
  }
  run() {
    const e = this.renderer.texture, t = e.managedTextures;
    let s = !1;
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      !r.framebuffer && this.count - r.touched > this.maxIdle && (e.destroyTexture(r, !0), t[i] = null, s = !0);
    }
    if (s) {
      let i = 0;
      for (let r = 0; r < t.length; r++)
        t[r] !== null && (t[i++] = t[r]);
      t.length = i;
    }
  }
  unload(e) {
    const t = this.renderer.texture, s = e._texture;
    s && !s.framebuffer && t.destroyTexture(s);
    for (let i = e.children.length - 1; i >= 0; i--)
      this.unload(e.children[i]);
  }
  destroy() {
    this.renderer = null;
  }
};
let Dt = Ps;
Dt.defaultMode = nr.AUTO;
Dt.defaultMaxIdle = 60 * 60;
Dt.defaultCheckCountMax = 60 * 10;
Dt.extension = {
  type: P.RendererSystem,
  name: "textureGC"
};
O.add(Dt);
class gi {
  constructor(t) {
    this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = k.UNSIGNED_BYTE, this.internalFormat = C.RGBA, this.samplerType = 0;
  }
}
function Ou(e) {
  let t;
  return "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext ? t = {
    [k.UNSIGNED_BYTE]: {
      [C.RGBA]: e.RGBA8,
      [C.RGB]: e.RGB8,
      [C.RG]: e.RG8,
      [C.RED]: e.R8,
      [C.RGBA_INTEGER]: e.RGBA8UI,
      [C.RGB_INTEGER]: e.RGB8UI,
      [C.RG_INTEGER]: e.RG8UI,
      [C.RED_INTEGER]: e.R8UI,
      [C.ALPHA]: e.ALPHA,
      [C.LUMINANCE]: e.LUMINANCE,
      [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA
    },
    [k.BYTE]: {
      [C.RGBA]: e.RGBA8_SNORM,
      [C.RGB]: e.RGB8_SNORM,
      [C.RG]: e.RG8_SNORM,
      [C.RED]: e.R8_SNORM,
      [C.RGBA_INTEGER]: e.RGBA8I,
      [C.RGB_INTEGER]: e.RGB8I,
      [C.RG_INTEGER]: e.RG8I,
      [C.RED_INTEGER]: e.R8I
    },
    [k.UNSIGNED_SHORT]: {
      [C.RGBA_INTEGER]: e.RGBA16UI,
      [C.RGB_INTEGER]: e.RGB16UI,
      [C.RG_INTEGER]: e.RG16UI,
      [C.RED_INTEGER]: e.R16UI,
      [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT16
    },
    [k.SHORT]: {
      [C.RGBA_INTEGER]: e.RGBA16I,
      [C.RGB_INTEGER]: e.RGB16I,
      [C.RG_INTEGER]: e.RG16I,
      [C.RED_INTEGER]: e.R16I
    },
    [k.UNSIGNED_INT]: {
      [C.RGBA_INTEGER]: e.RGBA32UI,
      [C.RGB_INTEGER]: e.RGB32UI,
      [C.RG_INTEGER]: e.RG32UI,
      [C.RED_INTEGER]: e.R32UI,
      [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT24
    },
    [k.INT]: {
      [C.RGBA_INTEGER]: e.RGBA32I,
      [C.RGB_INTEGER]: e.RGB32I,
      [C.RG_INTEGER]: e.RG32I,
      [C.RED_INTEGER]: e.R32I
    },
    [k.FLOAT]: {
      [C.RGBA]: e.RGBA32F,
      [C.RGB]: e.RGB32F,
      [C.RG]: e.RG32F,
      [C.RED]: e.R32F,
      [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT32F
    },
    [k.HALF_FLOAT]: {
      [C.RGBA]: e.RGBA16F,
      [C.RGB]: e.RGB16F,
      [C.RG]: e.RG16F,
      [C.RED]: e.R16F
    },
    [k.UNSIGNED_SHORT_5_6_5]: {
      [C.RGB]: e.RGB565
    },
    [k.UNSIGNED_SHORT_4_4_4_4]: {
      [C.RGBA]: e.RGBA4
    },
    [k.UNSIGNED_SHORT_5_5_5_1]: {
      [C.RGBA]: e.RGB5_A1
    },
    [k.UNSIGNED_INT_2_10_10_10_REV]: {
      [C.RGBA]: e.RGB10_A2,
      [C.RGBA_INTEGER]: e.RGB10_A2UI
    },
    [k.UNSIGNED_INT_10F_11F_11F_REV]: {
      [C.RGB]: e.R11F_G11F_B10F
    },
    [k.UNSIGNED_INT_5_9_9_9_REV]: {
      [C.RGB]: e.RGB9_E5
    },
    [k.UNSIGNED_INT_24_8]: {
      [C.DEPTH_STENCIL]: e.DEPTH24_STENCIL8
    },
    [k.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
      [C.DEPTH_STENCIL]: e.DEPTH32F_STENCIL8
    }
  } : t = {
    [k.UNSIGNED_BYTE]: {
      [C.RGBA]: e.RGBA,
      [C.RGB]: e.RGB,
      [C.ALPHA]: e.ALPHA,
      [C.LUMINANCE]: e.LUMINANCE,
      [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA
    },
    [k.UNSIGNED_SHORT_5_6_5]: {
      [C.RGB]: e.RGB
    },
    [k.UNSIGNED_SHORT_4_4_4_4]: {
      [C.RGBA]: e.RGBA
    },
    [k.UNSIGNED_SHORT_5_5_5_1]: {
      [C.RGBA]: e.RGBA
    }
  }, t;
}
class lo {
  constructor(t) {
    this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new X(), this.hasIntegerTextures = !1;
  }
  contextChange() {
    const t = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = Ou(t);
    const s = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = s;
    for (let r = 0; r < s; r++)
      this.boundTextures[r] = null;
    this.emptyTextures = {};
    const i = new gi(t.createTexture());
    t.bindTexture(t.TEXTURE_2D, i.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = i, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new gi(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
    for (let r = 0; r < 6; r++)
      t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
    for (let r = 0; r < this.boundTextures.length; r++)
      this.bind(null, r);
  }
  bind(t, s = 0) {
    const { gl: i } = this;
    if (t = t == null ? void 0 : t.castToBaseTexture(), t != null && t.valid && !t.parentTextureArray) {
      t.touched = this.renderer.textureGC.count;
      const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
      this.boundTextures[s] !== t && (this.currentLocation !== s && (this.currentLocation = s, i.activeTexture(i.TEXTURE0 + s)), i.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId ? (this.currentLocation !== s && (this.currentLocation = s, i.activeTexture(i.TEXTURE0 + s)), this.updateTexture(t)) : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[s] = t;
    } else
      this.currentLocation !== s && (this.currentLocation = s, i.activeTexture(i.TEXTURE0 + s)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[s] = null;
  }
  reset() {
    this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
    for (let t = 0; t < this.boundTextures.length; t++)
      this.boundTextures[t] = this.unknownTexture;
  }
  unbind(t) {
    const { gl: s, boundTextures: i } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = !1;
      for (let r = 0; r < i.length; r++)
        i[r] === this.unknownTexture && this.bind(null, r);
    }
    for (let r = 0; r < i.length; r++)
      i[r] === t && (this.currentLocation !== r && (s.activeTexture(s.TEXTURE0 + r), this.currentLocation = r), s.bindTexture(t.target, this.emptyTextures[t.target].texture), i[r] = null);
  }
  ensureSamplerType(t) {
    const { boundTextures: s, hasIntegerTextures: i, CONTEXT_UID: r } = this;
    if (i)
      for (let n = t - 1; n >= 0; --n) {
        const o = s[n];
        o && o._glTextures[r].samplerType !== Ri.FLOAT && this.renderer.texture.unbind(o);
      }
  }
  initTexture(t) {
    const s = new gi(this.gl.createTexture());
    return s.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = s, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), s;
  }
  initTextureType(t, s) {
    var i;
    s.internalFormat = ((i = this.internalFormats[t.type]) == null ? void 0 : i[t.format]) ?? t.format, this.webGLVersion === 2 && t.type === k.HALF_FLOAT ? s.type = this.gl.HALF_FLOAT : s.type = t.type;
  }
  updateTexture(t) {
    var r;
    const s = t._glTextures[this.CONTEXT_UID];
    if (!s)
      return;
    const i = this.renderer;
    if (this.initTextureType(t, s), (r = t.resource) != null && r.upload(i, t, s))
      s.samplerType !== Ri.FLOAT && (this.hasIntegerTextures = !0);
    else {
      const n = t.realWidth, o = t.realHeight, a = i.gl;
      (s.width !== n || s.height !== o || s.dirtyId < 0) && (s.width = n, s.height = o, a.texImage2D(t.target, 0, s.internalFormat, n, o, 0, t.format, s.type, null));
    }
    t.dirtyStyleId !== s.dirtyStyleId && this.updateTextureStyle(t), s.dirtyId = t.dirtyId;
  }
  destroyTexture(t, s) {
    const { gl: i } = this;
    if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !s)) {
      const r = this.managedTextures.indexOf(t);
      r !== -1 && De(this.managedTextures, r, 1);
    }
  }
  updateTextureStyle(t) {
    var i;
    const s = t._glTextures[this.CONTEXT_UID];
    s && ((t.mipmap === $t.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? s.mipmap = !1 : s.mipmap = t.mipmap >= 1, this.webGLVersion !== 2 && !t.isPowerOfTwo ? s.wrapMode = ie.CLAMP : s.wrapMode = t.wrapMode, (i = t.resource) != null && i.style(this.renderer, t, s) || this.setStyle(t, s), s.dirtyStyleId = t.dirtyStyleId);
  }
  setStyle(t, s) {
    const i = this.gl;
    if (s.mipmap && t.mipmap !== $t.ON_MANUAL && i.generateMipmap(t.target), i.texParameteri(t.target, i.TEXTURE_WRAP_S, s.wrapMode), i.texParameteri(t.target, i.TEXTURE_WRAP_T, s.wrapMode), s.mipmap) {
      i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === Zt.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
      const r = this.renderer.context.extensions.anisotropicFiltering;
      if (r && t.anisotropicLevel > 0 && t.scaleMode === Zt.LINEAR) {
        const n = Math.min(t.anisotropicLevel, i.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        i.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n);
      }
    } else
      i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === Zt.LINEAR ? i.LINEAR : i.NEAREST);
    i.texParameteri(t.target, i.TEXTURE_MAG_FILTER, t.scaleMode === Zt.LINEAR ? i.LINEAR : i.NEAREST);
  }
  destroy() {
    this.renderer = null;
  }
}
lo.extension = {
  type: P.RendererSystem,
  name: "texture"
};
O.add(lo);
class co {
  constructor(t) {
    this.renderer = t;
  }
  contextChange() {
    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(t) {
    const { gl: s, CONTEXT_UID: i } = this, r = t._glTransformFeedbacks[i] || this.createGLTransformFeedback(t);
    s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, r);
  }
  unbind() {
    const { gl: t } = this;
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(t, s) {
    const { gl: i, renderer: r } = this;
    s && r.shader.bind(s), i.beginTransformFeedback(t);
  }
  endTransformFeedback() {
    const { gl: t } = this;
    t.endTransformFeedback();
  }
  createGLTransformFeedback(t) {
    const { gl: s, renderer: i, CONTEXT_UID: r } = this, n = s.createTransformFeedback();
    t._glTransformFeedbacks[r] = n, s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, n);
    for (let o = 0; o < t.buffers.length; o++) {
      const a = t.buffers[o];
      a && (i.buffer.update(a), a._glBuffers[r].refCount++, s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[r].buffer || null));
    }
    return s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n;
  }
  disposeTransformFeedback(t, s) {
    const i = t._glTransformFeedbacks[this.CONTEXT_UID], r = this.gl;
    t.disposeRunner.remove(this);
    const n = this.renderer.buffer;
    if (n)
      for (let o = 0; o < t.buffers.length; o++) {
        const a = t.buffers[o];
        if (!a)
          continue;
        const h = a._glBuffers[this.CONTEXT_UID];
        h && (h.refCount--, h.refCount === 0 && !s && n.dispose(a, s));
      }
    i && (s || r.deleteTransformFeedback(i), delete t._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
co.extension = {
  type: P.RendererSystem,
  name: "transformFeedback"
};
O.add(co);
class uo {
  constructor(t) {
    this.renderer = t;
  }
  init(t) {
    this.screen = new V(0, 0, t.width, t.height), this.element = t.view || M.ADAPTER.createCanvas(), this.resolution = t.resolution || M.RESOLUTION, this.autoDensity = !!t.autoDensity;
  }
  resizeView(t, s) {
    this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(s * this.resolution);
    const i = this.element.width / this.resolution, r = this.element.height / this.resolution;
    this.screen.width = i, this.screen.height = r, this.autoDensity && (this.element.style.width = `${i}px`, this.element.style.height = `${r}px`), this.renderer.emit("resize", i, r), this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(t) {
    var s;
    t && ((s = this.element.parentNode) == null || s.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null;
  }
}
uo.extension = {
  type: [
    P.RendererSystem,
    P.CanvasRendererSystem
  ],
  name: "_view"
};
O.add(uo);
M.PREFER_ENV = ye.WEBGL2;
M.STRICT_TEXTURE_CACHE = !1;
Object.defineProperties(M, {
  WRAP_MODE: {
    get() {
      return X.defaultOptions.wrapMode;
    },
    set(e) {
      Y("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), X.defaultOptions.wrapMode = e;
    }
  },
  SCALE_MODE: {
    get() {
      return X.defaultOptions.scaleMode;
    },
    set(e) {
      Y("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), X.defaultOptions.scaleMode = e;
    }
  },
  MIPMAP_TEXTURES: {
    get() {
      return X.defaultOptions.mipmap;
    },
    set(e) {
      Y("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), X.defaultOptions.mipmap = e;
    }
  },
  ANISOTROPIC_LEVEL: {
    get() {
      return X.defaultOptions.anisotropicLevel;
    },
    set(e) {
      Y("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), X.defaultOptions.anisotropicLevel = e;
    }
  },
  FILTER_RESOLUTION: {
    get() {
      return Y("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), gt.defaultResolution;
    },
    set(e) {
      gt.defaultResolution = e;
    }
  },
  FILTER_MULTISAMPLE: {
    get() {
      return Y("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), gt.defaultMultisample;
    },
    set(e) {
      gt.defaultMultisample = e;
    }
  },
  SPRITE_MAX_TEXTURES: {
    get() {
      return Bt.defaultMaxTextures;
    },
    set(e) {
      Y("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), Bt.defaultMaxTextures = e;
    }
  },
  SPRITE_BATCH_SIZE: {
    get() {
      return Bt.defaultBatchSize;
    },
    set(e) {
      Y("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), Bt.defaultBatchSize = e;
    }
  },
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return Bt.canUploadSameBuffer;
    },
    set(e) {
      Y("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), Bt.canUploadSameBuffer = e;
    }
  },
  GC_MODE: {
    get() {
      return Dt.defaultMode;
    },
    set(e) {
      Y("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), Dt.defaultMode = e;
    }
  },
  GC_MAX_IDLE: {
    get() {
      return Dt.defaultMaxIdle;
    },
    set(e) {
      Y("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), Dt.defaultMaxIdle = e;
    }
  },
  GC_MAX_CHECK_COUNT: {
    get() {
      return Dt.defaultCheckCountMax;
    },
    set(e) {
      Y("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), Dt.defaultCheckCountMax = e;
    }
  },
  PRECISION_VERTEX: {
    get() {
      return Ft.defaultVertexPrecision;
    },
    set(e) {
      Y("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), Ft.defaultVertexPrecision = e;
    }
  },
  PRECISION_FRAGMENT: {
    get() {
      return Ft.defaultFragmentPrecision;
    },
    set(e) {
      Y("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), Ft.defaultFragmentPrecision = e;
    }
  }
});
var Ne = /* @__PURE__ */ ((e) => (e[e.HIGH = 25] = "HIGH", e[e.NORMAL = 0] = "NORMAL", e[e.LOW = -25] = "LOW", e[e.UTILITY = -50] = "UTILITY", e))(Ne || {});
class _i {
  constructor(t, s = null, i = 0, r = !1) {
    this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = s, this.priority = i, this.once = r;
  }
  match(t, s = null) {
    return this.fn === t && this.context === s;
  }
  emit(t) {
    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
    const s = this.next;
    return this.once && this.destroy(!0), this._destroyed && (this.next = null), s;
  }
  connect(t) {
    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
  }
  destroy(t = !1) {
    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const s = this.next;
    return this.next = t ? null : s, this.previous = null, s;
  }
}
const Et = class {
  constructor() {
    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new _i(null, null, 1 / 0), this.deltaMS = 1 / Et.targetFPMS, this.elapsedMS = 1 / Et.targetFPMS, this._tick = (e) => {
      this._requestId = null, this.started && (this.update(e), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
    };
  }
  _requestIfNeeded() {
    this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
  }
  _cancelIfNeeded() {
    this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(e, t, s = Ne.NORMAL) {
    return this._addListener(new _i(e, t, s));
  }
  addOnce(e, t, s = Ne.NORMAL) {
    return this._addListener(new _i(e, t, s, !0));
  }
  _addListener(e) {
    let t = this._head.next, s = this._head;
    if (!t)
      e.connect(s);
    else {
      for (; t; ) {
        if (e.priority > t.priority) {
          e.connect(s);
          break;
        }
        s = t, t = t.next;
      }
      e.previous || e.connect(s);
    }
    return this._startIfPossible(), this;
  }
  remove(e, t) {
    let s = this._head.next;
    for (; s; )
      s.match(e, t) ? s = s.destroy() : s = s.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head)
      return 0;
    let e = 0, t = this._head;
    for (; t = t.next; )
      e++;
    return e;
  }
  start() {
    this.started || (this.started = !0, this._requestIfNeeded());
  }
  stop() {
    this.started && (this.started = !1, this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let e = this._head.next;
      for (; e; )
        e = e.destroy(!0);
      this._head.destroy(), this._head = null;
    }
  }
  update(e = performance.now()) {
    let t;
    if (e > this.lastTime) {
      if (t = this.elapsedMS = e - this.lastTime, t > this._maxElapsedMS && (t = this._maxElapsedMS), t *= this.speed, this._minElapsedMS) {
        const r = e - this._lastFrame | 0;
        if (r < this._minElapsedMS)
          return;
        this._lastFrame = e - r % this._minElapsedMS;
      }
      this.deltaMS = t, this.deltaTime = this.deltaMS * Et.targetFPMS;
      const s = this._head;
      let i = s.next;
      for (; i; )
        i = i.emit(this.deltaTime);
      s.next || this._cancelIfNeeded();
    } else
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = e;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(e) {
    const t = Math.min(this.maxFPS, e), s = Math.min(Math.max(0, t) / 1e3, Et.targetFPMS);
    this._maxElapsedMS = 1 / s;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(e) {
    if (e === 0)
      this._minElapsedMS = 0;
    else {
      const t = Math.max(this.minFPS, e);
      this._minElapsedMS = 1 / (t / 1e3);
    }
  }
  static get shared() {
    if (!Et._shared) {
      const e = Et._shared = new Et();
      e.autoStart = !0, e._protected = !0;
    }
    return Et._shared;
  }
  static get system() {
    if (!Et._system) {
      const e = Et._system = new Et();
      e.autoStart = !0, e._protected = !0;
    }
    return Et._system;
  }
};
let yt = Et;
yt.targetFPMS = 0.06;
Object.defineProperties(M, {
  TARGET_FPMS: {
    get() {
      return yt.targetFPMS;
    },
    set(e) {
      Y("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), yt.targetFPMS = e;
    }
  }
});
class fo {
  static init(t) {
    t = Object.assign({
      autoStart: !0,
      sharedTicker: !1
    }, t), Object.defineProperty(this, "ticker", {
      set(s) {
        this._ticker && this._ticker.remove(this.render, this), this._ticker = s, s && s.add(this.render, this, Ne.LOW);
      },
      get() {
        return this._ticker;
      }
    }), this.stop = () => {
      this._ticker.stop();
    }, this.start = () => {
      this._ticker.start();
    }, this._ticker = null, this.ticker = t.sharedTicker ? yt.shared : new yt(), t.autoStart && this.start();
  }
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      this.ticker = null, t.destroy();
    }
  }
}
fo.extension = P.Application;
O.add(fo);
const po = [];
O.handleByList(P.Renderer, po);
function ku(e) {
  for (const t of po)
    if (t.test(e))
      return new t(e);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var Uu = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, Gu = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Hu = Uu, mo = Gu;
class go {
  constructor(t) {
    this.renderer = t;
  }
  contextChange(t) {
    let s;
    if (this.renderer.context.webGLVersion === 1) {
      const i = t.getParameter(t.FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.FRAMEBUFFER, null), s = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, i);
    } else {
      const i = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), s = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, i);
    }
    s >= nt.HIGH ? this.multisample = nt.HIGH : s >= nt.MEDIUM ? this.multisample = nt.MEDIUM : s >= nt.LOW ? this.multisample = nt.LOW : this.multisample = nt.NONE;
  }
  destroy() {
  }
}
go.extension = {
  type: P.RendererSystem,
  name: "_multisample"
};
O.add(go);
class Xu {
  constructor(t) {
    this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
  }
}
class _o {
  constructor(t) {
    this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {};
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(t) {
    const { gl: s, CONTEXT_UID: i } = this, r = t._glBuffers[i] || this.createGLBuffer(t);
    s.bindBuffer(t.type, r.buffer);
  }
  unbind(t) {
    const { gl: s } = this;
    s.bindBuffer(t, null);
  }
  bindBufferBase(t, s) {
    const { gl: i, CONTEXT_UID: r } = this;
    if (this.boundBufferBases[s] !== t) {
      const n = t._glBuffers[r] || this.createGLBuffer(t);
      this.boundBufferBases[s] = t, i.bindBufferBase(i.UNIFORM_BUFFER, s, n.buffer);
    }
  }
  bindBufferRange(t, s, i) {
    const { gl: r, CONTEXT_UID: n } = this;
    i = i || 0;
    const o = t._glBuffers[n] || this.createGLBuffer(t);
    r.bindBufferRange(r.UNIFORM_BUFFER, s || 0, o.buffer, i * 256, 256);
  }
  update(t) {
    const { gl: s, CONTEXT_UID: i } = this, r = t._glBuffers[i] || this.createGLBuffer(t);
    if (t._updateID !== r.updateID)
      if (r.updateID = t._updateID, s.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength)
        s.bufferSubData(t.type, 0, t.data);
      else {
        const n = t.static ? s.STATIC_DRAW : s.DYNAMIC_DRAW;
        r.byteLength = t.data.byteLength, s.bufferData(t.type, t.data, n);
      }
  }
  dispose(t, s) {
    if (!this.managedBuffers[t.id])
      return;
    delete this.managedBuffers[t.id];
    const i = t._glBuffers[this.CONTEXT_UID], r = this.gl;
    t.disposeRunner.remove(this), i && (s || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(t) {
    const s = Object.keys(this.managedBuffers);
    for (let i = 0; i < s.length; i++)
      this.dispose(this.managedBuffers[s[i]], t);
  }
  createGLBuffer(t) {
    const { CONTEXT_UID: s, gl: i } = this;
    return t._glBuffers[s] = new Xu(i.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[s];
  }
}
_o.extension = {
  type: P.RendererSystem,
  name: "buffer"
};
O.add(_o);
class xo {
  constructor(t) {
    this.renderer = t;
  }
  render(t, s) {
    const i = this.renderer;
    let r, n, o, a;
    if (s && (r = s.renderTexture, n = s.clear, o = s.transform, a = s.skipUpdateTransform), this.renderingToScreen = !r, i.runners.prerender.emit(), i.emit("prerender"), i.projection.transform = o, !i.context.isLost) {
      if (r || (this.lastObjectRendered = t), !a) {
        const h = t.enableTempParent();
        t.updateTransform(), t.disableTempParent(h);
      }
      i.renderTexture.bind(r), i.batch.currentRenderer.start(), (n ?? i.background.clearBeforeRender) && i.renderTexture.clear(), t.render(i), i.batch.currentRenderer.flush(), r && (s.blit && i.framebuffer.blit(), r.baseTexture.update()), i.runners.postrender.emit(), i.projection.transform = null, i.emit("postrender");
    }
  }
  destroy() {
    this.renderer = null, this.lastObjectRendered = null;
  }
}
xo.extension = {
  type: P.RendererSystem,
  name: "objectRenderer"
};
O.add(xo);
const ji = class extends Nu {
  constructor(e) {
    super(), this.type = yn.WEBGL, e = Object.assign({}, M.RENDER_OPTIONS, e), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new Ot({
      projectionMatrix: new tt()
    }, !0);
    const t = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize"
      ],
      systems: ji.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample"
      ]
    };
    this.setup(t), "useContextAlpha" in e && (Y("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), e.premultipliedAlpha = e.useContextAlpha && e.useContextAlpha !== "notMultiplied", e.backgroundAlpha = e.useContextAlpha === !1 ? 1 : e.backgroundAlpha);
    const s = {
      hello: e.hello,
      _plugin: ji.__plugins,
      background: {
        alpha: e.backgroundAlpha,
        color: e.background ?? e.backgroundColor,
        clearBeforeRender: e.clearBeforeRender
      },
      _view: {
        height: e.height,
        width: e.width,
        autoDensity: e.autoDensity,
        resolution: e.resolution,
        view: e.view
      },
      context: {
        antialias: e.antialias,
        context: e.context,
        powerPreference: e.powerPreference,
        premultipliedAlpha: e.premultipliedAlpha,
        preserveDrawingBuffer: e.preserveDrawingBuffer
      }
    };
    this.options = e, this.startup.run(s);
  }
  static test(e) {
    return e != null && e.forceCanvas ? !1 : Na();
  }
  render(e, t) {
    this.objectRenderer.render(e, t);
  }
  resize(e, t) {
    this._view.resizeView(e, t);
  }
  reset() {
    return this.runners.reset.emit(), this;
  }
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  destroy(e = !1) {
    this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
      _view: e
    }), super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(e) {
    this._view.resolution = e, this.runners.resolutionChange.emit(e);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    return Y("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender;
  }
  get useContextAlpha() {
    return Y("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha;
  }
  get preserveDrawingBuffer() {
    return Y("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer;
  }
  get backgroundColor() {
    return Y("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color;
  }
  set backgroundColor(e) {
    Y("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = e;
  }
  get backgroundAlpha() {
    return Y("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.color;
  }
  set backgroundAlpha(e) {
    Y("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = e;
  }
  get powerPreference() {
    return Y("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference;
  }
  generateTexture(e, t) {
    return this.textureGenerator.generateTexture(e, t);
  }
};
let Ue = ji;
Ue.extension = {
  type: P.Renderer,
  priority: 1
};
Ue.__plugins = {};
Ue.__systems = {};
O.handleByMap(P.RendererPlugin, Ue.__plugins);
O.handleByMap(P.RendererSystem, Ue.__systems);
O.add(Ue);
class vo extends ss {
  constructor(t, s) {
    const { width: i, height: r } = s || {};
    super(i, r), this.items = [], this.itemDirtyIds = [];
    for (let n = 0; n < t; n++) {
      const o = new X();
      this.items.push(o), this.itemDirtyIds.push(-2);
    }
    this.length = t, this._load = null, this.baseTexture = null;
  }
  initFromArray(t, s) {
    for (let i = 0; i < this.length; i++)
      t[i] && (t[i].castToBaseTexture ? this.addBaseTextureAt(t[i].castToBaseTexture(), i) : t[i] instanceof ss ? this.addResourceAt(t[i], i) : this.addResourceAt(Pn(t[i], s), i));
  }
  dispose() {
    for (let t = 0, s = this.length; t < s; t++)
      this.items[t].destroy();
    this.items = null, this.itemDirtyIds = null, this._load = null;
  }
  addResourceAt(t, s) {
    if (!this.items[s])
      throw new Error(`Index ${s} is out of bounds`);
    return t.valid && !this.valid && this.resize(t.width, t.height), this.items[s].setResource(t), this;
  }
  bind(t) {
    if (this.baseTexture !== null)
      throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(t);
    for (let s = 0; s < this.length; s++)
      this.items[s].parentTextureArray = t, this.items[s].on("update", t.update, t);
  }
  unbind(t) {
    super.unbind(t);
    for (let s = 0; s < this.length; s++)
      this.items[s].parentTextureArray = null, this.items[s].off("update", t.update, t);
  }
  load() {
    if (this._load)
      return this._load;
    const s = this.items.map((i) => i.resource).filter((i) => i).map((i) => i.load());
    return this._load = Promise.all(s).then(() => {
      const { realWidth: i, realHeight: r } = this.items[0];
      return this.resize(i, r), Promise.resolve(this);
    }), this._load;
  }
}
class zu extends vo {
  constructor(t, s) {
    const { width: i, height: r } = s || {};
    let n, o;
    Array.isArray(t) ? (n = t, o = t.length) : o = t, super(o, { width: i, height: r }), n && this.initFromArray(n, s);
  }
  addBaseTextureAt(t, s) {
    if (t.resource)
      this.addResourceAt(t.resource, s);
    else
      throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  bind(t) {
    super.bind(t), t.target = Me.TEXTURE_2D_ARRAY;
  }
  upload(t, s, i) {
    const { length: r, itemDirtyIds: n, items: o } = this, { gl: a } = t;
    i.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, i.internalFormat, this._width, this._height, r, 0, s.format, i.type, null);
    for (let h = 0; h < r; h++) {
      const l = o[h];
      n[h] < l.dirtyId && (n[h] = l.dirtyId, l.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, l.resource.width, l.resource.height, 1, s.format, i.type, l.resource.source));
    }
    return !0;
  }
}
class Vu extends oe {
  constructor(t) {
    super(t);
  }
  static test(t) {
    const { OffscreenCanvas: s } = globalThis;
    return s && t instanceof s ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
  }
}
const Ye = class extends vo {
  constructor(e, t) {
    const { width: s, height: i, autoLoad: r, linkBaseTexture: n } = t || {};
    if (e && e.length !== Ye.SIDES)
      throw new Error(`Invalid length. Got ${e.length}, expected 6`);
    super(6, { width: s, height: i });
    for (let o = 0; o < Ye.SIDES; o++)
      this.items[o].target = Me.TEXTURE_CUBE_MAP_POSITIVE_X + o;
    this.linkBaseTexture = n !== !1, e && this.initFromArray(e, t), r !== !1 && this.load();
  }
  bind(e) {
    super.bind(e), e.target = Me.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(e, t, s) {
    if (s === void 0 && (s = this.linkBaseTexture), !this.items[t])
      throw new Error(`Index ${t} is out of bounds`);
    if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0)
      if (e.resource)
        this.addResourceAt(e.resource, t);
      else
        throw new Error("CubeResource does not support copying of renderTexture.");
    else
      e.target = Me.TEXTURE_CUBE_MAP_POSITIVE_X + t, e.parentTextureArray = this.baseTexture, this.items[t] = e;
    return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight), this.items[t] = e, this;
  }
  upload(e, t, s) {
    const i = this.itemDirtyIds;
    for (let r = 0; r < Ye.SIDES; r++) {
      const n = this.items[r];
      (i[r] < n.dirtyId || s.dirtyId < t.dirtyId) && (n.valid && n.resource ? (n.resource.upload(e, n, s), i[r] = n.dirtyId) : i[r] < -1 && (e.gl.texImage2D(n.target, 0, s.internalFormat, t.realWidth, t.realHeight, 0, t.format, s.type, null), i[r] = -1));
    }
    return !0;
  }
  static test(e) {
    return Array.isArray(e) && e.length === Ye.SIDES;
  }
};
let yo = Ye;
yo.SIDES = 6;
class Pe extends oe {
  constructor(t, s) {
    s = s || {};
    let i, r;
    typeof t == "string" ? (i = Pe.EMPTY, r = t) : (i = t, r = null), super(i), this.url = r, this.crossOrigin = s.crossOrigin ?? !0, this.alphaMode = typeof s.alphaMode == "number" ? s.alphaMode : null, this._load = null, s.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise(async (t, s) => {
      if (this.url === null) {
        t(this);
        return;
      }
      try {
        const i = await M.ADAPTER.fetch(this.url, {
          mode: this.crossOrigin ? "cors" : "no-cors"
        });
        if (this.destroyed)
          return;
        const r = await i.blob();
        if (this.destroyed)
          return;
        const n = await createImageBitmap(r, {
          premultiplyAlpha: this.alphaMode === null || this.alphaMode === kt.UNPACK ? "premultiply" : "none"
        });
        if (this.destroyed)
          return;
        this.source = n, this.update(), t(this);
      } catch (i) {
        if (this.destroyed)
          return;
        s(i), this.onError.emit(i);
      }
    }), this._load);
  }
  upload(t, s, i) {
    return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (s.alphaMode = this.alphaMode), super.upload(t, s, i)) : (this.load(), !1);
  }
  dispose() {
    this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null;
  }
  static test(t) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof t == "string" || t instanceof ImageBitmap);
  }
  static get EMPTY() {
    return Pe._EMPTY = Pe._EMPTY ?? M.ADAPTER.createCanvas(0, 0), Pe._EMPTY;
  }
}
const Ms = class extends oe {
  constructor(e, t) {
    t = t || {}, super(M.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = e, this.scale = t.scale || 1, this._overrideWidth = t.width, this._overrideHeight = t.height, this._resolve = null, this._crossorigin = t.crossorigin, this._load = null, t.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise((e) => {
      if (this._resolve = () => {
        this.resize(this.source.width, this.source.height), e(this);
      }, Ms.SVG_XML.test(this.svg.trim())) {
        if (!btoa)
          throw new Error("Your browser doesn't support base64 conversions.");
        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
      }
      this._loadSvg();
    }), this._load);
  }
  _loadSvg() {
    const e = new Image();
    oe.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = (t) => {
      this._resolve && (e.onerror = null, this.onError.emit(t));
    }, e.onload = () => {
      if (!this._resolve)
        return;
      const t = e.width, s = e.height;
      if (!t || !s)
        throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      let i = t * this.scale, r = s * this.scale;
      (this._overrideWidth || this._overrideHeight) && (i = this._overrideWidth || this._overrideHeight / s * t, r = this._overrideHeight || this._overrideWidth / t * s), i = Math.round(i), r = Math.round(r);
      const n = this.source;
      n.width = i, n.height = r, n._pixiId = `canvas_${xe()}`, n.getContext("2d").drawImage(e, 0, 0, t, s, 0, 0, i, r), this._resolve(), this._resolve = null;
    };
  }
  static getSize(e) {
    const t = Ms.SVG_SIZE.exec(e), s = {};
    return t && (s[t[1]] = Math.round(parseFloat(t[3])), s[t[5]] = Math.round(parseFloat(t[7]))), s;
  }
  dispose() {
    super.dispose(), this._resolve = null, this._crossorigin = null;
  }
  static test(e, t) {
    return t === "svg" || typeof e == "string" && e.startsWith("data:image/svg+xml") || typeof e == "string" && Ms.SVG_XML.test(e);
  }
};
let is = Ms;
is.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
is.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
const Wi = class extends oe {
  constructor(e, t) {
    if (t = t || {}, !(e instanceof HTMLVideoElement)) {
      const s = document.createElement("video");
      s.setAttribute("preload", "auto"), s.setAttribute("webkit-playsinline", ""), s.setAttribute("playsinline", ""), typeof e == "string" && (e = [e]);
      const i = e[0].src || e[0];
      oe.crossOrigin(s, i, t.crossorigin);
      for (let r = 0; r < e.length; ++r) {
        const n = document.createElement("source");
        let { src: o, mime: a } = e[r];
        o = o || e[r];
        const h = o.split("?").shift().toLowerCase(), l = h.slice(h.lastIndexOf(".") + 1);
        a = a || Wi.MIME_TYPES[l] || `video/${l}`, n.src = o, n.type = a, s.appendChild(n);
      }
      e = s;
    }
    super(e), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), t.autoLoad !== !1 && this.load();
  }
  update(e = 0) {
    if (!this.destroyed) {
      const t = yt.shared.elapsedMS * this.source.playbackRate;
      this._msToNextUpdate = Math.floor(this._msToNextUpdate - t), (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
    }
  }
  load() {
    if (this._load)
      return this._load;
    const e = this.source;
    return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise((t) => {
      this.valid ? t(this) : (this._resolve = t, e.load());
    }), this._load;
  }
  _onError(e) {
    this.source.removeEventListener("error", this._onError, !0), this.onError.emit(e);
  }
  _isSourcePlaying() {
    const e = this.source;
    return !e.paused && !e.ended && this._isSourceReady();
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (yt.shared.add(this.update, this), this._isConnectedToTicker = !0);
  }
  _onPlayStop() {
    this._isConnectedToTicker && (yt.shared.remove(this.update, this), this._isConnectedToTicker = !1);
  }
  _onCanPlay() {
    const e = this.source;
    e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlay);
    const t = this.valid;
    this.resize(e.videoWidth, e.videoHeight), !t && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play();
  }
  dispose() {
    this._isConnectedToTicker && (yt.shared.remove(this.update, this), this._isConnectedToTicker = !1);
    const e = this.source;
    e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(e) {
    e !== this._autoUpdate && (this._autoUpdate = e, !this._autoUpdate && this._isConnectedToTicker ? (yt.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (yt.shared.add(this.update, this), this._isConnectedToTicker = !0));
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(e) {
    e !== this._updateFPS && (this._updateFPS = e);
  }
  static test(e, t) {
    return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || Wi.TYPES.includes(t);
  }
};
let ur = Wi;
ur.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
ur.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
Ui.push(Pe, zn, Vu, ur, is, ns, yo, zu);
class Gs {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
  getRectangle(t) {
    return this.minX > this.maxX || this.minY > this.maxY ? V.EMPTY : (t = t || new V(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t);
  }
  addPoint(t) {
    this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y);
  }
  addPointMatrix(t, s) {
    const { a: i, b: r, c: n, d: o, tx: a, ty: h } = t, l = i * s.x + n * s.y + a, c = r * s.x + o * s.y + h;
    this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, c), this.maxY = Math.max(this.maxY, c);
  }
  addQuad(t) {
    let s = this.minX, i = this.minY, r = this.maxX, n = this.maxY, o = t[0], a = t[1];
    s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, o = t[2], a = t[3], s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, o = t[4], a = t[5], s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, o = t[6], a = t[7], s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, this.minX = s, this.minY = i, this.maxX = r, this.maxY = n;
  }
  addFrame(t, s, i, r, n) {
    this.addFrameMatrix(t.worldTransform, s, i, r, n);
  }
  addFrameMatrix(t, s, i, r, n) {
    const o = t.a, a = t.b, h = t.c, l = t.d, c = t.tx, u = t.ty;
    let d = this.minX, f = this.minY, p = this.maxX, _ = this.maxY, m = o * s + h * i + c, v = a * s + l * i + u;
    d = m < d ? m : d, f = v < f ? v : f, p = m > p ? m : p, _ = v > _ ? v : _, m = o * r + h * i + c, v = a * r + l * i + u, d = m < d ? m : d, f = v < f ? v : f, p = m > p ? m : p, _ = v > _ ? v : _, m = o * s + h * n + c, v = a * s + l * n + u, d = m < d ? m : d, f = v < f ? v : f, p = m > p ? m : p, _ = v > _ ? v : _, m = o * r + h * n + c, v = a * r + l * n + u, d = m < d ? m : d, f = v < f ? v : f, p = m > p ? m : p, _ = v > _ ? v : _, this.minX = d, this.minY = f, this.maxX = p, this.maxY = _;
  }
  addVertexData(t, s, i) {
    let r = this.minX, n = this.minY, o = this.maxX, a = this.maxY;
    for (let h = s; h < i; h += 2) {
      const l = t[h], c = t[h + 1];
      r = l < r ? l : r, n = c < n ? c : n, o = l > o ? l : o, a = c > a ? c : a;
    }
    this.minX = r, this.minY = n, this.maxX = o, this.maxY = a;
  }
  addVertices(t, s, i, r) {
    this.addVerticesMatrix(t.worldTransform, s, i, r);
  }
  addVerticesMatrix(t, s, i, r, n = 0, o = n) {
    const a = t.a, h = t.b, l = t.c, c = t.d, u = t.tx, d = t.ty;
    let f = this.minX, p = this.minY, _ = this.maxX, m = this.maxY;
    for (let v = i; v < r; v += 2) {
      const y = s[v], g = s[v + 1], x = a * y + l * g + u, T = c * g + h * y + d;
      f = Math.min(f, x - n), _ = Math.max(_, x + n), p = Math.min(p, T - o), m = Math.max(m, T + o);
    }
    this.minX = f, this.minY = p, this.maxX = _, this.maxY = m;
  }
  addBounds(t) {
    const s = this.minX, i = this.minY, r = this.maxX, n = this.maxY;
    this.minX = t.minX < s ? t.minX : s, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n;
  }
  addBoundsMask(t, s) {
    const i = t.minX > s.minX ? t.minX : s.minX, r = t.minY > s.minY ? t.minY : s.minY, n = t.maxX < s.maxX ? t.maxX : s.maxX, o = t.maxY < s.maxY ? t.maxY : s.maxY;
    if (i <= n && r <= o) {
      const a = this.minX, h = this.minY, l = this.maxX, c = this.maxY;
      this.minX = i < a ? i : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c;
    }
  }
  addBoundsMatrix(t, s) {
    this.addFrameMatrix(s, t.minX, t.minY, t.maxX, t.maxY);
  }
  addBoundsArea(t, s) {
    const i = t.minX > s.x ? t.minX : s.x, r = t.minY > s.y ? t.minY : s.y, n = t.maxX < s.x + s.width ? t.maxX : s.x + s.width, o = t.maxY < s.y + s.height ? t.maxY : s.y + s.height;
    if (i <= n && r <= o) {
      const a = this.minX, h = this.minY, l = this.maxX, c = this.maxY;
      this.minX = i < a ? i : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c;
    }
  }
  pad(t = 0, s = t) {
    this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= s, this.maxY += s);
  }
  addFramePad(t, s, i, r, n, o) {
    t -= n, s -= o, i += n, r += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > i ? this.maxX : i, this.minY = this.minY < s ? this.minY : s, this.maxY = this.maxY > r ? this.maxY : r;
  }
}
class it extends ge {
  constructor() {
    super(), this.tempDisplayObjectParent = null, this.transform = new cr(), this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Gs(), this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1;
  }
  static mixin(t) {
    const s = Object.keys(t);
    for (let i = 0; i < s.length; ++i) {
      const r = s[i];
      Object.defineProperty(it.prototype, r, Object.getOwnPropertyDescriptor(t, r));
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  updateTransform() {
    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
  }
  getBounds(t, s) {
    return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), s || (this._boundsRect || (this._boundsRect = new V()), s = this._boundsRect), this._bounds.getRectangle(s);
  }
  getLocalBounds(t) {
    t || (this._localBoundsRect || (this._localBoundsRect = new V()), t = this._localBoundsRect), this._localBounds || (this._localBounds = new Gs());
    const s = this.transform, i = this.parent;
    this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
    const r = this._bounds, n = this._boundsID;
    this._bounds = this._localBounds;
    const o = this.getBounds(!1, t);
    return this.parent = i, this.transform = s, this._bounds = r, this._bounds.updateID += this._boundsID - n, o;
  }
  toGlobal(t, s, i = !1) {
    return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, s);
  }
  toLocal(t, s, i, r) {
    return s && (t = s.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i);
  }
  setParent(t) {
    if (!t || !t.addChild)
      throw new Error("setParent: Argument must be a Container");
    return t.addChild(this), t;
  }
  removeFromParent() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
  }
  setTransform(t = 0, s = 0, i = 1, r = 1, n = 0, o = 0, a = 0, h = 0, l = 0) {
    return this.position.x = t, this.position.y = s, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = a, this.pivot.x = h, this.pivot.y = l, this;
  }
  destroy(t) {
    this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new ju()), this.tempDisplayObjectParent;
  }
  enableTempParent() {
    const t = this.parent;
    return this.parent = this._tempDisplayObjectParent, t;
  }
  disableTempParent(t) {
    this.parent = t;
  }
  get x() {
    return this.position.x;
  }
  set x(t) {
    this.transform.position.x = t;
  }
  get y() {
    return this.position.y;
  }
  set y(t) {
    this.transform.position.y = t;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(t) {
    this.transform.position.copyFrom(t);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(t) {
    this.transform.scale.copyFrom(t);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(t) {
    this.transform.pivot.copyFrom(t);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(t) {
    this.transform.skew.copyFrom(t);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(t) {
    this.transform.rotation = t;
  }
  get angle() {
    return this.transform.rotation * Gc;
  }
  set angle(t) {
    this.transform.rotation = t * Hc;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(t) {
    this._zIndex = t, this.parent && (this.parent.sortDirty = !0);
  }
  get worldVisible() {
    let t = this;
    do {
      if (!t.visible)
        return !1;
      t = t.parent;
    } while (t);
    return !0;
  }
  get mask() {
    return this._mask;
  }
  set mask(t) {
    if (this._mask !== t) {
      if (this._mask) {
        const s = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        s && (s._maskRefCount--, s._maskRefCount === 0 && (s.renderable = !0, s.isMask = !1));
      }
      if (this._mask = t, this._mask) {
        const s = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        s && (s._maskRefCount === 0 && (s.renderable = !1, s.isMask = !0), s._maskRefCount++);
      }
    }
  }
}
class ju extends it {
  constructor() {
    super(...arguments), this.sortDirty = null;
  }
}
it.prototype.displayObjectUpdateTransform = it.prototype.updateTransform;
const Wu = new tt();
function $u(e, t) {
  return e.zIndex === t.zIndex ? e._lastSortedIndex - t._lastSortedIndex : e.zIndex - t.zIndex;
}
const $i = class extends it {
  constructor() {
    super(), this.children = [], this.sortableChildren = $i.defaultSortableChildren, this.sortDirty = !1;
  }
  onChildrenChange(e) {
  }
  addChild(...e) {
    if (e.length > 1)
      for (let t = 0; t < e.length; t++)
        this.addChild(e[t]);
    else {
      const t = e[0];
      t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
    }
    return e[0];
  }
  addChildAt(e, t) {
    if (t < 0 || t > this.children.length)
      throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`);
    return e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.splice(t, 0, e), this._boundsID++, this.onChildrenChange(t), e.emit("added", this), this.emit("childAdded", e, this, t), e;
  }
  swapChildren(e, t) {
    if (e === t)
      return;
    const s = this.getChildIndex(e), i = this.getChildIndex(t);
    this.children[s] = t, this.children[i] = e, this.onChildrenChange(s < i ? s : i);
  }
  getChildIndex(e) {
    const t = this.children.indexOf(e);
    if (t === -1)
      throw new Error("The supplied DisplayObject must be a child of the caller");
    return t;
  }
  setChildIndex(e, t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
    const s = this.getChildIndex(e);
    De(this.children, s, 1), this.children.splice(t, 0, e), this.onChildrenChange(t);
  }
  getChildAt(e) {
    if (e < 0 || e >= this.children.length)
      throw new Error(`getChildAt: Index (${e}) does not exist.`);
    return this.children[e];
  }
  removeChild(...e) {
    if (e.length > 1)
      for (let t = 0; t < e.length; t++)
        this.removeChild(e[t]);
    else {
      const t = e[0], s = this.children.indexOf(t);
      if (s === -1)
        return null;
      t.parent = null, t.transform._parentID = -1, De(this.children, s, 1), this._boundsID++, this.onChildrenChange(s), t.emit("removed", this), this.emit("childRemoved", t, this, s);
    }
    return e[0];
  }
  removeChildAt(e) {
    const t = this.getChildAt(e);
    return t.parent = null, t.transform._parentID = -1, De(this.children, e, 1), this._boundsID++, this.onChildrenChange(e), t.emit("removed", this), this.emit("childRemoved", t, this, e), t;
  }
  removeChildren(e = 0, t = this.children.length) {
    const s = e, i = t, r = i - s;
    let n;
    if (r > 0 && r <= i) {
      n = this.children.splice(s, r);
      for (let o = 0; o < n.length; ++o)
        n[o].parent = null, n[o].transform && (n[o].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(e);
      for (let o = 0; o < n.length; ++o)
        n[o].emit("removed", this), this.emit("childRemoved", n[o], this, o);
      return n;
    } else if (r === 0 && this.children.length === 0)
      return [];
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  }
  sortChildren() {
    let e = !1;
    for (let t = 0, s = this.children.length; t < s; ++t) {
      const i = this.children[t];
      i._lastSortedIndex = t, !e && i.zIndex !== 0 && (e = !0);
    }
    e && this.children.length > 1 && this.children.sort($u), this.sortDirty = !1;
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let e = 0, t = this.children.length; e < t; ++e) {
      const s = this.children[e];
      s.visible && s.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      if (!(!t.visible || !t.renderable))
        if (t.calculateBounds(), t._mask) {
          const s = t._mask.isMaskData ? t._mask.maskObject : t._mask;
          s ? (s.calculateBounds(), this._bounds.addBoundsMask(t._bounds, s._bounds)) : this._bounds.addBounds(t._bounds);
        } else
          t.filterArea ? this._bounds.addBoundsArea(t._bounds, t.filterArea) : this._bounds.addBounds(t._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(e, t = !1) {
    const s = super.getLocalBounds(e);
    if (!t)
      for (let i = 0, r = this.children.length; i < r; ++i) {
        const n = this.children[i];
        n.visible && n.updateTransform();
      }
    return s;
  }
  _calculateBounds() {
  }
  _renderWithCulling(e) {
    const t = e.renderTexture.sourceFrame;
    if (!(t.width > 0 && t.height > 0))
      return;
    let s, i;
    this.cullArea ? (s = this.cullArea, i = this.worldTransform) : this._render !== $i.prototype._render && (s = this.getBounds(!0));
    const r = e.projection.transform;
    if (r && (i ? (i = Wu.copyFrom(i), i.prepend(r)) : i = r), s && t.intersects(s, i))
      this._render(e);
    else if (this.cullArea)
      return;
    for (let n = 0, o = this.children.length; n < o; ++n) {
      const a = this.children[n], h = a.cullable;
      a.cullable = h || !this.cullArea, a.render(e), a.cullable = h;
    }
  }
  render(e) {
    var t;
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
      if (this._mask || (t = this.filters) != null && t.length)
        this.renderAdvanced(e);
      else if (this.cullable)
        this._renderWithCulling(e);
      else {
        this._render(e);
        for (let s = 0, i = this.children.length; s < i; ++s)
          this.children[s].render(e);
      }
  }
  renderAdvanced(e) {
    var r, n, o;
    const t = this.filters, s = this._mask;
    if (t) {
      this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
      for (let a = 0; a < t.length; a++)
        t[a].enabled && this._enabledFilters.push(t[a]);
    }
    const i = t && ((r = this._enabledFilters) == null ? void 0 : r.length) || s && (!s.isMaskData || s.enabled && (s.autoDetect || s.type !== ct.NONE));
    if (i && e.batch.flush(), t && ((n = this._enabledFilters) != null && n.length) && e.filter.push(this, this._enabledFilters), s && e.mask.push(this, this._mask), this.cullable)
      this._renderWithCulling(e);
    else {
      this._render(e);
      for (let a = 0, h = this.children.length; a < h; ++a)
        this.children[a].render(e);
    }
    i && e.batch.flush(), s && e.mask.pop(this), t && ((o = this._enabledFilters) != null && o.length) && e.filter.pop();
  }
  _render(e) {
  }
  destroy(e) {
    super.destroy(), this.sortDirty = !1;
    const t = typeof e == "boolean" ? e : e == null ? void 0 : e.children, s = this.removeChildren(0, this.children.length);
    if (t)
      for (let i = 0; i < s.length; ++i)
        s[i].destroy(e);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(e) {
    const t = this.getLocalBounds().width;
    t !== 0 ? this.scale.x = e / t : this.scale.x = 1, this._width = e;
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(e) {
    const t = this.getLocalBounds().height;
    t !== 0 ? this.scale.y = e / t : this.scale.y = 1, this._height = e;
  }
};
let bt = $i;
bt.defaultSortableChildren = !1;
bt.prototype.containerUpdateTransform = bt.prototype.updateTransform;
Object.defineProperties(M, {
  SORTABLE_CHILDREN: {
    get() {
      return bt.defaultSortableChildren;
    },
    set(e) {
      Y("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), bt.defaultSortableChildren = e;
    }
  }
});
const je = new $(), Yu = new Uint16Array([0, 1, 2, 0, 2, 3]);
class be extends bt {
  constructor(t) {
    super(), this._anchor = new se(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = G.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || L.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = Yu, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = M.ROUND_PIXELS;
  }
  _onTextureUpdate() {
    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Re(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Re(this.scale.y) * this._height / this._texture.orig.height);
  }
  _onAnchorUpdate() {
    this._transformID = -1, this._transformTrimmedID = -1;
  }
  calculateVertices() {
    const t = this._texture;
    if (this._transformID === this.transform._worldID && this._textureID === t._updateID)
      return;
    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
    const s = this.transform.worldTransform, i = s.a, r = s.b, n = s.c, o = s.d, a = s.tx, h = s.ty, l = this.vertexData, c = t.trim, u = t.orig, d = this._anchor;
    let f = 0, p = 0, _ = 0, m = 0;
    if (c ? (p = c.x - d._x * u.width, f = p + c.width, m = c.y - d._y * u.height, _ = m + c.height) : (p = -d._x * u.width, f = p + u.width, m = -d._y * u.height, _ = m + u.height), l[0] = i * p + n * m + a, l[1] = o * m + r * p + h, l[2] = i * f + n * m + a, l[3] = o * m + r * f + h, l[4] = i * f + n * _ + a, l[5] = o * _ + r * f + h, l[6] = i * p + n * _ + a, l[7] = o * _ + r * p + h, this._roundPixels) {
      const v = M.RESOLUTION;
      for (let y = 0; y < l.length; ++y)
        l[y] = Math.round(l[y] * v) / v;
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData)
      this.vertexTrimmedData = new Float32Array(8);
    else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
      return;
    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
    const t = this._texture, s = this.vertexTrimmedData, i = t.orig, r = this._anchor, n = this.transform.worldTransform, o = n.a, a = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty, d = -r._x * i.width, f = d + i.width, p = -r._y * i.height, _ = p + i.height;
    s[0] = o * d + h * p + c, s[1] = l * p + a * d + u, s[2] = o * f + h * p + c, s[3] = l * p + a * f + u, s[4] = o * f + h * _ + c, s[5] = l * _ + a * f + u, s[6] = o * d + h * _ + c, s[7] = l * _ + a * d + u;
  }
  _render(t) {
    this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const t = this._texture.trim, s = this._texture.orig;
    !t || t.width === s.width && t.height === s.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
  }
  getLocalBounds(t) {
    return this.children.length === 0 ? (this._localBounds || (this._localBounds = new Gs()), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new V()), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t);
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, je);
    const s = this._texture.orig.width, i = this._texture.orig.height, r = -s * this.anchor.x;
    let n = 0;
    return je.x >= r && je.x < r + s && (n = -i * this.anchor.y, je.y >= n && je.y < n + i);
  }
  destroy(t) {
    if (super.destroy(t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
      const i = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
      this._texture.destroy(!!i);
    }
    this._texture = null;
  }
  static from(t, s) {
    const i = t instanceof L ? t : L.from(t, s);
    return new be(i);
  }
  set roundPixels(t) {
    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    const s = Re(this.scale.x) || 1;
    this.scale.x = s * t / this._texture.orig.width, this._width = t;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    const s = Re(this.scale.y) || 1;
    this.scale.y = s * t / this._texture.orig.height, this._height = t;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    this._anchor.copyFrom(t);
  }
  get tint() {
    return this._tint;
  }
  set tint(t) {
    this._tint = t, this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || L.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)));
  }
}
const bo = new tt();
it.prototype._cacheAsBitmap = !1;
it.prototype._cacheData = null;
it.prototype._cacheAsBitmapResolution = null;
it.prototype._cacheAsBitmapMultisample = null;
class qu {
  constructor() {
    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
  }
}
Object.defineProperties(it.prototype, {
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(e) {
      e !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = e, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
    }
  },
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(e) {
      e !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = e, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
    }
  },
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(e) {
      if (this._cacheAsBitmap === e)
        return;
      this._cacheAsBitmap = e;
      let t;
      e ? (this._cacheData || (this._cacheData = new qu()), t = this._cacheData, t.originalRender = this.render, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this.calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData, t.sprite && this._destroyCachedDisplayObject(), this.render = t.originalRender, this.renderCanvas = t.originalRenderCanvas, this.calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea);
    }
  }
});
it.prototype._renderCached = function(t) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t));
};
it.prototype._initCachedDisplayObject = function(t) {
  var d, f;
  if ((d = this._cacheData) != null && d.sprite)
    return;
  const s = this.alpha;
  this.alpha = 1, t.batch.flush();
  const i = this.getLocalBounds(null, !0).clone();
  if ((f = this.filters) != null && f.length) {
    const p = this.filters[0].padding;
    i.pad(p);
  }
  i.ceil(M.RESOLUTION);
  const r = t.renderTexture.current, n = t.renderTexture.sourceFrame.clone(), o = t.renderTexture.destinationFrame.clone(), a = t.projection.transform, h = ae.create({
    width: i.width,
    height: i.height,
    resolution: this.cacheAsBitmapResolution || t.resolution,
    multisample: this.cacheAsBitmapMultisample ?? t.multisample
  }), l = `cacheAsBitmap_${xe()}`;
  this._cacheData.textureCacheId = l, X.addToCache(h.baseTexture, l), L.addToCache(h, l);
  const c = this.transform.localTransform.copyTo(bo).invert().translate(-i.x, -i.y);
  this.render = this._cacheData.originalRender, t.render(this, { renderTexture: h, clear: !0, transform: c, skipUpdateTransform: !1 }), t.framebuffer.blit(), t.projection.transform = a, t.renderTexture.bind(r, n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = s;
  const u = new be(h);
  u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(i.x / i.width), u.anchor.y = -(i.y / i.height), u.alpha = s, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = u.containsPoint.bind(u);
};
it.prototype._renderCachedCanvas = function(t) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t));
};
it.prototype._initCachedDisplayObjectCanvas = function(t) {
  var c;
  if ((c = this._cacheData) != null && c.sprite)
    return;
  const s = this.getLocalBounds(null, !0), i = this.alpha;
  this.alpha = 1;
  const r = t.canvasContext.activeContext, n = t._projTransform;
  s.ceil(M.RESOLUTION);
  const o = ae.create({ width: s.width, height: s.height }), a = `cacheAsBitmap_${xe()}`;
  this._cacheData.textureCacheId = a, X.addToCache(o.baseTexture, a), L.addToCache(o, a);
  const h = bo;
  this.transform.localTransform.copyTo(h), h.invert(), h.tx -= s.x, h.ty -= s.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, { renderTexture: o, clear: !0, transform: h, skipUpdateTransform: !1 }), t.canvasContext.activeContext = r, t._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = i;
  const l = new be(o);
  l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -(s.x / s.width), l.anchor.y = -(s.y / s.height), l.alpha = i, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l);
};
it.prototype._calculateCachedBounds = function() {
  this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
};
it.prototype._getCachedLocalBounds = function() {
  return this._cacheData.sprite.getLocalBounds(null);
};
it.prototype._destroyCachedDisplayObject = function() {
  this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, X.removeFromCache(this._cacheData.textureCacheId), L.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
};
it.prototype._cacheAsBitmapDestroy = function(t) {
  this.cacheAsBitmap = !1, this.destroy(t);
};
it.prototype.name = null;
bt.prototype.getChildByName = function(t, s) {
  for (let i = 0, r = this.children.length; i < r; i++)
    if (this.children[i].name === t)
      return this.children[i];
  if (s)
    for (let i = 0, r = this.children.length; i < r; i++) {
      const n = this.children[i];
      if (!n.getChildByName)
        continue;
      const o = n.getChildByName(t, !0);
      if (o)
        return o;
    }
  return null;
};
it.prototype.getGlobalPosition = function(t = new $(), s = !1) {
  return this.parent ? this.parent.toGlobal(this.position, t, s) : (t.x = this.position.x, t.y = this.position.y), t;
};
var Ku = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class Zu extends gt {
  constructor(t = 1) {
    super(Hu, Ku, { uAlpha: 1 }), this.alpha = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
const Ju = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
}, Qu = [
  "varying vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uSampler;",
  "void main(void)",
  "{",
  "    gl_FragColor = vec4(0.0);",
  "    %blur%",
  "}"
].join(`
`);
function td(e) {
  const t = Ju[e], s = t.length;
  let i = Qu, r = "";
  const n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let o;
  for (let a = 0; a < e; a++) {
    let h = n.replace("%index%", a.toString());
    o = a, a >= s && (o = e - a - 1), h = h.replace("%value%", t[o].toString()), r += h, r += `
`;
  }
  return i = i.replace("%blur%", r), i = i.replace("%size%", e.toString()), i;
}
const ed = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function sd(e, t) {
  const s = Math.ceil(e / 2);
  let i = ed, r = "", n;
  t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  for (let o = 0; o < e; o++) {
    let a = n.replace("%index%", o.toString());
    a = a.replace("%sampleIndex%", `${o - (s - 1)}.0`), r += a, r += `
`;
  }
  return i = i.replace("%blur%", r), i = i.replace("%size%", e.toString()), i;
}
class Yi extends gt {
  constructor(t, s = 8, i = 4, r = gt.defaultResolution, n = 5) {
    const o = sd(n, t), a = td(n);
    super(o, a), this.horizontal = t, this.resolution = r, this._quality = 0, this.quality = i, this.blur = s;
  }
  apply(t, s, i, r) {
    if (i ? this.horizontal ? this.uniforms.strength = 1 / i.width * (i.width / s.width) : this.uniforms.strength = 1 / i.height * (i.height / s.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / s.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / s.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1)
      t.applyFilter(this, s, i, r);
    else {
      const n = t.getFilterTexture(), o = t.renderer;
      let a = s, h = n;
      this.state.blend = !1, t.applyFilter(this, a, h, Xt.CLEAR);
      for (let l = 1; l < this.passes - 1; l++) {
        t.bindAndClear(a, Xt.BLIT), this.uniforms.uSampler = h;
        const c = h;
        h = a, a = c, o.shader.bind(this), o.geometry.draw(5);
      }
      this.state.blend = !0, t.applyFilter(this, h, i, r), t.returnFilterTexture(n);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(t) {
    this.padding = 1 + Math.abs(t) * 2, this.strength = t;
  }
  get quality() {
    return this._quality;
  }
  set quality(t) {
    this._quality = t, this.passes = t;
  }
}
class id extends gt {
  constructor(t = 8, s = 4, i = gt.defaultResolution, r = 5) {
    super(), this.blurXFilter = new Yi(!0, t, s, i, r), this.blurYFilter = new Yi(!1, t, s, i, r), this.resolution = i, this.quality = s, this.blur = t, this.repeatEdgePixels = !1;
  }
  apply(t, s, i, r) {
    const n = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
    if (n && o) {
      const a = t.getFilterTexture();
      this.blurXFilter.apply(t, s, a, Xt.CLEAR), this.blurYFilter.apply(t, a, i, r), t.returnFilterTexture(a);
    } else
      o ? this.blurYFilter.apply(t, s, i, r) : this.blurXFilter.apply(t, s, i, r);
  }
  updatePadding() {
    this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
  }
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(t) {
    this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
  }
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(t) {
    this.blurXFilter.blur = t, this.updatePadding();
  }
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(t) {
    this.blurYFilter.blur = t, this.updatePadding();
  }
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(t) {
    this.blurYFilter.blendMode = t;
  }
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    this._repeatEdgePixels = t, this.updatePadding();
  }
}
var rd = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class qi extends gt {
  constructor() {
    const t = {
      m: new Float32Array([
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]),
      uAlpha: 1
    };
    super(mo, rd, t), this.alpha = 1;
  }
  _loadMatrix(t, s = !1) {
    let i = t;
    s && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i;
  }
  _multiply(t, s, i) {
    return t[0] = s[0] * i[0] + s[1] * i[5] + s[2] * i[10] + s[3] * i[15], t[1] = s[0] * i[1] + s[1] * i[6] + s[2] * i[11] + s[3] * i[16], t[2] = s[0] * i[2] + s[1] * i[7] + s[2] * i[12] + s[3] * i[17], t[3] = s[0] * i[3] + s[1] * i[8] + s[2] * i[13] + s[3] * i[18], t[4] = s[0] * i[4] + s[1] * i[9] + s[2] * i[14] + s[3] * i[19] + s[4], t[5] = s[5] * i[0] + s[6] * i[5] + s[7] * i[10] + s[8] * i[15], t[6] = s[5] * i[1] + s[6] * i[6] + s[7] * i[11] + s[8] * i[16], t[7] = s[5] * i[2] + s[6] * i[7] + s[7] * i[12] + s[8] * i[17], t[8] = s[5] * i[3] + s[6] * i[8] + s[7] * i[13] + s[8] * i[18], t[9] = s[5] * i[4] + s[6] * i[9] + s[7] * i[14] + s[8] * i[19] + s[9], t[10] = s[10] * i[0] + s[11] * i[5] + s[12] * i[10] + s[13] * i[15], t[11] = s[10] * i[1] + s[11] * i[6] + s[12] * i[11] + s[13] * i[16], t[12] = s[10] * i[2] + s[11] * i[7] + s[12] * i[12] + s[13] * i[17], t[13] = s[10] * i[3] + s[11] * i[8] + s[12] * i[13] + s[13] * i[18], t[14] = s[10] * i[4] + s[11] * i[9] + s[12] * i[14] + s[13] * i[19] + s[14], t[15] = s[15] * i[0] + s[16] * i[5] + s[17] * i[10] + s[18] * i[15], t[16] = s[15] * i[1] + s[16] * i[6] + s[17] * i[11] + s[18] * i[16], t[17] = s[15] * i[2] + s[16] * i[7] + s[17] * i[12] + s[18] * i[17], t[18] = s[15] * i[3] + s[16] * i[8] + s[17] * i[13] + s[18] * i[18], t[19] = s[15] * i[4] + s[16] * i[9] + s[17] * i[14] + s[18] * i[19] + s[19], t;
  }
  _colorMatrix(t) {
    const s = new Float32Array(t);
    return s[4] /= 255, s[9] /= 255, s[14] /= 255, s[19] /= 255, s;
  }
  brightness(t, s) {
    const i = [
      t,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  tint(t, s) {
    const i = t >> 16 & 255, r = t >> 8 & 255, n = t & 255, o = [
      i / 255,
      0,
      0,
      0,
      0,
      0,
      r / 255,
      0,
      0,
      0,
      0,
      0,
      n / 255,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(o, s);
  }
  greyscale(t, s) {
    const i = [
      t,
      t,
      t,
      0,
      0,
      t,
      t,
      t,
      0,
      0,
      t,
      t,
      t,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  blackAndWhite(t) {
    const s = [
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  hue(t, s) {
    t = (t || 0) / 180 * Math.PI;
    const i = Math.cos(t), r = Math.sin(t), n = Math.sqrt, o = 1 / 3, a = n(o), h = i + (1 - i) * o, l = o * (1 - i) - a * r, c = o * (1 - i) + a * r, u = o * (1 - i) + a * r, d = i + o * (1 - i), f = o * (1 - i) - a * r, p = o * (1 - i) - a * r, _ = o * (1 - i) + a * r, m = i + o * (1 - i), v = [
      h,
      l,
      c,
      0,
      0,
      u,
      d,
      f,
      0,
      0,
      p,
      _,
      m,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(v, s);
  }
  contrast(t, s) {
    const i = (t || 0) + 1, r = -0.5 * (i - 1), n = [
      i,
      0,
      0,
      0,
      r,
      0,
      i,
      0,
      0,
      r,
      0,
      0,
      i,
      0,
      r,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(n, s);
  }
  saturate(t = 0, s) {
    const i = t * 2 / 3 + 1, r = (i - 1) * -0.5, n = [
      i,
      r,
      r,
      0,
      0,
      r,
      i,
      r,
      0,
      0,
      r,
      r,
      i,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(n, s);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(t) {
    const s = [
      -1,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      -1,
      1,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  sepia(t) {
    const s = [
      0.393,
      0.7689999,
      0.18899999,
      0,
      0,
      0.349,
      0.6859999,
      0.16799999,
      0,
      0,
      0.272,
      0.5339999,
      0.13099999,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  technicolor(t) {
    const s = [
      1.9125277891456083,
      -0.8545344976951645,
      -0.09155508482755585,
      0,
      11.793603434377337,
      -0.3087833385928097,
      1.7658908555458428,
      -0.10601743074722245,
      0,
      -70.35205161461398,
      -0.231103377548616,
      -0.7501899197440212,
      1.847597816108189,
      0,
      30.950940869491138,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  polaroid(t) {
    const s = [
      1.438,
      -0.062,
      -0.062,
      0,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  toBGR(t) {
    const s = [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  kodachrome(t) {
    const s = [
      1.1285582396593525,
      -0.3967382283601348,
      -0.03992559172921793,
      0,
      63.72958762196502,
      -0.16404339962244616,
      1.0835251566291304,
      -0.05498805115633132,
      0,
      24.732407896706203,
      -0.16786010706155763,
      -0.5603416277695248,
      1.6014850761964943,
      0,
      35.62982807460946,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  browni(t) {
    const s = [
      0.5997023498159715,
      0.34553243048391263,
      -0.2708298674538042,
      0,
      47.43192855600873,
      -0.037703249837783157,
      0.8609577587992641,
      0.15059552388459913,
      0,
      -36.96841498319127,
      0.24113635128153335,
      -0.07441037908422492,
      0.44972182064877153,
      0,
      -7.562075277591283,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  vintage(t) {
    const s = [
      0.6279345635605994,
      0.3202183420819367,
      -0.03965408211312453,
      0,
      9.651285835294123,
      0.02578397704808868,
      0.6441188644374771,
      0.03259127616149294,
      0,
      7.462829176470591,
      0.0466055556782719,
      -0.0851232987247891,
      0.5241648018700465,
      0,
      5.159190588235296,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  colorTone(t, s, i, r, n) {
    t = t || 0.2, s = s || 0.15, i = i || 16770432, r = r || 3375104;
    const o = (i >> 16 & 255) / 255, a = (i >> 8 & 255) / 255, h = (i & 255) / 255, l = (r >> 16 & 255) / 255, c = (r >> 8 & 255) / 255, u = (r & 255) / 255, d = [
      0.3,
      0.59,
      0.11,
      0,
      0,
      o,
      a,
      h,
      t,
      0,
      l,
      c,
      u,
      s,
      0,
      o - l,
      a - c,
      h - u,
      0,
      0
    ];
    this._loadMatrix(d, n);
  }
  night(t, s) {
    t = t || 0.1;
    const i = [
      t * -2,
      -t,
      0,
      0,
      0,
      -t,
      0,
      t,
      0,
      0,
      0,
      t,
      t * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  predator(t, s) {
    const i = [
      11.224130630493164 * t,
      -4.794486999511719 * t,
      -2.8746118545532227 * t,
      0 * t,
      0.40342438220977783 * t,
      -3.6330697536468506 * t,
      9.193157196044922 * t,
      -2.951810836791992 * t,
      0 * t,
      -1.316135048866272 * t,
      -3.2184197902679443 * t,
      -4.2375030517578125 * t,
      7.476448059082031 * t,
      0 * t,
      0.8044459223747253 * t,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  lsd(t) {
    const s = [
      2,
      -0.4,
      0.5,
      0,
      0,
      -0.5,
      2,
      -0.4,
      0,
      0,
      -0.4,
      -0.5,
      3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  reset() {
    const t = [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(t, !1);
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(t) {
    this.uniforms.m = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
qi.prototype.grayscale = qi.prototype.greyscale;
var nd = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`, od = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class ad extends gt {
  constructor(t, s) {
    const i = new tt();
    t.renderable = !1, super(od, nd, {
      mapSampler: t._texture,
      filterMatrix: i,
      scale: { x: 1, y: 1 },
      rotation: new Float32Array([1, 0, 0, 1])
    }), this.maskSprite = t, this.maskMatrix = i, s == null && (s = 20), this.scale = new $(s, s);
  }
  apply(t, s, i, r) {
    this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
    const n = this.maskSprite.worldTransform, o = Math.sqrt(n.a * n.a + n.b * n.b), a = Math.sqrt(n.c * n.c + n.d * n.d);
    o !== 0 && a !== 0 && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / a, this.uniforms.rotation[3] = n.d / a), t.applyFilter(this, s, i, r);
  }
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(t) {
    this.uniforms.mapSampler = t;
  }
}
var hd = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`, ld = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class cd extends gt {
  constructor() {
    super(ld, hd);
  }
}
var ud = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class dd extends gt {
  constructor(t = 0.5, s = Math.random()) {
    super(mo, ud, {
      uNoise: 0,
      uSeed: 0
    }), this.noise = t, this.seed = s;
  }
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(t) {
    this.uniforms.uNoise = t;
  }
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(t) {
    this.uniforms.uSeed = t;
  }
}
const qr = {
  AlphaFilter: Zu,
  BlurFilter: id,
  BlurFilterPass: Yi,
  ColorMatrixFilter: qi,
  DisplacementFilter: ad,
  FXAAFilter: cd,
  NoiseFilter: dd
};
Object.entries(qr).forEach(([e, t]) => {
  Object.defineProperty(qr, e, {
    get() {
      return Y("7.1.0", `filters.${e} has moved to ${e}`), t;
    }
  });
});
class os {
  constructor(t) {
    this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = os.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new $(), this.page = new $(), this.AT_TARGET = 1, this.BUBBLING_PHASE = 2, this.CAPTURING_PHASE = 3, this.NONE = 0, this.manager = t;
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
  }
  initEvent(t, s, i) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  initUIEvent(t, s, i, r, n) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  preventDefault() {
    this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0;
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class Hs extends os {
  constructor() {
    super(...arguments), this.client = new $(), this.movement = new $(), this.offset = new $(), this.global = new $(), this.screen = new $();
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getModifierState(t) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t);
  }
  initMouseEvent(t, s, i, r, n, o, a, h, l, c, u, d, f, p, _) {
    throw new Error("Method not implemented.");
  }
}
class Rt extends Hs {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1;
  }
  getCoalescedEvents() {
    return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : [];
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class Oe extends Hs {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
  }
}
Oe.DOM_DELTA_PIXEL = 0;
Oe.DOM_DELTA_LINE = 1;
Oe.DOM_DELTA_PAGE = 2;
const fd = 2048, pd = new $(), xi = new $();
class md {
  constructor(t) {
    this.dispatch = new ge(), this.moveOnAll = !1, this.mappingState = {
      trackingData: {}
    }, this.eventPool = /* @__PURE__ */ new Map(), this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(t, s) {
    this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
      fn: s,
      priority: 0
    }), this.mappingTable[t].sort((i, r) => i.priority - r.priority);
  }
  dispatchEvent(t, s) {
    t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, s), this.dispatch.emit(s || t.type, t);
  }
  mapEvent(t) {
    if (!this.rootTarget)
      return;
    const s = this.mappingTable[t.type];
    if (s)
      for (let i = 0, r = s.length; i < r; i++)
        s[i].fn(t);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
  }
  hitTest(t, s) {
    const i = this.hitTestRecursive(this.rootTarget, this.rootTarget.interactive, pd.set(t, s), this.hitTestFn, this.hitPruneFn);
    return i && i[0];
  }
  propagate(t, s) {
    if (!t.target)
      return;
    const i = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let r = 0, n = i.length - 1; r < n; r++)
      if (t.currentTarget = i[r], this.notifyTarget(t, s), t.propagationStopped || t.propagationImmediatelyStopped)
        return;
    if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, s), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let r = i.length - 2; r >= 0; r--)
        if (t.currentTarget = i[r], this.notifyTarget(t, s), t.propagationStopped || t.propagationImmediatelyStopped)
          return;
    }
  }
  all(t, s, i = this.rootTarget) {
    t.eventPhase = t.BUBBLING_PHASE;
    const r = i.children;
    if (r)
      for (let n = 0; n < r.length; n++)
        this.all(t, s, r[n]);
    t.currentTarget = i, this.notifyTarget(t, s);
  }
  propagationPath(t) {
    const s = [t];
    for (let i = 0; i < fd && t !== this.rootTarget; i++) {
      if (!t.parent)
        throw new Error("Cannot find propagation path to disconnected target");
      s.push(t.parent), t = t.parent;
    }
    return s.reverse(), s;
  }
  hitTestRecursive(t, s, i, r, n) {
    if (!t || !t.visible || n(t, i))
      return null;
    if (t.interactiveChildren && t.children) {
      const o = t.children;
      for (let a = o.length - 1; a >= 0; a--) {
        const h = o[a], l = this.hitTestRecursive(h, s || h.interactive, i, r, n);
        if (l) {
          if (l.length > 0 && !l[l.length - 1].parent)
            continue;
          return (l.length > 0 || t.interactive) && l.push(t), l;
        }
      }
    }
    return s && r(t, i) ? t.interactive ? [t] : [] : null;
  }
  hitPruneFn(t, s) {
    var i;
    if (t.hitArea && (t.worldTransform.applyInverse(s, xi), !t.hitArea.contains(xi.x, xi.y)))
      return !0;
    if (t._mask) {
      const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
      if (r && !((i = r.containsPoint) != null && i.call(r, s)))
        return !0;
    }
    return !1;
  }
  hitTestFn(t, s) {
    return t.hitArea ? !0 : t.containsPoint ? t.containsPoint(s) : !1;
  }
  notifyTarget(t, s) {
    var n, o;
    s = s ?? t.type;
    const i = `on${s}`;
    (o = (n = t.currentTarget)[i]) == null || o.call(n, t);
    const r = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${s}capture` : s;
    this.notifyListeners(t, r), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, s);
  }
  mapPointerDown(t) {
    if (!(t instanceof Rt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.createPointerEvent(t);
    if (this.dispatchEvent(s, "pointerdown"), s.pointerType === "touch")
      this.dispatchEvent(s, "touchstart");
    else if (s.pointerType === "mouse" || s.pointerType === "pen") {
      const r = s.button === 2;
      this.dispatchEvent(s, r ? "rightdown" : "mousedown");
    }
    const i = this.trackingData(t.pointerId);
    i.pressTargetsByButton[t.button] = s.composedPath(), this.freeEvent(s);
  }
  mapPointerMove(t) {
    var a, h;
    if (!(t instanceof Rt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.createPointerEvent(t), i = s.pointerType === "mouse" || s.pointerType === "pen", r = this.trackingData(t.pointerId), n = this.findMountedTarget(r.overTargets);
    if (((a = r.overTargets) == null ? void 0 : a.length) > 0 && n !== s.target) {
      const l = t.type === "mousemove" ? "mouseout" : "pointerout", c = this.createPointerEvent(t, l, n);
      if (this.dispatchEvent(c, "pointerout"), i && this.dispatchEvent(c, "mouseout"), !s.composedPath().includes(n)) {
        const u = this.createPointerEvent(t, "pointerleave", n);
        for (u.eventPhase = u.AT_TARGET; u.target && !s.composedPath().includes(u.target); )
          u.currentTarget = u.target, this.notifyTarget(u), i && this.notifyTarget(u, "mouseleave"), u.target = u.target.parent;
        this.freeEvent(u);
      }
      this.freeEvent(c);
    }
    if (n !== s.target) {
      const l = t.type === "mousemove" ? "mouseover" : "pointerover", c = this.clonePointerEvent(s, l);
      this.dispatchEvent(c, "pointerover"), i && this.dispatchEvent(c, "mouseover");
      let u = n == null ? void 0 : n.parent;
      for (; u && u !== this.rootTarget.parent && u !== s.target; )
        u = u.parent;
      if (!u || u === this.rootTarget.parent) {
        const f = this.clonePointerEvent(s, "pointerenter");
        for (f.eventPhase = f.AT_TARGET; f.target && f.target !== n && f.target !== this.rootTarget.parent; )
          f.currentTarget = f.target, this.notifyTarget(f), i && this.notifyTarget(f, "mouseenter"), f.target = f.target.parent;
        this.freeEvent(f);
      }
      this.freeEvent(c);
    }
    const o = this.moveOnAll ? "all" : "dispatchEvent";
    this[o](s, "pointermove"), this.all(s, "globalpointermove"), s.pointerType === "touch" && (this[o](s, "touchmove"), this.all(s, "globaltouchmove")), i && (this[o](s, "mousemove"), this.all(s, "globalmousemove"), this.cursor = (h = s.target) == null ? void 0 : h.cursor), r.overTargets = s.composedPath(), this.freeEvent(s);
  }
  mapPointerOver(t) {
    var o;
    if (!(t instanceof Rt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.trackingData(t.pointerId), i = this.createPointerEvent(t), r = i.pointerType === "mouse" || i.pointerType === "pen";
    this.dispatchEvent(i, "pointerover"), r && this.dispatchEvent(i, "mouseover"), i.pointerType === "mouse" && (this.cursor = (o = i.target) == null ? void 0 : o.cursor);
    const n = this.clonePointerEvent(i, "pointerenter");
    for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent; )
      n.currentTarget = n.target, this.notifyTarget(n), r && this.notifyTarget(n, "mouseenter"), n.target = n.target.parent;
    s.overTargets = i.composedPath(), this.freeEvent(i), this.freeEvent(n);
  }
  mapPointerOut(t) {
    if (!(t instanceof Rt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.trackingData(t.pointerId);
    if (s.overTargets) {
      const i = t.pointerType === "mouse" || t.pointerType === "pen", r = this.findMountedTarget(s.overTargets), n = this.createPointerEvent(t, "pointerout", r);
      this.dispatchEvent(n), i && this.dispatchEvent(n, "mouseout");
      const o = this.createPointerEvent(t, "pointerleave", r);
      for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent; )
        o.currentTarget = o.target, this.notifyTarget(o), i && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
      s.overTargets = null, this.freeEvent(n), this.freeEvent(o);
    }
    this.cursor = null;
  }
  mapPointerUp(t) {
    if (!(t instanceof Rt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = performance.now(), i = this.createPointerEvent(t);
    if (this.dispatchEvent(i, "pointerup"), i.pointerType === "touch")
      this.dispatchEvent(i, "touchend");
    else if (i.pointerType === "mouse" || i.pointerType === "pen") {
      const a = i.button === 2;
      this.dispatchEvent(i, a ? "rightup" : "mouseup");
    }
    const r = this.trackingData(t.pointerId), n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
    let o = n;
    if (n && !i.composedPath().includes(n)) {
      let a = n;
      for (; a && !i.composedPath().includes(a); ) {
        if (i.currentTarget = a, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch")
          this.notifyTarget(i, "touchendoutside");
        else if (i.pointerType === "mouse" || i.pointerType === "pen") {
          const h = i.button === 2;
          this.notifyTarget(i, h ? "rightupoutside" : "mouseupoutside");
        }
        a = a.parent;
      }
      delete r.pressTargetsByButton[t.button], o = a;
    }
    if (o) {
      const a = this.clonePointerEvent(i, "click");
      a.target = o, a.path = null, r.clicksByButton[t.button] || (r.clicksByButton[t.button] = {
        clickCount: 0,
        target: a.target,
        timeStamp: s
      });
      const h = r.clicksByButton[t.button];
      if (h.target === a.target && s - h.timeStamp < 200 ? ++h.clickCount : h.clickCount = 1, h.target = a.target, h.timeStamp = s, a.detail = h.clickCount, a.pointerType === "mouse") {
        const l = a.button === 2;
        this.dispatchEvent(a, l ? "rightclick" : "click");
      } else
        a.pointerType === "touch" && this.dispatchEvent(a, "tap");
      this.dispatchEvent(a, "pointertap"), this.freeEvent(a);
    }
    this.freeEvent(i);
  }
  mapPointerUpOutside(t) {
    if (!(t instanceof Rt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.trackingData(t.pointerId), i = this.findMountedTarget(s.pressTargetsByButton[t.button]), r = this.createPointerEvent(t);
    if (i) {
      let n = i;
      for (; n; )
        r.currentTarget = n, this.notifyTarget(r, "pointerupoutside"), r.pointerType === "touch" ? this.notifyTarget(r, "touchendoutside") : (r.pointerType === "mouse" || r.pointerType === "pen") && this.notifyTarget(r, r.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
      delete s.pressTargetsByButton[t.button];
    }
    this.freeEvent(r);
  }
  mapWheel(t) {
    if (!(t instanceof Oe)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const s = this.createWheelEvent(t);
    this.dispatchEvent(s), this.freeEvent(s);
  }
  findMountedTarget(t) {
    if (!t)
      return null;
    let s = t[0];
    for (let i = 1; i < t.length && t[i].parent === s; i++)
      s = t[i];
    return s;
  }
  createPointerEvent(t, s, i) {
    const r = this.allocateEvent(Rt);
    return this.copyPointerData(t, r), this.copyMouseData(t, r), this.copyData(t, r), r.nativeEvent = t.nativeEvent, r.originalEvent = t, r.target = i ?? this.hitTest(r.global.x, r.global.y), typeof s == "string" && (r.type = s), r;
  }
  createWheelEvent(t) {
    const s = this.allocateEvent(Oe);
    return this.copyWheelData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.nativeEvent = t.nativeEvent, s.originalEvent = t, s.target = this.hitTest(s.global.x, s.global.y), s;
  }
  clonePointerEvent(t, s) {
    const i = this.allocateEvent(Rt);
    return i.nativeEvent = t.nativeEvent, i.originalEvent = t.originalEvent, this.copyPointerData(t, i), this.copyMouseData(t, i), this.copyData(t, i), i.target = t.target, i.path = t.composedPath().slice(), i.type = s ?? i.type, i;
  }
  copyWheelData(t, s) {
    s.deltaMode = t.deltaMode, s.deltaX = t.deltaX, s.deltaY = t.deltaY, s.deltaZ = t.deltaZ;
  }
  copyPointerData(t, s) {
    t instanceof Rt && s instanceof Rt && (s.pointerId = t.pointerId, s.width = t.width, s.height = t.height, s.isPrimary = t.isPrimary, s.pointerType = t.pointerType, s.pressure = t.pressure, s.tangentialPressure = t.tangentialPressure, s.tiltX = t.tiltX, s.tiltY = t.tiltY, s.twist = t.twist);
  }
  copyMouseData(t, s) {
    t instanceof Hs && s instanceof Hs && (s.altKey = t.altKey, s.button = t.button, s.buttons = t.buttons, s.client.copyFrom(t.client), s.ctrlKey = t.ctrlKey, s.metaKey = t.metaKey, s.movement.copyFrom(t.movement), s.screen.copyFrom(t.screen), s.global.copyFrom(t.global));
  }
  copyData(t, s) {
    s.isTrusted = t.isTrusted, s.srcElement = t.srcElement, s.timeStamp = performance.now(), s.type = t.type, s.detail = t.detail, s.view = t.view, s.which = t.which, s.layer.copyFrom(t.layer), s.page.copyFrom(t.page);
  }
  trackingData(t) {
    return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
      pressTargetsByButton: {},
      clicksByButton: {},
      overTarget: null
    }), this.mappingState.trackingData[t];
  }
  allocateEvent(t) {
    this.eventPool.has(t) || this.eventPool.set(t, []);
    const s = this.eventPool.get(t).pop() || new t(this);
    return s.eventPhase = s.NONE, s.currentTarget = null, s.path = null, s.target = null, s;
  }
  freeEvent(t) {
    if (t.manager !== this)
      throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const s = t.constructor;
    this.eventPool.has(s) || this.eventPool.set(s, []), this.eventPool.get(s).push(t);
  }
  notifyListeners(t, s) {
    const i = t.currentTarget._events[s];
    if (i)
      if ("fn" in i)
        i.once && t.currentTarget.removeListener(s, i.fn, void 0, !0), i.fn.call(i.context, t);
      else
        for (let r = 0, n = i.length; r < n && !t.propagationImmediatelyStopped; r++)
          i[r].once && t.currentTarget.removeListener(s, i[r].fn, void 0, !0), i[r].fn.call(i[r].context, t);
  }
}
const gd = 1, _d = {
  touchstart: "pointerdown",
  touchend: "pointerup",
  touchendoutside: "pointerupoutside",
  touchmove: "pointermove",
  touchcancel: "pointercancel"
};
class To {
  constructor(t) {
    this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = t, this.rootBoundary = new md(null), this.autoPreventDefault = !0, this.eventsAdded = !1, this.rootPointerEvent = new Rt(null), this.rootWheelEvent = new Oe(null), this.cursorStyles = {
      default: "inherit",
      pointer: "pointer"
    }, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
  }
  init() {
    const { view: t, resolution: s } = this.renderer;
    this.setTargetElement(t), this.resolution = s;
  }
  resolutionChange(t) {
    this.resolution = t;
  }
  destroy() {
    this.setTargetElement(null), this.renderer = null;
  }
  setCursor(t) {
    t = t || "default";
    let s = !0;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (s = !1), this.currentCursor === t)
      return;
    this.currentCursor = t;
    const i = this.cursorStyles[t];
    if (i)
      switch (typeof i) {
        case "string":
          s && (this.domElement.style.cursor = i);
          break;
        case "function":
          i(t);
          break;
        case "object":
          s && Object.assign(this.domElement.style, i);
          break;
      }
    else
      s && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t);
  }
  onPointerDown(t) {
    if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
      return;
    const s = this.normalizeToPointerData(t);
    this.autoPreventDefault && s[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();
    for (let i = 0, r = s.length; i < r; i++) {
      const n = s[i], o = this.bootstrapEvent(this.rootPointerEvent, n);
      this.rootBoundary.mapEvent(o);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerMove(t) {
    if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
      return;
    const s = this.normalizeToPointerData(t);
    for (let i = 0, r = s.length; i < r; i++) {
      const n = this.bootstrapEvent(this.rootPointerEvent, s[i]);
      this.rootBoundary.mapEvent(n);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerUp(t) {
    if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
      return;
    let s = t.target;
    t.composedPath && t.composedPath().length > 0 && (s = t.composedPath()[0]);
    const i = s !== this.domElement ? "outside" : "", r = this.normalizeToPointerData(t);
    for (let n = 0, o = r.length; n < o; n++) {
      const a = this.bootstrapEvent(this.rootPointerEvent, r[n]);
      a.type += i, this.rootBoundary.mapEvent(a);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerOverOut(t) {
    if (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && t.pointerType === "touch")
      return;
    const s = this.normalizeToPointerData(t);
    for (let i = 0, r = s.length; i < r; i++) {
      const n = this.bootstrapEvent(this.rootPointerEvent, s[i]);
      this.rootBoundary.mapEvent(n);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onWheel(t) {
    const s = this.normalizeWheelEvent(t);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(s);
  }
  setTargetElement(t) {
    this.removeEvents(), this.domElement = t, this.addEvents();
  }
  addEvents() {
    if (this.eventsAdded || !this.domElement)
      return;
    const t = this.domElement.style;
    t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0), this.domElement.addEventListener("pointerdown", this.onPointerDown, !0), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0), globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0), this.domElement.addEventListener("mousedown", this.onPointerDown, !0), this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0), globalThis.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0), this.domElement.addEventListener("touchend", this.onPointerUp, !0), this.domElement.addEventListener("touchmove", this.onPointerMove, !0)), this.domElement.addEventListener("wheel", this.onWheel, {
      passive: !0,
      capture: !0
    }), this.eventsAdded = !0;
  }
  removeEvents() {
    if (!this.eventsAdded || !this.domElement)
      return;
    const t = this.domElement.style;
    globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0), this.domElement.removeEventListener("mousedown", this.onPointerDown, !0), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0), this.domElement.removeEventListener("touchend", this.onPointerUp, !0), this.domElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this.eventsAdded = !1;
  }
  mapPositionToPoint(t, s, i) {
    let r;
    this.domElement.parentElement ? r = this.domElement.getBoundingClientRect() : r = {
      x: 0,
      y: 0,
      width: this.domElement.width,
      height: this.domElement.height,
      left: 0,
      top: 0
    };
    const n = 1 / this.resolution;
    t.x = (s - r.left) * (this.domElement.width / r.width) * n, t.y = (i - r.top) * (this.domElement.height / r.height) * n;
  }
  normalizeToPointerData(t) {
    const s = [];
    if (this.supportsTouchEvents && t instanceof TouchEvent)
      for (let i = 0, r = t.changedTouches.length; i < r; i++) {
        const n = t.changedTouches[i];
        typeof n.button > "u" && (n.button = 0), typeof n.buttons > "u" && (n.buttons = 1), typeof n.isPrimary > "u" && (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"), typeof n.width > "u" && (n.width = n.radiusX || 1), typeof n.height > "u" && (n.height = n.radiusY || 1), typeof n.tiltX > "u" && (n.tiltX = 0), typeof n.tiltY > "u" && (n.tiltY = 0), typeof n.pointerType > "u" && (n.pointerType = "touch"), typeof n.pointerId > "u" && (n.pointerId = n.identifier || 0), typeof n.pressure > "u" && (n.pressure = n.force || 0.5), typeof n.twist > "u" && (n.twist = 0), typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0), typeof n.layerX > "u" && (n.layerX = n.offsetX = n.clientX), typeof n.layerY > "u" && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, n.type = t.type, s.push(n);
      }
    else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
      const i = t;
      typeof i.isPrimary > "u" && (i.isPrimary = !0), typeof i.width > "u" && (i.width = 1), typeof i.height > "u" && (i.height = 1), typeof i.tiltX > "u" && (i.tiltX = 0), typeof i.tiltY > "u" && (i.tiltY = 0), typeof i.pointerType > "u" && (i.pointerType = "mouse"), typeof i.pointerId > "u" && (i.pointerId = gd), typeof i.pressure > "u" && (i.pressure = 0.5), typeof i.twist > "u" && (i.twist = 0), typeof i.tangentialPressure > "u" && (i.tangentialPressure = 0), i.isNormalized = !0, s.push(i);
    } else
      s.push(t);
    return s;
  }
  normalizeWheelEvent(t) {
    const s = this.rootWheelEvent;
    return this.transferMouseData(s, t), s.deltaX = t.deltaX, s.deltaY = t.deltaY, s.deltaZ = t.deltaZ, s.deltaMode = t.deltaMode, this.mapPositionToPoint(s.screen, t.clientX, t.clientY), s.global.copyFrom(s.screen), s.offset.copyFrom(s.screen), s.nativeEvent = t, s.type = t.type, s;
  }
  bootstrapEvent(t, s) {
    return t.originalEvent = null, t.nativeEvent = s, t.pointerId = s.pointerId, t.width = s.width, t.height = s.height, t.isPrimary = s.isPrimary, t.pointerType = s.pointerType, t.pressure = s.pressure, t.tangentialPressure = s.tangentialPressure, t.tiltX = s.tiltX, t.tiltY = s.tiltY, t.twist = s.twist, this.transferMouseData(t, s), this.mapPositionToPoint(t.screen, s.clientX, s.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.isTrusted = s.isTrusted, t.type === "pointerleave" && (t.type = "pointerout"), t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")), t.type.startsWith("touch") && (t.type = _d[t.type] || t.type), t;
  }
  transferMouseData(t, s) {
    t.isTrusted = s.isTrusted, t.srcElement = s.srcElement, t.timeStamp = performance.now(), t.type = s.type, t.altKey = s.altKey, t.button = s.button, t.buttons = s.buttons, t.client.x = s.clientX, t.client.y = s.clientY, t.ctrlKey = s.ctrlKey, t.metaKey = s.metaKey, t.movement.x = s.movementX, t.movement.y = s.movementY, t.page.x = s.pageX, t.page.y = s.pageY, t.relatedTarget = null, t.shiftKey = s.shiftKey;
  }
}
To.extension = {
  name: "events",
  type: [
    P.RendererSystem,
    P.CanvasRendererSystem
  ]
};
O.add(To);
const xd = {
  onclick: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onglobalmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmouseupoutside: null,
  onpointercancel: null,
  onpointerdown: null,
  onpointerenter: null,
  onpointerleave: null,
  onpointermove: null,
  onglobalpointermove: null,
  onpointerout: null,
  onpointerover: null,
  onpointertap: null,
  onpointerup: null,
  onpointerupoutside: null,
  onrightclick: null,
  onrightdown: null,
  onrightup: null,
  onrightupoutside: null,
  ontap: null,
  ontouchcancel: null,
  ontouchend: null,
  ontouchendoutside: null,
  ontouchmove: null,
  onglobaltouchmove: null,
  ontouchstart: null,
  onwheel: null,
  interactive: !1,
  interactiveChildren: !0,
  hitArea: null,
  addEventListener(e, t, s) {
    const i = typeof s == "boolean" && s || typeof s == "object" && s.capture, r = typeof t == "function" ? void 0 : t;
    e = i ? `${e}capture` : e, t = typeof t == "function" ? t : t.handleEvent, this.on(e, t, r);
  },
  removeEventListener(e, t, s) {
    const i = typeof s == "boolean" && s || typeof s == "object" && s.capture, r = typeof t == "function" ? void 0 : t;
    e = i ? `${e}capture` : e, t = typeof t == "function" ? t : t.handleEvent, this.off(e, t, r);
  },
  dispatchEvent(e) {
    if (!(e instanceof os))
      throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
    return e.defaultPrevented = !1, e.path = null, e.target = this, e.manager.dispatchEvent(e), !e.defaultPrevented;
  }
};
it.mixin(xd);
const vd = {
  accessible: !1,
  accessibleTitle: null,
  accessibleHint: null,
  tabIndex: 0,
  _accessibleActive: !1,
  _accessibleDiv: null,
  accessibleType: "button",
  accessiblePointerEvents: "auto",
  accessibleChildren: !0,
  renderId: -1
};
it.mixin(vd);
const yd = 9, bs = 100, bd = 0, Td = 0, Kr = 2, Zr = 1, Ed = -1e3, wd = -1e3, Ad = 2;
class Eo {
  constructor(t) {
    this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (Jt.tablet || Jt.phone) && this.createTouchHook();
    const s = document.createElement("div");
    s.style.width = `${bs}px`, s.style.height = `${bs}px`, s.style.position = "absolute", s.style.top = `${bd}px`, s.style.left = `${Td}px`, s.style.zIndex = Kr.toString(), this.div = s, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const t = document.createElement("button");
    t.style.width = `${Zr}px`, t.style.height = `${Zr}px`, t.style.position = "absolute", t.style.top = `${Ed}px`, t.style.left = `${wd}px`, t.style.zIndex = Ad.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", () => {
      this._isMobileAccessibility = !0, this.activate(), this.destroyTouchHook();
    }), document.body.appendChild(t), this._hookDiv = t;
  }
  destroyTouchHook() {
    this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
  }
  activate() {
    var t;
    this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
  }
  deactivate() {
    var t;
    !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), (t = this.div.parentNode) == null || t.removeChild(this.div));
  }
  updateAccessibleObjects(t) {
    if (!t.visible || !t.accessibleChildren)
      return;
    t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
    const s = t.children;
    if (s)
      for (let i = 0; i < s.length; i++)
        this.updateAccessibleObjects(s[i]);
  }
  update() {
    const t = performance.now();
    if (Jt.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen))
      return;
    this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const { x: s, y: i, width: r, height: n } = this.renderer.view.getBoundingClientRect(), { width: o, height: a, resolution: h } = this.renderer, l = r / o * h, c = n / a * h;
    let u = this.div;
    u.style.left = `${s}px`, u.style.top = `${i}px`, u.style.width = `${o}px`, u.style.height = `${a}px`;
    for (let d = 0; d < this.children.length; d++) {
      const f = this.children[d];
      if (f.renderId !== this.renderId)
        f._accessibleActive = !1, De(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
      else {
        u = f._accessibleDiv;
        let p = f.hitArea;
        const _ = f.worldTransform;
        f.hitArea ? (u.style.left = `${(_.tx + p.x * _.a) * l}px`, u.style.top = `${(_.ty + p.y * _.d) * c}px`, u.style.width = `${p.width * _.a * l}px`, u.style.height = `${p.height * _.d * c}px`) : (p = f.getBounds(), this.capHitArea(p), u.style.left = `${p.x * l}px`, u.style.top = `${p.y * c}px`, u.style.width = `${p.width * l}px`, u.style.height = `${p.height * c}px`, u.title !== f.accessibleTitle && f.accessibleTitle !== null && (u.title = f.accessibleTitle), u.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && u.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex) && (u.title = f.accessibleTitle, u.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(u));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(t) {
    t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
  }
  capHitArea(t) {
    t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
    const { width: s, height: i } = this.renderer;
    t.x + t.width > s && (t.width = s - t.x), t.y + t.height > i && (t.height = i - t.y);
  }
  addChild(t) {
    let s = this.pool.pop();
    s || (s = document.createElement("button"), s.style.width = `${bs}px`, s.style.height = `${bs}px`, s.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", s.style.position = "absolute", s.style.zIndex = Kr.toString(), s.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? s.setAttribute("aria-live", "off") : s.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? s.setAttribute("aria-relevant", "additions") : s.setAttribute("aria-relevant", "text"), s.addEventListener("click", this._onClick.bind(this)), s.addEventListener("focus", this._onFocus.bind(this)), s.addEventListener("focusout", this._onFocusOut.bind(this))), s.style.pointerEvents = t.accessiblePointerEvents, s.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? s.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (s.title = `displayObject ${t.tabIndex}`), t.accessibleHint && t.accessibleHint !== null && s.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(s), t._accessibleActive = !0, t._accessibleDiv = s, s.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
  }
  _dispatchEvent(t, s) {
    const { displayObject: i } = t.target, r = this.renderer.events.rootBoundary, n = Object.assign(new os(r), { target: i });
    r.rootTarget = this.renderer.lastObjectRendered, s.forEach((o) => r.dispatchEvent(n, o));
  }
  _onClick(t) {
    this._dispatchEvent(t, ["click", "pointertap", "tap"]);
  }
  _onFocus(t) {
    t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"]);
  }
  _onFocusOut(t) {
    t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"]);
  }
  _onKeyDown(t) {
    t.keyCode === yd && this.activate();
  }
  _onMouseMove(t) {
    t.movementX === 0 && t.movementY === 0 || this.deactivate();
  }
  destroy() {
    this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
  }
}
Eo.extension = {
  name: "accessibility",
  type: [
    P.RendererPlugin,
    P.CanvasRendererPlugin
  ]
};
O.add(Eo);
const Ki = class {
  constructor(e) {
    this.stage = new bt(), e = Object.assign({
      forceCanvas: !1
    }, e), this.renderer = ku(e), Ki._plugins.forEach((t) => {
      t.init.call(this, e);
    });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    return this.renderer.view;
  }
  get screen() {
    return this.renderer.screen;
  }
  destroy(e, t) {
    const s = Ki._plugins.slice(0);
    s.reverse(), s.forEach((i) => {
      i.destroy.call(this);
    }), this.stage.destroy(t), this.stage = null, this.renderer.destroy(e), this.renderer = null;
  }
};
let dr = Ki;
dr._plugins = [];
O.handleByList(P.Application, dr._plugins);
class wo {
  static init(t) {
    Object.defineProperty(this, "resizeTo", {
      set(s) {
        globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = s, s && (globalThis.addEventListener("resize", this.queueResize), this.resize());
      },
      get() {
        return this._resizeTo;
      }
    }), this.queueResize = () => {
      this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
    }, this.cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
    }, this.resize = () => {
      if (!this._resizeTo)
        return;
      this.cancelResize();
      let s, i;
      if (this._resizeTo === globalThis.window)
        s = globalThis.innerWidth, i = globalThis.innerHeight;
      else {
        const { clientWidth: r, clientHeight: n } = this._resizeTo;
        s = r, i = n;
      }
      this.renderer.resize(s, i), this.render();
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
  }
}
wo.extension = P.Application;
O.add(wo);
const Jr = {
  loader: P.LoadParser,
  resolver: P.ResolveParser,
  cache: P.CacheParser,
  detection: P.DetectionParser
};
O.handle(P.Asset, (e) => {
  const t = e.ref;
  Object.entries(Jr).filter(([s]) => !!t[s]).forEach(([s, i]) => O.add(Object.assign(t[s], { extension: t[s].extension ?? i })));
}, (e) => {
  const t = e.ref;
  Object.keys(Jr).filter((s) => !!t[s]).forEach((s) => O.remove(t[s]));
});
class Sd {
  constructor(t, s = !1) {
    this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = s;
  }
  add(t) {
    t.forEach((s) => {
      this._assetList.push(s);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [], s = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < s; i++)
        t.push(this._assetList.pop());
      await this._loader.load(t), this._isLoading = !1, this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next());
  }
}
function Ao(e, t) {
  if (Array.isArray(t)) {
    for (const s of t)
      if (e.startsWith(`data:${s}`))
        return !0;
    return !1;
  }
  return e.startsWith(`data:${t}`);
}
function Js(e, t) {
  const s = e.split("?")[0], i = _t.extname(s).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const Qt = (e, t) => (Array.isArray(e) || (e = [e]), t ? e.map((s) => typeof s == "string" ? t(s) : s) : e), Zi = (e, t) => {
  const s = t.split("?")[1];
  return s && (e += `?${s}`), e;
};
function So(e, t, s, i, r) {
  const n = t[s];
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    s < t.length - 1 ? So(e.replace(i[s], a), t, s + 1, i, r) : r.push(e.replace(i[s], a));
  }
}
function Cd(e) {
  const t = /\{(.*?)\}/g, s = e.match(t), i = [];
  if (s) {
    const r = [];
    s.forEach((n) => {
      const o = n.substring(1, n.length - 1).split(",");
      r.push(o);
    }), So(e, r, 0, s, i);
  } else
    i.push(e);
  return i;
}
const Xs = (e) => !Array.isArray(e);
class Id {
  constructor() {
    this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  has(t) {
    return this._cache.has(t);
  }
  get(t) {
    const s = this._cache.get(t);
    return s || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), s;
  }
  set(t, s) {
    const i = Qt(t);
    let r;
    for (let a = 0; a < this.parsers.length; a++) {
      const h = this.parsers[a];
      if (h.test(s)) {
        r = h.getCacheableAssets(i, s);
        break;
      }
    }
    r || (r = {}, i.forEach((a) => {
      r[a] = s;
    }));
    const n = Object.keys(r), o = {
      cacheKeys: n,
      keys: i
    };
    if (i.forEach((a) => {
      this._cacheMap.set(a, o);
    }), n.forEach((a) => {
      this._cache.has(a) && this._cache.get(a) !== s && console.warn("[Cache] already has key:", a), this._cache.set(a, r[a]);
    }), s instanceof L) {
      const a = s;
      i.forEach((h) => {
        a.baseTexture !== L.EMPTY.baseTexture && X.addToCache(a.baseTexture, h), L.addToCache(a, h);
      });
    }
  }
  remove(t) {
    if (this._cacheMap.get(t), !this._cacheMap.has(t)) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const s = this._cacheMap.get(t);
    s.cacheKeys.forEach((r) => {
      this._cache.delete(r);
    }), s.keys.forEach((r) => {
      this._cacheMap.delete(r);
    });
  }
  get parsers() {
    return this._parsers;
  }
}
const We = new Id();
class Rd {
  constructor() {
    this._parsers = [], this.promiseCache = {};
  }
  reset() {
    this.promiseCache = {};
  }
  _getLoadPromiseAndParser(t, s) {
    const i = {
      promise: null,
      parser: null
    };
    return i.promise = (async () => {
      var n, o;
      let r = null;
      for (let a = 0; a < this.parsers.length; a++) {
        const h = this.parsers[a];
        if (h.load && ((n = h.test) != null && n.call(h, t, s, this))) {
          r = await h.load(t, s, this), i.parser = h;
          break;
        }
      }
      if (!i.parser)
        return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has being added`), null;
      for (let a = 0; a < this.parsers.length; a++) {
        const h = this.parsers[a];
        h.parse && h.parse && await ((o = h.testParse) == null ? void 0 : o.call(h, r, s, this)) && (r = await h.parse(r, s, this) || r, i.parser = h);
      }
      return r;
    })(), i;
  }
  async load(t, s) {
    let i = 0;
    const r = {}, n = Xs(t), o = Qt(t, (l) => ({
      src: l
    })), a = o.length, h = o.map(async (l) => {
      const c = _t.toAbsolute(l.src);
      if (!r[l.src])
        try {
          this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l)), r[l.src] = await this.promiseCache[c].promise, s && s(++i / a);
        } catch (u) {
          throw delete this.promiseCache[c], delete r[l.src], new Error(`[Loader.load] Failed to load ${c}.
${u}`);
        }
    });
    return await Promise.all(h), n ? r[o[0].src] : r;
  }
  async unload(t) {
    const i = Qt(t, (r) => ({
      src: r
    })).map(async (r) => {
      var a, h;
      const n = _t.toAbsolute(r.src), o = this.promiseCache[n];
      if (o) {
        const l = await o.promise;
        (h = (a = o.parser) == null ? void 0 : a.unload) == null || h.call(a, l, r, this), delete this.promiseCache[n];
      }
    });
    await Promise.all(i);
  }
  get parsers() {
    return this._parsers;
  }
}
var Yt = /* @__PURE__ */ ((e) => (e[e.Low = 0] = "Low", e[e.Normal = 1] = "Normal", e[e.High = 2] = "High", e))(Yt || {});
const Pd = {
  extension: {
    type: P.LoadParser,
    priority: Yt.Low
  },
  test(e) {
    return _t.extname(e).toLowerCase() === ".json";
  },
  async load(e) {
    return await (await M.ADAPTER.fetch(e)).json();
  }
};
O.add(Pd);
const Md = {
  extension: {
    type: P.LoadParser,
    priority: Yt.Low
  },
  test(e) {
    return _t.extname(e).toLowerCase() === ".txt";
  },
  async load(e) {
    return await (await M.ADAPTER.fetch(e)).text();
  }
};
O.add(Md);
const Bd = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
], Dd = [".ttf", ".otf", ".woff", ".woff2"], Fd = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
];
function Ld(e) {
  const t = _t.extname(e);
  return _t.basename(e, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
}
const Nd = {
  extension: {
    type: P.LoadParser,
    priority: Yt.Low
  },
  test(e) {
    return Ao(e, Fd) || Js(e, Dd);
  },
  async load(e, t) {
    var i, r, n;
    const s = M.ADAPTER.getFontFaceSet();
    if (s) {
      const o = [], a = ((i = t.data) == null ? void 0 : i.family) ?? Ld(e), h = ((n = (r = t.data) == null ? void 0 : r.weights) == null ? void 0 : n.filter((c) => Bd.includes(c))) ?? ["normal"], l = t.data ?? {};
      for (let c = 0; c < h.length; c++) {
        const u = h[c], d = new FontFace(a, `url(${encodeURI(e)})`, {
          ...l,
          weight: u
        });
        await d.load(), s.add(d), o.push(d);
      }
      return o.length === 1 ? o[0] : o;
    }
    return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
  },
  unload(e) {
    (Array.isArray(e) ? e : [e]).forEach((t) => M.ADAPTER.getFontFaceSet().delete(t));
  }
};
O.add(Nd);
let Qr = 0, vi;
const Od = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=", kd = {
  id: "checkImageBitmap",
  code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('${Od}');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `
}, Ud = {
  id: "loadImageBitmap",
  code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`
};
let yi;
class Gd {
  constructor() {
    this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((t) => {
      const s = URL.createObjectURL(new Blob([kd.code], { type: "application/javascript" })), i = new Worker(s);
      i.addEventListener("message", (r) => {
        i.terminate(), URL.revokeObjectURL(s), t(r.data);
      });
    }), this._isImageBitmapSupported);
  }
  loadImageBitmap(t) {
    return this._run("loadImageBitmap", [t]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  getWorker() {
    vi === void 0 && (vi = navigator.hardwareConcurrency || 4);
    let t = this.workerPool.pop();
    return !t && this._createdWorkers < vi && (yi || (yi = URL.createObjectURL(new Blob([Ud.code], { type: "application/javascript" }))), this._createdWorkers++, t = new Worker(yi), t.addEventListener("message", (s) => {
      this.complete(s.data), this.returnWorker(s.target), this.next();
    })), t;
  }
  returnWorker(t) {
    this.workerPool.push(t);
  }
  complete(t) {
    t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null;
  }
  async _run(t, s) {
    await this._initWorkers();
    const i = new Promise((r, n) => {
      this.queue.push({ id: t, arguments: s, resolve: r, reject: n });
    });
    return this.next(), i;
  }
  next() {
    if (!this.queue.length)
      return;
    const t = this.getWorker();
    if (!t)
      return;
    const s = this.queue.pop(), i = s.id;
    this.resolveHash[Qr] = { resolve: s.resolve, reject: s.reject }, t.postMessage({
      data: s.arguments,
      uuid: Qr++,
      id: i
    });
  }
}
const tn = new Gd();
function Qs(e, t, s) {
  const i = new L(e);
  return i.baseTexture.on("dispose", () => {
    delete t.promiseCache[s];
  }), i;
}
const Hd = [".jpeg", ".jpg", ".png", ".webp", ".avif"], Xd = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function zd(e) {
  const t = await M.ADAPTER.fetch(e);
  if (!t.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);
  const s = await t.blob();
  return await createImageBitmap(s);
}
const rs = {
  extension: {
    type: P.LoadParser,
    priority: Yt.High
  },
  config: {
    preferWorkers: !0
  },
  test(e) {
    return Ao(e, Xd) || Js(e, Hd);
  },
  async load(e, t, s) {
    let i = null;
    globalThis.createImageBitmap ? this.config.preferWorkers && await tn.isImageBitmapSupported() ? i = await tn.loadImageBitmap(e) : i = await zd(e) : i = await new Promise((n) => {
      i = new Image(), i.crossOrigin = "anonymous", i.src = e, i.complete ? n(i) : i.onload = () => {
        n(i);
      };
    });
    const r = new X(i, {
      resolution: re(e),
      ...t.data
    });
    return r.resource.src = e, Qs(r, s, e);
  },
  unload(e) {
    e.destroy(!0);
  }
};
O.add(rs);
const Vd = {
  extension: {
    type: P.LoadParser,
    priority: Yt.High
  },
  test(e) {
    return _t.extname(e).toLowerCase() === ".svg";
  },
  async testParse(e) {
    return is.test(e);
  },
  async parse(e, t, s) {
    var o, a, h;
    const i = new is(e, (o = t == null ? void 0 : t.data) == null ? void 0 : o.resourceOptions), r = new X(i, {
      resolution: re(e),
      ...t == null ? void 0 : t.data
    });
    r.resource.src = e;
    const n = Qs(r, s, e);
    return (h = (a = t == null ? void 0 : t.data) == null ? void 0 : a.resourceOptions) != null && h.autoLoad || await i.load(), n;
  },
  async load(e, t) {
    return (await M.ADAPTER.fetch(e)).text();
  },
  unload: rs.unload
};
O.add(Vd);
class jd {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, s) => `${t}${this._bundleIdConnector}${s}`,
      extractAssetIdFromBundle: (t, s) => s.replace(`${t}${this._bundleIdConnector}`, "")
    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  setBundleIdentifier(t) {
    if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
      throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  prefer(...t) {
    t.forEach((s) => {
      this._preferredOrder.push(s), s.priority || (s.priority = Object.keys(s.params));
    }), this._resolverHash = {};
  }
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
  }
  setDefaultSearchParams(t) {
    if (typeof t == "string")
      this._defaultSearchParams = t;
    else {
      const s = t;
      this._defaultSearchParams = Object.keys(s).map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(s[i])}`).join("&");
    }
  }
  addManifest(t) {
    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((s) => {
      this.addBundle(s.name, s.assets);
    });
  }
  addBundle(t, s) {
    const i = [];
    Array.isArray(s) ? s.forEach((r) => {
      if (typeof r.name == "string") {
        const n = this._createBundleAssetId(t, r.name);
        i.push(n), this.add([r.name, n], r.srcs, r.data);
      } else {
        const n = r.name.map((o) => this._createBundleAssetId(t, o));
        n.forEach((o) => {
          i.push(o);
        }), this.add([...r.name, ...n], r.srcs);
      }
    }) : Object.keys(s).forEach((r) => {
      i.push(this._createBundleAssetId(t, r)), this.add([r, this._createBundleAssetId(t, r)], s[r]);
    }), this._bundles[t] = i;
  }
  add(t, s, i) {
    const r = Qt(t);
    r.forEach((o) => {
      this.hasKey(o) && console.warn(`[Resolver] already has key: ${o} overwriting`);
    }), Array.isArray(s) || (typeof s == "string" ? s = Cd(s) : s = [s]);
    const n = s.map((o) => {
      let a = o;
      if (typeof o == "string") {
        let h = !1;
        for (let l = 0; l < this._parsers.length; l++) {
          const c = this._parsers[l];
          if (c.test(o)) {
            a = c.parse(o), h = !0;
            break;
          }
        }
        h || (a = {
          src: o
        });
      }
      return a.format || (a.format = a.src.split(".").pop()), a.alias || (a.alias = r), (this._basePath || this._rootPath) && (a.src = _t.toAbsolute(a.src, this._basePath, this._rootPath)), a.src = this._appendDefaultSearchParams(a.src), a.data = a.data ?? i, a;
    });
    r.forEach((o) => {
      this._assetMap[o] = n;
    });
  }
  resolveBundle(t) {
    const s = Xs(t);
    t = Qt(t);
    const i = {};
    return t.forEach((r) => {
      const n = this._bundles[r];
      if (n) {
        const o = this.resolve(n), a = {};
        for (const h in o) {
          const l = o[h];
          a[this._extractAssetIdFromBundle(r, h)] = l;
        }
        i[r] = a;
      }
    }), s ? i[t[0]] : i;
  }
  resolveUrl(t) {
    const s = this.resolve(t);
    if (typeof t != "string") {
      const i = {};
      for (const r in s)
        i[r] = s[r].src;
      return i;
    }
    return s.src;
  }
  resolve(t) {
    const s = Xs(t);
    t = Qt(t);
    const i = {};
    return t.forEach((r) => {
      if (!this._resolverHash[r])
        if (this._assetMap[r]) {
          let n = this._assetMap[r];
          const o = this._getPreferredOrder(n), a = n[0];
          o == null || o.priority.forEach((h) => {
            o.params[h].forEach((l) => {
              const c = n.filter((u) => u[h] ? u[h] === l : !1);
              c.length && (n = c);
            });
          }), this._resolverHash[r] = n[0] ?? a;
        } else {
          let n = r;
          (this._basePath || this._rootPath) && (n = _t.toAbsolute(n, this._basePath, this._rootPath)), n = this._appendDefaultSearchParams(n), this._resolverHash[r] = {
            src: n
          };
        }
      i[r] = this._resolverHash[r];
    }), s ? i[t[0]] : i;
  }
  hasKey(t) {
    return !!this._assetMap[t];
  }
  hasBundle(t) {
    return !!this._bundles[t];
  }
  _getPreferredOrder(t) {
    for (let s = 0; s < t.length; s++) {
      const i = t[0], r = this._preferredOrder.find((n) => n.params.format.includes(i.format));
      if (r)
        return r;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams)
      return t;
    const s = /\?/.test(t) ? "&" : "?";
    return `${t}${s}${this._defaultSearchParams}`;
  }
}
class Wd {
  constructor() {
    this._detections = [], this._initialized = !1, this.resolver = new jd(), this.loader = new Rd(), this.cache = We, this._backgroundLoader = new Sd(this.loader), this._backgroundLoader.active = !0, this.reset();
  }
  async init(t = {}) {
    var n, o, a;
    if (this._initialized) {
      console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");
      return;
    }
    if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
      let h = t.manifest;
      typeof h == "string" && (h = await this.load(h)), this.resolver.addManifest(h);
    }
    const s = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1, i = typeof s == "number" ? [s] : s;
    let r = [];
    if ((o = t.texturePreference) != null && o.format) {
      const h = (a = t.texturePreference) == null ? void 0 : a.format;
      r = typeof h == "string" ? [h] : h;
      for (const l of this._detections)
        await l.test() || (r = await l.remove(r));
    } else
      for (const h of this._detections)
        await h.test() && (r = await h.add(r));
    this.resolver.prefer({
      params: {
        format: r,
        resolution: i
      }
    });
  }
  add(t, s, i) {
    this.resolver.add(t, s, i);
  }
  async load(t, s) {
    this._initialized || await this.init();
    const i = Xs(t), r = Qt(t).map((a) => typeof a != "string" ? (this.resolver.add(a.src, a), a.src) : (this.resolver.hasKey(a) || this.resolver.add(a, a), a)), n = this.resolver.resolve(r), o = await this._mapLoadToResolve(n, s);
    return i ? o[r[0]] : o;
  }
  addBundle(t, s) {
    this.resolver.addBundle(t, s);
  }
  async loadBundle(t, s) {
    this._initialized || await this.init();
    let i = !1;
    typeof t == "string" && (i = !0, t = [t]);
    const r = this.resolver.resolveBundle(t), n = {}, o = Object.keys(r);
    let a = 0, h = 0;
    const l = () => {
      s == null || s(++a / h);
    }, c = o.map((u) => {
      const d = r[u];
      return h += Object.keys(d).length, this._mapLoadToResolve(d, l).then((f) => {
        n[u] = f;
      });
    });
    return await Promise.all(c), i ? n[t[0]] : n;
  }
  async backgroundLoad(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const s = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(s));
  }
  async backgroundLoadBundle(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const s = this.resolver.resolveBundle(t);
    Object.values(s).forEach((i) => {
      this._backgroundLoader.add(Object.values(i));
    });
  }
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1;
  }
  get(t) {
    if (typeof t == "string")
      return We.get(t);
    const s = {};
    for (let i = 0; i < t.length; i++)
      s[i] = We.get(t[i]);
    return s;
  }
  async _mapLoadToResolve(t, s) {
    const i = Object.values(t), r = Object.keys(t);
    this._backgroundLoader.active = !1;
    const n = await this.loader.load(i, s);
    this._backgroundLoader.active = !0;
    const o = {};
    return i.forEach((a, h) => {
      const l = n[a.src], c = [a.src];
      a.alias && c.push(...a.alias), o[r[h]] = l, We.set(c, l);
    }), o;
  }
  async unload(t) {
    this._initialized || await this.init();
    const s = Qt(t).map((r) => typeof r != "string" ? r.src : r), i = this.resolver.resolve(s);
    await this._unloadFromResolved(i);
  }
  async unloadBundle(t) {
    this._initialized || await this.init(), t = Qt(t);
    const s = this.resolver.resolveBundle(t), i = Object.keys(s).map((r) => this._unloadFromResolved(s[r]));
    await Promise.all(i);
  }
  async _unloadFromResolved(t) {
    const s = Object.values(t);
    s.forEach((i) => {
      We.remove(i.src);
    }), await this.loader.unload(s);
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return rs.config.preferWorkers;
  }
  set preferWorkers(t) {
    rs.config.preferWorkers = t;
  }
}
const Ts = new Wd();
O.handleByList(P.LoadParser, Ts.loader.parsers).handleByList(P.ResolveParser, Ts.resolver.parsers).handleByList(P.CacheParser, Ts.cache.parsers).handleByList(P.DetectionParser, Ts.detections);
const $d = {
  extension: P.CacheParser,
  test: (e) => Array.isArray(e) && e.every((t) => t instanceof L),
  getCacheableAssets: (e, t) => {
    const s = {};
    return e.forEach((i) => {
      t.forEach((r, n) => {
        s[i + (n === 0 ? "" : n + 1)] = r;
      });
    }), s;
  }
};
O.add($d);
const Yd = {
  extension: {
    type: P.DetectionParser,
    priority: 1
  },
  test: async () => {
    if (!globalThis.createImageBitmap)
      return !1;
    const e = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=", t = await M.ADAPTER.fetch(e).then((s) => s.blob());
    return createImageBitmap(t).then(() => !0, () => !1);
  },
  add: async (e) => [...e, "avif"],
  remove: async (e) => e.filter((t) => t !== "avif")
};
O.add(Yd);
const qd = {
  extension: {
    type: P.DetectionParser,
    priority: 0
  },
  test: async () => {
    if (!globalThis.createImageBitmap)
      return !1;
    const e = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", t = await M.ADAPTER.fetch(e).then((s) => s.blob());
    return createImageBitmap(t).then(() => !0, () => !1);
  },
  add: async (e) => [...e, "webp"],
  remove: async (e) => e.filter((t) => t !== "webp")
};
O.add(qd);
const en = ["png", "jpg", "jpeg"], Kd = {
  extension: {
    type: P.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(!0),
  add: async (e) => [...e, ...en],
  remove: async (e) => e.filter((t) => !en.includes(t))
};
O.add(Kd);
const Zd = {
  extension: P.ResolveParser,
  test: rs.test,
  parse: (e) => {
    var t;
    return {
      resolution: parseFloat(((t = M.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) ?? "1"),
      format: e.split(".").pop(),
      src: e
    };
  }
};
O.add(Zd);
var wt = /* @__PURE__ */ ((e) => (e[e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", e[e.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", e[e.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", e[e.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", e[e.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", e[e.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", e[e.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", e[e.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", e[e.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", e[e.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", e[e.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", e))(wt || {});
const zs = {
  [
    33776
    /* COMPRESSED_RGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33777
    /* COMPRESSED_RGBA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33778
    /* COMPRESSED_RGBA_S3TC_DXT3_EXT */
  ]: 1,
  [
    33779
    /* COMPRESSED_RGBA_S3TC_DXT5_EXT */
  ]: 1,
  [
    35916
    /* COMPRESSED_SRGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35917
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35918
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT */
  ]: 1,
  [
    35919
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT */
  ]: 1,
  [
    37488
    /* COMPRESSED_R11_EAC */
  ]: 0.5,
  [
    37489
    /* COMPRESSED_SIGNED_R11_EAC */
  ]: 0.5,
  [
    37490
    /* COMPRESSED_RG11_EAC */
  ]: 1,
  [
    37491
    /* COMPRESSED_SIGNED_RG11_EAC */
  ]: 1,
  [
    37492
    /* COMPRESSED_RGB8_ETC2 */
  ]: 0.5,
  [
    37496
    /* COMPRESSED_RGBA8_ETC2_EAC */
  ]: 1,
  [
    37493
    /* COMPRESSED_SRGB8_ETC2 */
  ]: 0.5,
  [
    37497
    /* COMPRESSED_SRGB8_ALPHA8_ETC2_EAC */
  ]: 1,
  [
    37494
    /* COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    37495
    /* COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    35840
    /* COMPRESSED_RGB_PVRTC_4BPPV1_IMG */
  ]: 0.5,
  [
    35842
    /* COMPRESSED_RGBA_PVRTC_4BPPV1_IMG */
  ]: 0.5,
  [
    35841
    /* COMPRESSED_RGB_PVRTC_2BPPV1_IMG */
  ]: 0.25,
  [
    35843
    /* COMPRESSED_RGBA_PVRTC_2BPPV1_IMG */
  ]: 0.25,
  [
    36196
    /* COMPRESSED_RGB_ETC1_WEBGL */
  ]: 0.5,
  [
    35986
    /* COMPRESSED_RGB_ATC_WEBGL */
  ]: 0.5,
  [
    35986
    /* COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL */
  ]: 1,
  [
    34798
    /* COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL */
  ]: 1,
  [
    37808
    /* COMPRESSED_RGBA_ASTC_4x4_KHR */
  ]: 1
};
let Kt, Ce;
function sn() {
  Ce = {
    s3tc: Kt.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: Kt.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    etc: Kt.getExtension("WEBGL_compressed_texture_etc"),
    etc1: Kt.getExtension("WEBGL_compressed_texture_etc1"),
    pvrtc: Kt.getExtension("WEBGL_compressed_texture_pvrtc") || Kt.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    atc: Kt.getExtension("WEBGL_compressed_texture_atc"),
    astc: Kt.getExtension("WEBGL_compressed_texture_astc")
  };
}
const Jd = {
  extension: {
    type: P.DetectionParser,
    priority: 2
  },
  test: async () => {
    const t = M.ADAPTER.createCanvas().getContext("webgl");
    return t ? (Kt = t, !0) : (console.warn("WebGL not available for compressed textures."), !1);
  },
  add: async (e) => {
    Ce || sn();
    const t = [];
    for (const s in Ce)
      Ce[s] && t.push(s);
    return [...t, ...e];
  },
  remove: async (e) => (Ce || sn(), e.filter((t) => !(t in Ce)))
};
O.add(Jd);
class Qd extends ns {
  constructor(t, s = { width: 1, height: 1, autoLoad: !0 }) {
    let i, r;
    typeof t == "string" ? (i = t, r = new Uint8Array()) : (i = null, r = t), super(r, s), this.origin = i, this.buffer = r ? new ki(r) : null, this.origin && s.autoLoad !== !1 && this.load(), r != null && r.length && (this.loaded = !0, this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(t) {
  }
  async load() {
    const i = await (await (await fetch(this.origin)).blob()).arrayBuffer();
    return this.data = new Uint32Array(i), this.buffer = new ki(i), this.loaded = !0, this.onBlobLoaded(i), this.update(), this;
  }
}
class me extends Qd {
  constructor(t, s) {
    super(t, s), this.format = s.format, this.levels = s.levels || 1, this._width = s.width, this._height = s.height, this._extension = me._formatToExtension(this.format), (s.levelBuffers || this.buffer) && (this._levelBuffers = s.levelBuffers || me._createLevelBuffers(t instanceof Uint8Array ? t : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height));
  }
  upload(t, s, i) {
    const r = t.gl;
    if (!t.context.extensions[this._extension])
      throw new Error(`${this._extension} textures are not supported on the current machine`);
    if (!this._levelBuffers)
      return !1;
    for (let o = 0, a = this.levels; o < a; o++) {
      const { levelID: h, levelWidth: l, levelHeight: c, levelBuffer: u } = this._levelBuffers[o];
      r.compressedTexImage2D(r.TEXTURE_2D, h, this.format, l, c, 0, u);
    }
    return !0;
  }
  onBlobLoaded() {
    this._levelBuffers = me._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
  }
  static _formatToExtension(t) {
    if (t >= 33776 && t <= 33779)
      return "s3tc";
    if (t >= 37488 && t <= 37497)
      return "etc";
    if (t >= 35840 && t <= 35843)
      return "pvrtc";
    if (t >= 36196)
      return "etc1";
    if (t >= 35986 && t <= 34798)
      return "atc";
    throw new Error("Invalid (compressed) texture format given!");
  }
  static _createLevelBuffers(t, s, i, r, n, o, a) {
    const h = new Array(i);
    let l = t.byteOffset, c = o, u = a, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * zs[s];
    for (let _ = 0; _ < i; _++)
      h[_] = {
        levelID: _,
        levelWidth: i > 1 ? c : d,
        levelHeight: i > 1 ? u : f,
        levelBuffer: new Uint8Array(t.buffer, l, p)
      }, l += p, c = c >> 1 || 1, u = u >> 1 || 1, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * zs[s];
    return h;
  }
}
const bi = 4, Es = 124, tf = 32, rn = 20, ef = 542327876, ws = {
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19
}, sf = {
  SIZE: 0,
  FLAGS: 1,
  FOURCC: 2,
  RGB_BITCOUNT: 3,
  R_BIT_MASK: 4,
  G_BIT_MASK: 5,
  B_BIT_MASK: 6,
  A_BIT_MASK: 7
}, As = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
}, rf = 1, nf = 2, of = 4, af = 64, hf = 512, lf = 131072, cf = 827611204, uf = 861165636, df = 894720068, ff = 808540228, pf = 4, mf = {
  [cf]: wt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [uf]: wt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [df]: wt.COMPRESSED_RGBA_S3TC_DXT5_EXT
}, gf = {
  [
    70
    /* DXGI_FORMAT_BC1_TYPELESS */
  ]: wt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [
    71
    /* DXGI_FORMAT_BC1_UNORM */
  ]: wt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [
    73
    /* DXGI_FORMAT_BC2_TYPELESS */
  ]: wt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [
    74
    /* DXGI_FORMAT_BC2_UNORM */
  ]: wt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [
    76
    /* DXGI_FORMAT_BC3_TYPELESS */
  ]: wt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  [
    77
    /* DXGI_FORMAT_BC3_UNORM */
  ]: wt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  [
    72
    /* DXGI_FORMAT_BC1_UNORM_SRGB */
  ]: wt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
  [
    75
    /* DXGI_FORMAT_BC2_UNORM_SRGB */
  ]: wt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
  [
    78
    /* DXGI_FORMAT_BC3_UNORM_SRGB */
  ]: wt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
};
function _f(e) {
  const t = new Uint32Array(e);
  if (t[0] !== ef)
    throw new Error("Invalid DDS file magic word");
  const i = new Uint32Array(e, 0, Es / Uint32Array.BYTES_PER_ELEMENT), r = i[ws.HEIGHT], n = i[ws.WIDTH], o = i[ws.MIPMAP_COUNT], a = new Uint32Array(e, ws.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, tf / Uint32Array.BYTES_PER_ELEMENT), h = a[rf];
  if (h & of) {
    const l = a[sf.FOURCC];
    if (l !== ff) {
      const g = mf[l], x = bi + Es, T = new Uint8Array(e, x);
      return [new me(T, {
        format: g,
        width: n,
        height: r,
        levels: o
      })];
    }
    const c = bi + Es, u = new Uint32Array(t.buffer, c, rn / Uint32Array.BYTES_PER_ELEMENT), d = u[As.DXGI_FORMAT], f = u[As.RESOURCE_DIMENSION], p = u[As.MISC_FLAG], _ = u[As.ARRAY_SIZE], m = gf[d];
    if (m === void 0)
      throw new Error(`DDSParser cannot parse texture data with DXGI format ${d}`);
    if (p === pf)
      throw new Error("DDSParser does not support cubemap textures");
    if (f === 6)
      throw new Error("DDSParser does not supported 3D texture data");
    const v = new Array(), y = bi + Es + rn;
    if (_ === 1)
      v.push(new Uint8Array(e, y));
    else {
      const g = zs[m];
      let x = 0, T = n, I = r;
      for (let E = 0; E < o; E++) {
        const N = Math.max(1, T + 3 & -4), U = Math.max(1, I + 3 & -4), R = N * U * g;
        x += R, T = T >>> 1, I = I >>> 1;
      }
      let S = y;
      for (let E = 0; E < _; E++)
        v.push(new Uint8Array(e, S, x)), S += x;
    }
    return v.map((g) => new me(g, {
      format: m,
      width: n,
      height: r,
      levels: o
    }));
  }
  throw h & af ? new Error("DDSParser does not support uncompressed texture data.") : h & hf ? new Error("DDSParser does not supported YUV uncompressed texture data.") : h & lf ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : h & nf ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
const nn = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], xf = 67305985, Ct = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
}, Ji = 64, on = {
  [k.UNSIGNED_BYTE]: 1,
  [k.UNSIGNED_SHORT]: 2,
  [k.INT]: 4,
  [k.UNSIGNED_INT]: 4,
  [k.FLOAT]: 4,
  [k.HALF_FLOAT]: 8
}, vf = {
  [C.RGBA]: 4,
  [C.RGB]: 3,
  [C.RG]: 2,
  [C.RED]: 1,
  [C.LUMINANCE]: 1,
  [C.LUMINANCE_ALPHA]: 2,
  [C.ALPHA]: 1
}, yf = {
  [k.UNSIGNED_SHORT_4_4_4_4]: 2,
  [k.UNSIGNED_SHORT_5_5_5_1]: 2,
  [k.UNSIGNED_SHORT_5_6_5]: 2
};
function bf(e, t, s = !1) {
  const i = new DataView(t);
  if (!Tf(e, i))
    return null;
  const r = i.getUint32(Ct.ENDIANNESS, !0) === xf, n = i.getUint32(Ct.GL_TYPE, r), o = i.getUint32(Ct.GL_FORMAT, r), a = i.getUint32(Ct.GL_INTERNAL_FORMAT, r), h = i.getUint32(Ct.PIXEL_WIDTH, r), l = i.getUint32(Ct.PIXEL_HEIGHT, r) || 1, c = i.getUint32(Ct.PIXEL_DEPTH, r) || 1, u = i.getUint32(Ct.NUMBER_OF_ARRAY_ELEMENTS, r) || 1, d = i.getUint32(Ct.NUMBER_OF_FACES, r), f = i.getUint32(Ct.NUMBER_OF_MIPMAP_LEVELS, r), p = i.getUint32(Ct.BYTES_OF_KEY_VALUE_DATA, r);
  if (l === 0 || c !== 1)
    throw new Error("Only 2D textures are supported");
  if (d !== 1)
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (u !== 1)
    throw new Error("WebGL does not support array textures");
  const _ = 4, m = 4, v = h + 3 & -4, y = l + 3 & -4, g = new Array(u);
  let x = h * l;
  n === 0 && (x = v * y);
  let T;
  if (n !== 0 ? on[n] ? T = on[n] * vf[o] : T = yf[n] : T = zs[a], T === void 0)
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  const I = s ? wf(i, p, r) : null;
  let E = x * T, N = h, U = l, R = v, F = y, w = Ji + p;
  for (let b = 0; b < f; b++) {
    const z = i.getUint32(w, r);
    let j = w + 4;
    for (let B = 0; B < u; B++) {
      let q = g[B];
      q || (q = g[B] = new Array(f)), q[b] = {
        levelID: b,
        levelWidth: f > 1 || n !== 0 ? N : R,
        levelHeight: f > 1 || n !== 0 ? U : F,
        levelBuffer: new Uint8Array(t, j, E)
      }, j += E;
    }
    w += z + 4, w = w % 4 !== 0 ? w + 4 - w % 4 : w, N = N >> 1 || 1, U = U >> 1 || 1, R = N + _ - 1 & ~(_ - 1), F = U + m - 1 & ~(m - 1), E = R * F * T;
  }
  return n !== 0 ? {
    uncompressed: g.map((b) => {
      let z = b[0].levelBuffer, j = !1;
      return n === k.FLOAT ? z = new Float32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4) : n === k.UNSIGNED_INT ? (j = !0, z = new Uint32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)) : n === k.INT && (j = !0, z = new Int32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)), {
        resource: new ns(z, {
          width: b[0].levelWidth,
          height: b[0].levelHeight
        }),
        type: n,
        format: j ? Ef(o) : o
      };
    }),
    kvData: I
  } : {
    compressed: g.map((b) => new me(null, {
      format: a,
      width: h,
      height: l,
      levels: f,
      levelBuffers: b
    })),
    kvData: I
  };
}
function Tf(e, t) {
  for (let s = 0; s < nn.length; s++)
    if (t.getUint8(s) !== nn[s])
      return console.error(`${e} is not a valid *.ktx file!`), !1;
  return !0;
}
function Ef(e) {
  switch (e) {
    case C.RGBA:
      return C.RGBA_INTEGER;
    case C.RGB:
      return C.RGB_INTEGER;
    case C.RG:
      return C.RG_INTEGER;
    case C.RED:
      return C.RED_INTEGER;
    default:
      return e;
  }
}
function wf(e, t, s) {
  const i = /* @__PURE__ */ new Map();
  let r = 0;
  for (; r < t; ) {
    const n = e.getUint32(Ji + r, s), o = Ji + r + 4, a = 3 - (n + 3) % 4;
    if (n === 0 || n > t - r) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let h = 0;
    for (; h < n && e.getUint8(o + h) !== 0; h++)
      ;
    if (h === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const l = new TextDecoder().decode(new Uint8Array(e.buffer, o, h)), c = new DataView(e.buffer, o + h + 1, n - h - 1);
    i.set(l, c), r += 4 + n + a;
  }
  return i;
}
const Af = {
  extension: {
    type: P.LoadParser,
    priority: Yt.High
  },
  test(e) {
    return Js(e, ".dds");
  },
  async load(e, t, s) {
    const r = await (await M.ADAPTER.fetch(e)).arrayBuffer(), o = _f(r).map((a) => {
      const h = new X(a, {
        mipmap: $t.OFF,
        alphaMode: kt.NO_PREMULTIPLIED_ALPHA,
        resolution: re(e),
        ...t.data
      });
      return Qs(h, s, e);
    });
    return o.length === 1 ? o[0] : o;
  },
  unload(e) {
    Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
  }
};
O.add(Af);
const Sf = {
  extension: {
    type: P.LoadParser,
    priority: Yt.High
  },
  test(e) {
    return Js(e, ".ktx");
  },
  async load(e, t, s) {
    const r = await (await M.ADAPTER.fetch(e)).arrayBuffer(), { compressed: n, uncompressed: o, kvData: a } = bf(e, r), h = n ?? o, l = {
      mipmap: $t.OFF,
      alphaMode: kt.NO_PREMULTIPLIED_ALPHA,
      resolution: re(e),
      ...t.data
    }, c = h.map((u) => {
      h === o && Object.assign(l, {
        type: u.type,
        format: u.format
      });
      const d = new X(u, l);
      return d.ktxKeyValueData = a, Qs(d, s, e);
    });
    return c.length === 1 ? c[0] : c;
  },
  unload(e) {
    Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
  }
};
O.add(Sf);
const Cf = {
  extension: P.ResolveParser,
  test: (e) => {
    const s = e.split("?")[0].split(".").pop();
    return ["basis", "ktx", "dds"].includes(s);
  },
  parse: (e) => {
    var i, r;
    if (e.split("?")[0].split(".").pop() === "ktx") {
      const n = [
        ".s3tc.ktx",
        ".s3tc_sRGB.ktx",
        ".etc.ktx",
        ".etc1.ktx",
        ".pvrt.ktx",
        ".atc.ktx",
        ".astc.ktx"
      ];
      if (n.some((o) => e.endsWith(o)))
        return {
          resolution: parseFloat(((i = M.RETINA_PREFIX.exec(e)) == null ? void 0 : i[1]) ?? "1"),
          format: n.find((o) => e.endsWith(o)),
          src: e
        };
    }
    return {
      resolution: parseFloat(((r = M.RETINA_PREFIX.exec(e)) == null ? void 0 : r[1]) ?? "1"),
      format: e.split(".").pop(),
      src: e
    };
  }
};
O.add(Cf);
const If = new V(), Rf = 4, Qi = class {
  constructor(e) {
    this.renderer = e;
  }
  async image(e, t, s) {
    const i = new Image();
    return i.src = await this.base64(e, t, s), i;
  }
  async base64(e, t, s) {
    const i = this.canvas(e);
    if (i.toDataURL !== void 0)
      return i.toDataURL(t, s);
    if (i.convertToBlob !== void 0) {
      const r = await i.convertToBlob({ type: t, quality: s });
      return await new Promise((n) => {
        const o = new FileReader();
        o.onload = () => n(o.result), o.readAsDataURL(r);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL or ICanvas.convertToBlob to be implemented");
  }
  canvas(e, t) {
    const { pixels: s, width: i, height: r, flipY: n } = this._rawPixels(e, t);
    let o = new Lr(i, r, 1);
    const a = o.context.getImageData(0, 0, i, r);
    if (Qi.arrayPostDivide(s, a.data), o.context.putImageData(a, 0, 0), n) {
      const h = new Lr(o.width, o.height, 1);
      h.context.scale(1, -1), h.context.drawImage(o.canvas, 0, -r), o.destroy(), o = h;
    }
    return o.canvas;
  }
  pixels(e, t) {
    const { pixels: s } = this._rawPixels(e, t);
    return Qi.arrayPostDivide(s, s), s;
  }
  _rawPixels(e, t) {
    const s = this.renderer;
    let i, r = !1, n, o = !1;
    if (e)
      if (e instanceof ae)
        n = e;
      else {
        const u = s.context.webGLVersion >= 2 ? s.multisample : nt.NONE;
        if (n = this.renderer.generateTexture(e, { multisample: u }), u !== nt.NONE) {
          const d = ae.create({
            width: n.width,
            height: n.height
          });
          s.framebuffer.bind(n.framebuffer), s.framebuffer.blit(d.framebuffer), s.framebuffer.bind(null), n.destroy(!0), n = d;
        }
        o = !0;
      }
    n ? (i = n.baseTexture.resolution, t = t ?? n.frame, r = !1, s.renderTexture.bind(n)) : (i = s.resolution, t || (t = If, t.width = s.width, t.height = s.height), r = !0, s.renderTexture.bind(null));
    const a = Math.round(t.width * i), h = Math.round(t.height * i), l = new Uint8Array(Rf * a * h), c = s.gl;
    return c.readPixels(Math.round(t.x * i), Math.round(t.y * i), a, h, c.RGBA, c.UNSIGNED_BYTE, l), o && n.destroy(!0), { pixels: l, width: a, height: h, flipY: r };
  }
  destroy() {
    this.renderer = null;
  }
  static arrayPostDivide(e, t) {
    for (let s = 0; s < e.length; s += 4) {
      const i = t[s + 3] = e[s + 3];
      i !== 0 ? (t[s] = Math.round(Math.min(e[s] * 255 / i, 255)), t[s + 1] = Math.round(Math.min(e[s + 1] * 255 / i, 255)), t[s + 2] = Math.round(Math.min(e[s + 2] * 255 / i, 255))) : (t[s] = e[s], t[s + 1] = e[s + 1], t[s + 2] = e[s + 2]);
    }
  }
};
let Co = Qi;
Co.extension = {
  name: "extract",
  type: P.RendererSystem
};
O.add(Co);
const Vs = {
  build(e) {
    const t = e.points;
    let s, i, r, n, o, a;
    if (e.type === mt.CIRC) {
      const p = e.shape;
      s = p.x, i = p.y, o = a = p.radius, r = n = 0;
    } else if (e.type === mt.ELIP) {
      const p = e.shape;
      s = p.x, i = p.y, o = p.width, a = p.height, r = n = 0;
    } else {
      const p = e.shape, _ = p.width / 2, m = p.height / 2;
      s = p.x + _, i = p.y + m, o = a = Math.max(0, Math.min(p.radius, Math.min(_, m))), r = _ - o, n = m - a;
    }
    if (!(o >= 0 && a >= 0 && r >= 0 && n >= 0)) {
      t.length = 0;
      return;
    }
    const h = Math.ceil(2.3 * Math.sqrt(o + a)), l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
    if (t.length = l, l === 0)
      return;
    if (h === 0) {
      t.length = 8, t[0] = t[6] = s + r, t[1] = t[3] = i + n, t[2] = t[4] = s - r, t[5] = t[7] = i - n;
      return;
    }
    let c = 0, u = h * 4 + (r ? 2 : 0) + 2, d = u, f = l;
    {
      const p = r + o, _ = n, m = s + p, v = s - p, y = i + _;
      if (t[c++] = m, t[c++] = y, t[--u] = y, t[--u] = v, n) {
        const g = i - _;
        t[d++] = v, t[d++] = g, t[--f] = g, t[--f] = m;
      }
    }
    for (let p = 1; p < h; p++) {
      const _ = Math.PI / 2 * (p / h), m = r + Math.cos(_) * o, v = n + Math.sin(_) * a, y = s + m, g = s - m, x = i + v, T = i - v;
      t[c++] = y, t[c++] = x, t[--u] = x, t[--u] = g, t[d++] = g, t[d++] = T, t[--f] = T, t[--f] = y;
    }
    {
      const p = r, _ = n + a, m = s + p, v = s - p, y = i + _, g = i - _;
      t[c++] = m, t[c++] = y, t[--f] = g, t[--f] = m, r && (t[c++] = v, t[c++] = y, t[--f] = g, t[--f] = v);
    }
  },
  triangulate(e, t) {
    const s = e.points, i = t.points, r = t.indices;
    if (s.length === 0)
      return;
    let n = i.length / 2;
    const o = n;
    let a, h;
    if (e.type !== mt.RREC) {
      const c = e.shape;
      a = c.x, h = c.y;
    } else {
      const c = e.shape;
      a = c.x + c.width / 2, h = c.y + c.height / 2;
    }
    const l = e.matrix;
    i.push(e.matrix ? l.a * a + l.c * h + l.tx : a, e.matrix ? l.b * a + l.d * h + l.ty : h), n++, i.push(s[0], s[1]);
    for (let c = 2; c < s.length; c += 2)
      i.push(s[c], s[c + 1]), r.push(n++, o, n);
    r.push(o + 1, o, n);
  }
};
function an(e, t = !1) {
  const s = e.length;
  if (s < 6)
    return;
  let i = 0;
  for (let r = 0, n = e[s - 2], o = e[s - 1]; r < s; r += 2) {
    const a = e[r], h = e[r + 1];
    i += (a - n) * (h + o), n = a, o = h;
  }
  if (!t && i > 0 || t && i <= 0) {
    const r = s / 2;
    for (let n = r + r % 2; n < s; n += 2) {
      const o = s - n - 2, a = s - n - 1, h = n, l = n + 1;
      [e[o], e[h]] = [e[h], e[o]], [e[a], e[l]] = [e[l], e[a]];
    }
  }
}
const Io = {
  build(e) {
    e.points = e.shape.points.slice();
  },
  triangulate(e, t) {
    let s = e.points;
    const i = e.holes, r = t.points, n = t.indices;
    if (s.length >= 6) {
      an(s, !1);
      const o = [];
      for (let l = 0; l < i.length; l++) {
        const c = i[l];
        an(c.points, !0), o.push(s.length / 2), s = s.concat(c.points);
      }
      const a = Ls(s, o, 2);
      if (!a)
        return;
      const h = r.length / 2;
      for (let l = 0; l < a.length; l += 3)
        n.push(a[l] + h), n.push(a[l + 1] + h), n.push(a[l + 2] + h);
      for (let l = 0; l < s.length; l++)
        r.push(s[l]);
    }
  }
}, Pf = {
  build(e) {
    const t = e.shape, s = t.x, i = t.y, r = t.width, n = t.height, o = e.points;
    o.length = 0, r >= 0 && n >= 0 && o.push(s, i, s + r, i, s + r, i + n, s, i + n);
  },
  triangulate(e, t) {
    const s = e.points, i = t.points;
    if (s.length === 0)
      return;
    const r = i.length / 2;
    i.push(s[0], s[1], s[2], s[3], s[6], s[7], s[4], s[5]), t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3);
  }
}, Mf = {
  build(e) {
    Vs.build(e);
  },
  triangulate(e, t) {
    Vs.triangulate(e, t);
  }
};
var Mt = /* @__PURE__ */ ((e) => (e.MITER = "miter", e.BEVEL = "bevel", e.ROUND = "round", e))(Mt || {}), pe = /* @__PURE__ */ ((e) => (e.BUTT = "butt", e.ROUND = "round", e.SQUARE = "square", e))(pe || {});
const ke = {
  adaptive: !0,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(e, t = 20) {
    if (!this.adaptive || !e || isNaN(e))
      return t;
    let s = Math.ceil(e / this.maxLength);
    return s < this.minSegments ? s = this.minSegments : s > this.maxSegments && (s = this.maxSegments), s;
  }
};
class hn {
  static curveTo(t, s, i, r, n, o) {
    const a = o[o.length - 2], l = o[o.length - 1] - s, c = a - t, u = r - s, d = i - t, f = Math.abs(l * d - c * u);
    if (f < 1e-8 || n === 0)
      return (o[o.length - 2] !== t || o[o.length - 1] !== s) && o.push(t, s), null;
    const p = l * l + c * c, _ = u * u + d * d, m = l * u + c * d, v = n * Math.sqrt(p) / f, y = n * Math.sqrt(_) / f, g = v * m / p, x = y * m / _, T = v * d + y * c, I = v * u + y * l, S = c * (y + g), E = l * (y + g), N = d * (v + x), U = u * (v + x), R = Math.atan2(E - I, S - T), F = Math.atan2(U - I, N - T);
    return {
      cx: T + t,
      cy: I + s,
      radius: n,
      startAngle: R,
      endAngle: F,
      anticlockwise: c * u > d * l
    };
  }
  static arc(t, s, i, r, n, o, a, h, l) {
    const c = a - o, u = ke._segmentsCount(Math.abs(c) * n, Math.ceil(Math.abs(c) / Us) * 40), d = c / (u * 2), f = d * 2, p = Math.cos(d), _ = Math.sin(d), m = u - 1, v = m % 1 / m;
    for (let y = 0; y <= m; ++y) {
      const g = y + v * y, x = d + o + f * g, T = Math.cos(x), I = -Math.sin(x);
      l.push((p * T + _ * I) * n + i, (p * -I + _ * T) * n + r);
    }
  }
}
class Bf {
  constructor() {
    this.reset();
  }
  begin(t, s, i) {
    this.reset(), this.style = t, this.start = s, this.attribStart = i;
  }
  end(t, s) {
    this.attribSize = s - this.attribStart, this.size = t - this.start;
  }
  reset() {
    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
  }
}
class fr {
  static curveLength(t, s, i, r, n, o, a, h) {
    let c = 0, u = 0, d = 0, f = 0, p = 0, _ = 0, m = 0, v = 0, y = 0, g = 0, x = 0, T = t, I = s;
    for (let S = 1; S <= 10; ++S)
      u = S / 10, d = u * u, f = d * u, p = 1 - u, _ = p * p, m = _ * p, v = m * t + 3 * _ * u * i + 3 * p * d * n + f * a, y = m * s + 3 * _ * u * r + 3 * p * d * o + f * h, g = T - v, x = I - y, T = v, I = y, c += Math.sqrt(g * g + x * x);
    return c;
  }
  static curveTo(t, s, i, r, n, o, a) {
    const h = a[a.length - 2], l = a[a.length - 1];
    a.length -= 2;
    const c = ke._segmentsCount(fr.curveLength(h, l, t, s, i, r, n, o));
    let u = 0, d = 0, f = 0, p = 0, _ = 0;
    a.push(h, l);
    for (let m = 1, v = 0; m <= c; ++m)
      v = m / c, u = 1 - v, d = u * u, f = d * u, p = v * v, _ = p * v, a.push(f * h + 3 * d * v * t + 3 * u * p * i + _ * n, f * l + 3 * d * v * s + 3 * u * p * r + _ * o);
  }
}
function ln(e, t, s, i, r, n, o, a) {
  const h = e - s * r, l = t - i * r, c = e + s * n, u = t + i * n;
  let d, f;
  o ? (d = i, f = -s) : (d = -i, f = s);
  const p = h + d, _ = l + f, m = c + d, v = u + f;
  return a.push(p, _, m, v), 2;
}
function le(e, t, s, i, r, n, o, a) {
  const h = s - e, l = i - t;
  let c = Math.atan2(h, l), u = Math.atan2(r - e, n - t);
  a && c < u ? c += Math.PI * 2 : !a && c > u && (u += Math.PI * 2);
  let d = c;
  const f = u - c, p = Math.abs(f), _ = Math.sqrt(h * h + l * l), m = (15 * p * Math.sqrt(_) / Math.PI >> 0) + 1, v = f / m;
  if (d += v, a) {
    o.push(e, t, s, i);
    for (let y = 1, g = d; y < m; y++, g += v)
      o.push(e, t, e + Math.sin(g) * _, t + Math.cos(g) * _);
    o.push(e, t, r, n);
  } else {
    o.push(s, i, e, t);
    for (let y = 1, g = d; y < m; y++, g += v)
      o.push(e + Math.sin(g) * _, t + Math.cos(g) * _, e, t);
    o.push(r, n, e, t);
  }
  return m * 2;
}
function Df(e, t) {
  const s = e.shape;
  let i = e.points || s.points.slice();
  const r = t.closePointEps;
  if (i.length === 0)
    return;
  const n = e.lineStyle, o = new $(i[0], i[1]), a = new $(i[i.length - 2], i[i.length - 1]), h = s.type !== mt.POLY || s.closeStroke, l = Math.abs(o.x - a.x) < r && Math.abs(o.y - a.y) < r;
  if (h) {
    i = i.slice(), l && (i.pop(), i.pop(), a.set(i[i.length - 2], i[i.length - 1]));
    const B = (o.x + a.x) * 0.5, q = (a.y + o.y) * 0.5;
    i.unshift(B, q), i.push(B, q);
  }
  const c = t.points, u = i.length / 2;
  let d = i.length;
  const f = c.length / 2, p = n.width / 2, _ = p * p, m = n.miterLimit * n.miterLimit;
  let v = i[0], y = i[1], g = i[2], x = i[3], T = 0, I = 0, S = -(y - x), E = v - g, N = 0, U = 0, R = Math.sqrt(S * S + E * E);
  S /= R, E /= R, S *= p, E *= p;
  const F = n.alignment, w = (1 - F) * 2, b = F * 2;
  h || (n.cap === pe.ROUND ? d += le(v - S * (w - b) * 0.5, y - E * (w - b) * 0.5, v - S * w, y - E * w, v + S * b, y + E * b, c, !0) + 2 : n.cap === pe.SQUARE && (d += ln(v, y, S, E, w, b, !0, c))), c.push(v - S * w, y - E * w, v + S * b, y + E * b);
  for (let B = 1; B < u - 1; ++B) {
    v = i[(B - 1) * 2], y = i[(B - 1) * 2 + 1], g = i[B * 2], x = i[B * 2 + 1], T = i[(B + 1) * 2], I = i[(B + 1) * 2 + 1], S = -(y - x), E = v - g, R = Math.sqrt(S * S + E * E), S /= R, E /= R, S *= p, E *= p, N = -(x - I), U = g - T, R = Math.sqrt(N * N + U * U), N /= R, U /= R, N *= p, U *= p;
    const q = g - v, rt = y - x, A = g - T, H = I - x, W = q * A + rt * H, K = rt * A - H * q, Z = K < 0;
    if (Math.abs(K) < 1e-3 * Math.abs(W)) {
      c.push(g - S * w, x - E * w, g + S * b, x + E * b), W >= 0 && (n.join === Mt.ROUND ? d += le(g, x, g - S * w, x - E * w, g - N * w, x - U * w, c, !1) + 4 : d += 2, c.push(g - N * b, x - U * b, g + N * w, x + U * w));
      continue;
    }
    const ut = (-S + v) * (-E + x) - (-S + g) * (-E + y), at = (-N + T) * (-U + x) - (-N + g) * (-U + I), dt = (q * at - A * ut) / K, xt = (H * ut - rt * at) / K, Tt = (dt - g) * (dt - g) + (xt - x) * (xt - x), ft = g + (dt - g) * w, J = x + (xt - x) * w, ht = g - (dt - g) * b, lt = x - (xt - x) * b, Ut = Math.min(q * q + rt * rt, A * A + H * H), Gt = Z ? w : b, Ge = Ut + Gt * Gt * _, Vo = Tt <= Ge;
    let hs = n.join;
    if (hs === Mt.MITER && Tt / _ > m && (hs = Mt.BEVEL), Vo)
      switch (hs) {
        case Mt.MITER: {
          c.push(ft, J, ht, lt);
          break;
        }
        case Mt.BEVEL: {
          Z ? c.push(ft, J, g + S * b, x + E * b, ft, J, g + N * b, x + U * b) : c.push(g - S * w, x - E * w, ht, lt, g - N * w, x - U * w, ht, lt), d += 2;
          break;
        }
        case Mt.ROUND: {
          Z ? (c.push(ft, J, g + S * b, x + E * b), d += le(g, x, g + S * b, x + E * b, g + N * b, x + U * b, c, !0) + 4, c.push(ft, J, g + N * b, x + U * b)) : (c.push(g - S * w, x - E * w, ht, lt), d += le(g, x, g - S * w, x - E * w, g - N * w, x - U * w, c, !1) + 4, c.push(g - N * w, x - U * w, ht, lt));
          break;
        }
      }
    else {
      switch (c.push(g - S * w, x - E * w, g + S * b, x + E * b), hs) {
        case Mt.MITER: {
          Z ? c.push(ht, lt, ht, lt) : c.push(ft, J, ft, J), d += 2;
          break;
        }
        case Mt.ROUND: {
          Z ? d += le(g, x, g + S * b, x + E * b, g + N * b, x + U * b, c, !0) + 2 : d += le(g, x, g - S * w, x - E * w, g - N * w, x - U * w, c, !1) + 2;
          break;
        }
      }
      c.push(g - N * w, x - U * w, g + N * b, x + U * b), d += 2;
    }
  }
  v = i[(u - 2) * 2], y = i[(u - 2) * 2 + 1], g = i[(u - 1) * 2], x = i[(u - 1) * 2 + 1], S = -(y - x), E = v - g, R = Math.sqrt(S * S + E * E), S /= R, E /= R, S *= p, E *= p, c.push(g - S * w, x - E * w, g + S * b, x + E * b), h || (n.cap === pe.ROUND ? d += le(g - S * (w - b) * 0.5, x - E * (w - b) * 0.5, g - S * w, x - E * w, g + S * b, x + E * b, c, !1) + 2 : n.cap === pe.SQUARE && (d += ln(g, x, S, E, w, b, !1, c)));
  const z = t.indices, j = ke.epsilon * ke.epsilon;
  for (let B = f; B < d + f - 2; ++B)
    v = c[B * 2], y = c[B * 2 + 1], g = c[(B + 1) * 2], x = c[(B + 1) * 2 + 1], T = c[(B + 2) * 2], I = c[(B + 2) * 2 + 1], !(Math.abs(v * (x - I) + g * (I - y) + T * (y - x)) < j) && z.push(B, B + 1, B + 2);
}
function Ff(e, t) {
  let s = 0;
  const i = e.shape, r = e.points || i.points, n = i.type !== mt.POLY || i.closeStroke;
  if (r.length === 0)
    return;
  const o = t.points, a = t.indices, h = r.length / 2, l = o.length / 2;
  let c = l;
  for (o.push(r[0], r[1]), s = 1; s < h; s++)
    o.push(r[s * 2], r[s * 2 + 1]), a.push(c, c + 1), c++;
  n && a.push(c, l);
}
function cn(e, t) {
  e.lineStyle.native ? Ff(e, t) : Df(e, t);
}
class pr {
  static curveLength(t, s, i, r, n, o) {
    const a = t - 2 * i + n, h = s - 2 * r + o, l = 2 * i - 2 * t, c = 2 * r - 2 * s, u = 4 * (a * a + h * h), d = 4 * (a * l + h * c), f = l * l + c * c, p = 2 * Math.sqrt(u + d + f), _ = Math.sqrt(u), m = 2 * u * _, v = 2 * Math.sqrt(f), y = d / _;
    return (m * p + _ * d * (p - v) + (4 * f * u - d * d) * Math.log((2 * _ + y + p) / (y + v))) / (4 * m);
  }
  static curveTo(t, s, i, r, n) {
    const o = n[n.length - 2], a = n[n.length - 1], h = ke._segmentsCount(pr.curveLength(o, a, t, s, i, r));
    let l = 0, c = 0;
    for (let u = 1; u <= h; ++u) {
      const d = u / h;
      l = o + (t - o) * d, c = a + (s - a) * d, n.push(l + (t + (i - t) * d - l) * d, c + (s + (r - s) * d - c) * d);
    }
  }
}
const Ti = {
  [mt.POLY]: Io,
  [mt.CIRC]: Vs,
  [mt.ELIP]: Vs,
  [mt.RECT]: Pf,
  [mt.RREC]: Mf
}, un = [], Ss = [];
class js {
  constructor(t, s = null, i = null, r = null) {
    this.points = [], this.holes = [], this.shape = t, this.lineStyle = i, this.fillStyle = s, this.matrix = r, this.type = t.type;
  }
  clone() {
    return new js(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
  }
}
const we = new $(), Ro = class extends Mn {
  constructor() {
    super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = !1, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new Gs(), this.boundsDirty = -1;
  }
  get bounds() {
    return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
  }
  invalidate() {
    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
    for (let e = 0; e < this.drawCalls.length; e++)
      this.drawCalls[e].texArray.clear(), Ss.push(this.drawCalls[e]);
    this.drawCalls.length = 0;
    for (let e = 0; e < this.batches.length; e++) {
      const t = this.batches[e];
      t.reset(), un.push(t);
    }
    this.batches.length = 0;
  }
  clear() {
    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
  }
  drawShape(e, t = null, s = null, i = null) {
    const r = new js(e, t, s, i);
    return this.graphicsData.push(r), this.dirty++, this;
  }
  drawHole(e, t = null) {
    if (!this.graphicsData.length)
      return null;
    const s = new js(e, null, null, t), i = this.graphicsData[this.graphicsData.length - 1];
    return s.lineStyle = i.lineStyle, i.holes.push(s), this.dirty++, this;
  }
  destroy() {
    super.destroy();
    for (let e = 0; e < this.graphicsData.length; ++e)
      this.graphicsData[e].destroy();
    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
  }
  containsPoint(e) {
    const t = this.graphicsData;
    for (let s = 0; s < t.length; ++s) {
      const i = t[s];
      if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(e, we) : we.copyFrom(e), i.shape.contains(we.x, we.y))) {
        let r = !1;
        if (i.holes) {
          for (let n = 0; n < i.holes.length; n++)
            if (i.holes[n].shape.contains(we.x, we.y)) {
              r = !0;
              break;
            }
        }
        if (!r)
          return !0;
      }
    }
    return !1;
  }
  updateBatches() {
    if (!this.graphicsData.length) {
      this.batchable = !0;
      return;
    }
    if (!this.validateBatching())
      return;
    this.cacheDirty = this.dirty;
    const e = this.uvs, t = this.graphicsData;
    let s = null, i = null;
    this.batches.length > 0 && (s = this.batches[this.batches.length - 1], i = s.style);
    for (let a = this.shapeIndex; a < t.length; a++) {
      this.shapeIndex++;
      const h = t[a], l = h.fillStyle, c = h.lineStyle;
      Ti[h.type].build(h), h.matrix && this.transformPoints(h.points, h.matrix), (l.visible || c.visible) && this.processHoles(h.holes);
      for (let d = 0; d < 2; d++) {
        const f = d === 0 ? l : c;
        if (!f.visible)
          continue;
        const p = f.texture.baseTexture, _ = this.indices.length, m = this.points.length / 2;
        p.wrapMode = ie.REPEAT, d === 0 ? this.processFill(h) : this.processLine(h);
        const v = this.points.length / 2 - m;
        v !== 0 && (s && !this._compareStyles(i, f) && (s.end(_, m), s = null), s || (s = un.pop() || new Bf(), s.begin(f, _, m), this.batches.push(s), i = f), this.addUvs(this.points, e, f.texture, m, v, f.matrix));
      }
    }
    const r = this.indices.length, n = this.points.length / 2;
    if (s && s.end(r, n), this.batches.length === 0) {
      this.batchable = !0;
      return;
    }
    const o = n > 65535;
    this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls();
  }
  _compareStyles(e, t) {
    return !(!e || !t || e.texture.baseTexture !== t.texture.baseTexture || e.color + e.alpha !== t.color + t.alpha || !!e.native != !!t.native);
  }
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length)
      return !1;
    for (let e = 0, t = this.graphicsData.length; e < t; e++) {
      const s = this.graphicsData[e], i = s.fillStyle, r = s.lineStyle;
      if (i && !i.texture.baseTexture.valid || r && !r.texture.baseTexture.valid)
        return !1;
    }
    return !0;
  }
  packBatches() {
    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
    const e = this.batches;
    for (let t = 0, s = e.length; t < s; t++) {
      const i = e[t];
      for (let r = 0; r < i.size; r++) {
        const n = i.start + r;
        this.indicesUint16[n] = this.indicesUint16[n] - i.attribStart;
      }
    }
  }
  isBatchable() {
    if (this.points.length > 65535 * 2)
      return !1;
    const e = this.batches;
    for (let t = 0; t < e.length; t++)
      if (e[t].style.native)
        return !1;
    return this.points.length < Ro.BATCHABLE_SIZE * 2;
  }
  buildDrawCalls() {
    let e = ++X._globalBatch;
    for (let c = 0; c < this.drawCalls.length; c++)
      this.drawCalls[c].texArray.clear(), Ss.push(this.drawCalls[c]);
    this.drawCalls.length = 0;
    const t = this.colors, s = this.textureIds;
    let i = Ss.pop();
    i || (i = new Gi(), i.texArray = new Xi()), i.texArray.count = 0, i.start = 0, i.size = 0, i.type = Vt.TRIANGLES;
    let r = 0, n = null, o = 0, a = !1, h = Vt.TRIANGLES, l = 0;
    this.drawCalls.push(i);
    for (let c = 0; c < this.batches.length; c++) {
      const u = this.batches[c], d = 8, f = u.style, p = f.texture.baseTexture;
      a !== !!f.native && (a = !!f.native, h = a ? Vt.LINES : Vt.TRIANGLES, n = null, r = d, e++), n !== p && (n = p, p._batchEnabled !== e && (r === d && (e++, r = 0, i.size > 0 && (i = Ss.pop(), i || (i = new Gi(), i.texArray = new Xi()), this.drawCalls.push(i)), i.start = l, i.size = 0, i.texArray.count = 0, i.type = h), p.touched = 1, p._batchEnabled = e, p._batchLocation = r, p.wrapMode = ie.REPEAT, i.texArray.elements[i.texArray.count++] = p, r++)), i.size += u.size, l += u.size, o = p._batchLocation, this.addColors(t, f.color, f.alpha, u.attribSize, u.attribStart), this.addTextureIds(s, o, u.attribSize, u.attribStart);
    }
    X._globalBatch = e, this.packAttributes();
  }
  packAttributes() {
    const e = this.points, t = this.uvs, s = this.colors, i = this.textureIds, r = new ArrayBuffer(e.length * 3 * 4), n = new Float32Array(r), o = new Uint32Array(r);
    let a = 0;
    for (let h = 0; h < e.length / 2; h++)
      n[a++] = e[h * 2], n[a++] = e[h * 2 + 1], n[a++] = t[h * 2], n[a++] = t[h * 2 + 1], o[a++] = s[h], n[a++] = i[h];
    this._buffer.update(r), this._indexBuffer.update(this.indicesUint16);
  }
  processFill(e) {
    e.holes.length ? Io.triangulate(e, this) : Ti[e.type].triangulate(e, this);
  }
  processLine(e) {
    cn(e, this);
    for (let t = 0; t < e.holes.length; t++)
      cn(e.holes[t], this);
  }
  processHoles(e) {
    for (let t = 0; t < e.length; t++) {
      const s = e[t];
      Ti[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix);
    }
  }
  calculateBounds() {
    const e = this._bounds;
    e.clear(), e.addVertexData(this.points, 0, this.points.length), e.pad(this.boundsPadding, this.boundsPadding);
  }
  transformPoints(e, t) {
    for (let s = 0; s < e.length / 2; s++) {
      const i = e[s * 2], r = e[s * 2 + 1];
      e[s * 2] = t.a * i + t.c * r + t.tx, e[s * 2 + 1] = t.b * i + t.d * r + t.ty;
    }
  }
  addColors(e, t, s, i, r = 0) {
    const n = (t >> 16) + (t & 65280) + ((t & 255) << 16), o = ar(n, s);
    e.length = Math.max(e.length, r + i);
    for (let a = 0; a < i; a++)
      e[r + a] = o;
  }
  addTextureIds(e, t, s, i = 0) {
    e.length = Math.max(e.length, i + s);
    for (let r = 0; r < s; r++)
      e[i + r] = t;
  }
  addUvs(e, t, s, i, r, n = null) {
    let o = 0;
    const a = t.length, h = s.frame;
    for (; o < r; ) {
      let c = e[(i + o) * 2], u = e[(i + o) * 2 + 1];
      if (n) {
        const d = n.a * c + n.c * u + n.tx;
        u = n.b * c + n.d * u + n.ty, c = d;
      }
      o++, t.push(c / h.width, u / h.height);
    }
    const l = s.baseTexture;
    (h.width < l.width || h.height < l.height) && this.adjustUvs(t, s, a, r);
  }
  adjustUvs(e, t, s, i) {
    const r = t.baseTexture, n = 1e-6, o = s + i * 2, a = t.frame, h = a.width / r.width, l = a.height / r.height;
    let c = a.x / a.width, u = a.y / a.height, d = Math.floor(e[s] + n), f = Math.floor(e[s + 1] + n);
    for (let p = s + 2; p < o; p += 2)
      d = Math.min(d, Math.floor(e[p] + n)), f = Math.min(f, Math.floor(e[p + 1] + n));
    c -= d, u -= f;
    for (let p = s; p < o; p += 2)
      e[p] = (e[p] + c) * h, e[p + 1] = (e[p + 1] + u) * l;
  }
};
let Po = Ro;
Po.BATCHABLE_SIZE = 100;
class ti {
  constructor() {
    this.color = 16777215, this.alpha = 1, this.texture = L.WHITE, this.matrix = null, this.visible = !1, this.reset();
  }
  clone() {
    const t = new ti();
    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t;
  }
  reset() {
    this.color = 16777215, this.alpha = 1, this.texture = L.WHITE, this.matrix = null, this.visible = !1;
  }
  destroy() {
    this.texture = null, this.matrix = null;
  }
}
class mr extends ti {
  constructor() {
    super(...arguments), this.width = 0, this.alignment = 0.5, this.native = !1, this.cap = pe.BUTT, this.join = Mt.MITER, this.miterLimit = 10;
  }
  clone() {
    const t = new mr();
    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t;
  }
  reset() {
    super.reset(), this.color = 0, this.alignment = 0.5, this.width = 0, this.native = !1;
  }
}
const Lf = new Float32Array(3), Ei = {}, Bs = class extends bt {
  constructor(e = null) {
    super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new ti(), this._lineStyle = new mr(), this._matrix = null, this._holeMode = !1, this.state = te.for2d(), this._geometry = e || new Po(), this._geometry.refCount++, this._transformID = -1, this.tint = 16777215, this.blendMode = G.NORMAL;
  }
  get geometry() {
    return this._geometry;
  }
  clone() {
    return this.finishPoly(), new Bs(this._geometry);
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  get tint() {
    return this._tint;
  }
  set tint(e) {
    this._tint = e;
  }
  get fill() {
    return this._fillStyle;
  }
  get line() {
    return this._lineStyle;
  }
  lineStyle(e = null, t = 0, s = 1, i = 0.5, r = !1) {
    return typeof e == "number" && (e = { width: e, color: t, alpha: s, alignment: i, native: r }), this.lineTextureStyle(e);
  }
  lineTextureStyle(e) {
    e = Object.assign({
      width: 0,
      texture: L.WHITE,
      color: e != null && e.texture ? 16777215 : 0,
      alpha: 1,
      matrix: null,
      alignment: 0.5,
      native: !1,
      cap: pe.BUTT,
      join: Mt.MITER,
      miterLimit: 10
    }, e), this.currentPath && this.startPoly();
    const t = e.width > 0 && e.alpha > 0;
    return t ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._lineStyle, { visible: t }, e)) : this._lineStyle.reset(), this;
  }
  startPoly() {
    if (this.currentPath) {
      const e = this.currentPath.points, t = this.currentPath.points.length;
      t > 2 && (this.drawShape(this.currentPath), this.currentPath = new Fe(), this.currentPath.closeStroke = !1, this.currentPath.points.push(e[t - 2], e[t - 1]));
    } else
      this.currentPath = new Fe(), this.currentPath.closeStroke = !1;
  }
  finishPoly() {
    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
  }
  moveTo(e, t) {
    return this.startPoly(), this.currentPath.points[0] = e, this.currentPath.points[1] = t, this;
  }
  lineTo(e, t) {
    this.currentPath || this.moveTo(0, 0);
    const s = this.currentPath.points, i = s[s.length - 2], r = s[s.length - 1];
    return (i !== e || r !== t) && s.push(e, t), this;
  }
  _initCurve(e = 0, t = 0) {
    this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [e, t]) : this.moveTo(e, t);
  }
  quadraticCurveTo(e, t, s, i) {
    this._initCurve();
    const r = this.currentPath.points;
    return r.length === 0 && this.moveTo(0, 0), pr.curveTo(e, t, s, i, r), this;
  }
  bezierCurveTo(e, t, s, i, r, n) {
    return this._initCurve(), fr.curveTo(e, t, s, i, r, n, this.currentPath.points), this;
  }
  arcTo(e, t, s, i, r) {
    this._initCurve(e, t);
    const n = this.currentPath.points, o = hn.curveTo(e, t, s, i, r, n);
    if (o) {
      const { cx: a, cy: h, radius: l, startAngle: c, endAngle: u, anticlockwise: d } = o;
      this.arc(a, h, l, c, u, d);
    }
    return this;
  }
  arc(e, t, s, i, r, n = !1) {
    if (i === r)
      return this;
    if (!n && r <= i ? r += Us : n && i <= r && (i += Us), r - i === 0)
      return this;
    const a = e + Math.cos(i) * s, h = t + Math.sin(i) * s, l = this._geometry.closePointEps;
    let c = this.currentPath ? this.currentPath.points : null;
    if (c) {
      const u = Math.abs(c[c.length - 2] - a), d = Math.abs(c[c.length - 1] - h);
      u < l && d < l || c.push(a, h);
    } else
      this.moveTo(a, h), c = this.currentPath.points;
    return hn.arc(a, h, e, t, s, i, r, n, c), this;
  }
  beginFill(e = 0, t = 1) {
    return this.beginTextureFill({ texture: L.WHITE, color: e, alpha: t });
  }
  beginTextureFill(e) {
    e = Object.assign({
      texture: L.WHITE,
      color: 16777215,
      alpha: 1,
      matrix: null
    }, e), this.currentPath && this.startPoly();
    const t = e.alpha > 0;
    return t ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._fillStyle, { visible: t }, e)) : this._fillStyle.reset(), this;
  }
  endFill() {
    return this.finishPoly(), this._fillStyle.reset(), this;
  }
  drawRect(e, t, s, i) {
    return this.drawShape(new V(e, t, s, i));
  }
  drawRoundedRect(e, t, s, i, r) {
    return this.drawShape(new lr(e, t, s, i, r));
  }
  drawCircle(e, t, s) {
    return this.drawShape(new Xc(e, t, s));
  }
  drawEllipse(e, t, s, i) {
    return this.drawShape(new hr(e, t, s, i));
  }
  drawPolygon(...e) {
    let t, s = !0;
    const i = e[0];
    i.points ? (s = i.closeStroke, t = i.points) : Array.isArray(e[0]) ? t = e[0] : t = e;
    const r = new Fe(t);
    return r.closeStroke = s, this.drawShape(r), this;
  }
  drawShape(e) {
    return this._holeMode ? this._geometry.drawHole(e, this._matrix) : this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this;
  }
  clear() {
    return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
  }
  isFastRect() {
    const e = this._geometry.graphicsData;
    return e.length === 1 && e[0].shape.type === mt.RECT && !e[0].matrix && !e[0].holes.length && !(e[0].lineStyle.visible && e[0].lineStyle.width);
  }
  _render(e) {
    this.finishPoly();
    const t = this._geometry;
    t.updateBatches(), t.batchable ? (this.batchDirty !== t.batchDirty && this._populateBatches(), this._renderBatched(e)) : (e.batch.flush(), this._renderDirect(e));
  }
  _populateBatches() {
    const e = this._geometry, t = this.blendMode, s = e.batches.length;
    this.batchTint = -1, this._transformID = -1, this.batchDirty = e.batchDirty, this.batches.length = s, this.vertexData = new Float32Array(e.points);
    for (let i = 0; i < s; i++) {
      const r = e.batches[i], n = r.style.color, o = new Float32Array(this.vertexData.buffer, r.attribStart * 4 * 2, r.attribSize * 2), a = new Float32Array(e.uvsFloat32.buffer, r.attribStart * 4 * 2, r.attribSize * 2), h = new Uint16Array(e.indicesUint16.buffer, r.start * 2, r.size), l = {
        vertexData: o,
        blendMode: t,
        indices: h,
        uvs: a,
        _batchRGB: es(n),
        _tintRGB: n,
        _texture: r.style.texture,
        alpha: r.style.alpha,
        worldAlpha: 1
      };
      this.batches[i] = l;
    }
  }
  _renderBatched(e) {
    if (this.batches.length) {
      e.batch.setObjectRenderer(e.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
      for (let t = 0, s = this.batches.length; t < s; t++) {
        const i = this.batches[t];
        i.worldAlpha = this.worldAlpha * i.alpha, e.plugins[this.pluginName].render(i);
      }
    }
  }
  _renderDirect(e) {
    const t = this._resolveDirectShader(e), s = this._geometry, i = this.tint, r = this.worldAlpha, n = t.uniforms, o = s.drawCalls;
    n.translationMatrix = this.transform.worldTransform, n.tint[0] = (i >> 16 & 255) / 255 * r, n.tint[1] = (i >> 8 & 255) / 255 * r, n.tint[2] = (i & 255) / 255 * r, n.tint[3] = r, e.shader.bind(t), e.geometry.bind(s, t), e.state.set(this.state);
    for (let a = 0, h = o.length; a < h; a++)
      this._renderDrawCallDirect(e, s.drawCalls[a]);
  }
  _renderDrawCallDirect(e, t) {
    const { texArray: s, type: i, size: r, start: n } = t, o = s.count;
    for (let a = 0; a < o; a++)
      e.texture.bind(s.elements[a], a);
    e.geometry.draw(i, r, n);
  }
  _resolveDirectShader(e) {
    let t = this.shader;
    const s = this.pluginName;
    if (!t) {
      if (!Ei[s]) {
        const { maxTextures: i } = e.plugins[s], r = new Int32Array(i);
        for (let a = 0; a < i; a++)
          r[a] = a;
        const n = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new tt(),
          default: Ot.from({ uSamplers: r }, !0)
        }, o = e.plugins[s]._shader.program;
        Ei[s] = new Wt(o, n);
      }
      t = Ei[s];
    }
    return t;
  }
  _calculateBounds() {
    this.finishPoly();
    const e = this._geometry;
    if (!e.graphicsData.length)
      return;
    const { minX: t, minY: s, maxX: i, maxY: r } = e.bounds;
    this._bounds.addFrame(this.transform, t, s, i, r);
  }
  containsPoint(e) {
    return this.worldTransform.applyInverse(e, Bs._TEMP_POINT), this._geometry.containsPoint(Bs._TEMP_POINT);
  }
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this.tint;
      const e = es(this.tint, Lf);
      for (let t = 0; t < this.batches.length; t++) {
        const s = this.batches[t], i = s._batchRGB, r = e[0] * i[0] * 255, n = e[1] * i[1] * 255, o = e[2] * i[2] * 255, a = (r << 16) + (n << 8) + (o | 0);
        s._tintRGB = (a >> 16) + (a & 65280) + ((a & 255) << 16);
      }
    }
  }
  calculateVertices() {
    const e = this.transform._worldID;
    if (this._transformID === e)
      return;
    this._transformID = e;
    const t = this.transform.worldTransform, s = t.a, i = t.b, r = t.c, n = t.d, o = t.tx, a = t.ty, h = this._geometry.points, l = this.vertexData;
    let c = 0;
    for (let u = 0; u < h.length; u += 2) {
      const d = h[u], f = h[u + 1];
      l[c++] = s * d + r * f + o, l[c++] = n * f + i * d + a;
    }
  }
  closePath() {
    const e = this.currentPath;
    return e && (e.closeStroke = !0, this.finishPoly()), this;
  }
  setMatrix(e) {
    return this._matrix = e, this;
  }
  beginHole() {
    return this.finishPoly(), this._holeMode = !0, this;
  }
  endHole() {
    return this.finishPoly(), this._holeMode = !1, this;
  }
  destroy(e) {
    this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(e);
  }
};
let as = Bs;
as.curves = ke;
as._TEMP_POINT = new $();
class Nf {
  constructor(t, s) {
    this.uvBuffer = t, this.uvMatrix = s, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
  }
  update(t) {
    if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)
      return;
    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
    const s = this.uvBuffer.data;
    (!this.data || this.data.length !== s.length) && (this.data = new Float32Array(s.length)), this.uvMatrix.multiplyUvs(s, this.data), this._updateID++;
  }
}
const wi = new $(), dn = new Fe(), Mo = class extends bt {
  constructor(e, t, s, i = Vt.TRIANGLES) {
    super(), this.geometry = e, this.shader = t, this.state = s || te.for2d(), this.drawMode = i, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = M.ROUND_PIXELS, this.batchUvs = null;
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e) {
    this._geometry !== e && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = e, this._geometry && this._geometry.refCount++, this.vertexDirty = -1);
  }
  get uvBuffer() {
    return this.geometry.buffers[1];
  }
  get verticesBuffer() {
    return this.geometry.buffers[0];
  }
  set material(e) {
    this.shader = e;
  }
  get material() {
    return this.shader;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set roundPixels(e) {
    this._roundPixels !== e && (this._transformID = -1), this._roundPixels = e;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get tint() {
    return "tint" in this.shader ? this.shader.tint : null;
  }
  set tint(e) {
    this.shader.tint = e;
  }
  get texture() {
    return "texture" in this.shader ? this.shader.texture : null;
  }
  set texture(e) {
    this.shader.texture = e;
  }
  _render(e) {
    const t = this.geometry.buffers[0].data;
    this.shader.batchable && this.drawMode === Vt.TRIANGLES && t.length < Mo.BATCHABLE_SIZE * 2 ? this._renderToBatch(e) : this._renderDefault(e);
  }
  _renderDefault(e) {
    const t = this.shader;
    t.alpha = this.worldAlpha, t.update && t.update(), e.batch.flush(), t.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), e.shader.bind(t), e.state.set(this.state), e.geometry.bind(this.geometry, t), e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
  }
  _renderToBatch(e) {
    const t = this.geometry, s = this.shader;
    s.uvMatrix && (s.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = t.indexBuffer.data, this._tintRGB = s._tintRGB, this._texture = s.texture;
    const i = this.material.pluginName;
    e.batch.setObjectRenderer(e.plugins[i]), e.plugins[i].render(this);
  }
  calculateVertices() {
    const t = this.geometry.buffers[0], s = t.data, i = t._updateID;
    if (i === this.vertexDirty && this._transformID === this.transform._worldID)
      return;
    this._transformID = this.transform._worldID, this.vertexData.length !== s.length && (this.vertexData = new Float32Array(s.length));
    const r = this.transform.worldTransform, n = r.a, o = r.b, a = r.c, h = r.d, l = r.tx, c = r.ty, u = this.vertexData;
    for (let d = 0; d < u.length / 2; d++) {
      const f = s[d * 2], p = s[d * 2 + 1];
      u[d * 2] = n * f + a * p + l, u[d * 2 + 1] = o * f + h * p + c;
    }
    if (this._roundPixels) {
      const d = M.RESOLUTION;
      for (let f = 0; f < u.length; ++f)
        u[f] = Math.round(u[f] * d) / d;
    }
    this.vertexDirty = i;
  }
  calculateUvs() {
    const e = this.geometry.buffers[1], t = this.shader;
    t.uvMatrix.isSimple ? this.uvs = e.data : (this.batchUvs || (this.batchUvs = new Nf(e, t.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  containsPoint(e) {
    if (!this.getBounds().contains(e.x, e.y))
      return !1;
    this.worldTransform.applyInverse(e, wi);
    const t = this.geometry.getBuffer("aVertexPosition").data, s = dn.points, i = this.geometry.getIndex().data, r = i.length, n = this.drawMode === 4 ? 3 : 1;
    for (let o = 0; o + 2 < r; o += n) {
      const a = i[o] * 2, h = i[o + 1] * 2, l = i[o + 2] * 2;
      if (s[0] = t[a], s[1] = t[a + 1], s[2] = t[h], s[3] = t[h + 1], s[4] = t[l], s[5] = t[l + 1], dn.contains(wi.x, wi.y))
        return !0;
    }
    return !1;
  }
  destroy(e) {
    super.destroy(e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
  }
};
let tr = Mo;
tr.BATCHABLE_SIZE = 100;
class Of extends ne {
  constructor(t, s, i) {
    super();
    const r = new ot(t), n = new ot(s, !0), o = new ot(i, !0, !0);
    this.addAttribute("aVertexPosition", r, 2, !1, k.FLOAT).addAttribute("aTextureCoord", n, 2, !1, k.FLOAT).addIndex(o), this._updateId = -1;
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var kf = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`, Uf = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class fn extends Wt {
  constructor(t, s) {
    const i = {
      uSampler: t,
      alpha: 1,
      uTextureMatrix: tt.IDENTITY,
      uColor: new Float32Array([1, 1, 1, 1])
    };
    s = Object.assign({
      tint: 16777215,
      alpha: 1,
      pluginName: "batch"
    }, s), s.uniforms && Object.assign(i, s.uniforms), super(s.program || Ft.from(Uf, kf), i), this._colorDirty = !1, this.uvMatrix = new Kn(t), this.batchable = s.program === void 0, this.pluginName = s.pluginName, this.tint = s.tint, this.alpha = s.alpha;
  }
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(t) {
    this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t);
  }
  set alpha(t) {
    t !== this._alpha && (this._alpha = t, this._colorDirty = !0);
  }
  get alpha() {
    return this._alpha;
  }
  set tint(t) {
    t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16), this._colorDirty = !0);
  }
  get tint() {
    return this._tint;
  }
  update() {
    if (this._colorDirty) {
      this._colorDirty = !1;
      const t = this.texture.baseTexture;
      Cn(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
    }
    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class pn {
  constructor(t, s, i) {
    this.geometry = new ne(), this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
    for (let r = 0; r < t.length; ++r) {
      let n = t[r];
      n = {
        attributeName: n.attributeName,
        size: n.size,
        uploadFunction: n.uploadFunction,
        type: n.type || k.FLOAT,
        offset: n.offset
      }, s[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
    }
    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
  }
  initBuffers() {
    const t = this.geometry;
    let s = 0;
    this.indexBuffer = new ot(Sc(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      a.offset = s, s += a.size, this.dynamicStride += a.size;
    }
    const i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(i), this.dynamicDataUint32 = new Uint32Array(i), this.dynamicBuffer = new ot(this.dynamicData, !1, !1);
    let r = 0;
    this.staticStride = 0;
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      a.offset = r, r += a.size, this.staticStride += a.size;
    }
    const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new ot(this.staticData, !0, !1);
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      t.addAttribute(a.attributeName, this.dynamicBuffer, 0, a.type === k.UNSIGNED_BYTE, a.type, this.dynamicStride * 4, a.offset * 4);
    }
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      t.addAttribute(a.attributeName, this.staticBuffer, 0, a.type === k.UNSIGNED_BYTE, a.type, this.staticStride * 4, a.offset * 4);
    }
  }
  uploadDynamic(t, s, i) {
    for (let r = 0; r < this.dynamicProperties.length; r++) {
      const n = this.dynamicProperties[r];
      n.uploadFunction(t, s, i, n.type === k.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset);
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(t, s, i) {
    for (let r = 0; r < this.staticProperties.length; r++) {
      const n = this.staticProperties[r];
      n.uploadFunction(t, s, i, n.type === k.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset);
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
  }
}
var Gf = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`, Hf = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class Bo extends Zs {
  constructor(t) {
    super(t), this.shader = null, this.properties = null, this.tempMatrix = new tt(), this.properties = [
      {
        attributeName: "aVertexPosition",
        size: 2,
        uploadFunction: this.uploadVertices,
        offset: 0
      },
      {
        attributeName: "aPositionCoord",
        size: 2,
        uploadFunction: this.uploadPosition,
        offset: 0
      },
      {
        attributeName: "aRotation",
        size: 1,
        uploadFunction: this.uploadRotation,
        offset: 0
      },
      {
        attributeName: "aTextureCoord",
        size: 2,
        uploadFunction: this.uploadUvs,
        offset: 0
      },
      {
        attributeName: "aColor",
        size: 1,
        type: k.UNSIGNED_BYTE,
        uploadFunction: this.uploadTint,
        offset: 0
      }
    ], this.shader = Wt.from(Hf, Gf, {}), this.state = te.for2d();
  }
  render(t) {
    const s = t.children, i = t._maxSize, r = t._batchSize, n = this.renderer;
    let o = s.length;
    if (o === 0)
      return;
    o > i && !t.autoResize && (o = i);
    let a = t._buffers;
    a || (a = t._buffers = this.generateBuffers(t));
    const h = s[0]._texture.baseTexture, l = h.alphaMode > 0;
    this.state.blendMode = Sn(t.blendMode, l), n.state.set(this.state);
    const c = n.gl, u = t.worldTransform.copyTo(this.tempMatrix);
    u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = Ac(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, l), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
    let d = !1;
    for (let f = 0, p = 0; f < o; f += r, p += 1) {
      let _ = o - f;
      _ > r && (_ = r), p >= a.length && a.push(this._generateOneMoreBuffer(t));
      const m = a[p];
      m.uploadDynamic(s, f, _);
      const v = t._bufferUpdateIDs[p] || 0;
      d = d || m._updateID < v, d && (m._updateID = t._updateID, m.uploadStatic(s, f, _)), n.geometry.bind(m.geometry), c.drawElements(c.TRIANGLES, _ * 6, c.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(t) {
    const s = [], i = t._maxSize, r = t._batchSize, n = t._properties;
    for (let o = 0; o < i; o += r)
      s.push(new pn(this.properties, n, r));
    return s;
  }
  _generateOneMoreBuffer(t) {
    const s = t._batchSize, i = t._properties;
    return new pn(this.properties, i, s);
  }
  uploadVertices(t, s, i, r, n, o) {
    let a = 0, h = 0, l = 0, c = 0;
    for (let u = 0; u < i; ++u) {
      const d = t[s + u], f = d._texture, p = d.scale.x, _ = d.scale.y, m = f.trim, v = f.orig;
      m ? (h = m.x - d.anchor.x * v.width, a = h + m.width, c = m.y - d.anchor.y * v.height, l = c + m.height) : (a = v.width * (1 - d.anchor.x), h = v.width * -d.anchor.x, l = v.height * (1 - d.anchor.y), c = v.height * -d.anchor.y), r[o] = h * p, r[o + 1] = c * _, r[o + n] = a * p, r[o + n + 1] = c * _, r[o + n * 2] = a * p, r[o + n * 2 + 1] = l * _, r[o + n * 3] = h * p, r[o + n * 3 + 1] = l * _, o += n * 4;
    }
  }
  uploadPosition(t, s, i, r, n, o) {
    for (let a = 0; a < i; a++) {
      const h = t[s + a].position;
      r[o] = h.x, r[o + 1] = h.y, r[o + n] = h.x, r[o + n + 1] = h.y, r[o + n * 2] = h.x, r[o + n * 2 + 1] = h.y, r[o + n * 3] = h.x, r[o + n * 3 + 1] = h.y, o += n * 4;
    }
  }
  uploadRotation(t, s, i, r, n, o) {
    for (let a = 0; a < i; a++) {
      const h = t[s + a].rotation;
      r[o] = h, r[o + n] = h, r[o + n * 2] = h, r[o + n * 3] = h, o += n * 4;
    }
  }
  uploadUvs(t, s, i, r, n, o) {
    for (let a = 0; a < i; ++a) {
      const h = t[s + a]._texture._uvs;
      h ? (r[o] = h.x0, r[o + 1] = h.y0, r[o + n] = h.x1, r[o + n + 1] = h.y1, r[o + n * 2] = h.x2, r[o + n * 2 + 1] = h.y2, r[o + n * 3] = h.x3, r[o + n * 3 + 1] = h.y3, o += n * 4) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + n * 2] = 0, r[o + n * 2 + 1] = 0, r[o + n * 3] = 0, r[o + n * 3 + 1] = 0, o += n * 4);
    }
  }
  uploadTint(t, s, i, r, n, o) {
    for (let a = 0; a < i; ++a) {
      const h = t[s + a], l = h._texture.baseTexture.alphaMode > 0, c = h.alpha, u = c < 1 && l ? ar(h._tintRGB, c) : h._tintRGB + (c * 255 << 24);
      r[o] = u, r[o + n] = u, r[o + n * 2] = u, r[o + n * 3] = u, o += n * 4;
    }
  }
  destroy() {
    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
  }
}
Bo.extension = {
  name: "particle",
  type: P.RendererPlugin
};
O.add(Bo);
var ei = /* @__PURE__ */ ((e) => (e[e.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", e[e.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", e))(ei || {});
const Cs = {
  willReadFrequently: !0
}, D = class {
  static get experimentalLetterSpacingSupported() {
    let e = D._experimentalLetterSpacingSupported;
    if (e !== void 0) {
      const t = M.ADAPTER.getCanvasRenderingContext2D().prototype;
      e = D._experimentalLetterSpacingSupported = "letterSpacing" in t || "textLetterSpacing" in t;
    }
    return e;
  }
  constructor(e, t, s, i, r, n, o, a, h) {
    this.text = e, this.style = t, this.width = s, this.height = i, this.lines = r, this.lineWidths = n, this.lineHeight = o, this.maxLineWidth = a, this.fontProperties = h;
  }
  static measureText(e, t, s, i = D._canvas) {
    s = s ?? t.wordWrap;
    const r = t.toFontString(), n = D.measureFont(r);
    n.fontSize === 0 && (n.fontSize = t.fontSize, n.ascent = t.fontSize);
    const o = i.getContext("2d", Cs);
    o.font = r;
    const h = (s ? D.wordWrap(e, t, i) : e).split(/(?:\r\n|\r|\n)/), l = new Array(h.length);
    let c = 0;
    for (let p = 0; p < h.length; p++) {
      const _ = D._measureText(h[p], t.letterSpacing, o);
      l[p] = _, c = Math.max(c, _);
    }
    let u = c + t.strokeThickness;
    t.dropShadow && (u += t.dropShadowDistance);
    const d = t.lineHeight || n.fontSize + t.strokeThickness;
    let f = Math.max(d, n.fontSize + t.strokeThickness * 2) + (h.length - 1) * (d + t.leading);
    return t.dropShadow && (f += t.dropShadowDistance), new D(e, t, u, f, h, l, d + t.leading, c, n);
  }
  static _measureText(e, t, s) {
    let i = !1;
    D.experimentalLetterSpacingSupported && (D.experimentalLetterSpacing ? (s.letterSpacing = `${t}px`, s.textLetterSpacing = `${t}px`, i = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
    let r = s.measureText(e).width;
    return r > 0 && (i ? r -= t : r += (D.graphemeSegmenter(e).length - 1) * t), r;
  }
  static wordWrap(e, t, s = D._canvas) {
    const i = s.getContext("2d", Cs);
    let r = 0, n = "", o = "";
    const a = /* @__PURE__ */ Object.create(null), { letterSpacing: h, whiteSpace: l } = t, c = D.collapseSpaces(l), u = D.collapseNewlines(l);
    let d = !c;
    const f = t.wordWrapWidth + h, p = D.tokenize(e);
    for (let _ = 0; _ < p.length; _++) {
      let m = p[_];
      if (D.isNewline(m)) {
        if (!u) {
          o += D.addLine(n), d = !c, n = "", r = 0;
          continue;
        }
        m = " ";
      }
      if (c) {
        const y = D.isBreakingSpace(m), g = D.isBreakingSpace(n[n.length - 1]);
        if (y && g)
          continue;
      }
      const v = D.getFromCache(m, h, a, i);
      if (v > f)
        if (n !== "" && (o += D.addLine(n), n = "", r = 0), D.canBreakWords(m, t.breakWords)) {
          const y = D.wordWrapSplit(m);
          for (let g = 0; g < y.length; g++) {
            let x = y[g], T = x, I = 1;
            for (; y[g + I]; ) {
              const E = y[g + I];
              if (!D.canBreakChars(T, E, m, g, t.breakWords))
                x += E;
              else
                break;
              T = E, I++;
            }
            g += I - 1;
            const S = D.getFromCache(x, h, a, i);
            S + r > f && (o += D.addLine(n), d = !1, n = "", r = 0), n += x, r += S;
          }
        } else {
          n.length > 0 && (o += D.addLine(n), n = "", r = 0);
          const y = _ === p.length - 1;
          o += D.addLine(m, !y), d = !1, n = "", r = 0;
        }
      else
        v + r > f && (d = !1, o += D.addLine(n), n = "", r = 0), (n.length > 0 || !D.isBreakingSpace(m) || d) && (n += m, r += v);
    }
    return o += D.addLine(n, !1), o;
  }
  static addLine(e, t = !0) {
    return e = D.trimRight(e), e = t ? `${e}
` : e, e;
  }
  static getFromCache(e, t, s, i) {
    let r = s[e];
    return typeof r != "number" && (r = D._measureText(e, t, i) + t, s[e] = r), r;
  }
  static collapseSpaces(e) {
    return e === "normal" || e === "pre-line";
  }
  static collapseNewlines(e) {
    return e === "normal";
  }
  static trimRight(e) {
    if (typeof e != "string")
      return "";
    for (let t = e.length - 1; t >= 0; t--) {
      const s = e[t];
      if (!D.isBreakingSpace(s))
        break;
      e = e.slice(0, -1);
    }
    return e;
  }
  static isNewline(e) {
    return typeof e != "string" ? !1 : D._newlines.includes(e.charCodeAt(0));
  }
  static isBreakingSpace(e, t) {
    return typeof e != "string" ? !1 : D._breakingSpaces.includes(e.charCodeAt(0));
  }
  static tokenize(e) {
    const t = [];
    let s = "";
    if (typeof e != "string")
      return t;
    for (let i = 0; i < e.length; i++) {
      const r = e[i], n = e[i + 1];
      if (D.isBreakingSpace(r, n) || D.isNewline(r)) {
        s !== "" && (t.push(s), s = ""), t.push(r);
        continue;
      }
      s += r;
    }
    return s !== "" && t.push(s), t;
  }
  static canBreakWords(e, t) {
    return t;
  }
  static canBreakChars(e, t, s, i, r) {
    return !0;
  }
  static wordWrapSplit(e) {
    return D.graphemeSegmenter(e);
  }
  static measureFont(e) {
    if (D._fonts[e])
      return D._fonts[e];
    const t = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    }, s = D._canvas, i = D._context;
    i.font = e;
    const r = D.METRICS_STRING + D.BASELINE_SYMBOL, n = Math.ceil(i.measureText(r).width);
    let o = Math.ceil(i.measureText(D.BASELINE_SYMBOL).width);
    const a = Math.ceil(D.HEIGHT_MULTIPLIER * o);
    if (o = o * D.BASELINE_MULTIPLIER | 0, n === 0 || a === 0)
      return D._fonts[e] = t, t;
    s.width = n, s.height = a, i.fillStyle = "#f00", i.fillRect(0, 0, n, a), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(r, 0, o);
    const h = i.getImageData(0, 0, n, a).data, l = h.length, c = n * 4;
    let u = 0, d = 0, f = !1;
    for (u = 0; u < o; ++u) {
      for (let p = 0; p < c; p += 4)
        if (h[d + p] !== 255) {
          f = !0;
          break;
        }
      if (!f)
        d += c;
      else
        break;
    }
    for (t.ascent = o - u, d = l - c, f = !1, u = a; u > o; --u) {
      for (let p = 0; p < c; p += 4)
        if (h[d + p] !== 255) {
          f = !0;
          break;
        }
      if (!f)
        d -= c;
      else
        break;
    }
    return t.descent = u - o, t.fontSize = t.ascent + t.descent, D._fonts[e] = t, t;
  }
  static clearMetrics(e = "") {
    e ? delete D._fonts[e] : D._fonts = {};
  }
  static get _canvas() {
    if (!D.__canvas) {
      let e;
      try {
        const t = new OffscreenCanvas(0, 0), s = t.getContext("2d", Cs);
        if (s != null && s.measureText)
          return D.__canvas = t, t;
        e = M.ADAPTER.createCanvas();
      } catch {
        e = M.ADAPTER.createCanvas();
      }
      e.width = e.height = 10, D.__canvas = e;
    }
    return D.__canvas;
  }
  static get _context() {
    return D.__context || (D.__context = D._canvas.getContext("2d", Cs)), D.__context;
  }
};
let pt = D;
pt.METRICS_STRING = "|ÉqÅ";
pt.BASELINE_SYMBOL = "M";
pt.BASELINE_MULTIPLIER = 1.4;
pt.HEIGHT_MULTIPLIER = 2;
pt.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
    const e = new Intl.Segmenter();
    return (t) => [...e.segment(t)].map((s) => s.segment);
  }
  return (e) => [...e];
})();
pt.experimentalLetterSpacing = !1;
pt._fonts = {};
pt._newlines = [
  10,
  13
];
pt._breakingSpaces = [
  9,
  32,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8200,
  8201,
  8202,
  8287,
  12288
];
const Xf = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
], qe = class {
  constructor(e) {
    this.styleID = 0, this.reset(), Si(this, e, e);
  }
  clone() {
    const e = {};
    return Si(e, this, qe.defaultStyle), new qe(e);
  }
  reset() {
    Si(this, qe.defaultStyle, qe.defaultStyle);
  }
  get align() {
    return this._align;
  }
  set align(e) {
    this._align !== e && (this._align = e, this.styleID++);
  }
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(e) {
    this._breakWords !== e && (this._breakWords = e, this.styleID++);
  }
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(e) {
    this._dropShadow !== e && (this._dropShadow = e, this.styleID++);
  }
  get dropShadowAlpha() {
    return this._dropShadowAlpha;
  }
  set dropShadowAlpha(e) {
    this._dropShadowAlpha !== e && (this._dropShadowAlpha = e, this.styleID++);
  }
  get dropShadowAngle() {
    return this._dropShadowAngle;
  }
  set dropShadowAngle(e) {
    this._dropShadowAngle !== e && (this._dropShadowAngle = e, this.styleID++);
  }
  get dropShadowBlur() {
    return this._dropShadowBlur;
  }
  set dropShadowBlur(e) {
    this._dropShadowBlur !== e && (this._dropShadowBlur = e, this.styleID++);
  }
  get dropShadowColor() {
    return this._dropShadowColor;
  }
  set dropShadowColor(e) {
    const t = Ai(e);
    this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++);
  }
  get dropShadowDistance() {
    return this._dropShadowDistance;
  }
  set dropShadowDistance(e) {
    this._dropShadowDistance !== e && (this._dropShadowDistance = e, this.styleID++);
  }
  get fill() {
    return this._fill;
  }
  set fill(e) {
    const t = Ai(e);
    this._fill !== t && (this._fill = t, this.styleID++);
  }
  get fillGradientType() {
    return this._fillGradientType;
  }
  set fillGradientType(e) {
    this._fillGradientType !== e && (this._fillGradientType = e, this.styleID++);
  }
  get fillGradientStops() {
    return this._fillGradientStops;
  }
  set fillGradientStops(e) {
    zf(this._fillGradientStops, e) || (this._fillGradientStops = e, this.styleID++);
  }
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(e) {
    this.fontFamily !== e && (this._fontFamily = e, this.styleID++);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(e) {
    this._fontSize !== e && (this._fontSize = e, this.styleID++);
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(e) {
    this._fontStyle !== e && (this._fontStyle = e, this.styleID++);
  }
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(e) {
    this._fontVariant !== e && (this._fontVariant = e, this.styleID++);
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    this._fontWeight !== e && (this._fontWeight = e, this.styleID++);
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(e) {
    this._letterSpacing !== e && (this._letterSpacing = e, this.styleID++);
  }
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(e) {
    this._lineHeight !== e && (this._lineHeight = e, this.styleID++);
  }
  get leading() {
    return this._leading;
  }
  set leading(e) {
    this._leading !== e && (this._leading = e, this.styleID++);
  }
  get lineJoin() {
    return this._lineJoin;
  }
  set lineJoin(e) {
    this._lineJoin !== e && (this._lineJoin = e, this.styleID++);
  }
  get miterLimit() {
    return this._miterLimit;
  }
  set miterLimit(e) {
    this._miterLimit !== e && (this._miterLimit = e, this.styleID++);
  }
  get padding() {
    return this._padding;
  }
  set padding(e) {
    this._padding !== e && (this._padding = e, this.styleID++);
  }
  get stroke() {
    return this._stroke;
  }
  set stroke(e) {
    const t = Ai(e);
    this._stroke !== t && (this._stroke = t, this.styleID++);
  }
  get strokeThickness() {
    return this._strokeThickness;
  }
  set strokeThickness(e) {
    this._strokeThickness !== e && (this._strokeThickness = e, this.styleID++);
  }
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(e) {
    this._textBaseline !== e && (this._textBaseline = e, this.styleID++);
  }
  get trim() {
    return this._trim;
  }
  set trim(e) {
    this._trim !== e && (this._trim = e, this.styleID++);
  }
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(e) {
    this._whiteSpace !== e && (this._whiteSpace = e, this.styleID++);
  }
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(e) {
    this._wordWrap !== e && (this._wordWrap = e, this.styleID++);
  }
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(e) {
    this._wordWrapWidth !== e && (this._wordWrapWidth = e, this.styleID++);
  }
  toFontString() {
    const e = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
    let t = this.fontFamily;
    Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
    for (let s = t.length - 1; s >= 0; s--) {
      let i = t[s].trim();
      !/([\"\'])[^\'\"]+\1/.test(i) && !Xf.includes(i) && (i = `"${i}"`), t[s] = i;
    }
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(",")}`;
  }
};
let ve = qe;
ve.defaultStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: !1,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: ei.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100
};
function mn(e) {
  return typeof e == "number" ? wn(e) : (typeof e == "string" && e.startsWith("0x") && (e = e.replace("0x", "#")), e);
}
function Ai(e) {
  if (Array.isArray(e)) {
    for (let t = 0; t < e.length; ++t)
      e[t] = mn(e[t]);
    return e;
  } else
    return mn(e);
}
function zf(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
    return !1;
  for (let s = 0; s < e.length; ++s)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function Si(e, t, s) {
  for (const i in s)
    Array.isArray(t[i]) ? e[i] = t[i].slice() : e[i] = t[i];
}
const Vf = {
  texture: !0,
  children: !1,
  baseTexture: !0
}, er = class extends be {
  constructor(e, t, s) {
    let i = !1;
    s || (s = M.ADAPTER.createCanvas(), i = !0), s.width = 3, s.height = 3;
    const r = L.from(s);
    r.orig = new V(), r.trim = new V(), super(r), this._ownCanvas = i, this.canvas = s, this.context = s.getContext("2d", {
      willReadFrequently: !0
    }), this._resolution = er.defaultResolution ?? M.RESOLUTION, this._autoResolution = er.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = t, this.localStyleID = -1;
  }
  static get experimentalLetterSpacing() {
    return pt.experimentalLetterSpacing;
  }
  static set experimentalLetterSpacing(e) {
    Y("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"), pt.experimentalLetterSpacing = e;
  }
  updateText(e) {
    const t = this._style;
    if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), !this.dirty && e)
      return;
    this._font = this._style.toFontString();
    const s = this.context, i = pt.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), r = i.width, n = i.height, o = i.lines, a = i.lineHeight, h = i.lineWidths, l = i.maxLineWidth, c = i.fontProperties;
    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, r) + t.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, n) + t.padding * 2) * this._resolution), s.scale(this._resolution, this._resolution), s.clearRect(0, 0, this.canvas.width, this.canvas.height), s.font = this._font, s.lineWidth = t.strokeThickness, s.textBaseline = t.textBaseline, s.lineJoin = t.lineJoin, s.miterLimit = t.miterLimit;
    let u, d;
    const f = t.dropShadow ? 2 : 1;
    for (let p = 0; p < f; ++p) {
      const _ = t.dropShadow && p === 0, m = _ ? Math.ceil(Math.max(1, n) + t.padding * 2) : 0, v = m * this._resolution;
      if (_) {
        s.fillStyle = "black", s.strokeStyle = "black";
        const g = t.dropShadowColor, x = es(typeof g == "number" ? g : or(g)), T = t.dropShadowBlur * this._resolution, I = t.dropShadowDistance * this._resolution;
        s.shadowColor = `rgba(${x[0] * 255},${x[1] * 255},${x[2] * 255},${t.dropShadowAlpha})`, s.shadowBlur = T, s.shadowOffsetX = Math.cos(t.dropShadowAngle) * I, s.shadowOffsetY = Math.sin(t.dropShadowAngle) * I + v;
      } else
        s.fillStyle = this._generateFillStyle(t, o, i), s.strokeStyle = t.stroke, s.shadowColor = "black", s.shadowBlur = 0, s.shadowOffsetX = 0, s.shadowOffsetY = 0;
      let y = (a - c.fontSize) / 2;
      a - c.fontSize < 0 && (y = 0);
      for (let g = 0; g < o.length; g++)
        u = t.strokeThickness / 2, d = t.strokeThickness / 2 + g * a + c.ascent + y, t.align === "right" ? u += l - h[g] : t.align === "center" && (u += (l - h[g]) / 2), t.stroke && t.strokeThickness && this.drawLetterSpacing(o[g], u + t.padding, d + t.padding - m, !0), t.fill && this.drawLetterSpacing(o[g], u + t.padding, d + t.padding - m);
    }
    this.updateTexture();
  }
  drawLetterSpacing(e, t, s, i = !1) {
    const n = this._style.letterSpacing;
    let o = !1;
    if (pt.experimentalLetterSpacingSupported && (pt.experimentalLetterSpacing ? (this.context.letterSpacing = `${n}px`, this.context.textLetterSpacing = `${n}px`, o = !0) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), n === 0 || o) {
      i ? this.context.strokeText(e, t, s) : this.context.fillText(e, t, s);
      return;
    }
    let a = t;
    const h = pt.graphemeSegmenter(e);
    let l = this.context.measureText(e).width, c = 0;
    for (let u = 0; u < h.length; ++u) {
      const d = h[u];
      i ? this.context.strokeText(d, a, s) : this.context.fillText(d, a, s);
      let f = "";
      for (let p = u + 1; p < h.length; ++p)
        f += h[p];
      c = this.context.measureText(f).width, a += l - c + n, l = c;
    }
  }
  updateTexture() {
    const e = this.canvas;
    if (this._style.trim) {
      const n = Rc(e);
      n.data && (e.width = n.width, e.height = n.height, this.context.putImageData(n.data, 0, 0));
    }
    const t = this._texture, s = this._style, i = s.trim ? 0 : s.padding, r = t.baseTexture;
    t.trim.width = t._frame.width = e.width / this._resolution, t.trim.height = t._frame.height = e.height / this._resolution, t.trim.x = -i, t.trim.y = -i, t.orig.width = t._frame.width - i * 2, t.orig.height = t._frame.height - i * 2, this._onTextureUpdate(), r.setRealSize(e.width, e.height, this._resolution), t.updateUvs(), this.dirty = !1;
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._render(e);
  }
  updateTransform() {
    this.updateText(!0), super.updateTransform();
  }
  getBounds(e, t) {
    return this.updateText(!0), this._textureID === -1 && (e = !1), super.getBounds(e, t);
  }
  getLocalBounds(e) {
    return this.updateText(!0), super.getLocalBounds.call(this, e);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  _generateFillStyle(e, t, s) {
    const i = e.fill;
    if (Array.isArray(i)) {
      if (i.length === 1)
        return i[0];
    } else
      return i;
    let r;
    const n = e.dropShadow ? e.dropShadowDistance : 0, o = e.padding || 0, a = this.canvas.width / this._resolution - n - o * 2, h = this.canvas.height / this._resolution - n - o * 2, l = i.slice(), c = e.fillGradientStops.slice();
    if (!c.length) {
      const u = l.length + 1;
      for (let d = 1; d < u; ++d)
        c.push(d / u);
    }
    if (l.unshift(i[0]), c.unshift(0), l.push(i[i.length - 1]), c.push(1), e.fillGradientType === ei.LINEAR_VERTICAL) {
      r = this.context.createLinearGradient(a / 2, o, a / 2, h + o);
      const u = s.fontProperties.fontSize + e.strokeThickness;
      for (let d = 0; d < t.length; d++) {
        const f = s.lineHeight * (d - 1) + u, p = s.lineHeight * d;
        let _ = p;
        d > 0 && f > p && (_ = (p + f) / 2);
        const m = p + u, v = s.lineHeight * (d + 1);
        let y = m;
        d + 1 < t.length && v < m && (y = (m + v) / 2);
        const g = (y - _) / h;
        for (let x = 0; x < l.length; x++) {
          let T = 0;
          typeof c[x] == "number" ? T = c[x] : T = x / l.length;
          let I = Math.min(1, Math.max(0, _ / h + T * g));
          I = Number(I.toFixed(5)), r.addColorStop(I, l[x]);
        }
      }
    } else {
      r = this.context.createLinearGradient(o, h / 2, a + o, h / 2);
      const u = l.length + 1;
      let d = 1;
      for (let f = 0; f < l.length; f++) {
        let p;
        typeof c[f] == "number" ? p = c[f] : p = d / u, r.addColorStop(p, l[f]), d++;
      }
    }
    return r;
  }
  destroy(e) {
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, Vf, e), super.destroy(e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
  }
  get width() {
    return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    this.updateText(!0);
    const t = Re(this.scale.x) || 1;
    this.scale.x = t * e / this._texture.orig.width, this._width = e;
  }
  get height() {
    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    this.updateText(!0);
    const t = Re(this.scale.y) || 1;
    this.scale.y = t * e / this._texture.orig.height, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    e = e || {}, e instanceof ve ? this._style = e : this._style = new ve(e), this.localStyleID = -1, this.dirty = !0;
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = !0);
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0);
  }
};
let si = er;
si.defaultAutoResolution = !0;
class jf {
  constructor(t) {
    this.maxItemsPerFrame = t, this.itemsLeft = 0;
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function Wf(e, t) {
  var i;
  let s = !1;
  if ((i = e == null ? void 0 : e._textures) != null && i.length) {
    for (let r = 0; r < e._textures.length; r++)
      if (e._textures[r] instanceof L) {
        const n = e._textures[r].baseTexture;
        t.includes(n) || (t.push(n), s = !0);
      }
  }
  return s;
}
function $f(e, t) {
  if (e.baseTexture instanceof X) {
    const s = e.baseTexture;
    return t.includes(s) || t.push(s), !0;
  }
  return !1;
}
function Yf(e, t) {
  if (e._texture && e._texture instanceof L) {
    const s = e._texture.baseTexture;
    return t.includes(s) || t.push(s), !0;
  }
  return !1;
}
function qf(e, t) {
  return t instanceof si ? (t.updateText(!0), !0) : !1;
}
function Kf(e, t) {
  if (t instanceof ve) {
    const s = t.toFontString();
    return pt.measureFont(s), !0;
  }
  return !1;
}
function Zf(e, t) {
  if (e instanceof si) {
    t.includes(e.style) || t.push(e.style), t.includes(e) || t.push(e);
    const s = e._texture.baseTexture;
    return t.includes(s) || t.push(s), !0;
  }
  return !1;
}
function Jf(e, t) {
  return e instanceof ve ? (t.includes(e) || t.push(e), !0) : !1;
}
const Do = class {
  constructor(e) {
    this.limiter = new jf(Do.uploadsPerFrame), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = () => {
      this.queue && this.prepareItems();
    }, this.registerFindHook(Zf), this.registerFindHook(Jf), this.registerFindHook(Wf), this.registerFindHook($f), this.registerFindHook(Yf), this.registerUploadHook(qf), this.registerUploadHook(Kf);
  }
  upload(e) {
    return new Promise((t) => {
      e && this.add(e), this.queue.length ? (this.completes.push(t), this.ticking || (this.ticking = !0, yt.system.addOnce(this.tick, this, Ne.UTILITY))) : t();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
      const e = this.queue[0];
      let t = !1;
      if (e && !e._destroyed) {
        for (let s = 0, i = this.uploadHooks.length; s < i; s++)
          if (this.uploadHooks[s](this.uploadHookHelper, e)) {
            this.queue.shift(), t = !0;
            break;
          }
      }
      t || this.queue.shift();
    }
    if (this.queue.length)
      yt.system.addOnce(this.tick, this, Ne.UTILITY);
    else {
      this.ticking = !1;
      const e = this.completes.slice(0);
      this.completes.length = 0;
      for (let t = 0, s = e.length; t < s; t++)
        e[t]();
    }
  }
  registerFindHook(e) {
    return e && this.addHooks.push(e), this;
  }
  registerUploadHook(e) {
    return e && this.uploadHooks.push(e), this;
  }
  add(e) {
    for (let t = 0, s = this.addHooks.length; t < s && !this.addHooks[t](e, this.queue); t++)
      ;
    if (e instanceof bt)
      for (let t = e.children.length - 1; t >= 0; t--)
        this.add(e.children[t]);
    return this;
  }
  destroy() {
    this.ticking && yt.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
  }
};
let Ws = Do;
Ws.uploadsPerFrame = 4;
Object.defineProperties(M, {
  UPLOADS_PER_FRAME: {
    get() {
      return Ws.uploadsPerFrame;
    },
    set(e) {
      Y("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), Ws.uploadsPerFrame = e;
    }
  }
});
function Fo(e, t) {
  return t instanceof X ? (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), !0) : !1;
}
function Qf(e, t) {
  if (!(t instanceof as))
    return !1;
  const { geometry: s } = t;
  t.finishPoly(), s.updateBatches();
  const { batches: i } = s;
  for (let r = 0; r < i.length; r++) {
    const { texture: n } = i[r].style;
    n && Fo(e, n.baseTexture);
  }
  return s.batchable || e.geometry.bind(s, t._resolveDirectShader(e)), !0;
}
function tp(e, t) {
  return e instanceof as ? (t.push(e), !0) : !1;
}
class Lo extends Ws {
  constructor(t) {
    super(t), this.uploadHookHelper = this.renderer, this.registerFindHook(tp), this.registerUploadHook(Fo), this.registerUploadHook(Qf);
  }
}
Lo.extension = {
  name: "prepare",
  type: P.RendererSystem
};
O.add(Lo);
var ep = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`, sp = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, ip = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`, gn = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, rp = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const Is = new tt();
class No extends Zs {
  constructor(t) {
    super(t), t.runners.contextChange.add(this), this.quad = new Wn(), this.state = te.for2d();
  }
  contextChange() {
    const t = this.renderer, s = { globals: t.globalUniforms };
    this.simpleShader = Wt.from(gn, rp, s), this.shader = t.context.webGLVersion > 1 ? Wt.from(sp, ep, s) : Wt.from(gn, ip, s);
  }
  render(t) {
    const s = this.renderer, i = this.quad;
    let r = i.vertices;
    r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y);
    const n = t.uvRespectAnchor ? t.anchor.x : 0, o = t.uvRespectAnchor ? t.anchor.y : 0;
    r = i.uvs, r[0] = r[6] = -n, r[1] = r[3] = -o, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - o, i.invalidate();
    const a = t._texture, h = a.baseTexture, l = h.alphaMode > 0, c = t.tileTransform.localTransform, u = t.uvMatrix;
    let d = h.isPowerOfTwo && a.frame.width === h.width && a.frame.height === h.height;
    d && (h._glTextures[s.CONTEXT_UID] ? d = h.wrapMode !== ie.CLAMP : h.wrapMode === ie.CLAMP && (h.wrapMode = ie.REPEAT));
    const f = d ? this.simpleShader : this.shader, p = a.width, _ = a.height, m = t._width, v = t._height;
    Is.set(c.a * p / m, c.b * p / v, c.c * _ / m, c.d * _ / v, c.tx / m, c.ty / v), Is.invert(), d ? Is.prepend(u.mapCoord) : (f.uniforms.uMapCoord = u.mapCoord.toArray(!0), f.uniforms.uClampFrame = u.uClampFrame, f.uniforms.uClampOffset = u.uClampOffset), f.uniforms.uTransform = Is.toArray(!0), f.uniforms.uColor = Cn(t.tint, t.worldAlpha, f.uniforms.uColor, l), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = a, s.shader.bind(f), s.geometry.bind(i), this.state.blendMode = Sn(t.blendMode, l), s.state.set(this.state), s.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
No.extension = {
  name: "tilingSprite",
  type: P.RendererPlugin
};
O.add(No);
const Ke = class {
  constructor(e, t, s = null) {
    this.linkedSheets = [], this._texture = e instanceof L ? e : null, this.baseTexture = e instanceof X ? e : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = t;
    const i = this.baseTexture.resource;
    this.resolution = this._updateResolution(s || (i ? i.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  _updateResolution(e = null) {
    const { scale: t } = this.data.meta;
    let s = re(e, null);
    return s === null && (s = parseFloat(t ?? "1")), s !== 1 && this.baseTexture.setResolution(s), s;
  }
  parse() {
    return new Promise((e) => {
      this._callback = e, this._batchIndex = 0, this._frameKeys.length <= Ke.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  _processFrames(e) {
    let t = e;
    const s = Ke.BATCH_SIZE;
    for (; t - e < s && t < this._frameKeys.length; ) {
      const i = this._frameKeys[t], r = this._frames[i], n = r.frame;
      if (n) {
        let o = null, a = null;
        const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame, l = new V(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
        r.rotated ? o = new V(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.h) / this.resolution, Math.floor(n.w) / this.resolution) : o = new V(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution), r.trimmed !== !1 && r.spriteSourceSize && (a = new V(Math.floor(r.spriteSourceSize.x) / this.resolution, Math.floor(r.spriteSourceSize.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution)), this.textures[i] = new L(this.baseTexture, o, l, a, r.rotated ? 2 : 0, r.anchor), L.addToCache(this.textures[i], i);
      }
      t++;
    }
  }
  _processAnimations() {
    const e = this.data.animations || {};
    for (const t in e) {
      this.animations[t] = [];
      for (let s = 0; s < e[t].length; s++) {
        const i = e[t][s];
        this.animations[t].push(this.textures[i]);
      }
    }
  }
  _parseComplete() {
    const e = this._callback;
    this._callback = null, this._batchIndex = 0, e.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * Ke.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * Ke.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  destroy(e = !1) {
    var t;
    for (const s in this.textures)
      this.textures[s].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e && ((t = this._texture) == null || t.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
  }
};
let sr = Ke;
sr.BATCH_SIZE = 1e3;
const np = ["jpg", "png", "jpeg", "avif", "webp"];
function Oo(e, t, s) {
  const i = {};
  if (e.forEach((r) => {
    i[r] = t;
  }), Object.keys(t.textures).forEach((r) => {
    i[r] = t.textures[r];
  }), !s) {
    const r = _t.dirname(e[0]);
    t.linkedSheets.forEach((n, o) => {
      const a = Oo([`${r}/${t.data.meta.related_multi_packs[o]}`], n, !0);
      Object.assign(i, a);
    });
  }
  return i;
}
const op = {
  extension: P.Asset,
  cache: {
    test: (e) => e instanceof sr,
    getCacheableAssets: (e, t) => Oo(e, t, !1)
  },
  resolver: {
    test: (e) => {
      const s = e.split("?")[0].split("."), i = s.pop(), r = s.pop();
      return i === "json" && np.includes(r);
    },
    parse: (e) => {
      var s;
      const t = e.split(".");
      return {
        resolution: parseFloat(((s = M.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) ?? "1"),
        format: t[t.length - 2],
        src: e
      };
    }
  },
  loader: {
    extension: {
      type: P.LoadParser,
      priority: Yt.Normal
    },
    async testParse(e, t) {
      return _t.extname(t.src).toLowerCase() === ".json" && !!e.frames;
    },
    async parse(e, t, s) {
      var l, c;
      let i = _t.dirname(t.src);
      i && i.lastIndexOf("/") !== i.length - 1 && (i += "/");
      let r = i + e.meta.image;
      r = Zi(r, t.src);
      const o = (await s.load([r]))[r], a = new sr(o.baseTexture, e, t.src);
      await a.parse();
      const h = (l = e == null ? void 0 : e.meta) == null ? void 0 : l.related_multi_packs;
      if (Array.isArray(h)) {
        const u = [];
        for (const f of h) {
          if (typeof f != "string")
            continue;
          let p = i + f;
          (c = t.data) != null && c.ignoreMultiPack || (p = Zi(p, t.src), u.push(s.load({
            src: p,
            data: {
              ignoreMultiPack: !0
            }
          })));
        }
        const d = await Promise.all(u);
        a.linkedSheets = d, d.forEach((f) => {
          f.linkedSheets = [a].concat(a.linkedSheets.filter((p) => p !== f));
        });
      }
      return a;
    },
    unload(e) {
      e.destroy(!0);
    }
  }
};
O.add(op);
class $s {
  constructor() {
    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
  }
}
class Ds {
  static test(t) {
    return typeof t == "string" && t.startsWith("info face=");
  }
  static parse(t) {
    const s = t.match(/^[a-z]+\s+.+$/gm), i = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const n in s) {
      const o = s[n].match(/^[a-z]+/gm)[0], a = s[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), h = {};
      for (const l in a) {
        const c = a[l].split("="), u = c[0], d = c[1].replace(/"/gm, ""), f = parseFloat(d), p = isNaN(f) ? d : f;
        h[u] = p;
      }
      i[o].push(h);
    }
    const r = new $s();
    return i.info.forEach((n) => r.info.push({
      face: n.face,
      size: parseInt(n.size, 10)
    })), i.common.forEach((n) => r.common.push({
      lineHeight: parseInt(n.lineHeight, 10)
    })), i.page.forEach((n) => r.page.push({
      id: parseInt(n.id, 10),
      file: n.file
    })), i.char.forEach((n) => r.char.push({
      id: parseInt(n.id, 10),
      page: parseInt(n.page, 10),
      x: parseInt(n.x, 10),
      y: parseInt(n.y, 10),
      width: parseInt(n.width, 10),
      height: parseInt(n.height, 10),
      xoffset: parseInt(n.xoffset, 10),
      yoffset: parseInt(n.yoffset, 10),
      xadvance: parseInt(n.xadvance, 10)
    })), i.kerning.forEach((n) => r.kerning.push({
      first: parseInt(n.first, 10),
      second: parseInt(n.second, 10),
      amount: parseInt(n.amount, 10)
    })), i.distanceField.forEach((n) => r.distanceField.push({
      distanceRange: parseInt(n.distanceRange, 10),
      fieldType: n.fieldType
    })), r;
  }
}
class ir {
  static test(t) {
    const s = t;
    return "getElementsByTagName" in s && s.getElementsByTagName("page").length && s.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  static parse(t) {
    const s = new $s(), i = t.getElementsByTagName("info"), r = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), a = t.getElementsByTagName("kerning"), h = t.getElementsByTagName("distanceField");
    for (let l = 0; l < i.length; l++)
      s.info.push({
        face: i[l].getAttribute("face"),
        size: parseInt(i[l].getAttribute("size"), 10)
      });
    for (let l = 0; l < r.length; l++)
      s.common.push({
        lineHeight: parseInt(r[l].getAttribute("lineHeight"), 10)
      });
    for (let l = 0; l < n.length; l++)
      s.page.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file")
      });
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      s.char.push({
        id: parseInt(c.getAttribute("id"), 10),
        page: parseInt(c.getAttribute("page"), 10) || 0,
        x: parseInt(c.getAttribute("x"), 10),
        y: parseInt(c.getAttribute("y"), 10),
        width: parseInt(c.getAttribute("width"), 10),
        height: parseInt(c.getAttribute("height"), 10),
        xoffset: parseInt(c.getAttribute("xoffset"), 10),
        yoffset: parseInt(c.getAttribute("yoffset"), 10),
        xadvance: parseInt(c.getAttribute("xadvance"), 10)
      });
    }
    for (let l = 0; l < a.length; l++)
      s.kerning.push({
        first: parseInt(a[l].getAttribute("first"), 10),
        second: parseInt(a[l].getAttribute("second"), 10),
        amount: parseInt(a[l].getAttribute("amount"), 10)
      });
    for (let l = 0; l < h.length; l++)
      s.distanceField.push({
        fieldType: h[l].getAttribute("fieldType"),
        distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10)
      });
    return s;
  }
}
class rr {
  static test(t) {
    return typeof t == "string" && t.includes("<font>") ? ir.test(M.ADAPTER.parseXML(t)) : !1;
  }
  static parse(t) {
    return ir.parse(M.ADAPTER.parseXML(t));
  }
}
const Ci = [
  Ds,
  ir,
  rr
];
function ap(e) {
  for (let t = 0; t < Ci.length; t++)
    if (Ci[t].test(e))
      return Ci[t];
  return null;
}
function hp(e, t, s, i, r, n) {
  const o = s.fill;
  if (Array.isArray(o)) {
    if (o.length === 1)
      return o[0];
  } else
    return o;
  let a;
  const h = s.dropShadow ? s.dropShadowDistance : 0, l = s.padding || 0, c = e.width / i - h - l * 2, u = e.height / i - h - l * 2, d = o.slice(), f = s.fillGradientStops.slice();
  if (!f.length) {
    const p = d.length + 1;
    for (let _ = 1; _ < p; ++_)
      f.push(_ / p);
  }
  if (d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), s.fillGradientType === ei.LINEAR_VERTICAL) {
    a = t.createLinearGradient(c / 2, l, c / 2, u + l);
    let p = 0;
    const m = (n.fontProperties.fontSize + s.strokeThickness) / u;
    for (let v = 0; v < r.length; v++) {
      const y = n.lineHeight * v;
      for (let g = 0; g < d.length; g++) {
        let x = 0;
        typeof f[g] == "number" ? x = f[g] : x = g / d.length;
        const T = y / u + x * m;
        let I = Math.max(p, T);
        I = Math.min(I, 1), a.addColorStop(I, d[g]), p = I;
      }
    }
  } else {
    a = t.createLinearGradient(l, u / 2, c + l, u / 2);
    const p = d.length + 1;
    let _ = 1;
    for (let m = 0; m < d.length; m++) {
      let v;
      typeof f[m] == "number" ? v = f[m] : v = _ / p, a.addColorStop(v, d[m]), _++;
    }
  }
  return a;
}
function lp(e, t, s, i, r, n, o) {
  const a = s.text, h = s.fontProperties;
  t.translate(i, r), t.scale(n, n);
  const l = o.strokeThickness / 2, c = -(o.strokeThickness / 2);
  if (t.font = o.toFontString(), t.lineWidth = o.strokeThickness, t.textBaseline = o.textBaseline, t.lineJoin = o.lineJoin, t.miterLimit = o.miterLimit, t.fillStyle = hp(e, t, o, n, [a], s), t.strokeStyle = o.stroke, o.dropShadow) {
    const u = o.dropShadowColor, d = es(typeof u == "number" ? u : or(u)), f = o.dropShadowBlur * n, p = o.dropShadowDistance * n;
    t.shadowColor = `rgba(${d[0] * 255},${d[1] * 255},${d[2] * 255},${o.dropShadowAlpha})`, t.shadowBlur = f, t.shadowOffsetX = Math.cos(o.dropShadowAngle) * p, t.shadowOffsetY = Math.sin(o.dropShadowAngle) * p;
  } else
    t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
  o.stroke && o.strokeThickness && t.strokeText(a, l, c + s.lineHeight - h.descent), o.fill && t.fillText(a, l, c + s.lineHeight - h.descent), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0)";
}
function Fs(e) {
  return e.codePointAt ? e.codePointAt(0) : e.charCodeAt(0);
}
function ko(e) {
  return Array.from ? Array.from(e) : e.split("");
}
function cp(e) {
  typeof e == "string" && (e = [e]);
  const t = [];
  for (let s = 0, i = e.length; s < i; s++) {
    const r = e[s];
    if (Array.isArray(r)) {
      if (r.length !== 2)
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);
      const n = r[0].charCodeAt(0), o = r[1].charCodeAt(0);
      if (o < n)
        throw new Error("[BitmapFont]: Invalid character range.");
      for (let a = n, h = o; a <= h; a++)
        t.push(String.fromCharCode(a));
    } else
      t.push(...ko(r));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
const Pt = class {
  constructor(e, t, s) {
    var l;
    const [i] = e.info, [r] = e.common, [n] = e.page, [o] = e.distanceField, a = re(n.file), h = {};
    this._ownsTextures = s, this.font = i.face, this.size = i.size, this.lineHeight = r.lineHeight / a, this.chars = {}, this.pageTextures = h;
    for (let c = 0; c < e.page.length; c++) {
      const { id: u, file: d } = e.page[c];
      h[u] = t instanceof Array ? t[c] : t[d], o != null && o.fieldType && o.fieldType !== "none" && (h[u].baseTexture.alphaMode = kt.NO_PREMULTIPLIED_ALPHA, h[u].baseTexture.mipmap = $t.OFF);
    }
    for (let c = 0; c < e.char.length; c++) {
      const { id: u, page: d } = e.char[c];
      let { x: f, y: p, width: _, height: m, xoffset: v, yoffset: y, xadvance: g } = e.char[c];
      f /= a, p /= a, _ /= a, m /= a, v /= a, y /= a, g /= a;
      const x = new V(f + h[d].frame.x / a, p + h[d].frame.y / a, _, m);
      this.chars[u] = {
        xOffset: v,
        yOffset: y,
        xAdvance: g,
        kerning: {},
        texture: new L(h[d].baseTexture, x),
        page: d
      };
    }
    for (let c = 0; c < e.kerning.length; c++) {
      let { first: u, second: d, amount: f } = e.kerning[c];
      u /= a, d /= a, f /= a, this.chars[d] && (this.chars[d].kerning[u] = f);
    }
    this.distanceFieldRange = o == null ? void 0 : o.distanceRange, this.distanceFieldType = ((l = o == null ? void 0 : o.fieldType) == null ? void 0 : l.toLowerCase()) ?? "none";
  }
  destroy() {
    for (const e in this.chars)
      this.chars[e].texture.destroy(), this.chars[e].texture = null;
    for (const e in this.pageTextures)
      this._ownsTextures && this.pageTextures[e].destroy(!0), this.pageTextures[e] = null;
    this.chars = null, this.pageTextures = null;
  }
  static install(e, t, s) {
    let i;
    if (e instanceof $s)
      i = e;
    else {
      const n = ap(e);
      if (!n)
        throw new Error("Unrecognized data format for font.");
      i = n.parse(e);
    }
    t instanceof L && (t = [t]);
    const r = new Pt(i, t, s);
    return Pt.available[r.font] = r, r;
  }
  static uninstall(e) {
    const t = Pt.available[e];
    if (!t)
      throw new Error(`No font found named '${e}'`);
    t.destroy(), delete Pt.available[e];
  }
  static from(e, t, s) {
    if (!e)
      throw new Error("[BitmapFont] Property `name` is required.");
    const {
      chars: i,
      padding: r,
      resolution: n,
      textureWidth: o,
      textureHeight: a,
      ...h
    } = Object.assign({}, Pt.defaultOptions, s), l = cp(i), c = t instanceof ve ? t : new ve(t), u = o, d = new $s();
    d.info[0] = {
      face: c.fontFamily,
      size: c.fontSize
    }, d.common[0] = {
      lineHeight: c.fontSize
    };
    let f = 0, p = 0, _, m, v, y = 0;
    const g = [];
    for (let T = 0; T < l.length; T++) {
      _ || (_ = M.ADAPTER.createCanvas(), _.width = o, _.height = a, m = _.getContext("2d"), v = new X(_, { resolution: n, ...h }), g.push(new L(v)), d.page.push({
        id: g.length - 1,
        file: ""
      }));
      const I = l[T], S = pt.measureText(I, c, !1, _), E = S.width, N = Math.ceil(S.height), U = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * E);
      if (p >= a - N * n) {
        if (p === 0)
          throw new Error(`[BitmapFont] textureHeight ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${I}')`);
        --T, _ = null, m = null, v = null, p = 0, f = 0, y = 0;
        continue;
      }
      if (y = Math.max(N + S.fontProperties.descent, y), U * n + f >= u) {
        if (f === 0)
          throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${I}')`);
        --T, p += y * n, p = Math.ceil(p), f = 0, y = 0;
        continue;
      }
      lp(_, m, S, f, p, n, c);
      const R = Fs(S.text);
      d.char.push({
        id: R,
        page: g.length - 1,
        x: f / n,
        y: p / n,
        width: U,
        height: N,
        xoffset: 0,
        yoffset: 0,
        xadvance: E - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0)
      }), f += (U + 2 * r) * n, f = Math.ceil(f);
    }
    for (let T = 0, I = l.length; T < I; T++) {
      const S = l[T];
      for (let E = 0; E < I; E++) {
        const N = l[E], U = m.measureText(S).width, R = m.measureText(N).width, w = m.measureText(S + N).width - (U + R);
        w && d.kerning.push({
          first: Fs(S),
          second: Fs(N),
          amount: w
        });
      }
    }
    const x = new Pt(d, g, !0);
    return Pt.available[e] !== void 0 && Pt.uninstall(e), Pt.available[e] = x, x;
  }
};
let vt = Pt;
vt.ALPHA = [["a", "z"], ["A", "Z"], " "];
vt.NUMERIC = [["0", "9"]];
vt.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "];
vt.ASCII = [[" ", "~"]];
vt.defaultOptions = {
  resolution: 1,
  textureWidth: 512,
  textureHeight: 512,
  padding: 4,
  chars: Pt.ALPHANUMERIC
};
vt.available = {};
var up = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`, dp = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const _n = [], xn = [], vn = [], Uo = class extends bt {
  constructor(e, t = {}) {
    super(), this._tint = 16777215;
    const { align: s, tint: i, maxWidth: r, letterSpacing: n, fontName: o, fontSize: a } = Object.assign({}, Uo.styleDefaults, t);
    if (!vt.available[o])
      throw new Error(`Missing BitmapFont "${o}"`);
    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = s, this._tint = i, this._font = void 0, this._fontName = o, this._fontSize = a, this.text = e, this._maxWidth = r, this._maxLineHeight = 0, this._letterSpacing = n, this._anchor = new se(() => {
      this.dirty = !0;
    }, this, 0, 0), this._roundPixels = M.ROUND_PIXELS, this.dirty = !0, this._resolution = M.RESOLUTION, this._autoResolution = !0, this._textureCache = {};
  }
  updateText() {
    var U;
    const e = vt.available[this._fontName], t = this.fontSize, s = t / e.size, i = new $(), r = [], n = [], o = [], a = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", h = ko(a), l = this._maxWidth * e.size / t, c = e.distanceFieldType === "none" ? _n : xn;
    let u = null, d = 0, f = 0, p = 0, _ = -1, m = 0, v = 0, y = 0, g = 0;
    for (let R = 0; R < h.length; R++) {
      const F = h[R], w = Fs(F);
      if (/(?:\s)/.test(F) && (_ = R, m = d, g++), F === "\r" || F === `
`) {
        n.push(d), o.push(-1), f = Math.max(f, d), ++p, ++v, i.x = 0, i.y += e.lineHeight, u = null, g = 0;
        continue;
      }
      const b = e.chars[w];
      if (!b)
        continue;
      u && b.kerning[u] && (i.x += b.kerning[u]);
      const z = vn.pop() || {
        texture: L.EMPTY,
        line: 0,
        charCode: 0,
        prevSpaces: 0,
        position: new $()
      };
      z.texture = b.texture, z.line = p, z.charCode = w, z.position.x = Math.round(i.x + b.xOffset + this._letterSpacing / 2), z.position.y = Math.round(i.y + b.yOffset), z.prevSpaces = g, r.push(z), d = z.position.x + Math.max(b.xAdvance - b.xOffset, b.texture.orig.width), i.x += b.xAdvance + this._letterSpacing, y = Math.max(y, b.yOffset + b.texture.height), u = w, _ !== -1 && l > 0 && i.x > l && (++v, De(r, 1 + _ - v, 1 + R - _), R = _, _ = -1, n.push(m), o.push(r.length > 0 ? r[r.length - 1].prevSpaces : 0), f = Math.max(f, m), p++, i.x = 0, i.y += e.lineHeight, u = null, g = 0);
    }
    const x = h[h.length - 1];
    x !== "\r" && x !== `
` && (/(?:\s)/.test(x) && (d = m), n.push(d), f = Math.max(f, d), o.push(-1));
    const T = [];
    for (let R = 0; R <= p; R++) {
      let F = 0;
      this._align === "right" ? F = f - n[R] : this._align === "center" ? F = (f - n[R]) / 2 : this._align === "justify" && (F = o[R] < 0 ? 0 : (f - n[R]) / o[R]), T.push(F);
    }
    const I = r.length, S = {}, E = [], N = this._activePagesMeshData;
    c.push(...N);
    for (let R = 0; R < I; R++) {
      const F = r[R].texture, w = F.baseTexture.uid;
      if (!S[w]) {
        let b = c.pop();
        if (!b) {
          const j = new Of();
          let B, q;
          e.distanceFieldType === "none" ? (B = new fn(L.EMPTY), q = G.NORMAL) : (B = new fn(L.EMPTY, { program: Ft.from(dp, up), uniforms: { uFWidth: 0 } }), q = G.NORMAL_NPM);
          const rt = new tr(j, B);
          rt.blendMode = q, b = {
            index: 0,
            indexCount: 0,
            vertexCount: 0,
            uvsCount: 0,
            total: 0,
            mesh: rt,
            vertices: null,
            uvs: null,
            indices: null
          };
        }
        b.index = 0, b.indexCount = 0, b.vertexCount = 0, b.uvsCount = 0, b.total = 0;
        const { _textureCache: z } = this;
        z[w] = z[w] || new L(F.baseTexture), b.mesh.texture = z[w], b.mesh.tint = this._tint, E.push(b), S[w] = b;
      }
      S[w].total++;
    }
    for (let R = 0; R < N.length; R++)
      E.includes(N[R]) || this.removeChild(N[R].mesh);
    for (let R = 0; R < E.length; R++)
      E[R].mesh.parent !== this && this.addChild(E[R].mesh);
    this._activePagesMeshData = E;
    for (const R in S) {
      const F = S[R], w = F.total;
      if (!(((U = F.indices) == null ? void 0 : U.length) > 6 * w) || F.vertices.length < tr.BATCHABLE_SIZE * 2)
        F.vertices = new Float32Array(4 * 2 * w), F.uvs = new Float32Array(4 * 2 * w), F.indices = new Uint16Array(6 * w);
      else {
        const b = F.total, z = F.vertices;
        for (let j = b * 4 * 2; j < z.length; j++)
          z[j] = 0;
      }
      F.mesh.size = 6 * w;
    }
    for (let R = 0; R < I; R++) {
      const F = r[R];
      let w = F.position.x + T[F.line] * (this._align === "justify" ? F.prevSpaces : 1);
      this._roundPixels && (w = Math.round(w));
      const b = w * s, z = F.position.y * s, j = F.texture, B = S[j.baseTexture.uid], q = j.frame, rt = j._uvs, A = B.index++;
      B.indices[A * 6 + 0] = 0 + A * 4, B.indices[A * 6 + 1] = 1 + A * 4, B.indices[A * 6 + 2] = 2 + A * 4, B.indices[A * 6 + 3] = 0 + A * 4, B.indices[A * 6 + 4] = 2 + A * 4, B.indices[A * 6 + 5] = 3 + A * 4, B.vertices[A * 8 + 0] = b, B.vertices[A * 8 + 1] = z, B.vertices[A * 8 + 2] = b + q.width * s, B.vertices[A * 8 + 3] = z, B.vertices[A * 8 + 4] = b + q.width * s, B.vertices[A * 8 + 5] = z + q.height * s, B.vertices[A * 8 + 6] = b, B.vertices[A * 8 + 7] = z + q.height * s, B.uvs[A * 8 + 0] = rt.x0, B.uvs[A * 8 + 1] = rt.y0, B.uvs[A * 8 + 2] = rt.x1, B.uvs[A * 8 + 3] = rt.y1, B.uvs[A * 8 + 4] = rt.x2, B.uvs[A * 8 + 5] = rt.y2, B.uvs[A * 8 + 6] = rt.x3, B.uvs[A * 8 + 7] = rt.y3;
    }
    this._textWidth = f * s, this._textHeight = (i.y + e.lineHeight) * s;
    for (const R in S) {
      const F = S[R];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let j = 0;
        const B = this._textWidth * this.anchor.x, q = this._textHeight * this.anchor.y;
        for (let rt = 0; rt < F.total; rt++)
          F.vertices[j++] -= B, F.vertices[j++] -= q, F.vertices[j++] -= B, F.vertices[j++] -= q, F.vertices[j++] -= B, F.vertices[j++] -= q, F.vertices[j++] -= B, F.vertices[j++] -= q;
      }
      this._maxLineHeight = y * s;
      const w = F.mesh.geometry.getBuffer("aVertexPosition"), b = F.mesh.geometry.getBuffer("aTextureCoord"), z = F.mesh.geometry.getIndex();
      w.data = F.vertices, b.data = F.uvs, z.data = F.indices, w.update(), b.update(), z.update();
    }
    for (let R = 0; R < r.length; R++)
      vn.push(r[R]);
    this._font = e, this.dirty = !1;
  }
  updateTransform() {
    this.validate(), this.containerUpdateTransform();
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0);
    const { distanceFieldRange: t, distanceFieldType: s, size: i } = vt.available[this._fontName];
    if (s !== "none") {
      const { a: r, b: n, c: o, d: a } = this.worldTransform, h = Math.sqrt(r * r + n * n), l = Math.sqrt(o * o + a * a), c = (Math.abs(h) + Math.abs(l)) / 2, u = this.fontSize / i, d = e._view.resolution;
      for (const f of this._activePagesMeshData)
        f.mesh.shader.uniforms.uFWidth = c * t * u * d;
    }
    super._render(e);
  }
  getLocalBounds() {
    return this.validate(), super.getLocalBounds();
  }
  validate() {
    const e = vt.available[this._fontName];
    if (!e)
      throw new Error(`Missing BitmapFont "${this._fontName}"`);
    this._font !== e && (this.dirty = !0), this.dirty && this.updateText();
  }
  get tint() {
    return this._tint;
  }
  set tint(e) {
    if (this._tint !== e) {
      this._tint = e;
      for (let t = 0; t < this._activePagesMeshData.length; t++)
        this._activePagesMeshData[t].mesh.tint = e;
    }
  }
  get align() {
    return this._align;
  }
  set align(e) {
    this._align !== e && (this._align = e, this.dirty = !0);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(e) {
    if (!vt.available[e])
      throw new Error(`Missing BitmapFont "${e}"`);
    this._fontName !== e && (this._fontName = e, this.dirty = !0);
  }
  get fontSize() {
    return this._fontSize ?? vt.available[this._fontName].size;
  }
  set fontSize(e) {
    this._fontSize !== e && (this._fontSize = e, this.dirty = !0);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = !0);
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(e) {
    this._maxWidth !== e && (this._maxWidth = e, this.dirty = !0);
  }
  get maxLineHeight() {
    return this.validate(), this._maxLineHeight;
  }
  get textWidth() {
    return this.validate(), this._textWidth;
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(e) {
    this._letterSpacing !== e && (this._letterSpacing = e, this.dirty = !0);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  set roundPixels(e) {
    e !== this._roundPixels && (this._roundPixels = e, this.dirty = !0);
  }
  get textHeight() {
    return this.validate(), this._textHeight;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0);
  }
  destroy(e) {
    const { _textureCache: t } = this, i = vt.available[this._fontName].distanceFieldType === "none" ? _n : xn;
    i.push(...this._activePagesMeshData);
    for (const r of this._activePagesMeshData)
      this.removeChild(r.mesh);
    this._activePagesMeshData = [], i.filter((r) => t[r.mesh.texture.baseTexture.uid]).forEach((r) => {
      r.mesh.texture = L.EMPTY;
    });
    for (const r in t)
      t[r].destroy(), delete t[r];
    this._font = null, this._textureCache = null, super.destroy(e);
  }
};
let fp = Uo;
fp.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0
};
const pp = [".xml", ".fnt"], mp = {
  extension: {
    type: P.LoadParser,
    priority: Yt.Normal
  },
  test(e) {
    return pp.includes(_t.extname(e).toLowerCase());
  },
  async testParse(e) {
    return Ds.test(e) || rr.test(e);
  },
  async parse(e, t, s) {
    const i = Ds.test(e) ? Ds.parse(e) : rr.parse(e), { src: r } = t, { page: n } = i, o = [];
    for (let l = 0; l < n.length; ++l) {
      const c = n[l].file;
      let u = _t.join(_t.dirname(r), c);
      u = Zi(u, r), o.push(u);
    }
    const a = await s.load(o), h = o.map((l) => a[l]);
    return vt.install(i, h, !0);
  },
  async load(e, t) {
    return (await M.ADAPTER.fetch(e)).text();
  },
  unload(e) {
    e.destroy();
  }
};
O.add(mp);
let Go;
function Ho(e) {
  return e.startsWith("simhelpers") ? `https://gymburgdorf.github.io/${e}` : e;
}
class gp {
  constructor(t) {
    Q(this, "originalParams");
    Q(this, "element");
    Q(this, "img");
    Q(this, "minUnits");
    Q(this, "maxPx");
    Q(this, "color");
    Q(this, "background");
    Q(this, "actors");
    Q(this, "app");
    Q(this, "unitContainer");
    Q(this, "coordProps");
    this.originalParams = t, this.element = t.element || document.body, this.maxPx = t.maxPx || this.getAutoSize(), this.minUnits = t.minUnits || { x: 0, y: 0 }, this.img = t.img || "", this.color = t.color || "#111", this.app = new dr({
      background: this.color,
      antialias: !0
    }), this.unitContainer = new bt(), this.app.stage.addChild(this.unitContainer), this.element.appendChild(this.app.view), this.actors = [], this.adaptSize(), this.loadBackground(), this.onResizeContainer(), Go = this, window.addEventListener("resize", () => this.onResizeContainer());
  }
  getAutoSize() {
    return { w: Math.min(window.innerWidth, this.element.getBoundingClientRect().width), h: window.innerHeight };
  }
  getAspectRatio() {
    return this.getForcedRatio() || this.getStoredRatio() || window.innerWidth / window.innerHeight;
  }
  getForcedRatio() {
    const { w: t, h: s } = this.originalParams;
    return t && s ? t / s : null;
  }
  getStoredRatio() {
    return localStorage[this.getAspectKey()] || null;
  }
  getAspectKey() {
    return `simhelpers-ratio-${this.img}`;
  }
  adaptSize() {
    const { w: t, h: s } = this.dimPx();
    this.app.view.width = t, this.app.view.height = s, this.unitContainer.scale.set(t / this.w, -s / this.h), this.unitContainer.position.y = s;
  }
  dimPx() {
    const { w: t, h: s } = this.maxPx, { w: i, h: r } = this.dim(), o = (t > this.getAspectRatio() * s ? "H" : "W") === "W" ? t / i : s / r;
    return { w: i * o, h: r * o, pxPerUnit: o };
  }
  dim() {
    const { w: t, h: s } = this.originalParams;
    return {
      w: t || s && s * this.getAspectRatio() || this.maxPx.w,
      h: s || t && t / this.getAspectRatio() || this.maxPx.h
    };
  }
  get w() {
    return this.dim().w;
  }
  get h() {
    return this.dim().h;
  }
  set w(t) {
    this.originalParams.w = t, this.adaptSize();
  }
  set h(t) {
    this.originalParams.h = t, this.adaptSize();
  }
  loadBackground() {
    const t = this.img;
    t && (this.background = be.from(Ho(t)), this.unitContainer.addChild(this.background), this.background.texture.rotate = 8, this.adaptBgSize(), this.background.texture.baseTexture.on("loaded", () => {
      console.log("bg ready"), this.onloadBackground();
    }));
  }
  onloadBackground() {
    var r, n;
    if (!((n = (r = this.background) == null ? void 0 : r.texture) != null && n.valid))
      return;
    const { width: t, height: s } = this.background.texture.baseTexture, i = t / s;
    this.getForcedRatio() || (localStorage[this.getAspectKey()] = i), this.adaptSize(), this.adaptBgSize();
  }
  adaptBgSize() {
    this.background && (this.background.width = this.w, this.background.height = this.h);
  }
  onResizeContainer() {
    this.originalParams.maxPx || (this.maxPx = this.getAutoSize()), this.updateAxis(), this.adaptSize();
  }
  render() {
    this.app.renderer.render(this.app.stage);
  }
  add(t) {
    this.actors.push(t), this.unitContainer.addChild(t.obj), this.render();
  }
  remove(t) {
    this.actors.splice(this.actors.indexOf(t), 1), this.unitContainer.removeChild(t.obj), this.render();
  }
  // xToPx(xUnit: number) {
  //     return (xUnit - this.minUnits.x) * this.getPxPerUnit()
  // }
  // yToPx(yUnit: number) {
  //     return this.dimPx().h - (yUnit - this.minUnits.y) * this.getPxPerUnit()
  // }
  // unitsToPx(units: TCoord) {
  //     return { x: this.xToPx(units.x), y: this.yToPx(units.y) }
  // }
  // xToUnits(xPx: number) {
  //     return xPx / this.getPxPerUnit() + this.minUnits.x
  // }
  // yToUnits(yPx: number) {
  //     return (this.dimPx().h - yPx) / this.getPxPerUnit() + this.minUnits.y
  // }
  getPxPerUnit() {
    return this.dimPx().pxPerUnit;
  }
  // pxToUnits(px: TCoord) {
  //     return { x: this.xToUnits(px.x), y: this.yToUnits(px.y) }
  // }
  update() {
    this.actors.forEach((t) => t.draw()), this.render();
  }
  addTicker(t) {
    this.app.ticker.add((s) => {
      t(s / 60), this.update();
    });
  }
  updateAxis() {
    if (!this.coordProps)
      return;
    let { container: t, step: s, color: i = "#444", onlyX: r = !1, onlyY: n = !1 } = this.coordProps;
    t.removeChildren(), s = s || 10 ** Math.log10(Math.ceil(this.w) - 1);
    var o = this, a = { x: 5, y: 2 }, h = (l, c) => {
      var u = new si(l + " " + o.originalParams.unit, { fontFamily: "Tahoma", fontSize: o.dim().w / 40, fill: i });
      u.resolution = 2 * this.getPxPerUnit(), u.scale.y = -1, u.position.x = c == "x" ? l : a.x, u.position.y = c == "y" ? l : a.y, u.anchor.x = c == "x" ? 0.5 : 0, u.anchor.y = c == "y" ? 0.5 : 1, t.addChild(u);
    };
    if (!r) {
      const l = o.minUnits.y + o.dim().h;
      for (let c = s * Math.ceil((o.minUnits.y + 0.1 * s) / s); c < l - 0.1 * s; c += s)
        h(c, "y");
    }
    if (!n) {
      const l = o.minUnits.x + o.dim().w;
      for (let c = s * Math.ceil((o.minUnits.x + 0.1 * s) / s); c < l - 0.1 * s; c += s)
        h(c, "x");
    }
    this.render();
  }
  createAxis(t) {
    const s = new bt();
    this.coordProps = { container: s, ...t }, this.unitContainer.addChild(s), this.updateAxis();
  }
}
class Xo {
  constructor(t, s, i, r, n, o = 0, a = { x: 0.5, y: 0.5 }, h = 1, l = Go) {
    Q(this, "forceUnits");
    this.obj = t, this.x = s, this.y = i, this.rotation = o, this.anchor = a, this.alpha = h, this.world = l, this.forceUnits = { ...r && { w: r }, ...n && { h: n } }, this.obj.alpha = this.alpha, this.setAnchor(this.anchor);
  }
  get w() {
    return this.forceUnits.w || this.warn();
  }
  get h() {
    return this.forceUnits.h || this.warn();
  }
  getResolution() {
    return { x: 1, y: 1 };
  }
  warn() {
    throw new Error("can't find dim");
  }
  destroy() {
    this.world.remove(this);
  }
  draw() {
    this.obj.rotation = this.rotation, this.obj.position = { x: this.x, y: this.y };
  }
  setAnchor(t) {
    this.anchor = t;
    const { x: s, y: i } = this.getResolution();
    this.obj.pivot.set(s * t.x * this.w, i * t.y * this.h);
  }
  onClick(t) {
    this.obj.interactive = !0, this.obj.on("click", (s) => {
      t(s);
    });
  }
  on(t, s) {
    this.obj.interactive = !0, this.obj.on(t, s);
  }
}
class _p extends Xo {
  constructor(s) {
    const { alpha: i = 1, x: r = 0, y: n = 0, wUnits: o, hUnits: a, rotation: h = 0, anchor: l, world: c, img: u } = s, d = be.from(Ho(u), { resolution: 1 });
    super(d, r, n, o, a, h, l, i, c);
    Q(this, "vx", 0);
    Q(this, "vy", 0);
    Q(this, "img");
    // x: number
    // y: number
    // forceUnits: Partial<TDim>
    // world: World
    Q(this, "autorotate");
    // rotation: number
    // anchor: TCoord
    // alpha: number
    Q(this, "obj");
    this.obj = d, this.img = u, this.obj.texture.baseTexture.on("loaded", () => {
      this.obj.texture.rotate = 8, this.onResize();
    }), this.autorotate = s.autorotate ?? !0, this.onResize(), this.setAnchor(s.anchor || { x: 0.5, y: 0.5 }), this.world.add(this);
  }
  onResize() {
    const { w: s, h: i } = this.forceUnits, { width: r, height: n } = this.obj.texture.baseTexture, o = r / n;
    s && (this.obj.width = s, this.obj.height = s / o), i && (this.obj.height = i, s || (this.obj.width = i * o)), this.setAnchor(this.anchor);
  }
  getResolution() {
    const { width: s, height: i } = this.obj.texture.baseTexture;
    return { x: s / this.w, y: i / this.h };
  }
  resize(s) {
    this.forceUnits = s, this.onResize();
  }
  get w() {
    return this.forceUnits.w || this.obj.width;
  }
  get h() {
    return this.forceUnits.h || this.obj.height;
  }
  draw() {
    super.draw(), this.autorotate && (this.obj.rotation = Math.atan2(-this.vy, this.vx));
  }
}
class zo extends Xo {
  constructor(s) {
    const { x: i = 0, y: r = 0, w: n, h: o, alpha: a, anchor: h, rotation: l, world: c, color: u } = s, d = new as();
    super(d, i, r, n, o, a, h, l, c);
    Q(this, "obj");
    Q(this, "color");
    this.obj = d, this.color = u;
  }
  onResize() {
    this.resetGraphic();
  }
  setColor(s) {
    this.color = s, this.resetGraphic();
  }
}
class xp extends zo {
  constructor(s) {
    const i = "from" in s ? s.from : { x: s.x1, y: s.y1 }, r = "to" in s ? s.to : { x: s.x2, y: s.y2 }, { alpha: n = 1, color: o = 1122867, thickness: a = 3, world: h } = s;
    super({ x: 0, y: 0, w: Math.abs(r.x - i.x), h: Math.abs(r.y - i.y), alpha: n, world: h, color: o, anchor: { x: 0, y: 0 } });
    Q(this, "thickness");
    Q(this, "from");
    Q(this, "to");
    this.thickness = s.thickness || 3, this.from = i, this.to = r, this.resetGraphic(), this.draw(), this.world.add(this);
  }
  resetGraphic() {
    this.obj.clear(), this.obj.lineStyle(this.thickness * this.world.getPxPerUnit(), this.color, this.alpha);
    const s = this.to.x - this.from.x, i = this.to.y - this.from.y;
    this.obj.moveTo(0, 0), this.obj.lineTo(s, i);
  }
  draw() {
    this.obj.position = this.from, this.resetGraphic();
  }
}
class vp extends zo {
  constructor(s) {
    const { x: i = 0, y: r = 0, alpha: n = 1, color: o = 11189196, r: a = 1, world: h } = s;
    super({ x: i, y: r, w: 2 * a, h: 2 * a, alpha: n, world: h, color: o });
    Q(this, "forceUnits");
    this.forceUnits = { w: 2 * a, h: 2 * a }, this.resetGraphic(), this.draw(), this.world.add(this);
  }
  setRadius(s) {
    this.forceUnits = { w: 2 * s, h: 2 * s }, this.resetGraphic();
  }
  resetGraphic() {
    this.obj.clear(), this.obj.beginFill(this.color), this.obj.drawCircle(this.w / 2, this.h / 2, this.w / 2), this.obj.endFill();
  }
}
window.simhelpers = {
  World: gp,
  Actor: _p,
  Line: xp,
  Circle: vp
};
export {
  _p as Actor,
  vp as Circle,
  xp as Line,
  gp as World
};
