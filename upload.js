const FtpDeploy = require("ftp-deploy");
const ftpConfig = require("./ftp-config");

const ftpDeploy = new FtpDeploy();

ftpDeploy
  .deploy({ ...ftpConfig, include: ["**/*"] })
  .then((res) => console.log("successfully uploaded."))
  .catch((err) => console.error("something went wrong:", err));
