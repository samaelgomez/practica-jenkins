var fs = require("fs")

const cypressResult = process.argv[2];
const fileContent = fs.readFileSync("./README.md", "utf8");
const regex = new RegExp(/<!---Start place for the badge -->\n(.*)\n<!---End place for the badge -->/g);

if (cypressResult == "0") {
    const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)\n<!---End place for the badge -->");
    fs.writeFileSync("./README.md", replaceBadge);
} else {
    const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/test-failure-red)](https://www.cypress.io/)\n<!---End place for the badge -->");
    fs.writeFileSync("./README.md", replaceBadge);
}