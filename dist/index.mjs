import * as st from "react";
import da, { useEffect as ZM, useState as JM } from "react";
var dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sx(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var GE = { exports: {} }, dv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gb;
function eN() {
  if (gb)
    return dv;
  gb = 1;
  var l = da, f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, S = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(x, T, b) {
    var D, O = {}, L = null, A = null;
    b !== void 0 && (L = "" + b), T.key !== void 0 && (L = "" + T.key), T.ref !== void 0 && (A = T.ref);
    for (D in T)
      m.call(T, D) && !w.hasOwnProperty(D) && (O[D] = T[D]);
    if (x && x.defaultProps)
      for (D in T = x.defaultProps, T)
        O[D] === void 0 && (O[D] = T[D]);
    return { $$typeof: f, type: x, key: L, ref: A, props: O, _owner: S.current };
  }
  return dv.Fragment = d, dv.jsx = g, dv.jsxs = g, dv;
}
var pv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sb;
function tN() {
  return Sb || (Sb = 1, process.env.NODE_ENV !== "production" && function() {
    var l = da, f = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), x = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), N = Symbol.iterator, U = "@@iterator";
    function q(M) {
      if (M === null || typeof M != "object")
        return null;
      var oe = N && M[N] || M[U];
      return typeof oe == "function" ? oe : null;
    }
    var ee = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(M) {
      {
        for (var oe = arguments.length, Ee = new Array(oe > 1 ? oe - 1 : 0), Xe = 1; Xe < oe; Xe++)
          Ee[Xe - 1] = arguments[Xe];
        V("error", M, Ee);
      }
    }
    function V(M, oe, Ee) {
      {
        var Xe = ee.ReactDebugCurrentFrame, pt = Xe.getStackAddendum();
        pt !== "" && (oe += "%s", Ee = Ee.concat([pt]));
        var Ot = Ee.map(function(ht) {
          return String(ht);
        });
        Ot.unshift("Warning: " + oe), Function.prototype.apply.call(console[M], console, Ot);
      }
    }
    var $ = !1, K = !1, fe = !1, re = !1, Ce = !1, pe;
    pe = Symbol.for("react.module.reference");
    function _e(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === m || M === w || Ce || M === S || M === b || M === D || re || M === A || $ || K || fe || typeof M == "object" && M !== null && (M.$$typeof === L || M.$$typeof === O || M.$$typeof === g || M.$$typeof === x || M.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === pe || M.getModuleId !== void 0));
    }
    function be(M, oe, Ee) {
      var Xe = M.displayName;
      if (Xe)
        return Xe;
      var pt = oe.displayName || oe.name || "";
      return pt !== "" ? Ee + "(" + pt + ")" : Ee;
    }
    function Pe(M) {
      return M.displayName || "Context";
    }
    function ce(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && Q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case m:
          return "Fragment";
        case d:
          return "Portal";
        case w:
          return "Profiler";
        case S:
          return "StrictMode";
        case b:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case x:
            var oe = M;
            return Pe(oe) + ".Consumer";
          case g:
            var Ee = M;
            return Pe(Ee._context) + ".Provider";
          case T:
            return be(M, M.render, "ForwardRef");
          case O:
            var Xe = M.displayName || null;
            return Xe !== null ? Xe : ce(M.type) || "Memo";
          case L: {
            var pt = M, Ot = pt._payload, ht = pt._init;
            try {
              return ce(ht(Ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ie = Object.assign, wt = 0, mt, Nn, ve, Fe, Te, St, bt;
    function yn() {
    }
    yn.__reactDisabledLog = !0;
    function pn() {
      {
        if (wt === 0) {
          mt = console.log, Nn = console.info, ve = console.warn, Fe = console.error, Te = console.group, St = console.groupCollapsed, bt = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: yn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        wt++;
      }
    }
    function Lr() {
      {
        if (wt--, wt === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ie({}, M, {
              value: mt
            }),
            info: Ie({}, M, {
              value: Nn
            }),
            warn: Ie({}, M, {
              value: ve
            }),
            error: Ie({}, M, {
              value: Fe
            }),
            group: Ie({}, M, {
              value: Te
            }),
            groupCollapsed: Ie({}, M, {
              value: St
            }),
            groupEnd: Ie({}, M, {
              value: bt
            })
          });
        }
        wt < 0 && Q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zt = ee.ReactCurrentDispatcher, gn;
    function bn(M, oe, Ee) {
      {
        if (gn === void 0)
          try {
            throw Error();
          } catch (pt) {
            var Xe = pt.stack.trim().match(/\n( *(at )?)/);
            gn = Xe && Xe[1] || "";
          }
        return `
` + gn + M;
      }
    }
    var Ln = !1, ue;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ye();
    }
    function nt(M, oe) {
      if (!M || Ln)
        return "";
      {
        var Ee = ue.get(M);
        if (Ee !== void 0)
          return Ee;
      }
      var Xe;
      Ln = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ot;
      Ot = zt.current, zt.current = null, pn();
      try {
        if (oe) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (Mt) {
              Xe = Mt;
            }
            Reflect.construct(M, [], ht);
          } else {
            try {
              ht.call();
            } catch (Mt) {
              Xe = Mt;
            }
            M.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mt) {
            Xe = Mt;
          }
          M();
        }
      } catch (Mt) {
        if (Mt && Xe && typeof Mt.stack == "string") {
          for (var Ke = Mt.stack.split(`
`), $n = Xe.stack.split(`
`), nn = Ke.length - 1, rn = $n.length - 1; nn >= 1 && rn >= 0 && Ke[nn] !== $n[rn]; )
            rn--;
          for (; nn >= 1 && rn >= 0; nn--, rn--)
            if (Ke[nn] !== $n[rn]) {
              if (nn !== 1 || rn !== 1)
                do
                  if (nn--, rn--, rn < 0 || Ke[nn] !== $n[rn]) {
                    var Er = `
` + Ke[nn].replace(" at new ", " at ");
                    return M.displayName && Er.includes("<anonymous>") && (Er = Er.replace("<anonymous>", M.displayName)), typeof M == "function" && ue.set(M, Er), Er;
                  }
                while (nn >= 1 && rn >= 0);
              break;
            }
        }
      } finally {
        Ln = !1, zt.current = Ot, Lr(), Error.prepareStackTrace = pt;
      }
      var Qi = M ? M.displayName || M.name : "", Xs = Qi ? bn(Qi) : "";
      return typeof M == "function" && ue.set(M, Xs), Xs;
    }
    function Be(M, oe, Ee) {
      return nt(M, !1);
    }
    function He(M) {
      var oe = M.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function et(M, oe, Ee) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return nt(M, He(M));
      if (typeof M == "string")
        return bn(M);
      switch (M) {
        case b:
          return bn("Suspense");
        case D:
          return bn("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case T:
            return Be(M.render);
          case O:
            return et(M.type, oe, Ee);
          case L: {
            var Xe = M, pt = Xe._payload, Ot = Xe._init;
            try {
              return et(Ot(pt), oe, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, Qe = {}, ot = ee.ReactDebugCurrentFrame;
    function vt(M) {
      if (M) {
        var oe = M._owner, Ee = et(M.type, M._source, oe ? oe.type : null);
        ot.setExtraStackFrame(Ee);
      } else
        ot.setExtraStackFrame(null);
    }
    function dt(M, oe, Ee, Xe, pt) {
      {
        var Ot = Function.call.bind(Ye);
        for (var ht in M)
          if (Ot(M, ht)) {
            var Ke = void 0;
            try {
              if (typeof M[ht] != "function") {
                var $n = Error((Xe || "React class") + ": " + Ee + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $n.name = "Invariant Violation", $n;
              }
              Ke = M[ht](oe, ht, Xe, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              Ke = nn;
            }
            Ke && !(Ke instanceof Error) && (vt(pt), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Xe || "React class", Ee, ht, typeof Ke), vt(null)), Ke instanceof Error && !(Ke.message in Qe) && (Qe[Ke.message] = !0, vt(pt), Q("Failed %s type: %s", Ee, Ke.message), vt(null));
          }
      }
    }
    var ge = Array.isArray;
    function Ut(M) {
      return ge(M);
    }
    function qt(M) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, Ee = oe && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Ee;
      }
    }
    function Xr(M) {
      try {
        return qr(M), !1;
      } catch {
        return !0;
      }
    }
    function qr(M) {
      return "" + M;
    }
    function ja(M) {
      if (Xr(M))
        return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qt(M)), qr(M);
    }
    var xn = ee.ReactCurrentOwner, Kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wi, Fa, Se;
    Se = {};
    function $e(M) {
      if (Ye.call(M, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function yt(M) {
      if (Ye.call(M, "key")) {
        var oe = Object.getOwnPropertyDescriptor(M, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Ft(M, oe) {
      if (typeof M.ref == "string" && xn.current && oe && xn.current.stateNode !== oe) {
        var Ee = ce(xn.current.type);
        Se[Ee] || (Q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ce(xn.current.type), M.ref), Se[Ee] = !0);
      }
    }
    function ln(M, oe) {
      {
        var Ee = function() {
          Wi || (Wi = !0, Q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        Ee.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function Bn(M, oe) {
      {
        var Ee = function() {
          Fa || (Fa = !0, Q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        Ee.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var Sn = function(M, oe, Ee, Xe, pt, Ot, ht) {
      var Ke = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: M,
        key: oe,
        ref: Ee,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: Ot
      };
      return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.defineProperty(Ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
    };
    function Ar(M, oe, Ee, Xe, pt) {
      {
        var Ot, ht = {}, Ke = null, $n = null;
        Ee !== void 0 && (ja(Ee), Ke = "" + Ee), yt(oe) && (ja(oe.key), Ke = "" + oe.key), $e(oe) && ($n = oe.ref, Ft(oe, pt));
        for (Ot in oe)
          Ye.call(oe, Ot) && !Kr.hasOwnProperty(Ot) && (ht[Ot] = oe[Ot]);
        if (M && M.defaultProps) {
          var nn = M.defaultProps;
          for (Ot in nn)
            ht[Ot] === void 0 && (ht[Ot] = nn[Ot]);
        }
        if (Ke || $n) {
          var rn = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Ke && ln(ht, rn), $n && Bn(ht, rn);
        }
        return Sn(M, Ke, $n, pt, Xe, xn.current, ht);
      }
    }
    var Qt = ee.ReactCurrentOwner, Zr = ee.ReactDebugCurrentFrame;
    function $t(M) {
      if (M) {
        var oe = M._owner, Ee = et(M.type, M._source, oe ? oe.type : null);
        Zr.setExtraStackFrame(Ee);
      } else
        Zr.setExtraStackFrame(null);
    }
    var Xt;
    Xt = !1;
    function Rl(M) {
      return typeof M == "object" && M !== null && M.$$typeof === f;
    }
    function No() {
      {
        if (Qt.current) {
          var M = ce(Qt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function _l(M) {
      {
        if (M !== void 0) {
          var oe = M.fileName.replace(/^.*[\\\/]/, ""), Ee = M.lineNumber;
          return `

Check your code at ` + oe + ":" + Ee + ".";
        }
        return "";
      }
    }
    var Nu = {};
    function Qs(M) {
      {
        var oe = No();
        if (!oe) {
          var Ee = typeof M == "string" ? M : M.displayName || M.name;
          Ee && (oe = `

Check the top-level render call using <` + Ee + ">.");
        }
        return oe;
      }
    }
    function Lo(M, oe) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Ee = Qs(oe);
        if (Nu[Ee])
          return;
        Nu[Ee] = !0;
        var Xe = "";
        M && M._owner && M._owner !== Qt.current && (Xe = " It was passed a child from " + ce(M._owner.type) + "."), $t(M), Q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Xe), $t(null);
      }
    }
    function Dl(M, oe) {
      {
        if (typeof M != "object")
          return;
        if (Ut(M))
          for (var Ee = 0; Ee < M.length; Ee++) {
            var Xe = M[Ee];
            Rl(Xe) && Lo(Xe, oe);
          }
        else if (Rl(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var pt = q(M);
          if (typeof pt == "function" && pt !== M.entries)
            for (var Ot = pt.call(M), ht; !(ht = Ot.next()).done; )
              Rl(ht.value) && Lo(ht.value, oe);
        }
      }
    }
    function Ao(M) {
      {
        var oe = M.type;
        if (oe == null || typeof oe == "string")
          return;
        var Ee;
        if (typeof oe == "function")
          Ee = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === O))
          Ee = oe.propTypes;
        else
          return;
        if (Ee) {
          var Xe = ce(oe);
          dt(Ee, M.props, "prop", Xe, M);
        } else if (oe.PropTypes !== void 0 && !Xt) {
          Xt = !0;
          var pt = ce(oe);
          Q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && Q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ol(M) {
      {
        for (var oe = Object.keys(M.props), Ee = 0; Ee < oe.length; Ee++) {
          var Xe = oe[Ee];
          if (Xe !== "children" && Xe !== "key") {
            $t(M), Q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Xe), $t(null);
            break;
          }
        }
        M.ref !== null && ($t(M), Q("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function ei(M, oe, Ee, Xe, pt, Ot) {
      {
        var ht = _e(M);
        if (!ht) {
          var Ke = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $n = _l(pt);
          $n ? Ke += $n : Ke += No();
          var nn;
          M === null ? nn = "null" : Ut(M) ? nn = "array" : M !== void 0 && M.$$typeof === f ? (nn = "<" + (ce(M.type) || "Unknown") + " />", Ke = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof M, Q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, Ke);
        }
        var rn = Ar(M, oe, Ee, pt, Ot);
        if (rn == null)
          return rn;
        if (ht) {
          var Er = oe.children;
          if (Er !== void 0)
            if (Xe)
              if (Ut(Er)) {
                for (var Qi = 0; Qi < Er.length; Qi++)
                  Dl(Er[Qi], M);
                Object.freeze && Object.freeze(Er);
              } else
                Q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dl(Er, M);
        }
        return M === m ? Ol(rn) : Ao(rn), rn;
      }
    }
    function Yi(M, oe, Ee) {
      return ei(M, oe, Ee, !0);
    }
    function Jr(M, oe, Ee) {
      return ei(M, oe, Ee, !1);
    }
    var Ha = Jr, Gi = Yi;
    pv.Fragment = m, pv.jsx = Ha, pv.jsxs = Gi;
  }()), pv;
}
process.env.NODE_ENV === "production" ? GE.exports = eN() : GE.exports = tN();
var je = GE.exports;
const Bi = "animation-all duration-200 ", nN = "bg-orange-900 hover:bg-orange-800 ", a2 = "bg-neutral-900 hover:bg-neutral-800 ", rN = "bg-neutral-800 ", aN = "bg-red-600 hover:bg-red-500 border border-red-300 ", iN = "shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ", Ys = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000"
};
function cx({
  children: l,
  href: f = "",
  className: d = "",
  isLarger: m = !1,
  isColored: S = !0,
  isTransitionEnabled: w = !1,
  ...g
}) {
  return /* @__PURE__ */ je.jsx(
    "button",
    {
      className: `rounded-full 
    ${m ? "my-4 " : "my-2 "} 
    ${S ? nN : ""} 
    ${Bi} 
    ${d}`,
      ...g,
      ...w ? Ys : {},
      children: /* @__PURE__ */ je.jsx(
        "a",
        {
          className: `block px-4 w-full h-full 
      ${m ? "p-4" : "p-2"}
      `,
          href: f,
          children: l
        }
      )
    }
  );
}
function i2({
  children: l,
  className: f = "",
  ...d
}) {
  return /* @__PURE__ */ je.jsx(cx, { className: `w-full md:w-1/2 md:mr-[25%] md:ml-[25%]
    ${f}`, ...d, children: l });
}
function o2({
  children: l,
  className: f = "",
  ...d
}) {
  return /* @__PURE__ */ je.jsx(
    cx,
    {
      className: `w-full ${f}`,
      isColored: !0,
      isLarger: !0,
      isTransitionEnabled: !0,
      ...d,
      children: l
    }
  );
}
function oN({
  children: l,
  className: f = "",
  isLarger: d = !1,
  isColored: m = !0,
  ...S
}) {
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `rounded-full p-1 lg:p-2 px-4 mb-2 lg:mb-4 text-center 
      ${Bi} 
      ${d ? "w-1/2 mx-auto" : "mx-1 lg:mx-2"} 
      ${m ? rN : ""} 
      ${f}
      `,
      ...S,
      children: l
    }
  );
}
function l2({
  children: l,
  className: f = "",
  isColored: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    oN,
    {
      className: `cursor-pointer 
    ${f}`,
      isColored: d,
      ...m,
      children: l
    }
  );
}
function lN({
  children: l,
  forInput: f,
  className: d = "",
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "label",
    {
      for: f,
      className: `mr-2 ${d}`,
      ...m,
      children: l
    }
  );
}
function fx({
  children: l,
  className: f = "",
  transitionEnabled: d = !1,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: "py-4 " + f,
      ...m,
      ...d ? Ys : {},
      children: l
    }
  );
}
function uN({
  children: l,
  type: f,
  id: d,
  name: m,
  className: S,
  ...w
}) {
  return /* @__PURE__ */ je.jsxs(fx, { children: [
    /* @__PURE__ */ je.jsx(lN, { children: l }),
    /* @__PURE__ */ je.jsx(uN, {})
  ] });
}
function u2({
  children: l,
  type: f,
  id: d,
  name: m,
  className: S = "",
  ...w
}) {
  return /* @__PURE__ */ je.jsx(
    "input",
    {
      type: f,
      id: d,
      name: m || d,
      className: `w-full md:w-1/2 bg-neutral-900 p-2 rounded-full + ${S}`,
      ...w
    }
  );
}
function s2({
  children: l,
  className: f = "",
  ...d
}) {
  return /* @__PURE__ */ je.jsx(
    "section",
    {
      className: "py-16 sm:py-24 lg:py-32 " + f,
      ...d,
      children: l
    }
  );
}
var oC = {}, lC = {}, wn = {}, Iy = {};
(function(l) {
  function f(g, x, T) {
    var b = x.slidesToShow, D = x.currentSlide;
    return T.length > 2 * b ? g + 2 * b : D >= T.length ? T.length + g : g;
  }
  function d(g, x) {
    if (x.length > 2 * g) {
      for (var T = {}, b = x.length - 2 * g, D = x.length - b, O = b, L = 0; L < D; L++)
        T[L] = O, O++;
      var A = x.length + D, N = A + x.slice(0, 2 * g).length, U = 0;
      for (L = A; L <= N; L++)
        T[L] = U, U++;
      var q = A, ee = 0;
      for (L = D; L < q; L++)
        T[L] = ee, ee++;
      return T;
    }
    T = {};
    var Q = 3 * x.length, V = 0;
    for (L = 0; L < Q; L++)
      T[L] = V, ++V === x.length && (V = 0);
    return T;
  }
  function m(g, x) {
    return x.length < g ? x : x.length > 2 * g ? x.slice(x.length - 2 * g, x.length).concat(x, x.slice(0, 2 * g)) : x.concat(x, x);
  }
  function S(g, x) {
    return x.length > 2 * g ? 2 * g : x.length;
  }
  function w(g, x, T) {
    var b, D = g.currentSlide, O = g.slidesToShow, L = g.itemWidth, A = g.totalItems, N = 0, U = 0, q = D === 0, ee = x.length - (x.length - 2 * O);
    return x.length < O ? (U = N = 0, q = b = !1) : x.length > 2 * O ? ((b = D >= ee + x.length) && (U = -L * (N = D - x.length)), q && (U = -L * (N = ee + (x.length - 2 * O)))) : ((b = D >= 2 * x.length) && (U = -L * (N = D - x.length)), q && (U = T.showDots ? -L * (N = x.length) : -L * (N = A / 3))), { isReachingTheEnd: b, isReachingTheStart: q, nextSlide: N, nextPosition: U };
  }
  Object.defineProperty(l, "__esModule", { value: !0 }), l.getOriginalCounterPart = f, l.getOriginalIndexLookupTableByClones = d, l.getClones = m, l.getInitialSlideInInfiniteMode = S, l.checkClonesPosition = w;
})(Iy);
var Bf = {};
Object.defineProperty(Bf, "__esModule", { value: !0 });
var Eb = !1;
function sN(l, f, d, m) {
  var S = 0, w = m || d;
  return f && w && (!Eb && process.env.NODE_ENV !== "production" && l[w].paritialVisibilityGutter && (Eb = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), S = l[w].partialVisibilityGutter || l[w].paritialVisibilityGutter), S;
}
function cN(l, f) {
  var d;
  return f[l] && (d = (100 / f[l].items).toFixed(1)), d;
}
function fN(l, f, d) {
  return Math.round(d / (f + (l.centerMode ? 1 : 0)));
}
Bf.getPartialVisibilityGutter = sN, Bf.getWidthFromDeviceType = cN, Bf.getItemClientSideWidth = fN;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
var QE = Bf;
function uC(l) {
  var f = l.slidesToShow;
  return l.totalItems < f;
}
function dN(l, f) {
  var d, m = l.domLoaded, S = l.slidesToShow, w = l.containerWidth, g = l.itemWidth, x = f.deviceType, T = f.responsive, b = f.ssr, D = f.partialVisbile, O = f.partialVisible, L = !!(m && S && w && g);
  b && x && !L && (d = QE.getWidthFromDeviceType(x, T));
  var A = !!(b && x && !L && d);
  return { shouldRenderOnSSR: A, flexBisis: d, domFullyLoaded: L, partialVisibilityGutter: QE.getPartialVisibilityGutter(T, D || O, x, l.deviceType), shouldRenderAtAll: A || L };
}
function pN(l, f) {
  var d = f.currentSlide, m = f.slidesToShow;
  return d <= l && l < d + m;
}
function dx(l, f, d) {
  var m = d || l.transform;
  return !f.infinite && l.currentSlide === 0 || uC(l) ? m : m + l.itemWidth / 2;
}
function vN(l) {
  return !(0 < l.currentSlide);
}
function px(l) {
  var f = l.currentSlide, d = l.totalItems;
  return !(f + l.slidesToShow < d);
}
function vx(l, f, d, m) {
  f === void 0 && (f = 0);
  var S = l.currentSlide, w = l.slidesToShow, g = px(l), x = !d.infinite && g, T = m || l.transform;
  if (uC(l))
    return T;
  var b = T + S * f;
  return x ? b + (l.containerWidth - (l.itemWidth - f) * w) : b;
}
function hx(l, f) {
  return l.rtl ? -1 * f : f;
}
function hN(l, f, d) {
  var m = f.partialVisbile, S = f.partialVisible, w = f.responsive, g = f.deviceType, x = f.centerMode, T = d || l.transform, b = QE.getPartialVisibilityGutter(w, m || S, g, l.deviceType);
  return hx(f, S || m ? vx(l, b, f, d) : x ? dx(l, f, d) : T);
}
function mN(l, f) {
  var d = l.domLoaded, m = l.slidesToShow, S = l.containerWidth, w = l.itemWidth, g = f.deviceType, x = f.responsive, T = f.slidesToSlide || 1, b = !!(d && m && S && w);
  return f.ssr && f.deviceType && !b && Object.keys(x).forEach(function(D) {
    var O = x[D].slidesToSlide;
    g === D && O && (T = O);
  }), b && Object.keys(x).forEach(function(D) {
    var O = x[D], L = O.breakpoint, A = O.slidesToSlide, N = L.max, U = L.min;
    A && window.innerWidth >= U && window.innerWidth <= N && (T = A);
  }), T;
}
gr.notEnoughChildren = uC, gr.getInitialState = dN, gr.getIfSlideIsVisbile = pN, gr.getTransformForCenterMode = dx, gr.isInLeftEnd = vN, gr.isInRightEnd = px, gr.getTransformForPartialVsibile = vx, gr.parsePosition = hx, gr.getTransform = hN, gr.getSlidesToSlide = mN;
var sC = {};
Object.defineProperty(sC, "__esModule", { value: !0 });
var yN = function(l, f, d) {
  var m;
  return function() {
    var S = arguments;
    m || (l.apply(this, S), m = !0, typeof d == "function" && d(!0), setTimeout(function() {
      m = !1, typeof d == "function" && d(!1);
    }, f));
  };
};
sC.default = yN;
var mx = {};
(function(l) {
  function f(d, m) {
    var S = m.partialVisbile, w = m.partialVisible, g = m.centerMode, x = m.ssr, T = m.responsive;
    if ((S || w) && g)
      throw new Error("center mode can not be used at the same time with partialVisible");
    if (!T)
      throw x ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    if (T && typeof T != "object")
      throw new Error("responsive prop must be an object");
  }
  Object.defineProperty(l, "__esModule", { value: !0 }), l.default = f;
})(mx);
var cC = {};
Object.defineProperty(cC, "__esModule", { value: !0 });
var gN = gr;
function SN(l, f, d) {
  d === void 0 && (d = 0);
  var m, S, w = l.slidesToShow, g = l.currentSlide, x = l.itemWidth, T = l.totalItems, b = gN.getSlidesToSlide(l, f), D = g + 1 + d + w + (0 < d ? 0 : b);
  return S = D <= T ? -x * (m = g + d + (0 < d ? 0 : b)) : T < D && g !== T - w ? -x * (m = T - w) : m = void 0, { nextSlides: m, nextPosition: S };
}
cC.populateNextSlides = SN;
var fC = {};
Object.defineProperty(fC, "__esModule", { value: !0 });
var EN = da, CN = gr, TN = gr;
function wN(l, f, d) {
  d === void 0 && (d = 0);
  var m, S, w = l.currentSlide, g = l.itemWidth, x = l.slidesToShow, T = f.children, b = f.showDots, D = f.infinite, O = CN.getSlidesToSlide(l, f), L = w - d - (0 < d ? 0 : O), A = (EN.Children.toArray(T).length - x) % O;
  return S = 0 <= L ? (m = L, b && !D && 0 < A && TN.isInRightEnd(l) && (m = w - A), -g * m) : m = L < 0 && w !== 0 ? 0 : void 0, { nextSlides: m, nextPosition: S };
}
fC.populatePreviousSlides = wN;
var yx = {};
(function(l) {
  function f(d, m, S, w, g, x) {
    var T, b, D = d.itemWidth, O = d.slidesToShow, L = d.totalItems, A = d.currentSlide, N = m.infinite, U = !1, q = Math.round((S - w) / D), ee = Math.round((w - S) / D), Q = S < g;
    if (g < S && q <= O) {
      T = "right";
      var V = Math.abs(-D * (L - O)), $ = x - (w - g), K = A === L - O;
      (Math.abs($) <= V || K && N) && (b = $, U = !0);
    }
    return Q && ee <= O && (T = "left", (($ = x + (g - w)) <= 0 || A === 0 && N) && (U = !0, b = $)), { direction: T, nextPosition: b, canContinue: U };
  }
  Object.defineProperty(l, "__esModule", { value: !0 }), l.populateSlidesOnMouseTouchMove = f;
})(yx);
Object.defineProperty(wn, "__esModule", { value: !0 });
var by = Iy;
wn.getOriginalCounterPart = by.getOriginalCounterPart, wn.getClones = by.getClones, wn.checkClonesPosition = by.checkClonesPosition, wn.getInitialSlideInInfiniteMode = by.getInitialSlideInInfiniteMode;
var zE = Bf;
wn.getWidthFromDeviceType = zE.getWidthFromDeviceType, wn.getPartialVisibilityGutter = zE.getPartialVisibilityGutter, wn.getItemClientSideWidth = zE.getItemClientSideWidth;
var Du = gr;
wn.getInitialState = Du.getInitialState, wn.getIfSlideIsVisbile = Du.getIfSlideIsVisbile, wn.getTransformForCenterMode = Du.getTransformForCenterMode, wn.getTransformForPartialVsibile = Du.getTransformForPartialVsibile, wn.isInLeftEnd = Du.isInLeftEnd, wn.isInRightEnd = Du.isInRightEnd, wn.notEnoughChildren = Du.notEnoughChildren, wn.getSlidesToSlide = Du.getSlidesToSlide;
var bN = sC;
wn.throttle = bN.default;
var xN = mx;
wn.throwError = xN.default;
var RN = cC;
wn.populateNextSlides = RN.populateNextSlides;
var _N = fC;
wn.populatePreviousSlides = _N.populatePreviousSlides;
var DN = yx;
wn.populateSlidesOnMouseTouchMove = DN.populateSlidesOnMouseTouchMove;
var By = {}, ON = dn && dn.__extends || /* @__PURE__ */ function() {
  var l = function(f, d) {
    return (l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, S) {
      m.__proto__ = S;
    } || function(m, S) {
      for (var w in S)
        S.hasOwnProperty(w) && (m[w] = S[w]);
    })(f, d);
  };
  return function(f, d) {
    function m() {
      this.constructor = f;
    }
    l(f, d), f.prototype = d === null ? Object.create(d) : (m.prototype = d.prototype, new m());
  };
}();
Object.defineProperty(By, "__esModule", { value: !0 });
var kN = da;
function MN(l) {
  return "clientY" in l;
}
By.isMouseMoveEvent = MN;
var NN = function(l) {
  function f() {
    return l !== null && l.apply(this, arguments) || this;
  }
  return ON(f, l), f;
}(kN.Component);
By.default = NN;
var dC = {}, pC = {};
Object.defineProperty(pC, "__esModule", { value: !0 });
var LN = Iy, AN = gr;
function zN(l, f, d, m) {
  var S = {}, w = AN.getSlidesToSlide(f, d);
  return Array(l).fill(0).forEach(function(g, x) {
    var T = LN.getOriginalCounterPart(x, f, m);
    if (x === 0)
      S[0] = T;
    else {
      var b = S[x - 1] + w;
      S[x] = b;
    }
  }), S;
}
pC.getLookupTableForNextSlides = zN;
Object.defineProperty(dC, "__esModule", { value: !0 });
var vv = da, UN = Iy, PN = pC, Cb = gr, jN = function(l) {
  var f = l.props, d = l.state, m = l.goToSlide, S = l.getState, w = f.showDots, g = f.customDot, x = f.dotListClass, T = f.infinite, b = f.children;
  if (!w || Cb.notEnoughChildren(d))
    return null;
  var D, O = d.currentSlide, L = d.slidesToShow, A = Cb.getSlidesToSlide(d, f), N = vv.Children.toArray(b);
  D = T ? Math.ceil(N.length / A) : Math.ceil((N.length - L) / A) + 1;
  var U = PN.getLookupTableForNextSlides(D, d, f, N), q = UN.getOriginalIndexLookupTableByClones(L, N), ee = q[O];
  return vv.createElement("ul", { className: "react-multi-carousel-dot-list " + x }, Array(D).fill(0).map(function(Q, V) {
    var $, K;
    if (T) {
      K = U[V];
      var fe = q[K];
      $ = ee === fe || fe <= ee && ee < fe + A;
    } else {
      var re = N.length - L, Ce = V * A;
      $ = (K = re < Ce ? re : Ce) === O || K < O && O < K + A && O < N.length - L;
    }
    return g ? vv.cloneElement(g, { index: V, active: $, key: V, onClick: function() {
      return m(K);
    }, carouselState: S() }) : vv.createElement("li", { "data-index": V, key: V, className: "react-multi-carousel-dot " + ($ ? "react-multi-carousel-dot--active" : "") }, vv.createElement("button", { "aria-label": "Go to slide " + (V + 1), onClick: function() {
      return m(K);
    } }));
  }));
};
dC.default = jN;
var $y = {};
Object.defineProperty($y, "__esModule", { value: !0 });
var Py = da, FN = function(l) {
  var f = l.customLeftArrow, d = l.getState, m = l.previous, S = l.disabled, w = l.rtl;
  if (f)
    return Py.cloneElement(f, { onClick: function() {
      return m();
    }, carouselState: d(), disabled: S, rtl: w });
  var g = w ? "rtl" : "";
  return Py.createElement("button", { "aria-label": "Go to previous slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + g, onClick: function() {
    return m();
  }, type: "button", disabled: S });
};
$y.LeftArrow = FN;
var HN = function(l) {
  var f = l.customRightArrow, d = l.getState, m = l.next, S = l.disabled, w = l.rtl;
  if (f)
    return Py.cloneElement(f, { onClick: function() {
      return m();
    }, carouselState: d(), disabled: S, rtl: w });
  var g = w ? "rtl" : "";
  return Py.createElement("button", { "aria-label": "Go to next slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + g, onClick: function() {
    return m();
  }, type: "button", disabled: S });
};
$y.RightArrow = HN;
var vC = {};
Object.defineProperty(vC, "__esModule", { value: !0 });
var xy = da, UE = wn, VN = function(l) {
  var f = l.props, d = l.state, m = l.goToSlide, S = l.clones, w = l.notEnoughChildren, g = d.itemWidth, x = f.children, T = f.infinite, b = f.itemClass, D = f.itemAriaLabel, O = f.partialVisbile, L = f.partialVisible, A = UE.getInitialState(d, f), N = A.flexBisis, U = A.shouldRenderOnSSR, q = A.domFullyLoaded, ee = A.partialVisibilityGutter;
  return A.shouldRenderAtAll ? (O && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), xy.createElement(xy.Fragment, null, (T ? S : xy.Children.toArray(x)).map(function(Q, V) {
    return xy.createElement("li", { key: V, "data-index": V, onClick: function() {
      f.focusOnSelect && m(V);
    }, "aria-hidden": UE.getIfSlideIsVisbile(V, d) ? "false" : "true", "aria-label": D || (Q.props.ariaLabel ? Q.props.ariaLabel : null), style: { flex: U ? "1 0 " + N + "%" : "auto", position: "relative", width: q ? ((O || L) && ee && !w ? g - ee : g) + "px" : "auto" }, className: "react-multi-carousel-item " + (UE.getIfSlideIsVisbile(V, d) ? "react-multi-carousel-item--active" : "") + " " + b }, Q);
  }))) : null;
};
vC.default = VN;
var IN = dn && dn.__extends || /* @__PURE__ */ function() {
  var l = function(f, d) {
    return (l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, S) {
      m.__proto__ = S;
    } || function(m, S) {
      for (var w in S)
        S.hasOwnProperty(w) && (m[w] = S[w]);
    })(f, d);
  };
  return function(f, d) {
    function m() {
      this.constructor = f;
    }
    l(f, d), f.prototype = d === null ? Object.create(d) : (m.prototype = d.prototype, new m());
  };
}();
Object.defineProperty(lC, "__esModule", { value: !0 });
var Mr = da, Mn = wn, Vs = By, BN = dC, Tb = $y, $N = vC, Ry = gr, ko = 400, wb = "transform 400ms ease-in-out", WN = function(l) {
  function f(d) {
    var m = l.call(this, d) || this;
    return m.containerRef = Mr.createRef(), m.listRef = Mr.createRef(), m.state = { itemWidth: 0, slidesToShow: 0, currentSlide: 0, totalItems: Mr.Children.count(d.children), deviceType: "", domLoaded: !1, transform: 0, containerWidth: 0 }, m.onResize = m.onResize.bind(m), m.handleDown = m.handleDown.bind(m), m.handleMove = m.handleMove.bind(m), m.handleOut = m.handleOut.bind(m), m.onKeyUp = m.onKeyUp.bind(m), m.handleEnter = m.handleEnter.bind(m), m.setIsInThrottle = m.setIsInThrottle.bind(m), m.next = Mn.throttle(m.next.bind(m), d.transitionDuration || ko, m.setIsInThrottle), m.previous = Mn.throttle(m.previous.bind(m), d.transitionDuration || ko, m.setIsInThrottle), m.goToSlide = Mn.throttle(m.goToSlide.bind(m), d.transitionDuration || ko, m.setIsInThrottle), m.onMove = !1, m.initialX = 0, m.lastX = 0, m.isAnimationAllowed = !1, m.direction = "", m.initialY = 0, m.isInThrottle = !1, m.transformPlaceHolder = 0, m;
  }
  return IN(f, l), f.prototype.resetTotalItems = function() {
    var d = this, m = Mr.Children.count(this.props.children), S = Mn.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, m));
    this.setState({ totalItems: m, currentSlide: S }, function() {
      d.setContainerAndItemWidth(d.state.slidesToShow, !0);
    });
  }, f.prototype.setIsInThrottle = function(d) {
    d === void 0 && (d = !1), this.isInThrottle = d;
  }, f.prototype.setTransformDirectly = function(d, m) {
    var S = this.props.additionalTransfrom;
    this.transformPlaceHolder = d;
    var w = Ry.getTransform(this.state, this.props, this.transformPlaceHolder);
    this.listRef && this.listRef.current && (this.setAnimationDirectly(m), this.listRef.current.style.transform = "translate3d(" + (w + S) + "px,0,0)");
  }, f.prototype.setAnimationDirectly = function(d) {
    this.listRef && this.listRef.current && (this.listRef.current.style.transition = d ? this.props.customTransition || wb : "none");
  }, f.prototype.componentDidMount = function() {
    this.setState({ domLoaded: !0 }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, f.prototype.setClones = function(d, m, S, w) {
    var g = this;
    w === void 0 && (w = !1), this.isAnimationAllowed = !1;
    var x = Mr.Children.toArray(this.props.children), T = Mn.getInitialSlideInInfiniteMode(d || this.state.slidesToShow, x), b = Mn.getClones(this.state.slidesToShow, x), D = x.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
    this.setState({ totalItems: b.length, currentSlide: S && !w ? D : T }, function() {
      g.correctItemsPosition(m || g.state.itemWidth);
    });
  }, f.prototype.setItemsToShow = function(d, m) {
    var S = this, w = this.props.responsive;
    Object.keys(w).forEach(function(g) {
      var x = w[g], T = x.breakpoint, b = x.items, D = T.max, O = T.min, L = [window.innerWidth];
      window.screen && window.screen.width && L.push(window.screen.width);
      var A = Math.min.apply(Math, L);
      O <= A && A <= D && (S.setState({ slidesToShow: b, deviceType: g }), S.setContainerAndItemWidth(b, d, m));
    });
  }, f.prototype.setContainerAndItemWidth = function(d, m, S) {
    var w = this;
    if (this.containerRef && this.containerRef.current) {
      var g = this.containerRef.current.offsetWidth, x = Mn.getItemClientSideWidth(this.props, d, g);
      this.setState({ containerWidth: g, itemWidth: x }, function() {
        w.props.infinite && w.setClones(d, x, m, S);
      }), m && this.correctItemsPosition(x);
    }
  }, f.prototype.correctItemsPosition = function(d, m, S) {
    m && (this.isAnimationAllowed = !0), !m && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
    var w = this.state.totalItems < this.state.slidesToShow ? 0 : -d * this.state.currentSlide;
    S && this.setTransformDirectly(w, !0), this.setState({ transform: w });
  }, f.prototype.onResize = function(d) {
    var m;
    m = !!this.props.infinite && (typeof d != "boolean" || !d), this.setItemsToShow(m);
  }, f.prototype.componentDidUpdate = function(d, m) {
    var S = this, w = d.keyBoardControl, g = d.autoPlay, x = d.children, T = m.containerWidth, b = m.domLoaded, D = m.currentSlide;
    if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== T && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
      S.setItemsToShow(!0);
    }, this.props.transitionDuration || ko)), w && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !w && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), g && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), g || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), x.length !== this.props.children.length ? f.clonesTimeout = setTimeout(function() {
      S.props.infinite ? S.setClones(S.state.slidesToShow, S.state.itemWidth, !0, !0) : S.resetTotalItems();
    }, this.props.transitionDuration || ko) : this.props.infinite && this.state.currentSlide !== D && this.correctClonesPosition({ domLoaded: b }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && Mn.isInRightEnd(this.state)) {
      var O = this.props.transitionDuration || ko;
      f.isInThrottleTimeout = setTimeout(function() {
        S.setIsInThrottle(!1), S.resetAutoplayInterval(), S.goToSlide(0, void 0, !!S.props.rewindWithAnimation);
      }, O + this.props.autoPlaySpeed);
    }
  }, f.prototype.correctClonesPosition = function(d) {
    var m = this, S = d.domLoaded, w = Mr.Children.toArray(this.props.children), g = Mn.checkClonesPosition(this.state, w, this.props), x = g.isReachingTheEnd, T = g.isReachingTheStart, b = g.nextSlide, D = g.nextPosition;
    this.state.domLoaded && S && (x || T) && (this.isAnimationAllowed = !1, f.transformTimeout = setTimeout(function() {
      m.setState({ transform: D, currentSlide: b });
    }, this.props.transitionDuration || ko));
  }, f.prototype.next = function(d) {
    var m = this;
    d === void 0 && (d = 0);
    var S = this.props, w = S.afterChange, g = S.beforeChange;
    if (!Mn.notEnoughChildren(this.state)) {
      var x = Mn.populateNextSlides(this.state, this.props, d), T = x.nextSlides, b = x.nextPosition, D = this.state.currentSlide;
      T !== void 0 && b !== void 0 && (typeof g == "function" && g(T, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: b, currentSlide: T }, function() {
        typeof w == "function" && (f.afterChangeTimeout = setTimeout(function() {
          w(D, m.getState());
        }, m.props.transitionDuration || ko));
      }));
    }
  }, f.prototype.previous = function(d) {
    var m = this;
    d === void 0 && (d = 0);
    var S = this.props, w = S.afterChange, g = S.beforeChange;
    if (!Mn.notEnoughChildren(this.state)) {
      var x = Mn.populatePreviousSlides(this.state, this.props, d), T = x.nextSlides, b = x.nextPosition;
      if (T !== void 0 && b !== void 0) {
        var D = this.state.currentSlide;
        typeof g == "function" && g(T, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: b, currentSlide: T }, function() {
          typeof w == "function" && (f.afterChangeTimeout2 = setTimeout(function() {
            w(D, m.getState());
          }, m.props.transitionDuration || ko));
        });
      }
    }
  }, f.prototype.resetAutoplayInterval = function() {
    this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, f.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), f.clonesTimeout && clearTimeout(f.clonesTimeout), f.isInThrottleTimeout && clearTimeout(f.isInThrottleTimeout), f.transformTimeout && clearTimeout(f.transformTimeout), f.afterChangeTimeout && clearTimeout(f.afterChangeTimeout), f.afterChangeTimeout2 && clearTimeout(f.afterChangeTimeout2), f.afterChangeTimeout3 && clearTimeout(f.afterChangeTimeout3);
  }, f.prototype.resetMoveStatus = function() {
    this.onMove = !1, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0;
  }, f.prototype.getCords = function(d) {
    var m = d.clientX, S = d.clientY;
    return { clientX: Ry.parsePosition(this.props, m), clientY: Ry.parsePosition(this.props, S) };
  }, f.prototype.handleDown = function(d) {
    if (!(!Vs.isMouseMoveEvent(d) && !this.props.swipeable || Vs.isMouseMoveEvent(d) && !this.props.draggable || this.isInThrottle)) {
      var m = this.getCords(Vs.isMouseMoveEvent(d) ? d : d.touches[0]), S = m.clientX, w = m.clientY;
      this.onMove = !0, this.initialX = S, this.initialY = w, this.lastX = S, this.isAnimationAllowed = !1;
    }
  }, f.prototype.handleMove = function(d) {
    if (!(!Vs.isMouseMoveEvent(d) && !this.props.swipeable || Vs.isMouseMoveEvent(d) && !this.props.draggable || Mn.notEnoughChildren(this.state))) {
      var m = this.getCords(Vs.isMouseMoveEvent(d) ? d : d.touches[0]), S = m.clientX, w = m.clientY, g = this.initialX - S, x = this.initialY - w;
      if (this.onMove) {
        if (!(Math.abs(g) > Math.abs(x)))
          return;
        var T = Mn.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, S, this.transformPlaceHolder), b = T.direction, D = T.nextPosition, O = T.canContinue;
        b && (this.direction = b, O && D !== void 0 && this.setTransformDirectly(D)), this.lastX = S;
      }
    }
  }, f.prototype.handleOut = function(d) {
    this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    var m = d.type === "touchend" && !this.props.swipeable, S = (d.type === "mouseleave" || d.type === "mouseup") && !this.props.draggable;
    if (!m && !S && this.onMove) {
      if (this.setAnimationDirectly(!0), this.direction === "right")
        if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
          var w = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
          this.next(w);
        } else
          this.correctItemsPosition(this.state.itemWidth, !0, !0);
      this.direction === "left" && (this.lastX - this.initialX > this.props.minimumTouchDrag ? (w = Math.round((this.lastX - this.initialX) / this.state.itemWidth), this.previous(w)) : this.correctItemsPosition(this.state.itemWidth, !0, !0)), this.resetMoveStatus();
    }
  }, f.prototype.isInViewport = function(d) {
    var m = d.getBoundingClientRect(), S = m.top, w = S === void 0 ? 0 : S, g = m.left, x = g === void 0 ? 0 : g, T = m.bottom, b = T === void 0 ? 0 : T, D = m.right, O = D === void 0 ? 0 : D;
    return 0 <= w && 0 <= x && b <= (window.innerHeight || document.documentElement.clientHeight) && O <= (window.innerWidth || document.documentElement.clientWidth);
  }, f.prototype.isChildOfCarousel = function(d) {
    return !!(d instanceof Element && this.listRef && this.listRef.current) && this.listRef.current.contains(d);
  }, f.prototype.onKeyUp = function(d) {
    var m = d.target;
    switch (d.keyCode) {
      case 37:
        if (this.isChildOfCarousel(m))
          return this.previous();
        break;
      case 39:
        if (this.isChildOfCarousel(m))
          return this.next();
        break;
      case 9:
        if (this.isChildOfCarousel(m) && m instanceof HTMLInputElement && this.isInViewport(m))
          return this.next();
    }
  }, f.prototype.handleEnter = function(d) {
    Vs.isMouseMoveEvent(d) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0);
  }, f.prototype.goToSlide = function(d, m, S) {
    var w = this;
    if (S === void 0 && (S = !0), !this.isInThrottle) {
      var g = this.state.itemWidth, x = this.props, T = x.afterChange, b = x.beforeChange, D = this.state.currentSlide;
      typeof b != "function" || m && (typeof m != "object" || m.skipBeforeChange) || b(d, this.getState()), this.isAnimationAllowed = S, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ currentSlide: d, transform: -g * d }, function() {
        w.props.infinite && w.correctClonesPosition({ domLoaded: !0 }), typeof T != "function" || m && (typeof m != "object" || m.skipAfterChange) || (f.afterChangeTimeout3 = setTimeout(function() {
          T(D, w.getState());
        }, w.props.transitionDuration || ko));
      });
    }
  }, f.prototype.getState = function() {
    return this.state;
  }, f.prototype.renderLeftArrow = function(d) {
    var m = this, S = this.props, w = S.customLeftArrow, g = S.rtl;
    return Mr.createElement(Tb.LeftArrow, { customLeftArrow: w, getState: function() {
      return m.getState();
    }, previous: this.previous, disabled: d, rtl: g });
  }, f.prototype.renderRightArrow = function(d) {
    var m = this, S = this.props, w = S.customRightArrow, g = S.rtl;
    return Mr.createElement(Tb.RightArrow, { customRightArrow: w, getState: function() {
      return m.getState();
    }, next: this.next, disabled: d, rtl: g });
  }, f.prototype.renderButtonGroups = function() {
    var d = this, m = this.props.customButtonGroup;
    return m ? Mr.cloneElement(m, { previous: function() {
      return d.previous();
    }, next: function() {
      return d.next();
    }, goToSlide: function(S, w) {
      return d.goToSlide(S, w);
    }, carouselState: this.getState() }) : null;
  }, f.prototype.renderDotsList = function() {
    var d = this;
    return Mr.createElement(BN.default, { state: this.state, props: this.props, goToSlide: this.goToSlide, getState: function() {
      return d.getState();
    } });
  }, f.prototype.renderCarouselItems = function() {
    var d = [];
    if (this.props.infinite) {
      var m = Mr.Children.toArray(this.props.children);
      d = Mn.getClones(this.state.slidesToShow, m);
    }
    return Mr.createElement($N.default, { clones: d, goToSlide: this.goToSlide, state: this.state, notEnoughChildren: Mn.notEnoughChildren(this.state), props: this.props });
  }, f.prototype.render = function() {
    var d = this.props, m = d.deviceType, S = d.arrows, w = d.renderArrowsWhenDisabled, g = d.removeArrowOnDeviceType, x = d.infinite, T = d.containerClass, b = d.sliderClass, D = d.customTransition, O = d.additionalTransfrom, L = d.renderDotsOutside, A = d.renderButtonGroupOutside, N = d.className, U = d.rtl;
    process.env.NODE_ENV !== "production" && Mn.throwError(this.state, this.props);
    var q = Mn.getInitialState(this.state, this.props), ee = q.shouldRenderOnSSR, Q = q.shouldRenderAtAll, V = Mn.isInLeftEnd(this.state), $ = Mn.isInRightEnd(this.state), K = S && !(g && (m && -1 < g.indexOf(m) || this.state.deviceType && -1 < g.indexOf(this.state.deviceType))) && !Mn.notEnoughChildren(this.state) && Q, fe = !x && V, re = !x && $, Ce = Ry.getTransform(this.state, this.props);
    return Mr.createElement(Mr.Fragment, null, Mr.createElement("div", { className: "react-multi-carousel-list " + T + " " + N, dir: U ? "rtl" : "ltr", ref: this.containerRef }, Mr.createElement("ul", { ref: this.listRef, className: "react-multi-carousel-track " + b, style: { transition: this.isAnimationAllowed ? D || wb : "none", overflow: ee ? "hidden" : "unset", transform: "translate3d(" + (Ce + O) + "px,0,0)" }, onMouseMove: this.handleMove, onMouseDown: this.handleDown, onMouseUp: this.handleOut, onMouseEnter: this.handleEnter, onMouseLeave: this.handleOut, onTouchStart: this.handleDown, onTouchMove: this.handleMove, onTouchEnd: this.handleOut }, this.renderCarouselItems()), K && (!fe || w) && this.renderLeftArrow(fe), K && (!re || w) && this.renderRightArrow(re), Q && !A && this.renderButtonGroups(), Q && !L && this.renderDotsList()), Q && L && this.renderDotsList(), Q && A && this.renderButtonGroups());
  }, f.defaultProps = { slidesToSlide: 1, infinite: !1, draggable: !0, swipeable: !0, arrows: !0, renderArrowsWhenDisabled: !1, containerClass: "", sliderClass: "", itemClass: "", keyBoardControl: !0, autoPlaySpeed: 3e3, showDots: !1, renderDotsOutside: !1, renderButtonGroupOutside: !1, minimumTouchDrag: 80, className: "", dotListClass: "", focusOnSelect: !1, centerMode: !1, additionalTransfrom: 0, pauseOnHover: !0, shouldResetAutoplay: !0, rewind: !1, rtl: !1, rewindWithAnimation: !1 }, f;
}(Mr.Component);
lC.default = WN;
Object.defineProperty(oC, "__esModule", { value: !0 });
var YN = lC;
oC.default = YN.default;
var GN = oC;
const QN = /* @__PURE__ */ sx(GN), Sr = {
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
function bb() {
  let l = document.querySelectorAll(".react-multi-carousel-item"), f = document.querySelectorAll(".react-multi-carousel-item:not(.react-multi-carousel-item--active)");
  const d = 1, m = 0.2;
  for (let S = 0; S < l.length; S++)
    l[S].style.opacity = d;
  for (let S = 0; S < f.length; S++)
    f[S].style.opacity = m;
}
const XN = {
  lg: {
    breakpoint: {
      max: 99999,
      min: Sr.responsive.breakpoint.lg
    },
    items: 2
  },
  sm: {
    breakpoint: {
      max: Sr.responsive.breakpoint.lg,
      min: 0
    },
    items: 1
  }
};
function c2({ children: l, ...f }) {
  return window.addEventListener("resize", bb), /* @__PURE__ */ je.jsx(
    QN,
    {
      responsive: XN,
      partialVisible: !0,
      containerClass: "carousel",
      itemClass: "carousel__item",
      keyBoardControl: !0,
      pauseOnHover: !0,
      afterChange: function(d, m) {
        bb();
      },
      ...f,
      children: l
    }
  );
}
function f2({
  image: l,
  link: f,
  title: d = "",
  alt: m = "",
  target: S = "",
  imgClassName: w = "",
  className: g = "",
  ...x
}) {
  return /* @__PURE__ */ je.jsx(
    "a",
    {
      className: `block w-12 mx-4 hover:scale-110 hover-darken 
      ${Bi} 
      ${g}
      `,
      href: f,
      target: S,
      ...x,
      children: /* @__PURE__ */ je.jsx(
        "img",
        {
          src: l,
          className: `w-full ${w}`,
          title: d,
          alt: m
        }
      )
    }
  );
}
function d2({
  src: l,
  title: f = "",
  className: d = "",
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `relative w-full pt-[56.25%] 
    ${d}`,
      ...Ys,
      ...m,
      children: /* @__PURE__ */ je.jsx(
        "iframe",
        {
          src: l,
          title: f,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0,
          className: "absolute inset-0 w-full h-full"
        }
      )
    }
  );
}
function xb({
  src: l,
  title: f = "",
  alt: d = "",
  target: m,
  className: S = "",
  classNameImage: w = "",
  isEnhancedMode: g = !0,
  fullSize: x = !1,
  ...T
}) {
  return w += g ? "w-[95%] hover:w-[99%] shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] " : "", /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `flex justify-center 
    ${Bi} 
    ${S} 
    ${x ? "w-full" : ""}`,
      ...T,
      children: /* @__PURE__ */ je.jsx(
        "img",
        {
          src: l,
          className: `${Bi} ${w}`,
          title: f,
          alt: d
        }
      )
    }
  );
}
function p2({
  href: l,
  src: f,
  title: d = "",
  alt: m = "",
  target: S = "_blank",
  className: w = "",
  classNameImage: g = "",
  zoomDisabled: x = !1,
  ...T
}) {
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `w-full flex justify-center
    ${Bi} 
    ${w}`,
      ...T,
      children: /* @__PURE__ */ je.jsxs(
        "a",
        {
          href: l,
          className: `relative w-[95%] hover:bg-neutral-500 
         ${iN} 
         ${Bi} 
         ${x ? "" : "hover:w-[99%] "} 
         ${g}`,
          target: S,
          children: [
            /* @__PURE__ */ je.jsx("div", { className: `image-mask absolute inset-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-center ${Bi}`, children: /* @__PURE__ */ je.jsx("p", { className: "absolute top-1/2 w-full uppercase", children: "Cliquez pour y accéder !" }) }),
            /* @__PURE__ */ je.jsx(
              "img",
              {
                src: f,
                title: d,
                alt: m
              }
            )
          ]
        }
      )
    }
  );
}
function v2({
  size: l = 4,
  className: f = "",
  isVisible: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `separator w-full my-${l} py-${l} ${d ? "bg-orange-950" : ""} 
    ${f}`,
      ...m
    }
  );
}
function h2() {
  return /* @__PURE__ */ je.jsx(
    "img",
    {
      src: "/img/spinner.gif",
      alt: "loading spinner",
      className: "w-8 my-4 mx-auto"
    }
  );
}
function m2(l, f) {
  ZM(() => {
    const d = document.getElementById("header").offsetHeight;
    window.scrollTo(0, d);
  }, [f]);
}
function qN(l) {
  if (typeof l != "object" || l === null)
    return !1;
  let f = l;
  for (; Object.getPrototypeOf(f) !== null; )
    f = Object.getPrototypeOf(f);
  return Object.getPrototypeOf(l) === f || Object.getPrototypeOf(l) === null;
}
function KN(l) {
  return qN(l) && "type" in l && typeof l.type == "string";
}
var gx = Symbol.for("immer-nothing"), Rb = Symbol.for("immer-draftable"), Za = Symbol.for("immer-state"), ZN = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(l) {
    return `The plugin for '${l}' has not been loaded into Immer. To enable the plugin, import and call \`enable${l}()\` when initializing your application.`;
  },
  function(l) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${l}'`;
  },
  "This object has been frozen and should not be mutated",
  function(l) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + l;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(l) {
    return `'current' expects a draft, got: ${l}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(l) {
    return `'original' expects a draft, got: ${l}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Ua(l, ...f) {
  if (process.env.NODE_ENV !== "production") {
    const d = ZN[l], m = typeof d == "function" ? d.apply(null, f) : d;
    throw new Error(`[Immer] ${m}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var $f = Object.getPrototypeOf;
function Ou(l) {
  return !!l && !!l[Za];
}
function bl(l) {
  var f;
  return l ? Sx(l) || Array.isArray(l) || !!l[Rb] || !!((f = l.constructor) != null && f[Rb]) || Yy(l) || Gy(l) : !1;
}
var JN = Object.prototype.constructor.toString();
function Sx(l) {
  if (!l || typeof l != "object")
    return !1;
  const f = $f(l);
  if (f === null)
    return !0;
  const d = Object.hasOwnProperty.call(f, "constructor") && f.constructor;
  return d === Object ? !0 : typeof d == "function" && Function.toString.call(d) === JN;
}
function gv(l, f) {
  Wy(l) === 0 ? Object.entries(l).forEach(([d, m]) => {
    f(d, m, l);
  }) : l.forEach((d, m) => f(m, d, l));
}
function Wy(l) {
  const f = l[Za];
  return f ? f.type_ : Array.isArray(l) ? 1 : Yy(l) ? 2 : Gy(l) ? 3 : 0;
}
function XE(l, f) {
  return Wy(l) === 2 ? l.has(f) : Object.prototype.hasOwnProperty.call(l, f);
}
function Ex(l, f, d) {
  const m = Wy(l);
  m === 2 ? l.set(f, d) : m === 3 ? l.add(d) : l[f] = d;
}
function eL(l, f) {
  return l === f ? l !== 0 || 1 / l === 1 / f : l !== l && f !== f;
}
function Yy(l) {
  return l instanceof Map;
}
function Gy(l) {
  return l instanceof Set;
}
function Is(l) {
  return l.copy_ || l.base_;
}
function qE(l, f) {
  if (Yy(l))
    return new Map(l);
  if (Gy(l))
    return new Set(l);
  if (Array.isArray(l))
    return Array.prototype.slice.call(l);
  if (!f && Sx(l))
    return $f(l) ? { ...l } : Object.assign(/* @__PURE__ */ Object.create(null), l);
  const d = Object.getOwnPropertyDescriptors(l);
  delete d[Za];
  let m = Reflect.ownKeys(d);
  for (let S = 0; S < m.length; S++) {
    const w = m[S], g = d[w];
    g.writable === !1 && (g.writable = !0, g.configurable = !0), (g.get || g.set) && (d[w] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: g.enumerable,
      value: l[w]
    });
  }
  return Object.create($f(l), d);
}
function hC(l, f = !1) {
  return Qy(l) || Ou(l) || !bl(l) || (Wy(l) > 1 && (l.set = l.add = l.clear = l.delete = tL), Object.freeze(l), f && gv(l, (d, m) => hC(m, !0))), l;
}
function tL() {
  Ua(2);
}
function Qy(l) {
  return Object.isFrozen(l);
}
var nL = {};
function Ws(l) {
  const f = nL[l];
  return f || Ua(0, l), f;
}
var Sv;
function Cx() {
  return Sv;
}
function rL(l, f) {
  return {
    drafts_: [],
    parent_: l,
    immer_: f,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function _b(l, f) {
  f && (Ws("Patches"), l.patches_ = [], l.inversePatches_ = [], l.patchListener_ = f);
}
function KE(l) {
  ZE(l), l.drafts_.forEach(aL), l.drafts_ = null;
}
function ZE(l) {
  l === Sv && (Sv = l.parent_);
}
function Db(l) {
  return Sv = rL(Sv, l);
}
function aL(l) {
  const f = l[Za];
  f.type_ === 0 || f.type_ === 1 ? f.revoke_() : f.revoked_ = !0;
}
function Ob(l, f) {
  f.unfinalizedDrafts_ = f.drafts_.length;
  const d = f.drafts_[0];
  return l !== void 0 && l !== d ? (d[Za].modified_ && (KE(f), Ua(4)), bl(l) && (l = jy(f, l), f.parent_ || Fy(f, l)), f.patches_ && Ws("Patches").generateReplacementPatches_(
    d[Za].base_,
    l,
    f.patches_,
    f.inversePatches_
  )) : l = jy(f, d, []), KE(f), f.patches_ && f.patchListener_(f.patches_, f.inversePatches_), l !== gx ? l : void 0;
}
function jy(l, f, d) {
  if (Qy(f))
    return f;
  const m = f[Za];
  if (!m)
    return gv(
      f,
      (S, w) => kb(l, m, f, S, w, d)
    ), f;
  if (m.scope_ !== l)
    return f;
  if (!m.modified_)
    return Fy(l, m.base_, !0), m.base_;
  if (!m.finalized_) {
    m.finalized_ = !0, m.scope_.unfinalizedDrafts_--;
    const S = m.copy_;
    let w = S, g = !1;
    m.type_ === 3 && (w = new Set(S), S.clear(), g = !0), gv(
      w,
      (x, T) => kb(l, m, S, x, T, d, g)
    ), Fy(l, S, !1), d && l.patches_ && Ws("Patches").generatePatches_(
      m,
      d,
      l.patches_,
      l.inversePatches_
    );
  }
  return m.copy_;
}
function kb(l, f, d, m, S, w, g) {
  if (process.env.NODE_ENV !== "production" && S === d && Ua(5), Ou(S)) {
    const x = w && f && f.type_ !== 3 && // Set objects are atomic since they have no keys.
    !XE(f.assigned_, m) ? w.concat(m) : void 0, T = jy(l, S, x);
    if (Ex(d, m, T), Ou(T))
      l.canAutoFreeze_ = !1;
    else
      return;
  } else
    g && d.add(S);
  if (bl(S) && !Qy(S)) {
    if (!l.immer_.autoFreeze_ && l.unfinalizedDrafts_ < 1)
      return;
    jy(l, S), (!f || !f.scope_.parent_) && Fy(l, S);
  }
}
function Fy(l, f, d = !1) {
  !l.parent_ && l.immer_.autoFreeze_ && l.canAutoFreeze_ && hC(f, d);
}
function iL(l, f) {
  const d = Array.isArray(l), m = {
    type_: d ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: f ? f.scope_ : Cx(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: f,
    // The base state.
    base_: l,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let S = m, w = mC;
  d && (S = [m], w = Ev);
  const { revoke: g, proxy: x } = Proxy.revocable(S, w);
  return m.draft_ = x, m.revoke_ = g, x;
}
var mC = {
  get(l, f) {
    if (f === Za)
      return l;
    const d = Is(l);
    if (!XE(d, f))
      return oL(l, d, f);
    const m = d[f];
    return l.finalized_ || !bl(m) ? m : m === PE(l.base_, f) ? (jE(l), l.copy_[f] = eC(m, l)) : m;
  },
  has(l, f) {
    return f in Is(l);
  },
  ownKeys(l) {
    return Reflect.ownKeys(Is(l));
  },
  set(l, f, d) {
    const m = Tx(Is(l), f);
    if (m != null && m.set)
      return m.set.call(l.draft_, d), !0;
    if (!l.modified_) {
      const S = PE(Is(l), f), w = S == null ? void 0 : S[Za];
      if (w && w.base_ === d)
        return l.copy_[f] = d, l.assigned_[f] = !1, !0;
      if (eL(d, S) && (d !== void 0 || XE(l.base_, f)))
        return !0;
      jE(l), JE(l);
    }
    return l.copy_[f] === d && // special case: handle new props with value 'undefined'
    (d !== void 0 || f in l.copy_) || // special case: NaN
    Number.isNaN(d) && Number.isNaN(l.copy_[f]) || (l.copy_[f] = d, l.assigned_[f] = !0), !0;
  },
  deleteProperty(l, f) {
    return PE(l.base_, f) !== void 0 || f in l.base_ ? (l.assigned_[f] = !1, jE(l), JE(l)) : delete l.assigned_[f], l.copy_ && delete l.copy_[f], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(l, f) {
    const d = Is(l), m = Reflect.getOwnPropertyDescriptor(d, f);
    return m && {
      writable: !0,
      configurable: l.type_ !== 1 || f !== "length",
      enumerable: m.enumerable,
      value: d[f]
    };
  },
  defineProperty() {
    Ua(11);
  },
  getPrototypeOf(l) {
    return $f(l.base_);
  },
  setPrototypeOf() {
    Ua(12);
  }
}, Ev = {};
gv(mC, (l, f) => {
  Ev[l] = function() {
    return arguments[0] = arguments[0][0], f.apply(this, arguments);
  };
});
Ev.deleteProperty = function(l, f) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(f)) && Ua(13), Ev.set.call(this, l, f, void 0);
};
Ev.set = function(l, f, d) {
  return process.env.NODE_ENV !== "production" && f !== "length" && isNaN(parseInt(f)) && Ua(14), mC.set.call(this, l[0], f, d, l[0]);
};
function PE(l, f) {
  const d = l[Za];
  return (d ? Is(d) : l)[f];
}
function oL(l, f, d) {
  var S;
  const m = Tx(f, d);
  return m ? "value" in m ? m.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (S = m.get) == null ? void 0 : S.call(l.draft_)
  ) : void 0;
}
function Tx(l, f) {
  if (!(f in l))
    return;
  let d = $f(l);
  for (; d; ) {
    const m = Object.getOwnPropertyDescriptor(d, f);
    if (m)
      return m;
    d = $f(d);
  }
}
function JE(l) {
  l.modified_ || (l.modified_ = !0, l.parent_ && JE(l.parent_));
}
function jE(l) {
  l.copy_ || (l.copy_ = qE(
    l.base_,
    l.scope_.immer_.useStrictShallowCopy_
  ));
}
var lL = class {
  constructor(l) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (f, d, m) => {
      if (typeof f == "function" && typeof d != "function") {
        const w = d;
        d = f;
        const g = this;
        return function(T = w, ...b) {
          return g.produce(T, (D) => d.call(this, D, ...b));
        };
      }
      typeof d != "function" && Ua(6), m !== void 0 && typeof m != "function" && Ua(7);
      let S;
      if (bl(f)) {
        const w = Db(this), g = eC(f, void 0);
        let x = !0;
        try {
          S = d(g), x = !1;
        } finally {
          x ? KE(w) : ZE(w);
        }
        return _b(w, m), Ob(S, w);
      } else if (!f || typeof f != "object") {
        if (S = d(f), S === void 0 && (S = f), S === gx && (S = void 0), this.autoFreeze_ && hC(S, !0), m) {
          const w = [], g = [];
          Ws("Patches").generateReplacementPatches_(f, S, w, g), m(w, g);
        }
        return S;
      } else
        Ua(1, f);
    }, this.produceWithPatches = (f, d) => {
      if (typeof f == "function")
        return (g, ...x) => this.produceWithPatches(g, (T) => f(T, ...x));
      let m, S;
      return [this.produce(f, d, (g, x) => {
        m = g, S = x;
      }), m, S];
    }, typeof (l == null ? void 0 : l.autoFreeze) == "boolean" && this.setAutoFreeze(l.autoFreeze), typeof (l == null ? void 0 : l.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(l.useStrictShallowCopy);
  }
  createDraft(l) {
    bl(l) || Ua(8), Ou(l) && (l = wx(l));
    const f = Db(this), d = eC(l, void 0);
    return d[Za].isManual_ = !0, ZE(f), d;
  }
  finishDraft(l, f) {
    const d = l && l[Za];
    (!d || !d.isManual_) && Ua(9);
    const { scope_: m } = d;
    return _b(m, f), Ob(void 0, m);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(l) {
    this.autoFreeze_ = l;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(l) {
    this.useStrictShallowCopy_ = l;
  }
  applyPatches(l, f) {
    let d;
    for (d = f.length - 1; d >= 0; d--) {
      const S = f[d];
      if (S.path.length === 0 && S.op === "replace") {
        l = S.value;
        break;
      }
    }
    d > -1 && (f = f.slice(d + 1));
    const m = Ws("Patches").applyPatches_;
    return Ou(l) ? m(l, f) : this.produce(
      l,
      (S) => m(S, f)
    );
  }
};
function eC(l, f) {
  const d = Yy(l) ? Ws("MapSet").proxyMap_(l, f) : Gy(l) ? Ws("MapSet").proxySet_(l, f) : iL(l, f);
  return (f ? f.scope_ : Cx()).drafts_.push(d), d;
}
function wx(l) {
  return Ou(l) || Ua(10, l), bx(l);
}
function bx(l) {
  if (!bl(l) || Qy(l))
    return l;
  const f = l[Za];
  let d;
  if (f) {
    if (!f.modified_)
      return f.base_;
    f.finalized_ = !0, d = qE(l, f.scope_.immer_.useStrictShallowCopy_);
  } else
    d = qE(l, !0);
  return gv(d, (m, S) => {
    Ex(d, m, bx(S));
  }), f && (f.finalized_ = !1), d;
}
var Ja = new lL(), xx = Ja.produce;
Ja.produceWithPatches.bind(
  Ja
);
Ja.setAutoFreeze.bind(Ja);
Ja.setUseStrictShallowCopy.bind(Ja);
Ja.applyPatches.bind(Ja);
Ja.createDraft.bind(Ja);
Ja.finishDraft.bind(Ja);
var uL = (l, f, d) => {
  if (f.length === 1 && f[0] === d) {
    let m = !1;
    try {
      const S = {};
      l(S) === S && (m = !0);
    } catch {
    }
    if (m) {
      let S;
      try {
        throw new Error();
      } catch (w) {
        ({ stack: S } = w);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: S }
      );
    }
  }
}, sL = (l, f, d) => {
  const { memoize: m, memoizeOptions: S } = f, { inputSelectorResults: w, inputSelectorResultsCopy: g } = l, x = m(() => ({}), ...S);
  if (!(x.apply(null, w) === x.apply(null, g))) {
    let b;
    try {
      throw new Error();
    } catch (D) {
      ({ stack: b } = D);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: d,
        firstInputs: w,
        secondInputs: g,
        stack: b
      }
    );
  }
}, cL = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function fL(l, f = `expected a function, instead received ${typeof l}`) {
  if (typeof l != "function")
    throw new TypeError(f);
}
function dL(l, f = `expected an object, instead received ${typeof l}`) {
  if (typeof l != "object")
    throw new TypeError(f);
}
function pL(l, f = "expected all items to be functions, instead received the following types: ") {
  if (!l.every((d) => typeof d == "function")) {
    const d = l.map(
      (m) => typeof m == "function" ? `function ${m.name || "unnamed"}()` : typeof m
    ).join(", ");
    throw new TypeError(`${f}[${d}]`);
  }
}
var Mb = (l) => Array.isArray(l) ? l : [l];
function vL(l) {
  const f = Array.isArray(l[0]) ? l[0] : l;
  return pL(
    f,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), f;
}
function Nb(l, f) {
  const d = [], { length: m } = l;
  for (let S = 0; S < m; S++)
    d.push(l[S].apply(null, f));
  return d;
}
var hL = (l, f) => {
  const { identityFunctionCheck: d, inputStabilityCheck: m } = {
    ...cL,
    ...f
  };
  return {
    identityFunctionCheck: {
      shouldRun: d === "always" || d === "once" && l,
      run: uL
    },
    inputStabilityCheck: {
      shouldRun: m === "always" || m === "once" && l,
      run: sL
    }
  };
}, mL = class {
  constructor(l) {
    this.value = l;
  }
  deref() {
    return this.value;
  }
}, yL = typeof WeakRef < "u" ? WeakRef : mL, gL = 0, Lb = 1;
function _y() {
  return {
    s: gL,
    v: void 0,
    o: null,
    p: null
  };
}
function yC(l, f = {}) {
  let d = _y();
  const { resultEqualityCheck: m } = f;
  let S, w = 0;
  function g() {
    var O;
    let x = d;
    const { length: T } = arguments;
    for (let L = 0, A = T; L < A; L++) {
      const N = arguments[L];
      if (typeof N == "function" || typeof N == "object" && N !== null) {
        let U = x.o;
        U === null && (x.o = U = /* @__PURE__ */ new WeakMap());
        const q = U.get(N);
        q === void 0 ? (x = _y(), U.set(N, x)) : x = q;
      } else {
        let U = x.p;
        U === null && (x.p = U = /* @__PURE__ */ new Map());
        const q = U.get(N);
        q === void 0 ? (x = _y(), U.set(N, x)) : x = q;
      }
    }
    const b = x;
    let D;
    if (x.s === Lb ? D = x.v : (D = l.apply(null, arguments), w++), b.s = Lb, m) {
      const L = ((O = S == null ? void 0 : S.deref) == null ? void 0 : O.call(S)) ?? S;
      L != null && m(L, D) && (D = L, w !== 0 && w--), S = typeof D == "object" && D !== null || typeof D == "function" ? new yL(D) : D;
    }
    return b.v = D, D;
  }
  return g.clearCache = () => {
    d = _y(), g.resetResultsCount();
  }, g.resultsCount = () => w, g.resetResultsCount = () => {
    w = 0;
  }, g;
}
function Rx(l, ...f) {
  const d = typeof l == "function" ? {
    memoize: l,
    memoizeOptions: f
  } : l, m = (...S) => {
    let w = 0, g = 0, x, T = {}, b = S.pop();
    typeof b == "object" && (T = b, b = S.pop()), fL(
      b,
      `createSelector expects an output function after the inputs, but received: [${typeof b}]`
    );
    const D = {
      ...d,
      ...T
    }, {
      memoize: O,
      memoizeOptions: L = [],
      argsMemoize: A = yC,
      argsMemoizeOptions: N = [],
      devModeChecks: U = {}
    } = D, q = Mb(L), ee = Mb(N), Q = vL(S), V = O(function() {
      return w++, b.apply(
        null,
        arguments
      );
    }, ...q);
    let $ = !0;
    const K = A(function() {
      g++;
      const re = Nb(
        Q,
        arguments
      );
      if (x = V.apply(null, re), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: Ce, inputStabilityCheck: pe } = hL($, U);
        if (Ce.shouldRun && Ce.run(
          b,
          re,
          x
        ), pe.shouldRun) {
          const _e = Nb(
            Q,
            arguments
          );
          pe.run(
            { inputSelectorResults: re, inputSelectorResultsCopy: _e },
            { memoize: O, memoizeOptions: q },
            arguments
          );
        }
        $ && ($ = !1);
      }
      return x;
    }, ...ee);
    return Object.assign(K, {
      resultFunc: b,
      memoizedResultFunc: V,
      dependencies: Q,
      dependencyRecomputations: () => g,
      resetDependencyRecomputations: () => {
        g = 0;
      },
      lastResult: () => x,
      recomputations: () => w,
      resetRecomputations: () => {
        w = 0;
      },
      memoize: O,
      argsMemoize: A
    });
  };
  return Object.assign(m, {
    withTypes: () => m
  }), m;
}
var SL = /* @__PURE__ */ Rx(yC), EL = Object.assign(
  (l, f = SL) => {
    dL(
      l,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof l}`
    );
    const d = Object.keys(l), m = d.map(
      (w) => l[w]
    );
    return f(
      m,
      (...w) => w.reduce((g, x, T) => (g[d[T]] = x, g), {})
    );
  },
  { withTypes: () => EL }
), CL = (...l) => {
  const f = Rx(...l), d = Object.assign((...m) => {
    const S = f(...m), w = (g, ...x) => S(Ou(g) ? wx(g) : g, ...x);
    return Object.assign(w, S), w;
  }, {
    withTypes: () => d
  });
  return d;
};
CL(yC);
function Wf(l, f) {
  function d(...m) {
    if (f) {
      let S = f(...m);
      if (!S)
        throw new Error(process.env.NODE_ENV === "production" ? Vn(0) : "prepareAction did not return an object");
      return {
        type: l,
        payload: S.payload,
        ..."meta" in S && {
          meta: S.meta
        },
        ..."error" in S && {
          error: S.error
        }
      };
    }
    return {
      type: l,
      payload: m[0]
    };
  }
  return d.toString = () => `${l}`, d.type = l, d.match = (m) => KN(m) && m.type === l, d;
}
function Ab(l) {
  return bl(l) ? xx(l, () => {
  }) : l;
}
function zb(l, f, d) {
  if (l.has(f)) {
    let S = l.get(f);
    return d.update && (S = d.update(S, f, l), l.set(f, S)), S;
  }
  if (!d.insert)
    throw new Error(process.env.NODE_ENV === "production" ? Vn(10) : "No insert provided for key not already in map");
  const m = d.insert(f, l);
  return l.set(f, m), m;
}
process.env.NODE_ENV;
function _x(l) {
  const f = {}, d = [];
  let m;
  const S = {
    addCase(w, g) {
      if (process.env.NODE_ENV !== "production") {
        if (d.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Vn(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (m)
          throw new Error(process.env.NODE_ENV === "production" ? Vn(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const x = typeof w == "string" ? w : w.type;
      if (!x)
        throw new Error(process.env.NODE_ENV === "production" ? Vn(28) : "`builder.addCase` cannot be called with an empty action type");
      if (x in f)
        throw new Error(process.env.NODE_ENV === "production" ? Vn(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${x}'`);
      return f[x] = g, S;
    },
    addMatcher(w, g) {
      if (process.env.NODE_ENV !== "production" && m)
        throw new Error(process.env.NODE_ENV === "production" ? Vn(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return d.push({
        matcher: w,
        reducer: g
      }), S;
    },
    addDefaultCase(w) {
      if (process.env.NODE_ENV !== "production" && m)
        throw new Error(process.env.NODE_ENV === "production" ? Vn(31) : "`builder.addDefaultCase` can only be called once");
      return m = w, S;
    }
  };
  return l(S), [f, d, m];
}
function TL(l) {
  return typeof l == "function";
}
function wL(l, f) {
  if (process.env.NODE_ENV !== "production" && typeof f == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Vn(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [d, m, S] = _x(f), w;
  if (TL(l))
    w = () => Ab(l());
  else {
    const x = Ab(l);
    w = () => x;
  }
  function g(x = w(), T) {
    let b = [d[T.type], ...m.filter(({
      matcher: D
    }) => D(T)).map(({
      reducer: D
    }) => D)];
    return b.filter((D) => !!D).length === 0 && (b = [S]), b.reduce((D, O) => {
      if (O)
        if (Ou(D)) {
          const A = O(D, T);
          return A === void 0 ? D : A;
        } else {
          if (bl(D))
            return xx(D, (L) => O(L, T));
          {
            const L = O(D, T);
            if (L === void 0) {
              if (D === null)
                return D;
              throw new Error(process.env.NODE_ENV === "production" ? Vn(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return L;
          }
        }
      return D;
    }, x);
  }
  return g.getInitialState = w, g;
}
var bL = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", xL = (l = 21) => {
  let f = "", d = l;
  for (; d--; )
    f += bL[Math.random() * 64 | 0];
  return f;
}, RL = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function _L(l, f) {
  return `${l}/${f}`;
}
function DL({
  creators: l
} = {}) {
  var d;
  const f = (d = l == null ? void 0 : l.asyncThunk) == null ? void 0 : d[RL];
  return function(S) {
    const {
      name: w,
      reducerPath: g = w
    } = S;
    if (!w)
      throw new Error(process.env.NODE_ENV === "production" ? Vn(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && S.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const x = (typeof S.reducers == "function" ? S.reducers(ML()) : S.reducers) || {}, T = Object.keys(x), b = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, D = {
      addCase(V, $) {
        const K = typeof V == "string" ? V : V.type;
        if (!K)
          throw new Error(process.env.NODE_ENV === "production" ? Vn(12) : "`context.addCase` cannot be called with an empty action type");
        if (K in b.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Vn(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + K);
        return b.sliceCaseReducersByType[K] = $, D;
      },
      addMatcher(V, $) {
        return b.sliceMatchers.push({
          matcher: V,
          reducer: $
        }), D;
      },
      exposeAction(V, $) {
        return b.actionCreators[V] = $, D;
      },
      exposeCaseReducer(V, $) {
        return b.sliceCaseReducersByName[V] = $, D;
      }
    };
    T.forEach((V) => {
      const $ = x[V], K = {
        reducerName: V,
        type: _L(w, V),
        createNotation: typeof S.reducers == "function"
      };
      LL($) ? zL(K, $, D, f) : NL(K, $, D);
    });
    function O() {
      if (process.env.NODE_ENV !== "production" && typeof S.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Vn(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [V = {}, $ = [], K = void 0] = typeof S.extraReducers == "function" ? _x(S.extraReducers) : [S.extraReducers], fe = {
        ...V,
        ...b.sliceCaseReducersByType
      };
      return wL(S.initialState, (re) => {
        for (let Ce in fe)
          re.addCase(Ce, fe[Ce]);
        for (let Ce of b.sliceMatchers)
          re.addMatcher(Ce.matcher, Ce.reducer);
        for (let Ce of $)
          re.addMatcher(Ce.matcher, Ce.reducer);
        K && re.addDefaultCase(K);
      });
    }
    const L = (V) => V, A = /* @__PURE__ */ new Map();
    let N;
    function U(V, $) {
      return N || (N = O()), N(V, $);
    }
    function q() {
      return N || (N = O()), N.getInitialState();
    }
    function ee(V, $ = !1) {
      function K(re) {
        let Ce = re[V];
        if (typeof Ce > "u") {
          if ($)
            Ce = q();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Vn(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return Ce;
      }
      function fe(re = L) {
        const Ce = zb(A, $, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return zb(Ce, re, {
          insert: () => {
            const pe = {};
            for (const [_e, be] of Object.entries(S.selectors ?? {}))
              pe[_e] = OL(be, re, q, $);
            return pe;
          }
        });
      }
      return {
        reducerPath: V,
        getSelectors: fe,
        get selectors() {
          return fe(K);
        },
        selectSlice: K
      };
    }
    const Q = {
      name: w,
      reducer: U,
      actions: b.actionCreators,
      caseReducers: b.sliceCaseReducersByName,
      getInitialState: q,
      ...ee(g),
      injectInto(V, {
        reducerPath: $,
        ...K
      } = {}) {
        const fe = $ ?? g;
        return V.inject({
          reducerPath: fe,
          reducer: U
        }, K), {
          ...Q,
          ...ee(fe, !0)
        };
      }
    };
    return Q;
  };
}
function OL(l, f, d, m) {
  function S(w, ...g) {
    let x = f(w);
    if (typeof x > "u") {
      if (m)
        x = d();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Vn(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return l(x, ...g);
  }
  return S.unwrapped = l, S;
}
var kL = /* @__PURE__ */ DL();
function ML() {
  function l(f, d) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: f,
      ...d
    };
  }
  return l.withTypes = () => l, {
    reducer(f) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [f.name](...d) {
          return f(...d);
        }
      }[f.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(f, d) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: f,
        reducer: d
      };
    },
    asyncThunk: l
  };
}
function NL({
  type: l,
  reducerName: f,
  createNotation: d
}, m, S) {
  let w, g;
  if ("reducer" in m) {
    if (d && !AL(m))
      throw new Error(process.env.NODE_ENV === "production" ? Vn(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    w = m.reducer, g = m.prepare;
  } else
    w = m;
  S.addCase(l, w).exposeCaseReducer(f, w).exposeAction(f, g ? Wf(l, g) : Wf(l));
}
function LL(l) {
  return l._reducerDefinitionType === "asyncThunk";
}
function AL(l) {
  return l._reducerDefinitionType === "reducerWithPrepare";
}
function zL({
  type: l,
  reducerName: f
}, d, m, S) {
  if (!S)
    throw new Error(process.env.NODE_ENV === "production" ? Vn(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: w,
    fulfilled: g,
    pending: x,
    rejected: T,
    settled: b,
    options: D
  } = d, O = S(l, w, D);
  m.exposeAction(f, O), g && m.addCase(O.fulfilled, g), x && m.addCase(O.pending, x), T && m.addCase(O.rejected, T), b && m.addMatcher(O.settled, b), m.exposeCaseReducer(f, {
    fulfilled: g || Dy,
    pending: x || Dy,
    rejected: T || Dy,
    settled: b || Dy
  });
}
function Dy() {
}
var UL = (l, f) => {
  if (typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Vn(32) : `${f} is not a function`);
}, gC = "listenerMiddleware", PL = (l) => {
  let {
    type: f,
    actionCreator: d,
    matcher: m,
    predicate: S,
    effect: w
  } = l;
  if (f)
    S = Wf(f).match;
  else if (d)
    f = d.type, S = d.match;
  else if (m)
    S = m;
  else if (!S)
    throw new Error(process.env.NODE_ENV === "production" ? Vn(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return UL(w, "options.listener"), {
    predicate: S,
    type: f,
    effect: w
  };
}, jL = Object.assign((l) => {
  const {
    type: f,
    predicate: d,
    effect: m
  } = PL(l);
  return {
    id: xL(),
    effect: m,
    type: f,
    predicate: d,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? Vn(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => jL
}), FL = Object.assign(Wf(`${gC}/add`), {
  withTypes: () => FL
});
Wf(`${gC}/removeAll`);
var HL = Object.assign(Wf(`${gC}/remove`), {
  withTypes: () => HL
});
function Vn(l) {
  return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
const VL = {
  name: "",
  isOpen: !1,
  item: null
}, Dx = kL({
  name: "viewer",
  initialState: VL,
  reducers: {
    setIsOpen: (l, f) => {
      l.isOpen = f.payload;
    },
    setContent: (l, f) => {
      l.item = f.payload;
    },
    setName: (l, f) => {
      l.name = f.payload;
    }
  }
}), y2 = {
  EXPERIENCE: 0,
  PROJECT: 1
}, { setIsOpen: IL, setContent: BL, setName: g2 } = Dx.actions, S2 = (l) => l.viewer;
Dx.reducer;
var FE = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function $L() {
  if (Ub)
    return FE;
  Ub = 1;
  var l = da;
  function f(T, b) {
    return T === b && (T !== 0 || 1 / T === 1 / b) || T !== T && b !== b;
  }
  var d = typeof Object.is == "function" ? Object.is : f, m = l.useSyncExternalStore, S = l.useRef, w = l.useEffect, g = l.useMemo, x = l.useDebugValue;
  return FE.useSyncExternalStoreWithSelector = function(T, b, D, O, L) {
    var A = S(null);
    if (A.current === null) {
      var N = { hasValue: !1, value: null };
      A.current = N;
    } else
      N = A.current;
    A = g(function() {
      function q(K) {
        if (!ee) {
          if (ee = !0, Q = K, K = O(K), L !== void 0 && N.hasValue) {
            var fe = N.value;
            if (L(fe, K))
              return V = fe;
          }
          return V = K;
        }
        if (fe = V, d(Q, K))
          return fe;
        var re = O(K);
        return L !== void 0 && L(fe, re) ? fe : (Q = K, V = re);
      }
      var ee = !1, Q, V, $ = D === void 0 ? null : D;
      return [function() {
        return q(b());
      }, $ === null ? void 0 : function() {
        return q($());
      }];
    }, [b, D, O, L]);
    var U = m(T, A[0], A[1]);
    return w(function() {
      N.hasValue = !0, N.value = U;
    }, [U]), x(U), U;
  }, FE;
}
var HE = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pb;
function WL() {
  return Pb || (Pb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = da;
    function f(b, D) {
      return b === D && (b !== 0 || 1 / b === 1 / D) || b !== b && D !== D;
    }
    var d = typeof Object.is == "function" ? Object.is : f, m = l.useSyncExternalStore, S = l.useRef, w = l.useEffect, g = l.useMemo, x = l.useDebugValue;
    function T(b, D, O, L, A) {
      var N = S(null), U;
      N.current === null ? (U = {
        hasValue: !1,
        value: null
      }, N.current = U) : U = N.current;
      var q = g(function() {
        var $ = !1, K, fe, re = function(be) {
          if (!$) {
            $ = !0, K = be;
            var Pe = L(be);
            if (A !== void 0 && U.hasValue) {
              var ce = U.value;
              if (A(ce, Pe))
                return fe = ce, ce;
            }
            return fe = Pe, Pe;
          }
          var Ie = K, wt = fe;
          if (d(Ie, be))
            return wt;
          var mt = L(be);
          return A !== void 0 && A(wt, mt) ? wt : (K = be, fe = mt, mt);
        }, Ce = O === void 0 ? null : O, pe = function() {
          return re(D());
        }, _e = Ce === null ? void 0 : function() {
          return re(Ce());
        };
        return [pe, _e];
      }, [D, O, L, A]), ee = q[0], Q = q[1], V = m(b, ee, Q);
      return w(function() {
        U.hasValue = !0, U.value = V;
      }, [V]), x(V), V;
    }
    HE.useSyncExternalStoreWithSelector = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), HE;
}
process.env.NODE_ENV === "production" ? $L() : WL();
var $s = (
  // prettier-ignore
  // @ts-ignore
  "default" in st ? st.default : st
), jb = Symbol.for("react-redux-context"), Fb = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function YL() {
  if (!$s.createContext)
    return {};
  const l = Fb[jb] ?? (Fb[jb] = /* @__PURE__ */ new Map());
  let f = l.get($s.createContext);
  return f || (f = $s.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (f.displayName = "ReactRedux"), l.set($s.createContext, f)), f;
}
var Cv = /* @__PURE__ */ YL();
function Ox(l = Cv) {
  return function() {
    const d = $s.useContext(l);
    if (process.env.NODE_ENV !== "production" && !d)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return d;
  };
}
var GL = /* @__PURE__ */ Ox(), QL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
QL ? $s.useLayoutEffect : $s.useEffect;
function kx(l = Cv) {
  const f = l === Cv ? GL : (
    // @ts-ignore
    Ox(l)
  ), d = () => {
    const { store: m } = f();
    return m;
  };
  return Object.assign(d, {
    withTypes: () => d
  }), d;
}
var XL = /* @__PURE__ */ kx();
function qL(l = Cv) {
  const f = l === Cv ? XL : kx(l), d = () => f().dispatch;
  return Object.assign(d, {
    withTypes: () => d
  }), d;
}
var KL = /* @__PURE__ */ qL();
function ZL({ className: l = "", ...f }) {
  return /* @__PURE__ */ je.jsx(
    "button",
    {
      className: `viewer__button-close absolute top-0 left-0 w-10 h-10 text-2xl rounded-tl-md md:rounded-tl-lg shadow-lg
    ${aN} 
    ${Bi}
    ${l}
    `,
      onClick: f.onClick,
      ...f,
      children: "X"
    }
  );
}
function E2({ children: l, item: f, ...d }) {
  const m = KL();
  function S() {
    document.querySelector(".viewer").classList.add("anim-to-left-fade-out"), setTimeout(() => {
      m(IL(!1)), m(BL(f));
    }, 1e3);
  }
  function w(g) {
    setTimeout(() => {
      document.querySelector(g).classList.remove("anim-to-left-fade-in");
    }, 1e3);
  }
  return /* @__PURE__ */ je.jsxs(
    "div",
    {
      className: "viewer fixed z-40 top-[2%] md:top-[5%] left-[2%] md:left-[5%] w-[96%] h-[96%] md:w-[90%] md:h-[90%] overflow-hidden anim-to-left-fade-in anim-duration--fast border bg-black rounded-md md:rounded-lg",
      onLoad: () => w(".viewer"),
      ...d,
      children: [
        /* @__PURE__ */ je.jsx(fx, { className: "viewer__content absolute inset-0 overflow-y-auto h-full w-full my-4 sm:my-0 p-2 xs:p-4 lg:p-8", children: l }),
        /* @__PURE__ */ je.jsx(ZL, { onClick: S })
      ]
    }
  );
}
var Mx = {}, SC = {}, EC = {};
Object.defineProperty(EC, "__esModule", { value: !0 });
var Hb = "html", Vb = "head", Oy = "body", JL = /<([a-zA-Z]+[0-9]?)/, Ib = /<head[^]*>/i, Bb = /<body[^]*>/i, Hy = function(l, f) {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
}, tC = function(l, f) {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
}, $b = typeof window == "object" && window.DOMParser;
if (typeof $b == "function") {
  var eA = new $b(), tA = "text/html";
  tC = function(l, f) {
    return f && (l = "<".concat(f, ">").concat(l, "</").concat(f, ">")), eA.parseFromString(l, tA);
  }, Hy = tC;
}
if (typeof document == "object" && document.implementation) {
  var ky = document.implementation.createHTMLDocument();
  Hy = function(l, f) {
    if (f) {
      var d = ky.documentElement.querySelector(f);
      return d && (d.innerHTML = l), ky;
    }
    return ky.documentElement.innerHTML = l, ky;
  };
}
var My = typeof document == "object" && document.createElement("template"), nC;
My && My.content && (nC = function(l) {
  return My.innerHTML = l, My.content.childNodes;
});
function nA(l) {
  var f, d, m = l.match(JL), S = m && m[1] ? m[1].toLowerCase() : "";
  switch (S) {
    case Hb: {
      var w = tC(l);
      if (!Ib.test(l)) {
        var g = w.querySelector(Vb);
        (f = g == null ? void 0 : g.parentNode) === null || f === void 0 || f.removeChild(g);
      }
      if (!Bb.test(l)) {
        var g = w.querySelector(Oy);
        (d = g == null ? void 0 : g.parentNode) === null || d === void 0 || d.removeChild(g);
      }
      return w.querySelectorAll(Hb);
    }
    case Vb:
    case Oy: {
      var x = Hy(l).querySelectorAll(S);
      return Bb.test(l) && Ib.test(l) ? x[0].parentNode.childNodes : x;
    }
    default: {
      if (nC)
        return nC(l);
      var g = Hy(l, Oy).querySelector(Oy);
      return g.childNodes;
    }
  }
}
EC.default = nA;
var Yf = {}, CC = {}, TC = {};
(function(l) {
  Object.defineProperty(l, "__esModule", { value: !0 }), l.Doctype = l.CDATA = l.Tag = l.Style = l.Script = l.Comment = l.Directive = l.Text = l.Root = l.isTag = l.ElementType = void 0;
  var f;
  (function(m) {
    m.Root = "root", m.Text = "text", m.Directive = "directive", m.Comment = "comment", m.Script = "script", m.Style = "style", m.Tag = "tag", m.CDATA = "cdata", m.Doctype = "doctype";
  })(f = l.ElementType || (l.ElementType = {}));
  function d(m) {
    return m.type === f.Tag || m.type === f.Script || m.type === f.Style;
  }
  l.isTag = d, l.Root = f.Root, l.Text = f.Text, l.Directive = f.Directive, l.Comment = f.Comment, l.Script = f.Script, l.Style = f.Style, l.Tag = f.Tag, l.CDATA = f.CDATA, l.Doctype = f.Doctype;
})(TC);
var Dt = {}, ku = dn && dn.__extends || /* @__PURE__ */ function() {
  var l = function(f, d) {
    return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, S) {
      m.__proto__ = S;
    } || function(m, S) {
      for (var w in S)
        Object.prototype.hasOwnProperty.call(S, w) && (m[w] = S[w]);
    }, l(f, d);
  };
  return function(f, d) {
    if (typeof d != "function" && d !== null)
      throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
    l(f, d);
    function m() {
      this.constructor = f;
    }
    f.prototype = d === null ? Object.create(d) : (m.prototype = d.prototype, new m());
  };
}(), mv = dn && dn.__assign || function() {
  return mv = Object.assign || function(l) {
    for (var f, d = 1, m = arguments.length; d < m; d++) {
      f = arguments[d];
      for (var S in f)
        Object.prototype.hasOwnProperty.call(f, S) && (l[S] = f[S]);
    }
    return l;
  }, mv.apply(this, arguments);
};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.cloneNode = Dt.hasChildren = Dt.isDocument = Dt.isDirective = Dt.isComment = Dt.isText = Dt.isCDATA = Dt.isTag = Dt.Element = Dt.Document = Dt.CDATA = Dt.NodeWithChildren = Dt.ProcessingInstruction = Dt.Comment = Dt.Text = Dt.DataNode = Dt.Node = void 0;
var Pa = TC, wC = (
  /** @class */
  function() {
    function l() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(l.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(f) {
        this.parent = f;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(l.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(f) {
        this.prev = f;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(l.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(f) {
        this.next = f;
      },
      enumerable: !1,
      configurable: !0
    }), l.prototype.cloneNode = function(f) {
      return f === void 0 && (f = !1), bC(this, f);
    }, l;
  }()
);
Dt.Node = wC;
var Xy = (
  /** @class */
  function(l) {
    ku(f, l);
    function f(d) {
      var m = l.call(this) || this;
      return m.data = d, m;
    }
    return Object.defineProperty(f.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(d) {
        this.data = d;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(wC)
);
Dt.DataNode = Xy;
var Nx = (
  /** @class */
  function(l) {
    ku(f, l);
    function f() {
      var d = l !== null && l.apply(this, arguments) || this;
      return d.type = Pa.ElementType.Text, d;
    }
    return Object.defineProperty(f.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(Xy)
);
Dt.Text = Nx;
var Lx = (
  /** @class */
  function(l) {
    ku(f, l);
    function f() {
      var d = l !== null && l.apply(this, arguments) || this;
      return d.type = Pa.ElementType.Comment, d;
    }
    return Object.defineProperty(f.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(Xy)
);
Dt.Comment = Lx;
var Ax = (
  /** @class */
  function(l) {
    ku(f, l);
    function f(d, m) {
      var S = l.call(this, m) || this;
      return S.name = d, S.type = Pa.ElementType.Directive, S;
    }
    return Object.defineProperty(f.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(Xy)
);
Dt.ProcessingInstruction = Ax;
var qy = (
  /** @class */
  function(l) {
    ku(f, l);
    function f(d) {
      var m = l.call(this) || this;
      return m.children = d, m;
    }
    return Object.defineProperty(f.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var d;
        return (d = this.children[0]) !== null && d !== void 0 ? d : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(f.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(f.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(d) {
        this.children = d;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(wC)
);
Dt.NodeWithChildren = qy;
var zx = (
  /** @class */
  function(l) {
    ku(f, l);
    function f() {
      var d = l !== null && l.apply(this, arguments) || this;
      return d.type = Pa.ElementType.CDATA, d;
    }
    return Object.defineProperty(f.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(qy)
);
Dt.CDATA = zx;
var Ux = (
  /** @class */
  function(l) {
    ku(f, l);
    function f() {
      var d = l !== null && l.apply(this, arguments) || this;
      return d.type = Pa.ElementType.Root, d;
    }
    return Object.defineProperty(f.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(qy)
);
Dt.Document = Ux;
var Px = (
  /** @class */
  function(l) {
    ku(f, l);
    function f(d, m, S, w) {
      S === void 0 && (S = []), w === void 0 && (w = d === "script" ? Pa.ElementType.Script : d === "style" ? Pa.ElementType.Style : Pa.ElementType.Tag);
      var g = l.call(this, S) || this;
      return g.name = d, g.attribs = m, g.type = w, g;
    }
    return Object.defineProperty(f.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(f.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(d) {
        this.name = d;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(f.prototype, "attributes", {
      get: function() {
        var d = this;
        return Object.keys(this.attribs).map(function(m) {
          var S, w;
          return {
            name: m,
            value: d.attribs[m],
            namespace: (S = d["x-attribsNamespace"]) === null || S === void 0 ? void 0 : S[m],
            prefix: (w = d["x-attribsPrefix"]) === null || w === void 0 ? void 0 : w[m]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), f;
  }(qy)
);
Dt.Element = Px;
function jx(l) {
  return (0, Pa.isTag)(l);
}
Dt.isTag = jx;
function Fx(l) {
  return l.type === Pa.ElementType.CDATA;
}
Dt.isCDATA = Fx;
function Hx(l) {
  return l.type === Pa.ElementType.Text;
}
Dt.isText = Hx;
function Vx(l) {
  return l.type === Pa.ElementType.Comment;
}
Dt.isComment = Vx;
function Ix(l) {
  return l.type === Pa.ElementType.Directive;
}
Dt.isDirective = Ix;
function Bx(l) {
  return l.type === Pa.ElementType.Root;
}
Dt.isDocument = Bx;
function rA(l) {
  return Object.prototype.hasOwnProperty.call(l, "children");
}
Dt.hasChildren = rA;
function bC(l, f) {
  f === void 0 && (f = !1);
  var d;
  if (Hx(l))
    d = new Nx(l.data);
  else if (Vx(l))
    d = new Lx(l.data);
  else if (jx(l)) {
    var m = f ? VE(l.children) : [], S = new Px(l.name, mv({}, l.attribs), m);
    m.forEach(function(T) {
      return T.parent = S;
    }), l.namespace != null && (S.namespace = l.namespace), l["x-attribsNamespace"] && (S["x-attribsNamespace"] = mv({}, l["x-attribsNamespace"])), l["x-attribsPrefix"] && (S["x-attribsPrefix"] = mv({}, l["x-attribsPrefix"])), d = S;
  } else if (Fx(l)) {
    var m = f ? VE(l.children) : [], w = new zx(m);
    m.forEach(function(b) {
      return b.parent = w;
    }), d = w;
  } else if (Bx(l)) {
    var m = f ? VE(l.children) : [], g = new Ux(m);
    m.forEach(function(b) {
      return b.parent = g;
    }), l["x-mode"] && (g["x-mode"] = l["x-mode"]), d = g;
  } else if (Ix(l)) {
    var x = new Ax(l.name, l.data);
    l["x-name"] != null && (x["x-name"] = l["x-name"], x["x-publicId"] = l["x-publicId"], x["x-systemId"] = l["x-systemId"]), d = x;
  } else
    throw new Error("Not implemented yet: ".concat(l.type));
  return d.startIndex = l.startIndex, d.endIndex = l.endIndex, l.sourceCodeLocation != null && (d.sourceCodeLocation = l.sourceCodeLocation), d;
}
Dt.cloneNode = bC;
function VE(l) {
  for (var f = l.map(function(m) {
    return bC(m, !0);
  }), d = 1; d < f.length; d++)
    f[d].prev = f[d - 1], f[d - 1].next = f[d];
  return f;
}
(function(l) {
  var f = dn && dn.__createBinding || (Object.create ? function(x, T, b, D) {
    D === void 0 && (D = b);
    var O = Object.getOwnPropertyDescriptor(T, b);
    (!O || ("get" in O ? !T.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
      return T[b];
    } }), Object.defineProperty(x, D, O);
  } : function(x, T, b, D) {
    D === void 0 && (D = b), x[D] = T[b];
  }), d = dn && dn.__exportStar || function(x, T) {
    for (var b in x)
      b !== "default" && !Object.prototype.hasOwnProperty.call(T, b) && f(T, x, b);
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.DomHandler = void 0;
  var m = TC, S = Dt;
  d(Dt, l);
  var w = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, g = (
    /** @class */
    function() {
      function x(T, b, D) {
        this.dom = [], this.root = new S.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof b == "function" && (D = b, b = w), typeof T == "object" && (b = T, T = void 0), this.callback = T ?? null, this.options = b ?? w, this.elementCB = D ?? null;
      }
      return x.prototype.onparserinit = function(T) {
        this.parser = T;
      }, x.prototype.onreset = function() {
        this.dom = [], this.root = new S.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, x.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, x.prototype.onerror = function(T) {
        this.handleCallback(T);
      }, x.prototype.onclosetag = function() {
        this.lastNode = null;
        var T = this.tagStack.pop();
        this.options.withEndIndices && (T.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(T);
      }, x.prototype.onopentag = function(T, b) {
        var D = this.options.xmlMode ? m.ElementType.Tag : void 0, O = new S.Element(T, b, void 0, D);
        this.addNode(O), this.tagStack.push(O);
      }, x.prototype.ontext = function(T) {
        var b = this.lastNode;
        if (b && b.type === m.ElementType.Text)
          b.data += T, this.options.withEndIndices && (b.endIndex = this.parser.endIndex);
        else {
          var D = new S.Text(T);
          this.addNode(D), this.lastNode = D;
        }
      }, x.prototype.oncomment = function(T) {
        if (this.lastNode && this.lastNode.type === m.ElementType.Comment) {
          this.lastNode.data += T;
          return;
        }
        var b = new S.Comment(T);
        this.addNode(b), this.lastNode = b;
      }, x.prototype.oncommentend = function() {
        this.lastNode = null;
      }, x.prototype.oncdatastart = function() {
        var T = new S.Text(""), b = new S.CDATA([T]);
        this.addNode(b), T.parent = b, this.lastNode = T;
      }, x.prototype.oncdataend = function() {
        this.lastNode = null;
      }, x.prototype.onprocessinginstruction = function(T, b) {
        var D = new S.ProcessingInstruction(T, b);
        this.addNode(D);
      }, x.prototype.handleCallback = function(T) {
        if (typeof this.callback == "function")
          this.callback(T, this.dom);
        else if (T)
          throw T;
      }, x.prototype.addNode = function(T) {
        var b = this.tagStack[this.tagStack.length - 1], D = b.children[b.children.length - 1];
        this.options.withStartIndices && (T.startIndex = this.parser.startIndex), this.options.withEndIndices && (T.endIndex = this.parser.endIndex), b.children.push(T), D && (T.prev = D, D.next = T), T.parent = b, this.lastNode = null;
      }, x;
    }()
  );
  l.DomHandler = g, l.default = g;
})(CC);
var $x = {};
(function(l) {
  Object.defineProperty(l, "__esModule", { value: !0 }), l.CASE_SENSITIVE_TAG_NAMES_MAP = l.CASE_SENSITIVE_TAG_NAMES = void 0, l.CASE_SENSITIVE_TAG_NAMES = [
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
  ], l.CASE_SENSITIVE_TAG_NAMES_MAP = l.CASE_SENSITIVE_TAG_NAMES.reduce(function(f, d) {
    return f[d.toLowerCase()] = d, f;
  }, {});
})($x);
Object.defineProperty(Yf, "__esModule", { value: !0 });
Yf.formatDOM = Yf.formatAttributes = void 0;
var Ny = CC, aA = $x;
function iA(l) {
  return aA.CASE_SENSITIVE_TAG_NAMES_MAP[l];
}
function Wx(l) {
  for (var f = {}, d = 0, m = l.length; d < m; d++) {
    var S = l[d];
    f[S.name] = S.value;
  }
  return f;
}
Yf.formatAttributes = Wx;
function oA(l) {
  l = l.toLowerCase();
  var f = iA(l);
  return f || l;
}
function Yx(l, f, d) {
  f === void 0 && (f = null);
  for (var m = [], S, w = 0, g = l.length; w < g; w++) {
    var x = l[w];
    switch (x.nodeType) {
      case 1: {
        var T = oA(x.nodeName);
        S = new Ny.Element(T, Wx(x.attributes)), S.children = Yx(
          // template children are on content
          T === "template" ? x.content.childNodes : x.childNodes,
          S
        );
        break;
      }
      case 3:
        S = new Ny.Text(x.nodeValue);
        break;
      case 8:
        S = new Ny.Comment(x.nodeValue);
        break;
      default:
        continue;
    }
    var b = m[w - 1] || null;
    b && (b.next = S), S.parent = f, S.prev = b, S.next = null, m.push(S);
  }
  return d && (S = new Ny.ProcessingInstruction(d.substring(0, d.indexOf(" ")).toLowerCase(), d), S.next = m[0] || null, S.parent = f, m.unshift(S), m[1] && (m[1].prev = m[0])), m;
}
Yf.formatDOM = Yx;
var lA = dn && dn.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(SC, "__esModule", { value: !0 });
var uA = lA(EC), sA = Yf, cA = /<(![a-zA-Z\s]+)>/;
function fA(l) {
  if (typeof l != "string")
    throw new TypeError("First argument must be a string");
  if (!l)
    return [];
  var f = l.match(cA), d = f ? f[1] : void 0;
  return (0, sA.formatDOM)((0, uA.default)(l), null, d);
}
SC.default = fA;
var Ky = {}, $i = {}, Zy = {}, dA = 0;
Zy.SAME = dA;
var pA = 1;
Zy.CAMELCASE = pA;
Zy.possibleStandardNames = {
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
const Gx = 0, Mu = 1, Jy = 2, eg = 3, xC = 4, Qx = 5, Xx = 6;
function vA(l) {
  return Nr.hasOwnProperty(l) ? Nr[l] : null;
}
function pa(l, f, d, m, S, w, g) {
  this.acceptsBooleans = f === Jy || f === eg || f === xC, this.attributeName = m, this.attributeNamespace = S, this.mustUseProperty = d, this.propertyName = l, this.type = f, this.sanitizeURL = w, this.removeEmptyString = g;
}
const Nr = {}, hA = [
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
hA.forEach((l) => {
  Nr[l] = new pa(
    l,
    Gx,
    !1,
    // mustUseProperty
    l,
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
].forEach(([l, f]) => {
  Nr[l] = new pa(
    l,
    Mu,
    !1,
    // mustUseProperty
    f,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["contentEditable", "draggable", "spellCheck", "value"].forEach((l) => {
  Nr[l] = new pa(
    l,
    Jy,
    !1,
    // mustUseProperty
    l.toLowerCase(),
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
].forEach((l) => {
  Nr[l] = new pa(
    l,
    Jy,
    !1,
    // mustUseProperty
    l,
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
].forEach((l) => {
  Nr[l] = new pa(
    l,
    eg,
    !1,
    // mustUseProperty
    l.toLowerCase(),
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
].forEach((l) => {
  Nr[l] = new pa(
    l,
    eg,
    !0,
    // mustUseProperty
    l,
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
].forEach((l) => {
  Nr[l] = new pa(
    l,
    xC,
    !1,
    // mustUseProperty
    l,
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
].forEach((l) => {
  Nr[l] = new pa(
    l,
    Xx,
    !1,
    // mustUseProperty
    l,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["rowSpan", "start"].forEach((l) => {
  Nr[l] = new pa(
    l,
    Qx,
    !1,
    // mustUseProperty
    l.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
const RC = /[\-\:]([a-z])/g, _C = (l) => l[1].toUpperCase();
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
].forEach((l) => {
  const f = l.replace(RC, _C);
  Nr[f] = new pa(
    f,
    Mu,
    !1,
    // mustUseProperty
    l,
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
].forEach((l) => {
  const f = l.replace(RC, _C);
  Nr[f] = new pa(
    f,
    Mu,
    !1,
    // mustUseProperty
    l,
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
].forEach((l) => {
  const f = l.replace(RC, _C);
  Nr[f] = new pa(
    f,
    Mu,
    !1,
    // mustUseProperty
    l,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["tabIndex", "crossOrigin"].forEach((l) => {
  Nr[l] = new pa(
    l,
    Mu,
    !1,
    // mustUseProperty
    l.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
const mA = "xlinkHref";
Nr[mA] = new pa(
  "xlinkHref",
  Mu,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
  // removeEmptyString
);
["src", "href", "action", "formAction"].forEach((l) => {
  Nr[l] = new pa(
    l,
    Mu,
    !1,
    // mustUseProperty
    l.toLowerCase(),
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
  CAMELCASE: yA,
  SAME: gA,
  possibleStandardNames: Wb
} = Zy, SA = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", EA = SA + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", CA = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + EA + "]*$")
), TA = Object.keys(
  Wb
).reduce((l, f) => {
  const d = Wb[f];
  return d === gA ? l[f] = f : d === yA ? l[f.toLowerCase()] = f : l[f] = d, l;
}, {});
$i.BOOLEAN = eg;
$i.BOOLEANISH_STRING = Jy;
$i.NUMERIC = Qx;
$i.OVERLOADED_BOOLEAN = xC;
$i.POSITIVE_NUMERIC = Xx;
$i.RESERVED = Gx;
$i.STRING = Mu;
$i.getPropertyInfo = vA;
$i.isCustomAttribute = CA;
$i.possibleStandardNames = TA;
var DC = {}, OC = {}, kC = {}, Yb = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, wA = /\n/g, bA = /^\s*/, xA = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, RA = /^:\s*/, _A = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, DA = /^[;\s]*/, OA = /^\s+|\s+$/g, kA = `
`, Gb = "/", Qb = "*", Bs = "", MA = "comment", NA = "declaration", LA = function(l, f) {
  if (typeof l != "string")
    throw new TypeError("First argument must be a string");
  if (!l)
    return [];
  f = f || {};
  var d = 1, m = 1;
  function S(N) {
    var U = N.match(wA);
    U && (d += U.length);
    var q = N.lastIndexOf(kA);
    m = ~q ? N.length - q : m + N.length;
  }
  function w() {
    var N = { line: d, column: m };
    return function(U) {
      return U.position = new g(N), b(), U;
    };
  }
  function g(N) {
    this.start = N, this.end = { line: d, column: m }, this.source = f.source;
  }
  g.prototype.content = l;
  function x(N) {
    var U = new Error(
      f.source + ":" + d + ":" + m + ": " + N
    );
    if (U.reason = N, U.filename = f.source, U.line = d, U.column = m, U.source = l, !f.silent)
      throw U;
  }
  function T(N) {
    var U = N.exec(l);
    if (U) {
      var q = U[0];
      return S(q), l = l.slice(q.length), U;
    }
  }
  function b() {
    T(bA);
  }
  function D(N) {
    var U;
    for (N = N || []; U = O(); )
      U !== !1 && N.push(U);
    return N;
  }
  function O() {
    var N = w();
    if (!(Gb != l.charAt(0) || Qb != l.charAt(1))) {
      for (var U = 2; Bs != l.charAt(U) && (Qb != l.charAt(U) || Gb != l.charAt(U + 1)); )
        ++U;
      if (U += 2, Bs === l.charAt(U - 1))
        return x("End of comment missing");
      var q = l.slice(2, U - 2);
      return m += 2, S(q), l = l.slice(U), m += 2, N({
        type: MA,
        comment: q
      });
    }
  }
  function L() {
    var N = w(), U = T(xA);
    if (U) {
      if (O(), !T(RA))
        return x("property missing ':'");
      var q = T(_A), ee = N({
        type: NA,
        property: Xb(U[0].replace(Yb, Bs)),
        value: q ? Xb(q[0].replace(Yb, Bs)) : Bs
      });
      return T(DA), ee;
    }
  }
  function A() {
    var N = [];
    D(N);
    for (var U; U = L(); )
      U !== !1 && (N.push(U), D(N));
    return N;
  }
  return b(), A();
};
function Xb(l) {
  return l ? l.replace(OA, Bs) : Bs;
}
var AA = dn && dn.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(kC, "__esModule", { value: !0 });
var zA = AA(LA);
function UA(l, f) {
  var d = null;
  if (!l || typeof l != "string")
    return d;
  var m = (0, zA.default)(l), S = typeof f == "function";
  return m.forEach(function(w) {
    if (w.type === "declaration") {
      var g = w.property, x = w.value;
      S ? f(g, x, w) : x && (d = d || {}, d[g] = x);
    }
  }), d;
}
kC.default = UA;
var tg = {};
Object.defineProperty(tg, "__esModule", { value: !0 });
tg.camelCase = void 0;
var PA = /^--[a-zA-Z0-9-]+$/, jA = /-([a-z])/g, FA = /^[^-]+$/, HA = /^-(webkit|moz|ms|o|khtml)-/, VA = /^-(ms)-/, IA = function(l) {
  return !l || FA.test(l) || PA.test(l);
}, BA = function(l, f) {
  return f.toUpperCase();
}, qb = function(l, f) {
  return "".concat(f, "-");
}, $A = function(l, f) {
  return f === void 0 && (f = {}), IA(l) ? l : (l = l.toLowerCase(), f.reactCompat ? l = l.replace(VA, qb) : l = l.replace(HA, qb), l.replace(jA, BA));
};
tg.camelCase = $A;
var WA = dn && dn.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(OC, "__esModule", { value: !0 });
var YA = WA(kC), GA = tg;
function QA(l, f) {
  var d = {};
  return !l || typeof l != "string" || (0, YA.default)(l, function(m, S) {
    m && S && (d[(0, GA.camelCase)(m, f)] = S);
  }), d;
}
OC.default = QA;
(function(l) {
  var f = dn && dn.__importDefault || function(D) {
    return D && D.__esModule ? D : { default: D };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.returnFirstArg = l.canTextBeChildOfNode = l.ELEMENTS_WITH_NO_TEXT_CHILDREN = l.PRESERVE_CUSTOM_ATTRIBUTES = l.setStyleProp = l.isCustomComponent = void 0;
  var d = da, m = f(OC), S = /* @__PURE__ */ new Set([
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph"
  ]);
  function w(D, O) {
    return D.includes("-") ? !S.has(D) : !!(O && typeof O.is == "string");
  }
  l.isCustomComponent = w;
  var g = {
    reactCompat: !0
  };
  function x(D, O) {
    if (typeof D == "string") {
      if (!D.trim()) {
        O.style = {};
        return;
      }
      try {
        O.style = (0, m.default)(D, g);
      } catch {
        O.style = {};
      }
    }
  }
  l.setStyleProp = x, l.PRESERVE_CUSTOM_ATTRIBUTES = Number(d.version.split(".")[0]) >= 16, l.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
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
  var T = function(D) {
    return !l.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(D.name);
  };
  l.canTextBeChildOfNode = T;
  var b = function(D) {
    return D;
  };
  l.returnFirstArg = b;
})(DC);
Object.defineProperty(Ky, "__esModule", { value: !0 });
var hv = $i, Kb = DC, XA = ["checked", "value"], qA = ["input", "select", "textarea"], KA = {
  reset: !0,
  submit: !0
};
function ZA(l, f) {
  l === void 0 && (l = {});
  var d = {}, m = !!(l.type && KA[l.type]);
  for (var S in l) {
    var w = l[S];
    if ((0, hv.isCustomAttribute)(S)) {
      d[S] = w;
      continue;
    }
    var g = S.toLowerCase(), x = Zb(g);
    if (x) {
      var T = (0, hv.getPropertyInfo)(x);
      switch (XA.includes(x) && qA.includes(f) && !m && (x = Zb("default" + g)), d[x] = w, T && T.type) {
        case hv.BOOLEAN:
          d[x] = !0;
          break;
        case hv.OVERLOADED_BOOLEAN:
          w === "" && (d[x] = !0);
          break;
      }
      continue;
    }
    Kb.PRESERVE_CUSTOM_ATTRIBUTES && (d[S] = w);
  }
  return (0, Kb.setStyleProp)(l.style, d), d;
}
Ky.default = ZA;
function Zb(l) {
  return hv.possibleStandardNames[l];
}
var MC = {}, JA = dn && dn.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(MC, "__esModule", { value: !0 });
var IE = da, ez = JA(Ky), yv = DC, tz = {
  cloneElement: IE.cloneElement,
  createElement: IE.createElement,
  isValidElement: IE.isValidElement
};
function qx(l, f) {
  f === void 0 && (f = {});
  for (var d = [], m = typeof f.replace == "function", S = f.transform || yv.returnFirstArg, w = f.library || tz, g = w.cloneElement, x = w.createElement, T = w.isValidElement, b = l.length, D = 0; D < b; D++) {
    var O = l[D];
    if (m) {
      var L = f.replace(O, D);
      if (T(L)) {
        b > 1 && (L = g(L, {
          key: L.key || D
        })), d.push(S(L, O, D));
        continue;
      }
    }
    if (O.type === "text") {
      var A = !O.data.trim().length;
      if (A && O.parent && !(0, yv.canTextBeChildOfNode)(O.parent) || f.trim && A)
        continue;
      d.push(S(O.data, O, D));
      continue;
    }
    var N = O, U = {};
    nz(N) ? ((0, yv.setStyleProp)(N.attribs.style, N.attribs), U = N.attribs) : N.attribs && (U = (0, ez.default)(N.attribs, N.name));
    var q = void 0;
    switch (O.type) {
      case "script":
      case "style":
        O.children[0] && (U.dangerouslySetInnerHTML = {
          __html: O.children[0].data
        });
        break;
      case "tag":
        O.name === "textarea" && O.children[0] ? U.defaultValue = O.children[0].data : O.children && O.children.length && (q = qx(O.children, f));
        break;
      default:
        continue;
    }
    b > 1 && (U.key = D), d.push(S(x(O.name, U, q), O, D));
  }
  return d.length === 1 ? d[0] : d;
}
MC.default = qx;
function nz(l) {
  return yv.PRESERVE_CUSTOM_ATTRIBUTES && l.type === "tag" && (0, yv.isCustomComponent)(l.name, l.attribs);
}
(function(l) {
  var f = dn && dn.__importDefault || function(T) {
    return T && T.__esModule ? T : { default: T };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.htmlToDOM = l.domToReact = l.attributesToProps = l.Text = l.ProcessingInstruction = l.Element = l.Comment = void 0;
  var d = f(SC);
  l.htmlToDOM = d.default;
  var m = f(Ky);
  l.attributesToProps = m.default;
  var S = f(MC);
  l.domToReact = S.default;
  var w = CC;
  Object.defineProperty(l, "Comment", { enumerable: !0, get: function() {
    return w.Comment;
  } }), Object.defineProperty(l, "Element", { enumerable: !0, get: function() {
    return w.Element;
  } }), Object.defineProperty(l, "ProcessingInstruction", { enumerable: !0, get: function() {
    return w.ProcessingInstruction;
  } }), Object.defineProperty(l, "Text", { enumerable: !0, get: function() {
    return w.Text;
  } });
  var g = { lowerCaseAttributeNames: !1 };
  function x(T, b) {
    if (typeof T != "string")
      throw new TypeError("First argument must be a string");
    return T ? (0, S.default)((0, d.default)(T, (b == null ? void 0 : b.htmlparser2) || g), b) : [];
  }
  l.default = x;
})(Mx);
const Jb = /* @__PURE__ */ sx(Mx), Gs = Jb.default || Jb;
function C2({ children: l, deliveryDate: f }) {
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: "under-construction py-1 my-16",
      ...Ys,
      children: /* @__PURE__ */ je.jsxs("div", { className: "md:text-xl bg-black/90 py-8", children: [
        /* @__PURE__ */ je.jsx("p", { className: "text-center pb-4", children: "🛠️ EN TRAVAUX 🛠️" }),
        /* @__PURE__ */ je.jsx("p", { className: "p-1 md:p-2 pb-4", children: l }),
        /* @__PURE__ */ je.jsx("p", { className: "text-center", children: f && Gs(` Livraison prévue pour le <b>${f}</b>`) })
      ] })
    }
  );
}
var Kx = { exports: {} };
(function(l, f) {
  (function(m, S) {
    l.exports = S(da);
  })(dn, (d) => (
    /******/
    (() => {
      var m = {
        /***/
        "./node_modules/css-mediaquery/index.js": (
          /*!**********************************************!*\
            !*** ./node_modules/css-mediaquery/index.js ***!
            \**********************************************/
          /***/
          (x, T) => {
            T.match = N, T.parse = U;
            var b = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, D = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, O = /^(?:(min|max)-)?(.+)/, L = /(em|rem|px|cm|mm|in|pt|pc)?$/, A = /(dpi|dpcm|dppx)?$/;
            function N(V, $) {
              return U(V).some(function(K) {
                var fe = K.inverse, re = K.type === "all" || $.type === K.type;
                if (re && fe || !(re || fe))
                  return !1;
                var Ce = K.expressions.every(function(pe) {
                  var _e = pe.feature, be = pe.modifier, Pe = pe.value, ce = $[_e];
                  if (!ce)
                    return !1;
                  switch (_e) {
                    case "orientation":
                    case "scan":
                      return ce.toLowerCase() === Pe.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      Pe = Q(Pe), ce = Q(ce);
                      break;
                    case "resolution":
                      Pe = ee(Pe), ce = ee(ce);
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case /* Deprecated */
                    "device-pixel-ratio":
                      Pe = q(Pe), ce = q(ce);
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      Pe = parseInt(Pe, 10) || 1, ce = parseInt(ce, 10) || 0;
                      break;
                  }
                  switch (be) {
                    case "min":
                      return ce >= Pe;
                    case "max":
                      return ce <= Pe;
                    default:
                      return ce === Pe;
                  }
                });
                return Ce && !fe || !Ce && fe;
              });
            }
            function U(V) {
              return V.split(",").map(function($) {
                $ = $.trim();
                var K = $.match(b), fe = K[1], re = K[2], Ce = K[3] || "", pe = {};
                return pe.inverse = !!fe && fe.toLowerCase() === "not", pe.type = re ? re.toLowerCase() : "all", Ce = Ce.match(/\([^\)]+\)/g) || [], pe.expressions = Ce.map(function(_e) {
                  var be = _e.match(D), Pe = be[1].toLowerCase().match(O);
                  return {
                    modifier: Pe[1],
                    feature: Pe[2],
                    value: be[2]
                  };
                }), pe;
              });
            }
            function q(V) {
              var $ = Number(V), K;
              return $ || (K = V.match(/^(\d+)\s*\/\s*(\d+)$/), $ = K[1] / K[2]), $;
            }
            function ee(V) {
              var $ = parseFloat(V), K = String(V).match(A)[1];
              switch (K) {
                case "dpcm":
                  return $ / 2.54;
                case "dppx":
                  return $ * 96;
                default:
                  return $;
              }
            }
            function Q(V) {
              var $ = parseFloat(V), K = String(V).match(L)[1];
              switch (K) {
                case "em":
                  return $ * 16;
                case "rem":
                  return $ * 16;
                case "cm":
                  return $ * 96 / 2.54;
                case "mm":
                  return $ * 96 / 2.54 / 10;
                case "in":
                  return $ * 96;
                case "pt":
                  return $ * 72;
                case "pc":
                  return $ * 72 / 12;
                default:
                  return $;
              }
            }
          }
        ),
        /***/
        "./node_modules/hyphenate-style-name/index.js": (
          /*!****************************************************!*\
            !*** ./node_modules/hyphenate-style-name/index.js ***!
            \****************************************************/
          /***/
          (x, T, b) => {
            b.r(T), b.d(T, {
              /* harmony export */
              default: () => U
              /* harmony export */
            });
            var D = /[A-Z]/g, O = /^ms-/, L = {};
            function A(q) {
              return "-" + q.toLowerCase();
            }
            function N(q) {
              if (L.hasOwnProperty(q))
                return L[q];
              var ee = q.replace(D, A);
              return L[q] = O.test(ee) ? "-" + ee : ee;
            }
            const U = N;
          }
        ),
        /***/
        "./node_modules/matchmediaquery/index.js": (
          /*!***********************************************!*\
            !*** ./node_modules/matchmediaquery/index.js ***!
            \***********************************************/
          /***/
          (x, T, b) => {
            var D = b(
              /*! css-mediaquery */
              "./node_modules/css-mediaquery/index.js"
            ).match, O = typeof window < "u" ? window.matchMedia : null;
            function L(N, U, q) {
              var ee = this;
              if (O && !q) {
                var Q = O.call(window, N);
                this.matches = Q.matches, this.media = Q.media, Q.addListener(K);
              } else
                this.matches = D(N, U), this.media = N;
              this.addListener = V, this.removeListener = $, this.dispose = fe;
              function V(re) {
                Q && Q.addListener(re);
              }
              function $(re) {
                Q && Q.removeListener(re);
              }
              function K(re) {
                ee.matches = re.matches, ee.media = re.media;
              }
              function fe() {
                Q && Q.removeListener(K);
              }
            }
            function A(N, U, q) {
              return new L(N, U, q);
            }
            x.exports = A;
          }
        ),
        /***/
        "./node_modules/object-assign/index.js": (
          /*!*********************************************!*\
            !*** ./node_modules/object-assign/index.js ***!
            \*********************************************/
          /***/
          (x) => {
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var T = Object.getOwnPropertySymbols, b = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
            function O(A) {
              if (A == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(A);
            }
            function L() {
              try {
                if (!Object.assign)
                  return !1;
                var A = new String("abc");
                if (A[5] = "de", Object.getOwnPropertyNames(A)[0] === "5")
                  return !1;
                for (var N = {}, U = 0; U < 10; U++)
                  N["_" + String.fromCharCode(U)] = U;
                var q = Object.getOwnPropertyNames(N).map(function(Q) {
                  return N[Q];
                });
                if (q.join("") !== "0123456789")
                  return !1;
                var ee = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(Q) {
                  ee[Q] = Q;
                }), Object.keys(Object.assign({}, ee)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return !1;
              }
            }
            x.exports = L() ? Object.assign : function(A, N) {
              for (var U, q = O(A), ee, Q = 1; Q < arguments.length; Q++) {
                U = Object(arguments[Q]);
                for (var V in U)
                  b.call(U, V) && (q[V] = U[V]);
                if (T) {
                  ee = T(U);
                  for (var $ = 0; $ < ee.length; $++)
                    D.call(U, ee[$]) && (q[ee[$]] = U[ee[$]]);
                }
              }
              return q;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/checkPropTypes.js": (
          /*!***************************************************!*\
            !*** ./node_modules/prop-types/checkPropTypes.js ***!
            \***************************************************/
          /***/
          (x, T, b) => {
            var D = function() {
            };
            {
              var O = b(
                /*! ./lib/ReactPropTypesSecret */
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
              ), L = {}, A = b(
                /*! ./lib/has */
                "./node_modules/prop-types/lib/has.js"
              );
              D = function(U) {
                var q = "Warning: " + U;
                typeof console < "u" && console.error(q);
                try {
                  throw new Error(q);
                } catch {
                }
              };
            }
            function N(U, q, ee, Q, V) {
              for (var $ in U)
                if (A(U, $)) {
                  var K;
                  try {
                    if (typeof U[$] != "function") {
                      var fe = Error(
                        (Q || "React class") + ": " + ee + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw fe.name = "Invariant Violation", fe;
                    }
                    K = U[$](q, $, Q, ee, null, O);
                  } catch (Ce) {
                    K = Ce;
                  }
                  if (K && !(K instanceof Error) && D(
                    (Q || "React class") + ": type specification of " + ee + " `" + $ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof K + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                  ), K instanceof Error && !(K.message in L)) {
                    L[K.message] = !0;
                    var re = V ? V() : "";
                    D(
                      "Failed " + ee + " type: " + K.message + (re ?? "")
                    );
                  }
                }
            }
            N.resetWarningCache = function() {
              L = {};
            }, x.exports = N;
          }
        ),
        /***/
        "./node_modules/prop-types/factoryWithTypeCheckers.js": (
          /*!************************************************************!*\
            !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
            \************************************************************/
          /***/
          (x, T, b) => {
            var D = b(
              /*! react-is */
              "./node_modules/react-is/index.js"
            ), O = b(
              /*! object-assign */
              "./node_modules/object-assign/index.js"
            ), L = b(
              /*! ./lib/ReactPropTypesSecret */
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
            ), A = b(
              /*! ./lib/has */
              "./node_modules/prop-types/lib/has.js"
            ), N = b(
              /*! ./checkPropTypes */
              "./node_modules/prop-types/checkPropTypes.js"
            ), U = function() {
            };
            U = function(ee) {
              var Q = "Warning: " + ee;
              typeof console < "u" && console.error(Q);
              try {
                throw new Error(Q);
              } catch {
              }
            };
            function q() {
              return null;
            }
            x.exports = function(ee, Q) {
              var V = typeof Symbol == "function" && Symbol.iterator, $ = "@@iterator";
              function K(ue) {
                var ye = ue && (V && ue[V] || ue[$]);
                if (typeof ye == "function")
                  return ye;
              }
              var fe = "<<anonymous>>", re = {
                array: be("array"),
                bigint: be("bigint"),
                bool: be("boolean"),
                func: be("function"),
                number: be("number"),
                object: be("object"),
                string: be("string"),
                symbol: be("symbol"),
                any: Pe(),
                arrayOf: ce,
                element: Ie(),
                elementType: wt(),
                instanceOf: mt,
                node: Te(),
                objectOf: ve,
                oneOf: Nn,
                oneOfType: Fe,
                shape: bt,
                exact: yn
              };
              function Ce(ue, ye) {
                return ue === ye ? ue !== 0 || 1 / ue === 1 / ye : ue !== ue && ye !== ye;
              }
              function pe(ue, ye) {
                this.message = ue, this.data = ye && typeof ye == "object" ? ye : {}, this.stack = "";
              }
              pe.prototype = Error.prototype;
              function _e(ue) {
                var ye = {}, nt = 0;
                function Be(et, Ye, Qe, ot, vt, dt, ge) {
                  if (ot = ot || fe, dt = dt || Qe, ge !== L) {
                    if (Q) {
                      var Ut = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw Ut.name = "Invariant Violation", Ut;
                    } else if (typeof console < "u") {
                      var qt = ot + ":" + Qe;
                      !ye[qt] && // Avoid spamming the console because they are often not actionable except for lib authors
                      nt < 3 && (U(
                        "You are manually calling a React.PropTypes validation function for the `" + dt + "` prop on `" + ot + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), ye[qt] = !0, nt++);
                    }
                  }
                  return Ye[Qe] == null ? et ? Ye[Qe] === null ? new pe("The " + vt + " `" + dt + "` is marked as required " + ("in `" + ot + "`, but its value is `null`.")) : new pe("The " + vt + " `" + dt + "` is marked as required in " + ("`" + ot + "`, but its value is `undefined`.")) : null : ue(Ye, Qe, ot, vt, dt);
                }
                var He = Be.bind(null, !1);
                return He.isRequired = Be.bind(null, !0), He;
              }
              function be(ue) {
                function ye(nt, Be, He, et, Ye, Qe) {
                  var ot = nt[Be], vt = zt(ot);
                  if (vt !== ue) {
                    var dt = gn(ot);
                    return new pe(
                      "Invalid " + et + " `" + Ye + "` of type " + ("`" + dt + "` supplied to `" + He + "`, expected ") + ("`" + ue + "`."),
                      { expectedType: ue }
                    );
                  }
                  return null;
                }
                return _e(ye);
              }
              function Pe() {
                return _e(q);
              }
              function ce(ue) {
                function ye(nt, Be, He, et, Ye) {
                  if (typeof ue != "function")
                    return new pe("Property `" + Ye + "` of component `" + He + "` has invalid PropType notation inside arrayOf.");
                  var Qe = nt[Be];
                  if (!Array.isArray(Qe)) {
                    var ot = zt(Qe);
                    return new pe("Invalid " + et + " `" + Ye + "` of type " + ("`" + ot + "` supplied to `" + He + "`, expected an array."));
                  }
                  for (var vt = 0; vt < Qe.length; vt++) {
                    var dt = ue(Qe, vt, He, et, Ye + "[" + vt + "]", L);
                    if (dt instanceof Error)
                      return dt;
                  }
                  return null;
                }
                return _e(ye);
              }
              function Ie() {
                function ue(ye, nt, Be, He, et) {
                  var Ye = ye[nt];
                  if (!ee(Ye)) {
                    var Qe = zt(Ye);
                    return new pe("Invalid " + He + " `" + et + "` of type " + ("`" + Qe + "` supplied to `" + Be + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return _e(ue);
              }
              function wt() {
                function ue(ye, nt, Be, He, et) {
                  var Ye = ye[nt];
                  if (!D.isValidElementType(Ye)) {
                    var Qe = zt(Ye);
                    return new pe("Invalid " + He + " `" + et + "` of type " + ("`" + Qe + "` supplied to `" + Be + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return _e(ue);
              }
              function mt(ue) {
                function ye(nt, Be, He, et, Ye) {
                  if (!(nt[Be] instanceof ue)) {
                    var Qe = ue.name || fe, ot = Ln(nt[Be]);
                    return new pe("Invalid " + et + " `" + Ye + "` of type " + ("`" + ot + "` supplied to `" + He + "`, expected ") + ("instance of `" + Qe + "`."));
                  }
                  return null;
                }
                return _e(ye);
              }
              function Nn(ue) {
                if (!Array.isArray(ue))
                  return arguments.length > 1 ? U(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : U("Invalid argument supplied to oneOf, expected an array."), q;
                function ye(nt, Be, He, et, Ye) {
                  for (var Qe = nt[Be], ot = 0; ot < ue.length; ot++)
                    if (Ce(Qe, ue[ot]))
                      return null;
                  var vt = JSON.stringify(ue, function(ge, Ut) {
                    var qt = gn(Ut);
                    return qt === "symbol" ? String(Ut) : Ut;
                  });
                  return new pe("Invalid " + et + " `" + Ye + "` of value `" + String(Qe) + "` " + ("supplied to `" + He + "`, expected one of " + vt + "."));
                }
                return _e(ye);
              }
              function ve(ue) {
                function ye(nt, Be, He, et, Ye) {
                  if (typeof ue != "function")
                    return new pe("Property `" + Ye + "` of component `" + He + "` has invalid PropType notation inside objectOf.");
                  var Qe = nt[Be], ot = zt(Qe);
                  if (ot !== "object")
                    return new pe("Invalid " + et + " `" + Ye + "` of type " + ("`" + ot + "` supplied to `" + He + "`, expected an object."));
                  for (var vt in Qe)
                    if (A(Qe, vt)) {
                      var dt = ue(Qe, vt, He, et, Ye + "." + vt, L);
                      if (dt instanceof Error)
                        return dt;
                    }
                  return null;
                }
                return _e(ye);
              }
              function Fe(ue) {
                if (!Array.isArray(ue))
                  return U("Invalid argument supplied to oneOfType, expected an instance of array."), q;
                for (var ye = 0; ye < ue.length; ye++) {
                  var nt = ue[ye];
                  if (typeof nt != "function")
                    return U(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + bn(nt) + " at index " + ye + "."
                    ), q;
                }
                function Be(He, et, Ye, Qe, ot) {
                  for (var vt = [], dt = 0; dt < ue.length; dt++) {
                    var ge = ue[dt], Ut = ge(He, et, Ye, Qe, ot, L);
                    if (Ut == null)
                      return null;
                    Ut.data && A(Ut.data, "expectedType") && vt.push(Ut.data.expectedType);
                  }
                  var qt = vt.length > 0 ? ", expected one of type [" + vt.join(", ") + "]" : "";
                  return new pe("Invalid " + Qe + " `" + ot + "` supplied to " + ("`" + Ye + "`" + qt + "."));
                }
                return _e(Be);
              }
              function Te() {
                function ue(ye, nt, Be, He, et) {
                  return pn(ye[nt]) ? null : new pe("Invalid " + He + " `" + et + "` supplied to " + ("`" + Be + "`, expected a ReactNode."));
                }
                return _e(ue);
              }
              function St(ue, ye, nt, Be, He) {
                return new pe(
                  (ue || "React class") + ": " + ye + " type `" + nt + "." + Be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + He + "`."
                );
              }
              function bt(ue) {
                function ye(nt, Be, He, et, Ye) {
                  var Qe = nt[Be], ot = zt(Qe);
                  if (ot !== "object")
                    return new pe("Invalid " + et + " `" + Ye + "` of type `" + ot + "` " + ("supplied to `" + He + "`, expected `object`."));
                  for (var vt in ue) {
                    var dt = ue[vt];
                    if (typeof dt != "function")
                      return St(He, et, Ye, vt, gn(dt));
                    var ge = dt(Qe, vt, He, et, Ye + "." + vt, L);
                    if (ge)
                      return ge;
                  }
                  return null;
                }
                return _e(ye);
              }
              function yn(ue) {
                function ye(nt, Be, He, et, Ye) {
                  var Qe = nt[Be], ot = zt(Qe);
                  if (ot !== "object")
                    return new pe("Invalid " + et + " `" + Ye + "` of type `" + ot + "` " + ("supplied to `" + He + "`, expected `object`."));
                  var vt = O({}, nt[Be], ue);
                  for (var dt in vt) {
                    var ge = ue[dt];
                    if (A(ue, dt) && typeof ge != "function")
                      return St(He, et, Ye, dt, gn(ge));
                    if (!ge)
                      return new pe(
                        "Invalid " + et + " `" + Ye + "` key `" + dt + "` supplied to `" + He + "`.\nBad object: " + JSON.stringify(nt[Be], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(ue), null, "  ")
                      );
                    var Ut = ge(Qe, dt, He, et, Ye + "." + dt, L);
                    if (Ut)
                      return Ut;
                  }
                  return null;
                }
                return _e(ye);
              }
              function pn(ue) {
                switch (typeof ue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !ue;
                  case "object":
                    if (Array.isArray(ue))
                      return ue.every(pn);
                    if (ue === null || ee(ue))
                      return !0;
                    var ye = K(ue);
                    if (ye) {
                      var nt = ye.call(ue), Be;
                      if (ye !== ue.entries) {
                        for (; !(Be = nt.next()).done; )
                          if (!pn(Be.value))
                            return !1;
                      } else
                        for (; !(Be = nt.next()).done; ) {
                          var He = Be.value;
                          if (He && !pn(He[1]))
                            return !1;
                        }
                    } else
                      return !1;
                    return !0;
                  default:
                    return !1;
                }
              }
              function Lr(ue, ye) {
                return ue === "symbol" ? !0 : ye ? ye["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ye instanceof Symbol : !1;
              }
              function zt(ue) {
                var ye = typeof ue;
                return Array.isArray(ue) ? "array" : ue instanceof RegExp ? "object" : Lr(ye, ue) ? "symbol" : ye;
              }
              function gn(ue) {
                if (typeof ue > "u" || ue === null)
                  return "" + ue;
                var ye = zt(ue);
                if (ye === "object") {
                  if (ue instanceof Date)
                    return "date";
                  if (ue instanceof RegExp)
                    return "regexp";
                }
                return ye;
              }
              function bn(ue) {
                var ye = gn(ue);
                switch (ye) {
                  case "array":
                  case "object":
                    return "an " + ye;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + ye;
                  default:
                    return ye;
                }
              }
              function Ln(ue) {
                return !ue.constructor || !ue.constructor.name ? fe : ue.constructor.name;
              }
              return re.checkPropTypes = N, re.resetWarningCache = N.resetWarningCache, re.PropTypes = re, re;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/index.js": (
          /*!******************************************!*\
            !*** ./node_modules/prop-types/index.js ***!
            \******************************************/
          /***/
          (x, T, b) => {
            {
              var D = b(
                /*! react-is */
                "./node_modules/react-is/index.js"
              ), O = !0;
              x.exports = b(
                /*! ./factoryWithTypeCheckers */
                "./node_modules/prop-types/factoryWithTypeCheckers.js"
              )(D.isElement, O);
            }
          }
        ),
        /***/
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
            \*************************************************************/
          /***/
          (x) => {
            var T = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            x.exports = T;
          }
        ),
        /***/
        "./node_modules/prop-types/lib/has.js": (
          /*!********************************************!*\
            !*** ./node_modules/prop-types/lib/has.js ***!
            \********************************************/
          /***/
          (x) => {
            x.exports = Function.call.bind(Object.prototype.hasOwnProperty);
          }
        ),
        /***/
        "./node_modules/react-is/cjs/react-is.development.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/react-is/cjs/react-is.development.js ***!
            \***********************************************************/
          /***/
          (x, T) => {
            /** @license React v16.13.1
             * react-is.development.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            (function() {
              var b = typeof Symbol == "function" && Symbol.for, D = b ? Symbol.for("react.element") : 60103, O = b ? Symbol.for("react.portal") : 60106, L = b ? Symbol.for("react.fragment") : 60107, A = b ? Symbol.for("react.strict_mode") : 60108, N = b ? Symbol.for("react.profiler") : 60114, U = b ? Symbol.for("react.provider") : 60109, q = b ? Symbol.for("react.context") : 60110, ee = b ? Symbol.for("react.async_mode") : 60111, Q = b ? Symbol.for("react.concurrent_mode") : 60111, V = b ? Symbol.for("react.forward_ref") : 60112, $ = b ? Symbol.for("react.suspense") : 60113, K = b ? Symbol.for("react.suspense_list") : 60120, fe = b ? Symbol.for("react.memo") : 60115, re = b ? Symbol.for("react.lazy") : 60116, Ce = b ? Symbol.for("react.block") : 60121, pe = b ? Symbol.for("react.fundamental") : 60117, _e = b ? Symbol.for("react.responder") : 60118, be = b ? Symbol.for("react.scope") : 60119;
              function Pe(ge) {
                return typeof ge == "string" || typeof ge == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                ge === L || ge === Q || ge === N || ge === A || ge === $ || ge === K || typeof ge == "object" && ge !== null && (ge.$$typeof === re || ge.$$typeof === fe || ge.$$typeof === U || ge.$$typeof === q || ge.$$typeof === V || ge.$$typeof === pe || ge.$$typeof === _e || ge.$$typeof === be || ge.$$typeof === Ce);
              }
              function ce(ge) {
                if (typeof ge == "object" && ge !== null) {
                  var Ut = ge.$$typeof;
                  switch (Ut) {
                    case D:
                      var qt = ge.type;
                      switch (qt) {
                        case ee:
                        case Q:
                        case L:
                        case N:
                        case A:
                        case $:
                          return qt;
                        default:
                          var Xr = qt && qt.$$typeof;
                          switch (Xr) {
                            case q:
                            case V:
                            case re:
                            case fe:
                            case U:
                              return Xr;
                            default:
                              return Ut;
                          }
                      }
                    case O:
                      return Ut;
                  }
                }
              }
              var Ie = ee, wt = Q, mt = q, Nn = U, ve = D, Fe = V, Te = L, St = re, bt = fe, yn = O, pn = N, Lr = A, zt = $, gn = !1;
              function bn(ge) {
                return gn || (gn = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Ln(ge) || ce(ge) === ee;
              }
              function Ln(ge) {
                return ce(ge) === Q;
              }
              function ue(ge) {
                return ce(ge) === q;
              }
              function ye(ge) {
                return ce(ge) === U;
              }
              function nt(ge) {
                return typeof ge == "object" && ge !== null && ge.$$typeof === D;
              }
              function Be(ge) {
                return ce(ge) === V;
              }
              function He(ge) {
                return ce(ge) === L;
              }
              function et(ge) {
                return ce(ge) === re;
              }
              function Ye(ge) {
                return ce(ge) === fe;
              }
              function Qe(ge) {
                return ce(ge) === O;
              }
              function ot(ge) {
                return ce(ge) === N;
              }
              function vt(ge) {
                return ce(ge) === A;
              }
              function dt(ge) {
                return ce(ge) === $;
              }
              T.AsyncMode = Ie, T.ConcurrentMode = wt, T.ContextConsumer = mt, T.ContextProvider = Nn, T.Element = ve, T.ForwardRef = Fe, T.Fragment = Te, T.Lazy = St, T.Memo = bt, T.Portal = yn, T.Profiler = pn, T.StrictMode = Lr, T.Suspense = zt, T.isAsyncMode = bn, T.isConcurrentMode = Ln, T.isContextConsumer = ue, T.isContextProvider = ye, T.isElement = nt, T.isForwardRef = Be, T.isFragment = He, T.isLazy = et, T.isMemo = Ye, T.isPortal = Qe, T.isProfiler = ot, T.isStrictMode = vt, T.isSuspense = dt, T.isValidElementType = Pe, T.typeOf = ce;
            })();
          }
        ),
        /***/
        "./node_modules/react-is/index.js": (
          /*!****************************************!*\
            !*** ./node_modules/react-is/index.js ***!
            \****************************************/
          /***/
          (x, T, b) => {
            x.exports = b(
              /*! ./cjs/react-is.development.js */
              "./node_modules/react-is/cjs/react-is.development.js"
            );
          }
        ),
        /***/
        "./node_modules/shallow-equal/dist/index.esm.js": (
          /*!******************************************************!*\
            !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
            \******************************************************/
          /***/
          (x, T, b) => {
            b.r(T), b.d(T, {
              /* harmony export */
              shallowEqualArrays: () => (
                /* binding */
                O
              ),
              /* harmony export */
              shallowEqualObjects: () => (
                /* binding */
                D
              )
              /* harmony export */
            });
            function D(L, A) {
              if (L === A)
                return !0;
              if (!L || !A)
                return !1;
              var N = Object.keys(L), U = Object.keys(A), q = N.length;
              if (U.length !== q)
                return !1;
              for (var ee = 0; ee < q; ee++) {
                var Q = N[ee];
                if (L[Q] !== A[Q] || !Object.prototype.hasOwnProperty.call(A, Q))
                  return !1;
              }
              return !0;
            }
            function O(L, A) {
              if (L === A)
                return !0;
              if (!L || !A)
                return !1;
              var N = L.length;
              if (A.length !== N)
                return !1;
              for (var U = 0; U < N; U++)
                if (L[U] !== A[U])
                  return !1;
              return !0;
            }
          }
        ),
        /***/
        "./src/Component.ts": (
          /*!**************************!*\
            !*** ./src/Component.ts ***!
            \**************************/
          /***/
          function(x, T, b) {
            var D = this && this.__rest || function(N, U) {
              var q = {};
              for (var ee in N)
                Object.prototype.hasOwnProperty.call(N, ee) && U.indexOf(ee) < 0 && (q[ee] = N[ee]);
              if (N != null && typeof Object.getOwnPropertySymbols == "function")
                for (var Q = 0, ee = Object.getOwnPropertySymbols(N); Q < ee.length; Q++)
                  U.indexOf(ee[Q]) < 0 && Object.prototype.propertyIsEnumerable.call(N, ee[Q]) && (q[ee[Q]] = N[ee[Q]]);
              return q;
            }, O = this && this.__importDefault || function(N) {
              return N && N.__esModule ? N : { default: N };
            };
            Object.defineProperty(T, "__esModule", { value: !0 });
            var L = O(b(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            )), A = function(N) {
              var U = N.children, q = N.device, ee = N.onChange, Q = D(N, ["children", "device", "onChange"]), V = (0, L.default)(Q, q, ee);
              return typeof U == "function" ? U(V) : V ? U : null;
            };
            T.default = A;
          }
        ),
        /***/
        "./src/Context.ts": (
          /*!************************!*\
            !*** ./src/Context.ts ***!
            \************************/
          /***/
          (x, T, b) => {
            Object.defineProperty(T, "__esModule", { value: !0 });
            var D = b(
              /*! react */
              "react"
            ), O = (0, D.createContext)(void 0);
            T.default = O;
          }
        ),
        /***/
        "./src/index.ts": (
          /*!**********************!*\
            !*** ./src/index.ts ***!
            \**********************/
          /***/
          function(x, T, b) {
            var D = this && this.__importDefault || function(U) {
              return U && U.__esModule ? U : { default: U };
            };
            Object.defineProperty(T, "__esModule", { value: !0 }), T.Context = T.toQuery = T.useMediaQuery = T.default = void 0;
            var O = D(b(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            ));
            T.useMediaQuery = O.default;
            var L = D(b(
              /*! ./Component */
              "./src/Component.ts"
            ));
            T.default = L.default;
            var A = D(b(
              /*! ./toQuery */
              "./src/toQuery.ts"
            ));
            T.toQuery = A.default;
            var N = D(b(
              /*! ./Context */
              "./src/Context.ts"
            ));
            T.Context = N.default;
          }
        ),
        /***/
        "./src/mediaQuery.ts": (
          /*!***************************!*\
            !*** ./src/mediaQuery.ts ***!
            \***************************/
          /***/
          function(x, T, b) {
            var D = this && this.__assign || function() {
              return D = Object.assign || function($) {
                for (var K, fe = 1, re = arguments.length; fe < re; fe++) {
                  K = arguments[fe];
                  for (var Ce in K)
                    Object.prototype.hasOwnProperty.call(K, Ce) && ($[Ce] = K[Ce]);
                }
                return $;
              }, D.apply(this, arguments);
            }, O = this && this.__rest || function($, K) {
              var fe = {};
              for (var re in $)
                Object.prototype.hasOwnProperty.call($, re) && K.indexOf(re) < 0 && (fe[re] = $[re]);
              if ($ != null && typeof Object.getOwnPropertySymbols == "function")
                for (var Ce = 0, re = Object.getOwnPropertySymbols($); Ce < re.length; Ce++)
                  K.indexOf(re[Ce]) < 0 && Object.prototype.propertyIsEnumerable.call($, re[Ce]) && (fe[re[Ce]] = $[re[Ce]]);
              return fe;
            }, L = this && this.__importDefault || function($) {
              return $ && $.__esModule ? $ : { default: $ };
            };
            Object.defineProperty(T, "__esModule", { value: !0 });
            var A = L(b(
              /*! prop-types */
              "./node_modules/prop-types/index.js"
            )), N = A.default.oneOfType([
              A.default.string,
              A.default.number
            ]), U = {
              all: A.default.bool,
              grid: A.default.bool,
              aural: A.default.bool,
              braille: A.default.bool,
              handheld: A.default.bool,
              print: A.default.bool,
              projection: A.default.bool,
              screen: A.default.bool,
              tty: A.default.bool,
              tv: A.default.bool,
              embossed: A.default.bool
            }, q = {
              orientation: A.default.oneOf([
                "portrait",
                "landscape"
              ]),
              scan: A.default.oneOf([
                "progressive",
                "interlace"
              ]),
              aspectRatio: A.default.string,
              deviceAspectRatio: A.default.string,
              height: N,
              deviceHeight: N,
              width: N,
              deviceWidth: N,
              color: A.default.bool,
              colorIndex: A.default.bool,
              monochrome: A.default.bool,
              resolution: N,
              type: Object.keys(U)
            };
            q.type;
            var ee = O(
              q,
              ["type"]
            ), Q = D({ minAspectRatio: A.default.string, maxAspectRatio: A.default.string, minDeviceAspectRatio: A.default.string, maxDeviceAspectRatio: A.default.string, minHeight: N, maxHeight: N, minDeviceHeight: N, maxDeviceHeight: N, minWidth: N, maxWidth: N, minDeviceWidth: N, maxDeviceWidth: N, minColor: A.default.number, maxColor: A.default.number, minColorIndex: A.default.number, maxColorIndex: A.default.number, minMonochrome: A.default.number, maxMonochrome: A.default.number, minResolution: N, maxResolution: N }, ee), V = D(D({}, U), Q);
            T.default = {
              all: V,
              types: U,
              matchers: q,
              features: Q
            };
          }
        ),
        /***/
        "./src/toQuery.ts": (
          /*!************************!*\
            !*** ./src/toQuery.ts ***!
            \************************/
          /***/
          function(x, T, b) {
            var D = this && this.__importDefault || function(ee) {
              return ee && ee.__esModule ? ee : { default: ee };
            };
            Object.defineProperty(T, "__esModule", { value: !0 });
            var O = D(b(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), L = D(b(
              /*! ./mediaQuery */
              "./src/mediaQuery.ts"
            )), A = function(ee) {
              return "not ".concat(ee);
            }, N = function(ee, Q) {
              var V = (0, O.default)(ee);
              return typeof Q == "number" && (Q = "".concat(Q, "px")), Q === !0 ? V : Q === !1 ? A(V) : "(".concat(V, ": ").concat(Q, ")");
            }, U = function(ee) {
              return ee.join(" and ");
            }, q = function(ee) {
              var Q = [];
              return Object.keys(L.default.all).forEach(function(V) {
                var $ = ee[V];
                $ != null && Q.push(N(V, $));
              }), U(Q);
            };
            T.default = q;
          }
        ),
        /***/
        "./src/useMediaQuery.ts": (
          /*!******************************!*\
            !*** ./src/useMediaQuery.ts ***!
            \******************************/
          /***/
          function(x, T, b) {
            var D = this && this.__importDefault || function(pe) {
              return pe && pe.__esModule ? pe : { default: pe };
            };
            Object.defineProperty(T, "__esModule", { value: !0 });
            var O = b(
              /*! react */
              "react"
            ), L = D(b(
              /*! matchmediaquery */
              "./node_modules/matchmediaquery/index.js"
            )), A = D(b(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), N = b(
              /*! shallow-equal */
              "./node_modules/shallow-equal/dist/index.esm.js"
            ), U = D(b(
              /*! ./toQuery */
              "./src/toQuery.ts"
            )), q = D(b(
              /*! ./Context */
              "./src/Context.ts"
            )), ee = function(pe) {
              return pe.query || (0, U.default)(pe);
            }, Q = function(pe) {
              if (pe) {
                var _e = Object.keys(pe);
                return _e.reduce(function(be, Pe) {
                  return be[(0, A.default)(Pe)] = pe[Pe], be;
                }, {});
              }
            }, V = function() {
              var pe = (0, O.useRef)(!1);
              return (0, O.useEffect)(function() {
                pe.current = !0;
              }, []), pe.current;
            }, $ = function(pe) {
              var _e = (0, O.useContext)(q.default), be = function() {
                return Q(pe) || Q(_e);
              }, Pe = (0, O.useState)(be), ce = Pe[0], Ie = Pe[1];
              return (0, O.useEffect)(function() {
                var wt = be();
                (0, N.shallowEqualObjects)(ce, wt) || Ie(wt);
              }, [pe, _e]), ce;
            }, K = function(pe) {
              var _e = function() {
                return ee(pe);
              }, be = (0, O.useState)(_e), Pe = be[0], ce = be[1];
              return (0, O.useEffect)(function() {
                var Ie = _e();
                Pe !== Ie && ce(Ie);
              }, [pe]), Pe;
            }, fe = function(pe, _e) {
              var be = function() {
                return (0, L.default)(pe, _e || {}, !!_e);
              }, Pe = (0, O.useState)(be), ce = Pe[0], Ie = Pe[1], wt = V();
              return (0, O.useEffect)(function() {
                if (wt) {
                  var mt = be();
                  return Ie(mt), function() {
                    mt && mt.dispose();
                  };
                }
              }, [pe, _e]), ce;
            }, re = function(pe) {
              var _e = (0, O.useState)(pe.matches), be = _e[0], Pe = _e[1];
              return (0, O.useEffect)(function() {
                var ce = function(Ie) {
                  Pe(Ie.matches);
                };
                return pe.addListener(ce), Pe(pe.matches), function() {
                  pe.removeListener(ce);
                };
              }, [pe]), be;
            }, Ce = function(pe, _e, be) {
              var Pe = $(_e), ce = K(pe);
              if (!ce)
                throw new Error("Invalid or missing MediaQuery!");
              var Ie = fe(ce, Pe), wt = re(Ie), mt = V();
              return (0, O.useEffect)(function() {
                mt && be && be(wt);
              }, [wt]), (0, O.useEffect)(function() {
                return function() {
                  Ie && Ie.dispose();
                };
              }, []), wt;
            };
            T.default = Ce;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
            \**************************************************************************************/
          /***/
          (x) => {
            x.exports = d;
          }
        )
        /******/
      }, S = {};
      function w(x) {
        var T = S[x];
        if (T !== void 0)
          return T.exports;
        var b = S[x] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return m[x].call(b.exports, b, b.exports, w), b.exports;
      }
      w.d = (x, T) => {
        for (var b in T)
          w.o(T, b) && !w.o(x, b) && Object.defineProperty(x, b, { enumerable: !0, get: T[b] });
      }, w.o = (x, T) => Object.prototype.hasOwnProperty.call(x, T), w.r = (x) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(x, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(x, "__esModule", { value: !0 });
      };
      var g = w("./src/index.ts");
      return g;
    })()
  ));
})(Kx);
var Mo = Kx.exports;
const T2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.xxl}px)
` }), w2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.xl}px) and
(max-width:${Sr.responsive.breakpoint.xxl - 1}px)
` }), b2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.lg}px) and
(max-width:${Sr.responsive.breakpoint.xl - 1}px)
` }), x2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.md}px) and
(max-width:${Sr.responsive.breakpoint.lg - 1}px)
` }), R2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.sm}px) and
(max-width:${Sr.responsive.breakpoint.md - 1}px)
` }), _2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.xs}px) and
(max-width:${Sr.responsive.breakpoint.sm - 1}px)
` }), D2 = () => Mo.useMediaQuery({ query: `
(max-width:${Sr.responsive.breakpoint.xs - 1}px)
` }), rz = () => Mo.useMediaQuery({ query: `
(max-width:${Sr.responsive.breakpoint.sm - 1}px)
` }), az = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.sm}px) and 
(max-width:${Sr.responsive.breakpoint.lg - 1}px)
` }), O2 = () => Mo.useMediaQuery({ query: `
(min-width:${Sr.responsive.breakpoint.lg}px)
` });
function iz({ children: l, ...f }) {
  const [d, m] = JM(!1);
  return /* @__PURE__ */ je.jsxs("nav", { id: "nav", className: "fixed top-0 px-2 z-20 uppercase text-xl bg-black/90 rounded-b-lg", children: [
    /* @__PURE__ */ je.jsx(uz, { isDisplayed: d, setDisplayed: m }),
    d && /* @__PURE__ */ je.jsx("ul", { className: "nav-elements w-full", children: l })
  ] });
}
function oz({ children: l, ...f }) {
  return /* @__PURE__ */ je.jsx("nav", { id: "nav", className: "sticky top-0 w-full py-2 z-20 uppercase text-sm xs:text-base sm:text-lg lg:text-xl bg-black/90", children: /* @__PURE__ */ je.jsx("ul", { className: "nav-elements flex justify-center w-full ", children: l }) });
}
function k2({ children: l }) {
  const f = rz(), d = az();
  return f || d ? /* @__PURE__ */ je.jsx(iz, { children: l }) : /* @__PURE__ */ je.jsx(oz, { children: l });
}
function M2({ children: l }) {
  return /* @__PURE__ */ je.jsx("li", { className: "nav-element mr-4 xl:mr-8 border-2 border-orange-900 hover:border-orange-500 hover:bg-orange-700 transition-all duration-200 ease-in-out ", children: /* @__PURE__ */ je.jsx("a", { href: "/", className: "block px-5 py-2", children: l }) });
}
var lz = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]
};
function uz({ isDisplayed: l, setDisplayed: f }) {
  return /* @__PURE__ */ je.jsxs(
    "div",
    {
      className: "nav__display-button p-2 w-10",
      onClick: () => f(!l),
      children: [
        /* @__PURE__ */ je.jsx(
          xb,
          {
            className: "transition-all duration-500 " + (l ? "" : "!w-0 "),
            src: "/img/misc/icons/menu-bars.png",
            isEnhancedMode: !1
          }
        ),
        /* @__PURE__ */ je.jsx(
          xb,
          {
            icon: lz,
            className: "transition-all duration-500 " + (l ? "!w-0 " : ""),
            src: "/img/misc/icons/close.png",
            isEnhancedMode: !1
          }
        )
      ]
    }
  );
}
var Aa = {}, Ly = { exports: {} }, BE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ex;
function sz() {
  return ex || (ex = 1, function(l) {
    function f(ve, Fe) {
      var Te = ve.length;
      ve.push(Fe);
      e:
        for (; 0 < Te; ) {
          var St = Te - 1 >>> 1, bt = ve[St];
          if (0 < S(bt, Fe))
            ve[St] = Fe, ve[Te] = bt, Te = St;
          else
            break e;
        }
    }
    function d(ve) {
      return ve.length === 0 ? null : ve[0];
    }
    function m(ve) {
      if (ve.length === 0)
        return null;
      var Fe = ve[0], Te = ve.pop();
      if (Te !== Fe) {
        ve[0] = Te;
        e:
          for (var St = 0, bt = ve.length, yn = bt >>> 1; St < yn; ) {
            var pn = 2 * (St + 1) - 1, Lr = ve[pn], zt = pn + 1, gn = ve[zt];
            if (0 > S(Lr, Te))
              zt < bt && 0 > S(gn, Lr) ? (ve[St] = gn, ve[zt] = Te, St = zt) : (ve[St] = Lr, ve[pn] = Te, St = pn);
            else if (zt < bt && 0 > S(gn, Te))
              ve[St] = gn, ve[zt] = Te, St = zt;
            else
              break e;
          }
      }
      return Fe;
    }
    function S(ve, Fe) {
      var Te = ve.sortIndex - Fe.sortIndex;
      return Te !== 0 ? Te : ve.id - Fe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      l.unstable_now = function() {
        return w.now();
      };
    } else {
      var g = Date, x = g.now();
      l.unstable_now = function() {
        return g.now() - x;
      };
    }
    var T = [], b = [], D = 1, O = null, L = 3, A = !1, N = !1, U = !1, q = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function V(ve) {
      for (var Fe = d(b); Fe !== null; ) {
        if (Fe.callback === null)
          m(b);
        else if (Fe.startTime <= ve)
          m(b), Fe.sortIndex = Fe.expirationTime, f(T, Fe);
        else
          break;
        Fe = d(b);
      }
    }
    function $(ve) {
      if (U = !1, V(ve), !N)
        if (d(T) !== null)
          N = !0, mt(K);
        else {
          var Fe = d(b);
          Fe !== null && Nn($, Fe.startTime - ve);
        }
    }
    function K(ve, Fe) {
      N = !1, U && (U = !1, ee(Ce), Ce = -1), A = !0;
      var Te = L;
      try {
        for (V(Fe), O = d(T); O !== null && (!(O.expirationTime > Fe) || ve && !be()); ) {
          var St = O.callback;
          if (typeof St == "function") {
            O.callback = null, L = O.priorityLevel;
            var bt = St(O.expirationTime <= Fe);
            Fe = l.unstable_now(), typeof bt == "function" ? O.callback = bt : O === d(T) && m(T), V(Fe);
          } else
            m(T);
          O = d(T);
        }
        if (O !== null)
          var yn = !0;
        else {
          var pn = d(b);
          pn !== null && Nn($, pn.startTime - Fe), yn = !1;
        }
        return yn;
      } finally {
        O = null, L = Te, A = !1;
      }
    }
    var fe = !1, re = null, Ce = -1, pe = 5, _e = -1;
    function be() {
      return !(l.unstable_now() - _e < pe);
    }
    function Pe() {
      if (re !== null) {
        var ve = l.unstable_now();
        _e = ve;
        var Fe = !0;
        try {
          Fe = re(!0, ve);
        } finally {
          Fe ? ce() : (fe = !1, re = null);
        }
      } else
        fe = !1;
    }
    var ce;
    if (typeof Q == "function")
      ce = function() {
        Q(Pe);
      };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel(), wt = Ie.port2;
      Ie.port1.onmessage = Pe, ce = function() {
        wt.postMessage(null);
      };
    } else
      ce = function() {
        q(Pe, 0);
      };
    function mt(ve) {
      re = ve, fe || (fe = !0, ce());
    }
    function Nn(ve, Fe) {
      Ce = q(function() {
        ve(l.unstable_now());
      }, Fe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(ve) {
      ve.callback = null;
    }, l.unstable_continueExecution = function() {
      N || A || (N = !0, mt(K));
    }, l.unstable_forceFrameRate = function(ve) {
      0 > ve || 125 < ve ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < ve ? Math.floor(1e3 / ve) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, l.unstable_getFirstCallbackNode = function() {
      return d(T);
    }, l.unstable_next = function(ve) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var Fe = 3;
          break;
        default:
          Fe = L;
      }
      var Te = L;
      L = Fe;
      try {
        return ve();
      } finally {
        L = Te;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(ve, Fe) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ve = 3;
      }
      var Te = L;
      L = ve;
      try {
        return Fe();
      } finally {
        L = Te;
      }
    }, l.unstable_scheduleCallback = function(ve, Fe, Te) {
      var St = l.unstable_now();
      switch (typeof Te == "object" && Te !== null ? (Te = Te.delay, Te = typeof Te == "number" && 0 < Te ? St + Te : St) : Te = St, ve) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = Te + bt, ve = { id: D++, callback: Fe, priorityLevel: ve, startTime: Te, expirationTime: bt, sortIndex: -1 }, Te > St ? (ve.sortIndex = Te, f(b, ve), d(T) === null && ve === d(b) && (U ? (ee(Ce), Ce = -1) : U = !0, Nn($, Te - St))) : (ve.sortIndex = bt, f(T, ve), N || A || (N = !0, mt(K))), ve;
    }, l.unstable_shouldYield = be, l.unstable_wrapCallback = function(ve) {
      var Fe = L;
      return function() {
        var Te = L;
        L = Fe;
        try {
          return ve.apply(this, arguments);
        } finally {
          L = Te;
        }
      };
    };
  }(BE)), BE;
}
var $E = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tx;
function cz() {
  return tx || (tx = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, d = !1, m = 5;
      function S(Se, $e) {
        var yt = Se.length;
        Se.push($e), x(Se, $e, yt);
      }
      function w(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function g(Se) {
        if (Se.length === 0)
          return null;
        var $e = Se[0], yt = Se.pop();
        return yt !== $e && (Se[0] = yt, T(Se, yt, 0)), $e;
      }
      function x(Se, $e, yt) {
        for (var Ft = yt; Ft > 0; ) {
          var ln = Ft - 1 >>> 1, Bn = Se[ln];
          if (b(Bn, $e) > 0)
            Se[ln] = $e, Se[Ft] = Bn, Ft = ln;
          else
            return;
        }
      }
      function T(Se, $e, yt) {
        for (var Ft = yt, ln = Se.length, Bn = ln >>> 1; Ft < Bn; ) {
          var Sn = (Ft + 1) * 2 - 1, Ar = Se[Sn], Qt = Sn + 1, Zr = Se[Qt];
          if (b(Ar, $e) < 0)
            Qt < ln && b(Zr, Ar) < 0 ? (Se[Ft] = Zr, Se[Qt] = $e, Ft = Qt) : (Se[Ft] = Ar, Se[Sn] = $e, Ft = Sn);
          else if (Qt < ln && b(Zr, $e) < 0)
            Se[Ft] = Zr, Se[Qt] = $e, Ft = Qt;
          else
            return;
        }
      }
      function b(Se, $e) {
        var yt = Se.sortIndex - $e.sortIndex;
        return yt !== 0 ? yt : Se.id - $e.id;
      }
      var D = 1, O = 2, L = 3, A = 4, N = 5;
      function U(Se, $e) {
      }
      var q = typeof performance == "object" && typeof performance.now == "function";
      if (q) {
        var ee = performance;
        l.unstable_now = function() {
          return ee.now();
        };
      } else {
        var Q = Date, V = Q.now();
        l.unstable_now = function() {
          return Q.now() - V;
        };
      }
      var $ = 1073741823, K = -1, fe = 250, re = 5e3, Ce = 1e4, pe = $, _e = [], be = [], Pe = 1, ce = null, Ie = L, wt = !1, mt = !1, Nn = !1, ve = typeof setTimeout == "function" ? setTimeout : null, Fe = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function St(Se) {
        for (var $e = w(be); $e !== null; ) {
          if ($e.callback === null)
            g(be);
          else if ($e.startTime <= Se)
            g(be), $e.sortIndex = $e.expirationTime, S(_e, $e);
          else
            return;
          $e = w(be);
        }
      }
      function bt(Se) {
        if (Nn = !1, St(Se), !mt)
          if (w(_e) !== null)
            mt = !0, ja(yn);
          else {
            var $e = w(be);
            $e !== null && xn(bt, $e.startTime - Se);
          }
      }
      function yn(Se, $e) {
        mt = !1, Nn && (Nn = !1, Kr()), wt = !0;
        var yt = Ie;
        try {
          var Ft;
          if (!d)
            return pn(Se, $e);
        } finally {
          ce = null, Ie = yt, wt = !1;
        }
      }
      function pn(Se, $e) {
        var yt = $e;
        for (St(yt), ce = w(_e); ce !== null && !f && !(ce.expirationTime > yt && (!Se || vt())); ) {
          var Ft = ce.callback;
          if (typeof Ft == "function") {
            ce.callback = null, Ie = ce.priorityLevel;
            var ln = ce.expirationTime <= yt, Bn = Ft(ln);
            yt = l.unstable_now(), typeof Bn == "function" ? ce.callback = Bn : ce === w(_e) && g(_e), St(yt);
          } else
            g(_e);
          ce = w(_e);
        }
        if (ce !== null)
          return !0;
        var Sn = w(be);
        return Sn !== null && xn(bt, Sn.startTime - yt), !1;
      }
      function Lr(Se, $e) {
        switch (Se) {
          case D:
          case O:
          case L:
          case A:
          case N:
            break;
          default:
            Se = L;
        }
        var yt = Ie;
        Ie = Se;
        try {
          return $e();
        } finally {
          Ie = yt;
        }
      }
      function zt(Se) {
        var $e;
        switch (Ie) {
          case D:
          case O:
          case L:
            $e = L;
            break;
          default:
            $e = Ie;
            break;
        }
        var yt = Ie;
        Ie = $e;
        try {
          return Se();
        } finally {
          Ie = yt;
        }
      }
      function gn(Se) {
        var $e = Ie;
        return function() {
          var yt = Ie;
          Ie = $e;
          try {
            return Se.apply(this, arguments);
          } finally {
            Ie = yt;
          }
        };
      }
      function bn(Se, $e, yt) {
        var Ft = l.unstable_now(), ln;
        if (typeof yt == "object" && yt !== null) {
          var Bn = yt.delay;
          typeof Bn == "number" && Bn > 0 ? ln = Ft + Bn : ln = Ft;
        } else
          ln = Ft;
        var Sn;
        switch (Se) {
          case D:
            Sn = K;
            break;
          case O:
            Sn = fe;
            break;
          case N:
            Sn = pe;
            break;
          case A:
            Sn = Ce;
            break;
          case L:
          default:
            Sn = re;
            break;
        }
        var Ar = ln + Sn, Qt = {
          id: Pe++,
          callback: $e,
          priorityLevel: Se,
          startTime: ln,
          expirationTime: Ar,
          sortIndex: -1
        };
        return ln > Ft ? (Qt.sortIndex = ln, S(be, Qt), w(_e) === null && Qt === w(be) && (Nn ? Kr() : Nn = !0, xn(bt, ln - Ft))) : (Qt.sortIndex = Ar, S(_e, Qt), !mt && !wt && (mt = !0, ja(yn))), Qt;
      }
      function Ln() {
      }
      function ue() {
        !mt && !wt && (mt = !0, ja(yn));
      }
      function ye() {
        return w(_e);
      }
      function nt(Se) {
        Se.callback = null;
      }
      function Be() {
        return Ie;
      }
      var He = !1, et = null, Ye = -1, Qe = m, ot = -1;
      function vt() {
        var Se = l.unstable_now() - ot;
        return !(Se < Qe);
      }
      function dt() {
      }
      function ge(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? Qe = Math.floor(1e3 / Se) : Qe = m;
      }
      var Ut = function() {
        if (et !== null) {
          var Se = l.unstable_now();
          ot = Se;
          var $e = !0, yt = !0;
          try {
            yt = et($e, Se);
          } finally {
            yt ? qt() : (He = !1, et = null);
          }
        } else
          He = !1;
      }, qt;
      if (typeof Te == "function")
        qt = function() {
          Te(Ut);
        };
      else if (typeof MessageChannel < "u") {
        var Xr = new MessageChannel(), qr = Xr.port2;
        Xr.port1.onmessage = Ut, qt = function() {
          qr.postMessage(null);
        };
      } else
        qt = function() {
          ve(Ut, 0);
        };
      function ja(Se) {
        et = Se, He || (He = !0, qt());
      }
      function xn(Se, $e) {
        Ye = ve(function() {
          Se(l.unstable_now());
        }, $e);
      }
      function Kr() {
        Fe(Ye), Ye = -1;
      }
      var Wi = dt, Fa = null;
      l.unstable_IdlePriority = N, l.unstable_ImmediatePriority = D, l.unstable_LowPriority = A, l.unstable_NormalPriority = L, l.unstable_Profiling = Fa, l.unstable_UserBlockingPriority = O, l.unstable_cancelCallback = nt, l.unstable_continueExecution = ue, l.unstable_forceFrameRate = ge, l.unstable_getCurrentPriorityLevel = Be, l.unstable_getFirstCallbackNode = ye, l.unstable_next = zt, l.unstable_pauseExecution = Ln, l.unstable_requestPaint = Wi, l.unstable_runWithPriority = Lr, l.unstable_scheduleCallback = bn, l.unstable_shouldYield = vt, l.unstable_wrapCallback = gn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }($E)), $E;
}
var nx;
function Zx() {
  return nx || (nx = 1, process.env.NODE_ENV === "production" ? Ly.exports = sz() : Ly.exports = cz()), Ly.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rx;
function fz() {
  if (rx)
    return Aa;
  rx = 1;
  var l = da, f = Zx();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var m = /* @__PURE__ */ new Set(), S = {};
  function w(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (S[n] = r, n = 0; n < r.length; n++)
      m.add(r[n]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, O = {};
  function L(n) {
    return T.call(O, n) ? !0 : T.call(D, n) ? !1 : b.test(n) ? O[n] = !0 : (D[n] = !0, !1);
  }
  function A(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function N(n, r, o, s) {
    if (r === null || typeof r > "u" || A(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function U(n, r, o, s, p, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    q[n] = new U(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    q[r] = new U(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    q[n] = new U(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    q[n] = new U(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    q[n] = new U(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    q[n] = new U(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    q[n] = new U(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    q[n] = new U(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    q[n] = new U(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ee = /[\-:]([a-z])/g;
  function Q(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ee,
      Q
    );
    q[r] = new U(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ee, Q);
    q[r] = new U(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ee, Q);
    q[r] = new U(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    q[n] = new U(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    q[n] = new U(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function V(n, r, o, s) {
    var p = q.hasOwnProperty(r) ? q[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (N(r, o, p, s) && (o = null), s || p === null ? L(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var $ = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, K = Symbol.for("react.element"), fe = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), Ce = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), be = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Nn = Symbol.for("react.offscreen"), ve = Symbol.iterator;
  function Fe(n) {
    return n === null || typeof n != "object" ? null : (n = ve && n[ve] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Te = Object.assign, St;
  function bt(n) {
    if (St === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        St = r && r[1] || "";
      }
    return `
` + St + n;
  }
  var yn = !1;
  function pn(n, r) {
    if (!n || yn)
      return "";
    yn = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (X) {
            var s = X;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (X) {
            s = X;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (X) {
          s = X;
        }
        n();
      }
    } catch (X) {
      if (X && s && typeof X.stack == "string") {
        for (var p = X.stack.split(`
`), h = s.stack.split(`
`), C = p.length - 1, k = h.length - 1; 1 <= C && 0 <= k && p[C] !== h[k]; )
          k--;
        for (; 1 <= C && 0 <= k; C--, k--)
          if (p[C] !== h[k]) {
            if (C !== 1 || k !== 1)
              do
                if (C--, k--, 0 > k || p[C] !== h[k]) {
                  var z = `
` + p[C].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= C && 0 <= k);
            break;
          }
      }
    } finally {
      yn = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? bt(n) : "";
  }
  function Lr(n) {
    switch (n.tag) {
      case 5:
        return bt(n.type);
      case 16:
        return bt("Lazy");
      case 13:
        return bt("Suspense");
      case 19:
        return bt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = pn(n.type, !1), n;
      case 11:
        return n = pn(n.type.render, !1), n;
      case 1:
        return n = pn(n.type, !0), n;
      default:
        return "";
    }
  }
  function zt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case re:
        return "Fragment";
      case fe:
        return "Portal";
      case pe:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case ce:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case be:
          return (n.displayName || "Context") + ".Consumer";
        case _e:
          return (n._context.displayName || "Context") + ".Provider";
        case Pe:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case wt:
          return r = n.displayName || null, r !== null ? r : zt(n.type) || "Memo";
        case mt:
          r = n._payload, n = n._init;
          try {
            return zt(n(r));
          } catch {
          }
      }
    return null;
  }
  function gn(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return zt(r);
      case 8:
        return r === Ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function bn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ln(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ue(n) {
    var r = Ln(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        s = "" + C, h.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(C) {
        s = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ye(n) {
    n._valueTracker || (n._valueTracker = ue(n));
  }
  function nt(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = Ln(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Be(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function He(n, r) {
    var o = r.checked;
    return Te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function et(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = bn(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Ye(n, r) {
    r = r.checked, r != null && V(n, "checked", r, !1);
  }
  function Qe(n, r) {
    Ye(n, r);
    var o = bn(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? vt(n, r.type, o) : r.hasOwnProperty("defaultValue") && vt(n, r.type, bn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ot(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function vt(n, r, o) {
    (r !== "number" || Be(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var dt = Array.isArray;
  function ge(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + bn(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ut(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(d(91));
    return Te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qt(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(d(92));
        if (dt(o)) {
          if (1 < o.length)
            throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: bn(o) };
  }
  function Xr(n, r) {
    var o = bn(r.value), s = bn(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function qr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ja(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function xn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ja(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Kr, Wi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Kr = Kr || document.createElement("div"), Kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Kr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Fa(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Se = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, $e = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Se).forEach(function(n) {
    $e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Se[r] = Se[n];
    });
  });
  function yt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Se.hasOwnProperty(n) && Se[n] ? ("" + r).trim() : r + "px";
  }
  function Ft(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, p = yt(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var ln = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bn(n, r) {
    if (r) {
      if (ln[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(d(62));
    }
  }
  function Sn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ar = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Zr = null, $t = null, Xt = null;
  function Rl(n) {
    if (n = es(n)) {
      if (typeof Zr != "function")
        throw Error(d(280));
      var r = n.stateNode;
      r && (r = We(r), Zr(n.stateNode, n.type, r));
    }
  }
  function No(n) {
    $t ? Xt ? Xt.push(n) : Xt = [n] : $t = n;
  }
  function _l() {
    if ($t) {
      var n = $t, r = Xt;
      if (Xt = $t = null, Rl(n), r)
        for (n = 0; n < r.length; n++)
          Rl(r[n]);
    }
  }
  function Nu(n, r) {
    return n(r);
  }
  function Qs() {
  }
  var Lo = !1;
  function Dl(n, r, o) {
    if (Lo)
      return n(r, o);
    Lo = !0;
    try {
      return Nu(n, r, o);
    } finally {
      Lo = !1, ($t !== null || Xt !== null) && (Qs(), _l());
    }
  }
  function Ao(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = We(o);
    if (s === null)
      return null;
    o = s[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(d(231, r, typeof o));
    return o;
  }
  var Ol = !1;
  if (x)
    try {
      var ei = {};
      Object.defineProperty(ei, "passive", { get: function() {
        Ol = !0;
      } }), window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei);
    } catch {
      Ol = !1;
    }
  function Yi(n, r, o, s, p, h, C, k, z) {
    var X = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, X);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var Jr = !1, Ha = null, Gi = !1, M = null, oe = { onError: function(n) {
    Jr = !0, Ha = n;
  } };
  function Ee(n, r, o, s, p, h, C, k, z) {
    Jr = !1, Ha = null, Yi.apply(oe, arguments);
  }
  function Xe(n, r, o, s, p, h, C, k, z) {
    if (Ee.apply(this, arguments), Jr) {
      if (Jr) {
        var X = Ha;
        Jr = !1, Ha = null;
      } else
        throw Error(d(198));
      Gi || (Gi = !0, M = X);
    }
  }
  function pt(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ht(n) {
    if (pt(n) !== n)
      throw Error(d(188));
  }
  function Ke(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pt(n), r === null)
        throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var h = p.alternate;
      if (h === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === o)
            return ht(p), n;
          if (h === s)
            return ht(p), r;
          h = h.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return)
        o = p, s = h;
      else {
        for (var C = !1, k = p.child; k; ) {
          if (k === o) {
            C = !0, o = p, s = h;
            break;
          }
          if (k === s) {
            C = !0, s = p, o = h;
            break;
          }
          k = k.sibling;
        }
        if (!C) {
          for (k = h.child; k; ) {
            if (k === o) {
              C = !0, o = h, s = p;
              break;
            }
            if (k === s) {
              C = !0, s = h, o = p;
              break;
            }
            k = k.sibling;
          }
          if (!C)
            throw Error(d(189));
        }
      }
      if (o.alternate !== s)
        throw Error(d(190));
    }
    if (o.tag !== 3)
      throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function $n(n) {
    return n = Ke(n), n !== null ? nn(n) : null;
  }
  function nn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = nn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var rn = f.unstable_scheduleCallback, Er = f.unstable_cancelCallback, Qi = f.unstable_shouldYield, Xs = f.unstable_requestPaint, Mt = f.unstable_now, ag = f.unstable_getCurrentPriorityLevel, hi = f.unstable_ImmediatePriority, Et = f.unstable_UserBlockingPriority, Xi = f.unstable_NormalPriority, xv = f.unstable_LowPriority, qf = f.unstable_IdlePriority, Lu = null, Va = null;
  function Rv(n) {
    if (Va && typeof Va.onCommitFiberRoot == "function")
      try {
        Va.onCommitFiberRoot(Lu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var va = Math.clz32 ? Math.clz32 : ig, _v = Math.log, Dv = Math.LN2;
  function ig(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (_v(n) / Dv | 0) | 0;
  }
  var qs = 64, kl = 4194304;
  function zo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ia(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, p = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var k = C & ~p;
      k !== 0 ? s = zo(k) : (h &= C, h !== 0 && (s = zo(h)));
    } else
      C = o & ~p, C !== 0 ? s = zo(C) : h !== 0 && (s = zo(h));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, h = r & -r, p >= h || p === 16 && (h & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - va(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function Kf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ks(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - va(h), k = 1 << C, z = p[C];
      z === -1 ? (!(k & o) || k & s) && (p[C] = Kf(k, r)) : z <= r && (n.expiredLanes |= k), h &= ~k;
    }
  }
  function Zf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zs() {
    var n = qs;
    return qs <<= 1, !(qs & 4194240) && (qs = 64), n;
  }
  function Jf(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Uo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - va(r), n[r] = o;
  }
  function og(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - va(o), h = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~h;
    }
  }
  function Au(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - va(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var Ht = 0;
  function ed(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ov, Js, Wt, kv, td, ut = !1, zu = [], Rn = null, ha = null, ma = null, Uu = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), Vt = [], lg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ba(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        ma = null;
        break;
      case "pointerover":
      case "pointerout":
        Uu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        An.delete(r.pointerId);
    }
  }
  function cr(n, r, o, s, p, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [p] }, r !== null && (r = es(r), r !== null && Js(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function qi(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return Rn = cr(Rn, n, r, o, s, p), !0;
      case "dragenter":
        return ha = cr(ha, n, r, o, s, p), !0;
      case "mouseover":
        return ma = cr(ma, n, r, o, s, p), !0;
      case "pointerover":
        var h = p.pointerId;
        return Uu.set(h, cr(Uu.get(h) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return h = p.pointerId, An.set(h, cr(An.get(h) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function Mv(n) {
    var r = ga(n.target);
    if (r !== null) {
      var o = pt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Ot(o), r !== null) {
            n.blockedOn = r, td(n.priority, function() {
              Wt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ml(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = nc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        Ar = s, o.target.dispatchEvent(s), Ar = null;
      } else
        return r = es(o), r !== null && Js(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function nd(n, r, o) {
    Ml(n) && o.delete(r);
  }
  function Nv() {
    ut = !1, Rn !== null && Ml(Rn) && (Rn = null), ha !== null && Ml(ha) && (ha = null), ma !== null && Ml(ma) && (ma = null), Uu.forEach(nd), An.forEach(nd);
  }
  function Pu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ut || (ut = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Nv)));
  }
  function ju(n) {
    function r(p) {
      return Pu(p, n);
    }
    if (0 < zu.length) {
      Pu(zu[0], n);
      for (var o = 1; o < zu.length; o++) {
        var s = zu[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (Rn !== null && Pu(Rn, n), ha !== null && Pu(ha, n), ma !== null && Pu(ma, n), Uu.forEach(r), An.forEach(r), o = 0; o < Vt.length; o++)
      s = Vt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Vt.length && (o = Vt[0], o.blockedOn === null); )
      Mv(o), o.blockedOn === null && Vt.shift();
  }
  var Nl = $.ReactCurrentBatchConfig, Po = !0;
  function Lv(n, r, o, s) {
    var p = Ht, h = Nl.transition;
    Nl.transition = null;
    try {
      Ht = 1, tc(n, r, o, s);
    } finally {
      Ht = p, Nl.transition = h;
    }
  }
  function ec(n, r, o, s) {
    var p = Ht, h = Nl.transition;
    Nl.transition = null;
    try {
      Ht = 4, tc(n, r, o, s);
    } finally {
      Ht = p, Nl.transition = h;
    }
  }
  function tc(n, r, o, s) {
    if (Po) {
      var p = nc(n, r, o, s);
      if (p === null)
        vc(n, r, s, Fu, o), Ba(n, s);
      else if (qi(p, n, r, o, s))
        s.stopPropagation();
      else if (Ba(n, s), r & 4 && -1 < lg.indexOf(n)) {
        for (; p !== null; ) {
          var h = es(p);
          if (h !== null && Ov(h), h = nc(n, r, o, s), h === null && vc(n, r, s, Fu, o), h === p)
            break;
          p = h;
        }
        p !== null && s.stopPropagation();
      } else
        vc(n, r, s, null, o);
    }
  }
  var Fu = null;
  function nc(n, r, o, s) {
    if (Fu = null, n = Qt(s), n = ga(n), n !== null)
      if (r = pt(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Ot(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Fu = n, null;
  }
  function rd(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ag()) {
          case hi:
            return 1;
          case Et:
            return 4;
          case Xi:
          case xv:
            return 16;
          case qf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mi = null, Hu = null, Vu = null;
  function ad() {
    if (Vu)
      return Vu;
    var n, r = Hu, o = r.length, s, p = "value" in mi ? mi.value : mi.textContent, h = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var C = o - n;
    for (s = 1; s <= C && r[o - s] === p[h - s]; s++)
      ;
    return Vu = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function Ll(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Iu() {
    return !0;
  }
  function Av() {
    return !1;
  }
  function ea(n) {
    function r(o, s, p, h, C) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(h) : h[k]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Iu : Av, this.isPropagationStopped = Av, this;
    }
    return Te(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Iu);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Iu);
    }, persist: function() {
    }, isPersistent: Iu }), r;
  }
  var Ki = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, rc = ea(Ki), Al = Te({}, Ki, { view: 0, detail: 0 }), zv = ea(Al), ac, id, Bu, Wn = Te({}, Al, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Bu && (Bu && n.type === "mousemove" ? (ac = n.screenX - Bu.screenX, id = n.screenY - Bu.screenY) : id = ac = 0, Bu = n), ac);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : id;
  } }), ic = ea(Wn), Uv = Te({}, Wn, { dataTransfer: 0 }), Pv = ea(Uv), ug = Te({}, Al, { relatedTarget: 0 }), Zi = ea(ug), od = Te({}, Ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jv = ea(od), sg = Te({}, Ki, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cg = ea(sg), fg = Te({}, Ki, { data: 0 }), ld = ea(fg), ud = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Fv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Hv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Hv[n]) ? !!r[n] : !1;
  }
  function sd() {
    return Vv;
  }
  var yi = Te({}, Al, { key: function(n) {
    if (n.key) {
      var r = ud[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ll(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Fv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sd, charCode: function(n) {
    return n.type === "keypress" ? Ll(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ll(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), dg = ea(yi), cd = Te({}, Wn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oc = ea(cd), fd = Te({}, Al, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sd }), pg = ea(fd), lc = Te({}, Ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Iv = ea(lc), zr = Te({}, Wn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gi = ea(zr), _n = [9, 13, 27, 32], $a = x && "CompositionEvent" in window, jo = null;
  x && "documentMode" in document && (jo = document.documentMode);
  var uc = x && "TextEvent" in window && !jo, Bv = x && (!$a || jo && 8 < jo && 11 >= jo), zl = " ", $v = !1;
  function Wv(n, r) {
    switch (n) {
      case "keyup":
        return _n.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ul = !1;
  function vg(n, r) {
    switch (n) {
      case "compositionend":
        return sc(r);
      case "keypress":
        return r.which !== 32 ? null : ($v = !0, zl);
      case "textInput":
        return n = r.data, n === zl && $v ? null : n;
      default:
        return null;
    }
  }
  function hg(n, r) {
    if (Ul)
      return n === "compositionend" || !$a && Wv(n, r) ? (n = ad(), Vu = Hu = mi = null, Ul = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Bv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Yv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Yv[n.type] : r === "textarea";
  }
  function Qv(n, r, o, s) {
    No(s), r = Ku(r, "onChange"), 0 < r.length && (o = new rc("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var $u = null, Pl = null;
  function jl(n) {
    pc(n, 0);
  }
  function Fl(n) {
    var r = Vl(n);
    if (nt(r))
      return n;
  }
  function Xv(n, r) {
    if (n === "change")
      return r;
  }
  var dd = !1;
  if (x) {
    var pd;
    if (x) {
      var vd = "oninput" in document;
      if (!vd) {
        var qv = document.createElement("div");
        qv.setAttribute("oninput", "return;"), vd = typeof qv.oninput == "function";
      }
      pd = vd;
    } else
      pd = !1;
    dd = pd && (!document.documentMode || 9 < document.documentMode);
  }
  function Kv() {
    $u && ($u.detachEvent("onpropertychange", Zv), Pl = $u = null);
  }
  function Zv(n) {
    if (n.propertyName === "value" && Fl(Pl)) {
      var r = [];
      Qv(r, Pl, n, Qt(n)), Dl(jl, r);
    }
  }
  function mg(n, r, o) {
    n === "focusin" ? (Kv(), $u = r, Pl = o, $u.attachEvent("onpropertychange", Zv)) : n === "focusout" && Kv();
  }
  function yg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Fl(Pl);
  }
  function gg(n, r) {
    if (n === "click")
      return Fl(r);
  }
  function Jv(n, r) {
    if (n === "input" || n === "change")
      return Fl(r);
  }
  function Sg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ya = typeof Object.is == "function" ? Object.is : Sg;
  function Wu(n, r) {
    if (ya(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!T.call(r, p) || !ya(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function eh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function th(n, r) {
    var o = eh(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = eh(o);
    }
  }
  function nh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? nh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cc() {
    for (var n = window, r = Be(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Be(n.document);
    }
    return r;
  }
  function Si(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function fc(n) {
    var r = cc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && nh(o.ownerDocument.documentElement, o)) {
      if (s !== null && Si(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, h = Math.min(s.start, p);
          s = s.end === void 0 ? h : Math.min(s.end, p), !n.extend && h > s && (p = s, s = h, h = p), p = th(o, h);
          var C = th(
            o,
            s
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), h > s ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var rh = x && "documentMode" in document && 11 >= document.documentMode, Wa = null, hd = null, Yu = null, md = !1;
  function ah(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    md || Wa == null || Wa !== Be(s) || (s = Wa, "selectionStart" in s && Si(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Yu && Wu(Yu, s) || (Yu = s, s = Ku(hd, "onSelect"), 0 < s.length && (r = new rc("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = Wa)));
  }
  function dc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Fo = { animationend: dc("Animation", "AnimationEnd"), animationiteration: dc("Animation", "AnimationIteration"), animationstart: dc("Animation", "AnimationStart"), transitionend: dc("Transition", "TransitionEnd") }, yd = {}, gd = {};
  x && (gd = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function Yn(n) {
    if (yd[n])
      return yd[n];
    if (!Fo[n])
      return n;
    var r = Fo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in gd)
        return yd[n] = r[o];
    return n;
  }
  var Sd = Yn("animationend"), ih = Yn("animationiteration"), oh = Yn("animationstart"), lh = Yn("transitionend"), uh = /* @__PURE__ */ new Map(), sh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ei(n, r) {
    uh.set(n, r), w(r, [n]);
  }
  for (var Gu = 0; Gu < sh.length; Gu++) {
    var Ho = sh[Gu], Eg = Ho.toLowerCase(), Qu = Ho[0].toUpperCase() + Ho.slice(1);
    Ei(Eg, "on" + Qu);
  }
  Ei(Sd, "onAnimationEnd"), Ei(ih, "onAnimationIteration"), Ei(oh, "onAnimationStart"), Ei("dblclick", "onDoubleClick"), Ei("focusin", "onFocus"), Ei("focusout", "onBlur"), Ei(lh, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xu));
  function ch(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, Xe(s, r, void 0, n), n.currentTarget = null;
  }
  function pc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var C = s.length - 1; 0 <= C; C--) {
            var k = s[C], z = k.instance, X = k.currentTarget;
            if (k = k.listener, z !== h && p.isPropagationStopped())
              break e;
            ch(p, k, X), h = z;
          }
        else
          for (C = 0; C < s.length; C++) {
            if (k = s[C], z = k.instance, X = k.currentTarget, k = k.listener, z !== h && p.isPropagationStopped())
              break e;
            ch(p, k, X), h = z;
          }
      }
    }
    if (Gi)
      throw n = M, Gi = !1, M = null, n;
  }
  function Yt(n, r) {
    var o = r[Rd];
    o === void 0 && (o = r[Rd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (fh(r, n, 2, !1), o.add(s));
  }
  function Ji(n, r, o) {
    var s = 0;
    r && (s |= 4), fh(o, n, s, r);
  }
  var Ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Hl(n) {
    if (!n[Ci]) {
      n[Ci] = !0, m.forEach(function(o) {
        o !== "selectionchange" && (Cg.has(o) || Ji(o, !1, n), Ji(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ci] || (r[Ci] = !0, Ji("selectionchange", !1, r));
    }
  }
  function fh(n, r, o, s) {
    switch (rd(r)) {
      case 1:
        var p = Lv;
        break;
      case 4:
        p = ec;
        break;
      default:
        p = tc;
    }
    o = p.bind(null, r, o, n), p = void 0, !Ol || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function vc(n, r, o, s, p) {
    var h = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var C = s.tag;
          if (C === 3 || C === 4) {
            var k = s.stateNode.containerInfo;
            if (k === p || k.nodeType === 8 && k.parentNode === p)
              break;
            if (C === 4)
              for (C = s.return; C !== null; ) {
                var z = C.tag;
                if ((z === 3 || z === 4) && (z = C.stateNode.containerInfo, z === p || z.nodeType === 8 && z.parentNode === p))
                  return;
                C = C.return;
              }
            for (; k !== null; ) {
              if (C = ga(k), C === null)
                return;
              if (z = C.tag, z === 5 || z === 6) {
                s = h = C;
                continue e;
              }
              k = k.parentNode;
            }
          }
          s = s.return;
        }
    Dl(function() {
      var X = h, ie = Qt(o), le = [];
      e: {
        var ae = uh.get(n);
        if (ae !== void 0) {
          var xe = rc, Me = n;
          switch (n) {
            case "keypress":
              if (Ll(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              xe = dg;
              break;
            case "focusin":
              Me = "focus", xe = Zi;
              break;
            case "focusout":
              Me = "blur", xe = Zi;
              break;
            case "beforeblur":
            case "afterblur":
              xe = Zi;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              xe = ic;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = Pv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = pg;
              break;
            case Sd:
            case ih:
            case oh:
              xe = jv;
              break;
            case lh:
              xe = Iv;
              break;
            case "scroll":
              xe = zv;
              break;
            case "wheel":
              xe = gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = cg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = oc;
          }
          var Ae = (r & 4) !== 0, Cn = !Ae && n === "scroll", H = Ae ? ae !== null ? ae + "Capture" : null : ae;
          Ae = [];
          for (var j = X, W; j !== null; ) {
            W = j;
            var de = W.stateNode;
            if (W.tag === 5 && de !== null && (W = de, H !== null && (de = Ao(j, H), de != null && Ae.push(qu(j, de, W)))), Cn)
              break;
            j = j.return;
          }
          0 < Ae.length && (ae = new xe(ae, Me, null, o, ie), le.push({ event: ae, listeners: Ae }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", xe = n === "mouseout" || n === "pointerout", ae && o !== Ar && (Me = o.relatedTarget || o.fromElement) && (ga(Me) || Me[Ti]))
            break e;
          if ((xe || ae) && (ae = ie.window === ie ? ie : (ae = ie.ownerDocument) ? ae.defaultView || ae.parentWindow : window, xe ? (Me = o.relatedTarget || o.toElement, xe = X, Me = Me ? ga(Me) : null, Me !== null && (Cn = pt(Me), Me !== Cn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (xe = null, Me = X), xe !== Me)) {
            if (Ae = ic, de = "onMouseLeave", H = "onMouseEnter", j = "mouse", (n === "pointerout" || n === "pointerover") && (Ae = oc, de = "onPointerLeave", H = "onPointerEnter", j = "pointer"), Cn = xe == null ? ae : Vl(xe), W = Me == null ? ae : Vl(Me), ae = new Ae(de, j + "leave", xe, o, ie), ae.target = Cn, ae.relatedTarget = W, de = null, ga(ie) === X && (Ae = new Ae(H, j + "enter", Me, o, ie), Ae.target = W, Ae.relatedTarget = Cn, de = Ae), Cn = de, xe && Me)
              t: {
                for (Ae = xe, H = Me, j = 0, W = Ae; W; W = Vo(W))
                  j++;
                for (W = 0, de = H; de; de = Vo(de))
                  W++;
                for (; 0 < j - W; )
                  Ae = Vo(Ae), j--;
                for (; 0 < W - j; )
                  H = Vo(H), W--;
                for (; j--; ) {
                  if (Ae === H || H !== null && Ae === H.alternate)
                    break t;
                  Ae = Vo(Ae), H = Vo(H);
                }
                Ae = null;
              }
            else
              Ae = null;
            xe !== null && Ed(le, ae, xe, Ae, !1), Me !== null && Cn !== null && Ed(le, Cn, Me, Ae, !0);
          }
        }
        e: {
          if (ae = X ? Vl(X) : window, xe = ae.nodeName && ae.nodeName.toLowerCase(), xe === "select" || xe === "input" && ae.type === "file")
            var ze = Xv;
          else if (Gv(ae))
            if (dd)
              ze = Jv;
            else {
              ze = yg;
              var Ne = mg;
            }
          else
            (xe = ae.nodeName) && xe.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (ze = gg);
          if (ze && (ze = ze(n, X))) {
            Qv(le, ze, o, ie);
            break e;
          }
          Ne && Ne(n, ae, X), n === "focusout" && (Ne = ae._wrapperState) && Ne.controlled && ae.type === "number" && vt(ae, "number", ae.value);
        }
        switch (Ne = X ? Vl(X) : window, n) {
          case "focusin":
            (Gv(Ne) || Ne.contentEditable === "true") && (Wa = Ne, hd = X, Yu = null);
            break;
          case "focusout":
            Yu = hd = Wa = null;
            break;
          case "mousedown":
            md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            md = !1, ah(le, o, ie);
            break;
          case "selectionchange":
            if (rh)
              break;
          case "keydown":
          case "keyup":
            ah(le, o, ie);
        }
        var Ve;
        if ($a)
          e: {
            switch (n) {
              case "compositionstart":
                var at = "onCompositionStart";
                break e;
              case "compositionend":
                at = "onCompositionEnd";
                break e;
              case "compositionupdate":
                at = "onCompositionUpdate";
                break e;
            }
            at = void 0;
          }
        else
          Ul ? Wv(n, o) && (at = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (at = "onCompositionStart");
        at && (Bv && o.locale !== "ko" && (Ul || at !== "onCompositionStart" ? at === "onCompositionEnd" && Ul && (Ve = ad()) : (mi = ie, Hu = "value" in mi ? mi.value : mi.textContent, Ul = !0)), Ne = Ku(X, at), 0 < Ne.length && (at = new ld(at, n, null, o, ie), le.push({ event: at, listeners: Ne }), Ve ? at.data = Ve : (Ve = sc(o), Ve !== null && (at.data = Ve)))), (Ve = uc ? vg(n, o) : hg(n, o)) && (X = Ku(X, "onBeforeInput"), 0 < X.length && (ie = new ld("onBeforeInput", "beforeinput", null, o, ie), le.push({ event: ie, listeners: X }), ie.data = Ve));
      }
      pc(le, r);
    });
  }
  function qu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ku(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = Ao(n, o), h != null && s.unshift(qu(n, h, p)), h = Ao(n, r), h != null && s.push(qu(n, h, p))), n = n.return;
    }
    return s;
  }
  function Vo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Ed(n, r, o, s, p) {
    for (var h = r._reactName, C = []; o !== null && o !== s; ) {
      var k = o, z = k.alternate, X = k.stateNode;
      if (z !== null && z === s)
        break;
      k.tag === 5 && X !== null && (k = X, p ? (z = Ao(o, h), z != null && C.unshift(qu(o, z, k))) : p || (z = Ao(o, h), z != null && C.push(qu(o, z, k)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Cd = /\r\n?/g, Tg = /\u0000|\uFFFD/g;
  function Td(n) {
    return (typeof n == "string" ? n : "" + n).replace(Cd, `
`).replace(Tg, "");
  }
  function hc(n, r, o) {
    if (r = Td(r), Td(n) !== r && o)
      throw Error(d(425));
  }
  function mc() {
  }
  var wd = null, Io = null;
  function Zu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Bo = typeof setTimeout == "function" ? setTimeout : void 0, dh = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, xd = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(n) {
    return bd.resolve(null).then(n).catch(wg);
  } : Bo;
  function wg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function eo(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (s === 0) {
            n.removeChild(p), ju(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    ju(r);
  }
  function Ya(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ju(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var to = Math.random().toString(36).slice(2), ti = "__reactFiber$" + to, $o = "__reactProps$" + to, Ti = "__reactContainer$" + to, Rd = "__reactEvents$" + to, bg = "__reactListeners$" + to, _d = "__reactHandles$" + to;
  function ga(n) {
    var r = n[ti];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ti] || o[ti]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ju(n); n !== null; ) {
            if (o = n[ti])
              return o;
            n = Ju(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function es(n) {
    return n = n[ti] || n[Ti], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Vl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(d(33));
  }
  function We(n) {
    return n[$o] || null;
  }
  var no = [], Kt = -1;
  function ct(n) {
    return { current: n };
  }
  function At(n) {
    0 > Kt || (n.current = no[Kt], no[Kt] = null, Kt--);
  }
  function Pt(n, r) {
    Kt++, no[Kt] = n.current, n.current = r;
  }
  var ni = {}, rt = ct(ni), vn = ct(!1), Ur = ni;
  function Sa(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ni;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, h;
    for (h in o)
      p[h] = r[h];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function an(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ea() {
    At(vn), At(rt);
  }
  function ro(n, r, o) {
    if (rt.current !== ni)
      throw Error(d(168));
    Pt(rt, r), Pt(vn, o);
  }
  function ts(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var p in s)
      if (!(p in r))
        throw Error(d(108, gn(n) || "Unknown", p));
    return Te({}, o, s);
  }
  function yc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ni, Ur = rt.current, Pt(rt, n), Pt(vn, vn.current), !0;
  }
  function ph(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(d(169));
    o ? (n = ts(n, r, Ur), s.__reactInternalMemoizedMergedChildContext = n, At(vn), At(rt), Pt(rt, n)) : At(vn), Pt(vn, o);
  }
  var ta = null, Gn = !1, ns = !1;
  function Dd(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  function Od(n) {
    Gn = !0, Dd(n);
  }
  function Pr() {
    if (!ns && ta !== null) {
      ns = !0;
      var n = 0, r = Ht;
      try {
        var o = ta;
        for (Ht = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        ta = null, Gn = !1;
      } catch (p) {
        throw ta !== null && (ta = ta.slice(n + 1)), rn(hi, Pr), p;
      } finally {
        Ht = r, ns = !1;
      }
    }
    return null;
  }
  var ao = [], jr = 0, Wo = null, Il = 0, Fr = [], fr = 0, Ca = null, Jn = 1, wi = "";
  function na(n, r) {
    ao[jr++] = Il, ao[jr++] = Wo, Wo = n, Il = r;
  }
  function kd(n, r, o) {
    Fr[fr++] = Jn, Fr[fr++] = wi, Fr[fr++] = Ca, Ca = n;
    var s = Jn;
    n = wi;
    var p = 32 - va(s) - 1;
    s &= ~(1 << p), o += 1;
    var h = 32 - va(r) + p;
    if (30 < h) {
      var C = p - p % 5;
      h = (s & (1 << C) - 1).toString(32), s >>= C, p -= C, Jn = 1 << 32 - va(r) + p | o << p | s, wi = h + n;
    } else
      Jn = 1 << h | o << p | s, wi = n;
  }
  function gc(n) {
    n.return !== null && (na(n, 1), kd(n, 1, 0));
  }
  function Md(n) {
    for (; n === Wo; )
      Wo = ao[--jr], ao[jr] = null, Il = ao[--jr], ao[jr] = null;
    for (; n === Ca; )
      Ca = Fr[--fr], Fr[fr] = null, wi = Fr[--fr], Fr[fr] = null, Jn = Fr[--fr], Fr[fr] = null;
  }
  var ra = null, Hr = null, Zt = !1, Ta = null;
  function Nd(n, r) {
    var o = Da(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function vh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, Hr = Ya(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, Hr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ca !== null ? { id: Jn, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Da(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, Hr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Sc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ec(n) {
    if (Zt) {
      var r = Hr;
      if (r) {
        var o = r;
        if (!vh(n, r)) {
          if (Sc(n))
            throw Error(d(418));
          r = Ya(o.nextSibling);
          var s = ra;
          r && vh(n, r) ? Nd(s, o) : (n.flags = n.flags & -4097 | 2, Zt = !1, ra = n);
        }
      } else {
        if (Sc(n))
          throw Error(d(418));
        n.flags = n.flags & -4097 | 2, Zt = !1, ra = n;
      }
    }
  }
  function hh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ra = n;
  }
  function Cc(n) {
    if (n !== ra)
      return !1;
    if (!Zt)
      return hh(n), Zt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Zu(n.type, n.memoizedProps)), r && (r = Hr)) {
      if (Sc(n))
        throw mh(), Error(d(418));
      for (; r; )
        Nd(n, r), r = Ya(r.nextSibling);
    }
    if (hh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Hr = Ya(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Hr = null;
      }
    } else
      Hr = ra ? Ya(n.stateNode.nextSibling) : null;
    return !0;
  }
  function mh() {
    for (var n = Hr; n; )
      n = Ya(n.nextSibling);
  }
  function un() {
    Hr = ra = null, Zt = !1;
  }
  function Ld(n) {
    Ta === null ? Ta = [n] : Ta.push(n);
  }
  var Tc = $.ReactCurrentBatchConfig;
  function aa(n, r) {
    if (n && n.defaultProps) {
      r = Te({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var ri = ct(null), wc = null, io = null, Ad = null;
  function zd() {
    Ad = io = wc = null;
  }
  function oo(n) {
    var r = ri.current;
    At(ri), n._currentValue = r;
  }
  function Qn(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function he(n, r) {
    wc = n, Ad = io = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Dn = !0), n.firstContext = null);
  }
  function En(n) {
    var r = n._currentValue;
    if (Ad !== n)
      if (n = { context: n, memoizedValue: r, next: null }, io === null) {
        if (wc === null)
          throw Error(d(308));
        io = n, wc.dependencies = { lanes: 0, firstContext: n };
      } else
        io = io.next = n;
    return r;
  }
  var er = null;
  function Ud(n) {
    er === null ? er = [n] : er.push(n);
  }
  function yh(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Ud(r)) : (o.next = p.next, p.next = o), r.interleaved = o, bi(n, s);
  }
  function bi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var lo = !1;
  function Pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function uo(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Ct & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, bi(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, Ud(s)) : (r.next = p.next, p.next = r), s.interleaved = r, bi(n, o);
  }
  function bc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Au(n, o);
    }
  }
  function jd(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? p = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? p = h = r : h = h.next = r;
      } else
        p = h = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function so(n, r, o, s) {
    var p = n.updateQueue;
    lo = !1;
    var h = p.firstBaseUpdate, C = p.lastBaseUpdate, k = p.shared.pending;
    if (k !== null) {
      p.shared.pending = null;
      var z = k, X = z.next;
      z.next = null, C === null ? h = X : C.next = X, C = z;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, k = ie.lastBaseUpdate, k !== C && (k === null ? ie.firstBaseUpdate = X : k.next = X, ie.lastBaseUpdate = z));
    }
    if (h !== null) {
      var le = p.baseState;
      C = 0, ie = X = z = null, k = h;
      do {
        var ae = k.lane, xe = k.eventTime;
        if ((s & ae) === ae) {
          ie !== null && (ie = ie.next = {
            eventTime: xe,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var Me = n, Ae = k;
            switch (ae = r, xe = o, Ae.tag) {
              case 1:
                if (Me = Ae.payload, typeof Me == "function") {
                  le = Me.call(xe, le, ae);
                  break e;
                }
                le = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = Ae.payload, ae = typeof Me == "function" ? Me.call(xe, le, ae) : Me, ae == null)
                  break e;
                le = Te({}, le, ae);
                break e;
              case 2:
                lo = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, ae = p.effects, ae === null ? p.effects = [k] : ae.push(k));
        } else
          xe = { eventTime: xe, lane: ae, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, ie === null ? (X = ie = xe, z = le) : ie = ie.next = xe, C |= ae;
        if (k = k.next, k === null) {
          if (k = p.shared.pending, k === null)
            break;
          ae = k, k = ae.next, ae.next = null, p.lastBaseUpdate = ae, p.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (z = le), p.baseState = z, p.firstBaseUpdate = X, p.lastBaseUpdate = ie, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else
        h === null && (p.shared.lanes = 0);
      Oi |= C, n.lanes = C, n.memoizedState = le;
    }
  }
  function Yo(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], p = s.callback;
        if (p !== null) {
          if (s.callback = null, s = o, typeof p != "function")
            throw Error(d(191, p));
          p.call(s);
        }
      }
  }
  var gh = new l.Component().refs;
  function Fd(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : Te({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? pt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = hr(), p = On(n), h = xi(s, p);
    h.payload = r, o != null && (h.callback = o), r = uo(n, h, p), r !== null && (mr(r, n, p, s), bc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = hr(), p = On(n), h = xi(s, p);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = uo(n, h, p), r !== null && (mr(r, n, p, s), bc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = hr(), s = On(n), p = xi(o, s);
    p.tag = 2, r != null && (p.callback = r), r = uo(n, p, s), r !== null && (mr(r, n, s, o), bc(r, n, s));
  } };
  function Sh(n, r, o, s, p, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, C) : r.prototype && r.prototype.isPureReactComponent ? !Wu(o, s) || !Wu(p, h) : !0;
  }
  function Eh(n, r, o) {
    var s = !1, p = ni, h = r.contextType;
    return typeof h == "object" && h !== null ? h = En(h) : (p = an(r) ? Ur : rt.current, s = r.contextTypes, h = (s = s != null) ? Sa(n, p) : ni), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = xc, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Ch(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && xc.enqueueReplaceState(r, r.state, null);
  }
  function Rc(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = gh, Pd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = En(h) : (h = an(r) ? Ur : rt.current, p.context = Sa(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Fd(n, r, h, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && xc.enqueueReplaceState(p, p.state, null), so(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Bl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(d(147, n));
        var p = s, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var k = p.refs;
          k === gh && (k = p.refs = {}), C === null ? delete k[h] : k[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(d(284));
      if (!o._owner)
        throw Error(d(290, n));
    }
    return n;
  }
  function _c(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Th(n) {
    var r = n._init;
    return r(n._payload);
  }
  function wh(n) {
    function r(H, j) {
      if (n) {
        var W = H.deletions;
        W === null ? (H.deletions = [j], H.flags |= 16) : W.push(j);
      }
    }
    function o(H, j) {
      if (!n)
        return null;
      for (; j !== null; )
        r(H, j), j = j.sibling;
      return null;
    }
    function s(H, j) {
      for (H = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? H.set(j.key, j) : H.set(j.index, j), j = j.sibling;
      return H;
    }
    function p(H, j) {
      return H = go(H, j), H.index = 0, H.sibling = null, H;
    }
    function h(H, j, W) {
      return H.index = W, n ? (W = H.alternate, W !== null ? (W = W.index, W < j ? (H.flags |= 2, j) : W) : (H.flags |= 2, j)) : (H.flags |= 1048576, j);
    }
    function C(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function k(H, j, W, de) {
      return j === null || j.tag !== 6 ? (j = Cs(W, H.mode, de), j.return = H, j) : (j = p(j, W), j.return = H, j);
    }
    function z(H, j, W, de) {
      var ze = W.type;
      return ze === re ? ie(H, j, W.props.children, de, W.key) : j !== null && (j.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === mt && Th(ze) === j.type) ? (de = p(j, W.props), de.ref = Bl(H, j, W), de.return = H, de) : (de = of(W.type, W.key, W.props, null, H.mode, de), de.ref = Bl(H, j, W), de.return = H, de);
    }
    function X(H, j, W, de) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== W.containerInfo || j.stateNode.implementation !== W.implementation ? (j = fl(W, H.mode, de), j.return = H, j) : (j = p(j, W.children || []), j.return = H, j);
    }
    function ie(H, j, W, de, ze) {
      return j === null || j.tag !== 7 ? (j = cl(W, H.mode, de, ze), j.return = H, j) : (j = p(j, W), j.return = H, j);
    }
    function le(H, j, W) {
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return j = Cs("" + j, H.mode, W), j.return = H, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case K:
            return W = of(j.type, j.key, j.props, null, H.mode, W), W.ref = Bl(H, null, j), W.return = H, W;
          case fe:
            return j = fl(j, H.mode, W), j.return = H, j;
          case mt:
            var de = j._init;
            return le(H, de(j._payload), W);
        }
        if (dt(j) || Fe(j))
          return j = cl(j, H.mode, W, null), j.return = H, j;
        _c(H, j);
      }
      return null;
    }
    function ae(H, j, W, de) {
      var ze = j !== null ? j.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number")
        return ze !== null ? null : k(H, j, "" + W, de);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case K:
            return W.key === ze ? z(H, j, W, de) : null;
          case fe:
            return W.key === ze ? X(H, j, W, de) : null;
          case mt:
            return ze = W._init, ae(
              H,
              j,
              ze(W._payload),
              de
            );
        }
        if (dt(W) || Fe(W))
          return ze !== null ? null : ie(H, j, W, de, null);
        _c(H, W);
      }
      return null;
    }
    function xe(H, j, W, de, ze) {
      if (typeof de == "string" && de !== "" || typeof de == "number")
        return H = H.get(W) || null, k(j, H, "" + de, ze);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case K:
            return H = H.get(de.key === null ? W : de.key) || null, z(j, H, de, ze);
          case fe:
            return H = H.get(de.key === null ? W : de.key) || null, X(j, H, de, ze);
          case mt:
            var Ne = de._init;
            return xe(H, j, W, Ne(de._payload), ze);
        }
        if (dt(de) || Fe(de))
          return H = H.get(W) || null, ie(j, H, de, ze, null);
        _c(j, de);
      }
      return null;
    }
    function Me(H, j, W, de) {
      for (var ze = null, Ne = null, Ve = j, at = j = 0, Kn = null; Ve !== null && at < W.length; at++) {
        Ve.index > at ? (Kn = Ve, Ve = null) : Kn = Ve.sibling;
        var kt = ae(H, Ve, W[at], de);
        if (kt === null) {
          Ve === null && (Ve = Kn);
          break;
        }
        n && Ve && kt.alternate === null && r(H, Ve), j = h(kt, j, at), Ne === null ? ze = kt : Ne.sibling = kt, Ne = kt, Ve = Kn;
      }
      if (at === W.length)
        return o(H, Ve), Zt && na(H, at), ze;
      if (Ve === null) {
        for (; at < W.length; at++)
          Ve = le(H, W[at], de), Ve !== null && (j = h(Ve, j, at), Ne === null ? ze = Ve : Ne.sibling = Ve, Ne = Ve);
        return Zt && na(H, at), ze;
      }
      for (Ve = s(H, Ve); at < W.length; at++)
        Kn = xe(Ve, H, at, W[at], de), Kn !== null && (n && Kn.alternate !== null && Ve.delete(Kn.key === null ? at : Kn.key), j = h(Kn, j, at), Ne === null ? ze = Kn : Ne.sibling = Kn, Ne = Kn);
      return n && Ve.forEach(function(So) {
        return r(H, So);
      }), Zt && na(H, at), ze;
    }
    function Ae(H, j, W, de) {
      var ze = Fe(W);
      if (typeof ze != "function")
        throw Error(d(150));
      if (W = ze.call(W), W == null)
        throw Error(d(151));
      for (var Ne = ze = null, Ve = j, at = j = 0, Kn = null, kt = W.next(); Ve !== null && !kt.done; at++, kt = W.next()) {
        Ve.index > at ? (Kn = Ve, Ve = null) : Kn = Ve.sibling;
        var So = ae(H, Ve, kt.value, de);
        if (So === null) {
          Ve === null && (Ve = Kn);
          break;
        }
        n && Ve && So.alternate === null && r(H, Ve), j = h(So, j, at), Ne === null ? ze = So : Ne.sibling = So, Ne = So, Ve = Kn;
      }
      if (kt.done)
        return o(
          H,
          Ve
        ), Zt && na(H, at), ze;
      if (Ve === null) {
        for (; !kt.done; at++, kt = W.next())
          kt = le(H, kt.value, de), kt !== null && (j = h(kt, j, at), Ne === null ? ze = kt : Ne.sibling = kt, Ne = kt);
        return Zt && na(H, at), ze;
      }
      for (Ve = s(H, Ve); !kt.done; at++, kt = W.next())
        kt = xe(Ve, H, at, kt.value, de), kt !== null && (n && kt.alternate !== null && Ve.delete(kt.key === null ? at : kt.key), j = h(kt, j, at), Ne === null ? ze = kt : Ne.sibling = kt, Ne = kt);
      return n && Ve.forEach(function($g) {
        return r(H, $g);
      }), Zt && na(H, at), ze;
    }
    function Cn(H, j, W, de) {
      if (typeof W == "object" && W !== null && W.type === re && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case K:
            e: {
              for (var ze = W.key, Ne = j; Ne !== null; ) {
                if (Ne.key === ze) {
                  if (ze = W.type, ze === re) {
                    if (Ne.tag === 7) {
                      o(H, Ne.sibling), j = p(Ne, W.props.children), j.return = H, H = j;
                      break e;
                    }
                  } else if (Ne.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === mt && Th(ze) === Ne.type) {
                    o(H, Ne.sibling), j = p(Ne, W.props), j.ref = Bl(H, Ne, W), j.return = H, H = j;
                    break e;
                  }
                  o(H, Ne);
                  break;
                } else
                  r(H, Ne);
                Ne = Ne.sibling;
              }
              W.type === re ? (j = cl(W.props.children, H.mode, de, W.key), j.return = H, H = j) : (de = of(W.type, W.key, W.props, null, H.mode, de), de.ref = Bl(H, j, W), de.return = H, H = de);
            }
            return C(H);
          case fe:
            e: {
              for (Ne = W.key; j !== null; ) {
                if (j.key === Ne)
                  if (j.tag === 4 && j.stateNode.containerInfo === W.containerInfo && j.stateNode.implementation === W.implementation) {
                    o(H, j.sibling), j = p(j, W.children || []), j.return = H, H = j;
                    break e;
                  } else {
                    o(H, j);
                    break;
                  }
                else
                  r(H, j);
                j = j.sibling;
              }
              j = fl(W, H.mode, de), j.return = H, H = j;
            }
            return C(H);
          case mt:
            return Ne = W._init, Cn(H, j, Ne(W._payload), de);
        }
        if (dt(W))
          return Me(H, j, W, de);
        if (Fe(W))
          return Ae(H, j, W, de);
        _c(H, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, j !== null && j.tag === 6 ? (o(H, j.sibling), j = p(j, W), j.return = H, H = j) : (o(H, j), j = Cs(W, H.mode, de), j.return = H, H = j), C(H)) : o(H, j);
    }
    return Cn;
  }
  var $l = wh(!0), bh = wh(!1), rs = {}, Ga = ct(rs), as = ct(rs), Wl = ct(rs);
  function Go(n) {
    if (n === rs)
      throw Error(d(174));
    return n;
  }
  function Hd(n, r) {
    switch (Pt(Wl, r), Pt(as, n), Pt(Ga, rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : xn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = xn(r, n);
    }
    At(Ga), Pt(Ga, r);
  }
  function co() {
    At(Ga), At(as), At(Wl);
  }
  function qe(n) {
    Go(Wl.current);
    var r = Go(Ga.current), o = xn(r, n.type);
    r !== o && (Pt(as, n), Pt(Ga, o));
  }
  function gt(n) {
    as.current === n && (At(Ga), At(as));
  }
  var Ze = ct(0);
  function sn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var wa = [];
  function Dc() {
    for (var n = 0; n < wa.length; n++)
      wa[n]._workInProgressVersionPrimary = null;
    wa.length = 0;
  }
  var Oc = $.ReactCurrentDispatcher, Vd = $.ReactCurrentBatchConfig, Qo = 0, Jt = null, te = null, xt = null, Je = !1, ai = !1, ia = 0, Xo = 0;
  function en() {
    throw Error(d(321));
  }
  function qo(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!ya(n[o], r[o]))
        return !1;
    return !0;
  }
  function fo(n, r, o, s, p, h) {
    if (Qo = h, Jt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Oc.current = n === null || n.memoizedState === null ? Rg : _g, n = o(s, p), ai) {
      h = 0;
      do {
        if (ai = !1, ia = 0, 25 <= h)
          throw Error(d(301));
        h += 1, xt = te = null, r.updateQueue = null, Oc.current = Bd, n = o(s, p);
      } while (ai);
    }
    if (Oc.current = Wc, r = te !== null && te.next !== null, Qo = 0, xt = te = Jt = null, Je = !1, r)
      throw Error(d(300));
    return n;
  }
  function Ko() {
    var n = ia !== 0;
    return ia = 0, n;
  }
  function ba() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xt === null ? Jt.memoizedState = xt = n : xt = xt.next = n, xt;
  }
  function Vr() {
    if (te === null) {
      var n = Jt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = te.next;
    var r = xt === null ? Jt.memoizedState : xt.next;
    if (r !== null)
      xt = r, te = n;
    else {
      if (n === null)
        throw Error(d(310));
      te = n, n = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, xt === null ? Jt.memoizedState = xt = n : xt = xt.next = n;
    }
    return xt;
  }
  function Zo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function is(n) {
    var r = Vr(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = te, p = s.baseQueue, h = o.pending;
    if (h !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = h.next, h.next = C;
      }
      s.baseQueue = p = h, o.pending = null;
    }
    if (p !== null) {
      h = p.next, s = s.baseState;
      var k = C = null, z = null, X = h;
      do {
        var ie = X.lane;
        if ((Qo & ie) === ie)
          z !== null && (z = z.next = { lane: 0, action: X.action, hasEagerState: X.hasEagerState, eagerState: X.eagerState, next: null }), s = X.hasEagerState ? X.eagerState : n(s, X.action);
        else {
          var le = {
            lane: ie,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          z === null ? (k = z = le, C = s) : z = z.next = le, Jt.lanes |= ie, Oi |= ie;
        }
        X = X.next;
      } while (X !== null && X !== h);
      z === null ? C = s : z.next = k, ya(s, r.memoizedState) || (Dn = !0), r.memoizedState = s, r.baseState = C, r.baseQueue = z, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        h = p.lane, Jt.lanes |= h, Oi |= h, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function os(n) {
    var r = Vr(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, h = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var C = p = p.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== p);
      ya(h, r.memoizedState) || (Dn = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function kc() {
  }
  function Mc(n, r) {
    var o = Jt, s = Vr(), p = r(), h = !ya(s.memoizedState, p);
    if (h && (s.memoizedState = p, Dn = !0), s = s.queue, ls(Ac.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || xt !== null && xt.memoizedState.tag & 1) {
      if (o.flags |= 2048, Jo(9, Lc.bind(null, o, s, p, r), void 0, null), cn === null)
        throw Error(d(349));
      Qo & 30 || Nc(o, r, p);
    }
    return p;
  }
  function Nc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Jt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Lc(n, r, o, s) {
    r.value = o, r.getSnapshot = s, zc(r) && Uc(n);
  }
  function Ac(n, r, o) {
    return o(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ya(n, o);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = bi(n, 1);
    r !== null && mr(r, n, 1, -1);
  }
  function Pc(n) {
    var r = ba();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zo, lastRenderedState: n }, r.queue = n, n = n.dispatch = $c.bind(null, Jt, n), [r.memoizedState, n];
  }
  function Jo(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Jt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function jc() {
    return Vr().memoizedState;
  }
  function el(n, r, o, s) {
    var p = ba();
    Jt.flags |= n, p.memoizedState = Jo(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Ri(n, r, o, s) {
    var p = Vr();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (te !== null) {
      var C = te.memoizedState;
      if (h = C.destroy, s !== null && qo(s, C.deps)) {
        p.memoizedState = Jo(r, o, h, s);
        return;
      }
    }
    Jt.flags |= n, p.memoizedState = Jo(1 | r, o, h, s);
  }
  function Fc(n, r) {
    return el(8390656, 8, n, r);
  }
  function ls(n, r) {
    return Ri(2048, 8, n, r);
  }
  function Hc(n, r) {
    return Ri(4, 2, n, r);
  }
  function Vc(n, r) {
    return Ri(4, 4, n, r);
  }
  function Id(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Yl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ri(4, 4, Id.bind(null, r, n), o);
  }
  function Ic() {
  }
  function Gl(n, r) {
    var o = Vr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && qo(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function po(n, r) {
    var o = Vr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && qo(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Ir(n, r, o) {
    return Qo & 21 ? (ya(o, r) || (o = Zs(), Jt.lanes |= o, Oi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Dn = !0), n.memoizedState = o);
  }
  function xg(n, r) {
    var o = Ht;
    Ht = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Vd.transition;
    Vd.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = o, Vd.transition = s;
    }
  }
  function Gt() {
    return Vr().memoizedState;
  }
  function Bc(n, r, o) {
    var s = On(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Ql(n))
      us(r, o);
    else if (o = yh(n, r, o, s), o !== null) {
      var p = hr();
      mr(o, n, s, p), xh(o, r, s);
    }
  }
  function $c(n, r, o) {
    var s = On(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Ql(n))
      us(r, p);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var C = r.lastRenderedState, k = h(C, o);
          if (p.hasEagerState = !0, p.eagerState = k, ya(k, C)) {
            var z = r.interleaved;
            z === null ? (p.next = p, Ud(r)) : (p.next = z.next, z.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = yh(n, r, p, s), o !== null && (p = hr(), mr(o, n, s, p), xh(o, r, s));
    }
  }
  function Ql(n) {
    var r = n.alternate;
    return n === Jt || r !== null && r === Jt;
  }
  function us(n, r) {
    ai = Je = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function xh(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Au(n, o);
    }
  }
  var Wc = { readContext: En, useCallback: en, useContext: en, useEffect: en, useImperativeHandle: en, useInsertionEffect: en, useLayoutEffect: en, useMemo: en, useReducer: en, useRef: en, useState: en, useDebugValue: en, useDeferredValue: en, useTransition: en, useMutableSource: en, useSyncExternalStore: en, useId: en, unstable_isNewReconciler: !1 }, Rg = { readContext: En, useCallback: function(n, r) {
    return ba().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: En, useEffect: Fc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, el(
      4194308,
      4,
      Id.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return el(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return el(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = ba();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = ba();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = Bc.bind(null, Jt, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = ba();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: Ic, useDeferredValue: function(n) {
    return ba().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = xg.bind(null, n[1]), ba().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Jt, p = ba();
    if (Zt) {
      if (o === void 0)
        throw Error(d(407));
      o = o();
    } else {
      if (o = r(), cn === null)
        throw Error(d(349));
      Qo & 30 || Nc(s, r, o);
    }
    p.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return p.queue = h, Fc(Ac.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, Jo(9, Lc.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = ba(), r = cn.identifierPrefix;
    if (Zt) {
      var o = wi, s = Jn;
      o = (s & ~(1 << 32 - va(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ia++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Xo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, _g = {
    readContext: En,
    useCallback: Gl,
    useContext: En,
    useEffect: ls,
    useImperativeHandle: Yl,
    useInsertionEffect: Hc,
    useLayoutEffect: Vc,
    useMemo: po,
    useReducer: is,
    useRef: jc,
    useState: function() {
      return is(Zo);
    },
    useDebugValue: Ic,
    useDeferredValue: function(n) {
      var r = Vr();
      return Ir(r, te.memoizedState, n);
    },
    useTransition: function() {
      var n = is(Zo)[0], r = Vr().memoizedState;
      return [n, r];
    },
    useMutableSource: kc,
    useSyncExternalStore: Mc,
    useId: Gt,
    unstable_isNewReconciler: !1
  }, Bd = { readContext: En, useCallback: Gl, useContext: En, useEffect: ls, useImperativeHandle: Yl, useInsertionEffect: Hc, useLayoutEffect: Vc, useMemo: po, useReducer: os, useRef: jc, useState: function() {
    return os(Zo);
  }, useDebugValue: Ic, useDeferredValue: function(n) {
    var r = Vr();
    return te === null ? r.memoizedState = n : Ir(r, te.memoizedState, n);
  }, useTransition: function() {
    var n = os(Zo)[0], r = Vr().memoizedState;
    return [n, r];
  }, useMutableSource: kc, useSyncExternalStore: Mc, useId: Gt, unstable_isNewReconciler: !1 };
  function Xl(n, r) {
    try {
      var o = "", s = r;
      do
        o += Lr(s), s = s.return;
      while (s);
      var p = o;
    } catch (h) {
      p = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function ss(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Yc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Dg = typeof WeakMap == "function" ? WeakMap : Map;
  function Rh(n, r, o) {
    o = xi(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Jc || (Jc = !0, il = s), Yc(n, r);
    }, o;
  }
  function cs(n, r, o) {
    o = xi(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        Yc(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      Yc(n, r), typeof s != "function" && (li === null ? li = /* @__PURE__ */ new Set([this]) : li.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function _h(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Dg();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else
      p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = zg.bind(null, n, r, o), r.then(n, n));
  }
  function $d(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Wd(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = xi(-1, 1), r.tag = 2, uo(o, r, 1))), o.lanes |= 1), n);
  }
  var Og = $.ReactCurrentOwner, Dn = !1;
  function Un(n, r, o, s) {
    r.child = n === null ? bh(r, null, o, s) : $l(r, n.child, o, s);
  }
  function vo(n, r, o, s, p) {
    o = o.render;
    var h = r.ref;
    return he(r, p), s = fo(n, r, o, s, h, p), o = Ko(), n !== null && !Dn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, tr(n, r, p)) : (Zt && o && gc(r), r.flags |= 1, Un(n, r, s, p), r.child);
  }
  function Gc(n, r, o, s, p) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !cp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, Br(n, r, h, s, p)) : (n = of(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Wu, o(C, s) && n.ref === r.ref)
        return tr(n, r, p);
    }
    return r.flags |= 1, n = go(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Br(n, r, o, s, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Wu(h, s) && n.ref === r.ref)
        if (Dn = !1, r.pendingProps = s = h, (n.lanes & p) !== 0)
          n.flags & 131072 && (Dn = !0);
        else
          return r.lanes = n.lanes, tr(n, r, p);
    }
    return ql(n, r, o, s, p);
  }
  function tl(n, r, o) {
    var s = r.pendingProps, p = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pt(nu, oa), oa |= o;
      else {
        if (!(o & 1073741824))
          return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Pt(nu, oa), oa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, Pt(nu, oa), oa |= s;
      }
    else
      h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, Pt(nu, oa), oa |= s;
    return Un(n, r, p, o), r.child;
  }
  function ft(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ql(n, r, o, s, p) {
    var h = an(o) ? Ur : rt.current;
    return h = Sa(r, h), he(r, p), o = fo(n, r, o, s, h, p), s = Ko(), n !== null && !Dn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, tr(n, r, p)) : (Zt && s && gc(r), r.flags |= 1, Un(n, r, o, p), r.child);
  }
  function Yd(n, r, o, s, p) {
    if (an(o)) {
      var h = !0;
      yc(r);
    } else
      h = !1;
    if (he(r, p), r.stateNode === null)
      dr(n, r), Eh(r, o, s), Rc(r, o, s, p), s = !0;
    else if (n === null) {
      var C = r.stateNode, k = r.memoizedProps;
      C.props = k;
      var z = C.context, X = o.contextType;
      typeof X == "object" && X !== null ? X = En(X) : (X = an(o) ? Ur : rt.current, X = Sa(r, X));
      var ie = o.getDerivedStateFromProps, le = typeof ie == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      le || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (k !== s || z !== X) && Ch(r, C, s, X), lo = !1;
      var ae = r.memoizedState;
      C.state = ae, so(r, s, C, p), z = r.memoizedState, k !== s || ae !== z || vn.current || lo ? (typeof ie == "function" && (Fd(r, o, ie, s), z = r.memoizedState), (k = lo || Sh(r, o, k, s, ae, z, X)) ? (le || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = z), C.props = s, C.state = z, C.context = X, s = k) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, zn(n, r), k = r.memoizedProps, X = r.type === r.elementType ? k : aa(r.type, k), C.props = X, le = r.pendingProps, ae = C.context, z = o.contextType, typeof z == "object" && z !== null ? z = En(z) : (z = an(o) ? Ur : rt.current, z = Sa(r, z));
      var xe = o.getDerivedStateFromProps;
      (ie = typeof xe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (k !== le || ae !== z) && Ch(r, C, s, z), lo = !1, ae = r.memoizedState, C.state = ae, so(r, s, C, p);
      var Me = r.memoizedState;
      k !== le || ae !== Me || vn.current || lo ? (typeof xe == "function" && (Fd(r, o, xe, s), Me = r.memoizedState), (X = lo || Sh(r, o, X, s, ae, Me, z) || !1) ? (ie || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, Me, z), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, Me, z)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Me), C.props = s, C.state = Me, C.context = z, s = X) : (typeof C.componentDidUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Dh(n, r, o, s, h, p);
  }
  function Dh(n, r, o, s, p, h) {
    ft(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C)
      return p && ph(r, o, !1), tr(n, r, h);
    s = r.stateNode, Og.current = r;
    var k = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = $l(r, n.child, null, h), r.child = $l(r, null, k, h)) : Un(n, r, k, h), r.memoizedState = s.state, p && ph(r, o, !0), r.child;
  }
  function Oh(n) {
    var r = n.stateNode;
    r.pendingContext ? ro(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ro(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function Qc(n, r, o, s, p) {
    return un(), Ld(p), r.flags |= 256, Un(n, r, o, s), r.child;
  }
  var nl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qd(n, r, o) {
    var s = r.pendingProps, p = Ze.current, h = !1, C = (r.flags & 128) !== 0, k;
    if ((k = C) || (k = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), k ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Pt(Ze, p & 1), n === null)
      return Ec(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Es(C, s, 0, null), n = cl(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Gd(o), r.memoizedState = nl, n) : Xd(r, C));
    if (p = n.memoizedState, p !== null && (k = p.dehydrated, k !== null))
      return kg(n, r, C, s, k, p, o);
    if (h) {
      h = s.fallback, C = r.mode, p = n.child, k = p.sibling;
      var z = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = z, r.deletions = null) : (s = go(p, z), s.subtreeFlags = p.subtreeFlags & 14680064), k !== null ? h = go(k, h) : (h = cl(h, C, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, C = n.child.memoizedState, C = C === null ? Gd(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = nl, s;
    }
    return h = n.child, n = h.sibling, s = go(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Xd(n, r) {
    return r = Es({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Kl(n, r, o, s) {
    return s !== null && Ld(s), $l(r, n.child, null, o), n = Xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function kg(n, r, o, s, p, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = ss(Error(d(422))), Kl(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, p = r.mode, s = Es({ mode: "visible", children: s.children }, p, 0, null), h = cl(h, p, C, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && $l(r, n.child, null, C), r.child.memoizedState = Gd(C), r.memoizedState = nl, h);
    if (!(r.mode & 1))
      return Kl(n, r, C, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s)
        var k = s.dgst;
      return s = k, h = Error(d(419)), s = ss(h, s, void 0), Kl(n, r, C, s);
    }
    if (k = (C & n.childLanes) !== 0, Dn || k) {
      if (s = cn, s !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | C) ? 0 : p, p !== 0 && p !== h.retryLane && (h.retryLane = p, bi(n, p), mr(s, n, p, -1));
      }
      return lp(), s = ss(Error(d(421))), Kl(n, r, C, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ug.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, Hr = Ya(p.nextSibling), ra = r, Zt = !0, Ta = null, n !== null && (Fr[fr++] = Jn, Fr[fr++] = wi, Fr[fr++] = Ca, Jn = n.id, wi = n.overflow, Ca = r), r = Xd(r, s.children), r.flags |= 4096, r);
  }
  function qd(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Qn(n.return, r, o);
  }
  function Xc(n, r, o, s, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = p);
  }
  function Kd(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, h = s.tail;
    if (Un(n, r, s.children, o), s = Ze.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && qd(n, o, r);
            else if (n.tag === 19)
              qd(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (Pt(Ze, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && sn(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), Xc(r, !1, p, o, h);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && sn(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          Xc(r, !0, o, null, h);
          break;
        case "together":
          Xc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function dr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function tr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = go(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = go(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function _i(n, r, o) {
    switch (r.tag) {
      case 3:
        Oh(r), un();
        break;
      case 5:
        qe(r);
        break;
      case 1:
        an(r.type) && yc(r);
        break;
      case 4:
        Hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        Pt(ri, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Pt(Ze, Ze.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Qd(n, r, o) : (Pt(Ze, Ze.current & 1), n = tr(n, r, o), n !== null ? n.sibling : null);
        Pt(Ze, Ze.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return Kd(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Pt(Ze, Ze.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, tl(n, r, o);
    }
    return tr(n, r, o);
  }
  var fs, rl, xa, Pn;
  fs = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, rl = function() {
  }, xa = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, Go(Ga.current);
      var h = null;
      switch (o) {
        case "input":
          p = He(n, p), s = He(n, s), h = [];
          break;
        case "select":
          p = Te({}, p, { value: void 0 }), s = Te({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          p = Ut(n, p), s = Ut(n, s), h = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = mc);
      }
      Bn(o, s);
      var C;
      o = null;
      for (X in p)
        if (!s.hasOwnProperty(X) && p.hasOwnProperty(X) && p[X] != null)
          if (X === "style") {
            var k = p[X];
            for (C in k)
              k.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
          } else
            X !== "dangerouslySetInnerHTML" && X !== "children" && X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && X !== "autoFocus" && (S.hasOwnProperty(X) ? h || (h = []) : (h = h || []).push(X, null));
      for (X in s) {
        var z = s[X];
        if (k = p != null ? p[X] : void 0, s.hasOwnProperty(X) && z !== k && (z != null || k != null))
          if (X === "style")
            if (k) {
              for (C in k)
                !k.hasOwnProperty(C) || z && z.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
              for (C in z)
                z.hasOwnProperty(C) && k[C] !== z[C] && (o || (o = {}), o[C] = z[C]);
            } else
              o || (h || (h = []), h.push(
                X,
                o
              )), o = z;
          else
            X === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, k = k ? k.__html : void 0, z != null && k !== z && (h = h || []).push(X, z)) : X === "children" ? typeof z != "string" && typeof z != "number" || (h = h || []).push(X, "" + z) : X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && (S.hasOwnProperty(X) ? (z != null && X === "onScroll" && Yt("scroll", n), h || k === z || (h = [])) : (h = h || []).push(X, z));
      }
      o && (h = h || []).push("style", o);
      var X = h;
      (r.updateQueue = X) && (r.flags |= 4);
    }
  }, Pn = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function ds(n, r) {
    if (!Zt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function pr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Mg(n, r, o) {
    var s = r.pendingProps;
    switch (Md(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pr(r), null;
      case 1:
        return an(r.type) && Ea(), pr(r), null;
      case 3:
        return s = r.stateNode, co(), At(vn), At(rt), Dc(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Cc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ta !== null && (Ss(Ta), Ta = null))), rl(n, r), pr(r), null;
      case 5:
        gt(r);
        var p = Go(Wl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          xa(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(d(166));
            return pr(r), null;
          }
          if (n = Go(Ga.current), Cc(r)) {
            s = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (s[ti] = r, s[$o] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Yt("cancel", s), Yt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Xu.length; p++)
                  Yt(Xu[p], s);
                break;
              case "source":
                Yt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  s
                ), Yt("load", s);
                break;
              case "details":
                Yt("toggle", s);
                break;
              case "input":
                et(s, h), Yt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!h.multiple }, Yt("invalid", s);
                break;
              case "textarea":
                qt(s, h), Yt("invalid", s);
            }
            Bn(o, h), p = null;
            for (var C in h)
              if (h.hasOwnProperty(C)) {
                var k = h[C];
                C === "children" ? typeof k == "string" ? s.textContent !== k && (h.suppressHydrationWarning !== !0 && hc(s.textContent, k, n), p = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (h.suppressHydrationWarning !== !0 && hc(
                  s.textContent,
                  k,
                  n
                ), p = ["children", "" + k]) : S.hasOwnProperty(C) && k != null && C === "onScroll" && Yt("scroll", s);
              }
            switch (o) {
              case "input":
                ye(s), ot(s, h, !0);
                break;
              case "textarea":
                ye(s), qr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (s.onclick = mc);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ja(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = C.createElement(o, { is: s.is }) : (n = C.createElement(o), o === "select" && (C = n, s.multiple ? C.multiple = !0 : s.size && (C.size = s.size))) : n = C.createElementNS(n, o), n[ti] = r, n[$o] = s, fs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Sn(o, s), o) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Xu.length; p++)
                    Yt(Xu[p], n);
                  p = s;
                  break;
                case "source":
                  Yt("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), p = s;
                  break;
                case "details":
                  Yt("toggle", n), p = s;
                  break;
                case "input":
                  et(n, s), p = He(n, s), Yt("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = Te({}, s, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  qt(n, s), p = Ut(n, s), Yt("invalid", n);
                  break;
                default:
                  p = s;
              }
              Bn(o, p), k = p;
              for (h in k)
                if (k.hasOwnProperty(h)) {
                  var z = k[h];
                  h === "style" ? Ft(n, z) : h === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && Wi(n, z)) : h === "children" ? typeof z == "string" ? (o !== "textarea" || z !== "") && Fa(n, z) : typeof z == "number" && Fa(n, "" + z) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (S.hasOwnProperty(h) ? z != null && h === "onScroll" && Yt("scroll", n) : z != null && V(n, h, z, C));
                }
              switch (o) {
                case "input":
                  ye(n), ot(n, s, !1);
                  break;
                case "textarea":
                  ye(n), qr(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + bn(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, h = s.value, h != null ? ge(n, !!s.multiple, h, !1) : s.defaultValue != null && ge(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = mc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return pr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Pn(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(d(166));
          if (o = Go(Wl.current), Go(Ga.current), Cc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[ti] = r, (h = s.nodeValue !== o) && (n = ra, n !== null))
              switch (n.tag) {
                case 3:
                  hc(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && hc(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[ti] = r, r.stateNode = s;
        }
        return pr(r), null;
      case 13:
        if (At(Ze), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Zt && Hr !== null && r.mode & 1 && !(r.flags & 128))
            mh(), un(), r.flags |= 98560, h = !1;
          else if (h = Cc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(d(317));
              h[ti] = r;
            } else
              un(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            pr(r), h = !1;
          } else
            Ta !== null && (Ss(Ta), Ta = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ze.current & 1 ? Fn === 0 && (Fn = 3) : lp())), r.updateQueue !== null && (r.flags |= 4), pr(r), null);
      case 4:
        return co(), rl(n, r), n === null && Hl(r.stateNode.containerInfo), pr(r), null;
      case 10:
        return oo(r.type._context), pr(r), null;
      case 17:
        return an(r.type) && Ea(), pr(r), null;
      case 19:
        if (At(Ze), h = r.memoizedState, h === null)
          return pr(r), null;
        if (s = (r.flags & 128) !== 0, C = h.rendering, C === null)
          if (s)
            ds(h, !1);
          else {
            if (Fn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = sn(n), C !== null) {
                  for (r.flags |= 128, ds(h, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    h = o, n = s, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Pt(Ze, Ze.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && Mt() > au && (r.flags |= 128, s = !0, ds(h, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = sn(C), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), ds(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !Zt)
                return pr(r), null;
            } else
              2 * Mt() - h.renderingStartTime > au && o !== 1073741824 && (r.flags |= 128, s = !0, ds(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = Mt(), r.sibling = null, o = Ze.current, Pt(Ze, s ? o & 1 | 2 : o & 1), r) : (pr(r), null);
      case 22:
      case 23:
        return op(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? oa & 1073741824 && (pr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : pr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function Zd(n, r) {
    switch (Md(r), r.tag) {
      case 1:
        return an(r.type) && Ea(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return co(), At(vn), At(rt), Dc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gt(r), null;
      case 13:
        if (At(Ze), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(d(340));
          un();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return At(Ze), null;
      case 4:
        return co(), null;
      case 10:
        return oo(r.type._context), null;
      case 22:
      case 23:
        return op(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ps = !1, jn = !1, kh = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function Zl(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          mn(n, r, s);
        }
      else
        o.current = null;
  }
  function vs(n, r, o) {
    try {
      o();
    } catch (s) {
      mn(n, r, s);
    }
  }
  var Mh = !1;
  function Nh(n, r) {
    if (wd = Po, n = cc(), Si(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var p = s.anchorOffset, h = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var C = 0, k = -1, z = -1, X = 0, ie = 0, le = n, ae = null;
            t:
              for (; ; ) {
                for (var xe; le !== o || p !== 0 && le.nodeType !== 3 || (k = C + p), le !== h || s !== 0 && le.nodeType !== 3 || (z = C + s), le.nodeType === 3 && (C += le.nodeValue.length), (xe = le.firstChild) !== null; )
                  ae = le, le = xe;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (ae === o && ++X === p && (k = C), ae === h && ++ie === s && (z = C), (xe = le.nextSibling) !== null)
                    break;
                  le = ae, ae = le.parentNode;
                }
                le = xe;
              }
            o = k === -1 || z === -1 ? null : { start: k, end: z };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Io = { focusedElem: n, selectionRange: o }, Po = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var Me = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Me !== null) {
                    var Ae = Me.memoizedProps, Cn = Me.memoizedState, H = r.stateNode, j = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Ae : aa(r.type, Ae), Cn);
                    H.__reactInternalSnapshotBeforeUpdate = j;
                  }
                  break;
                case 3:
                  var W = r.stateNode.containerInfo;
                  W.nodeType === 1 ? W.textContent = "" : W.nodeType === 9 && W.documentElement && W.removeChild(W.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (de) {
            mn(r, r.return, de);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return Me = Mh, Mh = !1, Me;
  }
  function hs(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && vs(r, o, h);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function ms(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Jd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ep(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ep(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ti], delete r[$o], delete r[Rd], delete r[bg], delete r[_d])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Lh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function qc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Lh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Jl(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = mc));
    else if (s !== 4 && (n = n.child, n !== null))
      for (Jl(n, r, o), n = n.sibling; n !== null; )
        Jl(n, r, o), n = n.sibling;
  }
  function ii(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (ii(n, r, o), n = n.sibling; n !== null; )
        ii(n, r, o), n = n.sibling;
  }
  var on = null, Xn = !1;
  function Ra(n, r, o) {
    for (o = o.child; o !== null; )
      eu(n, r, o), o = o.sibling;
  }
  function eu(n, r, o) {
    if (Va && typeof Va.onCommitFiberUnmount == "function")
      try {
        Va.onCommitFiberUnmount(Lu, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        jn || Zl(o, r);
      case 6:
        var s = on, p = Xn;
        on = null, Ra(n, r, o), on = s, Xn = p, on !== null && (Xn ? (n = on, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : on.removeChild(o.stateNode));
        break;
      case 18:
        on !== null && (Xn ? (n = on, o = o.stateNode, n.nodeType === 8 ? eo(n.parentNode, o) : n.nodeType === 1 && eo(n, o), ju(n)) : eo(on, o.stateNode));
        break;
      case 4:
        s = on, p = Xn, on = o.stateNode.containerInfo, Xn = !0, Ra(n, r, o), on = s, Xn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!jn && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var h = p, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && vs(o, r, C), p = p.next;
          } while (p !== s);
        }
        Ra(n, r, o);
        break;
      case 1:
        if (!jn && (Zl(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (k) {
            mn(o, r, k);
          }
        Ra(n, r, o);
        break;
      case 21:
        Ra(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (jn = (s = jn) || o.memoizedState !== null, Ra(n, r, o), jn = s) : Ra(n, r, o);
        break;
      default:
        Ra(n, r, o);
    }
  }
  function Di(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new kh()), r.forEach(function(s) {
        var p = Pg.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function Qa(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var p = o[s];
        try {
          var h = n, C = r, k = C;
          e:
            for (; k !== null; ) {
              switch (k.tag) {
                case 5:
                  on = k.stateNode, Xn = !1;
                  break e;
                case 3:
                  on = k.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  on = k.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              k = k.return;
            }
          if (on === null)
            throw Error(d(160));
          eu(h, C, p), on = null, Xn = !1;
          var z = p.alternate;
          z !== null && (z.return = null), p.return = null;
        } catch (X) {
          mn(p, r, X);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Ah(r, n), r = r.sibling;
  }
  function Ah(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Qa(r, n), oi(n), s & 4) {
          try {
            hs(3, n, n.return), ms(3, n);
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
          try {
            hs(5, n, n.return);
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        break;
      case 1:
        Qa(r, n), oi(n), s & 512 && o !== null && Zl(o, o.return);
        break;
      case 5:
        if (Qa(r, n), oi(n), s & 512 && o !== null && Zl(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Fa(p, "");
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, k = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              k === "input" && h.type === "radio" && h.name != null && Ye(p, h), Sn(k, C);
              var X = Sn(k, h);
              for (C = 0; C < z.length; C += 2) {
                var ie = z[C], le = z[C + 1];
                ie === "style" ? Ft(p, le) : ie === "dangerouslySetInnerHTML" ? Wi(p, le) : ie === "children" ? Fa(p, le) : V(p, ie, le, X);
              }
              switch (k) {
                case "input":
                  Qe(p, h);
                  break;
                case "textarea":
                  Xr(p, h);
                  break;
                case "select":
                  var ae = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!h.multiple;
                  var xe = h.value;
                  xe != null ? ge(p, !!h.multiple, xe, !1) : ae !== !!h.multiple && (h.defaultValue != null ? ge(
                    p,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : ge(p, !!h.multiple, h.multiple ? [] : "", !1));
              }
              p[$o] = h;
            } catch (Ae) {
              mn(n, n.return, Ae);
            }
        }
        break;
      case 6:
        if (Qa(r, n), oi(n), s & 4) {
          if (n.stateNode === null)
            throw Error(d(162));
          p = n.stateNode, h = n.memoizedProps;
          try {
            p.nodeValue = h;
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        break;
      case 3:
        if (Qa(r, n), oi(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            ju(r.containerInfo);
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        break;
      case 4:
        Qa(r, n), oi(n);
        break;
      case 13:
        Qa(r, n), oi(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (rp = Mt())), s & 4 && Di(n);
        break;
      case 22:
        if (ie = o !== null && o.memoizedState !== null, n.mode & 1 ? (jn = (X = jn) || ie, Qa(r, n), jn = X) : Qa(r, n), oi(n), s & 8192) {
          if (X = n.memoizedState !== null, (n.stateNode.isHidden = X) && !ie && n.mode & 1)
            for (ke = n, ie = n.child; ie !== null; ) {
              for (le = ke = ie; ke !== null; ) {
                switch (ae = ke, xe = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hs(4, ae, ae.return);
                    break;
                  case 1:
                    Zl(ae, ae.return);
                    var Me = ae.stateNode;
                    if (typeof Me.componentWillUnmount == "function") {
                      s = ae, o = ae.return;
                      try {
                        r = s, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                      } catch (Ae) {
                        mn(s, o, Ae);
                      }
                    }
                    break;
                  case 5:
                    Zl(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      tp(le);
                      continue;
                    }
                }
                xe !== null ? (xe.return = ae, ke = xe) : tp(le);
              }
              ie = ie.sibling;
            }
          e:
            for (ie = null, le = n; ; ) {
              if (le.tag === 5) {
                if (ie === null) {
                  ie = le;
                  try {
                    p = le.stateNode, X ? (h = p.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (k = le.stateNode, z = le.memoizedProps.style, C = z != null && z.hasOwnProperty("display") ? z.display : null, k.style.display = yt("display", C));
                  } catch (Ae) {
                    mn(n, n.return, Ae);
                  }
                }
              } else if (le.tag === 6) {
                if (ie === null)
                  try {
                    le.stateNode.nodeValue = X ? "" : le.memoizedProps;
                  } catch (Ae) {
                    mn(n, n.return, Ae);
                  }
              } else if ((le.tag !== 22 && le.tag !== 23 || le.memoizedState === null || le === n) && le.child !== null) {
                le.child.return = le, le = le.child;
                continue;
              }
              if (le === n)
                break e;
              for (; le.sibling === null; ) {
                if (le.return === null || le.return === n)
                  break e;
                ie === le && (ie = null), le = le.return;
              }
              ie === le && (ie = null), le.sibling.return = le.return, le = le.sibling;
            }
        }
        break;
      case 19:
        Qa(r, n), oi(n), s & 4 && Di(n);
        break;
      case 21:
        break;
      default:
        Qa(
          r,
          n
        ), oi(n);
    }
  }
  function oi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Lh(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (Fa(p, ""), s.flags &= -33);
            var h = qc(n);
            ii(n, h, p);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, k = qc(n);
            Jl(n, k, C);
            break;
          default:
            throw Error(d(161));
        }
      } catch (z) {
        mn(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function zh(n, r, o) {
    ke = n, tu(n);
  }
  function tu(n, r, o) {
    for (var s = (n.mode & 1) !== 0; ke !== null; ) {
      var p = ke, h = p.child;
      if (p.tag === 22 && s) {
        var C = p.memoizedState !== null || ps;
        if (!C) {
          var k = p.alternate, z = k !== null && k.memoizedState !== null || jn;
          k = ps;
          var X = jn;
          if (ps = C, (jn = z) && !X)
            for (ke = p; ke !== null; )
              C = ke, z = C.child, C.tag === 22 && C.memoizedState !== null ? Ph(p) : z !== null ? (z.return = C, ke = z) : Ph(p);
          for (; h !== null; )
            ke = h, tu(h), h = h.sibling;
          ke = p, ps = k, jn = X;
        }
        Uh(n);
      } else
        p.subtreeFlags & 8772 && h !== null ? (h.return = p, ke = h) : Uh(n);
    }
  }
  function Uh(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                jn || ms(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !jn)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : aa(r.type, o.memoizedProps);
                    s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Yo(r, h, s);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Yo(r, C, o);
                }
                break;
              case 5:
                var k = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = k;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && o.focus();
                      break;
                    case "img":
                      z.src && (o.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var X = r.alternate;
                  if (X !== null) {
                    var ie = X.memoizedState;
                    if (ie !== null) {
                      var le = ie.dehydrated;
                      le !== null && ju(le);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(d(163));
            }
          jn || r.flags & 512 && Jd(r);
        } catch (ae) {
          mn(r, r.return, ae);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function tp(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function Ph(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              ms(4, r);
            } catch (z) {
              mn(r, o, z);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (z) {
                mn(r, p, z);
              }
            }
            var h = r.return;
            try {
              Jd(r);
            } catch (z) {
              mn(r, h, z);
            }
            break;
          case 5:
            var C = r.return;
            try {
              Jd(r);
            } catch (z) {
              mn(r, C, z);
            }
        }
      } catch (z) {
        mn(r, r.return, z);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, ke = k;
        break;
      }
      ke = r.return;
    }
  }
  var Kc = Math.ceil, ys = $.ReactCurrentDispatcher, np = $.ReactCurrentOwner, vr = $.ReactCurrentBatchConfig, Ct = 0, cn = null, hn = null, qn = 0, oa = 0, nu = ct(0), Fn = 0, gs = null, Oi = 0, Zc = 0, ru = 0, al = null, Cr = null, rp = 0, au = 1 / 0, ki = null, Jc = !1, il = null, li = null, ho = !1, mo = null, ef = 0, iu = 0, tf = null, ol = -1, ll = 0;
  function hr() {
    return Ct & 6 ? Mt() : ol !== -1 ? ol : ol = Mt();
  }
  function On(n) {
    return n.mode & 1 ? Ct & 2 && qn !== 0 ? qn & -qn : Tc.transition !== null ? (ll === 0 && (ll = Zs()), ll) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : rd(n.type)), n) : 1;
  }
  function mr(n, r, o, s) {
    if (50 < iu)
      throw iu = 0, tf = null, Error(d(185));
    Uo(n, o, s), (!(Ct & 2) || n !== cn) && (n === cn && (!(Ct & 2) && (Zc |= o), Fn === 4 && _a(n, qn)), yr(n, s), o === 1 && Ct === 0 && !(r.mode & 1) && (au = Mt() + 500, Gn && Pr()));
  }
  function yr(n, r) {
    var o = n.callbackNode;
    Ks(n, r);
    var s = Ia(n, n === cn ? qn : 0);
    if (s === 0)
      o !== null && Er(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && Er(o), r === 1)
        n.tag === 0 ? Od(jh.bind(null, n)) : Dd(jh.bind(null, n)), xd(function() {
          !(Ct & 6) && Pr();
        }), o = null;
      else {
        switch (ed(s)) {
          case 1:
            o = hi;
            break;
          case 4:
            o = Et;
            break;
          case 16:
            o = Xi;
            break;
          case 536870912:
            o = qf;
            break;
          default:
            o = Xi;
        }
        o = sp(o, ou.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function ou(n, r) {
    if (ol = -1, ll = 0, Ct & 6)
      throw Error(d(327));
    var o = n.callbackNode;
    if (uu() && n.callbackNode !== o)
      return null;
    var s = Ia(n, n === cn ? qn : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = rf(n, s);
    else {
      r = s;
      var p = Ct;
      Ct |= 2;
      var h = nf();
      (cn !== n || qn !== r) && (ki = null, au = Mt() + 500, ul(n, r));
      do
        try {
          Lg();
          break;
        } catch (k) {
          Fh(n, k);
        }
      while (!0);
      zd(), ys.current = h, Ct = p, hn !== null ? r = 0 : (cn = null, qn = 0, r = Fn);
    }
    if (r !== 0) {
      if (r === 2 && (p = Zf(n), p !== 0 && (s = p, r = ap(n, p))), r === 1)
        throw o = gs, ul(n, 0), _a(n, s), yr(n, Mt()), o;
      if (r === 6)
        _a(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !ip(p) && (r = rf(n, s), r === 2 && (h = Zf(n), h !== 0 && (s = h, r = ap(n, h))), r === 1))
          throw o = gs, ul(n, 0), _a(n, s), yr(n, Mt()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            sl(n, Cr, ki);
            break;
          case 3:
            if (_a(n, s), (s & 130023424) === s && (r = rp + 500 - Mt(), 10 < r)) {
              if (Ia(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                hr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Bo(sl.bind(null, n, Cr, ki), r);
              break;
            }
            sl(n, Cr, ki);
            break;
          case 4:
            if (_a(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var C = 31 - va(s);
              h = 1 << C, C = r[C], C > p && (p = C), s &= ~h;
            }
            if (s = p, s = Mt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Kc(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Bo(sl.bind(null, n, Cr, ki), s);
              break;
            }
            sl(n, Cr, ki);
            break;
          case 5:
            sl(n, Cr, ki);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return yr(n, Mt()), n.callbackNode === o ? ou.bind(null, n) : null;
  }
  function ap(n, r) {
    var o = al;
    return n.current.memoizedState.isDehydrated && (ul(n, r).flags |= 256), n = rf(n, r), n !== 2 && (r = Cr, Cr = o, r !== null && Ss(r)), n;
  }
  function Ss(n) {
    Cr === null ? Cr = n : Cr.push.apply(Cr, n);
  }
  function ip(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var p = o[s], h = p.getSnapshot;
            p = p.value;
            try {
              if (!ya(h(), p))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function _a(n, r) {
    for (r &= ~ru, r &= ~Zc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - va(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function jh(n) {
    if (Ct & 6)
      throw Error(d(327));
    uu();
    var r = Ia(n, 0);
    if (!(r & 1))
      return yr(n, Mt()), null;
    var o = rf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Zf(n);
      s !== 0 && (r = s, o = ap(n, s));
    }
    if (o === 1)
      throw o = gs, ul(n, 0), _a(n, r), yr(n, Mt()), o;
    if (o === 6)
      throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, sl(n, Cr, ki), yr(n, Mt()), null;
  }
  function lu(n, r) {
    var o = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = o, Ct === 0 && (au = Mt() + 500, Gn && Pr());
    }
  }
  function yo(n) {
    mo !== null && mo.tag === 0 && !(Ct & 6) && uu();
    var r = Ct;
    Ct |= 1;
    var o = vr.transition, s = Ht;
    try {
      if (vr.transition = null, Ht = 1, n)
        return n();
    } finally {
      Ht = s, vr.transition = o, Ct = r, !(Ct & 6) && Pr();
    }
  }
  function op() {
    oa = nu.current, At(nu);
  }
  function ul(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, dh(o)), hn !== null)
      for (o = hn.return; o !== null; ) {
        var s = o;
        switch (Md(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Ea();
            break;
          case 3:
            co(), At(vn), At(rt), Dc();
            break;
          case 5:
            gt(s);
            break;
          case 4:
            co();
            break;
          case 13:
            At(Ze);
            break;
          case 19:
            At(Ze);
            break;
          case 10:
            oo(s.type._context);
            break;
          case 22:
          case 23:
            op();
        }
        o = o.return;
      }
    if (cn = n, hn = n = go(n.current, null), qn = oa = r, Fn = 0, gs = null, ru = Zc = Oi = 0, Cr = al = null, er !== null) {
      for (r = 0; r < er.length; r++)
        if (o = er[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var p = s.next, h = o.pending;
          if (h !== null) {
            var C = h.next;
            h.next = p, s.next = C;
          }
          o.pending = s;
        }
      er = null;
    }
    return n;
  }
  function Fh(n, r) {
    do {
      var o = hn;
      try {
        if (zd(), Oc.current = Wc, Je) {
          for (var s = Jt.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Je = !1;
        }
        if (Qo = 0, xt = te = Jt = null, ai = !1, ia = 0, np.current = null, o === null || o.return === null) {
          Fn = 1, gs = r, hn = null;
          break;
        }
        e: {
          var h = n, C = o.return, k = o, z = r;
          if (r = qn, k.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var X = z, ie = k, le = ie.tag;
            if (!(ie.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var ae = ie.alternate;
              ae ? (ie.updateQueue = ae.updateQueue, ie.memoizedState = ae.memoizedState, ie.lanes = ae.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var xe = $d(C);
            if (xe !== null) {
              xe.flags &= -257, Wd(xe, C, k, h, r), xe.mode & 1 && _h(h, X, r), r = xe, z = X;
              var Me = r.updateQueue;
              if (Me === null) {
                var Ae = /* @__PURE__ */ new Set();
                Ae.add(z), r.updateQueue = Ae;
              } else
                Me.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                _h(h, X, r), lp();
                break e;
              }
              z = Error(d(426));
            }
          } else if (Zt && k.mode & 1) {
            var Cn = $d(C);
            if (Cn !== null) {
              !(Cn.flags & 65536) && (Cn.flags |= 256), Wd(Cn, C, k, h, r), Ld(Xl(z, k));
              break e;
            }
          }
          h = z = Xl(z, k), Fn !== 4 && (Fn = 2), al === null ? al = [h] : al.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var H = Rh(h, z, r);
                jd(h, H);
                break e;
              case 1:
                k = z;
                var j = h.type, W = h.stateNode;
                if (!(h.flags & 128) && (typeof j.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (li === null || !li.has(W)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var de = cs(h, k, r);
                  jd(h, de);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        up(o);
      } catch (ze) {
        r = ze, hn === o && o !== null && (hn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nf() {
    var n = ys.current;
    return ys.current = Wc, n === null ? Wc : n;
  }
  function lp() {
    (Fn === 0 || Fn === 3 || Fn === 2) && (Fn = 4), cn === null || !(Oi & 268435455) && !(Zc & 268435455) || _a(cn, qn);
  }
  function rf(n, r) {
    var o = Ct;
    Ct |= 2;
    var s = nf();
    (cn !== n || qn !== r) && (ki = null, ul(n, r));
    do
      try {
        Ng();
        break;
      } catch (p) {
        Fh(n, p);
      }
    while (!0);
    if (zd(), Ct = o, ys.current = s, hn !== null)
      throw Error(d(261));
    return cn = null, qn = 0, Fn;
  }
  function Ng() {
    for (; hn !== null; )
      Hh(hn);
  }
  function Lg() {
    for (; hn !== null && !Qi(); )
      Hh(hn);
  }
  function Hh(n) {
    var r = Ih(n.alternate, n, oa);
    n.memoizedProps = n.pendingProps, r === null ? up(n) : hn = r, np.current = null;
  }
  function up(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Zd(o, r), o !== null) {
          o.flags &= 32767, hn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Fn = 6, hn = null;
          return;
        }
      } else if (o = Mg(o, r, oa), o !== null) {
        hn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        hn = r;
        return;
      }
      hn = r = n;
    } while (r !== null);
    Fn === 0 && (Fn = 5);
  }
  function sl(n, r, o) {
    var s = Ht, p = vr.transition;
    try {
      vr.transition = null, Ht = 1, Ag(n, r, o, s);
    } finally {
      vr.transition = p, Ht = s;
    }
    return null;
  }
  function Ag(n, r, o, s) {
    do
      uu();
    while (mo !== null);
    if (Ct & 6)
      throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (og(n, h), n === cn && (hn = cn = null, qn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || ho || (ho = !0, sp(Xi, function() {
      return uu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = vr.transition, vr.transition = null;
      var C = Ht;
      Ht = 1;
      var k = Ct;
      Ct |= 4, np.current = null, Nh(n, o), Ah(o, n), fc(Io), Po = !!wd, Io = wd = null, n.current = o, zh(o), Xs(), Ct = k, Ht = C, vr.transition = h;
    } else
      n.current = o;
    if (ho && (ho = !1, mo = n, ef = p), h = n.pendingLanes, h === 0 && (li = null), Rv(o.stateNode), yr(n, Mt()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (Jc)
      throw Jc = !1, n = il, il = null, n;
    return ef & 1 && n.tag !== 0 && uu(), h = n.pendingLanes, h & 1 ? n === tf ? iu++ : (iu = 0, tf = n) : iu = 0, Pr(), null;
  }
  function uu() {
    if (mo !== null) {
      var n = ed(ef), r = vr.transition, o = Ht;
      try {
        if (vr.transition = null, Ht = 16 > n ? 16 : n, mo === null)
          var s = !1;
        else {
          if (n = mo, mo = null, ef = 0, Ct & 6)
            throw Error(d(331));
          var p = Ct;
          for (Ct |= 4, ke = n.current; ke !== null; ) {
            var h = ke, C = h.child;
            if (ke.flags & 16) {
              var k = h.deletions;
              if (k !== null) {
                for (var z = 0; z < k.length; z++) {
                  var X = k[z];
                  for (ke = X; ke !== null; ) {
                    var ie = ke;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(8, ie, h);
                    }
                    var le = ie.child;
                    if (le !== null)
                      le.return = ie, ke = le;
                    else
                      for (; ke !== null; ) {
                        ie = ke;
                        var ae = ie.sibling, xe = ie.return;
                        if (ep(ie), ie === X) {
                          ke = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = xe, ke = ae;
                          break;
                        }
                        ke = xe;
                      }
                  }
                }
                var Me = h.alternate;
                if (Me !== null) {
                  var Ae = Me.child;
                  if (Ae !== null) {
                    Me.child = null;
                    do {
                      var Cn = Ae.sibling;
                      Ae.sibling = null, Ae = Cn;
                    } while (Ae !== null);
                  }
                }
                ke = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null)
              C.return = h, ke = C;
            else
              e:
                for (; ke !== null; ) {
                  if (h = ke, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(9, h, h.return);
                    }
                  var H = h.sibling;
                  if (H !== null) {
                    H.return = h.return, ke = H;
                    break e;
                  }
                  ke = h.return;
                }
          }
          var j = n.current;
          for (ke = j; ke !== null; ) {
            C = ke;
            var W = C.child;
            if (C.subtreeFlags & 2064 && W !== null)
              W.return = C, ke = W;
            else
              e:
                for (C = j; ke !== null; ) {
                  if (k = ke, k.flags & 2048)
                    try {
                      switch (k.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ms(9, k);
                      }
                    } catch (ze) {
                      mn(k, k.return, ze);
                    }
                  if (k === C) {
                    ke = null;
                    break e;
                  }
                  var de = k.sibling;
                  if (de !== null) {
                    de.return = k.return, ke = de;
                    break e;
                  }
                  ke = k.return;
                }
          }
          if (Ct = p, Pr(), Va && typeof Va.onPostCommitFiberRoot == "function")
            try {
              Va.onPostCommitFiberRoot(Lu, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Ht = o, vr.transition = r;
      }
    }
    return !1;
  }
  function Vh(n, r, o) {
    r = Xl(o, r), r = Rh(n, r, 1), n = uo(n, r, 1), r = hr(), n !== null && (Uo(n, 1, r), yr(n, r));
  }
  function mn(n, r, o) {
    if (n.tag === 3)
      Vh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Vh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (li === null || !li.has(s))) {
            n = Xl(o, n), n = cs(r, n, 1), r = uo(r, n, 1), n = hr(), r !== null && (Uo(r, 1, n), yr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function zg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = hr(), n.pingedLanes |= n.suspendedLanes & o, cn === n && (qn & o) === o && (Fn === 4 || Fn === 3 && (qn & 130023424) === qn && 500 > Mt() - rp ? ul(n, 0) : ru |= o), yr(n, r);
  }
  function af(n, r) {
    r === 0 && (n.mode & 1 ? (r = kl, kl <<= 1, !(kl & 130023424) && (kl = 4194304)) : r = 1);
    var o = hr();
    n = bi(n, r), n !== null && (Uo(n, r, o), yr(n, o));
  }
  function Ug(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), af(n, o);
  }
  function Pg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    s !== null && s.delete(r), af(n, o);
  }
  var Ih;
  Ih = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || vn.current)
        Dn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Dn = !1, _i(n, r, o);
        Dn = !!(n.flags & 131072);
      }
    else
      Dn = !1, Zt && r.flags & 1048576 && kd(r, Il, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        dr(n, r), n = r.pendingProps;
        var p = Sa(r, rt.current);
        he(r, o), p = fo(null, r, s, n, p, o);
        var h = Ko();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, an(s) ? (h = !0, yc(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Pd(r), p.updater = xc, r.stateNode = p, p._reactInternals = r, Rc(r, s, n, o), r = Dh(null, r, s, !0, h, o)) : (r.tag = 0, Zt && h && gc(r), Un(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (dr(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = Fg(s), n = aa(s, n), p) {
            case 0:
              r = ql(null, r, s, n, o);
              break e;
            case 1:
              r = Yd(null, r, s, n, o);
              break e;
            case 11:
              r = vo(null, r, s, n, o);
              break e;
            case 14:
              r = Gc(null, r, s, aa(s.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : aa(s, p), ql(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : aa(s, p), Yd(n, r, s, p, o);
      case 3:
        e: {
          if (Oh(r), n === null)
            throw Error(d(387));
          s = r.pendingProps, h = r.memoizedState, p = h.element, zn(n, r), so(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, h.isDehydrated)
            if (h = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              p = Xl(Error(d(423)), r), r = Qc(n, r, s, o, p);
              break e;
            } else if (s !== p) {
              p = Xl(Error(d(424)), r), r = Qc(n, r, s, o, p);
              break e;
            } else
              for (Hr = Ya(r.stateNode.containerInfo.firstChild), ra = r, Zt = !0, Ta = null, o = bh(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (un(), s === p) {
              r = tr(n, r, o);
              break e;
            }
            Un(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return qe(r), n === null && Ec(r), s = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = p.children, Zu(s, p) ? C = null : h !== null && Zu(s, h) && (r.flags |= 32), ft(n, r), Un(n, r, C, o), r.child;
      case 6:
        return n === null && Ec(r), null;
      case 13:
        return Qd(n, r, o);
      case 4:
        return Hd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = $l(r, null, s, o) : Un(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : aa(s, p), vo(n, r, s, p, o);
      case 7:
        return Un(n, r, r.pendingProps, o), r.child;
      case 8:
        return Un(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Un(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, h = r.memoizedProps, C = p.value, Pt(ri, s._currentValue), s._currentValue = C, h !== null)
            if (ya(h.value, C)) {
              if (h.children === p.children && !vn.current) {
                r = tr(n, r, o);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var k = h.dependencies;
                if (k !== null) {
                  C = h.child;
                  for (var z = k.firstContext; z !== null; ) {
                    if (z.context === s) {
                      if (h.tag === 1) {
                        z = xi(-1, o & -o), z.tag = 2;
                        var X = h.updateQueue;
                        if (X !== null) {
                          X = X.shared;
                          var ie = X.pending;
                          ie === null ? z.next = z : (z.next = ie.next, ie.next = z), X.pending = z;
                        }
                      }
                      h.lanes |= o, z = h.alternate, z !== null && (z.lanes |= o), Qn(
                        h.return,
                        o,
                        r
                      ), k.lanes |= o;
                      break;
                    }
                    z = z.next;
                  }
                } else if (h.tag === 10)
                  C = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (C = h.return, C === null)
                    throw Error(d(341));
                  C.lanes |= o, k = C.alternate, k !== null && (k.lanes |= o), Qn(C, o, r), C = h.sibling;
                } else
                  C = h.child;
                if (C !== null)
                  C.return = h;
                else
                  for (C = h; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (h = C.sibling, h !== null) {
                      h.return = C.return, C = h;
                      break;
                    }
                    C = C.return;
                  }
                h = C;
              }
          Un(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, he(r, o), p = En(p), s = s(p), r.flags |= 1, Un(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = aa(s, r.pendingProps), p = aa(s.type, p), Gc(n, r, s, p, o);
      case 15:
        return Br(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : aa(s, p), dr(n, r), r.tag = 1, an(s) ? (n = !0, yc(r)) : n = !1, he(r, o), Eh(r, s, p), Rc(r, s, p, o), Dh(null, r, s, !0, n, o);
      case 19:
        return Kd(n, r, o);
      case 22:
        return tl(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function sp(n, r) {
    return rn(n, r);
  }
  function jg(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Da(n, r, o, s) {
    return new jg(n, r, o, s);
  }
  function cp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Fg(n) {
    if (typeof n == "function")
      return cp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Pe)
        return 11;
      if (n === wt)
        return 14;
    }
    return 2;
  }
  function go(n, r) {
    var o = n.alternate;
    return o === null ? (o = Da(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function of(n, r, o, s, p, h) {
    var C = 2;
    if (s = n, typeof n == "function")
      cp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case re:
            return cl(o.children, p, h, r);
          case Ce:
            C = 8, p |= 8;
            break;
          case pe:
            return n = Da(12, o, r, p | 2), n.elementType = pe, n.lanes = h, n;
          case ce:
            return n = Da(13, o, r, p), n.elementType = ce, n.lanes = h, n;
          case Ie:
            return n = Da(19, o, r, p), n.elementType = Ie, n.lanes = h, n;
          case Nn:
            return Es(o, p, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case _e:
                  C = 10;
                  break e;
                case be:
                  C = 9;
                  break e;
                case Pe:
                  C = 11;
                  break e;
                case wt:
                  C = 14;
                  break e;
                case mt:
                  C = 16, s = null;
                  break e;
              }
            throw Error(d(130, n == null ? n : typeof n, ""));
        }
    return r = Da(C, o, r, p), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function cl(n, r, o, s) {
    return n = Da(7, n, s, r), n.lanes = o, n;
  }
  function Es(n, r, o, s) {
    return n = Da(22, n, s, r), n.elementType = Nn, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Cs(n, r, o) {
    return n = Da(6, n, null, r), n.lanes = o, n;
  }
  function fl(n, r, o) {
    return r = Da(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Hg(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jf(0), this.expirationTimes = Jf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jf(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function lf(n, r, o, s, p, h, C, k, z) {
    return n = new Hg(n, r, o, k, z), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Da(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pd(h), n;
  }
  function Bh(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: fe, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function fp(n) {
    if (!n)
      return ni;
    n = n._reactInternals;
    e: {
      if (pt(n) !== n || n.tag !== 1)
        throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (an(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (an(o))
        return ts(n, o, r);
    }
    return r;
  }
  function $h(n, r, o, s, p, h, C, k, z) {
    return n = lf(o, s, !0, n, p, h, C, k, z), n.context = fp(null), o = n.current, s = hr(), p = On(o), h = xi(s, p), h.callback = r ?? null, uo(o, h, p), n.current.lanes = p, Uo(n, p, s), yr(n, s), n;
  }
  function Ts(n, r, o, s) {
    var p = r.current, h = hr(), C = On(p);
    return o = fp(o), r.context === null ? r.context = o : r.pendingContext = o, r = xi(h, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = uo(p, r, C), n !== null && (mr(n, p, C, h), bc(n, p, C)), C;
  }
  function uf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Wh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function dp(n, r) {
    Wh(n, r), (n = n.alternate) && Wh(n, r);
  }
  function Yh() {
    return null;
  }
  var pp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function sf(n) {
    this._internalRoot = n;
  }
  Mi.prototype.render = sf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(d(409));
    Ts(n, r, null, null);
  }, Mi.prototype.unmount = sf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      yo(function() {
        Ts(null, n, null, null);
      }), r[Ti] = null;
    }
  };
  function Mi(n) {
    this._internalRoot = n;
  }
  Mi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = kv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Vt.length && r !== 0 && r < Vt[o].priority; o++)
        ;
      Vt.splice(o, 0, n), o === 0 && Mv(n);
    }
  };
  function vp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Gh() {
  }
  function Vg(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var X = uf(C);
          h.call(X);
        };
      }
      var C = $h(r, s, n, 0, null, !1, !1, "", Gh);
      return n._reactRootContainer = C, n[Ti] = C.current, Hl(n.nodeType === 8 ? n.parentNode : n), yo(), C;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var X = uf(z);
        k.call(X);
      };
    }
    var z = lf(n, 0, !1, null, null, !1, !1, "", Gh);
    return n._reactRootContainer = z, n[Ti] = z.current, Hl(n.nodeType === 8 ? n.parentNode : n), yo(function() {
      Ts(r, z, o, s);
    }), z;
  }
  function ff(n, r, o, s, p) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof p == "function") {
        var k = p;
        p = function() {
          var z = uf(C);
          k.call(z);
        };
      }
      Ts(r, C, n, p);
    } else
      C = Vg(o, r, n, p, s);
    return uf(C);
  }
  Ov = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = zo(r.pendingLanes);
          o !== 0 && (Au(r, o | 1), yr(r, Mt()), !(Ct & 6) && (au = Mt() + 500, Pr()));
        }
        break;
      case 13:
        yo(function() {
          var s = bi(n, 1);
          if (s !== null) {
            var p = hr();
            mr(s, n, 1, p);
          }
        }), dp(n, 1);
    }
  }, Js = function(n) {
    if (n.tag === 13) {
      var r = bi(n, 134217728);
      if (r !== null) {
        var o = hr();
        mr(r, n, 134217728, o);
      }
      dp(n, 134217728);
    }
  }, Wt = function(n) {
    if (n.tag === 13) {
      var r = On(n), o = bi(n, r);
      if (o !== null) {
        var s = hr();
        mr(o, n, r, s);
      }
      dp(n, r);
    }
  }, kv = function() {
    return Ht;
  }, td = function(n, r) {
    var o = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = o;
    }
  }, Zr = function(n, r, o) {
    switch (r) {
      case "input":
        if (Qe(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = We(s);
              if (!p)
                throw Error(d(90));
              nt(s), Qe(s, p);
            }
          }
        }
        break;
      case "textarea":
        Xr(n, o);
        break;
      case "select":
        r = o.value, r != null && ge(n, !!o.multiple, r, !1);
    }
  }, Nu = lu, Qs = yo;
  var Ig = { usingClientEntryPoint: !1, Events: [es, Vl, We, No, _l, lu] }, su = { findFiberByHostInstance: ga, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Bg = { bundleType: su.bundleType, version: su.version, rendererPackageName: su.rendererPackageName, rendererConfig: su.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: su.findFiberByHostInstance || Yh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!df.isDisabled && df.supportsFiber)
      try {
        Lu = df.inject(Bg), Va = df;
      } catch {
      }
  }
  return Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ig, Aa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vp(r))
      throw Error(d(200));
    return Bh(n, r, null, o);
  }, Aa.createRoot = function(n, r) {
    if (!vp(n))
      throw Error(d(299));
    var o = !1, s = "", p = pp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = lf(n, 1, !1, null, null, o, !1, s, p), n[Ti] = r.current, Hl(n.nodeType === 8 ? n.parentNode : n), new sf(r);
  }, Aa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = $n(r), n = n === null ? null : n.stateNode, n;
  }, Aa.flushSync = function(n) {
    return yo(n);
  }, Aa.hydrate = function(n, r, o) {
    if (!cf(r))
      throw Error(d(200));
    return ff(null, n, r, !0, o);
  }, Aa.hydrateRoot = function(n, r, o) {
    if (!vp(n))
      throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, h = "", C = pp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = $h(r, null, n, 1, o ?? null, p, !1, h, C), n[Ti] = r.current, Hl(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new Mi(r);
  }, Aa.render = function(n, r, o) {
    if (!cf(r))
      throw Error(d(200));
    return ff(null, n, r, !1, o);
  }, Aa.unmountComponentAtNode = function(n) {
    if (!cf(n))
      throw Error(d(40));
    return n._reactRootContainer ? (yo(function() {
      ff(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ti] = null;
      });
    }), !0) : !1;
  }, Aa.unstable_batchedUpdates = lu, Aa.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!cf(o))
      throw Error(d(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(d(38));
    return ff(n, r, o, !1, s);
  }, Aa.version = "18.2.0-next-9e3b772b8-20220608", Aa;
}
var za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ax;
function dz() {
  return ax || (ax = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = da, f = Zx(), d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
    function S(e) {
      m = e;
    }
    function w(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("warn", e, a);
      }
    }
    function g(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("error", e, a);
      }
    }
    function x(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var c = a.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var T = 0, b = 1, D = 2, O = 3, L = 4, A = 5, N = 6, U = 7, q = 8, ee = 9, Q = 10, V = 11, $ = 12, K = 13, fe = 14, re = 15, Ce = 16, pe = 17, _e = 18, be = 19, Pe = 21, ce = 22, Ie = 23, wt = 24, mt = 25, Nn = !0, ve = !1, Fe = !1, Te = !1, St = !1, bt = !0, yn = !1, pn = !1, Lr = !0, zt = !0, gn = !0, bn = /* @__PURE__ */ new Set(), Ln = {}, ue = {};
    function ye(e, t) {
      nt(e, t), nt(e + "Capture", t);
    }
    function nt(e, t) {
      Ln[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ln[e] = t;
      {
        var a = e.toLowerCase();
        ue[a] = e, e === "onDoubleClick" && (ue.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        bn.add(t[i]);
    }
    var Be = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", He = Object.prototype.hasOwnProperty;
    function et(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ye(e) {
      try {
        return Qe(e), !1;
      } catch {
        return !0;
      }
    }
    function Qe(e) {
      return "" + e;
    }
    function ot(e, t) {
      if (Ye(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, et(e)), Qe(e);
    }
    function vt(e) {
      if (Ye(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(e)), Qe(e);
    }
    function dt(e, t) {
      if (Ye(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, et(e)), Qe(e);
    }
    function ge(e, t) {
      if (Ye(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, et(e)), Qe(e);
    }
    function Ut(e) {
      if (Ye(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", et(e)), Qe(e);
    }
    function qt(e) {
      if (Ye(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", et(e)), Qe(e);
    }
    var Xr = 0, qr = 1, ja = 2, xn = 3, Kr = 4, Wi = 5, Fa = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", yt = new RegExp("^[" + Se + "][" + $e + "]*$"), Ft = {}, ln = {};
    function Bn(e) {
      return He.call(ln, e) ? !0 : He.call(Ft, e) ? !1 : yt.test(e) ? (ln[e] = !0, !0) : (Ft[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Sn(e, t, a) {
      return t !== null ? t.type === Xr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ar(e, t, a, i) {
      if (a !== null && a.type === Xr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Qt(e, t, a, i) {
      if (t === null || typeof t > "u" || Ar(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case xn:
            return !t;
          case Kr:
            return t === !1;
          case Wi:
            return isNaN(t);
          case Fa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zr(e) {
      return Xt.hasOwnProperty(e) ? Xt[e] : null;
    }
    function $t(e, t, a, i, u, c, v) {
      this.acceptsBooleans = t === ja || t === xn || t === Kr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Xt = {}, Rl = [
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
    Rl.forEach(function(e) {
      Xt[e] = new $t(
        e,
        Xr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Xt[t] = new $t(
        t,
        qr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Xt[e] = new $t(
        e,
        ja,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Xt[e] = new $t(
        e,
        ja,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
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
    ].forEach(function(e) {
      Xt[e] = new $t(
        e,
        xn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new $t(
        e,
        xn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new $t(
        e,
        Kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new $t(
        e,
        Fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Xt[e] = new $t(
        e,
        Wi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var No = /[\-\:]([a-z])/g, _l = function(e) {
      return e[1].toUpperCase();
    };
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
    ].forEach(function(e) {
      var t = e.replace(No, _l);
      Xt[t] = new $t(
        t,
        qr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(No, _l);
      Xt[t] = new $t(
        t,
        qr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(No, _l);
      Xt[t] = new $t(
        t,
        qr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Xt[e] = new $t(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Nu = "xlinkHref";
    Xt[Nu] = new $t(
      "xlinkHref",
      qr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Xt[e] = new $t(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Qs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Lo = !1;
    function Dl(e) {
      !Lo && Qs.test(e) && (Lo = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ao(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        ot(a, t), i.sanitizeURL && Dl("" + a);
        var c = i.attributeName, v = null;
        if (i.type === Kr) {
          if (e.hasAttribute(c)) {
            var y = e.getAttribute(c);
            return y === "" ? !0 : Qt(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(c)) {
          if (Qt(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === xn)
            return a;
          v = e.getAttribute(c);
        }
        return Qt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Ol(e, t, a, i) {
      {
        if (!Bn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return ot(a, t), u === "" + a ? a : u;
      }
    }
    function ei(e, t, a, i) {
      var u = Zr(t);
      if (!Sn(t, u, i)) {
        if (Qt(t, a, u, i) && (a = null), i || u === null) {
          if (Bn(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (ot(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var v = u.mustUseProperty;
        if (v) {
          var y = u.propertyName;
          if (a === null) {
            var E = u.type;
            e[y] = E === xn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var R = u.attributeName, _ = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var F = u.type, P;
          F === xn || F === Kr && a === !0 ? P = "" : (ot(a, R), P = "" + a, u.sanitizeURL && Dl(P.toString())), _ ? e.setAttributeNS(_, R, P) : e.setAttribute(R, P);
        }
      }
    }
    var Yi = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), Ha = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), $n = Symbol.for("react.scope"), nn = Symbol.for("react.debug_trace_mode"), rn = Symbol.for("react.offscreen"), Er = Symbol.for("react.legacy_hidden"), Qi = Symbol.for("react.cache"), Xs = Symbol.for("react.tracing_marker"), Mt = Symbol.iterator, ag = "@@iterator";
    function hi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Mt && e[Mt] || e[ag];
      return typeof t == "function" ? t : null;
    }
    var Et = Object.assign, Xi = 0, xv, qf, Lu, Va, Rv, va, _v;
    function Dv() {
    }
    Dv.__reactDisabledLog = !0;
    function ig() {
      {
        if (Xi === 0) {
          xv = console.log, qf = console.info, Lu = console.warn, Va = console.error, Rv = console.group, va = console.groupCollapsed, _v = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dv,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Xi++;
      }
    }
    function qs() {
      {
        if (Xi--, Xi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, e, {
              value: xv
            }),
            info: Et({}, e, {
              value: qf
            }),
            warn: Et({}, e, {
              value: Lu
            }),
            error: Et({}, e, {
              value: Va
            }),
            group: Et({}, e, {
              value: Rv
            }),
            groupCollapsed: Et({}, e, {
              value: va
            }),
            groupEnd: Et({}, e, {
              value: _v
            })
          });
        }
        Xi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var kl = d.ReactCurrentDispatcher, zo;
    function Ia(e, t, a) {
      {
        if (zo === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            zo = i && i[1] || "";
          }
        return `
` + zo + e;
      }
    }
    var Kf = !1, Ks;
    {
      var Zf = typeof WeakMap == "function" ? WeakMap : Map;
      Ks = new Zf();
    }
    function Zs(e, t) {
      if (!e || Kf)
        return "";
      {
        var a = Ks.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Kf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = kl.current, kl.current = null, ig();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (G) {
              i = G;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (G) {
              i = G;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            i = G;
          }
          e();
        }
      } catch (G) {
        if (G && i && typeof G.stack == "string") {
          for (var y = G.stack.split(`
`), E = i.stack.split(`
`), R = y.length - 1, _ = E.length - 1; R >= 1 && _ >= 0 && y[R] !== E[_]; )
            _--;
          for (; R >= 1 && _ >= 0; R--, _--)
            if (y[R] !== E[_]) {
              if (R !== 1 || _ !== 1)
                do
                  if (R--, _--, _ < 0 || y[R] !== E[_]) {
                    var F = `
` + y[R].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && Ks.set(e, F), F;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        Kf = !1, kl.current = c, qs(), Error.prepareStackTrace = u;
      }
      var P = e ? e.displayName || e.name : "", Y = P ? Ia(P) : "";
      return typeof e == "function" && Ks.set(e, Y), Y;
    }
    function Jf(e, t, a) {
      return Zs(e, !0);
    }
    function Uo(e, t, a) {
      return Zs(e, !1);
    }
    function og(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Au(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Zs(e, og(e));
      if (typeof e == "string")
        return Ia(e);
      switch (e) {
        case pt:
          return Ia("Suspense");
        case Ot:
          return Ia("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Xe:
            return Uo(e.render);
          case ht:
            return Au(e.type, t, a);
          case Ke: {
            var i = e, u = i._payload, c = i._init;
            try {
              return Au(c(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case A:
          return Ia(e.type);
        case Ce:
          return Ia("Lazy");
        case K:
          return Ia("Suspense");
        case be:
          return Ia("SuspenseList");
        case T:
        case D:
        case re:
          return Uo(e.type);
        case V:
          return Uo(e.type.render);
        case b:
          return Jf(e.type);
        default:
          return "";
      }
    }
    function ed(e) {
      try {
        var t = "", a = e;
        do
          t += Ht(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ov(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Js(e) {
      return e.displayName || "Context";
    }
    function Wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ha:
          return "Fragment";
        case Jr:
          return "Portal";
        case M:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case pt:
          return "Suspense";
        case Ot:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            var t = e;
            return Js(t) + ".Consumer";
          case oe:
            var a = e;
            return Js(a._context) + ".Provider";
          case Xe:
            return Ov(e, e.render, "ForwardRef");
          case ht:
            var i = e.displayName || null;
            return i !== null ? i : Wt(e.type) || "Memo";
          case Ke: {
            var u = e, c = u._payload, v = u._init;
            try {
              return Wt(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function kv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function td(e) {
      return e.displayName || "Context";
    }
    function ut(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case wt:
          return "Cache";
        case ee:
          var i = a;
          return td(i) + ".Consumer";
        case Q:
          var u = a;
          return td(u._context) + ".Provider";
        case _e:
          return "DehydratedFragment";
        case V:
          return kv(a, a.render, "ForwardRef");
        case U:
          return "Fragment";
        case A:
          return a;
        case L:
          return "Portal";
        case O:
          return "Root";
        case N:
          return "Text";
        case Ce:
          return Wt(a);
        case q:
          return a === Gi ? "StrictMode" : "Mode";
        case ce:
          return "Offscreen";
        case $:
          return "Profiler";
        case Pe:
          return "Scope";
        case K:
          return "Suspense";
        case be:
          return "SuspenseList";
        case mt:
          return "TracingMarker";
        case b:
        case T:
        case pe:
        case D:
        case fe:
        case re:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var zu = d.ReactDebugCurrentFrame, Rn = null, ha = !1;
    function ma() {
      {
        if (Rn === null)
          return null;
        var e = Rn._debugOwner;
        if (e !== null && typeof e < "u")
          return ut(e);
      }
      return null;
    }
    function Uu() {
      return Rn === null ? "" : ed(Rn);
    }
    function An() {
      zu.getCurrentStack = null, Rn = null, ha = !1;
    }
    function Vt(e) {
      zu.getCurrentStack = e === null ? null : Uu, Rn = e, ha = !1;
    }
    function lg() {
      return Rn;
    }
    function Ba(e) {
      ha = e;
    }
    function cr(e) {
      return "" + e;
    }
    function qi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qt(e), e;
        default:
          return "";
      }
    }
    var Mv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ml(e, t) {
      Mv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function nd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Nv(e) {
      return e._valueTracker;
    }
    function Pu(e) {
      e._valueTracker = null;
    }
    function ju(e) {
      var t = "";
      return e && (nd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Nl(e) {
      var t = nd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(y) {
            qt(y), i = "" + y, c.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            qt(y), i = "" + y;
          },
          stopTracking: function() {
            Pu(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Po(e) {
      Nv(e) || (e._valueTracker = Nl(e));
    }
    function Lv(e) {
      if (!e)
        return !1;
      var t = Nv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ju(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ec(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var tc = !1, Fu = !1, nc = !1, rd = !1;
    function mi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Hu(e, t) {
      var a = e, i = t.checked, u = Et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Vu(e, t) {
      Ml("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Fu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ma() || "A component", t.type), Fu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !tc && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ma() || "A component", t.type), tc = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: qi(t.value != null ? t.value : i),
        controlled: mi(t)
      };
    }
    function ad(e, t) {
      var a = e, i = t.checked;
      i != null && ei(a, "checked", i, !1);
    }
    function Ll(e, t) {
      var a = e;
      {
        var i = mi(t);
        !a._wrapperState.controlled && i && !rd && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), rd = !0), a._wrapperState.controlled && !i && !nc && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), nc = !0);
      }
      ad(e, t);
      var u = qi(t.value), c = t.type;
      if (u != null)
        c === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = cr(u)) : a.value !== cr(u) && (a.value = cr(u));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ki(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ki(a, t.type, qi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Iu(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, c = u === "submit" || u === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = cr(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function Av(e, t) {
      var a = e;
      Ll(a, t), ea(a, t);
    }
    function ea(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ot(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < u.length; c++) {
          var v = u[c];
          if (!(v === e || v.form !== e.form)) {
            var y = cm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Lv(v), Ll(v, y);
          }
        }
      }
    }
    function Ki(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ec(e.ownerDocument) !== e) && (a == null ? e.defaultValue = cr(e._wrapperState.initialValue) : e.defaultValue !== cr(a) && (e.defaultValue = cr(a)));
    }
    var rc = !1, Al = !1, zv = !1;
    function ac(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? l.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Al || (Al = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (zv || (zv = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !rc && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), rc = !0);
    }
    function id(e, t) {
      t.value != null && e.setAttribute("value", cr(qi(t.value)));
    }
    var Bu = Array.isArray;
    function Wn(e) {
      return Bu(e);
    }
    var ic;
    ic = !1;
    function Uv() {
      var e = ma();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Pv = ["value", "defaultValue"];
    function ug(e) {
      {
        Ml("select", e);
        for (var t = 0; t < Pv.length; t++) {
          var a = Pv[t];
          if (e[a] != null) {
            var i = Wn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Uv()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Uv());
          }
        }
      }
    }
    function Zi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var c = a, v = {}, y = 0; y < c.length; y++)
          v["$" + c[y]] = !0;
        for (var E = 0; E < u.length; E++) {
          var R = v.hasOwnProperty("$" + u[E].value);
          u[E].selected !== R && (u[E].selected = R), R && i && (u[E].defaultSelected = !0);
        }
      } else {
        for (var _ = cr(qi(a)), F = null, P = 0; P < u.length; P++) {
          if (u[P].value === _) {
            u[P].selected = !0, i && (u[P].defaultSelected = !0);
            return;
          }
          F === null && !u[P].disabled && (F = u[P]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function od(e, t) {
      return Et({}, t, {
        value: void 0
      });
    }
    function jv(e, t) {
      var a = e;
      ug(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ic && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ic = !0);
    }
    function sg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Zi(a, !!t.multiple, i, !1) : t.defaultValue != null && Zi(a, !!t.multiple, t.defaultValue, !0);
    }
    function cg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Zi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Zi(a, !!t.multiple, t.defaultValue, !0) : Zi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function fg(e, t) {
      var a = e, i = t.value;
      i != null && Zi(a, !!t.multiple, i, !1);
    }
    var ld = !1;
    function ud(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: cr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Fv(e, t) {
      var a = e;
      Ml("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ld && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ma() || "A component"), ld = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, c = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Wn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            c = u;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: qi(i)
      };
    }
    function Hv(e, t) {
      var a = e, i = qi(t.value), u = qi(t.defaultValue);
      if (i != null) {
        var c = cr(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      u != null && (a.defaultValue = cr(u));
    }
    function Vv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function sd(e, t) {
      Hv(e, t);
    }
    var yi = "http://www.w3.org/1999/xhtml", dg = "http://www.w3.org/1998/Math/MathML", cd = "http://www.w3.org/2000/svg";
    function oc(e) {
      switch (e) {
        case "svg":
          return cd;
        case "math":
          return dg;
        default:
          return yi;
      }
    }
    function fd(e, t) {
      return e == null || e === yi ? oc(t) : e === cd && t === "foreignObject" ? yi : e;
    }
    var pg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, lc, Iv = pg(function(e, t) {
      if (e.namespaceURI === cd && !("innerHTML" in e)) {
        lc = lc || document.createElement("div"), lc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = lc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), zr = 1, gi = 3, _n = 8, $a = 9, jo = 11, uc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === gi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Bv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, zl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function $v(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Wv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(zl).forEach(function(e) {
      Wv.forEach(function(t) {
        zl[$v(t, e)] = zl[e];
      });
    });
    function sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(zl.hasOwnProperty(e) && zl[e]) ? t + "px" : (ge(t, e), ("" + t).trim());
    }
    var Ul = /([A-Z])/g, vg = /^ms-/;
    function hg(e) {
      return e.replace(Ul, "-$1").toLowerCase().replace(vg, "-ms-");
    }
    var Yv = function() {
    };
    {
      var Gv = /^(?:webkit|moz|o)[A-Z]/, Qv = /^-ms-/, $u = /-(.)/g, Pl = /;\s*$/, jl = {}, Fl = {}, Xv = !1, dd = !1, pd = function(e) {
        return e.replace($u, function(t, a) {
          return a.toUpperCase();
        });
      }, vd = function(e) {
        jl.hasOwnProperty(e) && jl[e] || (jl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pd(e.replace(Qv, "ms-"))
        ));
      }, qv = function(e) {
        jl.hasOwnProperty(e) && jl[e] || (jl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Kv = function(e, t) {
        Fl.hasOwnProperty(t) && Fl[t] || (Fl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Pl, "")));
      }, Zv = function(e, t) {
        Xv || (Xv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mg = function(e, t) {
        dd || (dd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Yv = function(e, t) {
        e.indexOf("-") > -1 ? vd(e) : Gv.test(e) ? qv(e) : Pl.test(t) && Kv(e, t), typeof t == "number" && (isNaN(t) ? Zv(e, t) : isFinite(t) || mg(e, t));
      };
    }
    var yg = Yv;
    function gg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : hg(i)) + ":", t += sc(i, u, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function Jv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || yg(i, t[i]);
          var c = sc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function Sg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ya(e) {
      var t = {};
      for (var a in e)
        for (var i = Bv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Wu(e, t) {
      {
        if (!t)
          return;
        var a = ya(e), i = ya(t), u = {};
        for (var c in a) {
          var v = a[c], y = i[c];
          if (y && v !== y) {
            var E = v + "," + y;
            if (u[E])
              continue;
            u[E] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Sg(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var eh = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, th = Et({
      menuitem: !0
    }, eh), nh = "__html";
    function cc(e, t) {
      if (t) {
        if (th[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(nh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Si(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var fc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, rh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Wa = {}, hd = new RegExp("^(aria)-[" + $e + "]*$"), Yu = new RegExp("^(aria)[A-Z][" + $e + "]*$");
    function md(e, t) {
      {
        if (He.call(Wa, t) && Wa[t])
          return !0;
        if (Yu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = rh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Wa[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Wa[t] = !0, !0;
        }
        if (hd.test(t)) {
          var u = t.toLowerCase(), c = rh.hasOwnProperty(u) ? u : null;
          if (c == null)
            return Wa[t] = !0, !1;
          if (t !== c)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Wa[t] = !0, !0;
        }
      }
      return !0;
    }
    function ah(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = md(e, i);
          u || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function dc(e, t) {
      Si(e, t) || ah(e, t);
    }
    var Fo = !1;
    function yd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Fo && (Fo = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var gd = function() {
    };
    {
      var Yn = {}, Sd = /^on./, ih = /^on[^A-Z]/, oh = new RegExp("^(aria)-[" + $e + "]*$"), lh = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      gd = function(e, t, a, i) {
        if (He.call(Yn, t) && Yn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Yn[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(u) ? v[u] : null;
          if (y != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, y), Yn[t] = !0, !0;
          if (Sd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Yn[t] = !0, !0;
        } else if (Sd.test(t))
          return ih.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Yn[t] = !0, !0;
        if (oh.test(t) || lh.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Yn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Yn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Yn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Yn[t] = !0, !0;
        var E = Zr(t), R = E !== null && E.type === Xr;
        if (fc.hasOwnProperty(u)) {
          var _ = fc[u];
          if (_ !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, _), Yn[t] = !0, !0;
        } else if (!R && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Yn[t] = !0, !0;
        return typeof a == "boolean" && Ar(t, a, E, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Yn[t] = !0, !0) : R ? !0 : Ar(t, a, E, !1) ? (Yn[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === xn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Yn[t] = !0), !0);
      };
    }
    var uh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var c = gd(e, u, t[u], a);
          c || i.push(u);
        }
        var v = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function sh(e, t, a) {
      Si(e, t) || uh(e, t, a);
    }
    var Ei = 1, Gu = 2, Ho = 4, Eg = Ei | Gu | Ho, Qu = null;
    function Xu(e) {
      Qu !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Qu = e;
    }
    function Cg() {
      Qu === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Qu = null;
    }
    function ch(e) {
      return e === Qu;
    }
    function pc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === gi ? t.parentNode : t;
    }
    var Yt = null, Ji = null, Ci = null;
    function Hl(e) {
      var t = du(e);
      if (t) {
        if (typeof Yt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = cm(a);
          Yt(t.stateNode, t.type, i);
        }
      }
    }
    function fh(e) {
      Yt = e;
    }
    function vc(e) {
      Ji ? Ci ? Ci.push(e) : Ci = [e] : Ji = e;
    }
    function qu() {
      return Ji !== null || Ci !== null;
    }
    function Ku() {
      if (Ji) {
        var e = Ji, t = Ci;
        if (Ji = null, Ci = null, Hl(e), t)
          for (var a = 0; a < t.length; a++)
            Hl(t[a]);
      }
    }
    var Vo = function(e, t) {
      return e(t);
    }, Ed = function() {
    }, Cd = !1;
    function Tg() {
      var e = qu();
      e && (Ed(), Ku());
    }
    function Td(e, t, a) {
      if (Cd)
        return e(t, a);
      Cd = !0;
      try {
        return Vo(e, t, a);
      } finally {
        Cd = !1, Tg();
      }
    }
    function hc(e, t, a) {
      Vo = e, Ed = a;
    }
    function mc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function wd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && mc(t));
        default:
          return !1;
      }
    }
    function Io(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = cm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (wd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Zu = !1;
    if (Be)
      try {
        var Bo = {};
        Object.defineProperty(Bo, "passive", {
          get: function() {
            Zu = !0;
          }
        }), window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
      } catch {
        Zu = !1;
      }
    function dh(e, t, a, i, u, c, v, y, E) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (_) {
        this.onError(_);
      }
    }
    var bd = dh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var xd = document.createElement("react");
      bd = function(t, a, i, u, c, v, y, E, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), F = !1, P = !0, Y = window.event, G = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          xd.removeEventListener(J, Ge, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function Ge() {
          F = !0, Z(), a.apply(i, De), P = !1;
        }
        var Ue, _t = !1, Tt = !1;
        function I(B) {
          if (Ue = B.error, _t = !0, Ue === null && B.colno === 0 && B.lineno === 0 && (Tt = !0), B.defaultPrevented && Ue != null && typeof Ue == "object")
            try {
              Ue._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), xd.addEventListener(J, Ge, !1), _.initEvent(J, !1, !1), xd.dispatchEvent(_), G && Object.defineProperty(window, "event", G), F && P && (_t ? Tt && (Ue = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ue = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ue)), window.removeEventListener("error", I), !F)
          return Z(), dh.apply(this, arguments);
      };
    }
    var wg = bd, eo = !1, Ya = null, Ju = !1, to = null, ti = {
      onError: function(e) {
        eo = !0, Ya = e;
      }
    };
    function $o(e, t, a, i, u, c, v, y, E) {
      eo = !1, Ya = null, wg.apply(ti, arguments);
    }
    function Ti(e, t, a, i, u, c, v, y, E) {
      if ($o.apply(this, arguments), eo) {
        var R = _d();
        Ju || (Ju = !0, to = R);
      }
    }
    function Rd() {
      if (Ju) {
        var e = to;
        throw Ju = !1, to = null, e;
      }
    }
    function bg() {
      return eo;
    }
    function _d() {
      if (eo) {
        var e = Ya;
        return eo = !1, Ya = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ga(e) {
      return e._reactInternals;
    }
    function es(e) {
      return e._reactInternals !== void 0;
    }
    function Vl(e, t) {
      e._reactInternals = t;
    }
    var We = (
      /*                      */
      0
    ), no = (
      /*                */
      1
    ), Kt = (
      /*                    */
      2
    ), ct = (
      /*                       */
      4
    ), At = (
      /*                */
      16
    ), Pt = (
      /*                 */
      32
    ), ni = (
      /*                     */
      64
    ), rt = (
      /*                   */
      128
    ), vn = (
      /*            */
      256
    ), Ur = (
      /*                          */
      512
    ), Sa = (
      /*                     */
      1024
    ), an = (
      /*                      */
      2048
    ), Ea = (
      /*                    */
      4096
    ), ro = (
      /*                   */
      8192
    ), ts = (
      /*             */
      16384
    ), yc = an | ct | ni | Ur | Sa | ts, ph = (
      /*               */
      32767
    ), ta = (
      /*                   */
      32768
    ), Gn = (
      /*                */
      65536
    ), ns = (
      /* */
      131072
    ), Dd = (
      /*                       */
      1048576
    ), Od = (
      /*                    */
      2097152
    ), Pr = (
      /*                 */
      4194304
    ), ao = (
      /*                */
      8388608
    ), jr = (
      /*               */
      16777216
    ), Wo = (
      /*              */
      33554432
    ), Il = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ct | Sa | 0
    ), Fr = Kt | ct | At | Pt | Ur | Ea | ro, fr = ct | ni | Ur | ro, Ca = an | At, Jn = Pr | ao | Od, wi = d.ReactCurrentOwner;
    function na(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Kt | Ea)) !== We && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? a : null;
    }
    function kd(e) {
      if (e.tag === K) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function gc(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function Md(e) {
      return na(e) === e;
    }
    function ra(e) {
      {
        var t = wi.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ut(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ga(e);
      return u ? na(u) === u : !1;
    }
    function Hr(e) {
      if (na(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zt(e) {
      var t = e.alternate;
      if (!t) {
        var a = na(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var y = c.return;
          if (y !== null) {
            i = u = y;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var E = c.child; E; ) {
            if (E === i)
              return Hr(c), e;
            if (E === u)
              return Hr(c), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = c, u = v;
        else {
          for (var R = !1, _ = c.child; _; ) {
            if (_ === i) {
              R = !0, i = c, u = v;
              break;
            }
            if (_ === u) {
              R = !0, u = c, i = v;
              break;
            }
            _ = _.sibling;
          }
          if (!R) {
            for (_ = v.child; _; ) {
              if (_ === i) {
                R = !0, i = v, u = c;
                break;
              }
              if (_ === u) {
                R = !0, u = v, i = c;
                break;
              }
              _ = _.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ta(e) {
      var t = Zt(e);
      return t !== null ? Nd(t) : null;
    }
    function Nd(e) {
      if (e.tag === A || e.tag === N)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Nd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vh(e) {
      var t = Zt(e);
      return t !== null ? Sc(t) : null;
    }
    function Sc(e) {
      if (e.tag === A || e.tag === N)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== L) {
          var a = Sc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ec = f.unstable_scheduleCallback, hh = f.unstable_cancelCallback, Cc = f.unstable_shouldYield, mh = f.unstable_requestPaint, un = f.unstable_now, Ld = f.unstable_getCurrentPriorityLevel, Tc = f.unstable_ImmediatePriority, aa = f.unstable_UserBlockingPriority, ri = f.unstable_NormalPriority, wc = f.unstable_LowPriority, io = f.unstable_IdlePriority, Ad = f.unstable_yieldValue, zd = f.unstable_setDisableYieldValue, oo = null, Qn = null, he = null, En = !1, er = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ud(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Lr && (e = Et({}, e, {
          getLaneLabelMap: uo,
          injectProfilingHooks: xi
        })), oo = t.inject(e), Qn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yh(e, t) {
      if (Qn && typeof Qn.onScheduleFiberRoot == "function")
        try {
          Qn.onScheduleFiberRoot(oo, e, t);
        } catch (a) {
          En || (En = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function bi(e, t) {
      if (Qn && typeof Qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (zt) {
            var i;
            switch (t) {
              case dr:
                i = Tc;
                break;
              case tr:
                i = aa;
                break;
              case _i:
                i = ri;
                break;
              case fs:
                i = io;
                break;
              default:
                i = ri;
                break;
            }
            Qn.onCommitFiberRoot(oo, e, i, a);
          }
        } catch (u) {
          En || (En = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function lo(e) {
      if (Qn && typeof Qn.onPostCommitFiberRoot == "function")
        try {
          Qn.onPostCommitFiberRoot(oo, e);
        } catch (t) {
          En || (En = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Pd(e) {
      if (Qn && typeof Qn.onCommitFiberUnmount == "function")
        try {
          Qn.onCommitFiberUnmount(oo, e);
        } catch (t) {
          En || (En = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function zn(e) {
      if (typeof Ad == "function" && (zd(e), S(e)), Qn && typeof Qn.setStrictMode == "function")
        try {
          Qn.setStrictMode(oo, e);
        } catch (t) {
          En || (En = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function xi(e) {
      he = e;
    }
    function uo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Jt; a++) {
          var i = xg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function bc(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function jd() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function so(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function Yo() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function gh(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function Fd() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function xc(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Sh() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function Eh(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function Ch() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function Rc(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function Bl() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function _c(e, t, a) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, a);
    }
    function Th(e, t, a) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, a);
    }
    function wh(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function $l() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function bh(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function rs() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function Ga(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function as() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Wl() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Go(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Hd(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function co(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var qe = (
      /*                         */
      0
    ), gt = (
      /*                 */
      1
    ), Ze = (
      /*                    */
      2
    ), sn = (
      /*               */
      8
    ), wa = (
      /*              */
      16
    ), Dc = Math.clz32 ? Math.clz32 : Qo, Oc = Math.log, Vd = Math.LN2;
    function Qo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Oc(t) / Vd | 0) | 0;
    }
    var Jt = 31, te = (
      /*                        */
      0
    ), xt = (
      /*                          */
      0
    ), Je = (
      /*                        */
      1
    ), ai = (
      /*    */
      2
    ), ia = (
      /*             */
      4
    ), Xo = (
      /*            */
      8
    ), en = (
      /*                     */
      16
    ), qo = (
      /*                */
      32
    ), fo = (
      /*                       */
      4194240
    ), Ko = (
      /*                        */
      64
    ), ba = (
      /*                        */
      128
    ), Vr = (
      /*                        */
      256
    ), Zo = (
      /*                        */
      512
    ), is = (
      /*                        */
      1024
    ), os = (
      /*                        */
      2048
    ), kc = (
      /*                        */
      4096
    ), Mc = (
      /*                        */
      8192
    ), Nc = (
      /*                        */
      16384
    ), Lc = (
      /*                       */
      32768
    ), Ac = (
      /*                       */
      65536
    ), zc = (
      /*                       */
      131072
    ), Uc = (
      /*                       */
      262144
    ), Pc = (
      /*                       */
      524288
    ), Jo = (
      /*                       */
      1048576
    ), jc = (
      /*                       */
      2097152
    ), el = (
      /*                            */
      130023424
    ), Ri = (
      /*                             */
      4194304
    ), Fc = (
      /*                             */
      8388608
    ), ls = (
      /*                             */
      16777216
    ), Hc = (
      /*                             */
      33554432
    ), Vc = (
      /*                             */
      67108864
    ), Id = Ri, Yl = (
      /*          */
      134217728
    ), Ic = (
      /*                          */
      268435455
    ), Gl = (
      /*               */
      268435456
    ), po = (
      /*                        */
      536870912
    ), Ir = (
      /*                   */
      1073741824
    );
    function xg(e) {
      {
        if (e & Je)
          return "Sync";
        if (e & ai)
          return "InputContinuousHydration";
        if (e & ia)
          return "InputContinuous";
        if (e & Xo)
          return "DefaultHydration";
        if (e & en)
          return "Default";
        if (e & qo)
          return "TransitionHydration";
        if (e & fo)
          return "Transition";
        if (e & el)
          return "Retry";
        if (e & Yl)
          return "SelectiveHydration";
        if (e & Gl)
          return "IdleHydration";
        if (e & po)
          return "Idle";
        if (e & Ir)
          return "Offscreen";
      }
    }
    var Gt = -1, Bc = Ko, $c = Ri;
    function Ql(e) {
      switch (Dn(e)) {
        case Je:
          return Je;
        case ai:
          return ai;
        case ia:
          return ia;
        case Xo:
          return Xo;
        case en:
          return en;
        case qo:
          return qo;
        case Ko:
        case ba:
        case Vr:
        case Zo:
        case is:
        case os:
        case kc:
        case Mc:
        case Nc:
        case Lc:
        case Ac:
        case zc:
        case Uc:
        case Pc:
        case Jo:
        case jc:
          return e & fo;
        case Ri:
        case Fc:
        case ls:
        case Hc:
        case Vc:
          return e & el;
        case Yl:
          return Yl;
        case Gl:
          return Gl;
        case po:
          return po;
        case Ir:
          return Ir;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function us(e, t) {
      var a = e.pendingLanes;
      if (a === te)
        return te;
      var i = te, u = e.suspendedLanes, c = e.pingedLanes, v = a & Ic;
      if (v !== te) {
        var y = v & ~u;
        if (y !== te)
          i = Ql(y);
        else {
          var E = v & c;
          E !== te && (i = Ql(E));
        }
      } else {
        var R = a & ~u;
        R !== te ? i = Ql(R) : c !== te && (i = Ql(c));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === te) {
        var _ = Dn(i), F = Dn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= F || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === en && (F & fo) !== te
        )
          return t;
      }
      (i & ia) !== te && (i |= a & en);
      var P = e.entangledLanes;
      if (P !== te)
        for (var Y = e.entanglements, G = i & P; G > 0; ) {
          var Z = vo(G), De = 1 << Z;
          i |= Y[Z], G &= ~De;
        }
      return i;
    }
    function xh(e, t) {
      for (var a = e.eventTimes, i = Gt; t > 0; ) {
        var u = vo(t), c = 1 << u, v = a[u];
        v > i && (i = v), t &= ~c;
      }
      return i;
    }
    function Wc(e, t) {
      switch (e) {
        case Je:
        case ai:
        case ia:
          return t + 250;
        case Xo:
        case en:
        case qo:
        case Ko:
        case ba:
        case Vr:
        case Zo:
        case is:
        case os:
        case kc:
        case Mc:
        case Nc:
        case Lc:
        case Ac:
        case zc:
        case Uc:
        case Pc:
        case Jo:
        case jc:
          return t + 5e3;
        case Ri:
        case Fc:
        case ls:
        case Hc:
        case Vc:
          return Gt;
        case Yl:
        case Gl:
        case po:
        case Ir:
          return Gt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Gt;
      }
    }
    function Rg(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, c = e.expirationTimes, v = a; v > 0; ) {
        var y = vo(v), E = 1 << y, R = c[y];
        R === Gt ? ((E & i) === te || (E & u) !== te) && (c[y] = Wc(E, t)) : R <= t && (e.expiredLanes |= E), v &= ~E;
      }
    }
    function _g(e) {
      return Ql(e.pendingLanes);
    }
    function Bd(e) {
      var t = e.pendingLanes & ~Ir;
      return t !== te ? t : t & Ir ? Ir : te;
    }
    function Xl(e) {
      return (e & Je) !== te;
    }
    function ss(e) {
      return (e & Ic) !== te;
    }
    function Yc(e) {
      return (e & el) === e;
    }
    function Dg(e) {
      var t = Je | ia | en;
      return (e & t) === te;
    }
    function Rh(e) {
      return (e & fo) === e;
    }
    function cs(e, t) {
      var a = ai | ia | Xo | en;
      return (t & a) !== te;
    }
    function _h(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function $d(e) {
      return (e & fo) !== te;
    }
    function Wd() {
      var e = Bc;
      return Bc <<= 1, (Bc & fo) === te && (Bc = Ko), e;
    }
    function Og() {
      var e = $c;
      return $c <<= 1, ($c & el) === te && ($c = Ri), e;
    }
    function Dn(e) {
      return e & -e;
    }
    function Un(e) {
      return Dn(e);
    }
    function vo(e) {
      return 31 - Dc(e);
    }
    function Gc(e) {
      return vo(e);
    }
    function Br(e, t) {
      return (e & t) !== te;
    }
    function tl(e, t) {
      return (e & t) === t;
    }
    function ft(e, t) {
      return e | t;
    }
    function ql(e, t) {
      return e & ~t;
    }
    function Yd(e, t) {
      return e & t;
    }
    function Dh(e) {
      return e;
    }
    function Oh(e, t) {
      return e !== xt && e < t ? e : t;
    }
    function Qc(e) {
      for (var t = [], a = 0; a < Jt; a++)
        t.push(e);
      return t;
    }
    function nl(e, t, a) {
      e.pendingLanes |= t, t !== po && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function Gd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = vo(i), c = 1 << u;
        a[u] = Gt, i &= ~c;
      }
    }
    function Qd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Xd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, c = e.expirationTimes, v = a; v > 0; ) {
        var y = vo(v), E = 1 << y;
        i[y] = te, u[y] = Gt, c[y] = Gt, v &= ~E;
      }
    }
    function Kl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var c = vo(u), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), u &= ~v;
      }
    }
    function kg(e, t) {
      var a = Dn(t), i;
      switch (a) {
        case ia:
          i = ai;
          break;
        case en:
          i = Xo;
          break;
        case Ko:
        case ba:
        case Vr:
        case Zo:
        case is:
        case os:
        case kc:
        case Mc:
        case Nc:
        case Lc:
        case Ac:
        case zc:
        case Uc:
        case Pc:
        case Jo:
        case jc:
        case Ri:
        case Fc:
        case ls:
        case Hc:
        case Vc:
          i = qo;
          break;
        case po:
          i = Gl;
          break;
        default:
          i = xt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== xt ? xt : i;
    }
    function qd(e, t, a) {
      if (er)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), c = 1 << u, v = i[u];
          v.add(t), a &= ~c;
        }
    }
    function Xc(e, t) {
      if (er)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gc(t), c = 1 << u, v = a[u];
          v.size > 0 && (v.forEach(function(y) {
            var E = y.alternate;
            (E === null || !i.has(E)) && i.add(y);
          }), v.clear()), t &= ~c;
        }
    }
    function Kd(e, t) {
      return null;
    }
    var dr = Je, tr = ia, _i = en, fs = po, rl = xt;
    function xa() {
      return rl;
    }
    function Pn(e) {
      rl = e;
    }
    function ds(e, t) {
      var a = rl;
      try {
        return rl = e, t();
      } finally {
        rl = a;
      }
    }
    function pr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Mg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Zd(e, t) {
      return e !== 0 && e < t;
    }
    function ps(e) {
      var t = Dn(e);
      return Zd(dr, t) ? Zd(tr, t) ? ss(t) ? _i : fs : tr : dr;
    }
    function jn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var kh;
    function ke(e) {
      kh = e;
    }
    function Zl(e) {
      kh(e);
    }
    var vs;
    function Mh(e) {
      vs = e;
    }
    var Nh;
    function hs(e) {
      Nh = e;
    }
    var ms;
    function Jd(e) {
      ms = e;
    }
    var ep;
    function Lh(e) {
      ep = e;
    }
    var qc = !1, Jl = [], ii = null, on = null, Xn = null, Ra = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new Map(), Di = [], Qa = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ah(e) {
      return Qa.indexOf(e) > -1;
    }
    function oi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function zh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ii = null;
          break;
        case "dragenter":
        case "dragleave":
          on = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ra.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          eu.delete(i);
          break;
        }
      }
    }
    function tu(e, t, a, i, u, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = oi(t, a, i, u, c);
        if (t !== null) {
          var y = du(t);
          y !== null && vs(y);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function Uh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var c = u;
          return ii = tu(ii, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var v = u;
          return on = tu(on, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var y = u;
          return Xn = tu(Xn, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var E = u, R = E.pointerId;
          return Ra.set(R, tu(Ra.get(R) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var _ = u, F = _.pointerId;
          return eu.set(F, tu(eu.get(F) || null, e, t, a, i, _)), !0;
        }
      }
      return !1;
    }
    function tp(e) {
      var t = xs(e.target);
      if (t !== null) {
        var a = na(t);
        if (a !== null) {
          var i = a.tag;
          if (i === K) {
            var u = kd(a);
            if (u !== null) {
              e.blockedOn = u, ep(e.priority, function() {
                Nh(a);
              });
              return;
            }
          } else if (i === O) {
            var c = a.stateNode;
            if (jn(c)) {
              e.blockedOn = gc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ph(e) {
      for (var t = ms(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Di.length && Zd(t, Di[i].priority); i++)
        ;
      Di.splice(i, 0, a), i === 0 && tp(a);
    }
    function Kc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = al(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, c = new u.constructor(u.type, u);
          Xu(c), u.target.dispatchEvent(c), Cg();
        } else {
          var v = du(i);
          return v !== null && vs(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ys(e, t, a) {
      Kc(e) && a.delete(t);
    }
    function np() {
      qc = !1, ii !== null && Kc(ii) && (ii = null), on !== null && Kc(on) && (on = null), Xn !== null && Kc(Xn) && (Xn = null), Ra.forEach(ys), eu.forEach(ys);
    }
    function vr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, qc || (qc = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, np)));
    }
    function Ct(e) {
      if (Jl.length > 0) {
        vr(Jl[0], e);
        for (var t = 1; t < Jl.length; t++) {
          var a = Jl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ii !== null && vr(ii, e), on !== null && vr(on, e), Xn !== null && vr(Xn, e);
      var i = function(y) {
        return vr(y, e);
      };
      Ra.forEach(i), eu.forEach(i);
      for (var u = 0; u < Di.length; u++) {
        var c = Di[u];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; Di.length > 0; ) {
        var v = Di[0];
        if (v.blockedOn !== null)
          break;
        tp(v), v.blockedOn === null && Di.shift();
      }
    }
    var cn = d.ReactCurrentBatchConfig, hn = !0;
    function qn(e) {
      hn = !!e;
    }
    function oa() {
      return hn;
    }
    function nu(e, t, a) {
      var i = Cr(t), u;
      switch (i) {
        case dr:
          u = Fn;
          break;
        case tr:
          u = gs;
          break;
        case _i:
        default:
          u = Oi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Fn(e, t, a, i) {
      var u = xa(), c = cn.transition;
      cn.transition = null;
      try {
        Pn(dr), Oi(e, t, a, i);
      } finally {
        Pn(u), cn.transition = c;
      }
    }
    function gs(e, t, a, i) {
      var u = xa(), c = cn.transition;
      cn.transition = null;
      try {
        Pn(tr), Oi(e, t, a, i);
      } finally {
        Pn(u), cn.transition = c;
      }
    }
    function Oi(e, t, a, i) {
      hn && Zc(e, t, a, i);
    }
    function Zc(e, t, a, i) {
      var u = al(e, t, a, i);
      if (u === null) {
        Kg(e, t, i, ru, a), zh(e, i);
        return;
      }
      if (Uh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (zh(e, i), t & Ho && Ah(e)) {
        for (; u !== null; ) {
          var c = du(u);
          c !== null && Zl(c);
          var v = al(e, t, a, i);
          if (v === null && Kg(e, t, i, ru, a), v === u)
            break;
          u = v;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Kg(e, t, i, null, a);
    }
    var ru = null;
    function al(e, t, a, i) {
      ru = null;
      var u = pc(i), c = xs(u);
      if (c !== null) {
        var v = na(c);
        if (v === null)
          c = null;
        else {
          var y = v.tag;
          if (y === K) {
            var E = kd(v);
            if (E !== null)
              return E;
            c = null;
          } else if (y === O) {
            var R = v.stateNode;
            if (jn(R))
              return gc(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return ru = c, null;
    }
    function Cr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return dr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return tr;
        case "message": {
          var t = Ld();
          switch (t) {
            case Tc:
              return dr;
            case aa:
              return tr;
            case ri:
            case wc:
              return _i;
            case io:
              return fs;
            default:
              return _i;
          }
        }
        default:
          return _i;
      }
    }
    function rp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function au(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ki(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Jc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var il = null, li = null, ho = null;
    function mo(e) {
      return il = e, li = tf(), !0;
    }
    function ef() {
      il = null, li = null, ho = null;
    }
    function iu() {
      if (ho)
        return ho;
      var e, t = li, a = t.length, i, u = tf(), c = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === u[c - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return ho = u.slice(e, y), ho;
    }
    function tf() {
      return "value" in il ? il.value : il.textContent;
    }
    function ol(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ll() {
      return !0;
    }
    function hr() {
      return !1;
    }
    function On(e) {
      function t(a, i, u, c, v) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var E = e[y];
            E ? this[y] = E(c) : this[y] = c[y];
          }
        var R = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return R ? this.isDefaultPrevented = ll : this.isDefaultPrevented = hr, this.isPropagationStopped = hr, this;
      }
      return Et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ll);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ll);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ll
      }), t;
    }
    var mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, yr = On(mr), ou = Et({}, mr, {
      view: 0,
      detail: 0
    }), ap = On(ou), Ss, ip, _a;
    function jh(e) {
      e !== _a && (_a && e.type === "mousemove" ? (Ss = e.screenX - _a.screenX, ip = e.screenY - _a.screenY) : (Ss = 0, ip = 0), _a = e);
    }
    var lu = Et({}, ou, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: af,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (jh(e), Ss);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ip;
      }
    }), yo = On(lu), op = Et({}, lu, {
      dataTransfer: 0
    }), ul = On(op), Fh = Et({}, ou, {
      relatedTarget: 0
    }), nf = On(Fh), lp = Et({}, mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rf = On(lp), Ng = Et({}, mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Lg = On(Ng), Hh = Et({}, mr, {
      data: 0
    }), up = On(Hh), sl = up, Ag = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, uu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Vh(e) {
      if (e.key) {
        var t = Ag[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ol(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? uu[e.keyCode] || "Unidentified" : "";
    }
    var mn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function zg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = mn[e];
      return i ? !!a[i] : !1;
    }
    function af(e) {
      return zg;
    }
    var Ug = Et({}, ou, {
      key: Vh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: af,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ol(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Pg = On(Ug), Ih = Et({}, lu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), sp = On(Ih), jg = Et({}, ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: af
    }), Da = On(jg), cp = Et({}, mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fg = On(cp), go = Et({}, lu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), of = On(go), cl = [9, 13, 27, 32], Es = 229, Cs = Be && "CompositionEvent" in window, fl = null;
    Be && "documentMode" in document && (fl = document.documentMode);
    var Hg = Be && "TextEvent" in window && !fl, lf = Be && (!Cs || fl && fl > 8 && fl <= 11), Bh = 32, fp = String.fromCharCode(Bh);
    function $h() {
      ye("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ye("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ye("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ye("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ts = !1;
    function uf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Wh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dp(e, t) {
      return e === "keydown" && t.keyCode === Es;
    }
    function Yh(e, t) {
      switch (e) {
        case "keyup":
          return cl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Es;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function sf(e) {
      return e.locale === "ko";
    }
    var Mi = !1;
    function vp(e, t, a, i, u) {
      var c, v;
      if (Cs ? c = Wh(t) : Mi ? Yh(t, i) && (c = "onCompositionEnd") : dp(t, i) && (c = "onCompositionStart"), !c)
        return null;
      lf && !sf(i) && (!Mi && c === "onCompositionStart" ? Mi = mo(u) : c === "onCompositionEnd" && Mi && (v = iu()));
      var y = Kh(a, c);
      if (y.length > 0) {
        var E = new up(c, t, null, i, u);
        if (e.push({
          event: E,
          listeners: y
        }), v)
          E.data = v;
        else {
          var R = pp(i);
          R !== null && (E.data = R);
        }
      }
    }
    function cf(e, t) {
      switch (e) {
        case "compositionend":
          return pp(t);
        case "keypress":
          var a = t.which;
          return a !== Bh ? null : (Ts = !0, fp);
        case "textInput":
          var i = t.data;
          return i === fp && Ts ? null : i;
        default:
          return null;
      }
    }
    function Gh(e, t) {
      if (Mi) {
        if (e === "compositionend" || !Cs && Yh(e, t)) {
          var a = iu();
          return ef(), Mi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!uf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return lf && !sf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Vg(e, t, a, i, u) {
      var c;
      if (Hg ? c = cf(t, i) : c = Gh(t, i), !c)
        return null;
      var v = Kh(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new sl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: y,
          listeners: v
        }), y.data = c;
      }
    }
    function ff(e, t, a, i, u, c, v) {
      vp(e, t, a, i, u), Vg(e, t, a, i, u);
    }
    var Ig = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function su(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ig[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Bg(e) {
      if (!Be)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function df() {
      ye("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      vc(i);
      var u = Kh(t, "onChange");
      if (u.length > 0) {
        var c = new yr("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: u
        });
      }
    }
    var r = null, o = null;
    function s(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, o, e, pc(e)), Td(h, t);
    }
    function h(e) {
      qC(e, 0);
    }
    function C(e) {
      var t = gf(e);
      if (Lv(t))
        return e;
    }
    function k(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    Be && (z = Bg("input") && (!document.documentMode || document.documentMode > 9));
    function X(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", le);
    }
    function ie() {
      r && (r.detachEvent("onpropertychange", le), r = null, o = null);
    }
    function le(e) {
      e.propertyName === "value" && C(o) && p(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (ie(), X(t, a)) : e === "focusout" && ie();
    }
    function xe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(o);
    }
    function Me(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ae(e, t) {
      if (e === "click")
        return C(t);
    }
    function Cn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ki(e, "number", e.value);
    }
    function j(e, t, a, i, u, c, v) {
      var y = a ? gf(a) : window, E, R;
      if (s(y) ? E = k : su(y) ? z ? E = Cn : (E = xe, R = ae) : Me(y) && (E = Ae), E) {
        var _ = E(t, a);
        if (_) {
          n(e, _, i, u);
          return;
        }
      }
      R && R(t, y, a), t === "focusout" && H(y);
    }
    function W() {
      nt("onMouseEnter", ["mouseout", "mouseover"]), nt("onMouseLeave", ["mouseout", "mouseover"]), nt("onPointerEnter", ["pointerout", "pointerover"]), nt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function de(e, t, a, i, u, c, v) {
      var y = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (y && !ch(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (xs(R) || Dp(R)))
          return;
      }
      if (!(!E && !y)) {
        var _;
        if (u.window === u)
          _ = u;
        else {
          var F = u.ownerDocument;
          F ? _ = F.defaultView || F.parentWindow : _ = window;
        }
        var P, Y;
        if (E) {
          var G = i.relatedTarget || i.toElement;
          if (P = a, Y = G ? xs(G) : null, Y !== null) {
            var Z = na(Y);
            (Y !== Z || Y.tag !== A && Y.tag !== N) && (Y = null);
          }
        } else
          P = null, Y = a;
        if (P !== Y) {
          var De = yo, Ge = "onMouseLeave", Ue = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = sp, Ge = "onPointerLeave", Ue = "onPointerEnter", _t = "pointer");
          var Tt = P == null ? _ : gf(P), I = Y == null ? _ : gf(Y), J = new De(Ge, _t + "leave", P, i, u);
          J.target = Tt, J.relatedTarget = I;
          var B = null, se = xs(u);
          if (se === a) {
            var Oe = new De(Ue, _t + "enter", Y, i, u);
            Oe.target = I, Oe.relatedTarget = Tt, B = Oe;
          }
          MR(e, J, B, P, Y);
        }
      }
    }
    function ze(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ne = typeof Object.is == "function" ? Object.is : ze;
    function Ve(e, t) {
      if (Ne(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var c = a[u];
        if (!He.call(t, c) || !Ne(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function at(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Kn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function kt(e, t) {
      for (var a = at(e), i = 0, u = 0; a; ) {
        if (a.nodeType === gi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = at(Kn(a));
      }
    }
    function So(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, c = i.anchorOffset, v = i.focusNode, y = i.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return $g(e, u, c, v, y);
    }
    function $g(e, t, a, i, u) {
      var c = 0, v = -1, y = -1, E = 0, R = 0, _ = e, F = null;
      e:
        for (; ; ) {
          for (var P = null; _ === t && (a === 0 || _.nodeType === gi) && (v = c + a), _ === i && (u === 0 || _.nodeType === gi) && (y = c + u), _.nodeType === gi && (c += _.nodeValue.length), (P = _.firstChild) !== null; )
            F = _, _ = P;
          for (; ; ) {
            if (_ === e)
              break e;
            if (F === t && ++E === a && (v = c), F === i && ++R === u && (y = c), (P = _.nextSibling) !== null)
              break;
            _ = F, F = _.parentNode;
          }
          _ = P;
        }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function dR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), y = t.end === void 0 ? v : Math.min(t.end, c);
        if (!u.extend && v > y) {
          var E = y;
          y = v, v = E;
        }
        var R = kt(e, v), _ = kt(e, y);
        if (R && _) {
          if (u.rangeCount === 1 && u.anchorNode === R.node && u.anchorOffset === R.offset && u.focusNode === _.node && u.focusOffset === _.offset)
            return;
          var F = a.createRange();
          F.setStart(R.node, R.offset), u.removeAllRanges(), v > y ? (u.addRange(F), u.extend(_.node, _.offset)) : (F.setEnd(_.node, _.offset), u.addRange(F));
        }
      }
    }
    function jC(e) {
      return e && e.nodeType === gi;
    }
    function FC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : jC(e) ? !1 : jC(t) ? FC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function pR(e) {
      return e && e.ownerDocument && FC(e.ownerDocument.documentElement, e);
    }
    function vR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function HC() {
      for (var e = window, t = ec(); t instanceof e.HTMLIFrameElement; ) {
        if (vR(t))
          e = t.contentWindow;
        else
          return t;
        t = ec(e.document);
      }
      return t;
    }
    function Wg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function hR() {
      var e = HC();
      return {
        focusedElem: e,
        selectionRange: Wg(e) ? yR(e) : null
      };
    }
    function mR(e) {
      var t = HC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && pR(a)) {
        i !== null && Wg(a) && gR(a, i);
        for (var u = [], c = a; c = c.parentNode; )
          c.nodeType === zr && u.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < u.length; v++) {
          var y = u[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function yR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = So(e), t || {
        start: 0,
        end: 0
      };
    }
    function gR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : dR(e, t);
    }
    var SR = Be && "documentMode" in document && document.documentMode <= 11;
    function ER() {
      ye("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var pf = null, Yg = null, hp = null, Gg = !1;
    function CR(e) {
      if ("selectionStart" in e && Wg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function TR(e) {
      return e.window === e ? e.document : e.nodeType === $a ? e : e.ownerDocument;
    }
    function VC(e, t, a) {
      var i = TR(a);
      if (!(Gg || pf == null || pf !== ec(i))) {
        var u = CR(pf);
        if (!hp || !Ve(hp, u)) {
          hp = u;
          var c = Kh(Yg, "onSelect");
          if (c.length > 0) {
            var v = new yr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: c
            }), v.target = pf;
          }
        }
      }
    }
    function wR(e, t, a, i, u, c, v) {
      var y = a ? gf(a) : window;
      switch (t) {
        case "focusin":
          (su(y) || y.contentEditable === "true") && (pf = y, Yg = a, hp = null);
          break;
        case "focusout":
          pf = null, Yg = null, hp = null;
          break;
        case "mousedown":
          Gg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gg = !1, VC(e, i, u);
          break;
        case "selectionchange":
          if (SR)
            break;
        case "keydown":
        case "keyup":
          VC(e, i, u);
      }
    }
    function Qh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var vf = {
      animationend: Qh("Animation", "AnimationEnd"),
      animationiteration: Qh("Animation", "AnimationIteration"),
      animationstart: Qh("Animation", "AnimationStart"),
      transitionend: Qh("Transition", "TransitionEnd")
    }, Qg = {}, IC = {};
    Be && (IC = document.createElement("div").style, "AnimationEvent" in window || (delete vf.animationend.animation, delete vf.animationiteration.animation, delete vf.animationstart.animation), "TransitionEvent" in window || delete vf.transitionend.transition);
    function Xh(e) {
      if (Qg[e])
        return Qg[e];
      if (!vf[e])
        return e;
      var t = vf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in IC)
          return Qg[e] = t[a];
      return e;
    }
    var BC = Xh("animationend"), $C = Xh("animationiteration"), WC = Xh("animationstart"), YC = Xh("transitionend"), GC = /* @__PURE__ */ new Map(), QC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function cu(e, t) {
      GC.set(e, t), ye(t, [e]);
    }
    function bR() {
      for (var e = 0; e < QC.length; e++) {
        var t = QC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        cu(a, "on" + i);
      }
      cu(BC, "onAnimationEnd"), cu($C, "onAnimationIteration"), cu(WC, "onAnimationStart"), cu("dblclick", "onDoubleClick"), cu("focusin", "onFocus"), cu("focusout", "onBlur"), cu(YC, "onTransitionEnd");
    }
    function xR(e, t, a, i, u, c, v) {
      var y = GC.get(t);
      if (y !== void 0) {
        var E = yr, R = t;
        switch (t) {
          case "keypress":
            if (ol(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = Pg;
            break;
          case "focusin":
            R = "focus", E = nf;
            break;
          case "focusout":
            R = "blur", E = nf;
            break;
          case "beforeblur":
          case "afterblur":
            E = nf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = yo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = ul;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Da;
            break;
          case BC:
          case $C:
          case WC:
            E = rf;
            break;
          case YC:
            E = Fg;
            break;
          case "scroll":
            E = ap;
            break;
          case "wheel":
            E = of;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Lg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = sp;
            break;
        }
        var _ = (c & Ho) !== 0;
        {
          var F = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", P = OR(a, y, i.type, _, F);
          if (P.length > 0) {
            var Y = new E(y, R, null, i, u);
            e.push({
              event: Y,
              listeners: P
            });
          }
        }
      }
    }
    bR(), W(), df(), ER(), $h();
    function RR(e, t, a, i, u, c, v) {
      xR(e, t, a, i, u, c);
      var y = (c & Eg) === 0;
      y && (de(e, t, a, i, u), j(e, t, a, i, u), wR(e, t, a, i, u), ff(e, t, a, i, u));
    }
    var mp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Xg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(mp));
    function XC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ti(i, t, void 0, e), e.currentTarget = null;
    }
    function _R(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var c = t[u], v = c.instance, y = c.currentTarget, E = c.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          XC(e, E, y), i = v;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var _ = t[R], F = _.instance, P = _.currentTarget, Y = _.listener;
          if (F !== i && e.isPropagationStopped())
            return;
          XC(e, Y, P), i = F;
        }
    }
    function qC(e, t) {
      for (var a = (t & Ho) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], c = u.event, v = u.listeners;
        _R(c, v, a);
      }
      Rd();
    }
    function DR(e, t, a, i, u) {
      var c = pc(a), v = [];
      RR(v, e, i, a, c, t), qC(v, t);
    }
    function fn(e, t) {
      Xg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = aD(t), u = NR(e, a);
      i.has(u) || (KC(t, e, Gu, a), i.add(u));
    }
    function qg(e, t, a) {
      Xg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ho), KC(a, e, i, t);
    }
    var qh = "_reactListening" + Math.random().toString(36).slice(2);
    function yp(e) {
      if (!e[qh]) {
        e[qh] = !0, bn.forEach(function(a) {
          a !== "selectionchange" && (Xg.has(a) || qg(a, !1, e), qg(a, !0, e));
        });
        var t = e.nodeType === $a ? e : e.ownerDocument;
        t !== null && (t[qh] || (t[qh] = !0, qg("selectionchange", !1, t)));
      }
    }
    function KC(e, t, a, i, u) {
      var c = nu(e, t, a), v = void 0;
      Zu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? ki(e, t, c, v) : au(e, t, c) : v !== void 0 ? Jc(e, t, c, v) : rp(e, t, c);
    }
    function ZC(e, t) {
      return e === t || e.nodeType === _n && e.parentNode === t;
    }
    function Kg(e, t, a, i, u) {
      var c = i;
      if (!(t & Ei) && !(t & Gu)) {
        var v = u;
        if (i !== null) {
          var y = i;
          e:
            for (; ; ) {
              if (y === null)
                return;
              var E = y.tag;
              if (E === O || E === L) {
                var R = y.stateNode.containerInfo;
                if (ZC(R, v))
                  break;
                if (E === L)
                  for (var _ = y.return; _ !== null; ) {
                    var F = _.tag;
                    if (F === O || F === L) {
                      var P = _.stateNode.containerInfo;
                      if (ZC(P, v))
                        return;
                    }
                    _ = _.return;
                  }
                for (; R !== null; ) {
                  var Y = xs(R);
                  if (Y === null)
                    return;
                  var G = Y.tag;
                  if (G === A || G === N) {
                    y = c = Y;
                    continue e;
                  }
                  R = R.parentNode;
                }
              }
              y = y.return;
            }
        }
      }
      Td(function() {
        return DR(e, t, a, c);
      });
    }
    function gp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function OR(e, t, a, i, u, c) {
      for (var v = t !== null ? t + "Capture" : null, y = i ? v : t, E = [], R = e, _ = null; R !== null; ) {
        var F = R, P = F.stateNode, Y = F.tag;
        if (Y === A && P !== null && (_ = P, y !== null)) {
          var G = Io(R, y);
          G != null && E.push(gp(R, G, _));
        }
        if (u)
          break;
        R = R.return;
      }
      return E;
    }
    function Kh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var c = u, v = c.stateNode, y = c.tag;
        if (y === A && v !== null) {
          var E = v, R = Io(u, a);
          R != null && i.unshift(gp(u, R, E));
          var _ = Io(u, t);
          _ != null && i.push(gp(u, _, E));
        }
        u = u.return;
      }
      return i;
    }
    function hf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== A);
      return e || null;
    }
    function kR(e, t) {
      for (var a = e, i = t, u = 0, c = a; c; c = hf(c))
        u++;
      for (var v = 0, y = i; y; y = hf(y))
        v++;
      for (; u - v > 0; )
        a = hf(a), u--;
      for (; v - u > 0; )
        i = hf(i), v--;
      for (var E = u; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = hf(a), i = hf(i);
      }
      return null;
    }
    function JC(e, t, a, i, u) {
      for (var c = t._reactName, v = [], y = a; y !== null && y !== i; ) {
        var E = y, R = E.alternate, _ = E.stateNode, F = E.tag;
        if (R !== null && R === i)
          break;
        if (F === A && _ !== null) {
          var P = _;
          if (u) {
            var Y = Io(y, c);
            Y != null && v.unshift(gp(y, Y, P));
          } else if (!u) {
            var G = Io(y, c);
            G != null && v.push(gp(y, G, P));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function MR(e, t, a, i, u) {
      var c = i && u ? kR(i, u) : null;
      i !== null && JC(e, t, i, c, !1), u !== null && a !== null && JC(e, a, u, c, !0);
    }
    function NR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Oa = !1, Sp = "dangerouslySetInnerHTML", Zh = "suppressContentEditableWarning", fu = "suppressHydrationWarning", eT = "autoFocus", ws = "children", bs = "style", Jh = "__html", Zg, em, Ep, tT, tm, nT, rT;
    Zg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, em = function(e, t) {
      dc(e, t), yd(e, t), sh(e, t, {
        registrationNameDependencies: Ln,
        possibleRegistrationNames: ue
      });
    }, nT = Be && !document.documentMode, Ep = function(e, t, a) {
      if (!Oa) {
        var i = nm(a), u = nm(t);
        u !== i && (Oa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, tT = function(e) {
      if (!Oa) {
        Oa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, tm = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, rT = function(e, t) {
      var a = e.namespaceURI === yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LR = /\r\n?/g, AR = /\u0000|\uFFFD/g;
    function nm(e) {
      Ut(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LR, `
`).replace(AR, "");
    }
    function rm(e, t, a, i) {
      var u = nm(t), c = nm(e);
      if (c !== u && (i && (Oa || (Oa = !0, g('Text content did not match. Server: "%s" Client: "%s"', c, u))), a && Nn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function aT(e) {
      return e.nodeType === $a ? e : e.ownerDocument;
    }
    function zR() {
    }
    function am(e) {
      e.onclick = zR;
    }
    function UR(e, t, a, i, u) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === bs)
            v && Object.freeze(v), Jv(t, v);
          else if (c === Sp) {
            var y = v ? v[Jh] : void 0;
            y != null && Iv(t, y);
          } else if (c === ws)
            if (typeof v == "string") {
              var E = e !== "textarea" || v !== "";
              E && uc(t, v);
            } else
              typeof v == "number" && uc(t, "" + v);
          else
            c === Zh || c === fu || c === eT || (Ln.hasOwnProperty(c) ? v != null && (typeof v != "function" && tm(c, v), c === "onScroll" && fn("scroll", t)) : v != null && ei(t, c, v, u));
        }
    }
    function PR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var c = t[u], v = t[u + 1];
        c === bs ? Jv(e, v) : c === Sp ? Iv(e, v) : c === ws ? uc(e, v) : ei(e, c, v, i);
      }
    }
    function jR(e, t, a, i) {
      var u, c = aT(a), v, y = i;
      if (y === yi && (y = oc(e)), y === yi) {
        if (u = Si(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = c.createElement("div");
          E.innerHTML = "<script><\/script>";
          var R = E.firstChild;
          v = E.removeChild(R);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var _ = v;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        v = c.createElementNS(y, e);
      return y === yi && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !He.call(Zg, e) && (Zg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function FR(e, t) {
      return aT(t).createTextNode(e);
    }
    function HR(e, t, a, i) {
      var u = Si(t, a);
      em(t, a);
      var c;
      switch (t) {
        case "dialog":
          fn("cancel", e), fn("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          fn("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < mp.length; v++)
            fn(mp[v], e);
          c = a;
          break;
        case "source":
          fn("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          fn("error", e), fn("load", e), c = a;
          break;
        case "details":
          fn("toggle", e), c = a;
          break;
        case "input":
          Vu(e, a), c = Hu(e, a), fn("invalid", e);
          break;
        case "option":
          ac(e, a), c = a;
          break;
        case "select":
          jv(e, a), c = od(e, a), fn("invalid", e);
          break;
        case "textarea":
          Fv(e, a), c = ud(e, a), fn("invalid", e);
          break;
        default:
          c = a;
      }
      switch (cc(t, c), UR(t, e, i, c, u), t) {
        case "input":
          Po(e), Iu(e, a, !1);
          break;
        case "textarea":
          Po(e), Vv(e);
          break;
        case "option":
          id(e, a);
          break;
        case "select":
          sg(e, a);
          break;
        default:
          typeof c.onClick == "function" && am(e);
          break;
      }
    }
    function VR(e, t, a, i, u) {
      em(t, i);
      var c = null, v, y;
      switch (t) {
        case "input":
          v = Hu(e, a), y = Hu(e, i), c = [];
          break;
        case "select":
          v = od(e, a), y = od(e, i), c = [];
          break;
        case "textarea":
          v = ud(e, a), y = ud(e, i), c = [];
          break;
        default:
          v = a, y = i, typeof v.onClick != "function" && typeof y.onClick == "function" && am(e);
          break;
      }
      cc(t, y);
      var E, R, _ = null;
      for (E in v)
        if (!(y.hasOwnProperty(E) || !v.hasOwnProperty(E) || v[E] == null))
          if (E === bs) {
            var F = v[E];
            for (R in F)
              F.hasOwnProperty(R) && (_ || (_ = {}), _[R] = "");
          } else
            E === Sp || E === ws || E === Zh || E === fu || E === eT || (Ln.hasOwnProperty(E) ? c || (c = []) : (c = c || []).push(E, null));
      for (E in y) {
        var P = y[E], Y = v != null ? v[E] : void 0;
        if (!(!y.hasOwnProperty(E) || P === Y || P == null && Y == null))
          if (E === bs)
            if (P && Object.freeze(P), Y) {
              for (R in Y)
                Y.hasOwnProperty(R) && (!P || !P.hasOwnProperty(R)) && (_ || (_ = {}), _[R] = "");
              for (R in P)
                P.hasOwnProperty(R) && Y[R] !== P[R] && (_ || (_ = {}), _[R] = P[R]);
            } else
              _ || (c || (c = []), c.push(E, _)), _ = P;
          else if (E === Sp) {
            var G = P ? P[Jh] : void 0, Z = Y ? Y[Jh] : void 0;
            G != null && Z !== G && (c = c || []).push(E, G);
          } else
            E === ws ? (typeof P == "string" || typeof P == "number") && (c = c || []).push(E, "" + P) : E === Zh || E === fu || (Ln.hasOwnProperty(E) ? (P != null && (typeof P != "function" && tm(E, P), E === "onScroll" && fn("scroll", e)), !c && Y !== P && (c = [])) : (c = c || []).push(E, P));
      }
      return _ && (Wu(_, y[bs]), (c = c || []).push(bs, _)), c;
    }
    function IR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ad(e, u);
      var c = Si(a, i), v = Si(a, u);
      switch (PR(e, t, c, v), a) {
        case "input":
          Ll(e, u);
          break;
        case "textarea":
          Hv(e, u);
          break;
        case "select":
          cg(e, u);
          break;
      }
    }
    function BR(e) {
      {
        var t = e.toLowerCase();
        return fc.hasOwnProperty(t) && fc[t] || null;
      }
    }
    function $R(e, t, a, i, u, c, v) {
      var y, E;
      switch (y = Si(t, a), em(t, a), t) {
        case "dialog":
          fn("cancel", e), fn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          fn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < mp.length; R++)
            fn(mp[R], e);
          break;
        case "source":
          fn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          fn("error", e), fn("load", e);
          break;
        case "details":
          fn("toggle", e);
          break;
        case "input":
          Vu(e, a), fn("invalid", e);
          break;
        case "option":
          ac(e, a);
          break;
        case "select":
          jv(e, a), fn("invalid", e);
          break;
        case "textarea":
          Fv(e, a), fn("invalid", e);
          break;
      }
      cc(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, F = 0; F < _.length; F++) {
          var P = _[F].name.toLowerCase();
          switch (P) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(_[F].name);
          }
        }
      }
      var Y = null;
      for (var G in a)
        if (a.hasOwnProperty(G)) {
          var Z = a[G];
          if (G === ws)
            typeof Z == "string" ? e.textContent !== Z && (a[fu] !== !0 && rm(e.textContent, Z, c, v), Y = [ws, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[fu] !== !0 && rm(e.textContent, Z, c, v), Y = [ws, "" + Z]);
          else if (Ln.hasOwnProperty(G))
            Z != null && (typeof Z != "function" && tm(G, Z), G === "onScroll" && fn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var De = void 0, Ge = y && yn ? null : Zr(G);
            if (a[fu] !== !0) {
              if (!(G === Zh || G === fu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              G === "value" || G === "checked" || G === "selected")) {
                if (G === Sp) {
                  var Ue = e.innerHTML, _t = Z ? Z[Jh] : void 0;
                  if (_t != null) {
                    var Tt = rT(e, _t);
                    Tt !== Ue && Ep(G, Ue, Tt);
                  }
                } else if (G === bs) {
                  if (E.delete(G), nT) {
                    var I = gg(Z);
                    De = e.getAttribute("style"), I !== De && Ep(G, De, I);
                  }
                } else if (y && !yn)
                  E.delete(G.toLowerCase()), De = Ol(e, G, Z), Z !== De && Ep(G, De, Z);
                else if (!Sn(G, Ge, y) && !Qt(G, Z, Ge, y)) {
                  var J = !1;
                  if (Ge !== null)
                    E.delete(Ge.attributeName), De = Ao(e, G, Z, Ge);
                  else {
                    var B = i;
                    if (B === yi && (B = oc(t)), B === yi)
                      E.delete(G.toLowerCase());
                    else {
                      var se = BR(G);
                      se !== null && se !== G && (J = !0, E.delete(se)), E.delete(G);
                    }
                    De = Ol(e, G, Z);
                  }
                  var Oe = yn;
                  !Oe && Z !== De && !J && Ep(G, De, Z);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[fu] !== !0 && tT(E), t) {
        case "input":
          Po(e), Iu(e, a, !0);
          break;
        case "textarea":
          Po(e), Vv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && am(e);
          break;
      }
      return Y;
    }
    function WR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Jg(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function eS(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function tS(e, t, a) {
      {
        if (Oa)
          return;
        Oa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function nS(e, t) {
      {
        if (t === "" || Oa)
          return;
        Oa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YR(e, t, a) {
      switch (t) {
        case "input":
          Av(e, a);
          return;
        case "textarea":
          sd(e, a);
          return;
        case "select":
          fg(e, a);
          return;
      }
    }
    var Cp = function() {
    }, Tp = function() {
    };
    {
      var GR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], iT = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], QR = iT.concat(["button"]), XR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], oT = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Tp = function(e, t) {
        var a = Et({}, e || oT), i = {
          tag: t
        };
        return iT.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), GR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return XR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, KR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, lT = {};
      Cp = function(e, t, a) {
        a = a || oT;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = qR(e, u) ? null : i, v = c ? null : KR(e, a), y = c || v;
        if (y) {
          var E = y.tag, R = !!c + "|" + e + "|" + E;
          if (!lT[R]) {
            lT[R] = !0;
            var _ = e, F = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", c) {
              var P = "";
              E === "table" && e === "tr" && (P += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, E, F, P);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, E);
          }
        }
      };
    }
    var im = "suppressHydrationWarning", om = "$", lm = "/$", wp = "$?", bp = "$!", ZR = "style", rS = null, aS = null;
    function JR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $a:
        case jo: {
          t = i === $a ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : fd(null, "");
          break;
        }
        default: {
          var c = i === _n ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = fd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), E = Tp(null, y);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function e_(e, t, a) {
      {
        var i = e, u = fd(i.namespace, t), c = Tp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: c
        };
      }
    }
    function e2(e) {
      return e;
    }
    function t_(e) {
      rS = oa(), aS = hR();
      var t = null;
      return qn(!1), t;
    }
    function n_(e) {
      mR(aS), qn(rS), rS = null, aS = null;
    }
    function r_(e, t, a, i, u) {
      var c;
      {
        var v = i;
        if (Cp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, E = Tp(v.ancestorInfo, e);
          Cp(null, y, E);
        }
        c = v.namespace;
      }
      var R = jR(e, t, a, c);
      return _p(u, R), dS(R, t), R;
    }
    function a_(e, t) {
      e.appendChild(t);
    }
    function i_(e, t, a, i, u) {
      switch (HR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function o_(e, t, a, i, u, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, E = Tp(v.ancestorInfo, t);
          Cp(null, y, E);
        }
      }
      return VR(e, t, a, i);
    }
    function iS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function l_(e, t, a, i) {
      {
        var u = a;
        Cp(null, e, u.ancestorInfo);
      }
      var c = FR(e, t);
      return _p(i, c), c;
    }
    function u_() {
      var e = window.event;
      return e === void 0 ? _i : Cr(e.type);
    }
    var oS = typeof setTimeout == "function" ? setTimeout : void 0, s_ = typeof clearTimeout == "function" ? clearTimeout : void 0, lS = -1, uT = typeof Promise == "function" ? Promise : void 0, c_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof uT < "u" ? function(e) {
      return uT.resolve(null).then(e).catch(f_);
    } : oS;
    function f_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function d_(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function p_(e, t, a, i, u, c) {
      IR(e, t, a, i, u), dS(e, u);
    }
    function sT(e) {
      uc(e, "");
    }
    function v_(e, t, a) {
      e.nodeValue = a;
    }
    function h_(e, t) {
      e.appendChild(t);
    }
    function m_(e, t) {
      var a;
      e.nodeType === _n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && am(a);
    }
    function y_(e, t, a) {
      e.insertBefore(t, a);
    }
    function g_(e, t, a) {
      e.nodeType === _n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function S_(e, t) {
      e.removeChild(t);
    }
    function E_(e, t) {
      e.nodeType === _n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function uS(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === _n) {
          var c = u.data;
          if (c === lm)
            if (i === 0) {
              e.removeChild(u), Ct(t);
              return;
            } else
              i--;
          else
            (c === om || c === wp || c === bp) && i++;
        }
        a = u;
      } while (a);
      Ct(t);
    }
    function C_(e, t) {
      e.nodeType === _n ? uS(e.parentNode, t) : e.nodeType === zr && uS(e, t), Ct(e);
    }
    function T_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function w_(e) {
      e.nodeValue = "";
    }
    function b_(e, t) {
      e = e;
      var a = t[ZR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = sc("display", i);
    }
    function x_(e, t) {
      e.nodeValue = t;
    }
    function R_(e) {
      e.nodeType === zr ? e.textContent = "" : e.nodeType === $a && e.documentElement && e.removeChild(e.documentElement);
    }
    function __(e, t, a) {
      return e.nodeType !== zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function D_(e, t) {
      return t === "" || e.nodeType !== gi ? null : e;
    }
    function O_(e) {
      return e.nodeType !== _n ? null : e;
    }
    function cT(e) {
      return e.data === wp;
    }
    function sS(e) {
      return e.data === bp;
    }
    function k_(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function M_(e, t) {
      e._reactRetry = t;
    }
    function um(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === zr || t === gi)
          break;
        if (t === _n) {
          var a = e.data;
          if (a === om || a === bp || a === wp)
            break;
          if (a === lm)
            return null;
        }
      }
      return e;
    }
    function xp(e) {
      return um(e.nextSibling);
    }
    function N_(e) {
      return um(e.firstChild);
    }
    function L_(e) {
      return um(e.firstChild);
    }
    function A_(e) {
      return um(e.nextSibling);
    }
    function z_(e, t, a, i, u, c, v) {
      _p(c, e), dS(e, a);
      var y;
      {
        var E = u;
        y = E.namespace;
      }
      var R = (c.mode & gt) !== qe;
      return $R(e, t, a, y, i, R, v);
    }
    function U_(e, t, a, i) {
      return _p(a, e), a.mode & gt, WR(e, t);
    }
    function P_(e, t) {
      _p(t, e);
    }
    function j_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === _n) {
          var i = t.data;
          if (i === lm) {
            if (a === 0)
              return xp(t);
            a--;
          } else
            (i === om || i === bp || i === wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function fT(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === _n) {
          var i = t.data;
          if (i === om || i === bp || i === wp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === lm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function F_(e) {
      Ct(e);
    }
    function H_(e) {
      Ct(e);
    }
    function V_(e) {
      return e !== "head" && e !== "body";
    }
    function I_(e, t, a, i) {
      var u = !0;
      rm(t.nodeValue, a, i, u);
    }
    function B_(e, t, a, i, u, c) {
      if (t[im] !== !0) {
        var v = !0;
        rm(i.nodeValue, u, c, v);
      }
    }
    function $_(e, t) {
      t.nodeType === zr ? Jg(e, t) : t.nodeType === _n || eS(e, t);
    }
    function W_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === zr ? Jg(a, t) : t.nodeType === _n || eS(a, t));
      }
    }
    function Y_(e, t, a, i, u) {
      (u || t[im] !== !0) && (i.nodeType === zr ? Jg(a, i) : i.nodeType === _n || eS(a, i));
    }
    function G_(e, t, a) {
      tS(e, t);
    }
    function Q_(e, t) {
      nS(e, t);
    }
    function X_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && tS(i, t);
      }
    }
    function q_(e, t) {
      {
        var a = e.parentNode;
        a !== null && nS(a, t);
      }
    }
    function K_(e, t, a, i, u, c) {
      (c || t[im] !== !0) && tS(a, i);
    }
    function Z_(e, t, a, i, u) {
      (u || t[im] !== !0) && nS(a, i);
    }
    function J_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function eD(e) {
      yp(e);
    }
    var mf = Math.random().toString(36).slice(2), yf = "__reactFiber$" + mf, cS = "__reactProps$" + mf, Rp = "__reactContainer$" + mf, fS = "__reactEvents$" + mf, tD = "__reactListeners$" + mf, nD = "__reactHandles$" + mf;
    function rD(e) {
      delete e[yf], delete e[cS], delete e[fS], delete e[tD], delete e[nD];
    }
    function _p(e, t) {
      t[yf] = e;
    }
    function sm(e, t) {
      t[Rp] = e;
    }
    function dT(e) {
      e[Rp] = null;
    }
    function Dp(e) {
      return !!e[Rp];
    }
    function xs(e) {
      var t = e[yf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Rp] || a[yf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = fT(e); u !== null; ) {
              var c = u[yf];
              if (c)
                return c;
              u = fT(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function du(e) {
      var t = e[yf] || e[Rp];
      return t && (t.tag === A || t.tag === N || t.tag === K || t.tag === O) ? t : null;
    }
    function gf(e) {
      if (e.tag === A || e.tag === N)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function cm(e) {
      return e[cS] || null;
    }
    function dS(e, t) {
      e[cS] = t;
    }
    function aD(e) {
      var t = e[fS];
      return t === void 0 && (t = e[fS] = /* @__PURE__ */ new Set()), t;
    }
    var pT = {}, vT = d.ReactDebugCurrentFrame;
    function fm(e) {
      if (e) {
        var t = e._owner, a = Au(e.type, e._source, t ? t.type : null);
        vT.setExtraStackFrame(a);
      } else
        vT.setExtraStackFrame(null);
    }
    function Ni(e, t, a, i, u) {
      {
        var c = Function.call.bind(He);
        for (var v in e)
          if (c(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              y = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              y = R;
            }
            y && !(y instanceof Error) && (fm(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof y), fm(null)), y instanceof Error && !(y.message in pT) && (pT[y.message] = !0, fm(u), g("Failed %s type: %s", a, y.message), fm(null));
          }
      }
    }
    var pS = [], dm;
    dm = [];
    var dl = -1;
    function pu(e) {
      return {
        current: e
      };
    }
    function $r(e, t) {
      if (dl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== dm[dl] && g("Unexpected Fiber popped."), e.current = pS[dl], pS[dl] = null, dm[dl] = null, dl--;
    }
    function Wr(e, t, a) {
      dl++, pS[dl] = e.current, dm[dl] = a, e.current = t;
    }
    var vS;
    vS = {};
    var Xa = {};
    Object.freeze(Xa);
    var pl = pu(Xa), Eo = pu(!1), hS = Xa;
    function Sf(e, t, a) {
      return a && Co(t) ? hS : pl.current;
    }
    function hT(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ef(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Xa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var y = ut(e) || "Unknown";
          Ni(i, c, "context", y);
        }
        return u && hT(e, t, c), c;
      }
    }
    function pm() {
      return Eo.current;
    }
    function Co(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function vm(e) {
      $r(Eo, e), $r(pl, e);
    }
    function mS(e) {
      $r(Eo, e), $r(pl, e);
    }
    function mT(e, t, a) {
      {
        if (pl.current !== Xa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Wr(pl, t, e), Wr(Eo, a, e);
      }
    }
    function yT(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = ut(e) || "Unknown";
            vS[c] || (vS[c] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var y in v)
          if (!(y in u))
            throw new Error((ut(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var E = ut(e) || "Unknown";
          Ni(u, v, "child context", E);
        }
        return Et({}, a, v);
      }
    }
    function hm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Xa;
        return hS = pl.current, Wr(pl, a, e), Wr(Eo, Eo.current, e), !0;
      }
    }
    function gT(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = yT(e, t, hS);
          i.__reactInternalMemoizedMergedChildContext = u, $r(Eo, e), $r(pl, e), Wr(pl, u, e), Wr(Eo, a, e);
        } else
          $r(Eo, e), Wr(Eo, a, e);
      }
    }
    function iD(e) {
      {
        if (!Md(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case b: {
              var a = t.type;
              if (Co(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var vu = 0, mm = 1, vl = null, yS = !1, gS = !1;
    function ST(e) {
      vl === null ? vl = [e] : vl.push(e);
    }
    function oD(e) {
      yS = !0, ST(e);
    }
    function ET() {
      yS && hu();
    }
    function hu() {
      if (!gS && vl !== null) {
        gS = !0;
        var e = 0, t = xa();
        try {
          var a = !0, i = vl;
          for (Pn(dr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          vl = null, yS = !1;
        } catch (c) {
          throw vl !== null && (vl = vl.slice(e + 1)), Ec(Tc, hu), c;
        } finally {
          Pn(t), gS = !1;
        }
      }
      return null;
    }
    var Cf = [], Tf = 0, ym = null, gm = 0, ui = [], si = 0, Rs = null, hl = 1, ml = "";
    function lD(e) {
      return Ds(), (e.flags & Dd) !== We;
    }
    function uD(e) {
      return Ds(), gm;
    }
    function sD() {
      var e = ml, t = hl, a = t & ~cD(t);
      return a.toString(32) + e;
    }
    function _s(e, t) {
      Ds(), Cf[Tf++] = gm, Cf[Tf++] = ym, ym = e, gm = t;
    }
    function CT(e, t, a) {
      Ds(), ui[si++] = hl, ui[si++] = ml, ui[si++] = Rs, Rs = e;
      var i = hl, u = ml, c = Sm(i) - 1, v = i & ~(1 << c), y = a + 1, E = Sm(t) + c;
      if (E > 30) {
        var R = c - c % 5, _ = (1 << R) - 1, F = (v & _).toString(32), P = v >> R, Y = c - R, G = Sm(t) + Y, Z = y << Y, De = Z | P, Ge = F + u;
        hl = 1 << G | De, ml = Ge;
      } else {
        var Ue = y << c, _t = Ue | v, Tt = u;
        hl = 1 << E | _t, ml = Tt;
      }
    }
    function SS(e) {
      Ds();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        _s(e, a), CT(e, a, i);
      }
    }
    function Sm(e) {
      return 32 - Dc(e);
    }
    function cD(e) {
      return 1 << Sm(e) - 1;
    }
    function ES(e) {
      for (; e === ym; )
        ym = Cf[--Tf], Cf[Tf] = null, gm = Cf[--Tf], Cf[Tf] = null;
      for (; e === Rs; )
        Rs = ui[--si], ui[si] = null, ml = ui[--si], ui[si] = null, hl = ui[--si], ui[si] = null;
    }
    function fD() {
      return Ds(), Rs !== null ? {
        id: hl,
        overflow: ml
      } : null;
    }
    function dD(e, t) {
      Ds(), ui[si++] = hl, ui[si++] = ml, ui[si++] = Rs, hl = t.id, ml = t.overflow, Rs = e;
    }
    function Ds() {
      wr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Tr = null, ci = null, Li = !1, Os = !1, mu = null;
    function pD() {
      Li && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function TT() {
      Os = !0;
    }
    function vD() {
      return Os;
    }
    function hD(e) {
      var t = e.stateNode.containerInfo;
      return ci = L_(t), Tr = e, Li = !0, mu = null, Os = !1, !0;
    }
    function mD(e, t, a) {
      return ci = A_(t), Tr = e, Li = !0, mu = null, Os = !1, a !== null && dD(e, a), !0;
    }
    function wT(e, t) {
      switch (e.tag) {
        case O: {
          $_(e.stateNode.containerInfo, t);
          break;
        }
        case A: {
          var a = (e.mode & gt) !== qe;
          Y_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case K: {
          var i = e.memoizedState;
          i.dehydrated !== null && W_(i.dehydrated, t);
          break;
        }
      }
    }
    function bT(e, t) {
      wT(e, t);
      var a = SM();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= At) : i.push(a);
    }
    function CS(e, t) {
      {
        if (Os)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case A:
                var i = t.type;
                t.pendingProps, G_(a, i);
                break;
              case N:
                var u = t.pendingProps;
                Q_(a, u);
                break;
            }
            break;
          }
          case A: {
            var c = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case A: {
                var E = t.type, R = t.pendingProps, _ = (e.mode & gt) !== qe;
                K_(
                  c,
                  v,
                  y,
                  E,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case N: {
                var F = t.pendingProps, P = (e.mode & gt) !== qe;
                Z_(
                  c,
                  v,
                  y,
                  F,
                  // TODO: Delete this argument when we remove the legacy root API.
                  P
                );
                break;
              }
            }
            break;
          }
          case K: {
            var Y = e.memoizedState, G = Y.dehydrated;
            if (G !== null)
              switch (t.tag) {
                case A:
                  var Z = t.type;
                  t.pendingProps, X_(G, Z);
                  break;
                case N:
                  var De = t.pendingProps;
                  q_(G, De);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function xT(e, t) {
      t.flags = t.flags & ~Ea | Kt, CS(e, t);
    }
    function RT(e, t) {
      switch (e.tag) {
        case A: {
          var a = e.type;
          e.pendingProps;
          var i = __(t, a);
          return i !== null ? (e.stateNode = i, Tr = e, ci = N_(i), !0) : !1;
        }
        case N: {
          var u = e.pendingProps, c = D_(t, u);
          return c !== null ? (e.stateNode = c, Tr = e, ci = null, !0) : !1;
        }
        case K: {
          var v = O_(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: fD(),
              retryLane: Ir
            };
            e.memoizedState = y;
            var E = EM(v);
            return E.return = e, e.child = E, Tr = e, ci = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function TS(e) {
      return (e.mode & gt) !== qe && (e.flags & rt) === We;
    }
    function wS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function bS(e) {
      if (Li) {
        var t = ci;
        if (!t) {
          TS(e) && (CS(Tr, e), wS()), xT(Tr, e), Li = !1, Tr = e;
          return;
        }
        var a = t;
        if (!RT(e, t)) {
          TS(e) && (CS(Tr, e), wS()), t = xp(a);
          var i = Tr;
          if (!t || !RT(e, t)) {
            xT(Tr, e), Li = !1, Tr = e;
            return;
          }
          bT(i, a);
        }
      }
    }
    function yD(e, t, a) {
      var i = e.stateNode, u = !Os, c = z_(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = c, c !== null;
    }
    function gD(e) {
      var t = e.stateNode, a = e.memoizedProps, i = U_(t, a, e);
      if (i) {
        var u = Tr;
        if (u !== null)
          switch (u.tag) {
            case O: {
              var c = u.stateNode.containerInfo, v = (u.mode & gt) !== qe;
              I_(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case A: {
              var y = u.type, E = u.memoizedProps, R = u.stateNode, _ = (u.mode & gt) !== qe;
              B_(
                y,
                E,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return i;
    }
    function SD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      P_(a, e);
    }
    function ED(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return j_(a);
    }
    function _T(e) {
      for (var t = e.return; t !== null && t.tag !== A && t.tag !== O && t.tag !== K; )
        t = t.return;
      Tr = t;
    }
    function Em(e) {
      if (e !== Tr)
        return !1;
      if (!Li)
        return _T(e), Li = !0, !1;
      if (e.tag !== O && (e.tag !== A || V_(e.type) && !iS(e.type, e.memoizedProps))) {
        var t = ci;
        if (t)
          if (TS(e))
            DT(e), wS();
          else
            for (; t; )
              bT(e, t), t = xp(t);
      }
      return _T(e), e.tag === K ? ci = ED(e) : ci = Tr ? xp(e.stateNode) : null, !0;
    }
    function CD() {
      return Li && ci !== null;
    }
    function DT(e) {
      for (var t = ci; t; )
        wT(e, t), t = xp(t);
    }
    function wf() {
      Tr = null, ci = null, Li = !1, Os = !1;
    }
    function OT() {
      mu !== null && (ww(mu), mu = null);
    }
    function wr() {
      return Li;
    }
    function xS(e) {
      mu === null ? mu = [e] : mu.push(e);
    }
    var TD = d.ReactCurrentBatchConfig, wD = null;
    function bD() {
      return TD.transition;
    }
    var Ai = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var xD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & sn && (t = a), a = a.return;
        return t;
      }, ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Op = [], kp = [], Mp = [], Np = [], Lp = [], Ap = [], Ms = /* @__PURE__ */ new Set();
      Ai.recordUnsafeLifecycleWarnings = function(e, t) {
        Ms.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & sn && typeof t.UNSAFE_componentWillMount == "function" && kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillUpdate == "function" && Ap.push(e));
      }, Ai.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(P) {
          e.add(ut(P) || "Component"), Ms.add(P.type);
        }), Op = []);
        var t = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(P) {
          t.add(ut(P) || "Component"), Ms.add(P.type);
        }), kp = []);
        var a = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(P) {
          a.add(ut(P) || "Component"), Ms.add(P.type);
        }), Mp = []);
        var i = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(P) {
          i.add(ut(P) || "Component"), Ms.add(P.type);
        }), Np = []);
        var u = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(P) {
          u.add(ut(P) || "Component"), Ms.add(P.type);
        }), Lp = []);
        var c = /* @__PURE__ */ new Set();
        if (Ap.length > 0 && (Ap.forEach(function(P) {
          c.add(ut(P) || "Component"), Ms.add(P.type);
        }), Ap = []), t.size > 0) {
          var v = ks(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var y = ks(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (c.size > 0) {
          var E = ks(c);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var R = ks(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var _ = ks(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (u.size > 0) {
          var F = ks(u);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var Cm = /* @__PURE__ */ new Map(), kT = /* @__PURE__ */ new Set();
      Ai.recordLegacyContextWarning = function(e, t) {
        var a = xD(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!kT.has(e.type)) {
          var i = Cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Cm.set(a, i)), i.push(e));
        }
      }, Ai.flushLegacyContextWarning = function() {
        Cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(ut(c) || "Component"), kT.add(c.type);
            });
            var u = ks(i);
            try {
              Vt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              An();
            }
          }
        });
      }, Ai.discardPendingWarnings = function() {
        Op = [], kp = [], Mp = [], Np = [], Lp = [], Ap = [], Cm = /* @__PURE__ */ new Map();
      };
    }
    function zi(e, t) {
      if (e && e.defaultProps) {
        var a = Et({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var RS = pu(null), _S;
    _S = {};
    var Tm = null, bf = null, DS = null, wm = !1;
    function bm() {
      Tm = null, bf = null, DS = null, wm = !1;
    }
    function MT() {
      wm = !0;
    }
    function NT() {
      wm = !1;
    }
    function LT(e, t, a) {
      Wr(RS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== _S && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = _S;
    }
    function OS(e, t) {
      var a = RS.current;
      $r(RS, t), e._currentValue = a;
    }
    function kS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (tl(i.childLanes, t) ? u !== null && !tl(u.childLanes, t) && (u.childLanes = ft(u.childLanes, t)) : (i.childLanes = ft(i.childLanes, t), u !== null && (u.childLanes = ft(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function RD(e, t, a) {
      _D(e, t, a);
    }
    function _D(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, c = i.dependencies;
        if (c !== null) {
          u = i.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === b) {
                var y = Un(a), E = yl(Gt, y);
                E.tag = Rm;
                var R = i.updateQueue;
                if (R !== null) {
                  var _ = R.shared, F = _.pending;
                  F === null ? E.next = E : (E.next = F.next, F.next = E), _.pending = E;
                }
              }
              i.lanes = ft(i.lanes, a);
              var P = i.alternate;
              P !== null && (P.lanes = ft(P.lanes, a)), kS(i.return, a, e), c.lanes = ft(c.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === Q)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === _e) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = ft(Y.lanes, a);
          var G = Y.alternate;
          G !== null && (G.lanes = ft(G.lanes, a)), kS(Y, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var Z = u.sibling;
            if (Z !== null) {
              Z.return = u.return, u = Z;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function xf(e, t) {
      Tm = e, bf = null, DS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Br(a.lanes, t) && Qp(), a.firstContext = null);
      }
    }
    function Zn(e) {
      wm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (DS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (bf === null) {
          if (Tm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          bf = a, Tm.dependencies = {
            lanes: te,
            firstContext: a
          };
        } else
          bf = bf.next = a;
      }
      return t;
    }
    var Ns = null;
    function MS(e) {
      Ns === null ? Ns = [e] : Ns.push(e);
    }
    function DD() {
      if (Ns !== null) {
        for (var e = 0; e < Ns.length; e++) {
          var t = Ns[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var c = u.next;
              u.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        Ns = null;
      }
    }
    function AT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, MS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, xm(e, i);
    }
    function OD(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, MS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function kD(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, MS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, xm(e, i);
    }
    function ka(e, t) {
      return xm(e, t);
    }
    var MD = xm;
    function xm(e, t) {
      e.lanes = ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ft(a.lanes, t)), a === null && (e.flags & (Kt | Ea)) !== We && zw(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ft(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ft(a.childLanes, t) : (u.flags & (Kt | Ea)) !== We && zw(e), i = u, u = u.return;
      if (i.tag === O) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var zT = 0, UT = 1, Rm = 2, NS = 3, _m = !1, LS, Dm;
    LS = !1, Dm = null;
    function AS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function PT(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function yl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: zT,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function yu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Dm === u && !LS && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), LS = !0), Mk()) {
        var c = u.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), u.pending = t, MD(e, a);
      } else
        return kD(e, u, t, a);
    }
    function Om(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if ($d(a)) {
          var c = u.lanes;
          c = Yd(c, e.pendingLanes);
          var v = ft(c, a);
          u.lanes = v, Kl(e, v);
        }
      }
    }
    function zS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var c = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var E = y;
            do {
              var R = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              v === null ? c = v = R : (v.next = R, v = R), E = E.next;
            } while (E !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function ND(e, t, a, i, u, c) {
      switch (a.tag) {
        case UT: {
          var v = a.payload;
          if (typeof v == "function") {
            MT();
            var y = v.call(c, i, u);
            {
              if (e.mode & sn) {
                zn(!0);
                try {
                  v.call(c, i, u);
                } finally {
                  zn(!1);
                }
              }
              NT();
            }
            return y;
          }
          return v;
        }
        case NS:
          e.flags = e.flags & ~Gn | rt;
        case zT: {
          var E = a.payload, R;
          if (typeof E == "function") {
            MT(), R = E.call(c, i, u);
            {
              if (e.mode & sn) {
                zn(!0);
                try {
                  E.call(c, i, u);
                } finally {
                  zn(!1);
                }
              }
              NT();
            }
          } else
            R = E;
          return R == null ? i : Et({}, i, R);
        }
        case Rm:
          return _m = !0, i;
      }
      return i;
    }
    function km(e, t, a, i) {
      var u = e.updateQueue;
      _m = !1, Dm = u.shared;
      var c = u.firstBaseUpdate, v = u.lastBaseUpdate, y = u.shared.pending;
      if (y !== null) {
        u.shared.pending = null;
        var E = y, R = E.next;
        E.next = null, v === null ? c = R : v.next = R, v = E;
        var _ = e.alternate;
        if (_ !== null) {
          var F = _.updateQueue, P = F.lastBaseUpdate;
          P !== v && (P === null ? F.firstBaseUpdate = R : P.next = R, F.lastBaseUpdate = E);
        }
      }
      if (c !== null) {
        var Y = u.baseState, G = te, Z = null, De = null, Ge = null, Ue = c;
        do {
          var _t = Ue.lane, Tt = Ue.eventTime;
          if (tl(i, _t)) {
            if (Ge !== null) {
              var J = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: xt,
                tag: Ue.tag,
                payload: Ue.payload,
                callback: Ue.callback,
                next: null
              };
              Ge = Ge.next = J;
            }
            Y = ND(e, u, Ue, Y, t, a);
            var B = Ue.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ue.lane !== xt) {
              e.flags |= ni;
              var se = u.effects;
              se === null ? u.effects = [Ue] : se.push(Ue);
            }
          } else {
            var I = {
              eventTime: Tt,
              lane: _t,
              tag: Ue.tag,
              payload: Ue.payload,
              callback: Ue.callback,
              next: null
            };
            Ge === null ? (De = Ge = I, Z = Y) : Ge = Ge.next = I, G = ft(G, _t);
          }
          if (Ue = Ue.next, Ue === null) {
            if (y = u.shared.pending, y === null)
              break;
            var Oe = y, we = Oe.next;
            Oe.next = null, Ue = we, u.lastBaseUpdate = Oe, u.shared.pending = null;
          }
        } while (!0);
        Ge === null && (Z = Y), u.baseState = Z, u.firstBaseUpdate = De, u.lastBaseUpdate = Ge;
        var tt = u.shared.interleaved;
        if (tt !== null) {
          var lt = tt;
          do
            G = ft(G, lt.lane), lt = lt.next;
          while (lt !== tt);
        } else
          c === null && (u.shared.lanes = te);
        ov(G), e.lanes = G, e.memoizedState = Y;
      }
      Dm = null;
    }
    function LD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function jT() {
      _m = !1;
    }
    function Mm() {
      return _m;
    }
    function FT(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var c = i[u], v = c.callback;
          v !== null && (c.callback = null, LD(v, a));
        }
    }
    var US = {}, HT = new l.Component().refs, PS, jS, FS, HS, VS, VT, Nm, IS, BS, $S;
    {
      PS = /* @__PURE__ */ new Set(), jS = /* @__PURE__ */ new Set(), FS = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set(), IS = /* @__PURE__ */ new Set(), VS = /* @__PURE__ */ new Set(), BS = /* @__PURE__ */ new Set(), $S = /* @__PURE__ */ new Set();
      var IT = /* @__PURE__ */ new Set();
      Nm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          IT.has(a) || (IT.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, VT = function(e, t) {
        if (t === void 0) {
          var a = Wt(e) || "Component";
          VS.has(a) || (VS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(US, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(US);
    }
    function WS(e, t, a, i) {
      var u = e.memoizedState, c = a(i, u);
      {
        if (e.mode & sn) {
          zn(!0);
          try {
            c = a(i, u);
          } finally {
            zn(!1);
          }
        }
        VT(t, c);
      }
      var v = c == null ? u : Et({}, u, c);
      if (e.memoizedState = v, e.lanes === te) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var YS = {
      isMounted: ra,
      enqueueSetState: function(e, t, a) {
        var i = ga(e), u = sa(), c = xu(i), v = yl(u, c);
        v.payload = t, a != null && (Nm(a, "setState"), v.callback = a);
        var y = yu(i, v, c);
        y !== null && (sr(y, i, c, u), Om(y, i, c)), co(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ga(e), u = sa(), c = xu(i), v = yl(u, c);
        v.tag = UT, v.payload = t, a != null && (Nm(a, "replaceState"), v.callback = a);
        var y = yu(i, v, c);
        y !== null && (sr(y, i, c, u), Om(y, i, c)), co(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ga(e), i = sa(), u = xu(a), c = yl(i, u);
        c.tag = Rm, t != null && (Nm(t, "forceUpdate"), c.callback = t);
        var v = yu(a, c, u);
        v !== null && (sr(v, a, u, i), Om(v, a, u)), Hd(a, u);
      }
    };
    function BT(e, t, a, i, u, c, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var E = y.shouldComponentUpdate(i, c, v);
        {
          if (e.mode & sn) {
            zn(!0);
            try {
              E = y.shouldComponentUpdate(i, c, v);
            } finally {
              zn(!1);
            }
          }
          E === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Wt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ve(a, i) || !Ve(u, c) : !0;
    }
    function AD(e, t, a) {
      var i = e.stateNode;
      {
        var u = Wt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !BS.has(t) && (BS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = i.props !== a;
        i.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !FS.has(t) && (FS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Wt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var y = i.state;
        y && (typeof y != "object" || Wn(y)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function $T(e, t) {
      t.updater = YS, e.stateNode = t, Vl(t, e), t._reactInternalInstance = US;
    }
    function WT(e, t, a) {
      var i = !1, u = Xa, c = Xa, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Ee && v._context === void 0
        );
        if (!y && !$S.has(t)) {
          $S.add(t);
          var E = "";
          v === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? E = " However, it is set to a " + typeof v + "." : v.$$typeof === oe ? E = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Wt(t) || "Component", E);
        }
      }
      if (typeof v == "object" && v !== null)
        c = Zn(v);
      else {
        u = Sf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, c = i ? Ef(e, u) : Xa;
      }
      var _ = new t(a, c);
      if (e.mode & sn) {
        zn(!0);
        try {
          _ = new t(a, c);
        } finally {
          zn(!1);
        }
      }
      var F = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      $T(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var P = Wt(t) || "Component";
          jS.has(P) || (jS.add(P), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, _.state === null ? "null" : "undefined", P));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var Y = null, G = null, Z = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), Y !== null || G !== null || Z !== null) {
            var De = Wt(t) || "Component", Ge = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            HS.has(De) || (HS.add(De), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, Ge, Y !== null ? `
  ` + Y : "", G !== null ? `
  ` + G : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && hT(e, u, c), _;
    }
    function zD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ut(e) || "Component"), YS.enqueueReplaceState(t, t.state, null));
    }
    function YT(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var c = ut(e) || "Component";
          PS.has(c) || (PS.add(c), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        YS.enqueueReplaceState(t, t.state, null);
      }
    }
    function GS(e, t, a, i) {
      AD(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = HT, AS(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        u.context = Zn(c);
      else {
        var v = Sf(e, t, !0);
        u.context = Ef(e, v);
      }
      {
        if (u.state === a) {
          var y = Wt(t) || "Component";
          IS.has(y) || (IS.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & sn && Ai.recordLegacyContextWarning(e, u), Ai.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (WS(e, t, E, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (zD(e, u), km(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var R = ct;
        R |= Pr, (e.mode & wa) !== qe && (R |= jr), e.flags |= R;
      }
    }
    function UD(e, t, a, i) {
      var u = e.stateNode, c = e.memoizedProps;
      u.props = c;
      var v = u.context, y = t.contextType, E = Xa;
      if (typeof y == "object" && y !== null)
        E = Zn(y);
      else {
        var R = Sf(e, t, !0);
        E = Ef(e, R);
      }
      var _ = t.getDerivedStateFromProps, F = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !F && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (c !== a || v !== E) && YT(e, u, a, E), jT();
      var P = e.memoizedState, Y = u.state = P;
      if (km(e, a, u, i), Y = e.memoizedState, c === a && P === Y && !pm() && !Mm()) {
        if (typeof u.componentDidMount == "function") {
          var G = ct;
          G |= Pr, (e.mode & wa) !== qe && (G |= jr), e.flags |= G;
        }
        return !1;
      }
      typeof _ == "function" && (WS(e, t, _, a), Y = e.memoizedState);
      var Z = Mm() || BT(e, t, c, a, P, Y, E);
      if (Z) {
        if (!F && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var De = ct;
          De |= Pr, (e.mode & wa) !== qe && (De |= jr), e.flags |= De;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ge = ct;
          Ge |= Pr, (e.mode & wa) !== qe && (Ge |= jr), e.flags |= Ge;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return u.props = a, u.state = Y, u.context = E, Z;
    }
    function PD(e, t, a, i, u) {
      var c = t.stateNode;
      PT(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : zi(t.type, v);
      c.props = y;
      var E = t.pendingProps, R = c.context, _ = a.contextType, F = Xa;
      if (typeof _ == "object" && _ !== null)
        F = Zn(_);
      else {
        var P = Sf(t, a, !0);
        F = Ef(t, P);
      }
      var Y = a.getDerivedStateFromProps, G = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !G && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== E || R !== F) && YT(t, c, i, F), jT();
      var Z = t.memoizedState, De = c.state = Z;
      if (km(t, i, c, u), De = t.memoizedState, v === E && Z === De && !pm() && !Mm() && !Fe)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= ct), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Sa), !1;
      typeof Y == "function" && (WS(t, a, Y, i), De = t.memoizedState);
      var Ge = Mm() || BT(t, a, y, i, Z, De, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Fe;
      return Ge ? (!G && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, De, F), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, De, F)), typeof c.componentDidUpdate == "function" && (t.flags |= ct), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Sa)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= ct), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Sa), t.memoizedProps = i, t.memoizedState = De), c.props = i, c.state = De, c.context = F, Ge;
    }
    var QS, XS, qS, KS, ZS, GT = function(e, t) {
    };
    QS = !1, XS = !1, qS = {}, KS = {}, ZS = {}, GT = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ut(t) || "Component";
        KS[a] || (KS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function zp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & sn || pn) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = ut(e) || "Component";
          qS[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), qS[u] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var y = c;
            if (y.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = v;
          dt(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var _ = function(F) {
            var P = E.refs;
            P === HT && (P = E.refs = {}), F === null ? delete P[R] : P[R] = F;
          };
          return _._stringRef = R, _;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Lm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Am(e) {
      {
        var t = ut(e) || "Component";
        if (ZS[t])
          return;
        ZS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function QT(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function XT(e) {
      function t(I, J) {
        if (e) {
          var B = I.deletions;
          B === null ? (I.deletions = [J], I.flags |= At) : B.push(J);
        }
      }
      function a(I, J) {
        if (!e)
          return null;
        for (var B = J; B !== null; )
          t(I, B), B = B.sibling;
        return null;
      }
      function i(I, J) {
        for (var B = /* @__PURE__ */ new Map(), se = J; se !== null; )
          se.key !== null ? B.set(se.key, se) : B.set(se.index, se), se = se.sibling;
        return B;
      }
      function u(I, J) {
        var B = Hs(I, J);
        return B.index = 0, B.sibling = null, B;
      }
      function c(I, J, B) {
        if (I.index = B, !e)
          return I.flags |= Dd, J;
        var se = I.alternate;
        if (se !== null) {
          var Oe = se.index;
          return Oe < J ? (I.flags |= Kt, J) : Oe;
        } else
          return I.flags |= Kt, J;
      }
      function v(I) {
        return e && I.alternate === null && (I.flags |= Kt), I;
      }
      function y(I, J, B, se) {
        if (J === null || J.tag !== N) {
          var Oe = xE(B, I.mode, se);
          return Oe.return = I, Oe;
        } else {
          var we = u(J, B);
          return we.return = I, we;
        }
      }
      function E(I, J, B, se) {
        var Oe = B.type;
        if (Oe === Ha)
          return _(I, J, B.props.children, se, B.key);
        if (J !== null && (J.elementType === Oe || // Keep this check inline so it only runs on the false path:
        Fw(J, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === Ke && QT(Oe) === J.type)) {
          var we = u(J, B.props);
          return we.ref = zp(I, J, B), we.return = I, we._debugSource = B._source, we._debugOwner = B._owner, we;
        }
        var tt = bE(B, I.mode, se);
        return tt.ref = zp(I, J, B), tt.return = I, tt;
      }
      function R(I, J, B, se) {
        if (J === null || J.tag !== L || J.stateNode.containerInfo !== B.containerInfo || J.stateNode.implementation !== B.implementation) {
          var Oe = RE(B, I.mode, se);
          return Oe.return = I, Oe;
        } else {
          var we = u(J, B.children || []);
          return we.return = I, we;
        }
      }
      function _(I, J, B, se, Oe) {
        if (J === null || J.tag !== U) {
          var we = _u(B, I.mode, se, Oe);
          return we.return = I, we;
        } else {
          var tt = u(J, B);
          return tt.return = I, tt;
        }
      }
      function F(I, J, B) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var se = xE("" + J, I.mode, B);
          return se.return = I, se;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Yi: {
              var Oe = bE(J, I.mode, B);
              return Oe.ref = zp(I, null, J), Oe.return = I, Oe;
            }
            case Jr: {
              var we = RE(J, I.mode, B);
              return we.return = I, we;
            }
            case Ke: {
              var tt = J._payload, lt = J._init;
              return F(I, lt(tt), B);
            }
          }
          if (Wn(J) || hi(J)) {
            var Bt = _u(J, I.mode, B, null);
            return Bt.return = I, Bt;
          }
          Lm(I, J);
        }
        return typeof J == "function" && Am(I), null;
      }
      function P(I, J, B, se) {
        var Oe = J !== null ? J.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return Oe !== null ? null : y(I, J, "" + B, se);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Yi:
              return B.key === Oe ? E(I, J, B, se) : null;
            case Jr:
              return B.key === Oe ? R(I, J, B, se) : null;
            case Ke: {
              var we = B._payload, tt = B._init;
              return P(I, J, tt(we), se);
            }
          }
          if (Wn(B) || hi(B))
            return Oe !== null ? null : _(I, J, B, se, null);
          Lm(I, B);
        }
        return typeof B == "function" && Am(I), null;
      }
      function Y(I, J, B, se, Oe) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var we = I.get(B) || null;
          return y(J, we, "" + se, Oe);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case Yi: {
              var tt = I.get(se.key === null ? B : se.key) || null;
              return E(J, tt, se, Oe);
            }
            case Jr: {
              var lt = I.get(se.key === null ? B : se.key) || null;
              return R(J, lt, se, Oe);
            }
            case Ke:
              var Bt = se._payload, Nt = se._init;
              return Y(I, J, B, Nt(Bt), Oe);
          }
          if (Wn(se) || hi(se)) {
            var Hn = I.get(B) || null;
            return _(J, Hn, se, Oe, null);
          }
          Lm(J, se);
        }
        return typeof se == "function" && Am(J), null;
      }
      function G(I, J, B) {
        {
          if (typeof I != "object" || I === null)
            return J;
          switch (I.$$typeof) {
            case Yi:
            case Jr:
              GT(I, B);
              var se = I.key;
              if (typeof se != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(se);
                break;
              }
              if (!J.has(se)) {
                J.add(se);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Ke:
              var Oe = I._payload, we = I._init;
              G(we(Oe), J, B);
              break;
          }
        }
        return J;
      }
      function Z(I, J, B, se) {
        for (var Oe = null, we = 0; we < B.length; we++) {
          var tt = B[we];
          Oe = G(tt, Oe, I);
        }
        for (var lt = null, Bt = null, Nt = J, Hn = 0, Lt = 0, kn = null; Nt !== null && Lt < B.length; Lt++) {
          Nt.index > Lt ? (kn = Nt, Nt = null) : kn = Nt.sibling;
          var Gr = P(I, Nt, B[Lt], se);
          if (Gr === null) {
            Nt === null && (Nt = kn);
            break;
          }
          e && Nt && Gr.alternate === null && t(I, Nt), Hn = c(Gr, Hn, Lt), Bt === null ? lt = Gr : Bt.sibling = Gr, Bt = Gr, Nt = kn;
        }
        if (Lt === B.length) {
          if (a(I, Nt), wr()) {
            var kr = Lt;
            _s(I, kr);
          }
          return lt;
        }
        if (Nt === null) {
          for (; Lt < B.length; Lt++) {
            var Ka = F(I, B[Lt], se);
            Ka !== null && (Hn = c(Ka, Hn, Lt), Bt === null ? lt = Ka : Bt.sibling = Ka, Bt = Ka);
          }
          if (wr()) {
            var ca = Lt;
            _s(I, ca);
          }
          return lt;
        }
        for (var fa = i(I, Nt); Lt < B.length; Lt++) {
          var Qr = Y(fa, I, Lt, B[Lt], se);
          Qr !== null && (e && Qr.alternate !== null && fa.delete(Qr.key === null ? Lt : Qr.key), Hn = c(Qr, Hn, Lt), Bt === null ? lt = Qr : Bt.sibling = Qr, Bt = Qr);
        }
        if (e && fa.forEach(function(If) {
          return t(I, If);
        }), wr()) {
          var wl = Lt;
          _s(I, wl);
        }
        return lt;
      }
      function De(I, J, B, se) {
        var Oe = hi(B);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (XS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), XS = !0), B.entries === Oe && (QS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), QS = !0);
          var we = Oe.call(B);
          if (we)
            for (var tt = null, lt = we.next(); !lt.done; lt = we.next()) {
              var Bt = lt.value;
              tt = G(Bt, tt, I);
            }
        }
        var Nt = Oe.call(B);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Hn = null, Lt = null, kn = J, Gr = 0, kr = 0, Ka = null, ca = Nt.next(); kn !== null && !ca.done; kr++, ca = Nt.next()) {
          kn.index > kr ? (Ka = kn, kn = null) : Ka = kn.sibling;
          var fa = P(I, kn, ca.value, se);
          if (fa === null) {
            kn === null && (kn = Ka);
            break;
          }
          e && kn && fa.alternate === null && t(I, kn), Gr = c(fa, Gr, kr), Lt === null ? Hn = fa : Lt.sibling = fa, Lt = fa, kn = Ka;
        }
        if (ca.done) {
          if (a(I, kn), wr()) {
            var Qr = kr;
            _s(I, Qr);
          }
          return Hn;
        }
        if (kn === null) {
          for (; !ca.done; kr++, ca = Nt.next()) {
            var wl = F(I, ca.value, se);
            wl !== null && (Gr = c(wl, Gr, kr), Lt === null ? Hn = wl : Lt.sibling = wl, Lt = wl);
          }
          if (wr()) {
            var If = kr;
            _s(I, If);
          }
          return Hn;
        }
        for (var fv = i(I, kn); !ca.done; kr++, ca = Nt.next()) {
          var Oo = Y(fv, I, kr, ca.value, se);
          Oo !== null && (e && Oo.alternate !== null && fv.delete(Oo.key === null ? kr : Oo.key), Gr = c(Oo, Gr, kr), Lt === null ? Hn = Oo : Lt.sibling = Oo, Lt = Oo);
        }
        if (e && fv.forEach(function(KM) {
          return t(I, KM);
        }), wr()) {
          var qM = kr;
          _s(I, qM);
        }
        return Hn;
      }
      function Ge(I, J, B, se) {
        if (J !== null && J.tag === N) {
          a(I, J.sibling);
          var Oe = u(J, B);
          return Oe.return = I, Oe;
        }
        a(I, J);
        var we = xE(B, I.mode, se);
        return we.return = I, we;
      }
      function Ue(I, J, B, se) {
        for (var Oe = B.key, we = J; we !== null; ) {
          if (we.key === Oe) {
            var tt = B.type;
            if (tt === Ha) {
              if (we.tag === U) {
                a(I, we.sibling);
                var lt = u(we, B.props.children);
                return lt.return = I, lt._debugSource = B._source, lt._debugOwner = B._owner, lt;
              }
            } else if (we.elementType === tt || // Keep this check inline so it only runs on the false path:
            Fw(we, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof tt == "object" && tt !== null && tt.$$typeof === Ke && QT(tt) === we.type) {
              a(I, we.sibling);
              var Bt = u(we, B.props);
              return Bt.ref = zp(I, we, B), Bt.return = I, Bt._debugSource = B._source, Bt._debugOwner = B._owner, Bt;
            }
            a(I, we);
            break;
          } else
            t(I, we);
          we = we.sibling;
        }
        if (B.type === Ha) {
          var Nt = _u(B.props.children, I.mode, se, B.key);
          return Nt.return = I, Nt;
        } else {
          var Hn = bE(B, I.mode, se);
          return Hn.ref = zp(I, J, B), Hn.return = I, Hn;
        }
      }
      function _t(I, J, B, se) {
        for (var Oe = B.key, we = J; we !== null; ) {
          if (we.key === Oe)
            if (we.tag === L && we.stateNode.containerInfo === B.containerInfo && we.stateNode.implementation === B.implementation) {
              a(I, we.sibling);
              var tt = u(we, B.children || []);
              return tt.return = I, tt;
            } else {
              a(I, we);
              break;
            }
          else
            t(I, we);
          we = we.sibling;
        }
        var lt = RE(B, I.mode, se);
        return lt.return = I, lt;
      }
      function Tt(I, J, B, se) {
        var Oe = typeof B == "object" && B !== null && B.type === Ha && B.key === null;
        if (Oe && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Yi:
              return v(Ue(I, J, B, se));
            case Jr:
              return v(_t(I, J, B, se));
            case Ke:
              var we = B._payload, tt = B._init;
              return Tt(I, J, tt(we), se);
          }
          if (Wn(B))
            return Z(I, J, B, se);
          if (hi(B))
            return De(I, J, B, se);
          Lm(I, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? v(Ge(I, J, "" + B, se)) : (typeof B == "function" && Am(I), a(I, J));
      }
      return Tt;
    }
    var Rf = XT(!0), qT = XT(!1);
    function jD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Hs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Hs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function FD(e, t) {
      for (var a = e.child; a !== null; )
        vM(a, t), a = a.sibling;
    }
    var Up = {}, gu = pu(Up), Pp = pu(Up), zm = pu(Up);
    function Um(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function KT() {
      var e = Um(zm.current);
      return e;
    }
    function JS(e, t) {
      Wr(zm, t, e), Wr(Pp, e, e), Wr(gu, Up, e);
      var a = JR(t);
      $r(gu, e), Wr(gu, a, e);
    }
    function _f(e) {
      $r(gu, e), $r(Pp, e), $r(zm, e);
    }
    function e0() {
      var e = Um(gu.current);
      return e;
    }
    function ZT(e) {
      Um(zm.current);
      var t = Um(gu.current), a = e_(t, e.type);
      t !== a && (Wr(Pp, e, e), Wr(gu, a, e));
    }
    function t0(e) {
      Pp.current === e && ($r(gu, e), $r(Pp, e));
    }
    var HD = 0, JT = 1, e1 = 1, jp = 2, Ui = pu(HD);
    function n0(e, t) {
      return (e & t) !== 0;
    }
    function Df(e) {
      return e & JT;
    }
    function r0(e, t) {
      return e & JT | t;
    }
    function VD(e, t) {
      return e | t;
    }
    function Su(e, t) {
      Wr(Ui, t, e);
    }
    function Of(e) {
      $r(Ui, e);
    }
    function ID(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Pm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === K) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || cT(i) || sS(i))
              return t;
          }
        } else if (t.tag === be && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & rt) !== We;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ma = (
      /*   */
      0
    ), nr = (
      /* */
      1
    ), To = (
      /*  */
      2
    ), rr = (
      /*    */
      4
    ), br = (
      /*   */
      8
    ), a0 = [];
    function i0() {
      for (var e = 0; e < a0.length; e++) {
        var t = a0[e];
        t._workInProgressVersionPrimary = null;
      }
      a0.length = 0;
    }
    function BD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = d.ReactCurrentDispatcher, Fp = d.ReactCurrentBatchConfig, o0, kf;
    o0 = /* @__PURE__ */ new Set();
    var Ls = te, It = null, ar = null, ir = null, jm = !1, Hp = !1, Vp = 0, $D = 0, WD = 25, ne = null, fi = null, Eu = -1, l0 = !1;
    function jt() {
      {
        var e = ne;
        fi === null ? fi = [e] : fi.push(e);
      }
    }
    function me() {
      {
        var e = ne;
        fi !== null && (Eu++, fi[Eu] !== e && YD(e));
      }
    }
    function Mf(e) {
      e != null && !Wn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function YD(e) {
      {
        var t = ut(It);
        if (!o0.has(t) && (o0.add(t), fi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Eu; u++) {
            for (var c = fi[u], v = u === Eu ? e : c, y = u + 1 + ". " + c; y.length < i; )
              y += " ";
            y += v + `
`, a += y;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Yr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function u0(e, t) {
      if (l0)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ne(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, c) {
      Ls = c, It = t, fi = e !== null ? e._debugHookTypes : null, Eu = -1, l0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Re.current = T1 : fi !== null ? Re.current = C1 : Re.current = E1;
      var v = a(i, u);
      if (Hp) {
        var y = 0;
        do {
          if (Hp = !1, Vp = 0, y >= WD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, l0 = !1, ar = null, ir = null, t.updateQueue = null, Eu = -1, Re.current = w1, v = a(i, u);
        } while (Hp);
      }
      Re.current = Km, t._debugHookTypes = fi;
      var E = ar !== null && ar.next !== null;
      if (Ls = te, It = null, ar = null, ir = null, ne = null, fi = null, Eu = -1, e !== null && (e.flags & Jn) !== (t.flags & Jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & gt) !== qe && g("Internal React error: Expected static flag was missing. Please notify the React team."), jm = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Lf() {
      var e = Vp !== 0;
      return Vp = 0, e;
    }
    function t1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & wa) !== qe ? t.flags &= ~(Wo | jr | an | ct) : t.flags &= ~(an | ct), e.lanes = ql(e.lanes, a);
    }
    function n1() {
      if (Re.current = Km, jm) {
        for (var e = It.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        jm = !1;
      }
      Ls = te, It = null, ar = null, ir = null, fi = null, Eu = -1, ne = null, h1 = !1, Hp = !1, Vp = 0;
    }
    function wo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ir === null ? It.memoizedState = ir = e : ir = ir.next = e, ir;
    }
    function di() {
      var e;
      if (ar === null) {
        var t = It.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ar.next;
      var a;
      if (ir === null ? a = It.memoizedState : a = ir.next, a !== null)
        ir = a, a = ir.next, ar = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ar = e;
        var i = {
          memoizedState: ar.memoizedState,
          baseState: ar.baseState,
          baseQueue: ar.baseQueue,
          queue: ar.queue,
          next: null
        };
        ir === null ? It.memoizedState = ir = i : ir = ir.next = i;
      }
      return ir;
    }
    function r1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function s0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function c0(e, t, a) {
      var i = wo(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var c = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = c;
      var v = c.dispatch = qD.bind(null, It, c);
      return [i.memoizedState, v];
    }
    function f0(e, t, a) {
      var i = di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = ar, v = c.baseQueue, y = u.pending;
      if (y !== null) {
        if (v !== null) {
          var E = v.next, R = y.next;
          v.next = R, y.next = E;
        }
        c.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = y, u.pending = null;
      }
      if (v !== null) {
        var _ = v.next, F = c.baseState, P = null, Y = null, G = null, Z = _;
        do {
          var De = Z.lane;
          if (tl(Ls, De)) {
            if (G !== null) {
              var Ue = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: xt,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              G = G.next = Ue;
            }
            if (Z.hasEagerState)
              F = Z.eagerState;
            else {
              var _t = Z.action;
              F = e(F, _t);
            }
          } else {
            var Ge = {
              lane: De,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            G === null ? (Y = G = Ge, P = F) : G = G.next = Ge, It.lanes = ft(It.lanes, De), ov(De);
          }
          Z = Z.next;
        } while (Z !== null && Z !== _);
        G === null ? P = F : G.next = Y, Ne(F, i.memoizedState) || Qp(), i.memoizedState = F, i.baseState = P, i.baseQueue = G, u.lastRenderedState = F;
      }
      var Tt = u.interleaved;
      if (Tt !== null) {
        var I = Tt;
        do {
          var J = I.lane;
          It.lanes = ft(It.lanes, J), ov(J), I = I.next;
        } while (I !== Tt);
      } else
        v === null && (u.lanes = te);
      var B = u.dispatch;
      return [i.memoizedState, B];
    }
    function d0(e, t, a) {
      var i = di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = u.dispatch, v = u.pending, y = i.memoizedState;
      if (v !== null) {
        u.pending = null;
        var E = v.next, R = E;
        do {
          var _ = R.action;
          y = e(y, _), R = R.next;
        } while (R !== E);
        Ne(y, i.memoizedState) || Qp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), u.lastRenderedState = y;
      }
      return [y, c];
    }
    function t2(e, t, a) {
    }
    function n2(e, t, a) {
    }
    function p0(e, t, a) {
      var i = It, u = wo(), c, v = wr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), kf || c !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), kf = !0);
      } else {
        if (c = t(), !kf) {
          var y = t();
          Ne(c, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
        }
        var E = hy();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cs(E, Ls) || a1(i, t, c);
      }
      u.memoizedState = c;
      var R = {
        value: c,
        getSnapshot: t
      };
      return u.queue = R, Bm(o1.bind(null, i, R, e), [e]), i.flags |= an, Ip(nr | br, i1.bind(null, i, R, c, t), void 0, null), c;
    }
    function Fm(e, t, a) {
      var i = It, u = di(), c = t();
      if (!kf) {
        var v = t();
        Ne(c, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
      }
      var y = u.memoizedState, E = !Ne(y, c);
      E && (u.memoizedState = c, Qp());
      var R = u.queue;
      if ($p(o1.bind(null, i, R, e), [e]), R.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      ir !== null && ir.memoizedState.tag & nr) {
        i.flags |= an, Ip(nr | br, i1.bind(null, i, R, c, t), void 0, null);
        var _ = hy();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cs(_, Ls) || a1(i, t, c);
      }
      return c;
    }
    function a1(e, t, a) {
      e.flags |= ts;
      var i = {
        getSnapshot: t,
        value: a
      }, u = It.updateQueue;
      if (u === null)
        u = r1(), It.updateQueue = u, u.stores = [i];
      else {
        var c = u.stores;
        c === null ? u.stores = [i] : c.push(i);
      }
    }
    function i1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, l1(t) && u1(e);
    }
    function o1(e, t, a) {
      var i = function() {
        l1(t) && u1(e);
      };
      return a(i);
    }
    function l1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ne(a, i);
      } catch {
        return !0;
      }
    }
    function u1(e) {
      var t = ka(e, Je);
      t !== null && sr(t, e, Je, Gt);
    }
    function Hm(e) {
      var t = wo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: s0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = KD.bind(null, It, a);
      return [t.memoizedState, i];
    }
    function v0(e) {
      return f0(s0);
    }
    function h0(e) {
      return d0(s0);
    }
    function Ip(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = It.updateQueue;
      if (c === null)
        c = r1(), It.updateQueue = c, c.lastEffect = u.next = u;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = u.next = u;
        else {
          var y = v.next;
          v.next = u, u.next = y, c.lastEffect = u;
        }
      }
      return u;
    }
    function m0(e) {
      var t = wo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Vm(e) {
      var t = di();
      return t.memoizedState;
    }
    function Bp(e, t, a, i) {
      var u = wo(), c = i === void 0 ? null : i;
      It.flags |= e, u.memoizedState = Ip(nr | t, a, void 0, c);
    }
    function Im(e, t, a, i) {
      var u = di(), c = i === void 0 ? null : i, v = void 0;
      if (ar !== null) {
        var y = ar.memoizedState;
        if (v = y.destroy, c !== null) {
          var E = y.deps;
          if (u0(c, E)) {
            u.memoizedState = Ip(t, a, v, c);
            return;
          }
        }
      }
      It.flags |= e, u.memoizedState = Ip(nr | t, a, v, c);
    }
    function Bm(e, t) {
      return (It.mode & wa) !== qe ? Bp(Wo | an | ao, br, e, t) : Bp(an | ao, br, e, t);
    }
    function $p(e, t) {
      return Im(an, br, e, t);
    }
    function y0(e, t) {
      return Bp(ct, To, e, t);
    }
    function $m(e, t) {
      return Im(ct, To, e, t);
    }
    function g0(e, t) {
      var a = ct;
      return a |= Pr, (It.mode & wa) !== qe && (a |= jr), Bp(a, rr, e, t);
    }
    function Wm(e, t) {
      return Im(ct, rr, e, t);
    }
    function s1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var c = e();
        return u.current = c, function() {
          u.current = null;
        };
      }
    }
    function S0(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ct;
      return u |= Pr, (It.mode & wa) !== qe && (u |= jr), Bp(u, rr, s1.bind(null, t, e), i);
    }
    function Ym(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Im(ct, rr, s1.bind(null, t, e), i);
    }
    function GD(e, t) {
    }
    var Gm = GD;
    function E0(e, t) {
      var a = wo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Qm(e, t) {
      var a = di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var c = u[1];
        if (u0(i, c))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function C0(e, t) {
      var a = wo(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Xm(e, t) {
      var a = di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var c = u[1];
        if (u0(i, c))
          return u[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function T0(e) {
      var t = wo();
      return t.memoizedState = e, e;
    }
    function c1(e) {
      var t = di(), a = ar, i = a.memoizedState;
      return d1(t, i, e);
    }
    function f1(e) {
      var t = di();
      if (ar === null)
        return t.memoizedState = e, e;
      var a = ar.memoizedState;
      return d1(t, a, e);
    }
    function d1(e, t, a) {
      var i = !Dg(Ls);
      if (i) {
        if (!Ne(a, t)) {
          var u = Wd();
          It.lanes = ft(It.lanes, u), ov(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Qp()), e.memoizedState = a, a;
    }
    function QD(e, t, a) {
      var i = xa();
      Pn(pr(i, tr)), e(!0);
      var u = Fp.transition;
      Fp.transition = {};
      var c = Fp.transition;
      Fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), Fp.transition = u, u === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function w0() {
      var e = Hm(!1), t = e[0], a = e[1], i = QD.bind(null, a), u = wo();
      return u.memoizedState = i, [t, i];
    }
    function p1() {
      var e = v0(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    function v1() {
      var e = h0(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    var h1 = !1;
    function XD() {
      return h1;
    }
    function b0() {
      var e = wo(), t = hy(), a = t.identifierPrefix, i;
      if (wr()) {
        var u = sD();
        i = ":" + a + "R" + u;
        var c = Vp++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var v = $D++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function qm() {
      var e = di(), t = e.memoizedState;
      return t;
    }
    function qD(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = xu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (m1(e))
        y1(t, u);
      else {
        var c = AT(e, t, u, i);
        if (c !== null) {
          var v = sa();
          sr(c, e, i, v), g1(c, t, i);
        }
      }
      S1(e, i);
    }
    function KD(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = xu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (m1(e))
        y1(t, u);
      else {
        var c = e.alternate;
        if (e.lanes === te && (c === null || c.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = Re.current, Re.current = Pi;
            try {
              var E = t.lastRenderedState, R = v(E, a);
              if (u.hasEagerState = !0, u.eagerState = R, Ne(R, E)) {
                OD(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Re.current = y;
            }
          }
        }
        var _ = AT(e, t, u, i);
        if (_ !== null) {
          var F = sa();
          sr(_, e, i, F), g1(_, t, i);
        }
      }
      S1(e, i);
    }
    function m1(e) {
      var t = e.alternate;
      return e === It || t !== null && t === It;
    }
    function y1(e, t) {
      Hp = jm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function g1(e, t, a) {
      if ($d(a)) {
        var i = t.lanes;
        i = Yd(i, e.pendingLanes);
        var u = ft(i, a);
        t.lanes = u, Kl(e, u);
      }
    }
    function S1(e, t, a) {
      co(e, t);
    }
    var Km = {
      readContext: Zn,
      useCallback: Yr,
      useContext: Yr,
      useEffect: Yr,
      useImperativeHandle: Yr,
      useInsertionEffect: Yr,
      useLayoutEffect: Yr,
      useMemo: Yr,
      useReducer: Yr,
      useRef: Yr,
      useState: Yr,
      useDebugValue: Yr,
      useDeferredValue: Yr,
      useTransition: Yr,
      useMutableSource: Yr,
      useSyncExternalStore: Yr,
      useId: Yr,
      unstable_isNewReconciler: ve
    }, E1 = null, C1 = null, T1 = null, w1 = null, bo = null, Pi = null, Zm = null;
    {
      var x0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      E1 = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", jt(), Mf(t), E0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", jt(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", jt(), Mf(t), Bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", jt(), Mf(a), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", jt(), Mf(t), y0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", jt(), Mf(t), g0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", jt(), Mf(t);
          var a = Re.current;
          Re.current = bo;
          try {
            return C0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", jt();
          var i = Re.current;
          Re.current = bo;
          try {
            return c0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", jt(), m0(e);
        },
        useState: function(e) {
          ne = "useState", jt();
          var t = Re.current;
          Re.current = bo;
          try {
            return Hm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", jt(), T0(e);
        },
        useTransition: function() {
          return ne = "useTransition", jt(), w0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", jt(), p0(e, t, a);
        },
        useId: function() {
          return ne = "useId", jt(), b0();
        },
        unstable_isNewReconciler: ve
      }, C1 = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", me(), E0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", me(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", me(), Bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", me(), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", me(), y0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", me(), g0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", me();
          var a = Re.current;
          Re.current = bo;
          try {
            return C0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", me();
          var i = Re.current;
          Re.current = bo;
          try {
            return c0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", me(), m0(e);
        },
        useState: function(e) {
          ne = "useState", me();
          var t = Re.current;
          Re.current = bo;
          try {
            return Hm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", me(), T0(e);
        },
        useTransition: function() {
          return ne = "useTransition", me(), w0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", me(), p0(e, t, a);
        },
        useId: function() {
          return ne = "useId", me(), b0();
        },
        unstable_isNewReconciler: ve
      }, T1 = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", me(), Qm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", me(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", me(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", me(), Ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", me(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", me(), Wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", me();
          var a = Re.current;
          Re.current = Pi;
          try {
            return Xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", me();
          var i = Re.current;
          Re.current = Pi;
          try {
            return f0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", me(), Vm();
        },
        useState: function(e) {
          ne = "useState", me();
          var t = Re.current;
          Re.current = Pi;
          try {
            return v0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", me(), Gm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", me(), c1(e);
        },
        useTransition: function() {
          return ne = "useTransition", me(), p1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", me(), Fm(e, t);
        },
        useId: function() {
          return ne = "useId", me(), qm();
        },
        unstable_isNewReconciler: ve
      }, w1 = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", me(), Qm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", me(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", me(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", me(), Ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", me(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", me(), Wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", me();
          var a = Re.current;
          Re.current = Zm;
          try {
            return Xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", me();
          var i = Re.current;
          Re.current = Zm;
          try {
            return d0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", me(), Vm();
        },
        useState: function(e) {
          ne = "useState", me();
          var t = Re.current;
          Re.current = Zm;
          try {
            return h0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", me(), Gm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", me(), f1(e);
        },
        useTransition: function() {
          return ne = "useTransition", me(), v1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", me(), Fm(e, t);
        },
        useId: function() {
          return ne = "useId", me(), qm();
        },
        unstable_isNewReconciler: ve
      }, bo = {
        readContext: function(e) {
          return x0(), Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", it(), jt(), E0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", it(), jt(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", it(), jt(), Bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", it(), jt(), S0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", it(), jt(), y0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", it(), jt(), g0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", it(), jt();
          var a = Re.current;
          Re.current = bo;
          try {
            return C0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", it(), jt();
          var i = Re.current;
          Re.current = bo;
          try {
            return c0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", it(), jt(), m0(e);
        },
        useState: function(e) {
          ne = "useState", it(), jt();
          var t = Re.current;
          Re.current = bo;
          try {
            return Hm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", it(), jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", it(), jt(), T0(e);
        },
        useTransition: function() {
          return ne = "useTransition", it(), jt(), w0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", it(), jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", it(), jt(), p0(e, t, a);
        },
        useId: function() {
          return ne = "useId", it(), jt(), b0();
        },
        unstable_isNewReconciler: ve
      }, Pi = {
        readContext: function(e) {
          return x0(), Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", it(), me(), Qm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", it(), me(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", it(), me(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", it(), me(), Ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", it(), me(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", it(), me(), Wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", it(), me();
          var a = Re.current;
          Re.current = Pi;
          try {
            return Xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", it(), me();
          var i = Re.current;
          Re.current = Pi;
          try {
            return f0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", it(), me(), Vm();
        },
        useState: function(e) {
          ne = "useState", it(), me();
          var t = Re.current;
          Re.current = Pi;
          try {
            return v0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", it(), me(), Gm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", it(), me(), c1(e);
        },
        useTransition: function() {
          return ne = "useTransition", it(), me(), p1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", it(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", it(), me(), Fm(e, t);
        },
        useId: function() {
          return ne = "useId", it(), me(), qm();
        },
        unstable_isNewReconciler: ve
      }, Zm = {
        readContext: function(e) {
          return x0(), Zn(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", it(), me(), Qm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", it(), me(), Zn(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", it(), me(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", it(), me(), Ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", it(), me(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", it(), me(), Wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", it(), me();
          var a = Re.current;
          Re.current = Pi;
          try {
            return Xm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", it(), me();
          var i = Re.current;
          Re.current = Pi;
          try {
            return d0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", it(), me(), Vm();
        },
        useState: function(e) {
          ne = "useState", it(), me();
          var t = Re.current;
          Re.current = Pi;
          try {
            return h0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", it(), me(), Gm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", it(), me(), f1(e);
        },
        useTransition: function() {
          return ne = "useTransition", it(), me(), v1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", it(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", it(), me(), Fm(e, t);
        },
        useId: function() {
          return ne = "useId", it(), me(), qm();
        },
        unstable_isNewReconciler: ve
      };
    }
    var Cu = f.unstable_now, b1 = 0, Jm = -1, Wp = -1, ey = -1, R0 = !1, ty = !1;
    function x1() {
      return R0;
    }
    function ZD() {
      ty = !0;
    }
    function JD() {
      R0 = !1, ty = !1;
    }
    function eO() {
      R0 = ty, ty = !1;
    }
    function R1() {
      return b1;
    }
    function _1() {
      b1 = Cu();
    }
    function _0(e) {
      Wp = Cu(), e.actualStartTime < 0 && (e.actualStartTime = Cu());
    }
    function D1(e) {
      Wp = -1;
    }
    function ny(e, t) {
      if (Wp >= 0) {
        var a = Cu() - Wp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Wp = -1;
      }
    }
    function xo(e) {
      if (Jm >= 0) {
        var t = Cu() - Jm;
        Jm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case $:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function D0(e) {
      if (ey >= 0) {
        var t = Cu() - ey;
        ey = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case $:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ro() {
      Jm = Cu();
    }
    function O0() {
      ey = Cu();
    }
    function k0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function As(e, t) {
      return {
        value: e,
        source: t,
        stack: ed(t),
        digest: null
      };
    }
    function M0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function tO(e, t) {
      return !0;
    }
    function N0(e, t) {
      try {
        var a = tO(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, c = t.stack, v = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var y = u ? ut(u) : null, E = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === O)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = ut(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var F = E + `
` + v + `

` + ("" + R);
        console.error(F);
      } catch (P) {
        setTimeout(function() {
          throw P;
        });
      }
    }
    var nO = typeof WeakMap == "function" ? WeakMap : Map;
    function O1(e, t, a) {
      var i = yl(Gt, a);
      i.tag = NS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qk(u), N0(e, t);
      }, i;
    }
    function L0(e, t, a) {
      var i = yl(Gt, a);
      i.tag = NS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var c = t.value;
        i.payload = function() {
          return u(c);
        }, i.callback = function() {
          Hw(e), N0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        Hw(e), N0(e, t), typeof u != "function" && Yk(this);
        var E = t.value, R = t.stack;
        this.componentDidCatch(E, {
          componentStack: R !== null ? R : ""
        }), typeof u != "function" && (Br(e.lanes, Je) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ut(e) || "Unknown"));
      }), i;
    }
    function k1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new nO(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var c = Xk.bind(null, e, t, a);
        er && lv(e, a), t.then(c, c);
      }
    }
    function rO(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        u.add(a);
    }
    function aO(e, t) {
      var a = e.tag;
      if ((e.mode & gt) === qe && (a === T || a === V || a === re)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function M1(e) {
      var t = e;
      do {
        if (t.tag === K && ID(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function N1(e, t, a, i, u) {
      if ((e.mode & gt) === qe) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= rt, a.flags |= ns, a.flags &= ~(yc | ta), a.tag === b) {
            var c = a.alternate;
            if (c === null)
              a.tag = pe;
            else {
              var v = yl(Gt, Je);
              v.tag = Rm, yu(a, v, Je);
            }
          }
          a.lanes = ft(a.lanes, Je);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function iO(e, t, a, i, u) {
      if (a.flags |= ta, er && lv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        aO(a), wr() && a.mode & gt && TT();
        var v = M1(t);
        if (v !== null) {
          v.flags &= ~vn, N1(v, t, a, e, u), v.mode & gt && k1(e, c, u), rO(v, e, c);
          return;
        } else {
          if (!Xl(u)) {
            k1(e, c, u), dE();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (wr() && a.mode & gt) {
        TT();
        var E = M1(t);
        if (E !== null) {
          (E.flags & Gn) === We && (E.flags |= vn), N1(E, t, a, e, u), xS(As(i, a));
          return;
        }
      }
      i = As(i, a), jk(i);
      var R = t;
      do {
        switch (R.tag) {
          case O: {
            var _ = i;
            R.flags |= Gn;
            var F = Un(u);
            R.lanes = ft(R.lanes, F);
            var P = O1(R, _, F);
            zS(R, P);
            return;
          }
          case b:
            var Y = i, G = R.type, Z = R.stateNode;
            if ((R.flags & rt) === We && (typeof G.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !Mw(Z))) {
              R.flags |= Gn;
              var De = Un(u);
              R.lanes = ft(R.lanes, De);
              var Ge = L0(R, Y, De);
              zS(R, Ge);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function oO() {
      return null;
    }
    var Yp = d.ReactCurrentOwner, ji = !1, A0, Gp, z0, U0, P0, zs, j0, ry;
    A0 = {}, Gp = {}, z0 = {}, U0 = {}, P0 = {}, zs = !1, j0 = {}, ry = {};
    function la(e, t, a, i) {
      e === null ? t.child = qT(t, null, a, i) : t.child = Rf(t, e.child, a, i);
    }
    function lO(e, t, a, i) {
      t.child = Rf(t, e.child, null, i), t.child = Rf(t, null, a, i);
    }
    function L1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && Ni(
          c,
          i,
          // Resolved props
          "prop",
          Wt(a)
        );
      }
      var v = a.render, y = t.ref, E, R;
      xf(t, u), so(t);
      {
        if (Yp.current = t, Ba(!0), E = Nf(e, t, v, i, y, u), R = Lf(), t.mode & sn) {
          zn(!0);
          try {
            E = Nf(e, t, v, i, y, u), R = Lf();
          } finally {
            zn(!1);
          }
        }
        Ba(!1);
      }
      return Yo(), e !== null && !ji ? (t1(e, t, u), gl(e, t, u)) : (wr() && R && SS(t), t.flags |= no, la(e, t, E, u), t.child);
    }
    function A1(e, t, a, i, u) {
      if (e === null) {
        var c = a.type;
        if (dM(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = c;
          return v = Vf(c), t.tag = re, t.type = v, V0(t, c), z1(e, t, v, i, u);
        }
        {
          var y = c.propTypes;
          y && Ni(
            y,
            i,
            // Resolved props
            "prop",
            Wt(c)
          );
        }
        var E = wE(a.type, null, i, t, t.mode, u);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var R = a.type, _ = R.propTypes;
        _ && Ni(
          _,
          i,
          // Resolved props
          "prop",
          Wt(R)
        );
      }
      var F = e.child, P = G0(e, u);
      if (!P) {
        var Y = F.memoizedProps, G = a.compare;
        if (G = G !== null ? G : Ve, G(Y, i) && e.ref === t.ref)
          return gl(e, t, u);
      }
      t.flags |= no;
      var Z = Hs(F, i);
      return Z.ref = t.ref, Z.return = t, t.child = Z, Z;
    }
    function z1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Ke) {
          var v = c, y = v._payload, E = v._init;
          try {
            c = E(y);
          } catch {
            c = null;
          }
          var R = c && c.propTypes;
          R && Ni(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Wt(c)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Ve(_, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ji = !1, t.pendingProps = i = _, G0(e, u))
            (e.flags & ns) !== We && (ji = !0);
          else
            return t.lanes = e.lanes, gl(e, t, u);
      }
      return F0(e, t, a, i, u);
    }
    function U1(e, t, a) {
      var i = t.pendingProps, u = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Te)
        if ((t.mode & gt) === qe) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, my(t, a);
        } else if (Br(a, Ir)) {
          var F = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var P = c !== null ? c.baseLanes : a;
          my(t, P);
        } else {
          var y = null, E;
          if (c !== null) {
            var R = c.baseLanes;
            E = ft(R, a);
          } else
            E = a;
          t.lanes = t.childLanes = Ir;
          var _ = {
            baseLanes: E,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, my(t, E), null;
        }
      else {
        var Y;
        c !== null ? (Y = ft(c.baseLanes, a), t.memoizedState = null) : Y = a, my(t, Y);
      }
      return la(e, t, u, a), t.child;
    }
    function uO(e, t, a) {
      var i = t.pendingProps;
      return la(e, t, i, a), t.child;
    }
    function sO(e, t, a) {
      var i = t.pendingProps.children;
      return la(e, t, i, a), t.child;
    }
    function cO(e, t, a) {
      {
        t.flags |= ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, c = u.children;
      return la(e, t, c, a), t.child;
    }
    function P1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ur, t.flags |= Od);
    }
    function F0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && Ni(
          c,
          i,
          // Resolved props
          "prop",
          Wt(a)
        );
      }
      var v;
      {
        var y = Sf(t, a, !0);
        v = Ef(t, y);
      }
      var E, R;
      xf(t, u), so(t);
      {
        if (Yp.current = t, Ba(!0), E = Nf(e, t, a, i, v, u), R = Lf(), t.mode & sn) {
          zn(!0);
          try {
            E = Nf(e, t, a, i, v, u), R = Lf();
          } finally {
            zn(!1);
          }
        }
        Ba(!1);
      }
      return Yo(), e !== null && !ji ? (t1(e, t, u), gl(e, t, u)) : (wr() && R && SS(t), t.flags |= no, la(e, t, E, u), t.child);
    }
    function j1(e, t, a, i, u) {
      {
        switch (_M(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, y = new v(t.memoizedProps, c.context), E = y.state;
            c.updater.enqueueSetState(c, E, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= Gn;
            var R = new Error("Simulated error coming from DevTools"), _ = Un(u);
            t.lanes = ft(t.lanes, _);
            var F = L0(t, As(R, t), _);
            zS(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var P = a.propTypes;
          P && Ni(
            P,
            i,
            // Resolved props
            "prop",
            Wt(a)
          );
        }
      }
      var Y;
      Co(a) ? (Y = !0, hm(t)) : Y = !1, xf(t, u);
      var G = t.stateNode, Z;
      G === null ? (iy(e, t), WT(t, a, i), GS(t, a, i, u), Z = !0) : e === null ? Z = UD(t, a, i, u) : Z = PD(e, t, a, i, u);
      var De = H0(e, t, a, Z, Y, u);
      {
        var Ge = t.stateNode;
        Z && Ge.props !== i && (zs || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ut(t) || "a component"), zs = !0);
      }
      return De;
    }
    function H0(e, t, a, i, u, c) {
      P1(e, t);
      var v = (t.flags & rt) !== We;
      if (!i && !v)
        return u && gT(t, a, !1), gl(e, t, c);
      var y = t.stateNode;
      Yp.current = t;
      var E;
      if (v && typeof a.getDerivedStateFromError != "function")
        E = null, D1();
      else {
        so(t);
        {
          if (Ba(!0), E = y.render(), t.mode & sn) {
            zn(!0);
            try {
              y.render();
            } finally {
              zn(!1);
            }
          }
          Ba(!1);
        }
        Yo();
      }
      return t.flags |= no, e !== null && v ? lO(e, t, E, c) : la(e, t, E, c), t.memoizedState = y.state, u && gT(t, a, !0), t.child;
    }
    function F1(e) {
      var t = e.stateNode;
      t.pendingContext ? mT(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mT(e, t.context, !1), JS(e, t.containerInfo);
    }
    function fO(e, t, a) {
      if (F1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, c = u.element;
      PT(e, t), km(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (u.isDehydrated) {
        var E = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, R = t.updateQueue;
        if (R.baseState = E, t.memoizedState = E, t.flags & vn) {
          var _ = As(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return H1(e, t, y, a, _);
        } else if (y !== c) {
          var F = As(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return H1(e, t, y, a, F);
        } else {
          hD(t);
          var P = qT(t, null, y, a);
          t.child = P;
          for (var Y = P; Y; )
            Y.flags = Y.flags & ~Kt | Ea, Y = Y.sibling;
        }
      } else {
        if (wf(), y === c)
          return gl(e, t, a);
        la(e, t, y, a);
      }
      return t.child;
    }
    function H1(e, t, a, i, u) {
      return wf(), xS(u), t.flags |= vn, la(e, t, a, i), t.child;
    }
    function dO(e, t, a) {
      ZT(t), e === null && bS(t);
      var i = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = u.children, y = iS(i, u);
      return y ? v = null : c !== null && iS(i, c) && (t.flags |= Pt), P1(e, t), la(e, t, v, a), t.child;
    }
    function pO(e, t) {
      return e === null && bS(t), null;
    }
    function vO(e, t, a, i) {
      iy(e, t);
      var u = t.pendingProps, c = a, v = c._payload, y = c._init, E = y(v);
      t.type = E;
      var R = t.tag = pM(E), _ = zi(E, u), F;
      switch (R) {
        case T:
          return V0(t, E), t.type = E = Vf(E), F = F0(null, t, E, _, i), F;
        case b:
          return t.type = E = yE(E), F = j1(null, t, E, _, i), F;
        case V:
          return t.type = E = gE(E), F = L1(null, t, E, _, i), F;
        case fe: {
          if (t.type !== t.elementType) {
            var P = E.propTypes;
            P && Ni(
              P,
              _,
              // Resolved for outer only
              "prop",
              Wt(E)
            );
          }
          return F = A1(
            null,
            t,
            E,
            zi(E.type, _),
            // The inner type can have defaults too
            i
          ), F;
        }
      }
      var Y = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Ke && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function hO(e, t, a, i, u) {
      iy(e, t), t.tag = b;
      var c;
      return Co(a) ? (c = !0, hm(t)) : c = !1, xf(t, u), WT(t, a, i), GS(t, a, i, u), H0(null, t, a, !0, c, u);
    }
    function mO(e, t, a, i) {
      iy(e, t);
      var u = t.pendingProps, c;
      {
        var v = Sf(t, a, !1);
        c = Ef(t, v);
      }
      xf(t, i);
      var y, E;
      so(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Wt(a) || "Unknown";
          A0[R] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), A0[R] = !0);
        }
        t.mode & sn && Ai.recordLegacyContextWarning(t, null), Ba(!0), Yp.current = t, y = Nf(null, t, a, u, c, i), E = Lf(), Ba(!1);
      }
      if (Yo(), t.flags |= no, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var _ = Wt(a) || "Unknown";
        Gp[_] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Gp[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var F = Wt(a) || "Unknown";
          Gp[F] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), Gp[F] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var P = !1;
        return Co(a) ? (P = !0, hm(t)) : P = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, AS(t), $T(t, y), GS(t, a, u, i), H0(null, t, a, !0, P, i);
      } else {
        if (t.tag = T, t.mode & sn) {
          zn(!0);
          try {
            y = Nf(null, t, a, u, c, i), E = Lf();
          } finally {
            zn(!1);
          }
        }
        return wr() && E && SS(t), la(null, t, y, i), V0(t, a), t.child;
      }
    }
    function V0(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ma();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", c = e._debugSource;
          c && (u = c.fileName + ":" + c.lineNumber), P0[u] || (P0[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Wt(t) || "Unknown";
          U0[v] || (g("%s: Function components do not support getDerivedStateFromProps.", v), U0[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = Wt(t) || "Unknown";
          z0[y] || (g("%s: Function components do not support contextType.", y), z0[y] = !0);
        }
      }
    }
    var I0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: xt
    };
    function B0(e) {
      return {
        baseLanes: e,
        cachePool: oO(),
        transitions: null
      };
    }
    function yO(e, t) {
      var a = null;
      return {
        baseLanes: ft(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function gO(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return n0(e, jp);
    }
    function SO(e, t) {
      return ql(e.childLanes, t);
    }
    function V1(e, t, a) {
      var i = t.pendingProps;
      DM(t) && (t.flags |= rt);
      var u = Ui.current, c = !1, v = (t.flags & rt) !== We;
      if (v || gO(u, e) ? (c = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (u = VD(u, e1)), u = Df(u), Su(t, u), e === null) {
        bS(t);
        var y = t.memoizedState;
        if (y !== null) {
          var E = y.dehydrated;
          if (E !== null)
            return bO(t, E);
        }
        var R = i.children, _ = i.fallback;
        if (c) {
          var F = EO(t, R, _, a), P = t.child;
          return P.memoizedState = B0(a), t.memoizedState = I0, F;
        } else
          return $0(t, R);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var G = Y.dehydrated;
          if (G !== null)
            return xO(e, t, v, i, G, Y, a);
        }
        if (c) {
          var Z = i.fallback, De = i.children, Ge = TO(e, t, De, Z, a), Ue = t.child, _t = e.child.memoizedState;
          return Ue.memoizedState = _t === null ? B0(a) : yO(_t, a), Ue.childLanes = SO(e, a), t.memoizedState = I0, Ge;
        } else {
          var Tt = i.children, I = CO(e, t, Tt, a);
          return t.memoizedState = null, I;
        }
      }
    }
    function $0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, c = W0(u, i);
      return c.return = e, e.child = c, c;
    }
    function EO(e, t, a, i) {
      var u = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, y, E;
      return (u & gt) === qe && c !== null ? (y = c, y.childLanes = te, y.pendingProps = v, e.mode & Ze && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), E = _u(a, u, i, null)) : (y = W0(v, u), E = _u(a, u, i, null)), y.return = e, E.return = e, y.sibling = E, e.child = y, E;
    }
    function W0(e, t, a) {
      return Iw(e, t, te, null);
    }
    function I1(e, t) {
      return Hs(e, t);
    }
    function CO(e, t, a, i) {
      var u = e.child, c = u.sibling, v = I1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & gt) === qe && (v.lanes = i), v.return = t, v.sibling = null, c !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [c], t.flags |= At) : y.push(c);
      }
      return t.child = v, v;
    }
    function TO(e, t, a, i, u) {
      var c = t.mode, v = e.child, y = v.sibling, E = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & gt) === qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var _ = t.child;
        R = _, R.childLanes = te, R.pendingProps = E, t.mode & Ze && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = v.selfBaseDuration, R.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        R = I1(v, E), R.subtreeFlags = v.subtreeFlags & Jn;
      var F;
      return y !== null ? F = Hs(y, i) : (F = _u(i, c, u, null), F.flags |= Kt), F.return = t, R.return = t, R.sibling = F, t.child = R, F;
    }
    function ay(e, t, a, i) {
      i !== null && xS(i), Rf(t, e.child, null, a);
      var u = t.pendingProps, c = u.children, v = $0(t, c);
      return v.flags |= Kt, t.memoizedState = null, v;
    }
    function wO(e, t, a, i, u) {
      var c = t.mode, v = {
        mode: "visible",
        children: a
      }, y = W0(v, c), E = _u(i, c, u, null);
      return E.flags |= Kt, y.return = t, E.return = t, y.sibling = E, t.child = y, (t.mode & gt) !== qe && Rf(t, e.child, null, u), E;
    }
    function bO(e, t, a) {
      return (e.mode & gt) === qe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Je) : sS(t) ? e.lanes = Xo : e.lanes = Ir, null;
    }
    function xO(e, t, a, i, u, c, v) {
      if (a)
        if (t.flags & vn) {
          t.flags &= ~vn;
          var I = M0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ay(e, t, v, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var J = i.children, B = i.fallback, se = wO(e, t, J, B, v), Oe = t.child;
          return Oe.memoizedState = B0(v), t.memoizedState = I0, se;
        }
      else {
        if (pD(), (t.mode & gt) === qe)
          return ay(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (sS(u)) {
          var y, E, R;
          {
            var _ = k_(u);
            y = _.digest, E = _.message, R = _.stack;
          }
          var F;
          E ? F = new Error(E) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var P = M0(F, y, R);
          return ay(e, t, v, P);
        }
        var Y = Br(v, e.childLanes);
        if (ji || Y) {
          var G = hy();
          if (G !== null) {
            var Z = kg(G, v);
            if (Z !== xt && Z !== c.retryLane) {
              c.retryLane = Z;
              var De = Gt;
              ka(e, Z), sr(G, e, Z, De);
            }
          }
          dE();
          var Ge = M0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ay(e, t, v, Ge);
        } else if (cT(u)) {
          t.flags |= rt, t.child = e.child;
          var Ue = qk.bind(null, e);
          return M_(u, Ue), null;
        } else {
          mD(t, u, c.treeContext);
          var _t = i.children, Tt = $0(t, _t);
          return Tt.flags |= Ea, Tt;
        }
      }
    }
    function B1(e, t, a) {
      e.lanes = ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ft(i.lanes, t)), kS(e.return, t, a);
    }
    function RO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === K) {
          var u = i.memoizedState;
          u !== null && B1(i, a, e);
        } else if (i.tag === be)
          B1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _O(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Pm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function DO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !j0[e])
        if (j0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function OO(e, t) {
      e !== void 0 && !ry[e] && (e !== "collapsed" && e !== "hidden" ? (ry[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ry[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $1(e, t) {
      {
        var a = Wn(e), i = !a && typeof hi(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Wn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!$1(e[a], a))
              return;
        } else {
          var i = hi(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var c = u.next(), v = 0; !c.done; c = u.next()) {
                if (!$1(c.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Y0(e, t, a, i, u) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = u);
    }
    function W1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, c = i.tail, v = i.children;
      DO(u), OO(c, u), kO(v, u), la(e, t, v, a);
      var y = Ui.current, E = n0(y, jp);
      if (E)
        y = r0(y, jp), t.flags |= rt;
      else {
        var R = e !== null && (e.flags & rt) !== We;
        R && RO(t, t.child, a), y = Df(y);
      }
      if (Su(t, y), (t.mode & gt) === qe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var _ = _O(t.child), F;
            _ === null ? (F = t.child, t.child = null) : (F = _.sibling, _.sibling = null), Y0(
              t,
              !1,
              // isBackwards
              F,
              _,
              c
            );
            break;
          }
          case "backwards": {
            var P = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var G = Y.alternate;
              if (G !== null && Pm(G) === null) {
                t.child = Y;
                break;
              }
              var Z = Y.sibling;
              Y.sibling = P, P = Y, Y = Z;
            }
            Y0(
              t,
              !0,
              // isBackwards
              P,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            Y0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function MO(e, t, a) {
      JS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Rf(t, null, i, a) : la(e, t, i, a), t.child;
    }
    var Y1 = !1;
    function NO(e, t, a) {
      var i = t.type, u = i._context, c = t.pendingProps, v = t.memoizedProps, y = c.value;
      {
        "value" in c || Y1 || (Y1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && Ni(E, c, "prop", "Context.Provider");
      }
      if (LT(t, u, y), v !== null) {
        var R = v.value;
        if (Ne(R, y)) {
          if (v.children === c.children && !pm())
            return gl(e, t, a);
        } else
          RD(t, u, a);
      }
      var _ = c.children;
      return la(e, t, _, a), t.child;
    }
    var G1 = !1;
    function LO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (G1 || (G1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, c = u.children;
      typeof c != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var v = Zn(i);
      so(t);
      var y;
      return Yp.current = t, Ba(!0), y = c(v), Ba(!1), Yo(), t.flags |= no, la(e, t, y, a), t.child;
    }
    function Qp() {
      ji = !0;
    }
    function iy(e, t) {
      (t.mode & gt) === qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Kt);
    }
    function gl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), D1(), ov(t.lanes), Br(a, t.childLanes) ? (jD(e, t), t.child) : null;
    }
    function AO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= At) : c.push(e), a.flags |= Kt, a;
      }
    }
    function G0(e, t) {
      var a = e.lanes;
      return !!Br(a, t);
    }
    function zO(e, t, a) {
      switch (t.tag) {
        case O:
          F1(t), t.stateNode, wf();
          break;
        case A:
          ZT(t);
          break;
        case b: {
          var i = t.type;
          Co(i) && hm(t);
          break;
        }
        case L:
          JS(t, t.stateNode.containerInfo);
          break;
        case Q: {
          var u = t.memoizedProps.value, c = t.type._context;
          LT(t, c, u);
          break;
        }
        case $:
          {
            var v = Br(a, t.childLanes);
            v && (t.flags |= ct);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case K: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Su(t, Df(Ui.current)), t.flags |= rt, null;
            var R = t.child, _ = R.childLanes;
            if (Br(a, _))
              return V1(e, t, a);
            Su(t, Df(Ui.current));
            var F = gl(e, t, a);
            return F !== null ? F.sibling : null;
          } else
            Su(t, Df(Ui.current));
          break;
        }
        case be: {
          var P = (e.flags & rt) !== We, Y = Br(a, t.childLanes);
          if (P) {
            if (Y)
              return W1(e, t, a);
            t.flags |= rt;
          }
          var G = t.memoizedState;
          if (G !== null && (G.rendering = null, G.tail = null, G.lastEffect = null), Su(t, Ui.current), Y)
            break;
          return null;
        }
        case ce:
        case Ie:
          return t.lanes = te, U1(e, t, a);
      }
      return gl(e, t, a);
    }
    function Q1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return AO(e, t, wE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || pm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ji = !0;
        else {
          var c = G0(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === We)
            return ji = !1, zO(e, t, a);
          (e.flags & ns) !== We ? ji = !0 : ji = !1;
        }
      } else if (ji = !1, wr() && lD(t)) {
        var v = t.index, y = uD();
        CT(t, y, v);
      }
      switch (t.lanes = te, t.tag) {
        case D:
          return mO(e, t, t.type, a);
        case Ce: {
          var E = t.elementType;
          return vO(e, t, E, a);
        }
        case T: {
          var R = t.type, _ = t.pendingProps, F = t.elementType === R ? _ : zi(R, _);
          return F0(e, t, R, F, a);
        }
        case b: {
          var P = t.type, Y = t.pendingProps, G = t.elementType === P ? Y : zi(P, Y);
          return j1(e, t, P, G, a);
        }
        case O:
          return fO(e, t, a);
        case A:
          return dO(e, t, a);
        case N:
          return pO(e, t);
        case K:
          return V1(e, t, a);
        case L:
          return MO(e, t, a);
        case V: {
          var Z = t.type, De = t.pendingProps, Ge = t.elementType === Z ? De : zi(Z, De);
          return L1(e, t, Z, Ge, a);
        }
        case U:
          return uO(e, t, a);
        case q:
          return sO(e, t, a);
        case $:
          return cO(e, t, a);
        case Q:
          return NO(e, t, a);
        case ee:
          return LO(e, t, a);
        case fe: {
          var Ue = t.type, _t = t.pendingProps, Tt = zi(Ue, _t);
          if (t.type !== t.elementType) {
            var I = Ue.propTypes;
            I && Ni(
              I,
              Tt,
              // Resolved for outer only
              "prop",
              Wt(Ue)
            );
          }
          return Tt = zi(Ue.type, Tt), A1(e, t, Ue, Tt, a);
        }
        case re:
          return z1(e, t, t.type, t.pendingProps, a);
        case pe: {
          var J = t.type, B = t.pendingProps, se = t.elementType === J ? B : zi(J, B);
          return hO(e, t, J, se, a);
        }
        case be:
          return W1(e, t, a);
        case Pe:
          break;
        case ce:
          return U1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Af(e) {
      e.flags |= ct;
    }
    function X1(e) {
      e.flags |= Ur, e.flags |= Od;
    }
    var q1, Q0, K1, Z1;
    q1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === A || u.tag === N)
          a_(e, u.stateNode);
        else if (u.tag !== L) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, Q0 = function(e, t) {
    }, K1 = function(e, t, a, i, u) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, y = e0(), E = o_(v, a, c, i, u, y);
        t.updateQueue = E, E && Af(t);
      }
    }, Z1 = function(e, t, a, i) {
      a !== i && Af(t);
    };
    function Xp(e, t) {
      if (!wr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, c = null; u !== null; )
              u.alternate !== null && (c = u), u = u.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = te, i = We;
      if (t) {
        if ((e.mode & Ze) !== qe) {
          for (var E = e.selfBaseDuration, R = e.child; R !== null; )
            a = ft(a, ft(R.lanes, R.childLanes)), i |= R.subtreeFlags & Jn, i |= R.flags & Jn, E += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = E;
        } else
          for (var _ = e.child; _ !== null; )
            a = ft(a, ft(_.lanes, _.childLanes)), i |= _.subtreeFlags & Jn, i |= _.flags & Jn, _.return = e, _ = _.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ze) !== qe) {
          for (var u = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            a = ft(a, ft(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, u += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = c;
        } else
          for (var y = e.child; y !== null; )
            a = ft(a, ft(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function UO(e, t, a) {
      if (CD() && (t.mode & gt) !== qe && (t.flags & rt) === We)
        return DT(t), wf(), t.flags |= vn | ta | Gn, !1;
      var i = Em(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (SD(t), xr(t), (t.mode & Ze) !== qe) {
            var u = a !== null;
            if (u) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (wf(), (t.flags & rt) === We && (t.memoizedState = null), t.flags |= ct, xr(t), (t.mode & Ze) !== qe) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return OT(), !0;
    }
    function J1(e, t, a) {
      var i = t.pendingProps;
      switch (ES(t), t.tag) {
        case D:
        case Ce:
        case re:
        case T:
        case V:
        case U:
        case q:
        case $:
        case ee:
        case fe:
          return xr(t), null;
        case b: {
          var u = t.type;
          return Co(u) && vm(t), xr(t), null;
        }
        case O: {
          var c = t.stateNode;
          if (_f(t), mS(t), i0(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = Em(t);
            if (v)
              Af(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & vn) !== We) && (t.flags |= Sa, OT());
            }
          }
          return Q0(e, t), xr(t), null;
        }
        case A: {
          t0(t);
          var E = KT(), R = t.type;
          if (e !== null && t.stateNode != null)
            K1(e, t, R, i, E), e.ref !== t.ref && X1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return xr(t), null;
            }
            var _ = e0(), F = Em(t);
            if (F)
              yD(t, E, _) && Af(t);
            else {
              var P = r_(R, i, E, _, t);
              q1(P, t, !1, !1), t.stateNode = P, i_(P, R, i, E) && Af(t);
            }
            t.ref !== null && X1(t);
          }
          return xr(t), null;
        }
        case N: {
          var Y = i;
          if (e && t.stateNode != null) {
            var G = e.memoizedProps;
            Z1(e, t, G, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = KT(), De = e0(), Ge = Em(t);
            Ge ? gD(t) && Af(t) : t.stateNode = l_(Y, Z, De, t);
          }
          return xr(t), null;
        }
        case K: {
          Of(t);
          var Ue = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = UO(e, t, Ue);
            if (!_t)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & rt) !== We)
            return t.lanes = a, (t.mode & Ze) !== qe && k0(t), t;
          var Tt = Ue !== null, I = e !== null && e.memoizedState !== null;
          if (Tt !== I && Tt) {
            var J = t.child;
            if (J.flags |= ro, (t.mode & gt) !== qe) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !St);
              B || n0(Ui.current, e1) ? Pk() : dE();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= ct), xr(t), (t.mode & Ze) !== qe && Tt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case L:
          return _f(t), Q0(e, t), e === null && eD(t.stateNode.containerInfo), xr(t), null;
        case Q:
          var we = t.type._context;
          return OS(we, t), xr(t), null;
        case pe: {
          var tt = t.type;
          return Co(tt) && vm(t), xr(t), null;
        }
        case be: {
          Of(t);
          var lt = t.memoizedState;
          if (lt === null)
            return xr(t), null;
          var Bt = (t.flags & rt) !== We, Nt = lt.rendering;
          if (Nt === null)
            if (Bt)
              Xp(lt, !1);
            else {
              var Hn = Fk() && (e === null || (e.flags & rt) === We);
              if (!Hn)
                for (var Lt = t.child; Lt !== null; ) {
                  var kn = Pm(Lt);
                  if (kn !== null) {
                    Bt = !0, t.flags |= rt, Xp(lt, !1);
                    var Gr = kn.updateQueue;
                    return Gr !== null && (t.updateQueue = Gr, t.flags |= ct), t.subtreeFlags = We, FD(t, a), Su(t, r0(Ui.current, jp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              lt.tail !== null && un() > Ew() && (t.flags |= rt, Bt = !0, Xp(lt, !1), t.lanes = Id);
            }
          else {
            if (!Bt) {
              var kr = Pm(Nt);
              if (kr !== null) {
                t.flags |= rt, Bt = !0;
                var Ka = kr.updateQueue;
                if (Ka !== null && (t.updateQueue = Ka, t.flags |= ct), Xp(lt, !0), lt.tail === null && lt.tailMode === "hidden" && !Nt.alternate && !wr())
                  return xr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                un() * 2 - lt.renderingStartTime > Ew() && a !== Ir && (t.flags |= rt, Bt = !0, Xp(lt, !1), t.lanes = Id);
            }
            if (lt.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var ca = lt.last;
              ca !== null ? ca.sibling = Nt : t.child = Nt, lt.last = Nt;
            }
          }
          if (lt.tail !== null) {
            var fa = lt.tail;
            lt.rendering = fa, lt.tail = fa.sibling, lt.renderingStartTime = un(), fa.sibling = null;
            var Qr = Ui.current;
            return Bt ? Qr = r0(Qr, jp) : Qr = Df(Qr), Su(t, Qr), fa;
          }
          return xr(t), null;
        }
        case Pe:
          break;
        case ce:
        case Ie: {
          fE(t);
          var wl = t.memoizedState, If = wl !== null;
          if (e !== null) {
            var fv = e.memoizedState, Oo = fv !== null;
            Oo !== If && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Te && (t.flags |= ro);
          }
          return !If || (t.mode & gt) === qe ? xr(t) : Br(Do, Ir) && (xr(t), t.subtreeFlags & (Kt | ct) && (t.flags |= ro)), null;
        }
        case wt:
          return null;
        case mt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function PO(e, t, a) {
      switch (ES(t), t.tag) {
        case b: {
          var i = t.type;
          Co(i) && vm(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | rt, (t.mode & Ze) !== qe && k0(t), t) : null;
        }
        case O: {
          t.stateNode, _f(t), mS(t), i0();
          var c = t.flags;
          return (c & Gn) !== We && (c & rt) === We ? (t.flags = c & ~Gn | rt, t) : null;
        }
        case A:
          return t0(t), null;
        case K: {
          Of(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            wf();
          }
          var y = t.flags;
          return y & Gn ? (t.flags = y & ~Gn | rt, (t.mode & Ze) !== qe && k0(t), t) : null;
        }
        case be:
          return Of(t), null;
        case L:
          return _f(t), null;
        case Q:
          var E = t.type._context;
          return OS(E, t), null;
        case ce:
        case Ie:
          return fE(t), null;
        case wt:
          return null;
        default:
          return null;
      }
    }
    function ew(e, t, a) {
      switch (ES(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && vm(t);
          break;
        }
        case O: {
          t.stateNode, _f(t), mS(t), i0();
          break;
        }
        case A: {
          t0(t);
          break;
        }
        case L:
          _f(t);
          break;
        case K:
          Of(t);
          break;
        case be:
          Of(t);
          break;
        case Q:
          var u = t.type._context;
          OS(u, t);
          break;
        case ce:
        case Ie:
          fE(t);
          break;
      }
    }
    var tw = null;
    tw = /* @__PURE__ */ new Set();
    var oy = !1, Rr = !1, jO = typeof WeakSet == "function" ? WeakSet : Set, Le = null, zf = null, Uf = null;
    function FO(e) {
      $o(null, function() {
        throw e;
      }), _d();
    }
    var HO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ze)
        try {
          Ro(), t.componentWillUnmount();
        } finally {
          xo(e);
        }
      else
        t.componentWillUnmount();
    };
    function nw(e, t) {
      try {
        Tu(rr, e);
      } catch (a) {
        tn(e, t, a);
      }
    }
    function X0(e, t, a) {
      try {
        HO(e, a);
      } catch (i) {
        tn(e, t, i);
      }
    }
    function VO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        tn(e, t, i);
      }
    }
    function rw(e, t) {
      try {
        iw(e);
      } catch (a) {
        tn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (zt && gn && e.mode & Ze)
              try {
                Ro(), i = a(null);
              } finally {
                xo(e);
              }
            else
              i = a(null);
          } catch (u) {
            tn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ut(e));
        } else
          a.current = null;
    }
    function ly(e, t, a) {
      try {
        a();
      } catch (i) {
        tn(e, t, i);
      }
    }
    var aw = !1;
    function IO(e, t) {
      t_(e.containerInfo), Le = t, BO();
      var a = aw;
      return aw = !1, a;
    }
    function BO() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & Il) !== We && t !== null ? (t.return = e, Le = t) : $O();
      }
    }
    function $O() {
      for (; Le !== null; ) {
        var e = Le;
        Vt(e);
        try {
          WO(e);
        } catch (a) {
          tn(e, e.return, a);
        }
        An();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function WO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Sa) !== We) {
        switch (Vt(e), e.tag) {
          case T:
          case V:
          case re:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !zs && (c.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(e) || "instance"), c.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : zi(e.type, i), u);
              {
                var y = tw;
                v === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ut(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case O: {
            {
              var E = e.stateNode;
              R_(E.containerInfo);
            }
            break;
          }
          case A:
          case N:
          case L:
          case pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        An();
      }
    }
    function Fi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var c = u.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & br) !== Ma ? xc(t) : (e & rr) !== Ma && Rc(t), (e & To) !== Ma && uv(!0), ly(t, a, y), (e & To) !== Ma && uv(!1), (e & br) !== Ma ? Sh() : (e & rr) !== Ma && Bl());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function Tu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, c = u;
        do {
          if ((c.tag & e) === e) {
            (e & br) !== Ma ? gh(t) : (e & rr) !== Ma && Eh(t);
            var v = c.create;
            (e & To) !== Ma && uv(!0), c.destroy = v(), (e & To) !== Ma && uv(!1), (e & br) !== Ma ? Fd() : (e & rr) !== Ma && Ch();
            {
              var y = c.destroy;
              if (y !== void 0 && typeof y != "function") {
                var E = void 0;
                (c.tag & rr) !== We ? E = "useLayoutEffect" : (c.tag & To) !== We ? E = "useInsertionEffect" : E = "useEffect";
                var R = void 0;
                y === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? R = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + y, g("%s must not return anything besides a function, which is used for clean-up.%s", E, R);
              }
            }
          }
          c = c.next;
        } while (c !== u);
      }
    }
    function YO(e, t) {
      if ((t.flags & ct) !== We)
        switch (t.tag) {
          case $: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, c = i.onPostCommit, v = R1(), y = t.alternate === null ? "mount" : "update";
            x1() && (y = "nested-update"), typeof c == "function" && c(u, y, a, v);
            var E = t.return;
            e:
              for (; E !== null; ) {
                switch (E.tag) {
                  case O:
                    var R = E.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                  case $:
                    var _ = E.stateNode;
                    _.passiveEffectDuration += a;
                    break e;
                }
                E = E.return;
              }
            break;
          }
        }
    }
    function GO(e, t, a, i) {
      if ((a.flags & fr) !== We)
        switch (a.tag) {
          case T:
          case V:
          case re: {
            if (!Rr)
              if (a.mode & Ze)
                try {
                  Ro(), Tu(rr | nr, a);
                } finally {
                  xo(a);
                }
              else
                Tu(rr | nr, a);
            break;
          }
          case b: {
            var u = a.stateNode;
            if (a.flags & ct && !Rr)
              if (t === null)
                if (a.type === a.elementType && !zs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), a.mode & Ze)
                  try {
                    Ro(), u.componentDidMount();
                  } finally {
                    xo(a);
                  }
                else
                  u.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : zi(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !zs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), a.mode & Ze)
                  try {
                    Ro(), u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    xo(a);
                  }
                else
                  u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !zs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), FT(a, y, u));
            break;
          }
          case O: {
            var E = a.updateQueue;
            if (E !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case A:
                    R = a.child.stateNode;
                    break;
                  case b:
                    R = a.child.stateNode;
                    break;
                }
              FT(a, E, R);
            }
            break;
          }
          case A: {
            var _ = a.stateNode;
            if (t === null && a.flags & ct) {
              var F = a.type, P = a.memoizedProps;
              d_(_, F, P);
            }
            break;
          }
          case N:
            break;
          case L:
            break;
          case $: {
            {
              var Y = a.memoizedProps, G = Y.onCommit, Z = Y.onRender, De = a.stateNode.effectDuration, Ge = R1(), Ue = t === null ? "mount" : "update";
              x1() && (Ue = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, Ue, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ge);
              {
                typeof G == "function" && G(a.memoizedProps.id, Ue, De, Ge), $k(a);
                var _t = a.return;
                e:
                  for (; _t !== null; ) {
                    switch (_t.tag) {
                      case O:
                        var Tt = _t.stateNode;
                        Tt.effectDuration += De;
                        break e;
                      case $:
                        var I = _t.stateNode;
                        I.effectDuration += De;
                        break e;
                    }
                    _t = _t.return;
                  }
              }
            }
            break;
          }
          case K: {
            tk(e, a);
            break;
          }
          case be:
          case pe:
          case Pe:
          case ce:
          case Ie:
          case mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Rr || a.flags & Ur && iw(a);
    }
    function QO(e) {
      switch (e.tag) {
        case T:
        case V:
        case re: {
          if (e.mode & Ze)
            try {
              Ro(), nw(e, e.return);
            } finally {
              xo(e);
            }
          else
            nw(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && VO(e, e.return, t), rw(e, e.return);
          break;
        }
        case A: {
          rw(e, e.return);
          break;
        }
      }
    }
    function XO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === A) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? T_(u) : b_(i.stateNode, i.memoizedProps);
            } catch (v) {
              tn(e, e.return, v);
            }
          }
        } else if (i.tag === N) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? w_(c) : x_(c, i.memoizedProps);
            } catch (v) {
              tn(e, e.return, v);
            }
        } else if (!((i.tag === ce || i.tag === Ie) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function iw(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case A:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ze)
            try {
              Ro(), u = t(i);
            } finally {
              xo(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ut(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ut(e)), t.current = i;
      }
    }
    function qO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ow(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ow(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === A) {
          var a = e.stateNode;
          a !== null && rD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function KO(e) {
      for (var t = e.return; t !== null; ) {
        if (lw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function lw(e) {
      return e.tag === A || e.tag === O || e.tag === L;
    }
    function uw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || lw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== A && t.tag !== N && t.tag !== _e; ) {
            if (t.flags & Kt || t.child === null || t.tag === L)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Kt))
            return t.stateNode;
        }
    }
    function ZO(e) {
      var t = KO(e);
      switch (t.tag) {
        case A: {
          var a = t.stateNode;
          t.flags & Pt && (sT(a), t.flags &= ~Pt);
          var i = uw(e);
          K0(e, i, a);
          break;
        }
        case O:
        case L: {
          var u = t.stateNode.containerInfo, c = uw(e);
          q0(e, c, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function q0(e, t, a) {
      var i = e.tag, u = i === A || i === N;
      if (u) {
        var c = e.stateNode;
        t ? g_(a, c, t) : m_(a, c);
      } else if (i !== L) {
        var v = e.child;
        if (v !== null) {
          q0(v, t, a);
          for (var y = v.sibling; y !== null; )
            q0(y, t, a), y = y.sibling;
        }
      }
    }
    function K0(e, t, a) {
      var i = e.tag, u = i === A || i === N;
      if (u) {
        var c = e.stateNode;
        t ? y_(a, c, t) : h_(a, c);
      } else if (i !== L) {
        var v = e.child;
        if (v !== null) {
          K0(v, t, a);
          for (var y = v.sibling; y !== null; )
            K0(y, t, a), y = y.sibling;
        }
      }
    }
    var _r = null, Hi = !1;
    function JO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case A: {
                _r = i.stateNode, Hi = !1;
                break e;
              }
              case O: {
                _r = i.stateNode.containerInfo, Hi = !0;
                break e;
              }
              case L: {
                _r = i.stateNode.containerInfo, Hi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (_r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        sw(e, t, a), _r = null, Hi = !1;
      }
      qO(a);
    }
    function wu(e, t, a) {
      for (var i = a.child; i !== null; )
        sw(e, t, i), i = i.sibling;
    }
    function sw(e, t, a) {
      switch (Pd(a), a.tag) {
        case A:
          Rr || Pf(a, t);
        case N: {
          {
            var i = _r, u = Hi;
            _r = null, wu(e, t, a), _r = i, Hi = u, _r !== null && (Hi ? E_(_r, a.stateNode) : S_(_r, a.stateNode));
          }
          return;
        }
        case _e: {
          _r !== null && (Hi ? C_(_r, a.stateNode) : uS(_r, a.stateNode));
          return;
        }
        case L: {
          {
            var c = _r, v = Hi;
            _r = a.stateNode.containerInfo, Hi = !0, wu(e, t, a), _r = c, Hi = v;
          }
          return;
        }
        case T:
        case V:
        case fe:
        case re: {
          if (!Rr) {
            var y = a.updateQueue;
            if (y !== null) {
              var E = y.lastEffect;
              if (E !== null) {
                var R = E.next, _ = R;
                do {
                  var F = _, P = F.destroy, Y = F.tag;
                  P !== void 0 && ((Y & To) !== Ma ? ly(a, t, P) : (Y & rr) !== Ma && (Rc(a), a.mode & Ze ? (Ro(), ly(a, t, P), xo(a)) : ly(a, t, P), Bl())), _ = _.next;
                } while (_ !== R);
              }
            }
          }
          wu(e, t, a);
          return;
        }
        case b: {
          if (!Rr) {
            Pf(a, t);
            var G = a.stateNode;
            typeof G.componentWillUnmount == "function" && X0(a, t, G);
          }
          wu(e, t, a);
          return;
        }
        case Pe: {
          wu(e, t, a);
          return;
        }
        case ce: {
          if (
            // TODO: Remove this dead flag
            a.mode & gt
          ) {
            var Z = Rr;
            Rr = Z || a.memoizedState !== null, wu(e, t, a), Rr = Z;
          } else
            wu(e, t, a);
          break;
        }
        default: {
          wu(e, t, a);
          return;
        }
      }
    }
    function ek(e) {
      e.memoizedState;
    }
    function tk(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var c = u.dehydrated;
            c !== null && H_(c);
          }
        }
      }
    }
    function cw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new jO()), t.forEach(function(i) {
          var u = Kk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), er)
              if (zf !== null && Uf !== null)
                lv(Uf, zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function nk(e, t, a) {
      zf = a, Uf = e, Vt(t), fw(t, e), Vt(t), zf = null, Uf = null;
    }
    function Vi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var c = i[u];
          try {
            JO(e, t, c);
          } catch (E) {
            tn(c, t, E);
          }
        }
      var v = lg();
      if (t.subtreeFlags & Fr)
        for (var y = t.child; y !== null; )
          Vt(y), fw(y, e), y = y.sibling;
      Vt(v);
    }
    function fw(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case T:
        case V:
        case fe:
        case re: {
          if (Vi(t, e), _o(e), u & ct) {
            try {
              Fi(To | nr, e, e.return), Tu(To | nr, e);
            } catch (tt) {
              tn(e, e.return, tt);
            }
            if (e.mode & Ze) {
              try {
                Ro(), Fi(rr | nr, e, e.return);
              } catch (tt) {
                tn(e, e.return, tt);
              }
              xo(e);
            } else
              try {
                Fi(rr | nr, e, e.return);
              } catch (tt) {
                tn(e, e.return, tt);
              }
          }
          return;
        }
        case b: {
          Vi(t, e), _o(e), u & Ur && i !== null && Pf(i, i.return);
          return;
        }
        case A: {
          Vi(t, e), _o(e), u & Ur && i !== null && Pf(i, i.return);
          {
            if (e.flags & Pt) {
              var c = e.stateNode;
              try {
                sT(c);
              } catch (tt) {
                tn(e, e.return, tt);
              }
            }
            if (u & ct) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, E = i !== null ? i.memoizedProps : y, R = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    p_(v, _, R, E, y, e);
                  } catch (tt) {
                    tn(e, e.return, tt);
                  }
              }
            }
          }
          return;
        }
        case N: {
          if (Vi(t, e), _o(e), u & ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, P = e.memoizedProps, Y = i !== null ? i.memoizedProps : P;
            try {
              v_(F, Y, P);
            } catch (tt) {
              tn(e, e.return, tt);
            }
          }
          return;
        }
        case O: {
          if (Vi(t, e), _o(e), u & ct && i !== null) {
            var G = i.memoizedState;
            if (G.isDehydrated)
              try {
                F_(t.containerInfo);
              } catch (tt) {
                tn(e, e.return, tt);
              }
          }
          return;
        }
        case L: {
          Vi(t, e), _o(e);
          return;
        }
        case K: {
          Vi(t, e), _o(e);
          var Z = e.child;
          if (Z.flags & ro) {
            var De = Z.stateNode, Ge = Z.memoizedState, Ue = Ge !== null;
            if (De.isHidden = Ue, Ue) {
              var _t = Z.alternate !== null && Z.alternate.memoizedState !== null;
              _t || Uk();
            }
          }
          if (u & ct) {
            try {
              ek(e);
            } catch (tt) {
              tn(e, e.return, tt);
            }
            cw(e);
          }
          return;
        }
        case ce: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & gt
          ) {
            var I = Rr;
            Rr = I || Tt, Vi(t, e), Rr = I;
          } else
            Vi(t, e);
          if (_o(e), u & ro) {
            var J = e.stateNode, B = e.memoizedState, se = B !== null, Oe = e;
            if (J.isHidden = se, se && !Tt && (Oe.mode & gt) !== qe) {
              Le = Oe;
              for (var we = Oe.child; we !== null; )
                Le = we, ak(we), we = we.sibling;
            }
            XO(Oe, se);
          }
          return;
        }
        case be: {
          Vi(t, e), _o(e), u & ct && cw(e);
          return;
        }
        case Pe:
          return;
        default: {
          Vi(t, e), _o(e);
          return;
        }
      }
    }
    function _o(e) {
      var t = e.flags;
      if (t & Kt) {
        try {
          ZO(e);
        } catch (a) {
          tn(e, e.return, a);
        }
        e.flags &= ~Kt;
      }
      t & Ea && (e.flags &= ~Ea);
    }
    function rk(e, t, a) {
      zf = a, Uf = t, Le = e, dw(e, t, a), zf = null, Uf = null;
    }
    function dw(e, t, a) {
      for (var i = (e.mode & gt) !== qe; Le !== null; ) {
        var u = Le, c = u.child;
        if (u.tag === ce && i) {
          var v = u.memoizedState !== null, y = v || oy;
          if (y) {
            Z0(e, t, a);
            continue;
          } else {
            var E = u.alternate, R = E !== null && E.memoizedState !== null, _ = R || Rr, F = oy, P = Rr;
            oy = y, Rr = _, Rr && !P && (Le = u, ik(u));
            for (var Y = c; Y !== null; )
              Le = Y, dw(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Le = u, oy = F, Rr = P, Z0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & fr) !== We && c !== null ? (c.return = u, Le = c) : Z0(e, t, a);
      }
    }
    function Z0(e, t, a) {
      for (; Le !== null; ) {
        var i = Le;
        if ((i.flags & fr) !== We) {
          var u = i.alternate;
          Vt(i);
          try {
            GO(t, u, i, a);
          } catch (v) {
            tn(i, i.return, v);
          }
          An();
        }
        if (i === e) {
          Le = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, Le = c;
          return;
        }
        Le = i.return;
      }
    }
    function ak(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        switch (t.tag) {
          case T:
          case V:
          case fe:
          case re: {
            if (t.mode & Ze)
              try {
                Ro(), Fi(rr, t, t.return);
              } finally {
                xo(t);
              }
            else
              Fi(rr, t, t.return);
            break;
          }
          case b: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && X0(t, t.return, i);
            break;
          }
          case A: {
            Pf(t, t.return);
            break;
          }
          case ce: {
            var u = t.memoizedState !== null;
            if (u) {
              pw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Le = a) : pw(e);
      }
    }
    function pw(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function ik(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        if (t.tag === ce) {
          var i = t.memoizedState !== null;
          if (i) {
            vw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Le = a) : vw(e);
      }
    }
    function vw(e) {
      for (; Le !== null; ) {
        var t = Le;
        Vt(t);
        try {
          QO(t);
        } catch (i) {
          tn(t, t.return, i);
        }
        if (An(), t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function ok(e, t, a, i) {
      Le = t, lk(t, e, a, i);
    }
    function lk(e, t, a, i) {
      for (; Le !== null; ) {
        var u = Le, c = u.child;
        (u.subtreeFlags & Ca) !== We && c !== null ? (c.return = u, Le = c) : uk(e, t, a, i);
      }
    }
    function uk(e, t, a, i) {
      for (; Le !== null; ) {
        var u = Le;
        if ((u.flags & an) !== We) {
          Vt(u);
          try {
            sk(t, u, a, i);
          } catch (v) {
            tn(u, u.return, v);
          }
          An();
        }
        if (u === e) {
          Le = null;
          return;
        }
        var c = u.sibling;
        if (c !== null) {
          c.return = u.return, Le = c;
          return;
        }
        Le = u.return;
      }
    }
    function sk(e, t, a, i) {
      switch (t.tag) {
        case T:
        case V:
        case re: {
          if (t.mode & Ze) {
            O0();
            try {
              Tu(br | nr, t);
            } finally {
              D0(t);
            }
          } else
            Tu(br | nr, t);
          break;
        }
      }
    }
    function ck(e) {
      Le = e, fk();
    }
    function fk() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & At) !== We) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Le = u, vk(u, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            Le = e;
          }
        }
        (e.subtreeFlags & Ca) !== We && t !== null ? (t.return = e, Le = t) : dk();
      }
    }
    function dk() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & an) !== We && (Vt(e), pk(e), An());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function pk(e) {
      switch (e.tag) {
        case T:
        case V:
        case re: {
          e.mode & Ze ? (O0(), Fi(br | nr, e, e.return), D0(e)) : Fi(br | nr, e, e.return);
          break;
        }
      }
    }
    function vk(e, t) {
      for (; Le !== null; ) {
        var a = Le;
        Vt(a), mk(a, t), An();
        var i = a.child;
        i !== null ? (i.return = a, Le = i) : hk(e);
      }
    }
    function hk(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.sibling, i = t.return;
        if (ow(t), t === e) {
          Le = null;
          return;
        }
        if (a !== null) {
          a.return = i, Le = a;
          return;
        }
        Le = i;
      }
    }
    function mk(e, t) {
      switch (e.tag) {
        case T:
        case V:
        case re: {
          e.mode & Ze ? (O0(), Fi(br, e, t), D0(e)) : Fi(br, e, t);
          break;
        }
      }
    }
    function yk(e) {
      switch (e.tag) {
        case T:
        case V:
        case re: {
          try {
            Tu(rr | nr, e);
          } catch (a) {
            tn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            tn(e, e.return, a);
          }
          break;
        }
      }
    }
    function gk(e) {
      switch (e.tag) {
        case T:
        case V:
        case re: {
          try {
            Tu(br | nr, e);
          } catch (t) {
            tn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Sk(e) {
      switch (e.tag) {
        case T:
        case V:
        case re: {
          try {
            Fi(rr | nr, e, e.return);
          } catch (a) {
            tn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && X0(e, e.return, t);
          break;
        }
      }
    }
    function Ek(e) {
      switch (e.tag) {
        case T:
        case V:
        case re:
          try {
            Fi(br | nr, e, e.return);
          } catch (t) {
            tn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var qp = Symbol.for;
      qp("selector.component"), qp("selector.has_pseudo_class"), qp("selector.role"), qp("selector.test_id"), qp("selector.text");
    }
    var Ck = [];
    function Tk() {
      Ck.forEach(function(e) {
        return e();
      });
    }
    var wk = d.ReactCurrentActQueue;
    function bk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function hw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && wk.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xk = Math.ceil, J0 = d.ReactCurrentDispatcher, eE = d.ReactCurrentOwner, Dr = d.ReactCurrentBatchConfig, Ii = d.ReactCurrentActQueue, or = (
      /*             */
      0
    ), mw = (
      /*               */
      1
    ), Or = (
      /*                */
      2
    ), pi = (
      /*                */
      4
    ), Sl = 0, Kp = 1, Us = 2, uy = 3, Zp = 4, yw = 5, tE = 6, Rt = or, ua = null, Tn = null, lr = te, Do = te, nE = pu(te), ur = Sl, Jp = null, sy = te, ev = te, cy = te, tv = null, Na = null, rE = 0, gw = 500, Sw = 1 / 0, Rk = 500, El = null;
    function nv() {
      Sw = un() + Rk;
    }
    function Ew() {
      return Sw;
    }
    var fy = !1, aE = null, jf = null, Ps = !1, bu = null, rv = te, iE = [], oE = null, _k = 50, av = 0, lE = null, uE = !1, dy = !1, Dk = 50, Ff = 0, py = null, iv = Gt, vy = te, Cw = !1;
    function hy() {
      return ua;
    }
    function sa() {
      return (Rt & (Or | pi)) !== or ? un() : (iv !== Gt || (iv = un()), iv);
    }
    function xu(e) {
      var t = e.mode;
      if ((t & gt) === qe)
        return Je;
      if ((Rt & Or) !== or && lr !== te)
        return Un(lr);
      var a = bD() !== wD;
      if (a) {
        if (Dr.transition !== null) {
          var i = Dr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return vy === xt && (vy = Wd()), vy;
      }
      var u = xa();
      if (u !== xt)
        return u;
      var c = u_();
      return c;
    }
    function Ok(e) {
      var t = e.mode;
      return (t & gt) === qe ? Je : Og();
    }
    function sr(e, t, a, i) {
      Jk(), Cw && g("useInsertionEffect must not schedule updates."), uE && (dy = !0), nl(e, a, i), (Rt & Or) !== te && e === ua ? nM(t) : (er && qd(e, t, a), rM(t), e === ua && ((Rt & Or) === or && (ev = ft(ev, a)), ur === Zp && Ru(e, lr)), La(e, i), a === Je && Rt === or && (t.mode & gt) === qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ii.isBatchingLegacy && (nv(), ET()));
    }
    function kk(e, t, a) {
      var i = e.current;
      i.lanes = t, nl(e, t, a), La(e, a);
    }
    function Mk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Or) !== or
      );
    }
    function La(e, t) {
      var a = e.callbackNode;
      Rg(e, t);
      var i = us(e, e === ua ? lr : te);
      if (i === te) {
        a !== null && Pw(a), e.callbackNode = null, e.callbackPriority = xt;
        return;
      }
      var u = Dn(i), c = e.callbackPriority;
      if (c === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ii.current !== null && a !== hE)) {
        a == null && c !== Je && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Pw(a);
      var v;
      if (u === Je)
        e.tag === vu ? (Ii.isBatchingLegacy !== null && (Ii.didScheduleLegacyUpdate = !0), oD(bw.bind(null, e))) : ST(bw.bind(null, e)), Ii.current !== null ? Ii.current.push(hu) : c_(function() {
          (Rt & (Or | pi)) === or && hu();
        }), v = null;
      else {
        var y;
        switch (ps(i)) {
          case dr:
            y = Tc;
            break;
          case tr:
            y = aa;
            break;
          case _i:
            y = ri;
            break;
          case fs:
            y = io;
            break;
          default:
            y = ri;
            break;
        }
        v = mE(y, Tw.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function Tw(e, t) {
      if (JD(), iv = Gt, vy = te, (Rt & (Or | pi)) !== or)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Tl();
      if (i && e.callbackNode !== a)
        return null;
      var u = us(e, e === ua ? lr : te);
      if (u === te)
        return null;
      var c = !cs(e, u) && !_h(e, u) && !t, v = c ? Vk(e, u) : yy(e, u);
      if (v !== Sl) {
        if (v === Us) {
          var y = Bd(e);
          y !== te && (u = y, v = sE(e, y));
        }
        if (v === Kp) {
          var E = Jp;
          throw js(e, te), Ru(e, u), La(e, un()), E;
        }
        if (v === tE)
          Ru(e, u);
        else {
          var R = !cs(e, u), _ = e.current.alternate;
          if (R && !Lk(_)) {
            if (v = yy(e, u), v === Us) {
              var F = Bd(e);
              F !== te && (u = F, v = sE(e, F));
            }
            if (v === Kp) {
              var P = Jp;
              throw js(e, te), Ru(e, u), La(e, un()), P;
            }
          }
          e.finishedWork = _, e.finishedLanes = u, Nk(e, v, u);
        }
      }
      return La(e, un()), e.callbackNode === a ? Tw.bind(null, e) : null;
    }
    function sE(e, t) {
      var a = tv;
      if (jn(e)) {
        var i = js(e, t);
        i.flags |= vn, J_(e.containerInfo);
      }
      var u = yy(e, t);
      if (u !== Us) {
        var c = Na;
        Na = a, c !== null && ww(c);
      }
      return u;
    }
    function ww(e) {
      Na === null ? Na = e : Na.push.apply(Na, e);
    }
    function Nk(e, t, a) {
      switch (t) {
        case Sl:
        case Kp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Us: {
          Fs(e, Na, El);
          break;
        }
        case uy: {
          if (Ru(e, a), Yc(a) && // do not delay if we're inside an act() scope
          !jw()) {
            var i = rE + gw - un();
            if (i > 10) {
              var u = us(e, te);
              if (u !== te)
                break;
              var c = e.suspendedLanes;
              if (!tl(c, a)) {
                sa(), Qd(e, c);
                break;
              }
              e.timeoutHandle = oS(Fs.bind(null, e, Na, El), i);
              break;
            }
          }
          Fs(e, Na, El);
          break;
        }
        case Zp: {
          if (Ru(e, a), Rh(a))
            break;
          if (!jw()) {
            var v = xh(e, a), y = v, E = un() - y, R = Zk(E) - E;
            if (R > 10) {
              e.timeoutHandle = oS(Fs.bind(null, e, Na, El), R);
              break;
            }
          }
          Fs(e, Na, El);
          break;
        }
        case yw: {
          Fs(e, Na, El);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lk(e) {
      for (var t = e; ; ) {
        if (t.flags & ts) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var c = i[u], v = c.getSnapshot, y = c.value;
                try {
                  if (!Ne(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & ts && E !== null) {
          E.return = t, t = E;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ru(e, t) {
      t = ql(t, cy), t = ql(t, ev), Gd(e, t);
    }
    function bw(e) {
      if (eO(), (Rt & (Or | pi)) !== or)
        throw new Error("Should not already be working.");
      Tl();
      var t = us(e, te);
      if (!Br(t, Je))
        return La(e, un()), null;
      var a = yy(e, t);
      if (e.tag !== vu && a === Us) {
        var i = Bd(e);
        i !== te && (t = i, a = sE(e, i));
      }
      if (a === Kp) {
        var u = Jp;
        throw js(e, te), Ru(e, t), La(e, un()), u;
      }
      if (a === tE)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, Fs(e, Na, El), La(e, un()), null;
    }
    function Ak(e, t) {
      t !== te && (Kl(e, ft(t, Je)), La(e, un()), (Rt & (Or | pi)) === or && (nv(), hu()));
    }
    function cE(e, t) {
      var a = Rt;
      Rt |= mw;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === or && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ii.isBatchingLegacy && (nv(), ET());
      }
    }
    function zk(e, t, a, i, u) {
      var c = xa(), v = Dr.transition;
      try {
        return Dr.transition = null, Pn(dr), e(t, a, i, u);
      } finally {
        Pn(c), Dr.transition = v, Rt === or && nv();
      }
    }
    function Cl(e) {
      bu !== null && bu.tag === vu && (Rt & (Or | pi)) === or && Tl();
      var t = Rt;
      Rt |= mw;
      var a = Dr.transition, i = xa();
      try {
        return Dr.transition = null, Pn(dr), e ? e() : void 0;
      } finally {
        Pn(i), Dr.transition = a, Rt = t, (Rt & (Or | pi)) === or && hu();
      }
    }
    function xw() {
      return (Rt & (Or | pi)) !== or;
    }
    function my(e, t) {
      Wr(nE, Do, e), Do = ft(Do, t);
    }
    function fE(e) {
      Do = nE.current, $r(nE, e);
    }
    function js(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var a = e.timeoutHandle;
      if (a !== lS && (e.timeoutHandle = lS, s_(a)), Tn !== null)
        for (var i = Tn.return; i !== null; ) {
          var u = i.alternate;
          ew(u, i), i = i.return;
        }
      ua = e;
      var c = Hs(e.current, null);
      return Tn = c, lr = Do = t, ur = Sl, Jp = null, sy = te, ev = te, cy = te, tv = null, Na = null, DD(), Ai.discardPendingWarnings(), c;
    }
    function Rw(e, t) {
      do {
        var a = Tn;
        try {
          if (bm(), n1(), An(), eE.current = null, a === null || a.return === null) {
            ur = Kp, Jp = t, Tn = null;
            return;
          }
          if (zt && a.mode & Ze && ny(a, !0), Lr)
            if (Yo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Th(a, i, lr);
            } else
              _c(a, t, lr);
          iO(e, a.return, a, t, lr), kw(a);
        } catch (u) {
          t = u, Tn === a && a !== null ? (a = a.return, Tn = a) : a = Tn;
          continue;
        }
        return;
      } while (!0);
    }
    function _w() {
      var e = J0.current;
      return J0.current = Km, e === null ? Km : e;
    }
    function Dw(e) {
      J0.current = e;
    }
    function Uk() {
      rE = un();
    }
    function ov(e) {
      sy = ft(e, sy);
    }
    function Pk() {
      ur === Sl && (ur = uy);
    }
    function dE() {
      (ur === Sl || ur === uy || ur === Us) && (ur = Zp), ua !== null && (ss(sy) || ss(ev)) && Ru(ua, lr);
    }
    function jk(e) {
      ur !== Zp && (ur = Us), tv === null ? tv = [e] : tv.push(e);
    }
    function Fk() {
      return ur === Sl;
    }
    function yy(e, t) {
      var a = Rt;
      Rt |= Or;
      var i = _w();
      if (ua !== e || lr !== t) {
        if (er) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (lv(e, lr), u.clear()), Xc(e, t);
        }
        El = Kd(), js(e, t);
      }
      Ga(t);
      do
        try {
          Hk();
          break;
        } catch (c) {
          Rw(e, c);
        }
      while (!0);
      if (bm(), Rt = a, Dw(i), Tn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Wl(), ua = null, lr = te, ur;
    }
    function Hk() {
      for (; Tn !== null; )
        Ow(Tn);
    }
    function Vk(e, t) {
      var a = Rt;
      Rt |= Or;
      var i = _w();
      if (ua !== e || lr !== t) {
        if (er) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (lv(e, lr), u.clear()), Xc(e, t);
        }
        El = Kd(), nv(), js(e, t);
      }
      Ga(t);
      do
        try {
          Ik();
          break;
        } catch (c) {
          Rw(e, c);
        }
      while (!0);
      return bm(), Dw(i), Rt = a, Tn !== null ? (as(), Sl) : (Wl(), ua = null, lr = te, ur);
    }
    function Ik() {
      for (; Tn !== null && !Cc(); )
        Ow(Tn);
    }
    function Ow(e) {
      var t = e.alternate;
      Vt(e);
      var a;
      (e.mode & Ze) !== qe ? (_0(e), a = pE(t, e, Do), ny(e, !0)) : a = pE(t, e, Do), An(), e.memoizedProps = e.pendingProps, a === null ? kw(e) : Tn = a, eE.current = null;
    }
    function kw(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ta) === We) {
          Vt(t);
          var u = void 0;
          if ((t.mode & Ze) === qe ? u = J1(a, t, Do) : (_0(t), u = J1(a, t, Do), ny(t, !1)), An(), u !== null) {
            Tn = u;
            return;
          }
        } else {
          var c = PO(a, t);
          if (c !== null) {
            c.flags &= ph, Tn = c;
            return;
          }
          if ((t.mode & Ze) !== qe) {
            ny(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= ta, i.subtreeFlags = We, i.deletions = null;
          else {
            ur = tE, Tn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Tn = E;
          return;
        }
        t = i, Tn = t;
      } while (t !== null);
      ur === Sl && (ur = yw);
    }
    function Fs(e, t, a) {
      var i = xa(), u = Dr.transition;
      try {
        Dr.transition = null, Pn(dr), Bk(e, t, a, i);
      } finally {
        Dr.transition = u, Pn(i);
      }
      return null;
    }
    function Bk(e, t, a, i) {
      do
        Tl();
      while (bu !== null);
      if (eM(), (Rt & (Or | pi)) !== or)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, c = e.finishedLanes;
      if (bc(c), u === null)
        return jd(), null;
      if (c === te && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = xt;
      var v = ft(u.lanes, u.childLanes);
      Xd(e, v), e === ua && (ua = null, Tn = null, lr = te), ((u.subtreeFlags & Ca) !== We || (u.flags & Ca) !== We) && (Ps || (Ps = !0, oE = a, mE(ri, function() {
        return Tl(), null;
      })));
      var y = (u.subtreeFlags & (Il | Fr | fr | Ca)) !== We, E = (u.flags & (Il | Fr | fr | Ca)) !== We;
      if (y || E) {
        var R = Dr.transition;
        Dr.transition = null;
        var _ = xa();
        Pn(dr);
        var F = Rt;
        Rt |= pi, eE.current = null, IO(e, u), _1(), nk(e, u, c), n_(e.containerInfo), e.current = u, wh(c), rk(u, e, c), $l(), mh(), Rt = F, Pn(_), Dr.transition = R;
      } else
        e.current = u, _1();
      var P = Ps;
      if (Ps ? (Ps = !1, bu = e, rv = c) : (Ff = 0, py = null), v = e.pendingLanes, v === te && (jf = null), P || Aw(e.current, !1), bi(u.stateNode, i), er && e.memoizedUpdaters.clear(), Tk(), La(e, un()), t !== null)
        for (var Y = e.onRecoverableError, G = 0; G < t.length; G++) {
          var Z = t[G], De = Z.stack, Ge = Z.digest;
          Y(Z.value, {
            componentStack: De,
            digest: Ge
          });
        }
      if (fy) {
        fy = !1;
        var Ue = aE;
        throw aE = null, Ue;
      }
      return Br(rv, Je) && e.tag !== vu && Tl(), v = e.pendingLanes, Br(v, Je) ? (ZD(), e === lE ? av++ : (av = 0, lE = e)) : av = 0, hu(), jd(), null;
    }
    function Tl() {
      if (bu !== null) {
        var e = ps(rv), t = Mg(_i, e), a = Dr.transition, i = xa();
        try {
          return Dr.transition = null, Pn(t), Wk();
        } finally {
          Pn(i), Dr.transition = a;
        }
      }
      return !1;
    }
    function $k(e) {
      iE.push(e), Ps || (Ps = !0, mE(ri, function() {
        return Tl(), null;
      }));
    }
    function Wk() {
      if (bu === null)
        return !1;
      var e = oE;
      oE = null;
      var t = bu, a = rv;
      if (bu = null, rv = te, (Rt & (Or | pi)) !== or)
        throw new Error("Cannot flush passive effects while already rendering.");
      uE = !0, dy = !1, bh(a);
      var i = Rt;
      Rt |= pi, ck(t.current), ok(t, t.current, a, e);
      {
        var u = iE;
        iE = [];
        for (var c = 0; c < u.length; c++) {
          var v = u[c];
          YO(t, v);
        }
      }
      rs(), Aw(t.current, !0), Rt = i, hu(), dy ? t === py ? Ff++ : (Ff = 0, py = t) : Ff = 0, uE = !1, dy = !1, lo(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Mw(e) {
      return jf !== null && jf.has(e);
    }
    function Yk(e) {
      jf === null ? jf = /* @__PURE__ */ new Set([e]) : jf.add(e);
    }
    function Gk(e) {
      fy || (fy = !0, aE = e);
    }
    var Qk = Gk;
    function Nw(e, t, a) {
      var i = As(a, t), u = O1(e, i, Je), c = yu(e, u, Je), v = sa();
      c !== null && (nl(c, Je, v), La(c, v));
    }
    function tn(e, t, a) {
      if (FO(a), uv(!1), e.tag === O) {
        Nw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === O) {
          Nw(i, e, a);
          return;
        } else if (i.tag === b) {
          var u = i.type, c = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !Mw(c)) {
            var v = As(a, e), y = L0(i, v, Je), E = yu(i, y, Je), R = sa();
            E !== null && (nl(E, Je, R), La(E, R));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Xk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = sa();
      Qd(e, a), aM(e), ua === e && tl(lr, a) && (ur === Zp || ur === uy && Yc(lr) && un() - rE < gw ? js(e, te) : cy = ft(cy, a)), La(e, u);
    }
    function Lw(e, t) {
      t === xt && (t = Ok(e));
      var a = sa(), i = ka(e, t);
      i !== null && (nl(i, t, a), La(i, a));
    }
    function qk(e) {
      var t = e.memoizedState, a = xt;
      t !== null && (a = t.retryLane), Lw(e, a);
    }
    function Kk(e, t) {
      var a = xt, i;
      switch (e.tag) {
        case K:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case be:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Lw(e, a);
    }
    function Zk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xk(e / 1960) * 1960;
    }
    function Jk() {
      if (av > _k)
        throw av = 0, lE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ff > Dk && (Ff = 0, py = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function eM() {
      Ai.flushLegacyContextWarning(), Ai.flushPendingUnsafeLifecycleWarnings();
    }
    function Aw(e, t) {
      Vt(e), gy(e, jr, Sk), t && gy(e, Wo, Ek), gy(e, jr, yk), t && gy(e, Wo, gk), An();
    }
    function gy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== u && i.child !== null && c !== We ? i = i.child : ((i.flags & t) !== We && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Sy = null;
    function zw(e) {
      {
        if ((Rt & Or) !== or || !(e.mode & gt))
          return;
        var t = e.tag;
        if (t !== D && t !== O && t !== b && t !== T && t !== V && t !== fe && t !== re)
          return;
        var a = ut(e) || "ReactComponent";
        if (Sy !== null) {
          if (Sy.has(a))
            return;
          Sy.add(a);
        } else
          Sy = /* @__PURE__ */ new Set([a]);
        var i = Rn;
        try {
          Vt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Vt(e) : An();
        }
      }
    }
    var pE;
    {
      var tM = null;
      pE = function(e, t, a) {
        var i = Bw(tM, t);
        try {
          return Q1(e, t, a);
        } catch (c) {
          if (vD() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (bm(), n1(), ew(e, t), Bw(t, i), t.mode & Ze && _0(t), $o(null, Q1, null, e, t, a), bg()) {
            var u = _d();
            typeof u == "object" && u !== null && u._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var Uw = !1, vE;
    vE = /* @__PURE__ */ new Set();
    function nM(e) {
      if (ha && !XD())
        switch (e.tag) {
          case T:
          case V:
          case re: {
            var t = Tn && ut(Tn) || "Unknown", a = t;
            if (!vE.has(a)) {
              vE.add(a);
              var i = ut(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            Uw || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Uw = !0);
            break;
          }
        }
    }
    function lv(e, t) {
      if (er) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          qd(e, i, t);
        });
      }
    }
    var hE = {};
    function mE(e, t) {
      {
        var a = Ii.current;
        return a !== null ? (a.push(t), hE) : Ec(e, t);
      }
    }
    function Pw(e) {
      if (e !== hE)
        return hh(e);
    }
    function jw() {
      return Ii.current !== null;
    }
    function rM(e) {
      {
        if (e.mode & gt) {
          if (!hw())
            return;
        } else if (!bk() || Rt !== or || e.tag !== T && e.tag !== V && e.tag !== re)
          return;
        if (Ii.current === null) {
          var t = Rn;
          try {
            Vt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ut(e));
          } finally {
            t ? Vt(e) : An();
          }
        }
      }
    }
    function aM(e) {
      e.tag !== vu && hw() && Ii.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function uv(e) {
      Cw = e;
    }
    var vi = null, Hf = null, iM = function(e) {
      vi = e;
    };
    function Vf(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function yE(e) {
      return Vf(e);
    }
    function gE(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Xe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Fw(e, t) {
      {
        if (vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof i == "function" && (u = !0);
            break;
          }
          case T: {
            (typeof i == "function" || c === Ke) && (u = !0);
            break;
          }
          case V: {
            (c === Xe || c === Ke) && (u = !0);
            break;
          }
          case fe:
          case re: {
            (c === ht || c === Ke) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var v = vi(a);
          if (v !== void 0 && v === vi(i))
            return !0;
        }
        return !1;
      }
    }
    function Hw(e) {
      {
        if (vi === null || typeof WeakSet != "function")
          return;
        Hf === null && (Hf = /* @__PURE__ */ new WeakSet()), Hf.add(e);
      }
    }
    var oM = function(e, t) {
      {
        if (vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Tl(), Cl(function() {
          SE(e.current, i, a);
        });
      }
    }, lM = function(e, t) {
      {
        if (e.context !== Xa)
          return;
        Tl(), Cl(function() {
          sv(t, e, null, null);
        });
      }
    };
    function SE(e, t, a) {
      {
        var i = e.alternate, u = e.child, c = e.sibling, v = e.tag, y = e.type, E = null;
        switch (v) {
          case T:
          case re:
          case b:
            E = y;
            break;
          case V:
            E = y.render;
            break;
        }
        if (vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, _ = !1;
        if (E !== null) {
          var F = vi(E);
          F !== void 0 && (a.has(F) ? _ = !0 : t.has(F) && (v === b ? _ = !0 : R = !0));
        }
        if (Hf !== null && (Hf.has(e) || i !== null && Hf.has(i)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || R) {
          var P = ka(e, Je);
          P !== null && sr(P, e, Je, Gt);
        }
        u !== null && !_ && SE(u, t, a), c !== null && SE(c, t, a);
      }
    }
    var uM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return EE(e.current, i, a), a;
      }
    };
    function EE(e, t, a) {
      {
        var i = e.child, u = e.sibling, c = e.tag, v = e.type, y = null;
        switch (c) {
          case T:
          case re:
          case b:
            y = v;
            break;
          case V:
            y = v.render;
            break;
        }
        var E = !1;
        y !== null && t.has(y) && (E = !0), E ? sM(e, a) : i !== null && EE(i, t, a), u !== null && EE(u, t, a);
      }
    }
    function sM(e, t) {
      {
        var a = cM(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case A:
              t.add(i.stateNode);
              return;
            case L:
              t.add(i.stateNode.containerInfo);
              return;
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function cM(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === A)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var CE;
    {
      CE = !1;
      try {
        var Vw = Object.preventExtensions({});
      } catch {
        CE = !0;
      }
    }
    function fM(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = We, this.subtreeFlags = We, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !CE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var qa = function(e, t, a, i) {
      return new fM(e, t, a, i);
    };
    function TE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function dM(e) {
      return typeof e == "function" && !TE(e) && e.defaultProps === void 0;
    }
    function pM(e) {
      if (typeof e == "function")
        return TE(e) ? b : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Xe)
          return V;
        if (t === ht)
          return fe;
      }
      return D;
    }
    function Hs(e, t) {
      var a = e.alternate;
      a === null ? (a = qa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = We, a.subtreeFlags = We, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case D:
        case T:
        case re:
          a.type = Vf(e.type);
          break;
        case b:
          a.type = yE(e.type);
          break;
        case V:
          a.type = gE(e.type);
          break;
      }
      return a;
    }
    function vM(e, t) {
      e.flags &= Jn | Kt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = We, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = We, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function hM(e, t, a) {
      var i;
      return e === mm ? (i = gt, t === !0 && (i |= sn, i |= wa)) : i = qe, er && (i |= Ze), qa(O, null, null, i);
    }
    function wE(e, t, a, i, u, c) {
      var v = D, y = e;
      if (typeof e == "function")
        TE(e) ? (v = b, y = yE(y)) : y = Vf(y);
      else if (typeof e == "string")
        v = A;
      else
        e:
          switch (e) {
            case Ha:
              return _u(a.children, u, c, t);
            case Gi:
              v = q, u |= sn, (u & gt) !== qe && (u |= wa);
              break;
            case M:
              return mM(a, u, c, t);
            case pt:
              return yM(a, u, c, t);
            case Ot:
              return gM(a, u, c, t);
            case rn:
              return Iw(a, u, c, t);
            case Er:
            case $n:
            case Qi:
            case Xs:
            case nn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case oe:
                    v = Q;
                    break e;
                  case Ee:
                    v = ee;
                    break e;
                  case Xe:
                    v = V, y = gE(y);
                    break e;
                  case ht:
                    v = fe;
                    break e;
                  case Ke:
                    v = Ce, y = null;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var R = i ? ut(i) : null;
                R && (E += `

Check the render method of \`` + R + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
            }
          }
      var _ = qa(v, a, t, u);
      return _.elementType = e, _.type = y, _.lanes = c, _._debugOwner = i, _;
    }
    function bE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, c = e.key, v = e.props, y = wE(u, c, v, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function _u(e, t, a, i) {
      var u = qa(U, e, i, t);
      return u.lanes = a, u;
    }
    function mM(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = qa($, e, i, t | Ze);
      return u.elementType = M, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function yM(e, t, a, i) {
      var u = qa(K, e, i, t);
      return u.elementType = pt, u.lanes = a, u;
    }
    function gM(e, t, a, i) {
      var u = qa(be, e, i, t);
      return u.elementType = Ot, u.lanes = a, u;
    }
    function Iw(e, t, a, i) {
      var u = qa(ce, e, i, t);
      u.elementType = rn, u.lanes = a;
      var c = {
        isHidden: !1
      };
      return u.stateNode = c, u;
    }
    function xE(e, t, a) {
      var i = qa(N, e, null, t);
      return i.lanes = a, i;
    }
    function SM() {
      var e = qa(A, null, null, qe);
      return e.elementType = "DELETED", e;
    }
    function EM(e) {
      var t = qa(_e, null, null, qe);
      return t.stateNode = e, t;
    }
    function RE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = qa(L, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Bw(e, t) {
      return e === null && (e = qa(D, null, null, qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function CM(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = lS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = xt, this.eventTimes = Qc(te), this.expirationTimes = Qc(Gt), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Qc(te), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < Jt; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case mm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case vu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function $w(e, t, a, i, u, c, v, y, E, R) {
      var _ = new CM(e, t, a, y, E), F = hM(t, c);
      _.current = F, F.stateNode = _;
      {
        var P = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = P;
      }
      return AS(F), _;
    }
    var _E = "18.2.0";
    function TM(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return vt(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var DE, OE;
    DE = !1, OE = {};
    function Ww(e) {
      if (!e)
        return Xa;
      var t = ga(e), a = iD(t);
      if (t.tag === b) {
        var i = t.type;
        if (Co(i))
          return yT(t, i, a);
      }
      return a;
    }
    function wM(e, t) {
      {
        var a = ga(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ta(a);
        if (u === null)
          return null;
        if (u.mode & sn) {
          var c = ut(a) || "Component";
          if (!OE[c]) {
            OE[c] = !0;
            var v = Rn;
            try {
              Vt(u), a.mode & sn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? Vt(v) : An();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Yw(e, t, a, i, u, c, v, y) {
      var E = !1, R = null;
      return $w(e, t, E, R, a, i, u, c, v);
    }
    function Gw(e, t, a, i, u, c, v, y, E, R) {
      var _ = !0, F = $w(a, i, _, e, u, c, v, y, E);
      F.context = Ww(null);
      var P = F.current, Y = sa(), G = xu(P), Z = yl(Y, G);
      return Z.callback = t ?? null, yu(P, Z, G), kk(F, G, Y), F;
    }
    function sv(e, t, a, i) {
      yh(t, e);
      var u = t.current, c = sa(), v = xu(u);
      Go(v);
      var y = Ww(a);
      t.context === null ? t.context = y : t.pendingContext = y, ha && Rn !== null && !DE && (DE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ut(Rn) || "Unknown"));
      var E = yl(c, v);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var R = yu(u, E, v);
      return R !== null && (sr(R, u, v, c), Om(R, u, v)), v;
    }
    function Ey(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case A:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function bM(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (jn(t)) {
            var a = _g(t);
            Ak(t, a);
          }
          break;
        }
        case K: {
          Cl(function() {
            var u = ka(e, Je);
            if (u !== null) {
              var c = sa();
              sr(u, e, Je, c);
            }
          });
          var i = Je;
          kE(e, i);
          break;
        }
      }
    }
    function Qw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Oh(a.retryLane, t));
    }
    function kE(e, t) {
      Qw(e, t);
      var a = e.alternate;
      a && Qw(a, t);
    }
    function xM(e) {
      if (e.tag === K) {
        var t = Yl, a = ka(e, t);
        if (a !== null) {
          var i = sa();
          sr(a, e, t, i);
        }
        kE(e, t);
      }
    }
    function RM(e) {
      if (e.tag === K) {
        var t = xu(e), a = ka(e, t);
        if (a !== null) {
          var i = sa();
          sr(a, e, t, i);
        }
        kE(e, t);
      }
    }
    function Xw(e) {
      var t = vh(e);
      return t === null ? null : t.stateNode;
    }
    var qw = function(e) {
      return null;
    };
    function _M(e) {
      return qw(e);
    }
    var Kw = function(e) {
      return !1;
    };
    function DM(e) {
      return Kw(e);
    }
    var Zw = null, Jw = null, eb = null, tb = null, nb = null, rb = null, ab = null, ib = null, ob = null;
    {
      var lb = function(e, t, a) {
        var i = t[a], u = Wn(e) ? e.slice() : Et({}, e);
        return a + 1 === t.length ? (Wn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = lb(e[i], t, a + 1), u);
      }, ub = function(e, t) {
        return lb(e, t, 0);
      }, sb = function(e, t, a, i) {
        var u = t[i], c = Wn(e) ? e.slice() : Et({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          c[v] = c[u], Wn(c) ? c.splice(u, 1) : delete c[u];
        } else
          c[u] = sb(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return c;
      }, cb = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return sb(e, t, a, 0);
      }, fb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], c = Wn(e) ? e.slice() : Et({}, e);
        return c[u] = fb(e[u], t, a + 1, i), c;
      }, db = function(e, t, a) {
        return fb(e, t, 0, a);
      }, ME = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Zw = function(e, t, a, i) {
        var u = ME(e, t);
        if (u !== null) {
          var c = db(u.memoizedState, a, i);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = Et({}, e.memoizedProps);
          var v = ka(e, Je);
          v !== null && sr(v, e, Je, Gt);
        }
      }, Jw = function(e, t, a) {
        var i = ME(e, t);
        if (i !== null) {
          var u = ub(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Et({}, e.memoizedProps);
          var c = ka(e, Je);
          c !== null && sr(c, e, Je, Gt);
        }
      }, eb = function(e, t, a, i) {
        var u = ME(e, t);
        if (u !== null) {
          var c = cb(u.memoizedState, a, i);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = Et({}, e.memoizedProps);
          var v = ka(e, Je);
          v !== null && sr(v, e, Je, Gt);
        }
      }, tb = function(e, t, a) {
        e.pendingProps = db(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ka(e, Je);
        i !== null && sr(i, e, Je, Gt);
      }, nb = function(e, t) {
        e.pendingProps = ub(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ka(e, Je);
        a !== null && sr(a, e, Je, Gt);
      }, rb = function(e, t, a) {
        e.pendingProps = cb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ka(e, Je);
        i !== null && sr(i, e, Je, Gt);
      }, ab = function(e) {
        var t = ka(e, Je);
        t !== null && sr(t, e, Je, Gt);
      }, ib = function(e) {
        qw = e;
      }, ob = function(e) {
        Kw = e;
      };
    }
    function OM(e) {
      var t = Ta(e);
      return t === null ? null : t.stateNode;
    }
    function kM(e) {
      return null;
    }
    function MM() {
      return Rn;
    }
    function NM(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return Ud({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Zw,
        overrideHookStateDeletePath: Jw,
        overrideHookStateRenamePath: eb,
        overrideProps: tb,
        overridePropsDeletePath: nb,
        overridePropsRenamePath: rb,
        setErrorHandler: ib,
        setSuspenseHandler: ob,
        scheduleUpdate: ab,
        currentDispatcherRef: a,
        findHostInstanceByFiber: OM,
        findFiberByHostInstance: t || kM,
        // React Refresh
        findHostInstancesForRefresh: uM,
        scheduleRefresh: oM,
        scheduleRoot: lM,
        setRefreshHandler: iM,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: MM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: _E
      });
    }
    var pb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function NE(e) {
      this._internalRoot = e;
    }
    Cy.prototype.render = NE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ty(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== _n) {
          var i = Xw(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      sv(e, t, null, null);
    }, Cy.prototype.unmount = NE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Cl(function() {
          sv(null, e, null, null);
        }), dT(t);
      }
    };
    function LM(e, t) {
      if (!Ty(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      vb(e);
      var a = !1, i = !1, u = "", c = pb;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yi && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = Yw(e, mm, null, a, i, u, c);
      sm(v.current, e);
      var y = e.nodeType === _n ? e.parentNode : e;
      return yp(y), new NE(v);
    }
    function Cy(e) {
      this._internalRoot = e;
    }
    function AM(e) {
      e && Ph(e);
    }
    Cy.prototype.unstable_scheduleHydration = AM;
    function zM(e, t, a) {
      if (!Ty(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      vb(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, c = !1, v = !1, y = "", E = pb;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var R = Gw(t, null, e, mm, i, c, v, y, E);
      if (sm(R.current, e), yp(e), u)
        for (var _ = 0; _ < u.length; _++) {
          var F = u[_];
          BD(R, F);
        }
      return new Cy(R);
    }
    function Ty(e) {
      return !!(e && (e.nodeType === zr || e.nodeType === $a || e.nodeType === jo || !bt));
    }
    function cv(e) {
      return !!(e && (e.nodeType === zr || e.nodeType === $a || e.nodeType === jo || e.nodeType === _n && e.nodeValue === " react-mount-point-unstable "));
    }
    function vb(e) {
      e.nodeType === zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Dp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var UM = d.ReactCurrentOwner, hb;
    hb = function(e) {
      if (e._reactRootContainer && e.nodeType !== _n) {
        var t = Xw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = LE(e), u = !!(i && du(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function LE(e) {
      return e ? e.nodeType === $a ? e.documentElement : e.firstChild : null;
    }
    function mb() {
    }
    function PM(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var P = Ey(v);
            c.call(P);
          };
        }
        var v = Gw(
          t,
          i,
          e,
          vu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          mb
        );
        e._reactRootContainer = v, sm(v.current, e);
        var y = e.nodeType === _n ? e.parentNode : e;
        return yp(y), Cl(), v;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var P = Ey(_);
            R.call(P);
          };
        }
        var _ = Yw(
          e,
          vu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          mb
        );
        e._reactRootContainer = _, sm(_.current, e);
        var F = e.nodeType === _n ? e.parentNode : e;
        return yp(F), Cl(function() {
          sv(t, _, a, i);
        }), _;
      }
    }
    function jM(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function wy(e, t, a, i, u) {
      hb(a), jM(u === void 0 ? null : u, "render");
      var c = a._reactRootContainer, v;
      if (!c)
        v = PM(a, t, e, u, i);
      else {
        if (v = c, typeof u == "function") {
          var y = u;
          u = function() {
            var E = Ey(v);
            y.call(E);
          };
        }
        sv(t, v, e, u);
      }
      return Ey(v);
    }
    function FM(e) {
      {
        var t = UM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === zr ? e : wM(e, "findDOMNode");
    }
    function HM(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Dp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return wy(null, e, t, !0, a);
    }
    function VM(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Dp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return wy(null, e, t, !1, a);
    }
    function IM(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !es(e))
        throw new Error("parentComponent must be a valid React Component");
      return wy(e, t, a, !1, i);
    }
    function BM(e) {
      if (!cv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Dp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = LE(e), i = a && !du(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Cl(function() {
          wy(null, null, e, !1, function() {
            e._reactRootContainer = null, dT(e);
          });
        }), !0;
      } else {
        {
          var u = LE(e), c = !!(u && du(u)), v = e.nodeType === zr && cv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ke(bM), Mh(xM), hs(RM), Jd(xa), Lh(ds), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), fh(YR), hc(cE, zk, Cl);
    function $M(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ty(t))
        throw new Error("Target container is not a DOM element.");
      return TM(e, t, null, a);
    }
    function WM(e, t, a, i) {
      return IM(e, t, a, i);
    }
    var AE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [du, gf, cm, vc, Ku, cE]
    };
    function YM(e, t) {
      return AE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), LM(e, t);
    }
    function GM(e, t, a) {
      return AE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zM(e, t, a);
    }
    function QM(e) {
      return xw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Cl(e);
    }
    var XM = NM({
      findFiberByHostInstance: xs,
      bundleType: 1,
      version: _E,
      rendererPackageName: "react-dom"
    });
    if (!XM && Be && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var yb = window.location.protocol;
      /^(https?|file):$/.test(yb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (yb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AE, za.createPortal = $M, za.createRoot = YM, za.findDOMNode = FM, za.flushSync = QM, za.hydrate = HM, za.hydrateRoot = GM, za.render = VM, za.unmountComponentAtNode = BM, za.unstable_batchedUpdates = cE, za.unstable_renderSubtreeIntoContainer = WM, za.version = _E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), za;
}
function Jx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (Jx(), fz()) : dz();
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function rC() {
  return rC = Object.assign ? Object.assign.bind() : function(l) {
    for (var f = 1; f < arguments.length; f++) {
      var d = arguments[f];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (l[m] = d[m]);
    }
    return l;
  }, rC.apply(this, arguments);
}
var ix;
(function(l) {
  l.Pop = "POP", l.Push = "PUSH", l.Replace = "REPLACE";
})(ix || (ix = {}));
function In(l, f) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(f);
}
function Tv(l, f) {
  if (!l) {
    typeof console < "u" && console.warn(f);
    try {
      throw new Error(f);
    } catch {
    }
  }
}
function aC(l) {
  let {
    pathname: f = "/",
    search: d = "",
    hash: m = ""
  } = l;
  return d && d !== "?" && (f += d.charAt(0) === "?" ? d : "?" + d), m && m !== "#" && (f += m.charAt(0) === "#" ? m : "#" + m), f;
}
function eR(l) {
  let f = {};
  if (l) {
    let d = l.indexOf("#");
    d >= 0 && (f.hash = l.substr(d), l = l.substr(0, d));
    let m = l.indexOf("?");
    m >= 0 && (f.search = l.substr(m), l = l.substr(0, m)), l && (f.pathname = l);
  }
  return f;
}
var ox;
(function(l) {
  l.data = "data", l.deferred = "deferred", l.redirect = "redirect", l.error = "error";
})(ox || (ox = {}));
function lx(l, f) {
  typeof l == "string" && (l = {
    path: l,
    caseSensitive: !1,
    end: !0
  });
  let [d, m] = pz(l.path, l.caseSensitive, l.end), S = f.match(d);
  if (!S)
    return null;
  let w = S[0], g = w.replace(/(.)\/+$/, "$1"), x = S.slice(1);
  return {
    params: m.reduce((b, D, O) => {
      let {
        paramName: L,
        isOptional: A
      } = D;
      if (L === "*") {
        let U = x[O] || "";
        g = w.slice(0, w.length - U.length).replace(/(.)\/+$/, "$1");
      }
      const N = x[O];
      return A && !N ? b[L] = void 0 : b[L] = (N || "").replace(/%2F/g, "/"), b;
    }, {}),
    pathname: w,
    pathnameBase: g,
    pattern: l
  };
}
function pz(l, f, d) {
  f === void 0 && (f = !1), d === void 0 && (d = !0), Tv(l === "*" || !l.endsWith("*") || l.endsWith("/*"), 'Route path "' + l + '" will be treated as if it were ' + ('"' + l.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + l.replace(/\*$/, "/*") + '".'));
  let m = [], S = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (g, x, T) => (m.push({
    paramName: x,
    isOptional: T != null
  }), T ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return l.endsWith("*") ? (m.push({
    paramName: "*"
  }), S += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : d ? S += "\\/*$" : l !== "" && l !== "/" && (S += "(?:(?=\\/|$))"), [new RegExp(S, f ? void 0 : "i"), m];
}
function Gf(l, f) {
  if (f === "/")
    return l;
  if (!l.toLowerCase().startsWith(f.toLowerCase()))
    return null;
  let d = f.endsWith("/") ? f.length - 1 : f.length, m = l.charAt(d);
  return m && m !== "/" ? null : l.slice(d) || "/";
}
function vz(l, f) {
  f === void 0 && (f = "/");
  let {
    pathname: d,
    search: m = "",
    hash: S = ""
  } = typeof l == "string" ? eR(l) : l;
  return {
    pathname: d ? d.startsWith("/") ? d : hz(d, f) : f,
    search: yz(m),
    hash: gz(S)
  };
}
function hz(l, f) {
  let d = f.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((S) => {
    S === ".." ? d.length > 1 && d.pop() : S !== "." && d.push(S);
  }), d.length > 1 ? d.join("/") : "/";
}
function WE(l, f, d, m) {
  return "Cannot include a '" + l + "' character in a manually specified " + ("`to." + f + "` field [" + JSON.stringify(m) + "].  Please separate it out to the ") + ("`to." + d + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function mz(l) {
  return l.filter((f, d) => d === 0 || f.route.path && f.route.path.length > 0);
}
function tR(l, f) {
  let d = mz(l);
  return f ? d.map((m, S) => S === l.length - 1 ? m.pathname : m.pathnameBase) : d.map((m) => m.pathnameBase);
}
function nR(l, f, d, m) {
  m === void 0 && (m = !1);
  let S;
  typeof l == "string" ? S = eR(l) : (S = rC({}, l), In(!S.pathname || !S.pathname.includes("?"), WE("?", "pathname", "search", S)), In(!S.pathname || !S.pathname.includes("#"), WE("#", "pathname", "hash", S)), In(!S.search || !S.search.includes("#"), WE("#", "search", "hash", S)));
  let w = l === "" || S.pathname === "", g = w ? "/" : S.pathname, x;
  if (g == null)
    x = d;
  else {
    let O = f.length - 1;
    if (!m && g.startsWith("..")) {
      let L = g.split("/");
      for (; L[0] === ".."; )
        L.shift(), O -= 1;
      S.pathname = L.join("/");
    }
    x = O >= 0 ? f[O] : "/";
  }
  let T = vz(S, x), b = g && g !== "/" && g.endsWith("/"), D = (w || g === ".") && d.endsWith("/");
  return !T.pathname.endsWith("/") && (b || D) && (T.pathname += "/"), T;
}
const NC = (l) => l.join("/").replace(/\/\/+/g, "/"), yz = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, gz = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, rR = ["post", "put", "patch", "delete"];
new Set(rR);
const Sz = ["get", ...rR];
new Set(Sz);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function iC() {
  return iC = Object.assign ? Object.assign.bind() : function(l) {
    for (var f = 1; f < arguments.length; f++) {
      var d = arguments[f];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (l[m] = d[m]);
    }
    return l;
  }, iC.apply(this, arguments);
}
const ng = /* @__PURE__ */ st.createContext(null);
process.env.NODE_ENV !== "production" && (ng.displayName = "DataRouter");
const aR = /* @__PURE__ */ st.createContext(null);
process.env.NODE_ENV !== "production" && (aR.displayName = "DataRouterState");
const Ez = /* @__PURE__ */ st.createContext(null);
process.env.NODE_ENV !== "production" && (Ez.displayName = "Await");
const xl = /* @__PURE__ */ st.createContext(null);
process.env.NODE_ENV !== "production" && (xl.displayName = "Navigation");
const LC = /* @__PURE__ */ st.createContext(null);
process.env.NODE_ENV !== "production" && (LC.displayName = "Location");
const Xf = /* @__PURE__ */ st.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Xf.displayName = "Route");
const Cz = /* @__PURE__ */ st.createContext(null);
process.env.NODE_ENV !== "production" && (Cz.displayName = "RouteError");
function Tz(l, f) {
  let {
    relative: d
  } = f === void 0 ? {} : f;
  AC() || (process.env.NODE_ENV !== "production" ? In(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : In(!1));
  let {
    basename: m,
    navigator: S
  } = st.useContext(xl), {
    hash: w,
    pathname: g,
    search: x
  } = bv(l, {
    relative: d
  }), T = g;
  return m !== "/" && (T = g === "/" ? m : NC([m, g])), S.createHref({
    pathname: T,
    search: x,
    hash: w
  });
}
function AC() {
  return st.useContext(LC) != null;
}
function wv() {
  return AC() || (process.env.NODE_ENV !== "production" ? In(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : In(!1)), st.useContext(LC).location;
}
const iR = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function oR(l) {
  st.useContext(xl).static || st.useLayoutEffect(l);
}
function wz() {
  let {
    isDataRoute: l
  } = st.useContext(Xf);
  return l ? Dz() : bz();
}
function bz() {
  AC() || (process.env.NODE_ENV !== "production" ? In(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : In(!1));
  let l = st.useContext(ng), {
    basename: f,
    future: d,
    navigator: m
  } = st.useContext(xl), {
    matches: S
  } = st.useContext(Xf), {
    pathname: w
  } = wv(), g = JSON.stringify(tR(S, d.v7_relativeSplatPath)), x = st.useRef(!1);
  return oR(() => {
    x.current = !0;
  }), st.useCallback(function(b, D) {
    if (D === void 0 && (D = {}), process.env.NODE_ENV !== "production" && Tv(x.current, iR), !x.current)
      return;
    if (typeof b == "number") {
      m.go(b);
      return;
    }
    let O = nR(b, JSON.parse(g), w, D.relative === "path");
    l == null && f !== "/" && (O.pathname = O.pathname === "/" ? f : NC([f, O.pathname])), (D.replace ? m.replace : m.push)(O, D.state, D);
  }, [f, m, g, w, l]);
}
function bv(l, f) {
  let {
    relative: d
  } = f === void 0 ? {} : f, {
    future: m
  } = st.useContext(xl), {
    matches: S
  } = st.useContext(Xf), {
    pathname: w
  } = wv(), g = JSON.stringify(tR(S, m.v7_relativeSplatPath));
  return st.useMemo(() => nR(l, JSON.parse(g), w, d === "path"), [l, g, w, d]);
}
var lR = /* @__PURE__ */ function(l) {
  return l.UseBlocker = "useBlocker", l.UseRevalidator = "useRevalidator", l.UseNavigateStable = "useNavigate", l;
}(lR || {}), zC = /* @__PURE__ */ function(l) {
  return l.UseBlocker = "useBlocker", l.UseLoaderData = "useLoaderData", l.UseActionData = "useActionData", l.UseRouteError = "useRouteError", l.UseNavigation = "useNavigation", l.UseRouteLoaderData = "useRouteLoaderData", l.UseMatches = "useMatches", l.UseRevalidator = "useRevalidator", l.UseNavigateStable = "useNavigate", l.UseRouteId = "useRouteId", l;
}(zC || {});
function uR(l) {
  return l + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function xz(l) {
  let f = st.useContext(ng);
  return f || (process.env.NODE_ENV !== "production" ? In(!1, uR(l)) : In(!1)), f;
}
function Rz(l) {
  let f = st.useContext(Xf);
  return f || (process.env.NODE_ENV !== "production" ? In(!1, uR(l)) : In(!1)), f;
}
function sR(l) {
  let f = Rz(l), d = f.matches[f.matches.length - 1];
  return d.route.id || (process.env.NODE_ENV !== "production" ? In(!1, l + ' can only be used on routes that contain a unique "id"') : In(!1)), d.route.id;
}
function _z() {
  return sR(zC.UseRouteId);
}
function Dz() {
  let {
    router: l
  } = xz(lR.UseNavigateStable), f = sR(zC.UseNavigateStable), d = st.useRef(!1);
  return oR(() => {
    d.current = !0;
  }), st.useCallback(function(S, w) {
    w === void 0 && (w = {}), process.env.NODE_ENV !== "production" && Tv(d.current, iR), d.current && (typeof S == "number" ? l.navigate(S) : l.navigate(S, iC({
      fromRouteId: f
    }, w)));
  }, [l, f]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qf() {
  return Qf = Object.assign ? Object.assign.bind() : function(l) {
    for (var f = 1; f < arguments.length; f++) {
      var d = arguments[f];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (l[m] = d[m]);
    }
    return l;
  }, Qf.apply(this, arguments);
}
function UC(l, f) {
  if (l == null)
    return {};
  var d = {}, m = Object.keys(l), S, w;
  for (w = 0; w < m.length; w++)
    S = m[w], !(f.indexOf(S) >= 0) && (d[S] = l[S]);
  return d;
}
const zy = "get", Uy = "application/x-www-form-urlencoded";
function rg(l) {
  return l != null && typeof l.tagName == "string";
}
function Oz(l) {
  return rg(l) && l.tagName.toLowerCase() === "button";
}
function kz(l) {
  return rg(l) && l.tagName.toLowerCase() === "form";
}
function Mz(l) {
  return rg(l) && l.tagName.toLowerCase() === "input";
}
function Nz(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Lz(l, f) {
  return l.button === 0 && // Ignore everything but left clicks
  (!f || f === "_self") && // Let browser handle "target=_blank" etc.
  !Nz(l);
}
let Ay = null;
function Az() {
  if (Ay === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ay = !1;
    } catch {
      Ay = !0;
    }
  return Ay;
}
const zz = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function YE(l) {
  return l != null && !zz.has(l) ? (process.env.NODE_ENV !== "production" && Tv(!1, '"' + l + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Uy + '"')), null) : l;
}
function Uz(l, f) {
  let d, m, S, w, g;
  if (kz(l)) {
    let x = l.getAttribute("action");
    m = x ? Gf(x, f) : null, d = l.getAttribute("method") || zy, S = YE(l.getAttribute("enctype")) || Uy, w = new FormData(l);
  } else if (Oz(l) || Mz(l) && (l.type === "submit" || l.type === "image")) {
    let x = l.form;
    if (x == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let T = l.getAttribute("formaction") || x.getAttribute("action");
    if (m = T ? Gf(T, f) : null, d = l.getAttribute("formmethod") || x.getAttribute("method") || zy, S = YE(l.getAttribute("formenctype")) || YE(x.getAttribute("enctype")) || Uy, w = new FormData(x, l), !Az()) {
      let {
        name: b,
        type: D,
        value: O
      } = l;
      if (D === "image") {
        let L = b ? b + "." : "";
        w.append(L + "x", "0"), w.append(L + "y", "0");
      } else
        b && w.append(b, O);
    }
  } else {
    if (rg(l))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    d = zy, m = null, S = Uy, g = l;
  }
  return w && S === "text/plain" && (g = w, w = void 0), {
    action: m,
    method: d.toLowerCase(),
    encType: S,
    formData: w,
    body: g
  };
}
const Pz = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], jz = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Fz = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Hz = "6";
try {
  window.__reactRouterVersion = Hz;
} catch {
}
const cR = /* @__PURE__ */ st.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (cR.displayName = "ViewTransition");
const Vz = /* @__PURE__ */ st.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Vz.displayName = "Fetchers");
process.env.NODE_ENV;
const Iz = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bz = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, PC = /* @__PURE__ */ st.forwardRef(function(f, d) {
  let {
    onClick: m,
    relative: S,
    reloadDocument: w,
    replace: g,
    state: x,
    target: T,
    to: b,
    preventScrollReset: D,
    unstable_viewTransition: O
  } = f, L = UC(f, Pz), {
    basename: A
  } = st.useContext(xl), N, U = !1;
  if (typeof b == "string" && Bz.test(b) && (N = b, Iz))
    try {
      let V = new URL(window.location.href), $ = b.startsWith("//") ? new URL(V.protocol + b) : new URL(b), K = Gf($.pathname, A);
      $.origin === V.origin && K != null ? b = K + $.search + $.hash : U = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Tv(!1, '<Link to="' + b + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let q = Tz(b, {
    relative: S
  }), ee = Gz(b, {
    replace: g,
    state: x,
    target: T,
    preventScrollReset: D,
    relative: S,
    unstable_viewTransition: O
  });
  function Q(V) {
    m && m(V), V.defaultPrevented || ee(V);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ st.createElement("a", Qf({}, L, {
      href: N || q,
      onClick: U || w ? m : Q,
      ref: d,
      target: T
    }))
  );
});
process.env.NODE_ENV !== "production" && (PC.displayName = "Link");
const $z = /* @__PURE__ */ st.forwardRef(function(f, d) {
  let {
    "aria-current": m = "page",
    caseSensitive: S = !1,
    className: w = "",
    end: g = !1,
    style: x,
    to: T,
    unstable_viewTransition: b,
    children: D
  } = f, O = UC(f, jz), L = bv(T, {
    relative: O.relative
  }), A = wv(), N = st.useContext(aR), {
    navigator: U,
    basename: q
  } = st.useContext(xl), ee = N != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Jz(L) && b === !0, Q = U.encodeLocation ? U.encodeLocation(L).pathname : L.pathname, V = A.pathname, $ = N && N.navigation && N.navigation.location ? N.navigation.location.pathname : null;
  S || (V = V.toLowerCase(), $ = $ ? $.toLowerCase() : null, Q = Q.toLowerCase()), $ && q && ($ = Gf($, q) || $);
  const K = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
  let fe = V === Q || !g && V.startsWith(Q) && V.charAt(K) === "/", re = $ != null && ($ === Q || !g && $.startsWith(Q) && $.charAt(Q.length) === "/"), Ce = {
    isActive: fe,
    isPending: re,
    isTransitioning: ee
  }, pe = fe ? m : void 0, _e;
  typeof w == "function" ? _e = w(Ce) : _e = [w, fe ? "active" : null, re ? "pending" : null, ee ? "transitioning" : null].filter(Boolean).join(" ");
  let be = typeof x == "function" ? x(Ce) : x;
  return /* @__PURE__ */ st.createElement(PC, Qf({}, O, {
    "aria-current": pe,
    className: _e,
    ref: d,
    style: be,
    to: T,
    unstable_viewTransition: b
  }), typeof D == "function" ? D(Ce) : D);
});
process.env.NODE_ENV !== "production" && ($z.displayName = "NavLink");
const Wz = /* @__PURE__ */ st.forwardRef((l, f) => {
  let {
    fetcherKey: d,
    navigate: m,
    reloadDocument: S,
    replace: w,
    state: g,
    method: x = zy,
    action: T,
    onSubmit: b,
    relative: D,
    preventScrollReset: O,
    unstable_viewTransition: L
  } = l, A = UC(l, Fz), N = Kz(), U = Zz(T, {
    relative: D
  }), q = x.toLowerCase() === "get" ? "get" : "post", ee = (Q) => {
    if (b && b(Q), Q.defaultPrevented)
      return;
    Q.preventDefault();
    let V = Q.nativeEvent.submitter, $ = (V == null ? void 0 : V.getAttribute("formmethod")) || x;
    N(V || Q.currentTarget, {
      fetcherKey: d,
      method: $,
      navigate: m,
      replace: w,
      state: g,
      relative: D,
      preventScrollReset: O,
      unstable_viewTransition: L
    });
  };
  return /* @__PURE__ */ st.createElement("form", Qf({
    ref: f,
    method: q,
    action: U,
    onSubmit: S ? b : ee
  }, A));
});
process.env.NODE_ENV !== "production" && (Wz.displayName = "Form");
process.env.NODE_ENV;
var Vy;
(function(l) {
  l.UseScrollRestoration = "useScrollRestoration", l.UseSubmit = "useSubmit", l.UseSubmitFetcher = "useSubmitFetcher", l.UseFetcher = "useFetcher", l.useViewTransitionState = "useViewTransitionState";
})(Vy || (Vy = {}));
var ux;
(function(l) {
  l.UseFetcher = "useFetcher", l.UseFetchers = "useFetchers", l.UseScrollRestoration = "useScrollRestoration";
})(ux || (ux = {}));
function Yz(l) {
  return l + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function fR(l) {
  let f = st.useContext(ng);
  return f || (process.env.NODE_ENV !== "production" ? In(!1, Yz(l)) : In(!1)), f;
}
function Gz(l, f) {
  let {
    target: d,
    replace: m,
    state: S,
    preventScrollReset: w,
    relative: g,
    unstable_viewTransition: x
  } = f === void 0 ? {} : f, T = wz(), b = wv(), D = bv(l, {
    relative: g
  });
  return st.useCallback((O) => {
    if (Lz(O, d)) {
      O.preventDefault();
      let L = m !== void 0 ? m : aC(b) === aC(D);
      T(l, {
        replace: L,
        state: S,
        preventScrollReset: w,
        relative: g,
        unstable_viewTransition: x
      });
    }
  }, [b, T, D, m, S, d, l, w, g, x]);
}
function Qz() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Xz = 0, qz = () => "__" + String(++Xz) + "__";
function Kz() {
  let {
    router: l
  } = fR(Vy.UseSubmit), {
    basename: f
  } = st.useContext(xl), d = _z();
  return st.useCallback(function(m, S) {
    S === void 0 && (S = {}), Qz();
    let {
      action: w,
      method: g,
      encType: x,
      formData: T,
      body: b
    } = Uz(m, f);
    if (S.navigate === !1) {
      let D = S.fetcherKey || qz();
      l.fetch(D, d, S.action || w, {
        preventScrollReset: S.preventScrollReset,
        formData: T,
        body: b,
        formMethod: S.method || g,
        formEncType: S.encType || x,
        unstable_flushSync: S.unstable_flushSync
      });
    } else
      l.navigate(S.action || w, {
        preventScrollReset: S.preventScrollReset,
        formData: T,
        body: b,
        formMethod: S.method || g,
        formEncType: S.encType || x,
        replace: S.replace,
        state: S.state,
        fromRouteId: d,
        unstable_flushSync: S.unstable_flushSync,
        unstable_viewTransition: S.unstable_viewTransition
      });
  }, [l, f, d]);
}
function Zz(l, f) {
  let {
    relative: d
  } = f === void 0 ? {} : f, {
    basename: m
  } = st.useContext(xl), S = st.useContext(Xf);
  S || (process.env.NODE_ENV !== "production" ? In(!1, "useFormAction must be used inside a RouteContext") : In(!1));
  let [w] = S.matches.slice(-1), g = Qf({}, bv(l || ".", {
    relative: d
  })), x = wv();
  if (l == null) {
    g.search = x.search;
    let T = new URLSearchParams(g.search);
    T.has("index") && T.get("index") === "" && (T.delete("index"), g.search = T.toString() ? "?" + T.toString() : "");
  }
  return (!l || l === ".") && w.route.index && (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"), m !== "/" && (g.pathname = g.pathname === "/" ? m : NC([m, g.pathname])), aC(g);
}
function Jz(l, f) {
  f === void 0 && (f = {});
  let d = st.useContext(cR);
  d == null && (process.env.NODE_ENV !== "production" ? In(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : In(!1));
  let {
    basename: m
  } = fR(Vy.useViewTransitionState), S = bv(l, {
    relative: f.relative
  });
  if (!d.isTransitioning)
    return !1;
  let w = Gf(d.currentLocation.pathname, m) || d.currentLocation.pathname, g = Gf(d.nextLocation.pathname, m) || d.nextLocation.pathname;
  return lx(S.pathname, g) != null || lx(S.pathname, w) != null;
}
function N2({
  children: l,
  link: f,
  id: d = null,
  isExternLink: m = !1,
  disabled: S = !1,
  className: w = "",
  currentPathname: g = "",
  ...x
}) {
  return /* @__PURE__ */ je.jsx(
    "li",
    {
      className: "nav-element ease-in-out hover:text-orange-300 hover:scale-105 " + (g === f ? "text-orange-300 " : "") + Bi + w,
      ...x,
      children: m ? /* @__PURE__ */ je.jsx("a", { href: f, className: "block px-2 sm:px-5 py-2", children: l }) : /* @__PURE__ */ je.jsx(PC, { to: f, className: "block px-2 sm:px-5 py-2", children: l })
    }
  );
}
function L2({
  children: l,
  className: f = "",
  ...d
}) {
  return /* @__PURE__ */ je.jsx(
    "p",
    {
      className: "py-2 lg:py-4 " + f,
      ...Ys,
      ...d,
      children: l
    }
  );
}
function A2({
  children: l,
  href: f,
  className: d = "",
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "a",
    {
      href: f,
      className: d,
      ...m,
      children: /* @__PURE__ */ je.jsx("p", { className: "hover:scale-105 inline-block text-orange-200 hover:text-orange-400 " + Bi, children: l })
    }
  );
}
function z2({
  children: l,
  className: f = "",
  transitionEnabled: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "h1",
    {
      className: "text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl uppercase my-8 sm:my-12 lg:my-16 text-center " + f,
      ...d ? Ys : {},
      ...m,
      children: Gs(l)
    }
  );
}
function U2({
  children: l,
  className: f = "",
  transitionEnabled: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "h2",
    {
      className: "text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl my-6 sm:my-10 lg:my-12 text-center uppercase " + f,
      ...m,
      ...d ? Ys : {},
      children: Gs(l)
    }
  );
}
function P2({
  children: l,
  className: f = "",
  isSmallerMode: d = !1,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "h3",
    {
      className: `my-2 sm:my-4 lg:my-4 text-center uppercase 
    ${d ? "text-lg xs:text-xl lg:text-xl" : "text-xl xs:text-2xl lg:text-2xl"} 
    ${f}`,
      ...m,
      children: Gs(l)
    }
  );
}
function j2({
  children: l,
  className: f = "",
  isMarginEnabled: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "h4",
    {
      className: `text-md xs:text-lg md:text-xl uppercase 
    ${d ? "my-2 sm:my-4" : ""} 
    ${f}`,
      ...m,
      children: Gs(l)
    }
  );
}
function F2({
  children: l,
  className: f = "",
  isMarginEnabled: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "h5",
    {
      className: `text-md uppercase 
    ${d ? "my-2 sm:my-4" : ""} 
    ${f}`,
      ...m,
      children: Gs(l)
    }
  );
}
function H2({
  children: l,
  className: f = "",
  isMarginEnabled: d = !0,
  ...m
}) {
  return /* @__PURE__ */ je.jsx(
    "h6",
    {
      className: `text-md 
    ${d ? "my-2 sm:my-4 " : ""} 
    ${f}`,
      ...m,
      children: Gs(l)
    }
  );
}
function V2(l) {
  return l.length === 0;
}
function I2(l, f) {
  const d = document.getElementById(f);
  d && l.observe(d);
}
function B2(l, f) {
  const d = document.getElementById(f);
  d && l.unobserve(d);
}
function $2(l, f = 0) {
  return Math.floor(Math.random() * (l - f)) + f;
}
function W2(l) {
  const f = document.querySelector(l);
  f && window.scrollTo({
    top: f.offsetTop - 80,
    behavior: "smooth"
  });
}
function Y2(l) {
  return 'url("' + l + '")';
}
function G2(l) {
  return l === "" ? "javascript:void(0);" : l;
}
function Q2(l) {
  return l === 0 || l === "" || l === void 0;
}
function X2(l) {
  return l === void 0;
}
function q2(l) {
  return l = l.split("-"), new Date(l[0], l[1] - 1).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long"
  });
}
export {
  cx as ButtonLink,
  i2 as ButtonLinkBig,
  o2 as ButtonLinkXL,
  l2 as ButtonNoLink,
  fx as DivDefault,
  c2 as ElementCarousel,
  uN as GroupInputLabel,
  d2 as IFrame,
  f2 as IconLink,
  xb as Image,
  p2 as ImageLink,
  u2 as InputText,
  lN as Label,
  h2 as LoadingSpinner,
  k2 as Nav,
  uz as NavDisplayButton,
  M2 as NavHome,
  N2 as NavItem,
  oz as NavLargeScreen,
  iz as NavSmallScreen,
  L2 as Paragraph,
  m2 as ScrollToTop,
  oN as Section,
  s2 as SectionBig,
  v2 as Separator,
  A2 as TextLink,
  z2 as TitleH1,
  U2 as TitleH2,
  P2 as TitleH3,
  j2 as TitleH4,
  F2 as TitleH5,
  H2 as TitleH6,
  C2 as UnderConstruction,
  E2 as Viewer,
  y2 as ViewerType,
  G2 as adaptHref,
  Bi as animationDefault,
  aN as colorImportant,
  nN as colorPrimary,
  a2 as colorSecondary,
  rN as colorSecondaryNoHover,
  q2 as getDateTextYYYYMM,
  Y2 as getImageUrl,
  $2 as getRandomInt,
  V2 as isEmpty,
  X2 as isNull,
  Q2 as isNullOrZero,
  I2 as observeDOM,
  W2 as scrollToAnchor,
  S2 as selectViewer,
  BL as setContent,
  IL as setIsOpen,
  g2 as setName,
  iN as shadowDefault,
  Ys as transitionFadeIn,
  B2 as unobserveDOM,
  T2 as useIsScreen2XL,
  D2 as useIsScreen2XS,
  O2 as useIsScreenDesktop,
  b2 as useIsScreenLG,
  x2 as useIsScreenMD,
  rz as useIsScreenMobile,
  R2 as useIsScreenSM,
  az as useIsScreenTablet,
  w2 as useIsScreenXL,
  _2 as useIsScreenXS,
  Dx as viewerSlice
};
