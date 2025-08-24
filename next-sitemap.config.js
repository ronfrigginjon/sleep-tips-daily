/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sleeptipsdaily.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  // Don’t ever list Beehiiv subdomain in sitemaps
  exclude: [
    '/thanks',           // utility pages, no need to index
    '/confirm',          // internal
    '/opt_in',           // internal
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // belt & suspenders: explicitly disallow subs.* (search engines will respect this when they see it on your main domain)
      { userAgent: '*', disallow: 'https://subs.sleeptipsdaily.com/' },
    ],
    additionalSitemaps: [
      'https://sleeptipsdaily.com/sitemap.xml',
    ],
  },
};
