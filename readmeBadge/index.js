import { readFile, writeFileSync } from "fs";
import { getInput } from "@actions/core";
const cypressResult = getInput("cypress-result");

readFile("./README.md", "utf8", function (e, data) {
    if (e) {
        throw e;
    }

    let fileContent = data;
    const regex = "<!---Start place for the badge -->\n(.*)\n<!---End place for the badge -->/g"

    if (cypressResult == "success") {
        const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg\n<!---End place for the badge -->/g");
        writeFileSync("./README.md", replaceBadge);
    } else if (cypressResult == "failure") {
        const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: https://img.shields.io/badge/test-failure-red\n<!---End place for the badge -->/g");
        writeFileSync("./README.md", replaceBadge);
    }
})