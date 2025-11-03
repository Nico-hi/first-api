import app from './app.js'
import { PORT } from './config.js';


app.listen(PORT);
console.log("la app esta funcionando en el puerto " + PORT);
