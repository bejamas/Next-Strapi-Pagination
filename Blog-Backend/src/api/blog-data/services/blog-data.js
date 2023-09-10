'use strict';

/**
 * blog-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-data.blog-data');
