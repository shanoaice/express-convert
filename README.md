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
const Koa = require('koa');
const app = new Koa();

app.use(convert(expressMiddleware));
```

## Express Compatibility

| express-convert | express |               Property Rewrite               |                  `req.xhr`                   |
| --------------- | ------- | :------------------------------------------: | :------------------------------------------: |
| `@1`            | `@4`    | :heavy_check_mark: (implemented ar `@1.2.0`) | :heavy_check_mark: (implemented at `@1.0.1`) |

## Feature

| Version |  Property Rewrite  |     `req.xhr`      |             `res.jsonp()`             | Custom JSON parser |
| ------- | :----------------: | :----------------: | :-----------------------------------: | :----------------: |
| 1.0.0   |        :x:         |        :x:         |                  :x:                  |        :x:         |
| 1.1.0   |        :x:         | :heavy_check_mark: |                  :x:                  |        :x:         |
| 1.2.0   | :heavy_check_mark: | :heavy_check_mark: |                  :x:                  |        :x:         |
| 1.3.0   | :heavy_check_mark: | :heavy_check_mark: | :o: (no custom callback name support) |        :x:         |

## Some differences

- `req.app`: req.app is a `Koa` app instance, not an `Express` app instance.
- Application Setting: `Koa` dones't have these settings, but there will be a replacement with empty setting table. You can use it as a per-middleware store.
- `req.cookies`: Koa uses the `cookies` module so this property is not a parsed cookie object, for what it is, see [Koa documents](https://koajs.com/#context).
- `req.params`, `req.app.METHOD()` and `req.route`: Koa does not have router, so the properties is always `undefined` and the method always returns `undefined` and do nothing.
- `req.signedCookies`: this property is `undefined`, use `req.cookies.get()` with `signed` option.
- `req.range`: Koa dones't support this, so this function always return undefined and do nothing.
- `res.locals`: Koa dones't support this, so this would be a empty object.
- `res.cookie`: Koa uses the `cookie` module to do the job, so the option is a little bit different, for more information, see [Koa documents](https://koajs.com/#context).
- `res.clearCookie`: Koa does not support it, so this function will always return undefined and do nothing.
- `res.download` and `res.sendFile`: Koa does not support it, so this function will always return undefined and do nothing, consider use `res.attach` to do file hosting job.
- `res.end`: This generally does nothing because in Koa you do not need to end the response manually, just do nothing. Koa will end the response for you.
- `res.jsonp`: Koa does not have integrated support for this method, this is only a simple implementation and it currently does not support custom callback name. If you want to get full jsonp support, have a look at [koa-jsonp](https://github.com/kilianc/koa-jsonp).
- `res.location` and `res.links`: Koa does not have integrated support for them, but I plan to implement them in future versions, now they generally do nothing.
- `res.render`: Koa does not support this, so it does nothing.
