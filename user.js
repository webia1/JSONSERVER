module.exports = function () {

    var faker = require ("faker");
    faker.locale = "de_AT";
    var _ = require("lodash");
    var roles = ['Administrator', 'Trader', 'Tester', 'Developer'];
    var platformIDs = [2,4,6];
    var bidderIDs = ['none',1,3,5];

    return {
        "user" : _.times(6, function (n) {
            return {
                "id": n,
                "firstname": faker.name.firstName(),
                "surename": faker.name.lastName(),
                "organistation": faker.company.companyName(),
                "email": faker.internet.email(),
                "phone": faker.phone.phoneNumber(),
                "note": faker.lorem.sentence(),
                "avatar": faker.internet.avatar(),
                "language": "DE",
                "platform":
                {
                    "platformid": _.sample(platformIDs),
                    "biddingadmission": faker.random.boolean,
                    "linkedbidderid": _.sample(bidderIDs),
                    "role":
                    {
                        "roleid": _.sample(roles)
                    }

                }

            }
        })
    }
};