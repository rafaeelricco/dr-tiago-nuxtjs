import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Volumes/SSD/codes/production/dr-tiago-nuxtjs/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
