import express from 'express';
import userRoutes from './routes/users.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express();
app.use(express.json())
// con el app.get lo ponemos para que nos de la ruta princiapal si no sabemos como usarlo... 
app.get('/', (req, res) => {
    try {
        res.send(
            `Esta es la pagina principal y puedes ingresar a la API mediante <br>url de la API : <b>http://localhost:3000/</b><br>
        agrega &gt; <b>/conection</b> --> si quieres si la conexion a la BBDD esta funcionando<br>
        agrega &gt; <b>api/data-users</b> --> si quieres ver la lista de usuarios con sus productos<br>
        agrega &gt;&gt; <b>api/data-users/"id del usuario" </b> --> si quieres ver un usuario con sus pedidos<br>
        agrega &gt; <b>api/pedidos</b> --> si quieres ver la lista de pedidos<br>
        agrega &gt;&gt; <b>api/pedidos/"id del producto" </b> --> si quieres ver un pedido en especifico`
        )
    } catch (error) {
        return res.status(500).json({ "message": "something goes wrong..." })
    }
})

app.use(indexRoutes)
app.use('/api', userRoutes)
app.use('/api', pedidosRoutes)
app.use((req, res, next) => {
    try {
       // res.status(404).json({"message": "route/endpoint not found"})
     res.status(404).send(`<!DOCTYPE html>
<html lang="es">
            <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>404 - Página no encontrada</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      overflow: hidden;
    }

    .container {
      text-align: center;
      padding: 2rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .error-code {
      font-size: 8rem;
      font-weight: bold;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #ff6b6b, #feca57);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: pulse 2s infinite;
    }

    .message {
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    .details {
      font-size: 1rem;
      margin-top: 1.5rem;
      opacity: 0.8;
    }

    .robot {
      width: 120px;
      height: 120px;
      margin: 2rem auto;
      position: relative;
      animation: float 3s ease-in-out infinite;
    }

    .robot-head {
      width: 60px;
      height: 60px;
      background: #f1f2f6;
      border-radius: 50% 50% 40% 40%;
      position: relative;
      margin: 0 auto;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }

    .robot-eye {
      width: 12px;
      height: 12px;
      background: #2d3436;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      animation: blink 3s infinite;
    }

    .robot-eye.left { left: 15px; }
    .robot-eye.right { right: 15px; }

    .robot-body {
      width: 80px;
      height: 50px;
      background: #dfe4ea;
      border-radius: 10px;
      margin: 10px auto 0;
      position: relative;
    }

    .robot-arm {
      width: 20px;
      height: 50px;
      background: #dfe4ea;
      position: absolute;
      top: -10px;
      border-radius: 10px;
      animation: wave 2s infinite alternate;
    }

    .robot-arm.left { left: -15px; transform-origin: top right; }
    .robot-arm.right { right: -15px; transform-origin: top left; }

    .btn-home {
      margin-top: 2rem;
      padding: 12px 30px;
      background: #feca57;
      color: #2d3436;
      border: none;
      border-radius: 50px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      display: inline-block;
    }

    .btn-home:hover {
      background: #ff6b6b;
      color: white;
      transform: scale(1.05);
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    @keyframes float {
      0 0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @keyframes blink {
      0%, 90%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }

    @keyframes wave {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(20deg); }
    }

    .lost-text {
      font-size: 1.2rem;
      margin: 1rem 0;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="error-code">404</div>
    <h1 class="message">¡Oops! Ruta no encontrada</h1>
    <p class="lost-text">Parece que este endpoint se perdió en el espacio...</p>

    <div class="robot">
      <div class="robot-head">
        <div class="robot-eye left"></div>
        <div class="robot-eye right"></div>
      </div>
      <div class="robot-body">
        <div class="robot-arm left"></div>
        <div class="robot-arm right"></div>
      </div>
    </div>

    <p class="details">
      La ruta <code style="background:#333; padding:2px 8px; border-radius:4px;">${req.originalUrl}</code> no existe.
    </p>
    <a href="/" class="btn-home">Volver al inicio</a>
  </div>
</body>
</html>
    `)
    } catch (error) {
        console.log(error);

    }

})
export default app;