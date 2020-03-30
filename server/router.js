var express = require("express"),
  router = express.Router(),
  config = require("./config"),
  jsforce = require("jsforce");

router.post("/products", function(req, res) {
  const { appendUrl, pcode, cartKey } = req.query;
  const { instanceUrl, token, prcode } = req.body;
  var conn = new jsforce.Connection({
    instanceUrl: instanceUrl,
    accessToken: token
  });
//   conn.requestGet(
//     "/services/apexrest/vlocity_cmt/v3/catalogs/VLPOC/offers",
//     function(err, orders) {
//       if (err) {
//         return console.error(err);
//       }
//       console.log("gaurav response: ");
//       console.log("response: ", orders);
//       res.json(orders);
//     }
//   );

  let codes = appendUrl ? appendUrl : "";
  if (codes != "basket" && codes != "carts") {
    conn.requestGet(
      `/services/apexrest/vlocity_cmt/v3/catalogs/VLPOC/offers/${codes}`,
      function(err, orders) {
        if (err) {
          return console.error(err);
        }
        console.log("gaurav response: ");
        console.log("response: ", orders);
        res.json(orders);
      }
    );
  } else if (codes == "basket") {
    var body = {
      basketAction: "AddWithNoConfig",
      offer: prcode
    };

    conn.requestPost(
      `/services/apexrest/vlocity_cmt/v3/catalogs/VLPOC/offers/${codes}`,
      body,
      function(err, orders) {
        if (err) {
          return console.error(err);
        }
        console.log("gaurav response: ");
        console.log("response: ", orders);
        res.json(orders);
      }
    );
  } else if (codes == "carts") {
    var body = {
      accountId: "0019E000015G8QlQAK",
      catalogCode: "VLPOC",
      cartContextKey: cartKey
    };

    conn.requestPost(`/services/apexrest/vlocity_cmt/v3/carts`, body, function(
      err,
      orders
    ) {
      if (err) {
        return console.error(err);
      }
      console.log("gaurav response: ");
      console.log("response: ", orders);
      res.json(orders);
    });
  }

  /* END */
});

router.post("/login", function(req, res) {
  const { username, password } = req.body;
  var conn = new jsforce.Connection({
    oauth2: {
      loginUrl: "https://telia--onlnspike.my.salesforce.com",
      clientId:
        "put client id here",
      clientSecret:
        "client secret",
      redirectUri: "https://test.salesforce.com/services/oauth2/success"
    }
  });
  conn.login(username, password, function(err, userInfo) {
    if (err) {
      res.json(userInfo);
    }
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    var resultData = {
      accessToken: conn.accessToken,
      instanceUrl: conn.instanceUrl
    };
    res.json(resultData);
  });
});

module.exports = router;
