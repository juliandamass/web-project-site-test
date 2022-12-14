const ServerConfig = {
  getPublicBackendUrl() {
    return process.env.NEXT_PUBLIC_BACKEND_URL;
  },

  getPublicFrontendUrl() {
    return process.env.NEXT_PUBLIC_FRONTEND_URL;
  },
};

module.exports = { ServerConfig };
