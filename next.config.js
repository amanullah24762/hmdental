/** Only the existing reference photographs are approved for remote optimization. */
module.exports = {
  images: {
    remotePatterns: [
      '/wp-content/uploads/2021/05/Image-new.jpg',
      '/wp-content/uploads/2021/03/after.jpg',
      '/wp-content/uploads/2021/03/Before.jpg',
    ].map(pathname => ({
      protocol: 'https',
      hostname: 'alqarndentalconsultants.pk',
      port: '',
      pathname,
      search: '',
    })),
    maximumRedirects: 0,
  },
};
