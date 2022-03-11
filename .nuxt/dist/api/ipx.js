import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Volumes/SSD/tiago-app/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
