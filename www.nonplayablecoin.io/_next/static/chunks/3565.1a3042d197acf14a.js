"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3565], {
        63565: function(t, i, r) {
            r.d(i, {
                EthereumProvider: function() {
                    return im
                },
                OPTIONAL_EVENTS: function() {
                    return ih
                },
                OPTIONAL_METHODS: function() {
                    return io
                }
            });
            var c = r(512),
                l = r.n(c),
                v = r(70723),
                _ = r(63101),
                w = r(63943),
                P = r(72058),
                C = r(95097);
            let n = class n extends C.q {
                constructor(t) {
                    super(), this.opts = t, this.protocol = "wc", this.version = 2
                }
            };
            let h = class h extends C.q {
                constructor(t, i) {
                    super(), this.core = t, this.logger = i, this.records = new Map
                }
            };
            let a = class a {
                constructor(t, i) {
                    this.logger = t, this.core = i
                }
            };
            let u = class u extends C.q {
                constructor(t, i) {
                    super(), this.relayer = t, this.logger = i
                }
            };
            let g = class g extends C.q {
                constructor(t) {
                    super()
                }
            };
            let p = class p {
                constructor(t, i, r, c) {
                    this.core = t, this.logger = i, this.name = r
                }
            };
            let d = class d extends C.q {
                constructor(t, i) {
                    super(), this.relayer = t, this.logger = i
                }
            };
            let E = class E extends C.q {
                constructor(t, i) {
                    super(), this.core = t, this.logger = i
                }
            };
            let y = class y {
                constructor(t, i) {
                    this.projectId = t, this.logger = i
                }
            };
            let b = class b {
                constructor(t) {
                    this.opts = t, this.protocol = "wc", this.version = 2
                }
            };
            let S = class S {
                constructor(t) {
                    this.client = t
                }
            };
            var O = r(43283),
                A = r(28429),
                q = r(71188),
                T = r(58619),
                $ = r(70411),
                k = r(53620);
            let hasBuiltInWebSocket = () => "undefined" != typeof WebSocket || void 0 !== r.g && void 0 !== r.g.WebSocket || "undefined" != typeof window && void 0 !== window.WebSocket || "undefined" != typeof self && void 0 !== self.WebSocket,
                truncateQuery = t => t.split("?")[0],
                M = "undefined" != typeof WebSocket ? WebSocket : void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : "undefined" != typeof self && void 0 !== self.WebSocket ? self.WebSocket : r(91656);
            var U = class {
                    constructor(t) {
                        if (this.url = t, this.events = new c.EventEmitter, this.registering = !1, !(0, k.isWsUrl)(t)) throw Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                        this.url = t
                    }
                    get connected() {
                        return void 0 !== this.socket
                    }
                    get connecting() {
                        return this.registering
                    }
                    on(t, i) {
                        this.events.on(t, i)
                    }
                    once(t, i) {
                        this.events.once(t, i)
                    }
                    off(t, i) {
                        this.events.off(t, i)
                    }
                    removeListener(t, i) {
                        this.events.removeListener(t, i)
                    }
                    async open(t = this.url) {
                        await this.register(t)
                    }
                    async close() {
                        return new Promise((t, i) => {
                            if (void 0 === this.socket) {
                                i(Error("Connection already closed"));
                                return
                            }
                            this.socket.onclose = i => {
                                this.onClose(i), t()
                            }, this.socket.close()
                        })
                    }
                    async send(t, i) {
                        void 0 === this.socket && (this.socket = await this.register());
                        try {
                            this.socket.send((0, O.u)(t))
                        } catch (i) {
                            this.onError(t.id, i)
                        }
                    }
                    register(t = this.url) {
                        if (!(0, k.isWsUrl)(t)) throw Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                        if (this.registering) {
                            let t = this.events.getMaxListeners();
                            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((t, i) => {
                                this.events.once("register_error", t => {
                                    this.resetMaxListeners(), i(t)
                                }), this.events.once("open", () => {
                                    if (this.resetMaxListeners(), void 0 === this.socket) return i(Error("WebSocket connection is missing or invalid"));
                                    t(this.socket)
                                })
                            })
                        }
                        return this.url = t, this.registering = !0, new Promise((i, r) => {
                            let c = (0, k.isReactNative)() ? void 0 : {
                                    rejectUnauthorized: !(0, k.isLocalhostUrl)(t)
                                },
                                l = new M(t, [], c);
                            hasBuiltInWebSocket() ? l.onerror = t => {
                                r(this.emitError(t.error))
                            } : l.on("error", t => {
                                r(this.emitError(t))
                            }), l.onopen = () => {
                                this.onOpen(l), i(l)
                            }
                        })
                    }
                    onOpen(t) {
                        t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open")
                    }
                    onClose(t) {
                        this.socket = void 0, this.registering = !1, this.events.emit("close", t)
                    }
                    onPayload(t) {
                        if (void 0 === t.data) return;
                        let i = "string" == typeof t.data ? (0, O.D)(t.data) : t.data;
                        this.events.emit("payload", i)
                    }
                    onError(t, i) {
                        let r = this.parseError(i),
                            c = r.message || r.toString(),
                            l = (0, k.formatJsonRpcError)(t, c);
                        this.events.emit("payload", l)
                    }
                    parseError(t, i = this.url) {
                        return (0, k.parseConnectionError)(t, truncateQuery(i), "WS")
                    }
                    resetMaxListeners() {
                        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                    }
                    emitError(t) {
                        let i = this.parseError(Error((null == t ? void 0 : t.message) || `WebSocket connection failed for host: ${truncateQuery(this.url)}`));
                        return this.events.emit("register_error", i), i
                    }
                },
                J = r(99780),
                F = r.n(J),
                B = r(25566),
                Vi = function(t, i) {
                    if (t.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), c = 0; c < r.length; c++) r[c] = 255;
                    for (var l = 0; l < t.length; l++) {
                        var v = t.charAt(l),
                            _ = v.charCodeAt(0);
                        if (255 !== r[_]) throw TypeError(v + " is ambiguous");
                        r[_] = l
                    }
                    var w = t.length,
                        P = t.charAt(0),
                        C = Math.log(w) / Math.log(256),
                        O = Math.log(256) / Math.log(w);

                    function y(t) {
                        if ("string" != typeof t) throw TypeError("Expected String");
                        if (0 === t.length) return new Uint8Array;
                        var i = 0;
                        if (" " !== t[0]) {
                            for (var c = 0, l = 0; t[i] === P;) c++, i++;
                            for (var v = (t.length - i) * C + 1 >>> 0, _ = new Uint8Array(v); t[i];) {
                                var O = r[t.charCodeAt(i)];
                                if (255 === O) return;
                                for (var A = 0, q = v - 1;
                                    (0 !== O || A < l) && -1 !== q; q--, A++) O += w * _[q] >>> 0, _[q] = O % 256 >>> 0, O = O / 256 >>> 0;
                                if (0 !== O) throw Error("Non-zero carry");
                                l = A, i++
                            }
                            if (" " !== t[i]) {
                                for (var T = v - l; T !== v && 0 === _[T];) T++;
                                for (var $ = new Uint8Array(c + (v - T)), k = c; T !== v;) $[k++] = _[T++];
                                return $
                            }
                        }
                    }
                    return {
                        encode: function(i) {
                            if (i instanceof Uint8Array || (ArrayBuffer.isView(i) ? i = new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : Array.isArray(i) && (i = Uint8Array.from(i))), !(i instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === i.length) return "";
                            for (var r = 0, c = 0, l = 0, v = i.length; l !== v && 0 === i[l];) l++, r++;
                            for (var _ = (v - l) * O + 1 >>> 0, C = new Uint8Array(_); l !== v;) {
                                for (var A = i[l], q = 0, T = _ - 1;
                                    (0 !== A || q < c) && -1 !== T; T--, q++) A += 256 * C[T] >>> 0, C[T] = A % w >>> 0, A = A / w >>> 0;
                                if (0 !== A) throw Error("Non-zero carry");
                                c = q, l++
                            }
                            for (var $ = _ - c; $ !== _ && 0 === C[$];) $++;
                            for (var k = P.repeat(r); $ < _; ++$) k += t.charAt(C[$]);
                            return k
                        },
                        decodeUnsafe: y,
                        decode: function(t) {
                            var r = y(t);
                            if (r) return r;
                            throw Error(`Non-${i} character`)
                        }
                    }
                };
            let ze = t => {
                    if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                    if (t instanceof ArrayBuffer) return new Uint8Array(t);
                    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                qi = t => new TextEncoder().encode(t),
                ji = t => new TextDecoder().decode(t);
            let Yi = class Yi {
                constructor(t, i, r) {
                    this.name = t, this.prefix = i, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            };
            let Gi = class Gi {
                constructor(t, i, r) {
                    if (this.name = t, this.prefix = i, void 0 === i.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = i.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return Ne(this, t)
                }
            };
            let Hi = class Hi {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return Ne(this, t)
                }
                decode(t) {
                    let i = t[0],
                        r = this.decoders[i];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            };
            let Ne = (t, i) => new Hi({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...i.decoders || {
                    [i.prefix]: i
                }
            });
            let Ji = class Ji {
                constructor(t, i, r, c) {
                    this.name = t, this.prefix = i, this.baseEncode = r, this.baseDecode = c, this.encoder = new Yi(t, i, r), this.decoder = new Gi(t, i, c)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            };
            let W = ({
                    name: t,
                    prefix: i,
                    encode: r,
                    decode: c
                }) => new Ji(t, i, r, c),
                K = ({
                    prefix: t,
                    name: i,
                    alphabet: r
                }) => {
                    let {
                        encode: c,
                        decode: l
                    } = Vi(r, i);
                    return W({
                        prefix: t,
                        name: i,
                        encode: c,
                        decode: t => ze(l(t))
                    })
                },
                Wi = (t, i, r, c) => {
                    let l = {};
                    for (let t = 0; t < i.length; ++t) l[i[t]] = t;
                    let v = t.length;
                    for (;
                        "=" === t[v - 1];) --v;
                    let _ = new Uint8Array(v * r / 8 | 0),
                        w = 0,
                        P = 0,
                        C = 0;
                    for (let i = 0; i < v; ++i) {
                        let v = l[t[i]];
                        if (void 0 === v) throw SyntaxError(`Non-${c} character`);
                        P = P << r | v, (w += r) >= 8 && (w -= 8, _[C++] = 255 & P >> w)
                    }
                    if (w >= r || 255 & P << 8 - w) throw SyntaxError("Unexpected end of data");
                    return _
                },
                Xi = (t, i, r) => {
                    let c = "=" === i[i.length - 1],
                        l = (1 << r) - 1,
                        v = "",
                        _ = 0,
                        w = 0;
                    for (let c = 0; c < t.length; ++c)
                        for (w = w << 8 | t[c], _ += 8; _ > r;) _ -= r, v += i[l & w >> _];
                    if (_ && (v += i[l & w << r - _]), c)
                        for (; v.length * r & 7;) v += "=";
                    return v
                },
                index_es_g = ({
                    name: t,
                    prefix: i,
                    bitsPerChar: r,
                    alphabet: c
                }) => W({
                    prefix: i,
                    name: t,
                    encode: t => Xi(t, c, r),
                    decode: i => Wi(i, c, r, t)
                }),
                Q = W({
                    prefix: "\x00",
                    name: "identity",
                    encode: t => ji(t),
                    decode: t => qi(t)
                });
            var X = Object.freeze({
                __proto__: null,
                identity: Q
            });
            let et = index_es_g({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var es = Object.freeze({
                __proto__: null,
                base2: et
            });
            let eo = index_es_g({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var ec = Object.freeze({
                __proto__: null,
                base8: eo
            });
            let eh = K({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var el = Object.freeze({
                __proto__: null,
                base10: eh
            });
            let ep = index_es_g({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                ed = index_es_g({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var eg = Object.freeze({
                __proto__: null,
                base16: ep,
                base16upper: ed
            });
            let ef = index_es_g({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                ey = index_es_g({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                em = index_es_g({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                e_ = index_es_g({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                ew = index_es_g({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                eb = index_es_g({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                eI = index_es_g({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                eE = index_es_g({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                eP = index_es_g({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var ex = Object.freeze({
                __proto__: null,
                base32: ef,
                base32upper: ey,
                base32pad: em,
                base32padupper: e_,
                base32hex: ew,
                base32hexupper: eb,
                base32hexpad: eI,
                base32hexpadupper: eE,
                base32z: eP
            });
            let eR = K({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                eS = K({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var eC = Object.freeze({
                __proto__: null,
                base36: eR,
                base36upper: eS
            });
            let eO = K({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                eA = K({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var eN = Object.freeze({
                __proto__: null,
                base58btc: eO,
                base58flickr: eA
            });
            let eq = index_es_g({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                eD = index_es_g({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                eT = index_es_g({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ez = index_es_g({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var ej = Object.freeze({
                __proto__: null,
                base64: eq,
                base64pad: eD,
                base64url: eT,
                base64urlpad: ez
            });
            let eL = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                e$ = eL.reduce((t, i, r) => (t[r] = i, t), []),
                ek = eL.reduce((t, i, r) => (t[i.codePointAt(0)] = r, t), []),
                eM = W({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(t) {
                        return t.reduce((t, i) => t += e$[i], "")
                    },
                    decode: function(t) {
                        let i = [];
                        for (let r of t) {
                            let t = ek[r.codePointAt(0)];
                            if (void 0 === t) throw Error(`Non-base256emoji character: ${r}`);
                            i.push(t)
                        }
                        return new Uint8Array(i)
                    }
                });
            var eU = Object.freeze({
                __proto__: null,
                base256emoji: eM
            });

            function Fe(t, i, r) {
                i = i || [], r = r || 0;
                for (var c = r; t >= 2147483648;) i[r++] = 255 & t | 128, t /= 128;
                for (; - 128 & t;) i[r++] = 255 & t | 128, t >>>= 7;
                return i[r] = 0 | t, Fe.bytes = r - c + 1, i
            }

            function oe(t, i) {
                var r, c = 0,
                    i = i || 0,
                    l = 0,
                    v = i,
                    _ = t.length;
                do {
                    if (v >= _) throw oe.bytes = 0, RangeError("Could not decode varint");
                    r = t[v++], c += l < 28 ? (127 & r) << l : (127 & r) * Math.pow(2, l), l += 7
                } while (r >= 128);
                return oe.bytes = v - i, c
            }
            var eH = {
                encode: Fe,
                decode: oe,
                encodingLength: function(t) {
                    return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : t < 34359738368 ? 5 : t < 4398046511104 ? 6 : t < 562949953421312 ? 7 : t < 72057594037927940 ? 8 : t < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let ke = (t, i, r = 0) => (eH.encode(t, i, r), i),
                Ke = t => eH.encodingLength(t),
                he = (t, i) => {
                    let r = i.byteLength,
                        c = Ke(t),
                        l = c + Ke(r),
                        v = new Uint8Array(l + r);
                    return ke(t, v, 0), ke(r, v, c), v.set(i, l), new Zs(t, r, i, v)
                };
            let Zs = class Zs {
                constructor(t, i, r, c) {
                    this.code = t, this.size = i, this.digest = r, this.bytes = c
                }
            };
            let Be = ({
                name: t,
                code: i,
                encode: r
            }) => new er(t, i, r);
            let er = class er {
                constructor(t, i, r) {
                    this.name = t, this.code = i, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        let i = this.encode(t);
                        return i instanceof Uint8Array ? he(this.code, i) : i.then(t => he(this.code, t))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            };
            let Ve = t => async i => new Uint8Array(await crypto.subtle.digest(t, i)),
                eV = Be({
                    name: "sha2-256",
                    code: 18,
                    encode: Ve("SHA-256")
                }),
                eK = Be({
                    name: "sha2-512",
                    code: 19,
                    encode: Ve("SHA-512")
                });
            var eW = Object.freeze({
                    __proto__: null,
                    sha256: eV,
                    sha512: eK
                }),
                eZ = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: ze,
                        digest: t => he(0, ze(t))
                    }
                });
            new TextEncoder, new TextDecoder;
            let eG = { ...X,
                ...es,
                ...ec,
                ...el,
                ...eg,
                ...ex,
                ...eC,
                ...eN,
                ...ej,
                ...eU
            };

            function Ge(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }

            function He(t, i, r, c) {
                return {
                    name: t,
                    prefix: i,
                    encoder: {
                        name: t,
                        prefix: i,
                        encode: r
                    },
                    decoder: {
                        decode: c
                    }
                }
            }({ ...eW,
                ...eZ
            });
            let eJ = He("utf8", "u", t => "u" + new TextDecoder("utf8").decode(t), t => new TextEncoder().encode(t.substring(1))),
                eF = He("ascii", "a", t => {
                    let i = "a";
                    for (let r = 0; r < t.length; r++) i += String.fromCharCode(t[r]);
                    return i
                }, t => {
                    t = t.substring(1);
                    let i = function(t = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Ge(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
                    }(t.length);
                    for (let r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                    return i
                }),
                eB = {
                    utf8: eJ,
                    "utf-8": eJ,
                    hex: eG.base16,
                    latin1: eF,
                    ascii: eF,
                    binary: eF,
                    ...eG
                },
                eY = "core",
                eQ = `wc@2:${eY}:`,
                eX = {
                    logger: "error"
                },
                e0 = {
                    database: ":memory:"
                },
                e1 = "client_ed25519_seed",
                e2 = T.ONE_DAY,
                e3 = T.SIX_HOURS,
                e7 = "wss://relay.walletconnect.com",
                e5 = "wss://relay.walletconnect.org",
                e6 = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                e8 = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                e4 = T.ONE_SECOND,
                e9 = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                te = 1e3 * T.FIVE_SECONDS,
                tn = {
                    wc_pairingDelete: {
                        req: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: T.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: T.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                ts = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                ta = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                to = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                tc = "verify-api",
                th = "https://verify.walletconnect.com",
                tl = "https://verify.walletconnect.org";
            let Rt = class Rt {
                constructor(t, i) {
                    this.core = t, this.logger = i, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = eQ, this.init = async () => {
                        if (!this.initialized) {
                            let t = await this.getKeyChain();
                            "u" > typeof t && (this.keychain = t), this.initialized = !0
                        }
                    }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, i) => {
                        this.isInitialized(), this.keychain.set(t, i), await this.persist()
                    }, this.get = t => {
                        this.isInitialized();
                        let i = this.keychain.get(t);
                        if (typeof i > "u") {
                            let {
                                message: i
                            } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                            throw Error(i)
                        }
                        return i
                    }, this.del = async t => {
                        this.isInitialized(), this.keychain.delete(t), await this.persist()
                    }, this.core = t, this.logger = (0, P.generateChildLogger)(i, this.name)
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(t) {
                    await this.core.storage.setItem(this.storageKey, (0, v.KC)(t))
                }
                async getKeyChain() {
                    let t = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof t ? (0, v.IP)(t) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
            };
            let _t = class _t {
                constructor(t, i, r) {
                    this.core = t, this.logger = i, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => {
                        this.isInitialized();
                        let t = await this.getClientSeed(),
                            i = A.generateKeyPair(t);
                        return A.encodeIss(i.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let t = (0, v.Au)();
                        return this.setPrivateKey(t.publicKey, t.privateKey)
                    }, this.signJWT = async t => {
                        this.isInitialized();
                        let i = await this.getClientSeed(),
                            r = A.generateKeyPair(i),
                            c = (0, v.jd)();
                        return await A.signJWT(c, t, e2, r)
                    }, this.generateSharedKey = (t, i, r) => {
                        this.isInitialized();
                        let c = this.getPrivateKey(t),
                            l = (0, v.m$)(c, i);
                        return this.setSymKey(l, r)
                    }, this.setSymKey = async (t, i) => {
                        this.isInitialized();
                        let r = i || (0, v.Ym)(t);
                        return await this.keychain.set(r, t), r
                    }, this.deleteKeyPair = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.deleteSymKey = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.encode = async (t, i, r) => {
                        this.isInitialized();
                        let c = (0, v.EN)(r),
                            l = (0, O.u)(i);
                        if ((0, v.Q8)(c)) {
                            let i = c.senderPublicKey,
                                r = c.receiverPublicKey;
                            t = await this.generateSharedKey(i, r)
                        }
                        let _ = this.getSymKey(t),
                            {
                                type: w,
                                senderPublicKey: P
                            } = c;
                        return (0, v.HI)({
                            type: w,
                            symKey: _,
                            message: l,
                            senderPublicKey: P
                        })
                    }, this.decode = async (t, i, r) => {
                        this.isInitialized();
                        let c = (0, v.Ll)(i, r);
                        if ((0, v.Q8)(c)) {
                            let i = c.receiverPublicKey,
                                r = c.senderPublicKey;
                            t = await this.generateSharedKey(i, r)
                        }
                        try {
                            let r = this.getSymKey(t),
                                c = (0, v.pe)({
                                    symKey: r,
                                    encoded: i
                                });
                            return (0, O.D)(c)
                        } catch (i) {
                            this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(i)
                        }
                    }, this.getPayloadType = t => {
                        let i = (0, v.vB)(t);
                        return (0, v.WG)(i.type)
                    }, this.getPayloadSenderPublicKey = t => {
                        let i = (0, v.vB)(t);
                        return i.senderPublicKey ? (0, q.BB)(i.senderPublicKey, v.AW) : void 0
                    }, this.core = t, this.logger = (0, P.generateChildLogger)(i, this.name), this.keychain = r || new Rt(this.core, this.logger)
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                async setPrivateKey(t, i) {
                    return await this.keychain.set(t, i), t
                }
                getPrivateKey(t) {
                    return this.keychain.get(t)
                }
                async getClientSeed() {
                    let t = "";
                    try {
                        t = this.keychain.get(e1)
                    } catch {
                        t = (0, v.jd)(), await this.keychain.set(e1, t)
                    }
                    return function(t, i = "utf8") {
                        let r = eB[i];
                        if (!r) throw Error(`Unsupported encoding "${i}"`);
                        return ("utf8" === i || "utf-8" === i) && null != globalThis.Buffer && null != globalThis.Buffer.from ? Ge(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`)
                    }(t, "base16")
                }
                getSymKey(t) {
                    return this.keychain.get(t)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
            };
            let St = class St extends a {
                constructor(t, i) {
                    super(t, i), this.logger = t, this.core = i, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = eQ, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let t = await this.getRelayerMessages();
                                "u" > typeof t && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (t) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (t, i) => {
                        this.isInitialized();
                        let r = (0, v.rj)(i),
                            c = this.messages.get(t);
                        return typeof c > "u" && (c = {}), "u" > typeof c[r] || (c[r] = i, this.messages.set(t, c), await this.persist()), r
                    }, this.get = t => {
                        this.isInitialized();
                        let i = this.messages.get(t);
                        return typeof i > "u" && (i = {}), i
                    }, this.has = (t, i) => {
                        this.isInitialized();
                        let r = this.get(t),
                            c = (0, v.rj)(i);
                        return "u" > typeof r[c]
                    }, this.del = async t => {
                        this.isInitialized(), this.messages.delete(t), await this.persist()
                    }, this.logger = (0, P.generateChildLogger)(t, this.name), this.core = i
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(t) {
                    await this.core.storage.setItem(this.storageKey, (0, v.KC)(t))
                }
                async getRelayerMessages() {
                    let t = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof t ? (0, v.IP)(t) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
            };
            let Dr = class Dr extends u {
                constructor(t, i) {
                    super(t, i), this.relayer = t, this.logger = i, this.events = new c.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, T.toMiliseconds)(T.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (t, i, r) => {
                        var c;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: t,
                                message: i,
                                opts: r
                            }
                        });
                        try {
                            let l = r ? .ttl || e3,
                                _ = (0, v._H)(r),
                                w = r ? .prompt || !1,
                                P = r ? .tag || 0,
                                C = r ? .id || (0, k.getBigIntRpcId)().toString(),
                                O = {
                                    topic: t,
                                    message: i,
                                    opts: {
                                        ttl: l,
                                        relay: _,
                                        prompt: w,
                                        tag: P,
                                        id: C
                                    }
                                },
                                A = setTimeout(() => this.queue.set(C, O), this.publishTimeout);
                            try {
                                await await (0, v.hF)(this.rpcPublish(t, i, l, _, w, P, C), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(C), this.relayer.events.emit(e6.publish, O)
                            } catch (t) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (c = r ? .internal) && c.throwOnFailedPublish) throw this.removeRequestFromQueue(C), t;
                                return
                            } finally {
                                clearTimeout(A)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: t,
                                    message: i,
                                    opts: r
                                }
                            })
                        } catch (t) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(t), t
                        }
                    }, this.on = (t, i) => {
                        this.events.on(t, i)
                    }, this.once = (t, i) => {
                        this.events.once(t, i)
                    }, this.off = (t, i) => {
                        this.events.off(t, i)
                    }, this.removeListener = (t, i) => {
                        this.events.removeListener(t, i)
                    }, this.relayer = t, this.logger = (0, P.generateChildLogger)(i, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                rpcPublish(t, i, r, c, l, _, w) {
                    var P, C, O, A;
                    let q = {
                        method: (0, v.cO)(c.protocol).publish,
                        params: {
                            topic: t,
                            message: i,
                            ttl: r,
                            prompt: l,
                            tag: _
                        },
                        id: w
                    };
                    return (0, v.o8)(null == (P = q.params) ? void 0 : P.prompt) && (null == (C = q.params) || delete C.prompt), (0, v.o8)(null == (O = q.params) ? void 0 : O.tag) && (null == (A = q.params) || delete A.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: q
                    }), this.relayer.request(q)
                }
                removeRequestFromQueue(t) {
                    this.queue.delete(t)
                }
                checkQueue() {
                    this.queue.forEach(async t => {
                        let {
                            topic: i,
                            message: r,
                            opts: c
                        } = t;
                        await this.publish(i, r, c)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(e6.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(e6.message_ack, t => {
                        this.removeRequestFromQueue(t.id.toString())
                    })
                }
            };
            let yr = class yr {
                constructor() {
                    this.map = new Map, this.set = (t, i) => {
                        let r = this.get(t);
                        this.exists(t, i) || this.map.set(t, [...r, i])
                    }, this.get = t => this.map.get(t) || [], this.exists = (t, i) => this.get(t).includes(i), this.delete = (t, i) => {
                        if (typeof i > "u") {
                            this.map.delete(t);
                            return
                        }
                        if (!this.map.has(t)) return;
                        let r = this.get(t);
                        if (!this.exists(t, i)) return;
                        let c = r.filter(t => t !== i);
                        if (!c.length) {
                            this.map.delete(t);
                            return
                        }
                        this.map.set(t, c)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            };
            var tp = Object.defineProperty,
                td = Object.defineProperties,
                tg = Object.getOwnPropertyDescriptors,
                tf = Object.getOwnPropertySymbols,
                ty = Object.prototype.hasOwnProperty,
                tm = Object.prototype.propertyIsEnumerable,
                Tt = (t, i, r) => i in t ? tp(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                V = (t, i) => {
                    for (var r in i || (i = {})) ty.call(i, r) && Tt(t, r, i[r]);
                    if (tf)
                        for (var r of tf(i)) tm.call(i, r) && Tt(t, r, i[r]);
                    return t
                },
                De = (t, i) => td(t, tg(i));
            let xt = class xt extends d {
                constructor(t, i) {
                    super(t, i), this.relayer = t, this.logger = i, this.subscriptions = new Map, this.topicMap = new yr, this.events = new c.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = eQ, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (t, i) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: t,
                                opts: i
                            }
                        });
                        try {
                            let r = (0, v._H)(i),
                                c = {
                                    topic: t,
                                    relay: r
                                };
                            this.pending.set(t, c);
                            let l = await this.rpcSubscribe(t, r);
                            return this.onSubscribe(l, c), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: t,
                                    opts: i
                                }
                            }), l
                        } catch (t) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(t), t
                        }
                    }, this.unsubscribe = async (t, i) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof i ? .id ? await this.unsubscribeById(t, i.id, i) : await this.unsubscribeByTopic(t, i)
                    }, this.isSubscribed = async t => !!this.topics.includes(t) || await new Promise((i, r) => {
                        let c = new T.Watch;
                        c.start(this.pendingSubscriptionWatchLabel);
                        let l = setInterval(() => {
                            !this.pending.has(t) && this.topics.includes(t) && (clearInterval(l), c.stop(this.pendingSubscriptionWatchLabel), i(!0)), c.elapsed(this.pendingSubscriptionWatchLabel) >= te && (clearInterval(l), c.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (t, i) => {
                        this.events.on(t, i)
                    }, this.once = (t, i) => {
                        this.events.once(t, i)
                    }, this.off = (t, i) => {
                        this.events.off(t, i)
                    }, this.removeListener = (t, i) => {
                        this.events.removeListener(t, i)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = t, this.logger = (0, P.generateChildLogger)(i, this.name), this.clientId = ""
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(t, i) {
                    let r = !1;
                    try {
                        r = this.getSubscription(t).topic === i
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(t, i) {
                    let r = this.topicMap.get(t);
                    await Promise.all(r.map(async r => await this.unsubscribeById(t, r, i)))
                }
                async unsubscribeById(t, i, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: t,
                            id: i,
                            opts: r
                        }
                    });
                    try {
                        let c = (0, v._H)(r);
                        await this.rpcUnsubscribe(t, i, c);
                        let l = (0, v.D6)("USER_DISCONNECTED", `${this.name}, ${t}`);
                        await this.onUnsubscribe(t, i, l), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: t,
                                id: i,
                                opts: r
                            }
                        })
                    } catch (t) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(t), t
                    }
                }
                async rpcSubscribe(t, i) {
                    let r = {
                        method: (0, v.cO)(i.protocol).subscribe,
                        params: {
                            topic: t
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, v.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(e6.connection_stalled)
                    }
                    return (0, v.rj)(t + this.clientId)
                }
                async rpcBatchSubscribe(t) {
                    if (!t.length) return;
                    let i = t[0].relay,
                        r = {
                            method: (0, v.cO)(i.protocol).batchSubscribe,
                            params: {
                                topics: t.map(t => t.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, v.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(e6.connection_stalled)
                    }
                }
                rpcUnsubscribe(t, i, r) {
                    let c = {
                        method: (0, v.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: t,
                            id: i
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: c
                    }), this.relayer.request(c)
                }
                onSubscribe(t, i) {
                    this.setSubscription(t, De(V({}, i), {
                        id: t
                    })), this.pending.delete(i.topic)
                }
                onBatchSubscribe(t) {
                    t.length && t.forEach(t => {
                        this.setSubscription(t.id, V({}, t)), this.pending.delete(t.topic)
                    })
                }
                async onUnsubscribe(t, i, r) {
                    this.events.removeAllListeners(i), this.hasSubscription(i, t) && this.deleteSubscription(i, r), await this.relayer.messages.del(t)
                }
                async setRelayerSubscriptions(t) {
                    await this.relayer.core.storage.setItem(this.storageKey, t)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(t, i) {
                    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: t,
                        subscription: i
                    }), this.addSubscription(t, i))
                }
                addSubscription(t, i) {
                    this.subscriptions.set(t, V({}, i)), this.topicMap.set(i.topic, t), this.events.emit(e9.created, i)
                }
                getSubscription(t) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: t
                    });
                    let i = this.subscriptions.get(t);
                    if (!i) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw Error(i)
                    }
                    return i
                }
                deleteSubscription(t, i) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: t,
                        reason: i
                    });
                    let r = this.getSubscription(t);
                    this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(e9.deleted, De(V({}, r), {
                        reason: i
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(e9.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let i = 0; i < t; i++) {
                            let t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(t)
                        }
                    }
                    this.events.emit(e9.resubscribed)
                }
                async restore() {
                    try {
                        let t = await this.getRelayerSubscriptions();
                        if (typeof t > "u" || !t.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: t
                            } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
                    }
                }
                async batchSubscribe(t) {
                    if (!t.length) return;
                    let i = await this.rpcBatchSubscribe(t);
                    (0, v.qt)(i) && this.onBatchSubscribe(i.map((i, r) => De(V({}, t[r]), {
                        id: i
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let t = [];
                    this.pending.forEach(i => {
                        t.push(i)
                    }), await this.batchSubscribe(t)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(e6.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(e6.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(e9.created, async t => {
                        let i = e9.created;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            data: t
                        }), await this.persist()
                    }), this.events.on(e9.deleted, async t => {
                        let i = e9.deleted;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            data: t
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(t => {
                        let i = setInterval(() => {
                            this.restartInProgress || (clearInterval(i), t())
                        }, this.pollingInterval)
                    })
                }
            };
            var t_ = Object.defineProperty,
                tw = Object.getOwnPropertySymbols,
                tb = Object.prototype.hasOwnProperty,
                tI = Object.prototype.propertyIsEnumerable,
                At = (t, i, r) => i in t ? t_(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                Rr = (t, i) => {
                    for (var r in i || (i = {})) tb.call(i, r) && At(t, r, i[r]);
                    if (tw)
                        for (var r of tw(i)) tI.call(i, r) && At(t, r, i[r]);
                    return t
                };
            let zt = class zt extends g {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.events = new c.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async t => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(t)
                        } catch (t) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(t), t
                        }
                    }, this.onPayloadHandler = t => {
                        this.onProviderPayload(t)
                    }, this.onConnectHandler = () => {
                        this.events.emit(e6.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = t => {
                        this.logger.error(t), this.events.emit(e6.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(e8.payload, this.onPayloadHandler), this.provider.on(e8.connect, this.onConnectHandler), this.provider.on(e8.disconnect, this.onDisconnectHandler), this.provider.on(e8.error, this.onProviderErrorHandler)
                    }, this.core = t.core, this.logger = "u" > typeof t.logger && "string" != typeof t.logger ? (0, P.generateChildLogger)(t.logger, this.name) : (0, P.pino)((0, P.getDefaultLoggerOptions)({
                        level: t.logger || "error"
                    })), this.messages = new St(this.logger, t.core), this.subscriber = new xt(this, this.logger), this.publisher = new Dr(this, this.logger), this.relayUrl = t ? .relayUrl || e7, this.projectId = t.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${e5}...`), await this.restartTransport(e5)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(t, i, r) {
                    this.isInitialized(), await this.publisher.publish(t, i, r), await this.recordMessageEvent({
                        topic: t,
                        message: i,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(t, i) {
                    var r;
                    let c;
                    this.isInitialized();
                    let l = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
                    if (l) return l;
                    let a = i => {
                        i.topic === t && (this.subscriber.off(e9.created, a), c())
                    };
                    return await Promise.all([new Promise(t => {
                        c = t, this.subscriber.on(e9.created, a)
                    }), new Promise(async r => {
                        l = await this.subscriber.subscribe(t, i), r()
                    })]), l
                }
                async unsubscribe(t, i) {
                    this.isInitialized(), await this.subscriber.unsubscribe(t, i)
                }
                on(t, i) {
                    this.events.on(t, i)
                }
                once(t, i) {
                    this.events.once(t, i)
                }
                off(t, i) {
                    this.events.off(t, i)
                }
                removeListener(t, i) {
                    this.events.removeListener(t, i)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, v.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(t) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(t => {
                                if (!this.initialized) return t();
                                this.subscriber.once(e9.resubscribed, () => {
                                    t()
                                })
                            }), new Promise(async (t, i) => {
                                try {
                                    await (0, v.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (t) {
                                    i(t);
                                    return
                                }
                                t()
                            })])
                        } catch (t) {
                            if (this.logger.error(t), !this.isConnectionStalled(t.message)) throw t;
                            this.provider.events.emit(e8.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(t) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, v.Gg)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(t) {
                    return this.staleConnectionErrors.some(i => t.includes(i))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let t = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new $.JsonRpcProvider(new U((0, v.$0)({
                        sdkVersion: "2.10.2",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: t,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(t) {
                    let {
                        topic: i,
                        message: r
                    } = t;
                    await this.messages.set(i, r)
                }
                async shouldIgnoreMessageEvent(t) {
                    let {
                        topic: i,
                        message: r
                    } = t;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(i)) return this.logger.debug(`Ignoring message for non-subscribed topic ${i}`), !0;
                    let c = this.messages.has(i, r);
                    return c && this.logger.debug(`Ignoring duplicate message: ${r}`), c
                }
                async onProviderPayload(t) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: t
                        }), (0, k.isJsonRpcRequest)(t)) {
                        if (!t.method.endsWith("_subscription")) return;
                        let i = t.params,
                            {
                                topic: r,
                                message: c,
                                publishedAt: l
                            } = i.data,
                            v = {
                                topic: r,
                                message: c,
                                publishedAt: l
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Rr({
                            type: "event",
                            event: i.id
                        }, v)), this.events.emit(i.id, v), await this.acknowledgePayload(t), await this.onMessageEvent(v)
                    } else(0, k.isJsonRpcResponse)(t) && this.events.emit(e6.message_ack, t)
                }
                async onMessageEvent(t) {
                    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(e6.message, t), await this.recordMessageEvent(t))
                }
                async acknowledgePayload(t) {
                    let i = (0, k.formatJsonRpcResult)(t.id, !0);
                    await this.provider.connection.send(i)
                }
                unregisterProviderListeners() {
                    this.provider.off(e8.payload, this.onPayloadHandler), this.provider.off(e8.connect, this.onConnectHandler), this.provider.off(e8.disconnect, this.onDisconnectHandler), this.provider.off(e8.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(e6.connection_stalled, () => {
                        this.restartTransport().catch(t => this.logger.error(t))
                    });
                    let t = await (0, v.Gg)();
                    (0, v.uw)(async i => {
                        this.initialized && t !== i && (t = i, i ? await this.restartTransport().catch(t => this.logger.error(t)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(t => this.logger.error(t))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(e6.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(t => this.logger.error(t))
                    }, (0, T.toMiliseconds)(e4)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(t => {
                            let i = setInterval(() => {
                                this.connected && (clearInterval(i), t())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            };
            var tE = Object.defineProperty,
                tP = Object.getOwnPropertySymbols,
                tx = Object.prototype.hasOwnProperty,
                tR = Object.prototype.propertyIsEnumerable,
                Lt = (t, i, r) => i in t ? tE(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                Ut = (t, i) => {
                    for (var r in i || (i = {})) tx.call(i, r) && Lt(t, r, i[r]);
                    if (tP)
                        for (var r of tP(i)) tR.call(i, r) && Lt(t, r, i[r]);
                    return t
                };
            let Ft = class Ft extends p {
                constructor(t, i, r, c = eQ, l) {
                    super(t, i, r, c), this.core = t, this.logger = i, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = eQ, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(t => {
                            this.getKey && null !== t && !(0, v.o8)(t) ? this.map.set(this.getKey(t), t) : (0, v.xW)(t) ? this.map.set(t.id, t) : (0, v.h1)(t) && this.map.set(t.topic, t)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (t, i) => {
                        this.isInitialized(), this.map.has(t) ? await this.update(t, i) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: t,
                            value: i
                        }), this.map.set(t, i), await this.persist())
                    }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: t
                    }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter(i => Object.keys(t).every(r => F()(i[r], t[r]))) : this.values), this.update = async (t, i) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: t,
                            update: i
                        });
                        let r = Ut(Ut({}, this.getData(t)), i);
                        this.map.set(t, r), await this.persist()
                    }, this.delete = async (t, i) => {
                        this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: t,
                            reason: i
                        }), this.map.delete(t), await this.persist())
                    }, this.logger = (0, P.generateChildLogger)(i, this.name), this.storagePrefix = c, this.getKey = l
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(t) {
                    let i = this.map.get(t);
                    if (!i) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(i), Error(i)
                    }
                    return i
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let t = await this.getDataStore();
                        if (typeof t > "u" || !t.length) return;
                        if (this.map.size) {
                            let {
                                message: t
                            } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
            };
            let $t = class $t {
                constructor(t, i) {
                    this.core = t, this.logger = i, this.name = "pairing", this.version = "0.3", this.events = new(l()), this.initialized = !1, this.storagePrefix = eQ, this.ignoredPayloadTypes = [v.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: t
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                    }, this.create = async () => {
                        this.isInitialized();
                        let t = (0, v.jd)(),
                            i = await this.core.crypto.setSymKey(t),
                            r = (0, v.gn)(T.FIVE_MINUTES),
                            c = {
                                protocol: "irn"
                            },
                            l = (0, v.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: i,
                                symKey: t,
                                relay: c
                            });
                        return await this.pairings.set(i, {
                            topic: i,
                            expiry: r,
                            relay: c,
                            active: !1
                        }), await this.core.relayer.subscribe(i), this.core.expirer.set(i, r), {
                            topic: i,
                            uri: l
                        }
                    }, this.pair = async t => {
                        this.isInitialized(), this.isValidPair(t);
                        let {
                            topic: i,
                            symKey: r,
                            relay: c
                        } = (0, v.he)(t.uri);
                        if (this.pairings.keys.includes(i) && this.pairings.get(i).active) throw Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
                        this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(r, i), await this.core.relayer.subscribe(i, {
                            relay: c
                        }));
                        let l = (0, v.gn)(T.FIVE_MINUTES),
                            _ = {
                                topic: i,
                                relay: c,
                                expiry: l,
                                active: !1
                            };
                        return await this.pairings.set(i, _), this.core.expirer.set(i, l), t.activatePairing && await this.activate({
                            topic: i
                        }), this.events.emit(ts.create, _), _
                    }, this.activate = async ({
                        topic: t
                    }) => {
                        this.isInitialized();
                        let i = (0, v.gn)(T.THIRTY_DAYS);
                        await this.pairings.update(t, {
                            active: !0,
                            expiry: i
                        }), this.core.expirer.set(t, i)
                    }, this.ping = async t => {
                        this.isInitialized(), await this.isValidPing(t);
                        let {
                            topic: i
                        } = t;
                        if (this.pairings.keys.includes(i)) {
                            let t = await this.sendRequest(i, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: c,
                                    reject: l
                                } = (0, v.H1)();
                            this.events.once((0, v.E0)("pairing_ping", t), ({
                                error: t
                            }) => {
                                t ? l(t) : c()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: t,
                        expiry: i
                    }) => {
                        this.isInitialized(), await this.pairings.update(t, {
                            expiry: i
                        })
                    }, this.updateMetadata = async ({
                        topic: t,
                        metadata: i
                    }) => {
                        this.isInitialized(), await this.pairings.update(t, {
                            peerMetadata: i
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
                        this.isInitialized(), await this.isValidDisconnect(t);
                        let {
                            topic: i
                        } = t;
                        this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", (0, v.D6)("USER_DISCONNECTED")), await this.deletePairing(i))
                    }, this.sendRequest = async (t, i, r) => {
                        let c = (0, k.formatJsonRpcRequest)(i, r),
                            l = await this.core.crypto.encode(t, c),
                            v = tn[i].req;
                        return this.core.history.set(t, c), this.core.relayer.publish(t, l, v), c.id
                    }, this.sendResult = async (t, i, r) => {
                        let c = (0, k.formatJsonRpcResult)(t, r),
                            l = await this.core.crypto.encode(i, c),
                            v = await this.core.history.get(i, t),
                            _ = tn[v.request.method].res;
                        await this.core.relayer.publish(i, l, _), await this.core.history.resolve(c)
                    }, this.sendError = async (t, i, r) => {
                        let c = (0, k.formatJsonRpcError)(t, r),
                            l = await this.core.crypto.encode(i, c),
                            v = await this.core.history.get(i, t),
                            _ = tn[v.request.method] ? tn[v.request.method].res : tn.unregistered_method.res;
                        await this.core.relayer.publish(i, l, _), await this.core.history.resolve(c)
                    }, this.deletePairing = async (t, i) => {
                        await this.core.relayer.unsubscribe(t), await Promise.all([this.pairings.delete(t, (0, v.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), i ? Promise.resolve() : this.core.expirer.del(t)])
                    }, this.cleanup = async () => {
                        let t = this.pairings.getAll().filter(t => (0, v.Bw)(t.expiry));
                        await Promise.all(t.map(t => this.deletePairing(t.topic)))
                    }, this.onRelayEventRequest = t => {
                        let {
                            topic: i,
                            payload: r
                        } = t;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(i, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(i, r);
                            default:
                                return this.onUnknownRpcMethodRequest(i, r)
                        }
                    }, this.onRelayEventResponse = async t => {
                        let {
                            topic: i,
                            payload: r
                        } = t, c = (await this.core.history.get(i, r.id)).request.method;
                        return "wc_pairingPing" === c ? this.onPairingPingResponse(i, r) : this.onUnknownRpcMethodResponse(c)
                    }, this.onPairingPingRequest = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult(r, t, !0), this.events.emit(ts.ping, {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onPairingPingResponse = (t, i) => {
                        let {
                            id: r
                        } = i;
                        setTimeout(() => {
                            (0, k.isJsonRpcResult)(i) ? this.events.emit((0, v.E0)("pairing_ping", r), {}): (0, k.isJsonRpcError)(i) && this.events.emit((0, v.E0)("pairing_ping", r), {
                                error: i.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        try {
                            this.isValidDisconnect({
                                topic: t
                            }), await this.deletePairing(t), this.events.emit(ts.delete, {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onUnknownRpcMethodRequest = async (t, i) => {
                        let {
                            id: r,
                            method: c
                        } = i;
                        try {
                            if (this.registeredMethods.includes(c)) return;
                            let i = (0, v.D6)("WC_METHOD_UNSUPPORTED", c);
                            await this.sendError(r, t, i), this.logger.error(i)
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onUnknownRpcMethodResponse = t => {
                        this.registeredMethods.includes(t) || this.logger.error((0, v.D6)("WC_METHOD_UNSUPPORTED", t))
                    }, this.isValidPair = t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `pair() params: ${t}`);
                            throw Error(i)
                        }
                        if (!(0, v.jv)(t.uri)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
                            throw Error(i)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i
                        } = t;
                        await this.isValidPairingTopic(i)
                    }, this.isValidDisconnect = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i
                        } = t;
                        await this.isValidPairingTopic(i)
                    }, this.isValidPairingTopic = async t => {
                        if (!(0, v.M_)(t, !1)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                            throw Error(i)
                        }
                        if (!this.pairings.keys.includes(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                            throw Error(i)
                        }
                        if ((0, v.Bw)(this.pairings.get(t).expiry)) {
                            await this.deletePairing(t);
                            let {
                                message: i
                            } = (0, v.Z7)("EXPIRED", `pairing topic: ${t}`);
                            throw Error(i)
                        }
                    }, this.core = t, this.logger = (0, P.generateChildLogger)(i, this.name), this.pairings = new Ft(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(e6.message, async t => {
                        let {
                            topic: i,
                            message: r
                        } = t;
                        if (!this.pairings.keys.includes(i) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let c = await this.core.crypto.decode(i, r);
                        try {
                            (0, k.isJsonRpcRequest)(c) ? (this.core.history.set(i, c), this.onRelayEventRequest({
                                topic: i,
                                payload: c
                            })) : (0, k.isJsonRpcResponse)(c) && (await this.core.history.resolve(c), await this.onRelayEventResponse({
                                topic: i,
                                payload: c
                            }), this.core.history.delete(i, c.id))
                        } catch (t) {
                            this.logger.error(t)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(to.expired, async t => {
                        let {
                            topic: i
                        } = (0, v.iP)(t.target);
                        i && this.pairings.keys.includes(i) && (await this.deletePairing(i, !0), this.events.emit(ts.expire, {
                            topic: i
                        }))
                    })
                }
            };
            let Mt = class Mt extends h {
                constructor(t, i) {
                    super(t, i), this.core = t, this.logger = i, this.records = new Map, this.events = new c.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = eQ, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(t => this.records.set(t.id, t)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (t, i, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: t,
                                request: i,
                                chainId: r
                            }), this.records.has(i.id)) return;
                        let c = {
                            id: i.id,
                            topic: t,
                            request: {
                                method: i.method,
                                params: i.params || null
                            },
                            chainId: r,
                            expiry: (0, v.gn)(T.THIRTY_DAYS)
                        };
                        this.records.set(c.id, c), this.events.emit(ta.created, c)
                    }, this.resolve = async t => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: t
                            }), !this.records.has(t.id)) return;
                        let i = await this.getRecord(t.id);
                        typeof i.response > "u" && (i.response = (0, k.isJsonRpcError)(t) ? {
                            error: t.error
                        } : {
                            result: t.result
                        }, this.records.set(i.id, i), this.events.emit(ta.updated, i))
                    }, this.get = async (t, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: t,
                        id: i
                    }), await this.getRecord(i)), this.delete = (t, i) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: i
                        }), this.values.forEach(r => {
                            r.topic !== t || "u" > typeof i && r.id !== i || (this.records.delete(r.id), this.events.emit(ta.deleted, r))
                        })
                    }, this.exists = async (t, i) => (this.isInitialized(), !!this.records.has(i) && (await this.getRecord(i)).topic === t), this.on = (t, i) => {
                        this.events.on(t, i)
                    }, this.once = (t, i) => {
                        this.events.once(t, i)
                    }, this.off = (t, i) => {
                        this.events.off(t, i)
                    }, this.removeListener = (t, i) => {
                        this.events.removeListener(t, i)
                    }, this.logger = (0, P.generateChildLogger)(i, this.name)
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let t = [];
                    return this.values.forEach(i => {
                        if ("u" > typeof i.response) return;
                        let r = {
                            topic: i.topic,
                            request: (0, k.formatJsonRpcRequest)(i.request.method, i.request.params, i.id),
                            chainId: i.chainId
                        };
                        return t.push(r)
                    }), t
                }
                async setJsonRpcRecords(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(t) {
                    this.isInitialized();
                    let i = this.records.get(t);
                    if (!i) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw Error(i)
                    }
                    return i
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(ta.sync)
                }
                async restore() {
                    try {
                        let t = await this.getJsonRpcRecords();
                        if (typeof t > "u" || !t.length) return;
                        if (this.records.size) {
                            let {
                                message: t
                            } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                    }
                }
                registerEventListeners() {
                    this.events.on(ta.created, t => {
                        let i = ta.created;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            record: t
                        }), this.persist()
                    }), this.events.on(ta.updated, t => {
                        let i = ta.updated;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            record: t
                        }), this.persist()
                    }), this.events.on(ta.deleted, t => {
                        let i = ta.deleted;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            record: t
                        }), this.persist()
                    }), this.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(t => {
                            (0, T.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
                        })
                    } catch (t) {
                        this.logger.warn(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
            };
            let kt = class kt extends E {
                constructor(t, i) {
                    super(t, i), this.core = t, this.logger = i, this.expirations = new Map, this.events = new c.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = eQ, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(t => this.expirations.set(t.target, t)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = t => {
                        try {
                            let i = this.formatTarget(t);
                            return "u" > typeof this.getExpiration(i)
                        } catch {
                            return !1
                        }
                    }, this.set = (t, i) => {
                        this.isInitialized();
                        let r = this.formatTarget(t),
                            c = {
                                target: r,
                                expiry: i
                            };
                        this.expirations.set(r, c), this.checkExpiry(r, c), this.events.emit(to.created, {
                            target: r,
                            expiration: c
                        })
                    }, this.get = t => {
                        this.isInitialized();
                        let i = this.formatTarget(t);
                        return this.getExpiration(i)
                    }, this.del = t => {
                        if (this.isInitialized(), this.has(t)) {
                            let i = this.formatTarget(t),
                                r = this.getExpiration(i);
                            this.expirations.delete(i), this.events.emit(to.deleted, {
                                target: i,
                                expiration: r
                            })
                        }
                    }, this.on = (t, i) => {
                        this.events.on(t, i)
                    }, this.once = (t, i) => {
                        this.events.once(t, i)
                    }, this.off = (t, i) => {
                        this.events.off(t, i)
                    }, this.removeListener = (t, i) => {
                        this.events.removeListener(t, i)
                    }, this.logger = (0, P.generateChildLogger)(i, this.name)
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(t) {
                    if ("string" == typeof t) return (0, v.Z4)(t);
                    if ("number" == typeof t) return (0, v.Gq)(t);
                    let {
                        message: i
                    } = (0, v.Z7)("UNKNOWN_TYPE", `Target type: ${typeof t}`);
                    throw Error(i)
                }
                async setExpirations(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(to.sync)
                }
                async restore() {
                    try {
                        let t = await this.getExpirations();
                        if (typeof t > "u" || !t.length) return;
                        if (this.expirations.size) {
                            let {
                                message: t
                            } = (0, v.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
                    }
                }
                getExpiration(t) {
                    let i = this.expirations.get(t);
                    if (!i) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(i), Error(i)
                    }
                    return i
                }
                checkExpiry(t, i) {
                    let {
                        expiry: r
                    } = i;
                    (0, T.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, i)
                }
                expire(t, i) {
                    this.expirations.delete(t), this.events.emit(to.expired, {
                        target: t,
                        expiration: i
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((t, i) => this.checkExpiry(i, t))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(to.created, t => {
                        let i = to.created;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            data: t
                        }), this.persist()
                    }), this.events.on(to.expired, t => {
                        let i = to.expired;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            data: t
                        }), this.persist()
                    }), this.events.on(to.deleted, t => {
                        let i = to.deleted;
                        this.logger.info(`Emitting ${i}`), this.logger.debug({
                            type: "event",
                            event: i,
                            data: t
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                }
            };
            let Kt = class Kt extends y {
                constructor(t, i) {
                    super(t, i), this.projectId = t, this.logger = i, this.name = tc, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async () => {
                        if (!(this.verifyDisabled || (0, v.b$)()) && (0, v.jU)()) {
                            this.verifyUrl !== th && this.removeIframe(), this.verifyUrl = th;
                            try {
                                await this.createIframe()
                            } catch (t) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(t)
                            }
                            if (!this.initialized) {
                                this.removeIframe(), this.verifyUrl = tl;
                                try {
                                    await this.createIframe()
                                } catch (t) {
                                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(t), this.verifyDisabled = !0
                                }
                            }
                        }
                    }, this.register = async t => {
                        this.initialized ? this.sendPost(t.attestationId) : (this.addToQueue(t.attestationId), await this.init())
                    }, this.resolve = async t => {
                        let i;
                        if (this.isDevEnv) return "";
                        let r = t ? .verifyUrl || th;
                        try {
                            i = await this.fetchAttestation(t.attestationId, r)
                        } catch (c) {
                            this.logger.info(`failed to resolve attestation: ${t.attestationId} from url: ${r}`), this.logger.info(c), i = await this.fetchAttestation(t.attestationId, tl)
                        }
                        return i
                    }, this.fetchAttestation = async (t, i) => {
                        this.logger.info(`resolving attestation: ${t} from url: ${i}`);
                        let r = this.startAbortTimer(2 * T.ONE_SECOND),
                            c = await fetch(`${i}/attestation/${t}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === c.status ? await c.json() : void 0
                    }, this.addToQueue = t => {
                        this.queue.push(t)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(t => this.sendPost(t)), this.queue = [])
                    }, this.sendPost = t => {
                        var i;
                        try {
                            if (!this.iframe) return;
                            null == (i = this.iframe.contentWindow) || i.postMessage(t, "*"), this.logger.info(`postMessage sent: ${t} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let t;
                        let s = i => {
                            "verify_ready" === i.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", s), t())
                        };
                        await Promise.race([new Promise(i => {
                            if (document.getElementById(tc)) return i();
                            window.addEventListener("message", s);
                            let r = document.createElement("iframe");
                            r.id = tc, r.src = `${this.verifyUrl}/${this.projectId}`, r.style.display = "none", document.body.append(r), this.iframe = r, t = i
                        }), new Promise((t, i) => setTimeout(() => {
                            window.removeEventListener("message", s), i("verify iframe load timeout")
                        }, (0, T.toMiliseconds)(T.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.logger = (0, P.generateChildLogger)(i, this.name), this.verifyUrl = th, this.abortController = new AbortController, this.isDevEnv = (0, v.UG)() && B.env.IS_VITEST
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                startAbortTimer(t) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, T.toMiliseconds)(t))
                }
            };
            var tS = Object.defineProperty,
                tC = Object.getOwnPropertySymbols,
                tO = Object.prototype.hasOwnProperty,
                tA = Object.prototype.propertyIsEnumerable,
                Vt = (t, i, r) => i in t ? tS(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                qt = (t, i) => {
                    for (var r in i || (i = {})) tO.call(i, r) && Vt(t, r, i[r]);
                    if (tC)
                        for (var r of tC(i)) tA.call(i, r) && Vt(t, r, i[r]);
                    return t
                };
            let ee = class ee extends n {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = eY, this.events = new c.EventEmitter, this.initialized = !1, this.on = (t, i) => this.events.on(t, i), this.once = (t, i) => this.events.once(t, i), this.off = (t, i) => this.events.off(t, i), this.removeListener = (t, i) => this.events.removeListener(t, i), this.projectId = t ? .projectId, this.relayUrl = t ? .relayUrl || e7, this.customStoragePrefix = null != t && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
                    let i = "u" > typeof t ? .logger && "string" != typeof t ? .logger ? t.logger : (0, P.pino)((0, P.getDefaultLoggerOptions)({
                        level: t ? .logger || eX.logger
                    }));
                    this.logger = (0, P.generateChildLogger)(i, this.name), this.heartbeat = new w.HeartBeat, this.crypto = new _t(this, this.logger, t ? .keychain), this.history = new Mt(this, this.logger), this.expirer = new kt(this, this.logger), this.storage = null != t && t.storage ? t.storage : new _.Z(qt(qt({}, e0), t ? .storageOptions)), this.relayer = new zt({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new $t(this, this.logger), this.verify = new Kt(this.projectId || "", this.logger)
                }
                static async init(t) {
                    let i = new ee(t);
                    await i.initialize();
                    let r = await i.crypto.getClientId();
                    return await i.storage.setItem("WALLETCONNECT_CLIENT_ID", r), i
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (t) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
                    }
                }
            };
            let tN = "client",
                tq = `wc@2:${tN}:`,
                tD = {
                    name: tN,
                    logger: "error"
                },
                tT = "WALLETCONNECT_DEEPLINK_CHOICE",
                tz = "Proposal expired",
                tj = T.SEVEN_DAYS,
                tL = {
                    wc_sessionPropose: {
                        req: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: T.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: T.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: T.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: T.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                t$ = {
                    min: T.FIVE_MINUTES,
                    max: T.SEVEN_DAYS
                },
                tk = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                tM = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var tU = Object.defineProperty,
                tH = Object.defineProperties,
                tV = Object.getOwnPropertyDescriptors,
                tK = Object.getOwnPropertySymbols,
                tW = Object.prototype.hasOwnProperty,
                tZ = Object.prototype.propertyIsEnumerable,
                index_es_de = (t, i, r) => i in t ? tU(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                dist_index_es_g = (t, i) => {
                    for (var r in i || (i = {})) tW.call(i, r) && index_es_de(t, r, i[r]);
                    if (tK)
                        for (var r of tK(i)) tZ.call(i, r) && index_es_de(t, r, i[r]);
                    return t
                },
                index_es_b = (t, i) => tH(t, tV(i));
            let index_es_ps = class index_es_ps extends S {
                constructor(t) {
                    super(t), this.name = "engine", this.events = new(l()), this.initialized = !1, this.ignoredPayloadTypes = [v.rV], this.requestQueue = {
                        state: tk.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: tk.idle,
                        queue: []
                    }, this.requestQueueDelay = T.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(tL)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, T.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async t => {
                        await this.isInitialized();
                        let i = index_es_b(dist_index_es_g({}, t), {
                            requiredNamespaces: t.requiredNamespaces || {},
                            optionalNamespaces: t.optionalNamespaces || {}
                        });
                        await this.isValidConnect(i);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: c,
                            optionalNamespaces: l,
                            sessionProperties: _,
                            relays: w
                        } = i, P = r, C, O = !1;
                        if (P && (O = this.client.core.pairing.pairings.get(P).active), !P || !O) {
                            let {
                                topic: t,
                                uri: i
                            } = await this.client.core.pairing.create();
                            P = t, C = i
                        }
                        let A = await this.client.core.crypto.generateKeyPair(),
                            q = dist_index_es_g({
                                requiredNamespaces: c,
                                optionalNamespaces: l,
                                relays: w ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: A,
                                    metadata: this.client.metadata
                                }
                            }, _ && {
                                sessionProperties: _
                            }),
                            {
                                reject: $,
                                resolve: k,
                                done: M
                            } = (0, v.H1)(T.FIVE_MINUTES, tz);
                        if (this.events.once((0, v.E0)("session_connect"), async ({
                                error: t,
                                session: i
                            }) => {
                                if (t) $(t);
                                else if (i) {
                                    i.self.publicKey = A;
                                    let t = index_es_b(dist_index_es_g({}, i), {
                                        requiredNamespaces: i.requiredNamespaces,
                                        optionalNamespaces: i.optionalNamespaces
                                    });
                                    await this.client.session.set(i.topic, t), await this.setExpiry(i.topic, i.expiry), P && await this.client.core.pairing.updateMetadata({
                                        topic: P,
                                        metadata: i.peer.metadata
                                    }), k(t)
                                }
                            }), !P) {
                            let {
                                message: t
                            } = (0, v.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${P}`);
                            throw Error(t)
                        }
                        let U = await this.sendRequest({
                                topic: P,
                                method: "wc_sessionPropose",
                                params: q
                            }),
                            J = (0, v.gn)(T.FIVE_MINUTES);
                        return await this.setProposal(U, dist_index_es_g({
                            id: U,
                            expiry: J
                        }, q)), {
                            uri: C,
                            approval: M
                        }
                    }, this.pair = async t => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async t => {
                        await this.isInitialized(), await this.isValidApprove(t);
                        let {
                            id: i,
                            relayProtocol: r,
                            namespaces: c,
                            sessionProperties: l
                        } = t, _ = this.client.proposal.get(i), {
                            pairingTopic: w,
                            proposer: P,
                            requiredNamespaces: C,
                            optionalNamespaces: O
                        } = _;
                        w = w || "", (0, v.L5)(C) || (C = (0, v.fc)(c, "approve()"));
                        let A = await this.client.core.crypto.generateKeyPair(),
                            q = P.publicKey,
                            T = await this.client.core.crypto.generateSharedKey(A, q);
                        w && i && (await this.client.core.pairing.updateMetadata({
                            topic: w,
                            metadata: P.metadata
                        }), await this.sendResult({
                            id: i,
                            topic: w,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: A
                            }
                        }), await this.client.proposal.delete(i, (0, v.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: w
                        }));
                        let $ = dist_index_es_g({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: c,
                            requiredNamespaces: C,
                            optionalNamespaces: O,
                            pairingTopic: w,
                            controller: {
                                publicKey: A,
                                metadata: this.client.metadata
                            },
                            expiry: (0, v.gn)(tj)
                        }, l && {
                            sessionProperties: l
                        });
                        await this.client.core.relayer.subscribe(T), await this.sendRequest({
                            topic: T,
                            method: "wc_sessionSettle",
                            params: $,
                            throwOnFailedPublish: !0
                        });
                        let k = index_es_b(dist_index_es_g({}, $), {
                            topic: T,
                            pairingTopic: w,
                            acknowledged: !1,
                            self: $.controller,
                            peer: {
                                publicKey: P.publicKey,
                                metadata: P.metadata
                            },
                            controller: A
                        });
                        return await this.client.session.set(T, k), await this.setExpiry(T, (0, v.gn)(tj)), {
                            topic: T,
                            acknowledged: () => new Promise(t => setTimeout(() => t(this.client.session.get(T)), 500))
                        }
                    }, this.reject = async t => {
                        await this.isInitialized(), await this.isValidReject(t);
                        let {
                            id: i,
                            reason: r
                        } = t, {
                            pairingTopic: c
                        } = this.client.proposal.get(i);
                        c && (await this.sendError(i, c, r), await this.client.proposal.delete(i, (0, v.D6)("USER_DISCONNECTED")))
                    }, this.update = async t => {
                        await this.isInitialized(), await this.isValidUpdate(t);
                        let {
                            topic: i,
                            namespaces: r
                        } = t, c = await this.sendRequest({
                            topic: i,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: l,
                            resolve: _,
                            reject: w
                        } = (0, v.H1)();
                        return this.events.once((0, v.E0)("session_update", c), ({
                            error: t
                        }) => {
                            t ? w(t) : _()
                        }), await this.client.session.update(i, {
                            namespaces: r
                        }), {
                            acknowledged: l
                        }
                    }, this.extend = async t => {
                        await this.isInitialized(), await this.isValidExtend(t);
                        let {
                            topic: i
                        } = t, r = await this.sendRequest({
                            topic: i,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: c,
                            resolve: l,
                            reject: _
                        } = (0, v.H1)();
                        return this.events.once((0, v.E0)("session_extend", r), ({
                            error: t
                        }) => {
                            t ? _(t) : l()
                        }), await this.setExpiry(i, (0, v.gn)(tj)), {
                            acknowledged: c
                        }
                    }, this.request = async t => {
                        await this.isInitialized(), await this.isValidRequest(t);
                        let {
                            chainId: i,
                            request: r,
                            topic: c,
                            expiry: l
                        } = t, _ = (0, k.payloadId)(), {
                            done: w,
                            resolve: P,
                            reject: C
                        } = (0, v.H1)(l, "Request expired. Please try again.");
                        return this.events.once((0, v.E0)("session_request", _), ({
                            error: t,
                            result: i
                        }) => {
                            t ? C(t) : P(i)
                        }), await Promise.all([new Promise(async t => {
                            await this.sendRequest({
                                clientRpcId: _,
                                topic: c,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: i
                                },
                                expiry: l,
                                throwOnFailedPublish: !0
                            }).catch(t => C(t)), this.client.events.emit("session_request_sent", {
                                topic: c,
                                request: r,
                                chainId: i,
                                id: _
                            }), t()
                        }), new Promise(async t => {
                            let i = await this.client.core.storage.getItem(tT);
                            (0, v.Hh)({
                                id: _,
                                topic: c,
                                wcDeepLink: i
                            }), t()
                        }), w()]).then(t => t[2])
                    }, this.respond = async t => {
                        await this.isInitialized(), await this.isValidRespond(t);
                        let {
                            topic: i,
                            response: r
                        } = t, {
                            id: c
                        } = r;
                        (0, k.isJsonRpcResult)(r) ? await this.sendResult({
                            id: c,
                            topic: i,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, k.isJsonRpcError)(r) && await this.sendError(c, i, r.error), this.cleanupAfterResponse(t)
                    }, this.ping = async t => {
                        await this.isInitialized(), await this.isValidPing(t);
                        let {
                            topic: i
                        } = t;
                        if (this.client.session.keys.includes(i)) {
                            let t = await this.sendRequest({
                                    topic: i,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: c,
                                    reject: l
                                } = (0, v.H1)();
                            this.events.once((0, v.E0)("session_ping", t), ({
                                error: t
                            }) => {
                                t ? l(t) : c()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({
                            topic: i
                        })
                    }, this.emit = async t => {
                        await this.isInitialized(), await this.isValidEmit(t);
                        let {
                            topic: i,
                            event: r,
                            chainId: c
                        } = t;
                        await this.sendRequest({
                            topic: i,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: c
                            }
                        })
                    }, this.disconnect = async t => {
                        await this.isInitialized(), await this.isValidDisconnect(t);
                        let {
                            topic: i
                        } = t;
                        this.client.session.keys.includes(i) ? (await this.sendRequest({
                            topic: i,
                            method: "wc_sessionDelete",
                            params: (0, v.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({
                            topic: i
                        })
                    }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter(i => (0, v.Ih)(i, t))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async t => {
                        if (t.pairingTopic) try {
                            let i = this.client.core.pairing.pairings.get(t.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var c, l;
                                    return (null == (c = r.peerMetadata) ? void 0 : c.url) && (null == (l = r.peerMetadata) ? void 0 : l.url) === t.peer.metadata.url && r.topic && r.topic !== i.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(t => this.client.core.pairing.disconnect({
                                topic: t.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    }, this.deleteSession = async (t, i) => {
                        let {
                            self: r
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, (0, v.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), i || this.client.core.expirer.del(t), this.client.core.storage.removeItem(tT).catch(t => this.client.logger.warn(t))
                    }, this.deleteProposal = async (t, i) => {
                        await Promise.all([this.client.proposal.delete(t, (0, v.D6)("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(t)])
                    }, this.deletePendingSessionRequest = async (t, i, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(t, i), r ? Promise.resolve() : this.client.core.expirer.del(t)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(i => i.id !== t), r && (this.sessionRequestQueue.state = tk.idle)
                    }, this.setExpiry = async (t, i) => {
                        this.client.session.keys.includes(t) && await this.client.session.update(t, {
                            expiry: i
                        }), this.client.core.expirer.set(t, i)
                    }, this.setProposal = async (t, i) => {
                        await this.client.proposal.set(t, i), this.client.core.expirer.set(t, i.expiry)
                    }, this.setPendingSessionRequest = async t => {
                        let i = tL.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: c,
                                params: l,
                                verifyContext: _
                            } = t;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: c,
                            params: l,
                            verifyContext: _
                        }), i && this.client.core.expirer.set(r, (0, v.gn)(i))
                    }, this.sendRequest = async t => {
                        let {
                            topic: i,
                            method: r,
                            params: c,
                            expiry: l,
                            relayRpcId: _,
                            clientRpcId: w,
                            throwOnFailedPublish: P
                        } = t, C = (0, k.formatJsonRpcRequest)(r, c, w);
                        if ((0, v.jU)() && tM.includes(r)) {
                            let t = (0, v.rj)(JSON.stringify(C));
                            this.client.core.verify.register({
                                attestationId: t
                            })
                        }
                        let O = await this.client.core.crypto.encode(i, C),
                            A = tL[r].req;
                        return l && (A.ttl = l), _ && (A.id = _), this.client.core.history.set(i, C), P ? (A.internal = index_es_b(dist_index_es_g({}, A.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(i, O, A)) : this.client.core.relayer.publish(i, O, A).catch(t => this.client.logger.error(t)), C.id
                    }, this.sendResult = async t => {
                        let {
                            id: i,
                            topic: r,
                            result: c,
                            throwOnFailedPublish: l
                        } = t, v = (0, k.formatJsonRpcResult)(i, c), _ = await this.client.core.crypto.encode(r, v), w = await this.client.core.history.get(r, i), P = tL[w.request.method].res;
                        l ? (P.internal = index_es_b(dist_index_es_g({}, P.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, _, P)) : this.client.core.relayer.publish(r, _, P).catch(t => this.client.logger.error(t)), await this.client.core.history.resolve(v)
                    }, this.sendError = async (t, i, r) => {
                        let c = (0, k.formatJsonRpcError)(t, r),
                            l = await this.client.core.crypto.encode(i, c),
                            v = await this.client.core.history.get(i, t),
                            _ = tL[v.request.method].res;
                        this.client.core.relayer.publish(i, l, _), await this.client.core.history.resolve(c)
                    }, this.cleanup = async () => {
                        let t = [],
                            i = [];
                        this.client.session.getAll().forEach(i => {
                            (0, v.Bw)(i.expiry) && t.push(i.topic)
                        }), this.client.proposal.getAll().forEach(t => {
                            (0, v.Bw)(t.expiry) && i.push(t.id)
                        }), await Promise.all([...t.map(t => this.deleteSession(t)), ...i.map(t => this.deleteProposal(t))])
                    }, this.onRelayEventRequest = async t => {
                        this.requestQueue.queue.push(t), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === tk.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = tk.active;
                            let t = this.requestQueue.queue.shift();
                            if (t) try {
                                this.processRequest(t), await new Promise(t => setTimeout(t, 300))
                            } catch (t) {
                                this.client.logger.warn(t)
                            }
                        }
                        this.requestQueue.state = tk.idle
                    }, this.processRequest = t => {
                        let {
                            topic: i,
                            payload: r
                        } = t, c = r.method;
                        switch (c) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(i, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(i, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(i, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(i, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(i, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(i, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(i, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(i, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${c}`)
                        }
                    }, this.onRelayEventResponse = async t => {
                        let {
                            topic: i,
                            payload: r
                        } = t, c = (await this.client.core.history.get(i, r.id)).request.method;
                        switch (c) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(i, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(i, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(i, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(i, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(i, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(i, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${c}`)
                        }
                    }, this.onRelayEventUnknownPayload = t => {
                        let {
                            topic: i
                        } = t, {
                            message: r
                        } = (0, v.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (t, i) => {
                        let {
                            params: r,
                            id: c
                        } = i;
                        try {
                            this.isValidConnect(dist_index_es_g({}, i.params));
                            let l = (0, v.gn)(T.FIVE_MINUTES),
                                _ = dist_index_es_g({
                                    id: c,
                                    pairingTopic: t,
                                    expiry: l
                                }, r);
                            await this.setProposal(c, _);
                            let w = (0, v.rj)(JSON.stringify(i)),
                                P = await this.getVerifyContext(w, _.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: c,
                                params: _,
                                verifyContext: P
                            })
                        } catch (i) {
                            await this.sendError(c, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionProposeResponse = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        if ((0, k.isJsonRpcResult)(i)) {
                            let {
                                result: c
                            } = i;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: c
                            });
                            let l = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: l
                            });
                            let v = l.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: v
                            });
                            let _ = c.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: _
                            });
                            let w = await this.client.core.crypto.generateSharedKey(v, _);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: w
                            });
                            let P = await this.client.core.relayer.subscribe(w);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: P
                            }), await this.client.core.pairing.activate({
                                topic: t
                            })
                        } else(0, k.isJsonRpcError)(i) && (await this.client.proposal.delete(r, (0, v.D6)("USER_DISCONNECTED")), this.events.emit((0, v.E0)("session_connect"), {
                            error: i.error
                        }))
                    }, this.onSessionSettleRequest = async (t, i) => {
                        let {
                            id: r,
                            params: c
                        } = i;
                        try {
                            this.isValidSessionSettleRequest(c);
                            let {
                                relay: r,
                                controller: l,
                                expiry: _,
                                namespaces: w,
                                requiredNamespaces: P,
                                optionalNamespaces: C,
                                sessionProperties: O,
                                pairingTopic: A
                            } = i.params, q = dist_index_es_g({
                                topic: t,
                                relay: r,
                                expiry: _,
                                namespaces: w,
                                acknowledged: !0,
                                pairingTopic: A,
                                requiredNamespaces: P,
                                optionalNamespaces: C,
                                controller: l.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: l.publicKey,
                                    metadata: l.metadata
                                }
                            }, O && {
                                sessionProperties: O
                            });
                            await this.sendResult({
                                id: i.id,
                                topic: t,
                                result: !0
                            }), this.events.emit((0, v.E0)("session_connect"), {
                                session: q
                            }), this.cleanupDuplicatePairings(q)
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionSettleResponse = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        (0, k.isJsonRpcResult)(i) ? (await this.client.session.update(t, {
                            acknowledged: !0
                        }), this.events.emit((0, v.E0)("session_approve", r), {})) : (0, k.isJsonRpcError)(i) && (await this.client.session.delete(t, (0, v.D6)("USER_DISCONNECTED")), this.events.emit((0, v.E0)("session_approve", r), {
                            error: i.error
                        }))
                    }, this.onSessionUpdateRequest = async (t, i) => {
                        let {
                            params: r,
                            id: c
                        } = i;
                        try {
                            let i = `${t}_session_update`,
                                l = v.O6.get(i);
                            if (l && this.isRequestOutOfSync(l, c)) {
                                this.client.logger.info(`Discarding out of sync request - ${c}`);
                                return
                            }
                            this.isValidUpdate(dist_index_es_g({
                                topic: t
                            }, r)), await this.client.session.update(t, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: c,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: c,
                                topic: t,
                                params: r
                            }), v.O6.set(i, c)
                        } catch (i) {
                            await this.sendError(c, t, i), this.client.logger.error(i)
                        }
                    }, this.isRequestOutOfSync = (t, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, i) => {
                        let {
                            id: r
                        } = i;
                        (0, k.isJsonRpcResult)(i) ? this.events.emit((0, v.E0)("session_update", r), {}): (0, k.isJsonRpcError)(i) && this.events.emit((0, v.E0)("session_update", r), {
                            error: i.error
                        })
                    }, this.onSessionExtendRequest = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        try {
                            this.isValidExtend({
                                topic: t
                            }), await this.setExpiry(t, (0, v.gn)(tj)), await this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionExtendResponse = (t, i) => {
                        let {
                            id: r
                        } = i;
                        (0, k.isJsonRpcResult)(i) ? this.events.emit((0, v.E0)("session_extend", r), {}): (0, k.isJsonRpcError)(i) && this.events.emit((0, v.E0)("session_extend", r), {
                            error: i.error
                        })
                    }, this.onSessionPingRequest = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionPingResponse = (t, i) => {
                        let {
                            id: r
                        } = i;
                        setTimeout(() => {
                            (0, k.isJsonRpcResult)(i) ? this.events.emit((0, v.E0)("session_ping", r), {}): (0, k.isJsonRpcError)(i) && this.events.emit((0, v.E0)("session_ping", r), {
                                error: i.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (t, i) => {
                        let {
                            id: r
                        } = i;
                        try {
                            this.isValidDisconnect({
                                topic: t,
                                reason: i.params
                            }), await Promise.all([new Promise(i => {
                                this.client.core.relayer.once(e6.publish, async () => {
                                    i(await this.deleteSession(t))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: t
                            })
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    }, this.onSessionRequest = async (t, i) => {
                        let {
                            id: r,
                            params: c
                        } = i;
                        try {
                            this.isValidRequest(dist_index_es_g({
                                topic: t
                            }, c));
                            let i = (0, v.rj)(JSON.stringify((0, k.formatJsonRpcRequest)("wc_sessionRequest", c, r))),
                                l = this.client.session.get(t),
                                _ = await this.getVerifyContext(i, l.peer.metadata),
                                w = {
                                    id: r,
                                    topic: t,
                                    params: c,
                                    verifyContext: _
                                };
                            await this.setPendingSessionRequest(w), this.addSessionRequestToSessionRequestQueue(w), this.processSessionRequestQueue()
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionRequestResponse = (t, i) => {
                        let {
                            id: r
                        } = i;
                        (0, k.isJsonRpcResult)(i) ? this.events.emit((0, v.E0)("session_request", r), {
                            result: i.result
                        }): (0, k.isJsonRpcError)(i) && this.events.emit((0, v.E0)("session_request", r), {
                            error: i.error
                        })
                    }, this.onSessionEventRequest = async (t, i) => {
                        let {
                            id: r,
                            params: c
                        } = i;
                        try {
                            let i = `${t}_session_event_${c.event.name}`,
                                l = v.O6.get(i);
                            if (l && this.isRequestOutOfSync(l, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(dist_index_es_g({
                                topic: t
                            }, c)), this.client.events.emit("session_event", {
                                id: r,
                                topic: t,
                                params: c
                            }), v.O6.set(i, r)
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = t => {
                        this.sessionRequestQueue.queue.push(t)
                    }, this.cleanupAfterResponse = t => {
                        this.deletePendingSessionRequest(t.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = tk.idle, this.processSessionRequestQueue()
                        }, (0, T.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === tk.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let t = this.sessionRequestQueue.queue[0];
                        if (!t) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = tk.active, this.client.events.emit("session_request", t)
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    }, this.onPairingCreated = t => {
                        if (t.active) return;
                        let i = this.client.proposal.getAll().find(i => i.pairingTopic === t.topic);
                        i && this.onSessionProposeRequest(t.topic, (0, k.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: i.requiredNamespaces,
                            optionalNamespaces: i.optionalNamespaces,
                            relays: i.relays,
                            proposer: i.proposer
                        }, i.id))
                    }, this.isValidConnect = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                            throw Error(i)
                        }
                        let {
                            pairingTopic: i,
                            requiredNamespaces: r,
                            optionalNamespaces: c,
                            sessionProperties: l,
                            relays: _
                        } = t;
                        if ((0, v.o8)(i) || await this.isValidPairingTopic(i), !(0, v.PM)(_, !0)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `connect() relays: ${_}`);
                            throw Error(t)
                        }(0, v.o8)(r) || 0 === (0, v.L5)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, v.o8)(c) || 0 === (0, v.L5)(c) || this.validateNamespaces(c, "optionalNamespaces"), (0, v.o8)(l) || this.validateSessionProps(l, "sessionProperties")
                    }, this.validateNamespaces = (t, i) => {
                        let r = (0, v.n)(t, "connect()", i);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async t => {
                        if (!(0, v.EJ)(t)) throw Error((0, v.Z7)("MISSING_OR_INVALID", `approve() params: ${t}`).message);
                        let {
                            id: i,
                            namespaces: r,
                            relayProtocol: c,
                            sessionProperties: l
                        } = t;
                        await this.isValidProposalId(i);
                        let _ = this.client.proposal.get(i),
                            w = (0, v.in)(r, "approve()");
                        if (w) throw Error(w.message);
                        let P = (0, v.rF)(_.requiredNamespaces, r, "approve()");
                        if (P) throw Error(P.message);
                        if (!(0, v.M_)(c, !0)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
                            throw Error(t)
                        }(0, v.o8)(l) || this.validateSessionProps(l, "sessionProperties")
                    }, this.isValidReject = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `reject() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            id: i,
                            reason: r
                        } = t;
                        if (await this.isValidProposalId(i), !(0, v.$t)(r)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(t)
                        }
                    }, this.isValidSessionSettleRequest = t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            relay: i,
                            controller: r,
                            namespaces: c,
                            expiry: l
                        } = t;
                        if (!(0, v.Z2)(i)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(t)
                        }
                        let _ = (0, v.Dd)(r, "onSessionSettleRequest()");
                        if (_) throw Error(_.message);
                        let w = (0, v.in)(c, "onSessionSettleRequest()");
                        if (w) throw Error(w.message);
                        if ((0, v.Bw)(l)) {
                            let {
                                message: t
                            } = (0, v.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(t)
                        }
                    }, this.isValidUpdate = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `update() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i,
                            namespaces: r
                        } = t;
                        await this.isValidSessionTopic(i);
                        let c = this.client.session.get(i),
                            l = (0, v.in)(r, "update()");
                        if (l) throw Error(l.message);
                        let _ = (0, v.rF)(c.requiredNamespaces, r, "update()");
                        if (_) throw Error(_.message)
                    }, this.isValidExtend = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `extend() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i
                        } = t;
                        await this.isValidSessionTopic(i)
                    }, this.isValidRequest = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `request() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i,
                            request: r,
                            chainId: c,
                            expiry: l
                        } = t;
                        await this.isValidSessionTopic(i);
                        let {
                            namespaces: _
                        } = this.client.session.get(i);
                        if (!(0, v.p8)(_, c)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `request() chainId: ${c}`);
                            throw Error(t)
                        }
                        if (!(0, v.hH)(r)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw Error(t)
                        }
                        if (!(0, v.al)(_, c, r.method)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw Error(t)
                        }
                        if (l && !(0, v.ON)(l, t$)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `request() expiry: ${l}. Expiry must be a number (in seconds) between ${t$.min} and ${t$.max}`);
                            throw Error(t)
                        }
                    }, this.isValidRespond = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `respond() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i,
                            response: r
                        } = t;
                        if (await this.isValidSessionTopic(i), !(0, v.JT)(r)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw Error(t)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i
                        } = t;
                        await this.isValidSessionOrPairingTopic(i)
                    }, this.isValidEmit = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `emit() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i,
                            event: r,
                            chainId: c
                        } = t;
                        await this.isValidSessionTopic(i);
                        let {
                            namespaces: l
                        } = this.client.session.get(i);
                        if (!(0, v.p8)(l, c)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `emit() chainId: ${c}`);
                            throw Error(t)
                        }
                        if (!(0, v.nf)(r)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(t)
                        }
                        if (!(0, v.sI)(l, c, r.name)) {
                            let {
                                message: t
                            } = (0, v.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(t)
                        }
                    }, this.isValidDisconnect = async t => {
                        if (!(0, v.EJ)(t)) {
                            let {
                                message: i
                            } = (0, v.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw Error(i)
                        }
                        let {
                            topic: i
                        } = t;
                        await this.isValidSessionOrPairingTopic(i)
                    }, this.getVerifyContext = async (t, i) => {
                        let r = {
                            verified: {
                                verifyUrl: i.verifyUrl || th,
                                validation: "UNKNOWN",
                                origin: i.url || ""
                            }
                        };
                        try {
                            let c = await this.client.core.verify.resolve({
                                attestationId: t,
                                verifyUrl: i.verifyUrl
                            });
                            c && (r.verified.origin = c.origin, r.verified.isScam = c.isScam, r.verified.validation = c.origin === new URL(i.url).origin ? "VALID" : "INVALID")
                        } catch (t) {
                            this.client.logger.info(t)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (t, i) => {
                        Object.values(t).forEach(t => {
                            if (!(0, v.M_)(t, !1)) {
                                let {
                                    message: r
                                } = (0, v.Z7)("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: t
                        } = (0, v.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(t)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(e6.message, async t => {
                        let {
                            topic: i,
                            message: r
                        } = t;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let c = await this.client.core.crypto.decode(i, r);
                        try {
                            (0, k.isJsonRpcRequest)(c) ? (this.client.core.history.set(i, c), this.onRelayEventRequest({
                                topic: i,
                                payload: c
                            })) : (0, k.isJsonRpcResponse)(c) ? (await this.client.core.history.resolve(c), await this.onRelayEventResponse({
                                topic: i,
                                payload: c
                            }), this.client.core.history.delete(i, c.id)) : this.onRelayEventUnknownPayload({
                                topic: i,
                                payload: c
                            })
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(to.expired, async t => {
                        let {
                            topic: i,
                            id: r
                        } = (0, v.iP)(t.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, v.Z7)("EXPIRED"), !0);
                        i ? this.client.session.keys.includes(i) && (await this.deleteSession(i, !0), this.client.events.emit("session_expire", {
                            topic: i
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(ts.create, t => this.onPairingCreated(t))
                }
                isValidPairingTopic(t) {
                    if (!(0, v.M_)(t, !1)) {
                        let {
                            message: i
                        } = (0, v.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                        throw Error(i)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                        throw Error(i)
                    }
                    if ((0, v.Bw)(this.client.core.pairing.pairings.get(t).expiry)) {
                        let {
                            message: i
                        } = (0, v.Z7)("EXPIRED", `pairing topic: ${t}`);
                        throw Error(i)
                    }
                }
                async isValidSessionTopic(t) {
                    if (!(0, v.M_)(t, !1)) {
                        let {
                            message: i
                        } = (0, v.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
                        throw Error(i)
                    }
                    if (!this.client.session.keys.includes(t)) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
                        throw Error(i)
                    }
                    if ((0, v.Bw)(this.client.session.get(t).expiry)) {
                        await this.deleteSession(t);
                        let {
                            message: i
                        } = (0, v.Z7)("EXPIRED", `session topic: ${t}`);
                        throw Error(i)
                    }
                }
                async isValidSessionOrPairingTopic(t) {
                    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
                    else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
                    else if ((0, v.M_)(t, !1)) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                        throw Error(i)
                    } else {
                        let {
                            message: i
                        } = (0, v.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                        throw Error(i)
                    }
                }
                async isValidProposalId(t) {
                    if (!(0, v.Q0)(t)) {
                        let {
                            message: i
                        } = (0, v.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
                        throw Error(i)
                    }
                    if (!this.client.proposal.keys.includes(t)) {
                        let {
                            message: i
                        } = (0, v.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
                        throw Error(i)
                    }
                    if ((0, v.Bw)(this.client.proposal.get(t).expiry)) {
                        await this.deleteProposal(t);
                        let {
                            message: i
                        } = (0, v.Z7)("EXPIRED", `proposal id: ${t}`);
                        throw Error(i)
                    }
                }
            };
            let index_es_hs = class index_es_hs extends Ft {
                constructor(t, i) {
                    super(t, i, "proposal", tq), this.core = t, this.logger = i
                }
            };
            let index_es_ds = class index_es_ds extends Ft {
                constructor(t, i) {
                    super(t, i, "session", tq), this.core = t, this.logger = i
                }
            };
            let index_es_us = class index_es_us extends Ft {
                constructor(t, i) {
                    super(t, i, "request", tq, t => t.id), this.core = t, this.logger = i
                }
            };
            let index_es_Q = class index_es_Q extends b {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = tD.name, this.events = new c.EventEmitter, this.on = (t, i) => this.events.on(t, i), this.once = (t, i) => this.events.once(t, i), this.off = (t, i) => this.events.off(t, i), this.removeListener = (t, i) => this.events.removeListener(t, i), this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
                        try {
                            return await this.engine.connect(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.pair = async t => {
                        try {
                            return await this.engine.pair(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.approve = async t => {
                        try {
                            return await this.engine.approve(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.reject = async t => {
                        try {
                            return await this.engine.reject(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.update = async t => {
                        try {
                            return await this.engine.update(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.extend = async t => {
                        try {
                            return await this.engine.extend(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.request = async t => {
                        try {
                            return await this.engine.request(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.respond = async t => {
                        try {
                            return await this.engine.respond(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.ping = async t => {
                        try {
                            return await this.engine.ping(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.emit = async t => {
                        try {
                            return await this.engine.emit(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.disconnect = async t => {
                        try {
                            return await this.engine.disconnect(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.find = t => {
                        try {
                            return this.engine.find(t)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.name = t ? .name || tD.name, this.metadata = t ? .metadata || (0, v.D)();
                    let i = "u" > typeof t ? .logger && "string" != typeof t ? .logger ? t.logger : (0, P.pino)((0, P.getDefaultLoggerOptions)({
                        level: t ? .logger || tD.logger
                    }));
                    this.core = t ? .core || new ee(t), this.logger = (0, P.generateChildLogger)(i, this.name), this.session = new index_es_ds(this.core, this.logger), this.proposal = new index_es_hs(this.core, this.logger), this.pendingRequest = new index_es_us(this.core, this.logger), this.engine = new index_es_ps(this)
                }
                static async init(t) {
                    let i = new index_es_Q(t);
                    return await i.initialize(), i
                }
                get context() {
                    return (0, P.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (t) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
                    }
                }
            };
            var tG = r(16e3);
            let tJ = "error",
                tF = "wc@2:universal_provider:",
                tB = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var tY = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                tQ = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(t, i) {
                (function() {
                    var r, c = "Expected a function",
                        l = "__lodash_hash_undefined__",
                        v = "__lodash_placeholder__",
                        _ = 1 / 0,
                        w = 0 / 0,
                        P = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        C = "[object Arguments]",
                        O = "[object Array]",
                        A = "[object Boolean]",
                        q = "[object Date]",
                        T = "[object Error]",
                        $ = "[object Function]",
                        k = "[object GeneratorFunction]",
                        M = "[object Map]",
                        U = "[object Number]",
                        J = "[object Object]",
                        F = "[object Promise]",
                        B = "[object RegExp]",
                        Q = "[object Set]",
                        X = "[object String]",
                        et = "[object Symbol]",
                        es = "[object WeakMap]",
                        eo = "[object ArrayBuffer]",
                        ec = "[object DataView]",
                        eh = "[object Float32Array]",
                        el = "[object Float64Array]",
                        ep = "[object Int8Array]",
                        ed = "[object Int16Array]",
                        eg = "[object Int32Array]",
                        ef = "[object Uint8Array]",
                        ey = "[object Uint8ClampedArray]",
                        em = "[object Uint16Array]",
                        e_ = "[object Uint32Array]",
                        ew = /\b__p \+= '';/g,
                        eb = /\b(__p \+=) '' \+/g,
                        eI = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        eE = /&(?:amp|lt|gt|quot|#39);/g,
                        eP = /[&<>"']/g,
                        ex = RegExp(eE.source),
                        eR = RegExp(eP.source),
                        eS = /<%-([\s\S]+?)%>/g,
                        eC = /<%([\s\S]+?)%>/g,
                        eO = /<%=([\s\S]+?)%>/g,
                        eA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        eN = /^\w*$/,
                        eq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        eD = /[\\^$.*+?()[\]{}|]/g,
                        eT = RegExp(eD.source),
                        ez = /^\s+/,
                        ej = /\s/,
                        eL = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        e$ = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ek = /,? & /,
                        eM = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        eU = /[()=,{}\[\]\/\s]/,
                        eH = /\\(\\)?/g,
                        eV = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eK = /\w*$/,
                        eW = /^[-+]0x[0-9a-f]+$/i,
                        eZ = /^0b[01]+$/i,
                        eG = /^\[object .+?Constructor\]$/,
                        eJ = /^0o[0-7]+$/i,
                        eF = /^(?:0|[1-9]\d*)$/,
                        eB = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        eY = /($^)/,
                        eQ = /['\n\r\u2028\u2029\\]/g,
                        eX = "\ud800-\udfff",
                        e0 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        e1 = "\\u2700-\\u27bf",
                        e2 = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        e3 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        e7 = "\\ufe0e\\ufe0f",
                        e5 = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        e6 = "['’]",
                        e8 = "[" + e5 + "]",
                        e4 = "[" + e0 + "]",
                        e9 = "[" + e2 + "]",
                        te = "[^" + eX + e5 + "\\d+" + e1 + e2 + e3 + "]",
                        tn = "\ud83c[\udffb-\udfff]",
                        ts = "[^" + eX + "]",
                        ta = "(?:\ud83c[\udde6-\uddff]){2}",
                        to = "[\ud800-\udbff][\udc00-\udfff]",
                        tc = "[" + e3 + "]",
                        th = "\\u200d",
                        tl = "(?:" + e9 + "|" + te + ")",
                        tp = "(?:" + e6 + "(?:d|ll|m|re|s|t|ve))?",
                        td = "(?:" + e6 + "(?:D|LL|M|RE|S|T|VE))?",
                        tg = "(?:" + e4 + "|" + tn + ")?",
                        tf = "[" + e7 + "]?",
                        ty = "(?:" + th + "(?:" + [ts, ta, to].join("|") + ")" + tf + tg + ")*",
                        tm = tf + tg + ty,
                        t_ = "(?:" + ["[" + e1 + "]", ta, to].join("|") + ")" + tm,
                        tw = "(?:" + [ts + e4 + "?", e4, ta, to, "[" + eX + "]"].join("|") + ")",
                        tb = RegExp(e6, "g"),
                        tI = RegExp(e4, "g"),
                        tE = RegExp(tn + "(?=" + tn + ")|" + tw + tm, "g"),
                        tP = RegExp([tc + "?" + e9 + "+" + tp + "(?=" + [e8, tc, "$"].join("|") + ")", "(?:" + tc + "|" + te + ")+" + td + "(?=" + [e8, tc + tl, "$"].join("|") + ")", tc + "?" + tl + "+" + tp, tc + "+" + td, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", t_].join("|"), "g"),
                        tx = RegExp("[" + th + eX + e0 + e7 + "]"),
                        tR = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        tS = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        tC = -1,
                        tO = {};
                    tO[eh] = tO[el] = tO[ep] = tO[ed] = tO[eg] = tO[ef] = tO[ey] = tO[em] = tO[e_] = !0, tO[C] = tO[O] = tO[eo] = tO[A] = tO[ec] = tO[q] = tO[T] = tO[$] = tO[M] = tO[U] = tO[J] = tO[B] = tO[Q] = tO[X] = tO[es] = !1;
                    var tA = {};
                    tA[C] = tA[O] = tA[eo] = tA[ec] = tA[A] = tA[q] = tA[eh] = tA[el] = tA[ep] = tA[ed] = tA[eg] = tA[M] = tA[U] = tA[J] = tA[B] = tA[Q] = tA[X] = tA[et] = tA[ef] = tA[ey] = tA[em] = tA[e_] = !0, tA[T] = tA[$] = tA[es] = !1;
                    var tN = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        tq = parseFloat,
                        tD = parseInt,
                        tT = "object" == typeof tY && tY && tY.Object === Object && tY,
                        tz = "object" == typeof self && self && self.Object === Object && self,
                        tj = tT || tz || Function("return this")(),
                        tL = i && !i.nodeType && i,
                        t$ = tL && t && !t.nodeType && t,
                        tk = t$ && t$.exports === tL,
                        tM = tk && tT.process,
                        tU = function() {
                            try {
                                return t$ && t$.require && t$.require("util").types || tM && tM.binding && tM.binding("util")
                            } catch {}
                        }(),
                        tH = tU && tU.isArrayBuffer,
                        tV = tU && tU.isDate,
                        tK = tU && tU.isMap,
                        tW = tU && tU.isRegExp,
                        tZ = tU && tU.isSet,
                        tG = tU && tU.isTypedArray;

                    function cn(t, i, r) {
                        switch (r.length) {
                            case 0:
                                return t.call(i);
                            case 1:
                                return t.call(i, r[0]);
                            case 2:
                                return t.call(i, r[0], r[1]);
                            case 3:
                                return t.call(i, r[0], r[1], r[2])
                        }
                        return t.apply(i, r)
                    }

                    function Vo(t, i, r, c) {
                        for (var l = -1, v = null == t ? 0 : t.length; ++l < v;) {
                            var _ = t[l];
                            i(c, _, r(_), t)
                        }
                        return c
                    }

                    function mn(t, i) {
                        for (var r = -1, c = null == t ? 0 : t.length; ++r < c && !1 !== i(t[r], r, t););
                        return t
                    }

                    function As(t, i) {
                        for (var r = -1, c = null == t ? 0 : t.length; ++r < c;)
                            if (!i(t[r], r, t)) return !1;
                        return !0
                    }

                    function jn(t, i) {
                        for (var r = -1, c = null == t ? 0 : t.length, l = 0, v = []; ++r < c;) {
                            var _ = t[r];
                            i(_, r, t) && (v[l++] = _)
                        }
                        return v
                    }

                    function Ee(t, i) {
                        return !!(null == t ? 0 : t.length) && Tt(t, i, 0) > -1
                    }

                    function Dr(t, i, r) {
                        for (var c = -1, l = null == t ? 0 : t.length; ++c < l;)
                            if (r(i, t[c])) return !0;
                        return !1
                    }

                    function G(t, i) {
                        for (var r = -1, c = null == t ? 0 : t.length, l = Array(c); ++r < c;) l[r] = i(t[r], r, t);
                        return l
                    }

                    function nt(t, i) {
                        for (var r = -1, c = i.length, l = t.length; ++r < c;) t[l + r] = i[r];
                        return t
                    }

                    function Hr(t, i, r, c) {
                        var l = -1,
                            v = null == t ? 0 : t.length;
                        for (c && v && (r = t[++l]); ++l < v;) r = i(r, t[l], l, t);
                        return r
                    }

                    function jo(t, i, r, c) {
                        var l = null == t ? 0 : t.length;
                        for (c && l && (r = t[--l]); l--;) r = i(r, t[l], l, t);
                        return r
                    }

                    function Nr(t, i) {
                        for (var r = -1, c = null == t ? 0 : t.length; ++r < c;)
                            if (i(t[r], r, t)) return !0;
                        return !1
                    }
                    var tJ = $r("length");

                    function Cs(t, i, r) {
                        var c;
                        return r(t, function(t, r, l) {
                            if (i(t, r, l)) return c = r, !1
                        }), c
                    }

                    function ye(t, i, r, c) {
                        for (var l = t.length, v = r + (c ? 1 : -1); c ? v-- : ++v < l;)
                            if (i(t[v], v, t)) return v;
                        return -1
                    }

                    function Tt(t, i, r) {
                        return i == i ? function(t, i, r) {
                            for (var c = r - 1, l = t.length; ++c < l;)
                                if (t[c] === i) return c;
                            return -1
                        }(t, i, r) : ye(t, Is, r)
                    }

                    function rf(t, i, r, c) {
                        for (var l = r - 1, v = t.length; ++l < v;)
                            if (c(t[l], i)) return l;
                        return -1
                    }

                    function Is(t) {
                        return t != t
                    }

                    function xs(t, i) {
                        var r = null == t ? 0 : t.length;
                        return r ? Wr(t, i) / r : w
                    }

                    function $r(t) {
                        return function(i) {
                            return null == i ? r : i[t]
                        }
                    }

                    function Ur(t) {
                        return function(i) {
                            return null == t ? r : t[i]
                        }
                    }

                    function Es(t, i, r, c, l) {
                        return l(t, function(t, l, v) {
                            r = c ? (c = !1, t) : i(r, t, l, v)
                        }), r
                    }

                    function Wr(t, i) {
                        for (var c, l = -1, v = t.length; ++l < v;) {
                            var _ = i(t[l]);
                            _ !== r && (c = c === r ? _ : c + _)
                        }
                        return c
                    }

                    function Fr(t, i) {
                        for (var r = -1, c = Array(t); ++r < t;) c[r] = i(r);
                        return c
                    }

                    function ys(t) {
                        return t && t.slice(0, bs(t) + 1).replace(ez, "")
                    }

                    function hn(t) {
                        return function(i) {
                            return t(i)
                        }
                    }

                    function Mr(t, i) {
                        return G(i, function(i) {
                            return t[i]
                        })
                    }

                    function jt(t, i) {
                        return t.has(i)
                    }

                    function Ss(t, i) {
                        for (var r = -1, c = t.length; ++r < c && Tt(i, t[r], 0) > -1;);
                        return r
                    }

                    function Os(t, i) {
                        for (var r = t.length; r-- && Tt(i, t[r], 0) > -1;);
                        return r
                    }
                    var tF = Ur({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tB = Ur({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function cf(t) {
                        return "\\" + tN[t]
                    }

                    function Lt(t) {
                        return tx.test(t)
                    }

                    function qr(t) {
                        var i = -1,
                            r = Array(t.size);
                        return t.forEach(function(t, c) {
                            r[++i] = [c, t]
                        }), r
                    }

                    function Rs(t, i) {
                        return function(r) {
                            return t(i(r))
                        }
                    }

                    function tt(t, i) {
                        for (var r = -1, c = t.length, l = 0, _ = []; ++r < c;) {
                            var w = t[r];
                            (w === i || w === v) && (t[r] = v, _[l++] = r)
                        }
                        return _
                    }

                    function Se(t) {
                        var i = -1,
                            r = Array(t.size);
                        return t.forEach(function(t) {
                            r[++i] = t
                        }), r
                    }

                    function Dt(t) {
                        return Lt(t) ? function(t) {
                            for (var i = tE.lastIndex = 0; tE.test(t);) ++i;
                            return i
                        }(t) : tJ(t)
                    }

                    function On(t) {
                        return Lt(t) ? t.match(tE) || [] : t.split("")
                    }

                    function bs(t) {
                        for (var i = t.length; i-- && ej.test(t.charAt(i)););
                        return i
                    }
                    var tQ = Ur({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tX = function h(t) {
                            var i, ej, eX, e0, e1 = (t = null == t ? tj : tX.defaults(tj.Object(), t, tX.pick(tj, tS))).Array,
                                e2 = t.Date,
                                e3 = t.Error,
                                e7 = t.Function,
                                e5 = t.Math,
                                e6 = t.Object,
                                e8 = t.RegExp,
                                e4 = t.String,
                                e9 = t.TypeError,
                                te = e1.prototype,
                                tn = e7.prototype,
                                ts = e6.prototype,
                                ta = t["__core-js_shared__"],
                                to = tn.toString,
                                tc = ts.hasOwnProperty,
                                th = 0,
                                tl = (i = /[^.]+$/.exec(ta && ta.keys && ta.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                                tp = ts.toString,
                                td = to.call(e6),
                                tg = tj._,
                                tf = e8("^" + to.call(tc).replace(eD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ty = tk ? t.Buffer : r,
                                tm = t.Symbol,
                                t_ = t.Uint8Array,
                                tw = ty ? ty.allocUnsafe : r,
                                tE = Rs(e6.getPrototypeOf, e6),
                                tx = e6.create,
                                tN = ts.propertyIsEnumerable,
                                tT = te.splice,
                                tz = tm ? tm.isConcatSpreadable : r,
                                tL = tm ? tm.iterator : r,
                                t$ = tm ? tm.toStringTag : r,
                                tM = function() {
                                    try {
                                        var t = mt(e6, "defineProperty");
                                        return t({}, "", {}), t
                                    } catch {}
                                }(),
                                tU = t.clearTimeout !== tj.clearTimeout && t.clearTimeout,
                                tJ = e2 && e2.now !== tj.Date.now && e2.now,
                                tY = t.setTimeout !== tj.setTimeout && t.setTimeout,
                                t0 = e5.ceil,
                                t1 = e5.floor,
                                t2 = e6.getOwnPropertySymbols,
                                t3 = ty ? ty.isBuffer : r,
                                t7 = t.isFinite,
                                t5 = te.join,
                                t6 = Rs(e6.keys, e6),
                                t8 = e5.max,
                                t4 = e5.min,
                                t9 = e2.now,
                                ie = t.parseInt,
                                ir = e5.random,
                                is = te.reverse,
                                io = mt(t, "DataView"),
                                ic = mt(t, "Map"),
                                ih = mt(t, "Promise"),
                                il = mt(t, "Set"),
                                iu = mt(t, "WeakMap"),
                                ip = mt(e6, "create"),
                                id = iu && new iu,
                                ig = {},
                                iy = wt(io),
                                im = wt(ic),
                                i_ = wt(ih),
                                iw = wt(il),
                                ib = wt(iu),
                                iI = tm ? tm.prototype : r,
                                iE = iI ? iI.valueOf : r,
                                iP = iI ? iI.toString : r;

                            function a(t) {
                                if (Y(t) && !rE(t) && !(t instanceof H)) {
                                    if (t instanceof Pn) return t;
                                    if (tc.call(t, "__wrapped__")) return Fu(t)
                                }
                                return new Pn(t)
                            }
                            var ix = function() {
                                function n() {}
                                return function(t) {
                                    if (!K(t)) return {};
                                    if (tx) return tx(t);
                                    n.prototype = t;
                                    var i = new n;
                                    return n.prototype = r, i
                                }
                            }();

                            function qe() {}

                            function Pn(t, i) {
                                this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r
                            }

                            function H(t) {
                                this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function dt(t) {
                                var i = -1,
                                    r = null == t ? 0 : t.length;
                                for (this.clear(); ++i < r;) {
                                    var c = t[i];
                                    this.set(c[0], c[1])
                                }
                            }

                            function Bn(t) {
                                var i = -1,
                                    r = null == t ? 0 : t.length;
                                for (this.clear(); ++i < r;) {
                                    var c = t[i];
                                    this.set(c[0], c[1])
                                }
                            }

                            function Gn(t) {
                                var i = -1,
                                    r = null == t ? 0 : t.length;
                                for (this.clear(); ++i < r;) {
                                    var c = t[i];
                                    this.set(c[0], c[1])
                                }
                            }

                            function gt(t) {
                                var i = -1,
                                    r = null == t ? 0 : t.length;
                                for (this.__data__ = new Gn; ++i < r;) this.add(t[i])
                            }

                            function Rn(t) {
                                var i = this.__data__ = new Bn(t);
                                this.size = i.size
                            }

                            function Fs(t, i) {
                                var r = rE(t),
                                    c = !r && rI(t),
                                    l = !r && !c && rx(t),
                                    v = !r && !c && !l && rA(t),
                                    _ = r || c || l || v,
                                    w = _ ? Fr(t.length, e4) : [],
                                    P = w.length;
                                for (var C in t)(i || tc.call(t, C)) && !(_ && ("length" == C || l && ("offset" == C || "parent" == C) || v && ("buffer" == C || "byteLength" == C || "byteOffset" == C) || Zn(C, P))) && w.push(C);
                                return w
                            }

                            function Ms(t) {
                                var i = t.length;
                                return i ? t[ei(0, i - 1)] : r
                            }

                            function Yr(t, i, c) {
                                (c === r || bn(t[i], c)) && (c !== r || i in t) || zn(t, i, c)
                            }

                            function se(t, i, c) {
                                var l = t[i];
                                tc.call(t, i) && bn(l, c) && (c !== r || i in t) || zn(t, i, c)
                            }

                            function Be(t, i) {
                                for (var r = t.length; r--;)
                                    if (bn(t[r][0], i)) return r;
                                return -1
                            }

                            function gc(t, i, r, c) {
                                return iR(t, function(t, l, v) {
                                    i(c, t, r(t), v)
                                }), c
                            }

                            function qs(t, i) {
                                return t && Un(i, V(i), t)
                            }

                            function zn(t, i, r) {
                                "__proto__" == i && tM ? tM(t, i, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : t[i] = r
                            }

                            function Zr(t, i) {
                                for (var c = -1, l = i.length, v = e1(l), _ = null == t; ++c < l;) v[c] = _ ? r : Si(t, i[c]);
                                return v
                            }

                            function vt(t, i, c) {
                                return t == t && (c !== r && (t = t <= c ? t : c), i !== r && (t = t >= i ? t : i)), t
                            }

                            function An(t, i, c, l, v, _) {
                                var w, P = 1 & i,
                                    O = 2 & i,
                                    T = 4 & i;
                                if (c && (w = v ? c(t, l, v, _) : c(t)), w !== r) return w;
                                if (!K(t)) return t;
                                var F = rE(t);
                                if (F) {
                                    if (es = t.length, ew = new t.constructor(es), es && "string" == typeof t[0] && tc.call(t, "index") && (ew.index = t.index, ew.input = t.input), w = ew, !P) return un(t, w)
                                } else {
                                    var es, ew, eb, eI, eE, eP = iL(t),
                                        ex = eP == $ || eP == k;
                                    if (rx(t)) return hu(t, P);
                                    if (eP == J || eP == C || ex && !v) {
                                        if (w = O || ex ? {} : bu(t), !P) return O ? (eb = (eE = w) && Un(t, on(t), eE), Un(t, ij(t), eb)) : (eI = qs(w, t), Un(t, iz(t), eI))
                                    } else {
                                        if (!tA[eP]) return v ? t : {};
                                        w = function(t, i, r) {
                                            var c, l, v = t.constructor;
                                            switch (i) {
                                                case eo:
                                                    return fi(t);
                                                case A:
                                                case q:
                                                    return new v(+t);
                                                case ec:
                                                    return c = r ? fi(t.buffer) : t.buffer, new t.constructor(c, t.byteOffset, t.byteLength);
                                                case eh:
                                                case el:
                                                case ep:
                                                case ed:
                                                case eg:
                                                case ef:
                                                case ey:
                                                case em:
                                                case e_:
                                                    return lu(t, r);
                                                case M:
                                                    return new v;
                                                case U:
                                                case X:
                                                    return new v(t);
                                                case B:
                                                    return (l = new t.constructor(t.source, eK.exec(t))).lastIndex = t.lastIndex, l;
                                                case Q:
                                                    return new v;
                                                case et:
                                                    return iE ? e6(iE.call(t)) : {}
                                            }
                                        }(t, eP, P)
                                    }
                                }
                                _ || (_ = new Rn);
                                var eR = _.get(t);
                                if (eR) return eR;
                                _.set(t, w), rO(t) ? t.forEach(function(r) {
                                    w.add(An(r, i, c, r, t, _))
                                }) : rS(t) && t.forEach(function(r, l) {
                                    w.set(l, An(r, i, c, l, t, _))
                                });
                                var eS = T ? O ? pi : li : O ? on : V,
                                    eC = F ? r : eS(t);
                                return mn(eC || t, function(r, l) {
                                    eC && (r = t[l = r]), se(w, l, An(r, i, c, l, t, _))
                                }), w
                            }

                            function Bs(t, i, c) {
                                var l = c.length;
                                if (null == t) return !l;
                                for (t = e6(t); l--;) {
                                    var v = c[l],
                                        _ = i[v],
                                        w = t[v];
                                    if (w === r && !(v in t) || !_(w)) return !1
                                }
                                return !0
                            }

                            function Gs(t, i, l) {
                                if ("function" != typeof t) throw new e9(c);
                                return iM(function() {
                                    t.apply(r, l)
                                }, i)
                            }

                            function ue(t, i, r, c) {
                                var l = -1,
                                    v = Ee,
                                    _ = !0,
                                    w = t.length,
                                    P = [],
                                    C = i.length;
                                if (!w) return P;
                                r && (i = G(i, hn(r))), c ? (v = Dr, _ = !1) : i.length >= 200 && (v = jt, _ = !1, i = new gt(i));
                                e: for (; ++l < w;) {
                                    var O = t[l],
                                        A = null == r ? O : r(O);
                                    if (O = c || 0 !== O ? O : 0, _ && A == A) {
                                        for (var q = C; q--;)
                                            if (i[q] === A) continue e;
                                        P.push(O)
                                    } else v(i, A, c) || P.push(O)
                                }
                                return P
                            }
                            a.templateSettings = {
                                escape: eS,
                                evaluate: eC,
                                interpolate: eO,
                                variable: "",
                                imports: {
                                    _: a
                                }
                            }, a.prototype = qe.prototype, a.prototype.constructor = a, Pn.prototype = ix(qe.prototype), Pn.prototype.constructor = Pn, H.prototype = ix(qe.prototype), H.prototype.constructor = H, dt.prototype.clear = function() {
                                this.__data__ = ip ? ip(null) : {}, this.size = 0
                            }, dt.prototype.delete = function(t) {
                                var i = this.has(t) && delete this.__data__[t];
                                return this.size -= i ? 1 : 0, i
                            }, dt.prototype.get = function(t) {
                                var i = this.__data__;
                                if (ip) {
                                    var c = i[t];
                                    return c === l ? r : c
                                }
                                return tc.call(i, t) ? i[t] : r
                            }, dt.prototype.has = function(t) {
                                var i = this.__data__;
                                return ip ? i[t] !== r : tc.call(i, t)
                            }, dt.prototype.set = function(t, i) {
                                var c = this.__data__;
                                return this.size += this.has(t) ? 0 : 1, c[t] = ip && i === r ? l : i, this
                            }, Bn.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, Bn.prototype.delete = function(t) {
                                var i = this.__data__,
                                    r = Be(i, t);
                                return !(r < 0) && (r == i.length - 1 ? i.pop() : tT.call(i, r, 1), --this.size, !0)
                            }, Bn.prototype.get = function(t) {
                                var i = this.__data__,
                                    c = Be(i, t);
                                return c < 0 ? r : i[c][1]
                            }, Bn.prototype.has = function(t) {
                                return Be(this.__data__, t) > -1
                            }, Bn.prototype.set = function(t, i) {
                                var r = this.__data__,
                                    c = Be(r, t);
                                return c < 0 ? (++this.size, r.push([t, i])) : r[c][1] = i, this
                            }, Gn.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new dt,
                                    map: new(ic || Bn),
                                    string: new dt
                                }
                            }, Gn.prototype.delete = function(t) {
                                var i = nr(this, t).delete(t);
                                return this.size -= i ? 1 : 0, i
                            }, Gn.prototype.get = function(t) {
                                return nr(this, t).get(t)
                            }, Gn.prototype.has = function(t) {
                                return nr(this, t).has(t)
                            }, Gn.prototype.set = function(t, i) {
                                var r = nr(this, t),
                                    c = r.size;
                                return r.set(t, i), this.size += r.size == c ? 0 : 1, this
                            }, gt.prototype.add = gt.prototype.push = function(t) {
                                return this.__data__.set(t, l), this
                            }, gt.prototype.has = function(t) {
                                return this.__data__.has(t)
                            }, Rn.prototype.clear = function() {
                                this.__data__ = new Bn, this.size = 0
                            }, Rn.prototype.delete = function(t) {
                                var i = this.__data__,
                                    r = i.delete(t);
                                return this.size = i.size, r
                            }, Rn.prototype.get = function(t) {
                                return this.__data__.get(t)
                            }, Rn.prototype.has = function(t) {
                                return this.__data__.has(t)
                            }, Rn.prototype.set = function(t, i) {
                                var r = this.__data__;
                                if (r instanceof Bn) {
                                    var c = r.__data__;
                                    if (!ic || c.length < 199) return c.push([t, i]), this.size = ++r.size, this;
                                    r = this.__data__ = new Gn(c)
                                }
                                return r.set(t, i), this.size = r.size, this
                            };
                            var iR = vu($n),
                                iS = vu(Xr, !0);

                            function mc(t, i) {
                                var r = !0;
                                return iR(t, function(t, c, l) {
                                    return r = !!i(t, c, l)
                                }), r
                            }

                            function Ge(t, i, c) {
                                for (var l = -1, v = t.length; ++l < v;) {
                                    var _ = t[l],
                                        w = i(_);
                                    if (null != w && (P === r ? w == w && !pn(w) : c(w, P))) var P = w,
                                        C = _
                                }
                                return C
                            }

                            function Ks(t, i) {
                                var r = [];
                                return iR(t, function(t, c, l) {
                                    i(t, c, l) && r.push(t)
                                }), r
                            }

                            function j(t, i, r, c, l) {
                                var v = -1,
                                    _ = t.length;
                                for (r || (r = ah), l || (l = []); ++v < _;) {
                                    var w = t[v];
                                    i > 0 && r(w) ? i > 1 ? j(w, i - 1, r, c, l) : nt(l, w) : c || (l[l.length] = w)
                                }
                                return l
                            }
                            var iC = _u(),
                                iO = _u(!0);

                            function $n(t, i) {
                                return t && iC(t, i, V)
                            }

                            function Xr(t, i) {
                                return t && iO(t, i, V)
                            }

                            function ze(t, i) {
                                return jn(i, function(i) {
                                    return Jn(t[i])
                                })
                            }

                            function _t(t, i) {
                                i = st(i, t);
                                for (var c = 0, l = i.length; null != t && c < l;) t = t[Wn(i[c++])];
                                return c && c == l ? t : r
                            }

                            function Zs(t, i, r) {
                                var c = i(t);
                                return rE(t) ? c : nt(c, r(t))
                            }

                            function en(t) {
                                return null == t ? t === r ? "[object Undefined]" : "[object Null]" : t$ && t$ in e6(t) ? function(t) {
                                    var i = tc.call(t, t$),
                                        c = t[t$];
                                    try {
                                        t[t$] = r;
                                        var l = !0
                                    } catch {}
                                    var v = tp.call(t);
                                    return l && (i ? t[t$] = c : delete t[t$]), v
                                }(t) : tp.call(t)
                            }

                            function Qr(t, i) {
                                return t > i
                            }

                            function Pc(t, i) {
                                return null != t && tc.call(t, i)
                            }

                            function Ac(t, i) {
                                return null != t && i in e6(t)
                            }

                            function Vr(t, i, c) {
                                for (var l = c ? Dr : Ee, v = t[0].length, _ = t.length, w = _, P = e1(_), C = 1 / 0, O = []; w--;) {
                                    var A = t[w];
                                    w && i && (A = G(A, hn(i))), C = t4(A.length, C), P[w] = !c && (i || v >= 120 && A.length >= 120) ? new gt(w && A) : r
                                }
                                A = t[0];
                                var q = -1,
                                    T = P[0];
                                e: for (; ++q < v && O.length < C;) {
                                    var $ = A[q],
                                        k = i ? i($) : $;
                                    if ($ = c || 0 !== $ ? $ : 0, !(T ? jt(T, k) : l(O, k, c))) {
                                        for (w = _; --w;) {
                                            var M = P[w];
                                            if (!(M ? jt(M, k) : l(t[w], k, c))) continue e
                                        }
                                        T && T.push(k), O.push($)
                                    }
                                }
                                return O
                            }

                            function ae(t, i, c) {
                                i = st(i, t);
                                var l = null == (t = Hu(t, i)) ? t : t[Wn(In(i))];
                                return null == l ? r : cn(l, t, c)
                            }

                            function Js(t) {
                                return Y(t) && en(t) == C
                            }

                            function oe(t, i, c, l, v) {
                                return t === i || (null != t && null != i && (Y(t) || Y(i)) ? function(t, i, c, l, v, _) {
                                    var w = rE(t),
                                        P = rE(i),
                                        $ = w ? O : iL(t),
                                        k = P ? O : iL(i);
                                    $ = $ == C ? J : $, k = k == C ? J : k;
                                    var F = $ == J,
                                        es = k == J,
                                        eh = $ == k;
                                    if (eh && rx(t)) {
                                        if (!rx(i)) return !1;
                                        w = !0, F = !1
                                    }
                                    if (eh && !F) return _ || (_ = new Rn), w || rA(t) ? Su(t, i, c, l, v, _) : function(t, i, r, c, l, v, _) {
                                        switch (r) {
                                            case ec:
                                                if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset) break;
                                                t = t.buffer, i = i.buffer;
                                            case eo:
                                                return !(t.byteLength != i.byteLength || !v(new t_(t), new t_(i)));
                                            case A:
                                            case q:
                                            case U:
                                                return bn(+t, +i);
                                            case T:
                                                return t.name == i.name && t.message == i.message;
                                            case B:
                                            case X:
                                                return t == i + "";
                                            case M:
                                                var w = qr;
                                            case Q:
                                                var P = 1 & c;
                                                if (w || (w = Se), t.size != i.size && !P) break;
                                                var C = _.get(t);
                                                if (C) return C == i;
                                                c |= 2, _.set(t, i);
                                                var O = Su(w(t), w(i), c, l, v, _);
                                                return _.delete(t), O;
                                            case et:
                                                if (iE) return iE.call(t) == iE.call(i)
                                        }
                                        return !1
                                    }(t, i, $, c, l, v, _);
                                    if (!(1 & c)) {
                                        var el = F && tc.call(t, "__wrapped__"),
                                            ep = es && tc.call(i, "__wrapped__");
                                        if (el || ep) {
                                            var ed = el ? t.value() : t,
                                                eg = ep ? i.value() : i;
                                            return _ || (_ = new Rn), v(ed, eg, c, l, _)
                                        }
                                    }
                                    return !!eh && (_ || (_ = new Rn), function(t, i, c, l, v, _) {
                                        var w = 1 & c,
                                            P = li(t),
                                            C = P.length;
                                        if (C != li(i).length && !w) return !1;
                                        for (var O = C; O--;) {
                                            var A = P[O];
                                            if (!(w ? A in i : tc.call(i, A))) return !1
                                        }
                                        var q = _.get(t),
                                            T = _.get(i);
                                        if (q && T) return q == i && T == t;
                                        var $ = !0;
                                        _.set(t, i), _.set(i, t);
                                        for (var k = w; ++O < C;) {
                                            var M = t[A = P[O]],
                                                U = i[A];
                                            if (l) var J = w ? l(U, M, A, i, t, _) : l(M, U, A, t, i, _);
                                            if (!(J === r ? M === U || v(M, U, c, l, _) : J)) {
                                                $ = !1;
                                                break
                                            }
                                            k || (k = "constructor" == A)
                                        }
                                        if ($ && !k) {
                                            var F = t.constructor,
                                                B = i.constructor;
                                            F != B && "constructor" in t && "constructor" in i && !("function" == typeof F && F instanceof F && "function" == typeof B && B instanceof B) && ($ = !1)
                                        }
                                        return _.delete(t), _.delete(i), $
                                    }(t, i, c, l, v, _))
                                }(t, i, c, l, oe, v) : t != t && i != i)
                            }

                            function kr(t, i, c, l) {
                                var v = c.length,
                                    _ = v,
                                    w = !l;
                                if (null == t) return !_;
                                for (t = e6(t); v--;) {
                                    var P = c[v];
                                    if (w && P[2] ? P[1] !== t[P[0]] : !(P[0] in t)) return !1
                                }
                                for (; ++v < _;) {
                                    var C = (P = c[v])[0],
                                        O = t[C],
                                        A = P[1];
                                    if (w && P[2]) {
                                        if (O === r && !(C in t)) return !1
                                    } else {
                                        var q = new Rn;
                                        if (l) var T = l(O, A, C, t, i, q);
                                        if (!(T === r ? oe(A, O, 3, l, q) : T)) return !1
                                    }
                                }
                                return !0
                            }

                            function Xs(t) {
                                return !(!K(t) || tl && tl in t) && (Jn(t) ? tf : eG).test(wt(t))
                            }

                            function Qs(t) {
                                return "function" == typeof t ? t : null == t ? fn : "object" == typeof t ? rE(t) ? js(t[0], t[1]) : ks(t) : ma(t)
                            }

                            function jr(t) {
                                if (!he(t)) return t6(t);
                                var i = [];
                                for (var r in e6(t)) tc.call(t, r) && "constructor" != r && i.push(r);
                                return i
                            }

                            function ni(t, i) {
                                return t < i
                            }

                            function Vs(t, i) {
                                var r = -1,
                                    c = an(t) ? e1(t.length) : [];
                                return iR(t, function(t, l, v) {
                                    c[++r] = i(t, l, v)
                                }), c
                            }

                            function ks(t) {
                                var i = gi(t);
                                return 1 == i.length && i[0][2] ? Lu(i[0][0], i[0][1]) : function(r) {
                                    return r === t || kr(r, t, i)
                                }
                            }

                            function js(t, i) {
                                var c;
                                return _i(t) && (c = i) == c && !K(c) ? Lu(Wn(t), i) : function(c) {
                                    var l = Si(c, t);
                                    return l === r && l === i ? Oi(c, t) : oe(i, l, 3)
                                }
                            }

                            function Ke(t, i, c, l, v) {
                                t !== i && iC(i, function(_, w) {
                                    if (v || (v = new Rn), K(_)) ! function(t, i, c, l, v, _, w) {
                                        var P = wi(t, c),
                                            C = wi(i, c),
                                            O = w.get(C);
                                        if (O) {
                                            Yr(t, c, O);
                                            return
                                        }
                                        var A = _ ? _(P, C, c + "", t, i, w) : r,
                                            q = A === r;
                                        if (q) {
                                            var T = rE(C),
                                                $ = !T && rx(C),
                                                k = !T && !$ && rA(C);
                                            A = C, T || $ || k ? rE(P) ? A = P : Z(P) ? A = un(P) : $ ? (q = !1, A = hu(C, !0)) : k ? (q = !1, A = lu(C, !0)) : A = [] : pe(C) || rI(C) ? (A = P, rI(P) ? A = oa(P) : (!K(P) || Jn(P)) && (A = bu(C))) : q = !1
                                        }
                                        q && (w.set(C, A), v(A, C, l, _, w), w.delete(C)), Yr(t, c, A)
                                    }(t, i, w, c, Ke, l, v);
                                    else {
                                        var P = l ? l(wi(t, w), _, w + "", t, i, v) : r;
                                        P === r && (P = _), Yr(t, w, P)
                                    }
                                }, on)
                            }

                            function nu(t, i) {
                                var c = t.length;
                                if (c) return Zn(i += i < 0 ? c : 0, c) ? t[i] : r
                            }

                            function tu(t, i, r) {
                                i = i.length ? G(i, function(t) {
                                    return rE(t) ? function(i) {
                                        return _t(i, 1 === t.length ? t[0] : t)
                                    } : t
                                }) : [fn];
                                var c = -1;
                                return i = G(i, hn(x())),
                                    function(t, i) {
                                        var r = t.length;
                                        for (t.sort(i); r--;) t[r] = t[r].value;
                                        return t
                                    }(Vs(t, function(t, r, l) {
                                        return {
                                            criteria: G(i, function(i) {
                                                return i(t)
                                            }),
                                            index: ++c,
                                            value: t
                                        }
                                    }), function(t, i) {
                                        return function(t, i, r) {
                                            for (var c = -1, l = t.criteria, v = i.criteria, _ = l.length, w = r.length; ++c < _;) {
                                                var P = pu(l[c], v[c]);
                                                if (P) {
                                                    if (c >= w) return P;
                                                    return P * ("desc" == r[c] ? -1 : 1)
                                                }
                                            }
                                            return t.index - i.index
                                        }(t, i, r)
                                    })
                            }

                            function eu(t, i, r) {
                                for (var c = -1, l = i.length, v = {}; ++c < l;) {
                                    var _ = i[c],
                                        w = _t(t, _);
                                    r(w, _) && fe(v, st(_, t), w)
                                }
                                return v
                            }

                            function ti(t, i, r, c) {
                                var l = c ? rf : Tt,
                                    v = -1,
                                    _ = i.length,
                                    w = t;
                                for (t === i && (i = un(i)), r && (w = G(t, hn(r))); ++v < _;)
                                    for (var P = 0, C = i[v], O = r ? r(C) : C;
                                        (P = l(w, O, P, c)) > -1;) w !== t && tT.call(w, P, 1), tT.call(t, P, 1);
                                return t
                            }

                            function ru(t, i) {
                                for (var r = t ? i.length : 0, c = r - 1; r--;) {
                                    var l = i[r];
                                    if (r == c || l !== v) {
                                        var v = l;
                                        Zn(l) ? tT.call(t, l, 1) : si(t, l)
                                    }
                                }
                                return t
                            }

                            function ei(t, i) {
                                return t + t1(ir() * (i - t + 1))
                            }

                            function ri(t, i) {
                                var r = "";
                                if (!t || i < 1 || i > 9007199254740991) return r;
                                do i % 2 && (r += t), (i = t1(i / 2)) && (t += t); while (i);
                                return r
                            }

                            function L(t, i) {
                                return iU(Du(t, i, fn), t + "")
                            }

                            function fe(t, i, c, l) {
                                if (!K(t)) return t;
                                i = st(i, t);
                                for (var v = -1, _ = i.length, w = _ - 1, P = t; null != P && ++v < _;) {
                                    var C = Wn(i[v]),
                                        O = c;
                                    if ("__proto__" === C || "constructor" === C || "prototype" === C) break;
                                    if (v != w) {
                                        var A = P[C];
                                        (O = l ? l(A, C, P) : r) === r && (O = K(A) ? A : Zn(i[v + 1]) ? [] : {})
                                    }
                                    se(P, C, O), P = P[C]
                                }
                                return t
                            }
                            var iA = id ? function(t, i) {
                                    return id.set(t, i), t
                                } : fn,
                                iN = tM ? function(t, i) {
                                    return tM(t, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: bi(i),
                                        writable: !0
                                    })
                                } : fn;

                            function Cn(t, i, r) {
                                var c = -1,
                                    l = t.length;
                                i < 0 && (i = -i > l ? 0 : l + i), (r = r > l ? l : r) < 0 && (r += l), l = i > r ? 0 : r - i >>> 0, i >>>= 0;
                                for (var v = e1(l); ++c < l;) v[c] = t[c + i];
                                return v
                            }

                            function Mc(t, i) {
                                var r;
                                return iR(t, function(t, c, l) {
                                    return !(r = i(t, c, l))
                                }), !!r
                            }

                            function Ye(t, i, r) {
                                var c = 0,
                                    l = null == t ? c : t.length;
                                if ("number" == typeof i && i == i && l <= 2147483647) {
                                    for (; c < l;) {
                                        var v = c + l >>> 1,
                                            _ = t[v];
                                        null !== _ && !pn(_) && (r ? _ <= i : _ < i) ? c = v + 1 : l = v
                                    }
                                    return l
                                }
                                return ii(t, i, fn, r)
                            }

                            function ii(t, i, c, l) {
                                var v = 0,
                                    _ = null == t ? 0 : t.length;
                                if (0 === _) return 0;
                                i = c(i);
                                for (var w = i != i, P = null === i, C = pn(i), O = i === r; v < _;) {
                                    var A = t1((v + _) / 2),
                                        q = c(t[A]),
                                        T = q !== r,
                                        $ = null === q,
                                        k = q == q,
                                        M = pn(q);
                                    if (w) var U = l || k;
                                    else U = O ? k && (l || T) : P ? k && T && (l || !$) : C ? k && T && !$ && (l || !M) : !$ && !M && (l ? q <= i : q < i);
                                    U ? v = A + 1 : _ = A
                                }
                                return t4(_, 4294967294)
                            }

                            function su(t, i) {
                                for (var r = -1, c = t.length, l = 0, v = []; ++r < c;) {
                                    var _ = t[r],
                                        w = i ? i(_) : _;
                                    if (!r || !bn(w, P)) {
                                        var P = w;
                                        v[l++] = 0 === _ ? 0 : _
                                    }
                                }
                                return v
                            }

                            function uu(t) {
                                return "number" == typeof t ? t : pn(t) ? w : +t
                            }

                            function ln(t) {
                                if ("string" == typeof t) return t;
                                if (rE(t)) return G(t, ln) + "";
                                if (pn(t)) return iP ? iP.call(t) : "";
                                var i = t + "";
                                return "0" == i && 1 / t == -_ ? "-0" : i
                            }

                            function it(t, i, r) {
                                var c = -1,
                                    l = Ee,
                                    v = t.length,
                                    _ = !0,
                                    w = [],
                                    P = w;
                                if (r) _ = !1, l = Dr;
                                else if (v >= 200) {
                                    var C = i ? null : iD(t);
                                    if (C) return Se(C);
                                    _ = !1, l = jt, P = new gt
                                } else P = i ? [] : w;
                                e: for (; ++c < v;) {
                                    var O = t[c],
                                        A = i ? i(O) : O;
                                    if (O = r || 0 !== O ? O : 0, _ && A == A) {
                                        for (var q = P.length; q--;)
                                            if (P[q] === A) continue e;
                                        i && P.push(A), w.push(O)
                                    } else l(P, A, r) || (P !== w && P.push(A), w.push(O))
                                }
                                return w
                            }

                            function si(t, i) {
                                return i = st(i, t), null == (t = Hu(t, i)) || delete t[Wn(In(i))]
                            }

                            function au(t, i, r, c) {
                                return fe(t, i, r(_t(t, i)), c)
                            }

                            function Ze(t, i, r, c) {
                                for (var l = t.length, v = c ? l : -1;
                                    (c ? v-- : ++v < l) && i(t[v], v, t););
                                return r ? Cn(t, c ? 0 : v, c ? v + 1 : l) : Cn(t, c ? v + 1 : 0, c ? l : v)
                            }

                            function ou(t, i) {
                                var r = t;
                                return r instanceof H && (r = r.value()), Hr(i, function(t, i) {
                                    return i.func.apply(i.thisArg, nt([t], i.args))
                                }, r)
                            }

                            function ui(t, i, r) {
                                var c = t.length;
                                if (c < 2) return c ? it(t[0]) : [];
                                for (var l = -1, v = e1(c); ++l < c;)
                                    for (var _ = t[l], w = -1; ++w < c;) w != l && (v[l] = ue(v[l] || _, t[w], i, r));
                                return it(j(v, 1), i, r)
                            }

                            function fu(t, i, c) {
                                for (var l = -1, v = t.length, _ = i.length, w = {}; ++l < v;) {
                                    var P = l < _ ? i[l] : r;
                                    c(w, t[l], P)
                                }
                                return w
                            }

                            function ai(t) {
                                return Z(t) ? t : []
                            }

                            function oi(t) {
                                return "function" == typeof t ? t : fn
                            }

                            function st(t, i) {
                                return rE(t) ? t : _i(t, i) ? [t] : iH(W(t))
                            }

                            function ut(t, i, c) {
                                var l = t.length;
                                return c = c === r ? l : c, !i && c >= l ? t : Cn(t, i, c)
                            }
                            var iq = tU || function(t) {
                                return tj.clearTimeout(t)
                            };

                            function hu(t, i) {
                                if (i) return t.slice();
                                var r = t.length,
                                    c = tw ? tw(r) : new t.constructor(r);
                                return t.copy(c), c
                            }

                            function fi(t) {
                                var i = new t.constructor(t.byteLength);
                                return new t_(i).set(new t_(t)), i
                            }

                            function lu(t, i) {
                                var r = i ? fi(t.buffer) : t.buffer;
                                return new t.constructor(r, t.byteOffset, t.length)
                            }

                            function pu(t, i) {
                                if (t !== i) {
                                    var c = t !== r,
                                        l = null === t,
                                        v = t == t,
                                        _ = pn(t),
                                        w = i !== r,
                                        P = null === i,
                                        C = i == i,
                                        O = pn(i);
                                    if (!P && !O && !_ && t > i || _ && w && C && !P && !O || l && w && C || !c && C || !v) return 1;
                                    if (!l && !_ && !O && t < i || O && c && v && !l && !_ || P && c && v || !w && v || !C) return -1
                                }
                                return 0
                            }

                            function du(t, i, r, c) {
                                for (var l = -1, v = t.length, _ = r.length, w = -1, P = i.length, C = t8(v - _, 0), O = e1(P + C), A = !c; ++w < P;) O[w] = i[w];
                                for (; ++l < _;)(A || l < v) && (O[r[l]] = t[l]);
                                for (; C--;) O[w++] = t[l++];
                                return O
                            }

                            function gu(t, i, r, c) {
                                for (var l = -1, v = t.length, _ = -1, w = r.length, P = -1, C = i.length, O = t8(v - w, 0), A = e1(O + C), q = !c; ++l < O;) A[l] = t[l];
                                for (var T = l; ++P < C;) A[T + P] = i[P];
                                for (; ++_ < w;)(q || l < v) && (A[T + r[_]] = t[l++]);
                                return A
                            }

                            function un(t, i) {
                                var r = -1,
                                    c = t.length;
                                for (i || (i = e1(c)); ++r < c;) i[r] = t[r];
                                return i
                            }

                            function Un(t, i, c, l) {
                                var v = !c;
                                c || (c = {});
                                for (var _ = -1, w = i.length; ++_ < w;) {
                                    var P = i[_],
                                        C = l ? l(c[P], t[P], P, c, t) : r;
                                    C === r && (C = t[P]), v ? zn(c, P, C) : se(c, P, C)
                                }
                                return c
                            }

                            function Je(t, i) {
                                return function(r, c) {
                                    var l = rE(r) ? Vo : gc,
                                        v = i ? i() : {};
                                    return l(r, t, x(c, 2), v)
                                }
                            }

                            function Ft(t) {
                                return L(function(i, c) {
                                    var l = -1,
                                        v = c.length,
                                        _ = v > 1 ? c[v - 1] : r,
                                        w = v > 2 ? c[2] : r;
                                    for (_ = t.length > 3 && "function" == typeof _ ? (v--, _) : r, w && rn(c[0], c[1], w) && (_ = v < 3 ? r : _, v = 1), i = e6(i); ++l < v;) {
                                        var P = c[l];
                                        P && t(i, P, l, _)
                                    }
                                    return i
                                })
                            }

                            function vu(t, i) {
                                return function(r, c) {
                                    if (null == r) return r;
                                    if (!an(r)) return t(r, c);
                                    for (var l = r.length, v = i ? l : -1, _ = e6(r);
                                        (i ? v-- : ++v < l) && !1 !== c(_[v], v, _););
                                    return r
                                }
                            }

                            function _u(t) {
                                return function(i, r, c) {
                                    for (var l = -1, v = e6(i), _ = c(i), w = _.length; w--;) {
                                        var P = _[t ? w : ++l];
                                        if (!1 === r(v[P], P, v)) break
                                    }
                                    return i
                                }
                            }

                            function mu(t) {
                                return function(i) {
                                    var c = Lt(i = W(i)) ? On(i) : r,
                                        l = c ? c[0] : i.charAt(0),
                                        v = c ? ut(c, 1).join("") : i.slice(1);
                                    return l[t]() + v
                                }
                            }

                            function Mt(t) {
                                return function(i) {
                                    return Hr(va(ga(i).replace(tb, "")), t, "")
                                }
                            }

                            function ce(t) {
                                return function() {
                                    var i = arguments;
                                    switch (i.length) {
                                        case 0:
                                            return new t;
                                        case 1:
                                            return new t(i[0]);
                                        case 2:
                                            return new t(i[0], i[1]);
                                        case 3:
                                            return new t(i[0], i[1], i[2]);
                                        case 4:
                                            return new t(i[0], i[1], i[2], i[3]);
                                        case 5:
                                            return new t(i[0], i[1], i[2], i[3], i[4]);
                                        case 6:
                                            return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
                                        case 7:
                                            return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6])
                                    }
                                    var r = ix(t.prototype),
                                        c = t.apply(r, i);
                                    return K(c) ? c : r
                                }
                            }

                            function wu(t) {
                                return function(i, c, l) {
                                    var v = e6(i);
                                    if (!an(i)) {
                                        var _ = x(c, 3);
                                        i = V(i), c = function(t) {
                                            return _(v[t], t, v)
                                        }
                                    }
                                    var w = t(i, c, l);
                                    return w > -1 ? v[_ ? i[w] : w] : r
                                }
                            }

                            function Pu(t) {
                                return Yn(function(i) {
                                    var l = i.length,
                                        v = l,
                                        _ = Pn.prototype.thru;
                                    for (t && i.reverse(); v--;) {
                                        var w = i[v];
                                        if ("function" != typeof w) throw new e9(c);
                                        if (_ && !P && "wrapper" == je(w)) var P = new Pn([], !0)
                                    }
                                    for (v = P ? v : l; ++v < l;) {
                                        var C = je(w = i[v]),
                                            O = "wrapper" == C ? iT(w) : r;
                                        P = O && mi(O[0]) && 424 == O[1] && !O[4].length && 1 == O[9] ? P[je(O[0])].apply(P, O[3]) : 1 == w.length && mi(w) ? P[C]() : P.thru(w)
                                    }
                                    return function() {
                                        var t = arguments,
                                            r = t[0];
                                        if (P && 1 == t.length && rE(r)) return P.plant(r).value();
                                        for (var c = 0, v = l ? i[c].apply(this, t) : r; ++c < l;) v = i[c].call(this, v);
                                        return v
                                    }
                                })
                            }

                            function Xe(t, i, c, l, v, _, w, P, C, O) {
                                var A = 128 & i,
                                    q = 1 & i,
                                    T = 2 & i,
                                    $ = 24 & i,
                                    k = 512 & i,
                                    M = T ? r : ce(t);
                                return function y() {
                                    for (var U = arguments.length, J = e1(U), F = U; F--;) J[F] = arguments[F];
                                    if ($) var B = qt(y),
                                        Q = function(t, i) {
                                            for (var r = t.length, c = 0; r--;) t[r] === i && ++c;
                                            return c
                                        }(J, B);
                                    if (l && (J = du(J, l, v, $)), _ && (J = gu(J, _, w, $)), U -= Q, $ && U < O) {
                                        var X = tt(J, B);
                                        return Iu(t, i, Xe, y.placeholder, c, J, X, P, C, O - U)
                                    }
                                    var et = q ? c : this,
                                        es = T ? et[t] : t;
                                    return U = J.length, P ? J = function(t, i) {
                                        for (var c = t.length, l = t4(i.length, c), v = un(t); l--;) {
                                            var _ = i[l];
                                            t[l] = Zn(_, c) ? v[_] : r
                                        }
                                        return t
                                    }(J, P) : k && U > 1 && J.reverse(), A && C < U && (J.length = C), this && this !== tj && this instanceof y && (es = M || ce(es)), es.apply(et, J)
                                }
                            }

                            function Au(t, i) {
                                return function(r, c) {
                                    var l, v;
                                    return l = i(c), v = {}, $n(r, function(i, r, c) {
                                        t(v, l(i), r, c)
                                    }), v
                                }
                            }

                            function Qe(t, i) {
                                return function(c, l) {
                                    var v;
                                    if (c === r && l === r) return i;
                                    if (c !== r && (v = c), l !== r) {
                                        if (v === r) return l;
                                        "string" == typeof c || "string" == typeof l ? (c = ln(c), l = ln(l)) : (c = uu(c), l = uu(l)), v = t(c, l)
                                    }
                                    return v
                                }
                            }

                            function ci(t) {
                                return Yn(function(i) {
                                    return i = G(i, hn(x())), L(function(r) {
                                        var c = this;
                                        return t(i, function(t) {
                                            return cn(t, c, r)
                                        })
                                    })
                                })
                            }

                            function Ve(t, i) {
                                var c = (i = i === r ? " " : ln(i)).length;
                                if (c < 2) return c ? ri(i, t) : i;
                                var l = ri(i, t0(t / Dt(i)));
                                return Lt(i) ? ut(On(l), 0, t).join("") : l.slice(0, t)
                            }

                            function Cu(t) {
                                return function(i, c, l) {
                                    return l && "number" != typeof l && rn(i, c, l) && (c = l = r), i = Xn(i), c === r ? (c = i, i = 0) : c = Xn(c), l = l === r ? i < c ? 1 : -1 : Xn(l),
                                        function(t, i, r, c) {
                                            for (var l = -1, v = t8(t0((i - t) / (r || 1)), 0), _ = e1(v); v--;) _[c ? v : ++l] = t, t += r;
                                            return _
                                        }(i, c, l, t)
                                }
                            }

                            function ke(t) {
                                return function(i, r) {
                                    return "string" == typeof i && "string" == typeof r || (i = xn(i), r = xn(r)), t(i, r)
                                }
                            }

                            function Iu(t, i, c, l, v, _, w, P, C, O) {
                                var A = 8 & i,
                                    q = A ? w : r,
                                    T = A ? r : w,
                                    $ = A ? _ : r,
                                    k = A ? r : _;
                                i |= A ? 32 : 64, 4 & (i &= ~(A ? 64 : 32)) || (i &= -4);
                                var M = [t, i, v, $, q, k, T, P, C, O],
                                    U = c.apply(r, M);
                                return mi(t) && ik(U, M), U.placeholder = l, $u(U, t, i)
                            }

                            function hi(t) {
                                var i = e5[t];
                                return function(t, r) {
                                    if (t = xn(t), (r = null == r ? 0 : t4(R(r), 292)) && t7(t)) {
                                        var c = (W(t) + "e").split("e");
                                        return +((c = (W(i(c[0] + "e" + (+c[1] + r))) + "e").split("e"))[0] + "e" + (+c[1] - r))
                                    }
                                    return i(t)
                                }
                            }
                            var iD = il && 1 / Se(new il([, -0]))[1] == _ ? function(t) {
                                return new il(t)
                            } : Di;

                            function xu(t) {
                                return function(i) {
                                    var r, c, l = iL(i);
                                    return l == M ? qr(i) : l == Q ? (r = -1, c = Array(i.size), i.forEach(function(t) {
                                        c[++r] = [t, t]
                                    }), c) : G(t(i), function(t) {
                                        return [t, i[t]]
                                    })
                                }
                            }

                            function Kn(t, i, l, _, w, P, C, O) {
                                var A = 2 & i;
                                if (!A && "function" != typeof t) throw new e9(c);
                                var q = _ ? _.length : 0;
                                if (q || (i &= -97, _ = w = r), C = C === r ? C : t8(R(C), 0), O = O === r ? O : R(O), q -= w ? w.length : 0, 64 & i) {
                                    var T = _,
                                        $ = w;
                                    _ = w = r
                                }
                                var k = A ? r : iT(t),
                                    M = [t, i, l, _, w, T, $, P, C, O];
                                if (k && function(t, i) {
                                        var r = t[1],
                                            c = i[1],
                                            l = r | c,
                                            _ = l < 131,
                                            w = 128 == c && 8 == r || 128 == c && 256 == r && t[7].length <= i[8] || 384 == c && i[7].length <= i[8] && 8 == r;
                                        if (_ || w) {
                                            1 & c && (t[2] = i[2], l |= 1 & r ? 0 : 4);
                                            var P = i[3];
                                            if (P) {
                                                var C = t[3];
                                                t[3] = C ? du(C, P, i[4]) : P, t[4] = C ? tt(t[3], v) : i[4]
                                            }(P = i[5]) && (C = t[5], t[5] = C ? gu(C, P, i[6]) : P, t[6] = C ? tt(t[5], v) : i[6]), (P = i[7]) && (t[7] = P), 128 & c && (t[8] = null == t[8] ? i[8] : t4(t[8], i[8])), null == t[9] && (t[9] = i[9]), t[0] = i[0], t[1] = l
                                        }
                                    }(M, k), t = M[0], i = M[1], l = M[2], _ = M[3], w = M[4], (O = M[9] = M[9] === r ? A ? 0 : t.length : t8(M[9] - q, 0)) || !(24 & i) || (i &= -25), i && 1 != i) 8 == i || 16 == i ? (U = t, J = i, F = O, B = ce(U), ef = function s() {
                                    for (var t = arguments.length, i = e1(t), c = t, l = qt(s); c--;) i[c] = arguments[c];
                                    var v = t < 3 && i[0] !== l && i[t - 1] !== l ? [] : tt(i, l);
                                    return (t -= v.length) < F ? Iu(U, J, Xe, s.placeholder, r, i, v, r, r, F - t) : cn(this && this !== tj && this instanceof s ? B : U, this, i)
                                }) : 32 != i && 33 != i || w.length ? ef = Xe.apply(r, M) : (Q = t, X = i, et = l, es = _, eo = 1 & X, ec = ce(Q), ef = function f() {
                                    for (var t = -1, i = arguments.length, r = -1, c = es.length, l = e1(c + i), v = this && this !== tj && this instanceof f ? ec : Q; ++r < c;) l[r] = es[r];
                                    for (; i--;) l[r++] = arguments[++t];
                                    return cn(v, eo ? et : this, l)
                                });
                                else var U, J, F, B, Q, X, et, es, eo, ec, eh, el, ep, ed, eg, ef = (eh = t, el = i, ep = l, ed = 1 & el, eg = ce(eh), function o() {
                                    return (this && this !== tj && this instanceof o ? eg : eh).apply(ed ? ep : this, arguments)
                                });
                                return $u((k ? iA : ik)(ef, M), t, i)
                            }

                            function Eu(t, i, c, l) {
                                return t === r || bn(t, ts[c]) && !tc.call(l, c) ? i : t
                            }

                            function yu(t, i, c, l, v, _) {
                                return K(t) && K(i) && (_.set(i, t), Ke(t, i, r, yu, _), _.delete(i)), t
                            }

                            function kc(t) {
                                return pe(t) ? r : t
                            }

                            function Su(t, i, c, l, v, _) {
                                var w = 1 & c,
                                    P = t.length,
                                    C = i.length;
                                if (P != C && !(w && C > P)) return !1;
                                var O = _.get(t),
                                    A = _.get(i);
                                if (O && A) return O == i && A == t;
                                var q = -1,
                                    T = !0,
                                    $ = 2 & c ? new gt : r;
                                for (_.set(t, i), _.set(i, t); ++q < P;) {
                                    var k = t[q],
                                        M = i[q];
                                    if (l) var U = w ? l(M, k, q, i, t, _) : l(k, M, q, t, i, _);
                                    if (U !== r) {
                                        if (U) continue;
                                        T = !1;
                                        break
                                    }
                                    if ($) {
                                        if (!Nr(i, function(t, i) {
                                                if (!jt($, i) && (k === t || v(k, t, c, l, _))) return $.push(i)
                                            })) {
                                            T = !1;
                                            break
                                        }
                                    } else if (!(k === M || v(k, M, c, l, _))) {
                                        T = !1;
                                        break
                                    }
                                }
                                return _.delete(t), _.delete(i), T
                            }

                            function Yn(t) {
                                return iU(Du(t, r, Bu), t + "")
                            }

                            function li(t) {
                                return Zs(t, V, iz)
                            }

                            function pi(t) {
                                return Zs(t, on, ij)
                            }
                            var iT = id ? function(t) {
                                return id.get(t)
                            } : Di;

                            function je(t) {
                                for (var i = t.name + "", r = ig[i], c = tc.call(ig, i) ? r.length : 0; c--;) {
                                    var l = r[c],
                                        v = l.func;
                                    if (null == v || v == t) return l.name
                                }
                                return i
                            }

                            function qt(t) {
                                return (tc.call(a, "placeholder") ? a : t).placeholder
                            }

                            function x() {
                                var t = a.iteratee || Ti;
                                return t = t === Ti ? Qs : t, arguments.length ? t(arguments[0], arguments[1]) : t
                            }

                            function nr(t, i) {
                                var r, c = t.__data__;
                                return ("string" == (r = typeof i) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== i : null === i) ? c["string" == typeof i ? "string" : "hash"] : c.map
                            }

                            function gi(t) {
                                for (var i = V(t), r = i.length; r--;) {
                                    var c = i[r],
                                        l = t[c];
                                    i[r] = [c, l, l == l && !K(l)]
                                }
                                return i
                            }

                            function mt(t, i) {
                                var c = null == t ? r : t[i];
                                return Xs(c) ? c : r
                            }
                            var iz = t2 ? function(t) {
                                    return null == t ? [] : jn(t2(t = e6(t)), function(i) {
                                        return tN.call(t, i)
                                    })
                                } : Hi,
                                ij = t2 ? function(t) {
                                    for (var i = []; t;) nt(i, iz(t)), t = tE(t);
                                    return i
                                } : Hi,
                                iL = en;

                            function Ru(t, i, r) {
                                i = st(i, t);
                                for (var c = -1, l = i.length, v = !1; ++c < l;) {
                                    var _ = Wn(i[c]);
                                    if (!(v = null != t && r(t, _))) break;
                                    t = t[_]
                                }
                                return v || ++c != l ? v : !!(l = null == t ? 0 : t.length) && ar(l) && Zn(_, l) && (rE(t) || rI(t))
                            }

                            function bu(t) {
                                return "function" != typeof t.constructor || he(t) ? {} : ix(tE(t))
                            }

                            function ah(t) {
                                return rE(t) || rI(t) || !!(tz && t && t[tz])
                            }

                            function Zn(t, i) {
                                var r = typeof t;
                                return !!(i = i ? ? 9007199254740991) && ("number" == r || "symbol" != r && eF.test(t)) && t > -1 && t % 1 == 0 && t < i
                            }

                            function rn(t, i, r) {
                                if (!K(r)) return !1;
                                var c = typeof i;
                                return ("number" == c ? !!(an(r) && Zn(i, r.length)) : "string" == c && i in r) && bn(r[i], t)
                            }

                            function _i(t, i) {
                                if (rE(t)) return !1;
                                var r = typeof t;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == t || pn(t)) || eN.test(t) || !eA.test(t) || null != i && t in e6(i)
                            }

                            function mi(t) {
                                var i = je(t),
                                    r = a[i];
                                if ("function" != typeof r || !(i in H.prototype)) return !1;
                                if (t === r) return !0;
                                var c = iT(r);
                                return !!c && t === c[0]
                            }(io && iL(new io(new ArrayBuffer(1))) != ec || ic && iL(new ic) != M || ih && iL(ih.resolve()) != F || il && iL(new il) != Q || iu && iL(new iu) != es) && (iL = function(t) {
                                var i = en(t),
                                    c = i == J ? t.constructor : r,
                                    l = c ? wt(c) : "";
                                if (l) switch (l) {
                                    case iy:
                                        return ec;
                                    case im:
                                        return M;
                                    case i_:
                                        return F;
                                    case iw:
                                        return Q;
                                    case ib:
                                        return es
                                }
                                return i
                            });
                            var i$ = ta ? Jn : Ni;

                            function he(t) {
                                var i = t && t.constructor;
                                return t === ("function" == typeof i && i.prototype || ts)
                            }

                            function Lu(t, i) {
                                return function(c) {
                                    return null != c && c[t] === i && (i !== r || t in e6(c))
                                }
                            }

                            function Du(t, i, c) {
                                return i = t8(i === r ? t.length - 1 : i, 0),
                                    function() {
                                        for (var r = arguments, l = -1, v = t8(r.length - i, 0), _ = e1(v); ++l < v;) _[l] = r[i + l];
                                        l = -1;
                                        for (var w = e1(i + 1); ++l < i;) w[l] = r[l];
                                        return w[i] = c(_), cn(t, this, w)
                                    }
                            }

                            function Hu(t, i) {
                                return i.length < 2 ? t : _t(t, Cn(i, 0, -1))
                            }

                            function wi(t, i) {
                                if (!("constructor" === i && "function" == typeof t[i]) && "__proto__" != i) return t[i]
                            }
                            var ik = Uu(iA),
                                iM = tY || function(t, i) {
                                    return tj.setTimeout(t, i)
                                },
                                iU = Uu(iN);

                            function $u(t, i, r) {
                                var c, l, v = i + "";
                                return iU(t, function(t, i) {
                                    var r = i.length;
                                    if (!r) return t;
                                    var c = r - 1;
                                    return i[c] = (r > 1 ? "& " : "") + i[c], i = i.join(r > 2 ? ", " : " "), t.replace(eL, `{
/* [wrapped with ` + i + `] */
`)
                                }(v, (c = (l = v.match(e$)) ? l[1].split(ek) : [], mn(P, function(t) {
                                    var i = "_." + t[0];
                                    r & t[1] && !Ee(c, i) && c.push(i)
                                }), c.sort())))
                            }

                            function Uu(t) {
                                var i = 0,
                                    c = 0;
                                return function() {
                                    var l = t9(),
                                        v = 16 - (l - c);
                                    if (c = l, v > 0) {
                                        if (++i >= 800) return arguments[0]
                                    } else i = 0;
                                    return t.apply(r, arguments)
                                }
                            }

                            function tr(t, i) {
                                var c = -1,
                                    l = t.length,
                                    v = l - 1;
                                for (i = i === r ? l : i; ++c < i;) {
                                    var _ = ei(c, v),
                                        w = t[_];
                                    t[_] = t[c], t[c] = w
                                }
                                return t.length = i, t
                            }
                            var iH = (eX = (ej = sr(function(t) {
                                var i = [];
                                return 46 === t.charCodeAt(0) && i.push(""), t.replace(eq, function(t, r, c, l) {
                                    i.push(c ? l.replace(eH, "$1") : r || t)
                                }), i
                            }, function(t) {
                                return 500 === eX.size && eX.clear(), t
                            })).cache, ej);

                            function Wn(t) {
                                if ("string" == typeof t || pn(t)) return t;
                                var i = t + "";
                                return "0" == i && 1 / t == -_ ? "-0" : i
                            }

                            function wt(t) {
                                if (null != t) {
                                    try {
                                        return to.call(t)
                                    } catch {}
                                    try {
                                        return t + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function Fu(t) {
                                if (t instanceof H) return t.clone();
                                var i = new Pn(t.__wrapped__, t.__chain__);
                                return i.__actions__ = un(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i
                            }
                            var iV = L(function(t, i) {
                                    return Z(t) ? ue(t, j(i, 1, Z, !0)) : []
                                }),
                                iK = L(function(t, i) {
                                    var c = In(i);
                                    return Z(c) && (c = r), Z(t) ? ue(t, j(i, 1, Z, !0), x(c, 2)) : []
                                }),
                                iW = L(function(t, i) {
                                    var c = In(i);
                                    return Z(c) && (c = r), Z(t) ? ue(t, j(i, 1, Z, !0), r, c) : []
                                });

                            function Mu(t, i, r) {
                                var c = null == t ? 0 : t.length;
                                if (!c) return -1;
                                var l = null == r ? 0 : R(r);
                                return l < 0 && (l = t8(c + l, 0)), ye(t, x(i, 3), l)
                            }

                            function qu(t, i, c) {
                                var l = null == t ? 0 : t.length;
                                if (!l) return -1;
                                var v = l - 1;
                                return c !== r && (v = R(c), v = c < 0 ? t8(l + v, 0) : t4(v, l - 1)), ye(t, x(i, 3), v, !0)
                            }

                            function Bu(t) {
                                return (null == t ? 0 : t.length) ? j(t, 1) : []
                            }

                            function Gu(t) {
                                return t && t.length ? t[0] : r
                            }
                            var iZ = L(function(t) {
                                    var i = G(t, ai);
                                    return i.length && i[0] === t[0] ? Vr(i) : []
                                }),
                                iG = L(function(t) {
                                    var i = In(t),
                                        c = G(t, ai);
                                    return i === In(c) ? i = r : c.pop(), c.length && c[0] === t[0] ? Vr(c, x(i, 2)) : []
                                }),
                                iJ = L(function(t) {
                                    var i = In(t),
                                        c = G(t, ai);
                                    return (i = "function" == typeof i ? i : r) && c.pop(), c.length && c[0] === t[0] ? Vr(c, r, i) : []
                                });

                            function In(t) {
                                var i = null == t ? 0 : t.length;
                                return i ? t[i - 1] : r
                            }
                            var iF = L(zu);

                            function zu(t, i) {
                                return t && t.length && i && i.length ? ti(t, i) : t
                            }
                            var iB = Yn(function(t, i) {
                                var r = null == t ? 0 : t.length,
                                    c = Zr(t, i);
                                return ru(t, G(i, function(t) {
                                    return Zn(t, r) ? +t : t
                                }).sort(pu)), c
                            });

                            function Ai(t) {
                                return null == t ? t : is.call(t)
                            }
                            var iY = L(function(t) {
                                    return it(j(t, 1, Z, !0))
                                }),
                                iQ = L(function(t) {
                                    var i = In(t);
                                    return Z(i) && (i = r), it(j(t, 1, Z, !0), x(i, 2))
                                }),
                                iX = L(function(t) {
                                    var i = In(t);
                                    return i = "function" == typeof i ? i : r, it(j(t, 1, Z, !0), r, i)
                                });

                            function Ci(t) {
                                if (!(t && t.length)) return [];
                                var i = 0;
                                return t = jn(t, function(t) {
                                    if (Z(t)) return i = t8(t.length, i), !0
                                }), Fr(i, function(i) {
                                    return G(t, $r(i))
                                })
                            }

                            function Ku(t, i) {
                                if (!(t && t.length)) return [];
                                var c = Ci(t);
                                return null == i ? c : G(c, function(t) {
                                    return cn(i, r, t)
                                })
                            }
                            var i0 = L(function(t, i) {
                                    return Z(t) ? ue(t, i) : []
                                }),
                                i1 = L(function(t) {
                                    return ui(jn(t, Z))
                                }),
                                i2 = L(function(t) {
                                    var i = In(t);
                                    return Z(i) && (i = r), ui(jn(t, Z), x(i, 2))
                                }),
                                i3 = L(function(t) {
                                    var i = In(t);
                                    return i = "function" == typeof i ? i : r, ui(jn(t, Z), r, i)
                                }),
                                i7 = L(Ci),
                                i5 = L(function(t) {
                                    var i = t.length,
                                        c = i > 1 ? t[i - 1] : r;
                                    return c = "function" == typeof c ? (t.pop(), c) : r, Ku(t, c)
                                });

                            function Yu(t) {
                                var i = a(t);
                                return i.__chain__ = !0, i
                            }

                            function er(t, i) {
                                return i(t)
                            }
                            var i6 = Yn(function(t) {
                                    var i = t.length,
                                        c = i ? t[0] : 0,
                                        l = this.__wrapped__,
                                        s = function(i) {
                                            return Zr(i, t)
                                        };
                                    return !(i > 1) && !this.__actions__.length && l instanceof H && Zn(c) ? ((l = l.slice(c, +c + (i ? 1 : 0))).__actions__.push({
                                        func: er,
                                        args: [s],
                                        thisArg: r
                                    }), new Pn(l, this.__chain__).thru(function(t) {
                                        return i && !t.length && t.push(r), t
                                    })) : this.thru(s)
                                }),
                                i8 = Je(function(t, i, r) {
                                    tc.call(t, r) ? ++t[r] : zn(t, r, 1)
                                }),
                                i4 = wu(Mu),
                                i9 = wu(qu);

                            function Zu(t, i) {
                                return (rE(t) ? mn : iR)(t, x(i, 3))
                            }

                            function Ju(t, i) {
                                return (rE(t) ? function(t, i) {
                                    for (var r = null == t ? 0 : t.length; r-- && !1 !== i(t[r], r, t););
                                    return t
                                } : iS)(t, x(i, 3))
                            }
                            var re = Je(function(t, i, r) {
                                    tc.call(t, r) ? t[r].push(i) : zn(t, r, [i])
                                }),
                                rt = L(function(t, i, r) {
                                    var c = -1,
                                        l = "function" == typeof i,
                                        v = an(t) ? e1(t.length) : [];
                                    return iR(t, function(t) {
                                        v[++c] = l ? cn(i, t, r) : ae(t, i, r)
                                    }), v
                                }),
                                rs = Je(function(t, i, r) {
                                    zn(t, r, i)
                                });

                            function rr(t, i) {
                                return (rE(t) ? G : Vs)(t, x(i, 3))
                            }
                            var ra = Je(function(t, i, r) {
                                    t[r ? 0 : 1].push(i)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                ro = L(function(t, i) {
                                    if (null == t) return [];
                                    var r = i.length;
                                    return r > 1 && rn(t, i[0], i[1]) ? i = [] : r > 2 && rn(i[0], i[1], i[2]) && (i = [i[0]]), tu(t, j(i, 1), [])
                                }),
                                rc = tJ || function() {
                                    return tj.Date.now()
                                };

                            function Xu(t, i, c) {
                                return i = c ? r : i, i = t && null == i ? t.length : i, Kn(t, 128, r, r, r, r, i)
                            }

                            function Qu(t, i) {
                                var l;
                                if ("function" != typeof i) throw new e9(c);
                                return t = R(t),
                                    function() {
                                        return --t > 0 && (l = i.apply(this, arguments)), t <= 1 && (i = r), l
                                    }
                            }
                            var rh = L(function(t, i, r) {
                                    var c = 1;
                                    if (r.length) {
                                        var l = tt(r, qt(rh));
                                        c |= 32
                                    }
                                    return Kn(t, c, i, r, l)
                                }),
                                rl = L(function(t, i, r) {
                                    var c = 3;
                                    if (r.length) {
                                        var l = tt(r, qt(rl));
                                        c |= 32
                                    }
                                    return Kn(i, c, t, r, l)
                                });

                            function na(t, i, l) {
                                var v, _, w, P, C, O, A = 0,
                                    q = !1,
                                    T = !1,
                                    $ = !0;
                                if ("function" != typeof t) throw new e9(c);

                                function I(i) {
                                    var c = v,
                                        l = _;
                                    return v = _ = r, A = i, P = t.apply(l, c)
                                }

                                function y(t) {
                                    var c = t - O,
                                        l = t - A;
                                    return O === r || c >= i || c < 0 || T && l >= w
                                }

                                function D() {
                                    var t, r, c, l = rc();
                                    if (y(l)) return N(l);
                                    C = iM(D, (t = l - O, r = l - A, c = i - t, T ? t4(c, w - r) : c))
                                }

                                function N(t) {
                                    return C = r, $ && v ? I(t) : (v = _ = r, P)
                                }

                                function gn() {
                                    var t, c = rc(),
                                        l = y(c);
                                    if (v = arguments, _ = this, O = c, l) {
                                        if (C === r) return A = t = O, C = iM(D, i), q ? I(t) : P;
                                        if (T) return iq(C), C = iM(D, i), I(O)
                                    }
                                    return C === r && (C = iM(D, i)), P
                                }
                                return i = xn(i) || 0, K(l) && (q = !!l.leading, w = (T = "maxWait" in l) ? t8(xn(l.maxWait) || 0, i) : w, $ = "trailing" in l ? !!l.trailing : $), gn.cancel = function() {
                                    C !== r && iq(C), A = 0, v = O = _ = C = r
                                }, gn.flush = function() {
                                    return C === r ? P : N(rc())
                                }, gn
                            }
                            var rp = L(function(t, i) {
                                    return Gs(t, 1, i)
                                }),
                                rd = L(function(t, i, r) {
                                    return Gs(t, xn(i) || 0, r)
                                });

                            function sr(t, i) {
                                if ("function" != typeof t || null != i && "function" != typeof i) throw new e9(c);
                                var e = function() {
                                    var r = arguments,
                                        c = i ? i.apply(this, r) : r[0],
                                        l = e.cache;
                                    if (l.has(c)) return l.get(c);
                                    var v = t.apply(this, r);
                                    return e.cache = l.set(c, v) || l, v
                                };
                                return e.cache = new(sr.Cache || Gn), e
                            }

                            function ur(t) {
                                if ("function" != typeof t) throw new e9(c);
                                return function() {
                                    var i = arguments;
                                    switch (i.length) {
                                        case 0:
                                            return !t.call(this);
                                        case 1:
                                            return !t.call(this, i[0]);
                                        case 2:
                                            return !t.call(this, i[0], i[1]);
                                        case 3:
                                            return !t.call(this, i[0], i[1], i[2])
                                    }
                                    return !t.apply(this, i)
                                }
                            }
                            sr.Cache = Gn;
                            var rg = L(function(t, i) {
                                    var r = (i = 1 == i.length && rE(i[0]) ? G(i[0], hn(x())) : G(j(i, 1), hn(x()))).length;
                                    return L(function(c) {
                                        for (var l = -1, v = t4(c.length, r); ++l < v;) c[l] = i[l].call(this, c[l]);
                                        return cn(t, this, c)
                                    })
                                }),
                                ry = L(function(t, i) {
                                    var c = tt(i, qt(ry));
                                    return Kn(t, 32, r, i, c)
                                }),
                                rm = L(function(t, i) {
                                    var c = tt(i, qt(rm));
                                    return Kn(t, 64, r, i, c)
                                }),
                                r_ = Yn(function(t, i) {
                                    return Kn(t, 256, r, r, r, i)
                                });

                            function bn(t, i) {
                                return t === i || t != t && i != i
                            }
                            var rw = ke(Qr),
                                rb = ke(function(t, i) {
                                    return t >= i
                                }),
                                rI = Js(function() {
                                    return arguments
                                }()) ? Js : function(t) {
                                    return Y(t) && tc.call(t, "callee") && !tN.call(t, "callee")
                                },
                                rE = e1.isArray,
                                rP = tH ? hn(tH) : function(t) {
                                    return Y(t) && en(t) == eo
                                };

                            function an(t) {
                                return null != t && ar(t.length) && !Jn(t)
                            }

                            function Z(t) {
                                return Y(t) && an(t)
                            }
                            var rx = t3 || Ni,
                                rR = tV ? hn(tV) : function(t) {
                                    return Y(t) && en(t) == q
                                };

                            function Ei(t) {
                                if (!Y(t)) return !1;
                                var i = en(t);
                                return i == T || "[object DOMException]" == i || "string" == typeof t.message && "string" == typeof t.name && !pe(t)
                            }

                            function Jn(t) {
                                if (!K(t)) return !1;
                                var i = en(t);
                                return i == $ || i == k || "[object AsyncFunction]" == i || "[object Proxy]" == i
                            }

                            function ea(t) {
                                return "number" == typeof t && t == R(t)
                            }

                            function ar(t) {
                                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                            }

                            function K(t) {
                                var i = typeof t;
                                return null != t && ("object" == i || "function" == i)
                            }

                            function Y(t) {
                                return null != t && "object" == typeof t
                            }
                            var rS = tK ? hn(tK) : function(t) {
                                return Y(t) && iL(t) == M
                            };

                            function ia(t) {
                                return "number" == typeof t || Y(t) && en(t) == U
                            }

                            function pe(t) {
                                if (!Y(t) || en(t) != J) return !1;
                                var i = tE(t);
                                if (null === i) return !0;
                                var r = tc.call(i, "constructor") && i.constructor;
                                return "function" == typeof r && r instanceof r && to.call(r) == td
                            }
                            var rC = tW ? hn(tW) : function(t) {
                                    return Y(t) && en(t) == B
                                },
                                rO = tZ ? hn(tZ) : function(t) {
                                    return Y(t) && iL(t) == Q
                                };

                            function or(t) {
                                return "string" == typeof t || !rE(t) && Y(t) && en(t) == X
                            }

                            function pn(t) {
                                return "symbol" == typeof t || Y(t) && en(t) == et
                            }
                            var rA = tG ? hn(tG) : function(t) {
                                    return Y(t) && ar(t.length) && !!tO[en(t)]
                                },
                                rN = ke(ni),
                                rq = ke(function(t, i) {
                                    return t <= i
                                });

                            function ua(t) {
                                if (!t) return [];
                                if (an(t)) return or(t) ? On(t) : un(t);
                                if (tL && t[tL]) return function(t) {
                                    for (var i, r = []; !(i = t.next()).done;) r.push(i.value);
                                    return r
                                }(t[tL]());
                                var i = iL(t);
                                return (i == M ? qr : i == Q ? Se : Gt)(t)
                            }

                            function Xn(t) {
                                return t ? (t = xn(t)) === _ || t === -_ ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0
                            }

                            function R(t) {
                                var i = Xn(t),
                                    r = i % 1;
                                return i == i ? r ? i - r : i : 0
                            }

                            function aa(t) {
                                return t ? vt(R(t), 0, 4294967295) : 0
                            }

                            function xn(t) {
                                if ("number" == typeof t) return t;
                                if (pn(t)) return w;
                                if (K(t)) {
                                    var i = "function" == typeof t.valueOf ? t.valueOf() : t;
                                    t = K(i) ? i + "" : i
                                }
                                if ("string" != typeof t) return 0 === t ? t : +t;
                                t = ys(t);
                                var r = eZ.test(t);
                                return r || eJ.test(t) ? tD(t.slice(2), r ? 2 : 8) : eW.test(t) ? w : +t
                            }

                            function oa(t) {
                                return Un(t, on(t))
                            }

                            function W(t) {
                                return null == t ? "" : ln(t)
                            }
                            var rD = Ft(function(t, i) {
                                    if (he(i) || an(i)) {
                                        Un(i, V(i), t);
                                        return
                                    }
                                    for (var r in i) tc.call(i, r) && se(t, r, i[r])
                                }),
                                rT = Ft(function(t, i) {
                                    Un(i, on(i), t)
                                }),
                                rz = Ft(function(t, i, r, c) {
                                    Un(i, on(i), t, c)
                                }),
                                rj = Ft(function(t, i, r, c) {
                                    Un(i, V(i), t, c)
                                }),
                                rL = Yn(Zr),
                                r$ = L(function(t, i) {
                                    t = e6(t);
                                    var c = -1,
                                        l = i.length,
                                        v = l > 2 ? i[2] : r;
                                    for (v && rn(i[0], i[1], v) && (l = 1); ++c < l;)
                                        for (var _ = i[c], w = on(_), P = -1, C = w.length; ++P < C;) {
                                            var O = w[P],
                                                A = t[O];
                                            (A === r || bn(A, ts[O]) && !tc.call(t, O)) && (t[O] = _[O])
                                        }
                                    return t
                                }),
                                rk = L(function(t) {
                                    return t.push(r, yu), cn(rK, r, t)
                                });

                            function Si(t, i, c) {
                                var l = null == t ? r : _t(t, i);
                                return l === r ? c : l
                            }

                            function Oi(t, i) {
                                return null != t && Ru(t, i, Ac)
                            }
                            var rM = Au(function(t, i, r) {
                                    null != i && "function" != typeof i.toString && (i = tp.call(i)), t[i] = r
                                }, bi(fn)),
                                rU = Au(function(t, i, r) {
                                    null != i && "function" != typeof i.toString && (i = tp.call(i)), tc.call(t, i) ? t[i].push(r) : t[i] = [r]
                                }, x),
                                rH = L(ae);

                            function V(t) {
                                return an(t) ? Fs(t) : jr(t)
                            }

                            function on(t) {
                                return an(t) ? Fs(t, !0) : function(t) {
                                    if (!K(t)) return function(t) {
                                        var i = [];
                                        if (null != t)
                                            for (var r in e6(t)) i.push(r);
                                        return i
                                    }(t);
                                    var i = he(t),
                                        r = [];
                                    for (var c in t) "constructor" == c && (i || !tc.call(t, c)) || r.push(c);
                                    return r
                                }(t)
                            }
                            var rV = Ft(function(t, i, r) {
                                    Ke(t, i, r)
                                }),
                                rK = Ft(function(t, i, r, c) {
                                    Ke(t, i, r, c)
                                }),
                                rW = Yn(function(t, i) {
                                    var r = {};
                                    if (null == t) return r;
                                    var c = !1;
                                    i = G(i, function(i) {
                                        return i = st(i, t), c || (c = i.length > 1), i
                                    }), Un(t, pi(t), r), c && (r = An(r, 7, kc));
                                    for (var l = i.length; l--;) si(r, i[l]);
                                    return r
                                }),
                                rZ = Yn(function(t, i) {
                                    return null == t ? {} : eu(t, i, function(i, r) {
                                        return Oi(t, r)
                                    })
                                });

                            function ha(t, i) {
                                if (null == t) return {};
                                var r = G(pi(t), function(t) {
                                    return [t]
                                });
                                return i = x(i), eu(t, r, function(t, r) {
                                    return i(t, r[0])
                                })
                            }
                            var rG = xu(V),
                                rJ = xu(on);

                            function Gt(t) {
                                return null == t ? [] : Mr(t, V(t))
                            }
                            var rF = Mt(function(t, i, r) {
                                return i = i.toLowerCase(), t + (r ? da(i) : i)
                            });

                            function da(t) {
                                return r2(W(t).toLowerCase())
                            }

                            function ga(t) {
                                return (t = W(t)) && t.replace(eB, tF).replace(tI, "")
                            }
                            var rB = Mt(function(t, i, r) {
                                    return t + (r ? "-" : "") + i.toLowerCase()
                                }),
                                rY = Mt(function(t, i, r) {
                                    return t + (r ? " " : "") + i.toLowerCase()
                                }),
                                rQ = mu("toLowerCase"),
                                rX = Mt(function(t, i, r) {
                                    return t + (r ? "_" : "") + i.toLowerCase()
                                }),
                                r0 = Mt(function(t, i, r) {
                                    return t + (r ? " " : "") + r2(i)
                                }),
                                r1 = Mt(function(t, i, r) {
                                    return t + (r ? " " : "") + i.toUpperCase()
                                }),
                                r2 = mu("toUpperCase");

                            function va(t, i, c) {
                                var l;
                                return t = W(t), (i = c ? r : i) === r ? (l = t, tR.test(l)) ? t.match(tP) || [] : t.match(eM) || [] : t.match(i) || []
                            }
                            var r3 = L(function(t, i) {
                                    try {
                                        return cn(t, r, i)
                                    } catch (t) {
                                        return Ei(t) ? t : new e3(t)
                                    }
                                }),
                                r7 = Yn(function(t, i) {
                                    return mn(i, function(i) {
                                        zn(t, i = Wn(i), rh(t[i], t))
                                    }), t
                                });

                            function bi(t) {
                                return function() {
                                    return t
                                }
                            }
                            var r5 = Pu(),
                                r6 = Pu(!0);

                            function fn(t) {
                                return t
                            }

                            function Ti(t) {
                                return Qs("function" == typeof t ? t : An(t, 1))
                            }
                            var r8 = L(function(t, i) {
                                    return function(r) {
                                        return ae(r, t, i)
                                    }
                                }),
                                r4 = L(function(t, i) {
                                    return function(r) {
                                        return ae(t, r, i)
                                    }
                                });

                            function Li(t, i, r) {
                                var c = V(i),
                                    l = ze(i, c);
                                null != r || K(i) && (l.length || !c.length) || (r = i, i = t, t = this, l = ze(i, V(i)));
                                var v = !(K(r) && "chain" in r) || !!r.chain,
                                    _ = Jn(t);
                                return mn(l, function(r) {
                                    var c = i[r];
                                    t[r] = c, _ && (t.prototype[r] = function() {
                                        var i = this.__chain__;
                                        if (v || i) {
                                            var r = t(this.__wrapped__);
                                            return (r.__actions__ = un(this.__actions__)).push({
                                                func: c,
                                                args: arguments,
                                                thisArg: t
                                            }), r.__chain__ = i, r
                                        }
                                        return c.apply(t, nt([this.value()], arguments))
                                    })
                                }), t
                            }

                            function Di() {}
                            var r9 = ci(G),
                                ne = ci(As),
                                nn = ci(Nr);

                            function ma(t) {
                                return _i(t) ? $r(Wn(t)) : function(i) {
                                    return _t(i, t)
                                }
                            }
                            var ns = Cu(),
                                no = Cu(!0);

                            function Hi() {
                                return []
                            }

                            function Ni() {
                                return !1
                            }
                            var nc = Qe(function(t, i) {
                                    return t + i
                                }, 0),
                                nh = hi("ceil"),
                                nl = Qe(function(t, i) {
                                    return t / i
                                }, 1),
                                np = hi("floor"),
                                nd = Qe(function(t, i) {
                                    return t * i
                                }, 1),
                                ng = hi("round"),
                                nf = Qe(function(t, i) {
                                    return t - i
                                }, 0);
                            return a.after = function(t, i) {
                                if ("function" != typeof i) throw new e9(c);
                                return t = R(t),
                                    function() {
                                        if (--t < 1) return i.apply(this, arguments)
                                    }
                            }, a.ary = Xu, a.assign = rD, a.assignIn = rT, a.assignInWith = rz, a.assignWith = rj, a.at = rL, a.before = Qu, a.bind = rh, a.bindAll = r7, a.bindKey = rl, a.castArray = function() {
                                if (!arguments.length) return [];
                                var t = arguments[0];
                                return rE(t) ? t : [t]
                            }, a.chain = Yu, a.chunk = function(t, i, c) {
                                i = (c ? rn(t, i, c) : i === r) ? 1 : t8(R(i), 0);
                                var l = null == t ? 0 : t.length;
                                if (!l || i < 1) return [];
                                for (var v = 0, _ = 0, w = e1(t0(l / i)); v < l;) w[_++] = Cn(t, v, v += i);
                                return w
                            }, a.compact = function(t) {
                                for (var i = -1, r = null == t ? 0 : t.length, c = 0, l = []; ++i < r;) {
                                    var v = t[i];
                                    v && (l[c++] = v)
                                }
                                return l
                            }, a.concat = function() {
                                var t = arguments.length;
                                if (!t) return [];
                                for (var i = e1(t - 1), r = arguments[0], c = t; c--;) i[c - 1] = arguments[c];
                                return nt(rE(r) ? un(r) : [r], j(i, 1))
                            }, a.cond = function(t) {
                                var i = null == t ? 0 : t.length,
                                    r = x();
                                return t = i ? G(t, function(t) {
                                    if ("function" != typeof t[1]) throw new e9(c);
                                    return [r(t[0]), t[1]]
                                }) : [], L(function(r) {
                                    for (var c = -1; ++c < i;) {
                                        var l = t[c];
                                        if (cn(l[0], this, r)) return cn(l[1], this, r)
                                    }
                                })
                            }, a.conforms = function(t) {
                                var i, r;
                                return r = V(i = An(t, 1)),
                                    function(t) {
                                        return Bs(t, i, r)
                                    }
                            }, a.constant = bi, a.countBy = i8, a.create = function(t, i) {
                                var r = ix(t);
                                return null == i ? r : qs(r, i)
                            }, a.curry = function ku(t, i, c) {
                                i = c ? r : i;
                                var l = Kn(t, 8, r, r, r, r, r, i);
                                return l.placeholder = ku.placeholder, l
                            }, a.curryRight = function ju(t, i, c) {
                                i = c ? r : i;
                                var l = Kn(t, 16, r, r, r, r, r, i);
                                return l.placeholder = ju.placeholder, l
                            }, a.debounce = na, a.defaults = r$, a.defaultsDeep = rk, a.defer = rp, a.delay = rd, a.difference = iV, a.differenceBy = iK, a.differenceWith = iW, a.drop = function(t, i, c) {
                                var l = null == t ? 0 : t.length;
                                return l ? Cn(t, (i = c || i === r ? 1 : R(i)) < 0 ? 0 : i, l) : []
                            }, a.dropRight = function(t, i, c) {
                                var l = null == t ? 0 : t.length;
                                return l ? Cn(t, 0, (i = l - (i = c || i === r ? 1 : R(i))) < 0 ? 0 : i) : []
                            }, a.dropRightWhile = function(t, i) {
                                return t && t.length ? Ze(t, x(i, 3), !0, !0) : []
                            }, a.dropWhile = function(t, i) {
                                return t && t.length ? Ze(t, x(i, 3), !0) : []
                            }, a.fill = function(t, i, c, l) {
                                var v = null == t ? 0 : t.length;
                                return v ? (c && "number" != typeof c && rn(t, i, c) && (c = 0, l = v), function(t, i, c, l) {
                                    var v = t.length;
                                    for ((c = R(c)) < 0 && (c = -c > v ? 0 : v + c), (l = l === r || l > v ? v : R(l)) < 0 && (l += v), l = c > l ? 0 : aa(l); c < l;) t[c++] = i;
                                    return t
                                }(t, i, c, l)) : []
                            }, a.filter = function(t, i) {
                                return (rE(t) ? jn : Ks)(t, x(i, 3))
                            }, a.flatMap = function(t, i) {
                                return j(rr(t, i), 1)
                            }, a.flatMapDeep = function(t, i) {
                                return j(rr(t, i), _)
                            }, a.flatMapDepth = function(t, i, c) {
                                return c = c === r ? 1 : R(c), j(rr(t, i), c)
                            }, a.flatten = Bu, a.flattenDeep = function(t) {
                                return (null == t ? 0 : t.length) ? j(t, _) : []
                            }, a.flattenDepth = function(t, i) {
                                return (null == t ? 0 : t.length) ? j(t, i = i === r ? 1 : R(i)) : []
                            }, a.flip = function(t) {
                                return Kn(t, 512)
                            }, a.flow = r5, a.flowRight = r6, a.fromPairs = function(t) {
                                for (var i = -1, r = null == t ? 0 : t.length, c = {}; ++i < r;) {
                                    var l = t[i];
                                    c[l[0]] = l[1]
                                }
                                return c
                            }, a.functions = function(t) {
                                return null == t ? [] : ze(t, V(t))
                            }, a.functionsIn = function(t) {
                                return null == t ? [] : ze(t, on(t))
                            }, a.groupBy = re, a.initial = function(t) {
                                return (null == t ? 0 : t.length) ? Cn(t, 0, -1) : []
                            }, a.intersection = iZ, a.intersectionBy = iG, a.intersectionWith = iJ, a.invert = rM, a.invertBy = rU, a.invokeMap = rt, a.iteratee = Ti, a.keyBy = rs, a.keys = V, a.keysIn = on, a.map = rr, a.mapKeys = function(t, i) {
                                var r = {};
                                return i = x(i, 3), $n(t, function(t, c, l) {
                                    zn(r, i(t, c, l), t)
                                }), r
                            }, a.mapValues = function(t, i) {
                                var r = {};
                                return i = x(i, 3), $n(t, function(t, c, l) {
                                    zn(r, c, i(t, c, l))
                                }), r
                            }, a.matches = function(t) {
                                return ks(An(t, 1))
                            }, a.matchesProperty = function(t, i) {
                                return js(t, An(i, 1))
                            }, a.memoize = sr, a.merge = rV, a.mergeWith = rK, a.method = r8, a.methodOf = r4, a.mixin = Li, a.negate = ur, a.nthArg = function(t) {
                                return t = R(t), L(function(i) {
                                    return nu(i, t)
                                })
                            }, a.omit = rW, a.omitBy = function(t, i) {
                                return ha(t, ur(x(i)))
                            }, a.once = function(t) {
                                return Qu(2, t)
                            }, a.orderBy = function(t, i, c, l) {
                                return null == t ? [] : (rE(i) || (i = null == i ? [] : [i]), rE(c = l ? r : c) || (c = null == c ? [] : [c]), tu(t, i, c))
                            }, a.over = r9, a.overArgs = rg, a.overEvery = ne, a.overSome = nn, a.partial = ry, a.partialRight = rm, a.partition = ra, a.pick = rZ, a.pickBy = ha, a.property = ma, a.propertyOf = function(t) {
                                return function(i) {
                                    return null == t ? r : _t(t, i)
                                }
                            }, a.pull = iF, a.pullAll = zu, a.pullAllBy = function(t, i, r) {
                                return t && t.length && i && i.length ? ti(t, i, x(r, 2)) : t
                            }, a.pullAllWith = function(t, i, c) {
                                return t && t.length && i && i.length ? ti(t, i, r, c) : t
                            }, a.pullAt = iB, a.range = ns, a.rangeRight = no, a.rearg = r_, a.reject = function(t, i) {
                                return (rE(t) ? jn : Ks)(t, ur(x(i, 3)))
                            }, a.remove = function(t, i) {
                                var r = [];
                                if (!(t && t.length)) return r;
                                var c = -1,
                                    l = [],
                                    v = t.length;
                                for (i = x(i, 3); ++c < v;) {
                                    var _ = t[c];
                                    i(_, c, t) && (r.push(_), l.push(c))
                                }
                                return ru(t, l), r
                            }, a.rest = function(t, i) {
                                if ("function" != typeof t) throw new e9(c);
                                return L(t, i = i === r ? i : R(i))
                            }, a.reverse = Ai, a.sampleSize = function(t, i, c) {
                                return i = (c ? rn(t, i, c) : i === r) ? 1 : R(i), (rE(t) ? function(t, i) {
                                    return tr(un(t), vt(i, 0, t.length))
                                } : function(t, i) {
                                    var r = Gt(t);
                                    return tr(r, vt(i, 0, r.length))
                                })(t, i)
                            }, a.set = function(t, i, r) {
                                return null == t ? t : fe(t, i, r)
                            }, a.setWith = function(t, i, c, l) {
                                return l = "function" == typeof l ? l : r, null == t ? t : fe(t, i, c, l)
                            }, a.shuffle = function(t) {
                                return (rE(t) ? function(t) {
                                    return tr(un(t))
                                } : function(t) {
                                    return tr(Gt(t))
                                })(t)
                            }, a.slice = function(t, i, c) {
                                var l = null == t ? 0 : t.length;
                                return l ? (c && "number" != typeof c && rn(t, i, c) ? (i = 0, c = l) : (i = null == i ? 0 : R(i), c = c === r ? l : R(c)), Cn(t, i, c)) : []
                            }, a.sortBy = ro, a.sortedUniq = function(t) {
                                return t && t.length ? su(t) : []
                            }, a.sortedUniqBy = function(t, i) {
                                return t && t.length ? su(t, x(i, 2)) : []
                            }, a.split = function(t, i, c) {
                                return c && "number" != typeof c && rn(t, i, c) && (i = c = r), (c = c === r ? 4294967295 : c >>> 0) ? (t = W(t)) && ("string" == typeof i || null != i && !rC(i)) && !(i = ln(i)) && Lt(t) ? ut(On(t), 0, c) : t.split(i, c) : []
                            }, a.spread = function(t, i) {
                                if ("function" != typeof t) throw new e9(c);
                                return i = null == i ? 0 : t8(R(i), 0), L(function(r) {
                                    var c = r[i],
                                        l = ut(r, 0, i);
                                    return c && nt(l, c), cn(t, this, l)
                                })
                            }, a.tail = function(t) {
                                var i = null == t ? 0 : t.length;
                                return i ? Cn(t, 1, i) : []
                            }, a.take = function(t, i, c) {
                                return t && t.length ? Cn(t, 0, (i = c || i === r ? 1 : R(i)) < 0 ? 0 : i) : []
                            }, a.takeRight = function(t, i, c) {
                                var l = null == t ? 0 : t.length;
                                return l ? Cn(t, (i = l - (i = c || i === r ? 1 : R(i))) < 0 ? 0 : i, l) : []
                            }, a.takeRightWhile = function(t, i) {
                                return t && t.length ? Ze(t, x(i, 3), !1, !0) : []
                            }, a.takeWhile = function(t, i) {
                                return t && t.length ? Ze(t, x(i, 3)) : []
                            }, a.tap = function(t, i) {
                                return i(t), t
                            }, a.throttle = function(t, i, r) {
                                var l = !0,
                                    v = !0;
                                if ("function" != typeof t) throw new e9(c);
                                return K(r) && (l = "leading" in r ? !!r.leading : l, v = "trailing" in r ? !!r.trailing : v), na(t, i, {
                                    leading: l,
                                    maxWait: i,
                                    trailing: v
                                })
                            }, a.thru = er, a.toArray = ua, a.toPairs = rG, a.toPairsIn = rJ, a.toPath = function(t) {
                                return rE(t) ? G(t, Wn) : pn(t) ? [t] : un(iH(W(t)))
                            }, a.toPlainObject = oa, a.transform = function(t, i, r) {
                                var c = rE(t),
                                    l = c || rx(t) || rA(t);
                                if (i = x(i, 4), null == r) {
                                    var v = t && t.constructor;
                                    r = l ? c ? new v : [] : K(t) && Jn(v) ? ix(tE(t)) : {}
                                }
                                return (l ? mn : $n)(t, function(t, c, l) {
                                    return i(r, t, c, l)
                                }), r
                            }, a.unary = function(t) {
                                return Xu(t, 1)
                            }, a.union = iY, a.unionBy = iQ, a.unionWith = iX, a.uniq = function(t) {
                                return t && t.length ? it(t) : []
                            }, a.uniqBy = function(t, i) {
                                return t && t.length ? it(t, x(i, 2)) : []
                            }, a.uniqWith = function(t, i) {
                                return i = "function" == typeof i ? i : r, t && t.length ? it(t, r, i) : []
                            }, a.unset = function(t, i) {
                                return null == t || si(t, i)
                            }, a.unzip = Ci, a.unzipWith = Ku, a.update = function(t, i, r) {
                                return null == t ? t : au(t, i, oi(r))
                            }, a.updateWith = function(t, i, c, l) {
                                return l = "function" == typeof l ? l : r, null == t ? t : au(t, i, oi(c), l)
                            }, a.values = Gt, a.valuesIn = function(t) {
                                return null == t ? [] : Mr(t, on(t))
                            }, a.without = i0, a.words = va, a.wrap = function(t, i) {
                                return ry(oi(i), t)
                            }, a.xor = i1, a.xorBy = i2, a.xorWith = i3, a.zip = i7, a.zipObject = function(t, i) {
                                return fu(t || [], i || [], se)
                            }, a.zipObjectDeep = function(t, i) {
                                return fu(t || [], i || [], fe)
                            }, a.zipWith = i5, a.entries = rG, a.entriesIn = rJ, a.extend = rT, a.extendWith = rz, Li(a, a), a.add = nc, a.attempt = r3, a.camelCase = rF, a.capitalize = da, a.ceil = nh, a.clamp = function(t, i, c) {
                                return c === r && (c = i, i = r), c !== r && (c = (c = xn(c)) == c ? c : 0), i !== r && (i = (i = xn(i)) == i ? i : 0), vt(xn(t), i, c)
                            }, a.clone = function(t) {
                                return An(t, 4)
                            }, a.cloneDeep = function(t) {
                                return An(t, 5)
                            }, a.cloneDeepWith = function(t, i) {
                                return An(t, 5, i = "function" == typeof i ? i : r)
                            }, a.cloneWith = function(t, i) {
                                return An(t, 4, i = "function" == typeof i ? i : r)
                            }, a.conformsTo = function(t, i) {
                                return null == i || Bs(t, i, V(i))
                            }, a.deburr = ga, a.defaultTo = function(t, i) {
                                return null == t || t != t ? i : t
                            }, a.divide = nl, a.endsWith = function(t, i, c) {
                                t = W(t), i = ln(i);
                                var l = t.length,
                                    v = c = c === r ? l : vt(R(c), 0, l);
                                return (c -= i.length) >= 0 && t.slice(c, v) == i
                            }, a.eq = bn, a.escape = function(t) {
                                return (t = W(t)) && eR.test(t) ? t.replace(eP, tB) : t
                            }, a.escapeRegExp = function(t) {
                                return (t = W(t)) && eT.test(t) ? t.replace(eD, "\\$&") : t
                            }, a.every = function(t, i, c) {
                                var l = rE(t) ? As : mc;
                                return c && rn(t, i, c) && (i = r), l(t, x(i, 3))
                            }, a.find = i4, a.findIndex = Mu, a.findKey = function(t, i) {
                                return Cs(t, x(i, 3), $n)
                            }, a.findLast = i9, a.findLastIndex = qu, a.findLastKey = function(t, i) {
                                return Cs(t, x(i, 3), Xr)
                            }, a.floor = np, a.forEach = Zu, a.forEachRight = Ju, a.forIn = function(t, i) {
                                return null == t ? t : iC(t, x(i, 3), on)
                            }, a.forInRight = function(t, i) {
                                return null == t ? t : iO(t, x(i, 3), on)
                            }, a.forOwn = function(t, i) {
                                return t && $n(t, x(i, 3))
                            }, a.forOwnRight = function(t, i) {
                                return t && Xr(t, x(i, 3))
                            }, a.get = Si, a.gt = rw, a.gte = rb, a.has = function(t, i) {
                                return null != t && Ru(t, i, Pc)
                            }, a.hasIn = Oi, a.head = Gu, a.identity = fn, a.includes = function(t, i, r, c) {
                                t = an(t) ? t : Gt(t), r = r && !c ? R(r) : 0;
                                var l = t.length;
                                return r < 0 && (r = t8(l + r, 0)), or(t) ? r <= l && t.indexOf(i, r) > -1 : !!l && Tt(t, i, r) > -1
                            }, a.indexOf = function(t, i, r) {
                                var c = null == t ? 0 : t.length;
                                if (!c) return -1;
                                var l = null == r ? 0 : R(r);
                                return l < 0 && (l = t8(c + l, 0)), Tt(t, i, l)
                            }, a.inRange = function(t, i, c) {
                                var l, v, _;
                                return i = Xn(i), c === r ? (c = i, i = 0) : c = Xn(c), (l = t = xn(t)) >= t4(v = i, _ = c) && l < t8(v, _)
                            }, a.invoke = rH, a.isArguments = rI, a.isArray = rE, a.isArrayBuffer = rP, a.isArrayLike = an, a.isArrayLikeObject = Z, a.isBoolean = function(t) {
                                return !0 === t || !1 === t || Y(t) && en(t) == A
                            }, a.isBuffer = rx, a.isDate = rR, a.isElement = function(t) {
                                return Y(t) && 1 === t.nodeType && !pe(t)
                            }, a.isEmpty = function(t) {
                                if (null == t) return !0;
                                if (an(t) && (rE(t) || "string" == typeof t || "function" == typeof t.splice || rx(t) || rA(t) || rI(t))) return !t.length;
                                var i = iL(t);
                                if (i == M || i == Q) return !t.size;
                                if (he(t)) return !jr(t).length;
                                for (var r in t)
                                    if (tc.call(t, r)) return !1;
                                return !0
                            }, a.isEqual = function(t, i) {
                                return oe(t, i)
                            }, a.isEqualWith = function(t, i, c) {
                                var l = (c = "function" == typeof c ? c : r) ? c(t, i) : r;
                                return l === r ? oe(t, i, r, c) : !!l
                            }, a.isError = Ei, a.isFinite = function(t) {
                                return "number" == typeof t && t7(t)
                            }, a.isFunction = Jn, a.isInteger = ea, a.isLength = ar, a.isMap = rS, a.isMatch = function(t, i) {
                                return t === i || kr(t, i, gi(i))
                            }, a.isMatchWith = function(t, i, c) {
                                return c = "function" == typeof c ? c : r, kr(t, i, gi(i), c)
                            }, a.isNaN = function(t) {
                                return ia(t) && t != +t
                            }, a.isNative = function(t) {
                                if (i$(t)) throw new e3("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return Xs(t)
                            }, a.isNil = function(t) {
                                return null == t
                            }, a.isNull = function(t) {
                                return null === t
                            }, a.isNumber = ia, a.isObject = K, a.isObjectLike = Y, a.isPlainObject = pe, a.isRegExp = rC, a.isSafeInteger = function(t) {
                                return ea(t) && t >= -9007199254740991 && t <= 9007199254740991
                            }, a.isSet = rO, a.isString = or, a.isSymbol = pn, a.isTypedArray = rA, a.isUndefined = function(t) {
                                return t === r
                            }, a.isWeakMap = function(t) {
                                return Y(t) && iL(t) == es
                            }, a.isWeakSet = function(t) {
                                return Y(t) && "[object WeakSet]" == en(t)
                            }, a.join = function(t, i) {
                                return null == t ? "" : t5.call(t, i)
                            }, a.kebabCase = rB, a.last = In, a.lastIndexOf = function(t, i, c) {
                                var l = null == t ? 0 : t.length;
                                if (!l) return -1;
                                var v = l;
                                return c !== r && (v = (v = R(c)) < 0 ? t8(l + v, 0) : t4(v, l - 1)), i == i ? function(t, i, r) {
                                    for (var c = r + 1; c-- && t[c] !== i;);
                                    return c
                                }(t, i, v) : ye(t, Is, v, !0)
                            }, a.lowerCase = rY, a.lowerFirst = rQ, a.lt = rN, a.lte = rq, a.max = function(t) {
                                return t && t.length ? Ge(t, fn, Qr) : r
                            }, a.maxBy = function(t, i) {
                                return t && t.length ? Ge(t, x(i, 2), Qr) : r
                            }, a.mean = function(t) {
                                return xs(t, fn)
                            }, a.meanBy = function(t, i) {
                                return xs(t, x(i, 2))
                            }, a.min = function(t) {
                                return t && t.length ? Ge(t, fn, ni) : r
                            }, a.minBy = function(t, i) {
                                return t && t.length ? Ge(t, x(i, 2), ni) : r
                            }, a.stubArray = Hi, a.stubFalse = Ni, a.stubObject = function() {
                                return {}
                            }, a.stubString = function() {
                                return ""
                            }, a.stubTrue = function() {
                                return !0
                            }, a.multiply = nd, a.nth = function(t, i) {
                                return t && t.length ? nu(t, R(i)) : r
                            }, a.noConflict = function() {
                                return tj._ === this && (tj._ = tg), this
                            }, a.noop = Di, a.now = rc, a.pad = function(t, i, r) {
                                t = W(t);
                                var c = (i = R(i)) ? Dt(t) : 0;
                                if (!i || c >= i) return t;
                                var l = (i - c) / 2;
                                return Ve(t1(l), r) + t + Ve(t0(l), r)
                            }, a.padEnd = function(t, i, r) {
                                t = W(t);
                                var c = (i = R(i)) ? Dt(t) : 0;
                                return i && c < i ? t + Ve(i - c, r) : t
                            }, a.padStart = function(t, i, r) {
                                t = W(t);
                                var c = (i = R(i)) ? Dt(t) : 0;
                                return i && c < i ? Ve(i - c, r) + t : t
                            }, a.parseInt = function(t, i, r) {
                                return r || null == i ? i = 0 : i && (i = +i), ie(W(t).replace(ez, ""), i || 0)
                            }, a.random = function(t, i, c) {
                                if (c && "boolean" != typeof c && rn(t, i, c) && (i = c = r), c === r && ("boolean" == typeof i ? (c = i, i = r) : "boolean" == typeof t && (c = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = Xn(t), i === r ? (i = t, t = 0) : i = Xn(i)), t > i) {
                                    var l = t;
                                    t = i, i = l
                                }
                                if (c || t % 1 || i % 1) {
                                    var v = ir();
                                    return t4(t + v * (i - t + tq("1e-" + ((v + "").length - 1))), i)
                                }
                                return ei(t, i)
                            }, a.reduce = function(t, i, r) {
                                var c = rE(t) ? Hr : Es,
                                    l = arguments.length < 3;
                                return c(t, x(i, 4), r, l, iR)
                            }, a.reduceRight = function(t, i, r) {
                                var c = rE(t) ? jo : Es,
                                    l = arguments.length < 3;
                                return c(t, x(i, 4), r, l, iS)
                            }, a.repeat = function(t, i, c) {
                                return i = (c ? rn(t, i, c) : i === r) ? 1 : R(i), ri(W(t), i)
                            }, a.replace = function() {
                                var t = arguments,
                                    i = W(t[0]);
                                return t.length < 3 ? i : i.replace(t[1], t[2])
                            }, a.result = function(t, i, c) {
                                i = st(i, t);
                                var l = -1,
                                    v = i.length;
                                for (v || (v = 1, t = r); ++l < v;) {
                                    var _ = null == t ? r : t[Wn(i[l])];
                                    _ === r && (l = v, _ = c), t = Jn(_) ? _.call(t) : _
                                }
                                return t
                            }, a.round = ng, a.runInContext = h, a.sample = function(t) {
                                return (rE(t) ? Ms : function(t) {
                                    return Ms(Gt(t))
                                })(t)
                            }, a.size = function(t) {
                                if (null == t) return 0;
                                if (an(t)) return or(t) ? Dt(t) : t.length;
                                var i = iL(t);
                                return i == M || i == Q ? t.size : jr(t).length
                            }, a.snakeCase = rX, a.some = function(t, i, c) {
                                var l = rE(t) ? Nr : Mc;
                                return c && rn(t, i, c) && (i = r), l(t, x(i, 3))
                            }, a.sortedIndex = function(t, i) {
                                return Ye(t, i)
                            }, a.sortedIndexBy = function(t, i, r) {
                                return ii(t, i, x(r, 2))
                            }, a.sortedIndexOf = function(t, i) {
                                var r = null == t ? 0 : t.length;
                                if (r) {
                                    var c = Ye(t, i);
                                    if (c < r && bn(t[c], i)) return c
                                }
                                return -1
                            }, a.sortedLastIndex = function(t, i) {
                                return Ye(t, i, !0)
                            }, a.sortedLastIndexBy = function(t, i, r) {
                                return ii(t, i, x(r, 2), !0)
                            }, a.sortedLastIndexOf = function(t, i) {
                                if (null == t ? 0 : t.length) {
                                    var r = Ye(t, i, !0) - 1;
                                    if (bn(t[r], i)) return r
                                }
                                return -1
                            }, a.startCase = r0, a.startsWith = function(t, i, r) {
                                return t = W(t), r = null == r ? 0 : vt(R(r), 0, t.length), i = ln(i), t.slice(r, r + i.length) == i
                            }, a.subtract = nf, a.sum = function(t) {
                                return t && t.length ? Wr(t, fn) : 0
                            }, a.sumBy = function(t, i) {
                                return t && t.length ? Wr(t, x(i, 2)) : 0
                            }, a.template = function(t, i, c) {
                                var l = a.templateSettings;
                                c && rn(t, i, c) && (i = r), t = W(t), i = rz({}, i, l, Eu);
                                var v, _, w = rz({}, i.imports, l.imports, Eu),
                                    P = V(w),
                                    C = Mr(w, P),
                                    O = 0,
                                    A = i.interpolate || eY,
                                    q = "__p += '",
                                    T = e8((i.escape || eY).source + "|" + A.source + "|" + (A === eO ? eV : eY).source + "|" + (i.evaluate || eY).source + "|$", "g"),
                                    $ = "//# sourceURL=" + (tc.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tC + "]") + `
`;
                                t.replace(T, function(i, r, c, l, w, P) {
                                    return c || (c = l), q += t.slice(O, P).replace(eQ, cf), r && (v = !0, q += `' +
__e(` + r + `) +
'`), w && (_ = !0, q += `';
` + w + `;
__p += '`), c && (q += `' +
((__t = (` + c + `)) == null ? '' : __t) +
'`), O = P + i.length, i
                                }), q += `';
`;
                                var k = tc.call(i, "variable") && i.variable;
                                if (k) {
                                    if (eU.test(k)) throw new e3("Invalid `variable` option passed into `_.template`")
                                } else q = `with (obj) {
` + q + `
}
`;
                                q = (_ ? q.replace(ew, "") : q).replace(eb, "$1").replace(eI, "$1;"), q = "function(" + (k || "obj") + `) {
` + (k ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (_ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + q + `return __p
}`;
                                var M = r3(function() {
                                    return e7(P, $ + "return " + q).apply(r, C)
                                });
                                if (M.source = q, Ei(M)) throw M;
                                return M
                            }, a.times = function(t, i) {
                                if ((t = R(t)) < 1 || t > 9007199254740991) return [];
                                var r = 4294967295,
                                    c = t4(t, 4294967295);
                                i = x(i), t -= 4294967295;
                                for (var l = Fr(c, i); ++r < t;) i(r);
                                return l
                            }, a.toFinite = Xn, a.toInteger = R, a.toLength = aa, a.toLower = function(t) {
                                return W(t).toLowerCase()
                            }, a.toNumber = xn, a.toSafeInteger = function(t) {
                                return t ? vt(R(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
                            }, a.toString = W, a.toUpper = function(t) {
                                return W(t).toUpperCase()
                            }, a.trim = function(t, i, c) {
                                if ((t = W(t)) && (c || i === r)) return ys(t);
                                if (!t || !(i = ln(i))) return t;
                                var l = On(t),
                                    v = On(i),
                                    _ = Ss(l, v),
                                    w = Os(l, v) + 1;
                                return ut(l, _, w).join("")
                            }, a.trimEnd = function(t, i, c) {
                                if ((t = W(t)) && (c || i === r)) return t.slice(0, bs(t) + 1);
                                if (!t || !(i = ln(i))) return t;
                                var l = On(t),
                                    v = Os(l, On(i)) + 1;
                                return ut(l, 0, v).join("")
                            }, a.trimStart = function(t, i, c) {
                                if ((t = W(t)) && (c || i === r)) return t.replace(ez, "");
                                if (!t || !(i = ln(i))) return t;
                                var l = On(t),
                                    v = Ss(l, On(i));
                                return ut(l, v).join("")
                            }, a.truncate = function(t, i) {
                                var c = 30,
                                    l = "...";
                                if (K(i)) {
                                    var v = "separator" in i ? i.separator : v;
                                    c = "length" in i ? R(i.length) : c, l = "omission" in i ? ln(i.omission) : l
                                }
                                var _ = (t = W(t)).length;
                                if (Lt(t)) {
                                    var w = On(t);
                                    _ = w.length
                                }
                                if (c >= _) return t;
                                var P = c - Dt(l);
                                if (P < 1) return l;
                                var C = w ? ut(w, 0, P).join("") : t.slice(0, P);
                                if (v === r) return C + l;
                                if (w && (P += C.length - P), rC(v)) {
                                    if (t.slice(P).search(v)) {
                                        var O, A = C;
                                        for (v.global || (v = e8(v.source, W(eK.exec(v)) + "g")), v.lastIndex = 0; O = v.exec(A);) var q = O.index;
                                        C = C.slice(0, q === r ? P : q)
                                    }
                                } else if (t.indexOf(ln(v), P) != P) {
                                    var T = C.lastIndexOf(v);
                                    T > -1 && (C = C.slice(0, T))
                                }
                                return C + l
                            }, a.unescape = function(t) {
                                return (t = W(t)) && ex.test(t) ? t.replace(eE, tQ) : t
                            }, a.uniqueId = function(t) {
                                var i = ++th;
                                return W(t) + i
                            }, a.upperCase = r1, a.upperFirst = r2, a.each = Zu, a.eachRight = Ju, a.first = Gu, Li(a, (e0 = {}, $n(a, function(t, i) {
                                tc.call(a.prototype, i) || (e0[i] = t)
                            }), e0), {
                                chain: !1
                            }), a.VERSION = "4.17.21", mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                                a[t].placeholder = a
                            }), mn(["drop", "take"], function(t, i) {
                                H.prototype[t] = function(c) {
                                    c = c === r ? 1 : t8(R(c), 0);
                                    var l = this.__filtered__ && !i ? new H(this) : this.clone();
                                    return l.__filtered__ ? l.__takeCount__ = t4(c, l.__takeCount__) : l.__views__.push({
                                        size: t4(c, 4294967295),
                                        type: t + (l.__dir__ < 0 ? "Right" : "")
                                    }), l
                                }, H.prototype[t + "Right"] = function(i) {
                                    return this.reverse()[t](i).reverse()
                                }
                            }), mn(["filter", "map", "takeWhile"], function(t, i) {
                                var r = i + 1,
                                    c = 1 == r || 3 == r;
                                H.prototype[t] = function(t) {
                                    var i = this.clone();
                                    return i.__iteratees__.push({
                                        iteratee: x(t, 3),
                                        type: r
                                    }), i.__filtered__ = i.__filtered__ || c, i
                                }
                            }), mn(["head", "last"], function(t, i) {
                                var r = "take" + (i ? "Right" : "");
                                H.prototype[t] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), mn(["initial", "tail"], function(t, i) {
                                var r = "drop" + (i ? "" : "Right");
                                H.prototype[t] = function() {
                                    return this.__filtered__ ? new H(this) : this[r](1)
                                }
                            }), H.prototype.compact = function() {
                                return this.filter(fn)
                            }, H.prototype.find = function(t) {
                                return this.filter(t).head()
                            }, H.prototype.findLast = function(t) {
                                return this.reverse().find(t)
                            }, H.prototype.invokeMap = L(function(t, i) {
                                return "function" == typeof t ? new H(this) : this.map(function(r) {
                                    return ae(r, t, i)
                                })
                            }), H.prototype.reject = function(t) {
                                return this.filter(ur(x(t)))
                            }, H.prototype.slice = function(t, i) {
                                t = R(t);
                                var c = this;
                                return c.__filtered__ && (t > 0 || i < 0) ? new H(c) : (t < 0 ? c = c.takeRight(-t) : t && (c = c.drop(t)), i !== r && (c = (i = R(i)) < 0 ? c.dropRight(-i) : c.take(i - t)), c)
                            }, H.prototype.takeRightWhile = function(t) {
                                return this.reverse().takeWhile(t).reverse()
                            }, H.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, $n(H.prototype, function(t, i) {
                                var c = /^(?:filter|find|map|reject)|While$/.test(i),
                                    l = /^(?:head|last)$/.test(i),
                                    v = a[l ? "take" + ("last" == i ? "Right" : "") : i],
                                    _ = l || /^find/.test(i);
                                v && (a.prototype[i] = function() {
                                    var i = this.__wrapped__,
                                        w = l ? [1] : arguments,
                                        P = i instanceof H,
                                        C = w[0],
                                        O = P || rE(i),
                                        m = function(t) {
                                            var i = v.apply(a, nt([t], w));
                                            return l && A ? i[0] : i
                                        };
                                    O && c && "function" == typeof C && 1 != C.length && (P = O = !1);
                                    var A = this.__chain__,
                                        q = !!this.__actions__.length,
                                        T = _ && !A,
                                        $ = P && !q;
                                    if (!_ && O) {
                                        i = $ ? i : new H(this);
                                        var k = t.apply(i, w);
                                        return k.__actions__.push({
                                            func: er,
                                            args: [m],
                                            thisArg: r
                                        }), new Pn(k, A)
                                    }
                                    return T && $ ? t.apply(this, w) : (k = this.thru(m), T ? l ? k.value()[0] : k.value() : k)
                                })
                            }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                                var i = te[t],
                                    r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                                    c = /^(?:pop|shift)$/.test(t);
                                a.prototype[t] = function() {
                                    var t = arguments;
                                    if (c && !this.__chain__) {
                                        var l = this.value();
                                        return i.apply(rE(l) ? l : [], t)
                                    }
                                    return this[r](function(r) {
                                        return i.apply(rE(r) ? r : [], t)
                                    })
                                }
                            }), $n(H.prototype, function(t, i) {
                                var r = a[i];
                                if (r) {
                                    var c = r.name + "";
                                    tc.call(ig, c) || (ig[c] = []), ig[c].push({
                                        name: i,
                                        func: r
                                    })
                                }
                            }), ig[Xe(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], H.prototype.clone = function() {
                                var t = new H(this.__wrapped__);
                                return t.__actions__ = un(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = un(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = un(this.__views__), t
                            }, H.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var t = new H(this);
                                    t.__dir__ = -1, t.__filtered__ = !0
                                } else t = this.clone(), t.__dir__ *= -1;
                                return t
                            }, H.prototype.value = function() {
                                var t = this.__wrapped__.value(),
                                    i = this.__dir__,
                                    r = rE(t),
                                    c = i < 0,
                                    l = r ? t.length : 0,
                                    v = function(t, i, r) {
                                        for (var c = -1, l = r.length; ++c < l;) {
                                            var v = r[c],
                                                _ = v.size;
                                            switch (v.type) {
                                                case "drop":
                                                    t += _;
                                                    break;
                                                case "dropRight":
                                                    i -= _;
                                                    break;
                                                case "take":
                                                    i = t4(i, t + _);
                                                    break;
                                                case "takeRight":
                                                    t = t8(t, i - _)
                                            }
                                        }
                                        return {
                                            start: t,
                                            end: i
                                        }
                                    }(0, l, this.__views__),
                                    _ = v.start,
                                    w = v.end,
                                    P = w - _,
                                    C = c ? w : _ - 1,
                                    O = this.__iteratees__,
                                    A = O.length,
                                    q = 0,
                                    T = t4(P, this.__takeCount__);
                                if (!r || !c && l == P && T == P) return ou(t, this.__actions__);
                                var $ = [];
                                e: for (; P-- && q < T;) {
                                    C += i;
                                    for (var k = -1, M = t[C]; ++k < A;) {
                                        var U = O[k],
                                            J = U.iteratee,
                                            F = U.type,
                                            B = J(M);
                                        if (2 == F) M = B;
                                        else if (!B) {
                                            if (1 == F) continue e;
                                            break e
                                        }
                                    }
                                    $[q++] = M
                                }
                                return $
                            }, a.prototype.at = i6, a.prototype.chain = function() {
                                return Yu(this)
                            }, a.prototype.commit = function() {
                                return new Pn(this.value(), this.__chain__)
                            }, a.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = ua(this.value()));
                                var t = this.__index__ >= this.__values__.length,
                                    i = t ? r : this.__values__[this.__index__++];
                                return {
                                    done: t,
                                    value: i
                                }
                            }, a.prototype.plant = function(t) {
                                for (var i, c = this; c instanceof qe;) {
                                    var l = Fu(c);
                                    l.__index__ = 0, l.__values__ = r, i ? v.__wrapped__ = l : i = l;
                                    var v = l;
                                    c = c.__wrapped__
                                }
                                return v.__wrapped__ = t, i
                            }, a.prototype.reverse = function() {
                                var t = this.__wrapped__;
                                if (t instanceof H) {
                                    var i = t;
                                    return this.__actions__.length && (i = new H(this)), (i = i.reverse()).__actions__.push({
                                        func: er,
                                        args: [Ai],
                                        thisArg: r
                                    }), new Pn(i, this.__chain__)
                                }
                                return this.thru(Ai)
                            }, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = function() {
                                return ou(this.__wrapped__, this.__actions__)
                            }, a.prototype.first = a.prototype.head, tL && (a.prototype[tL] = function() {
                                return this
                            }), a
                        }();
                    t$ ? ((t$.exports = tX)._ = tX, tL._ = tX) : tj._ = tX
                }).call(tY)
            }(tQ, tQ.exports);
            var tX = Object.defineProperty,
                t0 = Object.defineProperties,
                t1 = Object.getOwnPropertyDescriptors,
                t2 = Object.getOwnPropertySymbols,
                t3 = Object.prototype.hasOwnProperty,
                t7 = Object.prototype.propertyIsEnumerable,
                ya = (t, i, r) => i in t ? tX(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                index_es_cr = (t, i) => {
                    for (var r in i || (i = {})) t3.call(i, r) && ya(t, r, i[r]);
                    if (t2)
                        for (var r of t2(i)) t7.call(i, r) && ya(t, r, i[r]);
                    return t
                },
                Yg = (t, i) => t0(t, t1(i));

            function index_es_ft(t, i, r) {
                var c;
                let l = (0, v.DQ)(t);
                return (null == (c = i.rpcMap) ? void 0 : c[l.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${l.namespace}:${l.reference}&projectId=${r}`
            }

            function index_es_Ct(t) {
                return t.includes(":") ? t.split(":")[1] : t
            }

            function Sa(t) {
                return t.map(t => `${t.split(":")[0]}:${t.split(":")[1]}`)
            }

            function Oa(t) {
                var i, r, c, l;
                let _ = {};
                if (!(0, v.L5)(t)) return _;
                for (let [w, P] of Object.entries(t)) {
                    let t = (0, v.gp)(w) ? [w] : P.chains,
                        C = P.methods || [],
                        O = P.events || [],
                        A = P.rpcMap || {},
                        q = (0, v.M)(w);
                    _[q] = Yg(index_es_cr(index_es_cr({}, _[q]), P), {
                        chains: (0, v.eG)(t, null == (i = _[q]) ? void 0 : i.chains),
                        methods: (0, v.eG)(C, null == (r = _[q]) ? void 0 : r.methods),
                        events: (0, v.eG)(O, null == (c = _[q]) ? void 0 : c.events),
                        rpcMap: index_es_cr(index_es_cr({}, A), null == (l = _[q]) ? void 0 : l.rpcMap)
                    })
                }
                return _
            }

            function Xg(t) {
                return t.includes(":") ? t.split(":")[2] : t
            }

            function index_es_Wi(t) {
                return "number" == typeof t ? t : t.includes("0x") ? parseInt(t, 16) : t.includes(":") ? Number(t.split(":")[1]) : Number(t)
            }
            let t5 = {},
                z = t => t5[t],
                Fi = (t, i) => {
                    t5[t] = i
                };
            let Vg = class Vg {
                constructor(t) {
                    this.name = "polkadot", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(t, i), this.chainId = t, this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t && t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        let c = index_es_Ct(i);
                        t[c] = this.createHttpProvider(c, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(t, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            let kg = class kg {
                constructor(t) {
                    this.name = "eip155", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(t) {
                    switch (t.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(t);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(parseInt(t), i), this.chainId = parseInt(t), this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.HttpConnection(r, z("disableProviderPing")))
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        let c = parseInt(index_es_Ct(i));
                        t[c] = this.createHttpProvider(c, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let t = this.chainId,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                async handleSwitchChain(t) {
                    var i, r;
                    let c = t.request.params ? null == (i = t.request.params[0]) ? void 0 : i.chainId : "0x0";
                    c = c.startsWith("0x") ? c : `0x${c}`;
                    let l = parseInt(c, 16);
                    if (this.isChainApproved(l)) this.setDefaultChain(`${l}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: t.topic,
                        request: {
                            method: t.request.method,
                            params: [{
                                chainId: c
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${l}`);
                    else throw Error(`Failed to switch to chain 'eip155:${l}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(t) {
                    return this.namespace.chains.includes(`${this.name}:${t}`)
                }
            };
            let jg = class jg {
                constructor(t) {
                    this.name = "solana", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(t, i), this.chainId = t, this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        let c = index_es_Ct(i);
                        t[c] = this.createHttpProvider(c, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(t, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            let nv = class nv {
                constructor(t) {
                    this.name = "cosmos", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(t, i), this.chainId = t, this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        let c = index_es_Ct(i);
                        t[c] = this.createHttpProvider(c, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(t, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            let tv = class tv {
                constructor(t) {
                    this.name = "cip34", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(t, i), this.chainId = t, this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        let r = this.getCardanoRPCUrl(i),
                            c = index_es_Ct(i);
                        t[c] = this.createHttpProvider(c, r)
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                getCardanoRPCUrl(t) {
                    let i = this.namespace.rpcMap;
                    if (i) return i[t]
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || this.getCardanoRPCUrl(t);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            let ev = class ev {
                constructor(t) {
                    this.name = "elrond", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(t, i), this.chainId = t, this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        let c = index_es_Ct(i);
                        t[c] = this.createHttpProvider(c, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(t, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            let rv = class rv {
                constructor(t) {
                    this.name = "multiversx", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    this.httpProviders[t] || this.setHttpProvider(t, i), this.chainId = t, this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        let c = index_es_Ct(i);
                        t[c] = this.createHttpProvider(c, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(t, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                    return new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            let iv = class iv {
                constructor(t) {
                    this.name = "near", this.namespace = t.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let t = this.namespace.chains[0];
                    if (!t) throw Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, i) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        let r = i || index_es_ft(`${this.name}:${t}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(tB.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let t = this.namespace.accounts;
                    return t && t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    let t = {};
                    return this.namespace.chains.forEach(i => {
                        var r;
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[i])
                    }), t
                }
                getHttpProvider() {
                    let t = `${this.name}:${this.chainId}`,
                        i = this.httpProviders[t];
                    if (typeof i > "u") throw Error(`JSON-RPC provider for ${t} not found`);
                    return i
                }
                setHttpProvider(t, i) {
                    let r = this.createHttpProvider(t, i);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, i) {
                    let r = i || index_es_ft(t, this.namespace);
                    return typeof r > "u" ? void 0 : new $.JsonRpcProvider(new tG.default(r, z("disableProviderPing")))
                }
            };
            var t6 = Object.defineProperty,
                t8 = Object.defineProperties,
                t4 = Object.getOwnPropertyDescriptors,
                t9 = Object.getOwnPropertySymbols,
                ie = Object.prototype.hasOwnProperty,
                ir = Object.prototype.propertyIsEnumerable,
                Ta = (t, i, r) => i in t ? t6(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                index_es_hr = (t, i) => {
                    for (var r in i || (i = {})) ie.call(i, r) && Ta(t, r, i[r]);
                    if (t9)
                        for (var r of t9(i)) ir.call(i, r) && Ta(t, r, i[r]);
                    return t
                },
                Mi = (t, i) => t8(t, t4(i));
            let index_es_lr = class index_es_lr {
                constructor(t) {
                    this.events = new(l()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = "u" > typeof t ? .logger && "string" != typeof t ? .logger ? t.logger : (0, P.pino)((0, P.getDefaultLoggerOptions)({
                        level: t ? .logger || tJ
                    })), this.disableProviderPing = t ? .disableProviderPing || !1
                }
                static async init(t) {
                    let i = new index_es_lr(t);
                    return await i.initialize(), i
                }
                async request(t, i) {
                    let [r, c] = this.validateChain(i);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: index_es_hr({}, t),
                        chainId: `${r}:${c}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(t, i, r) {
                    this.request(t, r).then(t => i(null, t)).catch(t => i(t, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var t;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (t = this.session) ? void 0 : t.topic,
                        reason: (0, v.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(t) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
                }
                on(t, i) {
                    this.events.on(t, i)
                }
                once(t, i) {
                    this.events.once(t, i)
                }
                removeListener(t, i) {
                    this.events.removeListener(t, i)
                }
                off(t, i) {
                    this.events.off(t, i)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(t) {
                    this.shouldAbortPairingAttempt = !1;
                    let i = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (i >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: c
                        } = await this.client.connect({
                            pairingTopic: t,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await c().then(t => {
                            this.session = t, this.namespaces || (this.namespaces = function(t) {
                                let i = {};
                                for (let [r, c] of Object.entries(t)) {
                                    let t = c.methods || [],
                                        l = c.events || [],
                                        _ = c.accounts || [],
                                        w = (0, v.gp)(r) ? [r] : c.chains ? c.chains : Sa(c.accounts);
                                    i[r] = {
                                        chains: w,
                                        methods: t,
                                        events: l,
                                        accounts: _
                                    }
                                }
                                return i
                            }(t.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(t => {
                            if (t.message !== tz) throw t;
                            i++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(t, i) {
                    try {
                        if (!this.session) return;
                        let [r, c] = this.validateChain(t);
                        this.getProvider(r).setDefaultChain(c, i)
                    } catch (t) {
                        if (!/Please call connect/.test(t.message)) throw t
                    }
                }
                async cleanupPendingPairings(t = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let i = this.client.pairing.getAll();
                    if ((0, v.qt)(i)) {
                        for (let r of i) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${i.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let t = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await index_es_Q.init({
                        logger: this.providerOpts.logger || tJ,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let t = [...new Set(Object.keys(this.session.namespaces).map(t => (0, v.M)(t)))];
                    Fi("client", this.client), Fi("events", this.events), Fi("disableProviderPing", this.disableProviderPing), t.forEach(t => {
                        if (!this.session) return;
                        let i = function(t, i) {
                                let r = Object.keys(i.namespaces).filter(i => i.includes(t));
                                if (!r.length) return [];
                                let c = [];
                                return r.forEach(t => {
                                    let r = i.namespaces[t].accounts;
                                    c.push(...r)
                                }), c
                            }(t, this.session),
                            r = Sa(i),
                            c = function(t = {}, i = {}) {
                                let r = Oa(t),
                                    c = Oa(i);
                                return tQ.exports.merge(r, c)
                            }(this.namespaces, this.optionalNamespaces),
                            l = Mi(index_es_hr({}, c[t]), {
                                accounts: i,
                                chains: r
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new kg({
                                    namespace: l
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new jg({
                                    namespace: l
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new nv({
                                    namespace: l
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new Vg({
                                    namespace: l
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new tv({
                                    namespace: l
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new ev({
                                    namespace: l
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new rv({
                                    namespace: l
                                });
                                break;
                            case "near":
                                this.rpcProviders[t] = new iv({
                                    namespace: l
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", t => {
                        this.events.emit("session_ping", t)
                    }), this.client.on("session_event", t => {
                        let {
                            params: i
                        } = t, {
                            event: r
                        } = i;
                        if ("accountsChanged" === r.name) {
                            let t = r.data;
                            t && (0, v.qt)(t) && this.events.emit("accountsChanged", t.map(Xg))
                        } else if ("chainChanged" === r.name) {
                            let t = i.chainId,
                                r = i.event.data,
                                c = (0, v.M)(t),
                                l = index_es_Wi(t) !== index_es_Wi(r) ? `${c}:${index_es_Wi(r)}` : t;
                            this.onChainChanged(l)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", t)
                    }), this.client.on("session_update", ({
                        topic: t,
                        params: i
                    }) => {
                        var r;
                        let {
                            namespaces: c
                        } = i, l = null == (r = this.client) ? void 0 : r.session.get(t);
                        this.session = Mi(index_es_hr({}, l), {
                            namespaces: c
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: i
                        })
                    }), this.client.on("session_delete", async t => {
                        await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Mi(index_es_hr({}, (0, v.D6)("USER_DISCONNECTED")), {
                            data: t.topic
                        }))
                    }), this.on(tB.DEFAULT_CHAIN_CHANGED, t => {
                        this.onChainChanged(t, !0)
                    })
                }
                getProvider(t) {
                    if (!this.rpcProviders[t]) throw Error(`Provider not found: ${t}`);
                    return this.rpcProviders[t]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(t => {
                        var i;
                        this.getProvider(t).updateNamespace(null == (i = this.session) ? void 0 : i.namespaces[t])
                    })
                }
                setNamespaces(t) {
                    let {
                        namespaces: i,
                        optionalNamespaces: r,
                        sessionProperties: c
                    } = t;
                    i && Object.keys(i).length && (this.namespaces = i), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = c, this.persist("namespaces", i), this.persist("optionalNamespaces", r)
                }
                validateChain(t) {
                    let [i, r] = t ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [i, r];
                    if (i && !Object.keys(this.namespaces || {}).map(t => (0, v.M)(t)).includes(i)) throw Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
                    if (i && r) return [i, r];
                    let c = (0, v.M)(Object.keys(this.namespaces)[0]),
                        l = this.rpcProviders[c].getDefaultChain();
                    return [c, l]
                }
                async requestAccounts() {
                    let [t] = this.validateChain();
                    return await this.getProvider(t).requestAccounts()
                }
                onChainChanged(t, i = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [c, l] = this.validateChain(t);
                    i || this.getProvider(c).setDefaultChain(l), (null != (r = this.namespaces[c]) ? r : this.namespaces[`${c}:${l}`]).defaultChain = l, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", l)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(t, i) {
                    this.client.core.storage.setItem(`${tF}/${t}`, i)
                }
                async getFromStore(t) {
                    return await this.client.core.storage.getItem(`${tF}/${t}`)
                }
            };
            let is = ["eth_sendTransaction", "personal_sign"],
                io = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                ic = ["chainChanged", "accountsChanged"],
                ih = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var il = Object.defineProperty,
                iu = Object.defineProperties,
                ip = Object.getOwnPropertyDescriptors,
                id = Object.getOwnPropertySymbols,
                ig = Object.prototype.hasOwnProperty,
                iy = Object.prototype.propertyIsEnumerable,
                index_es_O = (t, i, r) => i in t ? il(t, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[i] = r,
                index_es_p = (t, i) => {
                    for (var r in i || (i = {})) ig.call(i, r) && index_es_O(t, r, i[r]);
                    if (id)
                        for (var r of id(i)) iy.call(i, r) && index_es_O(t, r, i[r]);
                    return t
                },
                index_es_M = (t, i) => iu(t, ip(i));

            function ethereum_provider_dist_index_es_g(t) {
                return Number(t[0].split(":")[1])
            }

            function f(t) {
                return `0x${t.toString(16)}`
            }
            let dist_index_es_v = class dist_index_es_v {
                constructor() {
                    this.events = new c.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, i) => (this.events.on(t, i), this), this.once = (t, i) => (this.events.once(t, i), this), this.removeListener = (t, i) => (this.events.removeListener(t, i), this), this.off = (t, i) => (this.events.off(t, i), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
                }
                static async init(t) {
                    let i = new dist_index_es_v;
                    return await i.initialize(t), i
                }
                async request(t) {
                    return await this.signer.request(t, this.formatChainId(this.chainId))
                }
                sendAsync(t, i) {
                    this.signer.sendAsync(t, i, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(t) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(t);
                    let {
                        required: i,
                        optional: r
                    } = function(t) {
                        let {
                            chains: i,
                            optionalChains: r,
                            methods: c,
                            optionalMethods: l,
                            events: _,
                            optionalEvents: w,
                            rpcMap: P
                        } = t;
                        if (!(0, v.qt)(i)) throw Error("Invalid chains");
                        let C = {
                                chains: i,
                                methods: c || is,
                                events: _ || ic,
                                rpcMap: index_es_p({}, i.length ? {
                                    [ethereum_provider_dist_index_es_g(i)]: P[ethereum_provider_dist_index_es_g(i)]
                                } : {})
                            },
                            O = _ ? .filter(t => !ic.includes(t)),
                            A = c ? .filter(t => !is.includes(t));
                        if (!r && !w && !l && !(null != O && O.length) && !(null != A && A.length)) return {
                            required: i.length ? C : void 0
                        };
                        let q = O ? .length && A ? .length || !r,
                            T = {
                                chains: [...new Set(q ? C.chains.concat(r || []) : r)],
                                methods: [...new Set(C.methods.concat(null != l && l.length ? l : io))],
                                events: [...new Set(C.events.concat(null != w && w.length ? w : ih))],
                                rpcMap: P
                            };
                        return {
                            required: i.length ? C : void 0,
                            optional: r.length ? T : void 0
                        }
                    }(this.rpc);
                    try {
                        let c = await new Promise(async (c, l) => {
                            var v;
                            this.rpc.showQrModal && (null == (v = this.modal) || v.subscribeModal(t => {
                                t.open || this.signer.session || (this.signer.abortPairingAttempt(), l(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(index_es_M(index_es_p({
                                namespaces: index_es_p({}, i && {
                                    [this.namespace]: i
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: t ? .pairingTopic
                            })).then(t => {
                                c(t)
                            }).catch(t => {
                                l(Error(t.message))
                            })
                        });
                        if (!c) return;
                        let l = (0, v.gu)(c.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : l), this.setAccounts(l), this.events.emit("connect", {
                            chainId: f(this.chainId)
                        })
                    } catch (t) {
                        throw this.signer.logger.error(t), t
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", t => {
                        let {
                            params: i
                        } = t, {
                            event: r
                        } = i;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", t)
                    }), this.signer.on("chainChanged", t => {
                        let i = parseInt(t);
                        this.chainId = i, this.events.emit("chainChanged", f(this.chainId)), this.persist()
                    }), this.signer.on("session_update", t => {
                        this.events.emit("session_update", t)
                    }), this.signer.on("session_delete", t => {
                        this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", index_es_M(index_es_p({}, (0, v.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", t => {
                        var i, r;
                        this.rpc.showQrModal && (null == (i = this.modal) || i.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: t
                        })), this.events.emit("display_uri", t)
                    })
                }
                switchEthereumChain(t) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: t.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(t) {
                    return "string" == typeof t && t.startsWith(`${this.namespace}:`)
                }
                formatChainId(t) {
                    return `${this.namespace}:${t}`
                }
                parseChainId(t) {
                    return Number(t.split(":")[1])
                }
                setChainIds(t) {
                    let i = t.filter(t => this.isCompatibleChainId(t)).map(t => this.parseChainId(t));
                    i.length && (this.chainId = i[0], this.events.emit("chainChanged", f(this.chainId)), this.persist())
                }
                setChainId(t) {
                    if (this.isCompatibleChainId(t)) {
                        let i = this.parseChainId(t);
                        this.chainId = i, this.switchEthereumChain(i)
                    }
                }
                parseAccountId(t) {
                    let [i, r, c] = t.split(":");
                    return {
                        chainId: `${i}:${r}`,
                        address: c
                    }
                }
                setAccounts(t) {
                    this.accounts = t.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(t) {
                    var i, r;
                    let c = null != (i = t ? .chains) ? i : [],
                        l = null != (r = t ? .optionalChains) ? r : [],
                        v = c.concat(l);
                    if (!v.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let _ = c.length ? t ? .methods || is : [],
                        w = c.length ? t ? .events || ic : [],
                        P = t ? .optionalMethods || [],
                        C = t ? .optionalEvents || [],
                        O = t ? .rpcMap || this.buildRpcMap(v, t.projectId),
                        A = t ? .qrModalOptions || void 0;
                    return {
                        chains: c ? .map(t => this.formatChainId(t)),
                        optionalChains: l.map(t => this.formatChainId(t)),
                        methods: _,
                        events: w,
                        optionalMethods: P,
                        optionalEvents: C,
                        rpcMap: O,
                        showQrModal: !!(null != t && t.showQrModal),
                        qrModalOptions: A,
                        projectId: t.projectId,
                        metadata: t.metadata
                    }
                }
                buildRpcMap(t, i) {
                    let r = {};
                    return t.forEach(t => {
                        r[t] = this.getRpcUrl(t, i)
                    }), r
                }
                async initialize(t) {
                    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? ethereum_provider_dist_index_es_g(this.rpc.chains) : ethereum_provider_dist_index_es_g(this.rpc.optionalChains), this.signer = await index_es_lr.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: t.disableProviderPing,
                            relayUrl: t.relayUrl,
                            storageOptions: t.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let t;
                        try {
                            let {
                                WalletConnectModal: i
                            } = await r.e(6817).then(r.bind(r, 78465));
                            t = i
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (t) try {
                            this.modal = new t(index_es_p({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (t) {
                            throw this.signer.logger.error(t), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(t) {
                    if (!t) return;
                    let {
                        chains: i,
                        optionalChains: r,
                        rpcMap: c
                    } = t;
                    i && (0, v.qt)(i) && (this.rpc.chains = i.map(t => this.formatChainId(t)), i.forEach(t => {
                        this.rpc.rpcMap[t] = c ? .[t] || this.getRpcUrl(t)
                    })), r && (0, v.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(t => this.formatChainId(t)), r.forEach(t => {
                        this.rpc.rpcMap[t] = c ? .[t] || this.getRpcUrl(t)
                    }))
                }
                getRpcUrl(t, i) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${i||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        i = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(t ? [this.formatChainId(t)] : i ? .accounts), this.setAccounts(i ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(t) {
                    return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map(t => this.parseAccount(t))
                }
            };
            let im = dist_index_es_v
        }
    }
]);