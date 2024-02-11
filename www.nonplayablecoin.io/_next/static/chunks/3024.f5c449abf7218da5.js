(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3024], {
        73024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClientSideQuoteResult: function() {
                    return getClientSideQuoteResult
                }
            });
            var i, p, b, y, m, g, T, v, S, E, C, I, w, A, _, R, k, P, O = n(21076),
                M = n(40516),
                x = n(74001),
                D = n.n(x),
                B = n(95356);
            let NodeJSCache = class NodeJSCache {
                constructor(e) {
                    this.nodeCache = e
                }
                async get(e) {
                    return this.nodeCache.get(e)
                }
                async batchGet(e) {
                    let t = Array.from(e),
                        n = await Promise.all(t.map(e => this.get(e))),
                        i = {};
                    return t.forEach((e, t) => {
                        i[e] = n[t]
                    }), i
                }
                async set(e, t, n) {
                    return n ? this.nodeCache.set(e, t, n) : this.nodeCache.set(e, t)
                }
                async has(e) {
                    return this.nodeCache.has(e)
                }
            };
            let L = new class {
                constructor() {
                    this.ERROR_MESSAGE = 'NullLogger does not support. Instantiate a valid logger using "setGlobalLogger"', this.src = !0
                }
                addStream(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                addSerializers(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                child(e, t) {
                    return this
                }
                reopenFileStreams() {
                    throw Error(this.ERROR_MESSAGE)
                }
                level(e) {}
                levels(e, t) {}
                trace(...e) {
                    return !0
                }
                debug(...e) {
                    return !0
                }
                info(...e) {
                    return !0
                }
                warn(...e) {
                    return !0
                }
                error(...e) {
                    return !0
                }
                fatal(...e) {
                    return !0
                }
                addListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                on(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                once(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                removeListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                off(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                removeAllListeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                setMaxListeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                getMaxListeners() {
                    throw Error(this.ERROR_MESSAGE)
                }
                listeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                rawListeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                emit(e, ...t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                listenerCount(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                prependListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                prependOnceListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                eventNames() {
                    throw Error(this.ERROR_MESSAGE)
                }
            };
            let IGasPriceProvider = class IGasPriceProvider {};
            let CachingGasStationProvider = class CachingGasStationProvider extends IGasPriceProvider {
                constructor(e, t, n) {
                    super(), this.chainId = e, this.gasPriceProvider = t, this.cache = n, this.GAS_KEY = (e, t) => `gasPrice-${e}-${t}`
                }
                async getGasPrice(e) {
                    let t = await this.cache.get(this.GAS_KEY(this.chainId, e));
                    if (t) return L.info({
                        cachedGasPrice: t
                    }, `Got gas station price from local cache: ${t.gasPriceWei}.`), t;
                    L.info("Gas station price local cache miss.");
                    let n = await this.gasPriceProvider.getGasPrice(e);
                    return await this.cache.set(this.GAS_KEY(this.chainId, e), n), n
                }
            };
            var N = n(81630),
                U = n.n(N);
            (i = E || (E = {})).Seconds = "Seconds", i.Microseconds = "Microseconds", i.Milliseconds = "Milliseconds", i.Bytes = "Bytes", i.Kilobytes = "Kilobytes", i.Megabytes = "Megabytes", i.Gigabytes = "Gigabytes", i.Terabytes = "Terabytes", i.Bits = "Bits", i.Kilobits = "Kilobits", i.Megabits = "Megabits", i.Gigabits = "Gigabits", i.Terabits = "Terabits", i.Percent = "Percent", i.Count = "Count", i.BytesPerSecond = "Bytes/Second", i.KilobytesPerSecond = "Kilobytes/Second", i.MegabytesPerSecond = "Megabytes/Second", i.GigabytesPerSecond = "Gigabytes/Second", i.TerabytesPerSecond = "Terabytes/Second", i.BitsPerSecond = "Bits/Second", i.KilobitsPerSecond = "Kilobits/Second", i.MegabitsPerSecond = "Megabits/Second", i.GigabitsPerSecond = "Gigabits/Second", i.TerabitsPerSecond = "Terabits/Second", i.CountPerSecond = "Count/Second", i.None = "None";
            let IMetric = class IMetric {};
            let j = new class extends IMetric {
                constructor(e) {
                    super(), this.log = L.child(e || {})
                }
                setProperty(e, t) {
                    this.log = this.log.child({
                        [e]: t
                    })
                }
                putDimensions(e) {
                    this.log = this.log.child(e)
                }
                putMetric(e, t, n) {
                    this.log.info({
                        key: e,
                        value: t,
                        unit: n
                    }, `[Metric]: ${e}: ${t} | ${n||""}`)
                }
            };
            let CachingTokenListProvider = class CachingTokenListProvider {
                constructor(e, t, n) {
                    for (let i of (this.tokenCache = n, this.CACHE_KEY = e => `token-list-token-${this.chainId}/${this.tokenList.name}/${this.tokenList.timestamp}/${this.tokenList.version}/${e.address.toLowerCase()}/${e.decimals}/${e.symbol}/${e.name}`, this.CHAIN_SYMBOL_KEY = (e, t) => `${e.toString()}/${t}`, this.CHAIN_ADDRESS_KEY = (e, t) => `${e.toString()}/${t.toLowerCase()}`, this.chainId = e, this.tokenList = t, this.chainToTokenInfos = new Map, this.chainSymbolToTokenInfo = new Map, this.chainAddressToTokenInfo = new Map, this.tokenList.tokens)) {
                        let e = i.chainId,
                            t = e.toString(),
                            n = i.symbol,
                            p = i.address.toLowerCase();
                        this.chainToTokenInfos.has(t) || this.chainToTokenInfos.set(t, []), this.chainToTokenInfos.get(t).push(i), this.chainSymbolToTokenInfo.set(this.CHAIN_SYMBOL_KEY(e, n), i), this.chainAddressToTokenInfo.set(this.CHAIN_ADDRESS_KEY(e, p), i)
                    }
                }
                static async fromTokenListURI(e, t, n) {
                    let i = Date.now(),
                        p = await this.buildTokenList(t);
                    return j.putMetric("TokenListLoad", Date.now() - i, E.Milliseconds), new CachingTokenListProvider(e, p, n)
                }
                static async buildTokenList(e) {
                    L.info(`Getting tokenList from ${e}.`);
                    let t = await U().get(e);
                    L.info(`Got tokenList from ${e}.`);
                    let {
                        data: n,
                        status: i
                    } = t;
                    if (200 != i) throw L.error({
                        response: t
                    }, `Unabled to get token list from ${e}.`), Error(`Unable to get token list from ${e}`);
                    return n
                }
                static async fromTokenList(e, t, n) {
                    let i = Date.now(),
                        p = new CachingTokenListProvider(e, t, n);
                    return j.putMetric("TokenListLoad", Date.now() - i, E.Milliseconds), p
                }
                async getTokens(e) {
                    var t;
                    let n = new Map,
                        i = new Map,
                        addToken = e => {
                            e && (n.set(e.address.toLowerCase(), e), void 0 !== e.symbol && i.set(e.symbol.toLowerCase(), e))
                        };
                    if (e)
                        for (let t of e) {
                            let e = await this.getTokenByAddress(t);
                            addToken(e)
                        } else {
                            let e = null !== (t = this.chainToTokenInfos.get(this.chainId.toString())) && void 0 !== t ? t : [];
                            for (let t of e) {
                                let e = await this.buildToken(t);
                                addToken(e)
                            }
                        }
                    return {
                        getTokenByAddress: e => n.get(e.toLowerCase()),
                        getTokenBySymbol: e => i.get(e.toLowerCase()),
                        getAllTokens: () => Array.from(n.values())
                    }
                }
                async hasTokenBySymbol(e) {
                    return this.chainSymbolToTokenInfo.has(this.CHAIN_SYMBOL_KEY(this.chainId, e))
                }
                async getTokenBySymbol(e) {
                    let t = e;
                    "ETH" == e && (t = "WETH");
                    let n = this.chainSymbolToTokenInfo.get(this.CHAIN_SYMBOL_KEY(this.chainId, t));
                    if (!n) return;
                    let i = await this.buildToken(n);
                    return i
                }
                async hasTokenByAddress(e) {
                    return this.chainAddressToTokenInfo.has(this.CHAIN_ADDRESS_KEY(this.chainId, e))
                }
                async getTokenByAddress(e) {
                    let t = this.chainAddressToTokenInfo.get(this.CHAIN_ADDRESS_KEY(this.chainId, e));
                    if (!t) return;
                    let n = await this.buildToken(t);
                    return n
                }
                async buildToken(e) {
                    let t = this.CACHE_KEY(e),
                        n = await this.tokenCache.get(t);
                    if (n) return n;
                    let i = new B.Token(this.chainId, e.address, e.decimals, e.symbol, e.name);
                    return await this.tokenCache.set(t, i), i
                }
            };
            var G = n(2890),
                q = n.n(G),
                V = n(74695);
            n(25566), B.ChainId.MAINNET, B.ChainId.OPTIMISM, B.ChainId.OPTIMISM_GOERLI, B.ChainId.ARBITRUM_ONE, B.ChainId.ARBITRUM_GOERLI, B.ChainId.POLYGON, B.ChainId.POLYGON_MUMBAI, B.ChainId.GOERLI, B.ChainId.SEPOLIA, B.ChainId.CELO_ALFAJORES, B.ChainId.CELO, B.ChainId.BNB, B.ChainId.AVALANCHE, B.ChainId.BASE;
            let H = [B.ChainId.MAINNET, B.ChainId.GOERLI, B.ChainId.SEPOLIA],
                $ = [B.ChainId.OPTIMISM, B.ChainId.OPTIMISM_GOERLI, B.ChainId.ARBITRUM_ONE, B.ChainId.ARBITRUM_GOERLI, B.ChainId.BASE, B.ChainId.BASE_GOERLI],
                W = [B.ChainId.MAINNET, B.ChainId.GOERLI, B.ChainId.OPTIMISM, B.ChainId.ARBITRUM_ONE, B.ChainId.POLYGON, B.ChainId.POLYGON_MUMBAI],
                ID_TO_CHAIN_ID = e => {
                    switch (e) {
                        case 1:
                            return B.ChainId.MAINNET;
                        case 5:
                            return B.ChainId.GOERLI;
                        case 11155111:
                            return B.ChainId.SEPOLIA;
                        case 56:
                            return B.ChainId.BNB;
                        case 10:
                            return B.ChainId.OPTIMISM;
                        case 420:
                            return B.ChainId.OPTIMISM_GOERLI;
                        case 42161:
                            return B.ChainId.ARBITRUM_ONE;
                        case 421613:
                            return B.ChainId.ARBITRUM_GOERLI;
                        case 137:
                            return B.ChainId.POLYGON;
                        case 80001:
                            return B.ChainId.POLYGON_MUMBAI;
                        case 42220:
                            return B.ChainId.CELO;
                        case 44787:
                            return B.ChainId.CELO_ALFAJORES;
                        case 100:
                            return B.ChainId.GNOSIS;
                        case 1284:
                            return B.ChainId.MOONBEAM;
                        case 43114:
                            return B.ChainId.AVALANCHE;
                        case 8453:
                            return B.ChainId.BASE;
                        case 84531:
                            return B.ChainId.BASE_GOERLI;
                        default:
                            throw Error(`Unknown chain id: ${e}`)
                    }
                };
            (p = C || (C = {})).MAINNET = "mainnet", p.GOERLI = "goerli", p.SEPOLIA = "sepolia", p.OPTIMISM = "optimism-mainnet", p.OPTIMISM_GOERLI = "optimism-goerli", p.ARBITRUM_ONE = "arbitrum-mainnet", p.ARBITRUM_GOERLI = "arbitrum-goerli", p.POLYGON = "polygon-mainnet", p.POLYGON_MUMBAI = "polygon-mumbai", p.CELO = "celo-mainnet", p.CELO_ALFAJORES = "celo-alfajores", p.GNOSIS = "gnosis-mainnet", p.MOONBEAM = "moonbeam-mainnet", p.BNB = "bnb-mainnet", p.AVALANCHE = "avalanche-mainnet", p.BASE = "base-mainnet", p.BASE_GOERLI = "base-goerli", (b = I || (I = {})).ETHER = "ETH", b.MATIC = "MATIC", b.CELO = "CELO", b.GNOSIS = "XDAI", b.MOONBEAM = "GLMR", b.BNB = "BNB", b.AVALANCHE = "AVAX", B.ChainId.MAINNET, B.ChainId.GOERLI, B.ChainId.SEPOLIA, B.ChainId.OPTIMISM, B.ChainId.OPTIMISM_GOERLI, B.ChainId.ARBITRUM_ONE, B.ChainId.ARBITRUM_GOERLI, B.ChainId.POLYGON, B.ChainId.POLYGON_MUMBAI, B.ChainId.CELO, B.ChainId.CELO_ALFAJORES, B.ChainId.GNOSIS, B.ChainId.MOONBEAM, B.ChainId.BNB, B.ChainId.AVALANCHE, B.ChainId.BASE, B.ChainId.MAINNET, I.ETHER, B.ChainId.GOERLI, I.ETHER, B.ChainId.SEPOLIA, I.ETHER, B.ChainId.OPTIMISM, I.ETHER, B.ChainId.OPTIMISM_GOERLI, I.ETHER, B.ChainId.ARBITRUM_ONE, I.ETHER, B.ChainId.ARBITRUM_GOERLI, I.ETHER, B.ChainId.POLYGON, I.MATIC, B.ChainId.POLYGON_MUMBAI, I.MATIC, B.ChainId.CELO, I.CELO, B.ChainId.CELO_ALFAJORES, I.CELO, B.ChainId.GNOSIS, I.GNOSIS, B.ChainId.MOONBEAM, I.MOONBEAM, B.ChainId.BNB, I.BNB, B.ChainId.AVALANCHE, I.AVALANCHE, B.ChainId.BASE, I.ETHER;
            let ID_TO_NETWORK_NAME = e => {
                switch (e) {
                    case 1:
                        return C.MAINNET;
                    case 5:
                        return C.GOERLI;
                    case 11155111:
                        return C.SEPOLIA;
                    case 56:
                        return C.BNB;
                    case 10:
                        return C.OPTIMISM;
                    case 420:
                        return C.OPTIMISM_GOERLI;
                    case 42161:
                        return C.ARBITRUM_ONE;
                    case 421613:
                        return C.ARBITRUM_GOERLI;
                    case 137:
                        return C.POLYGON;
                    case 80001:
                        return C.POLYGON_MUMBAI;
                    case 42220:
                        return C.CELO;
                    case 44787:
                        return C.CELO_ALFAJORES;
                    case 100:
                        return C.GNOSIS;
                    case 1284:
                        return C.MOONBEAM;
                    case 43114:
                        return C.AVALANCHE;
                    case 8453:
                        return C.BASE;
                    case 84531:
                        return C.BASE_GOERLI;
                    default:
                        throw Error(`Unknown chain id: ${e}`)
                }
            };
            Object.values(B.ChainId).map(e => e.toString());
            let Q = {
                [B.ChainId.MAINNET]: new B.Token(1, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.GOERLI]: new B.Token(5, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.SEPOLIA]: new B.Token(11155111, "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.BNB]: new B.Token(56, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB"),
                [B.ChainId.OPTIMISM]: new B.Token(B.ChainId.OPTIMISM, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.OPTIMISM_GOERLI]: new B.Token(B.ChainId.OPTIMISM_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.ARBITRUM_ONE]: new B.Token(B.ChainId.ARBITRUM_ONE, "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.ARBITRUM_GOERLI]: new B.Token(B.ChainId.ARBITRUM_GOERLI, "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.POLYGON]: new B.Token(B.ChainId.POLYGON, "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", 18, "WMATIC", "Wrapped MATIC"),
                [B.ChainId.POLYGON_MUMBAI]: new B.Token(B.ChainId.POLYGON_MUMBAI, "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", 18, "WMATIC", "Wrapped MATIC"),
                [B.ChainId.CELO]: new B.Token(B.ChainId.CELO, "0x471EcE3750Da237f93B8E339c536989b8978a438", 18, "CELO", "Celo native asset"),
                [B.ChainId.CELO_ALFAJORES]: new B.Token(B.ChainId.CELO_ALFAJORES, "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9", 18, "CELO", "Celo native asset"),
                [B.ChainId.GNOSIS]: new B.Token(B.ChainId.GNOSIS, "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d", 18, "WXDAI", "Wrapped XDAI on Gnosis"),
                [B.ChainId.MOONBEAM]: new B.Token(B.ChainId.MOONBEAM, "0xAcc15dC74880C9944775448304B263D191c6077F", 18, "WGLMR", "Wrapped GLMR"),
                [B.ChainId.AVALANCHE]: new B.Token(B.ChainId.AVALANCHE, "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", 18, "WAVAX", "Wrapped AVAX"),
                [B.ChainId.BASE]: new B.Token(B.ChainId.BASE, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"),
                [B.ChainId.BASE_GOERLI]: new B.Token(B.ChainId.BASE_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether")
            };
            let ExtendedEther = class ExtendedEther extends B.Ether {
                get wrapped() {
                    if (this.chainId in Q) return Q[this.chainId];
                    throw Error("Unsupported chain ID")
                }
                static onChain(e) {
                    var t;
                    return null !== (t = this._cachedExtendedEther[e]) && void 0 !== t ? t : this._cachedExtendedEther[e] = new ExtendedEther(e)
                }
            };
            ExtendedEther._cachedExtendedEther = {}, B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].tickLensAddress, B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].nonfungiblePositionManagerAddress;
            let Y = B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].swapRouter02Address;
            B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].v3MigratorAddress;
            let X = { ...constructSameAddressMap(V.FACTORY_ADDRESS),
                    [B.ChainId.CELO]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.CELO].v3CoreFactoryAddress,
                    [B.ChainId.CELO_ALFAJORES]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.CELO_ALFAJORES].v3CoreFactoryAddress,
                    [B.ChainId.OPTIMISM_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.OPTIMISM_GOERLI].v3CoreFactoryAddress,
                    [B.ChainId.SEPOLIA]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.SEPOLIA].v3CoreFactoryAddress,
                    [B.ChainId.ARBITRUM_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.ARBITRUM_GOERLI].v3CoreFactoryAddress,
                    [B.ChainId.BNB]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].v3CoreFactoryAddress,
                    [B.ChainId.AVALANCHE]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.AVALANCHE].v3CoreFactoryAddress,
                    [B.ChainId.BASE_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BASE_GOERLI].v3CoreFactoryAddress,
                    [B.ChainId.BASE]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BASE].v3CoreFactoryAddress
                },
                K = { ...constructSameAddressMap("0x61fFE014bA17989E743c5F6cB21bF9697530B21e"),
                    [B.ChainId.CELO]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.CELO].quoterAddress,
                    [B.ChainId.CELO_ALFAJORES]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.CELO_ALFAJORES].quoterAddress,
                    [B.ChainId.OPTIMISM_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.OPTIMISM_GOERLI].quoterAddress,
                    [B.ChainId.SEPOLIA]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.SEPOLIA].quoterAddress,
                    [B.ChainId.ARBITRUM_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.ARBITRUM_GOERLI].quoterAddress,
                    [B.ChainId.BNB]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].quoterAddress,
                    [B.ChainId.AVALANCHE]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.AVALANCHE].quoterAddress,
                    [B.ChainId.BASE_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BASE_GOERLI].quoterAddress,
                    [B.ChainId.BASE]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BASE].quoterAddress
                },
                z = {
                    [B.ChainId.MAINNET]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.MAINNET].v1MixedRouteQuoterAddress,
                    [B.ChainId.GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.GOERLI].v1MixedRouteQuoterAddress
                },
                J = { ...constructSameAddressMap("0x1F98415757620B543A52E61c46B32eB19261F984"),
                    [B.ChainId.CELO]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.CELO].multicallAddress,
                    [B.ChainId.CELO_ALFAJORES]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.CELO_ALFAJORES].multicallAddress,
                    [B.ChainId.OPTIMISM_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.OPTIMISM_GOERLI].multicallAddress,
                    [B.ChainId.SEPOLIA]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.SEPOLIA].multicallAddress,
                    [B.ChainId.ARBITRUM_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.ARBITRUM_GOERLI].multicallAddress,
                    [B.ChainId.BNB]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BNB].multicallAddress,
                    [B.ChainId.AVALANCHE]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.AVALANCHE].multicallAddress,
                    [B.ChainId.BASE_GOERLI]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BASE_GOERLI].multicallAddress,
                    [B.ChainId.BASE]: B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.BASE].multicallAddress
                },
                addresses_SWAP_ROUTER_02_ADDRESSES = e => e == B.ChainId.BNB ? Y : "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";

            function constructSameAddressMap(e, t = []) {
                return W.concat(t).reduce((t, n) => (t[n] = e, t), {})
            }
            B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.ARBITRUM_ONE].tickLensAddress, B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.MAINNET].nonfungiblePositionManagerAddress, B.CHAIN_TO_ADDRESSES_MAP[B.ChainId.MAINNET].v3MigratorAddress, B.ChainId.MAINNET, new B.Token(B.ChainId.MAINNET, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether"), B.ChainId.GOERLI, new B.Token(B.ChainId.GOERLI, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether"), B.ChainId.SEPOLIA, new B.Token(B.ChainId.SEPOLIA, "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", 18, "WETH", "Wrapped Ether"), B.ChainId.OPTIMISM, new B.Token(B.ChainId.OPTIMISM, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"), B.ChainId.OPTIMISM_GOERLI, new B.Token(B.ChainId.OPTIMISM_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"), B.ChainId.ARBITRUM_ONE, new B.Token(B.ChainId.ARBITRUM_ONE, "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", 18, "WETH", "Wrapped Ether"), B.ChainId.ARBITRUM_GOERLI, new B.Token(B.ChainId.ARBITRUM_GOERLI, "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3", 18, "WETH", "Wrapped Ether"), B.ChainId.BASE_GOERLI, new B.Token(B.ChainId.BASE_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"), B.ChainId.BASE, new B.Token(B.ChainId.BASE, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether");
            var Z = n(94e3),
                ee = n.n(Z);
            let amounts_CurrencyAmount = class amounts_CurrencyAmount extends B.CurrencyAmount {};

            function parseFeeAmount(e) {
                switch (e) {
                    case "10000":
                        return V.FeeAmount.HIGH;
                    case "3000":
                        return V.FeeAmount.MEDIUM;
                    case "500":
                        return V.FeeAmount.LOW;
                    case "100":
                        return V.FeeAmount.LOWEST;
                    default:
                        throw Error(`Fee amount ${e} not supported.`)
                }
            }

            function unparseFeeAmount(e) {
                switch (e) {
                    case V.FeeAmount.HIGH:
                        return "10000";
                    case V.FeeAmount.MEDIUM:
                        return "3000";
                    case V.FeeAmount.LOW:
                        return "500";
                    case V.FeeAmount.LOWEST:
                        return "100";
                    default:
                        throw Error(`Fee amount ${e} not supported.`)
                }
            }
            var et = n(716),
                en = n(71008);
            let routes_routeToString = e => {
                    let t = [],
                        n = e.protocol === et.Protocol.V3 ? e.tokenPath : e.path,
                        i = q().map(n, e => `${e.symbol}`),
                        p = e.protocol === et.Protocol.V3 || e.protocol === et.Protocol.MIXED ? e.pools : e.pairs,
                        b = q().map(p, e => `${e instanceof V.Pool?` -- ${e.fee/1e4}% [${V.Pool.getAddress(e.token0,e.token1,e.fee,void 0,X[e.chainId])}]`:` -- [${en.Pair.getAddress(e.token0,e.token1)}]`} --> `);
                    for (let e = 0; e < i.length; e++) t.push(i[e]), e < b.length && t.push(b[e]);
                    return t.join("")
                },
                routeAmountsToString = e => {
                    let t = q().reduce(e, (e, t) => e.add(t.amount), amounts_CurrencyAmount.fromRawAmount(e[0].amount.currency, 0)),
                        n = q().map(e, ({
                            protocol: e,
                            route: n,
                            amount: i
                        }) => {
                            let p = i.divide(t),
                                b = new B.Percent(p.numerator, p.denominator);
                            return `[${e==et.Protocol.MIXED?"V2 + V3":e}] ${b.toFixed(2)}% = ${routes_routeToString(n)}`
                        });
                    return q().join(n, ", ")
                },
                poolToString = e => `${e.token0.symbol}/${e.token1.symbol}${e instanceof V.Pool?`/${e.fee/1e4}%`:""}`;
            var ef = n(98291),
                er = n(94287),
                ei = n(28410);
            let ea = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let IERC20Metadata__factory = class IERC20Metadata__factory {
                static createInterface() {
                    return new ef.vU(ea)
                }
                static connect(e, t) {
                    return new ei.Contract(e, ea, t)
                }
            };
            IERC20Metadata__factory.abi = ea;
            let eo = new B.Token(B.ChainId.MAINNET, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 6, "USDC", "USD//C"),
                es = new B.Token(B.ChainId.MAINNET, "0xdAC17F958D2ee523a2206206994597C13D831ec7", 6, "USDT", "Tether USD"),
                eu = new B.Token(B.ChainId.MAINNET, "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", 8, "WBTC", "Wrapped BTC"),
                ed = new B.Token(B.ChainId.MAINNET, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18, "DAI", "Dai Stablecoin"),
                el = new B.Token(B.ChainId.MAINNET, "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", 18, "FEI", "Fei USD");
            new B.Token(B.ChainId.MAINNET, "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", 18, "UNI", "Uniswap");
            let ec = new B.Token(B.ChainId.MAINNET, "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", 18, "AAVE", "Aave Token"),
                ep = new B.Token(B.ChainId.MAINNET, "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32", 18, "LDO", "Lido DAO Token"),
                eh = new B.Token(B.ChainId.SEPOLIA, "0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5", 18, "USDC", "USDC Token"),
                eb = new B.Token(B.ChainId.SEPOLIA, "0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8", 18, "DAI", "DAI Token"),
                ey = new B.Token(B.ChainId.GOERLI, "0x07865c6e87b9f70255377e024ace6630c1eaa37f", 6, "USDC", "USD//C"),
                em = new B.Token(B.ChainId.GOERLI, "0xe583769738b6dd4e7caf8451050d1948be717679", 18, "USDT", "Tether USD"),
                eg = new B.Token(B.ChainId.GOERLI, "0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9", 8, "WBTC", "Wrapped BTC"),
                eT = new B.Token(B.ChainId.GOERLI, "0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844", 18, "DAI", "Dai Stablecoin");
            new B.Token(B.ChainId.GOERLI, "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", 18, "UNI", "Uni token");
            let ev = new B.Token(B.ChainId.OPTIMISM, "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", 6, "USDC", "USD//C"),
                eS = new B.Token(B.ChainId.OPTIMISM, "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", 6, "USDT", "Tether USD"),
                eE = new B.Token(B.ChainId.OPTIMISM, "0x68f180fcCe6836688e9084f035309E29Bf0A2095", 8, "WBTC", "Wrapped BTC"),
                eC = new B.Token(B.ChainId.OPTIMISM, "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", 18, "DAI", "Dai Stablecoin"),
                eI = new B.Token(B.ChainId.OPTIMISM, "0x4200000000000000000000000000000000000042", 18, "OP", "Optimism"),
                ew = new B.Token(B.ChainId.OPTIMISM_GOERLI, "0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E", 6, "USDC", "USD//C"),
                eA = new B.Token(B.ChainId.OPTIMISM_GOERLI, "0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE", 6, "USDT", "Tether USD"),
                e_ = new B.Token(B.ChainId.OPTIMISM_GOERLI, "0xe0a592353e81a94Db6E3226fD4A99F881751776a", 8, "WBTC", "Wrapped BTC"),
                eR = new B.Token(B.ChainId.OPTIMISM_GOERLI, "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", 18, "DAI", "Dai Stablecoin"),
                ek = new B.Token(B.ChainId.ARBITRUM_ONE, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 6, "USDC", "USD//C"),
                eP = new B.Token(B.ChainId.ARBITRUM_ONE, "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", 6, "USDT", "Tether USD"),
                eO = new B.Token(B.ChainId.ARBITRUM_ONE, "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", 8, "WBTC", "Wrapped BTC"),
                eM = new B.Token(B.ChainId.ARBITRUM_ONE, "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", 18, "DAI", "Dai Stablecoin"),
                ex = new B.Token(B.ChainId.ARBITRUM_ONE, "0x912CE59144191C1204E64559FE8253a0e49E6548", 18, "ARB", "Arbitrum");
            new B.Token(B.ChainId.ARBITRUM_GOERLI, "0x0000000000000000000000000000000000000000", 18, "DAI", "Dai Stablecoin");
            let eD = new B.Token(B.ChainId.ARBITRUM_GOERLI, "0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892", 6, "USDC", "USD//C"),
                eB = new B.Token(B.ChainId.POLYGON, "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", 18, "WMATIC", "Wrapped MATIC"),
                eL = new B.Token(B.ChainId.POLYGON, "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", 18, "WETH", "Wrapped Ether"),
                eN = new B.Token(B.ChainId.POLYGON, "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", 6, "USDC", "USD//C");
            new B.Token(B.ChainId.POLYGON, "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", 18, "DAI", "Dai Stablecoin");
            let eF = new B.Token(B.ChainId.POLYGON_MUMBAI, "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", 18, "WMATIC", "Wrapped MATIC");
            new B.Token(B.ChainId.POLYGON_MUMBAI, "0xe11a86849d99f524cac3e7a0ec1241828e332c62", 6, "USDC", "USD//C");
            let eU = new B.Token(B.ChainId.POLYGON_MUMBAI, "0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f", 18, "DAI", "Dai Stablecoin");
            new B.Token(B.ChainId.POLYGON_MUMBAI, "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa", 18, "WETH", "Wrapped Ether");
            let ej = new B.Token(B.ChainId.BNB, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC"),
                eG = new B.Token(B.ChainId.BNB, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "BUSD"),
                eq = new B.Token(B.ChainId.BNB, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "DAI"),
                eV = new B.Token(B.ChainId.BNB, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "ETH"),
                eH = new B.Token(B.ChainId.BNB, "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18, "USDC", "USDC"),
                e$ = new B.Token(B.ChainId.BNB, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "USDT"),
                eW = new B.Token(B.ChainId.CELO, "0x471EcE3750Da237f93B8E339c536989b8978a438", 18, "CELO", "Celo native asset"),
                eQ = new B.Token(B.ChainId.CELO, "0xE4fE50cdD716522A56204352f00AA110F731932d", 18, "DAI", "Dai Stablecoin"),
                eY = new B.Token(B.ChainId.CELO, "0x765DE816845861e75A25fCA122bb6898B8B1282a", 18, "CUSD", "Celo Dollar Stablecoin"),
                eX = new B.Token(B.ChainId.CELO, "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73", 18, "CEUR", "Celo Euro Stablecoin"),
                eK = new B.Token(B.ChainId.CELO_ALFAJORES, "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9", 18, "CELO", "Celo native asset"),
                ez = new B.Token(B.ChainId.CELO_ALFAJORES, "0x7d91E51C8F218f7140188A155f5C75388630B6a8", 18, "DAI", "Dai Stablecoin"),
                eJ = new B.Token(B.ChainId.CELO_ALFAJORES, "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1", 18, "CUSD", "Celo Dollar Stablecoin"),
                eZ = new B.Token(B.ChainId.CELO_ALFAJORES, "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F", 18, "CEUR", "Celo Euro Stablecoin"),
                e0 = new B.Token(B.ChainId.AVALANCHE, "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", 18, "DAI.e", "DAI.e Token"),
                e1 = new B.Token(B.ChainId.AVALANCHE, "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", 6, "USDC", "USDC Token"),
                e5 = new B.Token(B.ChainId.BASE, "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", 6, "USDbC", "USD Base Coin");
            new B.Token(B.ChainId.BASE_GOERLI, "0x853154e2A5604E5C74a2546E2871Ad44932eB92C", 6, "USDbC", "USD Base Coin");
            let e6 = new B.Token(B.ChainId.GNOSIS, "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83", 6, "USDC", "USDC from Ethereum on Gnosis"),
                e8 = new B.Token(B.ChainId.GNOSIS, "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d", 18, "WXDAI", "Wrapped XDAI on Gnosis"),
                e2 = new B.Token(B.ChainId.GNOSIS, "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252", 8, "WBTC", "Wrapped BTC from Ethereum on Gnosis"),
                e3 = new B.Token(B.ChainId.MOONBEAM, "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b", 6, "USDC", "USD Coin bridged using Multichain"),
                e9 = new B.Token(B.ChainId.MOONBEAM, "0xAcc15dC74880C9944775448304B263D191c6077F", 18, "WGLMR", "Wrapped GLMR"),
                e4 = new B.Token(B.ChainId.MOONBEAM, "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b", 6, "DAI", "Dai on moonbeam bridged using Multichain"),
                e7 = new B.Token(B.ChainId.MOONBEAM, "0x922D641a426DcFFaeF11680e5358F34d97d112E1", 8, "WBTC", "Wrapped BTC bridged using Multichain");
            let TokenProvider = class TokenProvider {
                constructor(e, t) {
                    this.chainId = e, this.multicall2Provider = t
                }
                async getTokenSymbol(e, t) {
                    let n;
                    let i = !1;
                    try {
                        n = await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                            addresses: e,
                            contractInterface: IERC20Metadata__factory.createInterface(),
                            functionName: "symbol",
                            providerConfig: t
                        })
                    } catch (b) {
                        L.error({
                            addresses: e
                        }, `TokenProvider.getTokenSymbol[string] failed with error ${b}. Trying with bytes32.`);
                        let p = new ef.vU([{
                            inputs: [],
                            name: "symbol",
                            outputs: [{
                                internalType: "bytes32",
                                name: "",
                                type: "bytes32"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }]);
                        try {
                            n = await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                                addresses: e,
                                contractInterface: p,
                                functionName: "symbol",
                                providerConfig: t
                            }), i = !0
                        } catch (t) {
                            throw L.fatal({
                                addresses: e
                            }, `TokenProvider.getTokenSymbol[bytes32] failed with error ${t}.`), Error("[TokenProvider.getTokenSymbol] Impossible to fetch token symbol.")
                        }
                    }
                    return {
                        result: n,
                        isBytes32: i
                    }
                }
                async getTokenDecimals(e, t) {
                    return this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses: e,
                        contractInterface: IERC20Metadata__factory.createInterface(),
                        functionName: "decimals",
                        providerConfig: t
                    })
                }
                async getTokens(e, t) {
                    let n = {},
                        i = {},
                        p = q()(e).map(e => e.toLowerCase()).uniq().value();
                    if (p.length > 0) {
                        let [e, b] = await Promise.all([this.getTokenSymbol(p, t), this.getTokenDecimals(p, t)]), y = e.isBytes32, {
                            results: m
                        } = e.result, {
                            results: g
                        } = b;
                        for (let e = 0; e < p.length; e++) {
                            let t = p[e],
                                b = m[e],
                                T = g[e];
                            if (!(null == b ? void 0 : b.success) || !(null == T ? void 0 : T.success)) {
                                L.info({
                                    symbolResult: b,
                                    decimalResult: T
                                }, `Dropping token with address ${t} as symbol or decimal are invalid`);
                                continue
                            }
                            let v = y ? (0, er.F)(b.result[0]) : b.result[0],
                                S = T.result[0];
                            n[t.toLowerCase()] = new B.Token(this.chainId, t, S, v), i[v.toLowerCase()] = n[t.toLowerCase()]
                        }
                        L.info(`Got token symbol and decimals for ${Object.values(n).length} out of ${p.length} tokens on-chain ${t?`as of: ${null==t?void 0:t.blockNumber}`:""}`)
                    }
                    return {
                        getTokenByAddress: e => n[e.toLowerCase()],
                        getTokenBySymbol: e => i[e.toLowerCase()],
                        getAllTokens: () => Object.values(n)
                    }
                }
            };
            let te = {
                [B.ChainId.MAINNET]: {
                    WETH: Q[B.ChainId.MAINNET],
                    USDC: eo,
                    USDT: es,
                    WBTC: eu,
                    DAI: ed,
                    RING: new B.Token(B.ChainId.MAINNET, "0x9469D013805bFfB7D3DEBe5E7839237e535ec483", 18, "RING", "RING")
                },
                [B.ChainId.SEPOLIA]: {
                    USDC: eh
                },
                [B.ChainId.OPTIMISM]: {
                    USDC: ev,
                    USDT: eS,
                    WBTC: eE,
                    DAI: eC
                },
                [B.ChainId.OPTIMISM_GOERLI]: {
                    USDC: ew,
                    USDT: eA,
                    WBTC: e_,
                    DAI: eR
                },
                [B.ChainId.ARBITRUM_ONE]: {
                    USDC: ek,
                    USDT: eP,
                    WBTC: eO,
                    DAI: eM
                },
                [B.ChainId.ARBITRUM_GOERLI]: {
                    USDC: eD
                },
                [B.ChainId.POLYGON]: {
                    WMATIC: eB,
                    USDC: eN
                },
                [B.ChainId.POLYGON_MUMBAI]: {
                    WMATIC: eF,
                    DAI: eU
                },
                [B.ChainId.CELO]: {
                    CELO: eW,
                    CUSD: eY,
                    CEUR: eX,
                    DAI: eQ
                },
                [B.ChainId.CELO_ALFAJORES]: {
                    CELO: eK,
                    CUSD: eJ,
                    CEUR: eJ,
                    DAI: ez
                },
                [B.ChainId.GNOSIS]: {
                    WXDAI: Q[B.ChainId.GNOSIS],
                    USDC_ETHEREUM_GNOSIS: e6
                },
                [B.ChainId.MOONBEAM]: {
                    USDC: e3,
                    DAI: e4,
                    WBTC: e7,
                    WGLMR: Q[B.ChainId.MOONBEAM]
                },
                [B.ChainId.BNB]: {
                    USDC: eH,
                    USDT: e$,
                    BUSD: eG,
                    ETH: eV,
                    DAI: eq,
                    BTC: ej,
                    WBNB: Q[B.ChainId.BNB]
                },
                [B.ChainId.AVALANCHE]: {
                    USDC: e1,
                    DAI: e0,
                    WAVAX: Q[B.ChainId.AVALANCHE]
                },
                [B.ChainId.BASE]: {
                    USDC: e5,
                    WETH: Q[B.ChainId.BASE]
                }
            };
            let CachingTokenProviderWithFallback = class CachingTokenProviderWithFallback {
                constructor(e, t, n, i) {
                    this.chainId = e, this.tokenCache = t, this.primaryTokenProvider = n, this.fallbackTokenProvider = i, this.CACHE_KEY = (e, t) => `token-${e}-${t}`
                }
                async getTokens(e) {
                    let t = te[this.chainId];
                    if (t)
                        for (let e of Object.values(t)) await this.tokenCache.set(this.CACHE_KEY(this.chainId, e.address.toLowerCase()), e);
                    let n = {},
                        i = {},
                        p = q()(e).map(e => e.toLowerCase()).uniq().value(),
                        b = [],
                        y = [];
                    for (let e of p) await this.tokenCache.has(this.CACHE_KEY(this.chainId, e)) ? (n[e.toLowerCase()] = await this.tokenCache.get(this.CACHE_KEY(this.chainId, e)), i[n[e].symbol] = await this.tokenCache.get(this.CACHE_KEY(this.chainId, e))) : b.push(e);
                    if (L.info({
                            addressesToFindInPrimary: b
                        }, `Found ${p.length-b.length} out of ${p.length} tokens in local cache. ${b.length>0?`Checking primary token provider for ${b.length} tokens`:""}
      `), b.length > 0) {
                        let e = await this.primaryTokenProvider.getTokens(b);
                        for (let t of b) {
                            let p = e.getTokenByAddress(t);
                            p ? (n[t.toLowerCase()] = p, i[n[t].symbol] = p, await this.tokenCache.set(this.CACHE_KEY(this.chainId, t.toLowerCase()), n[t])) : y.push(t)
                        }
                        L.info({
                            addressesToFindInSecondary: y
                        }, `Found ${b.length-y.length} tokens in primary. ${this.fallbackTokenProvider?`Checking secondary token provider for ${y.length} tokens`:"No fallback token provider specified. About to return."}`)
                    }
                    if (this.fallbackTokenProvider && y.length > 0) {
                        let e = await this.fallbackTokenProvider.getTokens(y);
                        for (let t of y) {
                            let p = e.getTokenByAddress(t);
                            p && (n[t.toLowerCase()] = p, i[n[t].symbol] = p, await this.tokenCache.set(this.CACHE_KEY(this.chainId, t.toLowerCase()), n[t]))
                        }
                    }
                    return {
                        getTokenByAddress: e => n[e.toLowerCase()],
                        getTokenBySymbol: e => i[e.toLowerCase()],
                        getAllTokens: () => Object.values(n)
                    }
                }
            };
            (y = w || (w = {})).Livemode = "livemode", y.Darkmode = "darkmode", y.Tapcompare = "tapcompare";
            let CachedRoute = class CachedRoute {
                constructor({
                    route: e,
                    percent: t
                }) {
                    this.hashCode = e => [...e].reduce((e, t) => Math.imul(31, e) + t.charCodeAt(0) | 0, 0), this.route = e, this.percent = t
                }
                get protocol() {
                    return this.route.protocol
                }
                get tokenIn() {
                    return this.route.input
                }
                get tokenOut() {
                    return this.route.output
                }
                get routePath() {
                    if (this.protocol == et.Protocol.V3) {
                        let e = this.route;
                        return e.pools.map(e => `[V3]${e.token0.address}/${e.token1.address}/${e.fee}`).join("->")
                    }
                    if (this.protocol == et.Protocol.V2) {
                        let e = this.route;
                        return e.pairs.map(e => `[V2]${e.token0.address}/${e.token1.address}`).join("->")
                    } {
                        let e = this.route;
                        return e.pools.map(e => e instanceof V.Pool ? `[V3]${e.token0.address}/${e.token1.address}/${e.fee}` : `[V2]${e.token0.address}/${e.token1.address}`).join("->")
                    }
                }
                get routeId() {
                    return this.hashCode(this.routePath)
                }
            };
            let CachedRoutes = class CachedRoutes {
                constructor({
                    routes: e,
                    chainId: t,
                    tokenIn: n,
                    tokenOut: i,
                    protocolsCovered: p,
                    blockNumber: b,
                    tradeType: y,
                    originalAmount: m,
                    blocksToLive: g = 0
                }) {
                    this.routes = e, this.chainId = t, this.tokenIn = n, this.tokenOut = i, this.protocolsCovered = p, this.blockNumber = b, this.tradeType = y, this.originalAmount = m, this.blocksToLive = g
                }
                static fromRoutesWithValidQuotes(e, t, n, i, p, b, y, m) {
                    if (0 == e.length) return;
                    let g = q().map(e, e => new CachedRoute({
                        route: e.route,
                        percent: e.percent
                    }));
                    return new CachedRoutes({
                        routes: g,
                        chainId: t,
                        tokenIn: n,
                        tokenOut: i,
                        protocolsCovered: p,
                        blockNumber: b,
                        tradeType: y,
                        originalAmount: m
                    })
                }
                notExpired(e, t = !1) {
                    let n = t ? this.blocksToLive : 0,
                        i = e - this.blockNumber;
                    return i <= n
                }
            };
            var tt = n(92598);
            let EIP1559GasPriceProvider = class EIP1559GasPriceProvider extends IGasPriceProvider {
                constructor(e, t = 50, n = 4) {
                    super(), this.provider = e, this.priorityFeePercentile = t, this.blocksToConsider = n
                }
                async getGasPrice(e) {
                    let t = await this.provider.send("eth_feeHistory", [tt.O$.from(this.blocksToConsider).toHexString().replace("0x0", "0x"), tt.O$.from(e).toHexString().replace("0x0", "0x"), [this.priorityFeePercentile]]),
                        n = {
                            baseFeePerGas: q().map(t.baseFeePerGas, e => tt.O$.from(e)),
                            gasUsedRatio: t.gasUsedRatio,
                            oldestBlock: tt.O$.from(t.oldestBlock),
                            reward: q().map(t.reward, e => tt.O$.from(e[0]))
                        },
                        i = n.baseFeePerGas[n.baseFeePerGas.length - 1],
                        p = q().reduce(n.reward, (e, t) => e.add(t), tt.O$.from(0)).div(n.reward.length);
                    L.info({
                        feeHistory: n,
                        feeHistoryReadable: {
                            baseFeePerGas: q().map(n.baseFeePerGas, e => e.toString()),
                            oldestBlock: n.oldestBlock.toString(),
                            reward: q().map(n.reward, e => e.toString())
                        },
                        nextBlockBaseFeePerGas: i.toString(),
                        averagePriorityFeePerGas: p.toString()
                    }, "Got fee history from provider and computed gas estimate");
                    let b = i.add(p),
                        y = n.oldestBlock.add(this.blocksToConsider);
                    return L.info(`Estimated gas price in wei: ${b} as of block ${y.toString()}`), {
                        gasPriceWei: b
                    }
                }
            };
            var tn = n(46795),
                tf = n(59691),
                tr = n(38148),
                ti = n.n(tr),
                ta = n(31199),
                to = n.n(ta);
            let PortionProvider = class PortionProvider {
                getPortionAmount(e, t, n) {
                    if ((null == n ? void 0 : n.type) === R.UNIVERSAL_ROUTER) switch (t) {
                        case B.TradeType.EXACT_INPUT:
                            if (n.fee && n.fee.fee.greaterThan(et.ZERO)) return e.multiply(n.fee.fee);
                            return;
                        case B.TradeType.EXACT_OUTPUT:
                            if (n.flatFee && n.flatFee.amount > tt.O$.from(0)) return amounts_CurrencyAmount.fromRawAmount(e.currency, n.flatFee.amount.toString());
                            return;
                        default:
                            throw Error(`Unknown trade type ${t}`)
                    }
                }
                getPortionQuoteAmount(e, t, n, i) {
                    if (!i || e !== B.TradeType.EXACT_OUTPUT) return;
                    let p = new B.Fraction(i.quotient, n.quotient);
                    return amounts_CurrencyAmount.fromRawAmount(t.currency, p.multiply(t).quotient)
                }
                getRouteWithQuotePortionAdjusted(e, t, n) {
                    return e !== B.TradeType.EXACT_INPUT || (null == n ? void 0 : n.type) !== R.UNIVERSAL_ROUTER ? t : t.map(t => {
                        let i = this.getPortionAmount(t.quote, e, n);
                        return i && (t.quote = t.quote.subtract(i)), t
                    })
                }
                getQuote(e, t, n) {
                    switch (e) {
                        case B.TradeType.EXACT_INPUT:
                            return t;
                        case B.TradeType.EXACT_OUTPUT:
                            return n ? t.subtract(n) : t;
                        default:
                            throw Error(`Unknown trade type ${e}`)
                    }
                }
                getQuoteGasAdjusted(e, t, n) {
                    switch (e) {
                        case B.TradeType.EXACT_INPUT:
                            return t;
                        case B.TradeType.EXACT_OUTPUT:
                            return n ? t.subtract(n) : t;
                        default:
                            throw Error(`Unknown trade type ${e}`)
                    }
                }
                getQuoteGasAndPortionAdjusted(e, t, n) {
                    if (n) switch (e) {
                        case B.TradeType.EXACT_INPUT:
                            return t.subtract(n);
                        case B.TradeType.EXACT_OUTPUT:
                            return t;
                        default:
                            throw Error(`Unknown trade type ${e}`)
                    }
                }
            };
            let ts = [{
                inputs: [{
                    internalType: "address",
                    name: "_factoryV2",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                inputs: [],
                name: "PairLookupFailed",
                type: "error"
            }, {
                inputs: [],
                name: "SameToken",
                type: "error"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "tokens",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "baseToken",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amountToBorrow",
                    type: "uint256"
                }],
                name: "batchValidate",
                outputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "buyFeeBps",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "sellFeeBps",
                        type: "uint256"
                    }],
                    internalType: "struct TokenFees[]",
                    name: "fotResults",
                    type: "tuple[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }],
                name: "uniswapV2Call",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "baseToken",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amountToBorrow",
                    type: "uint256"
                }],
                name: "validate",
                outputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "buyFeeBps",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "sellFeeBps",
                        type: "uint256"
                    }],
                    internalType: "struct TokenFees",
                    name: "fotResult",
                    type: "tuple"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let TokenFeeDetector__factory = class TokenFeeDetector__factory {
                static createInterface() {
                    return new ef.vU(ts)
                }
                static connect(e, t) {
                    return new ei.Contract(e, ts, t)
                }
            };
            TokenFeeDetector__factory.abi = ts, tt.O$.from(0), tt.O$.from(0);
            let FEE_DETECTOR_ADDRESS = e => (B.ChainId.MAINNET, "0x19C97dc2a25845C7f9d1d519c8C2d4809c58b43f");
            let OnChainTokenFeeFetcher = class OnChainTokenFeeFetcher {
                constructor(e, t, n = FEE_DETECTOR_ADDRESS(e), i = 1e6, p = "100000") {
                    var b;
                    this.chainId = e, this.tokenFeeAddress = n, this.gasLimitPerCall = i, this.amountToFlashBorrow = p, this.BASE_TOKEN = null === (b = Q[this.chainId]) || void 0 === b ? void 0 : b.address, this.contract = TokenFeeDetector__factory.connect(this.tokenFeeAddress, t)
                }
                async fetchFees(e, t) {
                    let n = {},
                        i = e.filter(e => e.toLowerCase() !== this.BASE_TOKEN.toLowerCase()),
                        p = i.map(e => [e, this.BASE_TOKEN, this.amountToFlashBorrow]),
                        b = await Promise.all(p.map(async ([e, n, i]) => {
                            try {
                                let p = await this.contract.callStatic.validate(e, n, i, {
                                    gasLimit: this.gasLimitPerCall,
                                    blockTag: null == t ? void 0 : t.blockNumber
                                });
                                return j.putMetric("TokenFeeFetcherFetchFeesSuccess", 1, E.Count), {
                                    address: e,
                                    ...p
                                }
                            } catch (t) {
                                return L.error({
                                    err: t
                                }, `Error calling validate on-chain for token ${e}`), j.putMetric("TokenFeeFetcherFetchFeesFailure", 1, E.Count), {
                                    address: e,
                                    buyFeeBps: void 0,
                                    sellFeeBps: void 0
                                }
                            }
                        }));
                    return b.forEach(({
                        address: e,
                        buyFeeBps: t,
                        sellFeeBps: i
                    }) => {
                        (t || i) && (n[e] = {
                            buyFeeBps: t,
                            sellFeeBps: i
                        })
                    }), n
                }
            };
            let tu = [{
                inputs: [{
                    internalType: "address[]",
                    name: "tokens",
                    type: "address[]"
                }, {
                    internalType: "address[]",
                    name: "baseTokens",
                    type: "address[]"
                }, {
                    internalType: "uint256",
                    name: "amountToBorrow",
                    type: "uint256"
                }],
                name: "batchValidate",
                outputs: [{
                    internalType: "enum ITokenValidator.Status[]",
                    name: "",
                    type: "uint8[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "baseTokens",
                    type: "address[]"
                }, {
                    internalType: "uint256",
                    name: "amountToBorrow",
                    type: "uint256"
                }],
                name: "validate",
                outputs: [{
                    internalType: "enum ITokenValidator.Status",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let ITokenValidator__factory = class ITokenValidator__factory {
                static createInterface() {
                    return new ef.vU(tu)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tu, t)
                }
            };
            ITokenValidator__factory.abi = tu;
            let td = new Set(["0x777e2ae845272a2f540ebf6a3d03734a5a8f618e"]);
            (m = A || (A = {}))[m.UNKN = 0] = "UNKN", m[m.FOT = 1] = "FOT", m[m.STF = 2] = "STF";
            let TokenValidatorProvider = class TokenValidatorProvider {
                constructor(e, t, n, i = "0xb5ee1690b7dcc7859771148d0889be838fe108e0", p = 1e6, b = "1000", y = td) {
                    this.chainId = e, this.multicall2Provider = t, this.tokenValidationCache = n, this.tokenValidatorAddress = i, this.gasLimitPerCall = p, this.amountToFlashBorrow = b, this.allowList = y, this.CACHE_KEY = (e, t) => `token-${e}-${t}`, this.BASES = [Q[this.chainId].address]
                }
                async validateTokens(e, t) {
                    let n = q().keyBy(e, "address"),
                        i = q()(e).map(e => e.address).uniq().value(),
                        p = [],
                        b = {};
                    for (let e of i) await this.tokenValidationCache.has(this.CACHE_KEY(this.chainId, e)) ? (b[e.toLowerCase()] = await this.tokenValidationCache.get(this.CACHE_KEY(this.chainId, e)), j.putMetric(`TokenValidatorProviderValidateCacheHitResult${b[e.toLowerCase()]}`, 1, E.Count)) : p.push(e);
                    L.info(`Got token validation results for ${i.length-p.length} tokens from cache. Getting ${p.length} on-chain.`);
                    let y = q()(p).map(e => [e, this.BASES, this.amountToFlashBorrow]).value(),
                        m = await this.multicall2Provider.callSameFunctionOnContractWithMultipleParams({
                            address: this.tokenValidatorAddress,
                            contractInterface: ITokenValidator__factory.createInterface(),
                            functionName: "validate",
                            functionParams: y,
                            providerConfig: t,
                            additionalConfig: {
                                gasLimitPerCallOverride: this.gasLimitPerCall
                            }
                        });
                    for (let e = 0; e < m.results.length; e++) {
                        let t = m.results[e],
                            i = p[e],
                            y = n[i];
                        if (this.allowList.has(y.address.toLowerCase())) {
                            b[y.address.toLowerCase()] = A.UNKN, await this.tokenValidationCache.set(this.CACHE_KEY(this.chainId, y.address.toLowerCase()), b[y.address.toLowerCase()]);
                            continue
                        }
                        if (!t.success) {
                            j.putMetric("TokenValidatorProviderValidateFailed", 1, E.Count), L.error({
                                result: t
                            }, `Failed to validate token ${y.symbol}`);
                            continue
                        }
                        j.putMetric("TokenValidatorProviderValidateSuccess", 1, E.Count);
                        let g = t.result[0];
                        b[y.address.toLowerCase()] = g, await this.tokenValidationCache.set(this.CACHE_KEY(this.chainId, y.address.toLowerCase()), b[y.address.toLowerCase()]), j.putMetric(`TokenValidatorProviderValidateCacheMissResult${g}`, 1, E.Count)
                    }
                    return {
                        getValidationByToken: e => b[e.address.toLowerCase()]
                    }
                }
            };
            let tl = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "Burn",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }],
                name: "Mint",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0In",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1In",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0Out",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1Out",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "Swap",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint112",
                    name: "reserve0",
                    type: "uint112"
                }, {
                    indexed: !1,
                    internalType: "uint112",
                    name: "reserve1",
                    type: "uint112"
                }],
                name: "Sync",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                inputs: [],
                name: "DOMAIN_SEPARATOR",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MINIMUM_LIQUIDITY",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "PERMIT_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "burn",
                outputs: [{
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "factory",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getReserves",
                outputs: [{
                    internalType: "uint112",
                    name: "reserve0",
                    type: "uint112"
                }, {
                    internalType: "uint112",
                    name: "reserve1",
                    type: "uint112"
                }, {
                    internalType: "uint32",
                    name: "blockTimestampLast",
                    type: "uint32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "kLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "mint",
                outputs: [{
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }],
                name: "nonces",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "permit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "price0CumulativeLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "price1CumulativeLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "skim",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount0Out",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount1Out",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }],
                name: "swap",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "sync",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "token0",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "token1",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let IUniswapV2Pair__factory = class IUniswapV2Pair__factory {
                static createInterface() {
                    return new ef.vU(tl)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tl, t)
                }
            };
            IUniswapV2Pair__factory.abi = tl;
            let V2PoolProvider = class V2PoolProvider {
                constructor(e, t, n, i = {
                    retries: 2,
                    minTimeout: 50,
                    maxTimeout: 500
                }) {
                    this.chainId = e, this.multicall2Provider = t, this.tokenPropertiesProvider = n, this.retryOptions = i, this.POOL_ADDRESS_CACHE = {}
                }
                async getPools(e, t) {
                    var n, i, p, b, y, m, g, T, v, S;
                    let C = new Set,
                        I = [],
                        w = [];
                    for (let t of e) {
                        let [e, n] = t, {
                            poolAddress: i,
                            token0: p,
                            token1: b
                        } = this.getPoolAddress(e, n);
                        C.has(i) || (C.add(i), I.push([p, b]), w.push(i))
                    }
                    L.debug(`getPools called with ${e.length} token pairs. Deduped down to ${C.size}`), j.putMetric("V2_RPC_POOL_RPC_CALL", 1, E.None), j.putMetric("V2GetReservesBatchSize", w.length, E.Count), j.putMetric(`V2GetReservesBatchSize_${ID_TO_NETWORK_NAME(this.chainId)}`, w.length, E.Count);
                    let [_, R] = await Promise.all([this.getPoolsData(w, "getReserves", t), this.tokenPropertiesProvider.getTokensProperties(this.flatten(e), t)]);
                    L.info(`Got reserves for ${C.size} pools ${(null==t?void 0:t.blockNumber)?`as of block: ${await (null==t?void 0:t.blockNumber)}.`:""}`);
                    let k = {},
                        P = [];
                    for (let e = 0; e < w.length; e++) {
                        let t = _[e];
                        if (!(null == t ? void 0 : t.success)) {
                            let [t, n] = I[e];
                            P.push([t, n]);
                            continue
                        }
                        let [E, C] = I[e];
                        (null === (n = R[E.address.toLowerCase()]) || void 0 === n ? void 0 : n.tokenValidationResult) === A.FOT && (E = new B.Token(E.chainId, E.address, E.decimals, E.symbol, E.name, !0, null === (p = null === (i = R[E.address.toLowerCase()]) || void 0 === i ? void 0 : i.tokenFeeResult) || void 0 === p ? void 0 : p.buyFeeBps, null === (y = null === (b = R[E.address.toLowerCase()]) || void 0 === b ? void 0 : b.tokenFeeResult) || void 0 === y ? void 0 : y.sellFeeBps)), (null === (m = R[C.address.toLowerCase()]) || void 0 === m ? void 0 : m.tokenValidationResult) === A.FOT && (C = new B.Token(C.chainId, C.address, C.decimals, C.symbol, C.name, !0, null === (T = null === (g = R[C.address.toLowerCase()]) || void 0 === g ? void 0 : g.tokenFeeResult) || void 0 === T ? void 0 : T.buyFeeBps, null === (S = null === (v = R[C.address.toLowerCase()]) || void 0 === v ? void 0 : v.tokenFeeResult) || void 0 === S ? void 0 : S.sellFeeBps));
                        let {
                            reserve0: O,
                            reserve1: M
                        } = t.result, x = new en.Pair(amounts_CurrencyAmount.fromRawAmount(E, O.toString()), amounts_CurrencyAmount.fromRawAmount(C, M.toString())), D = w[e];
                        k[D] = x
                    }
                    P.length > 0 && L.info({
                        invalidPools: q().map(P, ([e, t]) => `${e.symbol}/${t.symbol}`)
                    }, `${P.length} pools invalid after checking their slot0 and liquidity results. Dropping.`);
                    let O = q().map(Object.values(k), poolToString);
                    return L.debug({
                        poolStrs: O
                    }, `Found ${O.length} valid pools`), {
                        getPool: (e, t) => {
                            let {
                                poolAddress: n
                            } = this.getPoolAddress(e, t);
                            return k[n]
                        },
                        getPoolByAddress: e => k[e],
                        getAllPools: () => Object.values(k)
                    }
                }
                getPoolAddress(e, t) {
                    let [n, i] = e.sortsBefore(t) ? [e, t] : [t, e], p = `${this.chainId}/${n.address}/${i.address}`, b = this.POOL_ADDRESS_CACHE[p];
                    if (b) return {
                        poolAddress: b,
                        token0: n,
                        token1: i
                    };
                    let y = en.Pair.getAddress(n, i);
                    return this.POOL_ADDRESS_CACHE[p] = y, {
                        poolAddress: y,
                        token0: n,
                        token1: i
                    }
                }
                async getPoolsData(e, t, n) {
                    let {
                        results: i,
                        blockNumber: p
                    } = await ti()(async () => this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses: e,
                        contractInterface: IUniswapV2Pair__factory.createInterface(),
                        functionName: t,
                        providerConfig: n
                    }), this.retryOptions);
                    return L.debug(`Pool data fetched as of block ${p}`), i
                }
                flatten(e) {
                    let t = [];
                    for (let [n, i] of e) t.push(n), t.push(i);
                    return t
                }
            };
            let tc = [{
                inputs: [],
                name: "getPricesInWei",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }];
            let GasDataArbitrum__factory = class GasDataArbitrum__factory {
                static createInterface() {
                    return new ef.vU(tc)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tc, t)
                }
            };
            GasDataArbitrum__factory.abi = tc;
            let tp = [{
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "DecimalsUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "GasPriceUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "L1BaseFeeUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "OverheadUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "ScalarUpdated",
                type: "event"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "gasPrice",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "getL1Fee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "getL1GasUsed",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "l1BaseFee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "overhead",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "scalar",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_decimals",
                    type: "uint256"
                }],
                name: "setDecimals",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_gasPrice",
                    type: "uint256"
                }],
                name: "setGasPrice",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_baseFee",
                    type: "uint256"
                }],
                name: "setL1BaseFee",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_overhead",
                    type: "uint256"
                }],
                name: "setOverhead",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_scalar",
                    type: "uint256"
                }],
                name: "setScalar",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let GasPriceOracle__factory = class GasPriceOracle__factory {
                static createInterface() {
                    return new ef.vU(tp)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tp, t)
                }
            };
            GasPriceOracle__factory.abi = tp;
            let OptimismGasDataProvider = class OptimismGasDataProvider {
                constructor(e, t, n) {
                    if (this.chainId = e, this.multicall2Provider = t, e !== B.ChainId.OPTIMISM && e !== B.ChainId.BASE) throw Error("This data provider is used only on optimism networks.");
                    this.gasOracleAddress = null != n ? n : "0x420000000000000000000000000000000000000F"
                }
                async getGasData() {
                    var e, t, n, i;
                    let p = await this.multicall2Provider.callMultipleFunctionsOnSameContract({
                        address: this.gasOracleAddress,
                        contractInterface: GasPriceOracle__factory.createInterface(),
                        functionNames: ["l1BaseFee", "scalar", "decimals", "overhead"]
                    });
                    if (!(null === (e = p.results[0]) || void 0 === e ? void 0 : e.success) || !(null === (t = p.results[1]) || void 0 === t ? void 0 : t.success) || !(null === (n = p.results[2]) || void 0 === n ? void 0 : n.success) || !(null === (i = p.results[3]) || void 0 === i ? void 0 : i.success)) throw L.info({
                        results: p.results
                    }, "Failed to get gas constants data from the optimism gas oracle"), Error("Failed to get gas constants data from the optimism gas oracle");
                    let {
                        result: b
                    } = p.results[0], {
                        result: y
                    } = p.results[1], {
                        result: m
                    } = p.results[2], {
                        result: g
                    } = p.results[3];
                    return {
                        l1BaseFee: b[0],
                        scalar: y[0],
                        decimals: m[0],
                        overhead: g[0]
                    }
                }
            };
            let ArbitrumGasDataProvider = class ArbitrumGasDataProvider {
                constructor(e, t, n) {
                    this.chainId = e, this.provider = t, this.gasFeesAddress = n || "0x000000000000000000000000000000000000006C"
                }
                async getGasData() {
                    let e = GasDataArbitrum__factory.connect(this.gasFeesAddress, this.provider),
                        t = await e.getPricesInWei();
                    return {
                        perL2TxFee: t[0],
                        perL1CalldataFee: t[1],
                        perArbGasTotal: t[5]
                    }
                }
            };
            let th = [{
                inputs: [],
                name: "feeGrowthGlobal0X128",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "feeGrowthGlobal1X128",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "liquidity",
                outputs: [{
                    internalType: "uint128",
                    name: "",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }],
                name: "observations",
                outputs: [{
                    internalType: "uint32",
                    name: "blockTimestamp",
                    type: "uint32"
                }, {
                    internalType: "int56",
                    name: "tickCumulative",
                    type: "int56"
                }, {
                    internalType: "uint160",
                    name: "secondsPerLiquidityCumulativeX128",
                    type: "uint160"
                }, {
                    internalType: "bool",
                    name: "initialized",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "key",
                    type: "bytes32"
                }],
                name: "positions",
                outputs: [{
                    internalType: "uint128",
                    name: "_liquidity",
                    type: "uint128"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthInside0LastX128",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthInside1LastX128",
                    type: "uint256"
                }, {
                    internalType: "uint128",
                    name: "tokensOwed0",
                    type: "uint128"
                }, {
                    internalType: "uint128",
                    name: "tokensOwed1",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "protocolFees",
                outputs: [{
                    internalType: "uint128",
                    name: "token0",
                    type: "uint128"
                }, {
                    internalType: "uint128",
                    name: "token1",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "slot0",
                outputs: [{
                    internalType: "uint160",
                    name: "sqrtPriceX96",
                    type: "uint160"
                }, {
                    internalType: "int24",
                    name: "tick",
                    type: "int24"
                }, {
                    internalType: "uint16",
                    name: "observationIndex",
                    type: "uint16"
                }, {
                    internalType: "uint16",
                    name: "observationCardinality",
                    type: "uint16"
                }, {
                    internalType: "uint16",
                    name: "observationCardinalityNext",
                    type: "uint16"
                }, {
                    internalType: "uint8",
                    name: "feeProtocol",
                    type: "uint8"
                }, {
                    internalType: "bool",
                    name: "unlocked",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "int16",
                    name: "wordPosition",
                    type: "int16"
                }],
                name: "tickBitmap",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "int24",
                    name: "tick",
                    type: "int24"
                }],
                name: "ticks",
                outputs: [{
                    internalType: "uint128",
                    name: "liquidityGross",
                    type: "uint128"
                }, {
                    internalType: "int128",
                    name: "liquidityNet",
                    type: "int128"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthOutside0X128",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthOutside1X128",
                    type: "uint256"
                }, {
                    internalType: "int56",
                    name: "tickCumulativeOutside",
                    type: "int56"
                }, {
                    internalType: "uint160",
                    name: "secondsPerLiquidityOutsideX128",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "secondsOutside",
                    type: "uint32"
                }, {
                    internalType: "bool",
                    name: "initialized",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }];
            let IUniswapV3PoolState__factory = class IUniswapV3PoolState__factory {
                static createInterface() {
                    return new ef.vU(th)
                }
                static connect(e, t) {
                    return new ei.Contract(e, th, t)
                }
            };
            IUniswapV3PoolState__factory.abi = th;
            let V3PoolProvider = class V3PoolProvider {
                constructor(e, t, n = {
                    retries: 2,
                    minTimeout: 50,
                    maxTimeout: 500
                }) {
                    this.chainId = e, this.multicall2Provider = t, this.retryOptions = n, this.POOL_ADDRESS_CACHE = {}
                }
                async getPools(e, t) {
                    let n = new Set,
                        i = [],
                        p = [];
                    for (let t of e) {
                        let [e, b, y] = t, {
                            poolAddress: m,
                            token0: g,
                            token1: T
                        } = this.getPoolAddress(e, b, y);
                        n.has(m) || (n.add(m), i.push([g, T, y]), p.push(m))
                    }
                    L.debug(`getPools called with ${e.length} token pairs. Deduped down to ${n.size}`);
                    let [b, y] = await Promise.all([this.getPoolsData(p, "slot0", t), this.getPoolsData(p, "liquidity", t)]);
                    L.info(`Got liquidity and slot0s for ${n.size} pools ${(null==t?void 0:t.blockNumber)?`as of block: ${null==t?void 0:t.blockNumber}.`:""}`);
                    let m = {},
                        g = [];
                    for (let e = 0; e < p.length; e++) {
                        let t = b[e],
                            n = y[e];
                        if (!(null == t ? void 0 : t.success) || !(null == n ? void 0 : n.success) || t.result.sqrtPriceX96.eq(0)) {
                            let [t, n, p] = i[e];
                            g.push([t, n, p]);
                            continue
                        }
                        let [T, v, S] = i[e], E = t.result, C = n.result[0], I = new V.Pool(T, v, S, E.sqrtPriceX96.toString(), C.toString(), E.tick), w = p[e];
                        m[w] = I
                    }
                    g.length > 0 && L.info({
                        invalidPools: q().map(g, ([e, t, n]) => `${e.symbol}/${t.symbol}/${n/1e4}%`)
                    }, `${g.length} pools invalid after checking their slot0 and liquidity results. Dropping.`);
                    let T = q().map(Object.values(m), poolToString);
                    return L.debug({
                        poolStrs: T
                    }, `Found ${T.length} valid pools`), {
                        getPool: (e, t, n) => {
                            let {
                                poolAddress: i
                            } = this.getPoolAddress(e, t, n);
                            return m[i]
                        },
                        getPoolByAddress: e => m[e],
                        getAllPools: () => Object.values(m)
                    }
                }
                getPoolAddress(e, t, n) {
                    let [i, p] = e.sortsBefore(t) ? [e, t] : [t, e], b = `${this.chainId}/${i.address}/${p.address}/${n}`, y = this.POOL_ADDRESS_CACHE[b];
                    if (y) return {
                        poolAddress: y,
                        token0: i,
                        token1: p
                    };
                    let m = (0, V.computePoolAddress)({
                        factoryAddress: X[this.chainId],
                        tokenA: i,
                        tokenB: p,
                        fee: n
                    });
                    return this.POOL_ADDRESS_CACHE[b] = m, {
                        poolAddress: m,
                        token0: i,
                        token1: p
                    }
                }
                async getPoolsData(e, t, n) {
                    let {
                        results: i,
                        blockNumber: p
                    } = await ti()(async () => this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses: e,
                        contractInterface: IUniswapV3PoolState__factory.createInterface(),
                        functionName: t,
                        providerConfig: n
                    }), this.retryOptions);
                    return L.debug(`Pool data fetched as of block ${p}`), i
                }
            };
            let tb = [{
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_spender",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_from",
                    type: "address"
                }, {
                    name: "_to",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    name: "balance",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_to",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }, {
                    name: "_spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                payable: !0,
                stateMutability: "payable",
                type: "fallback"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }];
            let Erc20_factory_Erc20_factory = class Erc20_factory_Erc20_factory {
                static createInterface() {
                    return new ef.vU(tb)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tb, t)
                }
            };
            Erc20_factory_Erc20_factory.abi = tb;
            var ty = n(1633);

            function methodParameters_buildTrade(e, t, n, i) {
                let p = q().filter(i, e => e.protocol === et.Protocol.V3),
                    b = q().filter(i, e => e.protocol === et.Protocol.V2),
                    y = q().filter(i, e => e.protocol === et.Protocol.MIXED),
                    m = q().map(p, i => {
                        let {
                            route: p,
                            amount: b,
                            quote: y
                        } = i;
                        if (n == B.TradeType.EXACT_INPUT) {
                            let n = amounts_CurrencyAmount.fromFractionalAmount(e, b.numerator, b.denominator),
                                i = amounts_CurrencyAmount.fromFractionalAmount(t, y.numerator, y.denominator),
                                m = new V.Route(p.pools, n.currency, i.currency);
                            return {
                                routev3: m,
                                inputAmount: n,
                                outputAmount: i
                            }
                        } {
                            let n = amounts_CurrencyAmount.fromFractionalAmount(e, y.numerator, y.denominator),
                                i = amounts_CurrencyAmount.fromFractionalAmount(t, b.numerator, b.denominator),
                                m = new V.Route(p.pools, n.currency, i.currency);
                            return {
                                routev3: m,
                                inputAmount: n,
                                outputAmount: i
                            }
                        }
                    }),
                    g = q().map(b, i => {
                        let {
                            route: p,
                            amount: b,
                            quote: y
                        } = i;
                        if (n == B.TradeType.EXACT_INPUT) {
                            let n = amounts_CurrencyAmount.fromFractionalAmount(e, b.numerator, b.denominator),
                                i = amounts_CurrencyAmount.fromFractionalAmount(t, y.numerator, y.denominator),
                                m = new en.Route(p.pairs, n.currency, i.currency);
                            return {
                                routev2: m,
                                inputAmount: n,
                                outputAmount: i
                            }
                        } {
                            let n = amounts_CurrencyAmount.fromFractionalAmount(e, y.numerator, y.denominator),
                                i = amounts_CurrencyAmount.fromFractionalAmount(t, b.numerator, b.denominator),
                                m = new en.Route(p.pairs, n.currency, i.currency);
                            return {
                                routev2: m,
                                inputAmount: n,
                                outputAmount: i
                            }
                        }
                    }),
                    T = q().map(y, i => {
                        let {
                            route: p,
                            amount: b,
                            quote: y
                        } = i;
                        if (n != B.TradeType.EXACT_INPUT) throw Error("Mixed routes are only supported for exact input trades");
                        let m = amounts_CurrencyAmount.fromFractionalAmount(e, b.numerator, b.denominator),
                            g = amounts_CurrencyAmount.fromFractionalAmount(t, y.numerator, y.denominator),
                            T = new et.MixedRouteSDK(p.pools, m.currency, g.currency);
                        return {
                            mixedRoute: T,
                            inputAmount: m,
                            outputAmount: g
                        }
                    }),
                    v = new et.Trade({
                        v2Routes: g,
                        v3Routes: m,
                        mixedRoutes: T,
                        tradeType: n
                    });
                return v
            }

            function buildSwapMethodParameters(e, t, n) {
                if (t.type == R.UNIVERSAL_ROUTER) return { ...ty.SwapRouter.swapERC20CallParameters(e, t),
                    to: (0, ty.UNIVERSAL_ROUTER_ADDRESS)(n)
                };
                if (t.type == R.SWAP_ROUTER_02) {
                    let {
                        recipient: i,
                        slippageTolerance: p,
                        deadline: b,
                        inputTokenPermit: y
                    } = t;
                    return { ...et.SwapRouter.swapCallParameters(e, {
                            recipient: i,
                            slippageTolerance: p,
                            deadlineOrPreviousBlockhash: b,
                            inputTokenPermit: y
                        }),
                        to: addresses_SWAP_ROUTER_02_ADDRESSES(n)
                    }
                }
                throw Error(`Unsupported swap type ${t}`)
            }
            async function getV2NativePool(e, t, n) {
                let i = e.chainId,
                    p = Q[i],
                    b = await t.getPools([
                        [p, e]
                    ], n),
                    y = b.getPool(p, e);
                return !y || y.reserve0.equalTo(0) || y.reserve1.equalTo(0) ? (L.error({
                    weth: p,
                    token: e,
                    reserve0: null == y ? void 0 : y.reserve0.toExact(),
                    reserve1: null == y ? void 0 : y.reserve1.toExact()
                }, `Could not find a valid WETH V2 pool with ${e.symbol} for computing gas costs.`), null) : y
            }
            async function getHighestLiquidityV3NativePool(e, t, n) {
                let i = Q[e.chainId],
                    p = q()([V.FeeAmount.HIGH, V.FeeAmount.MEDIUM, V.FeeAmount.LOW, V.FeeAmount.LOWEST]).map(t => [i, e, t]).value(),
                    b = await t.getPools(p, n),
                    y = q()([V.FeeAmount.HIGH, V.FeeAmount.MEDIUM, V.FeeAmount.LOW, V.FeeAmount.LOWEST]).map(t => b.getPool(i, e, t)).compact().value();
                if (0 == y.length) return L.error({
                    pools: y
                }, `Could not find a ${i.symbol} pool with ${e.symbol} for computing gas costs.`), null;
                let m = y.reduce((e, t) => ee().greaterThan(e.liquidity, t.liquidity) ? e : t);
                return m
            }
            async function getHighestLiquidityV3USDPool(e, t, n) {
                let i = tE[e],
                    p = Q[e];
                if (!i) throw Error(`Could not find a USD token for computing gas costs on ${e}`);
                let b = q()([V.FeeAmount.HIGH, V.FeeAmount.MEDIUM, V.FeeAmount.LOW, V.FeeAmount.LOWEST]).flatMap(e => q().map(i, t => [p, t, e])).value(),
                    y = await t.getPools(b, n),
                    m = q()([V.FeeAmount.HIGH, V.FeeAmount.MEDIUM, V.FeeAmount.LOW, V.FeeAmount.LOWEST]).flatMap(e => {
                        let t = [];
                        for (let n of i) {
                            let i = y.getPool(p, n, e);
                            i && t.push(i)
                        }
                        return t
                    }).compact().value();
                if (0 == m.length) {
                    let e = `Could not find a USD/${p.symbol} pool for computing gas costs.`;
                    throw L.error({
                        pools: m
                    }, e), Error(e)
                }
                let g = m.reduce((e, t) => ee().greaterThan(e.liquidity, t.liquidity) ? e : t);
                return g
            }

            function getL2ToL1GasUsed(e, t) {
                let n = e.slice(2).match(/.{1,2}/g),
                    i = n.length,
                    p = 0;
                for (let e = 0; e < i; e += 1) {
                    let t = parseInt(n[e], 16);
                    0 == t ? p += 4 : p += 16
                }
                let b = t.add(p);
                return b.add(1088)
            }
            let tm = {
                name: "Unsupported Token List",
                timestamp: "2021-01-05T20:47:02.923Z",
                version: {
                    major: 1,
                    minor: 0,
                    patch: 0
                },
                tags: {},
                logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
                keywords: ["uniswap", "unsupported", "broken"],
                tokens: [{
                    name: "USD Token",
                    address: "0xd233d1f6fd11640081abb8db125f722b5dc729dc",
                    symbol: "USD",
                    decimals: 9,
                    chainId: 1,
                    logoURI: ""
                }, {
                    name: "UNI HODL",
                    address: "0x4bf5dc91E2555449293D7824028Eb8Fe5879B689",
                    symbol: "UniH",
                    decimals: 18,
                    chainId: 1,
                    logoURI: ""
                }, {
                    name: "Gold Tether",
                    address: "0x4922a015c4407F87432B179bb209e125432E4a2A",
                    symbol: "XAUt",
                    decimals: 6,
                    chainId: 1,
                    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"
                }, {
                    name: "Grump Cat",
                    address: "0x93B2FfF814FCaEFFB01406e80B4Ecd89Ca6A021b",
                    symbol: "GRUMPY",
                    decimals: 9,
                    chainId: 1,
                    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"
                }, {
                    name: "apeUSD-UMA Synthetic USD (Dec 2021)",
                    address: "0xfA5e27893aee4805283D86e4283Da64F8c72dd56",
                    symbol: "apeUSD-UMA-DEC21",
                    decimals: 18,
                    chainId: 1,
                    logoURI: ""
                }, {
                    chainId: 1,
                    address: "0xc6b11850241c5127eab73af4b6c68bc267cbbff4",
                    name: "oWETHp Put 360 DEC2520",
                    symbol: "oWETH-360P-12/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oYFIp Put 25000 OCT0220",
                    address: "0x452b421be5b30f0c6ad8c3f03c06bdaab4f5c56c",
                    symbol: "oYFI-25000P-10/02/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 360 OCT3020",
                    address: "0x0578779e746d7186253a36cf651ea786acfcf087",
                    symbol: "oWETH-360P-10/30/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "ETHc Call 500 OCT3020",
                    address: "0xf9aba2e43fb19184408ea3b572a0fd672946f87b",
                    symbol: "oETH-500C-10/30/20",
                    decimals: 6
                }, {
                    chainId: 1,
                    name: "oBALp Put 22 OCT0220",
                    address: "0xdb0991dfc7e828b5a2837dc82d68e16490562c8d",
                    symbol: "oBAL-22P-10/02/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oCOMPp Put 150 SEP2520",
                    address: "0xe951ebe6b4420ab3f4844cf36dedd263d095b416",
                    symbol: "oCOMP-150P-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oCRVp Put 3 SEP252020",
                    address: "0x9215bd49b59748419eac6bad9dbe247df06ebdb9",
                    symbol: "oCRV-3P-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oETHp Put 180 SEP2520",
                    address: "0xE3A2c34Fa2F59ffa95C4ACd1E5663633d45Bc3AD",
                    symbol: "oETH-180P-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oETHc Call 400 SEP2520",
                    address: "0x05977EBC26825C0CD6097E0Ad7204721516711Eb",
                    symbol: "oETH-400C-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 380 SEP1820",
                    address: "0x31f88266301b08631f9f0e33fd5c43c2a5d1e5b2",
                    symbol: "oWETH-380P-09/18/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oYFIp Put 8500 SEP1820",
                    address: "0xd1cec2f67fdc4c60e0963515dfc3343f31e32e47",
                    symbol: "oYFI-8500P-09/18/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 370 SEP1120",
                    address: "0x15844029b2c2bf24506e9937739a9a912f1e4354",
                    symbol: "oWETH-370P-09/11/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 400 SEP0420",
                    address: "0x5562c33c383f6386be4f6dcdbd35a3a99bbcfde6",
                    symbol: "oWETH-400P-09/04/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oETHp Put 200 AUG2820",
                    address: "0x3CBFC1397deF0602c2d211c70A1c0c38CEDB5448",
                    symbol: "oWETH-400P-09/04/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "Opyn cDai Insurance",
                    symbol: "ocDai",
                    address: "0x98cc3bd6af1880fcfda17ac477b2f612980e5e33",
                    decimals: 8
                }, {
                    chainId: 1,
                    name: "Opyn cUSDC Insurance",
                    symbol: "ocUSDC",
                    address: "0x8ED9f862363fFdFD3a07546e618214b6D59F03d4",
                    decimals: 8
                }, {
                    chainId: 1,
                    address: "0x176C674Ee533C6139B0dc8b458D72A93dCB3e705",
                    symbol: "iAAVE",
                    name: "Synth Inverse Aave",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iAAVE.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x8A8079c7149B8A1611e5C5d978DCA3bE16545F83",
                    symbol: "iADA",
                    name: "Synth Inverse Cardano",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iADA.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xAFD870F32CE54EfdBF677466B612bf8ad164454B",
                    symbol: "iBNB",
                    name: "Synth Inverse Binance Coin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iBNB.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xD6014EA05BDe904448B743833dDF07c3C7837481",
                    symbol: "iBTC",
                    name: "Synth Inverse Bitcoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iBTC.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d",
                    symbol: "iCEX",
                    name: "Synth Inverse Centralised Exchange Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iCEX.svg",
                    tags: ["index", "inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x6345728B1ccE16E6f8C509950b5c84FFF88530d9",
                    symbol: "iCOMP",
                    name: "Synth Inverse Compound",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iCOMP.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xCB98f42221b2C251A4E74A1609722eE09f0cc08E",
                    symbol: "iDASH",
                    name: "Synth Inverse Dash",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iDASH.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x14d10003807AC60d07BB0ba82cAeaC8d2087c157",
                    symbol: "iDEFI",
                    name: "Synth Inverse DeFi Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iDEFI.svg",
                    tags: ["index", "inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x46a97629C9C1F58De6EC18C7F536e7E6d6A6ecDe",
                    symbol: "iDOT",
                    name: "Synth Inverse Polkadot",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iDOT.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4",
                    symbol: "iEOS",
                    name: "Synth Inverse EOS",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iEOS.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xd50c1746D835d2770dDA3703B69187bFfeB14126",
                    symbol: "iETC",
                    name: "Synth Inverse Ethereum Classic",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iETC.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xA9859874e1743A32409f75bB11549892138BBA1E",
                    symbol: "iETH",
                    name: "Synth Inverse Ether",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iETH.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01",
                    symbol: "iLINK",
                    name: "Synth Inverse Chainlink",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iLINK.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x79da1431150C9b82D2E5dfc1C68B33216846851e",
                    symbol: "iLTC",
                    name: "Synth Inverse Litecoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iLTC.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xA5a5DF41883Cdc00c4cCC6E8097130535399d9a3",
                    symbol: "iOIL",
                    name: "Synth Inverse Perpetual Oil Futures",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iOIL.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x0fEd38108bdb8e62ef7b5680E8E0726E2F29e0De",
                    symbol: "iREN",
                    name: "Synth Inverse Ren",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iREN.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xC5807183a9661A533CB08CbC297594a0B864dc12",
                    symbol: "iTRX",
                    name: "Synth Inverse TRON",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iTRX.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x36A00FF9072570eF4B9292117850B8FE08d96cce",
                    symbol: "iUNI",
                    name: "Synth Inverse Uniswap",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iUNI.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x4AdF728E2Df4945082cDD6053869f51278fae196",
                    symbol: "iXMR",
                    name: "Synth Inverse Monero",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iXMR.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6",
                    symbol: "iXRP",
                    name: "Synth Inverse Ripple",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iXRP.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x8deef89058090ac5655A99EEB451a4f9183D1678",
                    symbol: "iXTZ",
                    name: "Synth Inverse Tezos",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iXTZ.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x592244301CeA952d6daB2fdC1fE6bd9E53917306",
                    symbol: "iYFI",
                    name: "Synth Inverse yearn.finance",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iYFI.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xcD39b5434a0A92cf47D1F567a7dF84bE356814F0",
                    symbol: "s1INCH",
                    name: "Synth 1inch",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/s1INCH.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x7537AAe01f3B218DAE75e10d952473823F961B87",
                    symbol: "sAAPL",
                    name: "Synth Apple",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAAPL.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076",
                    symbol: "sAAVE",
                    name: "Synth Aave",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAAVE.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xe36E2D3c7c34281FA3bC737950a68571736880A1",
                    symbol: "sADA",
                    name: "Synth Cardano",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sADA.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x9CF7E61853ea30A41b02169391b393B901eac457",
                    symbol: "sAMZN",
                    name: "Synth Amazon",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAMZN.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xF48e200EAF9906362BB1442fca31e0835773b8B4",
                    symbol: "sAUD",
                    name: "Synth Australian Dollars",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAUD.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848",
                    symbol: "sBNB",
                    name: "Synth Binance Coin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sBNB.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
                    symbol: "sBTC",
                    name: "Synth Bitcoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sBTC.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xeABACD844A196D7Faf3CE596edeBF9900341B420",
                    symbol: "sCEX",
                    name: "Synth Centralised Exchange Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCEX.svg",
                    tags: ["index", "synth"]
                }, {
                    chainId: 1,
                    address: "0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d",
                    symbol: "sCHF",
                    name: "Synth Swiss Franc",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCHF.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x9EeF4CA7aB9fa8bc0650127341C2d3F707a40f8A",
                    symbol: "sCOIN",
                    name: "Synth Coinbase",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCOIN.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xEb029507d3e043DD6C87F2917C4E82B902c35618",
                    symbol: "sCOMP",
                    name: "Synth Compound",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCOMP.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xD38aEb759891882e78E957c80656572503D8c1B1",
                    symbol: "sCRV",
                    name: "Synth Curve DAO Token",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCRV.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6",
                    symbol: "sDASH",
                    name: "Synth Dash",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sDASH.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B",
                    symbol: "sDEFI",
                    name: "Synth DeFi Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sDEFI.svg",
                    tags: ["index", "synth"]
                }, {
                    chainId: 1,
                    address: "0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6",
                    symbol: "sDOT",
                    name: "Synth Polkadot",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sDOT.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x88C8Cf3A212c0369698D13FE98Fcb76620389841",
                    symbol: "sEOS",
                    name: "Synth EOS",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sEOS.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x22602469d704BfFb0936c7A7cfcD18f7aA269375",
                    symbol: "sETC",
                    name: "Synth Ethereum Classic",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sETC.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
                    symbol: "sETH",
                    name: "Synth Ether",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sETH.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
                    symbol: "sEUR",
                    name: "Synth Euros",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sEUR.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xf50B5e535F62a56A9BD2d8e2434204E726c027Fa",
                    symbol: "sFB",
                    name: "Synth Facebook",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sFB.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x23348160D7f5aca21195dF2b70f28Fce2B0be9fC",
                    symbol: "sFTSE",
                    name: "Synth FTSE 100 Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sFTSE.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F",
                    symbol: "sGBP",
                    name: "Synth Pound Sterling",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sGBP.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xC63B8ECCE56aB9C46184eC6aB85e4771fEa4c8AD",
                    symbol: "sGOOG",
                    name: "Synth Alphabet",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sGOOG.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d",
                    symbol: "sJPY",
                    name: "Synth Japanese Yen",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sJPY.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B",
                    symbol: "sKRW",
                    name: "Synth South Korean Won",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sKRW.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6",
                    symbol: "sLINK",
                    name: "Synth Chainlink",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sLINK.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xC14103C2141E842e228FBaC594579e798616ce7A",
                    symbol: "sLTC",
                    name: "Synth Litecoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sLTC.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x745a824D6aBBD236AA794b5530062778A6Ad7523",
                    symbol: "sMSFT",
                    name: "Synth Microsoft",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sMSFT.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x5A7E3c07604EB515C16b36cd51906a65f021F609",
                    symbol: "sNFLX",
                    name: "Synth Netflix",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sNFLX.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x757de3ac6B830a931eF178C6634c5C551773155c",
                    symbol: "sNIKKEI",
                    name: "Synth Nikkei 225 Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sNIKKEI.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x6d16cF3EC5F763d4d99cB0B0b110eefD93B11B56",
                    symbol: "sOIL",
                    name: "Synth Perpetual Oil Futures",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sOIL.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xD31533E8d0f3DF62060e94B3F1318137bB6E3525",
                    symbol: "sREN",
                    name: "Synth Ren",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sREN.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x0352557B007A4Aae1511C114409b932F06F9E2f4",
                    symbol: "sRUNE",
                    name: "Synth THORChain",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sRUNE.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xf2E08356588EC5cd9E437552Da87C0076b4970B0",
                    symbol: "sTRX",
                    name: "Synth TRON",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sTRX.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x918dA91Ccbc32B7a6A0cc4eCd5987bbab6E31e6D",
                    symbol: "sTSLA",
                    name: "Synth Tesla",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sTSLA.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x30635297E450b930f8693297eBa160D9e6c8eBcf",
                    symbol: "sUNI",
                    name: "Synth Uniswap",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sUNI.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x6A22e5e94388464181578Aa7A6B869e00fE27846",
                    symbol: "sXAG",
                    name: "Synth Silver Ounce",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXAG.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
                    symbol: "sXAU",
                    name: "Synth Gold Ounce",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXAU.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x5299d6F7472DCc137D7f3C4BcfBBB514BaBF341A",
                    symbol: "sXMR",
                    name: "Synth Monero",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXMR.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c",
                    symbol: "sXRP",
                    name: "Synth Ripple",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXRP.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd",
                    symbol: "sXTZ",
                    name: "Synth Tezos",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXTZ.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x992058B7DB08F9734d84485bfbC243C4ee6954A7",
                    symbol: "sYFI",
                    name: "Synth yearn.finance",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sYFI.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x81ab848898b5ffD3354dbbEfb333D5D183eEDcB5",
                    name: "yUSD Synthetic Expiring 1 September 2020",
                    symbol: "yUSDSEP20",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xB2FdD60AD80ca7bA89B9BAb3b5336c2601C020b4",
                    name: "yUSD Synthetic Expiring 1 October 2020",
                    symbol: "yUSDOCT20",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x208d174775dc39fe18b1b374972f77ddec6c0f73",
                    name: "uUSDrBTC Synthetic Expiring 1 Oct 2020",
                    symbol: "uUSDrBTC-OCT",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xf06ddacf71e2992e2122a1a0168c6967afdf63ce",
                    name: "uUSDrBTC Synthetic Expiring 31 Dec 2020",
                    symbol: "uUSDrBTC-DEC",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xd16c79c8a39d44b2f3eb45d2019cd6a42b03e2a9",
                    name: "uUSDwETH Synthetic Expiring 31 Dec 2020",
                    symbol: "uUSDwETH-DEC",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x3d995510f8d82c2ea341845932b5ddde0bead9a3",
                    name: "uGAS-JAN21 Token Expiring 31 Jan 2021",
                    symbol: "uGAS-JAN21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x90f802c7e8fb5d40b0de583e34c065a3bd2020d8",
                    name: "YD-ETH-MAR21 Token Expiring 31 Mar 2021",
                    symbol: "YD-ETH-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x002f0b1a71c5730cf2f4da1970a889207bdb6d0d",
                    name: "YD-BTC-MAR21 Token Expiring 31 Mar 2021",
                    symbol: "YD-BTC-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x1062ad0e59fa67fa0b27369113098cc941dd0d5f",
                    name: "UMA 35 Call Expirying 30 Apr 2021",
                    symbol: "UMAc35-0421",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xf93340b1a3adf7eedcaec25fae8171d4b736e89f",
                    name: "pxUSD Synthetic USD Expiring 1 April 2021",
                    symbol: "pxUSD_MAR2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x84bd083b1c8bf929f39c98bc17cf518f40154f58",
                    name: "Mario Cash Synthetic Token Expiring 15 January 2021",
                    symbol: "Mario Cash-JAN-2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x81fab276aec924fbde190cf379783526d413cf70",
                    name: "uGAS-FEB21 Token Expiring 28 Feb 2021",
                    symbol: "uGAS-FEB21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4e110603e70b0b5f1c403ee543b37e1f1244cf28",
                    name: "uGAS-MAR21 Token Expiring 31 Mar 2021",
                    symbol: "uGAS-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xcf55a7f92d5e0c6683debbc1fc20c0a6e056df13",
                    name: "Zelda Elastic Cash",
                    symbol: "Zelda Elastic Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x654eebac62240e6c56bab5f6adf7cfa74a894510",
                    name: "Zelda Spring Nuts Cash",
                    symbol: "Zelda Spring Nuts Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xa48920cc1ad85d8ea13af5d7be180c0338c306dd",
                    name: "Zelda Summer Nuts Cash",
                    symbol: "Zelda Summer Nuts Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x249a198d59b57fda5dda90630febc86fd8c7594c",
                    name: "Zelda Whirlwind Cash",
                    symbol: "Zelda Whirlwind Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x5ed1406873c9eb91f6f9a67ac4e152387c1132e7",
                    name: "Zelda Reinforced Cash",
                    symbol: "Zelda Reinforced Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x8104c9f13118320eefe5fbea8a44d600b85981ef",
                    name: "Mini Mario Summer Cash",
                    symbol: "Mini Mario Summer Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x69746c719e59674b147df25f50e7cfa0673cb625",
                    name: "Mini Mario Spring Cash",
                    symbol: "Mini Mario Spring Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x6b1257641d18791141f025eab36fb567c4b564ff",
                    name: "Bitcoin Dominance Token 31 March 2021",
                    symbol: "BTCDOM-MAR2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4e83b6287588a96321b2661c5e041845ff7814af",
                    name: "Altcoin Dominance Token 31 March 2021",
                    symbol: "ALTDOM-MAR2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x59fec83ec709c893aedd1a144cf1828eb04127cd",
                    name: "pxGOLD Synthetic GOLD Expiring 31 May 2021",
                    symbol: "pxGOLD_MAY2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x89337BFb7938804c3776C9FB921EccAf5ab76758",
                    name: "Compound Annualized Rate Future Expiring 28 March 2021",
                    symbol: "CAR-USDC-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xec58d3aefc9aaa2e0036fa65f70d569f49d9d1ed",
                    name: "uSTONKS Index Token April 2021",
                    symbol: "uSTONKS_APR21",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0xa6B9d7E3d76cF23549293Fb22c488E0Ea591A44e",
                    name: "uGAS-JUN21 Token Expiring 30 Jun 2021",
                    symbol: "uGAS-JUN21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xe813b65da6c38a04591aed3f082d32db7d53c382",
                    name: "Yield Dollar [WETH Dec 2021]",
                    symbol: "YD-ETH-DEC21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4b606e9eb2228c70f44453afe5a73e1fea258ce1",
                    name: "pxUSD Synthetic USD Expiring 31 Mar 2022",
                    symbol: "pxUSD_MAR2022",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x5247c0db4044fb6f97f32c7e1b48758019a5a912",
                    name: "pxGOLD Synthetic Gold Expiring 31 Mar 2022",
                    symbol: "pxGOLD_MAR2022",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x56fb1acaff95c0b6ebcd17c8361a63d98b1a5a11",
                    name: "uForex CNYUSD Synthetic Token April 2021",
                    symbol: "uCNYUSD-APR",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0xd49fa405dce086c65d66ca1ca41f8e98583812b4",
                    name: "uForex EURUSD Synthetic Token April 2021",
                    symbol: "uEURUSD-APR",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0x29dddacba3b231ee8d673dd0f0fa759ea145561b",
                    name: "DEFI_PULSE_TOTAL_TVL Synthetic Token Expiring 15 April 2021",
                    symbol: "TVL_ALL_APRIL15",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0xcbe430927370e95b4b10cfc702c6017ec7abefc3",
                    name: "Yield Dollar [WETH Jun 2021]",
                    symbol: "YD-ETH-JUN21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4b7fb448df91c8ed973494f8c8c4f12daf3a8521",
                    name: "Yield Dollar [renBTC Jun 2021]",
                    symbol: "YD-BTC-JUN21",
                    decimals: 8
                }, {
                    chainId: 1,
                    address: "0x3108c33b6fb38efedaefd8b5f7ca01d5f5c7372d",
                    name: "Yield Dollar UMA 21",
                    symbol: "yUMA21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7",
                    name: "Mirrored Amazon",
                    symbol: "MAMZN",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x31c63146a635EB7465e5853020b39713AC356991",
                    name: "M US Oil",
                    symbol: "MUSO",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x59A921Db27Dd6d4d974745B7FfC5c33932653442",
                    name: "M Google",
                    symbol: "MGOOGL",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86",
                    name: "Mirrored ProShares",
                    symbol: "MVIXY",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72",
                    name: "Mirrored Alibaba",
                    symbol: "MBABA",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x0e99cC0535BB6251F6679Fa6E65d6d3b430e840B",
                    name: "Mirrored Facebook",
                    symbol: "MFB",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x13B02c8dE71680e71F0820c996E4bE43c2F57d15",
                    name: "Mirrored Invesco QQ",
                    symbol: "MQQQ",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x41BbEDd7286dAab5910a1f15d12CBda839852BD7",
                    name: "Mirrored Microsoft",
                    symbol: "MMSFT",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676",
                    name: "Mirrored iShares Si",
                    symbol: "MSLV",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x21cA39943E91d704678F5D00b6616650F066fD63",
                    name: "Mirrored Tesla",
                    symbol: "MTSLA",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xe82bbB62fA81d0701643d1675FB50ec52fD3Df92",
                    name: "DYDX Token",
                    symbol: "DYDX",
                    decimals: 18
                }, {
                    chainId: 10,
                    address: "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
                    name: "sETH",
                    symbol: "Synth Ether",
                    decimals: 18
                }, {
                    chainId: 10,
                    address: "0x298B9B95708152ff6968aafd889c6586e9169f1D",
                    name: "sBTC",
                    symbol: "Synth Bitcoin",
                    decimals: 18
                }, {
                    chainId: 10,
                    address: "0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
                    name: "sLINK",
                    symbol: "Synth Link",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x6B60eE11b73230045cF9095E6e43AE9Ea638e172",
                    name: "Shatner",
                    symbol: "SHAT",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x7277a44D1325D81Ac58893002a1B40a41bea43fe",
                    name: "FAANG Index",
                    symbol: "FAANG",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x76175599887730786bdA1545D0D7AcE8737fEBB1",
                    name: "ENS DAO",
                    symbol: "ENS",
                    decimals: 18
                }]
            };
            let router_V3Route = class router_V3Route extends V.Route {
                constructor() {
                    super(...arguments), this.protocol = et.Protocol.V3
                }
            };
            let V2Route = class V2Route extends en.Route {
                constructor() {
                    super(...arguments), this.protocol = et.Protocol.V2
                }
            };
            let MixedRoute = class MixedRoute extends et.MixedRouteSDK {
                constructor() {
                    super(...arguments), this.protocol = et.Protocol.MIXED
                }
            };
            (g = _ || (_ = {}))[g.SUCCESS = 1] = "SUCCESS", g[g.NO_ROUTE_FOUND = 2] = "NO_ROUTE_FOUND", g[g.NO_SWAP_NEEDED = 3] = "NO_SWAP_NEEDED", (T = R || (R = {}))[T.UNIVERSAL_ROUTER = 0] = "UNIVERSAL_ROUTER", T[T.SWAP_ROUTER_02 = 1] = "SWAP_ROUTER_02";
            let DEFAULT_ROUTING_CONFIG_BY_CHAIN = e => {
                switch (e) {
                    case B.ChainId.OPTIMISM:
                    case B.ChainId.OPTIMISM_GOERLI:
                    case B.ChainId.BASE:
                    case B.ChainId.BASE_GOERLI:
                        return {
                            v2PoolSelection: {
                                topN: 3,
                                topNDirectSwaps: 1,
                                topNTokenInOut: 5,
                                topNSecondHop: 2,
                                topNWithEachBaseToken: 2,
                                topNWithBaseToken: 6
                            },
                            v3PoolSelection: {
                                topN: 2,
                                topNDirectSwaps: 2,
                                topNTokenInOut: 2,
                                topNSecondHop: 1,
                                topNWithEachBaseToken: 3,
                                topNWithBaseToken: 3
                            },
                            maxSwapsPerPath: 3,
                            minSplits: 1,
                            maxSplits: 7,
                            distributionPercent: 10,
                            forceCrossProtocol: !1
                        };
                    case B.ChainId.ARBITRUM_ONE:
                    case B.ChainId.ARBITRUM_GOERLI:
                    case B.ChainId.CELO:
                    case B.ChainId.CELO_ALFAJORES:
                        return {
                            v2PoolSelection: {
                                topN: 3,
                                topNDirectSwaps: 1,
                                topNTokenInOut: 5,
                                topNSecondHop: 2,
                                topNWithEachBaseToken: 2,
                                topNWithBaseToken: 6
                            },
                            v3PoolSelection: {
                                topN: 2,
                                topNDirectSwaps: 2,
                                topNTokenInOut: 2,
                                topNSecondHop: 1,
                                topNWithEachBaseToken: 3,
                                topNWithBaseToken: 2
                            },
                            maxSwapsPerPath: 2,
                            minSplits: 1,
                            maxSplits: 7,
                            distributionPercent: 25,
                            forceCrossProtocol: !1
                        };
                    default:
                        return {
                            v2PoolSelection: {
                                topN: 3,
                                topNDirectSwaps: 1,
                                topNTokenInOut: 5,
                                topNSecondHop: 2,
                                tokensToAvoidOnSecondHops: new LowerCaseStringArray("0xd46ba6d942050d489dbd938a2c909a5d5039a161"),
                                topNWithEachBaseToken: 2,
                                topNWithBaseToken: 6
                            },
                            v3PoolSelection: {
                                topN: 2,
                                topNDirectSwaps: 2,
                                topNTokenInOut: 3,
                                topNSecondHop: 1,
                                topNWithEachBaseToken: 3,
                                topNWithBaseToken: 5
                            },
                            maxSwapsPerPath: 3,
                            minSplits: 1,
                            maxSplits: 7,
                            distributionPercent: 5,
                            forceCrossProtocol: !1
                        }
                }
            };
            var tg = n(88178),
                tT = n.n(tg),
                tv = n(64116),
                tS = n.n(tv);
            let tE = {
                [B.ChainId.MAINNET]: [ed, eo, es],
                [B.ChainId.ARBITRUM_ONE]: [eM, ek, eP],
                [B.ChainId.OPTIMISM]: [eC, ev, eS],
                [B.ChainId.OPTIMISM_GOERLI]: [eR, ew, eA],
                [B.ChainId.ARBITRUM_GOERLI]: [eD],
                [B.ChainId.GOERLI]: [eT, ey, em, eg],
                [B.ChainId.SEPOLIA]: [eh, eb],
                [B.ChainId.POLYGON]: [eN],
                [B.ChainId.POLYGON_MUMBAI]: [eU],
                [B.ChainId.CELO]: [eY],
                [B.ChainId.CELO_ALFAJORES]: [eJ],
                [B.ChainId.GNOSIS]: [e6],
                [B.ChainId.MOONBEAM]: [e3],
                [B.ChainId.BNB]: [e$, eH, eq],
                [B.ChainId.AVALANCHE]: [e0, e1],
                [B.ChainId.BASE]: [e5]
            };
            let IV2GasModelFactory = class IV2GasModelFactory {};
            let IOnChainGasModelFactory = class IOnChainGasModelFactory {};
            let tC = tt.O$.from(0),
                BASE_SWAP_COST = e => {
                    switch (e) {
                        case B.ChainId.MAINNET:
                        case B.ChainId.GOERLI:
                        case B.ChainId.SEPOLIA:
                        case B.ChainId.OPTIMISM:
                        case B.ChainId.OPTIMISM_GOERLI:
                        case B.ChainId.BNB:
                        case B.ChainId.AVALANCHE:
                        case B.ChainId.BASE:
                        case B.ChainId.BASE_GOERLI:
                            return tt.O$.from(2e3);
                        case B.ChainId.ARBITRUM_ONE:
                        case B.ChainId.ARBITRUM_GOERLI:
                            return tt.O$.from(5e3);
                        case B.ChainId.POLYGON:
                        case B.ChainId.POLYGON_MUMBAI:
                        case B.ChainId.CELO:
                        case B.ChainId.CELO_ALFAJORES:
                        case B.ChainId.GNOSIS:
                        case B.ChainId.MOONBEAM:
                            return tt.O$.from(2e3)
                    }
                },
                COST_PER_INIT_TICK = e => {
                    switch (e) {
                        case B.ChainId.MAINNET:
                        case B.ChainId.GOERLI:
                        case B.ChainId.SEPOLIA:
                        case B.ChainId.BNB:
                        case B.ChainId.AVALANCHE:
                        case B.ChainId.OPTIMISM:
                        case B.ChainId.OPTIMISM_GOERLI:
                        case B.ChainId.BASE:
                        case B.ChainId.BASE_GOERLI:
                        case B.ChainId.ARBITRUM_ONE:
                        case B.ChainId.ARBITRUM_GOERLI:
                        case B.ChainId.POLYGON:
                        case B.ChainId.POLYGON_MUMBAI:
                        case B.ChainId.CELO:
                        case B.ChainId.CELO_ALFAJORES:
                        case B.ChainId.GNOSIS:
                        case B.ChainId.MOONBEAM:
                            return tt.O$.from(31e3)
                    }
                },
                COST_PER_HOP = e => {
                    switch (e) {
                        case B.ChainId.MAINNET:
                        case B.ChainId.GOERLI:
                        case B.ChainId.SEPOLIA:
                        case B.ChainId.BNB:
                        case B.ChainId.OPTIMISM:
                        case B.ChainId.OPTIMISM_GOERLI:
                        case B.ChainId.AVALANCHE:
                        case B.ChainId.BASE:
                        case B.ChainId.BASE_GOERLI:
                        case B.ChainId.ARBITRUM_ONE:
                        case B.ChainId.ARBITRUM_GOERLI:
                        case B.ChainId.POLYGON:
                        case B.ChainId.POLYGON_MUMBAI:
                        case B.ChainId.CELO:
                        case B.ChainId.CELO_ALFAJORES:
                        case B.ChainId.GNOSIS:
                        case B.ChainId.MOONBEAM:
                            return tt.O$.from(8e4)
                    }
                },
                SINGLE_HOP_OVERHEAD = e => tt.O$.from(15e3),
                TOKEN_OVERHEAD = (e, t) => {
                    let n = t.tokenPath,
                        i = tt.O$.from(0);
                    return e == B.ChainId.MAINNET && (n.some(e => e.equals(ec)) && (i = i.add(15e4)), n.some(e => e.equals(ep)) && (i = i.add(15e4))), i
                },
                NATIVE_WRAP_OVERHEAD = e => tt.O$.from(27938),
                NATIVE_UNWRAP_OVERHEAD = e => tt.O$.from(36e3),
                NATIVE_OVERHEAD = (e, t, n) => t.isNative ? NATIVE_WRAP_OVERHEAD(e) : n.isNative ? NATIVE_UNWRAP_OVERHEAD(e) : tt.O$.from(0);
            let V3HeuristicGasModelFactory = class V3HeuristicGasModelFactory extends IOnChainGasModelFactory {
                constructor() {
                    super()
                }
                async buildGasModel({
                    chainId: e,
                    gasPriceWei: t,
                    pools: n,
                    amountToken: i,
                    quoteToken: p,
                    l2GasDataProvider: b,
                    providerConfig: y
                }) {
                    let m = b ? await b.getGasData() : void 0,
                        g = n.usdPool,
                        calculateL1GasFees = async t => {
                            let i = {
                                    type: R.UNIVERSAL_ROUTER,
                                    recipient: "0x0000000000000000000000000000000000000001",
                                    deadlineOrPreviousBlockhash: 100,
                                    slippageTolerance: new B.Percent(5, 1e4)
                                },
                                b = tt.O$.from(0),
                                y = tt.O$.from(0),
                                T = [B.ChainId.OPTIMISM, B.ChainId.OPTIMISM_GOERLI, B.ChainId.BASE, B.ChainId.BASE_GOERLI];
                            T.includes(e) ? [b, y] = this.calculateOptimismToL1SecurityFee(t, i, m) : (e == B.ChainId.ARBITRUM_ONE || e == B.ChainId.ARBITRUM_GOERLI) && ([b, y] = this.calculateArbitrumToL1SecurityFee(t, i, m));
                            let v = Q[e],
                                S = amounts_CurrencyAmount.fromRawAmount(v, y.toString()),
                                E = g.token0.address == v.address ? g.token0Price : g.token1Price,
                                C = E.quote(S),
                                I = S;
                            if (!p.equals(v)) {
                                let e = n.nativeQuoteTokenV3Pool;
                                if (e) {
                                    let t = e.token0.address == v.address ? e.token0Price : e.token1Price;
                                    I = t.quote(S)
                                } else L.info("Could not find a pool to convert the cost into the quote token"), I = amounts_CurrencyAmount.fromRawAmount(p, 0)
                            }
                            return {
                                gasUsedL1: b,
                                gasCostL1USD: C,
                                gasCostL1QuoteToken: I
                            }
                        },
                        T = Q[e];
                    if (p.equals(T)) return {
                        estimateGasCost: n => {
                            let {
                                totalGasCostNativeCurrency: i,
                                baseGasUse: p
                            } = this.estimateGas(n, t, e, y), b = g.token0.address == T.address, m = b ? g.token0Price : g.token1Price, v = m.quote(i);
                            return {
                                gasEstimate: p,
                                gasCostInToken: i,
                                gasCostInUSD: v
                            }
                        },
                        calculateL1GasFees
                    };
                    let v = n.nativeQuoteTokenV3Pool,
                        S = null;
                    i.equals(T) || (S = n.nativeAmountTokenV3Pool);
                    let E = g.token0.address == T.address ? g.token1 : g.token0;
                    return {
                        estimateGasCost: (n => {
                            let b;
                            let {
                                totalGasCostNativeCurrency: m,
                                baseGasUse: C
                            } = this.estimateGas(n, t, e, y), I = null;
                            if (v) {
                                let e = v.token0.address == T.address,
                                    t = e ? v.token0Price : v.token1Price;
                                try {
                                    I = t.quote(m)
                                } catch (e) {
                                    throw L.info({
                                        nativeTokenPriceBase: t.baseCurrency,
                                        nativeTokenPriceQuote: t.quoteCurrency,
                                        gasCostInEth: m.currency
                                    }, "Debug eth price token issue"), e
                                }
                            } else L.info(`Unable to find ${T.symbol} pool with the quote token, ${p.symbol} to produce gas adjusted costs. Using amountToken to calculate gas costs.`);
                            if (S) {
                                let e = new B.Price(n.amount.currency, n.quote.currency, n.amount.quotient, n.quote.quotient),
                                    t = S.token0.address == T.address,
                                    i = t ? S.token0Price : S.token1Price,
                                    p = i.quote(m),
                                    b = e.quote(p);
                                (null === I || b.lessThan(I.asFraction)) && (L.info({
                                    nativeAmountTokenPrice: i.toSignificant(6),
                                    gasCostInTermsOfQuoteToken: I ? I.toExact() : 0,
                                    gasCostInTermsOfAmountToken: p.toExact(),
                                    executionPrice: e.toSignificant(6),
                                    syntheticGasCostInTermsOfQuoteToken: b.toSignificant(6)
                                }, "New gasCostInTermsOfQuoteToken calculated with synthetic quote token price is less than original"), I = b)
                            }
                            let w = g.token0.address == T.address,
                                A = w ? g.token0Price : g.token1Price;
                            try {
                                b = A.quote(m)
                            } catch (e) {
                                throw L.info({
                                    usdT1: g.token0.symbol,
                                    usdT2: g.token1.symbol,
                                    gasCostInNativeToken: m.currency.symbol
                                }, "Failed to compute USD gas price"), e
                            }
                            return null === I ? (L.info(`Unable to find ${T.symbol} pool with the quote token, ${p.symbol}, or amount Token, ${i.symbol} to produce gas adjusted costs. Route will not account for gas.`), {
                                gasEstimate: C,
                                gasCostInToken: amounts_CurrencyAmount.fromRawAmount(p, 0),
                                gasCostInUSD: amounts_CurrencyAmount.fromRawAmount(E, 0)
                            }) : {
                                gasEstimate: C,
                                gasCostInToken: I,
                                gasCostInUSD: b
                            }
                        }).bind(this),
                        calculateL1GasFees
                    }
                }
                estimateGas(e, t, n, i) {
                    var p;
                    let b = tt.O$.from(Math.max(1, q().sum(e.initializedTicksCrossedList))),
                        y = tt.O$.from(e.route.pools.length),
                        m = COST_PER_HOP(n).mul(y);
                    y.eq(1) && (m = m.add(SINGLE_HOP_OVERHEAD(n)));
                    let g = TOKEN_OVERHEAD(n, e.route),
                        T = COST_PER_INIT_TICK(n).mul(b),
                        v = tC.mul(0),
                        S = BASE_SWAP_COST(n).add(m).add(g).add(T).add(v).add(null !== (p = null == i ? void 0 : i.additionalGasOverhead) && void 0 !== p ? p : tt.O$.from(0)),
                        E = t.mul(S),
                        C = Q[n],
                        I = amounts_CurrencyAmount.fromRawAmount(C, E.toString());
                    return {
                        totalGasCostNativeCurrency: I,
                        totalInitializedTicksCrossed: b,
                        baseGasUse: S
                    }
                }
                calculateOptimismToL1SecurityFee(e, t, n) {
                    let {
                        l1BaseFee: i,
                        scalar: p,
                        decimals: b,
                        overhead: y
                    } = n, m = e[0], g = m.tradeType == B.TradeType.EXACT_INPUT ? m.amount.currency : m.quote.currency, T = m.tradeType == B.TradeType.EXACT_INPUT ? m.quote.currency : m.amount.currency, v = methodParameters_buildTrade(g, T, m.tradeType, e), S = buildSwapMethodParameters(v, t, B.ChainId.OPTIMISM).calldata, E = getL2ToL1GasUsed(S, y), C = E.mul(i), I = C.mul(p), w = tt.O$.from(10).pow(b), A = I.div(w);
                    return [E, A]
                }
                calculateArbitrumToL1SecurityFee(e, t, n) {
                    let {
                        perL2TxFee: i,
                        perL1CalldataFee: p
                    } = n, b = e[0], y = b.tradeType == B.TradeType.EXACT_INPUT ? b.amount.currency : b.quote.currency, m = b.tradeType == B.TradeType.EXACT_INPUT ? b.quote.currency : b.amount.currency, g = methodParameters_buildTrade(y, m, b.tradeType, e), T = buildSwapMethodParameters(g, t, B.ChainId.ARBITRUM_ONE).calldata, v = getL2ToL1GasUsed(T, tt.O$.from(0)), S = v.mul(p);
                    return [v, S = S.add(i)]
                }
            };
            async function getBestSwapRoute(e, t, n, i, p, b, y, m, g) {
                let T = Date.now(),
                    {
                        forceMixedRoutes: v
                    } = b;
                if (v && (L.info({
                        forceMixedRoutes: v
                    }, "Forcing mixed routes by filtering out other route types"), !(n = q().filter(n, e => e.protocol === et.Protocol.MIXED)))) return null;
                let S = {};
                for (let e of n) S[e.percent] || (S[e.percent] = []), S[e.percent].push(e);
                j.putMetric("BuildRouteWithValidQuoteObjects", Date.now() - T, E.Milliseconds);
                let C = await getBestSwapRouteBy(i, S, t, p, e => e.quoteAdjustedForGas, b, y, m, g);
                if (!C) return null;
                let {
                    routes: I
                } = C, w = q().reduce(I, (e, t) => e.add(t.amount), amounts_CurrencyAmount.fromRawAmount(I[0].amount.currency, 0)), A = e.subtract(w);
                return A.greaterThan(0) && (L.info({
                    missingAmount: A.quotient.toString()
                }, "Optimal route's amounts did not equal exactIn/exactOut total. Adding missing amount to last route in array."), I[I.length - 1].amount = I[I.length - 1].amount.add(A)), L.info({
                    routes: routeAmountsToString(I),
                    numSplits: I.length,
                    amount: e.toExact(),
                    quote: C.quote.toExact(),
                    quoteGasAdjusted: C.quoteGasAdjusted.toFixed(Math.min(C.quoteGasAdjusted.currency.decimals, 2)),
                    estimatedGasUSD: C.estimatedGasUsedUSD.toFixed(Math.min(C.estimatedGasUsedUSD.currency.decimals, 2)),
                    estimatedGasToken: C.estimatedGasUsedQuoteToken.toFixed(Math.min(C.estimatedGasUsedQuoteToken.currency.decimals, 2))
                }, `Found best swap route. ${I.length} split.`), C
            }
            async function getBestSwapRouteBy(e, t, n, i, p, b, y, m, g) {
                var T;
                let v, S;
                let C = q().mapValues(t, t => t.sort((t, n) => e == B.TradeType.EXACT_INPUT ? p(t).greaterThan(p(n)) ? -1 : 1 : p(t).lessThan(p(n)) ? -1 : 1)),
                    I = e == B.TradeType.EXACT_INPUT ? (e, t) => e.greaterThan(t) : (e, t) => e.lessThan(t),
                    sumFn = e => {
                        let t = e[0];
                        for (let n = 1; n < e.length; n++) t = t.add(e[n]);
                        return t
                    },
                    w = new(tT())(Array, (e, t) => I(e.quote, t.quote) ? -1 : 1, 3),
                    {
                        minSplits: A,
                        maxSplits: _,
                        forceCrossProtocol: R
                    } = b;
                if (!C[100] || A > 1 || R) L.info({
                    percentToSortedQuotes: q().mapValues(C, e => e.length)
                }, "Did not find a valid route without any splits. Continuing search anyway.");
                else
                    for (let e of (v = p(C[100][0]), S = [C[100][0]], C[100].slice(0, 5))) w.push({
                        quote: p(e),
                        routes: [e]
                    });
                let k = new(tS());
                for (let e = n.length; e >= 0; e--) {
                    let t = n[e];
                    C[t] && (k.enqueue({
                        curRoutes: [C[t][0]],
                        percentIndex: e,
                        remainingPercent: 100 - t,
                        special: !1
                    }), C[t] && C[t][1] && k.enqueue({
                        curRoutes: [C[t][1]],
                        percentIndex: e,
                        remainingPercent: 100 - t,
                        special: !0
                    }))
                }
                let P = 1,
                    O = Date.now();
                for (; k.size > 0;) {
                    j.putMetric(`Split${P}Done`, Date.now() - O, E.Milliseconds), O = Date.now(), L.info({
                        top5: q().map(Array.from(w.consume()), e => `${e.quote.toExact()} (${q()(e.routes).map(e=>e.toString()).join(", ")})`),
                        onQueue: k.size
                    }, `Top 3 with ${P} splits`), w.clear();
                    let t = k.size;
                    if (++P >= 3 && S && S.length < P - 1) break;
                    if (P > _) {
                        L.info("Max splits reached. Stopping search."), j.putMetric("MaxSplitsHitReached", 1, E.Count);
                        break
                    }
                    for (; t > 0;) {
                        t--;
                        let {
                            remainingPercent: b,
                            curRoutes: y,
                            percentIndex: g,
                            special: T
                        } = k.dequeue();
                        for (let t = g; t >= 0; t--) {
                            let g = n[t];
                            if (g > b || !C[g]) continue;
                            let _ = C[g],
                                O = findFirstRouteNotUsingUsedPools(y, _, R);
                            if (!O) continue;
                            let M = b - g,
                                x = [...y, O];
                            if (0 == M && P >= A) {
                                let t = q().map(x, e => p(e)),
                                    n = sumFn(t),
                                    b = amounts_CurrencyAmount.fromRawAmount(n.currency, 0);
                                if ($.includes(i)) {
                                    let e = x.every(e => e.protocol == et.Protocol.V3);
                                    if (void 0 != m && e) {
                                        let e = await m.calculateL1GasFees(x);
                                        b = e.gasCostL1QuoteToken
                                    } else throw Error("Can't compute L1 gas fees.")
                                }
                                let y = e == B.TradeType.EXACT_INPUT ? n.subtract(b) : n.add(b);
                                w.push({
                                    quote: y,
                                    routes: x
                                }), (!v || I(y, v)) && (v = y, S = x, T && j.putMetric("BestSwapNotPickingBestForPercent", 1, E.Count))
                            } else k.enqueue({
                                curRoutes: x,
                                remainingPercent: M,
                                percentIndex: t,
                                special: T
                            })
                        }
                    }
                }
                if (!S) {
                    L.info("Could not find a valid swap");
                    return
                }
                let M = Date.now(),
                    x = sumFn(q().map(S, e => e.quoteAdjustedForGas)),
                    D = q()(S).map(e => e.gasEstimate).reduce((e, t) => e.add(t), tt.O$.from(0));
                if (!tE[i] || !tE[i][0]) throw Error(`Could not find a USD token for computing gas costs on ${i}`);
                let N = tE[i][0],
                    U = N.decimals,
                    G = {
                        gasUsedL1: tt.O$.from(0),
                        gasCostL1USD: amounts_CurrencyAmount.fromRawAmount(N, 0),
                        gasCostL1QuoteToken: amounts_CurrencyAmount.fromRawAmount(null === (T = S[0]) || void 0 === T ? void 0 : T.quoteToken, 0)
                    };
                if ($.includes(i)) {
                    let e = S.every(e => e.protocol == et.Protocol.V3);
                    if (void 0 != m && e) G = await m.calculateL1GasFees(S);
                    else throw Error("Can't compute L1 gas fees.")
                }
                let {
                    gasCostL1USD: V,
                    gasCostL1QuoteToken: H
                } = G, W = q()(S).map(e => {
                    let t = U - e.gasCostInUSD.currency.decimals;
                    return 0 == t ? amounts_CurrencyAmount.fromRawAmount(N, e.gasCostInUSD.quotient) : amounts_CurrencyAmount.fromRawAmount(N, ee().multiply(e.gasCostInUSD.quotient, ee().exponentiate(ee().BigInt(10), ee().BigInt(t))))
                }).value(), Q = sumFn(W);
                if (Q.currency != V.currency) {
                    let e = U - V.currency.decimals;
                    Q = Q.add(amounts_CurrencyAmount.fromRawAmount(N, ee().multiply(V.quotient, ee().exponentiate(ee().BigInt(10), ee().BigInt(e)))))
                } else Q = Q.add(V);
                L.info({
                    estimatedGasUsedUSD: Q.toExact(),
                    normalizedUsdToken: N,
                    routeUSDGasEstimates: q().map(S, e => `${e.percent}% ${routes_routeToString(e.route)} ${e.gasCostInUSD.toExact()}`),
                    flatL1GasCostUSD: V.toExact()
                }, "USD gas estimates of best route");
                let Y = sumFn(q().map(S, e => e.gasCostInToken)).add(H),
                    X = sumFn(q().map(S, e => e.quote));
                if (e == B.TradeType.EXACT_INPUT) {
                    let e = x.subtract(H);
                    x = e
                } else {
                    let e = x.add(H);
                    x = e
                }
                let K = S.sort((e, t) => t.amount.greaterThan(e.amount) ? 1 : -1);
                return j.putMetric("PostSplitDone", Date.now() - M, E.Milliseconds), {
                    quote: X,
                    quoteGasAdjusted: x,
                    estimatedGasUsed: D,
                    estimatedGasUsedUSD: Q,
                    estimatedGasUsedQuoteToken: Y,
                    routes: y.getRouteWithQuotePortionAdjusted(e, K, g)
                }
            }
            let findFirstRouteNotUsingUsedPools = (e, t, n) => {
                    let i = new Set,
                        p = q()(e).flatMap(e => e.poolAddresses).value();
                    for (let e of p) i.add(e);
                    let b = new Set,
                        y = q()(e).flatMap(e => e.protocol).uniq().value();
                    for (let e of y) b.add(e);
                    for (let e of t) {
                        let {
                            poolAddresses: t,
                            protocol: p
                        } = e;
                        if (t.some(e => i.has(e))) continue;
                        let y = n && 1 == b.size;
                        if (!(y && b.has(p))) return e
                    }
                    return null
                },
                tI = {
                    [B.ChainId.MAINNET]: [eo, es, eu, ed, Q[1], el],
                    [B.ChainId.OPTIMISM]: [eC, ev, eS, eE],
                    [B.ChainId.SEPOLIA]: [eb, eh],
                    [B.ChainId.OPTIMISM_GOERLI]: [eR, ew, eA, e_],
                    [B.ChainId.ARBITRUM_ONE]: [eM, ek, eO, eP],
                    [B.ChainId.ARBITRUM_GOERLI]: [eD],
                    [B.ChainId.POLYGON]: [eN, eB],
                    [B.ChainId.POLYGON_MUMBAI]: [eU, eF],
                    [B.ChainId.CELO]: [eY, eX, eW],
                    [B.ChainId.CELO_ALFAJORES]: [eJ, eZ, eK],
                    [B.ChainId.GNOSIS]: [e2, e8, e6],
                    [B.ChainId.MOONBEAM]: [e4, e3, e7, e9],
                    [B.ChainId.BNB]: [eq, eH, e$],
                    [B.ChainId.AVALANCHE]: [e0, e1],
                    [B.ChainId.BASE]: [e5]
                };
            let SubcategorySelectionPools = class SubcategorySelectionPools {
                constructor(e, t) {
                    this.pools = e, this.poolsNeeded = t
                }
                hasEnoughPools() {
                    return this.pools.length >= this.poolsNeeded
                }
            };
            async function getV3CandidatePools({
                tokenIn: e,
                tokenOut: t,
                routeType: n,
                routingConfig: i,
                subgraphProvider: p,
                tokenProvider: b,
                poolProvider: y,
                blockedTokenListProvider: m,
                chainId: g
            }) {
                var T, v, S, C, I;
                let {
                    blockNumber: w,
                    v3PoolSelection: {
                        topN: A,
                        topNDirectSwaps: _,
                        topNTokenInOut: R,
                        topNSecondHop: k,
                        topNSecondHopForTokenAddress: P,
                        tokensToAvoidOnSecondHops: O,
                        topNWithEachBaseToken: M,
                        topNWithBaseToken: x
                    }
                } = i, D = e.address.toLowerCase(), N = t.address.toLowerCase(), U = Date.now(), G = await p.getPools(e, t, {
                    blockNumber: w
                });
                for (let e of (L.info({
                        samplePools: G.slice(0, 3)
                    }, "Got all pools from V3 subgraph provider"), G)) e.token0.id = e.token0.id.toLowerCase(), e.token1.id = e.token1.id.toLowerCase();
                j.putMetric("V3SubgraphPoolsLoad", Date.now() - U, E.Milliseconds);
                let H = Date.now(),
                    $ = G;
                if (m)
                    for (let e of ($ = [], G)) {
                        let t = await m.hasTokenByAddress(e.token0.id),
                            n = await m.hasTokenByAddress(e.token1.id);
                        t || n || $.push(e)
                    }
                let W = $.sort((e, t) => t.tvlUSD - e.tvlUSD);
                L.info(`After filtering blocked tokens went from ${G.length} to ${W.length}.`);
                let Y = new Set,
                    addToAddressSet = e => {
                        q()(e).map(e => e.id).forEach(e => Y.add(e))
                    },
                    X = null !== (T = tI[g]) && void 0 !== T ? T : [],
                    K = q()(X).flatMap(e => q()(W).filter(t => {
                        let n = e.address.toLowerCase();
                        return t.token0.id == n && t.token1.id == D || t.token1.id == n && t.token0.id == D
                    }).sortBy(e => -e.tvlUSD).slice(0, M).value()).sortBy(e => -e.tvlUSD).slice(0, x).value(),
                    z = q()(X).flatMap(e => q()(W).filter(t => {
                        let n = e.address.toLowerCase();
                        return t.token0.id == n && t.token1.id == N || t.token1.id == n && t.token0.id == N
                    }).sortBy(e => -e.tvlUSD).slice(0, M).value()).sortBy(e => -e.tvlUSD).slice(0, x).value(),
                    J = q()(W).filter(e => !Y.has(e.id) && (e.token0.id == D && e.token1.id == N || e.token1.id == D && e.token0.id == N)).slice(0, _).value();
                0 == J.length && _ > 0 && (J = q().map([V.FeeAmount.HIGH, V.FeeAmount.MEDIUM, V.FeeAmount.LOW, V.FeeAmount.LOWEST], n => {
                    let {
                        token0: i,
                        token1: p,
                        poolAddress: b
                    } = y.getPoolAddress(e, t, n);
                    return {
                        id: b,
                        feeTier: unparseFeeAmount(n),
                        liquidity: "10000",
                        token0: {
                            id: i.address
                        },
                        token1: {
                            id: p.address
                        },
                        tvlETH: 1e4,
                        tvlUSD: 1e4
                    }
                })), addToAddressSet(J);
                let Z = null === (v = Q[g]) || void 0 === v ? void 0 : v.address.toLowerCase(),
                    ee = [];
                ((null === (S = Q[g]) || void 0 === S ? void 0 : S.symbol) == (null === (C = Q[B.ChainId.MAINNET]) || void 0 === C ? void 0 : C.symbol) && "WETH" != t.symbol && "WETH9" != t.symbol && "ETH" != t.symbol || (null === (I = Q[g]) || void 0 === I ? void 0 : I.symbol) == eB.symbol && "MATIC" != t.symbol && "WMATIC" != t.symbol) && (ee = q()(W).filter(e => n == B.TradeType.EXACT_INPUT ? e.token0.id == Z && e.token1.id == N || e.token1.id == Z && e.token0.id == N : e.token0.id == Z && e.token1.id == D || e.token1.id == Z && e.token0.id == D).slice(0, 1).value()), addToAddressSet(ee);
                let en = q()(W).filter(e => !Y.has(e.id)).slice(0, A).value();
                addToAddressSet(en);
                let ef = q()(W).filter(e => !Y.has(e.id) && (e.token0.id == D || e.token1.id == D)).slice(0, R).value();
                addToAddressSet(ef);
                let er = q()(W).filter(e => !Y.has(e.id) && (e.token0.id == N || e.token1.id == N)).slice(0, R).value();
                addToAddressSet(er);
                let ei = q()(ef).map(e => D == e.token0.id ? e.token1.id : e.token0.id).flatMap(e => {
                    var t;
                    return q()(W).filter(t => !Y.has(t.id) && !(null == O ? void 0 : O.includes(e.toLowerCase())) && (t.token0.id == e || t.token1.id == e)).slice(0, null !== (t = null == P ? void 0 : P.get(e)) && void 0 !== t ? t : k).value()
                }).uniqBy(e => e.id).value();
                addToAddressSet(ei);
                let ea = q()(er).map(e => N == e.token0.id ? e.token1.id : e.token0.id).flatMap(e => {
                    var t;
                    return q()(W).filter(t => !Y.has(t.id) && !(null == O ? void 0 : O.includes(e.toLowerCase())) && (t.token0.id == e || t.token1.id == e)).slice(0, null !== (t = null == P ? void 0 : P.get(e)) && void 0 !== t ? t : k).value()
                }).uniqBy(e => e.id).value();
                addToAddressSet(ea);
                let eo = q()([...K, ...z, ...J, ...ee, ...en, ...ef, ...er, ...ei, ...ea]).compact().uniqBy(e => e.id).value(),
                    es = q()(eo).flatMap(e => [e.token0.id, e.token1.id]).compact().uniq().value();
                L.info(`Getting the ${es.length} tokens within the ${eo.length} V3 pools we are considering`);
                let eu = await b.getTokens(es, {
                        blockNumber: w
                    }),
                    printV3SubgraphPool = e => {
                        var t, n, i, p;
                        return `${null!==(n=null===(t=eu.getTokenByAddress(e.token0.id))||void 0===t?void 0:t.symbol)&&void 0!==n?n:e.token0.id}/${null!==(p=null===(i=eu.getTokenByAddress(e.token1.id))||void 0===i?void 0:i.symbol)&&void 0!==p?p:e.token1.id}/${e.feeTier}`
                    };
                L.info({
                    topByBaseWithTokenIn: K.map(printV3SubgraphPool),
                    topByBaseWithTokenOut: z.map(printV3SubgraphPool),
                    topByTVL: en.map(printV3SubgraphPool),
                    topByTVLUsingTokenIn: ef.map(printV3SubgraphPool),
                    topByTVLUsingTokenOut: er.map(printV3SubgraphPool),
                    topByTVLUsingTokenInSecondHops: ei.map(printV3SubgraphPool),
                    topByTVLUsingTokenOutSecondHops: ea.map(printV3SubgraphPool),
                    top2DirectSwap: J.map(printV3SubgraphPool),
                    top2EthQuotePool: ee.map(printV3SubgraphPool)
                }, "V3 Candidate Pools");
                let ed = q().map(eo, e => {
                        let t;
                        let n = eu.getTokenByAddress(e.token0.id),
                            i = eu.getTokenByAddress(e.token1.id);
                        try {
                            t = parseFeeAmount(e.feeTier)
                        } catch (t) {
                            L.info({
                                subgraphPool: e
                            }, `Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${e.feeTier} because fee tier not supported`);
                            return
                        }
                        if (!n || !i) {
                            L.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${t} because ${n?e.token1.id:e.token0.id} not found by token provider`);
                            return
                        }
                        return [n, i, t]
                    }),
                    el = q().compact(ed);
                j.putMetric("V3PoolsFilterLoad", Date.now() - H, E.Milliseconds);
                let ec = Date.now(),
                    ep = await y.getPools(el, {
                        blockNumber: w
                    });
                j.putMetric("V3PoolsLoad", Date.now() - ec, E.Milliseconds);
                let eh = {
                    protocol: et.Protocol.V3,
                    selections: {
                        topByBaseWithTokenIn: K,
                        topByBaseWithTokenOut: z,
                        topByDirectSwapPool: J,
                        topByEthQuoteTokenPool: ee,
                        topByTVL: en,
                        topByTVLUsingTokenIn: ef,
                        topByTVLUsingTokenOut: er,
                        topByTVLUsingTokenInSecondHops: ei,
                        topByTVLUsingTokenOutSecondHops: ea
                    }
                };
                return {
                    poolAccessor: ep,
                    candidatePools: eh,
                    subgraphPools: eo
                }
            }
            async function getV2CandidatePools({
                tokenIn: e,
                tokenOut: t,
                routeType: n,
                routingConfig: i,
                subgraphProvider: p,
                tokenProvider: b,
                poolProvider: y,
                blockedTokenListProvider: m,
                chainId: g
            }) {
                var T;
                let {
                    blockNumber: v,
                    v2PoolSelection: {
                        topN: S,
                        topNDirectSwaps: C,
                        topNTokenInOut: I,
                        topNSecondHop: w,
                        tokensToAvoidOnSecondHops: A,
                        topNWithEachBaseToken: _,
                        topNWithBaseToken: R
                    }
                } = i, k = e.address.toLowerCase(), P = t.address.toLowerCase(), O = Date.now(), M = await p.getPools(e, t, {
                    blockNumber: v
                });
                for (let e of M) e.token0.id = e.token0.id.toLowerCase(), e.token1.id = e.token1.id.toLowerCase();
                j.putMetric("V2SubgraphPoolsLoad", Date.now() - O, E.Milliseconds);
                let x = Date.now(),
                    D = M.sort((e, t) => t.reserve - e.reserve),
                    N = new Set,
                    U = [];
                if (C > 0) {
                    let {
                        token0: n,
                        token1: i,
                        poolAddress: p
                    } = y.getPoolAddress(e, t);
                    N.add(p.toLowerCase()), U = [{
                        id: p,
                        token0: {
                            id: n.address
                        },
                        token1: {
                            id: i.address
                        },
                        supply: 1e4,
                        reserve: 1e4,
                        reserveUSD: 1e4
                    }]
                }
                let G = Q[g].address.toLowerCase(),
                    V = new Map,
                    H = new Map,
                    $ = null !== (T = tI[g]) && void 0 !== T ? T : [],
                    W = new Set;
                $.forEach(e => {
                    let t = e.address.toLowerCase();
                    W.add(t), V.set(t, new SubcategorySelectionPools([], _)), H.set(t, new SubcategorySelectionPools([], _))
                });
                let Y = 0,
                    X = 0,
                    K = 1;
                ("WETH" == t.symbol || "WETH9" == t.symbol || "ETH" == t.symbol) && (K = 0);
                let z = [],
                    J = [],
                    Z = [],
                    ee = [],
                    en = 0;
                for (let e of D) {
                    if (en += 1, Y >= R && X >= R && z.length >= K && ee.length >= S && J.length >= I && Z.length >= I) break;
                    if (N.has(e.id)) continue;
                    if (m) {
                        let [t, n] = await Promise.all([m.hasTokenByAddress(e.token0.id), m.hasTokenByAddress(e.token1.id)]);
                        if (t || n) continue
                    }
                    let t = V.get(e.token0.id);
                    if (Y < R && t && e.token0.id != P && e.token1.id == k) {
                        Y += 1, N.add(e.id), J.length < I && J.push(e), n === B.TradeType.EXACT_OUTPUT && e.token0.id == G && z.push(e), t.pools.push(e);
                        continue
                    }
                    let i = V.get(e.token1.id);
                    if (Y < R && i && e.token0.id == k && e.token1.id != P) {
                        Y += 1, N.add(e.id), J.length < I && J.push(e), n === B.TradeType.EXACT_OUTPUT && e.token1.id == G && z.push(e), i.pools.push(e);
                        continue
                    }
                    let p = H.get(e.token0.id);
                    if (X < R && p && e.token0.id != k && e.token1.id == P) {
                        X += 1, N.add(e.id), Z.length < I && Z.push(e), n === B.TradeType.EXACT_INPUT && e.token0.id == G && z.push(e), p.pools.push(e);
                        continue
                    }
                    let b = H.get(e.token1.id);
                    if (X < R && b && e.token0.id == P && e.token1.id != k) {
                        X += 1, N.add(e.id), Z.length < I && Z.push(e), n === B.TradeType.EXACT_INPUT && e.token1.id == G && z.push(e), b.pools.push(e);
                        continue
                    }
                    if (z.length < K && (n === B.TradeType.EXACT_INPUT && (e.token0.id == G && e.token1.id == P || e.token1.id == G && e.token0.id == P) || n === B.TradeType.EXACT_OUTPUT && (e.token0.id == G && e.token1.id == k || e.token1.id == G && e.token0.id == k))) {
                        N.add(e.id), z.push(e);
                        continue
                    }
                    if (ee.length < S) {
                        N.add(e.id), ee.push(e);
                        continue
                    }
                    if (J.length < I && (e.token0.id == k || e.token1.id == k)) {
                        N.add(e.id), J.push(e);
                        continue
                    }
                    if (Z.length < I && (e.token0.id == P || e.token1.id == P)) {
                        N.add(e.id), Z.push(e);
                        continue
                    }
                }
                j.putMetric("V2SubgraphLoopsInFirstIteration", en, E.Count);
                let ef = [];
                for (let e of V.values()) ef.push(...e.pools);
                let er = [];
                for (let e of H.values()) er.push(...e.pools);
                let ei = new Map,
                    ea = new Map,
                    eo = J.filter(e => k === e.token0.id ? !(null == A ? void 0 : A.includes(e.token1.id.toLowerCase())) : !(null == A ? void 0 : A.includes(e.token0.id.toLowerCase()))).map(e => k === e.token0.id ? e.token1.id : e.token0.id),
                    es = Z.filter(e => P === e.token0.id ? !(null == A ? void 0 : A.includes(e.token1.id.toLowerCase())) : !(null == A ? void 0 : A.includes(e.token0.id.toLowerCase()))).map(e => P === e.token0.id ? e.token1.id : e.token0.id);
                for (let e of eo) ei.set(e, new SubcategorySelectionPools([], w));
                for (let e of es) ea.set(e, new SubcategorySelectionPools([], w));
                let eu = 0;
                if (eo.length > 0 || es.length > 0)
                    for (let e of D) {
                        eu += 1;
                        let t = !0;
                        for (let e of ei.values())
                            if (!e.hasEnoughPools()) {
                                t = !1;
                                break
                            }
                        let n = !0;
                        for (let e of ea.values())
                            if (!e.hasEnoughPools()) {
                                n = !1;
                                break
                            }
                        if (t && n) break;
                        if (N.has(e.id)) continue;
                        if (m) {
                            let [t, n] = await Promise.all([m.hasTokenByAddress(e.token0.id), m.hasTokenByAddress(e.token1.id)]);
                            if (t || n) continue
                        }
                        let i = ei.get(e.token0.id);
                        if (i && !i.hasEnoughPools()) {
                            N.add(e.id), i.pools.push(e);
                            continue
                        }
                        let p = ei.get(e.token1.id);
                        if (p && !p.hasEnoughPools()) {
                            N.add(e.id), p.pools.push(e);
                            continue
                        }
                        let b = ea.get(e.token0.id);
                        if (b && !b.hasEnoughPools()) {
                            N.add(e.id), b.pools.push(e);
                            continue
                        }
                        let y = ea.get(e.token1.id);
                        if (y && !y.hasEnoughPools()) {
                            N.add(e.id), y.pools.push(e);
                            continue
                        }
                    }
                j.putMetric("V2SubgraphLoopsInSecondIteration", eu, E.Count);
                let ed = [];
                for (let e of ei.values()) ed.push(...e.pools);
                let el = [];
                for (let e of ea.values()) el.push(...e.pools);
                let ec = q()([...ef, ...er, ...U, ...z, ...ee, ...J, ...Z, ...ed, ...el]).uniqBy(e => e.id).value(),
                    ep = new Set;
                for (let e of ec) ep.add(e.token0.id), ep.add(e.token1.id);
                let eh = Array.from(ep);
                L.info(`Getting the ${eh.length} tokens within the ${ec.length} V2 pools we are considering`);
                let eb = await b.getTokens(eh, {
                        blockNumber: v
                    }),
                    printV2SubgraphPool = e => {
                        var t, n, i, p;
                        return `${null!==(n=null===(t=eb.getTokenByAddress(e.token0.id))||void 0===t?void 0:t.symbol)&&void 0!==n?n:e.token0.id}/${null!==(p=null===(i=eb.getTokenByAddress(e.token1.id))||void 0===i?void 0:i.symbol)&&void 0!==p?p:e.token1.id}`
                    };
                L.info({
                    topByBaseWithTokenIn: ef.map(printV2SubgraphPool),
                    topByBaseWithTokenOut: er.map(printV2SubgraphPool),
                    topByTVL: ee.map(printV2SubgraphPool),
                    topByTVLUsingTokenIn: J.map(printV2SubgraphPool),
                    topByTVLUsingTokenOut: Z.map(printV2SubgraphPool),
                    topByTVLUsingTokenInSecondHops: ed.map(printV2SubgraphPool),
                    topByTVLUsingTokenOutSecondHops: el.map(printV2SubgraphPool),
                    top2DirectSwap: U.map(printV2SubgraphPool),
                    top2EthQuotePool: z.map(printV2SubgraphPool)
                }, "V2 Candidate pools");
                let ey = q().map(ec, e => {
                        let t = eb.getTokenByAddress(e.token0.id),
                            n = eb.getTokenByAddress(e.token1.id);
                        if (!t || !n) {
                            L.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}`);
                            return
                        }
                        return [t, n]
                    }),
                    em = q().compact(ey);
                j.putMetric("V2PoolsFilterLoad", Date.now() - x, E.Milliseconds);
                let eg = Date.now(),
                    eT = await y.getPools(em, i);
                j.putMetric("V2PoolsLoad", Date.now() - eg, E.Milliseconds);
                let ev = {
                    protocol: et.Protocol.V2,
                    selections: {
                        topByBaseWithTokenIn: ef,
                        topByBaseWithTokenOut: er,
                        topByDirectSwapPool: U,
                        topByEthQuoteTokenPool: z,
                        topByTVL: ee,
                        topByTVLUsingTokenIn: J,
                        topByTVLUsingTokenOut: Z,
                        topByTVLUsingTokenInSecondHops: ed,
                        topByTVLUsingTokenOutSecondHops: el
                    }
                };
                return {
                    poolAccessor: eT,
                    candidatePools: ev,
                    subgraphPools: ec
                }
            }
            async function getMixedRouteCandidatePools({
                v3CandidatePools: e,
                v2CandidatePools: t,
                routingConfig: n,
                tokenProvider: i,
                v3poolProvider: p,
                v2poolProvider: b
            }) {
                let y = Date.now(),
                    [{
                        subgraphPools: m,
                        candidatePools: g
                    }, {
                        subgraphPools: T,
                        candidatePools: v
                    }] = [e, t];
                j.putMetric("MixedSubgraphPoolsLoad", Date.now() - y, E.Milliseconds);
                let S = Date.now(),
                    C = new Set([...v.selections.topByTVLUsingTokenIn, ...v.selections.topByBaseWithTokenIn, ...v.selections.topByTVLUsingTokenOut, ...v.selections.topByBaseWithTokenOut, ...v.selections.topByDirectSwapPool].map(e => e.id)),
                    I = q()(T).filter(e => C.has(e.id)).sortBy(e => -e.reserveUSD).value(),
                    w = q()(m).sortBy(e => -e.tvlUSD).value(),
                    A = [];
                I.forEach(e => {
                    let t = w.find(t => t.token0.id == e.token0.id && t.token1.id == e.token1.id || t.token0.id == e.token1.id && t.token1.id == e.token0.id);
                    t ? e.reserveUSD > t.tvlUSD && (L.info({
                        token0: e.token0.id,
                        token1: e.token1.id,
                        v2reserveUSD: e.reserveUSD,
                        v3tvlUSD: t.tvlUSD
                    }, "MixedRoute heuristic, found a V2 pool with higher liquidity than its V3 counterpart"), A.push(e)) : (L.info({
                        token0: e.token0.id,
                        token1: e.token1.id,
                        v2reserveUSD: e.reserveUSD
                    }, "MixedRoute heuristic, found a V2 pool with no V3 counterpart"), A.push(e))
                }), L.info(A.length, "Number of V2 candidate pools that fit first heuristic");
                let _ = [...A, ...w],
                    R = q()(_).flatMap(e => [e.token0.id, e.token1.id]).compact().uniq().value();
                L.info(`Getting the ${R.length} tokens within the ${_.length} pools we are considering`);
                let k = await i.getTokens(R, n),
                    P = q().map(w, e => {
                        let t;
                        let n = k.getTokenByAddress(e.token0.id),
                            i = k.getTokenByAddress(e.token1.id);
                        try {
                            t = parseFeeAmount(e.feeTier)
                        } catch (t) {
                            L.info({
                                subgraphPool: e
                            }, `Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${e.feeTier} because fee tier not supported`);
                            return
                        }
                        if (!n || !i) {
                            L.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${t} because ${n?e.token1.id:e.token0.id} not found by token provider`);
                            return
                        }
                        return [n, i, t]
                    }),
                    O = q().compact(P),
                    M = q().map(A, e => {
                        let t = k.getTokenByAddress(e.token0.id),
                            n = k.getTokenByAddress(e.token1.id);
                        if (!t || !n) {
                            L.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}`);
                            return
                        }
                        return [t, n]
                    }),
                    x = q().compact(M);
                j.putMetric("MixedPoolsFilterLoad", Date.now() - S, E.Milliseconds);
                let D = Date.now(),
                    [B, N] = await Promise.all([b.getPools(x, n), p.getPools(O, n)]);
                j.putMetric("MixedPoolsLoad", Date.now() - D, E.Milliseconds);
                let buildPoolsBySelection = e => [...A.filter(t => v.selections[e].map(e => e.id).includes(t.id)), ...g.selections[e]],
                    U = {
                        protocol: et.Protocol.MIXED,
                        selections: {
                            topByBaseWithTokenIn: buildPoolsBySelection("topByBaseWithTokenIn"),
                            topByBaseWithTokenOut: buildPoolsBySelection("topByBaseWithTokenOut"),
                            topByDirectSwapPool: buildPoolsBySelection("topByDirectSwapPool"),
                            topByEthQuoteTokenPool: buildPoolsBySelection("topByEthQuoteTokenPool"),
                            topByTVL: buildPoolsBySelection("topByTVL"),
                            topByTVLUsingTokenIn: buildPoolsBySelection("topByTVLUsingTokenIn"),
                            topByTVLUsingTokenOut: buildPoolsBySelection("topByTVLUsingTokenOut"),
                            topByTVLUsingTokenInSecondHops: buildPoolsBySelection("topByTVLUsingTokenInSecondHops"),
                            topByTVLUsingTokenOutSecondHops: buildPoolsBySelection("topByTVLUsingTokenOutSecondHops")
                        }
                    };
                return {
                    V2poolAccessor: B,
                    V3poolAccessor: N,
                    candidatePools: U,
                    subgraphPools: _
                }
            }
            let tw = tt.O$.from(135e3),
                tA = tt.O$.from(5e4);
            let V2HeuristicGasModelFactory = class V2HeuristicGasModelFactory extends IV2GasModelFactory {
                constructor() {
                    super()
                }
                async buildGasModel({
                    chainId: e,
                    gasPriceWei: t,
                    poolProvider: n,
                    token: i,
                    providerConfig: p
                }) {
                    if (i.equals(Q[e])) {
                        let i = await this.getHighestLiquidityUSDPool(e, n, p);
                        return {
                            estimateGasCost: n => {
                                let {
                                    gasCostInEth: b,
                                    gasUse: y
                                } = this.estimateGas(n, t, e, p), m = i.token0.address == Q[e].address, g = m ? i.token0Price : i.token1Price, T = g.quote(b);
                                return {
                                    gasEstimate: y,
                                    gasCostInToken: b,
                                    gasCostInUSD: T
                                }
                            }
                        }
                    }
                    let b = this.getEthPool(e, i, n, p),
                        y = this.getHighestLiquidityUSDPool(e, n, p),
                        [m, g] = await Promise.all([b, y]);
                    return m || L.info("Unable to find ETH pool with the quote token to produce gas adjusted costs. Route will not account for gas."), {
                        estimateGasCost: n => {
                            let b, y;
                            let T = g.token0.address == Q[e].address ? g.token1 : g.token0,
                                {
                                    gasCostInEth: v,
                                    gasUse: S
                                } = this.estimateGas(n, t, e, { ...p
                                });
                            if (!m) return {
                                gasEstimate: S,
                                gasCostInToken: amounts_CurrencyAmount.fromRawAmount(i, 0),
                                gasCostInUSD: amounts_CurrencyAmount.fromRawAmount(T, 0)
                            };
                            let E = m.token0.address == Q[e].address,
                                C = E ? m.token0Price : m.token1Price;
                            try {
                                b = C.quote(v)
                            } catch (e) {
                                throw L.error({
                                    ethTokenPriceBase: C.baseCurrency,
                                    ethTokenPriceQuote: C.quoteCurrency,
                                    gasCostInEth: v.currency
                                }, "Debug eth price token issue"), e
                            }
                            let I = g.token0.address == Q[e].address,
                                w = I ? g.token0Price : g.token1Price;
                            try {
                                y = w.quote(v)
                            } catch (e) {
                                throw L.error({
                                    usdT1: g.token0.symbol,
                                    usdT2: g.token1.symbol,
                                    gasCostInEthToken: v.currency.symbol
                                }, "Failed to compute USD gas price"), e
                            }
                            return {
                                gasEstimate: S,
                                gasCostInToken: b,
                                gasCostInUSD: y
                            }
                        }
                    }
                }
                estimateGas(e, t, n, i) {
                    let p = e.route.pairs.length,
                        b = tw.add(tA.mul(p - 1));
                    (null == i ? void 0 : i.additionalGasOverhead) && (b = b.add(i.additionalGasOverhead));
                    let y = t.mul(b),
                        m = Q[n],
                        g = amounts_CurrencyAmount.fromRawAmount(m, y.toString());
                    return {
                        gasCostInEth: g,
                        gasUse: b
                    }
                }
                async getEthPool(e, t, n, i) {
                    let p = Q[e],
                        b = await n.getPools([
                            [p, t]
                        ], i),
                        y = b.getPool(p, t);
                    return !y || y.reserve0.equalTo(0) || y.reserve1.equalTo(0) ? (L.error({
                        weth: p,
                        token: t,
                        reserve0: null == y ? void 0 : y.reserve0.toExact(),
                        reserve1: null == y ? void 0 : y.reserve1.toExact()
                    }, `Could not find a valid WETH pool with ${t.symbol} for computing gas costs.`), null) : y
                }
                async getHighestLiquidityUSDPool(e, t, n) {
                    let i = tE[e];
                    if (!i) throw Error(`Could not find a USD token for computing gas costs on ${e}`);
                    let p = q().map(i, t => [t, Q[e]]),
                        b = await t.getPools(p, n),
                        y = b.getAllPools(),
                        m = q().filter(y, e => e.reserve0.greaterThan(0) && e.reserve1.greaterThan(0));
                    if (0 == m.length) throw L.error({
                        pools: m
                    }, "Could not find a USD/WETH pool for computing gas costs."), Error("Can't find USD/WETH pool for computing gas costs.");
                    let g = q().maxBy(m, t => t.token0.equals(Q[e]) ? parseFloat(t.reserve0.toSignificant(2)) : parseFloat(t.reserve1.toSignificant(2)));
                    return g
                }
            };
            let MixedRouteHeuristicGasModelFactory = class MixedRouteHeuristicGasModelFactory extends IOnChainGasModelFactory {
                constructor() {
                    super()
                }
                async buildGasModel({
                    chainId: e,
                    gasPriceWei: t,
                    pools: n,
                    quoteToken: i,
                    v2poolProvider: p,
                    providerConfig: b
                }) {
                    let y;
                    let m = n.usdPool,
                        g = Q[e];
                    if (i.equals(g)) return {
                        estimateGasCost: n => {
                            let {
                                totalGasCostNativeCurrency: i,
                                baseGasUse: p
                            } = this.estimateGas(n, t, e, b), y = m.token0.address == g.address, T = y ? m.token0Price : m.token1Price, v = T.quote(i);
                            return {
                                gasEstimate: p,
                                gasCostInToken: i,
                                gasCostInUSD: v
                            }
                        }
                    };
                    let T = n.nativeQuoteTokenV3Pool;
                    p && (y = await getV2NativePool(i, p, b));
                    let v = m.token0.address == g.address ? m.token1 : m.token0;
                    return {
                        estimateGasCost: (n => {
                            let p, S;
                            let {
                                totalGasCostNativeCurrency: E,
                                baseGasUse: C
                            } = this.estimateGas(n, t, e, b);
                            if (!T && !y) return L.info(`Unable to find ${g.symbol} pool with the quote token, ${i.symbol} to produce gas adjusted costs. Route will not account for gas.`), {
                                gasEstimate: C,
                                gasCostInToken: amounts_CurrencyAmount.fromRawAmount(i, 0),
                                gasCostInUSD: amounts_CurrencyAmount.fromRawAmount(v, 0)
                            };
                            let I = (!T || ee().equal(T.liquidity, ee().BigInt(0))) && y ? y : T,
                                w = I.token0.address == g.address,
                                A = w ? I.token0Price : I.token1Price;
                            try {
                                p = A.quote(E)
                            } catch (e) {
                                throw L.info({
                                    nativeTokenPriceBase: A.baseCurrency,
                                    nativeTokenPriceQuote: A.quoteCurrency,
                                    gasCostInEth: E.currency
                                }, "Debug eth price token issue"), e
                            }
                            let _ = m.token0.address == g.address,
                                R = _ ? m.token0Price : m.token1Price;
                            try {
                                S = R.quote(E)
                            } catch (e) {
                                throw L.info({
                                    usdT1: m.token0.symbol,
                                    usdT2: m.token1.symbol,
                                    gasCostInNativeToken: E.currency.symbol
                                }, "Failed to compute USD gas price"), e
                            }
                            return {
                                gasEstimate: C,
                                gasCostInToken: p,
                                gasCostInUSD: S
                            }
                        }).bind(this)
                    }
                }
                estimateGas(e, t, n, i) {
                    let p = tt.O$.from(Math.max(1, q().sum(e.initializedTicksCrossedList))),
                        b = tt.O$.from(0),
                        y = e.route,
                        m = (0, et.partitionMixedRouteByProtocol)(y);
                    m.map(e => {
                        e.every(e => e instanceof V.Pool) ? b = (b = b.add(BASE_SWAP_COST(n))).add(COST_PER_HOP(n).mul(e.length)) : e.every(e => e instanceof en.Pair) && (b = (b = b.add(tw)).add(tA.mul(e.length - 1)))
                    });
                    let g = COST_PER_INIT_TICK(n).mul(p),
                        T = tC.mul(0);
                    b = b.add(g).add(T), (null == i ? void 0 : i.additionalGasOverhead) && (b = b.add(i.additionalGasOverhead));
                    let v = t.mul(b),
                        S = Q[n],
                        E = amounts_CurrencyAmount.fromRawAmount(S, v.toString());
                    return {
                        totalGasCostNativeCurrency: E,
                        totalInitializedTicksCrossed: p,
                        baseGasUse: b
                    }
                }
            };
            let BaseQuoter = class BaseQuoter {
                constructor(e, t, n, i, p) {
                    this.tokenProvider = e, this.chainId = t, this.protocol = n, this.blockedTokenListProvider = i, this.tokenValidatorProvider = p
                }
                getRoutesThenQuotes(e, t, n, i, p, b, y, m, g, T, v) {
                    return this.getRoutes(e, t, y, m, g).then(e => (1 == e.routes.length && (j.putMetric(`${this.protocol}QuoterSingleRoute`, 1, E.Count), p = [100], i = [n]), e.routes.length > 0 ? j.putMetric(`${this.protocol}QuoterRoutesFound`, e.routes.length, E.Count) : j.putMetric(`${this.protocol}QuoterNoRoutesFound`, e.routes.length, E.Count), this.getQuotes(e.routes, i, p, b, m, g, e.candidatePools, T, v)))
                }
                async applyTokenValidatorToPools(e, t) {
                    if (!this.tokenValidatorProvider) return e;
                    L.info(`Running token validator on ${e.length} pools`);
                    let n = q().flatMap(e, e => [e.token0, e.token1]),
                        i = await this.tokenValidatorProvider.validateTokens(n),
                        p = q().filter(e, e => {
                            let n = i.getValidationByToken(e.token0),
                                p = i.getValidationByToken(e.token1),
                                b = t(e.token0, n),
                                y = t(e.token1, p);
                            return (b || y) && L.info(`Dropping pool ${poolToString(e)} because token is invalid. ${e.token0.symbol}: ${n}, ${e.token1.symbol}: ${p}`), !b && !y
                        });
                    return p
                }
            };
            let route_with_valid_quote_V2RouteWithValidQuote = class route_with_valid_quote_V2RouteWithValidQuote {
                constructor({
                    amount: e,
                    rawQuote: t,
                    percent: n,
                    route: i,
                    gasModel: p,
                    quoteToken: b,
                    tradeType: y,
                    v2PoolProvider: m
                }) {
                    this.protocol = et.Protocol.V2, this.amount = e, this.rawQuote = t, this.quote = amounts_CurrencyAmount.fromRawAmount(b, t.toString()), this.percent = n, this.route = i, this.gasModel = p, this.quoteToken = b, this.tradeType = y;
                    let {
                        gasEstimate: g,
                        gasCostInToken: T,
                        gasCostInUSD: v
                    } = this.gasModel.estimateGasCost(this);
                    if (this.gasCostInToken = T, this.gasCostInUSD = v, this.gasEstimate = g, this.tradeType == B.TradeType.EXACT_INPUT) {
                        let e = this.quote.subtract(T);
                        this.quoteAdjustedForGas = e
                    } else {
                        let e = this.quote.add(T);
                        this.quoteAdjustedForGas = e
                    }
                    this.poolAddresses = q().map(i.pairs, e => m.getPoolAddress(e.token0, e.token1).poolAddress), this.tokenPath = this.route.path
                }
                toString() {
                    return `${this.percent.toFixed(2)}% QuoteGasAdj[${this.quoteAdjustedForGas.toExact()}] Quote[${this.quote.toExact()}] Gas[${this.gasEstimate.toString()}] = ${routes_routeToString(this.route)}`
                }
            };
            let route_with_valid_quote_V3RouteWithValidQuote = class route_with_valid_quote_V3RouteWithValidQuote {
                constructor({
                    amount: e,
                    rawQuote: t,
                    sqrtPriceX96AfterList: n,
                    initializedTicksCrossedList: i,
                    quoterGasEstimate: p,
                    percent: b,
                    route: y,
                    gasModel: m,
                    quoteToken: g,
                    tradeType: T,
                    v3PoolProvider: v
                }) {
                    this.protocol = et.Protocol.V3, this.amount = e, this.rawQuote = t, this.sqrtPriceX96AfterList = n, this.initializedTicksCrossedList = i, this.quoterGasEstimate = p, this.quote = amounts_CurrencyAmount.fromRawAmount(g, t.toString()), this.percent = b, this.route = y, this.gasModel = m, this.quoteToken = g, this.tradeType = T;
                    let {
                        gasEstimate: S,
                        gasCostInToken: E,
                        gasCostInUSD: C
                    } = this.gasModel.estimateGasCost(this);
                    if (this.gasCostInToken = E, this.gasCostInUSD = C, this.gasEstimate = S, this.tradeType == B.TradeType.EXACT_INPUT) {
                        let e = this.quote.subtract(E);
                        this.quoteAdjustedForGas = e
                    } else {
                        let e = this.quote.add(E);
                        this.quoteAdjustedForGas = e
                    }
                    this.poolAddresses = q().map(y.pools, e => v.getPoolAddress(e.token0, e.token1, e.fee).poolAddress), this.tokenPath = this.route.tokenPath
                }
                toString() {
                    return `${this.percent.toFixed(2)}% QuoteGasAdj[${this.quoteAdjustedForGas.toExact()}] Quote[${this.quote.toExact()}] Gas[${this.gasEstimate.toString()}] = ${routes_routeToString(this.route)}`
                }
            };
            let route_with_valid_quote_MixedRouteWithValidQuote = class route_with_valid_quote_MixedRouteWithValidQuote {
                constructor({
                    amount: e,
                    rawQuote: t,
                    sqrtPriceX96AfterList: n,
                    initializedTicksCrossedList: i,
                    quoterGasEstimate: p,
                    percent: b,
                    route: y,
                    mixedRouteGasModel: m,
                    quoteToken: g,
                    tradeType: T,
                    v3PoolProvider: v,
                    v2PoolProvider: S
                }) {
                    this.protocol = et.Protocol.MIXED, this.amount = e, this.rawQuote = t, this.sqrtPriceX96AfterList = n, this.initializedTicksCrossedList = i, this.quoterGasEstimate = p, this.quote = amounts_CurrencyAmount.fromRawAmount(g, t.toString()), this.percent = b, this.route = y, this.gasModel = m, this.quoteToken = g, this.tradeType = T;
                    let {
                        gasEstimate: E,
                        gasCostInToken: C,
                        gasCostInUSD: I
                    } = this.gasModel.estimateGasCost(this);
                    if (this.gasCostInToken = C, this.gasCostInUSD = I, this.gasEstimate = E, this.tradeType == B.TradeType.EXACT_INPUT) {
                        let e = this.quote.subtract(C);
                        this.quoteAdjustedForGas = e
                    } else {
                        let e = this.quote.add(C);
                        this.quoteAdjustedForGas = e
                    }
                    this.poolAddresses = q().map(y.pools, e => e instanceof V.Pool ? v.getPoolAddress(e.token0, e.token1, e.fee).poolAddress : S.getPoolAddress(e.token0, e.token1).poolAddress), this.tokenPath = this.route.path
                }
                toString() {
                    return `${this.percent.toFixed(2)}% QuoteGasAdj[${this.quoteAdjustedForGas.toExact()}] Quote[${this.quote.toExact()}] Gas[${this.gasEstimate.toString()}] = ${routes_routeToString(this.route)}`
                }
            };

            function computeAllV2Routes(e, t, n, i) {
                return computeAllRoutes(e, t, (e, t, n) => new V2Route(e, t, n), n, i)
            }

            function computeAllRoutes(e, t, n, i, p) {
                var b;
                let y = Array(i.length).fill(!1),
                    m = [],
                    computeRoutes = (e, t, b, y, g, T) => {
                        if (!(b.length > p)) {
                            if (b.length > 0 && b[b.length - 1].involvesToken(t)) {
                                m.push(n([...b], e, t));
                                return
                            }
                            for (let n = 0; n < i.length; n++) {
                                if (y[n]) continue;
                                let p = i[n],
                                    m = T || e;
                                if (!p.involvesToken(m)) continue;
                                let v = p.token0.equals(m) ? p.token1 : p.token0;
                                g.has(v.address.toLowerCase()) || (g.add(v.address.toLowerCase()), b.push(p), y[n] = !0, computeRoutes(e, t, b, y, g, v), y[n] = !1, b.pop(), g.delete(v.address.toLowerCase()))
                            }
                        }
                    };
                return computeRoutes(e, t, [], y, new Set([e.address.toLowerCase()])), L.info({
                    routes: m.map(routes_routeToString),
                    pools: i.map(poolToString)
                }, `Computed ${m.length} possible routes for type ${null===(b=m[0])||void 0===b?void 0:b.protocol}.`), m
            }
            let MixedQuoter = class MixedQuoter extends BaseQuoter {
                constructor(e, t, n, i, p, b, y, m, g) {
                    super(b, y, et.Protocol.MIXED, m, g), this.v3SubgraphProvider = e, this.v3PoolProvider = t, this.v2SubgraphProvider = n, this.v2PoolProvider = i, this.onChainQuoteProvider = p
                }
                async getRoutes(e, t, n, i, p) {
                    let b = Date.now();
                    if (i != B.TradeType.EXACT_INPUT) throw Error("Mixed route quotes are not supported for EXACT_OUTPUT");
                    let [y, m] = n, {
                        V2poolAccessor: g,
                        V3poolAccessor: T,
                        candidatePools: v
                    } = await getMixedRouteCandidatePools({
                        v3CandidatePools: y,
                        v2CandidatePools: m,
                        tokenProvider: this.tokenProvider,
                        v3poolProvider: this.v3PoolProvider,
                        v2poolProvider: this.v2PoolProvider,
                        routingConfig: p,
                        chainId: this.chainId
                    }), S = T.getAllPools(), C = g.getAllPools(), I = [...S, ...C], w = await this.applyTokenValidatorToPools(I, (n, i) => !(!i || i == A.STF && (n.equals(e) || n.equals(t))) && (i == A.FOT || i == A.STF)), {
                        maxSwapsPerPath: _
                    } = p, R = function(e, t, n, i) {
                        let p = computeAllRoutes(e, t, (e, t, n) => new MixedRoute(e, t, n), n, i);
                        return p.filter(e => !e.pools.every(e => e instanceof V.Pool) && !e.pools.every(e => e instanceof en.Pair))
                    }(e, t, w, _);
                    return j.putMetric("MixedGetRoutesLoad", Date.now() - b, E.Milliseconds), {
                        routes: R,
                        candidatePools: v
                    }
                }
                async getQuotes(e, t, n, i, p, b, y, m) {
                    let g = Date.now();
                    if (L.info("Starting to get mixed quotes"), void 0 === m) throw Error("GasModel for MixedRouteWithValidQuote is required to getQuotes");
                    if (0 == e.length) return {
                        routesWithValidQuotes: [],
                        candidatePools: y
                    };
                    let T = this.onChainQuoteProvider.getQuotesManyExactIn.bind(this.onChainQuoteProvider),
                        v = Date.now();
                    L.info(`Getting quotes for mixed for ${e.length} routes with ${t.length} amounts per route.`);
                    let {
                        routesWithQuotes: S
                    } = await T(t, e, {
                        blockNumber: b.blockNumber
                    });
                    j.putMetric("MixedQuotesLoad", Date.now() - v, E.Milliseconds), j.putMetric("MixedQuotesFetched", q()(S).map(([, e]) => e.length).sum(), E.Count);
                    let C = [];
                    for (let e of S) {
                        let [t, b] = e;
                        for (let e = 0; e < b.length; e++) {
                            let y = n[e],
                                g = b[e],
                                {
                                    quote: T,
                                    amount: v,
                                    sqrtPriceX96AfterList: S,
                                    initializedTicksCrossedList: E,
                                    gasEstimate: I
                                } = g;
                            if (!T || !S || !E || !I) {
                                L.debug({
                                    route: routes_routeToString(t),
                                    amountQuote: g
                                }, "Dropping a null mixed quote for route.");
                                continue
                            }
                            let w = new route_with_valid_quote_MixedRouteWithValidQuote({
                                route: t,
                                rawQuote: T,
                                amount: v,
                                percent: y,
                                sqrtPriceX96AfterList: S,
                                initializedTicksCrossedList: E,
                                quoterGasEstimate: I,
                                mixedRouteGasModel: m,
                                quoteToken: i,
                                tradeType: p,
                                v3PoolProvider: this.v3PoolProvider,
                                v2PoolProvider: this.v2PoolProvider
                            });
                            C.push(w)
                        }
                    }
                    return j.putMetric("MixedGetQuotesLoad", Date.now() - g, E.Milliseconds), {
                        routesWithValidQuotes: C,
                        candidatePools: y
                    }
                }
            };
            let V2Quoter = class V2Quoter extends BaseQuoter {
                constructor(e, t, n, i, p, b, y, m) {
                    super(p, b, et.Protocol.V2, y, m), this.v2SubgraphProvider = e, this.v2PoolProvider = t, this.v2QuoteProvider = n, this.v2GasModelFactory = i
                }
                async getRoutes(e, t, n, i, p) {
                    let b = Date.now(),
                        {
                            poolAccessor: y,
                            candidatePools: m
                        } = n,
                        g = y.getAllPools(),
                        T = await this.applyTokenValidatorToPools(g, (n, i) => !(!i || i == A.STF && (n.equals(e) || n.equals(t))) && i == A.STF),
                        {
                            maxSwapsPerPath: v
                        } = p,
                        S = computeAllV2Routes(e, t, T, v);
                    return j.putMetric("V2GetRoutesLoad", Date.now() - b, E.Milliseconds), {
                        routes: S,
                        candidatePools: m
                    }
                }
                async getQuotes(e, t, n, i, p, b, y, m, g) {
                    let T = Date.now();
                    if (L.info("Starting to get V2 quotes"), void 0 === g) throw Error("GasPriceWei for V2Routes is required to getQuotes");
                    if (0 == t.length || !t.every(e => e.currency.equals(t[0].currency))) throw Error("Amounts must have at least one amount and must be same token");
                    let v = t[0].currency;
                    if (0 == e.length) return {
                        routesWithValidQuotes: [],
                        candidatePools: y
                    };
                    let S = p == B.TradeType.EXACT_INPUT ? this.v2QuoteProvider.getQuotesManyExactIn.bind(this.v2QuoteProvider) : this.v2QuoteProvider.getQuotesManyExactOut.bind(this.v2QuoteProvider),
                        C = Date.now();
                    L.info(`Getting quotes for V2 for ${e.length} routes with ${t.length} amounts per route.`);
                    let {
                        routesWithQuotes: I
                    } = await S(t, e, b), w = await this.v2GasModelFactory.buildGasModel({
                        chainId: this.chainId,
                        gasPriceWei: g,
                        poolProvider: this.v2PoolProvider,
                        token: i,
                        providerConfig: { ...b,
                            additionalGasOverhead: NATIVE_OVERHEAD(this.chainId, v, i)
                        }
                    });
                    j.putMetric("V2QuotesLoad", Date.now() - C, E.Milliseconds), j.putMetric("V2QuotesFetched", q()(I).map(([, e]) => e.length).sum(), E.Count);
                    let A = [];
                    for (let e of I) {
                        let [t, b] = e;
                        for (let e = 0; e < b.length; e++) {
                            let y = n[e],
                                m = b[e],
                                {
                                    quote: g,
                                    amount: T
                                } = m;
                            if (!g) {
                                L.debug({
                                    route: routes_routeToString(t),
                                    amountQuote: m
                                }, "Dropping a null V2 quote for route.");
                                continue
                            }
                            let v = new route_with_valid_quote_V2RouteWithValidQuote({
                                route: t,
                                rawQuote: g,
                                amount: T,
                                percent: y,
                                gasModel: w,
                                quoteToken: i,
                                tradeType: p,
                                v2PoolProvider: this.v2PoolProvider
                            });
                            A.push(v)
                        }
                    }
                    return j.putMetric("V2GetQuotesLoad", Date.now() - T, E.Milliseconds), {
                        routesWithValidQuotes: A,
                        candidatePools: y
                    }
                }
                async refreshRoutesThenGetQuotes(e, t, n, i, p, b, y, m, g) {
                    let T = [];
                    return n.forEach(e => e.pairs.forEach(e => T.push([e.token0, e.token1]))), this.v2PoolProvider.getPools(T, m).then(n => {
                        let T = computeAllV2Routes(e, t, n.getAllPools(), m.maxSwapsPerPath);
                        return this.getQuotes(T, i, p, b, y, m, void 0, void 0, g)
                    })
                }
            };
            let V3Quoter = class V3Quoter extends BaseQuoter {
                constructor(e, t, n, i, p, b, y) {
                    super(i, p, et.Protocol.V3, b, y), this.v3SubgraphProvider = e, this.v3PoolProvider = t, this.onChainQuoteProvider = n
                }
                async getRoutes(e, t, n, i, p) {
                    let b = Date.now(),
                        {
                            poolAccessor: y,
                            candidatePools: m
                        } = n,
                        g = y.getAllPools(),
                        T = await this.applyTokenValidatorToPools(g, (n, i) => !(!i || i == A.STF && (n.equals(e) || n.equals(t))) && (i == A.FOT || i == A.STF)),
                        {
                            maxSwapsPerPath: v
                        } = p,
                        S = computeAllRoutes(e, t, (e, t, n) => new router_V3Route(e, t, n), T, v);
                    return j.putMetric("V3GetRoutesLoad", Date.now() - b, E.Milliseconds), {
                        routes: S,
                        candidatePools: m
                    }
                }
                async getQuotes(e, t, n, i, p, b, y, m) {
                    let g = Date.now();
                    if (L.info("Starting to get V3 quotes"), void 0 === m) throw Error("GasModel for V3RouteWithValidQuote is required to getQuotes");
                    if (0 == e.length) return {
                        routesWithValidQuotes: [],
                        candidatePools: y
                    };
                    let T = p == B.TradeType.EXACT_INPUT ? this.onChainQuoteProvider.getQuotesManyExactIn.bind(this.onChainQuoteProvider) : this.onChainQuoteProvider.getQuotesManyExactOut.bind(this.onChainQuoteProvider),
                        v = Date.now();
                    L.info(`Getting quotes for V3 for ${e.length} routes with ${t.length} amounts per route.`);
                    let {
                        routesWithQuotes: S
                    } = await T(t, e, {
                        blockNumber: b.blockNumber
                    });
                    j.putMetric("V3QuotesLoad", Date.now() - v, E.Milliseconds), j.putMetric("V3QuotesFetched", q()(S).map(([, e]) => e.length).sum(), E.Count);
                    let C = [];
                    for (let e of S) {
                        let [t, b] = e;
                        for (let e = 0; e < b.length; e++) {
                            let y = n[e],
                                g = b[e],
                                {
                                    quote: T,
                                    amount: v,
                                    sqrtPriceX96AfterList: S,
                                    initializedTicksCrossedList: E,
                                    gasEstimate: I
                                } = g;
                            if (!T || !S || !E || !I) {
                                L.debug({
                                    route: routes_routeToString(t),
                                    amountQuote: g
                                }, "Dropping a null V3 quote for route.");
                                continue
                            }
                            let w = new route_with_valid_quote_V3RouteWithValidQuote({
                                route: t,
                                rawQuote: T,
                                amount: v,
                                percent: y,
                                sqrtPriceX96AfterList: S,
                                initializedTicksCrossedList: E,
                                quoterGasEstimate: I,
                                gasModel: m,
                                quoteToken: i,
                                tradeType: p,
                                v3PoolProvider: this.v3PoolProvider
                            });
                            C.push(w)
                        }
                    }
                    return j.putMetric("V3GetQuotesLoad", Date.now() - g, E.Milliseconds), {
                        routesWithValidQuotes: C,
                        candidatePools: y
                    }
                }
            };
            let LowerCaseStringArray = class LowerCaseStringArray extends Array {
                constructor(...e) {
                    super(...e.map(e => e.toLowerCase()))
                }
            };
            let AlphaRouter = class AlphaRouter {
                constructor({
                    chainId: e,
                    provider: t,
                    multicall2Provider: n,
                    v3PoolProvider: i,
                    onChainQuoteProvider: p,
                    v2PoolProvider: b,
                    v2QuoteProvider: y,
                    v2SubgraphProvider: m,
                    tokenProvider: g,
                    blockedTokenListProvider: T,
                    v3SubgraphProvider: v,
                    gasPriceProvider: S,
                    v3GasModelFactory: E,
                    v2GasModelFactory: C,
                    mixedRouteGasModelFactory: I,
                    swapRouterProvider: w,
                    optimismGasDataProvider: A,
                    tokenValidatorProvider: _,
                    arbitrumGasDataProvider: R,
                    simulator: k,
                    routeCachingProvider: P,
                    tokenPropertiesProvider: O,
                    portionProvider: M
                }) {
                    let x;
                    if (this.chainId = e, this.provider = t, this.multicall2Provider = null != n ? n : new UniswapMulticallProvider(e, t, 375e3), this.v3PoolProvider = null != i ? i : new CachingV3PoolProvider(this.chainId, new V3PoolProvider(ID_TO_CHAIN_ID(e), this.multicall2Provider), new NodeJSCache(new(to())({
                            stdTTL: 360,
                            useClones: !1
                        }))), this.simulator = k, this.routeCachingProvider = P, p) this.onChainQuoteProvider = p;
                    else switch (e) {
                        case B.ChainId.OPTIMISM:
                        case B.ChainId.OPTIMISM_GOERLI:
                            this.onChainQuoteProvider = new OnChainQuoteProvider(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 110,
                                gasLimitPerCall: 12e5,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 3e6,
                                multicallChunk: 45
                            }, {
                                gasLimitOverride: 3e6,
                                multicallChunk: 45
                            }, {
                                baseBlockOffset: -10,
                                rollback: {
                                    enabled: !0,
                                    attemptsBeforeRollback: 1,
                                    rollbackBlockOffset: -10
                                }
                            });
                            break;
                        case B.ChainId.BASE:
                        case B.ChainId.BASE_GOERLI:
                            this.onChainQuoteProvider = new OnChainQuoteProvider(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 80,
                                gasLimitPerCall: 12e5,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 3e6,
                                multicallChunk: 45
                            }, {
                                gasLimitOverride: 3e6,
                                multicallChunk: 45
                            }, {
                                baseBlockOffset: -10,
                                rollback: {
                                    enabled: !0,
                                    attemptsBeforeRollback: 1,
                                    rollbackBlockOffset: -10
                                }
                            });
                            break;
                        case B.ChainId.ARBITRUM_ONE:
                        case B.ChainId.ARBITRUM_GOERLI:
                            this.onChainQuoteProvider = new OnChainQuoteProvider(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 10,
                                gasLimitPerCall: 12e6,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 3e7,
                                multicallChunk: 6
                            }, {
                                gasLimitOverride: 3e7,
                                multicallChunk: 6
                            });
                            break;
                        case B.ChainId.CELO:
                        case B.ChainId.CELO_ALFAJORES:
                            this.onChainQuoteProvider = new OnChainQuoteProvider(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 10,
                                gasLimitPerCall: 5e6,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 5e6,
                                multicallChunk: 5
                            }, {
                                gasLimitOverride: 625e4,
                                multicallChunk: 4
                            });
                            break;
                        default:
                            this.onChainQuoteProvider = new OnChainQuoteProvider(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 210,
                                gasLimitPerCall: 705e3,
                                quoteMinSuccessRate: .15
                            }, {
                                gasLimitOverride: 2e6,
                                multicallChunk: 70
                            })
                    }
                    _ ? this.tokenValidatorProvider = _ : this.chainId === B.ChainId.MAINNET && (this.tokenValidatorProvider = new TokenValidatorProvider(this.chainId, this.multicall2Provider, new NodeJSCache(new(to())({
                        stdTTL: 3e4,
                        useClones: !1
                    })))), O ? this.tokenPropertiesProvider = O : this.tokenPropertiesProvider = new TokenPropertiesProvider(this.chainId, new NodeJSCache(new(to())({
                        stdTTL: 86400,
                        useClones: !1
                    })), new OnChainTokenFeeFetcher(this.chainId, t)), this.v2PoolProvider = null != b ? b : new CachingV2PoolProvider(e, new V2PoolProvider(e, this.multicall2Provider, this.tokenPropertiesProvider), new NodeJSCache(new(to())({
                        stdTTL: 60,
                        useClones: !1
                    }))), this.v2QuoteProvider = null != y ? y : new V2QuoteProvider, this.blockedTokenListProvider = null != T ? T : new CachingTokenListProvider(e, tm, new NodeJSCache(new(to())({
                        stdTTL: 3600,
                        useClones: !1
                    }))), this.tokenProvider = null != g ? g : new CachingTokenProviderWithFallback(e, new NodeJSCache(new(to())({
                        stdTTL: 3600,
                        useClones: !1
                    })), new CachingTokenListProvider(e, tf, new NodeJSCache(new(to())({
                        stdTTL: 3600,
                        useClones: !1
                    }))), new TokenProvider(e, this.multicall2Provider)), this.portionProvider = null != M ? M : new PortionProvider;
                    let D = ID_TO_NETWORK_NAME(e);
                    m ? this.v2SubgraphProvider = m : this.v2SubgraphProvider = new V2SubgraphProviderWithFallBacks([new CachingV2SubgraphProvider(e, new uri_subgraph_provider_URISubgraphProvider(e, `https://cloudflare-ipfs.com/ipns/api.uniswap.org/v1/pools/v2/${D}.json`, void 0, 0), new NodeJSCache(new(to())({
                        stdTTL: 300,
                        useClones: !1
                    }))), new StaticV2SubgraphProvider(e)]), v ? this.v3SubgraphProvider = v : this.v3SubgraphProvider = new V3SubgraphProviderWithFallBacks([new CachingV3SubgraphProvider(e, new uri_subgraph_provider_URISubgraphProvider(e, `https://cloudflare-ipfs.com/ipns/api.uniswap.org/v1/pools/v3/${D}.json`, void 0, 0), new NodeJSCache(new(to())({
                        stdTTL: 300,
                        useClones: !1
                    }))), new StaticV3SubgraphProvider(e, this.v3PoolProvider)]), x = tn.r.isProvider(this.provider) ? new OnChainGasPriceProvider(e, new EIP1559GasPriceProvider(this.provider), new LegacyGasPriceProvider(this.provider)) : new ETHGasStationInfoProvider("https://ethgasstation.info/api/ethgasAPI.json"), this.gasPriceProvider = null != S ? S : new CachingGasStationProvider(e, x, new NodeJSCache(new(to())({
                        stdTTL: 7,
                        useClones: !1
                    }))), this.v3GasModelFactory = null != E ? E : new V3HeuristicGasModelFactory, this.v2GasModelFactory = null != C ? C : new V2HeuristicGasModelFactory, this.mixedRouteGasModelFactory = null != I ? I : new MixedRouteHeuristicGasModelFactory, this.swapRouterProvider = null != w ? w : new SwapRouterProvider(this.multicall2Provider, this.chainId), (e === B.ChainId.OPTIMISM || e === B.ChainId.BASE) && (this.l2GasDataProvider = null != A ? A : new OptimismGasDataProvider(e, this.multicall2Provider)), (e === B.ChainId.ARBITRUM_ONE || e === B.ChainId.ARBITRUM_GOERLI) && (this.l2GasDataProvider = null != R ? R : new ArbitrumGasDataProvider(e, this.provider)), this.v2Quoter = new V2Quoter(this.v2SubgraphProvider, this.v2PoolProvider, this.v2QuoteProvider, this.v2GasModelFactory, this.tokenProvider, this.chainId, this.blockedTokenListProvider, this.tokenValidatorProvider), this.v3Quoter = new V3Quoter(this.v3SubgraphProvider, this.v3PoolProvider, this.onChainQuoteProvider, this.tokenProvider, this.chainId, this.blockedTokenListProvider, this.tokenValidatorProvider), this.mixedQuoter = new MixedQuoter(this.v3SubgraphProvider, this.v3PoolProvider, this.v2SubgraphProvider, this.v2PoolProvider, this.onChainQuoteProvider, this.tokenProvider, this.chainId, this.blockedTokenListProvider, this.tokenValidatorProvider)
                }
                async routeToRatio(e, t, n, i, p, b = DEFAULT_ROUTING_CONFIG_BY_CHAIN(this.chainId)) {
                    let y, m;
                    t.currency.wrapped.sortsBefore(e.currency.wrapped) && ([e, t] = [t, e]);
                    let g = this.calculateOptimalRatio(n, n.pool.sqrtRatioX96, !0);
                    n.pool.tickCurrent > n.tickUpper ? y = !0 : n.pool.tickCurrent < n.tickLower ? y = !1 : (y = new B.Fraction(e.quotient, t.quotient).greaterThan(g)) || (g = g.invert());
                    let [T, v] = y ? [e, t] : [t, e], S = g, E = n.pool, C = y ? n.pool.token0Price : n.pool.token1Price, I = null, w = !1, A = 0;
                    for (; !w;) {
                        let e;
                        if (++A > i.maxIterations) return L.info("max iterations exceeded"), {
                            status: _.NO_ROUTE_FOUND,
                            error: "max iterations exceeded"
                        };
                        let t = function(e, t, n, i) {
                            let p = new B.Fraction(n.quotient).subtract(e.multiply(i.quotient)).divide(e.multiply(t).add(1));
                            if (p.lessThan(0)) throw Error("routeToRatio: insufficient input token amount");
                            return amounts_CurrencyAmount.fromRawAmount(n.currency, p.quotient)
                        }(S, C, T, v);
                        if (t.equalTo(0)) return L.info("no swap needed: amountToSwap = 0"), {
                            status: _.NO_SWAP_NEEDED
                        };
                        if (!(I = await this.route(t, v.currency, B.TradeType.EXACT_INPUT, void 0, { ...DEFAULT_ROUTING_CONFIG_BY_CHAIN(this.chainId),
                                ...b,
                                protocols: [et.Protocol.V3, et.Protocol.V2]
                            }))) return L.info("no route found from this.route()"), {
                            status: _.NO_ROUTE_FOUND,
                            error: "no route found"
                        };
                        let p = T.subtract(I.trade.inputAmount),
                            m = v.add(I.trade.outputAmount),
                            R = p.divide(m);
                        if (I.route.forEach(t => {
                                t.protocol === et.Protocol.V3 && t.route.pools.forEach((i, p) => {
                                    i.token0.equals(n.pool.token0) && i.token1.equals(n.pool.token1) && i.fee === n.pool.fee && (e = ee().BigInt(t.sqrtPriceX96AfterList[p].toString()), S = this.calculateOptimalRatio(n, ee().BigInt(e.toString()), y))
                                })
                            }), e || (S = g), (w = R.equalTo(S) || this.absoluteValue(R.asFraction.divide(S).subtract(1)).lessThan(i.ratioErrorTolerance)) && e && (E = new V.Pool(n.pool.token0, n.pool.token1, n.pool.fee, e, n.pool.liquidity, V.TickMath.getTickAtSqrtRatio(e), n.pool.tickDataProvider)), C = I.trade.outputAmount.divide(I.trade.inputAmount), L.info({
                                exchangeRate: C.asFraction.toFixed(18),
                                optimalRatio: S.asFraction.toFixed(18),
                                newRatio: R.asFraction.toFixed(18),
                                inputBalanceUpdated: p.asFraction.toFixed(18),
                                outputBalanceUpdated: m.asFraction.toFixed(18),
                                ratioErrorTolerance: i.ratioErrorTolerance.toFixed(18),
                                iterationN: A.toString()
                            }, "QuoteToRatio Iteration Parameters"), C.equalTo(0)) return L.info("exchangeRate to 0"), {
                            status: _.NO_ROUTE_FOUND,
                            error: "insufficient liquidity to swap to optimal ratio"
                        }
                    }
                    return I ? (p && (m = await this.buildSwapAndAddMethodParameters(I.trade, p, {
                        initialBalanceTokenIn: T,
                        initialBalanceTokenOut: v,
                        preLiquidityPosition: n
                    })), {
                        status: _.SUCCESS,
                        result: { ...I,
                            methodParameters: m,
                            optimalRatio: S,
                            postSwapTargetPool: E
                        }
                    }) : {
                        status: _.NO_ROUTE_FOUND,
                        error: "no route found"
                    }
                }
                async route(e, t, n, i, p = {}) {
                    var b, y, m, g;
                    let T, v, S;
                    let C = e;
                    if (n === B.TradeType.EXACT_OUTPUT) {
                        let t = this.portionProvider.getPortionAmount(e, n, i);
                        t && t.greaterThan(et.ZERO) && (e = e.add(t))
                    }
                    let {
                        currencyIn: I,
                        currencyOut: A
                    } = this.determineCurrencyInOutFromTradeType(n, e, t), _ = I.wrapped, R = A.wrapped;
                    j.setProperty("chainId", this.chainId), j.setProperty("pair", `${_.symbol}/${R.symbol}`), j.setProperty("tokenIn", _.address), j.setProperty("tokenOut", R.address), j.setProperty("tradeType", n === B.TradeType.EXACT_INPUT ? "ExactIn" : "ExactOut"), j.putMetric(`QuoteRequestedForChain${this.chainId}`, 1, E.Count);
                    let k = null !== (b = p.blockNumber) && void 0 !== b ? b : this.getBlockNumberPromise(),
                        P = q().merge({
                            useCachedRoutes: !0,
                            writeToCachedRoutes: !0,
                            optimisticCachedRoutes: !1
                        }, DEFAULT_ROUTING_CONFIG_BY_CHAIN(this.chainId), p, {
                            blockNumber: k
                        });
                    P.debugRouting && L.warn(`Finalized routing config is ${JSON.stringify(P)}`);
                    let O = await this.getGasPriceWei(await k),
                        M = t.wrapped,
                        x = { ...P,
                            blockNumber: k,
                            additionalGasOverhead: NATIVE_OVERHEAD(this.chainId, e.currency, t)
                        },
                        [D, N] = await this.getGasModels(O, e.currency.wrapped, M, x),
                        U = Array.from(new Set(P.protocols).values()),
                        G = null !== (y = P.overwriteCacheMode) && void 0 !== y ? y : await (null === (m = this.routeCachingProvider) || void 0 === m ? void 0 : m.getCacheMode(this.chainId, e, M, n, U));
                    P.useCachedRoutes && G !== w.Darkmode && (T = await (null === (g = this.routeCachingProvider) || void 0 === g ? void 0 : g.getCachedRoute(this.chainId, e, M, n, U, await k, P.optimisticCachedRoutes))), j.putMetric(P.useCachedRoutes ? "GetQuoteUsingCachedRoutes" : "GetQuoteNotUsingCachedRoutes", 1, E.Count), G && P.useCachedRoutes && G !== w.Darkmode && !T ? (j.putMetric(`GetCachedRoute_miss_${G}`, 1, E.Count), L.info({
                        tokenIn: _.symbol,
                        tokenInAddress: _.address,
                        tokenOut: R.symbol,
                        tokenOutAddress: R.address,
                        cacheMode: G,
                        amount: e.toExact(),
                        chainId: this.chainId,
                        tradeType: this.tradeTypeStr(n)
                    }, `GetCachedRoute miss ${G} for ${this.tokenPairSymbolTradeTypeChainId(_,R,n)}`)) : T && P.useCachedRoutes && (j.putMetric(`GetCachedRoute_hit_${G}`, 1, E.Count), L.info({
                        tokenIn: _.symbol,
                        tokenInAddress: _.address,
                        tokenOut: R.symbol,
                        tokenOutAddress: R.address,
                        cacheMode: G,
                        amount: e.toExact(),
                        chainId: this.chainId,
                        tradeType: this.tradeTypeStr(n)
                    }, `GetCachedRoute hit ${G} for ${this.tokenPairSymbolTradeTypeChainId(_,R,n)}`));
                    let V = Promise.resolve(null);
                    T && (V = this.getSwapRouteFromCache(T, await k, e, M, n, P, D, N, O, i));
                    let H = Promise.resolve(null);
                    T && G === w.Livemode || (H = this.getSwapRouteFromChain(e, _, R, U, M, n, P, D, N, O, i));
                    let [$, W] = await Promise.all([V, H]), Q = !1;
                    if (G === w.Livemode && $ ? (L.info(`CacheMode is ${G}, and we are using swapRoute from cache`), Q = !0, v = $) : (L.info(`CacheMode is ${G}, and we are using materialized swapRoute`), v = W), G === w.Tapcompare && $ && W) {
                        let t = W.quote.subtract($.quote),
                            i = W.quoteGasAdjusted.subtract($.quoteGasAdjusted),
                            p = W.estimatedGasUsed.sub($.estimatedGasUsed);
                        if (!t.equalTo(0) || !(i.equalTo(0) || p.eq(0))) {
                            let b = i.divide(W.quoteGasAdjusted).multiply(100);
                            j.putMetric("TapcompareCachedRoute_quoteGasAdjustedDiffPercent", Number(b.toExact()), E.Percent), L.warn({
                                quoteFromChain: W.quote.toExact(),
                                quoteFromCache: $.quote.toExact(),
                                quoteDiff: t.toExact(),
                                quoteGasAdjustedFromChain: W.quoteGasAdjusted.toExact(),
                                quoteGasAdjustedFromCache: $.quoteGasAdjusted.toExact(),
                                quoteGasAdjustedDiff: i.toExact(),
                                gasUsedFromChain: W.estimatedGasUsed.toString(),
                                gasUsedFromCache: $.estimatedGasUsed.toString(),
                                gasUsedDiff: p.toString(),
                                routesFromChain: W.routes.toString(),
                                routesFromCache: $.routes.toString(),
                                amount: e.toExact(),
                                originalAmount: null == T ? void 0 : T.originalAmount,
                                pair: this.tokenPairSymbolTradeTypeChainId(_, R, n),
                                blockNumber: k
                            }, `Comparing quotes between Chain and Cache for ${this.tokenPairSymbolTradeTypeChainId(_,R,n)}`)
                        }
                    }
                    if (!v) return null;
                    let {
                        quote: Y,
                        quoteGasAdjusted: X,
                        estimatedGasUsed: K,
                        routes: z,
                        estimatedGasUsedQuoteToken: J,
                        estimatedGasUsedUSD: Z
                    } = v;
                    if (this.routeCachingProvider && P.writeToCachedRoutes && G !== w.Darkmode && W) {
                        let t = CachedRoutes.fromRoutesWithValidQuotes(W.routes, this.chainId, _, R, U.sort(), await k, n, e.toExact());
                        t ? this.routeCachingProvider.setCachedRoute(t, e).then(e => {
                            j.putMetric(`SetCachedRoute_${e?"success":"rejected"}`, 1, E.Count)
                        }).catch(e => {
                            L.error({
                                reason: e,
                                tokenPair: this.tokenPairSymbolTradeTypeChainId(_, R, n)
                            }, "SetCachedRoute failure"), j.putMetric("SetCachedRoute_failure", 1, E.Count)
                        }) : j.putMetric("SetCachedRoute_unnecessary", 1, E.Count)
                    }
                    j.putMetric(`QuoteFoundForChain${this.chainId}`, 1, E.Count);
                    let ee = methodParameters_buildTrade(I, A, n, z);
                    i && (S = buildSwapMethodParameters(ee, i, this.chainId));
                    let en = n === B.TradeType.EXACT_OUTPUT ? C : Y,
                        ef = this.portionProvider.getPortionAmount(en, n, i),
                        er = this.portionProvider.getPortionQuoteAmount(n, Y, e, ef),
                        ei = this.portionProvider.getQuote(n, Y, er),
                        ea = this.portionProvider.getQuoteGasAdjusted(n, X, er),
                        eo = this.portionProvider.getQuoteGasAndPortionAdjusted(n, X, ef),
                        es = {
                            quote: ei,
                            quoteGasAdjusted: ea,
                            estimatedGasUsed: K,
                            estimatedGasUsedQuoteToken: J,
                            estimatedGasUsedUSD: Z,
                            gasPriceWei: O,
                            route: z,
                            trade: ee,
                            methodParameters: S,
                            blockNumber: tt.O$.from(await k),
                            hitsCachedRoute: Q,
                            portionAmount: ef,
                            quoteGasAndPortionAdjusted: eo
                        };
                    if (i && i.simulate && S && S.calldata) {
                        if (!this.simulator) throw Error("Simulator not initialized!");
                        L.info({
                            swapConfig: i,
                            methodParameters: S
                        }, "Starting simulation");
                        let n = i.simulate.fromAddress,
                            p = Date.now(),
                            b = await this.simulator.simulate(n, i, es, e, amounts_CurrencyAmount.fromRawAmount(t, Y.quotient.toString()), this.l2GasDataProvider ? await this.l2GasDataProvider.getGasData() : void 0, x);
                        return j.putMetric("SimulateTransaction", Date.now() - p, E.Milliseconds), b
                    }
                    return es
                }
                async getSwapRouteFromCache(e, t, n, i, p, b, y, m, g, T) {
                    let v, S;
                    L.info({
                        protocols: e.protocolsCovered,
                        tradeType: e.tradeType,
                        cachedBlockNumber: e.blockNumber,
                        quoteBlockNumber: t
                    }, "Routing across CachedRoute");
                    let C = [],
                        I = e.routes.filter(e => e.protocol === et.Protocol.V3),
                        w = e.routes.filter(e => e.protocol === et.Protocol.V2),
                        A = e.routes.filter(e => e.protocol === et.Protocol.MIXED);
                    if (e.routes.length > 1)[v, S] = this.getAmountDistribution(n, b);
                    else {
                        if (1 != e.routes.length) return Promise.resolve(null);
                        [v, S] = [
                            [100],
                            [n]
                        ]
                    }
                    if (I.length > 0) {
                        let e = I.map(e => e.route);
                        j.putMetric("SwapRouteFromCache_V3_GetQuotes_Request", 1, E.Count);
                        let t = Date.now();
                        C.push(this.v3Quoter.getQuotes(e, S, v, i, p, b, void 0, y).then(e => (j.putMetric("SwapRouteFromCache_V3_GetQuotes_Load", Date.now() - t, E.Milliseconds), e)))
                    }
                    if (w.length > 0) {
                        let t = w.map(e => e.route);
                        j.putMetric("SwapRouteFromCache_V2_GetQuotes_Request", 1, E.Count);
                        let n = Date.now();
                        C.push(this.v2Quoter.refreshRoutesThenGetQuotes(e.tokenIn, e.tokenOut, t, S, v, i, p, b, g).then(e => (j.putMetric("SwapRouteFromCache_V2_GetQuotes_Load", Date.now() - n, E.Milliseconds), e)))
                    }
                    if (A.length > 0) {
                        let e = A.map(e => e.route);
                        j.putMetric("SwapRouteFromCache_Mixed_GetQuotes_Request", 1, E.Count);
                        let t = Date.now();
                        C.push(this.mixedQuoter.getQuotes(e, S, v, i, p, b, void 0, m).then(e => (j.putMetric("SwapRouteFromCache_Mixed_GetQuotes_Load", Date.now() - t, E.Milliseconds), e)))
                    }
                    let _ = await Promise.all(C),
                        R = q().flatMap(_, e => e.routesWithValidQuotes);
                    return getBestSwapRoute(n, v, R, p, this.chainId, b, this.portionProvider, y, T)
                }
                async getSwapRouteFromChain(e, t, n, i, p, b, y, m, g, T, v) {
                    let [S, C] = this.getAmountDistribution(e, y), I = 0 === i.length, w = i.includes(et.Protocol.V3), A = i.includes(et.Protocol.V2), _ = H.includes(this.chainId), R = i.includes(et.Protocol.MIXED) || I && _, k = [B.ChainId.MAINNET, B.ChainId.GOERLI].includes(this.chainId) && b === B.TradeType.EXACT_INPUT, P = Date.now(), O = Promise.resolve(void 0);
                    (w || I || R && k) && (O = getV3CandidatePools({
                        tokenIn: t,
                        tokenOut: n,
                        tokenProvider: this.tokenProvider,
                        blockedTokenListProvider: this.blockedTokenListProvider,
                        poolProvider: this.v3PoolProvider,
                        routeType: b,
                        subgraphProvider: this.v3SubgraphProvider,
                        routingConfig: y,
                        chainId: this.chainId
                    }).then(e => (j.putMetric("GetV3CandidatePools", Date.now() - P, E.Milliseconds), e)));
                    let M = Promise.resolve(void 0);
                    (_ && (A || I) || R && k) && (M = getV2CandidatePools({
                        tokenIn: t,
                        tokenOut: n,
                        tokenProvider: this.tokenProvider,
                        blockedTokenListProvider: this.blockedTokenListProvider,
                        poolProvider: this.v2PoolProvider,
                        routeType: b,
                        subgraphProvider: this.v2SubgraphProvider,
                        routingConfig: y,
                        chainId: this.chainId
                    }).then(e => (j.putMetric("GetV2CandidatePools", Date.now() - P, E.Milliseconds), e)));
                    let x = [];
                    if (w || I) {
                        L.info({
                            protocols: i,
                            tradeType: b
                        }, "Routing across V3"), j.putMetric("SwapRouteFromChain_V3_GetRoutesThenQuotes_Request", 1, E.Count);
                        let g = Date.now();
                        x.push(O.then(i => this.v3Quoter.getRoutesThenQuotes(t, n, e, C, S, p, i, b, y, m).then(e => (j.putMetric("SwapRouteFromChain_V3_GetRoutesThenQuotes_Load", Date.now() - g, E.Milliseconds), e))))
                    }
                    if (_ && (A || I)) {
                        L.info({
                            protocols: i,
                            tradeType: b
                        }, "Routing across V2"), j.putMetric("SwapRouteFromChain_V2_GetRoutesThenQuotes_Request", 1, E.Count);
                        let m = Date.now();
                        x.push(M.then(i => this.v2Quoter.getRoutesThenQuotes(t, n, e, C, S, p, i, b, y, void 0, T).then(e => (j.putMetric("SwapRouteFromChain_V2_GetRoutesThenQuotes_Load", Date.now() - m, E.Milliseconds), e))))
                    }
                    if (R && k) {
                        L.info({
                            protocols: i,
                            tradeType: b
                        }, "Routing across MixedRoutes"), j.putMetric("SwapRouteFromChain_Mixed_GetRoutesThenQuotes_Request", 1, E.Count);
                        let m = Date.now();
                        x.push(Promise.all([O, M]).then(([i, T]) => this.mixedQuoter.getRoutesThenQuotes(t, n, e, C, S, p, [i, T], b, y, g).then(e => (j.putMetric("SwapRouteFromChain_Mixed_GetRoutesThenQuotes_Load", Date.now() - m, E.Milliseconds), e))))
                    }
                    let D = await Promise.all(x),
                        N = [],
                        U = [];
                    if (D.forEach(e => {
                            N.push(...e.routesWithValidQuotes), e.candidatePools && U.push(e.candidatePools)
                        }), 0 === N.length) return L.info({
                        allRoutesWithValidQuotes: N
                    }, "Received no valid quotes"), null;
                    let G = await getBestSwapRoute(e, S, N, b, this.chainId, y, this.portionProvider, m, v);
                    return G && this.emitPoolSelectionMetrics(G, U), G
                }
                tradeTypeStr(e) {
                    return e === B.TradeType.EXACT_INPUT ? "ExactIn" : "ExactOut"
                }
                tokenPairSymbolTradeTypeChainId(e, t, n) {
                    return `${e.symbol}/${t.symbol}/${this.tradeTypeStr(n)}/${this.chainId}`
                }
                determineCurrencyInOutFromTradeType(e, t, n) {
                    return e === B.TradeType.EXACT_INPUT ? {
                        currencyIn: t.currency,
                        currencyOut: n
                    } : {
                        currencyIn: n,
                        currencyOut: t.currency
                    }
                }
                async getGasPriceWei(e) {
                    let t = Date.now(),
                        {
                            gasPriceWei: n
                        } = await this.gasPriceProvider.getGasPrice(e);
                    return j.putMetric("GasPriceLoad", Date.now() - t, E.Milliseconds), n
                }
                async getGasModels(e, t, n, i) {
                    let p = Date.now(),
                        b = getHighestLiquidityV3USDPool(this.chainId, this.v3PoolProvider, i),
                        y = Q[this.chainId],
                        m = n.equals(y) ? Promise.resolve(null) : getHighestLiquidityV3NativePool(n, this.v3PoolProvider, i),
                        g = t.equals(y) ? Promise.resolve(null) : getHighestLiquidityV3NativePool(t, this.v3PoolProvider, i),
                        [T, v, S] = await Promise.all([b, m, g]),
                        C = {
                            usdPool: T,
                            nativeQuoteTokenV3Pool: v,
                            nativeAmountTokenV3Pool: S
                        },
                        I = this.v3GasModelFactory.buildGasModel({
                            chainId: this.chainId,
                            gasPriceWei: e,
                            pools: C,
                            amountToken: t,
                            quoteToken: n,
                            v2poolProvider: this.v2PoolProvider,
                            l2GasDataProvider: this.l2GasDataProvider,
                            providerConfig: i
                        }),
                        w = this.mixedRouteGasModelFactory.buildGasModel({
                            chainId: this.chainId,
                            gasPriceWei: e,
                            pools: C,
                            amountToken: t,
                            quoteToken: n,
                            v2poolProvider: this.v2PoolProvider,
                            providerConfig: i
                        }),
                        [A, _] = await Promise.all([I, w]);
                    return j.putMetric("GasModelCreation", Date.now() - p, E.Milliseconds), [A, _]
                }
                getAmountDistribution(e, t) {
                    let {
                        distributionPercent: n
                    } = t, i = [], p = [];
                    for (let t = 1; t <= 100 / n; t++) i.push(t * n), p.push(e.multiply(new B.Fraction(t * n, 100)));
                    return [i, p]
                }
                async buildSwapAndAddMethodParameters(e, t, n) {
                    let {
                        swapOptions: {
                            recipient: i,
                            slippageTolerance: p,
                            deadline: b,
                            inputTokenPermit: y
                        },
                        addLiquidityOptions: m
                    } = t, g = n.preLiquidityPosition, T = n.initialBalanceTokenIn.subtract(e.inputAmount), v = n.initialBalanceTokenOut.add(e.outputAmount), S = await this.swapRouterProvider.getApprovalType(T, v), E = T.currency.wrapped.sortsBefore(v.currency.wrapped);
                    return { ...et.SwapRouter.swapAndAddCallParameters(e, {
                            recipient: i,
                            slippageTolerance: p,
                            deadlineOrPreviousBlockhash: b,
                            inputTokenPermit: y
                        }, V.Position.fromAmounts({
                            pool: g.pool,
                            tickLower: g.tickLower,
                            tickUpper: g.tickUpper,
                            amount0: E ? T.quotient.toString() : v.quotient.toString(),
                            amount1: E ? v.quotient.toString() : T.quotient.toString(),
                            useFullPrecision: !1
                        }), m, S.approvalTokenIn, S.approvalTokenOut),
                        to: addresses_SWAP_ROUTER_02_ADDRESSES(this.chainId)
                    }
                }
                emitPoolSelectionMetrics(e, t) {
                    let n = new Set,
                        {
                            routes: i
                        } = e;
                    for (let e of (q()(i).flatMap(e => {
                            let {
                                poolAddresses: t
                            } = e;
                            return t
                        }).forEach(e => {
                            n.add(e.toLowerCase())
                        }), t)) {
                        let {
                            protocol: t
                        } = e;
                        q().forIn(e.selections, (e, i) => {
                            let p = q().findLastIndex(e, e => n.has(e.id.toLowerCase())) + 1;
                            j.putMetric(q().capitalize(`${t}${i}`), p, E.Count)
                        })
                    }
                    let p = !1,
                        b = !1,
                        y = !1;
                    for (let e of i) e.protocol === et.Protocol.V3 && (p = !0), e.protocol === et.Protocol.V2 && (b = !0), e.protocol === et.Protocol.MIXED && (y = !0);
                    y && (p || b) ? p && b ? (j.putMetric("MixedAndV3AndV2SplitRoute", 1, E.Count), j.putMetric(`MixedAndV3AndV2SplitRouteForChain${this.chainId}`, 1, E.Count)) : p ? (j.putMetric("MixedAndV3SplitRoute", 1, E.Count), j.putMetric(`MixedAndV3SplitRouteForChain${this.chainId}`, 1, E.Count)) : b && (j.putMetric("MixedAndV2SplitRoute", 1, E.Count), j.putMetric(`MixedAndV2SplitRouteForChain${this.chainId}`, 1, E.Count)) : p && b ? (j.putMetric("V3AndV2SplitRoute", 1, E.Count), j.putMetric(`V3AndV2SplitRouteForChain${this.chainId}`, 1, E.Count)) : y ? i.length > 1 ? (j.putMetric("MixedSplitRoute", 1, E.Count), j.putMetric(`MixedSplitRouteForChain${this.chainId}`, 1, E.Count)) : (j.putMetric("MixedRoute", 1, E.Count), j.putMetric(`MixedRouteForChain${this.chainId}`, 1, E.Count)) : p ? i.length > 1 ? (j.putMetric("V3SplitRoute", 1, E.Count), j.putMetric(`V3SplitRouteForChain${this.chainId}`, 1, E.Count)) : (j.putMetric("V3Route", 1, E.Count), j.putMetric(`V3RouteForChain${this.chainId}`, 1, E.Count)) : b && (i.length > 1 ? (j.putMetric("V2SplitRoute", 1, E.Count), j.putMetric(`V2SplitRouteForChain${this.chainId}`, 1, E.Count)) : (j.putMetric("V2Route", 1, E.Count), j.putMetric(`V2RouteForChain${this.chainId}`, 1, E.Count)))
                }
                calculateOptimalRatio(e, t, n) {
                    let i = V.TickMath.getSqrtRatioAtTick(e.tickUpper),
                        p = V.TickMath.getSqrtRatioAtTick(e.tickLower);
                    if (ee().greaterThan(t, i) || ee().lessThan(t, p)) return new B.Fraction(0, 1);
                    let b = ee().BigInt("1" + "0".repeat(18)),
                        y = new B.Fraction(V.SqrtPriceMath.getAmount0Delta(t, i, b, !0), V.SqrtPriceMath.getAmount1Delta(t, p, b, !0));
                    return n || (y = y.invert()), y
                }
                async userHasSufficientBalance(e, t, n, i) {
                    try {
                        let p;
                        let b = t === B.TradeType.EXACT_INPUT ? n : i;
                        if (b.currency.isNative) p = await this.provider.getBalance(e);
                        else {
                            let t = Erc20_factory_Erc20_factory.connect(b.currency.address, this.provider);
                            p = await t.balanceOf(e)
                        }
                        return p.gte(tt.O$.from(b.quotient.toString()))
                    } catch (e) {
                        return L.error(e, "Error while checking user balance"), !1
                    }
                }
                absoluteValue(e) {
                    let t = ee().lessThan(e.numerator, ee().BigInt(0)) ? ee().unaryMinus(e.numerator) : e.numerator,
                        n = ee().lessThan(e.denominator, ee().BigInt(0)) ? ee().unaryMinus(e.denominator) : e.denominator;
                    return new B.Fraction(t, n)
                }
                getBlockNumberPromise() {
                    return ti()(async (e, t) => (t > 1 && L.info(`Get block number attempt ${t}`), this.provider.getBlockNumber()), {
                        retries: 2,
                        minTimeout: 100,
                        maxTimeout: 1e3
                    })
                }
            };
            let t_ = [{
                    inputs: [{
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "AllowanceExpired",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ExcessiveInvalidation",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "InsufficientAllowance",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "maxAmount",
                        type: "uint256"
                    }],
                    name: "InvalidAmount",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidContractSignature",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidNonce",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidSignature",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidSignatureLength",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidSigner",
                    type: "error"
                }, {
                    inputs: [],
                    name: "LengthMismatch",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "signatureDeadline",
                        type: "uint256"
                    }],
                    name: "SignatureExpired",
                    type: "error"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "Lockdown",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "newNonce",
                        type: "uint48"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "oldNonce",
                        type: "uint48"
                    }],
                    name: "NonceInvalidation",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "nonce",
                        type: "uint48"
                    }],
                    name: "Permit",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "word",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "mask",
                        type: "uint256"
                    }],
                    name: "UnorderedNonceInvalidation",
                    type: "event"
                }, {
                    inputs: [],
                    name: "DOMAIN_SEPARATOR",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }, {
                        internalType: "uint48",
                        name: "nonce",
                        type: "uint48"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint48",
                        name: "newNonce",
                        type: "uint48"
                    }],
                    name: "invalidateNonces",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "wordPos",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "mask",
                        type: "uint256"
                    }],
                    name: "invalidateUnorderedNonces",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }],
                        internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
                        name: "approvals",
                        type: "tuple[]"
                    }],
                    name: "lockdown",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "nonceBitmap",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint160",
                                name: "amount",
                                type: "uint160"
                            }, {
                                internalType: "uint48",
                                name: "expiration",
                                type: "uint48"
                            }, {
                                internalType: "uint48",
                                name: "nonce",
                                type: "uint48"
                            }],
                            internalType: "struct IAllowanceTransfer.PermitDetails[]",
                            name: "details",
                            type: "tuple[]"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "sigDeadline",
                            type: "uint256"
                        }],
                        internalType: "struct IAllowanceTransfer.PermitBatch",
                        name: "permitBatch",
                        type: "tuple"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint160",
                                name: "amount",
                                type: "uint160"
                            }, {
                                internalType: "uint48",
                                name: "expiration",
                                type: "uint48"
                            }, {
                                internalType: "uint48",
                                name: "nonce",
                                type: "uint48"
                            }],
                            internalType: "struct IAllowanceTransfer.PermitDetails",
                            name: "details",
                            type: "tuple"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "sigDeadline",
                            type: "uint256"
                        }],
                        internalType: "struct IAllowanceTransfer.PermitSingle",
                        name: "permitSingle",
                        type: "tuple"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions",
                            name: "permitted",
                            type: "tuple"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails",
                        name: "transferDetails",
                        type: "tuple"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions[]",
                            name: "permitted",
                            type: "tuple[]"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
                        name: "transferDetails",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions",
                            name: "permitted",
                            type: "tuple"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails",
                        name: "transferDetails",
                        type: "tuple"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "witness",
                        type: "bytes32"
                    }, {
                        internalType: "string",
                        name: "witnessTypeString",
                        type: "string"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitWitnessTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions[]",
                            name: "permitted",
                            type: "tuple[]"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
                        name: "transferDetails",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "witness",
                        type: "bytes32"
                    }, {
                        internalType: "string",
                        name: "witnessTypeString",
                        type: "string"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitWitnessTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint160",
                            name: "amount",
                            type: "uint160"
                        }, {
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }],
                        internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
                        name: "transferDetails",
                        type: "tuple[]"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                tR = "0x60c0346100bb574660a052602081017f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a60408301524660608301523060808301526080825260a082019180831060018060401b038411176100a557826040525190206080526123c090816100c1823960805181611a90015260a05181611a6a0152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe6040608081526004908136101561001557600080fd5b600090813560e01c80630d58b1db1461126c578063137c29fe146110755780632a2d80d114610db75780632b67b57014610bde57806330f28b7a14610ade5780633644e51514610a9d57806336c7851614610a285780633ff9dcb1146109a85780634fe02b441461093f57806365d9723c146107ac57806387517c451461067a578063927da105146105c3578063cc53287f146104a3578063edd9444b1461033a5763fe8ec1a7146100c657600080fd5b346103365760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103365767ffffffffffffffff833581811161033257610114903690860161164b565b60243582811161032e5761012b903690870161161a565b6101336114e6565b9160843585811161032a5761014b9036908a016115c1565b98909560a43590811161032657610164913691016115c1565b969095815190610173826113ff565b606b82527f5065726d697442617463685769746e6573735472616e7366657246726f6d285460208301527f6f6b656e5065726d697373696f6e735b5d207065726d69747465642c61646472838301527f657373207370656e6465722c75696e74323536206e6f6e63652c75696e74323560608301527f3620646561646c696e652c000000000000000000000000000000000000000000608083015282519a8b9181610222602085018096611edc565b918237018a8152039961025b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09b8c8101835282611437565b5190209085515161026b81611e04565b908a5b8181106102f95750506102f6999a6102ed9183516102a081610294602082018095611eaf565b03848101835282611437565b519020602089810151858b015195519182019687526040820192909252336060820152608081019190915260a081019390935260643560c08401528260e081015b03908101835282611437565b51902093611c40565b80f35b8061031161030b610321938c5161175e565b51611f9d565b61031b828661175e565b52611e53565b61026e565b8880fd5b8780fd5b8480fd5b8380fd5b5080fd5b5091346103365760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103365767ffffffffffffffff9080358281116103325761038b903690830161164b565b60243583811161032e576103a2903690840161161a565b9390926103ad6114e6565b9160643590811161049f576103c4913691016115c1565b949093835151976103d489611e04565b98885b81811061047d5750506102f697988151610425816103f9602082018095611eaf565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611437565b5190206020860151828701519083519260208401947ffcf35f5ac6a2c28868dc44c302166470266239195f02b0ee408334829333b7668652840152336060840152608083015260a082015260a081526102ed8161141b565b808b61031b8261049461030b61049a968d5161175e565b9261175e565b6103d7565b8680fd5b5082346105bf57602090817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103325780359067ffffffffffffffff821161032e576104f49136910161161a565b929091845b848110610504578580f35b8061051a61051560019388886118b5565b6118c5565b61052f84610529848a8a6118b5565b016118c5565b3389528385528589209173ffffffffffffffffffffffffffffffffffffffff80911692838b528652868a20911690818a5285528589207fffffffffffffffffffffffff000000000000000000000000000000000000000081541690558551918252848201527f89b1add15eff56b3dfe299ad94e01f2b52fbcb80ae1a3baea6ae8c04cb2b98a4853392a2016104f9565b8280fd5b50346103365760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033657610676816105ff6114a0565b936106086114c3565b6106106114e6565b73ffffffffffffffffffffffffffffffffffffffff968716835260016020908152848420928816845291825283832090871683528152919020549251938316845260a083901c65ffffffffffff169084015260d09190911c604083015281906060820190565b0390f35b50346103365760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610336576106b26114a0565b906106bb6114c3565b916106c46114e6565b65ffffffffffff926064358481169081810361032a5779ffffffffffff0000000000000000000000000000000000000000947fda9fa7c1b00402c17d0161b249b1ab8bbec047c5a52207b9c112deffd817036b94338a5260016020527fffffffffffff0000000000000000000000000000000000000000000000000000858b209873ffffffffffffffffffffffffffffffffffffffff809416998a8d5260205283878d209b169a8b8d52602052868c209486156000146107a457504216925b8454921697889360a01b16911617179055815193845260208401523392a480f35b905092610783565b5082346105bf5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf576107e56114a0565b906107ee6114c3565b9265ffffffffffff604435818116939084810361032a57338852602091600183528489209673ffffffffffffffffffffffffffffffffffffffff80911697888b528452858a20981697888a5283528489205460d01c93848711156109175761ffff9085840316116108f05750907f55eb90d810e1700b35a8e7e25395ff7f2b2259abd7415ca2284dfb1c246418f393929133895260018252838920878a528252838920888a5282528389209079ffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffff000000000000000000000000000000000000000000000000000083549260d01b16911617905582519485528401523392a480f35b84517f24d35a26000000000000000000000000000000000000000000000000000000008152fd5b5084517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b503461033657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610336578060209273ffffffffffffffffffffffffffffffffffffffff61098f6114a0565b1681528084528181206024358252845220549051908152f35b5082346105bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf577f3704902f963766a4e561bbaab6e6cdc1b1dd12f6e9e99648da8843b3f46b918d90359160243533855284602052818520848652602052818520818154179055815193845260208401523392a280f35b8234610a9a5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a9a57610a606114a0565b610a686114c3565b610a706114e6565b6064359173ffffffffffffffffffffffffffffffffffffffff8316830361032e576102f6936117a1565b80fd5b503461033657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033657602090610ad7611a67565b9051908152f35b508290346105bf576101007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf57610b1a3661152a565b90807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c36011261033257610b4c611478565b9160e43567ffffffffffffffff8111610bda576102f694610b6f913691016115c1565b939092610b7c8351611f9d565b6020840151828501519083519260208401947f939c21a48a8dbe3a9a2404a1d46691e4d39f6583d6ec6b35714604c986d801068652840152336060840152608083015260a082015260a08152610bd18161141b565b51902091611b6e565b8580fd5b509134610336576101007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033657610c186114a0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc360160c08112610332576080855191610c51836113e3565b1261033257845190610c6282611398565b73ffffffffffffffffffffffffffffffffffffffff91602435838116810361049f578152604435838116810361049f57602082015265ffffffffffff606435818116810361032a5788830152608435908116810361049f576060820152815260a435938285168503610bda576020820194855260c4359087830182815260e43567ffffffffffffffff811161032657610cfe90369084016115c1565b929093804211610d88575050918591610d786102f6999a610d7e95610d238851611f07565b90898c511690519083519260208401947ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d086528401526060830152608082015260808152610d70816113ff565b519020611b22565b91612010565b51925116916118e6565b602492508a51917fcd21db4f000000000000000000000000000000000000000000000000000000008352820152fd5b5091346103365760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc93818536011261033257610df36114a0565b9260249081359267ffffffffffffffff9788851161032a578590853603011261049f578051978589018981108282111761104a578252848301358181116103265785019036602383011215610326578382013591610e50836115ef565b90610e5d85519283611437565b838252602093878584019160071b83010191368311611046578801905b828210610fe9575050508a526044610e93868801611509565b96838c01978852013594838b0191868352604435908111610fe557610ebb90369087016115c1565b959096804211610fba575050508998995151610ed681611e04565b908b5b818110610f9757505092889492610d7892610f6497958351610f02816103f98682018095611eaf565b5190209073ffffffffffffffffffffffffffffffffffffffff9a8b8b51169151928551948501957faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f794408638752850152830152608082015260808152610d70816113ff565b51169082515192845b848110610f78578580f35b80610f918585610f8b600195875161175e565b516118e6565b01610f6d565b80610311610fac8e9f9e93610fb2945161175e565b51611f07565b9b9a9b610ed9565b8551917fcd21db4f000000000000000000000000000000000000000000000000000000008352820152fd5b8a80fd5b6080823603126110465785608091885161100281611398565b61100b85611509565b8152611018838601611509565b838201526110278a8601611607565b8a8201528d611037818701611607565b90820152815201910190610e7a565b8c80fd5b84896041867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5082346105bf576101407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf576110b03661152a565b91807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c360112610332576110e2611478565b67ffffffffffffffff93906101043585811161049f5761110590369086016115c1565b90936101243596871161032a57611125610bd1966102f6983691016115c1565b969095825190611134826113ff565b606482527f5065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5060208301527f65726d697373696f6e73207065726d69747465642c6164647265737320737065848301527f6e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c60608301527f696e652c0000000000000000000000000000000000000000000000000000000060808301528351948591816111e3602085018096611edc565b918237018b8152039361121c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095868101835282611437565b5190209261122a8651611f9d565b6020878101518589015195519182019687526040820192909252336060820152608081019190915260a081019390935260e43560c08401528260e081016102e1565b5082346105bf576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033257813567ffffffffffffffff92838211610bda5736602383011215610bda5781013592831161032e576024906007368386831b8401011161049f57865b8581106112e5578780f35b80821b83019060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc83360301126103265761139288876001946060835161132c81611398565b611368608461133c8d8601611509565b9485845261134c60448201611509565b809785015261135d60648201611509565b809885015201611509565b918291015273ffffffffffffffffffffffffffffffffffffffff80808093169516931691166117a1565b016112da565b6080810190811067ffffffffffffffff8211176113b457604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6060810190811067ffffffffffffffff8211176113b457604052565b60a0810190811067ffffffffffffffff8211176113b457604052565b60c0810190811067ffffffffffffffff8211176113b457604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176113b457604052565b60c4359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b6044359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc01906080821261149b576040805190611563826113e3565b8082941261149b57805181810181811067ffffffffffffffff8211176113b457825260043573ffffffffffffffffffffffffffffffffffffffff8116810361149b578152602435602082015282526044356020830152606435910152565b9181601f8401121561149b5782359167ffffffffffffffff831161149b576020838186019501011161149b57565b67ffffffffffffffff81116113b45760051b60200190565b359065ffffffffffff8216820361149b57565b9181601f8401121561149b5782359167ffffffffffffffff831161149b576020808501948460061b01011161149b57565b91909160608184031261149b576040805191611666836113e3565b8294813567ffffffffffffffff9081811161149b57830182601f8201121561149b578035611693816115ef565b926116a087519485611437565b818452602094858086019360061b8501019381851161149b579086899897969594939201925b8484106116e3575050505050855280820135908501520135910152565b90919293949596978483031261149b578851908982019082821085831117611730578a928992845261171487611509565b81528287013583820152815201930191908897969594936116c6565b602460007f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b80518210156117725760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b92919273ffffffffffffffffffffffffffffffffffffffff604060008284168152600160205282828220961695868252602052818120338252602052209485549565ffffffffffff8760a01c16804211611884575082871696838803611812575b5050611810955016926122fc565b565b878484161160001461184f57602488604051907ff96fb0710000000000000000000000000000000000000000000000000000000082526004820152fd5b7fffffffffffffffffffffffff000000000000000000000000000000000000000084846118109a031691161790553880611802565b602490604051907fd81b2f2e0000000000000000000000000000000000000000000000000000000082526004820152fd5b91908110156117725760061b0190565b3573ffffffffffffffffffffffffffffffffffffffff8116810361149b5790565b9065ffffffffffff908160608401511673ffffffffffffffffffffffffffffffffffffffff908185511694826020820151169280866040809401511695169560009187835260016020528383208984526020528383209916988983526020528282209184835460d01c03611a3e579185611a1794927fc6a377bfc4eb120024a8ac08eef205be16b817020812c73223e81d1bdb9708ec98979694508715600014611a1c5779ffffffffffff00000000000000000000000000000000000000009042165b60a01b167fffffffffffff00000000000000000000000000000000000000000000000000006001860160d01b1617179055519384938491604091949373ffffffffffffffffffffffffffffffffffffffff606085019616845265ffffffffffff809216602085015216910152565b0390a4565b5079ffffffffffff0000000000000000000000000000000000000000876119a9565b600484517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b467f000000000000000000000000000000000000000000000000000000000000000003611ab2577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86682527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a604082015246606082015230608082015260808152611b1c816113ff565b51902090565b611b2a611a67565b906040519060208201927f190100000000000000000000000000000000000000000000000000000000000084526022830152604282015260428152611b1c81611398565b9192909360a435936040840151804211611c0f5750602084510151808611611bde5750918591610d78611bae94611ba9602088015186611d90565b611b22565b73ffffffffffffffffffffffffffffffffffffffff809151511692608435918216820361149b57611810936122fc565b602490604051907f3728b83d0000000000000000000000000000000000000000000000000000000082526004820152fd5b602490604051907fcd21db4f0000000000000000000000000000000000000000000000000000000082526004820152fd5b959093958051519560409283830151804211611d605750848803611d3757611c77918691610d7860209b611ba98d88015186611d90565b60005b868110611c8b575050505050505050565b611c9681835161175e565b5188611ca383878a6118b5565b01359089810151808311611d07575091818888886001968596611ccd575b50505050505001611c7a565b611cfc95611cf69273ffffffffffffffffffffffffffffffffffffffff610515935116956118b5565b916122fc565b803888888883611cc1565b6024908651907f3728b83d0000000000000000000000000000000000000000000000000000000082526004820152fd5b600484517fff633a38000000000000000000000000000000000000000000000000000000008152fd5b6024908551907fcd21db4f0000000000000000000000000000000000000000000000000000000082526004820152fd5b9073ffffffffffffffffffffffffffffffffffffffff600160ff83161b9216600052600060205260406000209060081c6000526020526040600020818154188091551615611dda57565b60046040517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b90611e0e826115ef565b611e1b6040519182611437565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0611e4982946115ef565b0190602036910137565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611e805760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b805160208092019160005b828110611ec8575050505090565b835185529381019392810192600101611eba565b9081519160005b838110611ef4575050016000815290565b8060208092840101518185015201611ee3565b60405160208101917f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b3678835273ffffffffffffffffffffffffffffffffffffffff8082511660408401526020820151166060830152606065ffffffffffff9182604082015116608085015201511660a082015260a0815260c0810181811067ffffffffffffffff8211176113b45760405251902090565b6040516020808201927f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a1845273ffffffffffffffffffffffffffffffffffffffff81511660408401520151606082015260608152611b1c81611398565b919082604091031261149b576020823592013590565b6000843b6121775750604182036120f55761202d82820182611ffa565b939092604010156117725760209360009360ff6040608095013560f81c5b60405194855216868401526040830152606082015282805260015afa156120e95773ffffffffffffffffffffffffffffffffffffffff80600051169182156120bf57160361209557565b60046040517f815e1d64000000000000000000000000000000000000000000000000000000008152fd5b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b6040513d6000823e3d90fd5b6040820361214d5761210991810190611ffa565b91601b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84169360ff1c019060ff8211611e805760209360009360ff60809461204b565b60046040517f4be6321b000000000000000000000000000000000000000000000000000000008152fd5b929391601f928173ffffffffffffffffffffffffffffffffffffffff60646020957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0604051988997889687947f1626ba7e000000000000000000000000000000000000000000000000000000009e8f8752600487015260406024870152816044870152868601378b85828601015201168101030192165afa9081156122f1578291612273575b507fffffffff000000000000000000000000000000000000000000000000000000009150160361224957565b60046040517fb0669cbc000000000000000000000000000000000000000000000000000000008152fd5b90506020813d82116122e9575b8161228d60209383611437565b810103126103365751907fffffffff0000000000000000000000000000000000000000000000000000000082168203610a9a57507fffffffff00000000000000000000000000000000000000000000000000000000903861221d565b3d9150612280565b6040513d84823e3d90fd5b9060006064926020958295604051947f23b872dd0000000000000000000000000000000000000000000000000000000086526004860152602485015260448401525af13d15601f3d116001600051141617161561235557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152fdfea164736f6c6343000811000a";
            let Permit2_factory_Permit2_factory = class Permit2_factory_Permit2_factory extends ei.ContractFactory {
                constructor(e) {
                    super(t_, tR, e)
                }
                deploy(e) {
                    return super.deploy(e || {})
                }
                getDeployTransaction(e) {
                    return super.getDeployTransaction(e || {})
                }
                attach(e) {
                    return super.attach(e)
                }
                connect(e) {
                    return super.connect(e)
                }
                static createInterface() {
                    return new ef.vU(t_)
                }
                static connect(e, t) {
                    return new ei.Contract(e, t_, t)
                }
            };
            Permit2_factory_Permit2_factory.bytecode = tR, Permit2_factory_Permit2_factory.abi = t_, (v = k || (k = {}))[v.NotSupported = 0] = "NotSupported", v[v.Failed = 1] = "Failed", v[v.Succeeded = 2] = "Succeeded", v[v.InsufficientBalance = 3] = "InsufficientBalance", v[v.NotApproved = 4] = "NotApproved";
            let ETHGasStationInfoProvider = class ETHGasStationInfoProvider extends IGasPriceProvider {
                constructor(e) {
                    super(), this.url = e
                }
                async getGasPrice(e) {
                    L.info(`About to get gas prices from gas station ${this.url}`);
                    let t = await ti()(async () => U().get(this.url), {
                            retries: 1
                        }),
                        {
                            data: n,
                            status: i
                        } = t;
                    if (200 != i) throw L.error({
                        response: t
                    }, `Unabled to get gas price from ${this.url}.`), Error(`Unable to get gas price from ${this.url}`);
                    L.info({
                        gasPriceResponse: n
                    }, 'Gas price response from API. About to parse "fast" to big number');
                    let p = tt.O$.from(n.fast).div(tt.O$.from(10)).mul(tt.O$.from(10).pow(9));
                    return L.info(`Gas price in wei: ${p} as of block ${n.blockNum}`), {
                        gasPriceWei: p
                    }
                }
            };
            let LegacyGasPriceProvider = class LegacyGasPriceProvider extends IGasPriceProvider {
                constructor(e) {
                    super(), this.provider = e
                }
                async getGasPrice(e) {
                    let t = await this.provider.getGasPrice();
                    return L.info({
                        gasPriceWei: t
                    }, `Got gas price ${t} using eth_gasPrice RPC`), {
                        gasPriceWei: t
                    }
                }
            };
            var tk = n(69222);
            let tP = [{
                    inputs: [],
                    name: "getCurrentBlockTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "addr",
                        type: "address"
                    }],
                    name: "getEthBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "balance",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "target",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "gasLimit",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "callData",
                            type: "bytes"
                        }],
                        internalType: "struct UniswapInterfaceMulticall.Call[]",
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "bool",
                            name: "success",
                            type: "bool"
                        }, {
                            internalType: "uint256",
                            name: "gasUsed",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "returnData",
                            type: "bytes"
                        }],
                        internalType: "struct UniswapInterfaceMulticall.Result[]",
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                tO = "0x608060405234801561001057600080fd5b50610567806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
            let UniswapInterfaceMulticall__factory = class UniswapInterfaceMulticall__factory extends ei.ContractFactory {
                constructor(e) {
                    super(tP, tO, e)
                }
                deploy(e) {
                    return super.deploy(e || {})
                }
                getDeployTransaction(e) {
                    return super.getDeployTransaction(e || {})
                }
                attach(e) {
                    return super.attach(e)
                }
                connect(e) {
                    return super.connect(e)
                }
                static createInterface() {
                    return new ef.vU(tP)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tP, t)
                }
            };
            UniswapInterfaceMulticall__factory.bytecode = tO, UniswapInterfaceMulticall__factory.abi = tP;
            let IMulticallProvider = class IMulticallProvider {};
            let UniswapMulticallProvider = class UniswapMulticallProvider extends IMulticallProvider {
                constructor(e, t, n = 1e6) {
                    super(), this.chainId = e, this.provider = t, this.gasLimitPerCall = n;
                    let i = J[this.chainId];
                    if (!i) throw Error(`No address for Uniswap Multicall Contract on chain id: ${e}`);
                    this.multicallContract = UniswapInterfaceMulticall__factory.connect(i, this.provider)
                }
                async callSameFunctionOnMultipleContracts(e) {
                    var t;
                    let {
                        addresses: n,
                        contractInterface: i,
                        functionName: p,
                        functionParams: b,
                        providerConfig: y
                    } = e, m = null !== (t = null == y ? void 0 : y.blockNumber) && void 0 !== t ? t : void 0, g = i.getFunction(p), T = i.encodeFunctionData(g, b), v = q().map(n, e => ({
                        target: e,
                        callData: T,
                        gasLimit: this.gasLimitPerCall
                    }));
                    L.debug({
                        calls: v
                    }, `About to multicall for ${p} across ${n.length} addresses`);
                    let {
                        blockNumber: S,
                        returnData: E
                    } = await this.multicallContract.callStatic.multicall(v, {
                        blockTag: m
                    }), C = [];
                    for (let e = 0; e < E.length; e++) {
                        let {
                            success: t,
                            returnData: b
                        } = E[e];
                        if (!t || b.length <= 2) {
                            L.debug({
                                result: E[e]
                            }, `Invalid result calling ${p} on address ${n[e]}`), C.push({
                                success: !1,
                                returnData: b
                            });
                            continue
                        }
                        C.push({
                            success: !0,
                            result: i.decodeFunctionResult(g, b)
                        })
                    }
                    return L.debug({
                        results: C
                    }, `Results for multicall on ${p} across ${n.length} addresses as of block ${S}`), {
                        blockNumber: S,
                        results: C
                    }
                }
                async callSameFunctionOnContractWithMultipleParams(e) {
                    var t, n;
                    let {
                        address: i,
                        contractInterface: p,
                        functionName: b,
                        functionParams: y,
                        additionalConfig: m,
                        providerConfig: g
                    } = e, T = p.getFunction(b), v = null !== (t = null == m ? void 0 : m.gasLimitPerCallOverride) && void 0 !== t ? t : this.gasLimitPerCall, S = null !== (n = null == g ? void 0 : g.blockNumber) && void 0 !== n ? n : void 0, E = q().map(y, e => {
                        let t = p.encodeFunctionData(T, e);
                        return {
                            target: i,
                            callData: t,
                            gasLimit: v
                        }
                    });
                    L.debug({
                        calls: E
                    }, `About to multicall for ${b} at address ${i} with ${y.length} different sets of params`);
                    let {
                        blockNumber: C,
                        returnData: I
                    } = await this.multicallContract.callStatic.multicall(E, {
                        blockTag: S
                    }), w = [], A = [];
                    for (let e = 0; e < I.length; e++) {
                        let {
                            success: t,
                            returnData: n,
                            gasUsed: i
                        } = I[e];
                        if (!t || n.length <= 2) {
                            L.debug({
                                result: I[e]
                            }, `Invalid result calling ${b} with params ${y[e]}`), w.push({
                                success: !1,
                                returnData: n
                            });
                            continue
                        }
                        A.push(i.toNumber()), w.push({
                            success: !0,
                            result: p.decodeFunctionResult(T, n)
                        })
                    }
                    return L.debug({
                        results: w,
                        functionName: b,
                        address: i
                    }, `Results for multicall for ${b} at address ${i} with ${y.length} different sets of params. Results as of block ${C}`), {
                        blockNumber: C,
                        results: w,
                        approxGasUsedPerSuccessCall: tk.percentile(A, 99)
                    }
                }
                async callMultipleFunctionsOnSameContract(e) {
                    var t, n;
                    let {
                        address: i,
                        contractInterface: p,
                        functionNames: b,
                        functionParams: y,
                        additionalConfig: m,
                        providerConfig: g
                    } = e, T = null !== (t = null == m ? void 0 : m.gasLimitPerCallOverride) && void 0 !== t ? t : this.gasLimitPerCall, v = null !== (n = null == g ? void 0 : g.blockNumber) && void 0 !== n ? n : void 0, S = q().map(b, (e, t) => {
                        let n = p.getFunction(e),
                            b = y ? y[t] : [],
                            m = p.encodeFunctionData(n, b);
                        return {
                            target: i,
                            callData: m,
                            gasLimit: T
                        }
                    });
                    L.debug({
                        calls: S
                    }, `About to multicall for ${b.length} functions at address ${i} with ${null==y?void 0:y.length} different sets of params`);
                    let {
                        blockNumber: E,
                        returnData: C
                    } = await this.multicallContract.callStatic.multicall(S, {
                        blockTag: v
                    }), I = [], w = [];
                    for (let e = 0; e < C.length; e++) {
                        let t = p.getFunction(b[e]),
                            {
                                success: n,
                                returnData: i,
                                gasUsed: m
                            } = C[e];
                        if (!n || i.length <= 2) {
                            L.debug({
                                result: C[e]
                            }, `Invalid result calling ${b[e]} with ${y?y[e]:"0"} params`), I.push({
                                success: !1,
                                returnData: i
                            });
                            continue
                        }
                        w.push(m.toNumber()), I.push({
                            success: !0,
                            result: p.decodeFunctionResult(t, i)
                        })
                    }
                    return L.debug({
                        results: I,
                        functionNames: b,
                        address: i
                    }, `Results for multicall for ${b.length} functions at address ${i} with ${y?y.length:" 0"} different sets of params. Results as of block ${E}`), {
                        blockNumber: E,
                        results: I,
                        approxGasUsedPerSuccessCall: tk.percentile(w, 99)
                    }
                }
            };
            let tM = [B.ChainId.MAINNET, B.ChainId.GOERLI, B.ChainId.POLYGON_MUMBAI];
            let OnChainGasPriceProvider = class OnChainGasPriceProvider extends IGasPriceProvider {
                constructor(e, t, n, i = tM) {
                    super(), this.chainId = e, this.eip1559GasPriceProvider = t, this.legacyGasPriceProvider = n, this.eipChains = i
                }
                async getGasPrice(e) {
                    return this.eipChains.includes(this.chainId) ? this.eip1559GasPriceProvider.getGasPrice(e) : this.legacyGasPriceProvider.getGasPrice(e)
                }
            };
            let tx = [{
                inputs: [{
                    internalType: "bytes",
                    name: "path",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                name: "quoteExactInput",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160[]",
                    name: "v3SqrtPriceX96AfterList",
                    type: "uint160[]"
                }, {
                    internalType: "uint32[]",
                    name: "v3InitializedTicksCrossedList",
                    type: "uint32[]"
                }, {
                    internalType: "uint256",
                    name: "v3SwapGasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    internalType: "struct IMixedRouteQuoterV1.QuoteExactInputSingleV2Params",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactInputSingleV2",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24"
                    }, {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160"
                    }],
                    internalType: "struct IMixedRouteQuoterV1.QuoteExactInputSingleV3Params",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactInputSingleV3",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160",
                    name: "sqrtPriceX96After",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "initializedTicksCrossed",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let IMixedRouteQuoterV1__factory = class IMixedRouteQuoterV1__factory {
                static createInterface() {
                    return new ef.vU(tx)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tx, t)
                }
            };
            IMixedRouteQuoterV1__factory.abi = tx;
            let tD = [{
                inputs: [{
                    internalType: "bytes",
                    name: "path",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                name: "quoteExactInput",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160[]",
                    name: "sqrtPriceX96AfterList",
                    type: "uint160[]"
                }, {
                    internalType: "uint32[]",
                    name: "initializedTicksCrossedList",
                    type: "uint32[]"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24"
                    }, {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160"
                    }],
                    internalType: "struct IQuoterV2.QuoteExactInputSingleParams",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactInputSingle",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160",
                    name: "sqrtPriceX96After",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "initializedTicksCrossed",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "path",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                name: "quoteExactOutput",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint160[]",
                    name: "sqrtPriceX96AfterList",
                    type: "uint160[]"
                }, {
                    internalType: "uint32[]",
                    name: "initializedTicksCrossedList",
                    type: "uint32[]"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24"
                    }, {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160"
                    }],
                    internalType: "struct IQuoterV2.QuoteExactOutputSingleParams",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactOutputSingle",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint160",
                    name: "sqrtPriceX96After",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "initializedTicksCrossed",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            let IQuoterV2__factory = class IQuoterV2__factory {
                static createInterface() {
                    return new ef.vU(tD)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tD, t)
                }
            };
            IQuoterV2__factory.abi = tD;
            let BlockConflictError = class BlockConflictError extends Error {
                constructor() {
                    super(...arguments), this.name = "BlockConflictError"
                }
            };
            let SuccessRateError = class SuccessRateError extends Error {
                constructor() {
                    super(...arguments), this.name = "SuccessRateError"
                }
            };
            let ProviderBlockHeaderError = class ProviderBlockHeaderError extends Error {
                constructor() {
                    super(...arguments), this.name = "ProviderBlockHeaderError"
                }
            };
            let ProviderTimeoutError = class ProviderTimeoutError extends Error {
                constructor() {
                    super(...arguments), this.name = "ProviderTimeoutError"
                }
            };
            let ProviderGasError = class ProviderGasError extends Error {
                constructor() {
                    super(...arguments), this.name = "ProviderGasError"
                }
            };
            let OnChainQuoteProvider = class OnChainQuoteProvider {
                constructor(e, t, n, i = {
                    retries: 2,
                    minTimeout: 25,
                    maxTimeout: 250
                }, p = {
                    multicallChunk: 150,
                    gasLimitPerCall: 1e6,
                    quoteMinSuccessRate: .2
                }, b = {
                    gasLimitOverride: 15e5,
                    multicallChunk: 100
                }, y = {
                    gasLimitOverride: 13e5,
                    multicallChunk: 110
                }, m = {
                    baseBlockOffset: 0,
                    rollback: {
                        enabled: !1
                    }
                }, g) {
                    this.chainId = e, this.provider = t, this.multicall2Provider = n, this.retryOptions = i, this.batchParams = p, this.gasErrorFailureOverride = b, this.successRateFailureOverrides = y, this.blockNumberConfig = m, this.quoterAddressOverride = g
                }
                getQuoterAddress(e) {
                    if (this.quoterAddressOverride) return this.quoterAddressOverride;
                    let t = e ? z[this.chainId] : K[this.chainId];
                    if (!t) throw Error(`No address for the quoter contract on chain id: ${this.chainId}`);
                    return t
                }
                async getQuotesManyExactIn(e, t, n) {
                    return this.getQuotesManyData(e, t, "quoteExactInput", n)
                }
                async getQuotesManyExactOut(e, t, n) {
                    return this.getQuotesManyData(e, t, "quoteExactOutput", n)
                }
                async getQuotesManyData(e, t, n, i) {
                    var p;
                    let b = t.some(e => e.protocol === et.Protocol.V2) || t.some(e => e.protocol === et.Protocol.MIXED);
                    this.validateRoutes(t, n, b);
                    let y = this.batchParams.multicallChunk,
                        m = this.batchParams.gasLimitPerCall,
                        {
                            baseBlockOffset: g,
                            rollback: T
                        } = this.blockNumberConfig,
                        v = await this.provider.getBlockNumber(),
                        S = { ...i,
                            blockNumber: null !== (p = null == i ? void 0 : i.blockNumber) && void 0 !== p ? p : v + g
                        },
                        C = q()(t).flatMap(t => {
                            let i = t.protocol === et.Protocol.V3 ? (0, V.encodeRouteToPath)(t, "quoteExactOutput" == n) : (0, et.encodeMixedRouteToPath)(t instanceof V2Route ? new et.MixedRouteSDK(t.pairs, t.input, t.output) : t),
                                p = e.map(e => [i, `0x${e.quotient.toString(16)}`]);
                            return p
                        }).value(),
                        I = Math.ceil(C.length / Math.ceil(C.length / y)),
                        w = q().chunk(C, I),
                        A = q().map(w, e => ({
                            status: "pending",
                            inputs: e
                        }));
                    L.info(`About to get ${C.length} quotes in chunks of ${I} [${q().map(w,e=>e.length).join(",")}] ${m?`with a gas limit override of ${m}`:""} and block number: ${await S.blockNumber} [Original before offset: ${v}].`), j.putMetric("QuoteBatchSize", C.length, E.Count), j.putMetric(`QuoteBatchSize_${ID_TO_NETWORK_NAME(this.chainId)}`, C.length, E.Count);
                    let _ = !1,
                        R = !1,
                        k = 0,
                        P = !1,
                        O = !1,
                        M = !1,
                        x = !1,
                        D = !1,
                        N = !1,
                        U = 1,
                        G = A.length,
                        H = 0,
                        {
                            results: $,
                            blockNumber: W,
                            approxGasUsedPerSuccessCall: Q
                        } = await ti()(async (e, t) => {
                            P = !1, U = t;
                            let [i, p, g] = this.partitionQuotes(A);
                            L.info(`Starting attempt: ${t}.
          Currently ${i.length} success, ${p.length} failed, ${g.length} pending.
          Gas limit override: ${m} Block number override: ${S.blockNumber}.`), A = await Promise.all(q().map(A, async (e, t) => {
                                if ("success" == e.status) return e;
                                let {
                                    inputs: i
                                } = e;
                                try {
                                    H += 1;
                                    let e = await this.multicall2Provider.callSameFunctionOnContractWithMultipleParams({
                                            address: this.getQuoterAddress(b),
                                            contractInterface: b ? IMixedRouteQuoterV1__factory.createInterface() : IQuoterV2__factory.createInterface(),
                                            functionName: n,
                                            functionParams: i,
                                            providerConfig: S,
                                            additionalConfig: {
                                                gasLimitPerCallOverride: m
                                            }
                                        }),
                                        t = this.validateSuccessRate(e.results, _);
                                    if (t) return {
                                        status: "failed",
                                        inputs: i,
                                        reason: t,
                                        results: e
                                    };
                                    return {
                                        status: "success",
                                        inputs: i,
                                        results: e
                                    }
                                } catch (e) {
                                    if (e.message.includes("header not found")) return {
                                        status: "failed",
                                        inputs: i,
                                        reason: new ProviderBlockHeaderError(e.message.slice(0, 500))
                                    };
                                    if (e.message.includes("timeout")) return {
                                        status: "failed",
                                        inputs: i,
                                        reason: new ProviderTimeoutError(`Req ${t}/${A.length}. Request had ${i.length} inputs. ${e.message.slice(0,500)}`)
                                    };
                                    if (e.message.includes("out of gas")) return {
                                        status: "failed",
                                        inputs: i,
                                        reason: new ProviderGasError(e.message.slice(0, 500))
                                    };
                                    return {
                                        status: "failed",
                                        inputs: i,
                                        reason: Error(`Unknown error from provider: ${e.message.slice(0,500)}`)
                                    }
                                }
                            }));
                            let [v, I, G] = this.partitionQuotes(A);
                            if (G.length > 0) throw Error("Pending quote after waiting for all promises.");
                            let V = !1,
                                $ = this.validateBlockNumbers(v, w.length, m);
                            $ && (V = !0);
                            let W = q().map(I, e => e.reason.name).join(", ");
                            if (I.length > 0)
                                for (let e of (L.info(`On attempt ${t}: ${I.length}/${A.length} quotes failed. Reasons: ${W}`), I)) {
                                    let {
                                        reason: n
                                    } = e;
                                    if (L.info({
                                            error: n
                                        }, `[QuoteFetchError] Attempt ${t}. ${n.message}`), n instanceof BlockConflictError) M || (j.putMetric("QuoteBlockConflictErrorRetry", 1, E.Count), M = !0), V = !0;
                                    else if (n instanceof ProviderBlockHeaderError) {
                                        if (R || (j.putMetric("QuoteBlockHeaderNotFoundRetry", 1, E.Count), R = !0), P || (k += 1, P = !0), T.enabled) {
                                            let {
                                                rollbackBlockOffset: e,
                                                attemptsBeforeRollback: n
                                            } = T;
                                            k >= n && !O && (L.info(`Attempt ${t}. Have failed due to block header ${k-1} times. Rolling back block number by ${e} for next retry`), S.blockNumber = S.blockNumber ? await S.blockNumber + e : await this.provider.getBlockNumber() + e, V = !0, O = !0)
                                        }
                                    } else n instanceof ProviderTimeoutError ? D || (j.putMetric("QuoteTimeoutRetry", 1, E.Count), D = !0) : n instanceof ProviderGasError ? (x || (j.putMetric("QuoteOutOfGasExceptionRetry", 1, E.Count), x = !0), m = this.gasErrorFailureOverride.gasLimitOverride, y = this.gasErrorFailureOverride.multicallChunk, V = !0) : n instanceof SuccessRateError ? _ || (j.putMetric("QuoteSuccessRateRetry", 1, E.Count), _ = !0, m = this.successRateFailureOverrides.gasLimitOverride, y = this.successRateFailureOverrides.multicallChunk, V = !0) : N || (j.putMetric("QuoteUnknownReasonRetry", 1, E.Count), N = !0)
                                }
                            if (V) {
                                L.info(`Attempt ${t}. Resetting all requests to pending for next attempt.`);
                                let e = Math.ceil(C.length / Math.ceil(C.length / y)),
                                    n = q().chunk(C, e);
                                A = q().map(n, e => ({
                                    status: "pending",
                                    inputs: e
                                }))
                            }
                            if (I.length > 0) {
                                if ((this.chainId == B.ChainId.ARBITRUM_ONE || this.chainId == B.ChainId.ARBITRUM_GOERLI) && q().every(I, e => e.reason instanceof ProviderGasError) && t == this.retryOptions.retries) return L.error("Failed to get quotes on Arbitrum due to provider gas error issue. Overriding error to return 0 quotes."), {
                                    results: [],
                                    blockNumber: tt.O$.from(0),
                                    approxGasUsedPerSuccessCall: 0
                                };
                                throw Error(`Failed to get ${I.length} quotes. Reasons: ${W}`)
                            }
                            let Q = q().map(v, e => e.results);
                            return {
                                results: q().flatMap(Q, e => e.results),
                                blockNumber: tt.O$.from(Q[0].blockNumber),
                                approxGasUsedPerSuccessCall: tk.percentile(q().map(Q, e => e.approxGasUsedPerSuccessCall), 100)
                            }
                        }, {
                            retries: 2,
                            ...this.retryOptions
                        }),
                        Y = this.processQuoteResults($, t, e);
                    j.putMetric("QuoteApproxGasUsedPerSuccessfulCall", Q, E.Count), j.putMetric("QuoteNumRetryLoops", U - 1, E.Count), j.putMetric("QuoteTotalCallsToProvider", H, E.Count), j.putMetric("QuoteExpectedCallsToProvider", G, E.Count), j.putMetric("QuoteNumRetriedCalls", H - G, E.Count);
                    let [X, K] = q()(Y).flatMap(e => e[1]).partition(e => null != e.quote).value();
                    return L.info(`Got ${X.length} successful quotes, ${K.length} failed quotes. Took ${U-1} attempt loops. Total calls made to provider: ${H}. Have retried for timeout: ${D}`), {
                        routesWithQuotes: Y,
                        blockNumber: W
                    }
                }
                partitionQuotes(e) {
                    let t = q().filter(e, e => "success" == e.status),
                        n = q().filter(e, e => "failed" == e.status),
                        i = q().filter(e, e => "pending" == e.status);
                    return [t, n, i]
                }
                processQuoteResults(e, t, n) {
                    let i = [],
                        p = q().chunk(e, n.length),
                        b = [];
                    for (let e = 0; e < p.length; e++) {
                        let y = t[e],
                            m = p[e],
                            g = q().map(m, (e, t) => {
                                let i = n[t];
                                if (!e.success) {
                                    let e = 100 / n.length * (t + 1),
                                        p = i.toFixed(Math.min(i.currency.decimals, 2)),
                                        m = routes_routeToString(y);
                                    return b.push({
                                        route: m,
                                        percent: e,
                                        amount: p
                                    }), {
                                        amount: i,
                                        quote: null,
                                        sqrtPriceX96AfterList: null,
                                        gasEstimate: null,
                                        initializedTicksCrossedList: null
                                    }
                                }
                                return {
                                    amount: i,
                                    quote: e.result[0],
                                    sqrtPriceX96AfterList: e.result[1],
                                    initializedTicksCrossedList: e.result[2],
                                    gasEstimate: e.result[3]
                                }
                            });
                        i.push([y, g])
                    }
                    return q().forEach(q().chunk(b, 80), (e, t) => {
                        let n = q().groupBy(e, e => e.route),
                            i = q().mapValues(n, e => q()(e).map(e => `${e.percent}%[${e.amount}]`).join(","));
                        L.info({
                            failedQuotes: q().map(i, (e, t) => `${t} : ${e}`)
                        }, `Failed on chain quotes for routes Part ${t}/${Math.ceil(b.length/80)}`)
                    }), i
                }
                validateBlockNumbers(e, t, n) {
                    if (e.length <= 1) return null;
                    let i = q().map(e, e => e.results),
                        p = q().map(i, e => e.blockNumber),
                        b = q()(p).map(e => e.toNumber()).uniq().value();
                    return 1 == b.length ? null : new BlockConflictError(`Quotes returned from different blocks. ${b}. ${t} calls were made with gas limit ${n}`)
                }
                validateSuccessRate(e, t) {
                    let n = e.length,
                        i = e.filter(e => e.success).length,
                        p = 1 * i / n,
                        {
                            quoteMinSuccessRate: b
                        } = this.batchParams;
                    if (p < b) {
                        if (t) {
                            L.info(`Quote success rate still below threshold despite retry. Continuing. ${b}: ${p}`);
                            return
                        }
                        return new SuccessRateError(`Quote success rate below threshold of ${b}: ${p}`)
                    }
                }
                validateRoutes(e, t, n) {
                    if (e.some(e => e.protocol === et.Protocol.V3) && n) throw Error("Cannot use mixed route quoter with V3 routes");
                    if ("quoteExactOutput" === t && n) throw Error("Cannot call quoteExactOutput with V2 or Mixed routes")
                }
            };
            let tB = [{
                    inputs: [{
                        internalType: "address",
                        name: "_factoryV2",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "factoryV3",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_positionManager",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_WETH9",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "WETH9",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveMax",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveMaxMinusOne",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveZeroThenMax",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveZeroThenMaxMinusOne",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    name: "callPositionManager",
                    outputs: [{
                        internalType: "bytes",
                        name: "result",
                        type: "bytes"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes[]",
                        name: "paths",
                        type: "bytes[]"
                    }, {
                        internalType: "uint128[]",
                        name: "amounts",
                        type: "uint128[]"
                    }, {
                        internalType: "uint24",
                        name: "maximumTickDivergence",
                        type: "uint24"
                    }, {
                        internalType: "uint32",
                        name: "secondsAgo",
                        type: "uint32"
                    }],
                    name: "checkOracleSlippage",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "path",
                        type: "bytes"
                    }, {
                        internalType: "uint24",
                        name: "maximumTickDivergence",
                        type: "uint24"
                    }, {
                        internalType: "uint32",
                        name: "secondsAgo",
                        type: "uint32"
                    }],
                    name: "checkOracleSlippage",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "bytes",
                            name: "path",
                            type: "bytes"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountIn",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountOutMinimum",
                            type: "uint256"
                        }],
                        internalType: "struct IV3SwapRouter.ExactInputParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactInput",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "tokenIn",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "tokenOut",
                            type: "address"
                        }, {
                            internalType: "uint24",
                            name: "fee",
                            type: "uint24"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountIn",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountOutMinimum",
                            type: "uint256"
                        }, {
                            internalType: "uint160",
                            name: "sqrtPriceLimitX96",
                            type: "uint160"
                        }],
                        internalType: "struct IV3SwapRouter.ExactInputSingleParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactInputSingle",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "bytes",
                            name: "path",
                            type: "bytes"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountOut",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountInMaximum",
                            type: "uint256"
                        }],
                        internalType: "struct IV3SwapRouter.ExactOutputParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactOutput",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "tokenIn",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "tokenOut",
                            type: "address"
                        }, {
                            internalType: "uint24",
                            name: "fee",
                            type: "uint24"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountOut",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountInMaximum",
                            type: "uint256"
                        }, {
                            internalType: "uint160",
                            name: "sqrtPriceLimitX96",
                            type: "uint160"
                        }],
                        internalType: "struct IV3SwapRouter.ExactOutputSingleParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactOutputSingle",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "factoryV2",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "getApprovalType",
                    outputs: [{
                        internalType: "enum IApproveAndCall.ApprovalType",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "token0",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "token1",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount0Min",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount1Min",
                            type: "uint256"
                        }],
                        internalType: "struct IApproveAndCall.IncreaseLiquidityParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "increaseLiquidity",
                    outputs: [{
                        internalType: "bytes",
                        name: "result",
                        type: "bytes"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "token0",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "token1",
                            type: "address"
                        }, {
                            internalType: "uint24",
                            name: "fee",
                            type: "uint24"
                        }, {
                            internalType: "int24",
                            name: "tickLower",
                            type: "int24"
                        }, {
                            internalType: "int24",
                            name: "tickUpper",
                            type: "int24"
                        }, {
                            internalType: "uint256",
                            name: "amount0Min",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount1Min",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }],
                        internalType: "struct IApproveAndCall.MintParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "bytes",
                        name: "result",
                        type: "bytes"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes32",
                        name: "previousBlockhash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "bytes[]",
                        name: "",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "bytes[]",
                        name: "",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "bytes[]",
                        name: "results",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "positionManager",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "pull",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "refundETH",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermit",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermitAllowed",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermitAllowedIfNecessary",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermitIfNecessary",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "swapExactTokensForTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountInMax",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "swapTokensForExactTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }],
                    name: "sweepToken",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }],
                    name: "sweepToken",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "sweepTokenWithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "sweepTokenWithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "int256",
                        name: "amount0Delta",
                        type: "int256"
                    }, {
                        internalType: "int256",
                        name: "amount1Delta",
                        type: "int256"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "uniswapV3SwapCallback",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }],
                    name: "unwrapWETH9",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }],
                    name: "unwrapWETH9",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "unwrapWETH9WithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "unwrapWETH9WithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "wrapETH",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                tL = "0x6101006040526000196000553480156200001857600080fd5b5060405162006135380380620061358339810160408190526200003b9162000087565b6001600160601b0319606094851b811660805291841b821660a05291831b811660c052911b1660e052620000e3565b80516001600160a01b03811681146200008257600080fd5b919050565b600080600080608085870312156200009d578384fd5b620000a8856200006a565b9350620000b8602086016200006a565b9250620000c8604086016200006a565b9150620000d8606086016200006a565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05160601c615fb162000184600039806102c15280610b3c52806112ad52806113d7528061147e52806116af52806117d95280612d8f5280612def5280612e70525080611e4c52806124df5280613cdb52508061166f5280611b1a5280611e9c52806132a6525080610c625280610d365280610fe2528061164b5280612fc252806131855250615fb16000f3fe6080604052600436106102a45760003560e01c80639b2c0a371161016e578063dee00f35116100cb578063f100b2051161007f578063f2d5d56b11610064578063f2d5d56b1461066e578063f3995c6714610681578063fa461e33146106945761034f565b8063f100b2051461063b578063f25801a71461064e5761034f565b8063e0e189a0116100b0578063e0e189a0146105f5578063e90a182f14610608578063efdeed8e1461061b5761034f565b8063dee00f35146105b5578063df2ab5bb146105e25761034f565b8063b858183f11610122578063c45a015511610107578063c45a01551461057a578063cab372ce1461058f578063d4ef38de146105a25761034f565b8063b858183f14610554578063c2e3140a146105675761034f565b8063ab3fdd5011610153578063ab3fdd501461051b578063ac9650d81461052e578063b3a2af13146105415761034f565b80639b2c0a37146104f5578063a4a78f0c146105085761034f565b8063472b43f31161021c578063571ac8b0116101d0578063639d71a9116101b5578063639d71a9146104b857806368e0d4e1146104cb578063791b98bc146104e05761034f565b8063571ac8b0146104925780635ae401dc146104a55761034f565b80634961699711610201578063496169971461044a5780634aa4a4fc1461045d5780635023b4df1461047f5761034f565b8063472b43f31461042457806349404b7c146104375761034f565b80631c58db4f116102735780633068c554116102585780633068c554146103eb57806342712a67146103fe5780634659a494146104115761034f565b80631c58db4f146103b85780631f0464d1146103cb5761034f565b806304e45aaf1461035457806309b813461461037d57806311ed56c91461039057806312210e8a146103b05761034f565b3661034f573373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461034d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b610367610362366004615543565b6106b4565b6040516103749190615dfd565b60405180910390f35b61036761038b3660046155de565b61083c565b6103a361039e366004615638565b61091c565b6040516103749190615b7a565b61034d610b28565b61034d6103c63660046157bb565b610b3a565b6103de6103d93660046152a7565b610bbe565b6040516103749190615afc565b61034d6103f93660046150d8565b610c48565b61036761040c366004615885565b610c5b565b61034d61041f366004615121565b610e35565b610367610432366004615885565b610ef5565b61034d6104453660046157eb565b6112a9565b61034d6104583660046157bb565b61146f565b34801561046957600080fd5b5061047261147c565b6040516103749190615a3c565b61036761048d366004615616565b6114a0565b61034d6104a0366004614feb565b611589565b6103de6104b33660046152a7565b6115bc565b61034d6104c6366004614feb565b611635565b3480156104d757600080fd5b50610472611649565b3480156104ec57600080fd5b5061047261166d565b61034d61050336600461581a565b611691565b61034d610516366004615121565b6118a7565b61034d610529366004614feb565b61197c565b6103de61053c36600461517c565b6119ba565b6103a361054f3660046152f1565b611b14565b61036761056236600461549d565b611bd2565b61034d610575366004615121565b611d95565b34801561058657600080fd5b50610472611e4a565b61034d61059d366004614feb565b611990565b61034d6105b0366004615858565b611e6e565b3480156105c157600080fd5b506105d56105d036600461500e565b611e7a565b6040516103749190615b8d565b61034d6105f0366004615039565b612027565b61034d61060336600461507a565b61213e565b61034d61061636600461500e565b6122a4565b34801561062757600080fd5b5061034d6106363660046151bc565b6122b3565b6103a3610649366004615627565b612305565b34801561065a57600080fd5b5061034d610669366004615324565b6123a5565b61034d61067c36600461500e565b6123f6565b61034d61068f366004615121565b612402565b3480156106a057600080fd5b5061034d6106af3660046153b8565b61249a565b600080600083608001511415610771575081516040517f70a0823100000000000000000000000000000000000000000000000000000000815260019173ffffffffffffffffffffffffffffffffffffffff16906370a082319061071b903090600401615a3c565b60206040518083038186803b15801561073357600080fd5b505afa158015610747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076b91906157d3565b60808401525b6107ed836080015184606001518560c001516040518060400160405280886000015189604001518a602001516040516020016107af939291906159aa565b6040516020818303038152906040528152602001866107ce57336107d0565b305b73ffffffffffffffffffffffffffffffffffffffff1690526125de565b91508260a00151821015610836576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c7d565b60405180910390fd5b50919050565b60006108b0604083018035906108559060208601614feb565b604080518082019091526000908061086d8880615e41565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252503360209091015261278f565b505060005460608201358111156108f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c0f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600055919050565b604080516101608101909152606090610b20907f8831645600000000000000000000000000000000000000000000000000000000908061095f6020870187614feb565b73ffffffffffffffffffffffffffffffffffffffff16815260200185602001602081019061098d9190614feb565b73ffffffffffffffffffffffffffffffffffffffff1681526020016109b860608701604088016157a1565b62ffffff1681526020016109d26080870160608801615379565b60020b81526020016109ea60a0870160808801615379565b60020b8152602090810190610a0a90610a0590880188614feb565b612976565b8152602001610a25866020016020810190610a059190614feb565b815260a0860135602082015260c08601356040820152606001610a4f610100870160e08801614feb565b73ffffffffffffffffffffffffffffffffffffffff1681526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff815250604051602401610a9e9190615cf8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b14565b90505b919050565b4715610b3857610b383347612a1b565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610ba257600080fd5b505af1158015610bb6573d6000803e3d6000fd5b505050505050565b60608380600143034014610c3357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f426c6f636b686173680000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610c3d84846119ba565b91505b509392505050565b610c55848433858561213e565b50505050565b6000610cbb7f000000000000000000000000000000000000000000000000000000000000000087868680806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612b6992505050565b600081518110610cc757fe5b6020026020010151905084811115610d0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c0f565b610da484846000818110610d1b57fe5b9050602002016020810190610d309190614feb565b33610d9e7f000000000000000000000000000000000000000000000000000000000000000088886000818110610d6257fe5b9050602002016020810190610d779190614feb565b89896001818110610d8457fe5b9050602002016020810190610d999190614feb565b612ca2565b84612d8d565b73ffffffffffffffffffffffffffffffffffffffff821660011415610dcb57339150610dee565b73ffffffffffffffffffffffffffffffffffffffff821660021415610dee573091505b610e2c848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250869250612f6b915050565b95945050505050565b604080517f8fcbaf0c00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e48101839052905173ffffffffffffffffffffffffffffffffffffffff881691638fcbaf0c9161010480830192600092919082900301818387803b158015610ed557600080fd5b505af1158015610ee9573d6000803e3d6000fd5b50505050505050505050565b60008086610fab575060018484600081610f0b57fe5b9050602002016020810190610f209190614feb565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610f589190615a3c565b60206040518083038186803b158015610f7057600080fd5b505afa158015610f84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa891906157d3565b96505b61103685856000818110610fbb57fe5b9050602002016020810190610fd09190614feb565b82610fdb5733610fdd565b305b6110307f00000000000000000000000000000000000000000000000000000000000000008989600081811061100e57fe5b90506020020160208101906110239190614feb565b8a8a6001818110610d8457fe5b8a612d8d565b73ffffffffffffffffffffffffffffffffffffffff83166001141561105d57339250611080565b73ffffffffffffffffffffffffffffffffffffffff831660021415611080573092505b600085857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106110b057fe5b90506020020160208101906110c59190614feb565b73ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016110fd9190615a3c565b60206040518083038186803b15801561111557600080fd5b505afa158015611129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114d91906157d3565b905061118d868680806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250612f6b915050565b6112628187877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106111bf57fe5b90506020020160208101906111d49190614feb565b73ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b815260040161120c9190615a3c565b60206040518083038186803b15801561122457600080fd5b505afa158015611238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125c91906157d3565b90613270565b92508683101561129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c7d565b505095945050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561133257600080fd5b505afa158015611346573d6000803e3d6000fd5b505050506040513d602081101561135c57600080fd5b50519050828110156113cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b801561146a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561144857600080fd5b505af115801561145c573d6000803e3d6000fd5b5050505061146a8282612a1b565b505050565b61147981336112a9565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000611549608083018035906114b99060608601614feb565b6114c960e0860160c08701614feb565b60405180604001604052808760200160208101906114e79190614feb565b6114f760608a0160408b016157a1565b61150460208b018b614feb565b604051602001611516939291906159aa565b60405160208183030381529060405281526020013373ffffffffffffffffffffffffffffffffffffffff1681525061278f565b90508160a001358111156108f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c0f565b6115b3817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613280565b61147957600080fd5b606083806115c86133cc565b1115610c3357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b611640816000613280565b61158957600080fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000821180156116a2575060648211155b6116ab57600080fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561173457600080fd5b505afa158015611748573d6000803e3d6000fd5b505050506040513d602081101561175e57600080fd5b50519050848110156117d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b80156118a0577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561184a57600080fd5b505af115801561185e573d6000803e3d6000fd5b50505050600061271061187a85846133d090919063ffffffff16565b8161188157fe5b0490508015611894576118948382612a1b565b610bb685828403612a1b565b5050505050565b604080517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015290517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b15801561193c57600080fd5b505afa158015611950573d6000803e3d6000fd5b505050506040513d602081101561196657600080fd5b50511015610bb657610bb6868686868686610e35565b611987816000613280565b61199057600080fd5b6115b3817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe613280565b60608167ffffffffffffffff811180156119d357600080fd5b50604051908082528060200260200182016040528015611a0757816020015b60608152602001906001900390816119f25790505b50905060005b82811015611b0d5760008030868685818110611a2557fe5b9050602002810190611a379190615e41565b604051611a45929190615a10565b600060405180830381855af49150503d8060008114611a80576040519150601f19603f3d011682016040523d82523d6000602084013e611a85565b606091505b509150915081611aeb57604481511015611a9e57600080fd5b60048101905080806020019051810190611ab89190615433565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d9190615b7a565b80848481518110611af857fe5b60209081029190910101525050600101611a0d565b5092915050565b606060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1683604051611b5d9190615a20565b6000604051808303816000865af19150503d8060008114611b9a576040519150601f19603f3d011682016040523d82523d6000602084013e611b9f565b606091505b50925090508061083657604482511015611bb857600080fd5b60048201915081806020019051810190611ab89190615433565b600080600083604001511415611ca357600190506000611bf584600001516133f4565b50506040517f70a0823100000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff8216906370a0823190611c4c903090600401615a3c565b60206040518083038186803b158015611c6457600080fd5b505afa158015611c78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c9c91906157d3565b6040850152505b600081611cb05733611cb2565b305b90505b6000611cc48560000151613425565b9050611d1d856040015182611cdd578660200151611cdf565b305b60006040518060400160405280611cf98b6000015161342d565b81526020018773ffffffffffffffffffffffffffffffffffffffff168152506125de565b60408601528015611d3d578451309250611d369061343c565b8552611d4a565b8460400151935050611d50565b50611cb5565b8360600151831015611d8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c7d565b5050919050565b604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529051869173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b158015611e0a57600080fd5b505afa158015611e1e573d6000803e3d6000fd5b505050506040513d6020811015611e3457600080fd5b50511015610bb657610bb6868686868686612402565b7f000000000000000000000000000000000000000000000000000000000000000081565b61146a83338484611691565b6000818373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e307f00000000000000000000000000000000000000000000000000000000000000006040518363ffffffff1660e01b8152600401611ed8929190615a5d565b60206040518083038186803b158015611ef057600080fd5b505afa158015611f04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2891906157d3565b10611f3557506000612021565b611f5f837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613280565b15611f6c57506001612021565b611f96837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe613280565b15611fa357506002612021565b611fae836000613280565b611fb757600080fd5b611fe1837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613280565b15611fee57506003612021565b612018837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe613280565b1561034f575060045b92915050565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561209057600080fd5b505afa1580156120a4573d6000803e3d6000fd5b505050506040513d60208110156120ba57600080fd5b505190508281101561212d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b8015610c5557610c55848383613471565b60008211801561214f575060648211155b61215857600080fd5b60008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156121c157600080fd5b505afa1580156121d5573d6000803e3d6000fd5b505050506040513d60208110156121eb57600080fd5b505190508481101561225e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b8015610bb657600061271061227383866133d0565b8161227a57fe5b049050801561228e5761228e878483613471565b61229b8786838503613471565b50505050505050565b6122af828233612027565b5050565b6000806122c1868685613646565b915091508362ffffff1681830312610bb6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c46565b6060610b2063219f5d1760e01b6040518060c001604052808560400135815260200161233d866000016020810190610a059190614feb565b8152602001612358866020016020810190610a059190614feb565b815260200185606001358152602001856080013581526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff815250604051602401610a9e9190615cb4565b6000806123b28584613859565b915091508362ffffff16818303126118a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c46565b6122af82333084613ae1565b604080517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c48101839052905173ffffffffffffffffffffffffffffffffffffffff88169163d505accf9160e480830192600092919082900301818387803b158015610ed557600080fd5b60008413806124a95750600083135b6124b257600080fd5b60006124c08284018461564a565b905060008060006124d484600001516133f4565b9250925092506125067f0000000000000000000000000000000000000000000000000000000000000000848484613cbe565b5060008060008a13612547578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161089612578565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16108a5b915091508115612597576125928587602001513384612d8d565b610ee9565b85516125a290613425565b156125c75785516125b29061343c565b86526125c1813360008961278f565b50610ee9565b80600081905550610ee98487602001513384612d8d565b600073ffffffffffffffffffffffffffffffffffffffff8416600114156126075733935061262a565b73ffffffffffffffffffffffffffffffffffffffff84166002141561262a573093505b600080600061263c85600001516133f4565b9194509250905073ffffffffffffffffffffffffffffffffffffffff8083169084161060008061266d868686613cd4565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856126938f613d12565b73ffffffffffffffffffffffffffffffffffffffff8e16156126b5578d6126db565b876126d45773fffd8963efd1fc6a506488495d951d5263988d256126db565b6401000276a45b8d6040516020016126ec9190615da6565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161271b959493929190615a84565b6040805180830381600087803b15801561273457600080fd5b505af1158015612748573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276c9190615395565b915091508261277b578161277d565b805b6000039b9a5050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416600114156127b8573393506127db565b73ffffffffffffffffffffffffffffffffffffffff8416600214156127db573093505b60008060006127ed85600001516133f4565b9194509250905073ffffffffffffffffffffffffffffffffffffffff8084169083161060008061281e858786613cd4565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856128448f613d12565b60000373ffffffffffffffffffffffffffffffffffffffff8e1615612869578d61288f565b876128885773fffd8963efd1fc6a506488495d951d5263988d2561288f565b6401000276a45b8d6040516020016128a09190615da6565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016128cf959493929190615a84565b6040805180830381600087803b1580156128e857600080fd5b505af11580156128fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129209190615395565b9150915060008361293557818360000361293b565b82826000035b909850905073ffffffffffffffffffffffffffffffffffffffff8a16612967578b811461296757600080fd5b50505050505050949350505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8316906370a08231906129cb903090600401615a3c565b60206040518083038186803b1580156129e357600080fd5b505afa1580156129f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2091906157d3565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310612a9257805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612a55565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612af4576040519150601f19603f3d011682016040523d82523d6000602084013e612af9565b606091505b505090508061146a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6060600282511015612b7a57600080fd5b815167ffffffffffffffff81118015612b9257600080fd5b50604051908082528060200260200182016040528015612bbc578160200160208202803683370190505b5090508281600183510381518110612bd057fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b8015610c4057600080612c3d87866001860381518110612c1c57fe5b6020026020010151878681518110612c3057fe5b6020026020010151613d44565b91509150612c5f848481518110612c5057fe5b60200260200101518383613e2c565b846001850381518110612c6e57fe5b602090810291909101015250507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612c00565b6000806000612cb18585613f02565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148015612de85750804710155b15612f31577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612eff57600080fd5b505af1158015612f13573d6000803e3d6000fd5b505050506040513d6020811015612f2957600080fd5b50610c559050565b73ffffffffffffffffffffffffffffffffffffffff8316301415612f5f57612f5a848383613471565b610c55565b610c5584848484613ae1565b60005b600183510381101561146a57600080848381518110612f8957fe5b6020026020010151858460010181518110612fa057fe5b6020026020010151915091506000612fb88383613f02565b5090506000612fe87f00000000000000000000000000000000000000000000000000000000000000008585612ca2565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561303657600080fd5b505afa15801561304a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061306e91906156da565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691506000808773ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff16146130d05782846130d3565b83835b91509150613114828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b815260040161120c9190615a3c565b9550613121868383613fa7565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161461316557826000613169565b6000835b91509150600060028c51038a10613180578a6131c1565b6131c17f0000000000000000000000000000000000000000000000000000000000000000898e8d600201815181106131b457fe5b6020026020010151612ca2565b604080516000815260208101918290527f022c0d9f0000000000000000000000000000000000000000000000000000000090915290915073ffffffffffffffffffffffffffffffffffffffff87169063022c0d9f906132299086908690869060248101615e06565b600060405180830381600087803b15801561324357600080fd5b505af1158015613257573d6000803e3d6000fd5b50506001909b019a50612f6e9950505050505050505050565b8082038281111561202157600080fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b7f0000000000000000000000000000000000000000000000000000000000000000866040516024016132d7929190615ad6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516133609190615a20565b6000604051808303816000865af19150503d806000811461339d576040519150601f19603f3d011682016040523d82523d6000602084013e6133a2565b606091505b5091509150818015610e2c575080511580610e2c575080806020019051810190610e2c919061528d565b4290565b60008215806133eb575050818102818382816133e857fe5b04145b61202157600080fd5b60008080613402848261407d565b925061340f84601461417d565b905061341c84601761407d565b91509193909250565b516042111590565b6060610b20826000602b61426d565b8051606090610b209083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe90161426d565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b6020831061354657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613509565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146135a8576040519150601f19603f3d011682016040523d82523d6000602084013e6135ad565b606091505b50915091508180156135db5750805115806135db57508080602001905160208110156135d857600080fd5b50515b6118a057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080835185511461365757600080fd5b6000855167ffffffffffffffff8111801561367157600080fd5b506040519080825280602002602001820160405280156136ab57816020015b613698614e34565b8152602001906001900390816136905790505b5090506000865167ffffffffffffffff811180156136c857600080fd5b5060405190808252806020026020018201604052801561370257816020015b6136ef614e34565b8152602001906001900390816136e75790505b50905060005b8751811015613832576000806137318a848151811061372357fe5b602002602001015189613859565b9150915061373e82614454565b85848151811061374a57fe5b60200260200101516000019060020b908160020b8152505061376b81614454565b84848151811061377757fe5b60200260200101516000019060020b908160020b8152505088838151811061379b57fe5b60200260200101518584815181106137af57fe5b6020026020010151602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff16815250508883815181106137f157fe5b602002602001015184848151811061380557fe5b6020908102919091018101516fffffffffffffffffffffffffffffffff9092169101525050600101613708565b5061383c82614465565b60020b935061384a81614465565b60020b92505050935093915050565b6000806000806138688661454d565b90506000805b82811015613a865760008060006138848b6133f4565b9250925092506000613897848484613cd4565b905060008063ffffffff8d166138c0576138b083614578565b600291820b9350900b9050613962565b6138ca838e614810565b8160020b915050809250508273ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561391b57600080fd5b505afa15801561392f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139539190615715565b50505060029290920b93505050505b600189038714156139a3578473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161099506139b2565b6139ac8e61343c565b9d508597505b6000871580613a5357508673ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1610613a23578673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1610613a53565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16105b90508015613a68579b82019b9a81019a613a73565b828d039c50818c039b505b50506001909501945061386e9350505050565b5082613ad7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff850294507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff840293505b5050509250929050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b60208310613bbe57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613b81565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613c20576040519150601f19603f3d011682016040523d82523d6000602084013e613c25565b606091505b5091509150818015613c53575080511580613c535750808060200190516020811015613c5057600080fd5b50515b610bb657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610e2c85613ccf868686614c41565b614cbe565b6000613d0a7f0000000000000000000000000000000000000000000000000000000000000000613d05868686614c41565b614cee565b949350505050565b60007f80000000000000000000000000000000000000000000000000000000000000008210613d4057600080fd5b5090565b6000806000613d538585613f02565b509050600080613d64888888612ca2565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015613da957600080fd5b505afa158015613dbd573d6000803e3d6000fd5b505050506040513d6060811015613dd357600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff87811690841614613e1a578082613e1d565b81815b90999098509650505050505050565b6000808411613e9c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b600083118015613eac5750600082115b613eb557600080fd5b6000613ecd6103e8613ec786886133d0565b906133d0565b90506000613ee16103e5613ec78689613270565b9050613ef86001828481613ef157fe5b0490614e24565b9695505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415613f3e57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610613f78578284613f7b565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216613fa057600080fd5b9250929050565b600080841161401757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6000831180156140275750600082115b61403057600080fd5b600061403e856103e56133d0565b9050600061404c82856133d0565b9050600061406683614060886103e86133d0565b90614e24565b905080828161407157fe5b04979650505050505050565b6000818260140110156140f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561416457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b6000818260030110156141f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b816003018351101561426457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b60608182601f0110156142e157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b82828401101561435257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b818301845110156143c457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b6060821580156143e3576040519150600082526020820160405261444b565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561441c578051835260209283019201614404565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b80600281900b8114610b2357600080fd5b6000806000805b84518110156144fa5784818151811061448157fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff168582815181106144ab57fe5b60200260200101516000015160020b02830192508481815181106144cb57fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff1682019150808060010191505061446c565b5080828161450457fe5b05925060008212801561451f575080828161451b57fe5b0715155b15611d8e5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01919050565b5160177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec9091010490565b6000806000808473ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156145c457600080fd5b505afa1580156145d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906145fc9190615715565b50939750919550935050600161ffff84161191506146489050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615bd8565b6000808673ffffffffffffffffffffffffffffffffffffffff1663252c09d7856040518263ffffffff1660e01b81526004016146849190615dee565b60806040518083038186803b15801561469c57600080fd5b505afa1580156146b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906146d491906158e0565b5050915091506146e26133cc565b63ffffffff168263ffffffff16146146fc57849550614807565b60008361ffff1660018561ffff168761ffff1601038161471857fe5b06905060008060008a73ffffffffffffffffffffffffffffffffffffffff1663252c09d7856040518263ffffffff1660e01b81526004016147599190615dfd565b60806040518083038186803b15801561477157600080fd5b505afa158015614785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906147a991906158e0565b93505092509250806147e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615ba1565b82860363ffffffff811683870360060b816147fe57fe5b059a5050505050505b50505050915091565b60008063ffffffff831661488557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4250000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60408051600280825260608201835260009260208301908036833701905050905083816000815181106148b457fe5b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106148dd57fe5b63ffffffff9092166020928302919091018201526040517f883bdbfd00000000000000000000000000000000000000000000000000000000815260048101828152835160248301528351600093849373ffffffffffffffffffffffffffffffffffffffff8b169363883bdbfd9388939192839260449091019185820191028083838b5b83811015614978578181015183820152602001614960565b505050509050019250505060006040518083038186803b15801561499b57600080fd5b505afa1580156149af573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160409081528110156149f657600080fd5b8101908080516040519392919084640100000000821115614a1657600080fd5b908301906020820185811115614a2b57600080fd5b8251866020820283011164010000000082111715614a4857600080fd5b82525081516020918201928201910280838360005b83811015614a75578181015183820152602001614a5d565b5050505090500160405260200180516040519392919084640100000000821115614a9e57600080fd5b908301906020820185811115614ab357600080fd5b8251866020820283011164010000000082111715614ad057600080fd5b82525081516020918201928201910280838360005b83811015614afd578181015183820152602001614ae5565b5050505090500160405250505091509150600082600081518110614b1d57fe5b602002602001015183600181518110614b3257fe5b6020026020010151039050600082600081518110614b4c57fe5b602002602001015183600181518110614b6157fe5b60200260200101510390508763ffffffff168260060b81614b7e57fe5b05965060008260060b128015614ba857508763ffffffff168260060b81614ba157fe5b0760060b15155b15614bd3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909601955b63ffffffff881673ffffffffffffffffffffffffffffffffffffffff0277ffffffffffffffffffffffffffffffffffffffff00000000602083901b1677ffffffffffffffffffffffffffffffffffffffffffffffff821681614c3157fe5b0496505050505050509250929050565b614c49614e4b565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115614c81579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b6000614cca8383614cee565b90503373ffffffffffffffffffffffffffffffffffffffff82161461202157600080fd5b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610614d3057600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b8082018281101561202157600080fd5b604080518082019091526000808252602082015290565b604080516060810182526000808252602082018190529181019190915290565b8035610b2381615f52565b60008083601f840112614e87578182fd5b50813567ffffffffffffffff811115614e9e578182fd5b6020830191508360208083028501011115613fa057600080fd5b600082601f830112614ec8578081fd5b81356020614edd614ed883615ec8565b615ea4565b8281528181019085830183850287018401881015614ef9578586fd5b855b85811015614f345781356fffffffffffffffffffffffffffffffff81168114614f22578788fd5b84529284019290840190600101614efb565b5090979650505050505050565b80518015158114610b2357600080fd5b600082601f830112614f61578081fd5b8135614f6f614ed882615ee6565b818152846020838601011115614f83578283fd5b816020850160208301379081016020019190915292915050565b80516dffffffffffffffffffffffffffff81168114610b2357600080fd5b805161ffff81168114610b2357600080fd5b803562ffffff81168114610b2357600080fd5b8035610b2381615f83565b600060208284031215614ffc578081fd5b813561500781615f52565b9392505050565b60008060408385031215615020578081fd5b823561502b81615f52565b946020939093013593505050565b60008060006060848603121561504d578081fd5b833561505881615f52565b925060208401359150604084013561506f81615f52565b809150509250925092565b600080600080600060a08688031215615091578283fd5b853561509c81615f52565b94506020860135935060408601356150b381615f52565b92506060860135915060808601356150ca81615f52565b809150509295509295909350565b600080600080608085870312156150ed578182fd5b84356150f881615f52565b93506020850135925060408501359150606085013561511681615f52565b939692955090935050565b60008060008060008060c08789031215615139578384fd5b863561514481615f52565b95506020870135945060408701359350606087013561516281615f95565b9598949750929560808101359460a0909101359350915050565b6000806020838503121561518e578182fd5b823567ffffffffffffffff8111156151a4578283fd5b6151b085828601614e76565b90969095509350505050565b600080600080608085870312156151d1578182fd5b843567ffffffffffffffff808211156151e8578384fd5b818701915087601f8301126151fb578384fd5b8135602061520b614ed883615ec8565b82815281810190858301885b858110156152405761522e8e8684358b0101614f51565b84529284019290840190600101615217565b50909950505088013592505080821115615258578384fd5b5061526587828801614eb8565b93505061527460408601614fcd565b915061528260608601614fe0565b905092959194509250565b60006020828403121561529e578081fd5b61500782614f41565b6000806000604084860312156152bb578081fd5b83359250602084013567ffffffffffffffff8111156152d8578182fd5b6152e486828701614e76565b9497909650939450505050565b600060208284031215615302578081fd5b813567ffffffffffffffff811115615318578182fd5b613d0a84828501614f51565b600080600060608486031215615338578081fd5b833567ffffffffffffffff81111561534e578182fd5b61535a86828701614f51565b93505061536960208501614fcd565b9150604084013561506f81615f83565b60006020828403121561538a578081fd5b813561500781615f74565b600080604083850312156153a7578182fd5b505080516020909101519092909150565b600080600080606085870312156153cd578182fd5b8435935060208501359250604085013567ffffffffffffffff808211156153f2578384fd5b818701915087601f830112615405578384fd5b813581811115615413578485fd5b886020828501011115615424578485fd5b95989497505060200194505050565b600060208284031215615444578081fd5b815167ffffffffffffffff81111561545a578182fd5b8201601f8101841361546a578182fd5b8051615478614ed882615ee6565b81815285602083850101111561548c578384fd5b610e2c826020830160208601615f26565b6000602082840312156154ae578081fd5b813567ffffffffffffffff808211156154c5578283fd5b90830190608082860312156154d8578283fd5b6040516080810181811083821117156154ed57fe5b6040528235828111156154fe578485fd5b61550a87828601614f51565b8252506020830135915061551d82615f52565b816020820152604083013560408201526060830135606082015280935050505092915050565b600060e08284031215615554578081fd5b60405160e0810181811067ffffffffffffffff8211171561557157fe5b60405261557d83614e6b565b815261558b60208401614e6b565b602082015261559c60408401614fcd565b60408201526155ad60608401614e6b565b60608201526080830135608082015260a083013560a08201526155d260c08401614e6b565b60c08201529392505050565b6000602082840312156155ef578081fd5b813567ffffffffffffffff811115615605578182fd5b820160808185031215615007578182fd5b600060e08284031215610836578081fd5b600060a08284031215610836578081fd5b60006101008284031215610836578081fd5b60006020828403121561565b578081fd5b813567ffffffffffffffff80821115615672578283fd5b9083019060408286031215615685578283fd5b60405160408101818110838211171561569a57fe5b6040528235828111156156ab578485fd5b6156b787828601614f51565b825250602083013592506156ca83615f52565b6020810192909252509392505050565b6000806000606084860312156156ee578081fd5b6156f784614f9d565b925061570560208501614f9d565b9150604084015161506f81615f83565b600080600080600080600060e0888a03121561572f578485fd5b875161573a81615f52565b602089015190975061574b81615f74565b955061575960408901614fbb565b945061576760608901614fbb565b935061577560808901614fbb565b925060a088015161578581615f95565b915061579360c08901614f41565b905092959891949750929550565b6000602082840312156157b2578081fd5b61500782614fcd565b6000602082840312156157cc578081fd5b5035919050565b6000602082840312156157e4578081fd5b5051919050565b600080604083850312156157fd578182fd5b82359150602083013561580f81615f52565b809150509250929050565b6000806000806080858703121561582f578182fd5b84359350602085013561584181615f52565b925060408501359150606085013561511681615f52565b60008060006060848603121561586c578081fd5b8335925060208401359150604084013561506f81615f52565b60008060008060006080868803121561589c578283fd5b8535945060208601359350604086013567ffffffffffffffff8111156158c0578384fd5b6158cc88828901614e76565b90945092505060608601356150ca81615f52565b600080600080608085870312156158f5578182fd5b845161590081615f83565b8094505060208501518060060b8114615917578283fd5b604086015190935061592881615f52565b915061528260608601614f41565b73ffffffffffffffffffffffffffffffffffffffff169052565b60008151808452615968816020860160208601615f26565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60020b9052565b62ffffff169052565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b6000828483379101908152919050565b60008251615a32818460208701615f26565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152615acb60a0830184615950565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015615b6d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452615b5b858351615950565b94509285019290850190600101615b21565b5092979650505050505050565b6000602082526150076020830184615950565b6020810160058310615b9b57fe5b91905290565b60208082526003908201527f4f4e490000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526003908201527f4e454f0000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f546f6f206d756368207265717565737465640000000000000000000000000000604082015260600190565b60208082526002908201527f5444000000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f546f6f206c6974746c6520726563656976656400000000000000000000000000604082015260600190565b600060c082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015292915050565b600061016082019050615d0c828451615936565b6020830151615d1e6020840182615936565b506040830151615d3160408401826159a1565b506060830151615d44606084018261599a565b506080830151615d57608084018261599a565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151615d9582850182615936565b505061014092830151919092015290565b600060208252825160406020840152615dc26060840182615950565b905073ffffffffffffffffffffffffffffffffffffffff60208501511660408401528091505092915050565b61ffff91909116815260200190565b90815260200190565b600085825284602083015273ffffffffffffffffffffffffffffffffffffffff8416604083015260806060830152613ef86080830184615950565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112615e75578283fd5b83018035915067ffffffffffffffff821115615e8f578283fd5b602001915036819003821315613fa057600080fd5b60405181810167ffffffffffffffff81118282101715615ec057fe5b604052919050565b600067ffffffffffffffff821115615edc57fe5b5060209081020190565b600067ffffffffffffffff821115615efa57fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b83811015615f41578181015183820152602001615f29565b83811115610c555750506000910152565b73ffffffffffffffffffffffffffffffffffffffff8116811461147957600080fd5b8060020b811461147957600080fd5b63ffffffff8116811461147957600080fd5b60ff8116811461147957600080fdfea164736f6c6343000706000a";
            let SwapRouter02__factory = class SwapRouter02__factory extends ei.ContractFactory {
                constructor(e) {
                    super(tB, tL, e)
                }
                deploy(e, t, n, i, p) {
                    return super.deploy(e, t, n, i, p || {})
                }
                getDeployTransaction(e, t, n, i, p) {
                    return super.getDeployTransaction(e, t, n, i, p || {})
                }
                attach(e) {
                    return super.attach(e)
                }
                connect(e) {
                    return super.connect(e)
                }
                static createInterface() {
                    return new ef.vU(tB)
                }
                static connect(e, t) {
                    return new ei.Contract(e, tB, t)
                }
            };
            SwapRouter02__factory.bytecode = tL, SwapRouter02__factory.abi = tB;
            let SwapRouterProvider = class SwapRouterProvider {
                constructor(e, t) {
                    this.multicall2Provider = e, this.chainId = t
                }
                async getApprovalType(e, t) {
                    var n, i;
                    let p = [
                            [e.currency.wrapped.address, e.quotient.toString()],
                            [t.currency.wrapped.address, t.quotient.toString()]
                        ],
                        b = await this.multicall2Provider.callSameFunctionOnContractWithMultipleParams({
                            address: addresses_SWAP_ROUTER_02_ADDRESSES(this.chainId),
                            contractInterface: SwapRouter02__factory.createInterface(),
                            functionName: "getApprovalType",
                            functionParams: p
                        });
                    if (!(null === (n = b.results[0]) || void 0 === n ? void 0 : n.success) || !(null === (i = b.results[1]) || void 0 === i ? void 0 : i.success)) throw L.info({
                        results: b.results
                    }, "Failed to get approval type from swap router for token in or token out"), Error("Failed to get approval type from swap router for token in or token out");
                    let {
                        result: y
                    } = b.results[0], {
                        result: m
                    } = b.results[1];
                    return {
                        approvalTokenIn: y[0],
                        approvalTokenOut: m[0]
                    }
                }
            };
            n(72909), n(83104), (S = P || (P = {})).QUICK = "quick", S.FULL = "full", S.ABI = "abi";
            let TokenPropertiesProvider = class TokenPropertiesProvider {
                constructor(e, t, n, i = td, p = 600, b = 600) {
                    this.chainId = e, this.tokenPropertiesCache = t, this.tokenFeeFetcher = n, this.allowList = i, this.positiveCacheEntryTTL = p, this.negativeCacheEntryTTL = b, this.CACHE_KEY = (e, t) => `token-properties-${e}-${t}`
                }
                async getTokensProperties(e, t) {
                    let n = {};
                    if (!(null == t ? void 0 : t.enableFeeOnTransferFeeFetching) || this.chainId !== B.ChainId.MAINNET) return n;
                    let i = [],
                        p = this.buildAddressesRaw(e),
                        b = await this.tokenPropertiesCache.batchGet(p);
                    for (let e of p) {
                        let t = b[e];
                        if (t) {
                            j.putMetric("TokenPropertiesProviderBatchGetCacheHit", 1, E.Count);
                            let i = t.tokenFeeResult,
                                p = i && (i.buyFeeBps || i.sellFeeBps);
                            p ? j.putMetric(`TokenPropertiesProviderCacheHitTokenFeeResultExists${p}`, 1, E.Count) : j.putMetric("TokenPropertiesProviderCacheHitTokenFeeResultNotExists", 1, E.Count), n[e] = t
                        } else this.allowList.has(e) ? n[e] = {
                            tokenValidationResult: A.UNKN
                        } : i.push(e)
                    }
                    if (i.length > 0) {
                        let e = {};
                        try {
                            e = await this.tokenFeeFetcher.fetchFees(i, t)
                        } catch (e) {
                            L.error({
                                err: e
                            }, `Error fetching fees for tokens ${i}`)
                        }
                        await Promise.all(i.map(t => {
                            let i = e[t],
                                p = i && (i.buyFeeBps || i.sellFeeBps);
                            if (p) {
                                j.putMetric(`TokenPropertiesProviderTokenFeeResultCacheMissExists${p}`, 1, E.Count);
                                let e = {
                                    tokenFeeResult: i,
                                    tokenValidationResult: A.FOT
                                };
                                return n[t] = e, j.putMetric("TokenPropertiesProviderBatchGetCacheMiss", 1, E.Count), this.tokenPropertiesCache.set(this.CACHE_KEY(this.chainId, t), e, this.positiveCacheEntryTTL)
                            } {
                                j.putMetric("TokenPropertiesProviderTokenFeeResultCacheMissNotExists", 1, E.Count);
                                let e = {
                                    tokenFeeResult: void 0,
                                    tokenValidationResult: void 0
                                };
                                return n[t] = e, this.tokenPropertiesCache.set(this.CACHE_KEY(this.chainId, t), e, this.negativeCacheEntryTTL)
                            }
                        }))
                    }
                    return n
                }
                buildAddressesRaw(e) {
                    let t = new Set;
                    for (let n of e) {
                        let e = n.address.toLowerCase();
                        t.has(e) || t.add(e)
                    }
                    return t
                }
            };
            var tN = n(78556),
                tF = n.n(tN);
            let uri_subgraph_provider_URISubgraphProvider = class uri_subgraph_provider_URISubgraphProvider {
                constructor(e, t, n = 6e3, i = 2) {
                    this.chainId = e, this.uri = t, this.timeout = n, this.retries = i
                }
                async getPools() {
                    L.info({
                        uri: this.uri
                    }, `About to get subgraph pools from URI ${this.uri}`);
                    let e = [];
                    return await ti()(async () => {
                        let t;
                        let n = new(tF()),
                            i = n.set(this.timeout).then(() => {
                                throw Error(`Timed out getting pools from subgraph: ${this.timeout}`)
                            });
                        try {
                            t = await Promise.race([U().get(this.uri), i])
                        } catch (e) {
                            throw e
                        } finally {
                            n.clear()
                        }
                        let {
                            data: p,
                            status: b
                        } = t;
                        if (200 != b) throw L.error({
                            response: t
                        }, `Unabled to get pools from ${this.uri}.`), Error(`Unable to get pools from ${this.uri}`);
                        L.info({
                            uri: this.uri,
                            chain: this.chainId
                        }, `Got subgraph pools from uri. Num: ${p.length}`), e = p
                    }, {
                        retries: this.retries,
                        onRetry: (e, t) => {
                            L.info({
                                err: e
                            }, `Failed to get pools from uri ${this.uri}. Retry attempt: ${t}`)
                        }
                    }), e
                }
            };
            let CachingV2PoolProvider = class CachingV2PoolProvider {
                constructor(e, t, n) {
                    this.chainId = e, this.poolProvider = t, this.cache = n, this.POOL_KEY = (e, t) => `pool-${e}-${t}`
                }
                async getPools(e, t) {
                    let n = new Set,
                        i = [],
                        p = [],
                        b = {},
                        y = await (null == t ? void 0 : t.blockNumber);
                    for (let [t, m] of e) {
                        let {
                            poolAddress: e,
                            token0: g,
                            token1: T
                        } = this.getPoolAddress(t, m);
                        if (n.has(e)) continue;
                        n.add(e);
                        let v = await this.cache.get(this.POOL_KEY(this.chainId, e));
                        if (v && (!y || y && v.block == y)) {
                            b[e] = v.pair;
                            continue
                        }
                        i.push([g, T]), p.push(e)
                    }
                    if (L.info({
                            poolsFound: q().map(Object.values(b), e => e.token0.symbol + " " + e.token1.symbol),
                            poolsToGetTokenPairs: q().map(i, e => e[0].symbol + " " + e[1].symbol)
                        }, `Found ${Object.keys(b).length} V2 pools already in local cache for block ${y}. About to get reserves for ${i.length} pools.`), p.length > 0) {
                        let e = await this.poolProvider.getPools(i, { ...t,
                            enableFeeOnTransferFeeFetching: !0
                        });
                        for (let t of p) {
                            let n = e.getPoolByAddress(t);
                            n && (b[t] = n, this.cache.set(this.POOL_KEY(this.chainId, t), {
                                pair: n,
                                block: y
                            }))
                        }
                    }
                    return {
                        getPool: (e, t) => {
                            let {
                                poolAddress: n
                            } = this.getPoolAddress(e, t);
                            return b[n]
                        },
                        getPoolByAddress: e => b[e],
                        getAllPools: () => Object.values(b)
                    }
                }
                getPoolAddress(e, t) {
                    return this.poolProvider.getPoolAddress(e, t)
                }
            };
            let CachingV2SubgraphProvider = class CachingV2SubgraphProvider {
                constructor(e, t, n) {
                    this.chainId = e, this.subgraphProvider = t, this.cache = n, this.SUBGRAPH_KEY = e => `subgraph-pools-v2-${e}`
                }
                async getPools() {
                    let e = await this.cache.get(this.SUBGRAPH_KEY(this.chainId));
                    if (e) return e;
                    let t = await this.subgraphProvider.getPools();
                    return await this.cache.set(this.SUBGRAPH_KEY(this.chainId), t), t
                }
            };
            let V2QuoteProvider = class V2QuoteProvider {
                constructor() {}
                async getQuotesManyExactIn(e, t, n) {
                    return this.getQuotes(e, t, B.TradeType.EXACT_INPUT, n)
                }
                async getQuotesManyExactOut(e, t, n) {
                    return this.getQuotes(e, t, B.TradeType.EXACT_OUTPUT, n)
                }
                async getQuotes(e, t, n, i) {
                    let p = [],
                        b = [];
                    for (let y of t) {
                        let t = [],
                            m = 0,
                            g = 0;
                        for (let p of e) try {
                            if (n == B.TradeType.EXACT_INPUT) {
                                let e = p.wrapped;
                                for (let t of y.pairs)[e] = t.getOutputAmount(e, !0 === i.enableFeeOnTransferFeeFetching);
                                t.push({
                                    amount: p,
                                    quote: tt.O$.from(e.quotient.toString())
                                })
                            } else {
                                let e = p.wrapped;
                                for (let t = y.pairs.length - 1; t >= 0; t--) {
                                    let n = y.pairs[t];
                                    [e] = n.getInputAmount(e, !0 === i.enableFeeOnTransferFeeFetching)
                                }
                                t.push({
                                    amount: p,
                                    quote: tt.O$.from(e.quotient.toString())
                                })
                            }
                        } catch (e) {
                            if (e instanceof en.InsufficientInputAmountError) m += 1, t.push({
                                amount: p,
                                quote: null
                            });
                            else if (e instanceof en.InsufficientReservesError) g += 1, t.push({
                                amount: p,
                                quote: null
                            });
                            else throw e
                        }(m > 0 || g > 0) && b.push(`${[routes_routeToString(y)]} Input: ${m} Reserves: ${g} }`), p.push([y, t])
                    }
                    return b.length > 0 && L.info({
                        debugStrs: b
                    }, "Failed quotes for V2 routes"), {
                        routesWithQuotes: p
                    }
                }
            };
            let tU = {
                [B.ChainId.MAINNET]: [Q[B.ChainId.MAINNET], ed, eo, es, eu],
                [B.ChainId.GOERLI]: [Q[B.ChainId.GOERLI]],
                [B.ChainId.SEPOLIA]: [Q[B.ChainId.SEPOLIA]],
                [B.ChainId.OPTIMISM]: [],
                [B.ChainId.ARBITRUM_ONE]: [],
                [B.ChainId.ARBITRUM_GOERLI]: [],
                [B.ChainId.OPTIMISM_GOERLI]: [],
                [B.ChainId.POLYGON]: [],
                [B.ChainId.POLYGON_MUMBAI]: [],
                [B.ChainId.CELO]: [],
                [B.ChainId.CELO_ALFAJORES]: [],
                [B.ChainId.GNOSIS]: [],
                [B.ChainId.MOONBEAM]: [],
                [B.ChainId.BNB]: [],
                [B.ChainId.AVALANCHE]: [],
                [B.ChainId.BASE_GOERLI]: [],
                [B.ChainId.BASE]: []
            };
            let StaticV2SubgraphProvider = class StaticV2SubgraphProvider {
                constructor(e) {
                    this.chainId = e
                }
                async getPools(e, t) {
                    L.info("In static subgraph provider for V2");
                    let n = tU[this.chainId],
                        i = q().flatMap(n, e => n.map(t => [e, t]));
                    e && t && i.push([e, t], ...n.map(t => [e, t]), ...n.map(e => [t, e]));
                    let p = q()(i).filter(e => !!(e[0] && e[1])).filter(([e, t]) => e.address !== t.address && !e.equals(t)).value(),
                        b = new Set,
                        y = q()(p).map(([e, t]) => {
                            let n = en.Pair.getAddress(e, t);
                            if (b.has(n)) return;
                            b.add(n);
                            let [i, p] = e.sortsBefore(t) ? [e, t] : [t, e];
                            return {
                                id: n,
                                liquidity: "100",
                                token0: {
                                    id: i.address
                                },
                                token1: {
                                    id: p.address
                                },
                                supply: 100,
                                reserve: 100,
                                reserveUSD: 100
                            }
                        }).compact().value();
                    return y
                }
            };
            n(10056), B.ChainId.MAINNET;
            let V2SubgraphProviderWithFallBacks = class V2SubgraphProviderWithFallBacks {
                constructor(e) {
                    this.fallbacks = e
                }
                async getPools(e, t, n) {
                    for (let i = 0; i < this.fallbacks.length; i++) {
                        let p = this.fallbacks[i];
                        try {
                            let i = await p.getPools(e, t, n);
                            return i
                        } catch (e) {
                            L.info(`Failed to get subgraph pools for V2 from fallback #${i}`)
                        }
                    }
                    throw Error("Failed to get subgraph pools from any providers")
                }
            };
            let CachingV3PoolProvider = class CachingV3PoolProvider {
                constructor(e, t, n) {
                    this.chainId = e, this.poolProvider = t, this.cache = n, this.POOL_KEY = (e, t) => `pool-${e}-${t}`
                }
                async getPools(e, t) {
                    let n = new Set,
                        i = [],
                        p = [],
                        b = {};
                    for (let [t, y, m] of e) {
                        let {
                            poolAddress: e,
                            token0: g,
                            token1: T
                        } = this.getPoolAddress(t, y, m);
                        if (n.has(e)) continue;
                        n.add(e);
                        let v = await this.cache.get(this.POOL_KEY(this.chainId, e));
                        if (v) {
                            j.putMetric("V3_INMEMORY_CACHING_POOL_HIT_IN_MEMORY", 1, E.None), b[e] = v;
                            continue
                        }
                        j.putMetric("V3_INMEMORY_CACHING_POOL_MISS_NOT_IN_MEMORY", 1, E.None), i.push([g, T, m]), p.push(e)
                    }
                    if (L.info({
                            poolsFound: q().map(Object.values(b), e => `${e.token0.symbol} ${e.token1.symbol} ${e.fee}`),
                            poolsToGetTokenPairs: q().map(i, e => `${e[0].symbol} ${e[1].symbol} ${e[2]}`)
                        }, `Found ${Object.keys(b).length} V3 pools already in local cache. About to get liquidity and slot0s for ${i.length} pools.`), p.length > 0) {
                        let e = await this.poolProvider.getPools(i, t);
                        for (let t of p) {
                            let n = e.getPoolByAddress(t);
                            n && (b[t] = n, this.cache.set(this.POOL_KEY(this.chainId, t), n))
                        }
                    }
                    return {
                        getPool: (e, t, n) => {
                            let {
                                poolAddress: i
                            } = this.getPoolAddress(e, t, n);
                            return b[i]
                        },
                        getPoolByAddress: e => b[e],
                        getAllPools: () => Object.values(b)
                    }
                }
                getPoolAddress(e, t, n) {
                    return this.poolProvider.getPoolAddress(e, t, n)
                }
            };
            let CachingV3SubgraphProvider = class CachingV3SubgraphProvider {
                constructor(e, t, n) {
                    this.chainId = e, this.subgraphProvider = t, this.cache = n, this.SUBGRAPH_KEY = e => `subgraph-pools-${e}`
                }
                async getPools() {
                    let e = await this.cache.get(this.SUBGRAPH_KEY(this.chainId));
                    if (e) return e;
                    let t = await this.subgraphProvider.getPools();
                    return await this.cache.set(this.SUBGRAPH_KEY(this.chainId), t), t
                }
            };
            let tj = {
                [B.ChainId.MAINNET]: [Q[B.ChainId.MAINNET], ed, eo, es, eu],
                [B.ChainId.GOERLI]: [Q[B.ChainId.GOERLI], em, ey, eg, eT],
                [B.ChainId.SEPOLIA]: [Q[B.ChainId.SEPOLIA], eh],
                [B.ChainId.OPTIMISM]: [Q[B.ChainId.OPTIMISM], ev, eC, eS, eE, eI],
                [B.ChainId.ARBITRUM_ONE]: [Q[B.ChainId.ARBITRUM_ONE], eO, eM, ek, eP, ex],
                [B.ChainId.ARBITRUM_GOERLI]: [Q[B.ChainId.ARBITRUM_GOERLI], eD],
                [B.ChainId.OPTIMISM_GOERLI]: [Q[B.ChainId.OPTIMISM_GOERLI], ew, eR, eA, e_],
                [B.ChainId.POLYGON]: [eN, eL, eB],
                [B.ChainId.POLYGON_MUMBAI]: [eU, Q[B.ChainId.POLYGON_MUMBAI], eF],
                [B.ChainId.CELO]: [eW, eY, eX, eQ],
                [B.ChainId.CELO_ALFAJORES]: [eK, eJ, eZ, ez],
                [B.ChainId.GNOSIS]: [Q[B.ChainId.GNOSIS], e2, e8, e6],
                [B.ChainId.BNB]: [Q[B.ChainId.BNB], eG, eq, eH, e$, ej, eV],
                [B.ChainId.AVALANCHE]: [Q[B.ChainId.AVALANCHE], e1, e0],
                [B.ChainId.MOONBEAM]: [Q[B.ChainId.MOONBEAM], e4, e3, e7],
                [B.ChainId.BASE_GOERLI]: [Q[B.ChainId.BASE_GOERLI]],
                [B.ChainId.BASE]: [Q[B.ChainId.BASE], e5]
            };
            let StaticV3SubgraphProvider = class StaticV3SubgraphProvider {
                constructor(e, t) {
                    this.chainId = e, this.poolProvider = t
                }
                async getPools(e, t, n) {
                    L.info("In static subgraph provider for V3");
                    let i = tj[this.chainId],
                        p = q().flatMap(i, e => i.map(t => [e, t]));
                    e && t && p.push([e, t], ...i.map(t => [e, t]), ...i.map(e => [t, e]));
                    let b = q()(p).filter(e => !!(e[0] && e[1])).filter(([e, t]) => e.address !== t.address && !e.equals(t)).flatMap(([e, t]) => [
                        [e, t, V.FeeAmount.LOWEST],
                        [e, t, V.FeeAmount.LOW],
                        [e, t, V.FeeAmount.MEDIUM],
                        [e, t, V.FeeAmount.HIGH]
                    ]).value();
                    L.info(`V3 Static subgraph provider about to get ${b.length} pools on-chain`);
                    let y = await this.poolProvider.getPools(b, n),
                        m = y.getAllPools(),
                        g = new Set,
                        T = q()(m).map(e => {
                            let {
                                token0: t,
                                token1: n,
                                fee: i,
                                liquidity: p
                            } = e, b = V.Pool.getAddress(e.token0, e.token1, e.fee);
                            if (g.has(b)) return;
                            g.add(b);
                            let y = ee().toNumber(p);
                            return {
                                id: b,
                                feeTier: unparseFeeAmount(i),
                                liquidity: p.toString(),
                                token0: {
                                    id: t.address
                                },
                                token1: {
                                    id: n.address
                                },
                                tvlETH: y,
                                tvlUSD: y
                            }
                        }).compact().value();
                    return T
                }
            };
            B.ChainId.MAINNET, B.ChainId.OPTIMISM, B.ChainId.ARBITRUM_ONE, B.ChainId.POLYGON, B.ChainId.CELO, B.ChainId.GOERLI, B.ChainId.BNB, B.ChainId.AVALANCHE, B.ChainId.BASE;
            let V3SubgraphProviderWithFallBacks = class V3SubgraphProviderWithFallBacks {
                constructor(e) {
                    this.fallbacks = e
                }
                async getPools(e, t, n) {
                    for (let i = 0; i < this.fallbacks.length; i++) {
                        let p = this.fallbacks[i];
                        try {
                            let i = await p.getPools(e, t, n);
                            return i
                        } catch (e) {
                            L.info(`Failed to get subgraph pools for V3 from fallback #${i}`)
                        }
                    }
                    throw Error("Failed to get subgraph pools from any providers")
                }
            };
            var tG = n(63433);

            function _arrayLikeToArray(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function ownKeys(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n(2265), n(67133), n(16206), n(94706), n(76548), n(3897), n(14251), n(45735), n(71209), n(73993), n(54887), n(34001), n(97284), n(20400), n(63895), n(58996), n(74002), n(2336), n(36649), n(75298), n(66493), n(44896), n(41187), n(75163), n(78741), n(81023), n(50625);
            var tq = Object.values(B.ChainId).filter(function(e) {
                    return Number.isInteger(e)
                }),
                tV = new WeakMap;

            function _getQuoteResult() {
                return (_getQuoteResult = (0, M.Z)(D().mark(function _callee(e, t, n) {
                    var i, p, b, y, m, g, T, v, S, E, C, I;
                    return D().wrap(function(w) {
                        for (;;) switch (w.prev = w.next) {
                            case 0:
                                return i = e.tradeType, p = e.tokenIn, b = e.tokenOut, y = e.amount, m = Object.values(tG.S).includes(p.address), g = Object.values(tG.S).includes(b.address), T = m ? (0, tG.n)(p.chainId) : new B.Token(p.chainId, p.address, p.decimals, p.symbol), v = g ? (0, tG.n)(b.chainId) : new B.Token(b.chainId, b.address, b.decimals, b.symbol), S = (0, tG.i)(i) ? T : v, E = (0, tG.i)(i) ? v : T, C = B.CurrencyAmount.fromRawAmount(S, ee().BigInt(null != y ? y : "1")), w.next = 10, t.route(C, E, i, void 0, n);
                            case 10:
                                if (I = w.sent, y) {
                                    w.next = 13;
                                    break
                                }
                                return w.abrupt("return", {
                                    state: tG.Q.INITIALIZED
                                });
                            case 13:
                                if (I) {
                                    w.next = 15;
                                    break
                                }
                                return w.abrupt("return", {
                                    state: tG.Q.NOT_FOUND
                                });
                            case 15:
                                return w.abrupt("return", function(e) {
                                    var t, n = e.quote,
                                        i = e.quoteGasAdjusted,
                                        p = e.route,
                                        b = e.routeString,
                                        y = e.estimatedGasUsed,
                                        m = e.estimatedGasUsedQuoteToken,
                                        g = e.estimatedGasUsedUSD,
                                        T = e.gasPriceWei,
                                        v = e.methodParameters,
                                        S = e.blockNumber,
                                        E = e.trade,
                                        C = E.tradeType,
                                        I = E.inputAmount,
                                        w = E.outputAmount,
                                        A = [],
                                        _ = function(e, t) {
                                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!n) {
                                                if (Array.isArray(e) || (n = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return _arrayLikeToArray(e, t);
                                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(e, t)
                                                        }
                                                    }(e))) {
                                                    n && (e = n);
                                                    var i = 0,
                                                        F = function() {};
                                                    return {
                                                        s: F,
                                                        n: function() {
                                                            return i >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[i++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: F
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var p, b = !0,
                                                y = !1;
                                            return {
                                                s: function() {
                                                    n = n.call(e)
                                                },
                                                n: function() {
                                                    var e = n.next();
                                                    return b = e.done, e
                                                },
                                                e: function(e) {
                                                    y = !0, p = e
                                                },
                                                f: function() {
                                                    try {
                                                        b || null == n.return || n.return()
                                                    } finally {
                                                        if (y) throw p
                                                    }
                                                }
                                            }
                                        }(p);
                                    try {
                                        for (_.s(); !(t = _.n()).done;) {
                                            var R = t.value,
                                                k = R.amount,
                                                P = R.quote,
                                                O = R.tokenPath;
                                            if (R.protocol === et.Protocol.V3) {
                                                for (var M = R.route.pools, x = [], D = 0; D < M.length; D++) {
                                                    var B = M[D],
                                                        L = O[D],
                                                        N = O[D + 1],
                                                        U = void 0;
                                                    0 === D && (U = (0, tG.i)(C) ? k.quotient.toString() : P.quotient.toString());
                                                    var j = void 0;
                                                    D === M.length - 1 && (j = (0, tG.i)(C) ? P.quotient.toString() : k.quotient.toString()), x.push({
                                                        type: "v3-pool",
                                                        tokenIn: {
                                                            chainId: L.chainId,
                                                            decimals: L.decimals,
                                                            address: L.address,
                                                            symbol: L.symbol
                                                        },
                                                        tokenOut: {
                                                            chainId: N.chainId,
                                                            decimals: N.decimals,
                                                            address: N.address,
                                                            symbol: N.symbol
                                                        },
                                                        fee: B.fee.toString(),
                                                        liquidity: B.liquidity.toString(),
                                                        sqrtRatioX96: B.sqrtRatioX96.toString(),
                                                        tickCurrent: B.tickCurrent.toString(),
                                                        amountIn: U,
                                                        amountOut: j
                                                    })
                                                }
                                                A.push(x)
                                            } else if (R.protocol === et.Protocol.V2) {
                                                for (var G = R.route.pairs, q = [], V = 0; V < G.length; V++) {
                                                    var H = G[V],
                                                        $ = O[V],
                                                        W = O[V + 1],
                                                        Q = void 0;
                                                    0 === V && (Q = (0, tG.i)(C) ? k.quotient.toString() : P.quotient.toString());
                                                    var Y = void 0;
                                                    V === G.length - 1 && (Y = (0, tG.i)(C) ? P.quotient.toString() : k.quotient.toString());
                                                    var X = H.reserve0,
                                                        K = H.reserve1;
                                                    q.push({
                                                        type: "v2-pool",
                                                        tokenIn: {
                                                            chainId: $.chainId,
                                                            decimals: $.decimals,
                                                            address: $.address,
                                                            symbol: $.symbol
                                                        },
                                                        tokenOut: {
                                                            chainId: W.chainId,
                                                            decimals: W.decimals,
                                                            address: W.address,
                                                            symbol: W.symbol
                                                        },
                                                        reserve0: {
                                                            token: {
                                                                chainId: X.currency.wrapped.chainId,
                                                                decimals: X.currency.wrapped.decimals,
                                                                address: X.currency.wrapped.address,
                                                                symbol: X.currency.wrapped.symbol
                                                            },
                                                            quotient: X.quotient.toString()
                                                        },
                                                        reserve1: {
                                                            token: {
                                                                chainId: K.currency.wrapped.chainId,
                                                                decimals: K.currency.wrapped.decimals,
                                                                address: K.currency.wrapped.address,
                                                                symbol: K.currency.wrapped.symbol
                                                            },
                                                            quotient: K.quotient.toString()
                                                        },
                                                        amountIn: Q,
                                                        amountOut: Y
                                                    })
                                                }
                                                A.push(q)
                                            }
                                        }
                                    } catch (e) {
                                        _.e(e)
                                    } finally {
                                        _.f()
                                    }
                                    var z = (0, tG.i)(C) ? I : w;
                                    return {
                                        state: tG.Q.SUCCESS,
                                        data: {
                                            methodParameters: v,
                                            blockNumber: S.toString(),
                                            amount: z.quotient.toString(),
                                            amountDecimals: z.toExact(),
                                            quote: n.quotient.toString(),
                                            quoteDecimals: n.toExact(),
                                            quoteGasAdjusted: i.quotient.toString(),
                                            quoteGasAdjustedDecimals: i.toExact(),
                                            gasUseEstimateQuote: m.quotient.toString(),
                                            gasUseEstimateQuoteDecimals: m.toExact(),
                                            gasUseEstimate: y.toString(),
                                            gasUseEstimateUSD: g.toExact(),
                                            gasPriceWei: T.toString(),
                                            route: A,
                                            routeString: b
                                        }
                                    }
                                }(_objectSpread(_objectSpread({}, I), {}, {
                                    routeString: routeAmountsToString(I.route)
                                })));
                            case 16:
                            case "end":
                                return w.stop()
                        }
                    }, _callee)
                }))).apply(this, arguments)
            }

            function getClientSideQuoteResult(e, t) {
                return _getClientSideQuoteResult.apply(this, arguments)
            }

            function _getClientSideQuoteResult() {
                return (_getClientSideQuoteResult = (0, M.Z)(D().mark(function _callee2(e, t) {
                    var n, i, p, b, y, m, g, T, v, S, E, C;
                    return D().wrap(function(I) {
                        for (;;) switch (I.prev = I.next) {
                            case 0:
                                var w;
                                if (n = e.tokenInAddress, i = e.tokenInChainId, p = e.tokenInDecimals, b = e.tokenInSymbol, y = e.tokenOutAddress, m = e.tokenOutChainId, g = e.tokenOutDecimals, T = e.tokenOutSymbol, v = e.amount, S = e.tradeType, E = e.provider, (w = i) && tq.includes(w)) {
                                    I.next = 3;
                                    break
                                }
                                throw Error("Router does not support this token's chain (chainId: ".concat(i, ")."));
                            case 3:
                                return C = function(e, t) {
                                    var n, i, p, b = tV.get(t) || {},
                                        y = b[e];
                                    if (y) return y;
                                    e !== B.ChainId.MAINNET && (n = new StaticV2SubgraphProvider(e)), [B.ChainId.POLYGON, B.ChainId.POLYGON_MUMBAI].includes(e) && (p = new UniswapMulticallProvider(e, t, 375e3), i = new OnChainQuoteProvider(e, t, p, {
                                        retries: 2,
                                        minTimeout: 100,
                                        maxTimeout: 1e3
                                    }, {
                                        multicallChunk: 10,
                                        gasLimitPerCall: 5e6,
                                        quoteMinSuccessRate: .1
                                    }, {
                                        gasLimitOverride: 5e6,
                                        multicallChunk: 5
                                    }, {
                                        gasLimitOverride: 625e4,
                                        multicallChunk: 4
                                    }));
                                    var m = new AlphaRouter({
                                        chainId: e,
                                        provider: t,
                                        v2SubgraphProvider: n,
                                        multicall2Provider: p,
                                        onChainQuoteProvider: i
                                    });
                                    return b[e] = m, tV.set(t, b), m
                                }(i, E), I.abrupt("return", function(e, t, n) {
                                    return _getQuoteResult.apply(this, arguments)
                                }({
                                    tradeType: S,
                                    tokenIn: {
                                        address: n,
                                        chainId: i,
                                        decimals: p,
                                        symbol: b
                                    },
                                    tokenOut: {
                                        address: y,
                                        chainId: m,
                                        decimals: g,
                                        symbol: T
                                    },
                                    amount: v
                                }, C, t));
                            case 5:
                            case "end":
                                return I.stop()
                        }
                    }, _callee2)
                }))).apply(this, arguments)
            }
        },
        38148: function(e, t, n) {
            var i = n(87793);
            e.exports = function(e, t) {
                return new Promise(function(n, p) {
                    var b, y = t || {};

                    function bail(e) {
                        p(e || Error("Aborted"))
                    }

                    function onError(e, t) {
                        if (e.bail) {
                            bail(e);
                            return
                        }
                        b.retry(e) ? y.onRetry && y.onRetry(e, t) : p(b.mainError())
                    }
                    "randomize" in y || (y.randomize = !0), (b = i.operation(y)).attempt(function(t) {
                        var i;
                        try {
                            i = e(bail, t)
                        } catch (e) {
                            onError(e, t);
                            return
                        }
                        Promise.resolve(i).then(n).catch(function(e) {
                            onError(e, t)
                        })
                    })
                })
            }
        },
        78556: function(e, t, n) {
            let {
                promiseFinally: i,
                toError: p
            } = n(79516);
            e.exports = class Timeout {
                static set(e, t) {
                    return new Timeout().set(e, t)
                }
                static wrap(e, t, n) {
                    return new Timeout().wrap(e, t, n)
                }
                constructor() {
                    this._id = null, this._delay = null
                }
                get id() {
                    return this._id
                }
                get delay() {
                    return this._delay
                }
                set(e, t = "") {
                    return new Promise((n, i) => {
                        this.clear();
                        let b = t ? () => i(p(t)) : n;
                        this._id = setTimeout(b, e), this._delay = e
                    })
                }
                wrap(e, t, n = "") {
                    let p = i(e, () => this.clear()),
                        b = this.set(t, n);
                    return Promise.race([p, b])
                }
                clear() {
                    this._id && clearTimeout(this._id)
                }
            }
        },
        79516: function(e, t) {
            t.promiseFinally = (e, t) => Promise.resolve(e).then(e => (t(), e), e => (t(), Promise.reject(e))), t.toError = e => "string" == typeof(e = "function" == typeof e ? e() : e) ? Error(e) : e
        },
        81630: function(e, t, n) {
            e.exports = n(91028)
        },
        60323: function(e, t, n) {
            "use strict";
            var i = n(82569),
                p = n(54420),
                b = n(87638),
                y = n(7832),
                m = n(36738),
                g = n(66802),
                T = n(86802),
                v = n(71195);
            e.exports = function(e) {
                return new Promise(function(t, n) {
                    var S = e.data,
                        E = e.headers,
                        C = e.responseType;
                    i.isFormData(S) && delete E["Content-Type"];
                    var I = new XMLHttpRequest;
                    if (e.auth) {
                        var w = e.auth.username || "",
                            A = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        E.Authorization = "Basic " + btoa(w + ":" + A)
                    }
                    var _ = m(e.baseURL, e.url);

                    function onloadend() {
                        if (I) {
                            var i = "getAllResponseHeaders" in I ? g(I.getAllResponseHeaders()) : null;
                            p(t, n, {
                                data: C && "text" !== C && "json" !== C ? I.response : I.responseText,
                                status: I.status,
                                statusText: I.statusText,
                                headers: i,
                                config: e,
                                request: I
                            }), I = null
                        }
                    }
                    if (I.open(e.method.toUpperCase(), y(_, e.params, e.paramsSerializer), !0), I.timeout = e.timeout, "onloadend" in I ? I.onloadend = onloadend : I.onreadystatechange = function() {
                            I && 4 === I.readyState && (0 !== I.status || I.responseURL && 0 === I.responseURL.indexOf("file:")) && setTimeout(onloadend)
                        }, I.onabort = function() {
                            I && (n(v("Request aborted", e, "ECONNABORTED", I)), I = null)
                        }, I.onerror = function() {
                            n(v("Network Error", e, null, I)), I = null
                        }, I.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(v(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", I)), I = null
                        }, i.isStandardBrowserEnv()) {
                        var R = (e.withCredentials || T(_)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                        R && (E[e.xsrfHeaderName] = R)
                    }
                    "setRequestHeader" in I && i.forEach(E, function(e, t) {
                        void 0 === S && "content-type" === t.toLowerCase() ? delete E[t] : I.setRequestHeader(t, e)
                    }), i.isUndefined(e.withCredentials) || (I.withCredentials = !!e.withCredentials), C && "json" !== C && (I.responseType = e.responseType), "function" == typeof e.onDownloadProgress && I.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && I.upload && I.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                        I && (I.abort(), n(e), I = null)
                    }), S || (S = null), I.send(S)
                })
            }
        },
        91028: function(e, t, n) {
            "use strict";
            var i = n(82569),
                p = n(46875),
                b = n(71690),
                y = n(40872);

            function createInstance(e) {
                var t = new b(e),
                    n = p(b.prototype.request, t);
                return i.extend(n, b.prototype, t), i.extend(n, t), n
            }
            var m = createInstance(n(66043));
            m.Axios = b, m.create = function(e) {
                return createInstance(y(m.defaults, e))
            }, m.Cancel = n(45134), m.CancelToken = n(23947), m.isCancel = n(13704), m.all = function(e) {
                return Promise.all(e)
            }, m.spread = n(85332), m.isAxiosError = n(92466), e.exports = m, e.exports.default = m
        },
        45134: function(e) {
            "use strict";

            function Cancel(e) {
                this.message = e
            }
            Cancel.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, Cancel.prototype.__CANCEL__ = !0, e.exports = Cancel
        },
        23947: function(e, t, n) {
            "use strict";
            var i = n(45134);

            function CancelToken(e) {
                if ("function" != typeof e) throw TypeError("executor must be a function.");
                this.promise = new Promise(function(e) {
                    t = e
                });
                var t, n = this;
                e(function(e) {
                    n.reason || (n.reason = new i(e), t(n.reason))
                })
            }
            CancelToken.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, CancelToken.source = function() {
                var e;
                return {
                    token: new CancelToken(function(t) {
                        e = t
                    }),
                    cancel: e
                }
            }, e.exports = CancelToken
        },
        13704: function(e) {
            "use strict";
            e.exports = function(e) {
                return !!(e && e.__CANCEL__)
            }
        },
        71690: function(e, t, n) {
            "use strict";
            var i = n(82569),
                p = n(7832),
                b = n(32715),
                y = n(1408),
                m = n(40872),
                g = n(76783),
                T = g.validators;

            function Axios(e) {
                this.defaults = e, this.interceptors = {
                    request: new b,
                    response: new b
                }
            }
            Axios.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, (e = m(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t, n = e.transitional;
                void 0 !== n && g.assertOptions(n, {
                    silentJSONParsing: T.transitional(T.boolean, "1.0.0"),
                    forcedJSONParsing: T.transitional(T.boolean, "1.0.0"),
                    clarifyTimeoutError: T.transitional(T.boolean, "1.0.0")
                }, !1);
                var i = [],
                    p = !0;
                this.interceptors.request.forEach(function(t) {
                    ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && (p = p && t.synchronous, i.unshift(t.fulfilled, t.rejected))
                });
                var b = [];
                if (this.interceptors.response.forEach(function(e) {
                        b.push(e.fulfilled, e.rejected)
                    }), !p) {
                    var v = [y, void 0];
                    for (Array.prototype.unshift.apply(v, i), v = v.concat(b), t = Promise.resolve(e); v.length;) t = t.then(v.shift(), v.shift());
                    return t
                }
                for (var S = e; i.length;) {
                    var E = i.shift(),
                        C = i.shift();
                    try {
                        S = E(S)
                    } catch (e) {
                        C(e);
                        break
                    }
                }
                try {
                    t = y(S)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (; b.length;) t = t.then(b.shift(), b.shift());
                return t
            }, Axios.prototype.getUri = function(e) {
                return p((e = m(this.defaults, e)).url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, i.forEach(["delete", "get", "head", "options"], function(e) {
                Axios.prototype[e] = function(t, n) {
                    return this.request(m(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            }), i.forEach(["post", "put", "patch"], function(e) {
                Axios.prototype[e] = function(t, n, i) {
                    return this.request(m(i || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            }), e.exports = Axios
        },
        32715: function(e, t, n) {
            "use strict";
            var i = n(82569);

            function InterceptorManager() {
                this.handlers = []
            }
            InterceptorManager.prototype.use = function(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }, InterceptorManager.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, InterceptorManager.prototype.forEach = function(e) {
                i.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }, e.exports = InterceptorManager
        },
        36738: function(e, t, n) {
            "use strict";
            var i = n(59842),
                p = n(62331);
            e.exports = function(e, t) {
                return e && !i(t) ? p(e, t) : t
            }
        },
        71195: function(e, t, n) {
            "use strict";
            var i = n(81075);
            e.exports = function(e, t, n, p, b) {
                return i(Error(e), t, n, p, b)
            }
        },
        1408: function(e, t, n) {
            "use strict";
            var i = n(82569),
                p = n(28217),
                b = n(13704),
                y = n(66043);

            function throwIfCancellationRequested(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return throwIfCancellationRequested(e), e.headers = e.headers || {}, e.data = p.call(e, e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                    delete e.headers[t]
                }), (e.adapter || y.adapter)(e).then(function(t) {
                    return throwIfCancellationRequested(e), t.data = p.call(e, t.data, t.headers, e.transformResponse), t
                }, function(t) {
                    return !b(t) && (throwIfCancellationRequested(e), t && t.response && (t.response.data = p.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                })
            }
        },
        81075: function(e) {
            "use strict";
            e.exports = function(e, t, n, i, p) {
                return e.config = t, n && (e.code = n), e.request = i, e.response = p, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        },
        40872: function(e, t, n) {
            "use strict";
            var i = n(82569);
            e.exports = function(e, t) {
                t = t || {};
                var n = {},
                    p = ["url", "method", "data"],
                    b = ["headers", "auth", "proxy", "params"],
                    y = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    m = ["validateStatus"];

                function getMergedValue(e, t) {
                    return i.isPlainObject(e) && i.isPlainObject(t) ? i.merge(e, t) : i.isPlainObject(t) ? i.merge({}, t) : i.isArray(t) ? t.slice() : t
                }

                function mergeDeepProperties(p) {
                    i.isUndefined(t[p]) ? i.isUndefined(e[p]) || (n[p] = getMergedValue(void 0, e[p])) : n[p] = getMergedValue(e[p], t[p])
                }
                i.forEach(p, function(e) {
                    i.isUndefined(t[e]) || (n[e] = getMergedValue(void 0, t[e]))
                }), i.forEach(b, mergeDeepProperties), i.forEach(y, function(p) {
                    i.isUndefined(t[p]) ? i.isUndefined(e[p]) || (n[p] = getMergedValue(void 0, e[p])) : n[p] = getMergedValue(void 0, t[p])
                }), i.forEach(m, function(i) {
                    i in t ? n[i] = getMergedValue(e[i], t[i]) : i in e && (n[i] = getMergedValue(void 0, e[i]))
                });
                var g = p.concat(b).concat(y).concat(m),
                    T = Object.keys(e).concat(Object.keys(t)).filter(function(e) {
                        return -1 === g.indexOf(e)
                    });
                return i.forEach(T, mergeDeepProperties), n
            }
        },
        54420: function(e, t, n) {
            "use strict";
            var i = n(71195);
            e.exports = function(e, t, n) {
                var p = n.config.validateStatus;
                !n.status || !p || p(n.status) ? e(n) : t(i("Request failed with status code " + n.status, n.config, null, n.request, n))
            }
        },
        28217: function(e, t, n) {
            "use strict";
            var i = n(82569),
                p = n(66043);
            e.exports = function(e, t, n) {
                var b = this || p;
                return i.forEach(n, function(n) {
                    e = n.call(b, e, t)
                }), e
            }
        },
        66043: function(e, t, n) {
            "use strict";
            var i, p = n(25566),
                b = n(82569),
                y = n(27212),
                m = n(81075),
                g = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function setContentTypeIfUnset(e, t) {
                !b.isUndefined(e) && b.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var T = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: ("undefined" != typeof XMLHttpRequest ? i = n(60323) : void 0 !== p && "[object process]" === Object.prototype.toString.call(p) && (i = n(60323)), i),
                transformRequest: [function(e, t) {
                    return (y(t, "Accept"), y(t, "Content-Type"), b.isFormData(e) || b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e)) ? e : b.isArrayBufferView(e) ? e.buffer : b.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : b.isObject(e) || t && "application/json" === t["Content-Type"] ? (setContentTypeIfUnset(t, "application/json"), function(e, t, n) {
                        if (b.isString(e)) try {
                            return (0, JSON.parse)(e), b.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name) throw e
                        }
                        return (0, JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function(e) {
                    var t = this.transitional,
                        n = t && t.silentJSONParsing,
                        i = t && t.forcedJSONParsing,
                        p = !n && "json" === this.responseType;
                    if (p || i && b.isString(e) && e.length) try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (p) {
                            if ("SyntaxError" === e.name) throw m(e, this, "E_JSON_PARSE");
                            throw e
                        }
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            T.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, b.forEach(["delete", "get", "head"], function(e) {
                T.headers[e] = {}
            }), b.forEach(["post", "put", "patch"], function(e) {
                T.headers[e] = b.merge(g)
            }), e.exports = T
        },
        46875: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
                    return e.apply(t, n)
                }
            }
        },
        7832: function(e, t, n) {
            "use strict";
            var i = n(82569);

            function encode(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t) return e;
                if (n) p = n(t);
                else if (i.isURLSearchParams(t)) p = t.toString();
                else {
                    var p, b = [];
                    i.forEach(t, function(e, t) {
                        null != e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function(e) {
                            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), b.push(encode(t) + "=" + encode(e))
                        }))
                    }), p = b.join("&")
                }
                if (p) {
                    var y = e.indexOf("#"); - 1 !== y && (e = e.slice(0, y)), e += (-1 === e.indexOf("?") ? "?" : "&") + p
                }
                return e
            }
        },
        62331: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        87638: function(e, t, n) {
            "use strict";
            var i = n(82569);
            e.exports = i.isStandardBrowserEnv() ? {
                write: function(e, t, n, p, b, y) {
                    var m = [];
                    m.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && m.push("expires=" + new Date(n).toGMTString()), i.isString(p) && m.push("path=" + p), i.isString(b) && m.push("domain=" + b), !0 === y && m.push("secure"), document.cookie = m.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        59842: function(e) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        92466: function(e) {
            "use strict";
            e.exports = function(e) {
                return "object" == typeof e && !0 === e.isAxiosError
            }
        },
        86802: function(e, t, n) {
            "use strict";
            var i = n(82569);
            e.exports = i.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function resolveURL(e) {
                    var i = e;
                    return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = resolveURL(window.location.href),
                    function(t) {
                        var n = i.isString(t) ? resolveURL(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        27212: function(e, t, n) {
            "use strict";
            var i = n(82569);
            e.exports = function(e, t) {
                i.forEach(e, function(n, i) {
                    i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i])
                })
            }
        },
        66802: function(e, t, n) {
            "use strict";
            var i = n(82569),
                p = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, b, y = {};
                return e && i.forEach(e.split("\n"), function(e) {
                    b = e.indexOf(":"), t = i.trim(e.substr(0, b)).toLowerCase(), n = i.trim(e.substr(b + 1)), t && !(y[t] && p.indexOf(t) >= 0) && ("set-cookie" === t ? y[t] = (y[t] ? y[t] : []).concat([n]) : y[t] = y[t] ? y[t] + ", " + n : n)
                }), y
            }
        },
        85332: function(e) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        76783: function(e, t, n) {
            "use strict";
            var i = n(23445),
                p = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
                p[e] = function(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            });
            var b = {},
                y = i.version.split(".");

            function isOlderVersion(e, t) {
                for (var n = t ? t.split(".") : y, i = e.split("."), p = 0; p < 3; p++) {
                    if (n[p] > i[p]) return !0;
                    if (n[p] < i[p]) break
                }
                return !1
            }
            p.transitional = function(e, t, n) {
                var p = t && isOlderVersion(t);

                function formatMessage(e, t) {
                    return "[Axios v" + i.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return function(n, i, y) {
                    if (!1 === e) throw Error(formatMessage(i, " has been removed in " + t));
                    return p && !b[i] && (b[i] = !0, console.warn(formatMessage(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, y)
                }
            }, e.exports = {
                isOlderVersion: isOlderVersion,
                assertOptions: function(e, t, n) {
                    if ("object" != typeof e) throw TypeError("options must be an object");
                    for (var i = Object.keys(e), p = i.length; p-- > 0;) {
                        var b = i[p],
                            y = t[b];
                        if (y) {
                            var m = e[b],
                                g = void 0 === m || y(m, b, e);
                            if (!0 !== g) throw TypeError("option " + b + " must be " + g);
                            continue
                        }
                        if (!0 !== n) throw Error("Unknown option " + b)
                    }
                },
                validators: p
            }
        },
        82569: function(e, t, n) {
            "use strict";
            var i = n(46875),
                p = Object.prototype.toString;

            function isArray(e) {
                return "[object Array]" === p.call(e)
            }

            function isUndefined(e) {
                return void 0 === e
            }

            function isObject(e) {
                return null !== e && "object" == typeof e
            }

            function isPlainObject(e) {
                if ("[object Object]" !== p.call(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function isFunction(e) {
                return "[object Function]" === p.call(e)
            }

            function forEach(e, t) {
                if (null != e) {
                    if ("object" != typeof e && (e = [e]), isArray(e))
                        for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                    else
                        for (var p in e) Object.prototype.hasOwnProperty.call(e, p) && t.call(null, e[p], p, e)
                }
            }
            e.exports = {
                isArray: isArray,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === p.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !isUndefined(e) && null !== e.constructor && !isUndefined(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: isObject,
                isPlainObject: isPlainObject,
                isUndefined: isUndefined,
                isDate: function(e) {
                    return "[object Date]" === p.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === p.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === p.call(e)
                },
                isFunction: isFunction,
                isStream: function(e) {
                    return isObject(e) && isFunction(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: forEach,
                merge: function merge() {
                    var e = {};

                    function assignValue(t, n) {
                        isPlainObject(e[n]) && isPlainObject(t) ? e[n] = merge(e[n], t) : isPlainObject(t) ? e[n] = merge({}, t) : isArray(t) ? e[n] = t.slice() : e[n] = t
                    }
                    for (var t = 0, n = arguments.length; t < n; t++) forEach(arguments[t], assignValue);
                    return e
                },
                extend: function(e, t, n) {
                    return forEach(t, function(t, p) {
                        n && "function" == typeof t ? e[p] = i(t, n) : e[p] = t
                    }), e
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                }
            }
        },
        66380: function(e, t, n) {
            var i = n(67133).Buffer,
                p = function() {
                    "use strict";
                    var e, t, n;

                    function _instanceof(e, t) {
                        return null != t && e instanceof t
                    }
                    try {
                        e = Map
                    } catch (t) {
                        e = function() {}
                    }
                    try {
                        t = Set
                    } catch (e) {
                        t = function() {}
                    }
                    try {
                        n = Promise
                    } catch (e) {
                        n = function() {}
                    }

                    function clone(p, b, y, m, g) {
                        "object" == typeof b && (y = b.depth, m = b.prototype, g = b.includeNonEnumerable, b = b.circular);
                        var T = [],
                            v = [],
                            S = void 0 !== i;
                        return void 0 === b && (b = !0), void 0 === y && (y = 1 / 0),
                            function _clone(p, y) {
                                if (null === p) return null;
                                if (0 === y || "object" != typeof p) return p;
                                if (_instanceof(p, e)) E = new e;
                                else if (_instanceof(p, t)) E = new t;
                                else if (_instanceof(p, n)) E = new n(function(e, t) {
                                    p.then(function(t) {
                                        e(_clone(t, y - 1))
                                    }, function(e) {
                                        t(_clone(e, y - 1))
                                    })
                                });
                                else if (clone.__isArray(p)) E = [];
                                else if (clone.__isRegExp(p)) E = new RegExp(p.source, __getRegExpFlags(p)), p.lastIndex && (E.lastIndex = p.lastIndex);
                                else if (clone.__isDate(p)) E = new Date(p.getTime());
                                else {
                                    if (S && i.isBuffer(p)) return E = i.allocUnsafe ? i.allocUnsafe(p.length) : new i(p.length), p.copy(E), E;
                                    _instanceof(p, Error) ? E = Object.create(p) : void 0 === m ? E = Object.create(C = Object.getPrototypeOf(p)) : (E = Object.create(m), C = m)
                                }
                                if (b) {
                                    var E, C, I, w = T.indexOf(p);
                                    if (-1 != w) return v[w];
                                    T.push(p), v.push(E)
                                }
                                for (var A in _instanceof(p, e) && p.forEach(function(e, t) {
                                        var n = _clone(t, y - 1),
                                            i = _clone(e, y - 1);
                                        E.set(n, i)
                                    }), _instanceof(p, t) && p.forEach(function(e) {
                                        var t = _clone(e, y - 1);
                                        E.add(t)
                                    }), p) C && (I = Object.getOwnPropertyDescriptor(C, A)), I && null == I.set || (E[A] = _clone(p[A], y - 1));
                                if (Object.getOwnPropertySymbols)
                                    for (var _ = Object.getOwnPropertySymbols(p), A = 0; A < _.length; A++) {
                                        var R = _[A],
                                            k = Object.getOwnPropertyDescriptor(p, R);
                                        (!k || k.enumerable || g) && (E[R] = _clone(p[R], y - 1), k.enumerable || Object.defineProperty(E, R, {
                                            enumerable: !1
                                        }))
                                    }
                                if (g)
                                    for (var P = Object.getOwnPropertyNames(p), A = 0; A < P.length; A++) {
                                        var O = P[A],
                                            k = Object.getOwnPropertyDescriptor(p, O);
                                        k && k.enumerable || (E[O] = _clone(p[O], y - 1), Object.defineProperty(E, O, {
                                            enumerable: !1
                                        }))
                                    }
                                return E
                            }(p, y)
                    }

                    function __objToStr(e) {
                        return Object.prototype.toString.call(e)
                    }

                    function __getRegExpFlags(e) {
                        var t = "";
                        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
                    }
                    return clone.clonePrototype = function(e) {
                        if (null === e) return null;
                        var c = function() {};
                        return c.prototype = e, new c
                    }, clone.__objToStr = __objToStr, clone.__isDate = function(e) {
                        return "object" == typeof e && "[object Date]" === __objToStr(e)
                    }, clone.__isArray = function(e) {
                        return "object" == typeof e && "[object Array]" === __objToStr(e)
                    }, clone.__isRegExp = function(e) {
                        return "object" == typeof e && "[object RegExp]" === __objToStr(e)
                    }, clone.__getRegExpFlags = __getRegExpFlags, clone
                }();
            e.exports && (e.exports = p)
        },
        68375: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = e.uri,
                    n = e.name,
                    i = e.type;
                this.uri = t, this.name = n, this.type = i
            }
        },
        3436: function(e, t, n) {
            "use strict";
            var i = n(43670);
            e.exports = function extractFiles(e, t, n) {
                void 0 === t && (t = ""), void 0 === n && (n = i);
                var p, b = new Map;

                function addFile(e, t) {
                    var n = b.get(t);
                    n ? n.push.apply(n, e) : b.set(t, e)
                }
                if (n(e)) p = null, addFile([t], e);
                else {
                    var y = t ? t + "." : "";
                    if ("undefined" != typeof FileList && e instanceof FileList) p = Array.prototype.map.call(e, function(e, t) {
                        return addFile(["" + y + t], e), null
                    });
                    else if (Array.isArray(e)) p = e.map(function(e, t) {
                        var i = extractFiles(e, "" + y + t, n);
                        return i.files.forEach(addFile), i.clone
                    });
                    else if (e && e.constructor === Object)
                        for (var m in p = {}, e) {
                            var g = extractFiles(e[m], "" + y + m, n);
                            g.files.forEach(addFile), p[m] = g.clone
                        } else p = e
                }
                return {
                    clone: p,
                    files: b
                }
            }
        },
        96345: function(e, t, n) {
            "use strict";
            t.ReactNativeFile = n(68375), t.extractFiles = n(3436), t.isExtractableFile = n(43670)
        },
        43670: function(e, t, n) {
            "use strict";
            var i = n(68375);
            e.exports = function(e) {
                return "undefined" != typeof File && e instanceof File || "undefined" != typeof Blob && e instanceof Blob || e instanceof i
            }
        },
        11549: function(e, t, n) {
            "use strict";
            var i = n(18339),
                p = Object.prototype.toString,
                b = Object.prototype.hasOwnProperty,
                forEachArray = function(e, t, n) {
                    for (var i = 0, p = e.length; i < p; i++) b.call(e, i) && (null == n ? t(e[i], i, e) : t.call(n, e[i], i, e))
                },
                forEachString = function(e, t, n) {
                    for (var i = 0, p = e.length; i < p; i++) null == n ? t(e.charAt(i), i, e) : t.call(n, e.charAt(i), i, e)
                },
                forEachObject = function(e, t, n) {
                    for (var i in e) b.call(e, i) && (null == n ? t(e[i], i, e) : t.call(n, e[i], i, e))
                };
            e.exports = function(e, t, n) {
                var b;
                if (!i(t)) throw TypeError("iterator must be a function");
                arguments.length >= 3 && (b = n), "[object Array]" === p.call(e) ? forEachArray(e, t, b) : "string" == typeof e ? forEachString(e, t, b) : forEachObject(e, t, b)
            }
        },
        65053: function(e) {
            e.exports = "object" == typeof self ? self.FormData : window.FormData
        },
        71324: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var p = n(96345),
                b = i(n(65053)),
                isExtractableFileEnhanced = function(e) {
                    return p.isExtractableFile(e) || null !== e && "object" == typeof e && "function" == typeof e.pipe
                };
            t.default = function(e, t, n) {
                var i = p.extractFiles({
                        query: e,
                        variables: t,
                        operationName: n
                    }, "", isExtractableFileEnhanced),
                    y = i.clone,
                    m = i.files;
                if (0 === m.size) {
                    if (!Array.isArray(e)) return JSON.stringify(y);
                    if (void 0 !== t && !Array.isArray(t)) throw Error("Cannot create request body with given variable type, array expected");
                    return JSON.stringify(e.reduce(function(e, n, i) {
                        return e.push({
                            query: n,
                            variables: t ? t[i] : void 0
                        }), e
                    }, []))
                }
                var g = new("undefined" == typeof FormData ? b.default : FormData);
                g.append("operations", JSON.stringify(y));
                var T = {},
                    v = 0;
                return m.forEach(function(e) {
                    T[++v] = e
                }), g.append("map", JSON.stringify(T)), v = 0, m.forEach(function(e, t) {
                    g.append("" + ++v, t)
                }), g
            }
        },
        10056: function(e, t, n) {
            "use strict";
            var i = this && this.__assign || function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var p in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, p) && (e[p] = t[p]);
                        return e
                    }).apply(this, arguments)
                },
                p = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n), Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                b = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                y = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && p(t, e, n);
                    return b(t, e), t
                },
                m = this && this.__awaiter || function(e, t, n, i) {
                    return new(n || (n = Promise))(function(p, b) {
                        function fulfilled(e) {
                            try {
                                step(i.next(e))
                            } catch (e) {
                                b(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(i.throw(e))
                            } catch (e) {
                                b(e)
                            }
                        }

                        function step(e) {
                            var t;
                            e.done ? p(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t)
                            })).then(fulfilled, rejected)
                        }
                        step((i = i.apply(e, t || [])).next())
                    })
                },
                g = this && this.__generator || function(e, t) {
                    var n, i, p, b, y = {
                        label: 0,
                        sent: function() {
                            if (1 & p[0]) throw p[1];
                            return p[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return b = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (b[Symbol.iterator] = function() {
                        return this
                    }), b;

                    function verb(b) {
                        return function(m) {
                            return function(b) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; y;) try {
                                    if (n = 1, i && (p = 2 & b[0] ? i.return : b[0] ? i.throw || ((p = i.return) && p.call(i), 0) : i.next) && !(p = p.call(i, b[1])).done) return p;
                                    switch (i = 0, p && (b = [2 & b[0], p.value]), b[0]) {
                                        case 0:
                                        case 1:
                                            p = b;
                                            break;
                                        case 4:
                                            return y.label++, {
                                                value: b[1],
                                                done: !1
                                            };
                                        case 5:
                                            y.label++, i = b[1], b = [0];
                                            continue;
                                        case 7:
                                            b = y.ops.pop(), y.trys.pop();
                                            continue;
                                        default:
                                            if (!(p = (p = y.trys).length > 0 && p[p.length - 1]) && (6 === b[0] || 2 === b[0])) {
                                                y = 0;
                                                continue
                                            }
                                            if (3 === b[0] && (!p || b[1] > p[0] && b[1] < p[3])) {
                                                y.label = b[1];
                                                break
                                            }
                                            if (6 === b[0] && y.label < p[1]) {
                                                y.label = p[1], p = b;
                                                break
                                            }
                                            if (p && y.label < p[2]) {
                                                y.label = p[2], y.ops.push(b);
                                                break
                                            }
                                            p[2] && y.ops.pop(), y.trys.pop();
                                            continue
                                    }
                                    b = t.call(e, y)
                                } catch (e) {
                                    b = [6, e], i = 0
                                } finally {
                                    n = p = 0
                                }
                                if (5 & b[0]) throw b[1];
                                return {
                                    value: b[0] ? b[1] : void 0,
                                    done: !0
                                }
                            }([b, m])
                        }
                    }
                },
                T = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var p = 0, i = Object.getOwnPropertySymbols(e); p < i.length; p++) 0 > t.indexOf(i[p]) && Object.prototype.propertyIsEnumerable.call(e, i[p]) && (n[i[p]] = e[i[p]]);
                    return n
                },
                v = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.gql = t.batchRequests = t.request = t.rawRequest = t.GraphQLClient = t.ClientError = void 0;
            var S = y(n(9366)),
                E = n(8782),
                C = v(n(71324)),
                I = n(46761);
            Object.defineProperty(t, "ClientError", {
                enumerable: !0,
                get: function() {
                    return I.ClientError
                }
            });
            var resolveHeaders = function(e) {
                    var t, n = {};
                    return e && ("undefined" != typeof Headers && e instanceof Headers || e instanceof S.Headers ? (t = {}, e.forEach(function(e, n) {
                        t[n] = e
                    }), n = t) : Array.isArray(e) ? e.forEach(function(e) {
                        var t = e[0],
                            i = e[1];
                        n[t] = i
                    }) : n = e), n
                },
                queryCleanner = function(e) {
                    return e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim()
                },
                buildGetQueryParams = function(e) {
                    var t = e.query,
                        n = e.variables,
                        i = e.operationName;
                    if (!Array.isArray(t)) {
                        var p = ["query=" + encodeURIComponent(queryCleanner(t))];
                        return n && p.push("variables=" + encodeURIComponent(JSON.stringify(n))), i && p.push("operationName=" + encodeURIComponent(i)), p.join("&")
                    }
                    if (void 0 !== n && !Array.isArray(n)) throw Error("Cannot create query with given variable type, array expected");
                    return "query=" + encodeURIComponent(JSON.stringify(t.reduce(function(e, t, i) {
                        return e.push({
                            query: queryCleanner(t),
                            variables: n ? JSON.stringify(n[i]) : void 0
                        }), e
                    }, [])))
                },
                post = function(e) {
                    var t = e.url,
                        n = e.query,
                        p = e.variables,
                        b = e.operationName,
                        y = e.headers,
                        T = e.fetch,
                        v = e.fetchOptions;
                    return m(void 0, void 0, void 0, function() {
                        var e;
                        return g(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return e = C.default(n, p, b), [4, T(t, i({
                                        method: "POST",
                                        headers: i(i({}, "string" == typeof e ? {
                                            "Content-Type": "application/json"
                                        } : {}), y),
                                        body: e
                                    }, v))];
                                case 1:
                                    return [2, m.sent()]
                            }
                        })
                    })
                },
                get = function(e) {
                    var t = e.url,
                        n = e.query,
                        p = e.variables,
                        b = e.operationName,
                        y = e.headers,
                        T = e.fetch,
                        v = e.fetchOptions;
                    return m(void 0, void 0, void 0, function() {
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, T(t + "?" + buildGetQueryParams({
                                        query: n,
                                        variables: p,
                                        operationName: b
                                    }), i({
                                        method: "GET",
                                        headers: y
                                    }, v))];
                                case 1:
                                    return [2, e.sent()]
                            }
                        })
                    })
                },
                w = function() {
                    function GraphQLClient(e, t) {
                        this.url = e, this.options = t || {}
                    }
                    return GraphQLClient.prototype.rawRequest = function(e, t, n) {
                        var p = this.options,
                            b = p.headers,
                            y = p.fetch,
                            m = void 0 === y ? S.default : y,
                            g = p.method,
                            v = T(p, ["headers", "fetch", "method"]);
                        return makeRequest({
                            url: this.url,
                            query: e,
                            variables: t,
                            headers: i(i({}, resolveHeaders(b)), resolveHeaders(n)),
                            operationName: void 0,
                            fetch: m,
                            method: void 0 === g ? "POST" : g,
                            fetchOptions: v
                        })
                    }, GraphQLClient.prototype.request = function(e, t, n) {
                        return m(this, void 0, void 0, function() {
                            var p, b, y, m, v, E, C, I, w, A, _;
                            return g(this, function(g) {
                                switch (g.label) {
                                    case 0:
                                        return b = (p = this.options).headers, m = void 0 === (y = p.fetch) ? S.default : y, E = void 0 === (v = p.method) ? "POST" : v, C = T(p, ["headers", "fetch", "method"]), I = this.url, A = (w = resolveRequestDocument(e)).query, _ = w.operationName, [4, makeRequest({
                                            url: I,
                                            query: A,
                                            variables: t,
                                            headers: i(i({}, resolveHeaders(b)), resolveHeaders(n)),
                                            operationName: _,
                                            fetch: m,
                                            method: E,
                                            fetchOptions: C
                                        })];
                                    case 1:
                                        return [2, g.sent().data]
                                }
                            })
                        })
                    }, GraphQLClient.prototype.batchRequests = function(e, t) {
                        return m(this, void 0, void 0, function() {
                            var n, p, b, y, m, v, E;
                            return g(this, function(g) {
                                switch (g.label) {
                                    case 0:
                                        return p = (n = this.options).headers, y = void 0 === (b = n.fetch) ? S.default : b, v = void 0 === (m = n.method) ? "POST" : m, E = T(n, ["headers", "fetch", "method"]), [4, makeRequest({
                                            url: this.url,
                                            query: e.map(function(e) {
                                                return resolveRequestDocument(e.document).query
                                            }),
                                            variables: e.map(function(e) {
                                                return e.variables
                                            }),
                                            headers: i(i({}, resolveHeaders(p)), resolveHeaders(t)),
                                            operationName: void 0,
                                            fetch: y,
                                            method: v,
                                            fetchOptions: E
                                        })];
                                    case 1:
                                        return [2, g.sent().data]
                                }
                            })
                        })
                    }, GraphQLClient.prototype.setHeaders = function(e) {
                        return this.options.headers = e, this
                    }, GraphQLClient.prototype.setHeader = function(e, t) {
                        var n, i = this.options.headers;
                        return i ? i[e] = t : this.options.headers = ((n = {})[e] = t, n), this
                    }, GraphQLClient.prototype.setEndpoint = function(e) {
                        return this.url = e, this
                    }, GraphQLClient
                }();

            function makeRequest(e) {
                var t = e.url,
                    n = e.query,
                    p = e.variables,
                    b = e.headers,
                    y = e.operationName,
                    T = e.fetch,
                    v = e.method,
                    S = void 0 === v ? "POST" : v,
                    E = e.fetchOptions;
                return m(this, void 0, void 0, function() {
                    var e, m, v, C, w, A, _, R;
                    return g(this, function(g) {
                        switch (g.label) {
                            case 0:
                                return e = "POST" === S.toUpperCase() ? post : get, m = Array.isArray(n), [4, e({
                                    url: t,
                                    query: n,
                                    variables: p,
                                    operationName: y,
                                    headers: b,
                                    fetch: T,
                                    fetchOptions: E
                                })];
                            case 1:
                                var k, P;
                                return [4, (P = (k = v = g.sent()).headers.get("Content-Type")) && P.startsWith("application/json") ? k.json() : k.text()];
                            case 2:
                                if (C = g.sent(), w = m && Array.isArray(C) ? !C.some(function(e) {
                                        return !e.data
                                    }) : !!C.data, v.ok && !C.errors && w) return A = v.headers, _ = v.status, [2, i(i({}, m ? {
                                    data: C
                                } : C), {
                                    headers: A,
                                    status: _
                                })];
                                throw R = "string" == typeof C ? {
                                    error: C
                                } : C, new I.ClientError(i(i({}, R), {
                                    status: v.status,
                                    headers: v.headers
                                }), {
                                    query: n,
                                    variables: p
                                })
                        }
                    })
                })
            }

            function request(e, t, n, i) {
                return m(this, void 0, void 0, function() {
                    return g(this, function(p) {
                        return [2, new w(e).request(t, n, i)]
                    })
                })
            }

            function resolveRequestDocument(e) {
                if ("string" == typeof e) return {
                    query: e
                };
                var t, n = void 0,
                    i = e.definitions.filter(function(e) {
                        return "OperationDefinition" === e.kind
                    });
                return 1 === i.length && (n = null === (t = i[0].name) || void 0 === t ? void 0 : t.value), {
                    query: E.print(e),
                    operationName: n
                }
            }
            t.GraphQLClient = w, t.rawRequest = function(e, t, n, i) {
                return m(this, void 0, void 0, function() {
                    return g(this, function(p) {
                        return [2, new w(e).rawRequest(t, n, i)]
                    })
                })
            }, t.request = request, t.batchRequests = function(e, t, n) {
                return m(this, void 0, void 0, function() {
                    return g(this, function(i) {
                        return [2, new w(e).batchRequests(t, n)]
                    })
                })
            }, t.default = request, t.gql = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return e.reduce(function(e, n, i) {
                    return "" + e + n + (i in t ? t[i] : "")
                }, "")
            }
        },
        46761: function(e, t) {
            "use strict";
            var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function __() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
            });
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClientError = void 0;
            var p = function(e) {
                function ClientError(t, n) {
                    var i = this,
                        p = ClientError.extractMessage(t) + ": " + JSON.stringify({
                            response: t,
                            request: n
                        });
                    return Object.setPrototypeOf(i = e.call(this, p) || this, ClientError.prototype), i.response = t, i.request = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, ClientError), i
                }
                return i(ClientError, e), ClientError.extractMessage = function(e) {
                    try {
                        return e.errors[0].message
                    } catch (t) {
                        return "GraphQL Error (Code: " + e.status + ")"
                    }
                }, ClientError
            }(Error);
            t.ClientError = p
        },
        86273: function(e, t, n) {
            "use strict";
            var i = n(76500);
            e.exports = function() {
                return i() && !!Symbol.toStringTag
            }
        },
        7924: function(e, t, n) {
            "use strict";
            var i = n(86273)(),
                p = n(50710)("Object.prototype.toString"),
                isStandardArguments = function(e) {
                    return (!i || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === p(e)
                },
                isLegacyArguments = function(e) {
                    return !!isStandardArguments(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== p(e) && "[object Function]" === p(e.callee)
                },
                b = function() {
                    return isStandardArguments(arguments)
                }();
            isStandardArguments.isLegacyArguments = isLegacyArguments, e.exports = b ? isStandardArguments : isLegacyArguments
        },
        18339: function(e) {
            "use strict";
            var t, n, i = Function.prototype.toString,
                p = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if ("function" == typeof p && "function" == typeof Object.defineProperty) try {
                t = Object.defineProperty({}, "length", {
                    get: function() {
                        throw n
                    }
                }), n = {}, p(function() {
                    throw 42
                }, null, t)
            } catch (e) {
                e !== n && (p = null)
            } else p = null;
            var b = /^\s*class\b/,
                isES6ClassFn = function(e) {
                    try {
                        var t = i.call(e);
                        return b.test(t)
                    } catch (e) {
                        return !1
                    }
                },
                tryFunctionObject = function(e) {
                    try {
                        if (isES6ClassFn(e)) return !1;
                        return i.call(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                y = Object.prototype.toString,
                m = "function" == typeof Symbol && !!Symbol.toStringTag,
                g = !(0 in [, ]),
                isDDA = function() {
                    return !1
                };
            if ("object" == typeof document) {
                var T = document.all;
                y.call(T) === y.call(document.all) && (isDDA = function(e) {
                    if ((g || !e) && (void 0 === e || "object" == typeof e)) try {
                        var t = y.call(e);
                        return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
                    } catch (e) {}
                    return !1
                })
            }
            e.exports = p ? function(e) {
                if (isDDA(e)) return !0;
                if (!e || "function" != typeof e && "object" != typeof e) return !1;
                try {
                    p(e, null, t)
                } catch (e) {
                    if (e !== n) return !1
                }
                return !isES6ClassFn(e) && tryFunctionObject(e)
            } : function(e) {
                if (isDDA(e)) return !0;
                if (!e || "function" != typeof e && "object" != typeof e) return !1;
                if (m) return tryFunctionObject(e);
                if (isES6ClassFn(e)) return !1;
                var t = y.call(e);
                return !!("[object Function]" === t || "[object GeneratorFunction]" === t || /^\[object HTML/.test(t)) && tryFunctionObject(e)
            }
        },
        12310: function(e, t, n) {
            "use strict";
            var i, p = Object.prototype.toString,
                b = Function.prototype.toString,
                y = /^\s*(?:function)?\*/,
                m = n(86273)(),
                g = Object.getPrototypeOf,
                getGeneratorFunc = function() {
                    if (!m) return !1;
                    try {
                        return Function("return function*() {}")()
                    } catch (e) {}
                };
            e.exports = function(e) {
                if ("function" != typeof e) return !1;
                if (y.test(b.call(e))) return !0;
                if (!m) return "[object GeneratorFunction]" === p.call(e);
                if (!g) return !1;
                if (void 0 === i) {
                    var t = getGeneratorFunc();
                    i = !!t && g(t)
                }
                return g(e) === i
            }
        },
        59354: function(e, t, n) {
            "use strict";
            var i = n(78266);
            e.exports = function(e) {
                return !!i(e)
            }
        },
        68145: function(e) {
            e.exports = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }
        },
        88178: function(e, t, n) {
            var i = n(9445),
                p = n(54048),
                b = i.DEFAULT_COMPARATOR,
                y = i.reverseComparator;

            function consume(e, t, n, i) {
                for (var b, y, m = i, g = new e(i); m > 0;) b = n[--m], 0 !== m && (y = n[0], n[0] = b, function(e, t, n, i) {
                    for (var b, y = i, m = t[i], g = 2 * i + 1; g < n;)(b = g + 1) < n && e(t[g], t[b]) >= 0 && (g = b), t[i] = t[g], g = 2 * (i = g) + 1;
                    t[i] = m, p.siftDown(e, t, y, i)
                }(t, n, --i, 0), b = y), g[m] = b;
                return g
            }

            function FixedReverseHeap(e, t, n) {
                if (2 == arguments.length && (n = t, t = null), this.ArrayClass = e, this.capacity = n, this.items = new e(n), this.clear(), this.comparator = t || b, "number" != typeof n && n <= 0) throw Error("mnemonist/FixedReverseHeap.constructor: capacity should be a number > 0.");
                if ("function" != typeof this.comparator) throw Error("mnemonist/FixedReverseHeap.constructor: given comparator should be a function.");
                this.comparator = y(this.comparator)
            }
            FixedReverseHeap.prototype.clear = function() {
                this.size = 0
            }, FixedReverseHeap.prototype.push = function(e) {
                return this.size < this.capacity ? (this.items[this.size] = e, p.siftDown(this.comparator, this.items, 0, this.size), this.size++) : this.comparator(e, this.items[0]) > 0 && p.replace(this.comparator, this.items, e), this.size
            }, FixedReverseHeap.prototype.peek = function() {
                return this.items[0]
            }, FixedReverseHeap.prototype.consume = function() {
                var e = consume(this.ArrayClass, this.comparator, this.items, this.size);
                return this.size = 0, e
            }, FixedReverseHeap.prototype.toArray = function() {
                return consume(this.ArrayClass, this.comparator, this.items.slice(0, this.size), this.size)
            }, FixedReverseHeap.prototype.inspect = function() {
                var e = this.toArray();
                return Object.defineProperty(e, "constructor", {
                    value: FixedReverseHeap,
                    enumerable: !1
                }), e
            }, "undefined" != typeof Symbol && (FixedReverseHeap.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedReverseHeap.prototype.inspect), e.exports = FixedReverseHeap
        },
        54048: function(e, t, n) {
            var i = n(58297),
                p = n(9445),
                b = n(73154),
                y = p.DEFAULT_COMPARATOR,
                m = p.reverseComparator;

            function siftDown(e, t, n, i) {
                for (var p, b, y = t[i]; i > n;) {
                    if (0 > e(y, b = t[p = i - 1 >> 1])) {
                        t[i] = b, i = p;
                        continue
                    }
                    break
                }
                t[i] = y
            }

            function siftUp(e, t, n) {
                for (var i, p = t.length, b = n, y = t[n], m = 2 * n + 1; m < p;)(i = m + 1) < p && e(t[m], t[i]) >= 0 && (m = i), t[n] = t[m], m = 2 * (n = m) + 1;
                t[n] = y, siftDown(e, t, b, n)
            }

            function push(e, t, n) {
                t.push(n), siftDown(e, t, 0, t.length - 1)
            }

            function pop(e, t) {
                var n = t.pop();
                if (0 !== t.length) {
                    var i = t[0];
                    return t[0] = n, siftUp(e, t, 0), i
                }
                return n
            }

            function replace(e, t, n) {
                if (0 === t.length) throw Error("mnemonist/heap.replace: cannot pop an empty heap.");
                var i = t[0];
                return t[0] = n, siftUp(e, t, 0), i
            }

            function pushpop(e, t, n) {
                var i;
                return 0 !== t.length && 0 > e(t[0], n) && (i = t[0], t[0] = n, n = i, siftUp(e, t, 0)), n
            }

            function heapify(e, t) {
                for (var n = t.length >> 1; --n >= 0;) siftUp(e, t, n)
            }

            function consume(e, t) {
                for (var n = t.length, i = 0, p = Array(n); i < n;) p[i++] = pop(e, t);
                return p
            }

            function Heap(e) {
                if (this.clear(), this.comparator = e || y, "function" != typeof this.comparator) throw Error("mnemonist/Heap.constructor: given comparator should be a function.")
            }

            function MaxHeap(e) {
                if (this.clear(), this.comparator = e || y, "function" != typeof this.comparator) throw Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
                this.comparator = m(this.comparator)
            }
            Heap.prototype.clear = function() {
                this.items = [], this.size = 0
            }, Heap.prototype.push = function(e) {
                return push(this.comparator, this.items, e), ++this.size
            }, Heap.prototype.peek = function() {
                return this.items[0]
            }, Heap.prototype.pop = function() {
                return 0 !== this.size && this.size--, pop(this.comparator, this.items)
            }, Heap.prototype.replace = function(e) {
                return replace(this.comparator, this.items, e)
            }, Heap.prototype.pushpop = function(e) {
                return pushpop(this.comparator, this.items, e)
            }, Heap.prototype.consume = function() {
                return this.size = 0, consume(this.comparator, this.items)
            }, Heap.prototype.toArray = function() {
                return consume(this.comparator, this.items.slice())
            }, Heap.prototype.inspect = function() {
                var e = this.toArray();
                return Object.defineProperty(e, "constructor", {
                    value: Heap,
                    enumerable: !1
                }), e
            }, "undefined" != typeof Symbol && (Heap.prototype[Symbol.for("nodejs.util.inspect.custom")] = Heap.prototype.inspect), MaxHeap.prototype = Heap.prototype, Heap.from = function(e, t) {
                var n, i = new Heap(t);
                return n = b.isArrayLike(e) ? e.slice() : b.toArray(e), heapify(i.comparator, n), i.items = n, i.size = n.length, i
            }, MaxHeap.from = function(e, t) {
                var n, i = new MaxHeap(t);
                return n = b.isArrayLike(e) ? e.slice() : b.toArray(e), heapify(i.comparator, n), i.items = n, i.size = n.length, i
            }, Heap.siftUp = siftUp, Heap.siftDown = siftDown, Heap.push = push, Heap.pop = pop, Heap.replace = replace, Heap.pushpop = pushpop, Heap.heapify = heapify, Heap.consume = consume, Heap.nsmallest = function(e, t, n) {
                2 == arguments.length && (n = t, t = e, e = y);
                var p, g, T, v, S = m(e),
                    E = 1 / 0;
                if (1 === t) {
                    if (b.isArrayLike(n)) {
                        for (p = 0, g = n.length; p < g; p++) T = n[p], (E === 1 / 0 || 0 > e(T, E)) && (E = T);
                        return (v = new n.constructor(1))[0] = E, v
                    }
                    return i(n, function(t) {
                        (E === 1 / 0 || 0 > e(t, E)) && (E = t)
                    }), [E]
                }
                if (b.isArrayLike(n)) {
                    if (t >= n.length) return n.slice().sort(e);
                    for (heapify(S, v = n.slice(0, t)), p = t, g = n.length; p < g; p++) S(n[p], v[0]) > 0 && replace(S, v, n[p]);
                    return v.sort(e)
                }
                var C = b.guessLength(n);
                return null !== C && C < t && (t = C), v = Array(t), p = 0, i(n, function(e) {
                    p < t ? v[p] = e : (p === t && heapify(S, v), S(e, v[0]) > 0 && replace(S, v, e)), p++
                }), v.length > p && (v.length = p), v.sort(e)
            }, Heap.nlargest = function(e, t, n) {
                2 == arguments.length && (n = t, t = e, e = y);
                var p, g, T, v, S = m(e),
                    E = -1 / 0;
                if (1 === t) {
                    if (b.isArrayLike(n)) {
                        for (p = 0, g = n.length; p < g; p++) T = n[p], (E === -1 / 0 || e(T, E) > 0) && (E = T);
                        return (v = new n.constructor(1))[0] = E, v
                    }
                    return i(n, function(t) {
                        (E === -1 / 0 || e(t, E) > 0) && (E = t)
                    }), [E]
                }
                if (b.isArrayLike(n)) {
                    if (t >= n.length) return n.slice().sort(S);
                    for (v = n.slice(0, t), heapify(e, v), p = t, g = n.length; p < g; p++) e(n[p], v[0]) > 0 && replace(e, v, n[p]);
                    return v.sort(S)
                }
                var C = b.guessLength(n);
                return null !== C && C < t && (t = C), v = Array(t), p = 0, i(n, function(n) {
                    p < t ? v[p] = n : (p === t && heapify(e, v), e(n, v[0]) > 0 && replace(e, v, n)), p++
                }), v.length > p && (v.length = p), v.sort(S)
            }, Heap.MinHeap = Heap, Heap.MaxHeap = MaxHeap, e.exports = Heap
        },
        64116: function(e, t, n) {
            var i = n(3643),
                p = n(58297);

            function Queue() {
                this.clear()
            }
            Queue.prototype.clear = function() {
                this.items = [], this.offset = 0, this.size = 0
            }, Queue.prototype.enqueue = function(e) {
                return this.items.push(e), ++this.size
            }, Queue.prototype.dequeue = function() {
                if (this.size) {
                    var e = this.items[this.offset];
                    return 2 * ++this.offset >= this.items.length && (this.items = this.items.slice(this.offset), this.offset = 0), this.size--, e
                }
            }, Queue.prototype.peek = function() {
                if (this.size) return this.items[this.offset]
            }, Queue.prototype.forEach = function(e, t) {
                t = arguments.length > 1 ? t : this;
                for (var n = this.offset, i = 0, p = this.items.length; n < p; n++, i++) e.call(t, this.items[n], i, this)
            }, Queue.prototype.toArray = function() {
                return this.items.slice(this.offset)
            }, Queue.prototype.values = function() {
                var e = this.items,
                    t = this.offset;
                return new i(function() {
                    if (t >= e.length) return {
                        done: !0
                    };
                    var n = e[t];
                    return t++, {
                        value: n,
                        done: !1
                    }
                })
            }, Queue.prototype.entries = function() {
                var e = this.items,
                    t = this.offset,
                    n = 0;
                return new i(function() {
                    if (t >= e.length) return {
                        done: !0
                    };
                    var i = e[t];
                    return t++, {
                        value: [n++, i],
                        done: !1
                    }
                })
            }, "undefined" != typeof Symbol && (Queue.prototype[Symbol.iterator] = Queue.prototype.values), Queue.prototype.toString = function() {
                return this.toArray().join(",")
            }, Queue.prototype.toJSON = function() {
                return this.toArray()
            }, Queue.prototype.inspect = function() {
                var e = this.toArray();
                return Object.defineProperty(e, "constructor", {
                    value: Queue,
                    enumerable: !1
                }), e
            }, "undefined" != typeof Symbol && (Queue.prototype[Symbol.for("nodejs.util.inspect.custom")] = Queue.prototype.inspect), Queue.from = function(e) {
                var t = new Queue;
                return p(e, function(e) {
                    t.enqueue(e)
                }), t
            }, Queue.of = function() {
                return Queue.from(arguments)
            }, e.exports = Queue
        },
        9445: function(e, t) {
            t.DEFAULT_COMPARATOR = function(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }, t.DEFAULT_REVERSE_COMPARATOR = function(e, t) {
                return e < t ? 1 : e > t ? -1 : 0
            }, t.reverseComparator = function(e) {
                return function(t, n) {
                    return e(n, t)
                }
            }, t.createTupleComparator = function(e) {
                return 2 === e ? function(e, t) {
                    return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : e[1] < t[1] ? -1 : e[1] > t[1] ? 1 : 0
                } : function(t, n) {
                    for (var i = 0; i < e;) {
                        if (t[i] < n[i]) return -1;
                        if (t[i] > n[i]) return 1;
                        i++
                    }
                    return 0
                }
            }
        },
        73154: function(e, t, n) {
            var i = n(58297),
                p = n(45176);

            function guessLength(e) {
                return "number" == typeof e.length ? e.length : "number" == typeof e.size ? e.size : void 0
            }
            t.isArrayLike = function(e) {
                return Array.isArray(e) || p.isTypedArray(e)
            }, t.guessLength = guessLength, t.toArray = function(e) {
                var t = guessLength(e),
                    n = "number" == typeof t ? Array(t) : [],
                    p = 0;
                return i(e, function(e) {
                    n[p++] = e
                }), n
            }, t.toArrayWithIndices = function(e) {
                var t = guessLength(e),
                    n = "number" == typeof t ? p.getPointerArray(t) : Array,
                    b = "number" == typeof t ? Array(t) : [],
                    y = "number" == typeof t ? new n(t) : [],
                    m = 0;
                return i(e, function(e) {
                    b[m] = e, y[m] = m++
                }), [b, y]
            }
        },
        45176: function(e, t) {
            t.getPointerArray = function(e) {
                var t = e - 1;
                if (t <= 255) return Uint8Array;
                if (t <= 65535) return Uint16Array;
                if (t <= 4294967295) return Uint32Array;
                throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")
            }, t.getSignedPointerArray = function(e) {
                var t = e - 1;
                return t <= 127 ? Int8Array : t <= 32767 ? Int16Array : t <= 2147483647 ? Int32Array : Float64Array
            }, t.getNumberType = function(e) {
                return e === (0 | e) ? -1 === Math.sign(e) ? e <= 127 && e >= -128 ? Int8Array : e <= 32767 && e >= -32768 ? Int16Array : Int32Array : e <= 255 ? Uint8Array : e <= 65535 ? Uint16Array : Uint32Array : Float64Array
            };
            var n = {
                Uint8Array: 1,
                Int8Array: 2,
                Uint16Array: 3,
                Int16Array: 4,
                Uint32Array: 5,
                Int32Array: 6,
                Float32Array: 7,
                Float64Array: 8
            };
            t.getMinimalRepresentation = function(e, i) {
                var p, b, y, m, g, T = null,
                    v = 0;
                for (m = 0, g = e.length; m < g; m++) y = i ? i(e[m]) : e[m], (p = n[(b = t.getNumberType(y)).name]) > v && (v = p, T = b);
                return T
            }, t.isTypedArray = function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView(e)
            }, t.concat = function() {
                var e, t, n, i = 0;
                for (e = 0, n = arguments.length; e < n; e++) i += arguments[e].length;
                var p = new arguments[0].constructor(i);
                for (e = 0, t = 0; e < n; e++) p.set(arguments[e], t), t += arguments[e].length;
                return p
            }, t.indices = function(e) {
                for (var n = new(t.getPointerArray(e))(e), i = 0; i < e; i++) n[i] = i;
                return n
            }
        },
        83104: function(e, t, n) {
            ! function() {
                var t = {
                        528: function(e, t, n) {
                            var i = n(685),
                                p = n(310),
                                b = e.exports;
                            for (var y in i) i.hasOwnProperty(y) && (b[y] = i[y]);

                            function validateParams(e) {
                                if ("string" == typeof e && (e = p.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
                                return e
                            }
                            b.request = function(e, t) {
                                return e = validateParams(e), i.request.call(this, e, t)
                            }, b.get = function(e, t) {
                                return e = validateParams(e), i.get.call(this, e, t)
                            }
                        },
                        685: function(e) {
                            "use strict";
                            e.exports = n(72909)
                        },
                        310: function(e) {
                            "use strict";
                            e.exports = n(40692)
                        }
                    },
                    i = {};

                function __nccwpck_require__(e) {
                    var n = i[e];
                    if (void 0 !== n) return n.exports;
                    var p = i[e] = {
                            exports: {}
                        },
                        b = !0;
                    try {
                        t[e](p, p.exports, __nccwpck_require__), b = !1
                    } finally {
                        b && delete i[e]
                    }
                    return p.exports
                }
                __nccwpck_require__.ab = "//";
                var p = __nccwpck_require__(528);
                e.exports = p
            }()
        },
        40692: function(e, t, n) {
            ! function() {
                var t = {
                        452: function(e) {
                            "use strict";
                            e.exports = n(9875)
                        }
                    },
                    i = {};

                function __nccwpck_require__(e) {
                    var n = i[e];
                    if (void 0 !== n) return n.exports;
                    var p = i[e] = {
                            exports: {}
                        },
                        b = !0;
                    try {
                        t[e](p, p.exports, __nccwpck_require__), b = !1
                    } finally {
                        b && delete i[e]
                    }
                    return p.exports
                }
                __nccwpck_require__.ab = "//";
                var p = {};
                ! function() {
                    var e, t = (e = __nccwpck_require__(452)) && "object" == typeof e && "default" in e ? e.default : e,
                        n = /https?|ftp|gopher|file/;

                    function r(e) {
                        "string" == typeof e && (e = d(e));
                        var i, p, b, y, m, g, T, v, S, E = (p = (i = e).auth, b = i.hostname, y = i.protocol || "", m = i.pathname || "", g = i.hash || "", T = i.query || "", v = !1, p = p ? encodeURIComponent(p).replace(/%3A/i, ":") + "@" : "", i.host ? v = p + i.host : b && (v = p + (~b.indexOf(":") ? "[" + b + "]" : b), i.port && (v += ":" + i.port)), T && "object" == typeof T && (T = t.encode(T)), S = i.search || T && "?" + T || "", y && ":" !== y.substr(-1) && (y += ":"), i.slashes || (!y || n.test(y)) && !1 !== v ? (v = "//" + (v || ""), m && "/" !== m[0] && (m = "/" + m)) : v || (v = ""), g && "#" !== g[0] && (g = "#" + g), S && "?" !== S[0] && (S = "?" + S), {
                            protocol: y,
                            host: v,
                            pathname: m = m.replace(/[?#]/g, encodeURIComponent),
                            search: S = S.replace("#", "%23"),
                            hash: g
                        });
                        return "" + E.protocol + E.host + E.pathname + E.search + E.hash
                    }
                    var i = "http://",
                        b = i + "w.w",
                        y = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        m = /https?|ftp|gopher|file/;

                    function h(e, t) {
                        var n = "string" == typeof e ? d(e) : e;
                        e = "object" == typeof e ? r(e) : e;
                        var p = d(t),
                            g = "";
                        n.protocol && !n.slashes && (g = n.protocol, e = e.replace(n.protocol, ""), g += "/" === t[0] || "/" === e[0] ? "/" : ""), g && p.protocol && (g = "", p.slashes || (g = p.protocol, t = t.replace(p.protocol, "")));
                        var T = e.match(y);
                        T && !p.protocol && (e = e.substr((g = T[1] + (T[2] || "")).length), /^\/\/[^/]/.test(t) && (g = g.slice(0, -1)));
                        var v = new URL(e, b + "/"),
                            S = new URL(t, v).toString().replace(b, ""),
                            E = p.protocol || n.protocol;
                        return E += n.slashes || p.slashes ? "//" : "", !g && E ? S = S.replace(i, E) : g && (S = S.replace(i, "")), m.test(S) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== S.slice(-1) || (S = S.slice(0, -1)), g && (S = g + ("/" === S[0] ? S.substr(1) : S)), S
                    }

                    function l() {}
                    l.prototype.parse = d, l.prototype.format = r, l.prototype.resolve = h, l.prototype.resolveObject = h;
                    var g = /^https?|ftp|gopher|file/,
                        T = /^(.*?)([#?].*)/,
                        v = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        S = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        E = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

                    function d(e, n, i) {
                        if (void 0 === n && (n = !1), void 0 === i && (i = !1), e && "object" == typeof e && e instanceof l) return e;
                        var p = (e = e.trim()).match(T);
                        e = p ? p[1].replace(/\\/g, "/") + p[2] : e.replace(/\\/g, "/"), E.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var y = !/(^javascript)/.test(e) && e.match(v),
                            m = S.test(e),
                            C = "";
                        y && (g.test(y[1]) || (C = y[1].toLowerCase(), e = "" + y[2] + y[3]), y[2] || (m = !1, g.test(y[1]) ? (C = y[1], e = "" + y[3]) : e = "//" + y[3]), 3 !== y[2].length && 1 !== y[2].length || (C = y[1], e = "/" + y[3]));
                        var I, w = (p ? p[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            A = w && w[1],
                            _ = new l,
                            R = "",
                            k = "";
                        try {
                            I = new URL(e)
                        } catch (t) {
                            R = t, C || i || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (k = "/", e = e.substr(1));
                            try {
                                I = new URL(e, b)
                            } catch (e) {
                                return _.protocol = C, _.href = C, _
                            }
                        }
                        _.slashes = m && !k, _.host = "w.w" === I.host ? "" : I.host, _.hostname = "w.w" === I.hostname ? "" : I.hostname.replace(/(\[|\])/g, ""), _.protocol = R ? C || null : I.protocol, _.search = I.search.replace(/\\/g, "%5C"), _.hash = I.hash.replace(/\\/g, "%5C");
                        var P = e.split("#");
                        !_.search && ~P[0].indexOf("?") && (_.search = "?"), _.hash || "" !== P[1] || (_.hash = "#"), _.query = n ? t.decode(I.search.substr(1)) : _.search.substr(1), _.pathname = k + (y ? I.pathname.replace(/['^|`]/g, function(e) {
                            return "%" + e.charCodeAt().toString(16).toUpperCase()
                        }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                            try {
                                return decodeURIComponent(t).split("").map(function(e) {
                                    var t = e.charCodeAt();
                                    return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                                }).join("")
                            } catch (e) {
                                return t
                            }
                        }) : I.pathname), "about:" === _.protocol && "blank" === _.pathname && (_.protocol = "", _.pathname = ""), R && "/" !== e[0] && (_.pathname = _.pathname.substr(1)), C && !g.test(C) && "/" !== e.slice(-1) && "/" === _.pathname && (_.pathname = ""), _.path = _.pathname + _.search, _.auth = [I.username, I.password].map(decodeURIComponent).filter(Boolean).join(":"), _.port = I.port, A && !_.host.endsWith(A) && (_.host += A, _.port = A.slice(1)), _.href = k ? "" + _.pathname + _.search + _.hash : r(_);
                        var O = /^(file)/.test(_.href) ? ["host", "hostname"] : [];
                        return Object.keys(_).forEach(function(e) {
                            ~O.indexOf(e) || (_[e] = _[e] || null)
                        }), _
                    }
                    p.parse = d, p.format = r, p.resolve = h, p.resolveObject = function(e, t) {
                        return d(h(e, t))
                    }, p.Url = l
                }(), e.exports = p
            }()
        },
        9875: function(e) {
            ! function() {
                "use strict";
                var t = {
                        815: function(e) {
                            e.exports = function(e, n, i, p) {
                                n = n || "&", i = i || "=";
                                var b = {};
                                if ("string" != typeof e || 0 === e.length) return b;
                                var y = /\+/g;
                                e = e.split(n);
                                var m = 1e3;
                                p && "number" == typeof p.maxKeys && (m = p.maxKeys);
                                var g = e.length;
                                m > 0 && g > m && (g = m);
                                for (var T = 0; T < g; ++T) {
                                    var v, S, E, C, I = e[T].replace(y, "%20"),
                                        w = I.indexOf(i);
                                    (w >= 0 ? (v = I.substr(0, w), S = I.substr(w + 1)) : (v = I, S = ""), E = decodeURIComponent(v), C = decodeURIComponent(S), Object.prototype.hasOwnProperty.call(b, E)) ? t(b[E]) ? b[E].push(C) : b[E] = [b[E], C]: b[E] = C
                                }
                                return b
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        },
                        577: function(e) {
                            var stringifyPrimitive = function(e) {
                                switch (typeof e) {
                                    case "string":
                                        return e;
                                    case "boolean":
                                        return e ? "true" : "false";
                                    case "number":
                                        return isFinite(e) ? e : "";
                                    default:
                                        return ""
                                }
                            };
                            e.exports = function(e, i, p, b) {
                                return (i = i || "&", p = p || "=", null === e && (e = void 0), "object" == typeof e) ? map(n(e), function(n) {
                                    var b = encodeURIComponent(stringifyPrimitive(n)) + p;
                                    return t(e[n]) ? map(e[n], function(e) {
                                        return b + encodeURIComponent(stringifyPrimitive(e))
                                    }).join(i) : b + encodeURIComponent(stringifyPrimitive(e[n]))
                                }).join(i) : b ? encodeURIComponent(stringifyPrimitive(b)) + p + encodeURIComponent(stringifyPrimitive(e)) : ""
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };

                            function map(e, t) {
                                if (e.map) return e.map(t);
                                for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
                                return n
                            }
                            var n = Object.keys || function(e) {
                                var t = [];
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                                return t
                            }
                        }
                    },
                    n = {};

                function __nccwpck_require__(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var p = n[e] = {
                            exports: {}
                        },
                        b = !0;
                    try {
                        t[e](p, p.exports, __nccwpck_require__), b = !1
                    } finally {
                        b && delete n[e]
                    }
                    return p.exports
                }
                __nccwpck_require__.ab = "//";
                var i = {};
                i.decode = i.parse = __nccwpck_require__(815), i.encode = i.stringify = __nccwpck_require__(577), e.exports = i
            }()
        },
        48290: function(e, t, n) {
            var i = n(25566);
            ! function() {
                var t = {
                        782: function(e) {
                            "function" == typeof Object.create ? e.exports = function(e, t) {
                                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : e.exports = function(e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var TempCtor = function() {};
                                    TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                                }
                            }
                        },
                        646: function(e) {
                            "use strict";
                            let t = {};

                            function createErrorType(e, n, i) {
                                i || (i = Error);
                                let NodeError = class NodeError extends i {
                                    constructor(e, t, i) {
                                        super("string" == typeof n ? n : n(e, t, i))
                                    }
                                };
                                NodeError.prototype.name = i.name, NodeError.prototype.code = e, t[e] = NodeError
                            }

                            function oneOf(e, t) {
                                if (!Array.isArray(e)) return `of ${t} ${String(e)}`; {
                                    let n = e.length;
                                    return (e = e.map(e => String(e)), n > 2) ? `one of ${t} ${e.slice(0,n-1).join(", ")}, or ` + e[n - 1] : 2 === n ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
                                }
                            }
                            createErrorType("ERR_INVALID_OPT_VALUE", function(e, t) {
                                return 'The value "' + t + '" is invalid for option "' + e + '"'
                            }, TypeError), createErrorType("ERR_INVALID_ARG_TYPE", function(e, t, n) {
                                var i, p, b, y, m;
                                let g, T;
                                if ("string" == typeof t && (i = "not ", t.substr(!p || p < 0 ? 0 : +p, i.length) === i) ? (g = "must not be", t = t.replace(/^not /, "")) : g = "must be", b = " argument", (void 0 === y || y > e.length) && (y = e.length), e.substring(y - b.length, y) === b) T = `The ${e} ${g} ${oneOf(t,"type")}`;
                                else {
                                    let n = ("number" != typeof m && (m = 0), m + 1 > e.length || -1 === e.indexOf(".", m)) ? "argument" : "property";
                                    T = `The "${e}" ${n} ${g} ${oneOf(t,"type")}`
                                }
                                return T + `. Received type ${typeof n}`
                            }, TypeError), createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                                return "The " + e + " method is not implemented"
                            }), createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), createErrorType("ERR_STREAM_DESTROYED", function(e) {
                                return "Cannot call " + e + " after a stream was destroyed"
                            }), createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end"), createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), createErrorType("ERR_UNKNOWN_ENCODING", function(e) {
                                return "Unknown encoding: " + e
                            }, TypeError), createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
                        },
                        403: function(e, t, n) {
                            "use strict";
                            var p = Object.keys || function(e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return t
                            };
                            e.exports = Duplex;
                            var b = n(709),
                                y = n(337);
                            n(782)(Duplex, b);
                            for (var m = p(y.prototype), g = 0; g < m.length; g++) {
                                var T = m[g];
                                Duplex.prototype[T] || (Duplex.prototype[T] = y.prototype[T])
                            }

                            function Duplex(e) {
                                if (!(this instanceof Duplex)) return new Duplex(e);
                                b.call(this, e), y.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", onend)))
                            }

                            function onend() {
                                this._writableState.ended || i.nextTick(onEndNT, this)
                            }

                            function onEndNT(e) {
                                e.end()
                            }
                            Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.highWaterMark
                                }
                            }), Object.defineProperty(Duplex.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState && this._writableState.getBuffer()
                                }
                            }), Object.defineProperty(Duplex.prototype, "writableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.length
                                }
                            }), Object.defineProperty(Duplex.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                                },
                                set: function(e) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                                }
                            })
                        },
                        889: function(e, t, n) {
                            "use strict";
                            e.exports = PassThrough;
                            var i = n(170);

                            function PassThrough(e) {
                                if (!(this instanceof PassThrough)) return new PassThrough(e);
                                i.call(this, e)
                            }
                            n(782)(PassThrough, i), PassThrough.prototype._transform = function(e, t, n) {
                                n(null, e)
                            }
                        },
                        709: function(e, t, p) {
                            "use strict";
                            e.exports = Readable, Readable.ReadableState = ReadableState, p(361).EventEmitter;
                            var b, y, m, g, T, a = function(e, t) {
                                    return e.listeners(t).length
                                },
                                v = p(678),
                                S = p(300).Buffer,
                                E = n.g.Uint8Array || function() {},
                                C = p(837);
                            y = C && C.debuglog ? C.debuglog("stream") : function() {};
                            var I = p(379),
                                w = p(25),
                                A = p(776).getHighWaterMark,
                                _ = p(646).q,
                                R = _.ERR_INVALID_ARG_TYPE,
                                k = _.ERR_STREAM_PUSH_AFTER_EOF,
                                P = _.ERR_METHOD_NOT_IMPLEMENTED,
                                O = _.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                            p(782)(Readable, v);
                            var M = w.errorOrDestroy,
                                x = ["error", "close", "destroy", "pause", "resume"];

                            function ReadableState(e, t, n) {
                                b = b || p(403), e = e || {}, "boolean" != typeof n && (n = t instanceof b), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = A(this, e, "readableHighWaterMark", n), this.buffer = new I, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (m || (m = p(704).s), this.decoder = new m(e.encoding), this.encoding = e.encoding)
                            }

                            function Readable(e) {
                                if (b = b || p(403), !(this instanceof Readable)) return new Readable(e);
                                var t = this instanceof b;
                                this._readableState = new ReadableState(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), v.call(this)
                            }

                            function readableAddChunk(e, t, n, i, p) {
                                y("readableAddChunk", t);
                                var b, m, g, T, v, C = e._readableState;
                                if (null === t) C.reading = !1,
                                    function(e, t) {
                                        if (y("onEofChunk"), !t.ended) {
                                            if (t.decoder) {
                                                var n = t.decoder.end();
                                                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                                            }
                                            t.ended = !0, t.sync ? emitReadable(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, emitReadable_(e)))
                                        }
                                    }(e, C);
                                else {
                                    if (p || (b = C, m = t, S.isBuffer(m) || m instanceof E || "string" == typeof m || void 0 === m || b.objectMode || (g = new R("chunk", ["string", "Buffer", "Uint8Array"], m)), v = g), v) M(e, v);
                                    else if (C.objectMode || t && t.length > 0) {
                                        if ("string" == typeof t || C.objectMode || Object.getPrototypeOf(t) === S.prototype || (T = t, t = S.from(T)), i) C.endEmitted ? M(e, new O) : addChunk(e, C, t, !0);
                                        else if (C.ended) M(e, new k);
                                        else {
                                            if (C.destroyed) return !1;
                                            C.reading = !1, C.decoder && !n ? (t = C.decoder.write(t), C.objectMode || 0 !== t.length ? addChunk(e, C, t, !1) : maybeReadMore(e, C)) : addChunk(e, C, t, !1)
                                        }
                                    } else i || (C.reading = !1, maybeReadMore(e, C))
                                }
                                return !C.ended && (C.length < C.highWaterMark || 0 === C.length)
                            }

                            function addChunk(e, t, n, i) {
                                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && emitReadable(e)), maybeReadMore(e, t)
                            }

                            function howMuchToRead(e, t) {
                                if (e <= 0 || 0 === t.length && t.ended) return 0;
                                if (t.objectMode) return 1;
                                if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                                if (e > t.highWaterMark) {
                                    var n;
                                    t.highWaterMark = ((n = e) >= 1073741824 ? n = 1073741824 : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n)
                                }
                                return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
                            }

                            function emitReadable(e) {
                                var t = e._readableState;
                                y("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (y("emitReadable", t.flowing), t.emittedReadable = !0, i.nextTick(emitReadable_, e))
                            }

                            function emitReadable_(e) {
                                var t = e._readableState;
                                y("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, flow(e)
                            }

                            function maybeReadMore(e, t) {
                                t.readingMore || (t.readingMore = !0, i.nextTick(maybeReadMore_, e, t))
                            }

                            function maybeReadMore_(e, t) {
                                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                                    var n = t.length;
                                    if (y("maybeReadMore read 0"), e.read(0), n === t.length) break
                                }
                                t.readingMore = !1
                            }

                            function updateReadableListening(e) {
                                var t = e._readableState;
                                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                            }

                            function nReadingNextTick(e) {
                                y("readable nexttick read 0"), e.read(0)
                            }

                            function resume_(e, t) {
                                y("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), flow(e), t.flowing && !t.reading && e.read(0)
                            }

                            function flow(e) {
                                var t = e._readableState;
                                for (y("flow", t.flowing); t.flowing && null !== e.read(););
                            }

                            function fromList(e, t) {
                                var n;
                                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n)
                            }

                            function endReadable(e) {
                                var t = e._readableState;
                                y("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, i.nextTick(endReadableNT, t, e))
                            }

                            function endReadableNT(e, t) {
                                if (y("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                                    var n = t._writableState;
                                    (!n || n.autoDestroy && n.finished) && t.destroy()
                                }
                            }

                            function indexOf(e, t) {
                                for (var n = 0, i = e.length; n < i; n++)
                                    if (e[n] === t) return n;
                                return -1
                            }
                            Object.defineProperty(Readable.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && this._readableState.destroyed
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.destroyed = e)
                                }
                            }), Readable.prototype.destroy = w.destroy, Readable.prototype._undestroy = w.undestroy, Readable.prototype._destroy = function(e, t) {
                                t(e)
                            }, Readable.prototype.push = function(e, t) {
                                var n, i = this._readableState;
                                return i.objectMode ? n = !0 : "string" == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = S.from(e, t), t = ""), n = !0), readableAddChunk(this, e, t, !1, n)
                            }, Readable.prototype.unshift = function(e) {
                                return readableAddChunk(this, e, null, !0, !1)
                            }, Readable.prototype.isPaused = function() {
                                return !1 === this._readableState.flowing
                            }, Readable.prototype.setEncoding = function(e) {
                                m || (m = p(704).s);
                                var t = new m(e);
                                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                                for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
                                return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
                            }, Readable.prototype.read = function(e) {
                                y("read", e), e = parseInt(e, 10);
                                var t, n = this._readableState,
                                    i = e;
                                if (0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended)) return y("read: emitReadable", n.length, n.ended), 0 === n.length && n.ended ? endReadable(this) : emitReadable(this), null;
                                if (0 === (e = howMuchToRead(e, n)) && n.ended) return 0 === n.length && endReadable(this), null;
                                var p = n.needReadable;
                                return y("need readable", p), (0 === n.length || n.length - e < n.highWaterMark) && y("length less than watermark", p = !0), n.ended || n.reading ? y("reading or ended", p = !1) : p && (y("do read"), n.reading = !0, n.sync = !0, 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), n.sync = !1, n.reading || (e = howMuchToRead(i, n))), null === (t = e > 0 ? fromList(e, n) : null) ? (n.needReadable = n.length <= n.highWaterMark, e = 0) : (n.length -= e, n.awaitDrain = 0), 0 === n.length && (n.ended || (n.needReadable = !0), i !== e && n.ended && endReadable(this)), null !== t && this.emit("data", t), t
                            }, Readable.prototype._read = function(e) {
                                M(this, new P("_read()"))
                            }, Readable.prototype.pipe = function(e, t) {
                                var n = this,
                                    p = this._readableState;
                                switch (p.pipesCount) {
                                    case 0:
                                        p.pipes = e;
                                        break;
                                    case 1:
                                        p.pipes = [p.pipes, e];
                                        break;
                                    default:
                                        p.pipes.push(e)
                                }
                                p.pipesCount += 1, y("pipe count=%d opts=%j", p.pipesCount, t);
                                var b = t && !1 === t.end || e === i.stdout || e === i.stderr ? unpipe : onend;

                                function onend() {
                                    y("onend"), e.end()
                                }
                                p.endEmitted ? i.nextTick(b) : n.once("end", b), e.on("unpipe", function onunpipe(t, i) {
                                    y("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, y("cleanup"), e.removeListener("close", onclose), e.removeListener("finish", onfinish), e.removeListener("drain", s), e.removeListener("error", onerror), e.removeListener("unpipe", onunpipe), n.removeListener("end", onend), n.removeListener("end", unpipe), n.removeListener("data", ondata), m = !0, p.awaitDrain && (!e._writableState || e._writableState.needDrain) && s())
                                });
                                var s = function() {
                                    var e = n._readableState;
                                    y("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(n, "data") && (e.flowing = !0, flow(n))
                                };
                                e.on("drain", s);
                                var m = !1;

                                function ondata(t) {
                                    y("ondata");
                                    var i = e.write(t);
                                    y("dest.write", i), !1 === i && ((1 === p.pipesCount && p.pipes === e || p.pipesCount > 1 && -1 !== indexOf(p.pipes, e)) && !m && (y("false write response, pause", p.awaitDrain), p.awaitDrain++), n.pause())
                                }

                                function onerror(t) {
                                    y("onerror", t), unpipe(), e.removeListener("error", onerror), 0 === a(e, "error") && M(e, t)
                                }

                                function onclose() {
                                    e.removeListener("finish", onfinish), unpipe()
                                }

                                function onfinish() {
                                    y("onfinish"), e.removeListener("close", onclose), unpipe()
                                }

                                function unpipe() {
                                    y("unpipe"), n.unpipe(e)
                                }
                                return n.on("data", ondata),
                                    function(e, t, n) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
                                    }(e, "error", onerror), e.once("close", onclose), e.once("finish", onfinish), e.emit("pipe", n), p.flowing || (y("pipe resume"), n.resume()), e
                            }, Readable.prototype.unpipe = function(e) {
                                var t = this._readableState,
                                    n = {
                                        hasUnpiped: !1
                                    };
                                if (0 === t.pipesCount) return this;
                                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
                                if (!e) {
                                    var i = t.pipes,
                                        p = t.pipesCount;
                                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                                    for (var b = 0; b < p; b++) i[b].emit("unpipe", this, {
                                        hasUnpiped: !1
                                    });
                                    return this
                                }
                                var y = indexOf(t.pipes, e);
                                return -1 === y || (t.pipes.splice(y, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this
                            }, Readable.prototype.on = function(e, t) {
                                var n = v.prototype.on.call(this, e, t),
                                    p = this._readableState;
                                return "data" === e ? (p.readableListening = this.listenerCount("readable") > 0, !1 !== p.flowing && this.resume()) : "readable" !== e || p.endEmitted || p.readableListening || (p.readableListening = p.needReadable = !0, p.flowing = !1, p.emittedReadable = !1, y("on readable", p.length, p.reading), p.length ? emitReadable(this) : p.reading || i.nextTick(nReadingNextTick, this)), n
                            }, Readable.prototype.addListener = Readable.prototype.on, Readable.prototype.removeListener = function(e, t) {
                                var n = v.prototype.removeListener.call(this, e, t);
                                return "readable" === e && i.nextTick(updateReadableListening, this), n
                            }, Readable.prototype.removeAllListeners = function(e) {
                                var t = v.prototype.removeAllListeners.apply(this, arguments);
                                return ("readable" === e || void 0 === e) && i.nextTick(updateReadableListening, this), t
                            }, Readable.prototype.resume = function() {
                                var e = this._readableState;
                                return e.flowing || (y("resume"), e.flowing = !e.readableListening, e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(resume_, this, e))), e.paused = !1, this
                            }, Readable.prototype.pause = function() {
                                return y("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                            }, Readable.prototype.wrap = function(e) {
                                var t = this,
                                    n = this._readableState,
                                    i = !1;
                                for (var p in e.on("end", function() {
                                        if (y("wrapped end"), n.decoder && !n.ended) {
                                            var e = n.decoder.end();
                                            e && e.length && t.push(e)
                                        }
                                        t.push(null)
                                    }), e.on("data", function(p) {
                                        y("wrapped data"), n.decoder && (p = n.decoder.write(p)), (!n.objectMode || null != p) && (n.objectMode || p && p.length) && (t.push(p) || (i = !0, e.pause()))
                                    }), e) void 0 === this[p] && "function" == typeof e[p] && (this[p] = function(t) {
                                    return function() {
                                        return e[t].apply(e, arguments)
                                    }
                                }(p));
                                for (var b = 0; b < x.length; b++) e.on(x[b], this.emit.bind(this, x[b]));
                                return this._read = function(t) {
                                    y("wrapped _read", t), i && (i = !1, e.resume())
                                }, this
                            }, "function" == typeof Symbol && (Readable.prototype[Symbol.asyncIterator] = function() {
                                return void 0 === g && (g = p(871)), g(this)
                            }), Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.highWaterMark
                                }
                            }), Object.defineProperty(Readable.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState && this._readableState.buffer
                                }
                            }), Object.defineProperty(Readable.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.flowing
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.flowing = e)
                                }
                            }), Readable._fromList = fromList, Object.defineProperty(Readable.prototype, "readableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.length
                                }
                            }), "function" == typeof Symbol && (Readable.from = function(e, t) {
                                return void 0 === T && (T = p(727)), T(Readable, e, t)
                            })
                        },
                        170: function(e, t, n) {
                            "use strict";
                            e.exports = Transform;
                            var i = n(646).q,
                                p = i.ERR_METHOD_NOT_IMPLEMENTED,
                                b = i.ERR_MULTIPLE_CALLBACK,
                                y = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                m = i.ERR_TRANSFORM_WITH_LENGTH_0,
                                g = n(403);

                            function afterTransform(e, t) {
                                var n = this._transformState;
                                n.transforming = !1;
                                var i = n.writecb;
                                if (null === i) return this.emit("error", new b);
                                n.writechunk = null, n.writecb = null, null != t && this.push(t), i(e);
                                var p = this._readableState;
                                p.reading = !1, (p.needReadable || p.length < p.highWaterMark) && this._read(p.highWaterMark)
                            }

                            function Transform(e) {
                                if (!(this instanceof Transform)) return new Transform(e);
                                g.call(this, e), this._transformState = {
                                    afterTransform: afterTransform.bind(this),
                                    needTransform: !1,
                                    transforming: !1,
                                    writecb: null,
                                    writechunk: null,
                                    writeencoding: null
                                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", prefinish)
                            }

                            function prefinish() {
                                var e = this;
                                "function" != typeof this._flush || this._readableState.destroyed ? done(this, null, null) : this._flush(function(t, n) {
                                    done(e, t, n)
                                })
                            }

                            function done(e, t, n) {
                                if (t) return e.emit("error", t);
                                if (null != n && e.push(n), e._writableState.length) throw new m;
                                if (e._transformState.transforming) throw new y;
                                return e.push(null)
                            }
                            n(782)(Transform, g), Transform.prototype.push = function(e, t) {
                                return this._transformState.needTransform = !1, g.prototype.push.call(this, e, t)
                            }, Transform.prototype._transform = function(e, t, n) {
                                n(new p("_transform()"))
                            }, Transform.prototype._write = function(e, t, n) {
                                var i = this._transformState;
                                if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
                                    var p = this._readableState;
                                    (i.needTransform || p.needReadable || p.length < p.highWaterMark) && this._read(p.highWaterMark)
                                }
                            }, Transform.prototype._read = function(e) {
                                var t = this._transformState;
                                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                            }, Transform.prototype._destroy = function(e, t) {
                                g.prototype._destroy.call(this, e, function(e) {
                                    t(e)
                                })
                            }
                        },
                        337: function(e, t, p) {
                            "use strict";

                            function CorkedRequest(e) {
                                var t = this;
                                this.next = null, this.entry = null, this.finish = function() {
                                    (function(e, t, n) {
                                        var i = e.entry;
                                        for (e.entry = null; i;) {
                                            var p = i.callback;
                                            t.pendingcb--, p(void 0), i = i.next
                                        }
                                        t.corkedRequestsFree.next = e
                                    })(t, e)
                                }
                            }
                            e.exports = Writable, Writable.WritableState = WritableState;
                            var b, y, m = {
                                    deprecate: p(769)
                                },
                                g = p(678),
                                T = p(300).Buffer,
                                v = n.g.Uint8Array || function() {},
                                S = p(25),
                                E = p(776).getHighWaterMark,
                                C = p(646).q,
                                I = C.ERR_INVALID_ARG_TYPE,
                                w = C.ERR_METHOD_NOT_IMPLEMENTED,
                                A = C.ERR_MULTIPLE_CALLBACK,
                                _ = C.ERR_STREAM_CANNOT_PIPE,
                                R = C.ERR_STREAM_DESTROYED,
                                k = C.ERR_STREAM_NULL_VALUES,
                                P = C.ERR_STREAM_WRITE_AFTER_END,
                                O = C.ERR_UNKNOWN_ENCODING,
                                M = S.errorOrDestroy;

                            function nop() {}

                            function WritableState(e, t, n) {
                                b = b || p(403), e = e || {}, "boolean" != typeof n && (n = t instanceof b), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = E(this, e, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                var y = !1 === e.decodeStrings;
                                this.decodeStrings = !y, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                                    (function(e, t) {
                                        var n = e._writableState,
                                            p = n.sync,
                                            b = n.writecb;
                                        if ("function" != typeof b) throw new A;
                                        if (n.writing = !1, n.writecb = null, n.length -= n.writelen, n.writelen = 0, t) --n.pendingcb, p ? (i.nextTick(b, t), i.nextTick(finishMaybe, e, n), e._writableState.errorEmitted = !0, M(e, t)) : (b(t), e._writableState.errorEmitted = !0, M(e, t), finishMaybe(e, n));
                                        else {
                                            var y = needFinish(n) || e.destroyed;
                                            y || n.corked || n.bufferProcessing || !n.bufferedRequest || clearBuffer(e, n), p ? i.nextTick(afterWrite, e, n, y, b) : afterWrite(e, n, y, b)
                                        }
                                    })(t, e)
                                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new CorkedRequest(this)
                            }

                            function Writable(e) {
                                var t = this instanceof(b = b || p(403));
                                if (!t && !y.call(Writable, this)) return new Writable(e);
                                this._writableState = new WritableState(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), g.call(this)
                            }

                            function doWrite(e, t, n, i, p, b, y) {
                                t.writelen = i, t.writecb = y, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new R("write")) : n ? e._writev(p, t.onwrite) : e._write(p, b, t.onwrite), t.sync = !1
                            }

                            function afterWrite(e, t, n, i) {
                                n || 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")), t.pendingcb--, i(), finishMaybe(e, t)
                            }

                            function clearBuffer(e, t) {
                                t.bufferProcessing = !0;
                                var n = t.bufferedRequest;
                                if (e._writev && n && n.next) {
                                    var i = Array(t.bufferedRequestCount),
                                        p = t.corkedRequestsFree;
                                    p.entry = n;
                                    for (var b = 0, y = !0; n;) i[b] = n, n.isBuf || (y = !1), n = n.next, b += 1;
                                    i.allBuffers = y, doWrite(e, t, !0, t.length, i, "", p.finish), t.pendingcb++, t.lastBufferedRequest = null, p.next ? (t.corkedRequestsFree = p.next, p.next = null) : t.corkedRequestsFree = new CorkedRequest(t), t.bufferedRequestCount = 0
                                } else {
                                    for (; n;) {
                                        var m = n.chunk,
                                            g = n.encoding,
                                            T = n.callback,
                                            v = t.objectMode ? 1 : m.length;
                                        if (doWrite(e, t, !1, v, m, g, T), n = n.next, t.bufferedRequestCount--, t.writing) break
                                    }
                                    null === n && (t.lastBufferedRequest = null)
                                }
                                t.bufferedRequest = n, t.bufferProcessing = !1
                            }

                            function needFinish(e) {
                                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                            }

                            function callFinal(e, t) {
                                e._final(function(n) {
                                    t.pendingcb--, n && M(e, n), t.prefinished = !0, e.emit("prefinish"), finishMaybe(e, t)
                                })
                            }

                            function finishMaybe(e, t) {
                                var n = needFinish(t);
                                if (n && (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, i.nextTick(callFinal, e, t))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                                    var p = e._readableState;
                                    (!p || p.autoDestroy && p.endEmitted) && e.destroy()
                                }
                                return n
                            }
                            p(782)(Writable, g), WritableState.prototype.getBuffer = function() {
                                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                                    return t
                                },
                                function() {
                                    try {
                                        Object.defineProperty(WritableState.prototype, "buffer", {
                                            get: m.deprecate(function() {
                                                return this.getBuffer()
                                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (e) {}
                                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (y = Function.prototype[Symbol.hasInstance], Object.defineProperty(Writable, Symbol.hasInstance, {
                                    value: function(e) {
                                        return !!y.call(this, e) || this === Writable && e && e._writableState instanceof WritableState
                                    }
                                })) : y = function(e) {
                                    return e instanceof this
                                }, Writable.prototype.pipe = function() {
                                    M(this, new _)
                                }, Writable.prototype.write = function(e, t, n) {
                                    var p, b, y, m, g, S, E, C = this._writableState,
                                        w = !1,
                                        A = !C.objectMode && (p = e, T.isBuffer(p) || p instanceof v);
                                    return A && !T.isBuffer(e) && (b = e, e = T.from(b)), ("function" == typeof t && (n = t, t = null), A ? t = "buffer" : t || (t = C.defaultEncoding), "function" != typeof n && (n = nop), C.ending) ? (y = n, M(this, m = new P), i.nextTick(y, m)) : (A || (g = e, S = n, null === g ? E = new k : "string" == typeof g || C.objectMode || (E = new I("chunk", ["string", "Buffer"], g)), !E || (M(this, E), i.nextTick(S, E), 0))) && (C.pendingcb++, w = function(e, t, n, i, p, b) {
                                        if (!n) {
                                            var y, m, g = (y = i, m = p, t.objectMode || !1 === t.decodeStrings || "string" != typeof y || (y = T.from(y, m)), y);
                                            i !== g && (n = !0, p = "buffer", i = g)
                                        }
                                        var v = t.objectMode ? 1 : i.length;
                                        t.length += v;
                                        var S = t.length < t.highWaterMark;
                                        if (S || (t.needDrain = !0), t.writing || t.corked) {
                                            var E = t.lastBufferedRequest;
                                            t.lastBufferedRequest = {
                                                chunk: i,
                                                encoding: p,
                                                isBuf: n,
                                                callback: b,
                                                next: null
                                            }, E ? E.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                                        } else doWrite(e, t, !1, v, i, p, b);
                                        return S
                                    }(this, C, A, e, t, n)), w
                                }, Writable.prototype.cork = function() {
                                    this._writableState.corked++
                                }, Writable.prototype.uncork = function() {
                                    var e = this._writableState;
                                    !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || clearBuffer(this, e))
                                }, Writable.prototype.setDefaultEncoding = function(e) {
                                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new O(e);
                                    return this._writableState.defaultEncoding = e, this
                                }, Object.defineProperty(Writable.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.highWaterMark
                                    }
                                }), Writable.prototype._write = function(e, t, n) {
                                    n(new w("_write()"))
                                }, Writable.prototype._writev = null, Writable.prototype.end = function(e, t, n) {
                                    var p, b = this._writableState;
                                    return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), b.corked && (b.corked = 1, this.uncork()), b.ending || (p = n, b.ending = !0, finishMaybe(this, b), p && (b.finished ? i.nextTick(p) : this.once("finish", p)), b.ended = !0, this.writable = !1), this
                                }, Object.defineProperty(Writable.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(Writable.prototype, "destroyed", {
                                    enumerable: !1,
                                    get: function() {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    },
                                    set: function(e) {
                                        this._writableState && (this._writableState.destroyed = e)
                                    }
                                }), Writable.prototype.destroy = S.destroy, Writable.prototype._undestroy = S.undestroy, Writable.prototype._destroy = function(e, t) {
                                    t(e)
                                }
                        },
                        871: function(e, t, n) {
                            "use strict";

                            function _defineProperty(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n, e
                            }
                            var p, b = n(698),
                                y = Symbol("lastResolve"),
                                m = Symbol("lastReject"),
                                g = Symbol("error"),
                                T = Symbol("ended"),
                                v = Symbol("lastPromise"),
                                S = Symbol("handlePromise"),
                                E = Symbol("stream");

                            function createIterResult(e, t) {
                                return {
                                    value: e,
                                    done: t
                                }
                            }

                            function readAndResolve(e) {
                                var t = e[y];
                                if (null !== t) {
                                    var n = e[E].read();
                                    null !== n && (e[v] = null, e[y] = null, e[m] = null, t(createIterResult(n, !1)))
                                }
                            }

                            function onReadable(e) {
                                i.nextTick(readAndResolve, e)
                            }
                            var C = Object.getPrototypeOf(function() {}),
                                I = Object.setPrototypeOf((_defineProperty(p = {
                                    get stream() {
                                        return this[E]
                                    },
                                    next: function() {
                                        var e, t, n = this,
                                            p = this[g];
                                        if (null !== p) return Promise.reject(p);
                                        if (this[T]) return Promise.resolve(createIterResult(void 0, !0));
                                        if (this[E].destroyed) return new Promise(function(e, t) {
                                            i.nextTick(function() {
                                                n[g] ? t(n[g]) : e(createIterResult(void 0, !0))
                                            })
                                        });
                                        var b = this[v];
                                        if (b) t = new Promise((e = this, function(t, n) {
                                            b.then(function() {
                                                if (e[T]) {
                                                    t(createIterResult(void 0, !0));
                                                    return
                                                }
                                                e[S](t, n)
                                            }, n)
                                        }));
                                        else {
                                            var y = this[E].read();
                                            if (null !== y) return Promise.resolve(createIterResult(y, !1));
                                            t = new Promise(this[S])
                                        }
                                        return this[v] = t, t
                                    }
                                }, Symbol.asyncIterator, function() {
                                    return this
                                }), _defineProperty(p, "return", function() {
                                    var e = this;
                                    return new Promise(function(t, n) {
                                        e[E].destroy(null, function(e) {
                                            if (e) {
                                                n(e);
                                                return
                                            }
                                            t(createIterResult(void 0, !0))
                                        })
                                    })
                                }), p), C);
                            e.exports = function(e) {
                                var t, n = Object.create(I, (_defineProperty(t = {}, E, {
                                    value: e,
                                    writable: !0
                                }), _defineProperty(t, y, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, m, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, g, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, T, {
                                    value: e._readableState.endEmitted,
                                    writable: !0
                                }), _defineProperty(t, S, {
                                    value: function(e, t) {
                                        var i = n[E].read();
                                        i ? (n[v] = null, n[y] = null, n[m] = null, e(createIterResult(i, !1))) : (n[y] = e, n[m] = t)
                                    },
                                    writable: !0
                                }), t));
                                return n[v] = null, b(e, function(e) {
                                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                        var t = n[m];
                                        null !== t && (n[v] = null, n[y] = null, n[m] = null, t(e)), n[g] = e;
                                        return
                                    }
                                    var i = n[y];
                                    null !== i && (n[v] = null, n[y] = null, n[m] = null, i(createIterResult(void 0, !0))), n[T] = !0
                                }), e.on("readable", onReadable.bind(null, n)), n
                            }
                        },
                        379: function(e, t, n) {
                            "use strict";

                            function ownKeys(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), n.push.apply(n, i)
                                }
                                return n
                            }

                            function _defineProperties(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            var i = n(300).Buffer,
                                p = n(837).inspect,
                                b = p && p.custom || "inspect";
                            e.exports = function() {
                                var e, t;

                                function BufferList() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, BufferList), this.head = null, this.tail = null, this.length = 0
                                }
                                return e = [{
                                    key: "push",
                                    value: function(e) {
                                        var t = {
                                            data: e,
                                            next: null
                                        };
                                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                                    }
                                }, {
                                    key: "unshift",
                                    value: function(e) {
                                        var t = {
                                            data: e,
                                            next: this.head
                                        };
                                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                                    }
                                }, {
                                    key: "shift",
                                    value: function() {
                                        if (0 !== this.length) {
                                            var e = this.head.data;
                                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                                        }
                                    }
                                }, {
                                    key: "clear",
                                    value: function() {
                                        this.head = this.tail = null, this.length = 0
                                    }
                                }, {
                                    key: "join",
                                    value: function(e) {
                                        if (0 === this.length) return "";
                                        for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                                        return n
                                    }
                                }, {
                                    key: "concat",
                                    value: function(e) {
                                        if (0 === this.length) return i.alloc(0);
                                        for (var t, n, p = i.allocUnsafe(e >>> 0), b = this.head, y = 0; b;) t = b.data, n = y, i.prototype.copy.call(t, p, n), y += b.data.length, b = b.next;
                                        return p
                                    }
                                }, {
                                    key: "consume",
                                    value: function(e, t) {
                                        var n;
                                        return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n
                                    }
                                }, {
                                    key: "first",
                                    value: function() {
                                        return this.head.data
                                    }
                                }, {
                                    key: "_getString",
                                    value: function(e) {
                                        var t = this.head,
                                            n = 1,
                                            i = t.data;
                                        for (e -= i.length; t = t.next;) {
                                            var p = t.data,
                                                b = e > p.length ? p.length : e;
                                            if (b === p.length ? i += p : i += p.slice(0, e), 0 == (e -= b)) {
                                                b === p.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = p.slice(b));
                                                break
                                            }++n
                                        }
                                        return this.length -= n, i
                                    }
                                }, {
                                    key: "_getBuffer",
                                    value: function(e) {
                                        var t = i.allocUnsafe(e),
                                            n = this.head,
                                            p = 1;
                                        for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                                            var b = n.data,
                                                y = e > b.length ? b.length : e;
                                            if (b.copy(t, t.length - e, 0, y), 0 == (e -= y)) {
                                                y === b.length ? (++p, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = b.slice(y));
                                                break
                                            }++p
                                        }
                                        return this.length -= p, t
                                    }
                                }, {
                                    key: b,
                                    value: function(e, t) {
                                        return p(this, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                                                    var i;
                                                    i = n[t], t in e ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : e[t] = i
                                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                })
                                            }
                                            return e
                                        }({}, t, {
                                            depth: 0,
                                            customInspect: !1
                                        }))
                                    }
                                }], _defineProperties(BufferList.prototype, e), t && _defineProperties(BufferList, t), BufferList
                            }()
                        },
                        25: function(e) {
                            "use strict";

                            function emitErrorAndCloseNT(e, t) {
                                emitErrorNT(e, t), emitCloseNT(e)
                            }

                            function emitCloseNT(e) {
                                (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close")
                            }

                            function emitErrorNT(e, t) {
                                e.emit("error", t)
                            }
                            e.exports = {
                                destroy: function(e, t) {
                                    var n = this,
                                        p = this._readableState && this._readableState.destroyed,
                                        b = this._writableState && this._writableState.destroyed;
                                    return p || b ? t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, i.nextTick(emitErrorNT, this, e)) : i.nextTick(emitErrorNT, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                                        !t && e ? n._writableState ? n._writableState.errorEmitted ? i.nextTick(emitCloseNT, n) : (n._writableState.errorEmitted = !0, i.nextTick(emitErrorAndCloseNT, n, e)) : i.nextTick(emitErrorAndCloseNT, n, e) : t ? (i.nextTick(emitCloseNT, n), t(e)) : i.nextTick(emitCloseNT, n)
                                    })), this
                                },
                                undestroy: function() {
                                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                },
                                errorOrDestroy: function(e, t) {
                                    var n = e._readableState,
                                        i = e._writableState;
                                    n && n.autoDestroy || i && i.autoDestroy ? e.destroy(t) : e.emit("error", t)
                                }
                            }
                        },
                        698: function(e, t, n) {
                            "use strict";
                            var i = n(646).q.ERR_STREAM_PREMATURE_CLOSE;

                            function noop() {}
                            e.exports = function eos(e, t, n) {
                                if ("function" == typeof t) return eos(e, null, t);
                                t || (t = {}), p = n || noop, b = !1, n = function() {
                                    if (!b) {
                                        b = !0;
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        p.apply(this, t)
                                    }
                                };
                                var p, b, y = t.readable || !1 !== t.readable && e.readable,
                                    m = t.writable || !1 !== t.writable && e.writable,
                                    o = function() {
                                        e.writable || f()
                                    },
                                    g = e._writableState && e._writableState.finished,
                                    f = function() {
                                        m = !1, g = !0, y || n.call(e)
                                    },
                                    T = e._readableState && e._readableState.endEmitted,
                                    u = function() {
                                        y = !1, T = !0, m || n.call(e)
                                    },
                                    d = function(t) {
                                        n.call(e, t)
                                    },
                                    c = function() {
                                        var t;
                                        return y && !T ? (e._readableState && e._readableState.ended || (t = new i), n.call(e, t)) : m && !g ? (e._writableState && e._writableState.ended || (t = new i), n.call(e, t)) : void 0
                                    },
                                    h = function() {
                                        e.req.on("finish", f)
                                    };
                                return e.setHeader && "function" == typeof e.abort ? (e.on("complete", f), e.on("abort", c), e.req ? h() : e.on("request", h)) : m && !e._writableState && (e.on("end", o), e.on("close", o)), e.on("end", u), e.on("finish", f), !1 !== t.error && e.on("error", d), e.on("close", c),
                                    function() {
                                        e.removeListener("complete", f), e.removeListener("abort", c), e.removeListener("request", h), e.req && e.req.removeListener("finish", f), e.removeListener("end", o), e.removeListener("close", o), e.removeListener("finish", f), e.removeListener("end", u), e.removeListener("error", d), e.removeListener("close", c)
                                    }
                            }
                        },
                        727: function(e, t, n) {
                            "use strict";

                            function asyncGeneratorStep(e, t, n, i, p, b, y) {
                                try {
                                    var m = e[b](y),
                                        g = m.value
                                } catch (e) {
                                    n(e);
                                    return
                                }
                                m.done ? t(g) : Promise.resolve(g).then(i, p)
                            }

                            function ownKeys(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), n.push.apply(n, i)
                                }
                                return n
                            }
                            var i = n(646).q.ERR_INVALID_ARG_TYPE;
                            e.exports = function(e, t, n) {
                                if (t && "function" == typeof t.next) p = t;
                                else if (t && t[Symbol.asyncIterator]) p = t[Symbol.asyncIterator]();
                                else if (t && t[Symbol.iterator]) p = t[Symbol.iterator]();
                                else throw new i("iterable", ["Iterable"], t);
                                var p, b = new e(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                                                var i;
                                                i = n[t], t in e ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : e[t] = i
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            })
                                        }
                                        return e
                                    }({
                                        objectMode: !0
                                    }, n)),
                                    y = !1;

                                function next() {
                                    return _next2.apply(this, arguments)
                                }

                                function _next2() {
                                    var e;
                                    return e = function*() {
                                        try {
                                            var e = yield p.next(), t = e.value;
                                            e.done ? b.push(null) : b.push((yield t)) ? next() : y = !1
                                        } catch (e) {
                                            b.destroy(e)
                                        }
                                    }, (_next2 = function() {
                                        var t = this,
                                            n = arguments;
                                        return new Promise(function(i, p) {
                                            var b = e.apply(t, n);

                                            function _next(e) {
                                                asyncGeneratorStep(b, i, p, _next, _throw, "next", e)
                                            }

                                            function _throw(e) {
                                                asyncGeneratorStep(b, i, p, _next, _throw, "throw", e)
                                            }
                                            _next(void 0)
                                        })
                                    }).apply(this, arguments)
                                }
                                return b._read = function() {
                                    y || (y = !0, next())
                                }, b
                            }
                        },
                        442: function(e, t, n) {
                            "use strict";
                            var i, p = n(646).q,
                                b = p.ERR_MISSING_ARGS,
                                y = p.ERR_STREAM_DESTROYED;

                            function noop(e) {
                                if (e) throw e
                            }

                            function call(e) {
                                e()
                            }

                            function pipe(e, t) {
                                return e.pipe(t)
                            }
                            e.exports = function() {
                                for (var e, t, p = arguments.length, m = Array(p), g = 0; g < p; g++) m[g] = arguments[g];
                                var T = (e = m).length && "function" == typeof e[e.length - 1] ? e.pop() : noop;
                                if (Array.isArray(m[0]) && (m = m[0]), m.length < 2) throw new b("streams");
                                var v = m.map(function(e, p) {
                                    var b, g, S, E, C, I = p < m.length - 1;
                                    return g = b = function(e) {
                                            t || (t = e), e && v.forEach(call), I || (v.forEach(call), T(t))
                                        }, S = !1, b = function() {
                                            S || (S = !0, g.apply(void 0, arguments))
                                        }, E = !1, e.on("close", function() {
                                            E = !0
                                        }), void 0 === i && (i = n(698)), i(e, {
                                            readable: I,
                                            writable: p > 0
                                        }, function(e) {
                                            if (e) return b(e);
                                            E = !0, b()
                                        }), C = !1,
                                        function(t) {
                                            if (!E && !C) {
                                                if (C = !0, e.setHeader && "function" == typeof e.abort) return e.abort();
                                                if ("function" == typeof e.destroy) return e.destroy();
                                                b(t || new y("pipe"))
                                            }
                                        }
                                });
                                return m.reduce(pipe)
                            }
                        },
                        776: function(e, t, n) {
                            "use strict";
                            var i = n(646).q.ERR_INVALID_OPT_VALUE;
                            e.exports = {
                                getHighWaterMark: function(e, t, n, p) {
                                    var b = null != t.highWaterMark ? t.highWaterMark : p ? t[n] : null;
                                    if (null != b) {
                                        if (!(isFinite(b) && Math.floor(b) === b) || b < 0) {
                                            var y = p ? n : "highWaterMark";
                                            throw new i(y, b)
                                        }
                                        return Math.floor(b)
                                    }
                                    return e.objectMode ? 16 : 16384
                                }
                            }
                        },
                        678: function(e, t, n) {
                            e.exports = n(781)
                        },
                        55: function(e, t, n) {
                            var i = n(300),
                                p = i.Buffer;

                            function copyProps(e, t) {
                                for (var n in e) t[n] = e[n]
                            }

                            function SafeBuffer(e, t, n) {
                                return p(e, t, n)
                            }
                            p.from && p.alloc && p.allocUnsafe && p.allocUnsafeSlow ? e.exports = i : (copyProps(i, t), t.Buffer = SafeBuffer), SafeBuffer.prototype = Object.create(p.prototype), copyProps(p, SafeBuffer), SafeBuffer.from = function(e, t, n) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return p(e, t, n)
                            }, SafeBuffer.alloc = function(e, t, n) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var i = p(e);
                                return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
                            }, SafeBuffer.allocUnsafe = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return p(e)
                            }, SafeBuffer.allocUnsafeSlow = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return i.SlowBuffer(e)
                            }
                        },
                        173: function(e, t, n) {
                            e.exports = Stream;
                            var i = n(361).EventEmitter;

                            function Stream() {
                                i.call(this)
                            }
                            n(782)(Stream, i), Stream.Readable = n(709), Stream.Writable = n(337), Stream.Duplex = n(403), Stream.Transform = n(170), Stream.PassThrough = n(889), Stream.finished = n(698), Stream.pipeline = n(442), Stream.Stream = Stream, Stream.prototype.pipe = function(e, t) {
                                var n = this;

                                function ondata(t) {
                                    e.writable && !1 === e.write(t) && n.pause && n.pause()
                                }

                                function ondrain() {
                                    n.readable && n.resume && n.resume()
                                }
                                n.on("data", ondata), e.on("drain", ondrain), e._isStdio || t && !1 === t.end || (n.on("end", onend), n.on("close", onclose));
                                var p = !1;

                                function onend() {
                                    p || (p = !0, e.end())
                                }

                                function onclose() {
                                    p || (p = !0, "function" == typeof e.destroy && e.destroy())
                                }

                                function onerror(e) {
                                    if (cleanup(), 0 === i.listenerCount(this, "error")) throw e
                                }

                                function cleanup() {
                                    n.removeListener("data", ondata), e.removeListener("drain", ondrain), n.removeListener("end", onend), n.removeListener("close", onclose), n.removeListener("error", onerror), e.removeListener("error", onerror), n.removeListener("end", cleanup), n.removeListener("close", cleanup), e.removeListener("close", cleanup)
                                }
                                return n.on("error", onerror), e.on("error", onerror), n.on("end", cleanup), n.on("close", cleanup), e.on("close", cleanup), e.emit("pipe", n), e
                            }
                        },
                        704: function(e, t, n) {
                            "use strict";
                            var i = n(55).Buffer,
                                p = i.isEncoding || function(e) {
                                    switch ((e = "" + e) && e.toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                        case "raw":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                };

                            function StringDecoder(e) {
                                var t;
                                switch (this.encoding = function(e) {
                                    var t = function(e) {
                                        var t;
                                        if (!e) return "utf8";
                                        for (;;) switch (e) {
                                            case "utf8":
                                            case "utf-8":
                                                return "utf8";
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return "utf16le";
                                            case "latin1":
                                            case "binary":
                                                return "latin1";
                                            case "base64":
                                            case "ascii":
                                            case "hex":
                                                return e;
                                            default:
                                                if (t) return;
                                                e = ("" + e).toLowerCase(), t = !0
                                        }
                                    }(e);
                                    if ("string" != typeof t && (i.isEncoding === p || !p(e))) throw Error("Unknown encoding: " + e);
                                    return t || e
                                }(e), this.encoding) {
                                    case "utf16le":
                                        this.text = utf16Text, this.end = utf16End, t = 4;
                                        break;
                                    case "utf8":
                                        this.fillLast = utf8FillLast, t = 4;
                                        break;
                                    case "base64":
                                        this.text = base64Text, this.end = base64End, t = 3;
                                        break;
                                    default:
                                        this.write = simpleWrite, this.end = simpleEnd;
                                        return
                                }
                                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = i.allocUnsafe(t)
                            }

                            function utf8CheckByte(e) {
                                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                            }

                            function utf8FillLast(e) {
                                var t = this.lastTotal - this.lastNeed,
                                    n = function(e, t, n) {
                                        if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                                        if (e.lastNeed > 1 && t.length > 1) {
                                            if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                                            if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                                        }
                                    }(this, e, 0);
                                return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
                            }

                            function utf16Text(e, t) {
                                if ((e.length - t) % 2 == 0) {
                                    var n = e.toString("utf16le", t);
                                    if (n) {
                                        var i = n.charCodeAt(n.length - 1);
                                        if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                                    }
                                    return n
                                }
                                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                            }

                            function utf16End(e) {
                                var t = e && e.length ? this.write(e) : "";
                                if (this.lastNeed) {
                                    var n = this.lastTotal - this.lastNeed;
                                    return t + this.lastChar.toString("utf16le", 0, n)
                                }
                                return t
                            }

                            function base64Text(e, t) {
                                var n = (e.length - t) % 3;
                                return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
                            }

                            function base64End(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                            }

                            function simpleWrite(e) {
                                return e.toString(this.encoding)
                            }

                            function simpleEnd(e) {
                                return e && e.length ? this.write(e) : ""
                            }
                            t.s = StringDecoder, StringDecoder.prototype.write = function(e) {
                                var t, n;
                                if (0 === e.length) return "";
                                if (this.lastNeed) {
                                    if (void 0 === (t = this.fillLast(e))) return "";
                                    n = this.lastNeed, this.lastNeed = 0
                                } else n = 0;
                                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
                            }, StringDecoder.prototype.end = function(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + "�" : t
                            }, StringDecoder.prototype.text = function(e, t) {
                                var n = function(e, t, n) {
                                    var i = t.length - 1;
                                    if (i < n) return 0;
                                    var p = utf8CheckByte(t[i]);
                                    return p >= 0 ? (p > 0 && (e.lastNeed = p - 1), p) : --i < n || -2 === p ? 0 : (p = utf8CheckByte(t[i])) >= 0 ? (p > 0 && (e.lastNeed = p - 2), p) : --i < n || -2 === p ? 0 : (p = utf8CheckByte(t[i])) >= 0 ? (p > 0 && (2 === p ? p = 0 : e.lastNeed = p - 3), p) : 0
                                }(this, e, t);
                                if (!this.lastNeed) return e.toString("utf8", t);
                                this.lastTotal = n;
                                var i = e.length - (n - this.lastNeed);
                                return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i)
                            }, StringDecoder.prototype.fillLast = function(e) {
                                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                            }
                        },
                        769: function(e) {
                            e.exports = function(e, t) {
                                if (config("noDeprecation")) return e;
                                var n = !1;
                                return function() {
                                    if (!n) {
                                        if (config("throwDeprecation")) throw Error(t);
                                        config("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                                    }
                                    return e.apply(this, arguments)
                                }
                            };

                            function config(e) {
                                try {
                                    if (!n.g.localStorage) return !1
                                } catch (e) {
                                    return !1
                                }
                                var t = n.g.localStorage[e];
                                return null != t && "true" === String(t).toLowerCase()
                            }
                        },
                        300: function(e) {
                            "use strict";
                            e.exports = n(67133)
                        },
                        361: function(e) {
                            "use strict";
                            e.exports = n(512)
                        },
                        781: function(e) {
                            "use strict";
                            e.exports = n(512).EventEmitter
                        },
                        837: function(e) {
                            "use strict";
                            e.exports = n(40942)
                        }
                    },
                    p = {};

                function __nccwpck_require__(e) {
                    var n = p[e];
                    if (void 0 !== n) return n.exports;
                    var i = p[e] = {
                            exports: {}
                        },
                        b = !0;
                    try {
                        t[e](i, i.exports, __nccwpck_require__), b = !1
                    } finally {
                        b && delete p[e]
                    }
                    return i.exports
                }
                __nccwpck_require__.ab = "//";
                var b = __nccwpck_require__(173);
                e.exports = b
            }()
        },
        72909: function(e, t, n) {
            var i = n(25566),
                p = n(67133).Buffer;
            ! function() {
                var t = {
                        523: function(e) {
                            e.exports = {
                                100: "Continue",
                                101: "Switching Protocols",
                                102: "Processing",
                                200: "OK",
                                201: "Created",
                                202: "Accepted",
                                203: "Non-Authoritative Information",
                                204: "No Content",
                                205: "Reset Content",
                                206: "Partial Content",
                                207: "Multi-Status",
                                208: "Already Reported",
                                226: "IM Used",
                                300: "Multiple Choices",
                                301: "Moved Permanently",
                                302: "Found",
                                303: "See Other",
                                304: "Not Modified",
                                305: "Use Proxy",
                                307: "Temporary Redirect",
                                308: "Permanent Redirect",
                                400: "Bad Request",
                                401: "Unauthorized",
                                402: "Payment Required",
                                403: "Forbidden",
                                404: "Not Found",
                                405: "Method Not Allowed",
                                406: "Not Acceptable",
                                407: "Proxy Authentication Required",
                                408: "Request Timeout",
                                409: "Conflict",
                                410: "Gone",
                                411: "Length Required",
                                412: "Precondition Failed",
                                413: "Payload Too Large",
                                414: "URI Too Long",
                                415: "Unsupported Media Type",
                                416: "Range Not Satisfiable",
                                417: "Expectation Failed",
                                418: "I'm a teapot",
                                421: "Misdirected Request",
                                422: "Unprocessable Entity",
                                423: "Locked",
                                424: "Failed Dependency",
                                425: "Unordered Collection",
                                426: "Upgrade Required",
                                428: "Precondition Required",
                                429: "Too Many Requests",
                                431: "Request Header Fields Too Large",
                                451: "Unavailable For Legal Reasons",
                                500: "Internal Server Error",
                                501: "Not Implemented",
                                502: "Bad Gateway",
                                503: "Service Unavailable",
                                504: "Gateway Timeout",
                                505: "HTTP Version Not Supported",
                                506: "Variant Also Negotiates",
                                507: "Insufficient Storage",
                                508: "Loop Detected",
                                509: "Bandwidth Limit Exceeded",
                                510: "Not Extended",
                                511: "Network Authentication Required"
                            }
                        },
                        782: function(e) {
                            "function" == typeof Object.create ? e.exports = function(e, t) {
                                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : e.exports = function(e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var TempCtor = function() {};
                                    TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                                }
                            }
                        },
                        646: function(e) {
                            "use strict";
                            let t = {};

                            function createErrorType(e, n, i) {
                                i || (i = Error);
                                let NodeError = class NodeError extends i {
                                    constructor(e, t, i) {
                                        super("string" == typeof n ? n : n(e, t, i))
                                    }
                                };
                                NodeError.prototype.name = i.name, NodeError.prototype.code = e, t[e] = NodeError
                            }

                            function oneOf(e, t) {
                                if (!Array.isArray(e)) return `of ${t} ${String(e)}`; {
                                    let n = e.length;
                                    return (e = e.map(e => String(e)), n > 2) ? `one of ${t} ${e.slice(0,n-1).join(", ")}, or ` + e[n - 1] : 2 === n ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
                                }
                            }
                            createErrorType("ERR_INVALID_OPT_VALUE", function(e, t) {
                                return 'The value "' + t + '" is invalid for option "' + e + '"'
                            }, TypeError), createErrorType("ERR_INVALID_ARG_TYPE", function(e, t, n) {
                                var i, p, b, y, m;
                                let g, T;
                                if ("string" == typeof t && (i = "not ", t.substr(!p || p < 0 ? 0 : +p, i.length) === i) ? (g = "must not be", t = t.replace(/^not /, "")) : g = "must be", b = " argument", (void 0 === y || y > e.length) && (y = e.length), e.substring(y - b.length, y) === b) T = `The ${e} ${g} ${oneOf(t,"type")}`;
                                else {
                                    let n = ("number" != typeof m && (m = 0), m + 1 > e.length || -1 === e.indexOf(".", m)) ? "argument" : "property";
                                    T = `The "${e}" ${n} ${g} ${oneOf(t,"type")}`
                                }
                                return T + `. Received type ${typeof n}`
                            }, TypeError), createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                                return "The " + e + " method is not implemented"
                            }), createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), createErrorType("ERR_STREAM_DESTROYED", function(e) {
                                return "Cannot call " + e + " after a stream was destroyed"
                            }), createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end"), createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), createErrorType("ERR_UNKNOWN_ENCODING", function(e) {
                                return "Unknown encoding: " + e
                            }, TypeError), createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
                        },
                        403: function(e, t, n) {
                            "use strict";
                            var p = Object.keys || function(e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return t
                            };
                            e.exports = Duplex;
                            var b = n(709),
                                y = n(337);
                            n(782)(Duplex, b);
                            for (var m = p(y.prototype), g = 0; g < m.length; g++) {
                                var T = m[g];
                                Duplex.prototype[T] || (Duplex.prototype[T] = y.prototype[T])
                            }

                            function Duplex(e) {
                                if (!(this instanceof Duplex)) return new Duplex(e);
                                b.call(this, e), y.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", onend)))
                            }

                            function onend() {
                                this._writableState.ended || i.nextTick(onEndNT, this)
                            }

                            function onEndNT(e) {
                                e.end()
                            }
                            Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.highWaterMark
                                }
                            }), Object.defineProperty(Duplex.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState && this._writableState.getBuffer()
                                }
                            }), Object.defineProperty(Duplex.prototype, "writableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.length
                                }
                            }), Object.defineProperty(Duplex.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                                },
                                set: function(e) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                                }
                            })
                        },
                        889: function(e, t, n) {
                            "use strict";
                            e.exports = PassThrough;
                            var i = n(170);

                            function PassThrough(e) {
                                if (!(this instanceof PassThrough)) return new PassThrough(e);
                                i.call(this, e)
                            }
                            n(782)(PassThrough, i), PassThrough.prototype._transform = function(e, t, n) {
                                n(null, e)
                            }
                        },
                        709: function(e, t, p) {
                            "use strict";
                            e.exports = Readable, Readable.ReadableState = ReadableState, p(361).EventEmitter;
                            var b, y, m, g, T, a = function(e, t) {
                                    return e.listeners(t).length
                                },
                                v = p(678),
                                S = p(300).Buffer,
                                E = n.g.Uint8Array || function() {},
                                C = p(837);
                            y = C && C.debuglog ? C.debuglog("stream") : function() {};
                            var I = p(379),
                                w = p(25),
                                A = p(776).getHighWaterMark,
                                _ = p(646).q,
                                R = _.ERR_INVALID_ARG_TYPE,
                                k = _.ERR_STREAM_PUSH_AFTER_EOF,
                                P = _.ERR_METHOD_NOT_IMPLEMENTED,
                                O = _.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                            p(782)(Readable, v);
                            var M = w.errorOrDestroy,
                                x = ["error", "close", "destroy", "pause", "resume"];

                            function ReadableState(e, t, n) {
                                b = b || p(403), e = e || {}, "boolean" != typeof n && (n = t instanceof b), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = A(this, e, "readableHighWaterMark", n), this.buffer = new I, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (m || (m = p(704).s), this.decoder = new m(e.encoding), this.encoding = e.encoding)
                            }

                            function Readable(e) {
                                if (b = b || p(403), !(this instanceof Readable)) return new Readable(e);
                                var t = this instanceof b;
                                this._readableState = new ReadableState(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), v.call(this)
                            }

                            function readableAddChunk(e, t, n, i, p) {
                                y("readableAddChunk", t);
                                var b, m, g, T, v, C = e._readableState;
                                if (null === t) C.reading = !1,
                                    function(e, t) {
                                        if (y("onEofChunk"), !t.ended) {
                                            if (t.decoder) {
                                                var n = t.decoder.end();
                                                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                                            }
                                            t.ended = !0, t.sync ? emitReadable(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, emitReadable_(e)))
                                        }
                                    }(e, C);
                                else {
                                    if (p || (b = C, m = t, S.isBuffer(m) || m instanceof E || "string" == typeof m || void 0 === m || b.objectMode || (g = new R("chunk", ["string", "Buffer", "Uint8Array"], m)), v = g), v) M(e, v);
                                    else if (C.objectMode || t && t.length > 0) {
                                        if ("string" == typeof t || C.objectMode || Object.getPrototypeOf(t) === S.prototype || (T = t, t = S.from(T)), i) C.endEmitted ? M(e, new O) : addChunk(e, C, t, !0);
                                        else if (C.ended) M(e, new k);
                                        else {
                                            if (C.destroyed) return !1;
                                            C.reading = !1, C.decoder && !n ? (t = C.decoder.write(t), C.objectMode || 0 !== t.length ? addChunk(e, C, t, !1) : maybeReadMore(e, C)) : addChunk(e, C, t, !1)
                                        }
                                    } else i || (C.reading = !1, maybeReadMore(e, C))
                                }
                                return !C.ended && (C.length < C.highWaterMark || 0 === C.length)
                            }

                            function addChunk(e, t, n, i) {
                                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && emitReadable(e)), maybeReadMore(e, t)
                            }

                            function howMuchToRead(e, t) {
                                if (e <= 0 || 0 === t.length && t.ended) return 0;
                                if (t.objectMode) return 1;
                                if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                                if (e > t.highWaterMark) {
                                    var n;
                                    t.highWaterMark = ((n = e) >= 1073741824 ? n = 1073741824 : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n)
                                }
                                return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
                            }

                            function emitReadable(e) {
                                var t = e._readableState;
                                y("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (y("emitReadable", t.flowing), t.emittedReadable = !0, i.nextTick(emitReadable_, e))
                            }

                            function emitReadable_(e) {
                                var t = e._readableState;
                                y("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, flow(e)
                            }

                            function maybeReadMore(e, t) {
                                t.readingMore || (t.readingMore = !0, i.nextTick(maybeReadMore_, e, t))
                            }

                            function maybeReadMore_(e, t) {
                                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                                    var n = t.length;
                                    if (y("maybeReadMore read 0"), e.read(0), n === t.length) break
                                }
                                t.readingMore = !1
                            }

                            function updateReadableListening(e) {
                                var t = e._readableState;
                                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                            }

                            function nReadingNextTick(e) {
                                y("readable nexttick read 0"), e.read(0)
                            }

                            function resume_(e, t) {
                                y("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), flow(e), t.flowing && !t.reading && e.read(0)
                            }

                            function flow(e) {
                                var t = e._readableState;
                                for (y("flow", t.flowing); t.flowing && null !== e.read(););
                            }

                            function fromList(e, t) {
                                var n;
                                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n)
                            }

                            function endReadable(e) {
                                var t = e._readableState;
                                y("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, i.nextTick(endReadableNT, t, e))
                            }

                            function endReadableNT(e, t) {
                                if (y("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                                    var n = t._writableState;
                                    (!n || n.autoDestroy && n.finished) && t.destroy()
                                }
                            }

                            function indexOf(e, t) {
                                for (var n = 0, i = e.length; n < i; n++)
                                    if (e[n] === t) return n;
                                return -1
                            }
                            Object.defineProperty(Readable.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && this._readableState.destroyed
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.destroyed = e)
                                }
                            }), Readable.prototype.destroy = w.destroy, Readable.prototype._undestroy = w.undestroy, Readable.prototype._destroy = function(e, t) {
                                t(e)
                            }, Readable.prototype.push = function(e, t) {
                                var n, i = this._readableState;
                                return i.objectMode ? n = !0 : "string" == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = S.from(e, t), t = ""), n = !0), readableAddChunk(this, e, t, !1, n)
                            }, Readable.prototype.unshift = function(e) {
                                return readableAddChunk(this, e, null, !0, !1)
                            }, Readable.prototype.isPaused = function() {
                                return !1 === this._readableState.flowing
                            }, Readable.prototype.setEncoding = function(e) {
                                m || (m = p(704).s);
                                var t = new m(e);
                                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                                for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
                                return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
                            }, Readable.prototype.read = function(e) {
                                y("read", e), e = parseInt(e, 10);
                                var t, n = this._readableState,
                                    i = e;
                                if (0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended)) return y("read: emitReadable", n.length, n.ended), 0 === n.length && n.ended ? endReadable(this) : emitReadable(this), null;
                                if (0 === (e = howMuchToRead(e, n)) && n.ended) return 0 === n.length && endReadable(this), null;
                                var p = n.needReadable;
                                return y("need readable", p), (0 === n.length || n.length - e < n.highWaterMark) && y("length less than watermark", p = !0), n.ended || n.reading ? y("reading or ended", p = !1) : p && (y("do read"), n.reading = !0, n.sync = !0, 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), n.sync = !1, n.reading || (e = howMuchToRead(i, n))), null === (t = e > 0 ? fromList(e, n) : null) ? (n.needReadable = n.length <= n.highWaterMark, e = 0) : (n.length -= e, n.awaitDrain = 0), 0 === n.length && (n.ended || (n.needReadable = !0), i !== e && n.ended && endReadable(this)), null !== t && this.emit("data", t), t
                            }, Readable.prototype._read = function(e) {
                                M(this, new P("_read()"))
                            }, Readable.prototype.pipe = function(e, t) {
                                var n = this,
                                    p = this._readableState;
                                switch (p.pipesCount) {
                                    case 0:
                                        p.pipes = e;
                                        break;
                                    case 1:
                                        p.pipes = [p.pipes, e];
                                        break;
                                    default:
                                        p.pipes.push(e)
                                }
                                p.pipesCount += 1, y("pipe count=%d opts=%j", p.pipesCount, t);
                                var b = t && !1 === t.end || e === i.stdout || e === i.stderr ? unpipe : onend;

                                function onend() {
                                    y("onend"), e.end()
                                }
                                p.endEmitted ? i.nextTick(b) : n.once("end", b), e.on("unpipe", function onunpipe(t, i) {
                                    y("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, y("cleanup"), e.removeListener("close", onclose), e.removeListener("finish", onfinish), e.removeListener("drain", s), e.removeListener("error", onerror), e.removeListener("unpipe", onunpipe), n.removeListener("end", onend), n.removeListener("end", unpipe), n.removeListener("data", ondata), m = !0, p.awaitDrain && (!e._writableState || e._writableState.needDrain) && s())
                                });
                                var s = function() {
                                    var e = n._readableState;
                                    y("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(n, "data") && (e.flowing = !0, flow(n))
                                };
                                e.on("drain", s);
                                var m = !1;

                                function ondata(t) {
                                    y("ondata");
                                    var i = e.write(t);
                                    y("dest.write", i), !1 === i && ((1 === p.pipesCount && p.pipes === e || p.pipesCount > 1 && -1 !== indexOf(p.pipes, e)) && !m && (y("false write response, pause", p.awaitDrain), p.awaitDrain++), n.pause())
                                }

                                function onerror(t) {
                                    y("onerror", t), unpipe(), e.removeListener("error", onerror), 0 === a(e, "error") && M(e, t)
                                }

                                function onclose() {
                                    e.removeListener("finish", onfinish), unpipe()
                                }

                                function onfinish() {
                                    y("onfinish"), e.removeListener("close", onclose), unpipe()
                                }

                                function unpipe() {
                                    y("unpipe"), n.unpipe(e)
                                }
                                return n.on("data", ondata),
                                    function(e, t, n) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
                                    }(e, "error", onerror), e.once("close", onclose), e.once("finish", onfinish), e.emit("pipe", n), p.flowing || (y("pipe resume"), n.resume()), e
                            }, Readable.prototype.unpipe = function(e) {
                                var t = this._readableState,
                                    n = {
                                        hasUnpiped: !1
                                    };
                                if (0 === t.pipesCount) return this;
                                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
                                if (!e) {
                                    var i = t.pipes,
                                        p = t.pipesCount;
                                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                                    for (var b = 0; b < p; b++) i[b].emit("unpipe", this, {
                                        hasUnpiped: !1
                                    });
                                    return this
                                }
                                var y = indexOf(t.pipes, e);
                                return -1 === y || (t.pipes.splice(y, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this
                            }, Readable.prototype.on = function(e, t) {
                                var n = v.prototype.on.call(this, e, t),
                                    p = this._readableState;
                                return "data" === e ? (p.readableListening = this.listenerCount("readable") > 0, !1 !== p.flowing && this.resume()) : "readable" !== e || p.endEmitted || p.readableListening || (p.readableListening = p.needReadable = !0, p.flowing = !1, p.emittedReadable = !1, y("on readable", p.length, p.reading), p.length ? emitReadable(this) : p.reading || i.nextTick(nReadingNextTick, this)), n
                            }, Readable.prototype.addListener = Readable.prototype.on, Readable.prototype.removeListener = function(e, t) {
                                var n = v.prototype.removeListener.call(this, e, t);
                                return "readable" === e && i.nextTick(updateReadableListening, this), n
                            }, Readable.prototype.removeAllListeners = function(e) {
                                var t = v.prototype.removeAllListeners.apply(this, arguments);
                                return ("readable" === e || void 0 === e) && i.nextTick(updateReadableListening, this), t
                            }, Readable.prototype.resume = function() {
                                var e = this._readableState;
                                return e.flowing || (y("resume"), e.flowing = !e.readableListening, e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(resume_, this, e))), e.paused = !1, this
                            }, Readable.prototype.pause = function() {
                                return y("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                            }, Readable.prototype.wrap = function(e) {
                                var t = this,
                                    n = this._readableState,
                                    i = !1;
                                for (var p in e.on("end", function() {
                                        if (y("wrapped end"), n.decoder && !n.ended) {
                                            var e = n.decoder.end();
                                            e && e.length && t.push(e)
                                        }
                                        t.push(null)
                                    }), e.on("data", function(p) {
                                        y("wrapped data"), n.decoder && (p = n.decoder.write(p)), (!n.objectMode || null != p) && (n.objectMode || p && p.length) && (t.push(p) || (i = !0, e.pause()))
                                    }), e) void 0 === this[p] && "function" == typeof e[p] && (this[p] = function(t) {
                                    return function() {
                                        return e[t].apply(e, arguments)
                                    }
                                }(p));
                                for (var b = 0; b < x.length; b++) e.on(x[b], this.emit.bind(this, x[b]));
                                return this._read = function(t) {
                                    y("wrapped _read", t), i && (i = !1, e.resume())
                                }, this
                            }, "function" == typeof Symbol && (Readable.prototype[Symbol.asyncIterator] = function() {
                                return void 0 === g && (g = p(871)), g(this)
                            }), Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.highWaterMark
                                }
                            }), Object.defineProperty(Readable.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState && this._readableState.buffer
                                }
                            }), Object.defineProperty(Readable.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.flowing
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.flowing = e)
                                }
                            }), Readable._fromList = fromList, Object.defineProperty(Readable.prototype, "readableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.length
                                }
                            }), "function" == typeof Symbol && (Readable.from = function(e, t) {
                                return void 0 === T && (T = p(727)), T(Readable, e, t)
                            })
                        },
                        170: function(e, t, n) {
                            "use strict";
                            e.exports = Transform;
                            var i = n(646).q,
                                p = i.ERR_METHOD_NOT_IMPLEMENTED,
                                b = i.ERR_MULTIPLE_CALLBACK,
                                y = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                m = i.ERR_TRANSFORM_WITH_LENGTH_0,
                                g = n(403);

                            function afterTransform(e, t) {
                                var n = this._transformState;
                                n.transforming = !1;
                                var i = n.writecb;
                                if (null === i) return this.emit("error", new b);
                                n.writechunk = null, n.writecb = null, null != t && this.push(t), i(e);
                                var p = this._readableState;
                                p.reading = !1, (p.needReadable || p.length < p.highWaterMark) && this._read(p.highWaterMark)
                            }

                            function Transform(e) {
                                if (!(this instanceof Transform)) return new Transform(e);
                                g.call(this, e), this._transformState = {
                                    afterTransform: afterTransform.bind(this),
                                    needTransform: !1,
                                    transforming: !1,
                                    writecb: null,
                                    writechunk: null,
                                    writeencoding: null
                                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", prefinish)
                            }

                            function prefinish() {
                                var e = this;
                                "function" != typeof this._flush || this._readableState.destroyed ? done(this, null, null) : this._flush(function(t, n) {
                                    done(e, t, n)
                                })
                            }

                            function done(e, t, n) {
                                if (t) return e.emit("error", t);
                                if (null != n && e.push(n), e._writableState.length) throw new m;
                                if (e._transformState.transforming) throw new y;
                                return e.push(null)
                            }
                            n(782)(Transform, g), Transform.prototype.push = function(e, t) {
                                return this._transformState.needTransform = !1, g.prototype.push.call(this, e, t)
                            }, Transform.prototype._transform = function(e, t, n) {
                                n(new p("_transform()"))
                            }, Transform.prototype._write = function(e, t, n) {
                                var i = this._transformState;
                                if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
                                    var p = this._readableState;
                                    (i.needTransform || p.needReadable || p.length < p.highWaterMark) && this._read(p.highWaterMark)
                                }
                            }, Transform.prototype._read = function(e) {
                                var t = this._transformState;
                                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                            }, Transform.prototype._destroy = function(e, t) {
                                g.prototype._destroy.call(this, e, function(e) {
                                    t(e)
                                })
                            }
                        },
                        337: function(e, t, p) {
                            "use strict";

                            function CorkedRequest(e) {
                                var t = this;
                                this.next = null, this.entry = null, this.finish = function() {
                                    (function(e, t, n) {
                                        var i = e.entry;
                                        for (e.entry = null; i;) {
                                            var p = i.callback;
                                            t.pendingcb--, p(void 0), i = i.next
                                        }
                                        t.corkedRequestsFree.next = e
                                    })(t, e)
                                }
                            }
                            e.exports = Writable, Writable.WritableState = WritableState;
                            var b, y, m = {
                                    deprecate: p(769)
                                },
                                g = p(678),
                                T = p(300).Buffer,
                                v = n.g.Uint8Array || function() {},
                                S = p(25),
                                E = p(776).getHighWaterMark,
                                C = p(646).q,
                                I = C.ERR_INVALID_ARG_TYPE,
                                w = C.ERR_METHOD_NOT_IMPLEMENTED,
                                A = C.ERR_MULTIPLE_CALLBACK,
                                _ = C.ERR_STREAM_CANNOT_PIPE,
                                R = C.ERR_STREAM_DESTROYED,
                                k = C.ERR_STREAM_NULL_VALUES,
                                P = C.ERR_STREAM_WRITE_AFTER_END,
                                O = C.ERR_UNKNOWN_ENCODING,
                                M = S.errorOrDestroy;

                            function nop() {}

                            function WritableState(e, t, n) {
                                b = b || p(403), e = e || {}, "boolean" != typeof n && (n = t instanceof b), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = E(this, e, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                var y = !1 === e.decodeStrings;
                                this.decodeStrings = !y, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                                    (function(e, t) {
                                        var n = e._writableState,
                                            p = n.sync,
                                            b = n.writecb;
                                        if ("function" != typeof b) throw new A;
                                        if (n.writing = !1, n.writecb = null, n.length -= n.writelen, n.writelen = 0, t) --n.pendingcb, p ? (i.nextTick(b, t), i.nextTick(finishMaybe, e, n), e._writableState.errorEmitted = !0, M(e, t)) : (b(t), e._writableState.errorEmitted = !0, M(e, t), finishMaybe(e, n));
                                        else {
                                            var y = needFinish(n) || e.destroyed;
                                            y || n.corked || n.bufferProcessing || !n.bufferedRequest || clearBuffer(e, n), p ? i.nextTick(afterWrite, e, n, y, b) : afterWrite(e, n, y, b)
                                        }
                                    })(t, e)
                                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new CorkedRequest(this)
                            }

                            function Writable(e) {
                                var t = this instanceof(b = b || p(403));
                                if (!t && !y.call(Writable, this)) return new Writable(e);
                                this._writableState = new WritableState(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), g.call(this)
                            }

                            function doWrite(e, t, n, i, p, b, y) {
                                t.writelen = i, t.writecb = y, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new R("write")) : n ? e._writev(p, t.onwrite) : e._write(p, b, t.onwrite), t.sync = !1
                            }

                            function afterWrite(e, t, n, i) {
                                n || 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")), t.pendingcb--, i(), finishMaybe(e, t)
                            }

                            function clearBuffer(e, t) {
                                t.bufferProcessing = !0;
                                var n = t.bufferedRequest;
                                if (e._writev && n && n.next) {
                                    var i = Array(t.bufferedRequestCount),
                                        p = t.corkedRequestsFree;
                                    p.entry = n;
                                    for (var b = 0, y = !0; n;) i[b] = n, n.isBuf || (y = !1), n = n.next, b += 1;
                                    i.allBuffers = y, doWrite(e, t, !0, t.length, i, "", p.finish), t.pendingcb++, t.lastBufferedRequest = null, p.next ? (t.corkedRequestsFree = p.next, p.next = null) : t.corkedRequestsFree = new CorkedRequest(t), t.bufferedRequestCount = 0
                                } else {
                                    for (; n;) {
                                        var m = n.chunk,
                                            g = n.encoding,
                                            T = n.callback,
                                            v = t.objectMode ? 1 : m.length;
                                        if (doWrite(e, t, !1, v, m, g, T), n = n.next, t.bufferedRequestCount--, t.writing) break
                                    }
                                    null === n && (t.lastBufferedRequest = null)
                                }
                                t.bufferedRequest = n, t.bufferProcessing = !1
                            }

                            function needFinish(e) {
                                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                            }

                            function callFinal(e, t) {
                                e._final(function(n) {
                                    t.pendingcb--, n && M(e, n), t.prefinished = !0, e.emit("prefinish"), finishMaybe(e, t)
                                })
                            }

                            function finishMaybe(e, t) {
                                var n = needFinish(t);
                                if (n && (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, i.nextTick(callFinal, e, t))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                                    var p = e._readableState;
                                    (!p || p.autoDestroy && p.endEmitted) && e.destroy()
                                }
                                return n
                            }
                            p(782)(Writable, g), WritableState.prototype.getBuffer = function() {
                                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                                    return t
                                },
                                function() {
                                    try {
                                        Object.defineProperty(WritableState.prototype, "buffer", {
                                            get: m.deprecate(function() {
                                                return this.getBuffer()
                                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (e) {}
                                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (y = Function.prototype[Symbol.hasInstance], Object.defineProperty(Writable, Symbol.hasInstance, {
                                    value: function(e) {
                                        return !!y.call(this, e) || this === Writable && e && e._writableState instanceof WritableState
                                    }
                                })) : y = function(e) {
                                    return e instanceof this
                                }, Writable.prototype.pipe = function() {
                                    M(this, new _)
                                }, Writable.prototype.write = function(e, t, n) {
                                    var p, b, y, m, g, S, E, C = this._writableState,
                                        w = !1,
                                        A = !C.objectMode && (p = e, T.isBuffer(p) || p instanceof v);
                                    return A && !T.isBuffer(e) && (b = e, e = T.from(b)), ("function" == typeof t && (n = t, t = null), A ? t = "buffer" : t || (t = C.defaultEncoding), "function" != typeof n && (n = nop), C.ending) ? (y = n, M(this, m = new P), i.nextTick(y, m)) : (A || (g = e, S = n, null === g ? E = new k : "string" == typeof g || C.objectMode || (E = new I("chunk", ["string", "Buffer"], g)), !E || (M(this, E), i.nextTick(S, E), 0))) && (C.pendingcb++, w = function(e, t, n, i, p, b) {
                                        if (!n) {
                                            var y, m, g = (y = i, m = p, t.objectMode || !1 === t.decodeStrings || "string" != typeof y || (y = T.from(y, m)), y);
                                            i !== g && (n = !0, p = "buffer", i = g)
                                        }
                                        var v = t.objectMode ? 1 : i.length;
                                        t.length += v;
                                        var S = t.length < t.highWaterMark;
                                        if (S || (t.needDrain = !0), t.writing || t.corked) {
                                            var E = t.lastBufferedRequest;
                                            t.lastBufferedRequest = {
                                                chunk: i,
                                                encoding: p,
                                                isBuf: n,
                                                callback: b,
                                                next: null
                                            }, E ? E.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                                        } else doWrite(e, t, !1, v, i, p, b);
                                        return S
                                    }(this, C, A, e, t, n)), w
                                }, Writable.prototype.cork = function() {
                                    this._writableState.corked++
                                }, Writable.prototype.uncork = function() {
                                    var e = this._writableState;
                                    !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || clearBuffer(this, e))
                                }, Writable.prototype.setDefaultEncoding = function(e) {
                                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new O(e);
                                    return this._writableState.defaultEncoding = e, this
                                }, Object.defineProperty(Writable.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.highWaterMark
                                    }
                                }), Writable.prototype._write = function(e, t, n) {
                                    n(new w("_write()"))
                                }, Writable.prototype._writev = null, Writable.prototype.end = function(e, t, n) {
                                    var p, b = this._writableState;
                                    return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), b.corked && (b.corked = 1, this.uncork()), b.ending || (p = n, b.ending = !0, finishMaybe(this, b), p && (b.finished ? i.nextTick(p) : this.once("finish", p)), b.ended = !0, this.writable = !1), this
                                }, Object.defineProperty(Writable.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(Writable.prototype, "destroyed", {
                                    enumerable: !1,
                                    get: function() {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    },
                                    set: function(e) {
                                        this._writableState && (this._writableState.destroyed = e)
                                    }
                                }), Writable.prototype.destroy = S.destroy, Writable.prototype._undestroy = S.undestroy, Writable.prototype._destroy = function(e, t) {
                                    t(e)
                                }
                        },
                        871: function(e, t, n) {
                            "use strict";

                            function _defineProperty(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n, e
                            }
                            var p, b = n(698),
                                y = Symbol("lastResolve"),
                                m = Symbol("lastReject"),
                                g = Symbol("error"),
                                T = Symbol("ended"),
                                v = Symbol("lastPromise"),
                                S = Symbol("handlePromise"),
                                E = Symbol("stream");

                            function createIterResult(e, t) {
                                return {
                                    value: e,
                                    done: t
                                }
                            }

                            function readAndResolve(e) {
                                var t = e[y];
                                if (null !== t) {
                                    var n = e[E].read();
                                    null !== n && (e[v] = null, e[y] = null, e[m] = null, t(createIterResult(n, !1)))
                                }
                            }

                            function onReadable(e) {
                                i.nextTick(readAndResolve, e)
                            }
                            var C = Object.getPrototypeOf(function() {}),
                                I = Object.setPrototypeOf((_defineProperty(p = {
                                    get stream() {
                                        return this[E]
                                    },
                                    next: function() {
                                        var e, t, n = this,
                                            p = this[g];
                                        if (null !== p) return Promise.reject(p);
                                        if (this[T]) return Promise.resolve(createIterResult(void 0, !0));
                                        if (this[E].destroyed) return new Promise(function(e, t) {
                                            i.nextTick(function() {
                                                n[g] ? t(n[g]) : e(createIterResult(void 0, !0))
                                            })
                                        });
                                        var b = this[v];
                                        if (b) t = new Promise((e = this, function(t, n) {
                                            b.then(function() {
                                                if (e[T]) {
                                                    t(createIterResult(void 0, !0));
                                                    return
                                                }
                                                e[S](t, n)
                                            }, n)
                                        }));
                                        else {
                                            var y = this[E].read();
                                            if (null !== y) return Promise.resolve(createIterResult(y, !1));
                                            t = new Promise(this[S])
                                        }
                                        return this[v] = t, t
                                    }
                                }, Symbol.asyncIterator, function() {
                                    return this
                                }), _defineProperty(p, "return", function() {
                                    var e = this;
                                    return new Promise(function(t, n) {
                                        e[E].destroy(null, function(e) {
                                            if (e) {
                                                n(e);
                                                return
                                            }
                                            t(createIterResult(void 0, !0))
                                        })
                                    })
                                }), p), C);
                            e.exports = function(e) {
                                var t, n = Object.create(I, (_defineProperty(t = {}, E, {
                                    value: e,
                                    writable: !0
                                }), _defineProperty(t, y, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, m, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, g, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, T, {
                                    value: e._readableState.endEmitted,
                                    writable: !0
                                }), _defineProperty(t, S, {
                                    value: function(e, t) {
                                        var i = n[E].read();
                                        i ? (n[v] = null, n[y] = null, n[m] = null, e(createIterResult(i, !1))) : (n[y] = e, n[m] = t)
                                    },
                                    writable: !0
                                }), t));
                                return n[v] = null, b(e, function(e) {
                                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                        var t = n[m];
                                        null !== t && (n[v] = null, n[y] = null, n[m] = null, t(e)), n[g] = e;
                                        return
                                    }
                                    var i = n[y];
                                    null !== i && (n[v] = null, n[y] = null, n[m] = null, i(createIterResult(void 0, !0))), n[T] = !0
                                }), e.on("readable", onReadable.bind(null, n)), n
                            }
                        },
                        379: function(e, t, n) {
                            "use strict";

                            function ownKeys(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), n.push.apply(n, i)
                                }
                                return n
                            }

                            function _defineProperties(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            var i = n(300).Buffer,
                                p = n(837).inspect,
                                b = p && p.custom || "inspect";
                            e.exports = function() {
                                var e, t;

                                function BufferList() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, BufferList), this.head = null, this.tail = null, this.length = 0
                                }
                                return e = [{
                                    key: "push",
                                    value: function(e) {
                                        var t = {
                                            data: e,
                                            next: null
                                        };
                                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                                    }
                                }, {
                                    key: "unshift",
                                    value: function(e) {
                                        var t = {
                                            data: e,
                                            next: this.head
                                        };
                                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                                    }
                                }, {
                                    key: "shift",
                                    value: function() {
                                        if (0 !== this.length) {
                                            var e = this.head.data;
                                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                                        }
                                    }
                                }, {
                                    key: "clear",
                                    value: function() {
                                        this.head = this.tail = null, this.length = 0
                                    }
                                }, {
                                    key: "join",
                                    value: function(e) {
                                        if (0 === this.length) return "";
                                        for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                                        return n
                                    }
                                }, {
                                    key: "concat",
                                    value: function(e) {
                                        if (0 === this.length) return i.alloc(0);
                                        for (var t, n, p = i.allocUnsafe(e >>> 0), b = this.head, y = 0; b;) t = b.data, n = y, i.prototype.copy.call(t, p, n), y += b.data.length, b = b.next;
                                        return p
                                    }
                                }, {
                                    key: "consume",
                                    value: function(e, t) {
                                        var n;
                                        return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n
                                    }
                                }, {
                                    key: "first",
                                    value: function() {
                                        return this.head.data
                                    }
                                }, {
                                    key: "_getString",
                                    value: function(e) {
                                        var t = this.head,
                                            n = 1,
                                            i = t.data;
                                        for (e -= i.length; t = t.next;) {
                                            var p = t.data,
                                                b = e > p.length ? p.length : e;
                                            if (b === p.length ? i += p : i += p.slice(0, e), 0 == (e -= b)) {
                                                b === p.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = p.slice(b));
                                                break
                                            }++n
                                        }
                                        return this.length -= n, i
                                    }
                                }, {
                                    key: "_getBuffer",
                                    value: function(e) {
                                        var t = i.allocUnsafe(e),
                                            n = this.head,
                                            p = 1;
                                        for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                                            var b = n.data,
                                                y = e > b.length ? b.length : e;
                                            if (b.copy(t, t.length - e, 0, y), 0 == (e -= y)) {
                                                y === b.length ? (++p, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = b.slice(y));
                                                break
                                            }++p
                                        }
                                        return this.length -= p, t
                                    }
                                }, {
                                    key: b,
                                    value: function(e, t) {
                                        return p(this, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                                                    var i;
                                                    i = n[t], t in e ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : e[t] = i
                                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                })
                                            }
                                            return e
                                        }({}, t, {
                                            depth: 0,
                                            customInspect: !1
                                        }))
                                    }
                                }], _defineProperties(BufferList.prototype, e), t && _defineProperties(BufferList, t), BufferList
                            }()
                        },
                        25: function(e) {
                            "use strict";

                            function emitErrorAndCloseNT(e, t) {
                                emitErrorNT(e, t), emitCloseNT(e)
                            }

                            function emitCloseNT(e) {
                                (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close")
                            }

                            function emitErrorNT(e, t) {
                                e.emit("error", t)
                            }
                            e.exports = {
                                destroy: function(e, t) {
                                    var n = this,
                                        p = this._readableState && this._readableState.destroyed,
                                        b = this._writableState && this._writableState.destroyed;
                                    return p || b ? t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, i.nextTick(emitErrorNT, this, e)) : i.nextTick(emitErrorNT, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                                        !t && e ? n._writableState ? n._writableState.errorEmitted ? i.nextTick(emitCloseNT, n) : (n._writableState.errorEmitted = !0, i.nextTick(emitErrorAndCloseNT, n, e)) : i.nextTick(emitErrorAndCloseNT, n, e) : t ? (i.nextTick(emitCloseNT, n), t(e)) : i.nextTick(emitCloseNT, n)
                                    })), this
                                },
                                undestroy: function() {
                                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                },
                                errorOrDestroy: function(e, t) {
                                    var n = e._readableState,
                                        i = e._writableState;
                                    n && n.autoDestroy || i && i.autoDestroy ? e.destroy(t) : e.emit("error", t)
                                }
                            }
                        },
                        698: function(e, t, n) {
                            "use strict";
                            var i = n(646).q.ERR_STREAM_PREMATURE_CLOSE;

                            function noop() {}
                            e.exports = function eos(e, t, n) {
                                if ("function" == typeof t) return eos(e, null, t);
                                t || (t = {}), p = n || noop, b = !1, n = function() {
                                    if (!b) {
                                        b = !0;
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        p.apply(this, t)
                                    }
                                };
                                var p, b, y = t.readable || !1 !== t.readable && e.readable,
                                    m = t.writable || !1 !== t.writable && e.writable,
                                    o = function() {
                                        e.writable || f()
                                    },
                                    g = e._writableState && e._writableState.finished,
                                    f = function() {
                                        m = !1, g = !0, y || n.call(e)
                                    },
                                    T = e._readableState && e._readableState.endEmitted,
                                    u = function() {
                                        y = !1, T = !0, m || n.call(e)
                                    },
                                    d = function(t) {
                                        n.call(e, t)
                                    },
                                    c = function() {
                                        var t;
                                        return y && !T ? (e._readableState && e._readableState.ended || (t = new i), n.call(e, t)) : m && !g ? (e._writableState && e._writableState.ended || (t = new i), n.call(e, t)) : void 0
                                    },
                                    h = function() {
                                        e.req.on("finish", f)
                                    };
                                return e.setHeader && "function" == typeof e.abort ? (e.on("complete", f), e.on("abort", c), e.req ? h() : e.on("request", h)) : m && !e._writableState && (e.on("end", o), e.on("close", o)), e.on("end", u), e.on("finish", f), !1 !== t.error && e.on("error", d), e.on("close", c),
                                    function() {
                                        e.removeListener("complete", f), e.removeListener("abort", c), e.removeListener("request", h), e.req && e.req.removeListener("finish", f), e.removeListener("end", o), e.removeListener("close", o), e.removeListener("finish", f), e.removeListener("end", u), e.removeListener("error", d), e.removeListener("close", c)
                                    }
                            }
                        },
                        727: function(e, t, n) {
                            "use strict";

                            function asyncGeneratorStep(e, t, n, i, p, b, y) {
                                try {
                                    var m = e[b](y),
                                        g = m.value
                                } catch (e) {
                                    n(e);
                                    return
                                }
                                m.done ? t(g) : Promise.resolve(g).then(i, p)
                            }

                            function ownKeys(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), n.push.apply(n, i)
                                }
                                return n
                            }
                            var i = n(646).q.ERR_INVALID_ARG_TYPE;
                            e.exports = function(e, t, n) {
                                if (t && "function" == typeof t.next) p = t;
                                else if (t && t[Symbol.asyncIterator]) p = t[Symbol.asyncIterator]();
                                else if (t && t[Symbol.iterator]) p = t[Symbol.iterator]();
                                else throw new i("iterable", ["Iterable"], t);
                                var p, b = new e(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                                                var i;
                                                i = n[t], t in e ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : e[t] = i
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            })
                                        }
                                        return e
                                    }({
                                        objectMode: !0
                                    }, n)),
                                    y = !1;

                                function next() {
                                    return _next2.apply(this, arguments)
                                }

                                function _next2() {
                                    var e;
                                    return e = function*() {
                                        try {
                                            var e = yield p.next(), t = e.value;
                                            e.done ? b.push(null) : b.push((yield t)) ? next() : y = !1
                                        } catch (e) {
                                            b.destroy(e)
                                        }
                                    }, (_next2 = function() {
                                        var t = this,
                                            n = arguments;
                                        return new Promise(function(i, p) {
                                            var b = e.apply(t, n);

                                            function _next(e) {
                                                asyncGeneratorStep(b, i, p, _next, _throw, "next", e)
                                            }

                                            function _throw(e) {
                                                asyncGeneratorStep(b, i, p, _next, _throw, "throw", e)
                                            }
                                            _next(void 0)
                                        })
                                    }).apply(this, arguments)
                                }
                                return b._read = function() {
                                    y || (y = !0, next())
                                }, b
                            }
                        },
                        442: function(e, t, n) {
                            "use strict";
                            var i, p = n(646).q,
                                b = p.ERR_MISSING_ARGS,
                                y = p.ERR_STREAM_DESTROYED;

                            function noop(e) {
                                if (e) throw e
                            }

                            function call(e) {
                                e()
                            }

                            function pipe(e, t) {
                                return e.pipe(t)
                            }
                            e.exports = function() {
                                for (var e, t, p = arguments.length, m = Array(p), g = 0; g < p; g++) m[g] = arguments[g];
                                var T = (e = m).length && "function" == typeof e[e.length - 1] ? e.pop() : noop;
                                if (Array.isArray(m[0]) && (m = m[0]), m.length < 2) throw new b("streams");
                                var v = m.map(function(e, p) {
                                    var b, g, S, E, C, I = p < m.length - 1;
                                    return g = b = function(e) {
                                            t || (t = e), e && v.forEach(call), I || (v.forEach(call), T(t))
                                        }, S = !1, b = function() {
                                            S || (S = !0, g.apply(void 0, arguments))
                                        }, E = !1, e.on("close", function() {
                                            E = !0
                                        }), void 0 === i && (i = n(698)), i(e, {
                                            readable: I,
                                            writable: p > 0
                                        }, function(e) {
                                            if (e) return b(e);
                                            E = !0, b()
                                        }), C = !1,
                                        function(t) {
                                            if (!E && !C) {
                                                if (C = !0, e.setHeader && "function" == typeof e.abort) return e.abort();
                                                if ("function" == typeof e.destroy) return e.destroy();
                                                b(t || new y("pipe"))
                                            }
                                        }
                                });
                                return m.reduce(pipe)
                            }
                        },
                        776: function(e, t, n) {
                            "use strict";
                            var i = n(646).q.ERR_INVALID_OPT_VALUE;
                            e.exports = {
                                getHighWaterMark: function(e, t, n, p) {
                                    var b = null != t.highWaterMark ? t.highWaterMark : p ? t[n] : null;
                                    if (null != b) {
                                        if (!(isFinite(b) && Math.floor(b) === b) || b < 0) {
                                            var y = p ? n : "highWaterMark";
                                            throw new i(y, b)
                                        }
                                        return Math.floor(b)
                                    }
                                    return e.objectMode ? 16 : 16384
                                }
                            }
                        },
                        678: function(e, t, n) {
                            e.exports = n(781)
                        },
                        726: function(e, t, n) {
                            var p = n(781);
                            "disable" === i.env.READABLE_STREAM && p ? (e.exports = p.Readable, Object.assign(e.exports, p), e.exports.Stream = p) : ((t = e.exports = n(709)).Stream = p || t, t.Readable = t, t.Writable = n(337), t.Duplex = n(403), t.Transform = n(170), t.PassThrough = n(889), t.finished = n(698), t.pipeline = n(442))
                        },
                        55: function(e, t, n) {
                            var i = n(300),
                                p = i.Buffer;

                            function copyProps(e, t) {
                                for (var n in e) t[n] = e[n]
                            }

                            function SafeBuffer(e, t, n) {
                                return p(e, t, n)
                            }
                            p.from && p.alloc && p.allocUnsafe && p.allocUnsafeSlow ? e.exports = i : (copyProps(i, t), t.Buffer = SafeBuffer), SafeBuffer.prototype = Object.create(p.prototype), copyProps(p, SafeBuffer), SafeBuffer.from = function(e, t, n) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return p(e, t, n)
                            }, SafeBuffer.alloc = function(e, t, n) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var i = p(e);
                                return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
                            }, SafeBuffer.allocUnsafe = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return p(e)
                            }, SafeBuffer.allocUnsafeSlow = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return i.SlowBuffer(e)
                            }
                        },
                        813: function(e, t, i) {
                            var p = i(450),
                                b = i(254),
                                y = i(911),
                                m = i(523),
                                g = i(310);
                            t.request = function(e, t) {
                                e = "string" == typeof e ? g.parse(e) : y(e);
                                var i = -1 === n.g.location.protocol.search(/^https?:$/) ? "http:" : "",
                                    b = e.protocol || i,
                                    m = e.hostname || e.host,
                                    T = e.port,
                                    v = e.path || "/";
                                m && -1 !== m.indexOf(":") && (m = "[" + m + "]"), e.url = (m ? b + "//" + m : "") + (T ? ":" + T : "") + v, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                                var S = new p(e);
                                return t && S.on("response", t), S
                            }, t.get = function(e, n) {
                                var i = t.request(e, n);
                                return i.end(), i
                            }, t.ClientRequest = p, t.IncomingMessage = b.IncomingMessage, t.Agent = function() {}, t.Agent.defaultMaxSockets = 4, t.globalAgent = new t.Agent, t.STATUS_CODES = m, t.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
                        },
                        301: function(e, t) {
                            var i;

                            function getXHR() {
                                if (void 0 !== i) return i;
                                if (n.g.XMLHttpRequest) {
                                    i = new n.g.XMLHttpRequest;
                                    try {
                                        i.open("GET", n.g.XDomainRequest ? "/" : "https://example.com")
                                    } catch (e) {
                                        i = null
                                    }
                                } else i = null;
                                return i
                            }

                            function checkTypeSupport(e) {
                                var t = getXHR();
                                if (!t) return !1;
                                try {
                                    return t.responseType = e, t.responseType === e
                                } catch (e) {}
                                return !1
                            }

                            function isFunction(e) {
                                return "function" == typeof e
                            }
                            t.fetch = isFunction(n.g.fetch) && isFunction(n.g.ReadableStream), t.writableStream = isFunction(n.g.WritableStream), t.abortController = isFunction(n.g.AbortController), t.arraybuffer = t.fetch || checkTypeSupport("arraybuffer"), t.msstream = !t.fetch && checkTypeSupport("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && checkTypeSupport("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!getXHR() && isFunction(getXHR().overrideMimeType), i = null
                        },
                        450: function(e, t, b) {
                            var y = b(301),
                                m = b(782),
                                g = b(254),
                                T = b(726),
                                v = g.IncomingMessage,
                                S = g.readyStates,
                                E = e.exports = function(e) {
                                    var t, n, i, b = this;
                                    T.Writable.call(b), b._opts = e, b._body = [], b._headers = {}, e.auth && b.setHeader("Authorization", "Basic " + p.from(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(t) {
                                        b.setHeader(t, e.headers[t])
                                    });
                                    var m = !0;
                                    if ("disable-fetch" === e.mode || "requestTimeout" in e && !y.abortController) m = !1, i = !0;
                                    else if ("prefer-streaming" === e.mode) i = !1;
                                    else if ("allow-wrong-content-type" === e.mode) i = !y.overrideMimeType;
                                    else if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw Error("Invalid value for opts.mode");
                                    else i = !0;
                                    b._mode = (t = i, n = m, y.fetch && n ? "fetch" : y.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : y.msstream ? "ms-stream" : y.arraybuffer && t ? "arraybuffer" : "text"), b._fetchTimer = null, b.on("finish", function() {
                                        b._onFinish()
                                    })
                                };
                            m(E, T.Writable), E.prototype.setHeader = function(e, t) {
                                var n = e.toLowerCase(); - 1 === C.indexOf(n) && (this._headers[n] = {
                                    name: e,
                                    value: t
                                })
                            }, E.prototype.getHeader = function(e) {
                                var t = this._headers[e.toLowerCase()];
                                return t ? t.value : null
                            }, E.prototype.removeHeader = function(e) {
                                delete this._headers[e.toLowerCase()]
                            }, E.prototype._onFinish = function() {
                                var e = this;
                                if (!e._destroyed) {
                                    var t = e._opts,
                                        p = e._headers,
                                        b = null;
                                    "GET" !== t.method && "HEAD" !== t.method && (b = new Blob(e._body, {
                                        type: (p["content-type"] || {}).value || ""
                                    }));
                                    var m = [];
                                    if (Object.keys(p).forEach(function(e) {
                                            var t = p[e].name,
                                                n = p[e].value;
                                            Array.isArray(n) ? n.forEach(function(e) {
                                                m.push([t, e])
                                            }) : m.push([t, n])
                                        }), "fetch" === e._mode) {
                                        var g = null;
                                        if (y.abortController) {
                                            var T = new AbortController;
                                            g = T.signal, e._fetchAbortController = T, "requestTimeout" in t && 0 !== t.requestTimeout && (e._fetchTimer = n.g.setTimeout(function() {
                                                e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
                                            }, t.requestTimeout))
                                        }
                                        n.g.fetch(e._opts.url, {
                                            method: e._opts.method,
                                            headers: m,
                                            body: b || void 0,
                                            mode: "cors",
                                            credentials: t.withCredentials ? "include" : "same-origin",
                                            signal: g
                                        }).then(function(t) {
                                            e._fetchResponse = t, e._connect()
                                        }, function(t) {
                                            n.g.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t)
                                        })
                                    } else {
                                        var v = e._xhr = new n.g.XMLHttpRequest;
                                        try {
                                            v.open(e._opts.method, e._opts.url, !0)
                                        } catch (t) {
                                            i.nextTick(function() {
                                                e.emit("error", t)
                                            });
                                            return
                                        }
                                        "responseType" in v && (v.responseType = e._mode), "withCredentials" in v && (v.withCredentials = !!t.withCredentials), "text" === e._mode && "overrideMimeType" in v && v.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in t && (v.timeout = t.requestTimeout, v.ontimeout = function() {
                                            e.emit("requestTimeout")
                                        }), m.forEach(function(e) {
                                            v.setRequestHeader(e[0], e[1])
                                        }), e._response = null, v.onreadystatechange = function() {
                                            switch (v.readyState) {
                                                case S.LOADING:
                                                case S.DONE:
                                                    e._onXHRProgress()
                                            }
                                        }, "moz-chunked-arraybuffer" === e._mode && (v.onprogress = function() {
                                            e._onXHRProgress()
                                        }), v.onerror = function() {
                                            e._destroyed || e.emit("error", Error("XHR error"))
                                        };
                                        try {
                                            v.send(b)
                                        } catch (t) {
                                            i.nextTick(function() {
                                                e.emit("error", t)
                                            });
                                            return
                                        }
                                    }
                                }
                            }, E.prototype._onXHRProgress = function() {
                                (function(e) {
                                    try {
                                        var t = e.status;
                                        return null !== t && 0 !== t
                                    } catch (e) {
                                        return !1
                                    }
                                })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
                            }, E.prototype._connect = function() {
                                var e = this;
                                e._destroyed || (e._response = new v(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", function(t) {
                                    e.emit("error", t)
                                }), e.emit("response", e._response))
                            }, E.prototype._write = function(e, t, n) {
                                this._body.push(e), n()
                            }, E.prototype.abort = E.prototype.destroy = function() {
                                this._destroyed = !0, n.g.clearTimeout(this._fetchTimer), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
                            }, E.prototype.end = function(e, t, n) {
                                "function" == typeof e && (n = e, e = void 0), T.Writable.prototype.end.call(this, e, t, n)
                            }, E.prototype.flushHeaders = function() {}, E.prototype.setTimeout = function() {}, E.prototype.setNoDelay = function() {}, E.prototype.setSocketKeepAlive = function() {};
                            var C = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
                        },
                        254: function(e, t, b) {
                            var y = b(301),
                                m = b(782),
                                g = b(726),
                                T = t.readyStates = {
                                    UNSENT: 0,
                                    OPENED: 1,
                                    HEADERS_RECEIVED: 2,
                                    LOADING: 3,
                                    DONE: 4
                                },
                                v = t.IncomingMessage = function(e, t, b, m) {
                                    var T = this;
                                    if (g.Readable.call(T), T._mode = b, T.headers = {}, T.rawHeaders = [], T.trailers = {}, T.rawTrailers = [], T.on("end", function() {
                                            i.nextTick(function() {
                                                T.emit("close")
                                            })
                                        }), "fetch" === b) {
                                        if (T._fetchResponse = t, T.url = t.url, T.statusCode = t.status, T.statusMessage = t.statusText, t.headers.forEach(function(e, t) {
                                                T.headers[t.toLowerCase()] = e, T.rawHeaders.push(t, e)
                                            }), y.writableStream) {
                                            var v = new WritableStream({
                                                write: function(e) {
                                                    return new Promise(function(t, n) {
                                                        T._destroyed ? n() : T.push(p.from(e)) ? t() : T._resumeFetch = t
                                                    })
                                                },
                                                close: function() {
                                                    n.g.clearTimeout(m), T._destroyed || T.push(null)
                                                },
                                                abort: function(e) {
                                                    T._destroyed || T.emit("error", e)
                                                }
                                            });
                                            try {
                                                t.body.pipeTo(v).catch(function(e) {
                                                    n.g.clearTimeout(m), T._destroyed || T.emit("error", e)
                                                });
                                                return
                                            } catch (e) {}
                                        }
                                        var S = t.body.getReader();
                                        ! function read() {
                                            S.read().then(function(e) {
                                                if (!T._destroyed) {
                                                    if (e.done) {
                                                        n.g.clearTimeout(m), T.push(null);
                                                        return
                                                    }
                                                    T.push(p.from(e.value)), read()
                                                }
                                            }).catch(function(e) {
                                                n.g.clearTimeout(m), T._destroyed || T.emit("error", e)
                                            })
                                        }()
                                    } else if (T._xhr = e, T._pos = 0, T.url = e.responseURL, T.statusCode = e.status, T.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e) {
                                            var t = e.match(/^([^:]+):\s*(.*)/);
                                            if (t) {
                                                var n = t[1].toLowerCase();
                                                "set-cookie" === n ? (void 0 === T.headers[n] && (T.headers[n] = []), T.headers[n].push(t[2])) : void 0 !== T.headers[n] ? T.headers[n] += ", " + t[2] : T.headers[n] = t[2], T.rawHeaders.push(t[1], t[2])
                                            }
                                        }), T._charset = "x-user-defined", !y.overrideMimeType) {
                                        var E = T.rawHeaders["mime-type"];
                                        if (E) {
                                            var C = E.match(/;\s*charset=([^;])(;|$)/);
                                            C && (T._charset = C[1].toLowerCase())
                                        }
                                        T._charset || (T._charset = "utf-8")
                                    }
                                };
                            m(v, g.Readable), v.prototype._read = function() {
                                var e = this._resumeFetch;
                                e && (this._resumeFetch = null, e())
                            }, v.prototype._onXHRProgress = function() {
                                var e = this,
                                    t = e._xhr,
                                    i = null;
                                switch (e._mode) {
                                    case "text":
                                        if ((i = t.responseText).length > e._pos) {
                                            var b = i.substr(e._pos);
                                            if ("x-user-defined" === e._charset) {
                                                for (var y = p.alloc(b.length), m = 0; m < b.length; m++) y[m] = 255 & b.charCodeAt(m);
                                                e.push(y)
                                            } else e.push(b, e._charset);
                                            e._pos = i.length
                                        }
                                        break;
                                    case "arraybuffer":
                                        if (t.readyState !== T.DONE || !t.response) break;
                                        i = t.response, e.push(p.from(new Uint8Array(i)));
                                        break;
                                    case "moz-chunked-arraybuffer":
                                        if (i = t.response, t.readyState !== T.LOADING || !i) break;
                                        e.push(p.from(new Uint8Array(i)));
                                        break;
                                    case "ms-stream":
                                        if (i = t.response, t.readyState !== T.LOADING) break;
                                        var g = new n.g.MSStreamReader;
                                        g.onprogress = function() {
                                            g.result.byteLength > e._pos && (e.push(p.from(new Uint8Array(g.result.slice(e._pos)))), e._pos = g.result.byteLength)
                                        }, g.onload = function() {
                                            e.push(null)
                                        }, g.readAsArrayBuffer(i)
                                }
                                e._xhr.readyState === T.DONE && "ms-stream" !== e._mode && e.push(null)
                            }
                        },
                        704: function(e, t, n) {
                            "use strict";
                            var i = n(55).Buffer,
                                p = i.isEncoding || function(e) {
                                    switch ((e = "" + e) && e.toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                        case "raw":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                };

                            function StringDecoder(e) {
                                var t;
                                switch (this.encoding = function(e) {
                                    var t = function(e) {
                                        var t;
                                        if (!e) return "utf8";
                                        for (;;) switch (e) {
                                            case "utf8":
                                            case "utf-8":
                                                return "utf8";
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return "utf16le";
                                            case "latin1":
                                            case "binary":
                                                return "latin1";
                                            case "base64":
                                            case "ascii":
                                            case "hex":
                                                return e;
                                            default:
                                                if (t) return;
                                                e = ("" + e).toLowerCase(), t = !0
                                        }
                                    }(e);
                                    if ("string" != typeof t && (i.isEncoding === p || !p(e))) throw Error("Unknown encoding: " + e);
                                    return t || e
                                }(e), this.encoding) {
                                    case "utf16le":
                                        this.text = utf16Text, this.end = utf16End, t = 4;
                                        break;
                                    case "utf8":
                                        this.fillLast = utf8FillLast, t = 4;
                                        break;
                                    case "base64":
                                        this.text = base64Text, this.end = base64End, t = 3;
                                        break;
                                    default:
                                        this.write = simpleWrite, this.end = simpleEnd;
                                        return
                                }
                                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = i.allocUnsafe(t)
                            }

                            function utf8CheckByte(e) {
                                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                            }

                            function utf8FillLast(e) {
                                var t = this.lastTotal - this.lastNeed,
                                    n = function(e, t, n) {
                                        if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                                        if (e.lastNeed > 1 && t.length > 1) {
                                            if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                                            if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                                        }
                                    }(this, e, 0);
                                return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
                            }

                            function utf16Text(e, t) {
                                if ((e.length - t) % 2 == 0) {
                                    var n = e.toString("utf16le", t);
                                    if (n) {
                                        var i = n.charCodeAt(n.length - 1);
                                        if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                                    }
                                    return n
                                }
                                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                            }

                            function utf16End(e) {
                                var t = e && e.length ? this.write(e) : "";
                                if (this.lastNeed) {
                                    var n = this.lastTotal - this.lastNeed;
                                    return t + this.lastChar.toString("utf16le", 0, n)
                                }
                                return t
                            }

                            function base64Text(e, t) {
                                var n = (e.length - t) % 3;
                                return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
                            }

                            function base64End(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                            }

                            function simpleWrite(e) {
                                return e.toString(this.encoding)
                            }

                            function simpleEnd(e) {
                                return e && e.length ? this.write(e) : ""
                            }
                            t.s = StringDecoder, StringDecoder.prototype.write = function(e) {
                                var t, n;
                                if (0 === e.length) return "";
                                if (this.lastNeed) {
                                    if (void 0 === (t = this.fillLast(e))) return "";
                                    n = this.lastNeed, this.lastNeed = 0
                                } else n = 0;
                                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
                            }, StringDecoder.prototype.end = function(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + "�" : t
                            }, StringDecoder.prototype.text = function(e, t) {
                                var n = function(e, t, n) {
                                    var i = t.length - 1;
                                    if (i < n) return 0;
                                    var p = utf8CheckByte(t[i]);
                                    return p >= 0 ? (p > 0 && (e.lastNeed = p - 1), p) : --i < n || -2 === p ? 0 : (p = utf8CheckByte(t[i])) >= 0 ? (p > 0 && (e.lastNeed = p - 2), p) : --i < n || -2 === p ? 0 : (p = utf8CheckByte(t[i])) >= 0 ? (p > 0 && (2 === p ? p = 0 : e.lastNeed = p - 3), p) : 0
                                }(this, e, t);
                                if (!this.lastNeed) return e.toString("utf8", t);
                                this.lastTotal = n;
                                var i = e.length - (n - this.lastNeed);
                                return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i)
                            }, StringDecoder.prototype.fillLast = function(e) {
                                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                            }
                        },
                        769: function(e) {
                            e.exports = function(e, t) {
                                if (config("noDeprecation")) return e;
                                var n = !1;
                                return function() {
                                    if (!n) {
                                        if (config("throwDeprecation")) throw Error(t);
                                        config("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                                    }
                                    return e.apply(this, arguments)
                                }
                            };

                            function config(e) {
                                try {
                                    if (!n.g.localStorage) return !1
                                } catch (e) {
                                    return !1
                                }
                                var t = n.g.localStorage[e];
                                return null != t && "true" === String(t).toLowerCase()
                            }
                        },
                        911: function(e) {
                            e.exports = function() {
                                for (var e = {}, n = 0; n < arguments.length; n++) {
                                    var i = arguments[n];
                                    for (var p in i) t.call(i, p) && (e[p] = i[p])
                                }
                                return e
                            };
                            var t = Object.prototype.hasOwnProperty
                        },
                        300: function(e) {
                            "use strict";
                            e.exports = n(67133)
                        },
                        361: function(e) {
                            "use strict";
                            e.exports = n(512)
                        },
                        781: function(e) {
                            "use strict";
                            e.exports = n(48290)
                        },
                        310: function(e) {
                            "use strict";
                            e.exports = n(40692)
                        },
                        837: function(e) {
                            "use strict";
                            e.exports = n(40942)
                        }
                    },
                    b = {};

                function __nccwpck_require__(e) {
                    var n = b[e];
                    if (void 0 !== n) return n.exports;
                    var i = b[e] = {
                            exports: {}
                        },
                        p = !0;
                    try {
                        t[e](i, i.exports, __nccwpck_require__), p = !1
                    } finally {
                        p && delete b[e]
                    }
                    return i.exports
                }
                __nccwpck_require__.ab = "//";
                var y = __nccwpck_require__(813);
                e.exports = y
            }()
        },
        31199: function(e, t, n) {
            (function() {
                (e.exports = n(14321)).version = "5.1.2"
            }).call(this)
        },
        14321: function(e, t, n) {
            var i = n(67133).Buffer;
            (function() {
                var t, p, b = [].splice,
                    boundMethodCheck = function(e, t) {
                        if (!(e instanceof t)) throw Error("Bound instance method accessed before binding")
                    },
                    y = [].indexOf;
                p = n(66380), t = n(512).EventEmitter, e.exports = (function() {
                    let NodeCache = class NodeCache extends t {
                        constructor(e = {}) {
                            super(), this.get = this.get.bind(this), this.mget = this.mget.bind(this), this.set = this.set.bind(this), this.mset = this.mset.bind(this), this.del = this.del.bind(this), this.take = this.take.bind(this), this.ttl = this.ttl.bind(this), this.getTtl = this.getTtl.bind(this), this.keys = this.keys.bind(this), this.has = this.has.bind(this), this.getStats = this.getStats.bind(this), this.flushAll = this.flushAll.bind(this), this.flushStats = this.flushStats.bind(this), this.close = this.close.bind(this), this._checkData = this._checkData.bind(this), this._check = this._check.bind(this), this._isInvalidKey = this._isInvalidKey.bind(this), this._wrap = this._wrap.bind(this), this._getValLength = this._getValLength.bind(this), this._error = this._error.bind(this), this._initErrors = this._initErrors.bind(this), this.options = e, this._initErrors(), this.data = {}, this.options = Object.assign({
                                forceString: !1,
                                objectValueSize: 80,
                                promiseValueSize: 80,
                                arrayValueSize: 40,
                                stdTTL: 0,
                                checkperiod: 600,
                                useClones: !0,
                                deleteOnExpire: !0,
                                enableLegacyCallbacks: !1,
                                maxKeys: -1
                            }, this.options), this.options.enableLegacyCallbacks && (console.warn("WARNING! node-cache legacy callback support will drop in v6.x"), ["get", "mget", "set", "del", "ttl", "getTtl", "keys", "has"].forEach(e => {
                                var t;
                                t = this[e], this[e] = function(...e) {
                                    var n, i, p;
                                    if (i = e, [...e] = i, [n] = b.call(e, -1), "function" != typeof n) return t(...e, n);
                                    try {
                                        p = t(...e), n(null, p)
                                    } catch (e) {
                                        n(e)
                                    }
                                }
                            })), this.stats = {
                                hits: 0,
                                misses: 0,
                                keys: 0,
                                ksize: 0,
                                vsize: 0
                            }, this.validKeyTypes = ["string", "number"], this._checkData();
                            return
                        }
                        get(e) {
                            var t;
                            if (boundMethodCheck(this, NodeCache), null != (t = this._isInvalidKey(e))) throw t;
                            if (null != this.data[e] && this._check(e, this.data[e])) return this.stats.hits++, this._unwrap(this.data[e]);
                            this.stats.misses++
                        }
                        mget(e) {
                            var t, n, i, p, b;
                            if (boundMethodCheck(this, NodeCache), !Array.isArray(e)) throw this._error("EKEYSTYPE");
                            for (n = 0, b = {}, p = e.length; n < p; n++) {
                                if (i = e[n], null != (t = this._isInvalidKey(i))) throw t;
                                null != this.data[i] && this._check(i, this.data[i]) ? (this.stats.hits++, b[i] = this._unwrap(this.data[i])) : this.stats.misses++
                            }
                            return b
                        }
                        set(e, t, n) {
                            var i, p;
                            if (boundMethodCheck(this, NodeCache), this.options.maxKeys > -1 && this.stats.keys >= this.options.maxKeys) throw this._error("ECACHEFULL");
                            if (this.options.forceString, null == n && (n = this.options.stdTTL), null != (i = this._isInvalidKey(e))) throw i;
                            return p = !1, this.data[e] && (p = !0, this.stats.vsize -= this._getValLength(this._unwrap(this.data[e], !1))), this.data[e] = this._wrap(t, n), this.stats.vsize += this._getValLength(t), !p && (this.stats.ksize += this._getKeyLength(e), this.stats.keys++), this.emit("set", e, t), !0
                        }
                        mset(e) {
                            var t, n, i, p, b, y, m, g, T;
                            if (boundMethodCheck(this, NodeCache), this.options.maxKeys > -1 && this.stats.keys + e.length >= this.options.maxKeys) throw this._error("ECACHEFULL");
                            for (n = 0, y = e.length; n < y; n++) {
                                if (b = e[n], {
                                        key: p,
                                        val: T,
                                        ttl: g
                                    } = b, g && "number" != typeof g) throw this._error("ETTLTYPE");
                                if (null != (t = this._isInvalidKey(p))) throw t
                            }
                            for (i = 0, m = e.length; i < m; i++) b = e[i], ({
                                key: p,
                                val: T,
                                ttl: g
                            } = b), this.set(p, T, g);
                            return !0
                        }
                        del(e) {
                            var t, n, i, p, b, y;
                            for (boundMethodCheck(this, NodeCache), Array.isArray(e) || (e = [e]), t = 0, i = 0, b = e.length; i < b; i++) {
                                if (p = e[i], null != (n = this._isInvalidKey(p))) throw n;
                                null != this.data[p] && (this.stats.vsize -= this._getValLength(this._unwrap(this.data[p], !1)), this.stats.ksize -= this._getKeyLength(p), this.stats.keys--, t++, y = this.data[p], delete this.data[p], this.emit("del", p, y.v))
                            }
                            return t
                        }
                        take(e) {
                            var t;
                            return boundMethodCheck(this, NodeCache), null != (t = this.get(e)) && this.del(e), t
                        }
                        ttl(e, t) {
                            var n;
                            if (boundMethodCheck(this, NodeCache), t || (t = this.options.stdTTL), !e) return !1;
                            if (null != (n = this._isInvalidKey(e))) throw n;
                            return !!(null != this.data[e] && this._check(e, this.data[e])) && (t >= 0 ? this.data[e] = this._wrap(this.data[e].v, t, !1) : this.del(e), !0)
                        }
                        getTtl(e) {
                            var t;
                            if (boundMethodCheck(this, NodeCache), e) {
                                if (null != (t = this._isInvalidKey(e))) throw t;
                                return null != this.data[e] && this._check(e, this.data[e]) ? this.data[e].t : void 0
                            }
                        }
                        keys() {
                            return boundMethodCheck(this, NodeCache), Object.keys(this.data)
                        }
                        has(e) {
                            return boundMethodCheck(this, NodeCache), null != this.data[e] && this._check(e, this.data[e])
                        }
                        getStats() {
                            return boundMethodCheck(this, NodeCache), this.stats
                        }
                        flushAll(e = !0) {
                            boundMethodCheck(this, NodeCache), this.data = {}, this.stats = {
                                hits: 0,
                                misses: 0,
                                keys: 0,
                                ksize: 0,
                                vsize: 0
                            }, this._killCheckPeriod(), this._checkData(e), this.emit("flush")
                        }
                        flushStats() {
                            boundMethodCheck(this, NodeCache), this.stats = {
                                hits: 0,
                                misses: 0,
                                keys: 0,
                                ksize: 0,
                                vsize: 0
                            }, this.emit("flush_stats")
                        }
                        close() {
                            boundMethodCheck(this, NodeCache), this._killCheckPeriod()
                        }
                        _checkData(e = !0) {
                            var t, n, i;
                            for (t in boundMethodCheck(this, NodeCache), n = this.data) i = n[t], this._check(t, i);
                            e && this.options.checkperiod > 0 && (this.checkTimeout = setTimeout(this._checkData, 1e3 * this.options.checkperiod, e), null != this.checkTimeout && null != this.checkTimeout.unref && this.checkTimeout.unref())
                        }
                        _killCheckPeriod() {
                            if (null != this.checkTimeout) return clearTimeout(this.checkTimeout)
                        }
                        _check(e, t) {
                            var n;
                            return boundMethodCheck(this, NodeCache), n = !0, 0 !== t.t && t.t < Date.now() && (this.options.deleteOnExpire && (n = !1, this.del(e)), this.emit("expired", e, this._unwrap(t))), n
                        }
                        _isInvalidKey(e) {
                            if (boundMethodCheck(this, NodeCache), 0 > y.call(this.validKeyTypes, typeof e)) return this._error("EKEYTYPE", {
                                type: typeof e
                            })
                        }
                        _wrap(e, t, n = !0) {
                            var i;
                            return boundMethodCheck(this, NodeCache), this.options.useClones || (n = !1), i = Date.now(), {
                                t: 0 === t ? 0 : t ? i + 1e3 * t : 0 === this.options.stdTTL ? this.options.stdTTL : i + 1e3 * this.options.stdTTL,
                                v: n ? p(e) : e
                            }
                        }
                        _unwrap(e, t = !0) {
                            return (this.options.useClones || (t = !1), null != e.v) ? t ? p(e.v) : e.v : null
                        }
                        _getKeyLength(e) {
                            return e.toString().length
                        }
                        _getValLength(e) {
                            if (boundMethodCheck(this, NodeCache), "string" == typeof e) return e.length;
                            if (this.options.forceString) return JSON.stringify(e).length;
                            if (Array.isArray(e)) return this.options.arrayValueSize * e.length;
                            if ("number" == typeof e) return 8;
                            if ("function" == typeof(null != e ? e.then : void 0)) return this.options.promiseValueSize;
                            if (null != i ? i.isBuffer(e) : void 0) return e.length;
                            if (null != e && "object" == typeof e) return this.options.objectValueSize * Object.keys(e).length;
                            else if ("boolean" == typeof e) return 8;
                            else return 0
                        }
                        _error(e, t = {}) {
                            var n;
                            return boundMethodCheck(this, NodeCache), (n = Error()).name = e, n.errorcode = e, n.message = null != this.ERRORS[e] ? this.ERRORS[e](t) : "-", n.data = t, n
                        }
                        _initErrors() {
                            var e, t, n;
                            for (t in boundMethodCheck(this, NodeCache), this.ERRORS = {}, n = this._ERRORS) e = n[t], this.ERRORS[t] = this.createErrorMessage(e)
                        }
                        createErrorMessage(e) {
                            return function(t) {
                                return e.replace("__key", t.type)
                            }
                        }
                    };
                    return NodeCache.prototype._ERRORS = {
                        ENOTFOUND: "Key `__key` not found",
                        ECACHEFULL: "Cache max keys amount exceeded",
                        EKEYTYPE: "The key argument has to be of type `string` or `number`. Found: `__key`",
                        EKEYSTYPE: "The keys argument has to be an array.",
                        ETTLTYPE: "The ttl argument has to be a number."
                    }, NodeCache
                }).call(this)
            }).call(this)
        },
        58297: function(e, t, n) {
            var i = n(88132),
                p = i.ARRAY_BUFFER_SUPPORT,
                b = i.SYMBOL_SUPPORT;
            e.exports = function(e, t) {
                var n, i, y, m, g;
                if (!e) throw Error("obliterator/forEach: invalid iterable.");
                if ("function" != typeof t) throw Error("obliterator/forEach: expecting a callback.");
                if (Array.isArray(e) || p && ArrayBuffer.isView(e) || "string" == typeof e || "[object Arguments]" === e.toString()) {
                    for (y = 0, m = e.length; y < m; y++) t(e[y], y);
                    return
                }
                if ("function" == typeof e.forEach) {
                    e.forEach(t);
                    return
                }
                if (b && Symbol.iterator in e && "function" != typeof e.next && (e = e[Symbol.iterator]()), "function" == typeof e.next) {
                    for (n = e, y = 0; !0 !== (g = n.next()).done;) t(g.value, y), y++;
                    return
                }
                for (i in e) e.hasOwnProperty(i) && t(e[i], i)
            }
        },
        3643: function(e) {
            function Iterator(e) {
                if ("function" != typeof e) throw Error("obliterator/iterator: expecting a function!");
                this.next = e
            }
            "undefined" != typeof Symbol && (Iterator.prototype[Symbol.iterator] = function() {
                return this
            }), Iterator.of = function() {
                var e = arguments,
                    t = e.length,
                    n = 0;
                return new Iterator(function() {
                    return n >= t ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                })
            }, Iterator.empty = function() {
                return new Iterator(function() {
                    return {
                        done: !0
                    }
                })
            }, Iterator.fromSequence = function(e) {
                var t = 0,
                    n = e.length;
                return new Iterator(function() {
                    return t >= n ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[t++]
                    }
                })
            }, Iterator.is = function(e) {
                return e instanceof Iterator || "object" == typeof e && null !== e && "function" == typeof e.next
            }, e.exports = Iterator
        },
        88132: function(e, t) {
            t.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, t.SYMBOL_SUPPORT = "undefined" != typeof Symbol
        },
        87793: function(e, t, n) {
            e.exports = n(24060)
        },
        24060: function(e, t, n) {
            var i = n(56461);
            t.operation = function(e) {
                var n = t.timeouts(e);
                return new i(n, {
                    forever: e && (e.forever || e.retries === 1 / 0),
                    unref: e && e.unref,
                    maxRetryTime: e && e.maxRetryTime
                })
            }, t.timeouts = function(e) {
                if (e instanceof Array) return [].concat(e);
                var t = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 1 / 0,
                    randomize: !1
                };
                for (var n in e) t[n] = e[n];
                if (t.minTimeout > t.maxTimeout) throw Error("minTimeout is greater than maxTimeout");
                for (var i = [], p = 0; p < t.retries; p++) i.push(this.createTimeout(p, t));
                return e && e.forever && !i.length && i.push(this.createTimeout(p, t)), i.sort(function(e, t) {
                    return e - t
                }), i
            }, t.createTimeout = function(e, t) {
                return Math.min(Math.round((t.randomize ? Math.random() + 1 : 1) * Math.max(t.minTimeout, 1) * Math.pow(t.factor, e)), t.maxTimeout)
            }, t.wrap = function(e, n, i) {
                if (n instanceof Array && (i = n, n = null), !i)
                    for (var p in i = [], e) "function" == typeof e[p] && i.push(p);
                for (var b = 0; b < i.length; b++) {
                    var y = i[b],
                        m = e[y];
                    e[y] = (function(i) {
                        var p = t.operation(n),
                            b = Array.prototype.slice.call(arguments, 1),
                            y = b.pop();
                        b.push(function(e) {
                            p.retry(e) || (e && (arguments[0] = p.mainError()), y.apply(this, arguments))
                        }), p.attempt(function() {
                            i.apply(e, b)
                        })
                    }).bind(e, m), e[y].options = n
                }
            }
        },
        56461: function(e) {
            function RetryOperation(e, t) {
                "boolean" == typeof t && (t = {
                    forever: t
                }), this._originalTimeouts = JSON.parse(JSON.stringify(e)), this._timeouts = e, this._options = t || {}, this._maxRetryTime = t && t.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
            }
            e.exports = RetryOperation, RetryOperation.prototype.reset = function() {
                this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
            }, RetryOperation.prototype.stop = function() {
                this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
            }, RetryOperation.prototype.retry = function(e) {
                if (this._timeout && clearTimeout(this._timeout), !e) return !1;
                var t = new Date().getTime();
                if (e && t - this._operationStart >= this._maxRetryTime) return this._errors.push(e), this._errors.unshift(Error("RetryOperation timeout occurred")), !1;
                this._errors.push(e);
                var n = this._timeouts.shift();
                if (void 0 === n) {
                    if (!this._cachedTimeouts) return !1;
                    this._errors.splice(0, this._errors.length - 1), n = this._cachedTimeouts.slice(-1)
                }
                var i = this;
                return this._timer = setTimeout(function() {
                    i._attempts++, i._operationTimeoutCb && (i._timeout = setTimeout(function() {
                        i._operationTimeoutCb(i._attempts)
                    }, i._operationTimeout), i._options.unref && i._timeout.unref()), i._fn(i._attempts)
                }, n), this._options.unref && this._timer.unref(), !0
            }, RetryOperation.prototype.attempt = function(e, t) {
                this._fn = e, t && (t.timeout && (this._operationTimeout = t.timeout), t.cb && (this._operationTimeoutCb = t.cb));
                var n = this;
                this._operationTimeoutCb && (this._timeout = setTimeout(function() {
                    n._operationTimeoutCb()
                }, n._operationTimeout)), this._operationStart = new Date().getTime(), this._fn(this._attempts)
            }, RetryOperation.prototype.try = function(e) {
                console.log("Using RetryOperation.try() is deprecated"), this.attempt(e)
            }, RetryOperation.prototype.start = function(e) {
                console.log("Using RetryOperation.start() is deprecated"), this.attempt(e)
            }, RetryOperation.prototype.start = RetryOperation.prototype.try, RetryOperation.prototype.errors = function() {
                return this._errors
            }, RetryOperation.prototype.attempts = function() {
                return this._attempts
            }, RetryOperation.prototype.mainError = function() {
                if (0 === this._errors.length) return null;
                for (var e = {}, t = null, n = 0, i = 0; i < this._errors.length; i++) {
                    var p = this._errors[i],
                        b = p.message,
                        y = (e[b] || 0) + 1;
                    e[b] = y, y >= n && (t = p, n = y)
                }
                return t
            }
        },
        69222: function(e, t, n) {
            "use strict";
            e.exports.numbers = numbers, e.exports.sum = sum, e.exports.mean = mean, e.exports.median = function(e) {
                if (0 === (e = numbers(e)).length) return NaN;
                var t = e.length / 2 | 0;
                return (e = nsort(e)).length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
            }, e.exports.mode = function(e) {
                if (0 === (e = numbers(e)).length) return NaN;
                for (var t = NaN, n = {}, i = 0; i < e.length; i++) {
                    var p = e[i],
                        b = n[p] || 0;
                    b++, n[p] = b
                }
                var y = numbers(Object.keys(n).sort(function(e, t) {
                    return n[t] - n[e]
                }));
                if (t = y[0], n[y[1]] == n[t]) {
                    if (y.length == e.length) return e;
                    for (var m = new Set([t]), g = n[t], i = 1; i < y.length; i++)
                        if (n[y[i]] == g) m.add(y[i]);
                        else break;
                    return m
                }
                return t
            }, e.exports.variance = populationVariance, e.exports.sampleVariance = sampleVariance, e.exports.populationVariance = populationVariance, e.exports.stdev = populationStdev, e.exports.sampleStdev = function(e) {
                return Math.sqrt(sampleVariance(e))
            }, e.exports.populationStdev = populationStdev, e.exports.percentile = function(e, t) {
                if (0 === (e = numbers(e)).length || null == t || t < 0) return NaN;
                t > 1 && (t = 1);
                var n = (e = nsort(e)).length * t - .5;
                if ((0 | n) === n) return e[n];
                var i = 0 | n,
                    p = n - i;
                return (1 - p) * e[i] + p * e[Math.min(i + 1, e.length - 1)]
            }, e.exports.histogram = function(e, t) {
                if (null == e || 0 === (e = nsort(numbers(e))).length) return null;
                null == t && (t = Math.sqrt(e.length)), (t = Math.round(t)) < 1 && (t = 1);
                var n = e[0],
                    i = e[e.length - 1];
                n === i && (n -= .5, i += .5);
                var p = i - n,
                    b = (p + .05 * p) / t,
                    y = (n + i) / 2,
                    m = y - b * Math.floor(t / 2);
                if (t % 2 != 0) var m = y - b / 2 - b * Math.floor(t / 2);
                for (var g = {
                        values: Array(t).fill(0),
                        bins: t,
                        binWidth: b,
                        binLimits: [m, m + b * t]
                    }, T = 0, v = 0; v < e.length; v++) {
                    for (; e[v] > (T + 1) * b + m;) T++;
                    g.values[T]++
                }
                return g
            };
            var i = n(68145);

            function numbers(e) {
                var t = [];
                if (null == e) return t;
                for (var n = 0; n < e.length; n++) i(e[n]) && t.push(+e[n]);
                return t
            }

            function nsort(e) {
                return e.sort(function(e, t) {
                    return e - t
                })
            }

            function sum(e) {
                e = numbers(e);
                for (var t = 0, n = 0; n < e.length; n++) t += e[n];
                return t
            }

            function mean(e) {
                return 0 === (e = numbers(e)).length ? NaN : sum(e) / e.length
            }

            function valuesMinusMeanSquared(e) {
                for (var t = mean(e = numbers(e)), n = [], i = 0; i < e.length; i++) n.push(Math.pow(e[i] - t, 2));
                return n
            }

            function populationVariance(e) {
                return mean(valuesMinusMeanSquared(e))
            }

            function sampleVariance(e) {
                var t = valuesMinusMeanSquared(e);
                return t.length <= 1 ? NaN : sum(t) / (t.length - 1)
            }

            function populationStdev(e) {
                return Math.sqrt(populationVariance(e))
            }
        },
        39617: function(e) {
            e.exports = function(e) {
                return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
            }
        },
        52961: function(e, t, n) {
            "use strict";
            var i = n(7924),
                p = n(12310),
                b = n(78266),
                y = n(59354);

            function uncurryThis(e) {
                return e.call.bind(e)
            }
            var m = "undefined" != typeof BigInt,
                g = "undefined" != typeof Symbol,
                T = uncurryThis(Object.prototype.toString),
                v = uncurryThis(Number.prototype.valueOf),
                S = uncurryThis(String.prototype.valueOf),
                E = uncurryThis(Boolean.prototype.valueOf);
            if (m) var C = uncurryThis(BigInt.prototype.valueOf);
            if (g) var I = uncurryThis(Symbol.prototype.valueOf);

            function checkBoxedPrimitive(e, t) {
                if ("object" != typeof e) return !1;
                try {
                    return t(e), !0
                } catch (e) {
                    return !1
                }
            }

            function isMapToString(e) {
                return "[object Map]" === T(e)
            }

            function isSetToString(e) {
                return "[object Set]" === T(e)
            }

            function isWeakMapToString(e) {
                return "[object WeakMap]" === T(e)
            }

            function isWeakSetToString(e) {
                return "[object WeakSet]" === T(e)
            }

            function isArrayBufferToString(e) {
                return "[object ArrayBuffer]" === T(e)
            }

            function isArrayBuffer(e) {
                return "undefined" != typeof ArrayBuffer && (isArrayBufferToString.working ? isArrayBufferToString(e) : e instanceof ArrayBuffer)
            }

            function isDataViewToString(e) {
                return "[object DataView]" === T(e)
            }

            function isDataView(e) {
                return "undefined" != typeof DataView && (isDataViewToString.working ? isDataViewToString(e) : e instanceof DataView)
            }
            t.isArgumentsObject = i, t.isGeneratorFunction = p, t.isTypedArray = y, t.isPromise = function(e) {
                return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
            }, t.isArrayBufferView = function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : y(e) || isDataView(e)
            }, t.isUint8Array = function(e) {
                return "Uint8Array" === b(e)
            }, t.isUint8ClampedArray = function(e) {
                return "Uint8ClampedArray" === b(e)
            }, t.isUint16Array = function(e) {
                return "Uint16Array" === b(e)
            }, t.isUint32Array = function(e) {
                return "Uint32Array" === b(e)
            }, t.isInt8Array = function(e) {
                return "Int8Array" === b(e)
            }, t.isInt16Array = function(e) {
                return "Int16Array" === b(e)
            }, t.isInt32Array = function(e) {
                return "Int32Array" === b(e)
            }, t.isFloat32Array = function(e) {
                return "Float32Array" === b(e)
            }, t.isFloat64Array = function(e) {
                return "Float64Array" === b(e)
            }, t.isBigInt64Array = function(e) {
                return "BigInt64Array" === b(e)
            }, t.isBigUint64Array = function(e) {
                return "BigUint64Array" === b(e)
            }, isMapToString.working = "undefined" != typeof Map && isMapToString(new Map), t.isMap = function(e) {
                return "undefined" != typeof Map && (isMapToString.working ? isMapToString(e) : e instanceof Map)
            }, isSetToString.working = "undefined" != typeof Set && isSetToString(new Set), t.isSet = function(e) {
                return "undefined" != typeof Set && (isSetToString.working ? isSetToString(e) : e instanceof Set)
            }, isWeakMapToString.working = "undefined" != typeof WeakMap && isWeakMapToString(new WeakMap), t.isWeakMap = function(e) {
                return "undefined" != typeof WeakMap && (isWeakMapToString.working ? isWeakMapToString(e) : e instanceof WeakMap)
            }, isWeakSetToString.working = "undefined" != typeof WeakSet && isWeakSetToString(new WeakSet), t.isWeakSet = function(e) {
                return isWeakSetToString(e)
            }, isArrayBufferToString.working = "undefined" != typeof ArrayBuffer && isArrayBufferToString(new ArrayBuffer), t.isArrayBuffer = isArrayBuffer, isDataViewToString.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = isDataView;
            var w = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

            function isSharedArrayBufferToString(e) {
                return "[object SharedArrayBuffer]" === T(e)
            }

            function isSharedArrayBuffer(e) {
                return void 0 !== w && (void 0 === isSharedArrayBufferToString.working && (isSharedArrayBufferToString.working = isSharedArrayBufferToString(new w)), isSharedArrayBufferToString.working ? isSharedArrayBufferToString(e) : e instanceof w)
            }

            function isNumberObject(e) {
                return checkBoxedPrimitive(e, v)
            }

            function isStringObject(e) {
                return checkBoxedPrimitive(e, S)
            }

            function isBooleanObject(e) {
                return checkBoxedPrimitive(e, E)
            }

            function isBigIntObject(e) {
                return m && checkBoxedPrimitive(e, C)
            }

            function isSymbolObject(e) {
                return g && checkBoxedPrimitive(e, I)
            }
            t.isSharedArrayBuffer = isSharedArrayBuffer, t.isAsyncFunction = function(e) {
                return "[object AsyncFunction]" === T(e)
            }, t.isMapIterator = function(e) {
                return "[object Map Iterator]" === T(e)
            }, t.isSetIterator = function(e) {
                return "[object Set Iterator]" === T(e)
            }, t.isGeneratorObject = function(e) {
                return "[object Generator]" === T(e)
            }, t.isWebAssemblyCompiledModule = function(e) {
                return "[object WebAssembly.Module]" === T(e)
            }, t.isNumberObject = isNumberObject, t.isStringObject = isStringObject, t.isBooleanObject = isBooleanObject, t.isBigIntObject = isBigIntObject, t.isSymbolObject = isSymbolObject, t.isBoxedPrimitive = function(e) {
                return isNumberObject(e) || isStringObject(e) || isBooleanObject(e) || isBigIntObject(e) || isSymbolObject(e)
            }, t.isAnyArrayBuffer = function(e) {
                return "undefined" != typeof Uint8Array && (isArrayBuffer(e) || isSharedArrayBuffer(e))
            }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
                Object.defineProperty(t, e, {
                    enumerable: !1,
                    value: function() {
                        throw Error(e + " is not supported in userland")
                    }
                })
            })
        },
        40942: function(e, t, n) {
            var i = n(25566),
                p = Object.getOwnPropertyDescriptors || function(e) {
                    for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) n[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
                    return n
                },
                b = /%[sdj%]/g;
            t.format = function(e) {
                if (!isString(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(inspect(arguments[n]));
                    return t.join(" ")
                }
                for (var n = 1, i = arguments, p = i.length, y = String(e).replace(b, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= p) return e;
                        switch (e) {
                            case "%s":
                                return String(i[n++]);
                            case "%d":
                                return Number(i[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(i[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), m = i[n]; n < p; m = i[++n]) isNull(m) || !isObject(m) ? y += " " + m : y += " " + inspect(m);
                return y
            }, t.deprecate = function(e, n) {
                if (void 0 !== i && !0 === i.noDeprecation) return e;
                if (void 0 === i) return function() {
                    return t.deprecate(e, n).apply(this, arguments)
                };
                var p = !1;
                return function() {
                    if (!p) {
                        if (i.throwDeprecation) throw Error(n);
                        i.traceDeprecation ? console.trace(n) : console.error(n), p = !0
                    }
                    return e.apply(this, arguments)
                }
            };
            var y = {},
                m = /^$/;
            if (i.env.NODE_DEBUG) {
                var g = i.env.NODE_DEBUG;
                m = RegExp("^" + (g = g.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
            }

            function inspect(e, n) {
                var i = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), isBoolean(n) ? i.showHidden = n : n && t._extend(i, n), isUndefined(i.showHidden) && (i.showHidden = !1), isUndefined(i.depth) && (i.depth = 2), isUndefined(i.colors) && (i.colors = !1), isUndefined(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = stylizeWithColor), formatValue(i, e, i.depth)
            }

            function stylizeWithColor(e, t) {
                var n = inspect.styles[t];
                return n ? "\x1b[" + inspect.colors[n][0] + "m" + e + "\x1b[" + inspect.colors[n][1] + "m" : e
            }

            function stylizeNoColor(e, t) {
                return e
            }

            function formatValue(e, n, i) {
                if (e.customInspect && n && isFunction(n.inspect) && n.inspect !== t.inspect && !(n.constructor && n.constructor.prototype === n)) {
                    var p, b, y, m, g, T = n.inspect(i, e);
                    return isString(T) || (T = formatValue(e, T, i)), T
                }
                var v = function(e, t) {
                    if (isUndefined(t)) return e.stylize("undefined", "undefined");
                    if (isString(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    return isNumber(t) ? e.stylize("" + t, "number") : isBoolean(t) ? e.stylize("" + t, "boolean") : isNull(t) ? e.stylize("null", "null") : void 0
                }(e, n);
                if (v) return v;
                var S = Object.keys(n),
                    E = (m = {}, S.forEach(function(e, t) {
                        m[e] = !0
                    }), m);
                if (e.showHidden && (S = Object.getOwnPropertyNames(n)), isError(n) && (S.indexOf("message") >= 0 || S.indexOf("description") >= 0)) return formatError(n);
                if (0 === S.length) {
                    if (isFunction(n)) {
                        var C = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + C + "]", "special")
                    }
                    if (isRegExp(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (isDate(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (isError(n)) return formatError(n)
                }
                var I = "",
                    w = !1,
                    A = ["{", "}"];
                return (isArray(n) && (w = !0, A = ["[", "]"]), isFunction(n) && (I = " [Function" + (n.name ? ": " + n.name : "") + "]"), isRegExp(n) && (I = " " + RegExp.prototype.toString.call(n)), isDate(n) && (I = " " + Date.prototype.toUTCString.call(n)), isError(n) && (I = " " + formatError(n)), 0 !== S.length || w && 0 != n.length) ? i < 0 ? isRegExp(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), g = w ? function(e, t, n, i, p) {
                    for (var b = [], y = 0, m = t.length; y < m; ++y) hasOwnProperty(t, String(y)) ? b.push(formatProperty(e, t, n, i, String(y), !0)) : b.push("");
                    return p.forEach(function(p) {
                        p.match(/^\d+$/) || b.push(formatProperty(e, t, n, i, p, !0))
                    }), b
                }(e, n, i, E, S) : S.map(function(t) {
                    return formatProperty(e, n, i, E, t, w)
                }), e.seen.pop(), p = I, b = A, y = 0, g.reduce(function(e, t) {
                    return y++, t.indexOf("\n") >= 0 && y++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? b[0] + ("" === p ? "" : p + "\n ") + " " + g.join(",\n  ") + " " + b[1] : b[0] + p + " " + g.join(", ") + " " + b[1]) : A[0] + I + A[1]
            }

            function formatError(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function formatProperty(e, t, n, i, p, b) {
                var y, m, g;
                if ((g = Object.getOwnPropertyDescriptor(t, p) || {
                        value: t[p]
                    }).get ? m = g.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : g.set && (m = e.stylize("[Setter]", "special")), hasOwnProperty(i, p) || (y = "[" + p + "]"), !m && (0 > e.seen.indexOf(g.value) ? (m = isNull(n) ? formatValue(e, g.value, null) : formatValue(e, g.value, n - 1)).indexOf("\n") > -1 && (m = b ? m.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").slice(2) : "\n" + m.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n")) : m = e.stylize("[Circular]", "special")), isUndefined(y)) {
                    if (b && p.match(/^\d+$/)) return m;
                    (y = JSON.stringify("" + p)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (y = y.slice(1, -1), y = e.stylize(y, "name")) : (y = y.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), y = e.stylize(y, "string"))
                }
                return y + ": " + m
            }

            function isArray(e) {
                return Array.isArray(e)
            }

            function isBoolean(e) {
                return "boolean" == typeof e
            }

            function isNull(e) {
                return null === e
            }

            function isNumber(e) {
                return "number" == typeof e
            }

            function isString(e) {
                return "string" == typeof e
            }

            function isUndefined(e) {
                return void 0 === e
            }

            function isRegExp(e) {
                return isObject(e) && "[object RegExp]" === objectToString(e)
            }

            function isObject(e) {
                return "object" == typeof e && null !== e
            }

            function isDate(e) {
                return isObject(e) && "[object Date]" === objectToString(e)
            }

            function isError(e) {
                return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error)
            }

            function isFunction(e) {
                return "function" == typeof e
            }

            function objectToString(e) {
                return Object.prototype.toString.call(e)
            }

            function pad(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            t.debuglog = function(e) {
                if (!y[e = e.toUpperCase()]) {
                    if (m.test(e)) {
                        var n = i.pid;
                        y[e] = function() {
                            var i = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, i)
                        }
                    } else y[e] = function() {}
                }
                return y[e]
            }, t.inspect = inspect, inspect.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.types = n(52961), t.isArray = isArray, t.isBoolean = isBoolean, t.isNull = isNull, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = isNumber, t.isString = isString, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = isUndefined, t.isRegExp = isRegExp, t.types.isRegExp = isRegExp, t.isObject = isObject, t.isDate = isDate, t.types.isDate = isDate, t.isError = isError, t.types.isNativeError = isError, t.isFunction = isFunction, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = n(39617);
            var T = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function hasOwnProperty(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.log = function() {
                var e, n;
                console.log("%s - %s", (n = [pad((e = new Date).getHours()), pad(e.getMinutes()), pad(e.getSeconds())].join(":"), [e.getDate(), T[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
            }, t.inherits = n(75335), t._extend = function(e, t) {
                if (!t || !isObject(t)) return e;
                for (var n = Object.keys(t), i = n.length; i--;) e[n[i]] = t[n[i]];
                return e
            };
            var v = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

            function callbackifyOnRejected(e, t) {
                if (!e) {
                    var n = Error("Promise was rejected with a falsy value");
                    n.reason = e, e = n
                }
                return t(e)
            }
            t.promisify = function(e) {
                if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
                if (v && e[v]) {
                    var fn = e[v];
                    if ("function" != typeof fn) throw TypeError('The "util.promisify.custom" argument must be of type Function');
                    return Object.defineProperty(fn, v, {
                        value: fn,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }), fn
                }

                function fn() {
                    for (var t, n, i = new Promise(function(e, i) {
                            t = e, n = i
                        }), p = [], b = 0; b < arguments.length; b++) p.push(arguments[b]);
                    p.push(function(e, i) {
                        e ? n(e) : t(i)
                    });
                    try {
                        e.apply(this, p)
                    } catch (e) {
                        n(e)
                    }
                    return i
                }
                return Object.setPrototypeOf(fn, Object.getPrototypeOf(e)), v && Object.defineProperty(fn, v, {
                    value: fn,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), Object.defineProperties(fn, p(e))
            }, t.promisify.custom = v, t.callbackify = function(e) {
                if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');

                function callbackified() {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                    var p = t.pop();
                    if ("function" != typeof p) throw TypeError("The last argument must be of type Function");
                    var b = this,
                        cb = function() {
                            return p.apply(b, arguments)
                        };
                    e.apply(this, t).then(function(e) {
                        i.nextTick(cb.bind(null, null, e))
                    }, function(e) {
                        i.nextTick(callbackifyOnRejected.bind(null, e, cb))
                    })
                }
                return Object.setPrototypeOf(callbackified, Object.getPrototypeOf(e)), Object.defineProperties(callbackified, p(e)), callbackified
            }
        },
        78266: function(e, t, n) {
            "use strict";
            var i = n(11549),
                p = n(32432),
                b = n(65775),
                y = n(50710),
                m = n(67526),
                g = y("Object.prototype.toString"),
                T = n(86273)(),
                v = "undefined" == typeof globalThis ? n.g : globalThis,
                S = p(),
                E = y("String.prototype.slice"),
                C = Object.getPrototypeOf,
                I = y("Array.prototype.indexOf", !0) || function(e, t) {
                    for (var n = 0; n < e.length; n += 1)
                        if (e[n] === t) return n;
                    return -1
                },
                w = {
                    __proto__: null
                };
            T && m && C ? i(S, function(e) {
                var t = new v[e];
                if (Symbol.toStringTag in t) {
                    var n = C(t),
                        i = m(n, Symbol.toStringTag);
                    i || (i = m(C(n), Symbol.toStringTag)), w["$" + e] = b(i.get)
                }
            }) : i(S, function(e) {
                var t = new v[e],
                    n = t.slice || t.set;
                n && (w["$" + e] = b(n))
            });
            var tryTypedArrays = function(e) {
                    var t = !1;
                    return i(w, function(n, i) {
                        if (!t) try {
                            "$" + n(e) === i && (t = E(i, 1))
                        } catch (e) {}
                    }), t
                },
                trySlices = function(e) {
                    var t = !1;
                    return i(w, function(n, i) {
                        if (!t) try {
                            n(e), t = E(i, 1)
                        } catch (e) {}
                    }), t
                };
            e.exports = function(e) {
                if (!e || "object" != typeof e) return !1;
                if (!T) {
                    var t = E(g(e), 8, -1);
                    return I(S, t) > -1 ? t : "Object" === t && trySlices(e)
                }
                return m ? tryTypedArrays(e) : null
            }
        },
        32432: function(e, t, n) {
            "use strict";
            var i = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
                p = "undefined" == typeof globalThis ? n.g : globalThis;
            e.exports = function() {
                for (var e = [], t = 0; t < i.length; t++) "function" == typeof p[i[t]] && (e[e.length] = i[t]);
                return e
            }
        },
        8782: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                print: function() {
                    return print
                }
            });
            var i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function defineInspect(e) {
                var t = e.prototype.toJSON;
                "function" == typeof t || function(e, t) {
                    throw Error(null != t ? t : "Unexpected invariant triggered.")
                }(0), e.prototype.inspect = t, i && (e.prototype[i] = t)
            }

            function isNode(e) {
                return null != e && "string" == typeof e.kind
            }
            defineInspect(function() {
                function Location(e, t, n) {
                    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
                }
                return Location.prototype.toJSON = function() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }, Location
            }()), defineInspect(function() {
                function Token(e, t, n, i, p, b, y) {
                    this.kind = e, this.start = t, this.end = n, this.line = i, this.column = p, this.value = y, this.prev = b, this.next = null
                }
                return Token.prototype.toJSON = function() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }, Token
            }());
            var p = {
                    Name: [],
                    Document: ["definitions"],
                    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
                    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
                    Variable: ["name"],
                    SelectionSet: ["selections"],
                    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
                    Argument: ["name", "value"],
                    FragmentSpread: ["name", "directives"],
                    InlineFragment: ["typeCondition", "directives", "selectionSet"],
                    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
                    IntValue: [],
                    FloatValue: [],
                    StringValue: [],
                    BooleanValue: [],
                    NullValue: [],
                    EnumValue: [],
                    ListValue: ["values"],
                    ObjectValue: ["fields"],
                    ObjectField: ["name", "value"],
                    Directive: ["name", "arguments"],
                    NamedType: ["name"],
                    ListType: ["type"],
                    NonNullType: ["type"],
                    SchemaDefinition: ["description", "directives", "operationTypes"],
                    OperationTypeDefinition: ["type"],
                    ScalarTypeDefinition: ["description", "name", "directives"],
                    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
                    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
                    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    UnionTypeDefinition: ["description", "name", "directives", "types"],
                    EnumTypeDefinition: ["description", "name", "directives", "values"],
                    EnumValueDefinition: ["description", "name", "directives"],
                    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
                    DirectiveDefinition: ["description", "name", "arguments", "locations"],
                    SchemaExtension: ["directives", "operationTypes"],
                    ScalarTypeExtension: ["name", "directives"],
                    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
                    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
                    UnionTypeExtension: ["name", "directives", "types"],
                    EnumTypeExtension: ["name", "directives", "values"],
                    InputObjectTypeExtension: ["name", "directives", "fields"]
                },
                b = Object.freeze({});

            function print(e) {
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p,
                        y = void 0,
                        m = Array.isArray(e),
                        g = [e],
                        T = -1,
                        v = [],
                        S = void 0,
                        E = void 0,
                        C = void 0,
                        I = [],
                        w = [],
                        A = e;
                    do {
                        var _, R = ++T === g.length,
                            k = R && 0 !== v.length;
                        if (R) {
                            if (E = 0 === w.length ? void 0 : I[I.length - 1], S = C, C = w.pop(), k) {
                                if (m) S = S.slice();
                                else {
                                    for (var P = {}, O = 0, M = Object.keys(S); O < M.length; O++) {
                                        var x = M[O];
                                        P[x] = S[x]
                                    }
                                    S = P
                                }
                                for (var D = 0, B = 0; B < v.length; B++) {
                                    var L = v[B][0],
                                        N = v[B][1];
                                    m && (L -= D), m && null === N ? (S.splice(L, 1), D++) : S[L] = N
                                }
                            }
                            T = y.index, g = y.keys, v = y.edits, m = y.inArray, y = y.prev
                        } else {
                            if (E = C ? m ? T : g[T] : void 0, null == (S = C ? C[E] : A)) continue;
                            C && I.push(E)
                        }
                        var U = void 0;
                        if (!Array.isArray(S)) {
                            if (!isNode(S)) throw Error("Invalid AST Node: ".concat(function formatValue(e, t) {
                                switch (_typeof(e)) {
                                    case "string":
                                        return JSON.stringify(e);
                                    case "function":
                                        return e.name ? "[function ".concat(e.name, "]") : "[function]";
                                    case "object":
                                        if (null === e) return "null";
                                        return function(e, t) {
                                            if (-1 !== t.indexOf(e)) return "[Circular]";
                                            var n, p, b = [].concat(t, [e]),
                                                y = "function" == typeof(n = e[String(i)]) ? n : "function" == typeof e.inspect ? e.inspect : void 0;
                                            if (void 0 !== y) {
                                                var m = y.call(e);
                                                if (m !== e) return "string" == typeof m ? m : formatValue(m, b)
                                            } else if (Array.isArray(e)) return function(e, t) {
                                                if (0 === e.length) return "[]";
                                                if (t.length > 2) return "[Array]";
                                                for (var n = Math.min(10, e.length), i = e.length - n, p = [], b = 0; b < n; ++b) p.push(formatValue(e[b], t));
                                                return 1 === i ? p.push("... 1 more item") : i > 1 && p.push("... ".concat(i, " more items")), "[" + p.join(", ") + "]"
                                            }(e, b);
                                            return 0 === (p = Object.keys(e)).length ? "{}" : b.length > 2 ? "[" + function(e) {
                                                var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                                if ("Object" === t && "function" == typeof e.constructor) {
                                                    var n = e.constructor.name;
                                                    if ("string" == typeof n && "" !== n) return n
                                                }
                                                return t
                                            }(e) + "]" : "{ " + p.map(function(t) {
                                                var n = formatValue(e[t], b);
                                                return t + ": " + n
                                            }).join(", ") + " }"
                                        }(e, t);
                                    default:
                                        return String(e)
                                }
                            }(S, []), "."));
                            var j = function(e, t, n) {
                                var i = e[t];
                                if (i) {
                                    if (!n && "function" == typeof i) return i;
                                    var p = n ? i.leave : i.enter;
                                    if ("function" == typeof p) return p
                                } else {
                                    var b = n ? e.leave : e.enter;
                                    if (b) {
                                        if ("function" == typeof b) return b;
                                        var y = b[t];
                                        if ("function" == typeof y) return y
                                    }
                                }
                            }(t, S.kind, R);
                            if (j) {
                                if ((U = j.call(t, S, E, C, I, w)) === b) break;
                                if (!1 === U) {
                                    if (!R) {
                                        I.pop();
                                        continue
                                    }
                                } else if (void 0 !== U && (v.push([E, U]), !R)) {
                                    if (isNode(U)) S = U;
                                    else {
                                        I.pop();
                                        continue
                                    }
                                }
                            }
                        }
                        void 0 === U && k && v.push([E, S]), R ? I.pop() : (y = {
                            inArray: m,
                            index: T,
                            keys: g,
                            edits: v,
                            prev: y
                        }, g = (m = Array.isArray(S)) ? S : null !== (_ = n[S.kind]) && void 0 !== _ ? _ : [], T = -1, v = [], C && w.push(C), C = S)
                    } while (void 0 !== y);
                    return 0 !== v.length && (A = v[v.length - 1][1]), A
                }(e, {
                    leave: y
                })
            }
            var y = {
                Name: function(e) {
                    return e.value
                },
                Variable: function(e) {
                    return "$" + e.name
                },
                Document: function(e) {
                    return join(e.definitions, "\n\n") + "\n"
                },
                OperationDefinition: function(e) {
                    var t = e.operation,
                        n = e.name,
                        i = wrap("(", join(e.variableDefinitions, ", "), ")"),
                        p = join(e.directives, " "),
                        b = e.selectionSet;
                    return n || p || i || "query" !== t ? join([t, join([n, i]), p, b], " ") : b
                },
                VariableDefinition: function(e) {
                    var t = e.variable,
                        n = e.type,
                        i = e.defaultValue,
                        p = e.directives;
                    return t + ": " + n + wrap(" = ", i) + wrap(" ", join(p, " "))
                },
                SelectionSet: function(e) {
                    return block(e.selections)
                },
                Field: function(e) {
                    var t = e.alias,
                        n = e.name,
                        i = e.arguments,
                        p = e.directives,
                        b = e.selectionSet,
                        y = wrap("", t, ": ") + n,
                        m = y + wrap("(", join(i, ", "), ")");
                    return m.length > 80 && (m = y + wrap("(\n", indent(join(i, "\n")), "\n)")), join([m, join(p, " "), b], " ")
                },
                Argument: function(e) {
                    return e.name + ": " + e.value
                },
                FragmentSpread: function(e) {
                    return "..." + e.name + wrap(" ", join(e.directives, " "))
                },
                InlineFragment: function(e) {
                    var t = e.typeCondition,
                        n = e.directives,
                        i = e.selectionSet;
                    return join(["...", wrap("on ", t), join(n, " "), i], " ")
                },
                FragmentDefinition: function(e) {
                    var t = e.name,
                        n = e.typeCondition,
                        i = e.variableDefinitions,
                        p = e.directives,
                        b = e.selectionSet;
                    return "fragment ".concat(t).concat(wrap("(", join(i, ", "), ")"), " ") + "on ".concat(n, " ").concat(wrap("", join(p, " "), " ")) + b
                },
                IntValue: function(e) {
                    return e.value
                },
                FloatValue: function(e) {
                    return e.value
                },
                StringValue: function(e, t) {
                    var n = e.value;
                    return e.block ? function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = -1 === e.indexOf("\n"),
                            p = " " === e[0] || "	" === e[0],
                            b = '"' === e[e.length - 1],
                            y = "\\" === e[e.length - 1],
                            m = !i || b || y || n,
                            g = "";
                        return m && !(i && p) && (g += "\n" + t), g += t ? e.replace(/\n/g, "\n" + t) : e, m && (g += "\n"), '"""' + g.replace(/"""/g, '\\"""') + '"""'
                    }(n, "description" === t ? "" : "  ") : JSON.stringify(n)
                },
                BooleanValue: function(e) {
                    return e.value ? "true" : "false"
                },
                NullValue: function() {
                    return "null"
                },
                EnumValue: function(e) {
                    return e.value
                },
                ListValue: function(e) {
                    return "[" + join(e.values, ", ") + "]"
                },
                ObjectValue: function(e) {
                    return "{" + join(e.fields, ", ") + "}"
                },
                ObjectField: function(e) {
                    return e.name + ": " + e.value
                },
                Directive: function(e) {
                    return "@" + e.name + wrap("(", join(e.arguments, ", "), ")")
                },
                NamedType: function(e) {
                    return e.name
                },
                ListType: function(e) {
                    return "[" + e.type + "]"
                },
                NonNullType: function(e) {
                    return e.type + "!"
                },
                SchemaDefinition: addDescription(function(e) {
                    var t = e.directives,
                        n = e.operationTypes;
                    return join(["schema", join(t, " "), block(n)], " ")
                }),
                OperationTypeDefinition: function(e) {
                    return e.operation + ": " + e.type
                },
                ScalarTypeDefinition: addDescription(function(e) {
                    return join(["scalar", e.name, join(e.directives, " ")], " ")
                }),
                ObjectTypeDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.interfaces,
                        i = e.directives,
                        p = e.fields;
                    return join(["type", t, wrap("implements ", join(n, " & ")), join(i, " "), block(p)], " ")
                }),
                FieldDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.arguments,
                        i = e.type,
                        p = e.directives;
                    return t + (hasMultilineItems(n) ? wrap("(\n", indent(join(n, "\n")), "\n)") : wrap("(", join(n, ", "), ")")) + ": " + i + wrap(" ", join(p, " "))
                }),
                InputValueDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.type,
                        i = e.defaultValue,
                        p = e.directives;
                    return join([t + ": " + n, wrap("= ", i), join(p, " ")], " ")
                }),
                InterfaceTypeDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.interfaces,
                        i = e.directives,
                        p = e.fields;
                    return join(["interface", t, wrap("implements ", join(n, " & ")), join(i, " "), block(p)], " ")
                }),
                UnionTypeDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.directives,
                        i = e.types;
                    return join(["union", t, join(n, " "), i && 0 !== i.length ? "= " + join(i, " | ") : ""], " ")
                }),
                EnumTypeDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.directives,
                        i = e.values;
                    return join(["enum", t, join(n, " "), block(i)], " ")
                }),
                EnumValueDefinition: addDescription(function(e) {
                    return join([e.name, join(e.directives, " ")], " ")
                }),
                InputObjectTypeDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.directives,
                        i = e.fields;
                    return join(["input", t, join(n, " "), block(i)], " ")
                }),
                DirectiveDefinition: addDescription(function(e) {
                    var t = e.name,
                        n = e.arguments,
                        i = e.repeatable,
                        p = e.locations;
                    return "directive @" + t + (hasMultilineItems(n) ? wrap("(\n", indent(join(n, "\n")), "\n)") : wrap("(", join(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + join(p, " | ")
                }),
                SchemaExtension: function(e) {
                    var t = e.directives,
                        n = e.operationTypes;
                    return join(["extend schema", join(t, " "), block(n)], " ")
                },
                ScalarTypeExtension: function(e) {
                    return join(["extend scalar", e.name, join(e.directives, " ")], " ")
                },
                ObjectTypeExtension: function(e) {
                    var t = e.name,
                        n = e.interfaces,
                        i = e.directives,
                        p = e.fields;
                    return join(["extend type", t, wrap("implements ", join(n, " & ")), join(i, " "), block(p)], " ")
                },
                InterfaceTypeExtension: function(e) {
                    var t = e.name,
                        n = e.interfaces,
                        i = e.directives,
                        p = e.fields;
                    return join(["extend interface", t, wrap("implements ", join(n, " & ")), join(i, " "), block(p)], " ")
                },
                UnionTypeExtension: function(e) {
                    var t = e.name,
                        n = e.directives,
                        i = e.types;
                    return join(["extend union", t, join(n, " "), i && 0 !== i.length ? "= " + join(i, " | ") : ""], " ")
                },
                EnumTypeExtension: function(e) {
                    var t = e.name,
                        n = e.directives,
                        i = e.values;
                    return join(["extend enum", t, join(n, " "), block(i)], " ")
                },
                InputObjectTypeExtension: function(e) {
                    var t = e.name,
                        n = e.directives,
                        i = e.fields;
                    return join(["extend input", t, join(n, " "), block(i)], " ")
                }
            };

            function addDescription(e) {
                return function(t) {
                    return join([t.description, e(t)], "\n")
                }
            }

            function join(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return null !== (t = null == e ? void 0 : e.filter(function(e) {
                    return e
                }).join(n)) && void 0 !== t ? t : ""
            }

            function block(e) {
                return wrap("{\n", indent(join(e, "\n")), "\n}")
            }

            function wrap(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return null != t && "" !== t ? e + t + n : ""
            }

            function indent(e) {
                return wrap("  ", e.replace(/\n/g, "\n  "))
            }

            function isMultiline(e) {
                return -1 !== e.indexOf("\n")
            }

            function hasMultilineItems(e) {
                return null != e && e.some(isMultiline)
            }
        },
        23445: function(e) {
            "use strict";
            e.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
        }
    }
]);