import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Barang = db.define('Barang', {
    KodeBarang: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NamaBarang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Satuan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    HargaSatuan: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
    },
    Stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Barang',
    timestamps: false,
    freezeTableName: true
});

export default Barang;

(async () => {
    await db.sync();
})();
