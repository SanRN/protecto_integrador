import express from "express";
import cors from "cors"

import bateriasRouters from "./../routes/baterias.routes.js"
import userRouters from "./../routes/user.routes.js"
import encuestaRouters from "./../routes/encuestas.routes.js"
import pilasRouters from "./../routes/pilas.routes.js"
import zonaRouters from "./../routes/zonas_de_reciclaje.routes.js"
import estadisticaRouters from "./../routes/estadistica.routes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use(bateriasRouters);
app.use(userRouters);
app.use(encuestaRouters);
app.use(pilasRouters);
app.use(zonaRouters);
app.use(estadisticaRouters);

export default app;
