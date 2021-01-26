/**
 * 是否是开发环境
 */
export function isDev() {
  return process.env.NODE_ENV === "development";
}

/**
 * 是否是生产环境
 */
export function isProd() {
  return process.env.NODE_ENV === "production";
}

/**
 * 获取当前组件对象
 */
export function getCurrentPagesComponents() {
  const routes = getCurrentPages(); // 获取当前打开过的页面路由数组
  return routes[routes.length - 1]; // 获取当前页面路由，也就是最后一个打开的页面组件
}
