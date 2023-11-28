import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const BarangNota = db.define('BarangNota', {
    KodeNota: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Nota',
            key: 'KodeNota',
        },
    },
    KodeBarang: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Barang',
            key: 'KodeBarang',
        },
    },
    JumlahBarang: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    HargaSatuan: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
    },
    Jumlah: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'BarangNota',
    timestamps: false,
    freezeTableName: true,
    primaryKey: true,
});

export default BarangNota;

(async () => {
    await db.sync();
})();
