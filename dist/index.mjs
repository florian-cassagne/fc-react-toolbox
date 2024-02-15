import * as Ue from "react";
import S from "react";
const F = "animation-all duration-200 ", dt = "bg-orange-900 hover:bg-orange-800 ", ln = "bg-neutral-900 hover:bg-neutral-800 ", gr = "bg-red-600 hover:bg-red-500 border border-red-300 ", _r = "shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ", Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  animationDefault: F,
  colorImportant: gr,
  colorPrimary: dt,
  colorSecondary: ln,
  shadowDefault: _r
}, Symbol.toStringTag, { value: "Module" }));
function un({ className: e = "", ...t }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "viewer__button-close absolute top-0 left-0 w-10 h-10 text-2xl rounded-tl-md md:rounded-tl-lg shadow-lg " + gr + F + e,
      onClick: t.onClick,
      ...t
    },
    "X"
  );
}
const ee = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000"
}, Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  transitionFadeIn: ee
}, Symbol.toStringTag, { value: "Module" }));
function ft({
  children: e,
  href: t = "",
  className: r = "",
  isLarger: n = !1,
  isColored: i = !0,
  isTransitionEnabled: o = !1,
  ...s
}) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "rounded-full " + (n ? "my-4 " : "my-2 ") + (i ? dt : "bg-neutral-800 ") + F + r,
      ...s,
      ...o ? ee : {}
    },
    /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "block px-4 w-full h-full " + (n ? "p-4" : "p-2"),
        href: t
      },
      e
    )
  );
}
function ba({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ React.createElement(ft, { className: "w-full md:w-1/2 mr-[25%] ml-[25%]" + t, ...r }, e);
}
function Ta({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ React.createElement(
    ft,
    {
      className: "w-full " + t,
      isColored: !1,
      isLarger: !0,
      isTransitionEnabled: !0,
      ...r
    },
    e
  );
}
function cn({
  children: e,
  href: t,
  className: r = "",
  isLargeMode: n = !1,
  ...i
}) {
  return n ? r += "w-1/2 mx-auto " : r += "mx-1 lg:mx-2 ", /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "rounded-full p-1 lg:p-2 px-4 mb-2 lg:mb-4 text-center " + r + F,
      ...i
    },
    e
  );
}
function wa({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ React.createElement(cn, { className: "cursor-pointer " + dt + t, ...r }, e);
}
var R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ht = {}, pt = {}, x = {}, xe = {};
(function(e) {
  function t(s, a, l) {
    var u = a.slidesToShow, c = a.currentSlide;
    return l.length > 2 * u ? s + 2 * u : c >= l.length ? l.length + s : s;
  }
  function r(s, a) {
    if (a.length > 2 * s) {
      for (var l = {}, u = a.length - 2 * s, c = a.length - u, d = u, p = 0; p < c; p++)
        l[p] = d, d++;
      var m = a.length + c, h = m + a.slice(0, 2 * s).length, f = 0;
      for (p = m; p <= h; p++)
        l[p] = f, f++;
      var y = m, T = 0;
      for (p = c; p < y; p++)
        l[p] = T, T++;
      return l;
    }
    l = {};
    var w = 3 * a.length, v = 0;
    for (p = 0; p < w; p++)
      l[p] = v, ++v === a.length && (v = 0);
    return l;
  }
  function n(s, a) {
    return a.length < s ? a : a.length > 2 * s ? a.slice(a.length - 2 * s, a.length).concat(a, a.slice(0, 2 * s)) : a.concat(a, a);
  }
  function i(s, a) {
    return a.length > 2 * s ? 2 * s : a.length;
  }
  function o(s, a, l) {
    var u, c = s.currentSlide, d = s.slidesToShow, p = s.itemWidth, m = s.totalItems, h = 0, f = 0, y = c === 0, T = a.length - (a.length - 2 * d);
    return a.length < d ? (f = h = 0, y = u = !1) : a.length > 2 * d ? ((u = c >= T + a.length) && (f = -p * (h = c - a.length)), y && (f = -p * (h = T + (a.length - 2 * d)))) : ((u = c >= 2 * a.length) && (f = -p * (h = c - a.length)), y && (f = l.showDots ? -p * (h = a.length) : -p * (h = m / 3))), { isReachingTheEnd: u, isReachingTheStart: y, nextSlide: h, nextPosition: f };
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getOriginalCounterPart = t, e.getOriginalIndexLookupTableByClones = r, e.getClones = n, e.getInitialSlideInInfiniteMode = i, e.checkClonesPosition = o;
})(xe);
var te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
var zt = !1;
function dn(e, t, r, n) {
  var i = 0, o = n || r;
  return t && o && (!zt && process.env.NODE_ENV !== "production" && e[o].paritialVisibilityGutter && (zt = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), i = e[o].partialVisibilityGutter || e[o].paritialVisibilityGutter), i;
}
function fn(e, t) {
  var r;
  return t[e] && (r = (100 / t[e].items).toFixed(1)), r;
}
function hn(e, t, r) {
  return Math.round(r / (t + (e.centerMode ? 1 : 0)));
}
te.getPartialVisibilityGutter = dn, te.getWidthFromDeviceType = fn, te.getItemClientSideWidth = hn;
var N = {};
Object.defineProperty(N, "__esModule", { value: !0 });
var tt = te;
function mt(e) {
  var t = e.slidesToShow;
  return e.totalItems < t;
}
function pn(e, t) {
  var r, n = e.domLoaded, i = e.slidesToShow, o = e.containerWidth, s = e.itemWidth, a = t.deviceType, l = t.responsive, u = t.ssr, c = t.partialVisbile, d = t.partialVisible, p = !!(n && i && o && s);
  u && a && !p && (r = tt.getWidthFromDeviceType(a, l));
  var m = !!(u && a && !p && r);
  return { shouldRenderOnSSR: m, flexBisis: r, domFullyLoaded: p, partialVisibilityGutter: tt.getPartialVisibilityGutter(l, c || d, a, e.deviceType), shouldRenderAtAll: m || p };
}
function mn(e, t) {
  var r = t.currentSlide, n = t.slidesToShow;
  return r <= e && e < r + n;
}
function Sr(e, t, r) {
  var n = r || e.transform;
  return !t.infinite && e.currentSlide === 0 || mt(e) ? n : n + e.itemWidth / 2;
}
function vn(e) {
  return !(0 < e.currentSlide);
}
function br(e) {
  var t = e.currentSlide, r = e.totalItems;
  return !(t + e.slidesToShow < r);
}
function Tr(e, t, r, n) {
  t === void 0 && (t = 0);
  var i = e.currentSlide, o = e.slidesToShow, s = br(e), a = !r.infinite && s, l = n || e.transform;
  if (mt(e))
    return l;
  var u = l + i * t;
  return a ? u + (e.containerWidth - (e.itemWidth - t) * o) : u;
}
function wr(e, t) {
  return e.rtl ? -1 * t : t;
}
function yn(e, t, r) {
  var n = t.partialVisbile, i = t.partialVisible, o = t.responsive, s = t.deviceType, a = t.centerMode, l = r || e.transform, u = tt.getPartialVisibilityGutter(o, n || i, s, e.deviceType);
  return wr(t, i || n ? Tr(e, u, t, r) : a ? Sr(e, t, r) : l);
}
function gn(e, t) {
  var r = e.domLoaded, n = e.slidesToShow, i = e.containerWidth, o = e.itemWidth, s = t.deviceType, a = t.responsive, l = t.slidesToSlide || 1, u = !!(r && n && i && o);
  return t.ssr && t.deviceType && !u && Object.keys(a).forEach(function(c) {
    var d = a[c].slidesToSlide;
    s === c && d && (l = d);
  }), u && Object.keys(a).forEach(function(c) {
    var d = a[c], p = d.breakpoint, m = d.slidesToSlide, h = p.max, f = p.min;
    m && window.innerWidth >= f && window.innerWidth <= h && (l = m);
  }), l;
}
N.notEnoughChildren = mt, N.getInitialState = pn, N.getIfSlideIsVisbile = mn, N.getTransformForCenterMode = Sr, N.isInLeftEnd = vn, N.isInRightEnd = br, N.getTransformForPartialVsibile = Tr, N.parsePosition = wr, N.getTransform = yn, N.getSlidesToSlide = gn;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
var _n = function(e, t, r) {
  var n;
  return function() {
    var i = arguments;
    n || (e.apply(this, i), n = !0, typeof r == "function" && r(!0), setTimeout(function() {
      n = !1, typeof r == "function" && r(!1);
    }, t));
  };
};
vt.default = _n;
var Cr = {};
(function(e) {
  function t(r, n) {
    var i = n.partialVisbile, o = n.partialVisible, s = n.centerMode, a = n.ssr, l = n.responsive;
    if ((i || o) && s)
      throw new Error("center mode can not be used at the same time with partialVisible");
    if (!l)
      throw a ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    if (l && typeof l != "object")
      throw new Error("responsive prop must be an object");
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
})(Cr);
var yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
var En = N;
function Sn(e, t, r) {
  r === void 0 && (r = 0);
  var n, i, o = e.slidesToShow, s = e.currentSlide, a = e.itemWidth, l = e.totalItems, u = En.getSlidesToSlide(e, t), c = s + 1 + r + o + (0 < r ? 0 : u);
  return i = c <= l ? -a * (n = s + r + (0 < r ? 0 : u)) : l < c && s !== l - o ? -a * (n = l - o) : n = void 0, { nextSlides: n, nextPosition: i };
}
yt.populateNextSlides = Sn;
var gt = {};
Object.defineProperty(gt, "__esModule", { value: !0 });
var bn = S, Tn = N, wn = N;
function Cn(e, t, r) {
  r === void 0 && (r = 0);
  var n, i, o = e.currentSlide, s = e.itemWidth, a = e.slidesToShow, l = t.children, u = t.showDots, c = t.infinite, d = Tn.getSlidesToSlide(e, t), p = o - r - (0 < r ? 0 : d), m = (bn.Children.toArray(l).length - a) % d;
  return i = 0 <= p ? (n = p, u && !c && 0 < m && wn.isInRightEnd(e) && (n = o - m), -s * n) : n = p < 0 && o !== 0 ? 0 : void 0, { nextSlides: n, nextPosition: i };
}
gt.populatePreviousSlides = Cn;
var Or = {};
(function(e) {
  function t(r, n, i, o, s, a) {
    var l, u, c = r.itemWidth, d = r.slidesToShow, p = r.totalItems, m = r.currentSlide, h = n.infinite, f = !1, y = Math.round((i - o) / c), T = Math.round((o - i) / c), w = i < s;
    if (s < i && y <= d) {
      l = "right";
      var v = Math.abs(-c * (p - d)), g = a - (o - s), _ = m === p - d;
      (Math.abs(g) <= v || _ && h) && (u = g, f = !0);
    }
    return w && T <= d && (l = "left", ((g = a + (s - o)) <= 0 || m === 0 && h) && (f = !0, u = g)), { direction: l, nextPosition: u, canContinue: f };
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.populateSlidesOnMouseTouchMove = t;
})(Or);
Object.defineProperty(x, "__esModule", { value: !0 });
var me = xe;
x.getOriginalCounterPart = me.getOriginalCounterPart, x.getClones = me.getClones, x.checkClonesPosition = me.checkClonesPosition, x.getInitialSlideInInfiniteMode = me.getInitialSlideInInfiniteMode;
var Xe = te;
x.getWidthFromDeviceType = Xe.getWidthFromDeviceType, x.getPartialVisibilityGutter = Xe.getPartialVisibilityGutter, x.getItemClientSideWidth = Xe.getItemClientSideWidth;
var H = N;
x.getInitialState = H.getInitialState, x.getIfSlideIsVisbile = H.getIfSlideIsVisbile, x.getTransformForCenterMode = H.getTransformForCenterMode, x.getTransformForPartialVsibile = H.getTransformForPartialVsibile, x.isInLeftEnd = H.isInLeftEnd, x.isInRightEnd = H.isInRightEnd, x.notEnoughChildren = H.notEnoughChildren, x.getSlidesToSlide = H.getSlidesToSlide;
var On = vt;
x.throttle = On.default;
var Rn = Cr;
x.throwError = Rn.default;
var xn = yt;
x.populateNextSlides = xn.populateNextSlides;
var Pn = gt;
x.populatePreviousSlides = Pn.populatePreviousSlides;
var Mn = Or;
x.populateSlidesOnMouseTouchMove = Mn.populateSlidesOnMouseTouchMove;
var Pe = {}, Nn = R && R.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        i.hasOwnProperty(o) && (n[o] = i[o]);
    })(t, r);
  };
  return function(t, r) {
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Pe, "__esModule", { value: !0 });
var Dn = S;
function In(e) {
  return "clientY" in e;
}
Pe.isMouseMoveEvent = In;
var kn = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Nn(t, e), t;
}(Dn.Component);
Pe.default = kn;
var _t = {}, Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
var An = xe, Ln = N;
function jn(e, t, r, n) {
  var i = {}, o = Ln.getSlidesToSlide(t, r);
  return Array(e).fill(0).forEach(function(s, a) {
    var l = An.getOriginalCounterPart(a, t, n);
    if (a === 0)
      i[0] = l;
    else {
      var u = i[a - 1] + o;
      i[a] = u;
    }
  }), i;
}
Et.getLookupTableForNextSlides = jn;
Object.defineProperty(_t, "__esModule", { value: !0 });
var se = S, Vn = xe, Fn = Et, Wt = N, zn = function(e) {
  var t = e.props, r = e.state, n = e.goToSlide, i = e.getState, o = t.showDots, s = t.customDot, a = t.dotListClass, l = t.infinite, u = t.children;
  if (!o || Wt.notEnoughChildren(r))
    return null;
  var c, d = r.currentSlide, p = r.slidesToShow, m = Wt.getSlidesToSlide(r, t), h = se.Children.toArray(u);
  c = l ? Math.ceil(h.length / m) : Math.ceil((h.length - p) / m) + 1;
  var f = Fn.getLookupTableForNextSlides(c, r, t, h), y = Vn.getOriginalIndexLookupTableByClones(p, h), T = y[d];
  return se.createElement("ul", { className: "react-multi-carousel-dot-list " + a }, Array(c).fill(0).map(function(w, v) {
    var g, _;
    if (l) {
      _ = f[v];
      var b = y[_];
      g = T === b || b <= T && T < b + m;
    } else {
      var C = h.length - p, O = v * m;
      g = (_ = C < O ? C : O) === d || _ < d && d < _ + m && d < h.length - p;
    }
    return s ? se.cloneElement(s, { index: v, active: g, key: v, onClick: function() {
      return n(_);
    }, carouselState: i() }) : se.createElement("li", { "data-index": v, key: v, className: "react-multi-carousel-dot " + (g ? "react-multi-carousel-dot--active" : "") }, se.createElement("button", { "aria-label": "Go to slide " + (v + 1), onClick: function() {
      return n(_);
    } }));
  }));
};
_t.default = zn;
var Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
var we = S, Wn = function(e) {
  var t = e.customLeftArrow, r = e.getState, n = e.previous, i = e.disabled, o = e.rtl;
  if (t)
    return we.cloneElement(t, { onClick: function() {
      return n();
    }, carouselState: r(), disabled: i, rtl: o });
  var s = o ? "rtl" : "";
  return we.createElement("button", { "aria-label": "Go to previous slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + s, onClick: function() {
    return n();
  }, type: "button", disabled: i });
};
Me.LeftArrow = Wn;
var Bn = function(e) {
  var t = e.customRightArrow, r = e.getState, n = e.next, i = e.disabled, o = e.rtl;
  if (t)
    return we.cloneElement(t, { onClick: function() {
      return n();
    }, carouselState: r(), disabled: i, rtl: o });
  var s = o ? "rtl" : "";
  return we.createElement("button", { "aria-label": "Go to next slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + s, onClick: function() {
    return n();
  }, type: "button", disabled: i });
};
Me.RightArrow = Bn;
var St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
var ve = S, Ye = x, Hn = function(e) {
  var t = e.props, r = e.state, n = e.goToSlide, i = e.clones, o = e.notEnoughChildren, s = r.itemWidth, a = t.children, l = t.infinite, u = t.itemClass, c = t.itemAriaLabel, d = t.partialVisbile, p = t.partialVisible, m = Ye.getInitialState(r, t), h = m.flexBisis, f = m.shouldRenderOnSSR, y = m.domFullyLoaded, T = m.partialVisibilityGutter;
  return m.shouldRenderAtAll ? (d && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), ve.createElement(ve.Fragment, null, (l ? i : ve.Children.toArray(a)).map(function(w, v) {
    return ve.createElement("li", { key: v, "data-index": v, onClick: function() {
      t.focusOnSelect && n(v);
    }, "aria-hidden": Ye.getIfSlideIsVisbile(v, r) ? "false" : "true", "aria-label": c || (w.props.ariaLabel ? w.props.ariaLabel : null), style: { flex: f ? "1 0 " + h + "%" : "auto", position: "relative", width: y ? ((d || p) && T && !o ? s - T : s) + "px" : "auto" }, className: "react-multi-carousel-item " + (Ye.getIfSlideIsVisbile(v, r) ? "react-multi-carousel-item--active" : "") + " " + u }, w);
  }))) : null;
};
St.default = Hn;
var $n = R && R.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        i.hasOwnProperty(o) && (n[o] = i[o]);
    })(t, r);
  };
  return function(t, r) {
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(pt, "__esModule", { value: !0 });
var D = S, P = x, q = Pe, Gn = _t, Bt = Me, Un = St, ye = N, W = 400, Ht = "transform 400ms ease-in-out", Xn = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.containerRef = D.createRef(), n.listRef = D.createRef(), n.state = { itemWidth: 0, slidesToShow: 0, currentSlide: 0, totalItems: D.Children.count(r.children), deviceType: "", domLoaded: !1, transform: 0, containerWidth: 0 }, n.onResize = n.onResize.bind(n), n.handleDown = n.handleDown.bind(n), n.handleMove = n.handleMove.bind(n), n.handleOut = n.handleOut.bind(n), n.onKeyUp = n.onKeyUp.bind(n), n.handleEnter = n.handleEnter.bind(n), n.setIsInThrottle = n.setIsInThrottle.bind(n), n.next = P.throttle(n.next.bind(n), r.transitionDuration || W, n.setIsInThrottle), n.previous = P.throttle(n.previous.bind(n), r.transitionDuration || W, n.setIsInThrottle), n.goToSlide = P.throttle(n.goToSlide.bind(n), r.transitionDuration || W, n.setIsInThrottle), n.onMove = !1, n.initialX = 0, n.lastX = 0, n.isAnimationAllowed = !1, n.direction = "", n.initialY = 0, n.isInThrottle = !1, n.transformPlaceHolder = 0, n;
  }
  return $n(t, e), t.prototype.resetTotalItems = function() {
    var r = this, n = D.Children.count(this.props.children), i = P.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, n));
    this.setState({ totalItems: n, currentSlide: i }, function() {
      r.setContainerAndItemWidth(r.state.slidesToShow, !0);
    });
  }, t.prototype.setIsInThrottle = function(r) {
    r === void 0 && (r = !1), this.isInThrottle = r;
  }, t.prototype.setTransformDirectly = function(r, n) {
    var i = this.props.additionalTransfrom;
    this.transformPlaceHolder = r;
    var o = ye.getTransform(this.state, this.props, this.transformPlaceHolder);
    this.listRef && this.listRef.current && (this.setAnimationDirectly(n), this.listRef.current.style.transform = "translate3d(" + (o + i) + "px,0,0)");
  }, t.prototype.setAnimationDirectly = function(r) {
    this.listRef && this.listRef.current && (this.listRef.current.style.transition = r ? this.props.customTransition || Ht : "none");
  }, t.prototype.componentDidMount = function() {
    this.setState({ domLoaded: !0 }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, t.prototype.setClones = function(r, n, i, o) {
    var s = this;
    o === void 0 && (o = !1), this.isAnimationAllowed = !1;
    var a = D.Children.toArray(this.props.children), l = P.getInitialSlideInInfiniteMode(r || this.state.slidesToShow, a), u = P.getClones(this.state.slidesToShow, a), c = a.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
    this.setState({ totalItems: u.length, currentSlide: i && !o ? c : l }, function() {
      s.correctItemsPosition(n || s.state.itemWidth);
    });
  }, t.prototype.setItemsToShow = function(r, n) {
    var i = this, o = this.props.responsive;
    Object.keys(o).forEach(function(s) {
      var a = o[s], l = a.breakpoint, u = a.items, c = l.max, d = l.min, p = [window.innerWidth];
      window.screen && window.screen.width && p.push(window.screen.width);
      var m = Math.min.apply(Math, p);
      d <= m && m <= c && (i.setState({ slidesToShow: u, deviceType: s }), i.setContainerAndItemWidth(u, r, n));
    });
  }, t.prototype.setContainerAndItemWidth = function(r, n, i) {
    var o = this;
    if (this.containerRef && this.containerRef.current) {
      var s = this.containerRef.current.offsetWidth, a = P.getItemClientSideWidth(this.props, r, s);
      this.setState({ containerWidth: s, itemWidth: a }, function() {
        o.props.infinite && o.setClones(r, a, n, i);
      }), n && this.correctItemsPosition(a);
    }
  }, t.prototype.correctItemsPosition = function(r, n, i) {
    n && (this.isAnimationAllowed = !0), !n && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
    var o = this.state.totalItems < this.state.slidesToShow ? 0 : -r * this.state.currentSlide;
    i && this.setTransformDirectly(o, !0), this.setState({ transform: o });
  }, t.prototype.onResize = function(r) {
    var n;
    n = !!this.props.infinite && (typeof r != "boolean" || !r), this.setItemsToShow(n);
  }, t.prototype.componentDidUpdate = function(r, n) {
    var i = this, o = r.keyBoardControl, s = r.autoPlay, a = r.children, l = n.containerWidth, u = n.domLoaded, c = n.currentSlide;
    if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== l && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
      i.setItemsToShow(!0);
    }, this.props.transitionDuration || W)), o && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !o && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), s && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), s || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), a.length !== this.props.children.length ? t.clonesTimeout = setTimeout(function() {
      i.props.infinite ? i.setClones(i.state.slidesToShow, i.state.itemWidth, !0, !0) : i.resetTotalItems();
    }, this.props.transitionDuration || W) : this.props.infinite && this.state.currentSlide !== c && this.correctClonesPosition({ domLoaded: u }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && P.isInRightEnd(this.state)) {
      var d = this.props.transitionDuration || W;
      t.isInThrottleTimeout = setTimeout(function() {
        i.setIsInThrottle(!1), i.resetAutoplayInterval(), i.goToSlide(0, void 0, !!i.props.rewindWithAnimation);
      }, d + this.props.autoPlaySpeed);
    }
  }, t.prototype.correctClonesPosition = function(r) {
    var n = this, i = r.domLoaded, o = D.Children.toArray(this.props.children), s = P.checkClonesPosition(this.state, o, this.props), a = s.isReachingTheEnd, l = s.isReachingTheStart, u = s.nextSlide, c = s.nextPosition;
    this.state.domLoaded && i && (a || l) && (this.isAnimationAllowed = !1, t.transformTimeout = setTimeout(function() {
      n.setState({ transform: c, currentSlide: u });
    }, this.props.transitionDuration || W));
  }, t.prototype.next = function(r) {
    var n = this;
    r === void 0 && (r = 0);
    var i = this.props, o = i.afterChange, s = i.beforeChange;
    if (!P.notEnoughChildren(this.state)) {
      var a = P.populateNextSlides(this.state, this.props, r), l = a.nextSlides, u = a.nextPosition, c = this.state.currentSlide;
      l !== void 0 && u !== void 0 && (typeof s == "function" && s(l, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: u, currentSlide: l }, function() {
        typeof o == "function" && (t.afterChangeTimeout = setTimeout(function() {
          o(c, n.getState());
        }, n.props.transitionDuration || W));
      }));
    }
  }, t.prototype.previous = function(r) {
    var n = this;
    r === void 0 && (r = 0);
    var i = this.props, o = i.afterChange, s = i.beforeChange;
    if (!P.notEnoughChildren(this.state)) {
      var a = P.populatePreviousSlides(this.state, this.props, r), l = a.nextSlides, u = a.nextPosition;
      if (l !== void 0 && u !== void 0) {
        var c = this.state.currentSlide;
        typeof s == "function" && s(l, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: u, currentSlide: l }, function() {
          typeof o == "function" && (t.afterChangeTimeout2 = setTimeout(function() {
            o(c, n.getState());
          }, n.props.transitionDuration || W));
        });
      }
    }
  }, t.prototype.resetAutoplayInterval = function() {
    this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, t.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), t.clonesTimeout && clearTimeout(t.clonesTimeout), t.isInThrottleTimeout && clearTimeout(t.isInThrottleTimeout), t.transformTimeout && clearTimeout(t.transformTimeout), t.afterChangeTimeout && clearTimeout(t.afterChangeTimeout), t.afterChangeTimeout2 && clearTimeout(t.afterChangeTimeout2), t.afterChangeTimeout3 && clearTimeout(t.afterChangeTimeout3);
  }, t.prototype.resetMoveStatus = function() {
    this.onMove = !1, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0;
  }, t.prototype.getCords = function(r) {
    var n = r.clientX, i = r.clientY;
    return { clientX: ye.parsePosition(this.props, n), clientY: ye.parsePosition(this.props, i) };
  }, t.prototype.handleDown = function(r) {
    if (!(!q.isMouseMoveEvent(r) && !this.props.swipeable || q.isMouseMoveEvent(r) && !this.props.draggable || this.isInThrottle)) {
      var n = this.getCords(q.isMouseMoveEvent(r) ? r : r.touches[0]), i = n.clientX, o = n.clientY;
      this.onMove = !0, this.initialX = i, this.initialY = o, this.lastX = i, this.isAnimationAllowed = !1;
    }
  }, t.prototype.handleMove = function(r) {
    if (!(!q.isMouseMoveEvent(r) && !this.props.swipeable || q.isMouseMoveEvent(r) && !this.props.draggable || P.notEnoughChildren(this.state))) {
      var n = this.getCords(q.isMouseMoveEvent(r) ? r : r.touches[0]), i = n.clientX, o = n.clientY, s = this.initialX - i, a = this.initialY - o;
      if (this.onMove) {
        if (!(Math.abs(s) > Math.abs(a)))
          return;
        var l = P.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, i, this.transformPlaceHolder), u = l.direction, c = l.nextPosition, d = l.canContinue;
        u && (this.direction = u, d && c !== void 0 && this.setTransformDirectly(c)), this.lastX = i;
      }
    }
  }, t.prototype.handleOut = function(r) {
    this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    var n = r.type === "touchend" && !this.props.swipeable, i = (r.type === "mouseleave" || r.type === "mouseup") && !this.props.draggable;
    if (!n && !i && this.onMove) {
      if (this.setAnimationDirectly(!0), this.direction === "right")
        if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
          var o = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
          this.next(o);
        } else
          this.correctItemsPosition(this.state.itemWidth, !0, !0);
      this.direction === "left" && (this.lastX - this.initialX > this.props.minimumTouchDrag ? (o = Math.round((this.lastX - this.initialX) / this.state.itemWidth), this.previous(o)) : this.correctItemsPosition(this.state.itemWidth, !0, !0)), this.resetMoveStatus();
    }
  }, t.prototype.isInViewport = function(r) {
    var n = r.getBoundingClientRect(), i = n.top, o = i === void 0 ? 0 : i, s = n.left, a = s === void 0 ? 0 : s, l = n.bottom, u = l === void 0 ? 0 : l, c = n.right, d = c === void 0 ? 0 : c;
    return 0 <= o && 0 <= a && u <= (window.innerHeight || document.documentElement.clientHeight) && d <= (window.innerWidth || document.documentElement.clientWidth);
  }, t.prototype.isChildOfCarousel = function(r) {
    return !!(r instanceof Element && this.listRef && this.listRef.current) && this.listRef.current.contains(r);
  }, t.prototype.onKeyUp = function(r) {
    var n = r.target;
    switch (r.keyCode) {
      case 37:
        if (this.isChildOfCarousel(n))
          return this.previous();
        break;
      case 39:
        if (this.isChildOfCarousel(n))
          return this.next();
        break;
      case 9:
        if (this.isChildOfCarousel(n) && n instanceof HTMLInputElement && this.isInViewport(n))
          return this.next();
    }
  }, t.prototype.handleEnter = function(r) {
    q.isMouseMoveEvent(r) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0);
  }, t.prototype.goToSlide = function(r, n, i) {
    var o = this;
    if (i === void 0 && (i = !0), !this.isInThrottle) {
      var s = this.state.itemWidth, a = this.props, l = a.afterChange, u = a.beforeChange, c = this.state.currentSlide;
      typeof u != "function" || n && (typeof n != "object" || n.skipBeforeChange) || u(r, this.getState()), this.isAnimationAllowed = i, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ currentSlide: r, transform: -s * r }, function() {
        o.props.infinite && o.correctClonesPosition({ domLoaded: !0 }), typeof l != "function" || n && (typeof n != "object" || n.skipAfterChange) || (t.afterChangeTimeout3 = setTimeout(function() {
          l(c, o.getState());
        }, o.props.transitionDuration || W));
      });
    }
  }, t.prototype.getState = function() {
    return this.state;
  }, t.prototype.renderLeftArrow = function(r) {
    var n = this, i = this.props, o = i.customLeftArrow, s = i.rtl;
    return D.createElement(Bt.LeftArrow, { customLeftArrow: o, getState: function() {
      return n.getState();
    }, previous: this.previous, disabled: r, rtl: s });
  }, t.prototype.renderRightArrow = function(r) {
    var n = this, i = this.props, o = i.customRightArrow, s = i.rtl;
    return D.createElement(Bt.RightArrow, { customRightArrow: o, getState: function() {
      return n.getState();
    }, next: this.next, disabled: r, rtl: s });
  }, t.prototype.renderButtonGroups = function() {
    var r = this, n = this.props.customButtonGroup;
    return n ? D.cloneElement(n, { previous: function() {
      return r.previous();
    }, next: function() {
      return r.next();
    }, goToSlide: function(i, o) {
      return r.goToSlide(i, o);
    }, carouselState: this.getState() }) : null;
  }, t.prototype.renderDotsList = function() {
    var r = this;
    return D.createElement(Gn.default, { state: this.state, props: this.props, goToSlide: this.goToSlide, getState: function() {
      return r.getState();
    } });
  }, t.prototype.renderCarouselItems = function() {
    var r = [];
    if (this.props.infinite) {
      var n = D.Children.toArray(this.props.children);
      r = P.getClones(this.state.slidesToShow, n);
    }
    return D.createElement(Un.default, { clones: r, goToSlide: this.goToSlide, state: this.state, notEnoughChildren: P.notEnoughChildren(this.state), props: this.props });
  }, t.prototype.render = function() {
    var r = this.props, n = r.deviceType, i = r.arrows, o = r.renderArrowsWhenDisabled, s = r.removeArrowOnDeviceType, a = r.infinite, l = r.containerClass, u = r.sliderClass, c = r.customTransition, d = r.additionalTransfrom, p = r.renderDotsOutside, m = r.renderButtonGroupOutside, h = r.className, f = r.rtl;
    process.env.NODE_ENV !== "production" && P.throwError(this.state, this.props);
    var y = P.getInitialState(this.state, this.props), T = y.shouldRenderOnSSR, w = y.shouldRenderAtAll, v = P.isInLeftEnd(this.state), g = P.isInRightEnd(this.state), _ = i && !(s && (n && -1 < s.indexOf(n) || this.state.deviceType && -1 < s.indexOf(this.state.deviceType))) && !P.notEnoughChildren(this.state) && w, b = !a && v, C = !a && g, O = ye.getTransform(this.state, this.props);
    return D.createElement(D.Fragment, null, D.createElement("div", { className: "react-multi-carousel-list " + l + " " + h, dir: f ? "rtl" : "ltr", ref: this.containerRef }, D.createElement("ul", { ref: this.listRef, className: "react-multi-carousel-track " + u, style: { transition: this.isAnimationAllowed ? c || Ht : "none", overflow: T ? "hidden" : "unset", transform: "translate3d(" + (O + d) + "px,0,0)" }, onMouseMove: this.handleMove, onMouseDown: this.handleDown, onMouseUp: this.handleOut, onMouseEnter: this.handleEnter, onMouseLeave: this.handleOut, onTouchStart: this.handleDown, onTouchMove: this.handleMove, onTouchEnd: this.handleOut }, this.renderCarouselItems()), _ && (!b || o) && this.renderLeftArrow(b), _ && (!C || o) && this.renderRightArrow(C), w && !m && this.renderButtonGroups(), w && !p && this.renderDotsList()), w && p && this.renderDotsList(), w && m && this.renderButtonGroups());
  }, t.defaultProps = { slidesToSlide: 1, infinite: !1, draggable: !0, swipeable: !0, arrows: !0, renderArrowsWhenDisabled: !1, containerClass: "", sliderClass: "", itemClass: "", keyBoardControl: !0, autoPlaySpeed: 3e3, showDots: !1, renderDotsOutside: !1, renderButtonGroupOutside: !1, minimumTouchDrag: 80, className: "", dotListClass: "", focusOnSelect: !1, centerMode: !1, additionalTransfrom: 0, pauseOnHover: !0, shouldResetAutoplay: !0, rewind: !1, rtl: !1, rewindWithAnimation: !1 }, t;
}(D.Component);
pt.default = Xn;
Object.defineProperty(ht, "__esModule", { value: !0 });
var Yn = pt;
ht.default = Yn.default;
var qn = ht;
const Kn = /* @__PURE__ */ Er(qn);
function rt() {
  let e = document.querySelectorAll(".react-multi-carousel-item"), t = document.querySelectorAll(".react-multi-carousel-item:not(.react-multi-carousel-item--active)");
  const r = 1, n = 0.2;
  for (let i = 0; i < e.length; i++)
    e[i].style.opacity = r;
  for (let i = 0; i < t.length; i++)
    t[i].style.opacity = n;
}
const Zn = {
  lg: {
    breakpoint: {
      max: 99999,
      min: global.config.responsive.breakpoint.lg
    },
    items: 2
  },
  sm: {
    breakpoint: {
      max: global.config.responsive.breakpoint.lg,
      min: 0
    },
    items: 1
  }
};
function Jn({ children: e, ...t }) {
  return window.addEventListener("resize", rt), /* @__PURE__ */ S.createElement(
    Kn,
    {
      responsive: Zn,
      partialVisible: !0,
      containerClass: "carousel",
      itemClass: "carousel__item",
      keyBoardControl: !0,
      pauseOnHover: !0,
      afterChange: function(r, n) {
        rt();
      },
      ...t
    },
    e
  );
}
function Qn({
  src: e,
  title: t = "",
  alt: r = "",
  target: n,
  className: i = "",
  classNameImage: o = "",
  isEnhancedMode: s = !0,
  adjustSize: a = !0,
  ...l
}) {
  return o += s ? "w-[95%] hover:w-full shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] " : "", /* @__PURE__ */ React.createElement("div", { className: "flex justify-center " + F + i + (a ? "w-full" : ""), ...l }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: e,
      className: F + o,
      title: t,
      alt: r
    }
  ));
}
function Ca({
  images: e,
  srcBase: t,
  ...r
}) {
  return /* @__PURE__ */ S.createElement(Jn, { ...r }, e.map(
    (n, i) => /* @__PURE__ */ S.createElement(
      "div",
      {
        className: F + " m-1",
        onLoad: rt,
        key: i
      },
      /* @__PURE__ */ S.createElement(
        Qn,
        {
          src: t + "/" + n.link,
          alt: n.alt || n.title || "",
          title: n.title || n.alt || ""
        }
      ),
      /* @__PURE__ */ S.createElement("p", { className: "mt-2 text-center" }, n.title || "")
    )
  ));
}
function bt({
  children: e,
  className: t = "",
  transitionEnabled: r = !1,
  ...n
}) {
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "py-4 " + t,
      ...n,
      ...r ? ee : {}
    },
    e
  );
}
function Oa({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.createElement(
    "p",
    {
      className: "py-2 lg:py-4 " + t,
      ...ee,
      ...r
    },
    e
  );
}
function Ra({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.createElement(
    "section",
    {
      className: "my-16 sm:my-24 lg:my-32 " + t,
      ...r
    },
    e
  );
}
function xa({
  children: e,
  href: t,
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ S.createElement(
    "a",
    {
      href: t,
      className: r,
      ...n
    },
    /* @__PURE__ */ S.createElement("p", { className: "hover:scale-105 w-full h-full inline-block text-orange-200 hover:text-orange-400 " + F }, e)
  );
}
function ei({
  children: e,
  forInput: t,
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ S.createElement(
    "label",
    {
      for: t,
      className: "mr-2 " + r,
      ...n
    },
    e
  );
}
function ti({
  children: e,
  type: t,
  id: r,
  name: n,
  className: i,
  ...o
}) {
  return /* @__PURE__ */ S.createElement(bt, null, /* @__PURE__ */ S.createElement(ei, null, e), /* @__PURE__ */ S.createElement(ti, null));
}
function Pa({
  children: e,
  type: t,
  id: r,
  name: n,
  className: i = "",
  ...o
}) {
  return /* @__PURE__ */ S.createElement(
    "input",
    {
      type: t,
      id: r,
      name: n || r,
      className: "w-full md:w-1/2 bg-neutral-900 p-2 rounded-full " + i,
      ...o
    }
  );
}
function Ma({
  href: e,
  src: t,
  title: r = "",
  alt: n = "",
  target: i = "_blank",
  className: o = "",
  classNameImage: s = "",
  zoomDisabled: a = !1,
  ...l
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "w-full flex justify-center " + F + o, ...l }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: e,
      className: "relative w-[95%] hover:bg-neutral-500 " + _r + F + (a ? "" : "hover:w-full ") + s,
      target: i
    },
    /* @__PURE__ */ React.createElement("div", { className: "image-mask absolute inset-0 w-full h-full hover:bg-black/50 " + F }, /* @__PURE__ */ React.createElement("p", { className: "image-mask__info hidden" }, "Cliquez pour y accéder !")),
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: t,
        title: r,
        alt: n
      }
    )
  ));
}
function Na({
  size: e = 4,
  className: t = "",
  isVisible: r = !1,
  ...n
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "separator my-" + e + ` ${r ? "" : "opacity-0"}` + t, ...n });
}
var Rr = {}, Tt = {}, wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
var $t = "html", Gt = "head", ge = "body", ri = /<([a-zA-Z]+[0-9]?)/, Ut = /<head[^]*>/i, Xt = /<body[^]*>/i, Ce = function(e, t) {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
}, nt = function(e, t) {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
}, Yt = typeof window == "object" && window.DOMParser;
if (typeof Yt == "function") {
  var ni = new Yt(), ii = "text/html";
  nt = function(e, t) {
    return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), ni.parseFromString(e, ii);
  }, Ce = nt;
}
if (typeof document == "object" && document.implementation) {
  var _e = document.implementation.createHTMLDocument();
  Ce = function(e, t) {
    if (t) {
      var r = _e.documentElement.querySelector(t);
      return r && (r.innerHTML = e), _e;
    }
    return _e.documentElement.innerHTML = e, _e;
  };
}
var Ee = typeof document == "object" && document.createElement("template"), it;
Ee && Ee.content && (it = function(e) {
  return Ee.innerHTML = e, Ee.content.childNodes;
});
function oi(e) {
  var t, r, n = e.match(ri), i = n && n[1] ? n[1].toLowerCase() : "";
  switch (i) {
    case $t: {
      var o = nt(e);
      if (!Ut.test(e)) {
        var s = o.querySelector(Gt);
        (t = s == null ? void 0 : s.parentNode) === null || t === void 0 || t.removeChild(s);
      }
      if (!Xt.test(e)) {
        var s = o.querySelector(ge);
        (r = s == null ? void 0 : s.parentNode) === null || r === void 0 || r.removeChild(s);
      }
      return o.querySelectorAll($t);
    }
    case Gt:
    case ge: {
      var a = Ce(e).querySelectorAll(i);
      return Xt.test(e) && Ut.test(e) ? a[0].parentNode.childNodes : a;
    }
    default: {
      if (it)
        return it(e);
      var s = Ce(e, ge).querySelector(ge);
      return s.childNodes;
    }
  }
}
wt.default = oi;
var re = {}, Ct = {}, Ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var t;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(t = e.ElementType || (e.ElementType = {}));
  function r(n) {
    return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
  }
  e.isTag = r, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})(Ot);
