module.exports = function () {

    var faker = require ("faker");
    faker.locale = "de_AT";
    var _ = require("lodash");
    var names = ['AAServer', 'BBServer', 'CCServer', 'DDServer'];
    var digit = [1,2,3,4,5,6,7,8,9];
    var country = ['AT', 'DE', "AT", "PL", "NL", "HU", "RO"];

    return {
        "server" : _.times(20, function (n) {
            return {
                "id": n,
                "host": _.sample(names)+_.sample(digit),
                "ip": faker.internet.ip(),
                "country": _.sample(country),
                "status": faker.random.boolean()
            }
        })
    }
};