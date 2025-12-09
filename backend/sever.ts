import app from './src/app';
import sequelize from "./src/config/database";
import PORT from "./src/config/puerto";

// Probar conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión exitosa a la base de datos");

    await sequelize.sync()
    console.log("tablas sincronizadas")

    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);   
    });
  } catch (error) {
    console.error("❌ Error en la conexión con la base de datos", error);
  }
})();