var E = {}, G = R && R.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), ue = R && R.__assign || function() {
  return ue = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ue.apply(this, arguments);
};
Object.defineProperty(E, "__esModule", { value: !0 });
E.cloneNode = E.hasChildren = E.isDocument = E.isDirective = E.isComment = E.isText = E.isCDATA = E.isTag = E.Element = E.Document = E.CDATA = E.NodeWithChildren = E.ProcessingInstruction = E.Comment = E.Text = E.DataNode = E.Node = void 0;
var L = Ot, Rt = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(t) {
        this.parent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(t) {
        this.prev = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(t) {
        this.next = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(t) {
      return t === void 0 && (t = !1), xt(this, t);
    }, e;
  }()
);
E.Node = Rt;
var Ne = (
  /** @class */
  function(e) {
    G(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.data = r, n;
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(r) {
        this.data = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Rt)
);
E.DataNode = Ne;
var xr = (
  /** @class */
  function(e) {
    G(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = L.ElementType.Text, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ne)
);
E.Text = xr;
var Pr = (
  /** @class */
  function(e) {
    G(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = L.ElementType.Comment, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ne)
);
E.Comment = Pr;
var Mr = (
  /** @class */
  function(e) {
    G(t, e);
    function t(r, n) {
      var i = e.call(this, n) || this;
      return i.name = r, i.type = L.ElementType.Directive, i;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ne)
);
E.ProcessingInstruction = Mr;
var De = (
  /** @class */
  function(e) {
    G(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.children = r, n;
    }
    return Object.defineProperty(t.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var r;
        return (r = this.children[0]) !== null && r !== void 0 ? r : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(r) {
        this.children = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Rt)
);
E.NodeWithChildren = De;
var Nr = (
  /** @class */
  function(e) {
    G(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = L.ElementType.CDATA, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(De)
);
E.CDATA = Nr;
var Dr = (
  /** @class */
  function(e) {
    G(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = L.ElementType.Root, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(De)
);
E.Document = Dr;
var Ir = (
  /** @class */
  function(e) {
    G(t, e);
    function t(r, n, i, o) {
      i === void 0 && (i = []), o === void 0 && (o = r === "script" ? L.ElementType.Script : r === "style" ? L.ElementType.Style : L.ElementType.Tag);
      var s = e.call(this, i) || this;
      return s.name = r, s.attribs = n, s.type = o, s;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(r) {
        this.name = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var r = this;
        return Object.keys(this.attribs).map(function(n) {
          var i, o;
          return {
            name: n,
            value: r.attribs[n],
            namespace: (i = r["x-attribsNamespace"]) === null || i === void 0 ? void 0 : i[n],
            prefix: (o = r["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[n]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(De)
);
E.Element = Ir;
function kr(e) {
  return (0, L.isTag)(e);
}
E.isTag = kr;
function Ar(e) {
  return e.type === L.ElementType.CDATA;
}
E.isCDATA = Ar;
function Lr(e) {
  return e.type === L.ElementType.Text;
}
E.isText = Lr;
function jr(e) {
  return e.type === L.ElementType.Comment;
}
E.isComment = jr;
function Vr(e) {
  return e.type === L.ElementType.Directive;
}
E.isDirective = Vr;
function Fr(e) {
  return e.type === L.ElementType.Root;
}
E.isDocument = Fr;
function ai(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
E.hasChildren = ai;
function xt(e, t) {
  t === void 0 && (t = !1);
  var r;
  if (Lr(e))
    r = new xr(e.data);
  else if (jr(e))
    r = new Pr(e.data);
  else if (kr(e)) {
    var n = t ? qe(e.children) : [], i = new Ir(e.name, ue({}, e.attribs), n);
    n.forEach(function(l) {
      return l.parent = i;
    }), e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = ue({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = ue({}, e["x-attribsPrefix"])), r = i;
  } else if (Ar(e)) {
    var n = t ? qe(e.children) : [], o = new Nr(n);
    n.forEach(function(u) {
      return u.parent = o;
    }), r = o;
  } else if (Fr(e)) {
    var n = t ? qe(e.children) : [], s = new Dr(n);
    n.forEach(function(u) {
      return u.parent = s;
    }), e["x-mode"] && (s["x-mode"] = e["x-mode"]), r = s;
  } else if (Vr(e)) {
    var a = new Mr(e.name, e.data);
    e["x-name"] != null && (a["x-name"] = e["x-name"], a["x-publicId"] = e["x-publicId"], a["x-systemId"] = e["x-systemId"]), r = a;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
E.cloneNode = xt;
function qe(e) {
  for (var t = e.map(function(n) {
    return xt(n, !0);
  }), r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r];
  return t;
}
(function(e) {
  var t = R && R.__createBinding || (Object.create ? function(a, l, u, c) {
    c === void 0 && (c = u);
    var d = Object.getOwnPropertyDescriptor(l, u);
    (!d || ("get" in d ? !l.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
      return l[u];
    } }), Object.defineProperty(a, c, d);
  } : function(a, l, u, c) {
    c === void 0 && (c = u), a[c] = l[u];
  }), r = R && R.__exportStar || function(a, l) {
    for (var u in a)
      u !== "default" && !Object.prototype.hasOwnProperty.call(l, u) && t(l, a, u);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var n = Ot, i = E;
  r(E, e);
  var o = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, s = (
    /** @class */
    function() {
      function a(l, u, c) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (c = u, u = o), typeof l == "object" && (u = l, l = void 0), this.callback = l ?? null, this.options = u ?? o, this.elementCB = c ?? null;
      }
      return a.prototype.onparserinit = function(l) {
        this.parser = l;
      }, a.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, a.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, a.prototype.onerror = function(l) {
        this.handleCallback(l);
      }, a.prototype.onclosetag = function() {
        this.lastNode = null;
        var l = this.tagStack.pop();
        this.options.withEndIndices && (l.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(l);
      }, a.prototype.onopentag = function(l, u) {
        var c = this.options.xmlMode ? n.ElementType.Tag : void 0, d = new i.Element(l, u, void 0, c);
        this.addNode(d), this.tagStack.push(d);
      }, a.prototype.ontext = function(l) {
        var u = this.lastNode;
        if (u && u.type === n.ElementType.Text)
          u.data += l, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
        else {
          var c = new i.Text(l);
          this.addNode(c), this.lastNode = c;
        }
      }, a.prototype.oncomment = function(l) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += l;
          return;
        }
        var u = new i.Comment(l);
        this.addNode(u), this.lastNode = u;
      }, a.prototype.oncommentend = function() {
        this.lastNode = null;
      }, a.prototype.oncdatastart = function() {
        var l = new i.Text(""), u = new i.CDATA([l]);
        this.addNode(u), l.parent = u, this.lastNode = l;
      }, a.prototype.oncdataend = function() {
        this.lastNode = null;
      }, a.prototype.onprocessinginstruction = function(l, u) {
        var c = new i.ProcessingInstruction(l, u);
        this.addNode(c);
      }, a.prototype.handleCallback = function(l) {
        if (typeof this.callback == "function")
          this.callback(l, this.dom);
        else if (l)
          throw l;
      }, a.prototype.addNode = function(l) {
        var u = this.tagStack[this.tagStack.length - 1], c = u.children[u.children.length - 1];
        this.options.withStartIndices && (l.startIndex = this.parser.startIndex), this.options.withEndIndices && (l.endIndex = this.parser.endIndex), u.children.push(l), c && (l.prev = c, c.next = l), l.parent = u, this.lastNode = null;
      }, a;
    }()
  );
  e.DomHandler = s, e.default = s;
})(Ct);
var zr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0, e.CASE_SENSITIVE_TAG_NAMES = [
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "linearGradient",
    "radialGradient",
    "textPath"
  ], e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t, r) {
    return t[r.toLowerCase()] = r, t;
  }, {});
})(zr);
Object.defineProperty(re, "__esModule", { value: !0 });
re.formatDOM = re.formatAttributes = void 0;
var Se = Ct, si = zr;
function li(e) {
  return si.CASE_SENSITIVE_TAG_NAMES_MAP[e];
}
function Wr(e) {
  for (var t = {}, r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t[i.name] = i.value;
  }
  return t;
}
re.formatAttributes = Wr;
function ui(e) {
  e = e.toLowerCase();
  var t = li(e);
  return t || e;
}
function Br(e, t, r) {
  t === void 0 && (t = null);
  for (var n = [], i, o = 0, s = e.length; o < s; o++) {
    var a = e[o];
    switch (a.nodeType) {
      case 1: {
        var l = ui(a.nodeName);
        i = new Se.Element(l, Wr(a.attributes)), i.children = Br(
          // template children are on content
          l === "template" ? a.content.childNodes : a.childNodes,
          i
        );
        break;
      }
      case 3:
        i = new Se.Text(a.nodeValue);
        break;
      case 8:
        i = new Se.Comment(a.nodeValue);
        break;
      default:
        continue;
    }
    var u = n[o - 1] || null;
    u && (u.next = i), i.parent = t, i.prev = u, i.next = null, n.push(i);
  }
  return r && (i = new Se.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), i.next = n[0] || null, i.parent = t, n.unshift(i), n[1] && (n[1].prev = n[0])), n;
}
re.formatDOM = Br;
var ci = R && R.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Tt, "__esModule", { value: !0 });
var di = ci(wt), fi = re, hi = /<(![a-zA-Z\s]+)>/;
function pi(e) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  var t = e.match(hi), r = t ? t[1] : void 0;
  return (0, fi.formatDOM)((0, di.default)(e), null, r);
}
Tt.default = pi;
var Ie = {}, z = {}, ke = {}, mi = 0;
ke.SAME = mi;
var vi = 1;
ke.CAMELCASE = vi;
ke.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};
const Hr = 0, U = 1, Ae = 2, Le = 3, Pt = 4, $r = 5, Gr = 6;
function yi(e) {
  return I.hasOwnProperty(e) ? I[e] : null;
}
function k(e, t, r, n, i, o, s) {
  this.acceptsBooleans = t === Ae || t === Le || t === Pt, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
const I = {}, gi = [
  "children",
  "dangerouslySetInnerHTML",
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "style"
];
gi.forEach((e) => {
  I[e] = new k(
    e,
    Hr,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(([e, t]) => {
  I[e] = new k(
    e,
    U,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["contentEditable", "draggable", "spellCheck", "value"].forEach((e) => {
  I[e] = new k(
    e,
    Ae,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha"
].forEach((e) => {
  I[e] = new k(
    e,
    Ae,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "allowFullScreen",
  "async",
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  // Microdata
  "itemScope"
].forEach((e) => {
  I[e] = new k(
    e,
    Le,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "checked",
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  "multiple",
  "muted",
  "selected"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((e) => {
  I[e] = new k(
    e,
    Le,
    !0,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "capture",
  "download"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((e) => {
  I[e] = new k(
    e,
    Pt,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "cols",
  "rows",
  "size",
  "span"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((e) => {
  I[e] = new k(
    e,
    Gr,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["rowSpan", "start"].forEach((e) => {
  I[e] = new k(
    e,
    $r,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
const Mt = /[\-\:]([a-z])/g, Nt = (e) => e[1].toUpperCase();
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((e) => {
  const t = e.replace(Mt, Nt);
  I[t] = new k(
    t,
    U,
    !1,
    // mustUseProperty
    e,
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((e) => {
  const t = e.replace(Mt, Nt);
  I[t] = new k(
    t,
    U,
    !1,
    // mustUseProperty
    e,
    "http://www.w3.org/1999/xlink",
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "xml:base",
  "xml:lang",
  "xml:space"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((e) => {
  const t = e.replace(Mt, Nt);
  I[t] = new k(
    t,
    U,
    !1,
    // mustUseProperty
    e,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["tabIndex", "crossOrigin"].forEach((e) => {
  I[e] = new k(
    e,
    U,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
const _i = "xlinkHref";
I[_i] = new k(
  "xlinkHref",
  U,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
  // removeEmptyString
);
["src", "href", "action", "formAction"].forEach((e) => {
  I[e] = new k(
    e,
    U,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !0,
    // sanitizeURL
    !0
    // removeEmptyString
  );
});
const {
  CAMELCASE: Ei,
  SAME: Si,
  possibleStandardNames: qt
} = ke, bi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ti = bi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", wi = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + Ti + "]*$")
), Ci = Object.keys(
  qt
).reduce((e, t) => {
  const r = qt[t];
  return r === Si ? e[t] = t : r === Ei ? e[t.toLowerCase()] = t : e[t] = r, e;
}, {});
z.BOOLEAN = Le;
z.BOOLEANISH_STRING = Ae;
z.NUMERIC = $r;
z.OVERLOADED_BOOLEAN = Pt;
z.POSITIVE_NUMERIC = Gr;
z.RESERVED = Hr;
z.STRING = U;
z.getPropertyInfo = yi;
z.isCustomAttribute = wi;
z.possibleStandardNames = Ci;
var Dt = {}, It = {}, kt = {}, Kt = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Oi = /\n/g, Ri = /^\s*/, xi = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Pi = /^:\s*/, Mi = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Ni = /^[;\s]*/, Di = /^\s+|\s+$/g, Ii = `
`, Zt = "/", Jt = "*", Z = "", ki = "comment", Ai = "declaration", Li = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var r = 1, n = 1;
  function i(h) {
    var f = h.match(Oi);
    f && (r += f.length);
    var y = h.lastIndexOf(Ii);
    n = ~y ? h.length - y : n + h.length;
  }
  function o() {
    var h = { line: r, column: n };
    return function(f) {
      return f.position = new s(h), u(), f;
    };
  }
  function s(h) {
    this.start = h, this.end = { line: r, column: n }, this.source = t.source;
  }
  s.prototype.content = e;
  function a(h) {
    var f = new Error(
      t.source + ":" + r + ":" + n + ": " + h
    );
    if (f.reason = h, f.filename = t.source, f.line = r, f.column = n, f.source = e, !t.silent)
      throw f;
  }
  function l(h) {
    var f = h.exec(e);
    if (f) {
      var y = f[0];
      return i(y), e = e.slice(y.length), f;
    }
  }
  function u() {
    l(Ri);
  }
  function c(h) {
    var f;
    for (h = h || []; f = d(); )
      f !== !1 && h.push(f);
    return h;
  }
  function d() {
    var h = o();
    if (!(Zt != e.charAt(0) || Jt != e.charAt(1))) {
      for (var f = 2; Z != e.charAt(f) && (Jt != e.charAt(f) || Zt != e.charAt(f + 1)); )
        ++f;
      if (f += 2, Z === e.charAt(f - 1))
        return a("End of comment missing");
      var y = e.slice(2, f - 2);
      return n += 2, i(y), e = e.slice(f), n += 2, h({
        type: ki,
        comment: y
      });
    }
  }
  function p() {
    var h = o(), f = l(xi);
    if (f) {
      if (d(), !l(Pi))
        return a("property missing ':'");
      var y = l(Mi), T = h({
        type: Ai,
        property: Qt(f[0].replace(Kt, Z)),
        value: y ? Qt(y[0].replace(Kt, Z)) : Z
      });
      return l(Ni), T;
    }
  }
  function m() {
    var h = [];
    c(h);
    for (var f; f = p(); )
      f !== !1 && (h.push(f), c(h));
    return h;
  }
  return u(), m();
};
function Qt(e) {
  return e ? e.replace(Di, Z) : Z;
}
var ji = R && R.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(kt, "__esModule", { value: !0 });
var Vi = ji(Li);
function Fi(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var n = (0, Vi.default)(e), i = typeof t == "function";
  return n.forEach(function(o) {
    if (o.type === "declaration") {
      var s = o.property, a = o.value;
      i ? t(s, a, o) : a && (r = r || {}, r[s] = a);
    }
  }), r;
}
kt.default = Fi;
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.camelCase = void 0;
var zi = /^--[a-zA-Z0-9-]+$/, Wi = /-([a-z])/g, Bi = /^[^-]+$/, Hi = /^-(webkit|moz|ms|o|khtml)-/, $i = /^-(ms)-/, Gi = function(e) {
  return !e || Bi.test(e) || zi.test(e);
}, Ui = function(e, t) {
  return t.toUpperCase();
}, er = function(e, t) {
  return "".concat(t, "-");
}, Xi = function(e, t) {
  return t === void 0 && (t = {}), Gi(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace($i, er) : e = e.replace(Hi, er), e.replace(Wi, Ui));
};
je.camelCase = Xi;
var Yi = R && R.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(It, "__esModule", { value: !0 });
var qi = Yi(kt), Ki = je;
function Zi(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, qi.default)(e, function(n, i) {
    n && i && (r[(0, Ki.camelCase)(n, t)] = i);
  }), r;
}
It.default = Zi;
(function(e) {
  var t = R && R.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = e.setStyleProp = e.isCustomComponent = void 0;
  var r = S, n = t(It), i = /* @__PURE__ */ new Set([
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph"
  ]);
  function o(c, d) {
    return c.includes("-") ? !i.has(c) : !!(d && typeof d.is == "string");
  }
  e.isCustomComponent = o;
  var s = {
    reactCompat: !0
  };
  function a(c, d) {
    if (typeof c == "string") {
      if (!c.trim()) {
        d.style = {};
        return;
      }
      try {
        d.style = (0, n.default)(c, s);
      } catch {
        d.style = {};
      }
    }
  }
  e.setStyleProp = a, e.PRESERVE_CUSTOM_ATTRIBUTES = Number(r.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
    "tr",
    "tbody",
    "thead",
    "tfoot",
    "colgroup",
    "table",
    "head",
    "html",
    "frameset"
  ]);
  var l = function(c) {
    return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name);
  };
  e.canTextBeChildOfNode = l;
  var u = function(c) {
    return c;
  };
  e.returnFirstArg = u;
})(Dt);
Object.defineProperty(Ie, "__esModule", { value: !0 });
var le = z, tr = Dt, Ji = ["checked", "value"], Qi = ["input", "select", "textarea"], eo = {
  reset: !0,
  submit: !0
};
function to(e, t) {
  e === void 0 && (e = {});
  var r = {}, n = !!(e.type && eo[e.type]);
  for (var i in e) {
    var o = e[i];
    if ((0, le.isCustomAttribute)(i)) {
      r[i] = o;
      continue;
    }
    var s = i.toLowerCase(), a = rr(s);
    if (a) {
      var l = (0, le.getPropertyInfo)(a);
      switch (Ji.includes(a) && Qi.includes(t) && !n && (a = rr("default" + s)), r[a] = o, l && l.type) {
        case le.BOOLEAN:
          r[a] = !0;
          break;
        case le.OVERLOADED_BOOLEAN:
          o === "" && (r[a] = !0);
          break;
      }
      continue;
    }
    tr.PRESERVE_CUSTOM_ATTRIBUTES && (r[i] = o);
  }
  return (0, tr.setStyleProp)(e.style, r), r;
}
Ie.default = to;
function rr(e) {
  return le.possibleStandardNames[e];
}
var At = {}, ro = R && R.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(At, "__esModule", { value: !0 });
var Ke = S, no = ro(Ie), ce = Dt, io = {
  cloneElement: Ke.cloneElement,
  createElement: Ke.createElement,
  isValidElement: Ke.isValidElement
};
function Ur(e, t) {
  t === void 0 && (t = {});
  for (var r = [], n = typeof t.replace == "function", i = t.transform || ce.returnFirstArg, o = t.library || io, s = o.cloneElement, a = o.createElement, l = o.isValidElement, u = e.length, c = 0; c < u; c++) {
    var d = e[c];
    if (n) {
      var p = t.replace(d, c);
      if (l(p)) {
        u > 1 && (p = s(p, {
          key: p.key || c
        })), r.push(i(p, d, c));
        continue;
      }
    }
    if (d.type === "text") {
      var m = !d.data.trim().length;
      if (m && d.parent && !(0, ce.canTextBeChildOfNode)(d.parent) || t.trim && m)
        continue;
      r.push(i(d.data, d, c));
      continue;
    }
    var h = d, f = {};
    oo(h) ? ((0, ce.setStyleProp)(h.attribs.style, h.attribs), f = h.attribs) : h.attribs && (f = (0, no.default)(h.attribs, h.name));
    var y = void 0;
    switch (d.type) {
      case "script":
      case "style":
        d.children[0] && (f.dangerouslySetInnerHTML = {
          __html: d.children[0].data
        });
        break;
      case "tag":
        d.name === "textarea" && d.children[0] ? f.defaultValue = d.children[0].data : d.children && d.children.length && (y = Ur(d.children, t));
        break;
      default:
        continue;
    }
    u > 1 && (f.key = c), r.push(i(a(d.name, f, y), d, c));
  }
  return r.length === 1 ? r[0] : r;
}
At.default = Ur;
function oo(e) {
  return ce.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, ce.isCustomComponent)(e.name, e.attribs);
}
(function(e) {
  var t = R && R.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0;
  var r = t(Tt);
  e.htmlToDOM = r.default;
  var n = t(Ie);
  e.attributesToProps = n.default;
  var i = t(At);
  e.domToReact = i.default;
  var o = Ct;
  Object.defineProperty(e, "Comment", { enumerable: !0, get: function() {
    return o.Comment;
  } }), Object.defineProperty(e, "Element", { enumerable: !0, get: function() {
    return o.Element;
  } }), Object.defineProperty(e, "ProcessingInstruction", { enumerable: !0, get: function() {
    return o.ProcessingInstruction;
  } }), Object.defineProperty(e, "Text", { enumerable: !0, get: function() {
    return o.Text;
  } });
  var s = { lowerCaseAttributeNames: !1 };
  function a(l, u) {
    if (typeof l != "string")
      throw new TypeError("First argument must be a string");
    return l ? (0, i.default)((0, r.default)(l, (u == null ? void 0 : u.htmlparser2) || s), u) : [];
  }
  e.default = a;
})(Rr);
const nr = /* @__PURE__ */ Er(Rr), oe = nr.default || nr;
function Da({
  children: e,
  className: t = "",
  transitionEnabled: r = !0,
  ...n
}) {
  return /* @__PURE__ */ React.createElement(
    "h1",
    {
      className: "text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl uppercase my-8 sm:my-12 lg:my-16 text-center " + t,
      ...r ? ee : {},
      ...n
    },
    oe(e)
  );
}
function Ia({
  children: e,
  className: t = "",
  transitionEnabled: r = !0,
  ...n
}) {
  return /* @__PURE__ */ React.createElement(
    "h2",
    {
      className: "text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl my-6 sm:my-10 lg:my-12 text-center uppercase " + t,
      ...n,
      ...r ? ee : {}
    },
    oe(e)
  );
}
function ka({
  children: e,
  className: t = "",
  isSmallerMode: r = !1,
  ...n
}) {
  return r ? t += "text-lg xs:text-xl lg:text-xl" : t += "text-xl xs:text-2xl lg:text-2xl", /* @__PURE__ */ React.createElement(
    "h3",
    {
      className: "my-2 sm:my-4 lg:my-4 text-center uppercase " + t,
      ...n
    },
    oe(e)
  );
}
function Aa({
  children: e,
  className: t = "",
  isMarginEnabled: r = !0,
  ...n
}) {
  const i = r ? "my-2 sm:my-4 " : "";
  return /* @__PURE__ */ React.createElement(
    "h4",
    {
      className: "text-md xs:text-lg md:text-xl uppercase " + i + t,
      ...n
    },
    oe(e)
  );
}
function La({
  children: e,
  className: t = "",
  isMarginEnabled: r = !0,
  ...n
}) {
  const i = r ? "my-2 sm:my-4 " : "";
  return /* @__PURE__ */ React.createElement(
    "h5",
    {
      className: "text-md uppercase " + i + t,
      ...n
    },
    oe(e)
  );
}
function ja({
  children: e,
  className: t = "",
  isMarginEnabled: r = !0,
  ...n
}) {
  const i = r ? "my-2 sm:my-4 " : "";
  return /* @__PURE__ */ React.createElement(
    "h6",
    {
      className: "text-md " + i + t,
      ...n
    },
    oe(e)
  );
}
function ao(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function so(e) {
  return ao(e) && "type" in e && typeof e.type == "string";
}
var Xr = Symbol.for("immer-nothing"), ir = Symbol.for("immer-draftable"), j = Symbol.for("immer-state"), lo = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function A(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = lo[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ne = Object.getPrototypeOf;
function $(e) {
  return !!e && !!e[j];
}
function B(e) {
  var t;
  return e ? Yr(e) || Array.isArray(e) || !!e[ir] || !!((t = e.constructor) != null && t[ir]) || Fe(e) || ze(e) : !1;
}
var uo = Object.prototype.constructor.toString();
function Yr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ne(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === uo;
}
function de(e, t) {
  Ve(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Ve(e) {
  const t = e[j];
  return t ? t.type_ : Array.isArray(e) ? 1 : Fe(e) ? 2 : ze(e) ? 3 : 0;
}
function ot(e, t) {
  return Ve(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qr(e, t, r) {
  const n = Ve(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function co(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Fe(e) {
  return e instanceof Map;
}
function ze(e) {
  return e instanceof Set;
}
function K(e) {
  return e.copy_ || e.base_;
}
function at(e, t) {
  if (Fe(e))
    return new Map(e);
  if (ze(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Yr(e))
    return ne(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[j];
  let n = Reflect.ownKeys(r);
  for (let i = 0; i < n.length; i++) {
    const o = n[i], s = r[o];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[o] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[o]
    });
  }
  return Object.create(ne(e), r);
}
function Lt(e, t = !1) {
  return We(e) || $(e) || !B(e) || (Ve(e) > 1 && (e.set = e.add = e.clear = e.delete = fo), Object.freeze(e), t && de(e, (r, n) => Lt(n, !0))), e;
}
function fo() {
  A(2);
}
function We(e) {
  return Object.isFrozen(e);
}
var ho = {};
function Q(e) {
  const t = ho[e];
  return t || A(0, e), t;
}
var fe;
function Kr() {
  return fe;
}
function po(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function or(e, t) {
  t && (Q("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function st(e) {
  lt(e), e.drafts_.forEach(mo), e.drafts_ = null;
}
function lt(e) {
  e === fe && (fe = e.parent_);
}
function ar(e) {
  return fe = po(fe, e);
}
function mo(e) {
  const t = e[j];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function sr(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[j].modified_ && (st(t), A(4)), B(e) && (e = Oe(t, e), t.parent_ || Re(t, e)), t.patches_ && Q("Patches").generateReplacementPatches_(
    r[j].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Oe(t, r, []), st(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Xr ? e : void 0;
}
function Oe(e, t, r) {
  if (We(t))
    return t;
  const n = t[j];
  if (!n)
    return de(
      t,
      (i, o) => lr(e, n, t, i, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Re(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i, s = !1;
    n.type_ === 3 && (o = new Set(i), i.clear(), s = !0), de(
      o,
      (a, l) => lr(e, n, i, a, l, r, s)
    ), Re(e, i, !1), r && e.patches_ && Q("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function lr(e, t, r, n, i, o, s) {
  if (process.env.NODE_ENV !== "production" && i === r && A(5), $(i)) {
    const a = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ot(t.assigned_, n) ? o.concat(n) : void 0, l = Oe(e, i, a);
    if (qr(r, n, l), $(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(i);
  if (B(i) && !We(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Oe(e, i), (!t || !t.scope_.parent_) && Re(e, i);
  }
}
function Re(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Lt(t, r);
}
function vo(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Kr(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, o = jt;
  r && (i = [n], o = he);
  const { revoke: s, proxy: a } = Proxy.revocable(i, o);
  return n.draft_ = a, n.revoke_ = s, a;
}
var jt = {
  get(e, t) {
    if (t === j)
      return e;
    const r = K(e);
    if (!ot(r, t))
      return yo(e, r, t);
    const n = r[t];
    return e.finalized_ || !B(n) ? n : n === Ze(e.base_, t) ? (Je(e), e.copy_[t] = ct(n, e)) : n;
  },
  has(e, t) {
    return t in K(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(K(e));
  },
  set(e, t, r) {
    const n = Zr(K(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Ze(K(e), t), o = i == null ? void 0 : i[j];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (co(r, i) && (r !== void 0 || ot(e.base_, t)))
        return !0;
      Je(e), ut(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ze(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Je(e), ut(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = K(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    A(11);
  },
  getPrototypeOf(e) {
    return ne(e.base_);
  },
  setPrototypeOf() {
    A(12);
  }
}, he = {};
de(jt, (e, t) => {
  he[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
he.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && A(13), he.set.call(this, e, t, void 0);
};
he.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && A(14), jt.set.call(this, e[0], t, r, e[0]);
};
function Ze(e, t) {
  const r = e[j];
  return (r ? K(r) : e)[t];
}
function yo(e, t, r) {
  var i;
  const n = Zr(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Zr(e, t) {
  if (!(t in e))
    return;
  let r = ne(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ne(r);
  }
}
function ut(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ut(e.parent_));
}
function Je(e) {
  e.copy_ || (e.copy_ = at(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var go = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const s = this;
        return function(l = o, ...u) {
          return s.produce(l, (c) => r.call(this, c, ...u));
        };
      }
      typeof r != "function" && A(6), n !== void 0 && typeof n != "function" && A(7);
      let i;
      if (B(t)) {
        const o = ar(this), s = ct(t, void 0);
        let a = !0;
        try {
          i = r(s), a = !1;
        } finally {
          a ? st(o) : lt(o);
        }
        return or(o, n), sr(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Xr && (i = void 0), this.autoFreeze_ && Lt(i, !0), n) {
          const o = [], s = [];
          Q("Patches").generateReplacementPatches_(t, i, o, s), n(o, s);
        }
        return i;
      } else
        A(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
      let n, i;
      return [this.produce(t, r, (s, a) => {
        n = s, i = a;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    B(e) || A(8), $(e) && (e = Jr(e));
    const t = ar(this), r = ct(e, void 0);
    return r[j].isManual_ = !0, lt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[j];
    (!r || !r.isManual_) && A(9);
    const { scope_: n } = r;
    return or(n, t), sr(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Q("Patches").applyPatches_;
    return $(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function ct(e, t) {
  const r = Fe(e) ? Q("MapSet").proxyMap_(e, t) : ze(e) ? Q("MapSet").proxySet_(e, t) : vo(e, t);
  return (t ? t.scope_ : Kr()).drafts_.push(r), r;
}
function Jr(e) {
  return $(e) || A(10, e), Qr(e);
}
function Qr(e) {
  if (!B(e) || We(e))
    return e;
  const t = e[j];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = at(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = at(e, !0);
  return de(r, (n, i) => {
    qr(r, n, Qr(i));
  }), t && (t.finalized_ = !1), r;
}
var V = new go(), en = V.produce;
V.produceWithPatches.bind(
  V
);
V.setAutoFreeze.bind(V);
V.setUseStrictShallowCopy.bind(V);
V.applyPatches.bind(V);
V.createDraft.bind(V);
V.finishDraft.bind(V);
var _o = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (o) {
        ({ stack: i } = o);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, Eo = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: s } = e, a = n(() => ({}), ...i);
  if (!(a.apply(null, o) === a.apply(null, s))) {
    let u;
    try {
      throw new Error();
    } catch (c) {
      ({ stack: u } = c);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: o,
        secondInputs: s,
        stack: u
      }
    );
  }
}, So = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function bo(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function To(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function wo(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var ur = (e) => Array.isArray(e) ? e : [e];
function Co(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return wo(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function cr(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var Oo = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...So,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: _o
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Eo
    }
  };
}, Ro = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, xo = typeof WeakRef < "u" ? WeakRef : Ro, Po = 0, dr = 1;
function be() {
  return {
    s: Po,
    v: void 0,
    o: null,
    p: null
  };
}
function Vt(e, t = {}) {
  let r = be();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function s() {
    var d;
    let a = r;
    const { length: l } = arguments;
    for (let p = 0, m = l; p < m; p++) {
      const h = arguments[p];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let f = a.o;
        f === null && (a.o = f = /* @__PURE__ */ new WeakMap());
        const y = f.get(h);
        y === void 0 ? (a = be(), f.set(h, a)) : a = y;
      } else {
        let f = a.p;
        f === null && (a.p = f = /* @__PURE__ */ new Map());
        const y = f.get(h);
        y === void 0 ? (a = be(), f.set(h, a)) : a = y;
      }
    }
    const u = a;
    let c;
    if (a.s === dr ? c = a.v : (c = e.apply(null, arguments), o++), u.s = dr, n) {
      const p = ((d = i == null ? void 0 : i.deref) == null ? void 0 : d.call(i)) ?? i;
      p != null && n(p, c) && (c = p, o !== 0 && o--), i = typeof c == "object" && c !== null || typeof c == "function" ? new xo(c) : c;
    }
    return u.v = c, c;
  }
  return s.clearCache = () => {
    r = be(), s.resetResultsCount();
  }, s.resultsCount = () => o, s.resetResultsCount = () => {
    o = 0;
  }, s;
}
function tn(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, s = 0, a, l = {}, u = i.pop();
    typeof u == "object" && (l = u, u = i.pop()), bo(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const c = {
      ...r,
      ...l
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: m = Vt,
      argsMemoizeOptions: h = [],
      devModeChecks: f = {}
    } = c, y = ur(p), T = ur(h), w = Co(i), v = d(function() {
      return o++, u.apply(
        null,
        arguments
      );
    }, ...y);
    let g = !0;
    const _ = m(function() {
      s++;
      const C = cr(
        w,
        arguments
      );
      if (a = v.apply(null, C), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: O, inputStabilityCheck: X } = Oo(g, f);
        if (O.shouldRun && O.run(
          u,
          C,
          a
        ), X.shouldRun) {
          const ae = cr(
            w,
            arguments
          );
          X.run(
            { inputSelectorResults: C, inputSelectorResultsCopy: ae },
            { memoize: d, memoizeOptions: y },
            arguments
          );
        }
        g && (g = !1);
      }
      return a;
    }, ...T);
    return Object.assign(_, {
      resultFunc: u,
      memoizedResultFunc: v,
      dependencies: w,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: d,
      argsMemoize: m
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Mo = /* @__PURE__ */ tn(Vt), No = Object.assign(
  (e, t = Mo) => {
    To(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (o) => e[o]
    );
    return t(
      n,
      (...o) => o.reduce((s, a, l) => (s[r[l]] = a, s), {})
    );
  },
  { withTypes: () => No }
), Do = (...e) => {
  const t = tn(...e), r = Object.assign((...n) => {
    const i = t(...n), o = (s, ...a) => i($(s) ? Jr(s) : s, ...a);
    return Object.assign(o, i), o;
  }, {
    withTypes: () => r
  });
  return r;
};
Do(Vt);
function ie(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? M(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => so(n) && n.type === e, r;
}
function fr(e) {
  return B(e) ? en(e, () => {
  }) : e;
}
function hr(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? M(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
process.env.NODE_ENV;
function rn(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? M(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? M(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof o == "string" ? o : o.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? M(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(process.env.NODE_ENV === "production" ? M(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, i;
    },
    addMatcher(o, s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? M(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: o,
        reducer: s
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? M(31) : "`builder.addDefaultCase` can only be called once");
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function Io(e) {
  return typeof e == "function";
}
function ko(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? M(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = rn(t), o;
  if (Io(e))
    o = () => fr(e());
  else {
    const a = fr(e);
    o = () => a;
  }
  function s(a = o(), l) {
    let u = [r[l.type], ...n.filter(({
      matcher: c
    }) => c(l)).map(({
      reducer: c
    }) => c)];
    return u.filter((c) => !!c).length === 0 && (u = [i]), u.reduce((c, d) => {
      if (d)
        if ($(c)) {
          const m = d(c, l);
          return m === void 0 ? c : m;
        } else {
          if (B(c))
            return en(c, (p) => d(p, l));
          {
            const p = d(c, l);
            if (p === void 0) {
              if (c === null)
                return c;
              throw new Error(process.env.NODE_ENV === "production" ? M(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return c;
    }, a);
  }
  return s.getInitialState = o, s;
}
var Ao = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Lo = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Ao[Math.random() * 64 | 0];
  return t;
}, jo = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Vo(e, t) {
  return `${e}/${t}`;
}
function Fo({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[jo];
  return function(i) {
    const {
      name: o,
      reducerPath: s = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? M(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(Bo()) : i.reducers) || {}, l = Object.keys(a), u = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(v, g) {
        const _ = typeof v == "string" ? v : v.type;
        if (!_)
          throw new Error(process.env.NODE_ENV === "production" ? M(12) : "`context.addCase` cannot be called with an empty action type");
        if (_ in u.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? M(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + _);
        return u.sliceCaseReducersByType[_] = g, c;
      },
      addMatcher(v, g) {
        return u.sliceMatchers.push({
          matcher: v,
          reducer: g
        }), c;
      },
      exposeAction(v, g) {
        return u.actionCreators[v] = g, c;
      },
      exposeCaseReducer(v, g) {
        return u.sliceCaseReducersByName[v] = g, c;
      }
    };
    l.forEach((v) => {
      const g = a[v], _ = {
        reducerName: v,
        type: Vo(o, v),
        createNotation: typeof i.reducers == "function"
      };
      $o(g) ? Uo(_, g, c, t) : Ho(_, g, c);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? M(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [v = {}, g = [], _ = void 0] = typeof i.extraReducers == "function" ? rn(i.extraReducers) : [i.extraReducers], b = {
        ...v,
        ...u.sliceCaseReducersByType
      };
      return ko(i.initialState, (C) => {
        for (let O in b)
          C.addCase(O, b[O]);
        for (let O of u.sliceMatchers)
          C.addMatcher(O.matcher, O.reducer);
        for (let O of g)
          C.addMatcher(O.matcher, O.reducer);
        _ && C.addDefaultCase(_);
      });
    }
    const p = (v) => v, m = /* @__PURE__ */ new Map();
    let h;
    function f(v, g) {
      return h || (h = d()), h(v, g);
    }
    function y() {
      return h || (h = d()), h.getInitialState();
    }
    function T(v, g = !1) {
      function _(C) {
        let O = C[v];
        if (typeof O > "u") {
          if (g)
            O = y();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? M(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return O;
      }
      function b(C = p) {
        const O = hr(m, g, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return hr(O, C, {
          insert: () => {
            const X = {};
            for (const [ae, Y] of Object.entries(i.selectors ?? {}))
              X[ae] = zo(Y, C, y, g);
            return X;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: b,
        get selectors() {
          return b(_);
        },
        selectSlice: _
      };
    }
    const w = {
      name: o,
      reducer: f,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: y,
      ...T(s),
      injectInto(v, {
        reducerPath: g,
        ..._
      } = {}) {
        const b = g ?? s;
        return v.inject({
          reducerPath: b,
          reducer: f
        }, _), {
          ...w,
          ...T(b, !0)
        };
      }
    };
    return w;
  };
}
function zo(e, t, r, n) {
  function i(o, ...s) {
    let a = t(o);
    if (typeof a > "u") {
      if (n)
        a = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? M(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...s);
  }
  return i.unwrapped = e, i;
}
var Wo = /* @__PURE__ */ Fo();
function Bo() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function Ho({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, s;
  if ("reducer" in n) {
    if (r && !Go(n))
      throw new Error(process.env.NODE_ENV === "production" ? M(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, s = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, s ? ie(e, s) : ie(e));
}
function $o(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Go(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Uo({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? M(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: s,
    pending: a,
    rejected: l,
    settled: u,
    options: c
  } = r, d = i(e, o, c);
  n.exposeAction(t, d), s && n.addCase(d.fulfilled, s), a && n.addCase(d.pending, a), l && n.addCase(d.rejected, l), u && n.addMatcher(d.settled, u), n.exposeCaseReducer(t, {
    fulfilled: s || Te,
    pending: a || Te,
    rejected: l || Te,
    settled: u || Te
  });
}
function Te() {
}
var Xo = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? M(32) : `${t} is not a function`);
}, Ft = "listenerMiddleware", Yo = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = ie(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? M(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Xo(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, qo = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Yo(e);
  return {
    id: Lo(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? M(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => qo
}), Ko = Object.assign(ie(`${Ft}/add`), {
  withTypes: () => Ko
});
ie(`${Ft}/removeAll`);
var Zo = Object.assign(ie(`${Ft}/remove`), {
  withTypes: () => Zo
});
function M(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Jo = {
  name: "",
  isOpen: !1,
  item: null
}, nn = Wo({
  name: "viewer",
  initialState: Jo,
  reducers: {
    setIsOpen: (e, t) => {
      e.isOpen = t.payload;
    },
    setContent: (e, t) => {
      e.item = t.payload;
    },
    setName: (e, t) => {
      e.name = t.payload;
    }
  }
}), { setIsOpen: Qo, setContent: ea, setName: Va } = nn.actions;
nn.reducer;
var Qe = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function ta() {
  if (pr)
    return Qe;
  pr = 1;
  var e = S;
  function t(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return Qe.useSyncExternalStoreWithSelector = function(l, u, c, d, p) {
    var m = i(null);
    if (m.current === null) {
      var h = { hasValue: !1, value: null };
      m.current = h;
    } else
      h = m.current;
    m = s(function() {
      function y(_) {
        if (!T) {
          if (T = !0, w = _, _ = d(_), p !== void 0 && h.hasValue) {
            var b = h.value;
            if (p(b, _))
              return v = b;
          }
          return v = _;
        }
        if (b = v, r(w, _))
          return b;
        var C = d(_);
        return p !== void 0 && p(b, C) ? b : (w = _, v = C);
      }
      var T = !1, w, v, g = c === void 0 ? null : c;
      return [function() {
        return y(u());
      }, g === null ? void 0 : function() {
        return y(g());
      }];
    }, [u, c, d, p]);
    var f = n(l, m[0], m[1]);
    return o(function() {
      h.hasValue = !0, h.value = f;
    }, [f]), a(f), f;
  }, Qe;
}
var et = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function ra() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S;
    function t(u, c) {
      return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, a = e.useDebugValue;
    function l(u, c, d, p, m) {
      var h = i(null), f;
      h.current === null ? (f = {
        hasValue: !1,
        value: null
      }, h.current = f) : f = h.current;
      var y = s(function() {
        var g = !1, _, b, C = function(Y) {
          if (!g) {
            g = !0, _ = Y;
            var Be = p(Y);
            if (m !== void 0 && f.hasValue) {
              var He = f.value;
              if (m(He, Be))
                return b = He, He;
            }
            return b = Be, Be;
          }
          var sn = _, $e = b;
          if (r(sn, Y))
            return $e;
          var Ge = p(Y);
          return m !== void 0 && m($e, Ge) ? $e : (_ = Y, b = Ge, Ge);
        }, O = d === void 0 ? null : d, X = function() {
          return C(c());
        }, ae = O === null ? void 0 : function() {
          return C(O());
        };
        return [X, ae];
      }, [c, d, p, m]), T = y[0], w = y[1], v = n(u, T, w);
      return o(function() {
        f.hasValue = !0, f.value = v;
      }, [v]), a(v), v;
    }
    et.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), et;
}
process.env.NODE_ENV === "production" ? ta() : ra();
var J = (
  // prettier-ignore
  // @ts-ignore
  "default" in Ue ? Ue.default : Ue
), vr = Symbol.for("react-redux-context"), yr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function na() {
  if (!J.createContext)
    return {};
  const e = yr[vr] ?? (yr[vr] = /* @__PURE__ */ new Map());
  let t = e.get(J.createContext);
  return t || (t = J.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(J.createContext, t)), t;
}
var pe = /* @__PURE__ */ na();
function on(e = pe) {
  return function() {
    const r = J.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var ia = /* @__PURE__ */ on(), oa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
oa ? J.useLayoutEffect : J.useEffect;
function an(e = pe) {
  const t = e === pe ? ia : (
    // @ts-ignore
    on(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var aa = /* @__PURE__ */ an();
function sa(e = pe) {
  const t = e === pe ? aa : an(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var la = /* @__PURE__ */ sa();
function Fa({ children: e, item: t, ...r }) {
  const n = la();
  function i() {
    document.querySelector(".viewer").classList.add("anim-to-left-fade-out"), setTimeout(() => {
      n(Qo(!1)), n(ea(t));
    }, 1e3);
  }
  function o(s) {
    setTimeout(() => {
      document.querySelector(s).classList.remove("anim-to-left-fade-in");
    }, 1e3);
  }
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "viewer fixed z-40 top-[2%] md:top-[5%] left-[2%] md:left-[5%] w-[96%] h-[96%] md:w-[90%] md:h-[90%] overflow-hidden anim-to-left-fade-in anim-duration--fast border bg-black rounded-md md:rounded-lg",
      onLoad: () => o(".viewer"),
      ...r
    },
    /* @__PURE__ */ React.createElement(bt, { className: "viewer__content absolute inset-0 overflow-y-auto h-full w-full my-4 sm:my-0 p-2 xs:p-4 lg:p-8" }, e),
    /* @__PURE__ */ React.createElement(un, { onClick: i })
  );
}
function za({ links: e, className: t, ...r }) {
  return /* @__PURE__ */ S.createElement(
    bt,
    {
      ...r,
      className: "flex justify-center"
    },
    e == null ? void 0 : e.map((n, i) => /* @__PURE__ */ S.createElement(
      ft,
      {
        href: n[1],
        className: "mr-2 lg:mr-4",
        key: i
      },
      n[0]
    ))
  );
}
function Wa({
  image: e,
  link: t,
  title: r = "",
  alt: n = "",
  target: i = "",
  imgClassName: o = "",
  className: s = "",
  ...a
}) {
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "w-12 mx-4 ease-in-out hover:scale-110 hover-darken " + F + s,
      href: t,
      target: i,
      ...a
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: e,
        className: "w-full " + o,
        title: r,
        alt: n
      }
    )
  );
}
function Ba({
  src: e,
  title: t = "",
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "relative w-full pt-[56.25%] " + r,
      ...ee,
      ...n
    },
    /* @__PURE__ */ S.createElement(
      "iframe",
      {
        src: "https://www.youtube.com/embed/QeMCiqunJ3w?si=AOy-HxSN18v304B7",
        title: t,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: !0,
        className: "absolute inset-0 w-full h-full"
      }
    )
  );
}
function Ha() {
  return /* @__PURE__ */ S.createElement(
    "img",
    {
      src: "/img/misc/spinner-new.gif",
      alt: "loading spinner",
      className: "w-8 my-4 mx-auto"
    }
  );
}
function ua(e) {
  return e.length === 0;
}
const $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isEmpty: ua
}, Symbol.toStringTag, { value: "Module" }));
function ca(e, t) {
  const r = document.getElementById(t);
  r && e.observe(r);
}
function da(e, t) {
  const r = document.getElementById(t);
  r && e.unobserve(r);
}
const Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  observeDOM: ca,
  unobserveDOM: da
}, Symbol.toStringTag, { value: "Module" }));
function fa(e, t = 0) {
  return Math.floor(Math.random() * (e - t)) + t;
}
function ha(e) {
  const t = document.querySelector(e);
  t && window.scrollTo({
    top: t.offsetTop - 80,
    behavior: "smooth"
  });
}
function pa(e) {
  return 'url("' + e + '")';
}
function ma(e) {
  return e === "" ? "javascript:void(0);" : e;
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adaptHref: ma,
  getImageUrl: pa,
  getRandomInt: fa,
  scrollToAnchor: ha
}, Symbol.toStringTag, { value: "Module" }));
function va(e) {
  return e === 0 || e === "" || e === void 0;
}
function ya(e) {
  return e === void 0;
}
function ga(e) {
  return e = e.split("-"), new Date(e[0], e[1] - 1).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long"
  });
}
const Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDateTextYYYYMM: ga,
  isNull: ya,
  isNullOrZero: va
}, Symbol.toStringTag, { value: "Module" }));
export {
  $a as ArrayHelper,
  un as ButtonClose,
  za as ButtonGroupLink,
  ft as ButtonLink,
  ba as ButtonLinkBig,
  Ta as ButtonLinkXL,
  wa as ButtonNoLink,
  Jn as CarouselBase,
  Ca as CarouselDefault,
  bt as DivDefault,
  ti as GroupInputLabel,
  Ba as IFrame,
  Wa as IconLink,
  Qn as Image,
  Ma as ImageLink,
  Pa as InputText,
  ei as Label,
  Ha as LoadingSpinner,
  Ga as ObserverHelper,
  Oa as Paragraph,
  Sa as PropsAssets,
  cn as Section,
  Ra as SectionBig,
  Na as Separator,
  Ea as StyleAssets,
  xa as TextLink,
  Da as TitleH1,
  Ia as TitleH2,
  ka as TitleH3,
  Aa as TitleH4,
  La as TitleH5,
  ja as TitleH6,
  Ua as Util,
  Xa as VariableHelper,
  Fa as Viewer,
  nn as viewerSlice
};
