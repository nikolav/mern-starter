export default function (G, e) {
  "use strict";
  var g = [],
    r = Object.getPrototypeOf,
    a = g.slice,
    h = g.flat
      ? function (e) {
          return g.flat.call(e);
        }
      : function (e) {
          return g.concat.apply([], e);
        },
    K = g.push,
    J = g.indexOf,
    n = {},
    i = n.toString,
    v = n.hasOwnProperty,
    o = v.toString,
    s = o.call(Object),
    u = {};
  function y(e) {
    return null == e
      ? e + ""
      : "object" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  function m(e) {
    return null != e && e === e.window;
  }
  function b(e) {
    var t = !!e && e.length,
      n = y(e);
    return (
      "function" != typeof e &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  var x = G.document,
    l = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function w(e, t, n) {
    var r,
      i = (n = n || x).createElement("script");
    if (((i.text = e), t)) for (r in l) t[r] && (i[r] = t[r]);
    n.head.appendChild(i).parentNode.removeChild(i);
  }
  var t = "4.0.0-pre slim",
    c = /HTML$/i,
    Z = function (e, t) {
      return new Z.fn.init(e, t);
    };
  function ee(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (Z.fn = Z.prototype =
    {
      jquery: t,
      constructor: Z,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e
          ? a.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = Z.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Z.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          Z.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          Z.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          Z.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
    }),
    (Z.extend = Z.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" != typeof a && "function" != typeof a && (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (Z.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || Z.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = Z.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    Z.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              o.call(n) === s))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        w(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (b(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) return e.textContent;
          if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += Z.text(t);
        return n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (b(Object(e))
              ? Z.merge(n, "string" == typeof e ? [e] : e)
              : K.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : J.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !c.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (b(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return h(a);
      },
      guid: 1,
      support: u,
    }),
    "function" == typeof Symbol && (Z.fn[Symbol.iterator] = g[Symbol.iterator]),
    Z.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = x.documentElement,
    te = g.pop,
    ne = "[\\x20\\t\\r\\n\\f]",
    re = x.documentMode,
    ie =
      re &&
      new RegExp(
        ":enabled|:disabled|\\[" +
          ne +
          "*name" +
          ne +
          "*=" +
          ne +
          "*(?:''|\"\")"
      ),
    oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g");
  Z.contains = function (e, t) {
    var n = 9 === e.nodeType ? e.documentElement : e,
      r = t && t.parentNode;
    return (
      e === r ||
      !(
        !r ||
        1 !== r.nodeType ||
        !(n.contains
          ? n.contains(r)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  Z.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var d,
    E = g.sort,
    C = g.splice;
  function A(e, t) {
    if (e === t) return (d = !0), 0;
    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return (
      n ||
      (1 &
      (n =
        (e.ownerDocument || e) == (t.ownerDocument || t)
          ? e.compareDocumentPosition(t)
          : 1)
        ? e == x || (e.ownerDocument == x && Z.contains(x, e))
          ? -1
          : t == x || (t.ownerDocument == x && Z.contains(x, t))
          ? 1
          : 0
        : 4 & n
        ? -1
        : 1)
    );
  }
  Z.uniqueSort = function (e) {
    var t,
      n = [],
      r = 0,
      i = 0;
    if (((d = !1), E.call(e, A), d)) {
      while ((t = e[i++])) t === e[i] && (r = n.push(i));
      while (r--) C.call(e, n[r], 1);
    }
    return e;
  };
  var ae = x,
    se = T.matches || T.msMatchesSelector;
  function S(e, t, n) {
    var r = [],
      i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType)
      if (1 === e.nodeType) {
        if (i && Z(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function D(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  !(function () {
    var e,
      b,
      x,
      w,
      r,
      T,
      E = Z.expando,
      C = 0,
      n = 0,
      i = P(),
      c = P(),
      s = P(),
      d = P(),
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ne +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      o =
        "\\[" +
        ne +
        "*(" +
        t +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ne +
        "*\\]",
      a =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        o +
        ")*)|.*)\\)|)",
      u = new RegExp(ne + "+", "g"),
      f = new RegExp("^" + ne + "*," + ne + "*"),
      h = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      g = new RegExp(ne + "|>"),
      l = new RegExp(a),
      p = new RegExp("^" + t + "$"),
      v = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + o),
        PSEUDO: new RegExp("^" + a),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp(
          "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
          "i"
        ),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      y = /^(?:input|select|textarea|button)$/i,
      m = /^h\d$/i,
      A = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      S = /[+~]/,
      D = new RegExp("\\\\[\\da-fA-F]{1,6}" + ne + "?|\\\\([^\\r\\n\\f])", "g"),
      k = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      N = function () {
        q();
      },
      O = z(
        function (e) {
          return !0 === e.disabled && ee(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    function j(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }
    function L(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (q(e), (e = e || w), T)) {
        if (11 !== p && (u = A.exec(t)))
          if ((i = u[1])) {
            if (9 === p) return (a = e.getElementById(i)) && K.call(n, a), n;
            if (f && (a = f.getElementById(i)) && Z.contains(e, a))
              return K.call(n, a), n;
          } else {
            if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return K.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(d[t + " "] || (ie && ie.test(t)))) {
          if (((c = t), (f = e), 1 === p && (g.test(t) || h.test(t)))) {
            ((f = (S.test(t) && M(e.parentNode)) || e) !== e || re) &&
              ((s = e.getAttribute("id"))
                ? (s = Z.escapeSelector(s))
                : e.setAttribute("id", (s = E))),
              (o = (l = W(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + U(l[o]);
            c = l.join(",");
          }
          try {
            return K.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            d(t, !0);
          } finally {
            s === E && e.removeAttribute("id");
          }
        }
      }
      return (function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && W((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            "ID" === (a = o[0]).type &&
            9 === t.nodeType &&
            T &&
            b.relative[o[1].type]
          ) {
            if (!(t = (b.find.ID(a.matches[0].replace(D, k), t) || [])[0]))
              return n;
            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          i = v.needsContext.test(e) ? 0 : o.length;
          while (i--) {
            if (((a = o[i]), b.relative[(s = a.type)])) break;
            if (
              (u = b.find[s]) &&
              (r = u(
                a.matches[0].replace(D, k),
                (S.test(o[0].type) && M(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && U(o))))
                return K.apply(n, r), n;
              break;
            }
          }
        }
        return (
          (l || Q(e, c))(
            r,
            t,
            !T,
            n,
            !t || (S.test(e) && M(t.parentNode)) || t
          ),
          n
        );
      })(t.replace(oe, "$1"), e, n, r);
    }
    function P() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function R(e) {
      return (e[E] = !0), e;
    }
    function I(t) {
      return function (e) {
        return ee(e, "input") && e.type === t;
      };
    }
    function H(t) {
      return function (e) {
        return (ee(e, "input") || ee(e, "button")) && e.type === t;
      };
    }
    function $(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && O(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function B(a) {
      return R(function (o) {
        return (
          (o = +o),
          R(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function M(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function q(e) {
      var t,
        n = e ? e.ownerDocument || e : ae;
      n != w &&
        9 === n.nodeType &&
        ((r = (w = n).documentElement),
        (T = !Z.isXMLDoc(w)),
        re &&
          ae != w &&
          (t = w.defaultView) &&
          t.top !== t &&
          t.addEventListener("unload", N));
    }
    for (e in ((L.matches = function (e, t) {
      return L(e, null, null, t);
    }),
    (L.matchesSelector = function (e, t) {
      if ((q(e), T && !d[t + " "] && (!ie || !ie.test(t))))
        try {
          return se.call(e, t);
        } catch (e) {
          d(t, !0);
        }
      return 0 < L(t, w, null, [e]).length;
    }),
    ((b = Z.expr =
      {
        cacheLength: 50,
        createPseudo: R,
        match: v,
        find: {
          ID: function (e, t) {
            if (void 0 !== t.getElementById && T) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          },
          TAG: function (e, t) {
            return void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          },
          CLASS: function (e, t) {
            if (void 0 !== t.getElementsByClassName && T)
              return t.getElementsByClassName(e);
          },
        },
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(D, k)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(D, k)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || j(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && j(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return v.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    l.test(n) &&
                    (t = W(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          ID: function (e) {
            var t = e.replace(D, k);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          },
          TAG: function (e) {
            var t = e.replace(D, k).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return ee(e, t);
                };
          },
          CLASS: function (e) {
            var t = i[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                i(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = Z.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(u, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? ee(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[E] || (l[E] = {}))[d] || [])[0] === C &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [C, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[E] || (e[E] = {}))[d] || [])[0] === C &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? ee(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[E] || (o[E] = {}))[d] = [C, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                j("unsupported pseudo: " + e);
            return a[E]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? R(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = J.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: R(function (e) {
            var r = [],
              i = [],
              s = Q(e.replace(oe, "$1"));
            return s[E]
              ? R(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: R(function (t) {
            return function (e) {
              return 0 < L(t, e).length;
            };
          }),
          contains: R(function (t) {
            return (
              (t = t.replace(D, k)),
              function (e) {
                return -1 < (e.textContent || Z.text(e)).indexOf(t);
              }
            );
          }),
          lang: R(function (n) {
            return (
              p.test(n || "") || j("unsupported lang: " + n),
              (n = n.replace(D, k).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = T
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = G.location && G.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e === w.activeElement &&
              w.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: $(!1),
          disabled: $(!0),
          checked: function (e) {
            return (
              (ee(e, "input") && !!e.checked) ||
              (ee(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              re && e.parentNode && e.parentNode.selectedIndex,
              !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return m.test(e.nodeName);
          },
          input: function (e) {
            return y.test(e.nodeName);
          },
          button: function (e) {
            return (ee(e, "input") && "button" === e.type) || ee(e, "button");
          },
          text: function (e) {
            return ee(e, "input") && "text" === e.type;
          },
          first: B(function () {
            return [0];
          }),
          last: B(function (e, t) {
            return [t - 1];
          }),
          eq: B(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: B(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: B(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: B(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: B(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = I(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = H(e);
    function F() {}
    function W(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = f.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = h.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(oe, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = v[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? j(e) : c(e, s).slice(0);
    }
    function U(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function z(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [C, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[E] || (e[E] = {})), u && ee(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === C && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function X(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function _(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function V(d, h, g, v, y, e) {
      return (
        v && !v[E] && (v = V(v)),
        y && !y[E] && (y = V(y, e)),
        R(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) L(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : _(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = _(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? J.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = _(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : K.apply(t, s);
        })
      );
    }
    function Y(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = z(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = z(
            function (e) {
              return -1 < J.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== x)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [z(X(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return V(
              1 < s && X(c),
              1 < s &&
                U(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(oe, "$1"),
              t,
              s < n && Y(e.slice(s, n)),
              n < r && Y((e = e.slice(n))),
              n < r && U(e)
            );
          }
          c.push(t);
        }
      return X(c);
    }
    function Q(e, t) {
      var n,
        g,
        v,
        y,
        m,
        r,
        i = [],
        o = [],
        a = s[e + " "];
      if (!a) {
        t || (t = W(e)), (n = t.length);
        while (n--) (a = Y(t[n]))[E] ? i.push(a) : o.push(a);
        (a = s(
          e,
          ((g = o),
          (y = 0 < (v = i).length),
          (m = 0 < g.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = x,
              d = e || (m && b.find.TAG("*", i)),
              h = (C += null == p ? 1 : Math.random() || 0.1);
            for (i && (x = t == w || t || i); null != (o = d[l]); l++) {
              if (m && o) {
                (a = 0), t || o.ownerDocument == w || (q(o), (n = !T));
                while ((s = g[a++]))
                  if (s(o, t || w, n)) {
                    K.call(r, o);
                    break;
                  }
                i && (C = h);
              }
              y && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), y && l !== u)) {
              a = 0;
              while ((s = v[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = te.call(r));
                f = _(f);
              }
              K.apply(r, f),
                i && !e && 0 < f.length && 1 < u + v.length && Z.uniqueSort(r);
            }
            return i && ((C = h), (x = p)), c;
          }),
          y ? R(r) : r)
        )).selector = e;
      }
      return a;
    }
    (F.prototype = b.filters = b.pseudos),
      (b.setFilters = new F()),
      q(),
      (Z.find = L);
  })();
  var k = Z.expr.match.needsContext,
    N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function O(e) {
    return "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length;
  }
  function j(e, n, r) {
    return "function" == typeof n
      ? Z.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? Z.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? Z.grep(e, function (e) {
          return -1 < J.call(n, e) !== r;
        })
      : Z.filter(n, e, r);
  }
  (Z.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? Z.find.matchesSelector(r, e)
          ? [r]
          : []
        : Z.find.matches(
            e,
            Z.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    Z.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            Z(e).filter(function () {
              for (t = 0; t < r; t++) if (Z.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) Z.find(e, i[t], n);
        return 1 < r ? Z.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? Z(e) : e || [], !1)
          .length;
      },
    });
  var L,
    P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((Z.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if (e.nodeType) return (this[0] = e), (this.length = 1), this;
    if ("function" == typeof e) return void 0 !== L.ready ? L.ready(e) : e(Z);
    if (O((n = e + ""))) n = [null, e, null];
    else {
      if ("string" != typeof e) return Z.makeArray(e, this);
      n = P.exec(e);
    }
    if (!n || (!n[1] && t))
      return !t || t.jquery ? (t || L).find(e) : this.constructor(t).find(e);
    if (n[1]) {
      if (
        ((t = t instanceof Z ? t[0] : t),
        Z.merge(
          this,
          Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : x, !0)
        ),
        N.test(n[1]) && Z.isPlainObject(t))
      )
        for (n in t)
          "function" == typeof this[n] ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }
    return (
      (r = x.getElementById(n[2])) && ((this[0] = r), (this.length = 1)), this
    );
  }).prototype = Z.fn),
    (L = Z(x));
  var R = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 };
  function H(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  Z.fn.extend({
    has: function (e) {
      var t = Z(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (Z.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && Z(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && Z.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? Z.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? J.call(Z(e), this[0])
          : J.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(Z.uniqueSort(Z.merge(this.get(), Z(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    Z.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return S(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return S(e, "parentNode", n);
        },
        next: function (e) {
          return H(e, "nextSibling");
        },
        prev: function (e) {
          return H(e, "previousSibling");
        },
        nextAll: function (e) {
          return S(e, "nextSibling");
        },
        prevAll: function (e) {
          return S(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return S(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return S(e, "previousSibling", n);
        },
        siblings: function (e) {
          return D((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return D(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (ee(e, "template") && (e = e.content || e),
              Z.merge([], e.childNodes));
        },
      },
      function (r, i) {
        Z.fn[r] = function (e, t) {
          var n = Z.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = Z.filter(t, n)),
            1 < this.length &&
              (I[r] || Z.uniqueSort(n), R.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === y(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        "function" != typeof r && (a = !0),
        l &&
          (t = a
            ? (t.call(e, r), null)
            : ((l = t),
              function (e, t, n) {
                return l.call(Z(e), n);
              })),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    B = /-([a-z])/g;
  function M(e, t) {
    return t.toUpperCase();
  }
  function q(e) {
    return e.replace(B, M);
  }
  var F = /[^\x20\t\r\n\f]+/g;
  function W(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function U() {
    this.expando = Z.expando + U.uid++;
  }
  (U.uid = 1),
    (U.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = Object.create(null)),
            W(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[q(t)] = n;
        else for (r in t) i[q(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][q(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(q)
              : (t = q(t)) in r
              ? [t]
              : t.match(F) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || Z.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !Z.isEmptyObject(t);
      },
    });
  var z = new U(),
    X = new U(),
    _ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    V = /[A-Z]/g;
  function Y(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(V, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : _.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        X.set(e, t, n);
      } else n = void 0;
    return n;
  }
  Z.extend({
    hasData: function (e) {
      return X.hasData(e) || z.hasData(e);
    },
    data: function (e, t, n) {
      return X.access(e, t, n);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, n) {
      return z.access(e, t, n);
    },
    _removeData: function (e, t) {
      z.remove(e, t);
    },
  }),
    Z.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                X.set(this, n);
              })
            : $(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = X.get(o, n))
                      ? t
                      : void 0 !== (t = Y(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    X.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = X.get(o)), 1 === o.nodeType && !z.get(o, "hasDataAttrs"))
        ) {
          t = a.length;
          while (t--)
            a[t] &&
              0 === (r = a[t].name).indexOf("data-") &&
              ((r = q(r.slice(5))), Y(o, r, i[r]));
          z.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e);
        });
      },
    }),
    Z.fn.extend({
      attr: function (e, t) {
        return $(this, Z.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          Z.removeAttr(this, e);
        });
      },
    }),
    Z.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? Z.prop(e, t, n)
            : ((1 === o && Z.isXMLDoc(e)) || (i = Z.attrHooks[t.toLowerCase()]),
              void 0 !== n
                ? null === n
                  ? void Z.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = e.getAttribute(t))
                ? void 0
                : r);
      },
      attrHooks: {},
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(F);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    re &&
      (Z.attrHooks.type = {
        set: function (e, t) {
          if ("radio" === t && ee(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        },
      }),
    Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, i) {
      Z.attrHooks[i] = {
        get: function (e) {
          var t,
            n = Z.isXMLDoc(e),
            r = i.toLowerCase();
          return n || (t = null != e.getAttribute(i) ? r : null), t;
        },
        set: function (e, t, n) {
          return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      };
    });
  var Q = /^(?:input|select|textarea|button)$/i,
    ue = /^(?:a|area)$/i;
  function le(e) {
    return (e.match(F) || []).join(" ");
  }
  function ce(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function fe(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(F)) || [];
  }
  Z.fn.extend({
    prop: function (e, t) {
      return $(this, Z.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Z.propFix[e] || e];
      });
    },
  }),
    Z.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && Z.isXMLDoc(e)) ||
              ((t = Z.propFix[t] || t), (i = Z.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = e.getAttribute("tabindex");
            return t
              ? parseInt(t, 10)
              : Q.test(e.nodeName) || (ue.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    re &&
      (Z.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    Z.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Z.propFix[this.toLowerCase()] = this;
      }
    ),
    Z.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return "function" == typeof t
          ? this.each(function (e) {
              Z(this).addClass(t.call(this, e, ce(this)));
            })
          : (e = fe(t)).length
          ? this.each(function () {
              if (
                ((r = ce(this)), (n = 1 === this.nodeType && " " + le(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = le(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return "function" == typeof t
          ? this.each(function (e) {
              Z(this).removeClass(t.call(this, e, ce(this)));
            })
          : arguments.length
          ? (e = fe(t)).length
            ? this.each(function () {
                if (
                  ((r = ce(this)),
                  (n = 1 === this.nodeType && " " + le(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = le(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e, r, i, o;
        return "function" == typeof t
          ? this.each(function (e) {
              Z(this).toggleClass(t.call(this, e, ce(this), n), n);
            })
          : "boolean" == typeof n
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : (e = fe(t)).length
          ? this.each(function () {
              for (o = Z(this), i = 0; i < e.length; i++)
                (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
            })
          : this;
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + le(ce(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    }),
    Z.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = "function" == typeof n),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, Z(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = Z.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  Z.valHooks[this.type] ||
                  Z.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r = Z.valHooks[t.type] || Z.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : null == (e = t.value)
            ? ""
            : e
          : void 0;
      },
    }),
    Z.extend({
      valHooks: {
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                (n = i[r]).selected &&
                !n.disabled &&
                (!n.parentNode.disabled || !ee(n.parentNode, "optgroup"))
              ) {
                if (((t = Z(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = Z.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected = -1 < Z.inArray(Z(r).val(), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    re &&
      (Z.valHooks.option = {
        get: function (e) {
          var t = e.getAttribute("value");
          return null != t ? t : le(Z.text(e));
        },
      }),
    Z.each(["radio", "checkbox"], function () {
      Z.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < Z.inArray(Z(e).val(), t));
        },
      };
    });
  var pe = /^(?:checkbox|radio)$/i,
    de = /^([^.]*)(?:\.(.+)|)/;
  function he() {
    return !0;
  }
  function ge() {
    return !1;
  }
  function ve(e, t) {
    return (e === x.activeElement) == ("focus" === t);
  }
  function ye(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ye(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ge;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return Z().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = Z.guid++))),
      e.each(function () {
        Z.event.add(this, t, i, r, n);
      })
    );
  }
  function me(e, i, o) {
    o
      ? (z.set(e, i, !1),
        Z.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = z.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (Z.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = a.call(arguments)),
                z.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = z.get(this, i)) || t ? z.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (z.set(this, i, {
                  value: Z.event.trigger(
                    Z.extend(r[0], Z.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === z.get(e, i) && Z.event.add(e, i, he);
  }
  (Z.event = {
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = z.get(t);
      if (W(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && Z.find.matchesSelector(T, i),
          n.guid || (n.guid = Z.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return void 0 !== Z && Z.event.triggered !== e.type
                  ? Z.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(F) || [""]).length);
        while (l--)
          (d = g = (s = de.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = Z.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = Z.event.special[d] || {}),
              (c = Z.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && Z.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = z.hasData(e) && z.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(F) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = de.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = Z.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                Z.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
        Z.isEmptyObject(u) && z.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = Z.event.fix(e),
        l = (z.get(this, "events") || Object.create(null))[u.type] || [],
        c = Z.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = Z.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (Z.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < Z(i, this).index(l)
                  : Z.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(Z.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get:
          "function" == typeof e
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[Z.expando] ? e : new Z.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && ee(t, "input") && me(t, "click", he),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && ee(t, "input") && me(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              ee(t, "input") &&
              z.get(t, "click")) ||
            ee(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (Z.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (Z.Event = function (e, t) {
      if (!(this instanceof Z.Event)) return new Z.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented ? he : ge),
          (this.target = e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && Z.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[Z.expando] = !0);
    }),
    (Z.Event.prototype = {
      constructor: Z.Event,
      isDefaultPrevented: ge,
      isPropagationStopped: ge,
      isImmediatePropagationStopped: ge,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = he),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = he),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = he),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Z.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      Z.event.addProp
    ),
    Z.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      Z.event.special[t] = {
        setup: function () {
          return me(this, t, ve), !1;
        },
        trigger: function () {
          return me(this, t), !0;
        },
        _default: function (e) {
          return z.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    Z.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        Z.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || Z.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    Z.fn.extend({
      on: function (e, t, n, r) {
        return ye(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ye(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            Z(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = ge),
            this.each(function () {
              Z.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var be = /^(?:focusinfocus|focusoutblur)$/,
    xe = function (e) {
      e.stopPropagation();
    };
  Z.extend(Z.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || x],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || x),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !be.test(d + Z.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[Z.expando]
            ? e
            : new Z.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : Z.makeArray(t, [e])),
          (c = Z.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !m(n)) {
          for (
            s = c.delegateType || d, be.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || x) &&
            p.push(a.defaultView || a.parentWindow || G);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (z.get(o, "events") || Object.create(null))[e.type] &&
              z.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              W(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !W(n) ||
            (u &&
              "function" == typeof n[d] &&
              !m(n) &&
              ((a = n[u]) && (n[u] = null),
              (Z.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xe),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xe),
              (Z.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = Z.extend(new Z.Event(), n, { type: e, isSimulated: !0 });
      Z.event.trigger(r, null, t);
    },
  }),
    Z.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          Z.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return Z.event.trigger(e, t, n, !0);
      },
    });
  var we = function (e) {
      return (
        Z.contains(e.ownerDocument, e) || e.getRootNode(Te) === e.ownerDocument
      );
    },
    Te = { composed: !0 };
  T.getRootNode ||
    (we = function (e) {
      return Z.contains(e.ownerDocument, e);
    });
  var Ee = we,
    Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ae = /^$|^module$|\/(?:java|ecma)script/i,
    Se = {
      thead: ["table"],
      col: ["colgroup", "table"],
      tr: ["tbody", "table"],
      td: ["tr", "tbody", "table"],
    };
  function De(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && ee(e, t)) ? Z.merge([e], n) : n
    );
  }
  function ke(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"));
  }
  (Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead), (Se.th = Se.td);
  var Ne = /<|&#?\w+;/;
  function Oe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === y(o) && (o.nodeType || b(o)))
          Z.merge(p, o.nodeType ? [o] : o);
        else if (Ne.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Ce.exec(o) || ["", ""])[1].toLowerCase()),
            (c = (u = Se[s] || g).length);
          while (-1 < --c) a = a.appendChild(t.createElement(u[c]));
          (a.innerHTML = Z.htmlPrefilter(o)),
            Z.merge(p, a.childNodes),
            ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < Z.inArray(o, r)) i && i.push(o);
      else if (
        ((l = Ee(o)), (a = De(f.appendChild(o), "script")), l && ke(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ae.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var je = /<script|<style|<link/i;
  function Le(e, t) {
    return (
      (ee(e, "table") &&
        ee(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        Z(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ie(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (z.hasData(e) && (s = z.get(e).events))
        for (i in (z.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) Z.event.add(t, i, s[i][n]);
      X.hasData(e) && ((o = X.access(e)), (a = Z.extend({}, o)), X.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = h(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0];
    if ("function" == typeof d)
      return n.each(function (e) {
        var t = n.eq(e);
        (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Oe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = Z.map(De(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = Z.clone(u, !0, !0)), s && Z.merge(a, De(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, Z.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            Ae.test(u.type || "") &&
              !z.access(u, "globalEval") &&
              Z.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? Z._evalUrl &&
                  !u.noModule &&
                  Z._evalUrl(
                    u.src,
                    { nonce: u.nonce, crossOrigin: u.crossOrigin },
                    l
                  )
                : w(u.textContent, u, l));
    }
    return n;
  }
  function $e(e, t, n) {
    for (var r, i = t ? Z.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || Z.cleanData(De(r)),
        r.parentNode &&
          (n && Ee(r) && ke(De(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  Z.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = Ee(e);
      if (re && (1 === e.nodeType || 11 === e.nodeType) && !Z.isXMLDoc(e))
        for (a = De(s), r = 0, i = (o = De(e)).length; r < i; r++)
          ee(a[r], "textarea") && (a[r].defaultValue = o[r].defaultValue);
      if (t)
        if (n)
          for (o = o || De(e), a = a || De(s), r = 0, i = o.length; r < i; r++)
            Ie(o[r], a[r]);
        else Ie(e, s);
      return (
        0 < (a = De(s, "script")).length && ke(a, !u && De(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = Z.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (W(n)) {
          if ((t = n[z.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
            n[z.expando] = void 0;
          }
          n[X.expando] && (n[X.expando] = void 0);
        }
    },
  }),
    Z.fn.extend({
      detach: function (e) {
        return $e(this, e, !0);
      },
      remove: function (e) {
        return $e(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? Z.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (Z.cleanData(De(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Z.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !je.test(e) &&
              !Se[(Ce.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = Z.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (Z.cleanData(De(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            Z.inArray(this, n) < 0 &&
              (Z.cleanData(De(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    Z.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        Z.fn[e] = function (e) {
          for (var t, n = [], r = Z(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              Z(r[o])[a](t),
              K.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    ),
    Z.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            ("function" == typeof e && (e = e.call(this[0])),
            (t = Z(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return "function" == typeof n
          ? this.each(function (e) {
              Z(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = Z(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = "function" == typeof t;
        return this.each(function (e) {
          Z(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              Z(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    });
  var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Me = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
    qe = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
    Fe = /^--/,
    We = ["Top", "Right", "Bottom", "Left"],
    Ue = /^[a-z]/,
    ze =
      /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function Xe(e) {
    return Ue.test(e) && ze.test(e[0].toUpperCase() + e.slice(1));
  }
  var _e = /^-ms-/;
  function Ve(e) {
    return q(e.replace(_e, "ms-"));
  }
  function Ye(e) {
    var t = e.ownerDocument.defaultView;
    return t || (t = G), t.getComputedStyle(e);
  }
  function Qe(e, t, n) {
    var r,
      i = Fe.test(t);
    return (
      (n = n || Ye(e)) &&
        ((r = n.getPropertyValue(t) || n[t]),
        i && (r = r.replace(oe, "$1")),
        "" !== r || Ee(e) || (r = Z.style(e, t))),
      void 0 !== r ? r + "" : r
    );
  }
  var Ge,
    Ke,
    Je = ["Webkit", "Moz", "ms"],
    Ze = x.createElement("div").style,
    et = {};
  function tt(e) {
    var t = et[e];
    return (
      t ||
      (e in Ze
        ? e
        : (et[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Je.length;
              while (n--) if ((e = Je[n] + t) in Ze) return e;
            })(e) || e))
    );
  }
  (Ke = x.createElement("div")).style &&
    (u.reliableTrDimensions = function () {
      var e, t, n;
      return (
        null == Ge &&
          ((e = x.createElement("table")),
          (t = x.createElement("tr")),
          (e.style.cssText =
            "position:absolute;left:-11111px;border-collapse:separate"),
          (t.style.cssText = "border:1px solid"),
          (t.style.height = "1px"),
          (Ke.style.height = "9px"),
          (Ke.style.display = "block"),
          T.appendChild(e).appendChild(t).appendChild(Ke),
          (n = G.getComputedStyle(t)),
          (Ge =
            parseInt(n.height, 10) +
              parseInt(n.borderTopWidth, 10) +
              parseInt(n.borderBottomWidth, 10) ===
            t.offsetHeight),
          T.removeChild(e)),
        Ge
      );
    });
  var nt = /^(none|table(?!-c[ea]).+)/,
    rt = { position: "absolute", visibility: "hidden", display: "block" },
    it = { letterSpacing: "0", fontWeight: "400" };
  function ot(e, t, n) {
    var r = Me.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function at(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += Z.css(e, n + We[a], !0, i)),
        r
          ? ("content" === n && (u -= Z.css(e, "padding" + We[a], !0, i)),
            "margin" !== n &&
              (u -= Z.css(e, "border" + We[a] + "Width", !0, i)))
          : ((u += Z.css(e, "padding" + We[a], !0, i)),
            "padding" !== n
              ? (u += Z.css(e, "border" + We[a] + "Width", !0, i))
              : (s += Z.css(e, "border" + We[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function st(e, t, n) {
    var r = Ye(e),
      i = (re || n) && "border-box" === Z.css(e, "boxSizing", !1, r),
      o = i,
      a = Qe(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (qe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ("auto" === a ||
        (re && i) ||
        (!u.reliableTrDimensions() && ee(e, "tr"))) &&
        e.getClientRects().length &&
        ((i = "border-box" === Z.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        at(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function ut(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && "none" === Z.css(e, "display"))
    );
  }
  Z.extend({
    cssHooks: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = Ve(t),
          u = Fe.test(t),
          l = e.style;
        if (
          (u || (t = tt(s)), (a = Z.cssHooks[t] || Z.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Me.exec(n)) &&
          i[1] &&
          ((n = (function (e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return Z.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (Xe(t) ? "px" : ""),
              c =
                e.nodeType &&
                (!Xe(t) || ("px" !== l && +u)) &&
                Me.exec(Z.css(e, t));
            if (c && c[3] !== l) {
              (u /= 2), (l = l || c[3]), (c = +u || 1);
              while (a--)
                Z.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), Z.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          })(e, t, i)),
          (o = "number")),
          null != n &&
            n == n &&
            ("number" === o && (n += (i && i[3]) || (Xe(s) ? "px" : "")),
            re &&
              "" === n &&
              0 === t.indexOf("background") &&
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = Ve(t);
      return (
        Fe.test(t) || (t = tt(s)),
        (a = Z.cssHooks[t] || Z.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Qe(e, t, r)),
        "normal" === i && t in it && (i = it[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    Z.each(["height", "width"], function (e, s) {
      Z.cssHooks[s] = {
        get: function (e, t, n) {
          if (t)
            return !nt.test(Z.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? st(e, s, n)
              : (function (e, t, n) {
                  var r,
                    i,
                    o = {};
                  for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                  for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                  return r;
                })(e, rt, function () {
                  return st(e, s, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ye(e),
            o = n && "border-box" === Z.css(e, "boxSizing", !1, i),
            a = n ? at(e, s, n, o, i) : 0;
          return (
            a &&
              (r = Me.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[s] = t), (t = Z.css(e, s))),
            ot(0, t, a)
          );
        },
      };
    }),
    Z.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (Z.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + We[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (Z.cssHooks[i + o].set = ot);
    }),
    Z.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ye(e), i = t.length; a < i; a++)
                o[t[a]] = Z.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (Z.expr.pseudos.hidden = function (e) {
      return !Z.expr.pseudos.visible(e);
    }),
    (Z.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    });
  var lt = {};
  function ct(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = z.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ut(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = lt[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = Z.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (lt[s] = u)))))
          : "none" !== n && ((l[c] = "none"), z.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  Z.fn.extend({
    show: function () {
      return ct(this, !0);
    },
    hide: function () {
      return ct(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ut(this) ? Z(this).show() : Z(this).hide();
          });
    },
  });
  var ft = /\[\]$/,
    pt = /\r?\n/g,
    dt = /^(?:submit|button|image|reset|file)$/i,
    ht = /^(?:input|select|textarea|keygen)/i;
  function gt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      Z.each(e, function (e, t) {
        r || ft.test(n)
          ? i(n, t)
          : gt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== y(e)) i(n, e);
    else for (t in e) gt(n + "[" + t + "]", e[t], r, i);
  }
  (Z.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = "function" == typeof t ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !Z.isPlainObject(e)))
      Z.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) gt(n, e[n], t, i);
    return r.join("&");
  }),
    Z.fn.extend({
      serialize: function () {
        return Z.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = Z.prop(this, "elements");
          return e ? Z.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !Z(this).is(":disabled") &&
              ht.test(this.nodeName) &&
              !dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = Z(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? Z.map(n, function (e) {
                  return { name: t.name, value: e.replace(pt, "\r\n") };
                })
              : { name: t.name, value: n.replace(pt, "\r\n") };
          })
          .get();
      },
    }),
    (Z.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new G.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          Z.error(
            "Invalid XML: " +
              (n
                ? Z.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    }),
    (Z.parseHTML = function (e, t, n) {
      return "string" == typeof e || O(e + "")
        ? ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (((r = (t = x.implementation.createHTMLDocument("")).createElement(
              "base"
            )).href = x.location.href),
            t.head.appendChild(r)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Oe([e], t, o)),
              o && o.length && Z(o).remove(),
              Z.merge([], i.childNodes)))
        : [];
      var r, i, o;
    }),
    (Z.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = Z.css(e, "position"),
          c = Z(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = Z.css(e, "top")),
          (u = Z.css(e, "left")),
          (i =
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), r.left)
              : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
          "function" == typeof t && (t = t.call(e, n, Z.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    Z.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                Z.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === Z.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === Z.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = Z(e).offset()).top += Z.css(e, "borderTopWidth", !0)),
              (i.left += Z.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - Z.css(r, "marginTop", !0),
            left: t.left - i.left - Z.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === Z.css(e, "position")) e = e.offsetParent;
          return e || T;
        });
      },
    }),
    Z.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        Z.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    Z.each({ Height: "height", Width: "width" }, function (a, s) {
      Z.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          Z.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return m(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? Z.css(e, t, i)
                  : Z.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    Z.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    Z.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        Z.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    (Z.proxy = function (e, t) {
      var n, r, i;
      if (
        ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
        "function" == typeof e)
      )
        return (
          (r = a.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(a.call(arguments)));
          }).guid = e.guid =
            e.guid || Z.guid++),
          i
        );
    }),
    (Z.holdReady = function (e) {
      e ? Z.readyWait++ : Z.ready(!0);
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Z;
      });
  var vt = G.jQuery,
    yt = G.$;
  (Z.noConflict = function (e) {
    return G.$ === Z && (G.$ = yt), e && G.jQuery === Z && (G.jQuery = vt), Z;
  }),
    void 0 === e && (G.jQuery = G.$ = Z);
  var mt = [],
    bt = function (e) {
      mt.push(e);
    },
    xt = function (e) {
      G.setTimeout(function () {
        e.call(x, Z);
      });
    };
  function wt() {
    x.removeEventListener("DOMContentLoaded", wt),
      G.removeEventListener("load", wt),
      Z.ready();
  }
  return (
    (Z.fn.ready = function (e) {
      return bt(e), this;
    }),
    Z.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --Z.readyWait : Z.isReady) ||
          ((Z.isReady = !0) !== e && 0 < --Z.readyWait) ||
          (bt = function (e) {
            mt.push(e);
            while (mt.length) "function" == typeof (e = mt.shift()) && xt(e);
          })();
      },
    }),
    (Z.ready.then = Z.fn.ready),
    "loading" !== x.readyState
      ? G.setTimeout(Z.ready)
      : (x.addEventListener("DOMContentLoaded", wt),
        G.addEventListener("load", wt)),
    Z
  );
}
