// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-booking-js": () => import("./../../../src/pages/booking.js" /* webpackChunkName: "component---src-pages-booking-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-order-js": () => import("./../../../src/pages/order.js" /* webpackChunkName: "component---src-pages-order-js" */),
  "component---src-pages-price-js": () => import("./../../../src/pages/price.js" /* webpackChunkName: "component---src-pages-price-js" */)
}

