export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 示例：代理所有以 / 开头的请求到 example.com 的 8080 端口
    if (url.pathname.startsWith('/')) {
      url.hostname = "cc.37o.cc"; // 目标域名
      url.port = 81; // 指定目标端口
      
      // 复制原始请求的所有属性（Method、Headers、Body等）
      const newRequest = new Request(url.toString(), request);
      return fetch(newRequest);
    }
    
    return env.ASSETS.fetch(request);
  }
};
