import * as Ct from "react";
import Z from "react";
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Li() {
  if (Vr)
    return Pe;
  Vr = 1;
  var e = Z, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var $r;
function Fi() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Z, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, p = "@@iterator";
    function b(s) {
      if (s === null || typeof s != "object")
        return null;
      var h = v && s[v] || s[p];
      return typeof h == "function" ? h : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(s) {
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
        var M = y.map(function(P) {
          return String(P);
        });
        M.unshift("Warning: " + h), Function.prototype.apply.call(console[s], console, M);
      }
    }
    var S = !1, T = !1, D = !1, I = !1, N = !1, te;
    te = Symbol.for("react.module.reference");
    function de(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === o || N || s === i || s === c || s === f || I || s === g || S || T || D || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === d || s.$$typeof === l || s.$$typeof === a || s.$$typeof === u || // This needs to include all possible module reference object
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
      if (typeof s.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
            var k = s, M = k._payload, P = k._init;
            try {
              return X(P(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, oe = 0, be, gr, _r, br, Er, Sr, Tr;
    function wr() {
    }
    wr.__reactDisabledLog = !0;
    function di() {
      {
        if (oe === 0) {
          be = console.log, gr = console.info, _r = console.warn, br = console.error, Er = console.group, Sr = console.groupCollapsed, Tr = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: wr,
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
    function hi() {
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
              value: gr
            }),
            warn: ie({}, s, {
              value: _r
            }),
            error: ie({}, s, {
              value: br
            }),
            group: ie({}, s, {
              value: Er
            }),
            groupCollapsed: ie({}, s, {
              value: Sr
            }),
            groupEnd: ie({}, s, {
              value: Tr
            })
          });
        }
        oe < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var _t = !1, $e;
    {
      var pi = typeof WeakMap == "function" ? WeakMap : Map;
      $e = new pi();
    }
    function Cr(s, h) {
      if (!s || _t)
        return "";
      {
        var y = $e.get(s);
        if (y !== void 0)
          return y;
      }
      var E;
      _t = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = yt.current, yt.current = null, di();
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
`), F = x.length - 1, $ = G.length - 1; F >= 1 && $ >= 0 && x[F] !== G[$]; )
            $--;
          for (; F >= 1 && $ >= 0; F--, $--)
            if (x[F] !== G[$]) {
              if (F !== 1 || $ !== 1)
                do
                  if (F--, $--, $ < 0 || x[F] !== G[$]) {
                    var J = `
` + x[F].replace(" at new ", " at ");
                    return s.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", s.displayName)), typeof s == "function" && $e.set(s, J), J;
                  }
                while (F >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        _t = !1, yt.current = M, hi(), Error.prepareStackTrace = k;
      }
      var Se = s ? s.displayName || s.name : "", Fr = Se ? Ve(Se) : "";
      return typeof s == "function" && $e.set(s, Fr), Fr;
    }
    function mi(s, h, y) {
      return Cr(s, !1);
    }
    function vi(s) {
      var h = s.prototype;
      return !!(h && h.isReactComponent);
    }
    function We(s, h, y) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Cr(s, vi(s));
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
            return mi(s.render);
          case d:
            return We(s.type, h, y);
          case m: {
            var E = s, k = E._payload, M = E._init;
            try {
              return We(M(k), h, y);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, Or = {}, xr = R.ReactDebugCurrentFrame;
    function Be(s) {
      if (s) {
        var h = s._owner, y = We(s.type, s._source, h ? h.type : null);
        xr.setExtraStackFrame(y);
      } else
        xr.setExtraStackFrame(null);
    }
    function yi(s, h, y, E, k) {
      {
        var M = Function.call.bind(ze);
        for (var P in s)
          if (M(s, P)) {
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
            x && !(x instanceof Error) && (Be(k), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", y, P, typeof x), Be(null)), x instanceof Error && !(x.message in Or) && (Or[x.message] = !0, Be(k), w("Failed %s type: %s", y, x.message), Be(null));
          }
      }
    }
    var gi = Array.isArray;
    function bt(s) {
      return gi(s);
    }
    function _i(s) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, y = h && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return y;
      }
    }
    function bi(s) {
      try {
        return Rr(s), !1;
      } catch {
        return !0;
      }
    }
    function Rr(s) {
      return "" + s;
    }
    function Pr(s) {
      if (bi(s))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _i(s)), Rr(s);
    }
    var Re = R.ReactCurrentOwner, Ei = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dr, kr, Et;
    Et = {};
    function Si(s) {
      if (ze.call(s, "ref")) {
        var h = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Ti(s) {
      if (ze.call(s, "key")) {
        var h = Object.getOwnPropertyDescriptor(s, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function wi(s, h) {
      if (typeof s.ref == "string" && Re.current && h && Re.current.stateNode !== h) {
        var y = X(Re.current.type);
        Et[y] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Re.current.type), s.ref), Et[y] = !0);
      }
    }
    function Ci(s, h) {
      {
        var y = function() {
          Dr || (Dr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Oi(s, h) {
      {
        var y = function() {
          kr || (kr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var xi = function(s, h, y, E, k, M, P) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: h,
        ref: y,
        props: P,
        // Record the component responsible for creating this element.
        _owner: M
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
    function Ri(s, h, y, E, k) {
      {
        var M, P = {}, x = null, G = null;
        y !== void 0 && (Pr(y), x = "" + y), Ti(h) && (Pr(h.key), x = "" + h.key), Si(h) && (G = h.ref, wi(h, k));
        for (M in h)
          ze.call(h, M) && !Ei.hasOwnProperty(M) && (P[M] = h[M]);
        if (s && s.defaultProps) {
          var F = s.defaultProps;
          for (M in F)
            P[M] === void 0 && (P[M] = F[M]);
        }
        if (x || G) {
          var $ = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          x && Ci(P, $), G && Oi(P, $);
        }
        return xi(s, x, G, k, E, Re.current, P);
      }
    }
    var St = R.ReactCurrentOwner, Ir = R.ReactDebugCurrentFrame;
    function Ee(s) {
      if (s) {
        var h = s._owner, y = We(s.type, s._source, h ? h.type : null);
        Ir.setExtraStackFrame(y);
      } else
        Ir.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function wt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Nr() {
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
    function Pi(s) {
      {
        if (s !== void 0) {
          var h = s.fileName.replace(/^.*[\\\/]/, ""), y = s.lineNumber;
          return `

Check your code at ` + h + ":" + y + ".";
        }
        return "";
      }
    }
    var Mr = {};
    function Di(s) {
      {
        var h = Nr();
        if (!h) {
          var y = typeof s == "string" ? s : s.displayName || s.name;
          y && (h = `

Check the top-level render call using <` + y + ">.");
        }
        return h;
      }
    }
    function Ar(s, h) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var y = Di(h);
        if (Mr[y])
          return;
        Mr[y] = !0;
        var E = "";
        s && s._owner && s._owner !== St.current && (E = " It was passed a child from " + X(s._owner.type) + "."), Ee(s), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, E), Ee(null);
      }
    }
    function jr(s, h) {
      {
        if (typeof s != "object")
          return;
        if (bt(s))
          for (var y = 0; y < s.length; y++) {
            var E = s[y];
            wt(E) && Ar(E, h);
          }
        else if (wt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var k = b(s);
          if (typeof k == "function" && k !== s.entries)
            for (var M = k.call(s), P; !(P = M.next()).done; )
              wt(P.value) && Ar(P.value, h);
        }
      }
    }
    function ki(s) {
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
          yi(y, s.props, "prop", E, s);
        } else if (h.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var k = X(h);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ii(s) {
      {
        for (var h = Object.keys(s.props), y = 0; y < h.length; y++) {
          var E = h[y];
          if (E !== "children" && E !== "key") {
            Ee(s), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Ee(null);
            break;
          }
        }
        s.ref !== null && (Ee(s), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    function Lr(s, h, y, E, k, M) {
      {
        var P = de(s);
        if (!P) {
          var x = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Pi(k);
          G ? x += G : x += Nr();
          var F;
          s === null ? F = "null" : bt(s) ? F = "array" : s !== void 0 && s.$$typeof === t ? (F = "<" + (X(s.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : F = typeof s, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, x);
        }
        var $ = Ri(s, h, y, k, M);
        if ($ == null)
          return $;
        if (P) {
          var J = h.children;
          if (J !== void 0)
            if (E)
              if (bt(J)) {
                for (var Se = 0; Se < J.length; Se++)
                  jr(J[Se], s);
                Object.freeze && Object.freeze(J);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(J, s);
        }
        return s === n ? Ii($) : ki($), $;
      }
    }
    function Ni(s, h, y) {
      return Lr(s, h, y, !0);
    }
    function Mi(s, h, y) {
      return Lr(s, h, y, !1);
    }
    var Ai = Mi, ji = Ni;
    De.Fragment = n, De.jsx = Ai, De.jsxs = ji;
  }()), De;
}
process.env.NODE_ENV === "production" ? Mt.exports = Li() : Mt.exports = Fi();
var C = Mt.exports;
const Q = "animation-all duration-200 ", Tn = "bg-orange-900 hover:bg-orange-800 ", Vi = "bg-neutral-900 hover:bg-neutral-800 ", wn = "bg-neutral-800 ", Cn = "bg-red-600 hover:bg-red-500 border border-red-300 ", On = "shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ", qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  animationDefault: Q,
  colorImportant: Cn,
  colorPrimary: Tn,
  colorSecondary: Vi,
  colorSecondaryNoHover: wn,
  shadowDefault: On
}, Symbol.toStringTag, { value: "Module" })), ge = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000"
}, Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  transitionFadeIn: ge
}, Symbol.toStringTag, { value: "Module" }));
function Gt({
  children: e,
  href: t = "",
  className: r = "",
  isLarger: n = !1,
  isColored: i = !0,
  isTransitionEnabled: o = !1,
  ...l
}) {
  return /* @__PURE__ */ C.jsx(
    "button",
    {
      className: `rounded-full 
    ${n ? "my-4 " : "my-2 "} 
    ${i ? Tn : ""} 
    ${Q} 
    ${r}`,
      ...l,
      ...o ? ge : {},
      children: /* @__PURE__ */ C.jsx(
        "a",
        {
          className: `block px-4 w-full h-full 
      ${n ? "p-4" : "p-2"}
      `,
          href: t,
          children: e
        }
      )
    }
  );
}
function Js({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ C.jsx(Gt, { className: `w-full md:w-1/2 md:mr-[25%] md:ml-[25%]
    ${t}`, ...r, children: e });
}
function Zs({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ C.jsx(
    Gt,
    {
      className: `w-full ${t}`,
      isColored: !0,
      isLarger: !0,
      isTransitionEnabled: !0,
      ...r,
      children: e
    }
  );
}
function $i({
  children: e,
  className: t = "",
  isLarger: r = !1,
  isColored: n = !0,
  ...i
}) {
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: `rounded-full p-1 lg:p-2 px-4 mb-2 lg:mb-4 text-center 
      ${Q} 
      ${r ? "w-1/2 mx-auto" : "mx-1 lg:mx-2"}
      ${n ? wn : ""} 
      `,
      ...i,
      children: e
    }
  );
}
function Qs({
  children: e,
  className: t = "",
  isColored: r = !0,
  ...n
}) {
  return /* @__PURE__ */ C.jsx(
    $i,
    {
      className: `cursor-pointer 
    ${t}`,
      isColored: r,
      ...n,
      children: e
    }
  );
}
var Ht = {}, Ut = {}, j = {}, nt = {};
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
    var w = 3 * a.length, _ = 0;
    for (m = 0; m < w; m++)
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
var Wr = !1;
function Wi(e, t, r, n) {
  var i = 0, o = n || r;
  return t && o && (!Wr && process.env.NODE_ENV !== "production" && e[o].paritialVisibilityGutter && (Wr = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), i = e[o].partialVisibilityGutter || e[o].paritialVisibilityGutter), i;
}
function zi(e, t) {
  var r;
  return t[e] && (r = (100 / t[e].items).toFixed(1)), r;
}
function Bi(e, t, r) {
  return Math.round(r / (t + (e.centerMode ? 1 : 0)));
}
Te.getPartialVisibilityGutter = Wi, Te.getWidthFromDeviceType = zi, Te.getItemClientSideWidth = Bi;
var W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
var At = Te;
function Yt(e) {
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
function xn(e, t, r) {
  var n = r || e.transform;
  return !t.infinite && e.currentSlide === 0 || Yt(e) ? n : n + e.itemWidth / 2;
}
function Ui(e) {
  return !(0 < e.currentSlide);
}
function Rn(e) {
  var t = e.currentSlide, r = e.totalItems;
  return !(t + e.slidesToShow < r);
}
function Pn(e, t, r, n) {
  t === void 0 && (t = 0);
  var i = e.currentSlide, o = e.slidesToShow, l = Rn(e), a = !r.infinite && l, u = n || e.transform;
  if (Yt(e))
    return u;
  var c = u + i * t;
  return a ? c + (e.containerWidth - (e.itemWidth - t) * o) : c;
}
function Dn(e, t) {
  return e.rtl ? -1 * t : t;
}
function Yi(e, t, r) {
  var n = t.partialVisbile, i = t.partialVisible, o = t.responsive, l = t.deviceType, a = t.centerMode, u = r || e.transform, c = At.getPartialVisibilityGutter(o, n || i, l, e.deviceType);
  return Dn(t, i || n ? Pn(e, c, t, r) : a ? xn(e, t, r) : u);
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
W.notEnoughChildren = Yt, W.getInitialState = Gi, W.getIfSlideIsVisbile = Hi, W.getTransformForCenterMode = xn, W.isInLeftEnd = Ui, W.isInRightEnd = Rn, W.getTransformForPartialVsibile = Pn, W.parsePosition = Dn, W.getTransform = Yi, W.getSlidesToSlide = Xi;
var Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
var qi = function(e, t, r) {
  var n;
  return function() {
    var i = arguments;
    n || (e.apply(this, i), n = !0, typeof r == "function" && r(!0), setTimeout(function() {
      n = !1, typeof r == "function" && r(!1);
    }, t));
  };
};
Xt.default = qi;
var kn = {};
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
})(kn);
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
var Ki = W;
function Ji(e, t, r) {
  r === void 0 && (r = 0);
  var n, i, o = e.slidesToShow, l = e.currentSlide, a = e.itemWidth, u = e.totalItems, c = Ki.getSlidesToSlide(e, t), f = l + 1 + r + o + (0 < r ? 0 : c);
  return i = f <= u ? -a * (n = l + r + (0 < r ? 0 : c)) : u < f && l !== u - o ? -a * (n = u - o) : n = void 0, { nextSlides: n, nextPosition: i };
}
qt.populateNextSlides = Ji;
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
var Zi = Z, Qi = W, eo = W;
function to(e, t, r) {
  r === void 0 && (r = 0);
  var n, i, o = e.currentSlide, l = e.itemWidth, a = e.slidesToShow, u = t.children, c = t.showDots, f = t.infinite, d = Qi.getSlidesToSlide(e, t), m = o - r - (0 < r ? 0 : d), g = (Zi.Children.toArray(u).length - a) % d;
  return i = 0 <= m ? (n = m, c && !f && 0 < g && eo.isInRightEnd(e) && (n = o - g), -l * n) : n = m < 0 && o !== 0 ? 0 : void 0, { nextSlides: n, nextPosition: i };
}
Kt.populatePreviousSlides = to;
var In = {};
(function(e) {
  function t(r, n, i, o, l, a) {
    var u, c, f = r.itemWidth, d = r.slidesToShow, m = r.totalItems, g = r.currentSlide, v = n.infinite, p = !1, b = Math.round((i - o) / f), R = Math.round((o - i) / f), w = i < l;
    if (l < i && b <= d) {
      u = "right";
      var _ = Math.abs(-f * (m - d)), S = a - (o - l), T = g === m - d;
      (Math.abs(S) <= _ || T && v) && (c = S, p = !0);
    }
    return w && R <= d && (u = "left", ((S = a + (l - o)) <= 0 || g === 0 && v) && (p = !0, c = S)), { direction: u, nextPosition: c, canContinue: p };
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), e.populateSlidesOnMouseTouchMove = t;
})(In);
Object.defineProperty(j, "__esModule", { value: !0 });
var Ge = nt;
j.getOriginalCounterPart = Ge.getOriginalCounterPart, j.getClones = Ge.getClones, j.checkClonesPosition = Ge.checkClonesPosition, j.getInitialSlideInInfiniteMode = Ge.getInitialSlideInInfiniteMode;
var Ot = Te;
j.getWidthFromDeviceType = Ot.getWidthFromDeviceType, j.getPartialVisibilityGutter = Ot.getPartialVisibilityGutter, j.getItemClientSideWidth = Ot.getItemClientSideWidth;
var le = W;
j.getInitialState = le.getInitialState, j.getIfSlideIsVisbile = le.getIfSlideIsVisbile, j.getTransformForCenterMode = le.getTransformForCenterMode, j.getTransformForPartialVsibile = le.getTransformForPartialVsibile, j.isInLeftEnd = le.isInLeftEnd, j.isInRightEnd = le.isInRightEnd, j.notEnoughChildren = le.notEnoughChildren, j.getSlidesToSlide = le.getSlidesToSlide;
var ro = Xt;
j.throttle = ro.default;
var no = kn;
j.throwError = no.default;
var io = qt;
j.populateNextSlides = io.populateNextSlides;
var oo = Kt;
j.populatePreviousSlides = oo.populatePreviousSlides;
var ao = In;
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
var lo = Z;
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
var Jt = {}, Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
var fo = nt, ho = W;
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
Zt.getLookupTableForNextSlides = po;
Object.defineProperty(Jt, "__esModule", { value: !0 });
var ke = Z, mo = nt, vo = Zt, zr = W, yo = function(e) {
  var t = e.props, r = e.state, n = e.goToSlide, i = e.getState, o = t.showDots, l = t.customDot, a = t.dotListClass, u = t.infinite, c = t.children;
  if (!o || zr.notEnoughChildren(r))
    return null;
  var f, d = r.currentSlide, m = r.slidesToShow, g = zr.getSlidesToSlide(r, t), v = ke.Children.toArray(c);
  f = u ? Math.ceil(v.length / g) : Math.ceil((v.length - m) / g) + 1;
  var p = vo.getLookupTableForNextSlides(f, r, t, v), b = mo.getOriginalIndexLookupTableByClones(m, v), R = b[d];
  return ke.createElement("ul", { className: "react-multi-carousel-dot-list " + a }, Array(f).fill(0).map(function(w, _) {
    var S, T;
    if (u) {
      T = p[_];
      var D = b[T];
      S = R === D || D <= R && R < D + g;
    } else {
      var I = v.length - m, N = _ * g;
      S = (T = I < N ? I : N) === d || T < d && d < T + g && d < v.length - m;
    }
    return l ? ke.cloneElement(l, { index: _, active: S, key: _, onClick: function() {
      return n(T);
    }, carouselState: i() }) : ke.createElement("li", { "data-index": _, key: _, className: "react-multi-carousel-dot " + (S ? "react-multi-carousel-dot--active" : "") }, ke.createElement("button", { "aria-label": "Go to slide " + (_ + 1), onClick: function() {
      return n(T);
    } }));
  }));
};
Jt.default = yo;
var ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
var Qe = Z, go = function(e) {
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
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
var He = Z, xt = j, bo = function(e) {
  var t = e.props, r = e.state, n = e.goToSlide, i = e.clones, o = e.notEnoughChildren, l = r.itemWidth, a = t.children, u = t.infinite, c = t.itemClass, f = t.itemAriaLabel, d = t.partialVisbile, m = t.partialVisible, g = xt.getInitialState(r, t), v = g.flexBisis, p = g.shouldRenderOnSSR, b = g.domFullyLoaded, R = g.partialVisibilityGutter;
  return g.shouldRenderAtAll ? (d && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), He.createElement(He.Fragment, null, (u ? i : He.Children.toArray(a)).map(function(w, _) {
    return He.createElement("li", { key: _, "data-index": _, onClick: function() {
      t.focusOnSelect && n(_);
    }, "aria-hidden": xt.getIfSlideIsVisbile(_, r) ? "false" : "true", "aria-label": f || (w.props.ariaLabel ? w.props.ariaLabel : null), style: { flex: p ? "1 0 " + v + "%" : "auto", position: "relative", width: b ? ((d || m) && R && !o ? l - R : l) + "px" : "auto" }, className: "react-multi-carousel-item " + (xt.getIfSlideIsVisbile(_, r) ? "react-multi-carousel-item--active" : "") + " " + c }, w);
  }))) : null;
};
Qt.default = bo;
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
Object.defineProperty(Ut, "__esModule", { value: !0 });
var z = Z, L = j, he = it, So = Jt, Br = ot, To = Qt, Ue = W, re = 400, Gr = "transform 400ms ease-in-out", wo = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.containerRef = z.createRef(), n.listRef = z.createRef(), n.state = { itemWidth: 0, slidesToShow: 0, currentSlide: 0, totalItems: z.Children.count(r.children), deviceType: "", domLoaded: !1, transform: 0, containerWidth: 0 }, n.onResize = n.onResize.bind(n), n.handleDown = n.handleDown.bind(n), n.handleMove = n.handleMove.bind(n), n.handleOut = n.handleOut.bind(n), n.onKeyUp = n.onKeyUp.bind(n), n.handleEnter = n.handleEnter.bind(n), n.setIsInThrottle = n.setIsInThrottle.bind(n), n.next = L.throttle(n.next.bind(n), r.transitionDuration || re, n.setIsInThrottle), n.previous = L.throttle(n.previous.bind(n), r.transitionDuration || re, n.setIsInThrottle), n.goToSlide = L.throttle(n.goToSlide.bind(n), r.transitionDuration || re, n.setIsInThrottle), n.onMove = !1, n.initialX = 0, n.lastX = 0, n.isAnimationAllowed = !1, n.direction = "", n.initialY = 0, n.isInThrottle = !1, n.transformPlaceHolder = 0, n;
  }
  return Eo(t, e), t.prototype.resetTotalItems = function() {
    var r = this, n = z.Children.count(this.props.children), i = L.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, n));
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
    this.listRef && this.listRef.current && (this.listRef.current.style.transition = r ? this.props.customTransition || Gr : "none");
  }, t.prototype.componentDidMount = function() {
    this.setState({ domLoaded: !0 }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, t.prototype.setClones = function(r, n, i, o) {
    var l = this;
    o === void 0 && (o = !1), this.isAnimationAllowed = !1;
    var a = z.Children.toArray(this.props.children), u = L.getInitialSlideInInfiniteMode(r || this.state.slidesToShow, a), c = L.getClones(this.state.slidesToShow, a), f = a.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
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
    var n = this, i = r.domLoaded, o = z.Children.toArray(this.props.children), l = L.checkClonesPosition(this.state, o, this.props), a = l.isReachingTheEnd, u = l.isReachingTheStart, c = l.nextSlide, f = l.nextPosition;
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
    return z.createElement(Br.LeftArrow, { customLeftArrow: o, getState: function() {
      return n.getState();
    }, previous: this.previous, disabled: r, rtl: l });
  }, t.prototype.renderRightArrow = function(r) {
    var n = this, i = this.props, o = i.customRightArrow, l = i.rtl;
    return z.createElement(Br.RightArrow, { customRightArrow: o, getState: function() {
      return n.getState();
    }, next: this.next, disabled: r, rtl: l });
  }, t.prototype.renderButtonGroups = function() {
    var r = this, n = this.props.customButtonGroup;
    return n ? z.cloneElement(n, { previous: function() {
      return r.previous();
    }, next: function() {
      return r.next();
    }, goToSlide: function(i, o) {
      return r.goToSlide(i, o);
    }, carouselState: this.getState() }) : null;
  }, t.prototype.renderDotsList = function() {
    var r = this;
    return z.createElement(So.default, { state: this.state, props: this.props, goToSlide: this.goToSlide, getState: function() {
      return r.getState();
    } });
  }, t.prototype.renderCarouselItems = function() {
    var r = [];
    if (this.props.infinite) {
      var n = z.Children.toArray(this.props.children);
      r = L.getClones(this.state.slidesToShow, n);
    }
    return z.createElement(To.default, { clones: r, goToSlide: this.goToSlide, state: this.state, notEnoughChildren: L.notEnoughChildren(this.state), props: this.props });
  }, t.prototype.render = function() {
    var r = this.props, n = r.deviceType, i = r.arrows, o = r.renderArrowsWhenDisabled, l = r.removeArrowOnDeviceType, a = r.infinite, u = r.containerClass, c = r.sliderClass, f = r.customTransition, d = r.additionalTransfrom, m = r.renderDotsOutside, g = r.renderButtonGroupOutside, v = r.className, p = r.rtl;
    process.env.NODE_ENV !== "production" && L.throwError(this.state, this.props);
    var b = L.getInitialState(this.state, this.props), R = b.shouldRenderOnSSR, w = b.shouldRenderAtAll, _ = L.isInLeftEnd(this.state), S = L.isInRightEnd(this.state), T = i && !(l && (n && -1 < l.indexOf(n) || this.state.deviceType && -1 < l.indexOf(this.state.deviceType))) && !L.notEnoughChildren(this.state) && w, D = !a && _, I = !a && S, N = Ue.getTransform(this.state, this.props);
    return z.createElement(z.Fragment, null, z.createElement("div", { className: "react-multi-carousel-list " + u + " " + v, dir: p ? "rtl" : "ltr", ref: this.containerRef }, z.createElement("ul", { ref: this.listRef, className: "react-multi-carousel-track " + c, style: { transition: this.isAnimationAllowed ? f || Gr : "none", overflow: R ? "hidden" : "unset", transform: "translate3d(" + (N + d) + "px,0,0)" }, onMouseMove: this.handleMove, onMouseDown: this.handleDown, onMouseUp: this.handleOut, onMouseEnter: this.handleEnter, onMouseLeave: this.handleOut, onTouchStart: this.handleDown, onTouchMove: this.handleMove, onTouchEnd: this.handleOut }, this.renderCarouselItems()), T && (!D || o) && this.renderLeftArrow(D), T && (!I || o) && this.renderRightArrow(I), w && !g && this.renderButtonGroups(), w && !m && this.renderDotsList()), w && m && this.renderDotsList(), w && g && this.renderButtonGroups());
  }, t.defaultProps = { slidesToSlide: 1, infinite: !1, draggable: !0, swipeable: !0, arrows: !0, renderArrowsWhenDisabled: !1, containerClass: "", sliderClass: "", itemClass: "", keyBoardControl: !0, autoPlaySpeed: 3e3, showDots: !1, renderDotsOutside: !1, renderButtonGroupOutside: !1, minimumTouchDrag: 80, className: "", dotListClass: "", focusOnSelect: !1, centerMode: !1, additionalTransfrom: 0, pauseOnHover: !0, shouldResetAutoplay: !0, rewind: !1, rtl: !1, rewindWithAnimation: !1 }, t;
}(z.Component);
Ut.default = wo;
Object.defineProperty(Ht, "__esModule", { value: !0 });
var Co = Ut;
Ht.default = Co.default;
var Oo = Ht;
const xo = /* @__PURE__ */ Sn(Oo), Hr = {
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
function Ur() {
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
      min: Hr.responsive.breakpoint.lg
    },
    items: 2
  },
  sm: {
    breakpoint: {
      max: Hr.responsive.breakpoint.lg,
      min: 0
    },
    items: 1
  }
};
function el({ children: e, ...t }) {
  return window.addEventListener("resize", Ur), /* @__PURE__ */ C.jsx(
    xo,
    {
      responsive: Ro,
      partialVisible: !0,
      containerClass: "carousel",
      itemClass: "carousel__item",
      keyBoardControl: !0,
      pauseOnHover: !0,
      afterChange: function(r, n) {
        Ur();
      },
      ...t,
      children: e
    }
  );
}
function er({
  children: e,
  className: t = "",
  transitionEnabled: r = !1,
  ...n
}) {
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: "py-4 " + t,
      ...n,
      ...r ? ge : {},
      children: e
    }
  );
}
function tl({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ C.jsx(
    "p",
    {
      className: "py-2 lg:py-4 " + t,
      ...ge,
      ...r,
      children: e
    }
  );
}
function rl({
  children: e,
  className: t = "",
  ...r
}) {
  return /* @__PURE__ */ C.jsx(
    "section",
    {
      className: "py-16 sm:py-24 lg:py-32 " + t,
      ...r,
      children: e
    }
  );
}
function nl({
  children: e,
  href: t,
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ C.jsx(
    "a",
    {
      href: t,
      className: r,
      ...n,
      children: /* @__PURE__ */ C.jsx("p", { className: "hover:scale-105 inline-block text-orange-200 hover:text-orange-400 " + Q, children: e })
    }
  );
}
function Po({
  children: e,
  forInput: t,
  className: r = "",
  ...n
}) {
  return /* @__PURE__ */ C.jsx(
    "label",
    {
      for: t,
      className: `mr-2 ${r}`,
      ...n,
      children: e
    }
  );
}
function Do({
  children: e,
  type: t,
  id: r,
  name: n,
  className: i,
  ...o
}) {
  return /* @__PURE__ */ C.jsxs(er, { children: [
    /* @__PURE__ */ C.jsx(Po, { children: e }),
    /* @__PURE__ */ C.jsx(Do, {})
  ] });
}
function il({
  children: e,
  type: t,
  id: r,
  name: n,
  className: i = "",
  ...o
}) {
  return /* @__PURE__ */ C.jsx(
    "input",
    {
      type: t,
      id: r,
      name: n || r,
      className: `w-full md:w-1/2 bg-neutral-900 p-2 rounded-full + ${i}`,
      ...o
    }
  );
}
function ol({
  src: e,
  title: t = "",
  alt: r = "",
  target: n,
  className: i = "",
  classNameImage: o = "",
  isEnhancedMode: l = !0,
  fullSize: a = !0,
  ...u
}) {
  return o += l ? "w-[95%] hover:w-[99%] shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] " : "", /* @__PURE__ */ C.jsx(
    "div",
    {
      className: `flex justify-center p-1
    ${Q} 
    ${i} 
    ${a ? "w-full" : ""}`,
      ...u,
      children: /* @__PURE__ */ C.jsx(
        "img",
        {
          src: e,
          className: `${Q} ${o}`,
          title: t,
          alt: r
        }
      )
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
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: `w-full flex justify-center
    ${Q} 
    ${o}`,
      ...u,
      children: /* @__PURE__ */ C.jsxs(
        "a",
        {
          href: e,
          className: `relative w-[95%] hover:bg-neutral-500 
         ${On} 
         ${Q} 
         ${a ? "" : "hover:w-[99%] "} 
         ${l}`,
          target: i,
          children: [
            /* @__PURE__ */ C.jsx("div", { className: `image-mask absolute inset-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-center ${Q}`, children: /* @__PURE__ */ C.jsx("p", { className: "absolute top-1/2 w-full uppercase", children: "Cliquez pour y accéder !" }) }),
            /* @__PURE__ */ C.jsx(
              "img",
              {
                src: t,
                title: r,
                alt: n
              }
            )
          ]
        }
      )
    }
  );
}
function sl({
  size: e = 4,
  className: t = "",
  isVisible: r = !0,
  ...n
}) {
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: `separator w-full my-${e} py-${e} ${r ? "bg-orange-950" : ""} 
    ${t}`,
      ...n
    }
  );
}
var Nn = {}, tr = {}, rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
var Yr = "html", Xr = "head", Ye = "body", ko = /<([a-zA-Z]+[0-9]?)/, qr = /<head[^]*>/i, Kr = /<body[^]*>/i, et = function(e, t) {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
}, jt = function(e, t) {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
}, Jr = typeof window == "object" && window.DOMParser;
if (typeof Jr == "function") {
  var Io = new Jr(), No = "text/html";
  jt = function(e, t) {
    return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), Io.parseFromString(e, No);
  }, et = jt;
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
var qe = typeof document == "object" && document.createElement("template"), Lt;
qe && qe.content && (Lt = function(e) {
  return qe.innerHTML = e, qe.content.childNodes;
});
function Mo(e) {
  var t, r, n = e.match(ko), i = n && n[1] ? n[1].toLowerCase() : "";
  switch (i) {
    case Yr: {
      var o = jt(e);
      if (!qr.test(e)) {
        var l = o.querySelector(Xr);
        (t = l == null ? void 0 : l.parentNode) === null || t === void 0 || t.removeChild(l);
      }
      if (!Kr.test(e)) {
        var l = o.querySelector(Ye);
        (r = l == null ? void 0 : l.parentNode) === null || r === void 0 || r.removeChild(l);
      }
      return o.querySelectorAll(Yr);
    }
    case Xr:
    case Ye: {
      var a = et(e).querySelectorAll(i);
      return Kr.test(e) && qr.test(e) ? a[0].parentNode.childNodes : a;
    }
    default: {
      if (Lt)
        return Lt(e);
      var l = et(e, Ye).querySelector(Ye);
      return l.childNodes;
    }
  }
}
rr.default = Mo;
var we = {}, nr = {}, ir = {};
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
})(ir);
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
}(), Ne = A && A.__assign || function() {
  return Ne = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ne.apply(this, arguments);
};
Object.defineProperty(O, "__esModule", { value: !0 });
O.cloneNode = O.hasChildren = O.isDocument = O.isDirective = O.isComment = O.isText = O.isCDATA = O.isTag = O.Element = O.Document = O.CDATA = O.NodeWithChildren = O.ProcessingInstruction = O.Comment = O.Text = O.DataNode = O.Node = void 0;
var Y = ir, or = (
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
      return t === void 0 && (t = !1), ar(this, t);
    }, e;
  }()
);
O.Node = or;
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
  }(or)
);
O.DataNode = at;
var Mn = (
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
O.Text = Mn;
var An = (
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
O.Comment = An;
var jn = (
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
O.ProcessingInstruction = jn;
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
  }(or)
);
O.NodeWithChildren = st;
var Ln = (
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
O.CDATA = Ln;
var Fn = (
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
O.Document = Fn;
var Vn = (
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
O.Element = Vn;
function $n(e) {
  return (0, Y.isTag)(e);
}
O.isTag = $n;
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
function Gn(e) {
  return e.type === Y.ElementType.Directive;
}
O.isDirective = Gn;
function Hn(e) {
  return e.type === Y.ElementType.Root;
}
O.isDocument = Hn;
function Ao(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
O.hasChildren = Ao;
function ar(e, t) {
  t === void 0 && (t = !1);
  var r;
  if (zn(e))
    r = new Mn(e.data);
  else if (Bn(e))
    r = new An(e.data);
  else if ($n(e)) {
    var n = t ? Rt(e.children) : [], i = new Vn(e.name, Ne({}, e.attribs), n);
    n.forEach(function(u) {
      return u.parent = i;
    }), e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = Ne({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = Ne({}, e["x-attribsPrefix"])), r = i;
  } else if (Wn(e)) {
    var n = t ? Rt(e.children) : [], o = new Ln(n);
    n.forEach(function(c) {
      return c.parent = o;
    }), r = o;
  } else if (Hn(e)) {
    var n = t ? Rt(e.children) : [], l = new Fn(n);
    n.forEach(function(c) {
      return c.parent = l;
    }), e["x-mode"] && (l["x-mode"] = e["x-mode"]), r = l;
  } else if (Gn(e)) {
    var a = new jn(e.name, e.data);
    e["x-name"] != null && (a["x-name"] = e["x-name"], a["x-publicId"] = e["x-publicId"], a["x-systemId"] = e["x-systemId"]), r = a;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
O.cloneNode = ar;
function Rt(e) {
  for (var t = e.map(function(n) {
    return ar(n, !0);
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
  var n = ir, i = O;
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
})(nr);
var Un = {};
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
})(Un);
Object.defineProperty(we, "__esModule", { value: !0 });
we.formatDOM = we.formatAttributes = void 0;
var Ke = nr, jo = Un;
function Lo(e) {
  return jo.CASE_SENSITIVE_TAG_NAMES_MAP[e];
}
function Yn(e) {
  for (var t = {}, r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t[i.name] = i.value;
  }
  return t;
}
we.formatAttributes = Yn;
function Fo(e) {
  e = e.toLowerCase();
  var t = Lo(e);
  return t || e;
}
function Xn(e, t, r) {
  t === void 0 && (t = null);
  for (var n = [], i, o = 0, l = e.length; o < l; o++) {
    var a = e[o];
    switch (a.nodeType) {
      case 1: {
        var u = Fo(a.nodeName);
        i = new Ke.Element(u, Yn(a.attributes)), i.children = Xn(
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
we.formatDOM = Xn;
var Vo = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(tr, "__esModule", { value: !0 });
var $o = Vo(rr), Wo = we, zo = /<(![a-zA-Z\s]+)>/;
function Bo(e) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  var t = e.match(zo), r = t ? t[1] : void 0;
  return (0, Wo.formatDOM)((0, $o.default)(e), null, r);
}
tr.default = Bo;
var lt = {}, ee = {}, ut = {}, Go = 0;
ut.SAME = Go;
var Ho = 1;
ut.CAMELCASE = Ho;
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
const qn = 0, fe = 1, ct = 2, ft = 3, sr = 4, Kn = 5, Jn = 6;
function Uo(e) {
  return B.hasOwnProperty(e) ? B[e] : null;
}
function H(e, t, r, n, i, o, l) {
  this.acceptsBooleans = t === ct || t === ft || t === sr, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
const B = {}, Yo = [
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
Yo.forEach((e) => {
  B[e] = new H(
    e,
    qn,
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
  B[e] = new H(
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
  B[e] = new H(
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
  B[e] = new H(
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
  B[e] = new H(
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
  B[e] = new H(
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
  B[e] = new H(
    e,
    sr,
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
  B[e] = new H(
    e,
    Jn,
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
  B[e] = new H(
    e,
    Kn,
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
const lr = /[\-\:]([a-z])/g, ur = (e) => e[1].toUpperCase();
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
  const t = e.replace(lr, ur);
  B[t] = new H(
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
  const t = e.replace(lr, ur);
  B[t] = new H(
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
  const t = e.replace(lr, ur);
  B[t] = new H(
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
  B[e] = new H(
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
const Xo = "xlinkHref";
B[Xo] = new H(
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
  B[e] = new H(
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
  CAMELCASE: qo,
  SAME: Ko,
  possibleStandardNames: Zr
} = ut, Jo = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Zo = Jo + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Qo = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + Zo + "]*$")
), ea = Object.keys(
  Zr
).reduce((e, t) => {
  const r = Zr[t];
  return r === Ko ? e[t] = t : r === qo ? e[t.toLowerCase()] = t : e[t] = r, e;
}, {});
ee.BOOLEAN = ft;
ee.BOOLEANISH_STRING = ct;
ee.NUMERIC = Kn;
ee.OVERLOADED_BOOLEAN = sr;
ee.POSITIVE_NUMERIC = Jn;
ee.RESERVED = qn;
ee.STRING = fe;
ee.getPropertyInfo = Uo;
ee.isCustomAttribute = Qo;
ee.possibleStandardNames = ea;
var cr = {}, fr = {}, dr = {}, Qr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, ta = /\n/g, ra = /^\s*/, na = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, ia = /^:\s*/, oa = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, aa = /^[;\s]*/, sa = /^\s+|\s+$/g, la = `
`, en = "/", tn = "*", me = "", ua = "comment", ca = "declaration", fa = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var r = 1, n = 1;
  function i(v) {
    var p = v.match(ta);
    p && (r += p.length);
    var b = v.lastIndexOf(la);
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
    u(ra);
  }
  function f(v) {
    var p;
    for (v = v || []; p = d(); )
      p !== !1 && v.push(p);
    return v;
  }
  function d() {
    var v = o();
    if (!(en != e.charAt(0) || tn != e.charAt(1))) {
      for (var p = 2; me != e.charAt(p) && (tn != e.charAt(p) || en != e.charAt(p + 1)); )
        ++p;
      if (p += 2, me === e.charAt(p - 1))
        return a("End of comment missing");
      var b = e.slice(2, p - 2);
      return n += 2, i(b), e = e.slice(p), n += 2, v({
        type: ua,
        comment: b
      });
    }
  }
  function m() {
    var v = o(), p = u(na);
    if (p) {
      if (d(), !u(ia))
        return a("property missing ':'");
      var b = u(oa), R = v({
        type: ca,
        property: rn(p[0].replace(Qr, me)),
        value: b ? rn(b[0].replace(Qr, me)) : me
      });
      return u(aa), R;
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
function rn(e) {
  return e ? e.replace(sa, me) : me;
}
var da = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(dr, "__esModule", { value: !0 });
var ha = da(fa);
function pa(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var n = (0, ha.default)(e), i = typeof t == "function";
  return n.forEach(function(o) {
    if (o.type === "declaration") {
      var l = o.property, a = o.value;
      i ? t(l, a, o) : a && (r = r || {}, r[l] = a);
    }
  }), r;
}
dr.default = pa;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.camelCase = void 0;
var ma = /^--[a-zA-Z0-9-]+$/, va = /-([a-z])/g, ya = /^[^-]+$/, ga = /^-(webkit|moz|ms|o|khtml)-/, _a = /^-(ms)-/, ba = function(e) {
  return !e || ya.test(e) || ma.test(e);
}, Ea = function(e, t) {
  return t.toUpperCase();
}, nn = function(e, t) {
  return "".concat(t, "-");
}, Sa = function(e, t) {
  return t === void 0 && (t = {}), ba(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(_a, nn) : e = e.replace(ga, nn), e.replace(va, Ea));
};
dt.camelCase = Sa;
var Ta = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(fr, "__esModule", { value: !0 });
var wa = Ta(dr), Ca = dt;
function Oa(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, wa.default)(e, function(n, i) {
    n && i && (r[(0, Ca.camelCase)(n, t)] = i);
  }), r;
}
fr.default = Oa;
(function(e) {
  var t = A && A.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = e.setStyleProp = e.isCustomComponent = void 0;
  var r = Z, n = t(fr), i = /* @__PURE__ */ new Set([
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
})(cr);
Object.defineProperty(lt, "__esModule", { value: !0 });
var Ie = ee, on = cr, xa = ["checked", "value"], Ra = ["input", "select", "textarea"], Pa = {
  reset: !0,
  submit: !0
};
function Da(e, t) {
  e === void 0 && (e = {});
  var r = {}, n = !!(e.type && Pa[e.type]);
  for (var i in e) {
    var o = e[i];
    if ((0, Ie.isCustomAttribute)(i)) {
      r[i] = o;
      continue;
    }
    var l = i.toLowerCase(), a = an(l);
    if (a) {
      var u = (0, Ie.getPropertyInfo)(a);
      switch (xa.includes(a) && Ra.includes(t) && !n && (a = an("default" + l)), r[a] = o, u && u.type) {
        case Ie.BOOLEAN:
          r[a] = !0;
          break;
        case Ie.OVERLOADED_BOOLEAN:
          o === "" && (r[a] = !0);
          break;
      }
      continue;
    }
    on.PRESERVE_CUSTOM_ATTRIBUTES && (r[i] = o);
  }
  return (0, on.setStyleProp)(e.style, r), r;
}
lt.default = Da;
function an(e) {
  return Ie.possibleStandardNames[e];
}
var hr = {}, ka = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(hr, "__esModule", { value: !0 });
var Pt = Z, Ia = ka(lt), Me = cr, Na = {
  cloneElement: Pt.cloneElement,
  createElement: Pt.createElement,
  isValidElement: Pt.isValidElement
};
function Zn(e, t) {
  t === void 0 && (t = {});
  for (var r = [], n = typeof t.replace == "function", i = t.transform || Me.returnFirstArg, o = t.library || Na, l = o.cloneElement, a = o.createElement, u = o.isValidElement, c = e.length, f = 0; f < c; f++) {
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
      if (g && d.parent && !(0, Me.canTextBeChildOfNode)(d.parent) || t.trim && g)
        continue;
      r.push(i(d.data, d, f));
      continue;
    }
    var v = d, p = {};
    Ma(v) ? ((0, Me.setStyleProp)(v.attribs.style, v.attribs), p = v.attribs) : v.attribs && (p = (0, Ia.default)(v.attribs, v.name));
    var b = void 0;
    switch (d.type) {
      case "script":
      case "style":
        d.children[0] && (p.dangerouslySetInnerHTML = {
          __html: d.children[0].data
        });
        break;
      case "tag":
        d.name === "textarea" && d.children[0] ? p.defaultValue = d.children[0].data : d.children && d.children.length && (b = Zn(d.children, t));
        break;
      default:
        continue;
    }
    c > 1 && (p.key = f), r.push(i(a(d.name, p, b), d, f));
  }
  return r.length === 1 ? r[0] : r;
}
hr.default = Zn;
function Ma(e) {
  return Me.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, Me.isCustomComponent)(e.name, e.attribs);
}
(function(e) {
  var t = A && A.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0;
  var r = t(tr);
  e.htmlToDOM = r.default;
  var n = t(lt);
  e.attributesToProps = n.default;
  var i = t(hr);
  e.domToReact = i.default;
  var o = nr;
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
})(Nn);
const sn = /* @__PURE__ */ Sn(Nn), xe = sn.default || sn;
function ll({
  children: e,
  className: t = "",
  transitionEnabled: r = !0,
  ...n
}) {
  return /* @__PURE__ */ C.jsx(
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
  return /* @__PURE__ */ C.jsx(
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
  return /* @__PURE__ */ C.jsx(
    "h3",
    {
      className: `my-2 sm:my-4 lg:my-4 text-center uppercase 
    ${r ? "text-lg xs:text-xl lg:text-xl" : "text-xl xs:text-2xl lg:text-2xl"} 
    ${t}`,
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
  return /* @__PURE__ */ C.jsx(
    "h4",
    {
      className: `text-md xs:text-lg md:text-xl uppercase 
    ${r ? "my-2 sm:my-4" : ""} 
    ${t}`,
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
  return /* @__PURE__ */ C.jsx(
    "h5",
    {
      className: `text-md uppercase 
    ${r ? "my-2 sm:my-4" : ""} 
    ${t}`,
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
  return /* @__PURE__ */ C.jsx(
    "h6",
    {
      className: `text-md 
    ${r ? "my-2 sm:my-4 " : ""} 
    ${t}`,
      ...n,
      children: xe(e)
    }
  );
}
function Aa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ja(e) {
  return Aa(e) && "type" in e && typeof e.type == "string";
}
var Qn = Symbol.for("immer-nothing"), ln = Symbol.for("immer-draftable"), q = Symbol.for("immer-state"), La = process.env.NODE_ENV !== "production" ? [
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
    const r = La[e], n = typeof r == "function" ? r.apply(null, t) : r;
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
  return e ? ei(e) || Array.isArray(e) || !!e[ln] || !!((t = e.constructor) != null && t[ln]) || pt(e) || mt(e) : !1;
}
var Fa = Object.prototype.constructor.toString();
function ei(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ce(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Fa;
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
function Ft(e, t) {
  return ht(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ti(e, t, r) {
  const n = ht(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Va(e, t) {
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
function Vt(e, t) {
  if (pt(e))
    return new Map(e);
  if (mt(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && ei(e))
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
function pr(e, t = !1) {
  return vt(e) || ue(e) || !se(e) || (ht(e) > 1 && (e.set = e.add = e.clear = e.delete = $a), Object.freeze(e), t && Ae(e, (r, n) => pr(n, !0))), e;
}
function $a() {
  U(2);
}
function vt(e) {
  return Object.isFrozen(e);
}
var Wa = {};
function ye(e) {
  const t = Wa[e];
  return t || U(0, e), t;
}
var je;
function ri() {
  return je;
}
function za(e, t) {
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
function un(e, t) {
  t && (ye("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function $t(e) {
  Wt(e), e.drafts_.forEach(Ba), e.drafts_ = null;
}
function Wt(e) {
  e === je && (je = e.parent_);
}
function cn(e) {
  return je = za(je, e);
}
function Ba(e) {
  const t = e[q];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function fn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[q].modified_ && ($t(t), U(4)), se(e) && (e = tt(t, e), t.parent_ || rt(t, e)), t.patches_ && ye("Patches").generateReplacementPatches_(
    r[q].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = tt(t, r, []), $t(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Qn ? e : void 0;
}
function tt(e, t, r) {
  if (vt(t))
    return t;
  const n = t[q];
  if (!n)
    return Ae(
      t,
      (i, o) => dn(e, n, t, i, o, r)
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
      (a, u) => dn(e, n, i, a, u, r, l)
    ), rt(e, i, !1), r && e.patches_ && ye("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function dn(e, t, r, n, i, o, l) {
  if (process.env.NODE_ENV !== "production" && i === r && U(5), ue(i)) {
    const a = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ft(t.assigned_, n) ? o.concat(n) : void 0, u = tt(e, i, a);
    if (ti(r, n, u), ue(u))
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
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && pr(t, r);
}
function Ga(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ri(),
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
  let i = n, o = mr;
  r && (i = [n], o = Le);
  const { revoke: l, proxy: a } = Proxy.revocable(i, o);
  return n.draft_ = a, n.revoke_ = l, a;
}
var mr = {
  get(e, t) {
    if (t === q)
      return e;
    const r = pe(e);
    if (!Ft(r, t))
      return Ha(e, r, t);
    const n = r[t];
    return e.finalized_ || !se(n) ? n : n === Dt(e.base_, t) ? (kt(e), e.copy_[t] = Bt(n, e)) : n;
  },
  has(e, t) {
    return t in pe(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(pe(e));
  },
  set(e, t, r) {
    const n = ni(pe(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Dt(pe(e), t), o = i == null ? void 0 : i[q];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Va(r, i) && (r !== void 0 || Ft(e.base_, t)))
        return !0;
      kt(e), zt(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Dt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, kt(e), zt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
Ae(mr, (e, t) => {
  Le[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Le.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && U(13), Le.set.call(this, e, t, void 0);
};
Le.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && U(14), mr.set.call(this, e[0], t, r, e[0]);
};
function Dt(e, t) {
  const r = e[q];
  return (r ? pe(r) : e)[t];
}
function Ha(e, t, r) {
  var i;
  const n = ni(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function ni(e, t) {
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
function zt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && zt(e.parent_));
}
function kt(e) {
  e.copy_ || (e.copy_ = Vt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ua = class {
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
        const o = cn(this), l = Bt(t, void 0);
        let a = !0;
        try {
          i = r(l), a = !1;
        } finally {
          a ? $t(o) : Wt(o);
        }
        return un(o, n), fn(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Qn && (i = void 0), this.autoFreeze_ && pr(i, !0), n) {
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
    se(e) || U(8), ue(e) && (e = ii(e));
    const t = cn(this), r = Bt(e, void 0);
    return r[q].isManual_ = !0, Wt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[q];
    (!r || !r.isManual_) && U(9);
    const { scope_: n } = r;
    return un(n, t), fn(void 0, n);
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
function Bt(e, t) {
  const r = pt(e) ? ye("MapSet").proxyMap_(e, t) : mt(e) ? ye("MapSet").proxySet_(e, t) : Ga(e, t);
  return (t ? t.scope_ : ri()).drafts_.push(r), r;
}
function ii(e) {
  return ue(e) || U(10, e), oi(e);
}
function oi(e) {
  if (!se(e) || vt(e))
    return e;
  const t = e[q];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Vt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Vt(e, !0);
  return Ae(r, (n, i) => {
    ti(r, n, oi(i));
  }), t && (t.finalized_ = !1), r;
}
var K = new Ua(), ai = K.produce;
K.produceWithPatches.bind(
  K
);
K.setAutoFreeze.bind(K);
K.setUseStrictShallowCopy.bind(K);
K.applyPatches.bind(K);
K.createDraft.bind(K);
K.finishDraft.bind(K);
var Ya = (e, t, r) => {
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
}, Xa = (e, t, r) => {
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
}, qa = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Ka(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ja(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Za(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var hn = (e) => Array.isArray(e) ? e : [e];
function Qa(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Za(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function pn(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var es = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...qa,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Ya
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Xa
    }
  };
}, ts = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, rs = typeof WeakRef < "u" ? WeakRef : ts, ns = 0, mn = 1;
function Je() {
  return {
    s: ns,
    v: void 0,
    o: null,
    p: null
  };
}
function vr(e, t = {}) {
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
    if (a.s === mn ? f = a.v : (f = e.apply(null, arguments), o++), c.s = mn, n) {
      const m = ((d = i == null ? void 0 : i.deref) == null ? void 0 : d.call(i)) ?? i;
      m != null && n(m, f) && (f = m, o !== 0 && o--), i = typeof f == "object" && f !== null || typeof f == "function" ? new rs(f) : f;
    }
    return c.v = f, f;
  }
  return l.clearCache = () => {
    r = Je(), l.resetResultsCount();
  }, l.resultsCount = () => o, l.resetResultsCount = () => {
    o = 0;
  }, l;
}
function si(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, l = 0, a, u = {}, c = i.pop();
    typeof c == "object" && (u = c, c = i.pop()), Ka(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const f = {
      ...r,
      ...u
    }, {
      memoize: d,
      memoizeOptions: m = [],
      argsMemoize: g = vr,
      argsMemoizeOptions: v = [],
      devModeChecks: p = {}
    } = f, b = hn(m), R = hn(v), w = Qa(i), _ = d(function() {
      return o++, c.apply(
        null,
        arguments
      );
    }, ...b);
    let S = !0;
    const T = g(function() {
      l++;
      const I = pn(
        w,
        arguments
      );
      if (a = _.apply(null, I), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: N, inputStabilityCheck: te } = es(S, p);
        if (N.shouldRun && N.run(
          c,
          I,
          a
        ), te.shouldRun) {
          const de = pn(
            w,
            arguments
          );
          te.run(
            { inputSelectorResults: I, inputSelectorResultsCopy: de },
            { memoize: d, memoizeOptions: b },
            arguments
          );
        }
        S && (S = !1);
      }
      return a;
    }, ...R);
    return Object.assign(T, {
      resultFunc: c,
      memoizedResultFunc: _,
      dependencies: w,
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
var is = /* @__PURE__ */ si(vr), os = Object.assign(
  (e, t = is) => {
    Ja(
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
  { withTypes: () => os }
), as = (...e) => {
  const t = si(...e), r = Object.assign((...n) => {
    const i = t(...n), o = (l, ...a) => i(ue(l) ? ii(l) : l, ...a);
    return Object.assign(o, i), o;
  }, {
    withTypes: () => r
  });
  return r;
};
as(vr);
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => ja(n) && n.type === e, r;
}
function vn(e) {
  return se(e) ? ai(e, () => {
  }) : e;
}
function yn(e, t, r) {
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
function li(e) {
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
function ss(e) {
  return typeof e == "function";
}
function ls(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? V(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = li(t), o;
  if (ss(e))
    o = () => vn(e());
  else {
    const a = vn(e);
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
            return ai(f, (m) => d(m, u));
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
var us = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", cs = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += us[Math.random() * 64 | 0];
  return t;
}, fs = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ds(e, t) {
  return `${e}/${t}`;
}
function hs({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[fs];
  return function(i) {
    const {
      name: o,
      reducerPath: l = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? V(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(vs()) : i.reducers) || {}, u = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(_, S) {
        const T = typeof _ == "string" ? _ : _.type;
        if (!T)
          throw new Error(process.env.NODE_ENV === "production" ? V(12) : "`context.addCase` cannot be called with an empty action type");
        if (T in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? V(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + T);
        return c.sliceCaseReducersByType[T] = S, f;
      },
      addMatcher(_, S) {
        return c.sliceMatchers.push({
          matcher: _,
          reducer: S
        }), f;
      },
      exposeAction(_, S) {
        return c.actionCreators[_] = S, f;
      },
      exposeCaseReducer(_, S) {
        return c.sliceCaseReducersByName[_] = S, f;
      }
    };
    u.forEach((_) => {
      const S = a[_], T = {
        reducerName: _,
        type: ds(o, _),
        createNotation: typeof i.reducers == "function"
      };
      gs(S) ? bs(T, S, f, t) : ys(T, S, f);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? V(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [_ = {}, S = [], T = void 0] = typeof i.extraReducers == "function" ? li(i.extraReducers) : [i.extraReducers], D = {
        ..._,
        ...c.sliceCaseReducersByType
      };
      return ls(i.initialState, (I) => {
        for (let N in D)
          I.addCase(N, D[N]);
        for (let N of c.sliceMatchers)
          I.addMatcher(N.matcher, N.reducer);
        for (let N of S)
          I.addMatcher(N.matcher, N.reducer);
        T && I.addDefaultCase(T);
      });
    }
    const m = (_) => _, g = /* @__PURE__ */ new Map();
    let v;
    function p(_, S) {
      return v || (v = d()), v(_, S);
    }
    function b() {
      return v || (v = d()), v.getInitialState();
    }
    function R(_, S = !1) {
      function T(I) {
        let N = I[_];
        if (typeof N > "u") {
          if (S)
            N = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? V(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return N;
      }
      function D(I = m) {
        const N = yn(g, S, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return yn(N, I, {
          insert: () => {
            const te = {};
            for (const [de, ne] of Object.entries(i.selectors ?? {}))
              te[de] = ps(ne, I, b, S);
            return te;
          }
        });
      }
      return {
        reducerPath: _,
        getSelectors: D,
        get selectors() {
          return D(T);
        },
        selectSlice: T
      };
    }
    const w = {
      name: o,
      reducer: p,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: b,
      ...R(l),
      injectInto(_, {
        reducerPath: S,
        ...T
      } = {}) {
        const D = S ?? l;
        return _.inject({
          reducerPath: D,
          reducer: p
        }, T), {
          ...w,
          ...R(D, !0)
        };
      }
    };
    return w;
  };
}
function ps(e, t, r, n) {
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
var ms = /* @__PURE__ */ hs();
function vs() {
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
function ys({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, l;
  if ("reducer" in n) {
    if (r && !_s(n))
      throw new Error(process.env.NODE_ENV === "production" ? V(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, l = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, l ? Oe(e, l) : Oe(e));
}
function gs(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function _s(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function bs({
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
var Es = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? V(32) : `${t} is not a function`);
}, yr = "listenerMiddleware", Ss = (e) => {
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
  return Es(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, Ts = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Ss(e);
  return {
    id: cs(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? V(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Ts
}), ws = Object.assign(Oe(`${yr}/add`), {
  withTypes: () => ws
});
Oe(`${yr}/removeAll`);
var Cs = Object.assign(Oe(`${yr}/remove`), {
  withTypes: () => Cs
});
function V(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Os = {
  name: "",
  isOpen: !1,
  item: null
}, ui = ms({
  name: "viewer",
  initialState: Os,
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
}), { setIsOpen: xs, setContent: Rs, setName: pl } = ui.actions;
ui.reducer;
var It = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Ps() {
  if (gn)
    return It;
  gn = 1;
  var e = Z;
  function t(u, c) {
    return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, l = e.useMemo, a = e.useDebugValue;
  return It.useSyncExternalStoreWithSelector = function(u, c, f, d, m) {
    var g = i(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else
      v = g.current;
    g = l(function() {
      function b(T) {
        if (!R) {
          if (R = !0, w = T, T = d(T), m !== void 0 && v.hasValue) {
            var D = v.value;
            if (m(D, T))
              return _ = D;
          }
          return _ = T;
        }
        if (D = _, r(w, T))
          return D;
        var I = d(T);
        return m !== void 0 && m(D, I) ? D : (w = T, _ = I);
      }
      var R = !1, w, _, S = f === void 0 ? null : f;
      return [function() {
        return b(c());
      }, S === null ? void 0 : function() {
        return b(S());
      }];
    }, [c, f, d, m]);
    var p = n(u, g[0], g[1]);
    return o(function() {
      v.hasValue = !0, v.value = p;
    }, [p]), a(p), p;
  }, It;
}
var Nt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Ds() {
  return _n || (_n = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Z;
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
        var S = !1, T, D, I = function(ne) {
          if (!S) {
            S = !0, T = ne;
            var _e = m(ne);
            if (g !== void 0 && p.hasValue) {
              var X = p.value;
              if (g(X, _e))
                return D = X, X;
            }
            return D = _e, _e;
          }
          var ie = T, oe = D;
          if (r(ie, ne))
            return oe;
          var be = m(ne);
          return g !== void 0 && g(oe, be) ? oe : (T = ne, D = be, be);
        }, N = d === void 0 ? null : d, te = function() {
          return I(f());
        }, de = N === null ? void 0 : function() {
          return I(N());
        };
        return [te, de];
      }, [f, d, m, g]), R = b[0], w = b[1], _ = n(c, R, w);
      return o(function() {
        p.hasValue = !0, p.value = _;
      }, [_]), a(_), _;
    }
    Nt.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Nt;
}
process.env.NODE_ENV === "production" ? Ps() : Ds();
var ve = (
  // prettier-ignore
  // @ts-ignore
  "default" in Ct ? Ct.default : Ct
), bn = Symbol.for("react-redux-context"), En = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ks() {
  if (!ve.createContext)
    return {};
  const e = En[bn] ?? (En[bn] = /* @__PURE__ */ new Map());
  let t = e.get(ve.createContext);
  return t || (t = ve.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ve.createContext, t)), t;
}
var Fe = /* @__PURE__ */ ks();
function ci(e = Fe) {
  return function() {
    const r = ve.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Is = /* @__PURE__ */ ci(), Ns = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
Ns ? ve.useLayoutEffect : ve.useEffect;
function fi(e = Fe) {
  const t = e === Fe ? Is : (
    // @ts-ignore
    ci(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Ms = /* @__PURE__ */ fi();
function As(e = Fe) {
  const t = e === Fe ? Ms : fi(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var js = /* @__PURE__ */ As();
function Ls({ className: e = "", ...t }) {
  return /* @__PURE__ */ C.jsx(
    "button",
    {
      className: `viewer__button-close absolute top-0 left-0 w-10 h-10 text-2xl rounded-tl-md md:rounded-tl-lg shadow-lg
    ${Cn} 
    ${Q}
    ${e}
    `,
      onClick: t.onClick,
      ...t,
      children: "X"
    }
  );
}
function ml({ children: e, item: t, ...r }) {
  const n = js();
  function i() {
    document.querySelector(".viewer").classList.add("anim-to-left-fade-out"), setTimeout(() => {
      n(xs(!1)), n(Rs(t));
    }, 1e3);
  }
  function o(l) {
    setTimeout(() => {
      document.querySelector(l).classList.remove("anim-to-left-fade-in");
    }, 1e3);
  }
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: "viewer fixed z-40 top-[2%] md:top-[5%] left-[2%] md:left-[5%] w-[96%] h-[96%] md:w-[90%] md:h-[90%] overflow-hidden anim-to-left-fade-in anim-duration--fast border bg-black rounded-md md:rounded-lg",
      onLoad: () => o(".viewer"),
      ...r,
      children: [
        /* @__PURE__ */ C.jsx(er, { className: "viewer__content absolute inset-0 overflow-y-auto h-full w-full my-4 sm:my-0 p-2 xs:p-4 lg:p-8", children: e }),
        /* @__PURE__ */ C.jsx(Ls, { onClick: i })
      ]
    }
  );
}
function vl({ links: e, className: t, ...r }) {
  return /* @__PURE__ */ C.jsx(
    er,
    {
      ...r,
      className: "flex justify-center",
      children: e == null ? void 0 : e.map((n, i) => /* @__PURE__ */ C.jsx(
        Gt,
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
  return /* @__PURE__ */ C.jsx(
    "a",
    {
      className: `block w-12 mx-4 hover:scale-110 hover-darken 
      ${Q} 
      ${l}
      `,
      href: t,
      target: i,
      ...a,
      children: /* @__PURE__ */ C.jsx(
        "img",
        {
          src: e,
          className: `w-full ${o}`,
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
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: `relative w-full pt-[56.25%] 
    ${r}`,
      ...ge,
      ...n,
      children: /* @__PURE__ */ C.jsx(
        "iframe",
        {
          src: e,
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
  return /* @__PURE__ */ C.jsx(
    "img",
    {
      src: "/img/spinner.gif",
      alt: "loading spinner",
      className: "w-8 my-4 mx-auto"
    }
  );
}
function Fs(e) {
  return e.length === 0;
}
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isEmpty: Fs
}, Symbol.toStringTag, { value: "Module" }));
function Vs(e, t) {
  const r = document.getElementById(t);
  r && e.observe(r);
}
function $s(e, t) {
  const r = document.getElementById(t);
  r && e.unobserve(r);
}
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  observeDOM: Vs,
  unobserveDOM: $s
}, Symbol.toStringTag, { value: "Module" }));
function Ws(e, t = 0) {
  return Math.floor(Math.random() * (e - t)) + t;
}
function zs(e) {
  const t = document.querySelector(e);
  t && window.scrollTo({
    top: t.offsetTop - 80,
    behavior: "smooth"
  });
}
function Bs(e) {
  return 'url("' + e + '")';
}
function Gs(e) {
  return e === "" ? "javascript:void(0);" : e;
}
const Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adaptHref: Gs,
  getImageUrl: Bs,
  getRandomInt: Ws,
  scrollToAnchor: zs
}, Symbol.toStringTag, { value: "Module" }));
function Hs(e) {
  return e === 0 || e === "" || e === void 0;
}
function Us(e) {
  return e === void 0;
}
function Ys(e) {
  return e = e.split("-"), new Date(e[0], e[1] - 1).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long"
  });
}
const Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDateTextYYYYMM: Ys,
  isNull: Us,
  isNullOrZero: Hs
}, Symbol.toStringTag, { value: "Module" }));
export {
  bl as ArrayHelper,
  vl as ButtonGroupLink,
  Gt as ButtonLink,
  Js as ButtonLinkBig,
  Zs as ButtonLinkXL,
  Qs as ButtonNoLink,
  er as DivDefault,
  el as ElementCarousel,
  Do as GroupInputLabel,
  gl as IFrame,
  yl as IconLink,
  ol as Image,
  al as ImageLink,
  il as InputText,
  Po as Label,
  _l as LoadingSpinner,
  El as ObserverHelper,
  tl as Paragraph,
  Ks as PropsAssets,
  $i as Section,
  rl as SectionBig,
  sl as Separator,
  qs as StyleAssets,
  nl as TextLink,
  ll as TitleH1,
  ul as TitleH2,
  cl as TitleH3,
  fl as TitleH4,
  dl as TitleH5,
  hl as TitleH6,
  Sl as Util,
  Tl as VariableHelper,
  ml as Viewer,
  ui as viewerSlice
};
