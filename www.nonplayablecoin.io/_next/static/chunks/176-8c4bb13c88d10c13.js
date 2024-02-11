(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [176], {
        34310: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(62140);

            function writeUint16BE(e, t, n) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === n && (n = 0), t[n + 0] = e >>> 8, t[n + 1] = e >>> 0, t
            }

            function writeUint16LE(e, t, n) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === n && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t
            }

            function readInt32BE(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function readUint32BE(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function readInt32LE(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function readUint32LE(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function writeUint32BE(e, t, n) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), t[n + 0] = e >>> 24, t[n + 1] = e >>> 16, t[n + 2] = e >>> 8, t[n + 3] = e >>> 0, t
            }

            function writeUint32LE(e, t, n) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t[n + 2] = e >>> 16, t[n + 3] = e >>> 24, t
            }

            function writeUint64BE(e, t, n) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), writeUint32BE(e / 4294967296 >>> 0, t, n), writeUint32BE(e >>> 0, t, n + 4), t
            }

            function writeUint64LE(e, t, n) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), writeUint32LE(e >>> 0, t, n), writeUint32LE(e / 4294967296 >>> 0, t, n + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = writeUint16BE, t.writeInt16BE = writeUint16BE, t.writeUint16LE = writeUint16LE, t.writeInt16LE = writeUint16LE, t.readInt32BE = readInt32BE, t.readUint32BE = readUint32BE, t.readInt32LE = readInt32LE, t.readUint32LE = readUint32LE, t.writeUint32BE = writeUint32BE, t.writeInt32BE = writeUint32BE, t.writeUint32LE = writeUint32LE, t.writeInt32LE = writeUint32LE, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var n = readInt32BE(e, t),
                    i = readInt32BE(e, t + 4);
                return 4294967296 * n + i - (i >> 31) * 4294967296
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * readUint32BE(e, t) + readUint32BE(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var n = readInt32LE(e, t);
                return 4294967296 * readInt32LE(e, t + 4) + n - (n >> 31) * 4294967296
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var n = readUint32LE(e, t);
                return 4294967296 * readUint32LE(e, t + 4) + n
            }, t.writeUint64BE = writeUint64BE, t.writeInt64BE = writeUint64BE, t.writeUint64LE = writeUint64LE, t.writeInt64LE = writeUint64LE, t.readUintBE = function(e, t, n) {
                if (void 0 === n && (n = 0), e % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - n) throw Error("readUintBE: array is too short for the given bitLength");
                for (var i = 0, o = 1, u = e / 8 + n - 1; u >= n; u--) i += t[u] * o, o *= 256;
                return i
            }, t.readUintLE = function(e, t, n) {
                if (void 0 === n && (n = 0), e % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - n) throw Error("readUintLE: array is too short for the given bitLength");
                for (var i = 0, o = 1, u = n; u < n + e / 8; u++) i += t[u] * o, o *= 256;
                return i
            }, t.writeUintBE = function(e, t, n, o) {
                if (void 0 === n && (n = new Uint8Array(e / 8)), void 0 === o && (o = 0), e % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintBE value must be an integer");
                for (var u = 1, s = e / 8 + o - 1; s >= o; s--) n[s] = t / u & 255, u *= 256;
                return n
            }, t.writeUintLE = function(e, t, n, o) {
                if (void 0 === n && (n = new Uint8Array(e / 8)), void 0 === o && (o = 0), e % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintLE value must be an integer");
                for (var u = 1, s = o; s < o + e / 8; s++) n[s] = t / u & 255, u *= 256;
                return n
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, n) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(n, e), t
            }, t.writeFloat32LE = function(e, t, n) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(n, e, !0), t
            }, t.writeFloat64BE = function(e, t, n) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(n, e), t
            }, t.writeFloat64LE = function(e, t, n) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(n, e, !0), t
            }
        },
        48733: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(34310),
                o = n(55277);

            function streamXOR(e, t, n, u, s) {
                if (void 0 === s && (s = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (u.length < n.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === s) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    l = (f = new Uint8Array(16)).length - t.length, f.set(t, l)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    f = t, l = s
                }
                for (var f, l, c = new Uint8Array(64), h = 0; h < n.length; h += 64) {
                    ! function(e, t, n) {
                        for (var o = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], u = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], s = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], f = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], l = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], c = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], h = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], d = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], p = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], g = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], y = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], m = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], b = 1634760805, v = 857760878, w = 2036477234, _ = 1797285236, D = o, S = u, A = s, B = f, C = l, x = c, I = h, O = d, U = p, P = g, T = y, N = m, L = 0; L < 20; L += 2) U ^= b = b + D | 0, D ^= C = C + (U = U >>> 16 | U << 16) | 0, D = D >>> 20 | D << 12, P ^= v = v + S | 0, S ^= x = x + (P = P >>> 16 | P << 16) | 0, S = S >>> 20 | S << 12, T ^= w = w + A | 0, A ^= I = I + (T = T >>> 16 | T << 16) | 0, A = A >>> 20 | A << 12, N ^= _ = _ + B | 0, B ^= O = O + (N = N >>> 16 | N << 16) | 0, B = B >>> 20 | B << 12, T ^= w = w + A | 0, A ^= I = I + (T = T >>> 24 | T << 8) | 0, A = A >>> 25 | A << 7, N ^= _ = _ + B | 0, B ^= O = O + (N = N >>> 24 | N << 8) | 0, B = B >>> 25 | B << 7, P ^= v = v + S | 0, S ^= x = x + (P = P >>> 24 | P << 8) | 0, S = S >>> 25 | S << 7, U ^= b = b + D | 0, D ^= C = C + (U = U >>> 24 | U << 8) | 0, D = D >>> 25 | D << 7, N ^= b = b + S | 0, S ^= I = I + (N = N >>> 16 | N << 16) | 0, S = S >>> 20 | S << 12, U ^= v = v + A | 0, A ^= O = O + (U = U >>> 16 | U << 16) | 0, A = A >>> 20 | A << 12, P ^= w = w + B | 0, B ^= C = C + (P = P >>> 16 | P << 16) | 0, B = B >>> 20 | B << 12, T ^= _ = _ + D | 0, D ^= x = x + (T = T >>> 16 | T << 16) | 0, D = D >>> 20 | D << 12, P ^= w = w + B | 0, B ^= C = C + (P = P >>> 24 | P << 8) | 0, B = B >>> 25 | B << 7, T ^= _ = _ + D | 0, D ^= x = x + (T = T >>> 24 | T << 8) | 0, D = D >>> 25 | D << 7, U ^= v = v + A | 0, A ^= O = O + (U = U >>> 24 | U << 8) | 0, A = A >>> 25 | A << 7, N ^= b = b + S | 0, S ^= I = I + (N = N >>> 24 | N << 8) | 0, S = S >>> 25 | S << 7;
                        i.writeUint32LE(b + 1634760805 | 0, e, 0), i.writeUint32LE(v + 857760878 | 0, e, 4), i.writeUint32LE(w + 2036477234 | 0, e, 8), i.writeUint32LE(_ + 1797285236 | 0, e, 12), i.writeUint32LE(D + o | 0, e, 16), i.writeUint32LE(S + u | 0, e, 20), i.writeUint32LE(A + s | 0, e, 24), i.writeUint32LE(B + f | 0, e, 28), i.writeUint32LE(C + l | 0, e, 32), i.writeUint32LE(x + c | 0, e, 36), i.writeUint32LE(I + h | 0, e, 40), i.writeUint32LE(O + d | 0, e, 44), i.writeUint32LE(U + p | 0, e, 48), i.writeUint32LE(P + g | 0, e, 52), i.writeUint32LE(T + y | 0, e, 56), i.writeUint32LE(N + m | 0, e, 60)
                    }(c, f, e);
                    for (var d = h; d < h + 64 && d < n.length; d++) u[d] = n[d] ^ c[d - h];
                    ! function(e, t, n) {
                        for (var i = 1; n--;) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
                        if (i > 0) throw Error("ChaCha: counter overflow")
                    }(f, 0, l)
                }
                return o.wipe(c), 0 === s && o.wipe(f), u
            }
            t.streamXOR = streamXOR, t.stream = function(e, t, n, i) {
                return void 0 === i && (i = 0), o.wipe(n), streamXOR(e, t, n, n, i)
            }
        },
        51040: function(e, t, n) {
            "use strict";
            var i = n(48733),
                o = n(66508),
                u = n(55277),
                s = n(34310),
                f = n(51448);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var l = new Uint8Array(16),
                c = function() {
                    function ChaCha20Poly1305(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return ChaCha20Poly1305.prototype.seal = function(e, t, n, o) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var s, f = new Uint8Array(16);
                        f.set(e, f.length - e.length);
                        var l = new Uint8Array(32);
                        i.stream(this._key, f, l, 4);
                        var c = t.length + this.tagLength;
                        if (o) {
                            if (o.length !== c) throw Error("ChaCha20Poly1305: incorrect destination length");
                            s = o
                        } else s = new Uint8Array(c);
                        return i.streamXOR(this._key, f, t, s, 4), this._authenticate(s.subarray(s.length - this.tagLength, s.length), l, s.subarray(0, s.length - this.tagLength), n), u.wipe(f), s
                    }, ChaCha20Poly1305.prototype.open = function(e, t, n, o) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var s, l = new Uint8Array(16);
                        l.set(e, l.length - e.length);
                        var c = new Uint8Array(32);
                        i.stream(this._key, l, c, 4);
                        var h = new Uint8Array(this.tagLength);
                        if (this._authenticate(h, c, t.subarray(0, t.length - this.tagLength), n), !f.equal(h, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var d = t.length - this.tagLength;
                        if (o) {
                            if (o.length !== d) throw Error("ChaCha20Poly1305: incorrect destination length");
                            s = o
                        } else s = new Uint8Array(d);
                        return i.streamXOR(this._key, l, t.subarray(0, t.length - this.tagLength), s, 4), u.wipe(l), s
                    }, ChaCha20Poly1305.prototype.clean = function() {
                        return u.wipe(this._key), this
                    }, ChaCha20Poly1305.prototype._authenticate = function(e, t, n, i) {
                        var f = new o.Poly1305(t);
                        i && (f.update(i), i.length % 16 > 0 && f.update(l.subarray(i.length % 16))), f.update(n), n.length % 16 > 0 && f.update(l.subarray(n.length % 16));
                        var c = new Uint8Array(8);
                        i && s.writeUint64LE(i.length, c), f.update(c), s.writeUint64LE(n.length, c), f.update(c);
                        for (var h = f.digest(), d = 0; d < h.length; d++) e[d] = h[d];
                        f.clean(), u.wipe(h), u.wipe(c)
                    }, ChaCha20Poly1305
                }();
            t.OK = c
        },
        51448: function(e, t) {
            "use strict";

            function compare(e, t) {
                if (e.length !== t.length) return 0;
                for (var n = 0, i = 0; i < e.length; i++) n |= e[i] ^ t[i];
                return 1 & n - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, n) {
                return ~(e - 1) & t | e - 1 & n
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = compare, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== compare(e, t)
            }
        },
        12621: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        20342: function(e, t, n) {
            "use strict";
            var i = n(9922),
                o = n(55277),
                u = function() {
                    function HKDF(e, t, n, o) {
                        void 0 === n && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = o;
                        var u = i.hmac(this._hash, n, t);
                        this._hmac = new i.HMAC(e, u), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return HKDF.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, HKDF.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), n = 0; n < t.length; n++) this._bufpos === this._buffer.length && this._fillBuffer(), t[n] = this._buffer[this._bufpos++];
                        return t
                    }, HKDF.prototype.clean = function() {
                        this._hmac.clean(), o.wipe(this._buffer), o.wipe(this._counter), this._bufpos = 0
                    }, HKDF
                }();
            t.t = u
        },
        9922: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(12621),
                o = n(51448),
                u = n(55277),
                s = function() {
                    function HMAC(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var n = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(n).clean() : n.set(t);
                        for (var o = 0; o < n.length; o++) n[o] ^= 54;
                        this._inner.update(n);
                        for (var o = 0; o < n.length; o++) n[o] ^= 106;
                        this._outer.update(n), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), u.wipe(n)
                    }
                    return HMAC.prototype.reset = function() {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, HMAC.prototype.clean = function() {
                        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, HMAC.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, HMAC.prototype.finish = function(e) {
                        return this._finished ? this._outer.finish(e) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0), this
                    }, HMAC.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, HMAC.prototype.saveState = function() {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, HMAC.prototype.restoreState = function(e) {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, HMAC.prototype.cleanSavedState = function(e) {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, HMAC
                }();
            t.HMAC = s, t.hmac = function(e, t, n) {
                var i = new s(e, t);
                i.update(n);
                var o = i.digest();
                return i.clean(), o
            }, t.equal = o.equal
        },
        62140: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var n = 65535 & e,
                    i = 65535 & t;
                return n * i + ((e >>> 16 & 65535) * i + n * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        66508: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(51448),
                o = n(55277);
            t.DIGEST_LENGTH = 16;
            var u = function() {
                function Poly1305(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var n = e[0] | e[1] << 8;
                    this._r[0] = 8191 & n;
                    var i = e[2] | e[3] << 8;
                    this._r[1] = (n >>> 13 | i << 3) & 8191;
                    var o = e[4] | e[5] << 8;
                    this._r[2] = (i >>> 10 | o << 6) & 7939;
                    var u = e[6] | e[7] << 8;
                    this._r[3] = (o >>> 7 | u << 9) & 8191;
                    var s = e[8] | e[9] << 8;
                    this._r[4] = (u >>> 4 | s << 12) & 255, this._r[5] = s >>> 1 & 8190;
                    var f = e[10] | e[11] << 8;
                    this._r[6] = (s >>> 14 | f << 2) & 8191;
                    var l = e[12] | e[13] << 8;
                    this._r[7] = (f >>> 11 | l << 5) & 8065;
                    var c = e[14] | e[15] << 8;
                    this._r[8] = (l >>> 8 | c << 8) & 8191, this._r[9] = c >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return Poly1305.prototype._blocks = function(e, t, n) {
                    for (var i = this._fin ? 0 : 2048, o = this._h[0], u = this._h[1], s = this._h[2], f = this._h[3], l = this._h[4], c = this._h[5], h = this._h[6], d = this._h[7], p = this._h[8], g = this._h[9], y = this._r[0], m = this._r[1], b = this._r[2], v = this._r[3], w = this._r[4], _ = this._r[5], D = this._r[6], S = this._r[7], A = this._r[8], B = this._r[9]; n >= 16;) {
                        var C, x = e[t + 0] | e[t + 1] << 8;
                        o += 8191 & x;
                        var I = e[t + 2] | e[t + 3] << 8;
                        u += (x >>> 13 | I << 3) & 8191;
                        var O = e[t + 4] | e[t + 5] << 8;
                        s += (I >>> 10 | O << 6) & 8191;
                        var U = e[t + 6] | e[t + 7] << 8;
                        f += (O >>> 7 | U << 9) & 8191;
                        var P = e[t + 8] | e[t + 9] << 8;
                        l += (U >>> 4 | P << 12) & 8191, c += P >>> 1 & 8191;
                        var T = e[t + 10] | e[t + 11] << 8;
                        h += (P >>> 14 | T << 2) & 8191;
                        var N = e[t + 12] | e[t + 13] << 8;
                        d += (T >>> 11 | N << 5) & 8191;
                        var L = e[t + 14] | e[t + 15] << 8;
                        p += (N >>> 8 | L << 8) & 8191, g += L >>> 5 | i;
                        var M = 0;
                        M = (C = 0 + o * y + u * (5 * B) + s * (5 * A) + f * (5 * S) + l * (5 * D)) >>> 13, C &= 8191, C += c * (5 * _) + h * (5 * w) + d * (5 * v) + p * (5 * b) + g * (5 * m), M += C >>> 13, C &= 8191;
                        var R = M;
                        R += o * m + u * y + s * (5 * B) + f * (5 * A) + l * (5 * S), M = R >>> 13, R &= 8191, R += c * (5 * D) + h * (5 * _) + d * (5 * w) + p * (5 * v) + g * (5 * b), M += R >>> 13, R &= 8191;
                        var k = M;
                        k += o * b + u * m + s * y + f * (5 * B) + l * (5 * A), M = k >>> 13, k &= 8191, k += c * (5 * S) + h * (5 * D) + d * (5 * _) + p * (5 * w) + g * (5 * v), M += k >>> 13, k &= 8191;
                        var j = M;
                        j += o * v + u * b + s * m + f * y + l * (5 * B), M = j >>> 13, j &= 8191, j += c * (5 * A) + h * (5 * S) + d * (5 * D) + p * (5 * _) + g * (5 * w), M += j >>> 13, j &= 8191;
                        var F = M;
                        F += o * w + u * v + s * b + f * m + l * y, M = F >>> 13, F &= 8191, F += c * (5 * B) + h * (5 * A) + d * (5 * S) + p * (5 * D) + g * (5 * _), M += F >>> 13, F &= 8191;
                        var z = M;
                        z += o * _ + u * w + s * v + f * b + l * m, M = z >>> 13, z &= 8191, z += c * y + h * (5 * B) + d * (5 * A) + p * (5 * S) + g * (5 * D), M += z >>> 13, z &= 8191;
                        var W = M;
                        W += o * D + u * _ + s * w + f * v + l * b, M = W >>> 13, W &= 8191, W += c * m + h * y + d * (5 * B) + p * (5 * A) + g * (5 * S), M += W >>> 13, W &= 8191;
                        var H = M;
                        H += o * S + u * D + s * _ + f * w + l * v, M = H >>> 13, H &= 8191, H += c * b + h * m + d * y + p * (5 * B) + g * (5 * A), M += H >>> 13, H &= 8191;
                        var V = M;
                        V += o * A + u * S + s * D + f * _ + l * w, M = V >>> 13, V &= 8191, V += c * v + h * b + d * m + p * y + g * (5 * B), M += V >>> 13, V &= 8191;
                        var K = M;
                        K += o * B + u * A + s * S + f * D + l * _, M = K >>> 13, K &= 8191, K += c * w + h * v + d * b + p * m + g * y, M += K >>> 13, K &= 8191, C = 8191 & (M = (M = (M << 2) + M | 0) + C | 0), M >>>= 13, R += M, o = C, u = R, s = k, f = j, l = F, c = z, h = W, d = H, p = V, g = K, t += 16, n -= 16
                    }
                    this._h[0] = o, this._h[1] = u, this._h[2] = s, this._h[3] = f, this._h[4] = l, this._h[5] = c, this._h[6] = h, this._h[7] = d, this._h[8] = p, this._h[9] = g
                }, Poly1305.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var n, i, o, u, s = new Uint16Array(10);
                    if (this._leftover) {
                        for (u = this._leftover, this._buffer[u++] = 1; u < 16; u++) this._buffer[u] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (n = this._h[1] >>> 13, this._h[1] &= 8191, u = 2; u < 10; u++) this._h[u] += n, n = this._h[u] >>> 13, this._h[u] &= 8191;
                    for (this._h[0] += 5 * n, n = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += n, n = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += n, s[0] = this._h[0] + 5, n = s[0] >>> 13, s[0] &= 8191, u = 1; u < 10; u++) s[u] = this._h[u] + n, n = s[u] >>> 13, s[u] &= 8191;
                    for (s[9] -= 8192, i = (1 ^ n) - 1, u = 0; u < 10; u++) s[u] &= i;
                    for (u = 0, i = ~i; u < 10; u++) this._h[u] = this._h[u] & i | s[u];
                    for (u = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, o = this._h[0] + this._pad[0], this._h[0] = 65535 & o; u < 8; u++) o = (this._h[u] + this._pad[u] | 0) + (o >>> 16) | 0, this._h[u] = 65535 & o;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, Poly1305.prototype.update = function(e) {
                    var t, n = 0,
                        i = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > i && (t = i);
                        for (var o = 0; o < t; o++) this._buffer[this._leftover + o] = e[n + o];
                        if (i -= t, n += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (i >= 16 && (t = i - i % 16, this._blocks(e, n, t), n += t, i -= t), i) {
                        for (var o = 0; o < i; o++) this._buffer[this._leftover + o] = e[n + o];
                        this._leftover += i
                    }
                    return this
                }, Poly1305.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, Poly1305.prototype.clean = function() {
                    return o.wipe(this._buffer), o.wipe(this._r), o.wipe(this._h), o.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, Poly1305
            }();
            t.Poly1305 = u, t.oneTimeAuth = function(e, t) {
                var n = new u(e);
                n.update(t);
                var i = n.digest();
                return n.clean(), i
            }, t.equal = function(e, n) {
                return e.length === t.DIGEST_LENGTH && n.length === t.DIGEST_LENGTH && i.equal(e, n)
            }
        },
        35077: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            let i = n(62739),
                o = n(34310),
                u = n(55277);

            function randomBytes(e, n = t.defaultRandomSource) {
                return n.randomBytes(e)
            }
            t.defaultRandomSource = new i.SystemRandomSource, t.randomBytes = randomBytes, t.randomUint32 = function(e = t.defaultRandomSource) {
                let n = randomBytes(4, e),
                    i = (0, o.readUint32LE)(n);
                return (0, u.wipe)(n), i
            };
            let s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function randomString(e, n = s, i = t.defaultRandomSource) {
                if (n.length < 2) throw Error("randomString charset is too short");
                if (n.length > 256) throw Error("randomString charset is too long");
                let o = "",
                    f = n.length,
                    l = 256 - 256 % f;
                for (; e > 0;) {
                    let t = randomBytes(Math.ceil(256 * e / l), i);
                    for (let i = 0; i < t.length && e > 0; i++) {
                        let u = t[i];
                        u < l && (o += n.charAt(u % f), e--)
                    }(0, u.wipe)(t)
                }
                return o
            }
            t.randomString = randomString, t.randomStringForEntropy = function(e, n = s, i = t.defaultRandomSource) {
                let o = Math.ceil(e / (Math.log(n.length) / Math.LN2));
                return randomString(o, n, i)
            }
        },
        85183: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0, t.BrowserRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let t = new Uint8Array(e);
                    for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
                    return t
                }
            }
        },
        32586: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            let i = n(55277);
            t.NodeRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let e = n(35883);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let n = new Uint8Array(e);
                    for (let e = 0; e < n.length; e++) n[e] = t[e];
                    return (0, i.wipe)(t), n
                }
            }
        },
        62739: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            let i = n(85183),
                o = n(32586);
            t.SystemRandomSource = class {
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new o.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
        },
        87853: function(e, t, n) {
            "use strict";
            var i = n(34310),
                o = n(55277);
            t.k = 32, t.cn = 64;
            var u = function() {
                function SHA256() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return SHA256.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, SHA256.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, SHA256.prototype.clean = function() {
                    o.wipe(this._buffer), o.wipe(this._temp), this.reset()
                }, SHA256.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var n = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[n++], t--;
                        this._bufferLength === this.blockSize && (hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (n = hashBlocks(this._temp, this._state, e, n, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[n++], t--;
                    return this
                }, SHA256.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            n = this._bufferLength,
                            o = t % 64 < 56 ? 64 : 128;
                        this._buffer[n] = 128;
                        for (var u = n + 1; u < o - 8; u++) this._buffer[u] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, o - 8), i.writeUint32BE(t << 3, this._buffer, o - 4), hashBlocks(this._temp, this._state, this._buffer, 0, o), this._finished = !0
                    }
                    for (var u = 0; u < this.digestLength / 4; u++) i.writeUint32BE(this._state[u], e, 4 * u);
                    return this
                }, SHA256.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, SHA256.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, SHA256.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, SHA256.prototype.cleanSavedState = function(e) {
                    o.wipe(e.state), e.buffer && o.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, SHA256
            }();
            t.mE = u;
            var s = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function hashBlocks(e, t, n, o, u) {
                for (; u >= 64;) {
                    for (var f = t[0], l = t[1], c = t[2], h = t[3], d = t[4], p = t[5], g = t[6], y = t[7], m = 0; m < 16; m++) {
                        var b = o + 4 * m;
                        e[m] = i.readUint32BE(n, b)
                    }
                    for (var m = 16; m < 64; m++) {
                        var v = e[m - 2],
                            w = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10,
                            _ = ((v = e[m - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
                        e[m] = (w + e[m - 7] | 0) + (_ + e[m - 16] | 0)
                    }
                    for (var m = 0; m < 64; m++) {
                        var w = (((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & p ^ ~d & g) | 0) + (y + (s[m] + e[m] | 0) | 0) | 0,
                            _ = ((f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10)) + (f & l ^ f & c ^ l & c) | 0;
                        y = g, g = p, p = d, d = h + w | 0, h = c, c = l, l = f, f = w + _ | 0
                    }
                    t[0] += f, t[1] += l, t[2] += c, t[3] += h, t[4] += d, t[5] += p, t[6] += g, t[7] += y, o += 64, u -= 64
                }
                return o
            }
            t.vp = function(e) {
                var t = new u;
                t.update(e);
                var n = t.digest();
                return t.clean(), n
            }
        },
        55277: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        38195: function(e, t, n) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let i = n(35077),
                o = n(55277);

            function gf(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let n = 0; n < e.length; n++) t[n] = e[n];
                return t
            }
            t.kz = 32, t.KS = 32;
            let u = new Uint8Array(32);
            u[0] = 9;
            let s = gf([56129, 1]);

            function car25519(e) {
                let t = 1;
                for (let n = 0; n < 16; n++) {
                    let i = e[n] + t + 65535;
                    t = Math.floor(i / 65536), e[n] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function sel25519(e, t, n) {
                let i = ~(n - 1);
                for (let n = 0; n < 16; n++) {
                    let o = i & (e[n] ^ t[n]);
                    e[n] ^= o, t[n] ^= o
                }
            }

            function add(e, t, n) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + n[i]
            }

            function sub(e, t, n) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - n[i]
            }

            function mul(e, t, n) {
                let i, o, u = 0,
                    s = 0,
                    f = 0,
                    l = 0,
                    c = 0,
                    h = 0,
                    d = 0,
                    p = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    b = 0,
                    v = 0,
                    w = 0,
                    _ = 0,
                    D = 0,
                    S = 0,
                    A = 0,
                    B = 0,
                    C = 0,
                    x = 0,
                    I = 0,
                    O = 0,
                    U = 0,
                    P = 0,
                    T = 0,
                    N = 0,
                    L = 0,
                    M = 0,
                    R = 0,
                    k = 0,
                    j = n[0],
                    F = n[1],
                    z = n[2],
                    W = n[3],
                    H = n[4],
                    V = n[5],
                    K = n[6],
                    $ = n[7],
                    Y = n[8],
                    G = n[9],
                    J = n[10],
                    X = n[11],
                    Q = n[12],
                    Z = n[13],
                    ee = n[14],
                    et = n[15];
                u += (i = t[0]) * j, s += i * F, f += i * z, l += i * W, c += i * H, h += i * V, d += i * K, p += i * $, g += i * Y, y += i * G, m += i * J, b += i * X, v += i * Q, w += i * Z, _ += i * ee, D += i * et, s += (i = t[1]) * j, f += i * F, l += i * z, c += i * W, h += i * H, d += i * V, p += i * K, g += i * $, y += i * Y, m += i * G, b += i * J, v += i * X, w += i * Q, _ += i * Z, D += i * ee, S += i * et, f += (i = t[2]) * j, l += i * F, c += i * z, h += i * W, d += i * H, p += i * V, g += i * K, y += i * $, m += i * Y, b += i * G, v += i * J, w += i * X, _ += i * Q, D += i * Z, S += i * ee, A += i * et, l += (i = t[3]) * j, c += i * F, h += i * z, d += i * W, p += i * H, g += i * V, y += i * K, m += i * $, b += i * Y, v += i * G, w += i * J, _ += i * X, D += i * Q, S += i * Z, A += i * ee, B += i * et, c += (i = t[4]) * j, h += i * F, d += i * z, p += i * W, g += i * H, y += i * V, m += i * K, b += i * $, v += i * Y, w += i * G, _ += i * J, D += i * X, S += i * Q, A += i * Z, B += i * ee, C += i * et, h += (i = t[5]) * j, d += i * F, p += i * z, g += i * W, y += i * H, m += i * V, b += i * K, v += i * $, w += i * Y, _ += i * G, D += i * J, S += i * X, A += i * Q, B += i * Z, C += i * ee, x += i * et, d += (i = t[6]) * j, p += i * F, g += i * z, y += i * W, m += i * H, b += i * V, v += i * K, w += i * $, _ += i * Y, D += i * G, S += i * J, A += i * X, B += i * Q, C += i * Z, x += i * ee, I += i * et, p += (i = t[7]) * j, g += i * F, y += i * z, m += i * W, b += i * H, v += i * V, w += i * K, _ += i * $, D += i * Y, S += i * G, A += i * J, B += i * X, C += i * Q, x += i * Z, I += i * ee, O += i * et, g += (i = t[8]) * j, y += i * F, m += i * z, b += i * W, v += i * H, w += i * V, _ += i * K, D += i * $, S += i * Y, A += i * G, B += i * J, C += i * X, x += i * Q, I += i * Z, O += i * ee, U += i * et, y += (i = t[9]) * j, m += i * F, b += i * z, v += i * W, w += i * H, _ += i * V, D += i * K, S += i * $, A += i * Y, B += i * G, C += i * J, x += i * X, I += i * Q, O += i * Z, U += i * ee, P += i * et, m += (i = t[10]) * j, b += i * F, v += i * z, w += i * W, _ += i * H, D += i * V, S += i * K, A += i * $, B += i * Y, C += i * G, x += i * J, I += i * X, O += i * Q, U += i * Z, P += i * ee, T += i * et, b += (i = t[11]) * j, v += i * F, w += i * z, _ += i * W, D += i * H, S += i * V, A += i * K, B += i * $, C += i * Y, x += i * G, I += i * J, O += i * X, U += i * Q, P += i * Z, T += i * ee, N += i * et, v += (i = t[12]) * j, w += i * F, _ += i * z, D += i * W, S += i * H, A += i * V, B += i * K, C += i * $, x += i * Y, I += i * G, O += i * J, U += i * X, P += i * Q, T += i * Z, N += i * ee, L += i * et, w += (i = t[13]) * j, _ += i * F, D += i * z, S += i * W, A += i * H, B += i * V, C += i * K, x += i * $, I += i * Y, O += i * G, U += i * J, P += i * X, T += i * Q, N += i * Z, L += i * ee, M += i * et, _ += (i = t[14]) * j, D += i * F, S += i * z, A += i * W, B += i * H, C += i * V, x += i * K, I += i * $, O += i * Y, U += i * G, P += i * J, T += i * X, N += i * Q, L += i * Z, M += i * ee, R += i * et, D += (i = t[15]) * j, S += i * F, A += i * z, B += i * W, C += i * H, x += i * V, I += i * K, O += i * $, U += i * Y, P += i * G, T += i * J, N += i * X, L += i * Q, M += i * Z, R += i * ee, k += i * et, u += 38 * S, s += 38 * A, f += 38 * B, l += 38 * C, c += 38 * x, h += 38 * I, d += 38 * O, p += 38 * U, g += 38 * P, y += 38 * T, m += 38 * N, b += 38 * L, v += 38 * M, w += 38 * R, _ += 38 * k, o = Math.floor((i = u + (o = 1) + 65535) / 65536), u = i - 65536 * o, o = Math.floor((i = s + o + 65535) / 65536), s = i - 65536 * o, o = Math.floor((i = f + o + 65535) / 65536), f = i - 65536 * o, o = Math.floor((i = l + o + 65535) / 65536), l = i - 65536 * o, o = Math.floor((i = c + o + 65535) / 65536), c = i - 65536 * o, o = Math.floor((i = h + o + 65535) / 65536), h = i - 65536 * o, o = Math.floor((i = d + o + 65535) / 65536), d = i - 65536 * o, o = Math.floor((i = p + o + 65535) / 65536), p = i - 65536 * o, o = Math.floor((i = g + o + 65535) / 65536), g = i - 65536 * o, o = Math.floor((i = y + o + 65535) / 65536), y = i - 65536 * o, o = Math.floor((i = m + o + 65535) / 65536), m = i - 65536 * o, o = Math.floor((i = b + o + 65535) / 65536), b = i - 65536 * o, o = Math.floor((i = v + o + 65535) / 65536), v = i - 65536 * o, o = Math.floor((i = w + o + 65535) / 65536), w = i - 65536 * o, o = Math.floor((i = _ + o + 65535) / 65536), _ = i - 65536 * o, o = Math.floor((i = D + o + 65535) / 65536), D = i - 65536 * o, u += o - 1 + 37 * (o - 1), o = Math.floor((i = u + (o = 1) + 65535) / 65536), u = i - 65536 * o, o = Math.floor((i = s + o + 65535) / 65536), s = i - 65536 * o, o = Math.floor((i = f + o + 65535) / 65536), f = i - 65536 * o, o = Math.floor((i = l + o + 65535) / 65536), l = i - 65536 * o, o = Math.floor((i = c + o + 65535) / 65536), c = i - 65536 * o, o = Math.floor((i = h + o + 65535) / 65536), h = i - 65536 * o, o = Math.floor((i = d + o + 65535) / 65536), d = i - 65536 * o, o = Math.floor((i = p + o + 65535) / 65536), p = i - 65536 * o, o = Math.floor((i = g + o + 65535) / 65536), g = i - 65536 * o, o = Math.floor((i = y + o + 65535) / 65536), y = i - 65536 * o, o = Math.floor((i = m + o + 65535) / 65536), m = i - 65536 * o, o = Math.floor((i = b + o + 65535) / 65536), b = i - 65536 * o, o = Math.floor((i = v + o + 65535) / 65536), v = i - 65536 * o, o = Math.floor((i = w + o + 65535) / 65536), w = i - 65536 * o, o = Math.floor((i = _ + o + 65535) / 65536), _ = i - 65536 * o, o = Math.floor((i = D + o + 65535) / 65536), D = i - 65536 * o, u += o - 1 + 37 * (o - 1), e[0] = u, e[1] = s, e[2] = f, e[3] = l, e[4] = c, e[5] = h, e[6] = d, e[7] = p, e[8] = g, e[9] = y, e[10] = m, e[11] = b, e[12] = v, e[13] = w, e[14] = _, e[15] = D
            }

            function scalarMult(e, t) {
                let n = new Uint8Array(32),
                    i = new Float64Array(80),
                    o = gf(),
                    u = gf(),
                    f = gf(),
                    l = gf(),
                    c = gf(),
                    h = gf();
                for (let t = 0; t < 31; t++) n[t] = e[t];
                n[31] = 127 & e[31] | 64, n[0] &= 248,
                    function(e, t) {
                        for (let n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
                        e[15] &= 32767
                    }(i, t);
                for (let e = 0; e < 16; e++) u[e] = i[e];
                o[0] = l[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = n[e >>> 3] >>> (7 & e) & 1;
                    sel25519(o, u, t), sel25519(f, l, t), add(c, o, f), sub(o, o, f), add(f, u, l), sub(u, u, l), mul(l, c, c), mul(h, o, o), mul(o, f, o), mul(f, u, c), add(c, o, f), sub(o, o, f), mul(u, o, o), sub(f, l, h), mul(o, f, s), add(o, o, l), mul(f, f, o), mul(o, l, h), mul(l, u, i), mul(u, c, c), sel25519(o, u, t), sel25519(f, l, t)
                }
                for (let e = 0; e < 16; e++) i[e + 16] = o[e], i[e + 32] = f[e], i[e + 48] = u[e], i[e + 64] = l[e];
                let d = i.subarray(32),
                    p = i.subarray(16);
                ! function(e, t) {
                    let n = gf();
                    for (let e = 0; e < 16; e++) n[e] = t[e];
                    for (let e = 253; e >= 0; e--) mul(n, n, n), 2 !== e && 4 !== e && mul(n, n, t);
                    for (let t = 0; t < 16; t++) e[t] = n[t]
                }(d, d), mul(p, p, d);
                let g = new Uint8Array(32);
                return ! function(e, t) {
                    let n = gf(),
                        i = gf();
                    for (let e = 0; e < 16; e++) i[e] = t[e];
                    car25519(i), car25519(i), car25519(i);
                    for (let e = 0; e < 2; e++) {
                        n[0] = i[0] - 65517;
                        for (let e = 1; e < 15; e++) n[e] = i[e] - 65535 - (n[e - 1] >> 16 & 1), n[e - 1] &= 65535;
                        n[15] = i[15] - 32767 - (n[14] >> 16 & 1);
                        let e = n[15] >> 16 & 1;
                        n[14] &= 65535, sel25519(i, n, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
                }(g, p), g
            }
            t.Au = function(e) {
                let n = (0, i.randomBytes)(32, e),
                    s = function(e) {
                        if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
                        let n = new Uint8Array(e),
                            i = scalarMult(n, u);
                        return {
                            publicKey: i,
                            secretKey: n
                        }
                    }(n);
                return (0, o.wipe)(n), s
            }, t.gi = function(e, n, i = !1) {
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (n.length !== t.kz) throw Error("X25519: incorrect public key length");
                let o = scalarMult(e, n);
                if (i) {
                    let e = 0;
                    for (let t = 0; t < o.length; t++) e |= o[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return o
            }
        },
        43869: function(e, t, n) {
            "use strict";
            n.d(t, {
                RELAY_JSONRPC: function() {
                    return i
                }
            }), n(24584);
            let i = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            }
        },
        24584: function() {},
        72852: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(88648);
            i.__exportStar(n(83343), t), i.__exportStar(n(38520), t)
        },
        83343: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        38520: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        58619: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(88648);
            i.__exportStar(n(6954), t), i.__exportStar(n(91895), t), i.__exportStar(n(21087), t), i.__exportStar(n(72852), t)
        },
        21087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(88648);
            i.__exportStar(n(36448), t)
        },
        36448: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0, t.IWatch = class {}
        },
        24810: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let i = n(72852);
            t.toMiliseconds = function(e) {
                return e * i.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / i.ONE_THOUSAND)
            }
        },
        18995: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        6954: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(88648);
            i.__exportStar(n(18995), t), i.__exportStar(n(24810), t)
        },
        91895: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            let Watch = class Watch {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
                    let n = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: n
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    let t = this.get(e),
                        n = t.elapsed || Date.now() - t.started;
                    return n
                }
            };
            t.Watch = Watch, t.default = Watch
        },
        849: function(e, t) {
            "use strict";

            function getFromWindow(e) {
                let t;
                return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
            }

            function getFromWindowOrThrow(e) {
                let t = getFromWindow(e);
                if (!t) throw Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = getFromWindow, t.getFromWindowOrThrow = getFromWindowOrThrow, t.getDocumentOrThrow = function() {
                return getFromWindowOrThrow("document")
            }, t.getDocument = function() {
                return getFromWindow("document")
            }, t.getNavigatorOrThrow = function() {
                return getFromWindowOrThrow("navigator")
            }, t.getNavigator = function() {
                return getFromWindow("navigator")
            }, t.getLocationOrThrow = function() {
                return getFromWindowOrThrow("location")
            }, t.getLocation = function() {
                return getFromWindow("location")
            }, t.getCryptoOrThrow = function() {
                return getFromWindowOrThrow("crypto")
            }, t.getCrypto = function() {
                return getFromWindow("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return getFromWindowOrThrow("localStorage")
            }, t.getLocalStorage = function() {
                return getFromWindow("localStorage")
            }
        },
        36073: function(e, t, n) {
            "use strict";
            t.D = void 0;
            let i = n(849);
            t.D = function() {
                let e, t, n;
                try {
                    e = i.getDocumentOrThrow(), t = i.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function getWindowMetadataOfAny(...t) {
                    let n = e.getElementsByTagName("meta");
                    for (let e = 0; e < n.length; e++) {
                        let i = n[e],
                            o = ["itemprop", "property", "name"].map(e => i.getAttribute(e)).filter(e => !!e && t.includes(e));
                        if (o.length && o) {
                            let e = i.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let o = ((n = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title")) || (n = e.title), n),
                    u = function() {
                        let e = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
                        return e
                    }(),
                    s = t.origin,
                    f = function() {
                        let n = e.getElementsByTagName("link"),
                            i = [];
                        for (let e = 0; e < n.length; e++) {
                            let o = n[e],
                                u = o.getAttribute("rel");
                            if (u && u.toLowerCase().indexOf("icon") > -1) {
                                let e = o.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let n = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) n += e;
                                        else {
                                            let i = t.pathname.split("/");
                                            i.pop();
                                            let o = i.join("/");
                                            n += o + "/" + e
                                        }
                                        i.push(n)
                                    } else if (0 === e.indexOf("//")) {
                                        let n = t.protocol + e;
                                        i.push(n)
                                    } else i.push(e)
                                }
                            }
                        }
                        return i
                    }();
                return {
                    description: u,
                    url: s,
                    icons: f,
                    name: o
                }
            }
        },
        34699: function(e, t) {
            "use strict";
            t.byteLength = function(e) {
                var t = getLens(e),
                    n = t[0],
                    i = t[1];
                return (n + i) * 3 / 4 - i
            }, t.toByteArray = function(e) {
                var t, n, u = getLens(e),
                    s = u[0],
                    f = u[1],
                    l = new o((s + f) * 3 / 4 - f),
                    c = 0,
                    h = f > 0 ? s - 4 : s;
                for (n = 0; n < h; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
                return 2 === f && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t), 1 === f && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l
            }, t.fromByteArray = function(e) {
                for (var t, i = e.length, o = i % 3, u = [], s = 0, f = i - o; s < f; s += 16383) u.push(function(e, t, i) {
                    for (var o, u = [], s = t; s < i; s += 3) u.push(n[(o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2])) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                    return u.join("")
                }(e, s, s + 16383 > f ? f : s + 16383));
                return 1 === o ? u.push(n[(t = e[i - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === o && u.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), u.join("")
            };
            for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = u.length; s < f; ++s) n[s] = u[s], i[u.charCodeAt(s)] = s;

            function getLens(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("="); - 1 === n && (n = t);
                var i = n === t ? 0 : 4 - n % 4;
                return [n, i]
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        },
        67133: function(e, t, n) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            let i = n(34699),
                o = n(19087),
                u = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function createBuffer(e) {
                if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                let t = new Uint8Array(e);
                return Object.setPrototypeOf(t, Buffer.prototype), t
            }

            function Buffer(e, t, n) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                    return allocUnsafe(e)
                }
                return from(e, t, n)
            }

            function from(e, t, n) {
                if ("string" == typeof e) return function(e, t) {
                    if (("string" != typeof t || "" === t) && (t = "utf8"), !Buffer.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                    let n = 0 | byteLength(e, t),
                        i = createBuffer(n),
                        o = i.write(e, t);
                    return o !== n && (i = i.slice(0, o)), i
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (isInstance(e, Uint8Array)) {
                        let t = new Uint8Array(e);
                        return fromArrayBuffer(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return fromArrayLike(e)
                }(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) return fromArrayBuffer(e, t, n);
                if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                let i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return Buffer.from(i, t, n);
                let o = function(e) {
                    var t;
                    if (Buffer.isBuffer(e)) {
                        let t = 0 | checked(e.length),
                            n = createBuffer(t);
                        return 0 === n.length || e.copy(n, 0, 0, t), n
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? createBuffer(0) : fromArrayLike(e) : "Buffer" === e.type && Array.isArray(e.data) ? fromArrayLike(e.data) : void 0
                }(e);
                if (o) return o;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return Buffer.from(e[Symbol.toPrimitive]("string"), t, n);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function assertSize(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function allocUnsafe(e) {
                return assertSize(e), createBuffer(e < 0 ? 0 : 0 | checked(e))
            }

            function fromArrayLike(e) {
                let t = e.length < 0 ? 0 : 0 | checked(e.length),
                    n = createBuffer(t);
                for (let i = 0; i < t; i += 1) n[i] = 255 & e[i];
                return n
            }

            function fromArrayBuffer(e, t, n) {
                let i;
                if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(i = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Buffer.prototype), i
            }

            function checked(e) {
                if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | e
            }

            function byteLength(e, t) {
                if (Buffer.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                let n = e.length,
                    i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === n) return 0;
                let o = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return utf8ToBytes(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return base64ToBytes(e).length;
                    default:
                        if (o) return i ? -1 : utf8ToBytes(e).length;
                        t = ("" + t).toLowerCase(), o = !0
                }
            }

            function slowToString(e, t, n) {
                let o = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return function(e, t, n) {
                            let i = e.length;
                            (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                            let o = "";
                            for (let i = t; i < n; ++i) o += l[e[i]];
                            return o
                        }(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return utf8Slice(this, t, n);
                    case "ascii":
                        return function(e, t, n) {
                            let i = "";
                            n = Math.min(e.length, n);
                            for (let o = t; o < n; ++o) i += String.fromCharCode(127 & e[o]);
                            return i
                        }(this, t, n);
                    case "latin1":
                    case "binary":
                        return function(e, t, n) {
                            let i = "";
                            n = Math.min(e.length, n);
                            for (let o = t; o < n; ++o) i += String.fromCharCode(e[o]);
                            return i
                        }(this, t, n);
                    case "base64":
                        var u, s;
                        return u = t, s = n, 0 === u && s === this.length ? i.fromByteArray(this) : i.fromByteArray(this.slice(u, s));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(e, t, n) {
                            let i = e.slice(t, n),
                                o = "";
                            for (let e = 0; e < i.length - 1; e += 2) o += String.fromCharCode(i[e] + 256 * i[e + 1]);
                            return o
                        }(this, t, n);
                    default:
                        if (o) throw TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), o = !0
                }
            }

            function swap(e, t, n) {
                let i = e[t];
                e[t] = e[n], e[n] = i
            }

            function bidirectionalIndexOf(e, t, n, i, o) {
                var u;
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (u = n = +n) != u && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = Buffer.from(t, i)), Buffer.isBuffer(t)) return 0 === t.length ? -1 : arrayIndexOf(e, t, n, i, o);
                if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : arrayIndexOf(e, [t], n, i, o);
                throw TypeError("val must be string, number or Buffer")
            }

            function arrayIndexOf(e, t, n, i, o) {
                let u, s = 1,
                    f = e.length,
                    l = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, f /= 2, l /= 2, n /= 2
                }

                function read(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    let i = -1;
                    for (u = n; u < f; u++)
                        if (read(e, u) === read(t, -1 === i ? 0 : u - i)) {
                            if (-1 === i && (i = u), u - i + 1 === l) return i * s
                        } else -1 !== i && (u -= u - i), i = -1
                } else
                    for (n + l > f && (n = f - l), u = n; u >= 0; u--) {
                        let n = !0;
                        for (let i = 0; i < l; i++)
                            if (read(e, u + i) !== read(t, i)) {
                                n = !1;
                                break
                            }
                        if (n) return u
                    }
                return -1
            }

            function utf8Slice(e, t, n) {
                n = Math.min(e.length, n);
                let i = [],
                    o = t;
                for (; o < n;) {
                    let t = e[o],
                        u = null,
                        s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (o + s <= n) {
                        let n, i, f, l;
                        switch (s) {
                            case 1:
                                t < 128 && (u = t);
                                break;
                            case 2:
                                (192 & (n = e[o + 1])) == 128 && (l = (31 & t) << 6 | 63 & n) > 127 && (u = l);
                                break;
                            case 3:
                                n = e[o + 1], i = e[o + 2], (192 & n) == 128 && (192 & i) == 128 && (l = (15 & t) << 12 | (63 & n) << 6 | 63 & i) > 2047 && (l < 55296 || l > 57343) && (u = l);
                                break;
                            case 4:
                                n = e[o + 1], i = e[o + 2], f = e[o + 3], (192 & n) == 128 && (192 & i) == 128 && (192 & f) == 128 && (l = (15 & t) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & f) > 65535 && l < 1114112 && (u = l)
                        }
                    }
                    null === u ? (u = 65533, s = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), o += s
                }
                return function(e) {
                    let t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    let n = "",
                        i = 0;
                    for (; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += 4096));
                    return n
                }(i)
            }

            function checkOffset(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > n) throw RangeError("Trying to access beyond buffer length")
            }

            function checkInt(e, t, n, i, o, u) {
                if (!Buffer.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < u) throw RangeError('"value" argument is out of bounds');
                if (n + i > e.length) throw RangeError("Index out of range")
            }

            function wrtBigUInt64LE(e, t, n, i, o) {
                checkIntBI(t, i, o, e, n, 7);
                let u = Number(t & BigInt(4294967295));
                e[n++] = u, u >>= 8, e[n++] = u, u >>= 8, e[n++] = u, u >>= 8, e[n++] = u;
                let s = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, n
            }

            function wrtBigUInt64BE(e, t, n, i, o) {
                checkIntBI(t, i, o, e, n, 7);
                let u = Number(t & BigInt(4294967295));
                e[n + 7] = u, u >>= 8, e[n + 6] = u, u >>= 8, e[n + 5] = u, u >>= 8, e[n + 4] = u;
                let s = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n + 3] = s, s >>= 8, e[n + 2] = s, s >>= 8, e[n + 1] = s, s >>= 8, e[n] = s, n + 8
            }

            function checkIEEE754(e, t, n, i, o, u) {
                if (n + i > e.length || n < 0) throw RangeError("Index out of range")
            }

            function writeFloat(e, t, n, i, u) {
                return t = +t, n >>>= 0, u || checkIEEE754(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), o.write(e, t, n, i, 23, 4), n + 4
            }

            function writeDouble(e, t, n, i, u) {
                return t = +t, n >>>= 0, u || checkIEEE754(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), o.write(e, t, n, i, 52, 8), n + 8
            }
            t.Buffer = Buffer, t.SlowBuffer = function(e) {
                return +e != e && (e = 0), Buffer.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 2147483647, Buffer.TYPED_ARRAY_SUPPORT = function() {
                try {
                    let e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), Buffer.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (Buffer.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (Buffer.isBuffer(this)) return this.byteOffset
                }
            }), Buffer.poolSize = 8192, Buffer.from = function(e, t, n) {
                return from(e, t, n)
            }, Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer, Uint8Array), Buffer.alloc = function(e, t, n) {
                return (assertSize(e), e <= 0) ? createBuffer(e) : void 0 !== t ? "string" == typeof n ? createBuffer(e).fill(t, n) : createBuffer(e).fill(t) : createBuffer(e)
            }, Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e)
            }, Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e)
            }, Buffer.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== Buffer.prototype
            }, Buffer.compare = function(e, t) {
                if (isInstance(e, Uint8Array) && (e = Buffer.from(e, e.offset, e.byteLength)), isInstance(t, Uint8Array) && (t = Buffer.from(t, t.offset, t.byteLength)), !Buffer.isBuffer(e) || !Buffer.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let n = e.length,
                    i = t.length;
                for (let o = 0, u = Math.min(n, i); o < u; ++o)
                    if (e[o] !== t[o]) {
                        n = e[o], i = t[o];
                        break
                    }
                return n < i ? -1 : i < n ? 1 : 0
            }, Buffer.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, Buffer.concat = function(e, t) {
                let n;
                if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return Buffer.alloc(0);
                if (void 0 === t)
                    for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                let i = Buffer.allocUnsafe(t),
                    o = 0;
                for (n = 0; n < e.length; ++n) {
                    let t = e[n];
                    if (isInstance(t, Uint8Array)) o + t.length > i.length ? (Buffer.isBuffer(t) || (t = Buffer.from(t)), t.copy(i, o)) : Uint8Array.prototype.set.call(i, t, o);
                    else if (Buffer.isBuffer(t)) t.copy(i, o);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    o += t.length
                }
                return i
            }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function() {
                let e = this.length;
                if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < e; t += 2) swap(this, t, t + 1);
                return this
            }, Buffer.prototype.swap32 = function() {
                let e = this.length;
                if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < e; t += 4) swap(this, t, t + 3), swap(this, t + 1, t + 2);
                return this
            }, Buffer.prototype.swap64 = function() {
                let e = this.length;
                if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < e; t += 8) swap(this, t, t + 7), swap(this, t + 1, t + 6), swap(this, t + 2, t + 5), swap(this, t + 3, t + 4);
                return this
            }, Buffer.prototype.toString = function() {
                let e = this.length;
                return 0 === e ? "" : 0 == arguments.length ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments)
            }, Buffer.prototype.toLocaleString = Buffer.prototype.toString, Buffer.prototype.equals = function(e) {
                if (!Buffer.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                return this === e || 0 === Buffer.compare(this, e)
            }, Buffer.prototype.inspect = function() {
                let e = "",
                    n = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
            }, u && (Buffer.prototype[u] = Buffer.prototype.inspect), Buffer.prototype.compare = function(e, t, n, i, o) {
                if (isInstance(e, Uint8Array) && (e = Buffer.from(e, e.offset, e.byteLength)), !Buffer.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || i < 0 || o > this.length) throw RangeError("out of range index");
                if (i >= o && t >= n) return 0;
                if (i >= o) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;
                let u = o - i,
                    s = n - t,
                    f = Math.min(u, s),
                    l = this.slice(i, o),
                    c = e.slice(t, n);
                for (let e = 0; e < f; ++e)
                    if (l[e] !== c[e]) {
                        u = l[e], s = c[e];
                        break
                    }
                return u < s ? -1 : s < u ? 1 : 0
            }, Buffer.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, Buffer.prototype.indexOf = function(e, t, n) {
                return bidirectionalIndexOf(this, e, t, n, !0)
            }, Buffer.prototype.lastIndexOf = function(e, t, n) {
                return bidirectionalIndexOf(this, e, t, n, !1)
            }, Buffer.prototype.write = function(e, t, n, i) {
                var o, u, s, f, l, c, h, d;
                if (void 0 === t) i = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                let p = this.length - t;
                if ((void 0 === n || n > p) && (n = p), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                let g = !1;
                for (;;) switch (i) {
                    case "hex":
                        return function(e, t, n, i) {
                            let o;
                            n = Number(n) || 0;
                            let u = e.length - n;
                            i ? (i = Number(i)) > u && (i = u) : i = u;
                            let s = t.length;
                            for (i > s / 2 && (i = s / 2), o = 0; o < i; ++o) {
                                let i = parseInt(t.substr(2 * o, 2), 16);
                                if (i != i) break;
                                e[n + o] = i
                            }
                            return o
                        }(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return o = t, u = n, blitBuffer(utf8ToBytes(e, this.length - o), this, o, u);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return s = t, f = n, blitBuffer(function(e) {
                            let t = [];
                            for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                            return t
                        }(e), this, s, f);
                    case "base64":
                        return l = t, c = n, blitBuffer(base64ToBytes(e), this, l, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return h = t, d = n, blitBuffer(function(e, t) {
                            let n, i;
                            let o = [];
                            for (let u = 0; u < e.length && !((t -= 2) < 0); ++u) i = (n = e.charCodeAt(u)) >> 8, o.push(n % 256), o.push(i);
                            return o
                        }(e, this.length - h), this, h, d);
                    default:
                        if (g) throw TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), g = !0
                }
            }, Buffer.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, Buffer.prototype.slice = function(e, t) {
                let n = this.length;
                e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                let i = this.subarray(e, t);
                return Object.setPrototypeOf(i, Buffer.prototype), i
            }, Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || checkOffset(e, t, this.length);
                let i = this[e],
                    o = 1,
                    u = 0;
                for (; ++u < t && (o *= 256);) i += this[e + u] * o;
                return i
            }, Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || checkOffset(e, t, this.length);
                let i = this[e + --t],
                    o = 1;
                for (; t > 0 && (o *= 256);) i += this[e + --t] * o;
                return i
            }, Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 1, this.length), this[e]
            }, Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8
            }, Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    n = this[e + 7];
                (void 0 === t || void 0 === n) && boundsError(e, this.length - 8);
                let i = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                    o = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * n;
                return BigInt(i) + (BigInt(o) << BigInt(32))
            }), Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    n = this[e + 7];
                (void 0 === t || void 0 === n) && boundsError(e, this.length - 8);
                let i = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    o = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n;
                return (BigInt(i) << BigInt(32)) + BigInt(o)
            }), Buffer.prototype.readIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || checkOffset(e, t, this.length);
                let i = this[e],
                    o = 1,
                    u = 0;
                for (; ++u < t && (o *= 256);) i += this[e + u] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, Buffer.prototype.readIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || checkOffset(e, t, this.length);
                let i = t,
                    o = 1,
                    u = this[e + --i];
                for (; i > 0 && (o *= 256);) u += this[e + --i] * o;
                return u >= (o *= 128) && (u -= Math.pow(2, 8 * t)), u
            }, Buffer.prototype.readInt8 = function(e, t) {
                return (e >>>= 0, t || checkOffset(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
            }, Buffer.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || checkOffset(e, 2, this.length);
                let n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, Buffer.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || checkOffset(e, 2, this.length);
                let n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, Buffer.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, Buffer.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, Buffer.prototype.readBigInt64LE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    n = this[e + 7];
                (void 0 === t || void 0 === n) && boundsError(e, this.length - 8);
                let i = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                return (BigInt(i) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
            }), Buffer.prototype.readBigInt64BE = defineBigIntMethod(function(e) {
                validateNumber(e >>>= 0, "offset");
                let t = this[e],
                    n = this[e + 7];
                (void 0 === t || void 0 === n) && boundsError(e, this.length - 8);
                let i = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                return (BigInt(i) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n)
            }), Buffer.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, Buffer.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, Buffer.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, Buffer.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || checkOffset(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function(e, t, n, i) {
                if (e = +e, t >>>= 0, n >>>= 0, !i) {
                    let i = Math.pow(2, 8 * n) - 1;
                    checkInt(this, e, t, n, i, 0)
                }
                let o = 1,
                    u = 0;
                for (this[t] = 255 & e; ++u < n && (o *= 256);) this[t + u] = e / o & 255;
                return t + n
            }, Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function(e, t, n, i) {
                if (e = +e, t >>>= 0, n >>>= 0, !i) {
                    let i = Math.pow(2, 8 * n) - 1;
                    checkInt(this, e, t, n, i, 0)
                }
                let o = n - 1,
                    u = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (u *= 256);) this[t + o] = e / u & 255;
                return t + n
            }, Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64LE(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64BE(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), Buffer.prototype.writeIntLE = function(e, t, n, i) {
                if (e = +e, t >>>= 0, !i) {
                    let i = Math.pow(2, 8 * n - 1);
                    checkInt(this, e, t, n, i - 1, -i)
                }
                let o = 0,
                    u = 1,
                    s = 0;
                for (this[t] = 255 & e; ++o < n && (u *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / u >> 0) - s & 255;
                return t + n
            }, Buffer.prototype.writeIntBE = function(e, t, n, i) {
                if (e = +e, t >>>= 0, !i) {
                    let i = Math.pow(2, 8 * n - 1);
                    checkInt(this, e, t, n, i - 1, -i)
                }
                let o = n - 1,
                    u = 1,
                    s = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (u *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / u >> 0) - s & 255;
                return t + n
            }, Buffer.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, Buffer.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, Buffer.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, Buffer.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, Buffer.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || checkInt(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64LE(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function(e, t = 0) {
                return wrtBigUInt64BE(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), Buffer.prototype.writeFloatLE = function(e, t, n) {
                return writeFloat(this, e, t, !0, n)
            }, Buffer.prototype.writeFloatBE = function(e, t, n) {
                return writeFloat(this, e, t, !1, n)
            }, Buffer.prototype.writeDoubleLE = function(e, t, n) {
                return writeDouble(this, e, t, !0, n)
            }, Buffer.prototype.writeDoubleBE = function(e, t, n) {
                return writeDouble(this, e, t, !1, n)
            }, Buffer.prototype.copy = function(e, t, n, i) {
                if (!Buffer.isBuffer(e)) throw TypeError("argument should be a Buffer");
                if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || 0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw RangeError("Index out of range");
                if (i < 0) throw RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                let o = i - n;
                return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), o
            }, Buffer.prototype.fill = function(e, t, n, i) {
                let o;
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                    if ("string" == typeof i && !Buffer.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                    if (1 === e.length) {
                        let t = e.charCodeAt(0);
                        ("utf8" === i && t < 128 || "latin1" === i) && (e = t)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
                if (n <= t) return this;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = t; o < n; ++o) this[o] = e;
                else {
                    let u = Buffer.isBuffer(e) ? e : Buffer.from(e, i),
                        s = u.length;
                    if (0 === s) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (o = 0; o < n - t; ++o) this[o + t] = u[o % s]
                }
                return this
            };
            let s = {};

            function E(e, t, n) {
                s[e] = class extends n {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                    }
                    get code() {
                        return e
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`
                    }
                }
            }

            function addNumericalSeparator(e) {
                let t = "",
                    n = e.length,
                    i = "-" === e[0] ? 1 : 0;
                for (; n >= i + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                return `${e.slice(0,n)}${t}`
            }

            function checkIntBI(e, t, n, i, o, u) {
                if (e > n || e < t) {
                    let i;
                    let o = "bigint" == typeof t ? "n" : "";
                    throw i = u > 3 ? 0 === t || t === BigInt(0) ? `>= 0${o} and < 2${o} ** ${(u+1)*8}${o}` : `>= -(2${o} ** ${(u+1)*8-1}${o}) and < 2 ** ${(u+1)*8-1}${o}` : `>= ${t}${o} and <= ${n}${o}`, new s.ERR_OUT_OF_RANGE("value", i, e)
                }
                validateNumber(o, "offset"), (void 0 === i[o] || void 0 === i[o + u]) && boundsError(o, i.length - (u + 1))
            }

            function validateNumber(e, t) {
                if ("number" != typeof e) throw new s.ERR_INVALID_ARG_TYPE(t, "number", e)
            }

            function boundsError(e, t, n) {
                if (Math.floor(e) !== e) throw validateNumber(e, n), new s.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                if (t < 0) throw new s.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new s.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
            }
            E("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
                return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), E("ERR_INVALID_ARG_TYPE", function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }, TypeError), E("ERR_OUT_OF_RANGE", function(e, t, n) {
                let i = `The value of "${e}" is out of range.`,
                    o = n;
                return Number.isInteger(n) && Math.abs(n) > 4294967296 ? o = addNumericalSeparator(String(n)) : "bigint" == typeof n && (o = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (o = addNumericalSeparator(o)), o += "n"), i += ` It must be ${t}. Received ${o}`
            }, RangeError);
            let f = /[^+/0-9A-Za-z-_]/g;

            function utf8ToBytes(e, t) {
                let n;
                t = t || 1 / 0;
                let i = e.length,
                    o = null,
                    u = [];
                for (let s = 0; s < i; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319 || s + 1 === i) {
                                (t -= 3) > -1 && u.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && u.push(239, 191, 189), o = n;
                            continue
                        }
                        n = (o - 55296 << 10 | n - 56320) + 65536
                    } else o && (t -= 3) > -1 && u.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        u.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        u.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        u.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else if (n < 1114112) {
                        if ((t -= 4) < 0) break;
                        u.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    } else throw Error("Invalid code point")
                }
                return u
            }

            function base64ToBytes(e) {
                return i.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(f, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function blitBuffer(e, t, n, i) {
                let o;
                for (o = 0; o < i && !(o + n >= t.length) && !(o >= e.length); ++o) t[o + n] = e[o];
                return o
            }

            function isInstance(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }
            let l = function() {
                let e = "0123456789abcdef",
                    t = Array(256);
                for (let n = 0; n < 16; ++n) {
                    let i = 16 * n;
                    for (let o = 0; o < 16; ++o) t[i + o] = e[n] + e[o]
                }
                return t
            }();

            function defineBigIntMethod(e) {
                return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e
            }

            function BufferBigIntNotDefined() {
                throw Error("BigInt not supported")
            }
        },
        50348: function(e, t, n) {
            "use strict";

            function clsx() {
                for (var e, t, n = 0, i = ""; n < arguments.length;)(e = arguments[n++]) && (t = function r(e) {
                    var t, n, i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (i && (i += " "), i += n);
                        else
                            for (t in e) e[t] && (i && (i += " "), i += t)
                    }
                    return i
                }(e)) && (i && (i += " "), i += t);
                return i
            }
            n.r(t), n.d(t, {
                clsx: function() {
                    return clsx
                }
            }), t.default = clsx
        },
        58005: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                n = RegExp("(" + t + ")|([^%]+?)", "gi"),
                i = RegExp("(" + t + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, o = i.exec(e); o;) {
                            try {
                                t[o[0]] = decodeURIComponent(o[0])
                            } catch (e) {
                                var u = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (o) {
                                        for (var t = e.match(n) || [], i = 1; i < t.length; i++) t = (e = (function decodeComponents(e, t) {
                                            try {
                                                return [decodeURIComponent(e.join(""))]
                                            } catch (e) {}
                                            if (1 === e.length) return e;
                                            t = t || 1;
                                            var n = e.slice(0, t),
                                                i = e.slice(t);
                                            return Array.prototype.concat.call([], decodeComponents(n), decodeComponents(i))
                                        })(t, i).join("")).match(n) || [];
                                        return e
                                    }
                                }(o[0]);
                                u !== o[0] && (t[o[0]] = u)
                            }
                            o = i.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var s = Object.keys(t), f = 0; f < s.length; f++) {
                            var l = s[f];
                            e = e.replace(RegExp(l, "g"), t[l])
                        }
                        return e
                    }(e)
                }
            }
        },
        69954: function(e, t, n) {
            "use strict";
            n.d(t, {
                qY: function() {
                    return detect
                }
            });
            var i = n(25566),
                __spreadArray = function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var i, o = 0, u = t.length; o < u; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                    return e.concat(i || Array.prototype.slice.call(t))
                },
                BrowserInfo = function(e, t, n) {
                    this.name = e, this.version = t, this.os = n, this.type = "browser"
                },
                NodeInfo = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = i.platform
                },
                SearchBotDeviceInfo = function(e, t, n, i) {
                    this.name = e, this.version = t, this.os = n, this.bot = i, this.type = "bot-device"
                },
                BotInfo = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                ReactNativeInfo = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                o = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                u = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                s = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function detect(e) {
                return e ? parseUserAgent(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new ReactNativeInfo : "undefined" != typeof navigator ? parseUserAgent(navigator.userAgent) : void 0 !== i && i.version ? new NodeInfo(i.version.slice(1)) : null
            }

            function parseUserAgent(e) {
                var t = "" !== e && u.reduce(function(t, n) {
                    var i = n[0],
                        o = n[1];
                    if (t) return t;
                    var u = o.exec(e);
                    return !!u && [i, u]
                }, !1);
                if (!t) return null;
                var n = t[0],
                    i = t[1];
                if ("searchbot" === n) return new BotInfo;
                var f = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
                f ? f.length < 3 && (f = __spreadArray(__spreadArray([], f, !0), function(e) {
                    for (var t = [], n = 0; n < e; n++) t.push("0");
                    return t
                }(3 - f.length), !0)) : f = [];
                var l = f.join("."),
                    c = function(e) {
                        for (var t = 0, n = s.length; t < n; t++) {
                            var i = s[t],
                                o = i[0];
                            if (i[1].exec(e)) return o
                        }
                        return null
                    }(e),
                    h = o.exec(e);
                return h && h[1] ? new SearchBotDeviceInfo(n, l, c, h[1]) : new BrowserInfo(n, l, c)
            }
        },
        78343: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, n, i) {
                    var o, u, s, f, l, c, h, d = {},
                        p = {};
                    p[n] = 0;
                    var g = t.PriorityQueue.make();
                    for (g.push(n, 0); !g.empty();)
                        for (s in u = (o = g.pop()).value, f = o.cost, l = e[u] || {}) l.hasOwnProperty(s) && (c = f + l[s], h = p[s], (void 0 === p[s] || h > c) && (p[s] = c, g.push(s, c), d[s] = u));
                    if (void 0 !== i && void 0 === p[i]) throw Error(["Could not find a path from ", n, " to ", i, "."].join(""));
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var n = [], i = t; i;) n.push(i), e[i], i = e[i];
                    return n.reverse(), n
                },
                find_path: function(e, n, i) {
                    var o = t.single_source_shortest_paths(e, n, i);
                    return t.extract_shortest_path_from_predecessor_list(o, i)
                },
                PriorityQueue: {
                    make: function(e) {
                        var n, i = t.PriorityQueue,
                            o = {};
                        for (n in e = e || {}, i) i.hasOwnProperty(n) && (o[n] = i[n]);
                        return o.queue = [], o.sorter = e.sorter || i.default_sorter, o
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        53216: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = [], n = e.length, i = 0; i < n; i++) {
                    var o = e.charCodeAt(i);
                    if (o >= 55296 && o <= 56319 && n > i + 1) {
                        var u = e.charCodeAt(i + 1);
                        u >= 56320 && u <= 57343 && (o = (o - 55296) * 1024 + u - 56320 + 65536, i += 1)
                    }
                    if (o < 128) {
                        t.push(o);
                        continue
                    }
                    if (o < 2048) {
                        t.push(o >> 6 | 192), t.push(63 & o | 128);
                        continue
                    }
                    if (o < 55296 || o >= 57344 && o < 65536) {
                        t.push(o >> 12 | 224), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128);
                        continue
                    }
                    if (o >= 65536 && o <= 1114111) {
                        t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128);
                        continue
                    }
                    t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        28729: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function Events() {}

            function EE(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function addListener(e, t, i, o, u) {
                if ("function" != typeof i) throw TypeError("The listener must be a function");
                var s = new EE(i, o || e, u),
                    f = n ? n + t : t;
                return e._events[f] ? e._events[f].fn ? e._events[f] = [e._events[f], s] : e._events[f].push(s) : (e._events[f] = s, e._eventsCount++), e
            }

            function clearEvent(e, t) {
                0 == --e._eventsCount ? e._events = new Events : delete e._events[t]
            }

            function EventEmitter() {
                this._events = new Events, this._eventsCount = 0
            }
            Object.create && (Events.prototype = Object.create(null), new Events().__proto__ || (n = !1)), EventEmitter.prototype.eventNames = function() {
                var e, i, o = [];
                if (0 === this._eventsCount) return o;
                for (i in e = this._events) t.call(e, i) && o.push(n ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
            }, EventEmitter.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    i = this._events[t];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var o = 0, u = i.length, s = Array(u); o < u; o++) s[o] = i[o].fn;
                return s
            }, EventEmitter.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    i = this._events[t];
                return i ? i.fn ? 1 : i.length : 0
            }, EventEmitter.prototype.emit = function(e, t, i, o, u, s) {
                var f = n ? n + e : e;
                if (!this._events[f]) return !1;
                var l, c, h = this._events[f],
                    d = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(e, h.fn, void 0, !0), d) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, t), !0;
                        case 3:
                            return h.fn.call(h.context, t, i), !0;
                        case 4:
                            return h.fn.call(h.context, t, i, o), !0;
                        case 5:
                            return h.fn.call(h.context, t, i, o, u), !0;
                        case 6:
                            return h.fn.call(h.context, t, i, o, u, s), !0
                    }
                    for (c = 1, l = Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                    h.fn.apply(h.context, l)
                } else {
                    var p, g = h.length;
                    for (c = 0; c < g; c++) switch (h[c].once && this.removeListener(e, h[c].fn, void 0, !0), d) {
                        case 1:
                            h[c].fn.call(h[c].context);
                            break;
                        case 2:
                            h[c].fn.call(h[c].context, t);
                            break;
                        case 3:
                            h[c].fn.call(h[c].context, t, i);
                            break;
                        case 4:
                            h[c].fn.call(h[c].context, t, i, o);
                            break;
                        default:
                            if (!l)
                                for (p = 1, l = Array(d - 1); p < d; p++) l[p - 1] = arguments[p];
                            h[c].fn.apply(h[c].context, l)
                    }
                }
                return !0
            }, EventEmitter.prototype.on = function(e, t, n) {
                return addListener(this, e, t, n, !1)
            }, EventEmitter.prototype.once = function(e, t, n) {
                return addListener(this, e, t, n, !0)
            }, EventEmitter.prototype.removeListener = function(e, t, i, o) {
                var u = n ? n + e : e;
                if (!this._events[u]) return this;
                if (!t) return clearEvent(this, u), this;
                var s = this._events[u];
                if (s.fn) s.fn !== t || o && !s.once || i && s.context !== i || clearEvent(this, u);
                else {
                    for (var f = 0, l = [], c = s.length; f < c; f++)(s[f].fn !== t || o && !s[f].once || i && s[f].context !== i) && l.push(s[f]);
                    l.length ? this._events[u] = 1 === l.length ? l[0] : l : clearEvent(this, u)
                }
                return this
            }, EventEmitter.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && clearEvent(this, t)) : (this._events = new Events, this._eventsCount = 0), this
            }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prefixed = n, EventEmitter.EventEmitter = EventEmitter, e.exports = EventEmitter
        },
        61820: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var n = {}, i = Object.keys(e), o = Array.isArray(t), u = 0; u < i.length; u++) {
                    var s = i[u],
                        f = e[s];
                    (o ? -1 !== t.indexOf(s) : t(s, f, e)) && (n[s] = f)
                }
                return n
            }
        },
        19087: function(e, t) { /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            t.read = function(e, t, n, i, o) {
                var u, s, f = 8 * o - i - 1,
                    l = (1 << f) - 1,
                    c = l >> 1,
                    h = -7,
                    d = n ? o - 1 : 0,
                    p = n ? -1 : 1,
                    g = e[t + d];
                for (d += p, u = g & (1 << -h) - 1, g >>= -h, h += f; h > 0; u = 256 * u + e[t + d], d += p, h -= 8);
                for (s = u & (1 << -h) - 1, u >>= -h, h += i; h > 0; s = 256 * s + e[t + d], d += p, h -= 8);
                if (0 === u) u = 1 - c;
                else {
                    if (u === l) return s ? NaN : (g ? -1 : 1) * (1 / 0);
                    s += Math.pow(2, i), u -= c
                }
                return (g ? -1 : 1) * s * Math.pow(2, u - i)
            }, t.write = function(e, t, n, i, o, u) {
                var s, f, l, c = 8 * u - o - 1,
                    h = (1 << c) - 1,
                    d = h >> 1,
                    p = 23 === o ? 5960464477539062e-23 : 0,
                    g = i ? 0 : u - 1,
                    y = i ? 1 : -1,
                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, s = h) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + d >= 1 ? t += p / l : t += p * Math.pow(2, 1 - d), t * l >= 2 && (s++, l /= 2), s + d >= h ? (f = 0, s = h) : s + d >= 1 ? (f = (t * l - 1) * Math.pow(2, o), s += d) : (f = t * Math.pow(2, d - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + g] = 255 & f, g += y, f /= 256, o -= 8);
                for (s = s << o | f, c += o; c > 0; e[n + g] = 255 & s, g += y, s /= 256, c -= 8);
                e[n + g - y] |= 128 * m
            }
        },
        19524: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(1801), Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addLocale", {
                enumerable: !0,
                get: function() {
                    return addLocale
                }
            }), n(43997);
            var addLocale = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return e
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        64549: function(e, t, n) {
            "use strict";

            function getDomainLocale(e, t, n, i) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return getDomainLocale
                }
            }), n(43997), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        90413: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(35029),
                o = n(88965),
                u = n(8001),
                s = n(24670),
                f = n(1801);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            var l = n(21024),
                c = n(68533)._(n(2265)),
                h = l._(n(54887)),
                d = l._(n(35793)),
                p = n(7929),
                g = n(17727),
                y = n(47327);
            n(92637);
            var m = n(36304),
                b = l._(n(69950)),
                v = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function handleLoading(e, t, n, u, s, f) {
                var l = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(function() {}).then(function() {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && s(!0), null == n ? void 0 : n.current) {
                            var f = new Event("load");
                            Object.defineProperty(f, "target", {
                                writable: !1,
                                value: e
                            });
                            var l = !1,
                                c = !1;
                            n.current(o._(i._({}, f), {
                                nativeEvent: f,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: function() {
                                    return l
                                },
                                isPropagationStopped: function() {
                                    return c
                                },
                                persist: function() {},
                                preventDefault: function() {
                                    l = !0, f.preventDefault()
                                },
                                stopPropagation: function() {
                                    c = !0, f.stopPropagation()
                                }
                            }))
                        }(null == u ? void 0 : u.current) && u.current(e)
                    }
                }))
            }

            function getDynamicProps(e) {
                var t = s._(c.version.split("."), 2),
                    n = t[0],
                    i = t[1],
                    o = parseInt(n, 10),
                    u = parseInt(i, 10);
                return o > 18 || 18 === o && u >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            var w = (0, c.forwardRef)(function(e, t) {
                var n = e.src,
                    s = e.srcSet,
                    f = e.sizes,
                    l = e.height,
                    h = e.width,
                    d = e.decoding,
                    p = e.className,
                    g = e.style,
                    y = e.fetchPriority,
                    m = e.placeholder,
                    b = e.loading,
                    v = e.unoptimized,
                    w = e.fill,
                    _ = e.onLoadRef,
                    D = e.onLoadingCompleteRef,
                    S = e.setBlurComplete,
                    A = e.setShowAltText,
                    B = (e.onLoad, e.onError),
                    C = u._(e, ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                return c.default.createElement("img", o._(i._({}, C, getDynamicProps(y)), {
                    loading: b,
                    width: h,
                    height: l,
                    decoding: d,
                    "data-nimg": w ? "fill" : "1",
                    className: p,
                    style: g,
                    sizes: f,
                    srcSet: s,
                    src: n,
                    ref: (0, c.useCallback)(function(e) {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (B && (e.src = e.src), e.complete && handleLoading(e, m, _, D, S, v))
                    }, [n, m, _, D, S, B, v, t]),
                    onLoad: function(e) {
                        handleLoading(e.currentTarget, m, _, D, S, v)
                    },
                    onError: function(e) {
                        A(!0), "empty" !== m && S(!0), B && B(e)
                    }
                }))
            });

            function ImagePreload(e) {
                var t = e.isAppRouter,
                    n = e.imgAttributes,
                    o = i._({
                        as: "image",
                        imageSrcSet: n.srcSet,
                        imageSizes: n.sizes,
                        crossOrigin: n.crossOrigin,
                        referrerPolicy: n.referrerPolicy
                    }, getDynamicProps(n.fetchPriority));
                return t && h.default.preload ? (h.default.preload(n.src, o), null) : c.default.createElement(d.default, null, c.default.createElement("link", i._({
                    key: "__nimg-" + n.src + n.srcSet + n.sizes,
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src
                }, o)))
            }
            var _ = (0, c.forwardRef)(function(e, t) {
                var n = (0, c.useContext)(m.RouterContext),
                    u = (0, c.useContext)(y.ImageConfigContext),
                    l = (0, c.useMemo)(function() {
                        var e = v || u || g.imageConfigDefault,
                            t = f._(e.deviceSizes).concat(f._(e.imageSizes)).sort(function(e, t) {
                                return e - t
                            }),
                            n = e.deviceSizes.sort(function(e, t) {
                                return e - t
                            });
                        return o._(i._({}, e), {
                            allSizes: t,
                            deviceSizes: n
                        })
                    }, [u]),
                    h = e.onLoad,
                    d = e.onLoadingComplete,
                    _ = (0, c.useRef)(h);
                (0, c.useEffect)(function() {
                    _.current = h
                }, [h]);
                var D = (0, c.useRef)(d);
                (0, c.useEffect)(function() {
                    D.current = d
                }, [d]);
                var S = s._((0, c.useState)(!1), 2),
                    A = S[0],
                    B = S[1],
                    C = s._((0, c.useState)(!1), 2),
                    x = C[0],
                    I = C[1],
                    O = (0, p.getImgProps)(e, {
                        defaultLoader: b.default,
                        imgConf: l,
                        blurComplete: A,
                        showAltText: x
                    }),
                    U = O.props,
                    P = O.meta;
                return c.default.createElement(c.default.Fragment, null, c.default.createElement(w, o._(i._({}, U), {
                    unoptimized: P.unoptimized,
                    placeholder: P.placeholder,
                    fill: P.fill,
                    onLoadRef: _,
                    onLoadingCompleteRef: D,
                    setBlurComplete: B,
                    setShowAltText: I,
                    ref: t
                })), P.priority ? c.default.createElement(ImagePreload, {
                    isAppRouter: !n,
                    imgAttributes: U
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        68326: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(35029),
                o = n(8001),
                u = n(24670);
            n(93353), Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            var s = n(21024)._(n(2265)),
                f = n(99121),
                l = n(68664),
                c = n(98130),
                h = n(36681),
                d = n(19524),
                p = n(36304),
                g = n(76313),
                y = n(71581),
                m = n(64549),
                b = n(89872),
                v = n(49706),
                w = new Set;

            function prefetch(e, t, n, i, o, u) {
                if (u || (0, l.isLocalURL)(t)) {
                    if (!i.bypassPrefetchedCheck) {
                        var s = t + "%" + n + "%" + (void 0 !== i.locale ? i.locale : "locale" in e ? e.locale : void 0);
                        if (w.has(s)) return;
                        w.add(s)
                    }
                    Promise.resolve(u ? e.prefetch(t, o) : e.prefetch(t, n, i)).catch(function(e) {})
                }
            }

            function formatStringOrUrl(e) {
                return "string" == typeof e ? e : (0, c.formatUrl)(e)
            }
            var _ = s.default.forwardRef(function(e, t) {
                var n, c, w = e.href,
                    _ = e.as,
                    D = e.children,
                    S = e.prefetch,
                    A = void 0 === S ? null : S,
                    B = e.passHref,
                    C = e.replace,
                    x = e.shallow,
                    I = e.scroll,
                    O = e.locale,
                    U = e.onClick,
                    P = e.onMouseEnter,
                    T = e.onTouchStart,
                    N = e.legacyBehavior,
                    L = void 0 !== N && N,
                    M = o._(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = D, L && ("string" == typeof n || "number" == typeof n) && (n = s.default.createElement("a", null, n));
                var R = s.default.useContext(p.RouterContext),
                    k = s.default.useContext(g.AppRouterContext),
                    j = null != R ? R : k,
                    F = !R,
                    z = !1 !== A,
                    W = null === A ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
                    H = s.default.useMemo(function() {
                        if (!R) {
                            var e = formatStringOrUrl(w);
                            return {
                                href: e,
                                as: _ ? formatStringOrUrl(_) : e
                            }
                        }
                        var t = u._((0, f.resolveHref)(R, w, !0), 2),
                            n = t[0],
                            i = t[1];
                        return {
                            href: n,
                            as: _ ? (0, f.resolveHref)(R, _) : i || n
                        }
                    }, [R, w, _]),
                    V = H.href,
                    K = H.as,
                    $ = s.default.useRef(V),
                    Y = s.default.useRef(K);
                L && (c = s.default.Children.only(n));
                var G = L ? c && "object" == typeof c && c.ref : t,
                    J = u._((0, y.useIntersection)({
                        rootMargin: "200px"
                    }), 3),
                    X = J[0],
                    Q = J[1],
                    Z = J[2],
                    ee = s.default.useCallback(function(e) {
                        (Y.current !== K || $.current !== V) && (Z(), Y.current = K, $.current = V), X(e), G && ("function" == typeof G ? G(e) : "object" == typeof G && (G.current = e))
                    }, [K, G, V, Z, X]);
                s.default.useEffect(function() {
                    j && Q && z && prefetch(j, V, K, {
                        locale: O
                    }, {
                        kind: W
                    }, F)
                }, [K, V, Q, O, z, null == R ? void 0 : R.locale, j, F, W]);
                var et = {
                    ref: ee,
                    onClick: function(e) {
                        L || "function" != typeof U || U(e), L && c.props && "function" == typeof c.props.onClick && c.props.onClick(e), j && !e.defaultPrevented && function(e, t, n, i, o, u, f, c, h, d) {
                            if (!("A" === e.currentTarget.nodeName.toUpperCase() && ((p = e.currentTarget.getAttribute("target")) && "_self" !== p || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which || !h && !(0, l.isLocalURL)(n)))) {
                                e.preventDefault();
                                var p, navigate = function() {
                                    var e = null == f || f;
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, i, {
                                        shallow: u,
                                        locale: c,
                                        scroll: e
                                    }) : t[o ? "replace" : "push"](i || n, {
                                        forceOptimisticNavigation: !d,
                                        scroll: e
                                    })
                                };
                                h ? s.default.startTransition(navigate) : navigate()
                            }
                        }(e, j, V, K, C, x, I, O, F, z)
                    },
                    onMouseEnter: function(e) {
                        L || "function" != typeof P || P(e), L && c.props && "function" == typeof c.props.onMouseEnter && c.props.onMouseEnter(e), j && (z || !F) && prefetch(j, V, K, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: W
                        }, F)
                    },
                    onTouchStart: function(e) {
                        L || "function" != typeof T || T(e), L && c.props && "function" == typeof c.props.onTouchStart && c.props.onTouchStart(e), j && (z || !F) && prefetch(j, V, K, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: W
                        }, F)
                    }
                };
                if ((0, h.isAbsoluteUrl)(K)) et.href = K;
                else if (!L || B || "a" === c.type && !("href" in c.props)) {
                    var er = void 0 !== O ? O : null == R ? void 0 : R.locale,
                        en = (null == R ? void 0 : R.isLocaleDomain) && (0, m.getDomainLocale)(K, er, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                    et.href = en || (0, b.addBasePath)((0, d.addLocale)(K, er, null == R ? void 0 : R.defaultLocale))
                }
                return L ? s.default.cloneElement(c, et) : s.default.createElement("a", i._({}, M, et), n)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        62389: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    requestIdleCallback: function() {
                        return n
                    },
                    cancelIdleCallback: function() {
                        return i
                    }
                });
            var n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    var t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                i = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        99121: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return resolveHref
                }
            });
            var i = n(55991),
                o = n(98130),
                u = n(58137),
                s = n(36681),
                f = n(43997),
                l = n(68664),
                c = n(29289),
                h = n(20948);

            function resolveHref(e, t, n) {
                var d, p = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
                    g = p.match(/^[a-zA-Z]{1,}:\/\//),
                    y = g ? p.slice(g[0].length) : p;
                if ((y.split("?")[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + p + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    var m = (0, s.normalizeRepeatedSlashes)(y);
                    p = (g ? g[0] : "") + m
                }
                if (!(0, l.isLocalURL)(p)) return n ? [p] : p;
                try {
                    d = new URL(p.startsWith("#") ? e.asPath : e.pathname, "http://n")
                } catch (e) {
                    d = new URL("/", "http://n")
                }
                try {
                    var b = new URL(p, d);
                    b.pathname = (0, f.normalizePathTrailingSlash)(b.pathname);
                    var v = "";
                    if ((0, c.isDynamicRoute)(b.pathname) && b.searchParams && n) {
                        var w = (0, i.searchParamsToUrlQuery)(b.searchParams),
                            _ = (0, h.interpolateAs)(b.pathname, b.pathname, w),
                            D = _.result,
                            S = _.params;
                        D && (v = (0, o.formatWithValidation)({
                            pathname: D,
                            hash: b.hash,
                            query: (0, u.omit)(w, S)
                        }))
                    }
                    var A = b.origin === d.origin ? b.href.slice(b.origin.length) : b.href;
                    return n ? [A, v || A] : A
                } catch (e) {
                    return n ? [p] : p
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        71581: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(24670);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return useIntersection
                }
            });
            var o = n(2265),
                u = n(62389),
                s = "function" == typeof IntersectionObserver,
                f = new Map,
                l = [];

            function useIntersection(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    c = e.disabled || !s,
                    h = i._((0, o.useState)(!1), 2),
                    d = h[0],
                    p = h[1],
                    g = (0, o.useRef)(null),
                    y = (0, o.useCallback)(function(e) {
                        g.current = e
                    }, []);
                return (0, o.useEffect)(function() {
                    if (s) {
                        if (!c && !d) {
                            var e, i, o, h, y = g.current;
                            if (y && y.tagName) return i = (e = function(e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        i = l.find(function(e) {
                                            return e.root === n.root && e.margin === n.margin
                                        });
                                    if (i && (t = f.get(i))) return t;
                                    var o = new Map;
                                    return t = {
                                        id: n,
                                        observer: new IntersectionObserver(function(e) {
                                            e.forEach(function(e) {
                                                var t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e),
                                        elements: o
                                    }, l.push(n), f.set(n, t), t
                                }({
                                    root: null == t ? void 0 : t.current,
                                    rootMargin: n
                                })).id, o = e.observer, (h = e.elements).set(y, function(e) {
                                    return e && p(e)
                                }), o.observe(y),
                                function() {
                                    if (h.delete(y), o.unobserve(y), 0 === h.size) {
                                        o.disconnect(), f.delete(i);
                                        var e = l.findIndex(function(e) {
                                            return e.root === i.root && e.margin === i.margin
                                        });
                                        e > -1 && l.splice(e, 1)
                                    }
                                }
                        }
                    } else if (!d) {
                        var m = (0, u.requestIdleCallback)(function() {
                            return p(!0)
                        });
                        return function() {
                            return (0, u.cancelIdleCallback)(m)
                        }
                    }
                }, [c, n, t, d, g.current]), [y, d, (0, o.useCallback)(function() {
                    p(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        28569: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            var i = n(21024)._(n(2265)).default.createContext({})
        },
        94472: function(e, t) {
            "use strict";

            function isInAmpMode(e) {
                var t = void 0 === e ? {} : e,
                    n = t.ampFirst,
                    i = t.hybrid,
                    o = t.hasQuery;
                return void 0 !== n && n || void 0 !== i && i && void 0 !== o && o
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return isInAmpMode
                }
            })
        },
        24910: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return escapeStringRegexp
                }
            });
            var n = /[|\\{}()[\]^$+*?.-]/,
                i = /[|\\{}()[\]^$+*?.-]/g;

            function escapeStringRegexp(e) {
                return n.test(e) ? e.replace(i, "\\$&") : e
            }
        },
        7929: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(35029),
                o = n(88965),
                u = n(8001);
            n(24670);
            var s = n(1801);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return getImgProps
                }
            }), n(92637);
            var f = n(61511),
                l = n(17727);

            function isStaticRequire(e) {
                return void 0 !== e.default
            }

            function getInt(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function getImgProps(e, t) {
                var n, c, h, d = e.src,
                    p = e.sizes,
                    g = e.unoptimized,
                    y = void 0 !== g && g,
                    m = e.priority,
                    b = void 0 !== m && m,
                    v = e.loading,
                    w = e.className,
                    _ = e.quality,
                    D = e.width,
                    S = e.height,
                    A = e.fill,
                    B = void 0 !== A && A,
                    C = e.style,
                    x = (e.onLoad, e.onLoadingComplete, e.placeholder),
                    I = void 0 === x ? "empty" : x,
                    O = e.blurDataURL,
                    U = e.fetchPriority,
                    P = e.layout,
                    T = e.objectFit,
                    N = e.objectPosition,
                    L = (e.lazyBoundary, e.lazyRoot, u._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"])),
                    M = t.imgConf,
                    R = t.showAltText,
                    k = t.blurComplete,
                    j = t.defaultLoader,
                    F = M || l.imageConfigDefault;
                if ("allSizes" in F) K = F;
                else {
                    var z = s._(F.deviceSizes).concat(s._(F.imageSizes)).sort(function(e, t) {
                            return e - t
                        }),
                        W = F.deviceSizes.sort(function(e, t) {
                            return e - t
                        });
                    K = o._(i._({}, F), {
                        allSizes: z,
                        deviceSizes: W
                    })
                }
                var H = L.loader || j;
                delete L.loader, delete L.srcSet;
                var V = "__next_img_default" in H;
                if (V) {
                    if ("custom" === K.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    var K, $ = H;
                    H = function(e) {
                        return e.config, $(u._(e, ["config"]))
                    }
                }
                if (P) {
                    "fill" === P && (B = !0);
                    var Y = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[P];
                    Y && (C = i._({}, C, Y));
                    var G = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[P];
                    G && !p && (p = G)
                }
                var J = "",
                    X = getInt(D),
                    Q = getInt(S);
                if ("object" == typeof(n = d) && (isStaticRequire(n) || void 0 !== n.src)) {
                    var Z = isStaticRequire(d) ? d.default : d;
                    if (!Z.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(Z));
                    if (!Z.height || !Z.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(Z));
                    if (c = Z.blurWidth, h = Z.blurHeight, O = O || Z.blurDataURL, J = Z.src, !B) {
                        if (X || Q) {
                            if (X && !Q) {
                                var ee = X / Z.width;
                                Q = Math.round(Z.height * ee)
                            } else if (!X && Q) {
                                var et = Q / Z.height;
                                X = Math.round(Z.width * et)
                            }
                        } else X = Z.width, Q = Z.height
                    }
                }
                var er = !b && ("lazy" === v || void 0 === v);
                (!(d = "string" == typeof d ? d : J) || d.startsWith("data:") || d.startsWith("blob:")) && (y = !0, er = !1), K.unoptimized && (y = !0), V && d.endsWith(".svg") && !K.dangerouslyAllowSVG && (y = !0), b && (U = "high");
                var en = getInt(_),
                    ei = Object.assign(B ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: T,
                        objectPosition: N
                    } : {}, R ? {} : {
                        color: "transparent"
                    }, C),
                    eo = k || "empty" === I ? null : "blur" === I ? 'url("data:image/svg+xml;charset=utf-8,' + (0, f.getImageBlurSvg)({
                        widthInt: X,
                        heightInt: Q,
                        blurWidth: c,
                        blurHeight: h,
                        blurDataURL: O || "",
                        objectFit: ei.objectFit
                    }) + '")' : 'url("' + I + '")',
                    ea = eo ? {
                        backgroundSize: ei.objectFit || "cover",
                        backgroundPosition: ei.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: eo
                    } : {},
                    eu = function(e) {
                        var t = e.config,
                            n = e.src,
                            i = e.unoptimized,
                            o = e.width,
                            u = e.quality,
                            f = e.sizes,
                            l = e.loader;
                        if (i) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        var c = function(e, t, n) {
                                var i = e.deviceSizes,
                                    o = e.allSizes;
                                if (n) {
                                    for (var u = /(^|\s)(1?\d?\d)vw/g, f = []; l = u.exec(n); l) f.push(parseInt(l[2]));
                                    if (f.length) {
                                        var l, c, h = .01 * (c = Math).min.apply(c, s._(f));
                                        return {
                                            widths: o.filter(function(e) {
                                                return e >= i[0] * h
                                            }),
                                            kind: "w"
                                        }
                                    }
                                    return {
                                        widths: o,
                                        kind: "w"
                                    }
                                }
                                return "number" != typeof t ? {
                                    widths: i,
                                    kind: "w"
                                } : {
                                    widths: s._(new Set([t, 2 * t].map(function(e) {
                                        return o.find(function(t) {
                                            return t >= e
                                        }) || o[o.length - 1]
                                    }))),
                                    kind: "x"
                                }
                            }(t, o, f),
                            h = c.widths,
                            d = c.kind,
                            p = h.length - 1;
                        return {
                            sizes: f || "w" !== d ? f : "100vw",
                            srcSet: h.map(function(e, i) {
                                return l({
                                    config: t,
                                    src: n,
                                    quality: u,
                                    width: e
                                }) + " " + ("w" === d ? e : i + 1) + d
                            }).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: u,
                                width: h[p]
                            })
                        }
                    }({
                        config: K,
                        src: d,
                        unoptimized: y,
                        width: X,
                        quality: en,
                        sizes: p,
                        loader: H
                    });
                return {
                    props: o._(i._({}, L), {
                        loading: er ? "lazy" : v,
                        fetchPriority: U,
                        width: X,
                        height: Q,
                        decoding: "async",
                        className: w,
                        style: i._({}, ei, ea),
                        sizes: eu.sizes,
                        srcSet: eu.srcSet,
                        src: eu.src
                    }),
                    meta: {
                        unoptimized: y,
                        priority: b,
                        placeholder: I,
                        fill: B
                    }
                }
            }
        },
        35793: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(35029);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function() {
                        return defaultHead
                    },
                    default: function() {
                        return _default
                    }
                });
            var o = n(21024),
                u = n(68533)._(n(2265)),
                s = o._(n(80110)),
                f = n(28569),
                l = n(61852),
                c = n(94472);

            function defaultHead(e) {
                void 0 === e && (e = !1);
                var t = [u.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(u.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function onlyReactElement(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === u.default.Fragment ? e.concat(u.default.Children.toArray(t.props.children).reduce(function(e, t) {
                    return "string" == typeof t || "number" == typeof t ? e : e.concat(t)
                }, [])) : e.concat(t)
            }
            n(92637);
            var h = ["name", "httpEquiv", "charSet", "itemProp"];

            function reduceComponents(e, t) {
                var n, o, s, f, l = t.inAmpMode;
                return e.reduce(onlyReactElement, []).reverse().concat(defaultHead(l).reverse()).filter((n = new Set, o = new Set, s = new Set, f = {}, function(e) {
                    var t = !0,
                        i = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        i = !0;
                        var u = e.key.slice(e.key.indexOf("$") + 1);
                        n.has(u) ? t = !1 : n.add(u)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            o.has(e.type) ? t = !1 : o.add(e.type);
                            break;
                        case "meta":
                            for (var l = 0, c = h.length; l < c; l++) {
                                var d = h[l];
                                if (e.props.hasOwnProperty(d)) {
                                    if ("charSet" === d) s.has(d) ? t = !1 : s.add(d);
                                    else {
                                        var p = e.props[d],
                                            g = f[d] || new Set;
                                        ("name" !== d || !i) && g.has(p) ? t = !1 : (g.add(p), f[d] = g)
                                    }
                                }
                            }
                    }
                    return t
                })).reverse().map(function(e, t) {
                    var n = e.key || t;
                    if (!l && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function(t) {
                            return e.props.href.startsWith(t)
                        })) {
                        var o = i._({}, e.props || {});
                        return o["data-href"] = o.href, o.href = void 0, o["data-optimized-fonts"] = !0, u.default.cloneElement(e, o)
                    }
                    return u.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            var _default = function(e) {
                var t = e.children,
                    n = (0, u.useContext)(f.AmpStateContext),
                    i = (0, u.useContext)(l.HeadManagerContext);
                return u.default.createElement(s.default, {
                    reduceComponentsToState: reduceComponents,
                    headManager: i,
                    inAmpMode: (0, c.isInAmpMode)(n)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61511: function(e, t) {
            "use strict";

            function getImageBlurSvg(e) {
                var t = e.widthInt,
                    n = e.heightInt,
                    i = e.blurWidth,
                    o = e.blurHeight,
                    u = e.blurDataURL,
                    s = e.objectFit,
                    f = i ? 40 * i : t,
                    l = o ? 40 * o : n,
                    c = f && l ? "viewBox='0 0 " + f + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + u + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return getImageBlurSvg
                }
            })
        },
        47327: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            var i = n(21024)._(n(2265)),
                o = n(17727),
                u = i.default.createContext(o.imageConfigDefault)
        },
        17727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return n
                    },
                    imageConfigDefault: function() {
                        return i
                    }
                });
            var n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                i = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        69950: function(e, t) {
            "use strict";

            function defaultLoader(e) {
                var t = e.config,
                    n = e.src,
                    i = e.width,
                    o = e.quality;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + i + "&q=" + (o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), defaultLoader.__next_img_default = !0;
            var n = defaultLoader
        },
        36304: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            var i = n(21024)._(n(2265)).default.createContext(null)
        },
        98130: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    formatUrl: function() {
                        return formatUrl
                    },
                    urlObjectKeys: function() {
                        return u
                    },
                    formatWithValidation: function() {
                        return formatWithValidation
                    }
                });
            var i = n(68533)._(n(55991)),
                o = /https?|ftp|gopher|file/;

            function formatUrl(e) {
                var t = e.auth,
                    n = e.hostname,
                    u = e.protocol || "",
                    s = e.pathname || "",
                    f = e.hash || "",
                    l = e.query || "",
                    c = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : n && (c = t + (~n.indexOf(":") ? "[" + n + "]" : n), e.port && (c += ":" + e.port)), l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
                var h = e.search || l && "?" + l || "";
                return u && !u.endsWith(":") && (u += ":"), e.slashes || (!u || o.test(u)) && !1 !== c ? (c = "//" + (c || ""), s && "/" !== s[0] && (s = "/" + s)) : c || (c = ""), f && "#" !== f[0] && (f = "#" + f), h && "?" !== h[0] && (h = "?" + h), "" + u + c + (s = s.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + f
            }
            var u = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function formatWithValidation(e) {
                return formatUrl(e)
            }
        },
        29289: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getSortedRoutes: function() {
                        return i.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return o.isDynamicRoute
                    }
                });
            var i = n(39255),
                o = n(55321)
        },
        20948: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return interpolateAs
                }
            });
            var i = n(21670),
                o = n(44586);

            function interpolateAs(e, t, n) {
                var u = "",
                    s = (0, o.getRouteRegex)(e),
                    f = s.groups,
                    l = (t !== e ? (0, i.getRouteMatcher)(s)(t) : "") || n;
                u = e;
                var c = Object.keys(f);
                return c.every(function(e) {
                    var t = l[e] || "",
                        n = f[e],
                        i = n.repeat,
                        o = n.optional,
                        s = "[" + (i ? "..." : "") + e + "]";
                    return o && (s = (t ? "" : "/") + "[" + s + "]"), i && !Array.isArray(t) && (t = [t]), (o || e in l) && (u = u.replace(s, i ? t.map(function(e) {
                        return encodeURIComponent(e)
                    }).join("/") : encodeURIComponent(t)) || "/")
                }) || (u = ""), {
                    params: c,
                    result: u
                }
            }
        },
        55321: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return isDynamicRoute
                }
            });
            var n = /\/\[[^/]+?\](?=\/|$)/;

            function isDynamicRoute(e) {
                return n.test(e)
            }
        },
        68664: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return isLocalURL
                }
            });
            var i = n(36681),
                o = n(26746);

            function isLocalURL(e) {
                if (!(0, i.isAbsoluteUrl)(e)) return !0;
                try {
                    var t = (0, i.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, o.hasBasePath)(n.pathname)
                } catch (e) {
                    return !1
                }
            }
        },
        58137: function(e, t) {
            "use strict";

            function omit(e, t) {
                var n = {};
                return Object.keys(e).forEach(function(i) {
                    t.includes(i) || (n[i] = e[i])
                }), n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "omit", {
                enumerable: !0,
                get: function() {
                    return omit
                }
            })
        },
        55991: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(24670);

            function searchParamsToUrlQuery(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    void 0 === t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e]
                }), t
            }

            function stringifyUrlQueryParam(e) {
                return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function urlQueryToSearchParams(e) {
                var t = new URLSearchParams;
                return Object.entries(e).forEach(function(e) {
                    var n = i._(e, 2),
                        o = n[0],
                        u = n[1];
                    Array.isArray(u) ? u.forEach(function(e) {
                        return t.append(o, stringifyUrlQueryParam(e))
                    }) : t.set(o, stringifyUrlQueryParam(u))
                }), t
            }

            function assign(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return n.forEach(function(t) {
                    Array.from(t.keys()).forEach(function(t) {
                        return e.delete(t)
                    }), t.forEach(function(t, n) {
                        return e.append(n, t)
                    })
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    searchParamsToUrlQuery: function() {
                        return searchParamsToUrlQuery
                    },
                    urlQueryToSearchParams: function() {
                        return urlQueryToSearchParams
                    },
                    assign: function() {
                        return assign
                    }
                })
        },
        21670: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return getRouteMatcher
                }
            });
            var i = n(36681);

            function getRouteMatcher(e) {
                var t = e.re,
                    n = e.groups;
                return function(e) {
                    var o = t.exec(e);
                    if (!o) return !1;
                    var decode = function(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (e) {
                                throw new i.DecodeError("failed to decode param")
                            }
                        },
                        u = {};
                    return Object.keys(n).forEach(function(e) {
                        var t = n[e],
                            i = o[t.pos];
                        void 0 !== i && (u[e] = ~i.indexOf("/") ? i.split("/").map(function(e) {
                            return decode(e)
                        }) : t.repeat ? [decode(i)] : decode(i))
                    }), u
                }
            }
        },
        44586: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(35029),
                o = n(88965);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getRouteRegex: function() {
                        return getRouteRegex
                    },
                    getNamedRouteRegex: function() {
                        return getNamedRouteRegex
                    },
                    getNamedMiddlewareRegex: function() {
                        return getNamedMiddlewareRegex
                    }
                });
            var u = n(84507),
                s = n(24910),
                f = n(39006);

            function parseParameter(e) {
                var t = e.startsWith("[") && e.endsWith("]");
                t && (e = e.slice(1, -1));
                var n = e.startsWith("...");
                return n && (e = e.slice(3)), {
                    key: e,
                    repeat: n,
                    optional: t
                }
            }

            function getParametrizedRoute(e) {
                var t = (0, f.removeTrailingSlash)(e).slice(1).split("/"),
                    n = {},
                    i = 1;
                return {
                    parameterizedRoute: t.map(function(e) {
                        var t = u.INTERCEPTION_ROUTE_MARKERS.find(function(t) {
                                return e.startsWith(t)
                            }),
                            o = e.match(/\[((?:\[.*\])|.+)\]/);
                        if (t && o) {
                            var f = parseParameter(o[1]),
                                l = f.key,
                                c = f.optional,
                                h = f.repeat;
                            return n[l] = {
                                pos: i++,
                                repeat: h,
                                optional: c
                            }, "/" + (0, s.escapeStringRegexp)(t) + "([^/]+?)"
                        }
                        if (!o) return "/" + (0, s.escapeStringRegexp)(e);
                        var d = parseParameter(o[1]),
                            p = d.key,
                            g = d.repeat,
                            y = d.optional;
                        return n[p] = {
                            pos: i++,
                            repeat: g,
                            optional: y
                        }, g ? y ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }).join(""),
                    groups: n
                }
            }

            function getRouteRegex(e) {
                var t = getParametrizedRoute(e),
                    n = t.parameterizedRoute,
                    i = t.groups;
                return {
                    re: RegExp("^" + n + "(?:/)?$"),
                    groups: i
                }
            }

            function getSafeKeyFromSegment(e) {
                var t = e.getSafeRouteKey,
                    n = e.segment,
                    i = e.routeKeys,
                    o = e.keyPrefix,
                    u = parseParameter(n),
                    s = u.key,
                    f = u.optional,
                    l = u.repeat,
                    c = s.replace(/\W/g, "");
                o && (c = "" + o + c);
                var h = !1;
                return (0 === c.length || c.length > 30) && (h = !0), isNaN(parseInt(c.slice(0, 1))) || (h = !0), h && (c = t()), o ? i[c] = "" + o + s : i[c] = "" + s, l ? f ? "(?:/(?<" + c + ">.+?))?" : "/(?<" + c + ">.+?)" : "/(?<" + c + ">[^/]+?)"
            }

            function getNamedParametrizedRoute(e, t) {
                var n, i = (0, f.removeTrailingSlash)(e).slice(1).split("/"),
                    o = (n = 0, function() {
                        for (var e = "", t = ++n; t > 0;) e += String.fromCharCode(97 + (t - 1) % 26), t = Math.floor((t - 1) / 26);
                        return e
                    }),
                    l = {};
                return {
                    namedParameterizedRoute: i.map(function(e) {
                        var n = u.INTERCEPTION_ROUTE_MARKERS.some(function(t) {
                                return e.startsWith(t)
                            }),
                            i = e.match(/\[((?:\[.*\])|.+)\]/);
                        return n && i ? getSafeKeyFromSegment({
                            getSafeRouteKey: o,
                            segment: i[1],
                            routeKeys: l,
                            keyPrefix: t ? "nxtI" : void 0
                        }) : i ? getSafeKeyFromSegment({
                            getSafeRouteKey: o,
                            segment: i[1],
                            routeKeys: l,
                            keyPrefix: t ? "nxtP" : void 0
                        }) : "/" + (0, s.escapeStringRegexp)(e)
                    }).join(""),
                    routeKeys: l
                }
            }

            function getNamedRouteRegex(e, t) {
                var n = getNamedParametrizedRoute(e, t);
                return o._(i._({}, getRouteRegex(e)), {
                    namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: n.routeKeys
                })
            }

            function getNamedMiddlewareRegex(e, t) {
                var n = getParametrizedRoute(e).parameterizedRoute,
                    i = t.catchAll,
                    o = void 0 === i || i;
                return "/" === n ? {
                    namedRegex: "^/" + (o ? ".*" : "") + "$"
                } : {
                    namedRegex: "^" + getNamedParametrizedRoute(e, !1).namedParameterizedRoute + (o ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        39255: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(22977),
                o = n(98449),
                u = n(1801);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return getSortedRoutes
                }
            });
            var s = function() {
                function UrlNode() {
                    i._(this, UrlNode), this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
                return o._(UrlNode, [{
                    key: "insert",
                    value: function(e) {
                        this._insert(e.split("/").filter(Boolean), [], !1)
                    }
                }, {
                    key: "smoosh",
                    value: function() {
                        return this._smoosh()
                    }
                }, {
                    key: "_smoosh",
                    value: function(e) {
                        var t = this;
                        void 0 === e && (e = "/");
                        var n = u._(this.children.keys()).sort();
                        null !== this.slugName && n.splice(n.indexOf("[]"), 1), null !== this.restSlugName && n.splice(n.indexOf("[...]"), 1), null !== this.optionalRestSlugName && n.splice(n.indexOf("[[...]]"), 1);
                        var i = n.map(function(n) {
                            return t.children.get(n)._smoosh("" + e + n + "/")
                        }).reduce(function(e, t) {
                            return u._(e).concat(u._(t))
                        }, []);
                        if (null !== this.slugName && i.push.apply(i, u._(this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/"))), !this.placeholder) {
                            var o = "/" === e ? "/" : e.slice(0, -1);
                            if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + o + '" and "' + o + "[[..." + this.optionalRestSlugName + ']]").');
                            i.unshift(o)
                        }
                        return null !== this.restSlugName && i.push.apply(i, u._(this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/"))), null !== this.optionalRestSlugName && i.push.apply(i, u._(this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"))), i
                    }
                }, {
                    key: "_insert",
                    value: function(e, t, n) {
                        if (0 === e.length) {
                            this.placeholder = !1;
                            return
                        }
                        if (n) throw Error("Catch-all must be the last part of the URL.");
                        var i = e[0];
                        if (i.startsWith("[") && i.endsWith("]")) {
                            var handleSlug = function(e, n) {
                                    if (null !== e && e !== n) throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + n + "').");
                                    t.forEach(function(e) {
                                        if (e === n) throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
                                        if (e.replace(/\W/g, "") === i.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + e + '" and "' + n + '" differ only by non-word symbols within a single dynamic path')
                                    }), t.push(n)
                                },
                                o = i.slice(1, -1),
                                u = !1;
                            if (o.startsWith("[") && o.endsWith("]") && (o = o.slice(1, -1), u = !0), o.startsWith("...") && (o = o.substring(3), n = !0), o.startsWith("[") || o.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + o + "').");
                            if (o.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + o + "').");
                            if (n) {
                                if (u) {
                                    if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                                    handleSlug(this.optionalRestSlugName, o), this.optionalRestSlugName = o, i = "[[...]]"
                                } else {
                                    if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                                    handleSlug(this.restSlugName, o), this.restSlugName = o, i = "[...]"
                                }
                            } else {
                                if (u) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
                                handleSlug(this.slugName, o), this.slugName = o, i = "[]"
                            }
                        }
                        this.children.has(i) || this.children.set(i, new UrlNode), this.children.get(i)._insert(e.slice(1), t, n)
                    }
                }]), UrlNode
            }();

            function getSortedRoutes(e) {
                var t = new s;
                return e.forEach(function(e) {
                    return t.insert(e)
                }), t.smoosh()
            }
        },
        80110: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return SideEffect
                }
            });
            var i = n(2265),
                o = i.useLayoutEffect,
                u = i.useEffect;

            function SideEffect(e) {
                var t = e.headManager,
                    n = e.reduceComponentsToState;

                function emitChange() {
                    if (t && t.mountedInstances) {
                        var o = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(o, e))
                    }
                }
                return o(function() {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                        function() {
                            var n;
                            null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                        }
                }), o(function() {
                    return t && (t._pendingUpdate = emitChange),
                        function() {
                            t && (t._pendingUpdate = emitChange)
                        }
                }), u(function() {
                    return t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null),
                        function() {
                            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                        }
                }), null
            }
        },
        36681: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(16687),
                o = n(22977),
                u = n(6408),
                s = n(1801),
                f = n(56417),
                l = n(93891),
                c = n(89623);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    WEB_VITALS: function() {
                        return h
                    },
                    execOnce: function() {
                        return execOnce
                    },
                    isAbsoluteUrl: function() {
                        return isAbsoluteUrl
                    },
                    getLocationOrigin: function() {
                        return getLocationOrigin
                    },
                    getURL: function() {
                        return getURL
                    },
                    getDisplayName: function() {
                        return getDisplayName
                    },
                    isResSent: function() {
                        return isResSent
                    },
                    normalizeRepeatedSlashes: function() {
                        return normalizeRepeatedSlashes
                    },
                    loadGetInitialProps: function() {
                        return loadGetInitialProps
                    },
                    SP: function() {
                        return p
                    },
                    ST: function() {
                        return g
                    },
                    DecodeError: function() {
                        return y
                    },
                    NormalizeError: function() {
                        return m
                    },
                    PageNotFoundError: function() {
                        return b
                    },
                    MissingStaticPage: function() {
                        return v
                    },
                    MiddlewareNotFoundError: function() {
                        return w
                    },
                    stringifyError: function() {
                        return stringifyError
                    }
                });
            var h = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function execOnce(e) {
                var t, n = !1;
                return function() {
                    for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
                    return n || (n = !0, t = e.apply(void 0, s._(o))), t
                }
            }
            var d = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                isAbsoluteUrl = function(e) {
                    return d.test(e)
                };

            function getLocationOrigin() {
                var e = window.location,
                    t = e.protocol,
                    n = e.hostname,
                    i = e.port;
                return t + "//" + n + (i ? ":" + i : "")
            }

            function getURL() {
                var e = window.location.href,
                    t = getLocationOrigin();
                return e.substring(t.length)
            }

            function getDisplayName(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function isResSent(e) {
                return e.finished || e.headersSent
            }

            function normalizeRepeatedSlashes(e) {
                var t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }

            function loadGetInitialProps(e, t) {
                return _loadGetInitialProps.apply(this, arguments)
            }

            function _loadGetInitialProps() {
                return (_loadGetInitialProps = i._(function(e, t) {
                    var n, i, o;
                    return c._(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (n = t.res || t.ctx && t.ctx.res, e.getInitialProps) return [3, 3];
                                if (!(t.ctx && t.Component)) return [3, 2];
                                return i = {}, [4, loadGetInitialProps(t.Component, t.ctx)];
                            case 1:
                                return [2, (i.pageProps = u.sent(), i)];
                            case 2:
                                return [2, {}];
                            case 3:
                                return [4, e.getInitialProps(t)];
                            case 4:
                                if (o = u.sent(), n && isResSent(n)) return [2, o];
                                if (!o) throw Error('"' + getDisplayName(e) + '.getInitialProps()" should resolve to an object. But found "' + o + '" instead.');
                                return [2, o]
                        }
                    })
                })).apply(this, arguments)
            }
            var p = "undefined" != typeof performance,
                g = p && ["mark", "measure", "getEntriesByName"].every(function(e) {
                    return "function" == typeof performance[e]
                }),
                y = function(e) {
                    u._(DecodeError, e);
                    var t = l._(DecodeError);

                    function DecodeError() {
                        return o._(this, DecodeError), t.apply(this, arguments)
                    }
                    return DecodeError
                }(f._(Error)),
                m = function(e) {
                    u._(NormalizeError, e);
                    var t = l._(NormalizeError);

                    function NormalizeError() {
                        return o._(this, NormalizeError), t.apply(this, arguments)
                    }
                    return NormalizeError
                }(f._(Error)),
                b = function(e) {
                    u._(PageNotFoundError, e);
                    var t = l._(PageNotFoundError);

                    function PageNotFoundError(e) {
                        var n;
                        return o._(this, PageNotFoundError), (n = t.call(this)).code = "ENOENT", n.name = "PageNotFoundError", n.message = "Cannot find module for page: " + e, n
                    }
                    return PageNotFoundError
                }(f._(Error)),
                v = function(e) {
                    u._(MissingStaticPage, e);
                    var t = l._(MissingStaticPage);

                    function MissingStaticPage(e, n) {
                        var i;
                        return o._(this, MissingStaticPage), (i = t.call(this)).message = "Failed to load static file for page: " + e + " " + n, i
                    }
                    return MissingStaticPage
                }(f._(Error)),
                w = function(e) {
                    u._(MiddlewareNotFoundError, e);
                    var t = l._(MiddlewareNotFoundError);

                    function MiddlewareNotFoundError() {
                        var e;
                        return o._(this, MiddlewareNotFoundError), (e = t.call(this)).code = "ENOENT", e.message = "Cannot find the middleware module", e
                    }
                    return MiddlewareNotFoundError
                }(f._(Error));

            function stringifyError(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        },
        92637: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return warnOnce
                }
            });
            var warnOnce = function(e) {}
        },
        30622: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = n(2265),
                o = Symbol.for("react.element"),
                u = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function q(e, t, n) {
                var i, u = {},
                    c = null,
                    h = null;
                for (i in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (h = t.ref), t) s.call(t, i) && !l.hasOwnProperty(i) && (u[i] = t[i]);
                if (e && e.defaultProps)
                    for (i in t = e.defaultProps) void 0 === u[i] && (u[i] = t[i]);
                return {
                    $$typeof: o,
                    type: e,
                    key: c,
                    ref: h,
                    props: u,
                    _owner: f.current
                }
            }
            t.Fragment = u, t.jsx = q, t.jsxs = q
        },
        57437: function(e, t, n) {
            "use strict";
            e.exports = n(30622)
        },
        61396: function(e, t, n) {
            e.exports = n(68326)
        },
        25566: function(e) {
            var t, n, i, o = e.exports = {};

            function defaultSetTimout() {
                throw Error("setTimeout has not been defined")
            }

            function defaultClearTimeout() {
                throw Error("clearTimeout has not been defined")
            }

            function runTimeout(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
                } catch (e) {
                    t = defaultSetTimout
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    n = defaultClearTimeout
                }
            }();
            var u = [],
                s = !1,
                f = -1;

            function cleanUpNextTick() {
                s && i && (s = !1, i.length ? u = i.concat(u) : f = -1, u.length && drainQueue())
            }

            function drainQueue() {
                if (!s) {
                    var e = runTimeout(cleanUpNextTick);
                    s = !0;
                    for (var t = u.length; t;) {
                        for (i = u, u = []; ++f < t;) i && i[f].run();
                        f = -1, t = u.length
                    }
                    i = null, s = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function Item(e, t) {
                this.fun = e, this.array = t
            }

            function noop() {}
            o.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new Item(e, t)), 1 !== u.length || s || runTimeout(drainQueue)
            }, Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = noop, o.addListener = noop, o.once = noop, o.off = noop, o.removeListener = noop, o.removeAllListeners = noop, o.emit = noop, o.prependListener = noop, o.prependOnceListener = noop, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        75298: function(e, t, n) {
            let i = n(47363),
                o = n(37621),
                u = n(46028),
                s = n(12330);

            function renderCanvas(e, t, n, u, s) {
                let f = [].slice.call(arguments, 1),
                    l = f.length,
                    c = "function" == typeof f[l - 1];
                if (!c && !i()) throw Error("Callback required as last argument");
                if (c) {
                    if (l < 2) throw Error("Too few arguments provided");
                    2 === l ? (s = n, n = t, t = u = void 0) : 3 === l && (t.getContext && void 0 === s ? (s = u, u = void 0) : (s = u, u = n, n = t, t = void 0))
                } else {
                    if (l < 1) throw Error("Too few arguments provided");
                    return 1 === l ? (n = t, t = u = void 0) : 2 !== l || t.getContext || (u = n, n = t, t = void 0), new Promise(function(i, s) {
                        try {
                            let s = o.create(n, u);
                            i(e(s, t, u))
                        } catch (e) {
                            s(e)
                        }
                    })
                }
                try {
                    let i = o.create(n, u);
                    s(null, e(i, t, u))
                } catch (e) {
                    s(e)
                }
            }
            t.create = o.create, t.toCanvas = renderCanvas.bind(null, u.render), t.toDataURL = renderCanvas.bind(null, u.renderToDataURL), t.toString = renderCanvas.bind(null, function(e, t, n) {
                return s.render(e, n)
            })
        },
        47363: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        8177: function(e, t, n) {
            let i = n(13400).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    n = i(e),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    u = [n - 7];
                for (let e = 1; e < t - 1; e++) u[e] = u[e - 1] - o;
                return u.push(6), u.reverse()
            }, t.getPositions = function(e) {
                let n = [],
                    i = t.getRowColCoords(e),
                    o = i.length;
                for (let e = 0; e < o; e++)
                    for (let t = 0; t < o; t++)(0 !== e || 0 !== t) && (0 !== e || t !== o - 1) && (e !== o - 1 || 0 !== t) && n.push([i[e], i[t]]);
                return n
            }
        },
        77654: function(e, t, n) {
            let i = n(37662),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function AlphanumericData(e) {
                this.mode = i.ALPHANUMERIC, this.data = e
            }
            AlphanumericData.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + 6 * (e % 2)
            }, AlphanumericData.prototype.getLength = function() {
                return this.data.length
            }, AlphanumericData.prototype.getBitsLength = function() {
                return AlphanumericData.getBitsLength(this.data.length)
            }, AlphanumericData.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * o.indexOf(this.data[t]);
                    n += o.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
            }, e.exports = AlphanumericData
        },
        41904: function(e) {
            function BitBuffer() {
                this.buffer = [], this.length = 0
            }
            BitBuffer.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = BitBuffer
        },
        21091: function(e) {
            function BitMatrix(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            BitMatrix.prototype.set = function(e, t, n, i) {
                let o = e * this.size + t;
                this.data[o] = n, i && (this.reservedBit[o] = !0)
            }, BitMatrix.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, BitMatrix.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, BitMatrix.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = BitMatrix
        },
        90690: function(e, t, n) {
            let i = n(53216),
                o = n(37662);

            function ByteData(e) {
                this.mode = o.BYTE, "string" == typeof e && (e = i(e)), this.data = new Uint8Array(e)
            }
            ByteData.getBitsLength = function(e) {
                return 8 * e
            }, ByteData.prototype.getLength = function() {
                return this.data.length
            }, ByteData.prototype.getBitsLength = function() {
                return ByteData.getBitsLength(this.data.length)
            }, ByteData.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = ByteData
        },
        37039: function(e, t, n) {
            let i = n(9406),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                u = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case i.L:
                        return o[(e - 1) * 4 + 0];
                    case i.M:
                        return o[(e - 1) * 4 + 1];
                    case i.Q:
                        return o[(e - 1) * 4 + 2];
                    case i.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case i.L:
                        return u[(e - 1) * 4 + 0];
                    case i.M:
                        return u[(e - 1) * 4 + 1];
                    case i.Q:
                        return u[(e - 1) * 4 + 2];
                    case i.H:
                        return u[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        9406: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        78241: function(e, t, n) {
            let i = n(13400).getSymbolSize;
            t.getPositions = function(e) {
                let t = i(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        50237: function(e, t, n) {
            let i = n(13400),
                o = i.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let n = e.bit << 3 | t,
                    u = n << 10;
                for (; i.getBCHDigit(u) - o >= 0;) u ^= 1335 << i.getBCHDigit(u) - o;
                return (n << 10 | u) ^ 21522
            }
        },
        51309: function(e, t) {
            let n = new Uint8Array(512),
                i = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return i[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[i[e] + i[t]]
            }
        },
        69592: function(e, t, n) {
            let i = n(37662),
                o = n(13400);

            function KanjiData(e) {
                this.mode = i.KANJI, this.data = e
            }
            KanjiData.getBitsLength = function(e) {
                return 13 * e
            }, KanjiData.prototype.getLength = function() {
                return this.data.length
            }, KanjiData.prototype.getBitsLength = function() {
                return KanjiData.getBitsLength(this.data.length)
            }, KanjiData.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = o.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13)
                }
            }, e.exports = KanjiData
        },
        68334: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    i = 0,
                    o = 0,
                    u = 0,
                    s = null,
                    f = null;
                for (let l = 0; l < t; l++) {
                    o = u = 0, s = f = null;
                    for (let c = 0; c < t; c++) {
                        let t = e.get(l, c);
                        t === s ? o++ : (o >= 5 && (i += n.N1 + (o - 5)), s = t, o = 1), (t = e.get(c, l)) === f ? u++ : (u >= 5 && (i += n.N1 + (u - 5)), f = t, u = 1)
                    }
                    o >= 5 && (i += n.N1 + (o - 5)), u >= 5 && (i += n.N1 + (u - 5))
                }
                return i
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    i = 0;
                for (let n = 0; n < t - 1; n++)
                    for (let o = 0; o < t - 1; o++) {
                        let t = e.get(n, o) + e.get(n, o + 1) + e.get(n + 1, o) + e.get(n + 1, o + 1);
                        (4 === t || 0 === t) && i++
                    }
                return i * n.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    i = 0,
                    o = 0,
                    u = 0;
                for (let n = 0; n < t; n++) {
                    o = u = 0;
                    for (let s = 0; s < t; s++) o = o << 1 & 2047 | e.get(n, s), s >= 10 && (1488 === o || 93 === o) && i++, u = u << 1 & 2047 | e.get(s, n), s >= 10 && (1488 === u || 93 === u) && i++
                }
                return i * n.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    i = e.data.length;
                for (let n = 0; n < i; n++) t += e.data[n];
                let o = Math.abs(Math.ceil(100 * t / i / 5) - 10);
                return o * n.N4
            }, t.applyMask = function(e, n) {
                let i = n.size;
                for (let o = 0; o < i; o++)
                    for (let u = 0; u < i; u++) n.isReserved(u, o) || n.xor(u, o, function(e, n, i) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (n + i) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return i % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (n + i) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(i / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return n * i % 2 + n * i % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (n * i % 2 + n * i % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (n * i % 3 + (n + i) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, u, o))
            }, t.getBestMask = function(e, n) {
                let i = Object.keys(t.Patterns).length,
                    o = 0,
                    u = 1 / 0;
                for (let s = 0; s < i; s++) {
                    n(s), t.applyMask(s, e);
                    let i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(s, e), i < u && (u = i, o = s)
                }
                return o
            }
        },
        37662: function(e, t, n) {
            let i = n(64956),
                o = n(66579);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!i.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        10894: function(e, t, n) {
            let i = n(37662);

            function NumericData(e) {
                this.mode = i.NUMERIC, this.data = e.toString()
            }
            NumericData.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, NumericData.prototype.getLength = function() {
                return this.data.length
            }, NumericData.prototype.getBitsLength = function() {
                return NumericData.getBitsLength(this.data.length)
            }, NumericData.prototype.write = function(e) {
                let t, n;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = parseInt(this.data.substr(t, 3), 10), e.put(n, 10);
                let i = this.data.length - t;
                i > 0 && (n = parseInt(this.data.substr(t), 10), e.put(n, 3 * i + 1))
            }, e.exports = NumericData
        },
        25153: function(e, t, n) {
            let i = n(51309);
            t.mul = function(e, t) {
                let n = new Uint8Array(e.length + t.length - 1);
                for (let o = 0; o < e.length; o++)
                    for (let u = 0; u < t.length; u++) n[o + u] ^= i.mul(e[o], t[u]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    let e = n[0];
                    for (let o = 0; o < t.length; o++) n[o] ^= i.mul(t[o], e);
                    let o = 0;
                    for (; o < n.length && 0 === n[o];) o++;
                    n = n.slice(o)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < e; o++) n = t.mul(n, new Uint8Array([1, i.exp(o)]));
                return n
            }
        },
        37621: function(e, t, n) {
            let i = n(13400),
                o = n(9406),
                u = n(41904),
                s = n(21091),
                f = n(8177),
                l = n(78241),
                c = n(68334),
                h = n(37039),
                d = n(9936),
                p = n(48670),
                g = n(50237),
                y = n(37662),
                m = n(25082);

            function setupFormatInfo(e, t, n) {
                let i, o;
                let u = e.size,
                    s = g.getEncodedBits(t, n);
                for (i = 0; i < 15; i++) o = (s >> i & 1) == 1, i < 6 ? e.set(i, 8, o, !0) : i < 8 ? e.set(i + 1, 8, o, !0) : e.set(u - 15 + i, 8, o, !0), i < 8 ? e.set(8, u - i - 1, o, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, o, !0) : e.set(8, 15 - i - 1, o, !0);
                e.set(u - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let n, g;
                if (void 0 === e || "" === e) throw Error("No input text");
                let b = o.M;
                return void 0 !== t && (b = o.from(t.errorCorrectionLevel, o.M), n = p.from(t.version), g = c.from(t.maskPattern), t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, n, o) {
                        let g;
                        if (Array.isArray(e)) g = m.fromArray(e);
                        else if ("string" == typeof e) {
                            let i = t;
                            if (!i) {
                                let t = m.rawSplit(e);
                                i = p.getBestVersionForData(t, n)
                            }
                            g = m.fromString(e, i || 40)
                        } else throw Error("Invalid data");
                        let b = p.getBestVersionForData(g, n);
                        if (!b) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < b) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + b + ".\n")
                        } else t = b;
                        let v = function(e, t, n) {
                                let o = new u;
                                n.forEach(function(t) {
                                    o.put(t.mode.bit, 4), o.put(t.getLength(), y.getCharCountIndicator(t.mode, e)), t.write(o)
                                });
                                let s = i.getSymbolTotalCodewords(e),
                                    f = h.getTotalCodewordsCount(e, t),
                                    l = (s - f) * 8;
                                for (o.getLengthInBits() + 4 <= l && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let c = (l - o.getLengthInBits()) / 8;
                                for (let e = 0; e < c; e++) o.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, n) {
                                    let o, u;
                                    let s = i.getSymbolTotalCodewords(t),
                                        f = h.getTotalCodewordsCount(t, n),
                                        l = s - f,
                                        c = h.getBlocksCount(t, n),
                                        p = s % c,
                                        g = c - p,
                                        y = Math.floor(s / c),
                                        m = Math.floor(l / c),
                                        b = m + 1,
                                        v = y - m,
                                        w = new d(v),
                                        _ = 0,
                                        D = Array(c),
                                        S = Array(c),
                                        A = 0,
                                        B = new Uint8Array(e.buffer);
                                    for (let e = 0; e < c; e++) {
                                        let t = e < g ? m : b;
                                        D[e] = B.slice(_, _ + t), S[e] = w.encode(D[e]), _ += t, A = Math.max(A, t)
                                    }
                                    let C = new Uint8Array(s),
                                        x = 0;
                                    for (o = 0; o < A; o++)
                                        for (u = 0; u < c; u++) o < D[u].length && (C[x++] = D[u][o]);
                                    for (o = 0; o < v; o++)
                                        for (u = 0; u < c; u++) C[x++] = S[u][o];
                                    return C
                                }(o, e, t)
                            }(t, n, g),
                            w = i.getSymbolSize(t),
                            _ = new s(w);
                        return function(e, t) {
                                let n = e.size,
                                    i = l.getPositions(t);
                                for (let t = 0; t < i.length; t++) {
                                    let o = i[t][0],
                                        u = i[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(o + t <= -1) && !(n <= o + t))
                                            for (let i = -1; i <= 7; i++) u + i <= -1 || n <= u + i || (t >= 0 && t <= 6 && (0 === i || 6 === i) || i >= 0 && i <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && i >= 2 && i <= 4 ? e.set(o + t, u + i, !0, !0) : e.set(o + t, u + i, !1, !0))
                                }
                            }(_, t),
                            function(e) {
                                let t = e.size;
                                for (let n = 8; n < t - 8; n++) {
                                    let t = n % 2 == 0;
                                    e.set(n, 6, t, !0), e.set(6, n, t, !0)
                                }
                            }(_),
                            function(e, t) {
                                let n = f.getPositions(t);
                                for (let t = 0; t < n.length; t++) {
                                    let i = n[t][0],
                                        o = n[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let n = -2; n <= 2; n++) - 2 === t || 2 === t || -2 === n || 2 === n || 0 === t && 0 === n ? e.set(i + t, o + n, !0, !0) : e.set(i + t, o + n, !1, !0)
                                }
                            }(_, t), setupFormatInfo(_, n, 0), t >= 7 && function(e, t) {
                                let n, i, o;
                                let u = e.size,
                                    s = p.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) n = Math.floor(t / 3), i = t % 3 + u - 8 - 3, o = (s >> t & 1) == 1, e.set(n, i, o, !0), e.set(i, n, o, !0)
                            }(_, t),
                            function(e, t) {
                                let n = e.size,
                                    i = -1,
                                    o = n - 1,
                                    u = 7,
                                    s = 0;
                                for (let f = n - 1; f > 0; f -= 2)
                                    for (6 === f && f--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!e.isReserved(o, f - n)) {
                                                let i = !1;
                                                s < t.length && (i = (t[s] >>> u & 1) == 1), e.set(o, f - n, i), -1 == --u && (s++, u = 7)
                                            }
                                        if ((o += i) < 0 || n <= o) {
                                            o -= i, i = -i;
                                            break
                                        }
                                    }
                            }(_, v), isNaN(o) && (o = c.getBestMask(_, setupFormatInfo.bind(null, _, n))), c.applyMask(o, _), setupFormatInfo(_, n, o), {
                                modules: _,
                                version: t,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: g
                            }
                    }(e, n, b, g)
            }
        },
        9936: function(e, t, n) {
            let i = n(25153);

            function ReedSolomonEncoder(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            ReedSolomonEncoder.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = i.generateECPolynomial(this.degree)
            }, ReedSolomonEncoder.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let n = i.mod(t, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(n, o), e
                }
                return n
            }, e.exports = ReedSolomonEncoder
        },
        66579: function(e, t) {
            let n = "[0-9]+",
                i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            i = i.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(i, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(o, "g"), t.NUMERIC = RegExp(n, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let u = RegExp("^" + i + "$"),
                s = RegExp("^" + n + "$"),
                f = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return u.test(e)
            }, t.testNumeric = function(e) {
                return s.test(e)
            }, t.testAlphanumeric = function(e) {
                return f.test(e)
            }
        },
        25082: function(e, t, n) {
            let i = n(37662),
                o = n(10894),
                u = n(77654),
                s = n(90690),
                f = n(69592),
                l = n(66579),
                c = n(13400),
                h = n(78343);

            function getStringByteLength(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function getSegments(e, t, n) {
                let i;
                let o = [];
                for (; null !== (i = e.exec(n));) o.push({
                    data: i[0],
                    index: i.index,
                    mode: t,
                    length: i[0].length
                });
                return o
            }

            function getSegmentsFromString(e) {
                let t, n;
                let o = getSegments(l.NUMERIC, i.NUMERIC, e),
                    u = getSegments(l.ALPHANUMERIC, i.ALPHANUMERIC, e);
                c.isKanjiModeEnabled() ? (t = getSegments(l.BYTE, i.BYTE, e), n = getSegments(l.KANJI, i.KANJI, e)) : (t = getSegments(l.BYTE_KANJI, i.BYTE, e), n = []);
                let s = o.concat(u, t, n);
                return s.sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function getSegmentBitsLength(e, t) {
                switch (t) {
                    case i.NUMERIC:
                        return o.getBitsLength(e);
                    case i.ALPHANUMERIC:
                        return u.getBitsLength(e);
                    case i.KANJI:
                        return f.getBitsLength(e);
                    case i.BYTE:
                        return s.getBitsLength(e)
                }
            }

            function buildSingleSegment(e, t) {
                let n;
                let l = i.getBestModeForData(e);
                if ((n = i.from(t, l)) !== i.BYTE && n.bit < l.bit) throw Error('"' + e + '" cannot be encoded with mode ' + i.toString(n) + ".\n Suggested mode is: " + i.toString(l));
                switch (n !== i.KANJI || c.isKanjiModeEnabled() || (n = i.BYTE), n) {
                    case i.NUMERIC:
                        return new o(e);
                    case i.ALPHANUMERIC:
                        return new u(e);
                    case i.KANJI:
                        return new f(e);
                    case i.BYTE:
                        return new s(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(buildSingleSegment(t, null)) : t.data && e.push(buildSingleSegment(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, n) {
                let o = getSegmentsFromString(e, c.isKanjiModeEnabled()),
                    u = function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let o = e[n];
                            switch (o.mode) {
                                case i.NUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: i.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case i.ALPHANUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case i.KANJI:
                                    t.push([o, {
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: getStringByteLength(o.data)
                                    }]);
                                    break;
                                case i.BYTE:
                                    t.push([{
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: getStringByteLength(o.data)
                                    }])
                            }
                        }
                        return t
                    }(o),
                    s = function(e, t) {
                        let n = {},
                            o = {
                                start: {}
                            },
                            u = ["start"];
                        for (let s = 0; s < e.length; s++) {
                            let f = e[s],
                                l = [];
                            for (let e = 0; e < f.length; e++) {
                                let c = f[e],
                                    h = "" + s + e;
                                l.push(h), n[h] = {
                                    node: c,
                                    lastCount: 0
                                }, o[h] = {};
                                for (let e = 0; e < u.length; e++) {
                                    let s = u[e];
                                    n[s] && n[s].node.mode === c.mode ? (o[s][h] = getSegmentBitsLength(n[s].lastCount + c.length, c.mode) - getSegmentBitsLength(n[s].lastCount, c.mode), n[s].lastCount += c.length) : (n[s] && (n[s].lastCount = c.length), o[s][h] = getSegmentBitsLength(c.length, c.mode) + 4 + i.getCharCountIndicator(c.mode, t))
                                }
                            }
                            u = l
                        }
                        for (let e = 0; e < u.length; e++) o[u[e]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(u, n),
                    f = h.find_path(s.map, "start", "end"),
                    l = [];
                for (let e = 1; e < f.length - 1; e++) l.push(s.table[f[e]].node);
                return t.fromArray(l.reduce(function(e, t) {
                    let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(getSegmentsFromString(e, c.isKanjiModeEnabled()))
            }
        },
        13400: function(e, t) {
            let n;
            let i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return i[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        64956: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        48670: function(e, t, n) {
            let i = n(13400),
                o = n(37039),
                u = n(9406),
                s = n(37662),
                f = n(64956),
                l = i.getBCHDigit(7973);

            function getReservedBitsCount(e, t) {
                return s.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return f.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!f.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === n && (n = s.BYTE);
                let u = i.getSymbolTotalCodewords(e),
                    l = o.getTotalCodewordsCount(e, t),
                    c = (u - l) * 8;
                if (n === s.MIXED) return c;
                let h = c - getReservedBitsCount(n, e);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(h / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(h / 11 * 2);
                    case s.KANJI:
                        return Math.floor(h / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(h / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let i;
                let o = u.from(n, u.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let i = 1; i <= 40; i++) {
                            let o = function(e, t) {
                                let n = 0;
                                return e.forEach(function(e) {
                                    let i = getReservedBitsCount(e.mode, t);
                                    n += i + e.getBitsLength()
                                }), n
                            }(e, i);
                            if (o <= t.getCapacity(i, n, s.MIXED)) return i
                        }
                    }(e, o);
                    if (0 === e.length) return 1;
                    i = e[0]
                } else i = e;
                return function(e, n, i) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= t.getCapacity(o, i, e)) return o
                }(i.mode, i.getLength(), o)
            }, t.getEncodedBits = function(e) {
                if (!f.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; i.getBCHDigit(t) - l >= 0;) t ^= 7973 << i.getBCHDigit(t) - l;
                return e << 12 | t
            }
        },
        46028: function(e, t, n) {
            let i = n(10544);
            t.render = function(e, t, n) {
                var o;
                let u = n,
                    s = t;
                void 0 !== u || t && t.getContext || (u = t, t = void 0), t || (s = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), u = i.getOptions(u);
                let f = i.getImageWidth(e.modules.size, u),
                    l = s.getContext("2d"),
                    c = l.createImageData(f, f);
                return i.qrToImageData(c.data, e, u), o = s, l.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = f, o.width = f, o.style.height = f + "px", o.style.width = f + "px", l.putImageData(c, 0, 0), s
            }, t.renderToDataURL = function(e, n, i) {
                let o = i;
                void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                let u = t.render(e, n, o),
                    s = o.type || "image/png",
                    f = o.rendererOpts || {};
                return u.toDataURL(s, f.quality)
            }
        },
        12330: function(e, t, n) {
            let i = n(10544);

            function getColorAttrib(e, t) {
                let n = e.a / 255,
                    i = t + '="' + e.hex + '"';
                return n < 1 ? i + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : i
            }

            function svgCmd(e, t, n) {
                let i = e + t;
                return void 0 !== n && (i += " " + n), i
            }
            t.render = function(e, t, n) {
                let o = i.getOptions(t),
                    u = e.modules.size,
                    s = e.modules.data,
                    f = u + 2 * o.margin,
                    l = o.color.light.a ? "<path " + getColorAttrib(o.color.light, "fill") + ' d="M0 0h' + f + "v" + f + 'H0z"/>' : "",
                    c = "<path " + getColorAttrib(o.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let i = "",
                            o = 0,
                            u = !1,
                            s = 0;
                        for (let f = 0; f < e.length; f++) {
                            let l = Math.floor(f % t),
                                c = Math.floor(f / t);
                            l || u || (u = !0), e[f] ? (s++, f > 0 && l > 0 && e[f - 1] || (i += u ? svgCmd("M", l + n, .5 + c + n) : svgCmd("m", o, 0), o = 0, u = !1), l + 1 < t && e[f + 1] || (i += svgCmd("h", s), s = 0)) : o++
                        }
                        return i
                    }(s, u, o.margin) + '"/>',
                    h = o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "",
                    d = '<svg xmlns="http://www.w3.org/2000/svg" ' + h + ('viewBox="0 0 ' + f) + " " + f + '" shape-rendering="crispEdges">' + l + c + "</svg>\n";
                return "function" == typeof n && n(null, d), d
            }
        },
        10544: function(e, t) {
            function hex2rgba(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    n = e.width && e.width >= 21 ? e.width : void 0,
                    i = e.scale || 4;
                return {
                    width: n,
                    scale: n ? 4 : i,
                    margin: t,
                    color: {
                        dark: hex2rgba(e.color.dark || "#000000ff"),
                        light: hex2rgba(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                let i = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * i)
            }, t.qrToImageData = function(e, n, i) {
                let o = n.modules.size,
                    u = n.modules.data,
                    s = t.getScale(o, i),
                    f = Math.floor((o + 2 * i.margin) * s),
                    l = i.margin * s,
                    c = [i.color.light, i.color.dark];
                for (let t = 0; t < f; t++)
                    for (let n = 0; n < f; n++) {
                        let h = (t * f + n) * 4,
                            d = i.color.light;
                        if (t >= l && n >= l && t < f - l && n < f - l) {
                            let e = Math.floor((t - l) / s),
                                i = Math.floor((n - l) / s);
                            d = c[u[e * o + i] ? 1 : 0]
                        }
                        e[h++] = d.r, e[h++] = d.g, e[h++] = d.b, e[h] = d.a
                    }
            }
        },
        34470: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                let n = e.indexOf(t);
                return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
            }
        },
        67116: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        88648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __assign: function() {
                    return __assign
                },
                __asyncDelegator: function() {
                    return __asyncDelegator
                },
                __asyncGenerator: function() {
                    return __asyncGenerator
                },
                __asyncValues: function() {
                    return __asyncValues
                },
                __await: function() {
                    return __await
                },
                __awaiter: function() {
                    return __awaiter
                },
                __classPrivateFieldGet: function() {
                    return __classPrivateFieldGet
                },
                __classPrivateFieldSet: function() {
                    return __classPrivateFieldSet
                },
                __createBinding: function() {
                    return __createBinding
                },
                __decorate: function() {
                    return __decorate
                },
                __exportStar: function() {
                    return __exportStar
                },
                __extends: function() {
                    return __extends
                },
                __generator: function() {
                    return __generator
                },
                __importDefault: function() {
                    return __importDefault
                },
                __importStar: function() {
                    return __importStar
                },
                __makeTemplateObject: function() {
                    return __makeTemplateObject
                },
                __metadata: function() {
                    return __metadata
                },
                __param: function() {
                    return __param
                },
                __read: function() {
                    return __read
                },
                __rest: function() {
                    return __rest
                },
                __spread: function() {
                    return __spread
                },
                __spreadArrays: function() {
                    return __spreadArrays
                },
                __values: function() {
                    return __values
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var extendStatics = function(e, t) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            };

            function __extends(e, t) {
                function __() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function __rest(e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++) 0 > t.indexOf(i[o]) && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
                return n
            }

            function __decorate(e, t, n, i) {
                var o, u = arguments.length,
                    s = u < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
                else
                    for (var f = e.length - 1; f >= 0; f--)(o = e[f]) && (s = (u < 3 ? o(s) : u > 3 ? o(t, n, s) : o(t, n)) || s);
                return u > 3 && s && Object.defineProperty(t, n, s), s
            }

            function __param(e, t) {
                return function(n, i) {
                    t(n, i, e)
                }
            }

            function __metadata(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function __awaiter(e, t, n, i) {
                return new(n || (n = Promise))(function(o, u) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            u(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            u(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(e, t || [])).next())
                })
            }

            function __generator(e, t) {
                var n, i, o, u, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function verb(u) {
                    return function(f) {
                        return function(u) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, i && (o = 2 & u[0] ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
                                switch (i = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, i = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            s.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && s.label < o[1]) {
                                            s.label = o[1], o = u;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(u);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                u = t.call(e, s)
                            } catch (e) {
                                u = [6, e], i = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, f])
                    }
                }
            }

            function __createBinding(e, t, n, i) {
                void 0 === i && (i = n), e[i] = t[n]
            }

            function __exportStar(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function __values(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, o, u = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = u.next()).done;) s.push(i.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = u.return) && n.call(u)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function __spread() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
                return e
            }

            function __spreadArrays() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                for (var i = Array(e), o = 0, t = 0; t < n; t++)
                    for (var u = arguments[t], s = 0, f = u.length; s < f; s++, o++) i[o] = u[s];
                return i
            }

            function __await(e) {
                return this instanceof __await ? (this.v = e, this) : new __await(e)
            }

            function __asyncGenerator(e, t, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, o = n.apply(e, t || []),
                    u = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function verb(e) {
                    o[e] && (i[e] = function(t) {
                        return new Promise(function(n, i) {
                            u.push([e, t, n, i]) > 1 || resume(e, t)
                        })
                    })
                }

                function resume(e, t) {
                    try {
                        var n;
                        (n = o[e](t)).value instanceof __await ? Promise.resolve(n.value.v).then(fulfill, reject) : settle(u[0][2], n)
                    } catch (e) {
                        settle(u[0][3], e)
                    }
                }

                function fulfill(e) {
                    resume("next", e)
                }

                function reject(e) {
                    resume("throw", e)
                }

                function settle(e, t) {
                    e(t), u.shift(), u.length && resume(u[0][0], u[0][1])
                }
            }

            function __asyncDelegator(e) {
                var t, n;
                return t = {}, verb("next"), verb("throw", function(e) {
                    throw e
                }), verb("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function verb(i, o) {
                    t[i] = e[i] ? function(t) {
                        return (n = !n) ? {
                            value: __await(e[i](t)),
                            done: "return" === i
                        } : o ? o(t) : t
                    } : o
                }
            }

            function __asyncValues(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = __values(e), t = {}, verb("next"), verb("throw"), verb("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function verb(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise(function(i, o) {
                            ! function(e, t, n, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }, t)
                            }(i, o, (t = e[n](t)).done, t.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function __importStar(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function __importDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function __classPrivateFieldGet(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function __classPrivateFieldSet(e, t, n) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        81853: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = n(2265),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                u = i.useState,
                s = i.useEffect,
                f = i.useLayoutEffect,
                l = i.useDebugValue;

            function r(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    i = u({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = i[0].inst,
                    c = i[1];
                return f(function() {
                    o.value = n, o.getSnapshot = t, r(o) && c({
                        inst: o
                    })
                }, [e, n, t]), s(function() {
                    return r(o) && c({
                        inst: o
                    }), e(function() {
                        r(o) && c({
                            inst: o
                        })
                    })
                }, [e]), l(n), n
            };
            t.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : c
        },
        78704: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = n(2265),
                o = n(26272),
                u = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = o.useSyncExternalStore,
                f = i.useRef,
                l = i.useEffect,
                c = i.useMemo,
                h = i.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, i, o) {
                var d = f(null);
                if (null === d.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = p
                } else p = d.current;
                var g = s(e, (d = c(function() {
                    function a(t) {
                        if (!f) {
                            if (f = !0, e = t, t = i(t), void 0 !== o && p.hasValue) {
                                var n = p.value;
                                if (o(n, t)) return s = n
                            }
                            return s = t
                        }
                        if (n = s, u(e, t)) return n;
                        var l = i(t);
                        return void 0 !== o && o(n, l) ? n : (e = t, s = l)
                    }
                    var e, s, f = !1,
                        l = void 0 === n ? null : n;
                    return [function() {
                        return a(t())
                    }, null === l ? void 0 : function() {
                        return a(l())
                    }]
                }, [t, n, i, o]))[0], d[1]);
                return l(function() {
                    p.hasValue = !0, p.value = g
                }, [g]), h(g), g
            }
        },
        26272: function(e, t, n) {
            "use strict";
            e.exports = n(81853)
        },
        65401: function(e, t, n) {
            "use strict";
            e.exports = n(78704)
        },
        23986: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return d
                }
            });
            var i = /^\[(.+)\]$/;

            function getPart(e, t) {
                var n = e;
                return t.split("-").forEach(function(e) {
                    n.nextPart.has(e) || n.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), n = n.nextPart.get(e)
                }), n
            }
            var o = /\s+/;

            function twJoin() {
                for (var e, t, n = 0, i = ""; n < arguments.length;)(e = arguments[n++]) && (t = function toValue(e) {
                    if ("string" == typeof e) return e;
                    for (var t, n = "", i = 0; i < e.length; i++) e[i] && (t = toValue(e[i])) && (n && (n += " "), n += t);
                    return n
                }(e)) && (i && (i += " "), i += t);
                return i
            }

            function fromTheme(e) {
                var themeGetter = function(t) {
                    return t[e] || []
                };
                return themeGetter.isThemeGetter = !0, themeGetter
            }
            var u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                s = /^\d+\/\d+$/,
                f = new Set(["px", "full", "screen"]),
                l = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                c = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                h = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function isLength(e) {
                return isNumber(e) || f.has(e) || s.test(e) || isArbitraryLength(e)
            }

            function isArbitraryLength(e) {
                return getIsArbitraryValue(e, "length", isLengthOnly)
            }

            function isArbitrarySize(e) {
                return getIsArbitraryValue(e, "size", isNever)
            }

            function isArbitraryPosition(e) {
                return getIsArbitraryValue(e, "position", isNever)
            }

            function isArbitraryUrl(e) {
                return getIsArbitraryValue(e, "url", isUrl)
            }

            function isArbitraryNumber(e) {
                return getIsArbitraryValue(e, "number", isNumber)
            }

            function isNumber(e) {
                return !Number.isNaN(Number(e))
            }

            function isPercent(e) {
                return e.endsWith("%") && isNumber(e.slice(0, -1))
            }

            function isInteger(e) {
                return isIntegerOnly(e) || getIsArbitraryValue(e, "number", isIntegerOnly)
            }

            function isArbitraryValue(e) {
                return u.test(e)
            }

            function isAny() {
                return !0
            }

            function isTshirtSize(e) {
                return l.test(e)
            }

            function isArbitraryShadow(e) {
                return getIsArbitraryValue(e, "", isShadow)
            }

            function getIsArbitraryValue(e, t, n) {
                var i = u.exec(e);
                return !!i && (i[1] ? i[1] === t : n(i[2]))
            }

            function isLengthOnly(e) {
                return c.test(e)
            }

            function isNever() {
                return !1
            }

            function isUrl(e) {
                return e.startsWith("url(")
            }

            function isIntegerOnly(e) {
                return Number.isInteger(Number(e))
            }

            function isShadow(e) {
                return h.test(e)
            }
            var d = function() {
                for (var e, t, n, u = arguments.length, s = Array(u), f = 0; f < u; f++) s[f] = arguments[f];
                var functionToCall = function(o) {
                    var u = s[0];
                    return t = (e = function(e) {
                        var t, n, o, u, s, f, l, c, h, d, p;
                        return {
                            cache: function(e) {
                                if (e < 1) return {
                                    get: function() {},
                                    set: function() {}
                                };
                                var t = 0,
                                    n = new Map,
                                    i = new Map;

                                function update(o, u) {
                                    n.set(o, u), ++t > e && (t = 0, i = n, n = new Map)
                                }
                                return {
                                    get: function(e) {
                                        var t = n.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = i.get(e)) ? (update(e, t), t) : void 0
                                    },
                                    set: function(e, t) {
                                        n.has(e) ? n.set(e, t) : update(e, t)
                                    }
                                }
                            }(e.cacheSize),
                            splitModifiers: (n = 1 === (t = e.separator || ":").length, o = t[0], u = t.length, function(e) {
                                for (var i, s = [], f = 0, l = 0, c = 0; c < e.length; c++) {
                                    var h = e[c];
                                    if (0 === f) {
                                        if (h === o && (n || e.slice(c, c + u) === t)) {
                                            s.push(e.slice(l, c)), l = c + u;
                                            continue
                                        }
                                        if ("/" === h) {
                                            i = c;
                                            continue
                                        }
                                    }
                                    "[" === h ? f++ : "]" === h && f--
                                }
                                var d = 0 === s.length ? e : e.substring(l),
                                    p = d.startsWith("!"),
                                    g = p ? d.substring(1) : d;
                                return {
                                    modifiers: s,
                                    hasImportantModifier: p,
                                    baseClassName: g,
                                    maybePostfixModifierPosition: i && i > l ? i - l : void 0
                                }
                            }),
                            ...(c = e.theme, h = e.prefix, d = {
                                nextPart: new Map,
                                validators: []
                            }, (p = Object.entries(e.classGroups), h ? p.map(function(e) {
                                return [e[0], e[1].map(function(e) {
                                    return "string" == typeof e ? h + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                        return [h + e[0], e[1]]
                                    })) : e
                                })]
                            }) : p).forEach(function(e) {
                                var t = e[0];
                                (function processClassesRecursively(e, t, n, i) {
                                    e.forEach(function(e) {
                                        if ("string" == typeof e) {
                                            ("" === e ? t : getPart(t, e)).classGroupId = n;
                                            return
                                        }
                                        if ("function" == typeof e) {
                                            if (e.isThemeGetter) {
                                                processClassesRecursively(e(i), t, n, i);
                                                return
                                            }
                                            t.validators.push({
                                                validator: e,
                                                classGroupId: n
                                            });
                                            return
                                        }
                                        Object.entries(e).forEach(function(e) {
                                            var o = e[0];
                                            processClassesRecursively(e[1], getPart(t, o), n, i)
                                        })
                                    })
                                })(e[1], d, t, c)
                            }), s = e.conflictingClassGroups, l = void 0 === (f = e.conflictingClassGroupModifiers) ? {} : f, {
                                getClassGroupId: function(e) {
                                    var t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function getGroupRecursive(e, t) {
                                            if (0 === e.length) return t.classGroupId;
                                            var n = e[0],
                                                i = t.nextPart.get(n),
                                                o = i ? getGroupRecursive(e.slice(1), i) : void 0;
                                            if (o) return o;
                                            if (0 !== t.validators.length) {
                                                var u = e.join("-");
                                                return t.validators.find(function(e) {
                                                    return (0, e.validator)(u)
                                                }) ? .classGroupId
                                            }
                                        }(t, d) || function(e) {
                                            if (i.test(e)) {
                                                var t = i.exec(e)[1],
                                                    n = t ? .substring(0, t.indexOf(":"));
                                                if (n) return "arbitrary.." + n
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    var n = s[e] || [];
                                    return t && l[e] ? [].concat(n, l[e]) : n
                                }
                            })
                        }
                    }(s.slice(1).reduce(function(e, t) {
                        return t(e)
                    }, u()))).cache.get, n = e.cache.set, functionToCall = tailwindMerge, tailwindMerge(o)
                };

                function tailwindMerge(i) {
                    var u, s, f, l, c, h = t(i);
                    if (h) return h;
                    var d = (s = (u = e).splitModifiers, f = u.getClassGroupId, l = u.getConflictingClassGroupIds, c = new Set, i.trim().split(o).map(function(e) {
                        var t = s(e),
                            n = t.modifiers,
                            i = t.hasImportantModifier,
                            o = t.baseClassName,
                            u = t.maybePostfixModifierPosition,
                            l = f(u ? o.substring(0, u) : o),
                            c = !!u;
                        if (!l) {
                            if (!u || !(l = f(o))) return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                            c = !1
                        }
                        var h = (function(e) {
                            if (e.length <= 1) return e;
                            var t = [],
                                n = [];
                            return e.forEach(function(e) {
                                "[" === e[0] ? (t.push.apply(t, n.sort().concat([e])), n = []) : n.push(e)
                            }), t.push.apply(t, n.sort()), t
                        })(n).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: i ? h + "!" : h,
                            classGroupId: l,
                            originalClassName: e,
                            hasPostfixModifier: c
                        }
                    }).reverse().filter(function(e) {
                        if (!e.isTailwindClass) return !0;
                        var t = e.modifierId,
                            n = e.classGroupId,
                            i = e.hasPostfixModifier,
                            o = t + n;
                        return !c.has(o) && (c.add(o), l(n, i).forEach(function(e) {
                            return c.add(t + e)
                        }), !0)
                    }).reverse().map(function(e) {
                        return e.originalClassName
                    }).join(" "));
                    return n(i, d), d
                }
                return function() {
                    return functionToCall(twJoin.apply(null, arguments))
                }
            }(function() {
                var e = fromTheme("colors"),
                    t = fromTheme("spacing"),
                    n = fromTheme("blur"),
                    i = fromTheme("brightness"),
                    o = fromTheme("borderColor"),
                    u = fromTheme("borderRadius"),
                    s = fromTheme("borderSpacing"),
                    f = fromTheme("borderWidth"),
                    l = fromTheme("contrast"),
                    c = fromTheme("grayscale"),
                    h = fromTheme("hueRotate"),
                    d = fromTheme("invert"),
                    p = fromTheme("gap"),
                    g = fromTheme("gradientColorStops"),
                    y = fromTheme("gradientColorStopPositions"),
                    m = fromTheme("inset"),
                    b = fromTheme("margin"),
                    v = fromTheme("opacity"),
                    w = fromTheme("padding"),
                    _ = fromTheme("saturate"),
                    D = fromTheme("scale"),
                    S = fromTheme("sepia"),
                    A = fromTheme("skew"),
                    B = fromTheme("space"),
                    C = fromTheme("translate"),
                    getOverscroll = function() {
                        return ["auto", "contain", "none"]
                    },
                    getOverflow = function() {
                        return ["auto", "hidden", "clip", "visible", "scroll"]
                    },
                    getSpacingWithAutoAndArbitrary = function() {
                        return ["auto", isArbitraryValue, t]
                    },
                    getSpacingWithArbitrary = function() {
                        return [isArbitraryValue, t]
                    },
                    getLengthWithEmpty = function() {
                        return ["", isLength]
                    },
                    getNumberWithAutoAndArbitrary = function() {
                        return ["auto", isNumber, isArbitraryValue]
                    },
                    getPositions = function() {
                        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
                    },
                    getLineStyles = function() {
                        return ["solid", "dashed", "dotted", "double", "none"]
                    },
                    getBlendModes = function() {
                        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                    },
                    getAlign = function() {
                        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
                    },
                    getZeroAndEmpty = function() {
                        return ["", "0", isArbitraryValue]
                    },
                    getBreaks = function() {
                        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                    },
                    getNumber = function() {
                        return [isNumber, isArbitraryNumber]
                    },
                    getNumberAndArbitrary = function() {
                        return [isNumber, isArbitraryValue]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [isAny],
                        spacing: [isLength],
                        blur: ["none", "", isTshirtSize, isArbitraryValue],
                        brightness: getNumber(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
                        borderSpacing: getSpacingWithArbitrary(),
                        borderWidth: getLengthWithEmpty(),
                        contrast: getNumber(),
                        grayscale: getZeroAndEmpty(),
                        hueRotate: getNumberAndArbitrary(),
                        invert: getZeroAndEmpty(),
                        gap: getSpacingWithArbitrary(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [isPercent, isArbitraryLength],
                        inset: getSpacingWithAutoAndArbitrary(),
                        margin: getSpacingWithAutoAndArbitrary(),
                        opacity: getNumber(),
                        padding: getSpacingWithArbitrary(),
                        saturate: getNumber(),
                        scale: getNumber(),
                        sepia: getZeroAndEmpty(),
                        skew: getNumberAndArbitrary(),
                        space: getSpacingWithArbitrary(),
                        translate: getSpacingWithArbitrary()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", isArbitraryValue]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [isTshirtSize]
                        }],
                        "break-after": [{
                            "break-after": getBreaks()
                        }],
                        "break-before": [{
                            "break-before": getBreaks()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(getPositions(), [isArbitraryValue])
                        }],
                        overflow: [{
                            overflow: getOverflow()
                        }],
                        "overflow-x": [{
                            "overflow-x": getOverflow()
                        }],
                        "overflow-y": [{
                            "overflow-y": getOverflow()
                        }],
                        overscroll: [{
                            overscroll: getOverscroll()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": getOverscroll()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": getOverscroll()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", isInteger]
                        }],
                        basis: [{
                            basis: getSpacingWithAutoAndArbitrary()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", isArbitraryValue]
                        }],
                        grow: [{
                            grow: getZeroAndEmpty()
                        }],
                        shrink: [{
                            shrink: getZeroAndEmpty()
                        }],
                        order: [{
                            order: ["first", "last", "none", isInteger]
                        }],
                        "grid-cols": [{
                            "grid-cols": [isAny]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", isInteger]
                            }, isArbitraryValue]
                        }],
                        "col-start": [{
                            "col-start": getNumberWithAutoAndArbitrary()
                        }],
                        "col-end": [{
                            "col-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-rows": [{
                            "grid-rows": [isAny]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [isInteger]
                            }, isArbitraryValue]
                        }],
                        "row-start": [{
                            "row-start": getNumberWithAutoAndArbitrary()
                        }],
                        "row-end": [{
                            "row-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        gap: [{
                            gap: [p]
                        }],
                        "gap-x": [{
                            "gap-x": [p]
                        }],
                        "gap-y": [{
                            "gap-y": [p]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(getAlign())
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(getAlign(), ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(getAlign(), ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [w]
                        }],
                        px: [{
                            px: [w]
                        }],
                        py: [{
                            py: [w]
                        }],
                        ps: [{
                            ps: [w]
                        }],
                        pe: [{
                            pe: [w]
                        }],
                        pt: [{
                            pt: [w]
                        }],
                        pr: [{
                            pr: [w]
                        }],
                        pb: [{
                            pb: [w]
                        }],
                        pl: [{
                            pl: [w]
                        }],
                        m: [{
                            m: [b]
                        }],
                        mx: [{
                            mx: [b]
                        }],
                        my: [{
                            my: [b]
                        }],
                        ms: [{
                            ms: [b]
                        }],
                        me: [{
                            me: [b]
                        }],
                        mt: [{
                            mt: [b]
                        }],
                        mr: [{
                            mr: [b]
                        }],
                        mb: [{
                            mb: [b]
                        }],
                        ml: [{
                            ml: [b]
                        }],
                        "space-x": [{
                            "space-x": [B]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [B]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", isArbitraryValue, t]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [isTshirtSize]
                            }, isTshirtSize, isArbitraryValue]
                        }],
                        h: [{
                            h: [isArbitraryValue, t, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-h": [{
                            "max-h": [isArbitraryValue, t, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", isTshirtSize, isArbitraryLength]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
                        }],
                        "font-family": [{
                            font: [isAny]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", isNumber, isArbitraryNumber]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
                        }],
                        "list-image": [{
                            "list-image": ["none", isArbitraryValue]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", isArbitraryValue]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [v]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [v]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(getLineStyles(), ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", isLength]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", isArbitraryValue, isLength]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: getSpacingWithArbitrary()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", isArbitraryValue]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [v]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(getPositions(), [isArbitraryPosition])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", isArbitrarySize]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, isArbitraryUrl]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [y]
                        }],
                        "gradient-via-pos": [{
                            via: [y]
                        }],
                        "gradient-to-pos": [{
                            to: [y]
                        }],
                        "gradient-from": [{
                            from: [g]
                        }],
                        "gradient-via": [{
                            via: [g]
                        }],
                        "gradient-to": [{
                            to: [g]
                        }],
                        rounded: [{
                            rounded: [u]
                        }],
                        "rounded-s": [{
                            "rounded-s": [u]
                        }],
                        "rounded-e": [{
                            "rounded-e": [u]
                        }],
                        "rounded-t": [{
                            "rounded-t": [u]
                        }],
                        "rounded-r": [{
                            "rounded-r": [u]
                        }],
                        "rounded-b": [{
                            "rounded-b": [u]
                        }],
                        "rounded-l": [{
                            "rounded-l": [u]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [u]
                        }],
                        "rounded-se": [{
                            "rounded-se": [u]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [u]
                        }],
                        "rounded-es": [{
                            "rounded-es": [u]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [u]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [u]
                        }],
                        "rounded-br": [{
                            "rounded-br": [u]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [u]
                        }],
                        "border-w": [{
                            border: [f]
                        }],
                        "border-w-x": [{
                            "border-x": [f]
                        }],
                        "border-w-y": [{
                            "border-y": [f]
                        }],
                        "border-w-s": [{
                            "border-s": [f]
                        }],
                        "border-w-e": [{
                            "border-e": [f]
                        }],
                        "border-w-t": [{
                            "border-t": [f]
                        }],
                        "border-w-r": [{
                            "border-r": [f]
                        }],
                        "border-w-b": [{
                            "border-b": [f]
                        }],
                        "border-w-l": [{
                            "border-l": [f]
                        }],
                        "border-opacity": [{
                            "border-opacity": [v]
                        }],
                        "border-style": [{
                            border: [].concat(getLineStyles(), ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [f]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [f]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [v]
                        }],
                        "divide-style": [{
                            divide: getLineStyles()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: [""].concat(getLineStyles())
                        }],
                        "outline-offset": [{
                            "outline-offset": [isArbitraryValue, isLength]
                        }],
                        "outline-w": [{
                            outline: [isLength]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: getLengthWithEmpty()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [v]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [isLength]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
                        }],
                        "shadow-color": [{
                            shadow: [isAny]
                        }],
                        opacity: [{
                            opacity: [v]
                        }],
                        "mix-blend": [{
                            "mix-blend": getBlendModes()
                        }],
                        "bg-blend": [{
                            "bg-blend": getBlendModes()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [n]
                        }],
                        brightness: [{
                            brightness: [i]
                        }],
                        contrast: [{
                            contrast: [l]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [h]
                        }],
                        invert: [{
                            invert: [d]
                        }],
                        saturate: [{
                            saturate: [_]
                        }],
                        sepia: [{
                            sepia: [S]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [n]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [i]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [l]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [h]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [d]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [v]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [_]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [S]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [s]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [s]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [s]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
                        }],
                        duration: [{
                            duration: getNumberAndArbitrary()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
                        }],
                        delay: [{
                            delay: getNumberAndArbitrary()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [D]
                        }],
                        "scale-x": [{
                            "scale-x": [D]
                        }],
                        "scale-y": [{
                            "scale-y": [D]
                        }],
                        rotate: [{
                            rotate: [isInteger, isArbitraryValue]
                        }],
                        "translate-x": [{
                            "translate-x": [C]
                        }],
                        "translate-y": [{
                            "translate-y": [C]
                        }],
                        "skew-x": [{
                            "skew-x": [A]
                        }],
                        "skew-y": [{
                            "skew-y": [A]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": getSpacingWithArbitrary()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": getSpacingWithArbitrary()
                        }],
                        "scroll-my": [{
                            "scroll-my": getSpacingWithArbitrary()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": getSpacingWithArbitrary()
                        }],
                        "scroll-me": [{
                            "scroll-me": getSpacingWithArbitrary()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": getSpacingWithArbitrary()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": getSpacingWithArbitrary()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": getSpacingWithArbitrary()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": getSpacingWithArbitrary()
                        }],
                        "scroll-p": [{
                            "scroll-p": getSpacingWithArbitrary()
                        }],
                        "scroll-px": [{
                            "scroll-px": getSpacingWithArbitrary()
                        }],
                        "scroll-py": [{
                            "scroll-py": getSpacingWithArbitrary()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": getSpacingWithArbitrary()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": getSpacingWithArbitrary()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": getSpacingWithArbitrary()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": getSpacingWithArbitrary()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": getSpacingWithArbitrary()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": getSpacingWithArbitrary()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [isLength, isArbitraryNumber]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        },
        50741: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return allocUnsafe
                }
            });
            var i = n(7541);

            function allocUnsafe(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0, i.P)(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }
        },
        72281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                concat: function() {
                    return concat
                }
            });
            var i = n(50741),
                o = n(7541);

            function concat(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let n = (0, i.E)(t),
                    u = 0;
                for (let t of e) n.set(t, u), u += t.length;
                return (0, o.P)(n)
            }
        },
        34901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fromString: function() {
                    return fromString
                }
            });
            var i = n(85418),
                o = n(7541);

            function fromString(e, t = "utf8") {
                let n = i.Z[t];
                if (!n) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? (0, o.P)(globalThis.Buffer.from(e, "utf-8")) : n.decoder.decode(`${n.prefix}${e}`)
            }
        },
        71188: function(e, t, n) {
            "use strict";
            n.d(t, {
                BB: function() {
                    return u.toString
                },
                mL: function() {
                    return o.fromString
                },
                zo: function() {
                    return i.concat
                }
            });
            var i = n(72281),
                o = n(34901),
                u = n(21361)
        },
        21361: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toString: function() {
                    return toString
                }
            });
            var i = n(85418);

            function toString(e, t = "utf8") {
                let n = i.Z[t];
                if (!n) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : n.encoder.encode(e).substring(1)
            }
        },
        7541: function(e, t, n) {
            "use strict";

            function asUint8Array(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }
            n.d(t, {
                P: function() {
                    return asUint8Array
                }
            })
        },
        85418: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return eg
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                identity: function() {
                    return v
                }
            });
            var o = {};
            n.r(o), n.d(o, {
                base2: function() {
                    return w
                }
            });
            var u = {};
            n.r(u), n.d(u, {
                base8: function() {
                    return _
                }
            });
            var s = {};
            n.r(s), n.d(s, {
                base10: function() {
                    return D
                }
            });
            var f = {};
            n.r(f), n.d(f, {
                base16: function() {
                    return S
                },
                base16upper: function() {
                    return A
                }
            });
            var l = {};
            n.r(l), n.d(l, {
                base32: function() {
                    return B
                },
                base32hex: function() {
                    return O
                },
                base32hexpad: function() {
                    return P
                },
                base32hexpadupper: function() {
                    return T
                },
                base32hexupper: function() {
                    return U
                },
                base32pad: function() {
                    return x
                },
                base32padupper: function() {
                    return I
                },
                base32upper: function() {
                    return C
                },
                base32z: function() {
                    return N
                }
            });
            var c = {};
            n.r(c), n.d(c, {
                base36: function() {
                    return L
                },
                base36upper: function() {
                    return M
                }
            });
            var h = {};
            n.r(h), n.d(h, {
                base58btc: function() {
                    return R
                },
                base58flickr: function() {
                    return k
                }
            });
            var d = {};
            n.r(d), n.d(d, {
                base64: function() {
                    return j
                },
                base64pad: function() {
                    return F
                },
                base64url: function() {
                    return z
                },
                base64urlpad: function() {
                    return W
                }
            });
            var p = {};
            n.r(p), n.d(p, {
                base256emoji: function() {
                    return $
                }
            });
            var g = {};
            n.r(g), n.d(g, {
                sha256: function() {
                    return G
                },
                sha512: function() {
                    return J
                }
            });
            var y = {};
            n.r(y), n.d(y, {
                identity: function() {
                    return X
                }
            });
            var m = {};
            n.r(m), n.d(m, {
                code: function() {
                    return Z
                },
                decode: function() {
                    return raw_decode
                },
                encode: function() {
                    return raw_encode
                },
                name: function() {
                    return Q
                }
            });
            var b = {};
            n.r(b), n.d(b, {
                code: function() {
                    return en
                },
                decode: function() {
                    return json_decode
                },
                encode: function() {
                    return json_encode
                },
                name: function() {
                    return er
                }
            });
            var base_x = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var n = new Uint8Array(256), i = 0; i < n.length; i++) n[i] = 255;
                for (var o = 0; o < e.length; o++) {
                    var u = e.charAt(o),
                        s = u.charCodeAt(0);
                    if (255 !== n[s]) throw TypeError(u + " is ambiguous");
                    n[s] = o
                }
                var f = e.length,
                    l = e.charAt(0),
                    c = Math.log(f) / Math.log(256),
                    h = Math.log(256) / Math.log(f);

                function decodeUnsafe(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var i = 0, o = 0; e[t] === l;) i++, t++;
                        for (var u = (e.length - t) * c + 1 >>> 0, s = new Uint8Array(u); e[t];) {
                            var h = n[e.charCodeAt(t)];
                            if (255 === h) return;
                            for (var d = 0, p = u - 1;
                                (0 !== h || d < o) && -1 !== p; p--, d++) h += f * s[p] >>> 0, s[p] = h % 256 >>> 0, h = h / 256 >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            o = d, t++
                        }
                        if (" " !== e[t]) {
                            for (var g = u - o; g !== u && 0 === s[g];) g++;
                            for (var y = new Uint8Array(i + (u - g)), m = i; g !== u;) y[m++] = s[g++];
                            return y
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var n = 0, i = 0, o = 0, u = t.length; o !== u && 0 === t[o];) o++, n++;
                        for (var s = (u - o) * h + 1 >>> 0, c = new Uint8Array(s); o !== u;) {
                            for (var d = t[o], p = 0, g = s - 1;
                                (0 !== d || p < i) && -1 !== g; g--, p++) d += 256 * c[g] >>> 0, c[g] = d % f >>> 0, d = d / f >>> 0;
                            if (0 !== d) throw Error("Non-zero carry");
                            i = p, o++
                        }
                        for (var y = s - i; y !== s && 0 === c[y];) y++;
                        for (var m = l.repeat(n); y < s; ++y) m += e.charAt(c[y]);
                        return m
                    },
                    decodeUnsafe: decodeUnsafe,
                    decode: function(e) {
                        var n = decodeUnsafe(e);
                        if (n) return n;
                        throw Error(`Non-${t} character`)
                    }
                }
            };
            new Uint8Array(0);
            let equals = (e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let n = 0; n < e.byteLength; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                },
                coerce = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                fromString = e => new TextEncoder().encode(e),
                bytes_toString = e => new TextDecoder().decode(e);
            let Encoder = class Encoder {
                constructor(e, t, n) {
                    this.name = e, this.prefix = t, this.baseEncode = n
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            };
            let Decoder = class Decoder {
                constructor(e, t, n) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = n
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return or(this, e)
                }
            };
            let ComposedDecoder = class ComposedDecoder {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return or(this, e)
                }
                decode(e) {
                    let t = e[0],
                        n = this.decoders[t];
                    if (n) return n.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            };
            let or = (e, t) => new ComposedDecoder({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            let Codec = class Codec {
                constructor(e, t, n, i) {
                    this.name = e, this.prefix = t, this.baseEncode = n, this.baseDecode = i, this.encoder = new Encoder(e, t, n), this.decoder = new Decoder(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            };
            let from = ({
                    name: e,
                    prefix: t,
                    encode: n,
                    decode: i
                }) => new Codec(e, t, n, i),
                baseX = ({
                    prefix: e,
                    name: t,
                    alphabet: n
                }) => {
                    let {
                        encode: i,
                        decode: o
                    } = base_x(n, t);
                    return from({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => coerce(o(e))
                    })
                },
                decode = (e, t, n, i) => {
                    let o = {};
                    for (let e = 0; e < t.length; ++e) o[t[e]] = e;
                    let u = e.length;
                    for (;
                        "=" === e[u - 1];) --u;
                    let s = new Uint8Array(u * n / 8 | 0),
                        f = 0,
                        l = 0,
                        c = 0;
                    for (let t = 0; t < u; ++t) {
                        let u = o[e[t]];
                        if (void 0 === u) throw SyntaxError(`Non-${i} character`);
                        l = l << n | u, (f += n) >= 8 && (f -= 8, s[c++] = 255 & l >> f)
                    }
                    if (f >= n || 255 & l << 8 - f) throw SyntaxError("Unexpected end of data");
                    return s
                },
                encode = (e, t, n) => {
                    let i = "=" === t[t.length - 1],
                        o = (1 << n) - 1,
                        u = "",
                        s = 0,
                        f = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (f = f << 8 | e[i], s += 8; s > n;) s -= n, u += t[o & f >> s];
                    if (s && (u += t[o & f << n - s]), i)
                        for (; u.length * n & 7;) u += "=";
                    return u
                },
                rfc4648 = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: n,
                    alphabet: i
                }) => from({
                    prefix: t,
                    name: e,
                    encode: e => encode(e, i, n),
                    decode: t => decode(t, i, n, e)
                }),
                v = from({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => bytes_toString(e),
                    decode: e => fromString(e)
                }),
                w = rfc4648({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                _ = rfc4648({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                D = baseX({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                S = rfc4648({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                A = rfc4648({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                B = rfc4648({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                C = rfc4648({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                x = rfc4648({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                I = rfc4648({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                O = rfc4648({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                U = rfc4648({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                P = rfc4648({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                T = rfc4648({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                N = rfc4648({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                L = baseX({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                M = baseX({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                R = baseX({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                k = baseX({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                j = rfc4648({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                F = rfc4648({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                z = rfc4648({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                W = rfc4648({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                H = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                V = H.reduce((e, t, n) => (e[n] = t, e), []),
                K = H.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []),
                $ = from({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += V[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let n of e) {
                            let e = K[n.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${n}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });

            function varint_encode(e, t, n) {
                t = t || [];
                for (var i = n = n || 0; e >= 2147483648;) t[n++] = 255 & e | 128, e /= 128;
                for (; - 128 & e;) t[n++] = 255 & e | 128, e >>>= 7;
                return t[n] = 0 | e, varint_encode.bytes = n - i + 1, t
            }

            function read(e, t) {
                var n, i = 0,
                    t = t || 0,
                    o = 0,
                    u = t,
                    s = e.length;
                do {
                    if (u >= s) throw read.bytes = 0, RangeError("Could not decode varint");
                    n = e[u++], i += o < 28 ? (127 & n) << o : (127 & n) * Math.pow(2, o), o += 7
                } while (n >= 128);
                return read.bytes = u - t, i
            }
            var Y = {
                encode: varint_encode,
                decode: read,
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let src_varint_decode = (e, t = 0) => {
                    let n = Y.decode(e, t);
                    return [n, Y.decode.bytes]
                },
                encodeTo = (e, t, n = 0) => (Y.encode(e, t, n), t),
                encodingLength = e => Y.encodingLength(e),
                create = (e, t) => {
                    let n = t.byteLength,
                        i = encodingLength(e),
                        o = i + encodingLength(n),
                        u = new Uint8Array(o + n);
                    return encodeTo(e, u, 0), encodeTo(n, u, i), u.set(t, o), new Digest(e, n, t, u)
                },
                digest_decode = e => {
                    let t = coerce(e),
                        [n, i] = src_varint_decode(t),
                        [o, u] = src_varint_decode(t.subarray(i)),
                        s = t.subarray(i + u);
                    if (s.byteLength !== o) throw Error("Incorrect length");
                    return new Digest(n, o, s, t)
                },
                digest_equals = (e, t) => e === t || e.code === t.code && e.size === t.size && equals(e.bytes, t.bytes);
            let Digest = class Digest {
                constructor(e, t, n, i) {
                    this.code = e, this.size = t, this.digest = n, this.bytes = i
                }
            };
            let hasher_from = ({
                name: e,
                code: t,
                encode: n
            }) => new Hasher(e, t, n);
            let Hasher = class Hasher {
                constructor(e, t, n) {
                    this.name = e, this.code = t, this.encode = n
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? create(this.code, t) : t.then(e => create(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            };
            let sha = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                G = hasher_from({
                    name: "sha2-256",
                    code: 18,
                    encode: sha("SHA-256")
                }),
                J = hasher_from({
                    name: "sha2-512",
                    code: 19,
                    encode: sha("SHA-512")
                }),
                X = {
                    code: 0,
                    name: "identity",
                    encode: coerce,
                    digest: e => create(0, coerce(e))
                },
                Q = "raw",
                Z = 85,
                raw_encode = e => coerce(e),
                raw_decode = e => coerce(e),
                ee = new TextEncoder,
                et = new TextDecoder,
                er = "json",
                en = 512,
                json_encode = e => ee.encode(JSON.stringify(e)),
                json_decode = e => JSON.parse(et.decode(e));
            let CID = class CID {
                constructor(e, t, n, i) {
                    this.code = t, this.version = e, this.multihash = n, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: es,
                        byteLength: es,
                        code: eu,
                        version: eu,
                        multihash: eu,
                        bytes: eu,
                        _baseCache: es,
                        asCID: es
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== ei) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== eo) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return CID.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                n = create(e, t);
                                return CID.createV1(this.code, n)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && digest_equals(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: n,
                        _baseCache: i
                    } = this;
                    return 0 === n ? toStringV0(t, i, e || R.encoder) : toStringV1(t, i, e || B.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return deprecate(/^0\.0/, ef), !!(e && (e[ea] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof CID) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: n,
                            multihash: i,
                            bytes: o
                        } = e;
                        return new CID(t, n, i, o || encodeCID(t, n, i.bytes))
                    }
                    if (null == e || !0 !== e[ea]) return null; {
                        let {
                            version: t,
                            multihash: n,
                            code: i
                        } = e, o = digest_decode(n);
                        return CID.create(t, i, o)
                    }
                }
                static create(e, t, n) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === ei) return new CID(e, t, n, n.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${ei}) block encoding`);
                        case 1:
                            {
                                let i = encodeCID(e, t, n.bytes);
                                return new CID(e, t, n, i)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return CID.create(0, ei, e)
                }
                static createV1(e, t) {
                    return CID.create(1, e, t)
                }
                static decode(e) {
                    let [t, n] = CID.decodeFirst(e);
                    if (n.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = CID.inspectBytes(e),
                        n = t.size - t.multihashSize,
                        i = coerce(e.subarray(n, n + t.multihashSize));
                    if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let o = i.subarray(t.multihashSize - t.digestSize),
                        u = new Digest(t.multihashCode, t.digestSize, o, i),
                        s = 0 === t.version ? CID.createV0(u) : CID.createV1(t.codec, u);
                    return [s, e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        next = () => {
                            let [n, i] = src_varint_decode(e.subarray(t));
                            return t += i, n
                        },
                        n = next(),
                        i = ei;
                    if (18 === n ? (n = 0, t = 0) : 1 === n && (i = next()), 0 !== n && 1 !== n) throw RangeError(`Invalid CID version ${n}`);
                    let o = t,
                        u = next(),
                        s = next(),
                        f = t + s;
                    return {
                        version: n,
                        codec: i,
                        multihashCode: u,
                        digestSize: s,
                        multihashSize: f - o,
                        size: f
                    }
                }
                static parse(e, t) {
                    let [n, i] = parseCIDtoBytes(e, t), o = CID.decode(i);
                    return o._baseCache.set(n, e), o
                }
            };
            let parseCIDtoBytes = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            return [R.prefix, (t || R).decode(`${R.prefix}${e}`)];
                        case R.prefix:
                            return [R.prefix, (t || R).decode(e)];
                        case B.prefix:
                            return [B.prefix, (t || B).decode(e)];
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                toStringV0 = (e, t, n) => {
                    let {
                        prefix: i
                    } = n;
                    if (i !== R.prefix) throw Error(`Cannot string encode V0 in ${n.name} encoding`);
                    let o = t.get(i);
                    if (null != o) return o; {
                        let o = n.encode(e).slice(1);
                        return t.set(i, o), o
                    }
                },
                toStringV1 = (e, t, n) => {
                    let {
                        prefix: i
                    } = n, o = t.get(i);
                    if (null != o) return o; {
                        let o = n.encode(e);
                        return t.set(i, o), o
                    }
                },
                ei = 112,
                eo = 18,
                encodeCID = (e, t, n) => {
                    let i = encodingLength(e),
                        o = i + encodingLength(t),
                        u = new Uint8Array(o + n.byteLength);
                    return encodeTo(e, u, 0), encodeTo(t, u, i), u.set(n, o), u
                },
                ea = Symbol.for("@ipld/js-cid/CID"),
                eu = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                es = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                deprecate = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                ef = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
                el = { ...i,
                    ...o,
                    ...u,
                    ...s,
                    ...f,
                    ...l,
                    ...c,
                    ...h,
                    ...d,
                    ...p
                };
            ({ ...g,
                ...y
            });
            var ec = n(50741);

            function createCodec(e, t, n, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: n
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            let eh = createCodec("utf8", "u", e => {
                    let t = new TextDecoder("utf8");
                    return "u" + t.decode(e)
                }, e => {
                    let t = new TextEncoder;
                    return t.encode(e.substring(1))
                }),
                ed = createCodec("ascii", "a", e => {
                    let t = "a";
                    for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = (0, ec.E)(e.length);
                    for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                    return t
                }),
                ep = {
                    utf8: eh,
                    "utf-8": eh,
                    hex: el.base16,
                    latin1: ed,
                    ascii: ed,
                    binary: ed,
                    ...el
                };
            var eg = ep
        }
    }
]);