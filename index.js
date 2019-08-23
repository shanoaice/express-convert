function convert(expressMiddleware) {
	return async function convertedMiddleware(ctx, next) {
		const expressSettingTable = {};
		// Express's res.app and req.app implementation in Koa
		const app = {
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
		};
		// Express's req object implementation on Koa
		const expressReq = {
			app,
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
		const expressResponse = {
			app,
			headersSent: ctx.response.headerSent,
			locals: {},
			append: ctx.append,
			attachment: ctx.attachment,
			cookie: ctx.cookie.set,
			clearCookie() {},
			sendFile() {},
			download() {},
			end() {},
			format() {},
			get: ctx.response.get,
			set: ctx.set,
			json(body) {
				ctx.body = body;
			},
			jsonp(body) {
				ctx.body = body;
			},
			location() {},
			links() {},
			redirect: ctx.redirect,
			render() {},
			send(body) {
				ctx.body = body;
			},
			sendStatus(status) {
				ctx.status = status;
			},
			status(status) {
				ctx.status = status;
			},
			vary: ctx.response.vary,
		};
	};
}
