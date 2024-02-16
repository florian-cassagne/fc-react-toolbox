import * as Ct from "react";
import Q from "react";
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function ji() {
  if (zr)
    return Pe;
  zr = 1;
  var e = Q, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, u, c) {
    var f, d = {}, m = null, g = null;
    c !== void 0 && (m = "" + c), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (g = u.ref);
    for (f in u)
      n.call(u, f) && !o.hasOwnProperty(f) && (d[f] = u[f]);
    if (a && a.defaultProps)
      for (f in u = a.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: t, type: a, key: m, ref: g, props: d, _owner: i.current };
  }
  return Pe.Fragment = r, Pe.jsx = l, Pe.jsxs = l, Pe;
}
var De = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function Li() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, p = "@@iterator";
    function b(s) {
      if (s === null || typeof s != "object")
        return null;
      var h = v && s[v] || s[p];
      return typeof h == "function" ? h : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(s) {
      {
        for (var h = arguments.length, y = new Array(h > 1 ? h - 1 : 0), E = 1; E < h; E++)
          y[E - 1] = arguments[E];
        _("error", s, y);
      }
    }
    function _(s, h, y) {
      {
        var E = R.ReactDebugCurrentFrame, k = E.getStackAddendum();
        k !== "" && (h += "%s", y = y.concat([k]));
        var N = y.map(function(P) {
          return String(P);
        });
        N.unshift("Warning: " + h), Function.prototype.apply.call(console[s], console, N);
      }
    }
    var T = !1, w = !1, D = !1, M = !1, I = !1, te;
    te = Symbol.for("react.module.reference");
    function de(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === o || I || s === i || s === c || s === f || M || s === g || T || w || D || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === d || s.$$typeof === l || s.$$typeof === a || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === te || s.getModuleId !== void 0));
    }
    function ne(s, h, y) {
      var E = s.displayName;
      if (E)
        return E;
      var k = h.displayName || h.name || "";
      return k !== "" ? y + "(" + k + ")" : y;
    }
    function _e(s) {
      return s.displayName || "Context";
    }
    function X(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case a:
            var h = s;
            return _e(h) + ".Consumer";
          case l:
            var y = s;
            return _e(y._context) + ".Provider";
          case u:
            return ne(s, s.render, "ForwardRef");
          case d:
            var E = s.displayName || null;
            return E !== null ? E : X(s.type) || "Memo";
          case m: {
            var k = s, N = k._payload, P = k._init;
            try {
              return X(P(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, oe = 0, be, br, Er, Sr, Tr, wr, Cr;
    function Or() {
    }
    Or.__reactDisabledLog = !0;
    function fi() {
      {
        if (oe === 0) {
          be = console.log, br = console.info, Er = console.warn, Sr = console.error, Tr = console.group, wr = console.groupCollapsed, Cr = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: Or,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        oe++;
      }
    }
    function di() {
      {
        if (oe--, oe === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, s, {
              value: be
            }),
            info: ie({}, s, {
              value: br
            }),
            warn: ie({}, s, {
              value: Er
            }),
            error: ie({}, s, {
              value: Sr
            }),
            group: ie({}, s, {
              value: Tr
            }),
            groupCollapsed: ie({}, s, {
              value: wr
            }),
            groupEnd: ie({}, s, {
              value: Cr
            })
          });
        }
        oe < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = R.ReactCurrentDispatcher, gt;
    function Ve(s, h, y) {
      {
        if (gt === void 0)
          try {
            throw Error();
          } catch (k) {
            var E = k.stack.trim().match(/\n( *(at )?)/);
            gt = E && E[1] || "";
          }
        return `
` + gt + s;
      }
    }
    var _t = !1, We;
    {
      var hi = typeof WeakMap == "function" ? WeakMap : Map;
      We = new hi();
    }
    function xr(s, h) {
      if (!s || _t)
        return "";
      {
        var y = We.get(s);
        if (y !== void 0)
          return y;
      }
      var E;
      _t = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = yt.current, yt.current = null, fi();
      try {
        if (h) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (ae) {
              E = ae;
            }
            Reflect.construct(s, [], P);
          } else {
            try {
              P.call();
            } catch (ae) {
              E = ae;
            }
            s.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            E = ae;
          }
          s();
        }
      } catch (ae) {
        if (ae && E && typeof ae.stack == "string") {
          for (var x = ae.stack.split(`
`), G = E.stack.split(`
`), F = x.length - 1, W = G.length - 1; F >= 1 && W >= 0 && x[F] !== G[W]; )
            W--;
          for (; F >= 1 && W >= 0; F--, W--)
            if (x[F] !== G[W]) {
              if (F !== 1 || W !== 1)
                do
                  if (F--, W--, W < 0 || x[F] !== G[W]) {
                    var J = `
` + x[F].replace(" at new ", " at ");
                    return s.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", s.displayName)), typeof s == "function" && We.set(s, J), J;
                  }
                while (F >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        _t = !1, yt.current = N, di(), Error.prepareStackTrace = k;
      }
      var Se = s ? s.displayName || s.name : "", Wr = Se ? Ve(Se) : "";
      return typeof s == "function" && We.set(s, Wr), Wr;
    }
    function pi(s, h, y) {
      return xr(s, !1);
    }
    function mi(s) {
      var h = s.prototype;
      return !!(h && h.isReactComponent);
    }
    function ze(s, h, y) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return xr(s, mi(s));
      if (typeof s == "string")
        return Ve(s);
      switch (s) {
        case c:
          return Ve("Suspense");
        case f:
          return Ve("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return pi(s.render);
          case d:
            return ze(s.type, h, y);
          case m: {
            var E = s, k = E._payload, N = E._init;
            try {
              return ze(N(k), h, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, Rr = {}, Pr = R.ReactDebugCurrentFrame;
    function $e(s) {
      if (s) {
        var h = s._owner, y = ze(s.type, s._source, h ? h.type : null);
        Pr.setExtraStackFrame(y);
      } else
        Pr.setExtraStackFrame(null);
    }
    function vi(s, h, y, E, k) {
      {
        var N = Function.call.bind(Be);
        for (var P in s)
          if (N(s, P)) {
            var x = void 0;
            try {
              if (typeof s[P] != "function") {
                var G = Error((E || "React class") + ": " + y + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              x = s[P](h, P, E, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              x = F;
            }
            x && !(x instanceof Error) && ($e(k), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", y, P, typeof x), $e(null)), x instanceof Error && !(x.message in Rr) && (Rr[x.message] = !0, $e(k), C("Failed %s type: %s", y, x.message), $e(null));
          }
      }
    }
    var yi = Array.isArray;
    function bt(s) {
      return yi(s);
    }
    function gi(s) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, y = h && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return y;
      }
    }
    function _i(s) {
      try {
        return Dr(s), !1;
      } catch {
        return !0;
      }
    }
    function Dr(s) {
      return "" + s;
    }
    function kr(s) {
      if (_i(s))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gi(s)), Dr(s);
    }
    var Re = R.ReactCurrentOwner, bi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mr, Ir, Et;
    Et = {};
    function Ei(s) {
      if (Be.call(s, "ref")) {
        var h = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Si(s) {
      if (Be.call(s, "key")) {
        var h = Object.getOwnPropertyDescriptor(s, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Ti(s, h) {
      if (typeof s.ref == "string" && Re.current && h && Re.current.stateNode !== h) {
        var y = X(Re.current.type);
        Et[y] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Re.current.type), s.ref), Et[y] = !0);
      }
    }
    function wi(s, h) {
      {
        var y = function() {
          Mr || (Mr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Ci(s, h) {
      {
        var y = function() {
          Ir || (Ir = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var Oi = function(s, h, y, E, k, N, P) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: h,
        ref: y,
        props: P,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function xi(s, h, y, E, k) {
      {
        var N, P = {}, x = null, G = null;
        y !== void 0 && (kr(y), x = "" + y), Si(h) && (kr(h.key), x = "" + h.key), Ei(h) && (G = h.ref, Ti(h, k));
        for (N in h)
          Be.call(h, N) && !bi.hasOwnProperty(N) && (P[N] = h[N]);
        if (s && s.defaultProps) {
          var F = s.defaultProps;
          for (N in F)
            P[N] === void 0 && (P[N] = F[N]);
        }
        if (x || G) {
          var W = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          x && wi(P, W), G && Ci(P, W);
        }
        return Oi(s, x, G, k, E, Re.current, P);
      }
    }
    var St = R.ReactCurrentOwner, Nr = R.ReactDebugCurrentFrame;
    function Ee(s) {
      if (s) {
        var h = s._owner, y = ze(s.type, s._source, h ? h.type : null);
        Nr.setExtraStackFrame(y);
      } else
        Nr.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function wt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Ar() {
      {
        if (St.current) {
          var s = X(St.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Ri(s) {
      {
        if (s !== void 0) {
          var h = s.fileName.replace(/^.*[\\\/]/, ""), y = s.lineNumber;
          return `

Check your code at ` + h + ":" + y + ".";
        }
        return "";
      }
    }
    var jr = {};
    function Pi(s) {
      {
        var h = Ar();
        if (!h) {
          var y = typeof s == "string" ? s : s.displayName || s.name;
          y && (h = `

Check the top-level render call using <` + y + ">.");
        }
        return h;
      }
    }
    function Lr(s, h) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var y = Pi(h);
        if (jr[y])
          return;
        jr[y] = !0;
        var E = "";
        s && s._owner && s._owner !== St.current && (E = " It was passed a child from " + X(s._owner.type) + "."), Ee(s), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, E), Ee(null);
      }
    }
    function Fr(s, h) {
      {
        if (typeof s != "object")
          return;
        if (bt(s))
          for (var y = 0; y < s.length; y++) {
            var E = s[y];
            wt(E) && Lr(E, h);
          }
        else if (wt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var k = b(s);
          if (typeof k == "function" && k !== s.entries)
            for (var N = k.call(s), P; !(P = N.next()).done; )
              wt(P.value) && Lr(P.value, h);
        }
      }
    }
    function Di(s) {
      {
        var h = s.type;
        if (h == null || typeof h == "string")
          return;
        var y;
        if (typeof h == "function")
          y = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === d))
          y = h.propTypes;
        else
          return;
        if (y) {
          var E = X(h);
          vi(y, s.props, "prop", E, s);
        } else if (h.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var k = X(h);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ki(s) {
      {
        for (var h = Object.keys(s.props), y = 0; y < h.length; y++) {
          var E = h[y];
          if (E !== "children" && E !== "key") {
            Ee(s), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Ee(null);
            break;
          }
        }
        s.ref !== null && (Ee(s), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    function Vr(s, h, y, E, k, N) {
      {
        var P = de(s);
        if (!P) {
          var x = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Ri(k);
          G ? x += G : x += Ar();
          var F;
          s === null ? F = "null" : bt(s) ? F = "array" : s !== void 0 && s.$$typeof === t ? (F = "<" + (X(s.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : F = typeof s, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, x);
        }
        var W = xi(s, h, y, k, N);
        if (W == null)
          return W;
        if (P) {
          var J = h.children;
          if (J !== void 0)
            if (E)
              if (bt(J)) {
                for (var Se = 0; Se < J.length; Se++)
                  Fr(J[Se], s);
                Object.freeze && Object.freeze(J);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fr(J, s);
        }
        return s === n ? ki(W) : Di(W), W;
      }
    }
    function Mi(s, h, y) {
      return Vr(s, h, y, !0);
    }
    function Ii(s, h, y) {
      return Vr(s, h, y, !1);
    }
    var Ni = Ii, Ai = Mi;
    De.Fragment = n, De.jsx = Ni, De.jsxs = Ai;
  }()), De;
}
process.env.NODE_ENV === "production" ? Nt.exports = ji() : Nt.exports = Li();
var S = Nt.exports;
const Z = "animation-all duration-200 ", Ht = "bg-orange-900 hover:bg-orange-800 ", Fi = "bg-neutral-900 hover:bg-neutral-800 ", wn = "bg-red-600 hover:bg-red-500 border border-red-300 ", Cn = "shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ", Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  animationDefault: Z,
  colorImportant: wn,
  colorPrimary: Ht,
  colorSecondary: Fi,
  shadowDefault: Cn
}, Symbol.toStringTag, { value: "Module" }));
function Vi({ className: e = "", ...t }) {
  return /* @__PURE__ */ S.jsx(
    "button",
    {
      className: "viewer__button-close absolute top-0 left-0 w-10 h-10 text-2xl rounded-tl-md md:rounded-tl-lg shadow-lg " + wn + Z + e,
      onClick: t.onClick,
      ...t,
      children: "X"
    }
  );
}
const ge = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000"
}, Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  transitionFadeIn: ge
}, Symbol.toStringTag, { value: "Module" }));
function Ut({
  children: e,
  href: t = "",
  className: r = "",
  isLarger: n = !1,
  isColored: i = !0,
  isTransitionEnabled: o = !1,
  ...l
}) {
  return /* @__PURE__ */ S.jsx(
    "button",
    {
      className: "rounded-full " + (n ? "my-4 " : "my-2 ") + (i ? Ht : "bg-neutral-800 ") + Z + r,
      ...l,
      ...o ? ge : {},
      children: /* @__PURE__ */ S.jsx(
        "a",
        {
          className: "block px-4 w-full h-full " + (n ? "p-4" : "p-2"),
          href: t,
          children: e
        }
      )
    }
  );
}
function Zs({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(Ut, { className: "w-full md:w-1/2 mr-[25%] ml-[25%]" + t, ...r, children: e });
}
function Qs({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(
    Ut,
    {
      className: "w-full " + t,
      isColored: !1,
      isLarger: !0,
      isTransitionEnabled: !0,
      ...r,
      children: e
    }
  );
}
function Wi({
  children: e,
  href: t,
  className: r = "",
  isLargeMode: n = !1,
  ...i
}) {
  return n ? r += "w-1/2 mx-auto " : r += "mx-1 lg:mx-2 ", /* @__PURE__ */ S.jsx(
    "div",
    {
      className: "rounded-full p-1 lg:p-2 px-4 mb-2 lg:mb-4 text-center " + r + Z,
      ...i,
      children: e
    }
  );
}
function el({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(Wi, { className: "cursor-pointer " + Ht + t, ...r, children: e });
}
var Yt = {}, Xt = {}, j = {}, nt = {};
(function(e) {
  function t(l, a, u) {
    var c = a.slidesToShow, f = a.currentSlide;
    return u.length > 2 * c ? l + 2 * c : f >= u.length ? u.length + l : l;
  }
  function r(l, a) {
    if (a.length > 2 * l) {
      for (var u = {}, c = a.length - 2 * l, f = a.length - c, d = c, m = 0; m < f; m++)
        u[m] = d, d++;
      var g = a.length + f, v = g + a.slice(0, 2 * l).length, p = 0;
      for (m = g; m <= v; m++)
        u[m] = p, p++;
      var b = g, R = 0;
      for (m = f; m < b; m++)
        u[m] = R, R++;
      return u;
    }
    u = {};
    var C = 3 * a.length, _ = 0;
    for (m = 0; m < C; m++)
      u[m] = _, ++_ === a.length && (_ = 0);
    return u;
  }
  function n(l, a) {
    return a.length < l ? a : a.length > 2 * l ? a.slice(a.length - 2 * l, a.length).concat(a, a.slice(0, 2 * l)) : a.concat(a, a);
  }
  function i(l, a) {
    return a.length > 2 * l ? 2 * l : a.length;
  }
  function o(l, a, u) {
    var c, f = l.currentSlide, d = l.slidesToShow, m = l.itemWidth, g = l.totalItems, v = 0, p = 0, b = f === 0, R = a.length - (a.length - 2 * d);
    return a.length < d ? (p = v = 0, b = c = !1) : a.length > 2 * d ? ((c = f >= R + a.length) && (p = -m * (v = f - a.length)), b && (p = -m * (v = R + (a.length - 2 * d)))) : ((c = f >= 2 * a.length) && (p = -m * (v = f - a.length)), b && (p = u.showDots ? -m * (v = a.length) : -m * (v = g / 3))), { isReachingTheEnd: c, isReachingTheStart: b, nextSlide: v, nextPosition: p };
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getOriginalCounterPart = t, e.getOriginalIndexLookupTableByClones = r, e.getClones = n, e.getInitialSlideInInfiniteMode = i, e.checkClonesPosition = o;
})(nt);
var Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
var $r = !1;
function zi(e, t, r, n) {
  var i = 0, o = n || r;
  return t && o && (!$r && process.env.NODE_ENV !== "production" && e[o].paritialVisibilityGutter && ($r = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), i = e[o].partialVisibilityGutter || e[o].paritialVisibilityGutter), i;
}
function Bi(e, t) {
  var r;
  return t[e] && (r = (100 / t[e].items).toFixed(1)), r;
}
function $i(e, t, r) {
  return Math.round(r / (t + (e.centerMode ? 1 : 0)));
}
Te.getPartialVisibilityGutter = zi, Te.getWidthFromDeviceType = Bi, Te.getItemClientSideWidth = $i;
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 });
var At = Te;
function qt(e) {
  var t = e.slidesToShow;
  return e.totalItems < t;
}
function Gi(e, t) {
  var r, n = e.domLoaded, i = e.slidesToShow, o = e.containerWidth, l = e.itemWidth, a = t.deviceType, u = t.responsive, c = t.ssr, f = t.partialVisbile, d = t.partialVisible, m = !!(n && i && o && l);
  c && a && !m && (r = At.getWidthFromDeviceType(a, u));
  var g = !!(c && a && !m && r);
  return { shouldRenderOnSSR: g, flexBisis: r, domFullyLoaded: m, partialVisibilityGutter: At.getPartialVisibilityGutter(u, f || d, a, e.deviceType), shouldRenderAtAll: g || m };
}
function Hi(e, t) {
  var r = t.currentSlide, n = t.slidesToShow;
  return r <= e && e < r + n;
}
function On(e, t, r) {
  var n = r || e.transform;
  return !t.infinite && e.currentSlide === 0 || qt(e) ? n : n + e.itemWidth / 2;
}
function Ui(e) {
  return !(0 < e.currentSlide);
}
function xn(e) {
  var t = e.currentSlide, r = e.totalItems;
  return !(t + e.slidesToShow < r);
}
function Rn(e, t, r, n) {
  t === void 0 && (t = 0);
  var i = e.currentSlide, o = e.slidesToShow, l = xn(e), a = !r.infinite && l, u = n || e.transform;
  if (qt(e))
    return u;
  var c = u + i * t;
  return a ? c + (e.containerWidth - (e.itemWidth - t) * o) : c;
}
function Pn(e, t) {
  return e.rtl ? -1 * t : t;
}
function Yi(e, t, r) {
  var n = t.partialVisbile, i = t.partialVisible, o = t.responsive, l = t.deviceType, a = t.centerMode, u = r || e.transform, c = At.getPartialVisibilityGutter(o, n || i, l, e.deviceType);
  return Pn(t, i || n ? Rn(e, c, t, r) : a ? On(e, t, r) : u);
}
function Xi(e, t) {
  var r = e.domLoaded, n = e.slidesToShow, i = e.containerWidth, o = e.itemWidth, l = t.deviceType, a = t.responsive, u = t.slidesToSlide || 1, c = !!(r && n && i && o);
  return t.ssr && t.deviceType && !c && Object.keys(a).forEach(function(f) {
    var d = a[f].slidesToSlide;
    l === f && d && (u = d);
  }), c && Object.keys(a).forEach(function(f) {
    var d = a[f], m = d.breakpoint, g = d.slidesToSlide, v = m.max, p = m.min;
    g && window.innerWidth >= p && window.innerWidth <= v && (u = g);
  }), u;
}
z.notEnoughChildren = qt, z.getInitialState = Gi, z.getIfSlideIsVisbile = Hi, z.getTransformForCenterMode = On, z.isInLeftEnd = Ui, z.isInRightEnd = xn, z.getTransformForPartialVsibile = Rn, z.parsePosition = Pn, z.getTransform = Yi, z.getSlidesToSlide = Xi;
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
var qi = function(e, t, r) {
  var n;
  return function() {
    var i = arguments;
    n || (e.apply(this, i), n = !0, typeof r == "function" && r(!0), setTimeout(function() {
      n = !1, typeof r == "function" && r(!1);
    }, t));
  };
};
Kt.default = qi;
var Dn = {};
(function(e) {
  function t(r, n) {
    var i = n.partialVisbile, o = n.partialVisible, l = n.centerMode, a = n.ssr, u = n.responsive;
    if ((i || o) && l)
      throw new Error("center mode can not be used at the same time with partialVisible");
    if (!u)
      throw a ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    if (u && typeof u != "object")
      throw new Error("responsive prop must be an object");
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
})(Dn);
var Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
var Ki = z;
function Ji(e, t, r) {
  r === void 0 && (r = 0);
  var n, i, o = e.slidesToShow, l = e.currentSlide, a = e.itemWidth, u = e.totalItems, c = Ki.getSlidesToSlide(e, t), f = l + 1 + r + o + (0 < r ? 0 : c);
  return i = f <= u ? -a * (n = l + r + (0 < r ? 0 : c)) : u < f && l !== u - o ? -a * (n = u - o) : n = void 0, { nextSlides: n, nextPosition: i };
}
Jt.populateNextSlides = Ji;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
var Zi = Q, Qi = z, eo = z;
function to(e, t, r) {
  r === void 0 && (r = 0);
  var n, i, o = e.currentSlide, l = e.itemWidth, a = e.slidesToShow, u = t.children, c = t.showDots, f = t.infinite, d = Qi.getSlidesToSlide(e, t), m = o - r - (0 < r ? 0 : d), g = (Zi.Children.toArray(u).length - a) % d;
  return i = 0 <= m ? (n = m, c && !f && 0 < g && eo.isInRightEnd(e) && (n = o - g), -l * n) : n = m < 0 && o !== 0 ? 0 : void 0, { nextSlides: n, nextPosition: i };
}
Zt.populatePreviousSlides = to;
var kn = {};
(function(e) {
  function t(r, n, i, o, l, a) {
    var u, c, f = r.itemWidth, d = r.slidesToShow, m = r.totalItems, g = r.currentSlide, v = n.infinite, p = !1, b = Math.round((i - o) / f), R = Math.round((o - i) / f), C = i < l;
    if (l < i && b <= d) {
      u = "right";
      var _ = Math.abs(-f * (m - d)), T = a - (o - l), w = g === m - d;
      (Math.abs(T) <= _ || w && v) && (c = T, p = !0);
    }
    return C && R <= d && (u = "left", ((T = a + (l - o)) <= 0 || g === 0 && v) && (p = !0, c = T)), { direction: u, nextPosition: c, canContinue: p };
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.populateSlidesOnMouseTouchMove = t;
})(kn);
Object.defineProperty(j, "__esModule", { value: !0 });
var Ge = nt;
j.getOriginalCounterPart = Ge.getOriginalCounterPart, j.getClones = Ge.getClones, j.checkClonesPosition = Ge.checkClonesPosition, j.getInitialSlideInInfiniteMode = Ge.getInitialSlideInInfiniteMode;
var Ot = Te;
j.getWidthFromDeviceType = Ot.getWidthFromDeviceType, j.getPartialVisibilityGutter = Ot.getPartialVisibilityGutter, j.getItemClientSideWidth = Ot.getItemClientSideWidth;
var le = z;
j.getInitialState = le.getInitialState, j.getIfSlideIsVisbile = le.getIfSlideIsVisbile, j.getTransformForCenterMode = le.getTransformForCenterMode, j.getTransformForPartialVsibile = le.getTransformForPartialVsibile, j.isInLeftEnd = le.isInLeftEnd, j.isInRightEnd = le.isInRightEnd, j.notEnoughChildren = le.notEnoughChildren, j.getSlidesToSlide = le.getSlidesToSlide;
var ro = Kt;
j.throttle = ro.default;
var no = Dn;
j.throwError = no.default;
var io = Jt;
j.populateNextSlides = io.populateNextSlides;
var oo = Zt;
j.populatePreviousSlides = oo.populatePreviousSlides;
var ao = kn;
j.populateSlidesOnMouseTouchMove = ao.populateSlidesOnMouseTouchMove;
var it = {}, so = A && A.__extends || /* @__PURE__ */ function() {
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
Object.defineProperty(it, "__esModule", { value: !0 });
var lo = Q;
function uo(e) {
  return "clientY" in e;
}
it.isMouseMoveEvent = uo;
var co = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return so(t, e), t;
}(lo.Component);
it.default = co;
var Qt = {}, er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
var fo = nt, ho = z;
function po(e, t, r, n) {
  var i = {}, o = ho.getSlidesToSlide(t, r);
  return Array(e).fill(0).forEach(function(l, a) {
    var u = fo.getOriginalCounterPart(a, t, n);
    if (a === 0)
      i[0] = u;
    else {
      var c = i[a - 1] + o;
      i[a] = c;
    }
  }), i;
}
er.getLookupTableForNextSlides = po;
Object.defineProperty(Qt, "__esModule", { value: !0 });
var ke = Q, mo = nt, vo = er, Gr = z, yo = function(e) {
  var t = e.props, r = e.state, n = e.goToSlide, i = e.getState, o = t.showDots, l = t.customDot, a = t.dotListClass, u = t.infinite, c = t.children;
  if (!o || Gr.notEnoughChildren(r))
    return null;
  var f, d = r.currentSlide, m = r.slidesToShow, g = Gr.getSlidesToSlide(r, t), v = ke.Children.toArray(c);
  f = u ? Math.ceil(v.length / g) : Math.ceil((v.length - m) / g) + 1;
  var p = vo.getLookupTableForNextSlides(f, r, t, v), b = mo.getOriginalIndexLookupTableByClones(m, v), R = b[d];
  return ke.createElement("ul", { className: "react-multi-carousel-dot-list " + a }, Array(f).fill(0).map(function(C, _) {
    var T, w;
    if (u) {
      w = p[_];
      var D = b[w];
      T = R === D || D <= R && R < D + g;
    } else {
      var M = v.length - m, I = _ * g;
      T = (w = M < I ? M : I) === d || w < d && d < w + g && d < v.length - m;
    }
    return l ? ke.cloneElement(l, { index: _, active: T, key: _, onClick: function() {
      return n(w);
    }, carouselState: i() }) : ke.createElement("li", { "data-index": _, key: _, className: "react-multi-carousel-dot " + (T ? "react-multi-carousel-dot--active" : "") }, ke.createElement("button", { "aria-label": "Go to slide " + (_ + 1), onClick: function() {
      return n(w);
    } }));
  }));
};
Qt.default = yo;
var ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
var Qe = Q, go = function(e) {
  var t = e.customLeftArrow, r = e.getState, n = e.previous, i = e.disabled, o = e.rtl;
  if (t)
    return Qe.cloneElement(t, { onClick: function() {
      return n();
    }, carouselState: r(), disabled: i, rtl: o });
  var l = o ? "rtl" : "";
  return Qe.createElement("button", { "aria-label": "Go to previous slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + l, onClick: function() {
    return n();
  }, type: "button", disabled: i });
};
ot.LeftArrow = go;
var _o = function(e) {
  var t = e.customRightArrow, r = e.getState, n = e.next, i = e.disabled, o = e.rtl;
  if (t)
    return Qe.cloneElement(t, { onClick: function() {
      return n();
    }, carouselState: r(), disabled: i, rtl: o });
  var l = o ? "rtl" : "";
  return Qe.createElement("button", { "aria-label": "Go to next slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + l, onClick: function() {
    return n();
  }, type: "button", disabled: i });
};
ot.RightArrow = _o;
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
var He = Q, xt = j, bo = function(e) {
  var t = e.props, r = e.state, n = e.goToSlide, i = e.clones, o = e.notEnoughChildren, l = r.itemWidth, a = t.children, u = t.infinite, c = t.itemClass, f = t.itemAriaLabel, d = t.partialVisbile, m = t.partialVisible, g = xt.getInitialState(r, t), v = g.flexBisis, p = g.shouldRenderOnSSR, b = g.domFullyLoaded, R = g.partialVisibilityGutter;
  return g.shouldRenderAtAll ? (d && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), He.createElement(He.Fragment, null, (u ? i : He.Children.toArray(a)).map(function(C, _) {
    return He.createElement("li", { key: _, "data-index": _, onClick: function() {
      t.focusOnSelect && n(_);
    }, "aria-hidden": xt.getIfSlideIsVisbile(_, r) ? "false" : "true", "aria-label": f || (C.props.ariaLabel ? C.props.ariaLabel : null), style: { flex: p ? "1 0 " + v + "%" : "auto", position: "relative", width: b ? ((d || m) && R && !o ? l - R : l) + "px" : "auto" }, className: "react-multi-carousel-item " + (xt.getIfSlideIsVisbile(_, r) ? "react-multi-carousel-item--active" : "") + " " + c }, C);
  }))) : null;
};
tr.default = bo;
var Eo = A && A.__extends || /* @__PURE__ */ function() {
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
Object.defineProperty(Xt, "__esModule", { value: !0 });
var B = Q, L = j, he = it, So = Qt, Hr = ot, To = tr, Ue = z, re = 400, Ur = "transform 400ms ease-in-out", wo = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.containerRef = B.createRef(), n.listRef = B.createRef(), n.state = { itemWidth: 0, slidesToShow: 0, currentSlide: 0, totalItems: B.Children.count(r.children), deviceType: "", domLoaded: !1, transform: 0, containerWidth: 0 }, n.onResize = n.onResize.bind(n), n.handleDown = n.handleDown.bind(n), n.handleMove = n.handleMove.bind(n), n.handleOut = n.handleOut.bind(n), n.onKeyUp = n.onKeyUp.bind(n), n.handleEnter = n.handleEnter.bind(n), n.setIsInThrottle = n.setIsInThrottle.bind(n), n.next = L.throttle(n.next.bind(n), r.transitionDuration || re, n.setIsInThrottle), n.previous = L.throttle(n.previous.bind(n), r.transitionDuration || re, n.setIsInThrottle), n.goToSlide = L.throttle(n.goToSlide.bind(n), r.transitionDuration || re, n.setIsInThrottle), n.onMove = !1, n.initialX = 0, n.lastX = 0, n.isAnimationAllowed = !1, n.direction = "", n.initialY = 0, n.isInThrottle = !1, n.transformPlaceHolder = 0, n;
  }
  return Eo(t, e), t.prototype.resetTotalItems = function() {
    var r = this, n = B.Children.count(this.props.children), i = L.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, n));
    this.setState({ totalItems: n, currentSlide: i }, function() {
      r.setContainerAndItemWidth(r.state.slidesToShow, !0);
    });
  }, t.prototype.setIsInThrottle = function(r) {
    r === void 0 && (r = !1), this.isInThrottle = r;
  }, t.prototype.setTransformDirectly = function(r, n) {
    var i = this.props.additionalTransfrom;
    this.transformPlaceHolder = r;
    var o = Ue.getTransform(this.state, this.props, this.transformPlaceHolder);
    this.listRef && this.listRef.current && (this.setAnimationDirectly(n), this.listRef.current.style.transform = "translate3d(" + (o + i) + "px,0,0)");
  }, t.prototype.setAnimationDirectly = function(r) {
    this.listRef && this.listRef.current && (this.listRef.current.style.transition = r ? this.props.customTransition || Ur : "none");
  }, t.prototype.componentDidMount = function() {
    this.setState({ domLoaded: !0 }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, t.prototype.setClones = function(r, n, i, o) {
    var l = this;
    o === void 0 && (o = !1), this.isAnimationAllowed = !1;
    var a = B.Children.toArray(this.props.children), u = L.getInitialSlideInInfiniteMode(r || this.state.slidesToShow, a), c = L.getClones(this.state.slidesToShow, a), f = a.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
    this.setState({ totalItems: c.length, currentSlide: i && !o ? f : u }, function() {
      l.correctItemsPosition(n || l.state.itemWidth);
    });
  }, t.prototype.setItemsToShow = function(r, n) {
    var i = this, o = this.props.responsive;
    Object.keys(o).forEach(function(l) {
      var a = o[l], u = a.breakpoint, c = a.items, f = u.max, d = u.min, m = [window.innerWidth];
      window.screen && window.screen.width && m.push(window.screen.width);
      var g = Math.min.apply(Math, m);
      d <= g && g <= f && (i.setState({ slidesToShow: c, deviceType: l }), i.setContainerAndItemWidth(c, r, n));
    });
  }, t.prototype.setContainerAndItemWidth = function(r, n, i) {
    var o = this;
    if (this.containerRef && this.containerRef.current) {
      var l = this.containerRef.current.offsetWidth, a = L.getItemClientSideWidth(this.props, r, l);
      this.setState({ containerWidth: l, itemWidth: a }, function() {
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
    var i = this, o = r.keyBoardControl, l = r.autoPlay, a = r.children, u = n.containerWidth, c = n.domLoaded, f = n.currentSlide;
    if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== u && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
      i.setItemsToShow(!0);
    }, this.props.transitionDuration || re)), o && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !o && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), l && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), l || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), a.length !== this.props.children.length ? t.clonesTimeout = setTimeout(function() {
      i.props.infinite ? i.setClones(i.state.slidesToShow, i.state.itemWidth, !0, !0) : i.resetTotalItems();
    }, this.props.transitionDuration || re) : this.props.infinite && this.state.currentSlide !== f && this.correctClonesPosition({ domLoaded: c }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && L.isInRightEnd(this.state)) {
      var d = this.props.transitionDuration || re;
      t.isInThrottleTimeout = setTimeout(function() {
        i.setIsInThrottle(!1), i.resetAutoplayInterval(), i.goToSlide(0, void 0, !!i.props.rewindWithAnimation);
      }, d + this.props.autoPlaySpeed);
    }
  }, t.prototype.correctClonesPosition = function(r) {
    var n = this, i = r.domLoaded, o = B.Children.toArray(this.props.children), l = L.checkClonesPosition(this.state, o, this.props), a = l.isReachingTheEnd, u = l.isReachingTheStart, c = l.nextSlide, f = l.nextPosition;
    this.state.domLoaded && i && (a || u) && (this.isAnimationAllowed = !1, t.transformTimeout = setTimeout(function() {
      n.setState({ transform: f, currentSlide: c });
    }, this.props.transitionDuration || re));
  }, t.prototype.next = function(r) {
    var n = this;
    r === void 0 && (r = 0);
    var i = this.props, o = i.afterChange, l = i.beforeChange;
    if (!L.notEnoughChildren(this.state)) {
      var a = L.populateNextSlides(this.state, this.props, r), u = a.nextSlides, c = a.nextPosition, f = this.state.currentSlide;
      u !== void 0 && c !== void 0 && (typeof l == "function" && l(u, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: c, currentSlide: u }, function() {
        typeof o == "function" && (t.afterChangeTimeout = setTimeout(function() {
          o(f, n.getState());
        }, n.props.transitionDuration || re));
      }));
    }
  }, t.prototype.previous = function(r) {
    var n = this;
    r === void 0 && (r = 0);
    var i = this.props, o = i.afterChange, l = i.beforeChange;
    if (!L.notEnoughChildren(this.state)) {
      var a = L.populatePreviousSlides(this.state, this.props, r), u = a.nextSlides, c = a.nextPosition;
      if (u !== void 0 && c !== void 0) {
        var f = this.state.currentSlide;
        typeof l == "function" && l(u, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: c, currentSlide: u }, function() {
          typeof o == "function" && (t.afterChangeTimeout2 = setTimeout(function() {
            o(f, n.getState());
          }, n.props.transitionDuration || re));
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
    return { clientX: Ue.parsePosition(this.props, n), clientY: Ue.parsePosition(this.props, i) };
  }, t.prototype.handleDown = function(r) {
    if (!(!he.isMouseMoveEvent(r) && !this.props.swipeable || he.isMouseMoveEvent(r) && !this.props.draggable || this.isInThrottle)) {
      var n = this.getCords(he.isMouseMoveEvent(r) ? r : r.touches[0]), i = n.clientX, o = n.clientY;
      this.onMove = !0, this.initialX = i, this.initialY = o, this.lastX = i, this.isAnimationAllowed = !1;
    }
  }, t.prototype.handleMove = function(r) {
    if (!(!he.isMouseMoveEvent(r) && !this.props.swipeable || he.isMouseMoveEvent(r) && !this.props.draggable || L.notEnoughChildren(this.state))) {
      var n = this.getCords(he.isMouseMoveEvent(r) ? r : r.touches[0]), i = n.clientX, o = n.clientY, l = this.initialX - i, a = this.initialY - o;
      if (this.onMove) {
        if (!(Math.abs(l) > Math.abs(a)))
          return;
        var u = L.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, i, this.transformPlaceHolder), c = u.direction, f = u.nextPosition, d = u.canContinue;
        c && (this.direction = c, d && f !== void 0 && this.setTransformDirectly(f)), this.lastX = i;
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
    var n = r.getBoundingClientRect(), i = n.top, o = i === void 0 ? 0 : i, l = n.left, a = l === void 0 ? 0 : l, u = n.bottom, c = u === void 0 ? 0 : u, f = n.right, d = f === void 0 ? 0 : f;
    return 0 <= o && 0 <= a && c <= (window.innerHeight || document.documentElement.clientHeight) && d <= (window.innerWidth || document.documentElement.clientWidth);
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
    he.isMouseMoveEvent(r) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0);
  }, t.prototype.goToSlide = function(r, n, i) {
    var o = this;
    if (i === void 0 && (i = !0), !this.isInThrottle) {
      var l = this.state.itemWidth, a = this.props, u = a.afterChange, c = a.beforeChange, f = this.state.currentSlide;
      typeof c != "function" || n && (typeof n != "object" || n.skipBeforeChange) || c(r, this.getState()), this.isAnimationAllowed = i, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ currentSlide: r, transform: -l * r }, function() {
        o.props.infinite && o.correctClonesPosition({ domLoaded: !0 }), typeof u != "function" || n && (typeof n != "object" || n.skipAfterChange) || (t.afterChangeTimeout3 = setTimeout(function() {
          u(f, o.getState());
        }, o.props.transitionDuration || re));
      });
    }
  }, t.prototype.getState = function() {
    return this.state;
  }, t.prototype.renderLeftArrow = function(r) {
    var n = this, i = this.props, o = i.customLeftArrow, l = i.rtl;
    return B.createElement(Hr.LeftArrow, { customLeftArrow: o, getState: function() {
      return n.getState();
    }, previous: this.previous, disabled: r, rtl: l });
  }, t.prototype.renderRightArrow = function(r) {
    var n = this, i = this.props, o = i.customRightArrow, l = i.rtl;
    return B.createElement(Hr.RightArrow, { customRightArrow: o, getState: function() {
      return n.getState();
    }, next: this.next, disabled: r, rtl: l });
  }, t.prototype.renderButtonGroups = function() {
    var r = this, n = this.props.customButtonGroup;
    return n ? B.cloneElement(n, { previous: function() {
      return r.previous();
    }, next: function() {
      return r.next();
    }, goToSlide: function(i, o) {
      return r.goToSlide(i, o);
    }, carouselState: this.getState() }) : null;
  }, t.prototype.renderDotsList = function() {
    var r = this;
    return B.createElement(So.default, { state: this.state, props: this.props, goToSlide: this.goToSlide, getState: function() {
      return r.getState();
    } });
  }, t.prototype.renderCarouselItems = function() {
    var r = [];
    if (this.props.infinite) {
      var n = B.Children.toArray(this.props.children);
      r = L.getClones(this.state.slidesToShow, n);
    }
    return B.createElement(To.default, { clones: r, goToSlide: this.goToSlide, state: this.state, notEnoughChildren: L.notEnoughChildren(this.state), props: this.props });
  }, t.prototype.render = function() {
    var r = this.props, n = r.deviceType, i = r.arrows, o = r.renderArrowsWhenDisabled, l = r.removeArrowOnDeviceType, a = r.infinite, u = r.containerClass, c = r.sliderClass, f = r.customTransition, d = r.additionalTransfrom, m = r.renderDotsOutside, g = r.renderButtonGroupOutside, v = r.className, p = r.rtl;
    process.env.NODE_ENV !== "production" && L.throwError(this.state, this.props);
    var b = L.getInitialState(this.state, this.props), R = b.shouldRenderOnSSR, C = b.shouldRenderAtAll, _ = L.isInLeftEnd(this.state), T = L.isInRightEnd(this.state), w = i && !(l && (n && -1 < l.indexOf(n) || this.state.deviceType && -1 < l.indexOf(this.state.deviceType))) && !L.notEnoughChildren(this.state) && C, D = !a && _, M = !a && T, I = Ue.getTransform(this.state, this.props);
    return B.createElement(B.Fragment, null, B.createElement("div", { className: "react-multi-carousel-list " + u + " " + v, dir: p ? "rtl" : "ltr", ref: this.containerRef }, B.createElement("ul", { ref: this.listRef, className: "react-multi-carousel-track " + c, style: { transition: this.isAnimationAllowed ? f || Ur : "none", overflow: R ? "hidden" : "unset", transform: "translate3d(" + (I + d) + "px,0,0)" }, onMouseMove: this.handleMove, onMouseDown: this.handleDown, onMouseUp: this.handleOut, onMouseEnter: this.handleEnter, onMouseLeave: this.handleOut, onTouchStart: this.handleDown, onTouchMove: this.handleMove, onTouchEnd: this.handleOut }, this.renderCarouselItems()), w && (!D || o) && this.renderLeftArrow(D), w && (!M || o) && this.renderRightArrow(M), C && !g && this.renderButtonGroups(), C && !m && this.renderDotsList()), C && m && this.renderDotsList(), C && g && this.renderButtonGroups());
  }, t.defaultProps = { slidesToSlide: 1, infinite: !1, draggable: !0, swipeable: !0, arrows: !0, renderArrowsWhenDisabled: !1, containerClass: "", sliderClass: "", itemClass: "", keyBoardControl: !0, autoPlaySpeed: 3e3, showDots: !1, renderDotsOutside: !1, renderButtonGroupOutside: !1, minimumTouchDrag: 80, className: "", dotListClass: "", focusOnSelect: !1, centerMode: !1, additionalTransfrom: 0, pauseOnHover: !0, shouldResetAutoplay: !0, rewind: !1, rtl: !1, rewindWithAnimation: !1 }, t;
}(B.Component);
Xt.default = wo;
Object.defineProperty(Yt, "__esModule", { value: !0 });
var Co = Xt;
Yt.default = Co.default;
var Oo = Yt;
const xo = /* @__PURE__ */ Tn(Oo), Yr = {
  responsive: {
    breakpoint: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  }
};
function jt() {
  let e = document.querySelectorAll(".react-multi-carousel-item"), t = document.querySelectorAll(".react-multi-carousel-item:not(.react-multi-carousel-item--active)");
  const r = 1, n = 0.2;
  for (let i = 0; i < e.length; i++)
    e[i].style.opacity = r;
  for (let i = 0; i < t.length; i++)
    t[i].style.opacity = n;
}
const Ro = {
  lg: {
    breakpoint: {
      max: 99999,
      min: Yr.responsive.breakpoint.lg
    },
    items: 2
  },
  sm: {
    breakpoint: {
      max: Yr.responsive.breakpoint.lg,
      min: 0
    },
    items: 1
  }
};
function Po({ children: e, ...t }) {
  return window.addEventListener("resize", jt), /* @__PURE__ */ S.jsx(
    xo,
    {
      responsive: Ro,
      partialVisible: !0,
      containerClass: "carousel",
      itemClass: "carousel__item",
      keyBoardControl: !0,
      pauseOnHover: !0,
      afterChange: function(r, n) {
        jt();
      },
      ...t,
      children: e
    }
  );
}
function Do({
  src: e,
  title: t = "",
  alt: r = "",
  target: n,
  className: i = "",
  classNameImage: o = "",
  isEnhancedMode: l = !0,
  adjustSize: a = !0,
  ...u
}) {
  return o += l ? "w-[95%] hover:w-full shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] " : "", /* @__PURE__ */ S.jsx("div", { className: "flex justify-center " + Z + i + (a ? "w-full" : ""), ...u, children: /* @__PURE__ */ S.jsx(
    "img",
    {
      src: e,
      className: Z + o,
      title: t,
      alt: r
    }
  ) });
}
function tl({
  images: e,
  srcBase: t,
  ...r
}) {
  return /* @__PURE__ */ S.jsx(Po, { ...r, children: e.map(
    (n, i) => /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: Z + " m-1",
        onLoad: jt,
        children: [
          /* @__PURE__ */ S.jsx(
            Do,
            {
              src: t + "/" + n.link,
              alt: n.alt || n.title || "",
              title: n.title || n.alt || ""
            }
          ),
          /* @__PURE__ */ S.jsx("p", { className: "mt-2 text-center", children: n.title || "" })
        ]
      },
      i
    )
  ) });
}
function rr({
  children: e,
  className: t = "",
  transitionEnabled: r = !1,
  ...n
}) {
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      className: "py-4 " + t,
      ...n,
      ...r ? ge : {},
      children: e
    }
  );
}
function rl({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(
    "p",
    {
      className: "py-2 lg:py-4 " + t,
      ...ge,
      ...r,
      children: e
    }
  );
}
function nl({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(
    "section",
    {
      className: "my-16 sm:my-24 lg:my-32 " + t,
      ...r,
      children: e
    }
  );
}
function il({
  children: e,
  href: t,
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ S.jsx(
    "a",
    {
      href: t,
      className: r,
      ...n,
      children: /* @__PURE__ */ S.jsx("p", { className: "hover:scale-105 w-full h-full inline-block text-orange-200 hover:text-orange-400 " + Z, children: e })
    }
  );
}
function ko({
  children: e,
  forInput: t,
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ S.jsx(
    "label",
    {
      for: t,
      className: "mr-2 " + r,
      ...n,
      children: e
    }
  );
}
function Mo({
  children: e,
  type: t,
  id: r,
  name: n,
  className: i,
  ...o
}) {
  return /* @__PURE__ */ S.jsxs(rr, { children: [
    /* @__PURE__ */ S.jsx(ko, { children: e }),
    /* @__PURE__ */ S.jsx(Mo, {})
  ] });
}
function ol({
  children: e,
  type: t,
  id: r,
  name: n,
  className: i = "",
  ...o
}) {
  return /* @__PURE__ */ S.jsx(
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
function al({
  href: e,
  src: t,
  title: r = "",
  alt: n = "",
  target: i = "_blank",
  className: o = "",
  classNameImage: l = "",
  zoomDisabled: a = !1,
  ...u
}) {
  return /* @__PURE__ */ S.jsx("div", { className: "w-full flex justify-center " + Z + o, ...u, children: /* @__PURE__ */ S.jsxs(
    "a",
    {
      href: e,
      className: "relative w-[95%] hover:bg-neutral-500 " + Cn + Z + (a ? "" : "hover:w-full ") + l,
      target: i,
      children: [
        /* @__PURE__ */ S.jsx("div", { className: "image-mask absolute inset-0 w-full h-full hover:bg-black/50 " + Z, children: /* @__PURE__ */ S.jsx("p", { className: "image-mask__info hidden", children: "Cliquez pour y accéder !" }) }),
        /* @__PURE__ */ S.jsx(
          "img",
          {
            src: t,
            title: r,
            alt: n
          }
        )
      ]
    }
  ) });
}
function sl({
  size: e = 4,
  className: t = "",
  isVisible: r = !1,
  ...n
}) {
  return /* @__PURE__ */ S.jsx("div", { className: "separator my-" + e + ` ${r ? "" : "opacity-0"}` + t, ...n });
}
var Mn = {}, nr = {}, ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
var Xr = "html", qr = "head", Ye = "body", Io = /<([a-zA-Z]+[0-9]?)/, Kr = /<head[^]*>/i, Jr = /<body[^]*>/i, et = function(e, t) {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
}, Lt = function(e, t) {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
}, Zr = typeof window == "object" && window.DOMParser;
if (typeof Zr == "function") {
  var No = new Zr(), Ao = "text/html";
  Lt = function(e, t) {
    return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), No.parseFromString(e, Ao);
  }, et = Lt;
}
if (typeof document == "object" && document.implementation) {
  var Xe = document.implementation.createHTMLDocument();
  et = function(e, t) {
    if (t) {
      var r = Xe.documentElement.querySelector(t);
      return r && (r.innerHTML = e), Xe;
    }
    return Xe.documentElement.innerHTML = e, Xe;
  };
}
var qe = typeof document == "object" && document.createElement("template"), Ft;
qe && qe.content && (Ft = function(e) {
  return qe.innerHTML = e, qe.content.childNodes;
});
function jo(e) {
  var t, r, n = e.match(Io), i = n && n[1] ? n[1].toLowerCase() : "";
  switch (i) {
    case Xr: {
      var o = Lt(e);
      if (!Kr.test(e)) {
        var l = o.querySelector(qr);
        (t = l == null ? void 0 : l.parentNode) === null || t === void 0 || t.removeChild(l);
      }
      if (!Jr.test(e)) {
        var l = o.querySelector(Ye);
        (r = l == null ? void 0 : l.parentNode) === null || r === void 0 || r.removeChild(l);
      }
      return o.querySelectorAll(Xr);
    }
    case qr:
    case Ye: {
      var a = et(e).querySelectorAll(i);
      return Jr.test(e) && Kr.test(e) ? a[0].parentNode.childNodes : a;
    }
    default: {
      if (Ft)
        return Ft(e);
      var l = et(e, Ye).querySelector(Ye);
      return l.childNodes;
    }
  }
}
ir.default = jo;
var we = {}, or = {}, ar = {};
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
})(ar);
var O = {}, ce = A && A.__extends || /* @__PURE__ */ function() {
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
}(), Ie = A && A.__assign || function() {
  return Ie = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ie.apply(this, arguments);
};
Object.defineProperty(O, "__esModule", { value: !0 });
O.cloneNode = O.hasChildren = O.isDocument = O.isDirective = O.isComment = O.isText = O.isCDATA = O.isTag = O.Element = O.Document = O.CDATA = O.NodeWithChildren = O.ProcessingInstruction = O.Comment = O.Text = O.DataNode = O.Node = void 0;
var Y = ar, sr = (
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
      return t === void 0 && (t = !1), lr(this, t);
    }, e;
  }()
);
O.Node = sr;
var at = (
  /** @class */
  function(e) {
    ce(t, e);
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
  }(sr)
);
O.DataNode = at;
var In = (
  /** @class */
  function(e) {
    ce(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Y.ElementType.Text, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(at)
);
O.Text = In;
var Nn = (
  /** @class */
  function(e) {
    ce(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Y.ElementType.Comment, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(at)
);
O.Comment = Nn;
var An = (
  /** @class */
  function(e) {
    ce(t, e);
    function t(r, n) {
      var i = e.call(this, n) || this;
      return i.name = r, i.type = Y.ElementType.Directive, i;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(at)
);
O.ProcessingInstruction = An;
var st = (
  /** @class */
  function(e) {
    ce(t, e);
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
  }(sr)
);
O.NodeWithChildren = st;
var jn = (
  /** @class */
  function(e) {
    ce(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Y.ElementType.CDATA, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(st)
);
O.CDATA = jn;
var Ln = (
  /** @class */
  function(e) {
    ce(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Y.ElementType.Root, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(st)
);
O.Document = Ln;
var Fn = (
  /** @class */
  function(e) {
    ce(t, e);
    function t(r, n, i, o) {
      i === void 0 && (i = []), o === void 0 && (o = r === "script" ? Y.ElementType.Script : r === "style" ? Y.ElementType.Style : Y.ElementType.Tag);
      var l = e.call(this, i) || this;
      return l.name = r, l.attribs = n, l.type = o, l;
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
  }(st)
);
O.Element = Fn;
function Vn(e) {
  return (0, Y.isTag)(e);
}
O.isTag = Vn;
function Wn(e) {
  return e.type === Y.ElementType.CDATA;
}
O.isCDATA = Wn;
function zn(e) {
  return e.type === Y.ElementType.Text;
}
O.isText = zn;
function Bn(e) {
  return e.type === Y.ElementType.Comment;
}
O.isComment = Bn;
function $n(e) {
  return e.type === Y.ElementType.Directive;
}
O.isDirective = $n;
function Gn(e) {
  return e.type === Y.ElementType.Root;
}
O.isDocument = Gn;
function Lo(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
O.hasChildren = Lo;
function lr(e, t) {
  t === void 0 && (t = !1);
  var r;
  if (zn(e))
    r = new In(e.data);
  else if (Bn(e))
    r = new Nn(e.data);
  else if (Vn(e)) {
    var n = t ? Rt(e.children) : [], i = new Fn(e.name, Ie({}, e.attribs), n);
    n.forEach(function(u) {
      return u.parent = i;
    }), e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = Ie({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = Ie({}, e["x-attribsPrefix"])), r = i;
  } else if (Wn(e)) {
    var n = t ? Rt(e.children) : [], o = new jn(n);
    n.forEach(function(c) {
      return c.parent = o;
    }), r = o;
  } else if (Gn(e)) {
    var n = t ? Rt(e.children) : [], l = new Ln(n);
    n.forEach(function(c) {
      return c.parent = l;
    }), e["x-mode"] && (l["x-mode"] = e["x-mode"]), r = l;
  } else if ($n(e)) {
    var a = new An(e.name, e.data);
    e["x-name"] != null && (a["x-name"] = e["x-name"], a["x-publicId"] = e["x-publicId"], a["x-systemId"] = e["x-systemId"]), r = a;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
O.cloneNode = lr;
function Rt(e) {
  for (var t = e.map(function(n) {
    return lr(n, !0);
  }), r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r];
  return t;
}
(function(e) {
  var t = A && A.__createBinding || (Object.create ? function(a, u, c, f) {
    f === void 0 && (f = c);
    var d = Object.getOwnPropertyDescriptor(u, c);
    (!d || ("get" in d ? !u.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
      return u[c];
    } }), Object.defineProperty(a, f, d);
  } : function(a, u, c, f) {
    f === void 0 && (f = c), a[f] = u[c];
  }), r = A && A.__exportStar || function(a, u) {
    for (var c in a)
      c !== "default" && !Object.prototype.hasOwnProperty.call(u, c) && t(u, a, c);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var n = ar, i = O;
  r(O, e);
  var o = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, l = (
    /** @class */
    function() {
      function a(u, c, f) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof c == "function" && (f = c, c = o), typeof u == "object" && (c = u, u = void 0), this.callback = u ?? null, this.options = c ?? o, this.elementCB = f ?? null;
      }
      return a.prototype.onparserinit = function(u) {
        this.parser = u;
      }, a.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, a.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, a.prototype.onerror = function(u) {
        this.handleCallback(u);
      }, a.prototype.onclosetag = function() {
        this.lastNode = null;
        var u = this.tagStack.pop();
        this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u);
      }, a.prototype.onopentag = function(u, c) {
        var f = this.options.xmlMode ? n.ElementType.Tag : void 0, d = new i.Element(u, c, void 0, f);
        this.addNode(d), this.tagStack.push(d);
      }, a.prototype.ontext = function(u) {
        var c = this.lastNode;
        if (c && c.type === n.ElementType.Text)
          c.data += u, this.options.withEndIndices && (c.endIndex = this.parser.endIndex);
        else {
          var f = new i.Text(u);
          this.addNode(f), this.lastNode = f;
        }
      }, a.prototype.oncomment = function(u) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += u;
          return;
        }
        var c = new i.Comment(u);
        this.addNode(c), this.lastNode = c;
      }, a.prototype.oncommentend = function() {
        this.lastNode = null;
      }, a.prototype.oncdatastart = function() {
        var u = new i.Text(""), c = new i.CDATA([u]);
        this.addNode(c), u.parent = c, this.lastNode = u;
      }, a.prototype.oncdataend = function() {
        this.lastNode = null;
      }, a.prototype.onprocessinginstruction = function(u, c) {
        var f = new i.ProcessingInstruction(u, c);
        this.addNode(f);
      }, a.prototype.handleCallback = function(u) {
        if (typeof this.callback == "function")
          this.callback(u, this.dom);
        else if (u)
          throw u;
      }, a.prototype.addNode = function(u) {
        var c = this.tagStack[this.tagStack.length - 1], f = c.children[c.children.length - 1];
        this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), c.children.push(u), f && (u.prev = f, f.next = u), u.parent = c, this.lastNode = null;
      }, a;
    }()
  );
  e.DomHandler = l, e.default = l;
})(or);
var Hn = {};
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
})(Hn);
Object.defineProperty(we, "__esModule", { value: !0 });
we.formatDOM = we.formatAttributes = void 0;
var Ke = or, Fo = Hn;
function Vo(e) {
  return Fo.CASE_SENSITIVE_TAG_NAMES_MAP[e];
}
function Un(e) {
  for (var t = {}, r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t[i.name] = i.value;
  }
  return t;
}
we.formatAttributes = Un;
function Wo(e) {
  e = e.toLowerCase();
  var t = Vo(e);
  return t || e;
}
function Yn(e, t, r) {
  t === void 0 && (t = null);
  for (var n = [], i, o = 0, l = e.length; o < l; o++) {
    var a = e[o];
    switch (a.nodeType) {
      case 1: {
        var u = Wo(a.nodeName);
        i = new Ke.Element(u, Un(a.attributes)), i.children = Yn(
          // template children are on content
          u === "template" ? a.content.childNodes : a.childNodes,
          i
        );
        break;
      }
      case 3:
        i = new Ke.Text(a.nodeValue);
        break;
      case 8:
        i = new Ke.Comment(a.nodeValue);
        break;
      default:
        continue;
    }
    var c = n[o - 1] || null;
    c && (c.next = i), i.parent = t, i.prev = c, i.next = null, n.push(i);
  }
  return r && (i = new Ke.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), i.next = n[0] || null, i.parent = t, n.unshift(i), n[1] && (n[1].prev = n[0])), n;
}
we.formatDOM = Yn;
var zo = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nr, "__esModule", { value: !0 });
var Bo = zo(ir), $o = we, Go = /<(![a-zA-Z\s]+)>/;
function Ho(e) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  var t = e.match(Go), r = t ? t[1] : void 0;
  return (0, $o.formatDOM)((0, Bo.default)(e), null, r);
}
nr.default = Ho;
var lt = {}, ee = {}, ut = {}, Uo = 0;
ut.SAME = Uo;
var Yo = 1;
ut.CAMELCASE = Yo;
ut.possibleStandardNames = {
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
const Xn = 0, fe = 1, ct = 2, ft = 3, ur = 4, qn = 5, Kn = 6;
function Xo(e) {
  return $.hasOwnProperty(e) ? $[e] : null;
}
function H(e, t, r, n, i, o, l) {
  this.acceptsBooleans = t === ct || t === ft || t === ur, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
const $ = {}, qo = [
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
qo.forEach((e) => {
  $[e] = new H(
    e,
    Xn,
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
  $[e] = new H(
    e,
    fe,
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
  $[e] = new H(
    e,
    ct,
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
  $[e] = new H(
    e,
    ct,
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
  $[e] = new H(
    e,
    ft,
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
  $[e] = new H(
    e,
    ft,
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
  $[e] = new H(
    e,
    ur,
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
  $[e] = new H(
    e,
    Kn,
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
  $[e] = new H(
    e,
    qn,
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
const cr = /[\-\:]([a-z])/g, fr = (e) => e[1].toUpperCase();
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
  const t = e.replace(cr, fr);
  $[t] = new H(
    t,
    fe,
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
  const t = e.replace(cr, fr);
  $[t] = new H(
    t,
    fe,
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
  const t = e.replace(cr, fr);
  $[t] = new H(
    t,
    fe,
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
  $[e] = new H(
    e,
    fe,
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
const Ko = "xlinkHref";
$[Ko] = new H(
  "xlinkHref",
  fe,
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
  $[e] = new H(
    e,
    fe,
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
  CAMELCASE: Jo,
  SAME: Zo,
  possibleStandardNames: Qr
} = ut, Qo = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ea = Qo + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ta = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + ea + "]*$")
), ra = Object.keys(
  Qr
).reduce((e, t) => {
  const r = Qr[t];
  return r === Zo ? e[t] = t : r === Jo ? e[t.toLowerCase()] = t : e[t] = r, e;
}, {});
ee.BOOLEAN = ft;
ee.BOOLEANISH_STRING = ct;
ee.NUMERIC = qn;
ee.OVERLOADED_BOOLEAN = ur;
ee.POSITIVE_NUMERIC = Kn;
ee.RESERVED = Xn;
ee.STRING = fe;
ee.getPropertyInfo = Xo;
ee.isCustomAttribute = ta;
ee.possibleStandardNames = ra;
var dr = {}, hr = {}, pr = {}, en = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, na = /\n/g, ia = /^\s*/, oa = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, aa = /^:\s*/, sa = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, la = /^[;\s]*/, ua = /^\s+|\s+$/g, ca = `
`, tn = "/", rn = "*", me = "", fa = "comment", da = "declaration", ha = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var r = 1, n = 1;
  function i(v) {
    var p = v.match(na);
    p && (r += p.length);
    var b = v.lastIndexOf(ca);
    n = ~b ? v.length - b : n + v.length;
  }
  function o() {
    var v = { line: r, column: n };
    return function(p) {
      return p.position = new l(v), c(), p;
    };
  }
  function l(v) {
    this.start = v, this.end = { line: r, column: n }, this.source = t.source;
  }
  l.prototype.content = e;
  function a(v) {
    var p = new Error(
      t.source + ":" + r + ":" + n + ": " + v
    );
    if (p.reason = v, p.filename = t.source, p.line = r, p.column = n, p.source = e, !t.silent)
      throw p;
  }
  function u(v) {
    var p = v.exec(e);
    if (p) {
      var b = p[0];
      return i(b), e = e.slice(b.length), p;
    }
  }
  function c() {
    u(ia);
  }
  function f(v) {
    var p;
    for (v = v || []; p = d(); )
      p !== !1 && v.push(p);
    return v;
  }
  function d() {
    var v = o();
    if (!(tn != e.charAt(0) || rn != e.charAt(1))) {
      for (var p = 2; me != e.charAt(p) && (rn != e.charAt(p) || tn != e.charAt(p + 1)); )
        ++p;
      if (p += 2, me === e.charAt(p - 1))
        return a("End of comment missing");
      var b = e.slice(2, p - 2);
      return n += 2, i(b), e = e.slice(p), n += 2, v({
        type: fa,
        comment: b
      });
    }
  }
  function m() {
    var v = o(), p = u(oa);
    if (p) {
      if (d(), !u(aa))
        return a("property missing ':'");
      var b = u(sa), R = v({
        type: da,
        property: nn(p[0].replace(en, me)),
        value: b ? nn(b[0].replace(en, me)) : me
      });
      return u(la), R;
    }
  }
  function g() {
    var v = [];
    f(v);
    for (var p; p = m(); )
      p !== !1 && (v.push(p), f(v));
    return v;
  }
  return c(), g();
};
function nn(e) {
  return e ? e.replace(ua, me) : me;
}
var pa = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(pr, "__esModule", { value: !0 });
var ma = pa(ha);
function va(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var n = (0, ma.default)(e), i = typeof t == "function";
  return n.forEach(function(o) {
    if (o.type === "declaration") {
      var l = o.property, a = o.value;
      i ? t(l, a, o) : a && (r = r || {}, r[l] = a);
    }
  }), r;
}
pr.default = va;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.camelCase = void 0;
var ya = /^--[a-zA-Z0-9-]+$/, ga = /-([a-z])/g, _a = /^[^-]+$/, ba = /^-(webkit|moz|ms|o|khtml)-/, Ea = /^-(ms)-/, Sa = function(e) {
  return !e || _a.test(e) || ya.test(e);
}, Ta = function(e, t) {
  return t.toUpperCase();
}, on = function(e, t) {
  return "".concat(t, "-");
}, wa = function(e, t) {
  return t === void 0 && (t = {}), Sa(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Ea, on) : e = e.replace(ba, on), e.replace(ga, Ta));
};
dt.camelCase = wa;
var Ca = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(hr, "__esModule", { value: !0 });
var Oa = Ca(pr), xa = dt;
function Ra(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, Oa.default)(e, function(n, i) {
    n && i && (r[(0, xa.camelCase)(n, t)] = i);
  }), r;
}
hr.default = Ra;
(function(e) {
  var t = A && A.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = e.setStyleProp = e.isCustomComponent = void 0;
  var r = Q, n = t(hr), i = /* @__PURE__ */ new Set([
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph"
  ]);
  function o(f, d) {
    return f.includes("-") ? !i.has(f) : !!(d && typeof d.is == "string");
  }
  e.isCustomComponent = o;
  var l = {
    reactCompat: !0
  };
  function a(f, d) {
    if (typeof f == "string") {
      if (!f.trim()) {
        d.style = {};
        return;
      }
      try {
        d.style = (0, n.default)(f, l);
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
  var u = function(f) {
    return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(f.name);
  };
  e.canTextBeChildOfNode = u;
  var c = function(f) {
    return f;
  };
  e.returnFirstArg = c;
})(dr);
Object.defineProperty(lt, "__esModule", { value: !0 });
var Me = ee, an = dr, Pa = ["checked", "value"], Da = ["input", "select", "textarea"], ka = {
  reset: !0,
  submit: !0
};
function Ma(e, t) {
  e === void 0 && (e = {});
  var r = {}, n = !!(e.type && ka[e.type]);
  for (var i in e) {
    var o = e[i];
    if ((0, Me.isCustomAttribute)(i)) {
      r[i] = o;
      continue;
    }
    var l = i.toLowerCase(), a = sn(l);
    if (a) {
      var u = (0, Me.getPropertyInfo)(a);
      switch (Pa.includes(a) && Da.includes(t) && !n && (a = sn("default" + l)), r[a] = o, u && u.type) {
        case Me.BOOLEAN:
          r[a] = !0;
          break;
        case Me.OVERLOADED_BOOLEAN:
          o === "" && (r[a] = !0);
          break;
      }
      continue;
    }
    an.PRESERVE_CUSTOM_ATTRIBUTES && (r[i] = o);
  }
  return (0, an.setStyleProp)(e.style, r), r;
}
lt.default = Ma;
function sn(e) {
  return Me.possibleStandardNames[e];
}
var mr = {}, Ia = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(mr, "__esModule", { value: !0 });
var Pt = Q, Na = Ia(lt), Ne = dr, Aa = {
  cloneElement: Pt.cloneElement,
  createElement: Pt.createElement,
  isValidElement: Pt.isValidElement
};
function Jn(e, t) {
  t === void 0 && (t = {});
  for (var r = [], n = typeof t.replace == "function", i = t.transform || Ne.returnFirstArg, o = t.library || Aa, l = o.cloneElement, a = o.createElement, u = o.isValidElement, c = e.length, f = 0; f < c; f++) {
    var d = e[f];
    if (n) {
      var m = t.replace(d, f);
      if (u(m)) {
        c > 1 && (m = l(m, {
          key: m.key || f
        })), r.push(i(m, d, f));
        continue;
      }
    }
    if (d.type === "text") {
      var g = !d.data.trim().length;
      if (g && d.parent && !(0, Ne.canTextBeChildOfNode)(d.parent) || t.trim && g)
        continue;
      r.push(i(d.data, d, f));
      continue;
    }
    var v = d, p = {};
    ja(v) ? ((0, Ne.setStyleProp)(v.attribs.style, v.attribs), p = v.attribs) : v.attribs && (p = (0, Na.default)(v.attribs, v.name));
    var b = void 0;
    switch (d.type) {
      case "script":
      case "style":
        d.children[0] && (p.dangerouslySetInnerHTML = {
          __html: d.children[0].data
        });
        break;
      case "tag":
        d.name === "textarea" && d.children[0] ? p.defaultValue = d.children[0].data : d.children && d.children.length && (b = Jn(d.children, t));
        break;
      default:
        continue;
    }
    c > 1 && (p.key = f), r.push(i(a(d.name, p, b), d, f));
  }
  return r.length === 1 ? r[0] : r;
}
mr.default = Jn;
function ja(e) {
  return Ne.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, Ne.isCustomComponent)(e.name, e.attribs);
}
(function(e) {
  var t = A && A.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0;
  var r = t(nr);
  e.htmlToDOM = r.default;
  var n = t(lt);
  e.attributesToProps = n.default;
  var i = t(mr);
  e.domToReact = i.default;
  var o = or;
  Object.defineProperty(e, "Comment", { enumerable: !0, get: function() {
    return o.Comment;
  } }), Object.defineProperty(e, "Element", { enumerable: !0, get: function() {
    return o.Element;
  } }), Object.defineProperty(e, "ProcessingInstruction", { enumerable: !0, get: function() {
    return o.ProcessingInstruction;
  } }), Object.defineProperty(e, "Text", { enumerable: !0, get: function() {
    return o.Text;
  } });
  var l = { lowerCaseAttributeNames: !1 };
  function a(u, c) {
    if (typeof u != "string")
      throw new TypeError("First argument must be a string");
    return u ? (0, i.default)((0, r.default)(u, (c == null ? void 0 : c.htmlparser2) || l), c) : [];
  }
  e.default = a;
})(Mn);
const ln = /* @__PURE__ */ Tn(Mn), xe = ln.default || ln;
function ll({
  children: e,
  className: t = "",
  transitionEnabled: r = !0,
  ...n
}) {
  return /* @__PURE__ */ S.jsx(
    "h1",
    {
      className: "text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl uppercase my-8 sm:my-12 lg:my-16 text-center " + t,
      ...r ? ge : {},
      ...n,
      children: xe(e)
    }
  );
}
function ul({
  children: e,
  className: t = "",
  transitionEnabled: r = !0,
  ...n
}) {
  return /* @__PURE__ */ S.jsx(
    "h2",
    {
      className: "text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl my-6 sm:my-10 lg:my-12 text-center uppercase " + t,
      ...n,
      ...r ? ge : {},
      children: xe(e)
    }
  );
}
function cl({
  children: e,
  className: t = "",
  isSmallerMode: r = !1,
  ...n
}) {
  return r ? t += "text-lg xs:text-xl lg:text-xl" : t += "text-xl xs:text-2xl lg:text-2xl", /* @__PURE__ */ S.jsx(
    "h3",
    {
      className: "my-2 sm:my-4 lg:my-4 text-center uppercase " + t,
      ...n,
      children: xe(e)
    }
  );
}
function fl({
  children: e,
  className: t = "",
  isMarginEnabled: r = !0,
  ...n
}) {
  const i = r ? "my-2 sm:my-4 " : "";
  return /* @__PURE__ */ S.jsx(
    "h4",
    {
      className: "text-md xs:text-lg md:text-xl uppercase " + i + t,
      ...n,
      children: xe(e)
    }
  );
}
function dl({
  children: e,
  className: t = "",
  isMarginEnabled: r = !0,
  ...n
}) {
  const i = r ? "my-2 sm:my-4 " : "";
  return /* @__PURE__ */ S.jsx(
    "h5",
    {
      className: "text-md uppercase " + i + t,
      ...n,
      children: xe(e)
    }
  );
}
function hl({
  children: e,
  className: t = "",
  isMarginEnabled: r = !0,
  ...n
}) {
  const i = r ? "my-2 sm:my-4 " : "";
  return /* @__PURE__ */ S.jsx(
    "h6",
    {
      className: "text-md " + i + t,
      ...n,
      children: xe(e)
    }
  );
}
function La(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Fa(e) {
  return La(e) && "type" in e && typeof e.type == "string";
}
var Zn = Symbol.for("immer-nothing"), un = Symbol.for("immer-draftable"), q = Symbol.for("immer-state"), Va = process.env.NODE_ENV !== "production" ? [
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
function U(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Va[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ce = Object.getPrototypeOf;
function ue(e) {
  return !!e && !!e[q];
}
function se(e) {
  var t;
  return e ? Qn(e) || Array.isArray(e) || !!e[un] || !!((t = e.constructor) != null && t[un]) || pt(e) || mt(e) : !1;
}
var Wa = Object.prototype.constructor.toString();
function Qn(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ce(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Wa;
}
function Ae(e, t) {
  ht(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function ht(e) {
  const t = e[q];
  return t ? t.type_ : Array.isArray(e) ? 1 : pt(e) ? 2 : mt(e) ? 3 : 0;
}
function Vt(e, t) {
  return ht(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ei(e, t, r) {
  const n = ht(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function za(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function pt(e) {
  return e instanceof Map;
}
function mt(e) {
  return e instanceof Set;
}
function pe(e) {
  return e.copy_ || e.base_;
}
function Wt(e, t) {
  if (pt(e))
    return new Map(e);
  if (mt(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Qn(e))
    return Ce(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[q];
  let n = Reflect.ownKeys(r);
  for (let i = 0; i < n.length; i++) {
    const o = n[i], l = r[o];
    l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (r[o] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: l.enumerable,
      value: e[o]
    });
  }
  return Object.create(Ce(e), r);
}
function vr(e, t = !1) {
  return vt(e) || ue(e) || !se(e) || (ht(e) > 1 && (e.set = e.add = e.clear = e.delete = Ba), Object.freeze(e), t && Ae(e, (r, n) => vr(n, !0))), e;
}
function Ba() {
  U(2);
}
function vt(e) {
  return Object.isFrozen(e);
}
var $a = {};
function ye(e) {
  const t = $a[e];
  return t || U(0, e), t;
}
var je;
function ti() {
  return je;
}
function Ga(e, t) {
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
function cn(e, t) {
  t && (ye("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function zt(e) {
  Bt(e), e.drafts_.forEach(Ha), e.drafts_ = null;
}
function Bt(e) {
  e === je && (je = e.parent_);
}
function fn(e) {
  return je = Ga(je, e);
}
function Ha(e) {
  const t = e[q];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function dn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[q].modified_ && (zt(t), U(4)), se(e) && (e = tt(t, e), t.parent_ || rt(t, e)), t.patches_ && ye("Patches").generateReplacementPatches_(
    r[q].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = tt(t, r, []), zt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Zn ? e : void 0;
}
function tt(e, t, r) {
  if (vt(t))
    return t;
  const n = t[q];
  if (!n)
    return Ae(
      t,
      (i, o) => hn(e, n, t, i, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return rt(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i, l = !1;
    n.type_ === 3 && (o = new Set(i), i.clear(), l = !0), Ae(
      o,
      (a, u) => hn(e, n, i, a, u, r, l)
    ), rt(e, i, !1), r && e.patches_ && ye("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function hn(e, t, r, n, i, o, l) {
  if (process.env.NODE_ENV !== "production" && i === r && U(5), ue(i)) {
    const a = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Vt(t.assigned_, n) ? o.concat(n) : void 0, u = tt(e, i, a);
    if (ei(r, n, u), ue(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    l && r.add(i);
  if (se(i) && !vt(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    tt(e, i), (!t || !t.scope_.parent_) && rt(e, i);
  }
}
function rt(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && vr(t, r);
}
function Ua(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ti(),
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
  let i = n, o = yr;
  r && (i = [n], o = Le);
  const { revoke: l, proxy: a } = Proxy.revocable(i, o);
  return n.draft_ = a, n.revoke_ = l, a;
}
var yr = {
  get(e, t) {
    if (t === q)
      return e;
    const r = pe(e);
    if (!Vt(r, t))
      return Ya(e, r, t);
    const n = r[t];
    return e.finalized_ || !se(n) ? n : n === Dt(e.base_, t) ? (kt(e), e.copy_[t] = Gt(n, e)) : n;
  },
  has(e, t) {
    return t in pe(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(pe(e));
  },
  set(e, t, r) {
    const n = ri(pe(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Dt(pe(e), t), o = i == null ? void 0 : i[q];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (za(r, i) && (r !== void 0 || Vt(e.base_, t)))
        return !0;
      kt(e), $t(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Dt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, kt(e), $t(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = pe(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    U(11);
  },
  getPrototypeOf(e) {
    return Ce(e.base_);
  },
  setPrototypeOf() {
    U(12);
  }
}, Le = {};
Ae(yr, (e, t) => {
  Le[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Le.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && U(13), Le.set.call(this, e, t, void 0);
};
Le.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && U(14), yr.set.call(this, e[0], t, r, e[0]);
};
function Dt(e, t) {
  const r = e[q];
  return (r ? pe(r) : e)[t];
}
function Ya(e, t, r) {
  var i;
  const n = ri(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function ri(e, t) {
  if (!(t in e))
    return;
  let r = Ce(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Ce(r);
  }
}
function $t(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && $t(e.parent_));
}
function kt(e) {
  e.copy_ || (e.copy_ = Wt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Xa = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const l = this;
        return function(u = o, ...c) {
          return l.produce(u, (f) => r.call(this, f, ...c));
        };
      }
      typeof r != "function" && U(6), n !== void 0 && typeof n != "function" && U(7);
      let i;
      if (se(t)) {
        const o = fn(this), l = Gt(t, void 0);
        let a = !0;
        try {
          i = r(l), a = !1;
        } finally {
          a ? zt(o) : Bt(o);
        }
        return cn(o, n), dn(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Zn && (i = void 0), this.autoFreeze_ && vr(i, !0), n) {
          const o = [], l = [];
          ye("Patches").generateReplacementPatches_(t, i, o, l), n(o, l);
        }
        return i;
      } else
        U(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (l, ...a) => this.produceWithPatches(l, (u) => t(u, ...a));
      let n, i;
      return [this.produce(t, r, (l, a) => {
        n = l, i = a;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    se(e) || U(8), ue(e) && (e = ni(e));
    const t = fn(this), r = Gt(e, void 0);
    return r[q].isManual_ = !0, Bt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[q];
    (!r || !r.isManual_) && U(9);
    const { scope_: n } = r;
    return cn(n, t), dn(void 0, n);
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
    const n = ye("Patches").applyPatches_;
    return ue(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Gt(e, t) {
  const r = pt(e) ? ye("MapSet").proxyMap_(e, t) : mt(e) ? ye("MapSet").proxySet_(e, t) : Ua(e, t);
  return (t ? t.scope_ : ti()).drafts_.push(r), r;
}
function ni(e) {
  return ue(e) || U(10, e), ii(e);
}
function ii(e) {
  if (!se(e) || vt(e))
    return e;
  const t = e[q];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Wt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Wt(e, !0);
  return Ae(r, (n, i) => {
    ei(r, n, ii(i));
  }), t && (t.finalized_ = !1), r;
}
var K = new Xa(), oi = K.produce;
K.produceWithPatches.bind(
  K
);
K.setAutoFreeze.bind(K);
K.setUseStrictShallowCopy.bind(K);
K.applyPatches.bind(K);
K.createDraft.bind(K);
K.finishDraft.bind(K);
var qa = (e, t, r) => {
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
}, Ka = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: l } = e, a = n(() => ({}), ...i);
  if (!(a.apply(null, o) === a.apply(null, l))) {
    let c;
    try {
      throw new Error();
    } catch (f) {
      ({ stack: c } = f);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: o,
        secondInputs: l,
        stack: c
      }
    );
  }
}, Ja = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Za(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Qa(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function es(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var pn = (e) => Array.isArray(e) ? e : [e];
function ts(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return es(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function mn(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var rs = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...Ja,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: qa
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Ka
    }
  };
}, ns = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, is = typeof WeakRef < "u" ? WeakRef : ns, os = 0, vn = 1;
function Je() {
  return {
    s: os,
    v: void 0,
    o: null,
    p: null
  };
}
function gr(e, t = {}) {
  let r = Je();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function l() {
    var d;
    let a = r;
    const { length: u } = arguments;
    for (let m = 0, g = u; m < g; m++) {
      const v = arguments[m];
      if (typeof v == "function" || typeof v == "object" && v !== null) {
        let p = a.o;
        p === null && (a.o = p = /* @__PURE__ */ new WeakMap());
        const b = p.get(v);
        b === void 0 ? (a = Je(), p.set(v, a)) : a = b;
      } else {
        let p = a.p;
        p === null && (a.p = p = /* @__PURE__ */ new Map());
        const b = p.get(v);
        b === void 0 ? (a = Je(), p.set(v, a)) : a = b;
      }
    }
    const c = a;
    let f;
    if (a.s === vn ? f = a.v : (f = e.apply(null, arguments), o++), c.s = vn, n) {
      const m = ((d = i == null ? void 0 : i.deref) == null ? void 0 : d.call(i)) ?? i;
      m != null && n(m, f) && (f = m, o !== 0 && o--), i = typeof f == "object" && f !== null || typeof f == "function" ? new is(f) : f;
    }
    return c.v = f, f;
  }
  return l.clearCache = () => {
    r = Je(), l.resetResultsCount();
  }, l.resultsCount = () => o, l.resetResultsCount = () => {
    o = 0;
  }, l;
}
function ai(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, l = 0, a, u = {}, c = i.pop();
    typeof c == "object" && (u = c, c = i.pop()), Za(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const f = {
      ...r,
      ...u
    }, {
      memoize: d,
      memoizeOptions: m = [],
      argsMemoize: g = gr,
      argsMemoizeOptions: v = [],
      devModeChecks: p = {}
    } = f, b = pn(m), R = pn(v), C = ts(i), _ = d(function() {
      return o++, c.apply(
        null,
        arguments
      );
    }, ...b);
    let T = !0;
    const w = g(function() {
      l++;
      const M = mn(
        C,
        arguments
      );
      if (a = _.apply(null, M), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: I, inputStabilityCheck: te } = rs(T, p);
        if (I.shouldRun && I.run(
          c,
          M,
          a
        ), te.shouldRun) {
          const de = mn(
            C,
            arguments
          );
          te.run(
            { inputSelectorResults: M, inputSelectorResultsCopy: de },
            { memoize: d, memoizeOptions: b },
            arguments
          );
        }
        T && (T = !1);
      }
      return a;
    }, ...R);
    return Object.assign(w, {
      resultFunc: c,
      memoizedResultFunc: _,
      dependencies: C,
      dependencyRecomputations: () => l,
      resetDependencyRecomputations: () => {
        l = 0;
      },
      lastResult: () => a,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: d,
      argsMemoize: g
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var as = /* @__PURE__ */ ai(gr), ss = Object.assign(
  (e, t = as) => {
    Qa(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (o) => e[o]
    );
    return t(
      n,
      (...o) => o.reduce((l, a, u) => (l[r[u]] = a, l), {})
    );
  },
  { withTypes: () => ss }
), ls = (...e) => {
  const t = ai(...e), r = Object.assign((...n) => {
    const i = t(...n), o = (l, ...a) => i(ue(l) ? ni(l) : l, ...a);
    return Object.assign(o, i), o;
  }, {
    withTypes: () => r
  });
  return r;
};
ls(gr);
function Oe(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? V(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Fa(n) && n.type === e, r;
}
function yn(e) {
  return se(e) ? oi(e, () => {
  }) : e;
}
function gn(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? V(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
process.env.NODE_ENV;
function si(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, l) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? V(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? V(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof o == "string" ? o : o.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? V(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(process.env.NODE_ENV === "production" ? V(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = l, i;
    },
    addMatcher(o, l) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? V(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: o,
        reducer: l
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? V(31) : "`builder.addDefaultCase` can only be called once");
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function us(e) {
  return typeof e == "function";
}
function cs(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? V(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = si(t), o;
  if (us(e))
    o = () => yn(e());
  else {
    const a = yn(e);
    o = () => a;
  }
  function l(a = o(), u) {
    let c = [r[u.type], ...n.filter(({
      matcher: f
    }) => f(u)).map(({
      reducer: f
    }) => f)];
    return c.filter((f) => !!f).length === 0 && (c = [i]), c.reduce((f, d) => {
      if (d)
        if (ue(f)) {
          const g = d(f, u);
          return g === void 0 ? f : g;
        } else {
          if (se(f))
            return oi(f, (m) => d(m, u));
          {
            const m = d(f, u);
            if (m === void 0) {
              if (f === null)
                return f;
              throw new Error(process.env.NODE_ENV === "production" ? V(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        }
      return f;
    }, a);
  }
  return l.getInitialState = o, l;
}
var fs = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ds = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += fs[Math.random() * 64 | 0];
  return t;
}, hs = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ps(e, t) {
  return `${e}/${t}`;
}
function ms({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[hs];
  return function(i) {
    const {
      name: o,
      reducerPath: l = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? V(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(gs()) : i.reducers) || {}, u = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(_, T) {
        const w = typeof _ == "string" ? _ : _.type;
        if (!w)
          throw new Error(process.env.NODE_ENV === "production" ? V(12) : "`context.addCase` cannot be called with an empty action type");
        if (w in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? V(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + w);
        return c.sliceCaseReducersByType[w] = T, f;
      },
      addMatcher(_, T) {
        return c.sliceMatchers.push({
          matcher: _,
          reducer: T
        }), f;
      },
      exposeAction(_, T) {
        return c.actionCreators[_] = T, f;
      },
      exposeCaseReducer(_, T) {
        return c.sliceCaseReducersByName[_] = T, f;
      }
    };
    u.forEach((_) => {
      const T = a[_], w = {
        reducerName: _,
        type: ps(o, _),
        createNotation: typeof i.reducers == "function"
      };
      bs(T) ? Ss(w, T, f, t) : _s(w, T, f);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? V(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [_ = {}, T = [], w = void 0] = typeof i.extraReducers == "function" ? si(i.extraReducers) : [i.extraReducers], D = {
        ..._,
        ...c.sliceCaseReducersByType
      };
      return cs(i.initialState, (M) => {
        for (let I in D)
          M.addCase(I, D[I]);
        for (let I of c.sliceMatchers)
          M.addMatcher(I.matcher, I.reducer);
        for (let I of T)
          M.addMatcher(I.matcher, I.reducer);
        w && M.addDefaultCase(w);
      });
    }
    const m = (_) => _, g = /* @__PURE__ */ new Map();
    let v;
    function p(_, T) {
      return v || (v = d()), v(_, T);
    }
    function b() {
      return v || (v = d()), v.getInitialState();
    }
    function R(_, T = !1) {
      function w(M) {
        let I = M[_];
        if (typeof I > "u") {
          if (T)
            I = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? V(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return I;
      }
      function D(M = m) {
        const I = gn(g, T, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return gn(I, M, {
          insert: () => {
            const te = {};
            for (const [de, ne] of Object.entries(i.selectors ?? {}))
              te[de] = vs(ne, M, b, T);
            return te;
          }
        });
      }
      return {
        reducerPath: _,
        getSelectors: D,
        get selectors() {
          return D(w);
        },
        selectSlice: w
      };
    }
    const C = {
      name: o,
      reducer: p,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: b,
      ...R(l),
      injectInto(_, {
        reducerPath: T,
        ...w
      } = {}) {
        const D = T ?? l;
        return _.inject({
          reducerPath: D,
          reducer: p
        }, w), {
          ...C,
          ...R(D, !0)
        };
      }
    };
    return C;
  };
}
function vs(e, t, r, n) {
  function i(o, ...l) {
    let a = t(o);
    if (typeof a > "u") {
      if (n)
        a = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? V(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...l);
  }
  return i.unwrapped = e, i;
}
var ys = /* @__PURE__ */ ms();
function gs() {
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
function _s({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, l;
  if ("reducer" in n) {
    if (r && !Es(n))
      throw new Error(process.env.NODE_ENV === "production" ? V(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, l = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, l ? Oe(e, l) : Oe(e));
}
function bs(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Es(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ss({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? V(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: l,
    pending: a,
    rejected: u,
    settled: c,
    options: f
  } = r, d = i(e, o, f);
  n.exposeAction(t, d), l && n.addCase(d.fulfilled, l), a && n.addCase(d.pending, a), u && n.addCase(d.rejected, u), c && n.addMatcher(d.settled, c), n.exposeCaseReducer(t, {
    fulfilled: l || Ze,
    pending: a || Ze,
    rejected: u || Ze,
    settled: c || Ze
  });
}
function Ze() {
}
var Ts = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? V(32) : `${t} is not a function`);
}, _r = "listenerMiddleware", ws = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = Oe(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? V(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Ts(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, Cs = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = ws(e);
  return {
    id: ds(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? V(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Cs
}), Os = Object.assign(Oe(`${_r}/add`), {
  withTypes: () => Os
});
Oe(`${_r}/removeAll`);
var xs = Object.assign(Oe(`${_r}/remove`), {
  withTypes: () => xs
});
function V(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Rs = {
  name: "",
  isOpen: !1,
  item: null
}, li = ys({
  name: "viewer",
  initialState: Rs,
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
}), { setIsOpen: Ps, setContent: Ds, setName: pl } = li.actions;
li.reducer;
var Mt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function ks() {
  if (_n)
    return Mt;
  _n = 1;
  var e = Q;
  function t(u, c) {
    return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, l = e.useMemo, a = e.useDebugValue;
  return Mt.useSyncExternalStoreWithSelector = function(u, c, f, d, m) {
    var g = i(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else
      v = g.current;
    g = l(function() {
      function b(w) {
        if (!R) {
          if (R = !0, C = w, w = d(w), m !== void 0 && v.hasValue) {
            var D = v.value;
            if (m(D, w))
              return _ = D;
          }
          return _ = w;
        }
        if (D = _, r(C, w))
          return D;
        var M = d(w);
        return m !== void 0 && m(D, M) ? D : (C = w, _ = M);
      }
      var R = !1, C, _, T = f === void 0 ? null : f;
      return [function() {
        return b(c());
      }, T === null ? void 0 : function() {
        return b(T());
      }];
    }, [c, f, d, m]);
    var p = n(u, g[0], g[1]);
    return o(function() {
      v.hasValue = !0, v.value = p;
    }, [p]), a(p), p;
  }, Mt;
}
var It = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Ms() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Q;
    function t(c, f) {
      return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, l = e.useMemo, a = e.useDebugValue;
    function u(c, f, d, m, g) {
      var v = i(null), p;
      v.current === null ? (p = {
        hasValue: !1,
        value: null
      }, v.current = p) : p = v.current;
      var b = l(function() {
        var T = !1, w, D, M = function(ne) {
          if (!T) {
            T = !0, w = ne;
            var _e = m(ne);
            if (g !== void 0 && p.hasValue) {
              var X = p.value;
              if (g(X, _e))
                return D = X, X;
            }
            return D = _e, _e;
          }
          var ie = w, oe = D;
          if (r(ie, ne))
            return oe;
          var be = m(ne);
          return g !== void 0 && g(oe, be) ? oe : (w = ne, D = be, be);
        }, I = d === void 0 ? null : d, te = function() {
          return M(f());
        }, de = I === null ? void 0 : function() {
          return M(I());
        };
        return [te, de];
      }, [f, d, m, g]), R = b[0], C = b[1], _ = n(c, R, C);
      return o(function() {
        p.hasValue = !0, p.value = _;
      }, [_]), a(_), _;
    }
    It.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), It;
}
process.env.NODE_ENV === "production" ? ks() : Ms();
var ve = (
  // prettier-ignore
  // @ts-ignore
  "default" in Ct ? Ct.default : Ct
), En = Symbol.for("react-redux-context"), Sn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Is() {
  if (!ve.createContext)
    return {};
  const e = Sn[En] ?? (Sn[En] = /* @__PURE__ */ new Map());
  let t = e.get(ve.createContext);
  return t || (t = ve.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ve.createContext, t)), t;
}
var Fe = /* @__PURE__ */ Is();
function ui(e = Fe) {
  return function() {
    const r = ve.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Ns = /* @__PURE__ */ ui(), As = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
As ? ve.useLayoutEffect : ve.useEffect;
function ci(e = Fe) {
  const t = e === Fe ? Ns : (
    // @ts-ignore
    ui(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var js = /* @__PURE__ */ ci();
function Ls(e = Fe) {
  const t = e === Fe ? js : ci(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Fs = /* @__PURE__ */ Ls();
function ml({ children: e, item: t, ...r }) {
  const n = Fs();
  function i() {
    document.querySelector(".viewer").classList.add("anim-to-left-fade-out"), setTimeout(() => {
      n(Ps(!1)), n(Ds(t));
    }, 1e3);
  }
  function o(l) {
    setTimeout(() => {
      document.querySelector(l).classList.remove("anim-to-left-fade-in");
    }, 1e3);
  }
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: "viewer fixed z-40 top-[2%] md:top-[5%] left-[2%] md:left-[5%] w-[96%] h-[96%] md:w-[90%] md:h-[90%] overflow-hidden anim-to-left-fade-in anim-duration--fast border bg-black rounded-md md:rounded-lg",
      onLoad: () => o(".viewer"),
      ...r,
      children: [
        /* @__PURE__ */ S.jsx(rr, { className: "viewer__content absolute inset-0 overflow-y-auto h-full w-full my-4 sm:my-0 p-2 xs:p-4 lg:p-8", children: e }),
        /* @__PURE__ */ S.jsx(Vi, { onClick: i })
      ]
    }
  );
}
function vl({ links: e, className: t, ...r }) {
  return /* @__PURE__ */ S.jsx(
    rr,
    {
      ...r,
      className: "flex justify-center",
      children: e == null ? void 0 : e.map((n, i) => /* @__PURE__ */ S.jsx(
        Ut,
        {
          href: n[1],
          className: "mr-2 lg:mr-4",
          children: n[0]
        },
        i
      ))
    }
  );
}
function yl({
  image: e,
  link: t,
  title: r = "",
  alt: n = "",
  target: i = "",
  imgClassName: o = "",
  className: l = "",
  ...a
}) {
  return /* @__PURE__ */ S.jsx(
    "a",
    {
      className: "w-12 mx-4 ease-in-out hover:scale-110 hover-darken " + Z + l,
      href: t,
      target: i,
      ...a,
      children: /* @__PURE__ */ S.jsx(
        "img",
        {
          src: e,
          className: "w-full " + o,
          title: r,
          alt: n
        }
      )
    }
  );
}
function gl({
  src: e,
  title: t = "",
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      className: "relative w-full pt-[56.25%] " + r,
      ...ge,
      ...n,
      children: /* @__PURE__ */ S.jsx(
        "iframe",
        {
          src: "https://www.youtube.com/embed/QeMCiqunJ3w?si=AOy-HxSN18v304B7",
          title: t,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0,
          className: "absolute inset-0 w-full h-full"
        }
      )
    }
  );
}
function _l() {
  return /* @__PURE__ */ S.jsx(
    "img",
    {
      src: "/img/misc/spinner-new.gif",
      alt: "loading spinner",
      className: "w-8 my-4 mx-auto"
    }
  );
}
function Vs(e) {
  return e.length === 0;
}
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isEmpty: Vs
}, Symbol.toStringTag, { value: "Module" }));
function Ws(e, t) {
  const r = document.getElementById(t);
  r && e.observe(r);
}
function zs(e, t) {
  const r = document.getElementById(t);
  r && e.unobserve(r);
}
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  observeDOM: Ws,
  unobserveDOM: zs
}, Symbol.toStringTag, { value: "Module" }));
function Bs(e, t = 0) {
  return Math.floor(Math.random() * (e - t)) + t;
}
function $s(e) {
  const t = document.querySelector(e);
  t && window.scrollTo({
    top: t.offsetTop - 80,
    behavior: "smooth"
  });
}
function Gs(e) {
  return 'url("' + e + '")';
}
function Hs(e) {
  return e === "" ? "javascript:void(0);" : e;
}
const Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adaptHref: Hs,
  getImageUrl: Gs,
  getRandomInt: Bs,
  scrollToAnchor: $s
}, Symbol.toStringTag, { value: "Module" }));
function Us(e) {
  return e === 0 || e === "" || e === void 0;
}
function Ys(e) {
  return e === void 0;
}
function Xs(e) {
  return e = e.split("-"), new Date(e[0], e[1] - 1).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long"
  });
}
const Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDateTextYYYYMM: Xs,
  isNull: Ys,
  isNullOrZero: Us
}, Symbol.toStringTag, { value: "Module" }));
export {
  bl as ArrayHelper,
  Vi as ButtonClose,
  vl as ButtonGroupLink,
  Ut as ButtonLink,
  Zs as ButtonLinkBig,
  Qs as ButtonLinkXL,
  el as ButtonNoLink,
  Po as CarouselBase,
  tl as CarouselDefault,
  rr as DivDefault,
  Mo as GroupInputLabel,
  gl as IFrame,
  yl as IconLink,
  Do as Image,
  al as ImageLink,
  ol as InputText,
  ko as Label,
  _l as LoadingSpinner,
  El as ObserverHelper,
  rl as Paragraph,
  Js as PropsAssets,
  Wi as Section,
  nl as SectionBig,
  sl as Separator,
  Ks as StyleAssets,
  il as TextLink,
  ll as TitleH1,
  ul as TitleH2,
  cl as TitleH3,
  fl as TitleH4,
  dl as TitleH5,
  hl as TitleH6,
  Sl as Util,
  Tl as VariableHelper,
  ml as Viewer,
  li as viewerSlice
};
