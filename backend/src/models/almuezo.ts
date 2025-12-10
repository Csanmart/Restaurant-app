
import sequelize from "../config/database";
import { Model, DataTypes, Optional } from "sequelize";


interface AlmuerzoAttributes{
    id: number;
    sopaId: number;
    proteinaId: number;
    jugoId: number
}

interface AlmuerzoCreateAttributes
    extends Optional<AlmuerzoAttributes, "id">{}

class Almuerzo
    extends Model<AlmuerzoAttributes, AlmuerzoCreateAttributes>
    implements AlmuerzoAttributes{
        public id!: number;
        public sopaId!: number;
        public proteinaId!: number;
        public jugoId!: number;
    }

Almuerzo.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sopaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notNull: true
            }
        },
        proteinaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notNull: true
            }
        },
        jugoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notNull: true
            }
        }
    },{
        sequelize,
        tableName: 'Almuerzo'
    }
)

export default Almuerzo;