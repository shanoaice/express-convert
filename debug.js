/* eslint-disable no-unused-vars */

/* A small script created to debug and inspect wheather all the variables/properties/methods
 * are correctly set
 */

const convert = require('.');

let request;
let response;

const ctx = {
	url: '/',
	path: '/',
	query: {},
	request: {
		body: '',
	},
	fresh: true,
	stale: false,
	hostname: '',
	ip: '',
	ips: [],
	method: '',
	originalUrl: '',
	protocol: '',
	secure: true,
	subdomains: '',
	get() {},
	accepts: undefined,
	acceptsCharsets: undefined,
	acceptsEncodings: undefined,
	acceptsLanguages: undefined,
	is: undefined,
	app: {},
	response: {
		headersSent: true,
		get() {},
		vary: undefined,
	},
	cookies: {
		get() {},
	},
	set() {},
	body: '',
	redirect() {},
	status: 404,
};

const middleware = convert((req, res) => {
	request = req;
	response = res;
});

middleware(ctx).then();
