import { readFileSync, writeFileSync } from "fs";
import { getInput } from "@actions/core";

const cypressResult = getInput("cypress-result");
const fileContent = readFileSync("./README.md", "utf8");
const regex = new RegExp(/<!---Start place for the badge -->\n(.*)\n<!---End place for the badge -->/g);

if (cypressResult == "success") {
    const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)\n<!---End place for the badge -->");
    writeFileSync("./README.md", replaceBadge);
} else if (cypressResult == "failure") {
    const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/test-failure-red)](https://www.cypress.io/)\n<!---End place for the badge -->");
    writeFileSync("./README.md", replaceBadge);
}