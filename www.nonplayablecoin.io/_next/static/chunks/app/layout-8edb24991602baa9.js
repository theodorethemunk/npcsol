(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        35883: function() {},
        6435: function(t, n, r) {
            "use strict";
            r.d(n, {
                F: function() {
                    return y
                },
                f: function() {
                    return $
                }
            });
            var a = r(2265);
            let s = ["light", "dark"],
                o = "(prefers-color-scheme: dark)",
                i = "undefined" == typeof window,
                l = (0, a.createContext)(void 0),
                c = {
                    setTheme: t => {},
                    themes: []
                },
                y = () => {
                    var t;
                    return null !== (t = (0, a.useContext)(l)) && void 0 !== t ? t : c
                },
                $ = t => (0, a.useContext)(l) ? a.createElement(a.Fragment, null, t.children) : a.createElement(f, t),
                d = ["light", "dark"],
                f = ({
                    forcedTheme: t,
                    disableTransitionOnChange: n = !1,
                    enableSystem: r = !0,
                    enableColorScheme: i = !0,
                    storageKey: c = "theme",
                    themes: u = d,
                    defaultTheme: h = r ? "system" : "light",
                    attribute: v = "data-theme",
                    value: g,
                    children: x,
                    nonce: _
                }) => {
                    let [k, T] = (0, a.useState)(() => S(c, h)), [w, N] = (0, a.useState)(() => S(c)), j = g ? Object.values(g) : u, C = (0, a.useCallback)(t => {
                        let a = t;
                        if (!a) return;
                        "system" === t && r && (a = p());
                        let o = g ? g[a] : a,
                            l = n ? b() : null,
                            c = document.documentElement;
                        if ("class" === v ? (c.classList.remove(...j), o && c.classList.add(o)) : o ? c.setAttribute(v, o) : c.removeAttribute(v), i) {
                            let t = s.includes(h) ? h : null,
                                n = s.includes(a) ? a : t;
                            c.style.colorScheme = n
                        }
                        null == l || l()
                    }, []), M = (0, a.useCallback)(t => {
                        T(t);
                        try {
                            localStorage.setItem(c, t)
                        } catch (t) {}
                    }, [t]), E = (0, a.useCallback)(n => {
                        let a = p(n);
                        N(a), "system" === k && r && !t && C("system")
                    }, [k, t]);
                    (0, a.useEffect)(() => {
                        let t = window.matchMedia(o);
                        return t.addListener(E), E(t), () => t.removeListener(E)
                    }, [E]), (0, a.useEffect)(() => {
                        let e = t => {
                            t.key === c && M(t.newValue || h)
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [M]), (0, a.useEffect)(() => {
                        C(null != t ? t : k)
                    }, [t, k]);
                    let P = (0, a.useMemo)(() => ({
                        theme: k,
                        setTheme: M,
                        forcedTheme: t,
                        resolvedTheme: "system" === k ? w : k,
                        themes: r ? [...u, "system"] : u,
                        systemTheme: r ? w : void 0
                    }), [k, M, t, w, r, u]);
                    return a.createElement(l.Provider, {
                        value: P
                    }, a.createElement(m, {
                        forcedTheme: t,
                        disableTransitionOnChange: n,
                        enableSystem: r,
                        enableColorScheme: i,
                        storageKey: c,
                        themes: u,
                        defaultTheme: h,
                        attribute: v,
                        value: g,
                        children: x,
                        attrs: j,
                        nonce: _
                    }), x)
                },
                m = (0, a.memo)(({
                    forcedTheme: t,
                    storageKey: n,
                    attribute: r,
                    enableSystem: i,
                    enableColorScheme: l,
                    defaultTheme: c,
                    value: d,
                    attrs: m,
                    nonce: u
                }) => {
                    let h = "system" === c,
                        v = "class" === r ? `var d=document.documentElement,c=d.classList;c.remove(${m.map(t=>`'${t}'`).join(",")});` : `var d=document.documentElement,n='${r}',s='setAttribute';`,
                        g = l ? s.includes(c) && c ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                        $ = (t, n = !1, a = !0) => {
                            let o = d ? d[t] : t,
                                i = n ? t + "|| ''" : `'${o}'`,
                                c = "";
                            return l && a && !n && s.includes(t) && (c += `d.style.colorScheme = '${t}';`), "class" === r ? c += n || o ? `c.add(${i})` : "null" : o && (c += `d[s](n,${i})`), c
                        },
                        x = t ? `!function(){${v}${$(t)}}()` : i ? `!function(){try{${v}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}${h?"":"else{"+$(c,!1,!1)+"}"}${g}}catch(e){}}()` : `!function(){try{${v}var e=localStorage.getItem('${n}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}else{${$(c,!1,!1)};}${g}}catch(t){}}();`;
                    return a.createElement("script", {
                        nonce: u,
                        dangerouslySetInnerHTML: {
                            __html: x
                        }
                    })
                }, () => !0),
                S = (t, n) => {
                    let r;
                    if (!i) {
                        try {
                            r = localStorage.getItem(t) || void 0
                        } catch (t) {}
                        return r || n
                    }
                },
                b = () => {
                    let t = document.createElement("style");
                    return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(t)
                        }, 1)
                    }
                },
                p = t => (t || (t = window.matchMedia(o)), t.matches ? "dark" : "light")
        },
        8074: function(t, n, r) {
            Promise.resolve().then(r.bind(r, 70356)), Promise.resolve().then(r.bind(r, 1815)), Promise.resolve().then(r.bind(r, 83951)), Promise.resolve().then(r.bind(r, 70952)), Promise.resolve().then(r.t.bind(r, 90413, 23)), Promise.resolve().then(r.t.bind(r, 68326, 23)), Promise.resolve().then(r.t.bind(r, 72801, 23)), Promise.resolve().then(r.t.bind(r, 32689, 23)), Promise.resolve().then(r.t.bind(r, 12113, 23))
        },
        70952: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                Web3Modal: function() {
                    return Web3Modal
                }
            });
            var a = r(57437),
                s = r(97011),
                o = r(75404),
                i = r(15900),
                l = "17660689b676825adc4c9301d8bb7756",
                c = [o.R],
                d = (0, s.o1)({
                    chains: c,
                    projectId: l,
                    metadata: {
                        name: "Web3Modal",
                        description: "Web3Modal Example",
                        url: "https://web3modal.com",
                        icons: ["https://avatars.githubusercontent.com/u/37784886"]
                    }
                });

            function Web3Modal(t) {
                var n = t.children;
                return (0, a.jsx)(i.eM, {
                    config: d,
                    children: n
                })
            }(0, s.OY)({
                wagmiConfig: d,
                projectId: l,
                chains: c
            })
        },
        70356: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                MainNav: function() {
                    return MainNav
                }
            });
            var a = r(57437);
            r(2265);
            var s = r(16691),
                o = r.n(s),
                i = r(61396),
                l = r.n(i),
                c = r(81628);

            function MainNav(t) {
                return t.items, (0, a.jsxs)("div", {
                    className: "flex gap-6 md:gap-10",
                    children: [(0, a.jsx)(l(), {
                        href: "/",
                        className: "flex items-center space-x-2",
                        children: (0, a.jsx)(o(), {
                            src: "/npc-logo.svg",
                            width: 40,
                            height: 40,
                            alt: "logo"
                        })
                    }), (0, a.jsxs)("nav", {
                        className: "hidden md:flex gap-6",
                        children: [(0, a.jsx)(l(), {
                            href: "https://app.nonplayablecoin.io/",
                            target: "_blank",
                            className: (0, c.cn)("flex items-center text-sm font-medium text-muted-foreground"),
                            children: "Customize"
                        }), (0, a.jsx)(l(), {
                            prefetch: !0,
                            href: "/transform",
                            className: (0, c.cn)("flex items-center text-sm font-medium text-muted-foreground"),
                            children: "Transform"
                        }), (0, a.jsx)(l(), {
                            href: "https://ai.nonplayablecoin.io/",
                            target: "_blank",
                            className: (0, c.cn)("flex items-center text-sm font-medium text-muted-foreground"),
                            children: "Generate"
                        }), (0, a.jsx)(l(), {
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x8ed97a637a790be1feff5e888d43629dc05408f6",
                            target: "_blank",
                            rel: "noreferrer",
                            className: (0, c.cn)("flex items-center text-sm font-medium text-muted-foreground"),
                            children: "Buy on ETH"
                        }), (0, a.jsx)(l(), {
                            href: "https://aerodrome.finance/swap?from=eth&to=0xb166e8b140d35d9d8226e40c09f757bac5a4d87d",
                            target: "_blank",
                            rel: "noreferrer",
                            className: (0, c.cn)("flex items-center text-sm font-medium text-[#1054ff]"),
                            children: "Buy on BASE"
                        })]
                    })]
                })
            }
        },
        1815: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                ThemeProvider: function() {
                    return ThemeProvider
                }
            });
            var a = r(35029),
                s = r(88965),
                o = r(8001),
                i = r(57437);
            r(2265);
            var l = r(6435);

            function ThemeProvider(t) {
                var n = t.children,
                    r = (0, o._)(t, ["children"]);
                return (0, i.jsx)(l.f, (0, s._)((0, a._)({}, r), {
                    children: n
                }))
            }
        },
        83951: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                ThemeToggle: function() {
                    return ThemeToggle
                }
            });
            var a = r(57437);
            r(2265);
            var s = r(23289);
            let o = (0, s.Z)("Sun", [
                    ["circle", {
                        cx: "12",
                        cy: "12",
                        r: "4",
                        key: "4exip2"
                    }],
                    ["path", {
                        d: "M12 2v2",
                        key: "tus03m"
                    }],
                    ["path", {
                        d: "M12 20v2",
                        key: "1lh1kg"
                    }],
                    ["path", {
                        d: "m4.93 4.93 1.41 1.41",
                        key: "149t6j"
                    }],
                    ["path", {
                        d: "m17.66 17.66 1.41 1.41",
                        key: "ptbguv"
                    }],
                    ["path", {
                        d: "M2 12h2",
                        key: "1t8f8n"
                    }],
                    ["path", {
                        d: "M20 12h2",
                        key: "1q8mjw"
                    }],
                    ["path", {
                        d: "m6.34 17.66-1.41 1.41",
                        key: "1m8zz5"
                    }],
                    ["path", {
                        d: "m19.07 4.93-1.41 1.41",
                        key: "1shlcs"
                    }]
                ]),
                i = (0, s.Z)("Moon", [
                    ["path", {
                        d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",
                        key: "1rit1i"
                    }]
                ]);
            var l = r(6435),
                c = r(23611);

            function ThemeToggle() {
                var t = (0, l.F)(),
                    n = t.setTheme,
                    r = t.theme;
                return (0, a.jsxs)(c.z, {
                    variant: "ghost",
                    size: "icon",
                    onClick: function() {
                        return n("light" === r ? "dark" : "light")
                    },
                    children: [(0, a.jsx)(o, {
                        className: "h-[1.5rem] w-[1.3rem] dark:hidden"
                    }), (0, a.jsx)(i, {
                        className: "hidden h-5 w-5 dark:block"
                    }), (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle theme"
                    })]
                })
            }
        },
        23611: function(t, n, r) {
            "use strict";
            r.d(n, {
                z: function() {
                    return u
                }
            });
            var a = r(35029),
                s = r(8001),
                o = r(57437),
                i = r(2265),
                l = r(12385),
                c = r(7404),
                d = r(81628),
                m = (0, c.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "underline-offset-4 hover:underline text-primary"
                        },
                        size: {
                            default: "h-10 py-2 px-4",
                            sm: "h-9 px-3 rounded-md",
                            lg: "h-11 px-8 rounded-md",
                            xl: "h-14 px-10 rounded-md",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                u = i.forwardRef(function(t, n) {
                    var r = t.className,
                        i = t.variant,
                        c = t.size,
                        u = t.asChild,
                        h = (0, s._)(t, ["className", "variant", "size", "asChild"]),
                        v = void 0 !== u && u ? l.g7 : "button";
                    return (0, o.jsx)(v, (0, a._)({
                        className: (0, d.cn)(m({
                            variant: i,
                            size: c,
                            className: r
                        })),
                        ref: n
                    }, h))
                });
            u.displayName = "Button"
        },
        81628: function(t, n, r) {
            "use strict";
            r.d(n, {
                cn: function() {
                    return cn
                }
            });
            var a = r(50348),
                s = r(23986);

            function cn() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return (0, s.m)((0, a.clsx)(n))
            }
        },
        72801: function() {},
        32689: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
                    fontStyle: "normal"
                },
                className: "__className_e66fe9",
                variable: "__variable_e66fe9"
            }
        },
        12113: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__JetBrains_Mono_bd9c35', '__JetBrains_Mono_Fallback_bd9c35'",
                    fontStyle: "normal"
                },
                className: "__className_bd9c35",
                variable: "__variable_bd9c35"
            }
        }
    },
    function(t) {
        t.O(0, [176, 2946, 2971, 2472, 1744], function() {
            return t(t.s = 8074)
        }), _N_E = t.O()
    }
]);