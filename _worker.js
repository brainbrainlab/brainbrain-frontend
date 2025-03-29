export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve static assets directly
    if (url.pathname.startsWith('/assets/')) {
      return env.ASSETS.fetch(request);
    }

    // For all other routes, serve index.html
    return env.ASSETS.fetch(`${url.origin}/index.html`);
  },
};
