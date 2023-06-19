const { RamApiAsync, RamApi, Utils } = require("./index");

let apiclient = new RamApi('COlCbscBPr', "v13")
let apiutils = new Utils();



async function test() {
    console.log(await apiutils.customAsync('/basic/v13/versionCheck').catch(err => console.log(err)));

    console.log("DONE");
}

test()

