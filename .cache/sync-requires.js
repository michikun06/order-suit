const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ipad/react/order-suit/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/ipad/react/order-suit/src/pages/blog.js"))),
  "component---src-pages-booking-js": hot(preferDefault(require("/Users/ipad/react/order-suit/src/pages/booking.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ipad/react/order-suit/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/ipad/react/order-suit/src/pages/order.js"))),
  "component---src-pages-price-js": hot(preferDefault(require("/Users/ipad/react/order-suit/src/pages/price.js")))
}

