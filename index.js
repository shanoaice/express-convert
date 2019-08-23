function convert(expressMiddleware) {
	return async (ctx, next) => {
		const expressSettingTable = {};
		// Express's req object implementation on Koa
		const expressReq = {
			app: {
				...ctx.app,
				set(key, value) {
					expressSettingTable[key] = value;
				},
				get(...args) {
					if (args.length === 1) {
						return expressSettingTable[args[0]];
					}
					return undefined;
				},
				// HTTP METHOD verb placeholder
				post() {},
				delete() {},
				put() {},
				patch() {},
				all() {},
				head() {},
				checkout() {},
				copy() {},
				lock() {},
				merge() {},
				mkactivity() {},
				mkcol() {},
				move() {},
				'm-search': () => {},
				notify() {},
				options() {},
				purge() {},
				report() {},
				search() {},
				subscribe() {},
				trace() {},
				unlock() {},
				unsubscribe() {},
			},
			baseUrl: ctx.url,
			body: (ctx.request.body ? ctx.request.body : undefined),
			fresh: ctx.fresh,
			stale: ctx.stale,
			hostname: ctx.hostname,
			ip: ctx.ip,
			ips: ctx.ips,
			method: ctx.method,
			originalUrl: ctx.originalUrl,
			params: undefined,
			path: ctx.path,
			protocol: ctx.protocol,
			query: ctx.query,
			secure: ctx.secure,
			cookies: ctx.cookies,
			subdomains: ctx.subdomains,
			xhr: undefined,
			signedCookies: undefined,
			accepts: ctx.accepts,
			acceptsCharsets: ctx.acceptsCharsets,
			acceptsEncodings: ctx.acceptsEncodings,
			acceptLanguages: ctx.acceptLanguages,
			is: ctx.is,
			get: ctx.request.get,
			range() {},
		};
		// Express's response object implementation on Koa
		let expressResponse = {};
	};
}
