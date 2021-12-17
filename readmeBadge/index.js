import { readFile, writeFile } from "fs";
import { getInput } from "@actions/core";
const cypressResult = getInput("cypress-result");

readFile("./README.md", function read(err, data) {
    if (err) {
        throw err;
    }

    let fileContent = data;
    console.log(data);
    const regex = "<!---Start place for the badge -->\n(.*)\n<!---End place for the badge -->/g"

    if (cypressResult == "success") {
        const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg\n<!---End place for the badge -->/g");
        writeFile("./README.md", replaceBadge);
    } else if (cypressResult == "failure") {
        const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: https://img.shields.io/badge/test-failure-red\n<!---End place for the badge -->/g");
        writeFile("./README.md", replaceBadge);
    }
})