import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Nota = db.define('Nota', {
    KodeNota: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    KodeTenan: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Tenan',
            key: 'KodeTenan',
        },
    },
    KodeKasir: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Kasir',
            key: 'KodeKasir',
        },
    },
    TglNota: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    JamNota: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    JumlahBelanja: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
    },
    Diskon: {
        type: DataTypes.NUMERIC(5, 2),
        allowNull: false,
    },
    Total: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'Nota',
    timestamps: false,
    freezeTableName: true
});

export default Nota;

(async () => {
    await db.sync();
})();
