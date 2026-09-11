const config = {
  backendUrl: (process.env.REACT_APP_BACKEND_URL || '').replace(/\/$/, ''),
};
console.log(`backendUrl in config.js: ${config.backendUrl}`)
export { config as urlConfig };
