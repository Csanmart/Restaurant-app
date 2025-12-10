import sequelize from "../config/database";
import {Model, DataTypes, Optional} from "sequelize";

interface ProductoAttributes{
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    disponible: string;
}

interface ProductoCreationAttributes
    extends Optional<ProductoAttributes, "id"> {}

class Producto
  extends Model<ProductoAttributes, ProductoCreationAttributes>
  implements ProductoAttributes{
    
    public id!: number;
    public nombre!: string;
    public precio!: number;
    public stock!: number;
    public disponible!: string;
}

Producto.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        disponible:{
            type: DataTypes.ENUM("DISPONIBLE", "AGOTADO"),
            allowNull: false,
        }
    },{
        sequelize,
        tableName: "productos",
        modelName: "Producto"
    }
)

export default Producto;