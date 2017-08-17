const keys = require('../config/keys');
var CanadaPost = require('../lib/canadapost')(keys.CanadaPostUser, keys.CanadaPostPass, keys.CanadaPostCustomerID);

module.exports = app => {
    app.post('/api/rate', async (req, res) => {
        const callback = function(err, rates) {
            res.send(rates);
        }
        CanadaPost.setOriginPostalCode(req.body.originPostalCode.replace(/\s/g, ''));
        await CanadaPost.getRates({
            weight: req.body.weight, // kg
            dimensions: {
              length: req.body.length,
              width: req.body.width,
              height: req.body.height
            },
            destinationPostalCode: req.body.destPostalCode.replace(/\s/g, '')
          }, callback);
    });
};