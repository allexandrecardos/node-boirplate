import "./configs/env";

import { routes } from "./routes";
import { ENVIROMENTS } from "./constants/enviroment";
import { app } from "configs/express";

app.use("/api", routes);

app.listen(ENVIROMENTS.port, () => {
  console.log(`Server running on ${ENVIROMENTS.url}`);
});
