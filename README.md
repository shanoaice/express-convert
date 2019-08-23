# express-convert

> Convert express middleware to koa middleware  
> There is some difference between Express middleware and the converter, please see below.

## Compatibility

| express-convert | express | Property Rewrite | Router |
| --------------- | ------- | :--------------: | :----: |
| `@1`            | `@4`    |       :x:        |  :x:   |

## Some differences

- Property rewrite won't work in this version, I may add property rewrite support at `express-convert@2`.
- `req.app`: req.app is a `Koa` app instance, not an `Express` app instance.
- Application Setting: `Koa` don't have these settings, but there will be a replacement with empty setting table. You can use it as a per-middleware store.
- `req.cookies`: Koa uses the `cookies` module so this property is not a parsed cookie object, for what it is, see [Koa documents](https://koajs.com/#context).
- `req.params`, `req.app.METHOD()` and `req.route`: Koa does not have router, so the properties is always `undefined` and the method always returns `undefined`.
- `req.signedCookies`: this property is `undefined`, use `req.cookies.get()` with `signed` option.
- `req.xhr`: Koa don't support this, so this property is `undefined`.
- `req.range`: Koa don't support this, so this function always return undefined.
