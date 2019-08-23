# express-convert

> Convert express middleware to koa middleware  
> There is some difference between Express middleware and the converter, please see below.

## Install
```
npm install express-convert
```

## Usage
```javascript
const convert = require('express-convert');

koa.use(convert(expressMiddleware));
```

## Compatibility

| express-convert | express | Property Rewrite |
| --------------- | ------- | :--------------: |
| `@1`            | `@4`    |       :x:        |

## Some differences

- Property rewrite won't work in this version, I may add property rewrite support at `express-convert@2`.
- `req.app`: req.app is a `Koa` app instance, not an `Express` app instance.
- Application Setting: `Koa` dones't have these settings, but there will be a replacement with empty setting table. You can use it as a per-middleware store.
- `req.cookies`: Koa uses the `cookies` module so this property is not a parsed cookie object, for what it is, see [Koa documents](https://koajs.com/#context).
- `req.params`, `req.app.METHOD()` and `req.route`: Koa does not have router, so the properties is always `undefined` and the method always returns `undefined` and do nothing.
- `req.signedCookies`: this property is `undefined`, use `req.cookies.get()` with `signed` option.
- `req.xhr`: Koa dones't support this, so this property is `undefined`.
- `req.range`: Koa dones't support this, so this function always return undefined and do nothing.
- `res.locals`: Koa dones't support this, so this would be a empty object.
- `res.cookie`: Koa uses the `cookie` module to do the job, so the option is a little bit different, for more information, see [Koa documents](https://koajs.com/#context).
- `res.clearCookie`: Koa does not support it, so this function will always return undefined and do nothing.
- `res.download` and `res.sendFile`: Koa does not support it, so this function will always return undefined and do nothing, consider use `res.attach` to do file hosting job.
- `res.end`: This generally does nothing because in Koa you do not need to end the response manually, just do nothing. Koa will end the response for you.
- `res.jsonp`: Koa does not have an integrated jsonp support, so this function generally does the same as `res.json`. If you want to get jsonp support, have a look at [koa-jsonp](https://github.com/kilianc/koa-jsonp).
- `res.location` and `res.links`: Koa does not have integrated support for them, but I plan to implement them in future versions, now they generally do nothing.
- `res.render`: Koa does not support this, so it does nothing.
