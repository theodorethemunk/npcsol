(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        19934: function(e, s, n) {
            var t = {
                "./af-ZA.js": [26696, 6696],
                "./ar-SA.js": [55063, 5063],
                "./ca-ES.js": [75287, 5287],
                "./cs-CZ.js": [68954, 8954],
                "./da-DK.js": [51926, 1926],
                "./de-DE.js": [39054, 9054],
                "./el-GR.js": [1123, 1123],
                "./en-US.js": [13836, 3836],
                "./es-ES.js": [72900, 2900],
                "./fi-FI.js": [36128, 6128],
                "./fr-FR.js": [87436, 7436],
                "./he-IL.js": [19134, 9134],
                "./hu-HU.js": [90852, 852],
                "./id-ID.js": [66651, 6651],
                "./it-IT.js": [95721, 5721],
                "./ja-JP.js": [57324, 7324],
                "./ko-KR.js": [28550, 8550],
                "./nl-NL.js": [60664, 664],
                "./no-NO.js": [50828, 828],
                "./pl-PL.js": [20885, 885],
                "./pt-BR.js": [86779, 6779],
                "./pt-PT.js": [91676, 1676],
                "./ro-RO.js": [1616, 1616],
                "./ru-RU.js": [69603, 9603],
                "./sr-SP.js": [51269, 1269],
                "./sv-SE.js": [86046, 6046],
                "./sw-TZ.js": [36546, 6546],
                "./tr-TR.js": [61747, 1747],
                "./uk-UA.js": [80853, 853],
                "./vi-VN.js": [48260, 8260],
                "./zh-CN.js": [23138, 3138],
                "./zh-TW.js": [26121, 6121]
            };

            function webpackAsyncContext(e) {
                if (!n.o(t, e)) return Promise.resolve().then(function() {
                    var s = Error("Cannot find module '" + e + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                });
                var s = t[e],
                    r = s[0];
                return n.e(s[1]).then(function() {
                    return n(r)
                })
            }
            webpackAsyncContext.keys = function() {
                return Object.keys(t)
            }, webpackAsyncContext.id = 19934, e.exports = webpackAsyncContext
        },
        46601: function() {},
        24654: function() {},
        78081: function(e, s, n) {
            Promise.resolve().then(n.bind(n, 25902)), Promise.resolve().then(n.bind(n, 70281)), Promise.resolve().then(n.t.bind(n, 90413, 23)), Promise.resolve().then(n.t.bind(n, 68326, 23))
        },
        25902: function(e, s, n) {
            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return UniswapWidget
                }
            });
            var t = n(57437),
                r = n(31952),
                o = n(53986);
            n(60602);
            var a = n(61396),
                c = n.n(a),
                i = n(81628);

            function UniswapWidget() {
                return (0, t.jsxs)("section", {
                    className: "flex flex-col py-8 gap-4 sm:gap-8 mx-auto max-w-screen-lg",
                    children: [(0, t.jsx)("h3", {
                        className: "text-2xl sm:text-4xl font-black tracking-tight text-center mb-5",
                        children: "Become an NPC"
                    }), (0, t.jsx)("div", {
                        className: "text-lg sm:text-center sm:text-2xl sm:leading-10 mb-4",
                        children: (0, t.jsxs)("p", {
                            children: ["NPC trades on both Ethereum (", (0, t.jsx)(c(), {
                                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x8ed97a637a790be1feff5e888d43629dc05408f6",
                                target: "_blank",
                                rel: "noreferrer",
                                className: (0, i.cn)("text-[#1054ff] underline"),
                                children: "via Uniswap"
                            }), ") and on Coinbase’s L2, Base (", (0, t.jsx)(c(), {
                                href: "https://aerodrome.finance/swap?from=eth&to=0xb166e8b140d35d9d8226e40c09f757bac5a4d87d",
                                target: "_blank",
                                rel: "noreferrer",
                                className: (0, i.cn)("text-[#1054ff] underline"),
                                children: "via Aerodrome"
                            }), ") for much cheaper transaction fees."]
                        })
                    }), (0, t.jsx)("div", {
                        className: "Uniswap max-md:-m-[20px] flex justify-center",
                        children: (0, t.jsx)(r.oO, {
                            tokenList: "https://tokens.coingecko.com/uniswap/all.json",
                            defaultOutputTokenAddress: o.ft
                        })
                    })]
                })
            }
        },
        70281: function(e, s, n) {
            "use strict";
            n.r(s);
            var t = n(57437),
                r = n(2265),
                o = n(6435);
            s.default = (0, r.memo)(function() {
                var e = (0, r.useRef)(void 0),
                    s = (0, o.F)().theme;
                return (0, r.useEffect)(function() {
                    if (s) {
                        var n = "/".concat(s, ".mp4");
                        e.current.src = n
                    }
                }, [s]), (0, t.jsx)("div", {
                    className: "relative rounded-3xl",
                    children: (0, t.jsx)("video", {
                        width: "100%",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        controls: !1,
                        playsInline: !0,
                        ref: e,
                        children: (0, t.jsx)("source", {
                            src: "/light.mp4",
                            type: "video/mp4"
                        })
                    })
                })
            })
        }
    },
    function(e) {
        e.O(0, [408, 176, 6636, 5542, 6019, 7522, 2971, 2472, 1744], function() {
            return e(e.s = 78081)
        }), _N_E = e.O()
    }
]);