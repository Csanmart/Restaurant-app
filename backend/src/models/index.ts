import Almuerzo from "./almuezo";
import Menu from "./menu";


Almuerzo.belongsTo(Menu,{
    foreignKey: "sopaId",
    as: "sopa"
});

Almuerzo.belongsTo(Menu,{
    foreignKey: "proteinaId",
    as: "proteina"
});

Almuerzo.belongsTo(Menu,{
    foreignKey: "jugoId",
    as: "jugo"
});

