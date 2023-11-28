import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Kasir = db.define('Kasir', {
    KodeKasir: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    HP: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
}, {
    tableName: 'Kasir',
    timestamps: false,
    freezeTableName: true
});

export default Kasir;

(async () => {
    await db.sync();
})();
