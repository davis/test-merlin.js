var Blackbird = require('merlin.js');

var facets = [
  Blackbird.enumFacet({
    field: 'brand_id',
    num: 2000
  }),
  Blackbird.enumFacet({
    field: 'category_id',
    num: 100
  }),
  Blackbird.enumFacet({
    field: 'sizing_id',
    num: 100
  })
];

Blackbird
.engine({
  fq: 'thredup.staging.wrangler'
})
.search({
  q: '',
  facet: facets
})
.end(function (err, res) {
  if (err) { throw err; }
  var url = res.req.url;
  document.write('request url:', decodeURIComponent(url));
});
