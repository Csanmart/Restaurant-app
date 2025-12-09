// 1️⃣ Imports
import sequelize from "../config/database";
import { Model, DataTypes, Optional } from "sequelize";

// 2️⃣ Interfaces
interface MenuAttributes {
  id: number;
  nombre: string;
  tipo: string;
  fecha: Date;
  disponible: boolean;
}

interface MenuCreationAttributes
  extends Optional<MenuAttributes, "id"> {}

// 3️⃣ Clase del modelo
class Menu
  extends Model<MenuAttributes, MenuCreationAttributes>
  implements MenuAttributes {

  public id!: number;
  public nombre!: string;
  public tipo!: string;
  public fecha!: Date;
  public disponible!: boolean;
}

// 4️⃣ INIT → AQUÍ VA ✅
Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo:{
        type: DataTypes.ENUM("SOPA", "PROTEINA", "JUGO"),
        defaultValue: "SOPA",
        allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,              // conexión
    tableName: "menus",     // tabla
    modelName: "Menu"       // modelo
  }
);

// 5️⃣ Export
export default Menu;
