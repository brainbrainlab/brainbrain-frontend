export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      // First try the static asset
      let response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        // If not found, serve index.html for SPA routing
        response = await env.ASSETS.fetch(`${url.origin}/index.html`);
      }
      return response;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
