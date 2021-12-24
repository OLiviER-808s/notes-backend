module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f36e6579bf5485565a5f5926ad2fe32'),
  },
});
