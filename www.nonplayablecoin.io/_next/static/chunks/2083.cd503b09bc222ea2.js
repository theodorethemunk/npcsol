"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2083], {
        92083: function(e, a, t) {
            t.r(a), t.d(a, {
                default: function() {
                    return validate10
                },
                validate: function() {
                    return s
                }
            });
            var r = t(60075),
                s = validate10,
                i = t(19497).default,
                n = RegExp("^[\\w ]+$", "u"),
                m = RegExp("^[\\w]+$", "u"),
                o = RegExp("^[ \\w]+$", "u"),
                p = RegExp("^[ \\w\\.,:]+$", "u"),
                h = t(43387).u5["date-time"],
                d = t(43387).u5.uri,
                f = RegExp("^0x[a-fA-F0-9]{40}$", "u"),
                l = RegExp("^[ \\S+]+$", "u"),
                u = RegExp("^\\S+$", "u");

            function validate15(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty, a.rootData;
                var s = null,
                    n = 0,
                    m = !1,
                    o = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        var p = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === s ? s = [p] : s.push(p), n++
                    } else if (1 > i(e)) {
                        var h = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === s ? s = [h] : s.push(h), n++
                    }
                } else {
                    var d = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === s ? s = [d] : s.push(d), n++
                }
                var f = 0 === n;
                if (!(o = o || f)) {
                    var l = n;
                    if ("boolean" != typeof e) {
                        var u = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === s ? s = [u] : s.push(u), n++
                    }
                    var f = l === n;
                    if (!(o = o || f)) {
                        var c = n;
                        if (!("number" == typeof e && isFinite(e))) {
                            var y = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === s ? s = [y] : s.push(y), n++
                        }
                        var f = c === n;
                        if (!(o = o || f)) {
                            var v = n;
                            if (null !== e) {
                                var g = {
                                    instancePath: r,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === s ? s = [g] : s.push(g), n++
                            }
                            var f = v === n;
                            o = o || f
                        }
                    }
                }
                if (o) n = 0, null !== s && (s = null);
                else {
                    var P = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === s ? s = [P] : s.push(P), n++
                }
                var k = 0 === n;
                if (m = m || k) n = 0, null !== s && (s = null);
                else {
                    var w = {
                        instancePath: r,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === s ? s = [w] : s.push(w), n++, validate15.errors = s, !1
                }
                return validate15.errors = s, 0 === n
            }

            function validate14(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var n = a.rootData,
                    o = void 0 === n ? e : n,
                    p = null,
                    h = 0,
                    d = !1,
                    f = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        var l = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === p ? p = [l] : p.push(l), h++
                    } else if (1 > i(e)) {
                        var u = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === p ? p = [u] : p.push(u), h++
                    }
                } else {
                    var c = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === p ? p = [c] : p.push(c), h++
                }
                var y = 0 === h;
                if (!(f = f || y)) {
                    var v = h;
                    if ("boolean" != typeof e) {
                        var g = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === p ? p = [g] : p.push(g), h++
                    }
                    var y = v === h;
                    if (!(f = f || y)) {
                        var P = h;
                        if (!("number" == typeof e && isFinite(e))) {
                            var k = {
                                instancePath: s,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === p ? p = [k] : p.push(k), h++
                        }
                        var y = P === h;
                        if (!(f = f || y)) {
                            var w = h;
                            if (null !== e) {
                                var b = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === p ? p = [b] : p.push(b), h++
                            }
                            var y = w === h;
                            f = f || y
                        }
                    }
                }
                if (f) h = 0, null !== p && (p = null);
                else {
                    var N = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === p ? p = [N] : p.push(N), h++
                }
                var x = 0 === h;
                if (!(d = d || x)) {
                    var O = h;
                    if (h === O) {
                        if (e && "object" == (0, r.Z)(e) && !Array.isArray(e)) {
                            if (Object.keys(e).length > 10) {
                                var $ = {
                                    instancePath: s,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === p ? p = [$] : p.push($), h++
                            } else {
                                for (var T in e) {
                                    var D = h,
                                        I = h;
                                    if (h === I) {
                                        if ("string" == typeof T) {
                                            if (i(T) > 40) {
                                                var L = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: T
                                                };
                                                null === p ? p = [L] : p.push(L), h++
                                            } else if (1 > i(T)) {
                                                var z = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: T
                                                };
                                                null === p ? p = [z] : p.push(z), h++
                                            } else if (!m.test(T)) {
                                                var j = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: T
                                                };
                                                null === p ? p = [j] : p.push(j), h++
                                            }
                                        } else {
                                            var E = {
                                                instancePath: s,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: T
                                            };
                                            null === p ? p = [E] : p.push(E), h++
                                        }
                                    }
                                    var V = D === h;
                                    if (!V) {
                                        var A = {
                                            instancePath: s,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: T
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === p ? p = [A] : p.push(A), h++;
                                        break
                                    }
                                }
                                if (V)
                                    for (var _ in e) {
                                        var R = h;
                                        if (validate15(e[_], {
                                                instancePath: s + "/" + _.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: _,
                                                rootData: o
                                            }) || (h = (p = null === p ? validate15.errors : p.concat(validate15.errors)).length), R !== h) break
                                    }
                            }
                        } else {
                            var q = {
                                instancePath: s,
                                schemaPath: "#/anyOf/1/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            };
                            null === p ? p = [q] : p.push(q), h++
                        }
                    }
                    var x = O === h;
                    d = d || x
                }
                if (d) h = 0, null !== p && (p = null);
                else {
                    var M = {
                        instancePath: s,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === p ? p = [M] : p.push(M), h++, validate14.errors = p, !1
                }
                return validate14.errors = p, 0 === h
            }

            function validate13(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var n = a.rootData,
                    o = void 0 === n ? e : n,
                    p = null,
                    h = 0,
                    d = !1,
                    f = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        var l = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === p ? p = [l] : p.push(l), h++
                    } else if (1 > i(e)) {
                        var u = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === p ? p = [u] : p.push(u), h++
                    }
                } else {
                    var c = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === p ? p = [c] : p.push(c), h++
                }
                var y = 0 === h;
                if (!(f = f || y)) {
                    var v = h;
                    if ("boolean" != typeof e) {
                        var g = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === p ? p = [g] : p.push(g), h++
                    }
                    var y = v === h;
                    if (!(f = f || y)) {
                        var P = h;
                        if (!("number" == typeof e && isFinite(e))) {
                            var k = {
                                instancePath: s,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === p ? p = [k] : p.push(k), h++
                        }
                        var y = P === h;
                        if (!(f = f || y)) {
                            var w = h;
                            if (null !== e) {
                                var b = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === p ? p = [b] : p.push(b), h++
                            }
                            var y = w === h;
                            f = f || y
                        }
                    }
                }
                if (f) h = 0, null !== p && (p = null);
                else {
                    var N = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === p ? p = [N] : p.push(N), h++
                }
                var x = 0 === h;
                if (!(d = d || x)) {
                    var O = h;
                    if (h === O) {
                        if (e && "object" == (0, r.Z)(e) && !Array.isArray(e)) {
                            if (Object.keys(e).length > 10) {
                                var $ = {
                                    instancePath: s,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === p ? p = [$] : p.push($), h++
                            } else {
                                for (var T in e) {
                                    var D = h,
                                        I = h;
                                    if (h === I) {
                                        if ("string" == typeof T) {
                                            if (i(T) > 40) {
                                                var L = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: T
                                                };
                                                null === p ? p = [L] : p.push(L), h++
                                            } else if (1 > i(T)) {
                                                var z = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: T
                                                };
                                                null === p ? p = [z] : p.push(z), h++
                                            } else if (!m.test(T)) {
                                                var j = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: T
                                                };
                                                null === p ? p = [j] : p.push(j), h++
                                            }
                                        } else {
                                            var E = {
                                                instancePath: s,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: T
                                            };
                                            null === p ? p = [E] : p.push(E), h++
                                        }
                                    }
                                    var V = D === h;
                                    if (!V) {
                                        var A = {
                                            instancePath: s,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: T
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === p ? p = [A] : p.push(A), h++;
                                        break
                                    }
                                }
                                if (V)
                                    for (var _ in e) {
                                        var R = h;
                                        if (validate14(e[_], {
                                                instancePath: s + "/" + _.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: _,
                                                rootData: o
                                            }) || (h = (p = null === p ? validate14.errors : p.concat(validate14.errors)).length), R !== h) break
                                    }
                            }
                        } else {
                            var q = {
                                instancePath: s,
                                schemaPath: "#/anyOf/1/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            };
                            null === p ? p = [q] : p.push(q), h++
                        }
                    }
                    var x = O === h;
                    d = d || x
                }
                if (d) h = 0, null !== p && (p = null);
                else {
                    var M = {
                        instancePath: s,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === p ? p = [M] : p.push(M), h++, validate13.errors = p, !1
                }
                return validate13.errors = p, 0 === h
            }

            function validate12(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var n = a.rootData,
                    o = void 0 === n ? e : n,
                    p = null,
                    h = 0;
                if (!e || "object" != (0, r.Z)(e) || Array.isArray(e)) return validate12.errors = [{
                    instancePath: s,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (Object.keys(e).length > 10) return validate12.errors = [{
                    instancePath: s,
                    schemaPath: "#/maxProperties",
                    keyword: "maxProperties",
                    params: {
                        limit: 10
                    },
                    message: "must NOT have more than 10 properties"
                }], !1;
                for (var d in e) {
                    var f = h,
                        l = h;
                    if (h === l) {
                        if ("string" == typeof d) {
                            if (i(d) > 40) {
                                var u = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                    keyword: "maxLength",
                                    params: {
                                        limit: 40
                                    },
                                    message: "must NOT have more than 40 characters",
                                    propertyName: d
                                };
                                null === p ? p = [u] : p.push(u), h++
                            } else if (1 > i(d)) {
                                var c = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                    keyword: "minLength",
                                    params: {
                                        limit: 1
                                    },
                                    message: "must NOT have fewer than 1 characters",
                                    propertyName: d
                                };
                                null === p ? p = [c] : p.push(c), h++
                            } else if (!m.test(d)) {
                                var y = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^[\\w]+$"
                                    },
                                    message: 'must match pattern "^[\\w]+$"',
                                    propertyName: d
                                };
                                null === p ? p = [y] : p.push(y), h++
                            }
                        } else {
                            var v = {
                                instancePath: s,
                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string",
                                propertyName: d
                            };
                            null === p ? p = [v] : p.push(v), h++
                        }
                    }
                    var g = f === h;
                    if (!g) {
                        var P = {
                            instancePath: s,
                            schemaPath: "#/propertyNames",
                            keyword: "propertyNames",
                            params: {
                                propertyName: d
                            },
                            message: "property name must be valid"
                        };
                        return null === p ? p = [P] : p.push(P), h++, validate12.errors = p, !1
                    }
                }
                if (g)
                    for (var k in e) {
                        var w = h;
                        if (validate13(e[k], {
                                instancePath: s + "/" + k.replace(/~/g, "~0").replace(/\//g, "~1"),
                                parentData: e,
                                parentDataProperty: k,
                                rootData: o
                            }) || (h = (p = null === p ? validate13.errors : p.concat(validate13.errors)).length), w !== h) break
                    }
                return validate12.errors = p, 0 === h
            }

            function validate11(e) {
                var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = t.instancePath,
                    n = void 0 === s ? "" : s;
                t.parentData, t.parentDataProperty;
                var o = t.rootData,
                    p = void 0 === o ? e : o,
                    h = null,
                    c = 0;
                if (!e || "object" != (0, r.Z)(e) || Array.isArray(e)) return validate11.errors = [{
                    instancePath: n,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (void 0 === e.chainId && (a = "chainId") || void 0 === e.address && (a = "address") || void 0 === e.decimals && (a = "decimals") || void 0 === e.name && (a = "name") || void 0 === e.symbol && (a = "symbol")) return validate11.errors = [{
                    instancePath: n,
                    schemaPath: "#/required",
                    keyword: "required",
                    params: {
                        missingProperty: a
                    },
                    message: "must have required property '" + a + "'"
                }], !1;
                var y = c;
                for (var v in e)
                    if (!("chainId" === v || "address" === v || "decimals" === v || "name" === v || "symbol" === v || "logoURI" === v || "tags" === v || "extensions" === v)) return validate11.errors = [{
                        instancePath: n,
                        schemaPath: "#/additionalProperties",
                        keyword: "additionalProperties",
                        params: {
                            additionalProperty: v
                        },
                        message: "must NOT have additional properties"
                    }], !1;
                if (y === c) {
                    if (void 0 !== e.chainId) {
                        var g = e.chainId,
                            P = c;
                        if (!("number" == typeof g && !(g % 1) && !isNaN(g) && isFinite(g))) return validate11.errors = [{
                            instancePath: n + "/chainId",
                            schemaPath: "#/properties/chainId/type",
                            keyword: "type",
                            params: {
                                type: "integer"
                            },
                            message: "must be integer"
                        }], !1;
                        if (c === P && "number" == typeof g && isFinite(g) && (g < 1 || isNaN(g))) return validate11.errors = [{
                            instancePath: n + "/chainId",
                            schemaPath: "#/properties/chainId/minimum",
                            keyword: "minimum",
                            params: {
                                comparison: ">=",
                                limit: 1
                            },
                            message: "must be >= 1"
                        }], !1;
                        var k = P === c
                    } else var k = !0;
                    if (k) {
                        if (void 0 !== e.address) {
                            var w = e.address,
                                b = c;
                            if (c === b) {
                                if ("string" != typeof w) return validate11.errors = [{
                                    instancePath: n + "/address",
                                    schemaPath: "#/properties/address/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                if (!f.test(w)) return validate11.errors = [{
                                    instancePath: n + "/address",
                                    schemaPath: "#/properties/address/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^0x[a-fA-F0-9]{40}$"
                                    },
                                    message: 'must match pattern "^0x[a-fA-F0-9]{40}$"'
                                }], !1
                            }
                            var k = b === c
                        } else var k = !0;
                        if (k) {
                            if (void 0 !== e.decimals) {
                                var N = e.decimals,
                                    x = c;
                                if (!("number" == typeof N && !(N % 1) && !isNaN(N) && isFinite(N))) return validate11.errors = [{
                                    instancePath: n + "/decimals",
                                    schemaPath: "#/properties/decimals/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                }], !1;
                                if (c === x && "number" == typeof N && isFinite(N)) {
                                    if (N > 255 || isNaN(N)) return validate11.errors = [{
                                        instancePath: n + "/decimals",
                                        schemaPath: "#/properties/decimals/maximum",
                                        keyword: "maximum",
                                        params: {
                                            comparison: "<=",
                                            limit: 255
                                        },
                                        message: "must be <= 255"
                                    }], !1;
                                    if (N < 0 || isNaN(N)) return validate11.errors = [{
                                        instancePath: n + "/decimals",
                                        schemaPath: "#/properties/decimals/minimum",
                                        keyword: "minimum",
                                        params: {
                                            comparison: ">=",
                                            limit: 0
                                        },
                                        message: "must be >= 0"
                                    }], !1
                                }
                                var k = x === c
                            } else var k = !0;
                            if (k) {
                                if (void 0 !== e.name) {
                                    var O = e.name,
                                        $ = c,
                                        T = c,
                                        D = !1,
                                        I = c;
                                    if ("" !== O) {
                                        var L = {
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/anyOf/0/const",
                                            keyword: "const",
                                            params: {
                                                allowedValue: ""
                                            },
                                            message: "must be equal to constant"
                                        };
                                        null === h ? h = [L] : h.push(L), c++
                                    }
                                    var z = I === c;
                                    if (!(D = D || z)) {
                                        var j = c;
                                        if ("string" == typeof O && !l.test(O)) {
                                            var E = {
                                                instancePath: n + "/name",
                                                schemaPath: "#/properties/name/anyOf/1/pattern",
                                                keyword: "pattern",
                                                params: {
                                                    pattern: "^[ \\S+]+$"
                                                },
                                                message: 'must match pattern "^[ \\S+]+$"'
                                            };
                                            null === h ? h = [E] : h.push(E), c++
                                        }
                                        var z = j === c;
                                        D = D || z
                                    }
                                    if (D) c = T, null !== h && (T ? h.length = T : h = null);
                                    else {
                                        var V = {
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/anyOf",
                                            keyword: "anyOf",
                                            params: {},
                                            message: "must match a schema in anyOf"
                                        };
                                        return null === h ? h = [V] : h.push(V), c++, validate11.errors = h, !1
                                    }
                                    if (c === $) {
                                        if ("string" != typeof O) return validate11.errors = [{
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        if (i(O) > 40) return validate11.errors = [{
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/maxLength",
                                            keyword: "maxLength",
                                            params: {
                                                limit: 40
                                            },
                                            message: "must NOT have more than 40 characters"
                                        }], !1;
                                        if (0 > i(O)) return validate11.errors = [{
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/minLength",
                                            keyword: "minLength",
                                            params: {
                                                limit: 0
                                            },
                                            message: "must NOT have fewer than 0 characters"
                                        }], !1
                                    }
                                    var k = $ === c
                                } else var k = !0;
                                if (k) {
                                    if (void 0 !== e.symbol) {
                                        var A = e.symbol,
                                            _ = c,
                                            R = c,
                                            q = !1,
                                            M = c;
                                        if ("" !== A) {
                                            var F = {
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/anyOf/0/const",
                                                keyword: "const",
                                                params: {
                                                    allowedValue: ""
                                                },
                                                message: "must be equal to constant"
                                            };
                                            null === h ? h = [F] : h.push(F), c++
                                        }
                                        var U = M === c;
                                        if (!(q = q || U)) {
                                            var Z = c;
                                            if ("string" == typeof A && !u.test(A)) {
                                                var S = {
                                                    instancePath: n + "/symbol",
                                                    schemaPath: "#/properties/symbol/anyOf/1/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^\\S+$"
                                                    },
                                                    message: 'must match pattern "^\\S+$"'
                                                };
                                                null === h ? h = [S] : h.push(S), c++
                                            }
                                            var U = Z === c;
                                            q = q || U
                                        }
                                        if (q) c = R, null !== h && (R ? h.length = R : h = null);
                                        else {
                                            var C = {
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/anyOf",
                                                keyword: "anyOf",
                                                params: {},
                                                message: "must match a schema in anyOf"
                                            };
                                            return null === h ? h = [C] : h.push(C), c++, validate11.errors = h, !1
                                        }
                                        if (c === _) {
                                            if ("string" != typeof A) return validate11.errors = [{
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            if (i(A) > 20) return validate11.errors = [{
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/maxLength",
                                                keyword: "maxLength",
                                                params: {
                                                    limit: 20
                                                },
                                                message: "must NOT have more than 20 characters"
                                            }], !1;
                                            if (0 > i(A)) return validate11.errors = [{
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/minLength",
                                                keyword: "minLength",
                                                params: {
                                                    limit: 0
                                                },
                                                message: "must NOT have fewer than 0 characters"
                                            }], !1
                                        }
                                        var k = _ === c
                                    } else var k = !0;
                                    if (k) {
                                        if (void 0 !== e.logoURI) {
                                            var H = e.logoURI,
                                                W = c;
                                            if (c === W && c === W) {
                                                if ("string" != typeof H) return validate11.errors = [{
                                                    instancePath: n + "/logoURI",
                                                    schemaPath: "#/properties/logoURI/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                if (!d(H)) return validate11.errors = [{
                                                    instancePath: n + "/logoURI",
                                                    schemaPath: "#/properties/logoURI/format",
                                                    keyword: "format",
                                                    params: {
                                                        format: "uri"
                                                    },
                                                    message: 'must match format "uri"'
                                                }], !1
                                            }
                                            var k = W === c
                                        } else var k = !0;
                                        if (k) {
                                            if (void 0 !== e.tags) {
                                                var Y = e.tags,
                                                    B = c;
                                                if (c === B) {
                                                    if (!Array.isArray(Y)) return validate11.errors = [{
                                                        instancePath: n + "/tags",
                                                        schemaPath: "#/properties/tags/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "array"
                                                        },
                                                        message: "must be array"
                                                    }], !1;
                                                    if (Y.length > 10) return validate11.errors = [{
                                                        instancePath: n + "/tags",
                                                        schemaPath: "#/properties/tags/maxItems",
                                                        keyword: "maxItems",
                                                        params: {
                                                            limit: 10
                                                        },
                                                        message: "must NOT have more than 10 items"
                                                    }], !1;
                                                    for (var G = !0, J = Y.length, K = 0; K < J; K++) {
                                                        var Q = Y[K],
                                                            X = c,
                                                            ee = c;
                                                        if (c === ee) {
                                                            if ("string" != typeof Q) return validate11.errors = [{
                                                                instancePath: n + "/tags/" + K,
                                                                schemaPath: "#/definitions/TagIdentifier/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            if (i(Q) > 10) return validate11.errors = [{
                                                                instancePath: n + "/tags/" + K,
                                                                schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                keyword: "maxLength",
                                                                params: {
                                                                    limit: 10
                                                                },
                                                                message: "must NOT have more than 10 characters"
                                                            }], !1;
                                                            if (1 > i(Q)) return validate11.errors = [{
                                                                instancePath: n + "/tags/" + K,
                                                                schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                keyword: "minLength",
                                                                params: {
                                                                    limit: 1
                                                                },
                                                                message: "must NOT have fewer than 1 characters"
                                                            }], !1;
                                                            if (!m.test(Q)) return validate11.errors = [{
                                                                instancePath: n + "/tags/" + K,
                                                                schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                keyword: "pattern",
                                                                params: {
                                                                    pattern: "^[\\w]+$"
                                                                },
                                                                message: 'must match pattern "^[\\w]+$"'
                                                            }], !1
                                                        }
                                                        var G = X === c;
                                                        if (!G) break
                                                    }
                                                }
                                                var k = B === c
                                            } else var k = !0;
                                            if (k) {
                                                if (void 0 !== e.extensions) {
                                                    var ea = c;
                                                    validate12(e.extensions, {
                                                        instancePath: n + "/extensions",
                                                        parentData: e,
                                                        parentDataProperty: "extensions",
                                                        rootData: p
                                                    }) || (c = (h = null === h ? validate12.errors : h.concat(validate12.errors)).length);
                                                    var k = ea === c
                                                } else var k = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return validate11.errors = h, 0 === c
            }

            function validate10(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var f = a.rootData,
                    l = void 0 === f ? e : f,
                    u = null,
                    c = 0;
                if (!e || "object" != (0, r.Z)(e) || Array.isArray(e)) return validate10.errors = [{
                    instancePath: s,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (void 0 === e.name && (N = "name") || void 0 === e.timestamp && (N = "timestamp") || void 0 === e.version && (N = "version") || void 0 === e.tokens && (N = "tokens")) return validate10.errors = [{
                    instancePath: s,
                    schemaPath: "#/required",
                    keyword: "required",
                    params: {
                        missingProperty: N
                    },
                    message: "must have required property '" + N + "'"
                }], !1;
                var y = c;
                for (var v in e)
                    if (!("name" === v || "timestamp" === v || "version" === v || "tokens" === v || "tokenMap" === v || "keywords" === v || "tags" === v || "logoURI" === v)) return validate10.errors = [{
                        instancePath: s,
                        schemaPath: "#/additionalProperties",
                        keyword: "additionalProperties",
                        params: {
                            additionalProperty: v
                        },
                        message: "must NOT have additional properties"
                    }], !1;
                if (y === c) {
                    if (void 0 !== e.name) {
                        var g = e.name,
                            P = c;
                        if (c === P) {
                            if ("string" != typeof g) return validate10.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            if (i(g) > 30) return validate10.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/maxLength",
                                keyword: "maxLength",
                                params: {
                                    limit: 30
                                },
                                message: "must NOT have more than 30 characters"
                            }], !1;
                            if (1 > i(g)) return validate10.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/minLength",
                                keyword: "minLength",
                                params: {
                                    limit: 1
                                },
                                message: "must NOT have fewer than 1 characters"
                            }], !1;
                            if (!n.test(g)) return validate10.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/pattern",
                                keyword: "pattern",
                                params: {
                                    pattern: "^[\\w ]+$"
                                },
                                message: 'must match pattern "^[\\w ]+$"'
                            }], !1
                        }
                        var k = P === c
                    } else var k = !0;
                    if (k) {
                        if (void 0 !== e.timestamp) {
                            var w = e.timestamp,
                                b = c;
                            if (c === b && c === b) {
                                if ("string" != typeof w) return validate10.errors = [{
                                    instancePath: s + "/timestamp",
                                    schemaPath: "#/properties/timestamp/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                if (!h.validate(w)) return validate10.errors = [{
                                    instancePath: s + "/timestamp",
                                    schemaPath: "#/properties/timestamp/format",
                                    keyword: "format",
                                    params: {
                                        format: "date-time"
                                    },
                                    message: 'must match format "date-time"'
                                }], !1
                            }
                            var k = b === c
                        } else var k = !0;
                        if (k) {
                            if (void 0 !== e.version) {
                                var N, x, O = e.version,
                                    $ = c,
                                    T = c;
                                if (c === T) {
                                    if (!O || "object" != (0, r.Z)(O) || Array.isArray(O)) return validate10.errors = [{
                                        instancePath: s + "/version",
                                        schemaPath: "#/definitions/Version/type",
                                        keyword: "type",
                                        params: {
                                            type: "object"
                                        },
                                        message: "must be object"
                                    }], !1;
                                    if (void 0 === O.major && (x = "major") || void 0 === O.minor && (x = "minor") || void 0 === O.patch && (x = "patch")) return validate10.errors = [{
                                        instancePath: s + "/version",
                                        schemaPath: "#/definitions/Version/required",
                                        keyword: "required",
                                        params: {
                                            missingProperty: x
                                        },
                                        message: "must have required property '" + x + "'"
                                    }], !1;
                                    var D = c;
                                    for (var I in O)
                                        if (!("major" === I || "minor" === I || "patch" === I)) return validate10.errors = [{
                                            instancePath: s + "/version",
                                            schemaPath: "#/definitions/Version/additionalProperties",
                                            keyword: "additionalProperties",
                                            params: {
                                                additionalProperty: I
                                            },
                                            message: "must NOT have additional properties"
                                        }], !1;
                                    if (D === c) {
                                        if (void 0 !== O.major) {
                                            var L = O.major,
                                                z = c;
                                            if (!("number" == typeof L && !(L % 1) && !isNaN(L) && isFinite(L))) return validate10.errors = [{
                                                instancePath: s + "/version/major",
                                                schemaPath: "#/definitions/Version/properties/major/type",
                                                keyword: "type",
                                                params: {
                                                    type: "integer"
                                                },
                                                message: "must be integer"
                                            }], !1;
                                            if (c === z && "number" == typeof L && isFinite(L) && (L < 0 || isNaN(L))) return validate10.errors = [{
                                                instancePath: s + "/version/major",
                                                schemaPath: "#/definitions/Version/properties/major/minimum",
                                                keyword: "minimum",
                                                params: {
                                                    comparison: ">=",
                                                    limit: 0
                                                },
                                                message: "must be >= 0"
                                            }], !1;
                                            var j = z === c
                                        } else var j = !0;
                                        if (j) {
                                            if (void 0 !== O.minor) {
                                                var E = O.minor,
                                                    V = c;
                                                if (!("number" == typeof E && !(E % 1) && !isNaN(E) && isFinite(E))) return validate10.errors = [{
                                                    instancePath: s + "/version/minor",
                                                    schemaPath: "#/definitions/Version/properties/minor/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "integer"
                                                    },
                                                    message: "must be integer"
                                                }], !1;
                                                if (c === V && "number" == typeof E && isFinite(E) && (E < 0 || isNaN(E))) return validate10.errors = [{
                                                    instancePath: s + "/version/minor",
                                                    schemaPath: "#/definitions/Version/properties/minor/minimum",
                                                    keyword: "minimum",
                                                    params: {
                                                        comparison: ">=",
                                                        limit: 0
                                                    },
                                                    message: "must be >= 0"
                                                }], !1;
                                                var j = V === c
                                            } else var j = !0;
                                            if (j) {
                                                if (void 0 !== O.patch) {
                                                    var A = O.patch,
                                                        _ = c;
                                                    if (!("number" == typeof A && !(A % 1) && !isNaN(A) && isFinite(A))) return validate10.errors = [{
                                                        instancePath: s + "/version/patch",
                                                        schemaPath: "#/definitions/Version/properties/patch/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "integer"
                                                        },
                                                        message: "must be integer"
                                                    }], !1;
                                                    if (c === _ && "number" == typeof A && isFinite(A) && (A < 0 || isNaN(A))) return validate10.errors = [{
                                                        instancePath: s + "/version/patch",
                                                        schemaPath: "#/definitions/Version/properties/patch/minimum",
                                                        keyword: "minimum",
                                                        params: {
                                                            comparison: ">=",
                                                            limit: 0
                                                        },
                                                        message: "must be >= 0"
                                                    }], !1;
                                                    var j = _ === c
                                                } else var j = !0
                                            }
                                        }
                                    }
                                }
                                var k = $ === c
                            } else var k = !0;
                            if (k) {
                                if (void 0 !== e.tokens) {
                                    var R = e.tokens,
                                        q = c;
                                    if (c === q) {
                                        if (!Array.isArray(R)) return validate10.errors = [{
                                            instancePath: s + "/tokens",
                                            schemaPath: "#/properties/tokens/type",
                                            keyword: "type",
                                            params: {
                                                type: "array"
                                            },
                                            message: "must be array"
                                        }], !1;
                                        if (R.length > 1e4) return validate10.errors = [{
                                            instancePath: s + "/tokens",
                                            schemaPath: "#/properties/tokens/maxItems",
                                            keyword: "maxItems",
                                            params: {
                                                limit: 1e4
                                            },
                                            message: "must NOT have more than 10000 items"
                                        }], !1;
                                        if (R.length < 1) return validate10.errors = [{
                                            instancePath: s + "/tokens",
                                            schemaPath: "#/properties/tokens/minItems",
                                            keyword: "minItems",
                                            params: {
                                                limit: 1
                                            },
                                            message: "must NOT have fewer than 1 items"
                                        }], !1;
                                        for (var M = !0, F = R.length, U = 0; U < F; U++) {
                                            var Z = c;
                                            validate11(R[U], {
                                                instancePath: s + "/tokens/" + U,
                                                parentData: R,
                                                parentDataProperty: U,
                                                rootData: l
                                            }) || (c = (u = null === u ? validate11.errors : u.concat(validate11.errors)).length);
                                            var M = Z === c;
                                            if (!M) break
                                        }
                                    }
                                    var k = q === c
                                } else var k = !0;
                                if (k) {
                                    if (void 0 !== e.tokenMap) {
                                        var S = e.tokenMap,
                                            C = c;
                                        if (c === C) {
                                            if (!S || "object" != (0, r.Z)(S) || Array.isArray(S)) return validate10.errors = [{
                                                instancePath: s + "/tokenMap",
                                                schemaPath: "#/properties/tokenMap/type",
                                                keyword: "type",
                                                params: {
                                                    type: "object"
                                                },
                                                message: "must be object"
                                            }], !1;
                                            if (Object.keys(S).length > 1e4) return validate10.errors = [{
                                                instancePath: s + "/tokenMap",
                                                schemaPath: "#/properties/tokenMap/maxProperties",
                                                keyword: "maxProperties",
                                                params: {
                                                    limit: 1e4
                                                },
                                                message: "must NOT have more than 10000 properties"
                                            }], !1;
                                            if (Object.keys(S).length < 1) return validate10.errors = [{
                                                instancePath: s + "/tokenMap",
                                                schemaPath: "#/properties/tokenMap/minProperties",
                                                keyword: "minProperties",
                                                params: {
                                                    limit: 1
                                                },
                                                message: "must NOT have fewer than 1 properties"
                                            }], !1;
                                            for (var H in S) {
                                                var W = c;
                                                if ("string" != typeof H) {
                                                    var Y = {
                                                        instancePath: s + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/propertyNames/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string",
                                                        propertyName: H
                                                    };
                                                    null === u ? u = [Y] : u.push(Y), c++
                                                }
                                                var B = W === c;
                                                if (!B) {
                                                    var G = {
                                                        instancePath: s + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/propertyNames",
                                                        keyword: "propertyNames",
                                                        params: {
                                                            propertyName: H
                                                        },
                                                        message: "property name must be valid"
                                                    };
                                                    return null === u ? u = [G] : u.push(G), c++, validate10.errors = u, !1
                                                }
                                            }
                                            if (B)
                                                for (var J in S) {
                                                    var K = c;
                                                    if (validate11(S[J], {
                                                            instancePath: s + "/tokenMap/" + J.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                            parentData: S,
                                                            parentDataProperty: J,
                                                            rootData: l
                                                        }) || (c = (u = null === u ? validate11.errors : u.concat(validate11.errors)).length), K !== c) break
                                                }
                                        }
                                        var k = C === c
                                    } else var k = !0;
                                    if (k) {
                                        if (void 0 !== e.keywords) {
                                            var Q = e.keywords,
                                                X = c;
                                            if (c === X) {
                                                if (!Array.isArray(Q)) return validate10.errors = [{
                                                    instancePath: s + "/keywords",
                                                    schemaPath: "#/properties/keywords/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "array"
                                                    },
                                                    message: "must be array"
                                                }], !1;
                                                if (Q.length > 20) return validate10.errors = [{
                                                    instancePath: s + "/keywords",
                                                    schemaPath: "#/properties/keywords/maxItems",
                                                    keyword: "maxItems",
                                                    params: {
                                                        limit: 20
                                                    },
                                                    message: "must NOT have more than 20 items"
                                                }], !1;
                                                for (var ee = !0, ea = Q.length, et = 0; et < ea; et++) {
                                                    var er = Q[et],
                                                        es = c;
                                                    if (c === es) {
                                                        if ("string" != typeof er) return validate10.errors = [{
                                                            instancePath: s + "/keywords/" + et,
                                                            schemaPath: "#/properties/keywords/items/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (i(er) > 20) return validate10.errors = [{
                                                            instancePath: s + "/keywords/" + et,
                                                            schemaPath: "#/properties/keywords/items/maxLength",
                                                            keyword: "maxLength",
                                                            params: {
                                                                limit: 20
                                                            },
                                                            message: "must NOT have more than 20 characters"
                                                        }], !1;
                                                        if (1 > i(er)) return validate10.errors = [{
                                                            instancePath: s + "/keywords/" + et,
                                                            schemaPath: "#/properties/keywords/items/minLength",
                                                            keyword: "minLength",
                                                            params: {
                                                                limit: 1
                                                            },
                                                            message: "must NOT have fewer than 1 characters"
                                                        }], !1;
                                                        if (!n.test(er)) return validate10.errors = [{
                                                            instancePath: s + "/keywords/" + et,
                                                            schemaPath: "#/properties/keywords/items/pattern",
                                                            keyword: "pattern",
                                                            params: {
                                                                pattern: "^[\\w ]+$"
                                                            },
                                                            message: 'must match pattern "^[\\w ]+$"'
                                                        }], !1
                                                    }
                                                    var ee = es === c;
                                                    if (!ee) break
                                                }
                                                if (ee) {
                                                    var ei, en = Q.length;
                                                    if (en > 1)
                                                        for (var em = {}; en--;) {
                                                            var eo = Q[en];
                                                            if ("string" == typeof eo) {
                                                                if ("number" == typeof em[eo]) return ei = em[eo], validate10.errors = [{
                                                                    instancePath: s + "/keywords",
                                                                    schemaPath: "#/properties/keywords/uniqueItems",
                                                                    keyword: "uniqueItems",
                                                                    params: {
                                                                        i: en,
                                                                        j: ei
                                                                    },
                                                                    message: "must NOT have duplicate items (items ## " + ei + " and " + en + " are identical)"
                                                                }], !1;
                                                                em[eo] = en
                                                            }
                                                        }
                                                }
                                            }
                                            var k = X === c
                                        } else var k = !0;
                                        if (k) {
                                            if (void 0 !== e.tags) {
                                                var ep = e.tags,
                                                    eh = c;
                                                if (c === eh) {
                                                    if (!ep || "object" != (0, r.Z)(ep) || Array.isArray(ep)) return validate10.errors = [{
                                                        instancePath: s + "/tags",
                                                        schemaPath: "#/properties/tags/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "must be object"
                                                    }], !1;
                                                    if (Object.keys(ep).length > 20) return validate10.errors = [{
                                                        instancePath: s + "/tags",
                                                        schemaPath: "#/properties/tags/maxProperties",
                                                        keyword: "maxProperties",
                                                        params: {
                                                            limit: 20
                                                        },
                                                        message: "must NOT have more than 20 properties"
                                                    }], !1;
                                                    for (var ed in ep) {
                                                        var ef = c,
                                                            el = c;
                                                        if (c === el) {
                                                            if ("string" == typeof ed) {
                                                                if (i(ed) > 10) {
                                                                    var eu = {
                                                                        instancePath: s + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                        keyword: "maxLength",
                                                                        params: {
                                                                            limit: 10
                                                                        },
                                                                        message: "must NOT have more than 10 characters",
                                                                        propertyName: ed
                                                                    };
                                                                    null === u ? u = [eu] : u.push(eu), c++
                                                                } else if (1 > i(ed)) {
                                                                    var ec = {
                                                                        instancePath: s + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                        keyword: "minLength",
                                                                        params: {
                                                                            limit: 1
                                                                        },
                                                                        message: "must NOT have fewer than 1 characters",
                                                                        propertyName: ed
                                                                    };
                                                                    null === u ? u = [ec] : u.push(ec), c++
                                                                } else if (!m.test(ed)) {
                                                                    var ey = {
                                                                        instancePath: s + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                        keyword: "pattern",
                                                                        params: {
                                                                            pattern: "^[\\w]+$"
                                                                        },
                                                                        message: 'must match pattern "^[\\w]+$"',
                                                                        propertyName: ed
                                                                    };
                                                                    null === u ? u = [ey] : u.push(ey), c++
                                                                }
                                                            } else {
                                                                var ev = {
                                                                    instancePath: s + "/tags",
                                                                    schemaPath: "#/definitions/TagIdentifier/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string",
                                                                    propertyName: ed
                                                                };
                                                                null === u ? u = [ev] : u.push(ev), c++
                                                            }
                                                        }
                                                        var eg = ef === c;
                                                        if (!eg) {
                                                            var eP = {
                                                                instancePath: s + "/tags",
                                                                schemaPath: "#/properties/tags/propertyNames",
                                                                keyword: "propertyNames",
                                                                params: {
                                                                    propertyName: ed
                                                                },
                                                                message: "property name must be valid"
                                                            };
                                                            return null === u ? u = [eP] : u.push(eP), c++, validate10.errors = u, !1
                                                        }
                                                    }
                                                    if (eg)
                                                        for (var ek in ep) {
                                                            var ew = ep[ek],
                                                                eb = c,
                                                                eN = c;
                                                            if (c === eN) {
                                                                if (!ew || "object" != (0, r.Z)(ew) || Array.isArray(ew)) return validate10.errors = [{
                                                                    instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    schemaPath: "#/definitions/TagDefinition/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "object"
                                                                    },
                                                                    message: "must be object"
                                                                }], !1;
                                                                var ex = void 0;
                                                                if (void 0 === ew.name && (ex = "name") || void 0 === ew.description && (ex = "description")) return validate10.errors = [{
                                                                    instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    schemaPath: "#/definitions/TagDefinition/required",
                                                                    keyword: "required",
                                                                    params: {
                                                                        missingProperty: ex
                                                                    },
                                                                    message: "must have required property '" + ex + "'"
                                                                }], !1;
                                                                var eO = c;
                                                                for (var e$ in ew)
                                                                    if (!("name" === e$ || "description" === e$)) return validate10.errors = [{
                                                                        instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                        schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                                                        keyword: "additionalProperties",
                                                                        params: {
                                                                            additionalProperty: e$
                                                                        },
                                                                        message: "must NOT have additional properties"
                                                                    }], !1;
                                                                if (eO === c) {
                                                                    if (void 0 !== ew.name) {
                                                                        var eT = ew.name,
                                                                            eD = c;
                                                                        if (c === eD) {
                                                                            if ("string" != typeof eT) return validate10.errors = [{
                                                                                instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                    type: "string"
                                                                                },
                                                                                message: "must be string"
                                                                            }], !1;
                                                                            if (i(eT) > 20) return validate10.errors = [{
                                                                                instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                                                keyword: "maxLength",
                                                                                params: {
                                                                                    limit: 20
                                                                                },
                                                                                message: "must NOT have more than 20 characters"
                                                                            }], !1;
                                                                            if (1 > i(eT)) return validate10.errors = [{
                                                                                instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                                                keyword: "minLength",
                                                                                params: {
                                                                                    limit: 1
                                                                                },
                                                                                message: "must NOT have fewer than 1 characters"
                                                                            }], !1;
                                                                            if (!o.test(eT)) return validate10.errors = [{
                                                                                instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                                                keyword: "pattern",
                                                                                params: {
                                                                                    pattern: "^[ \\w]+$"
                                                                                },
                                                                                message: 'must match pattern "^[ \\w]+$"'
                                                                            }], !1
                                                                        }
                                                                        var eI = eD === c
                                                                    } else var eI = !0;
                                                                    if (eI) {
                                                                        if (void 0 !== ew.description) {
                                                                            var eL = ew.description,
                                                                                ez = c;
                                                                            if (c === ez) {
                                                                                if ("string" != typeof eL) return validate10.errors = [{
                                                                                    instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                        type: "string"
                                                                                    },
                                                                                    message: "must be string"
                                                                                }], !1;
                                                                                if (i(eL) > 200) return validate10.errors = [{
                                                                                    instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                                                    keyword: "maxLength",
                                                                                    params: {
                                                                                        limit: 200
                                                                                    },
                                                                                    message: "must NOT have more than 200 characters"
                                                                                }], !1;
                                                                                if (1 > i(eL)) return validate10.errors = [{
                                                                                    instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                                                    keyword: "minLength",
                                                                                    params: {
                                                                                        limit: 1
                                                                                    },
                                                                                    message: "must NOT have fewer than 1 characters"
                                                                                }], !1;
                                                                                if (!p.test(eL)) return validate10.errors = [{
                                                                                    instancePath: s + "/tags/" + ek.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                                                    keyword: "pattern",
                                                                                    params: {
                                                                                        pattern: "^[ \\w\\.,:]+$"
                                                                                    },
                                                                                    message: 'must match pattern "^[ \\w\\.,:]+$"'
                                                                                }], !1
                                                                            }
                                                                            var eI = ez === c
                                                                        } else var eI = !0
                                                                    }
                                                                }
                                                            }
                                                            if (eb !== c) break
                                                        }
                                                }
                                                var k = eh === c
                                            } else var k = !0;
                                            if (k) {
                                                if (void 0 !== e.logoURI) {
                                                    var ej = e.logoURI,
                                                        eE = c;
                                                    if (c === eE && c === eE) {
                                                        if ("string" != typeof ej) return validate10.errors = [{
                                                            instancePath: s + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (!d(ej)) return validate10.errors = [{
                                                            instancePath: s + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/format",
                                                            keyword: "format",
                                                            params: {
                                                                format: "uri"
                                                            },
                                                            message: 'must match format "uri"'
                                                        }], !1
                                                    }
                                                    var k = eE === c
                                                } else var k = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return validate10.errors = u, 0 === c
            }
        },
        43387: function(e, a) {
            function fmtDef(e, a) {
                return {
                    validate: e,
                    compare: a
                }
            }
            a.u5 = void 0, a.u5 = {
                date: fmtDef(date, compareDate),
                time: fmtDef(time, compareTime),
                "date-time": fmtDef(function(e) {
                    let a = e.split(i);
                    return 2 === a.length && date(a[0]) && time(a[1], !0)
                }, compareDateTime),
                duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
                uri: function(e) {
                    return n.test(e) && m.test(e)
                },
                "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
                email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
                regex: function(e) {
                    if (d.test(e)) return !1;
                    try {
                        return new RegExp(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
                byte: function(e) {
                    return o.lastIndex = 0, o.test(e)
                },
                int32: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e) && e <= h && e >= p
                    }
                },
                int64: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e)
                    }
                },
                float: {
                    type: "number",
                    validate: validateNumber
                },
                double: {
                    type: "number",
                    validate: validateNumber
                },
                password: !0,
                binary: !0
            }, a.u5, fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate), fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareTime), fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime), Object.keys(a.u5);
            let t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function date(e) {
                var a;
                let s = t.exec(e);
                if (!s) return !1;
                let i = +s[1],
                    n = +s[2],
                    m = +s[3];
                return n >= 1 && n <= 12 && m >= 1 && m <= (2 === n && (a = i) % 4 == 0 && (a % 100 != 0 || a % 400 == 0) ? 29 : r[n])
            }

            function compareDate(e, a) {
                if (e && a) return e > a ? 1 : e < a ? -1 : 0
            }
            let s = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;

            function time(e, a) {
                let t = s.exec(e);
                if (!t) return !1;
                let r = +t[1],
                    i = +t[2],
                    n = +t[3],
                    m = t[5];
                return (r <= 23 && i <= 59 && n <= 59 || 23 === r && 59 === i && 60 === n) && (!a || "" !== m)
            }

            function compareTime(e, a) {
                if (!(e && a)) return;
                let t = s.exec(e),
                    r = s.exec(a);
                if (t && r) return (e = t[1] + t[2] + t[3] + (t[4] || "")) > (a = r[1] + r[2] + r[3] + (r[4] || "")) ? 1 : e < a ? -1 : 0
            }
            let i = /t|\s/i;

            function compareDateTime(e, a) {
                if (!(e && a)) return;
                let [t, r] = e.split(i), [s, n] = a.split(i), m = compareDate(t, s);
                if (void 0 !== m) return m || compareTime(r, n)
            }
            let n = /\/|:/,
                m = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                o = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,
                p = -2147483648,
                h = 2147483648 - 1;

            function validateNumber() {
                return !0
            }
            let d = /[^\\]\\Z/
        },
        19497: function(e, a) {
            function ucs2length(e) {
                let a;
                let t = e.length,
                    r = 0,
                    s = 0;
                for (; s < t;) r++, (a = e.charCodeAt(s++)) >= 55296 && a <= 56319 && s < t && (64512 & (a = e.charCodeAt(s))) == 56320 && s++;
                return r
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = ucs2length, ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default'
        }
    }
]);