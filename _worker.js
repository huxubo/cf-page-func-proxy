export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      // 设置目标源站为 HTTP 协议 + 指定端口
      url.hostname = "cc.37o.cc"; // 源站域名或 IP
      url.protocol = "http:";       // 强制使用 HTTP
      url.port = 81;              // 源站的 HTTP 端口

      // 创建新的 HTTP 请求（不要用 HTTPS）
      const newRequest = new Request(url.toString(), request);
      return fetch(newRequest);
    }
    return env.ASSETS.fetch(request);
  }
};
