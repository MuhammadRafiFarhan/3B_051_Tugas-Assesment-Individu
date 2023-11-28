import Barang from '../models/BarangModels.js';

export const createBarang = async (req, res) => {
    try {
        const barang = await Barang.create(req.body);
        res.status(201).json({ msg: "Barang Created", data: barang });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data barang.' });
    }
}

export const showAllBarang = async (req, res) => {
    try {
        const response = await Barang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data barang.' });
    }
}

export const getBarangById = async (req, res) => {
    try {
        const barang = await Barang.findByPk(req.params.KodeBarang);
        if (barang) {
            res.status(200).json(barang);
        } else {
            res.status(404).json({ error: 'Barang not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data barang.' });
    }
}

export const updateBarang = async (req, res) => {
    try {
        const updatedBarang = await Barang.update(req.body, {
            where: {
                KodeBarang: req.params.KodeBarang
            }
        });
        res.status(200).json({ msg: "Barang updated", data: updatedBarang });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengupdate barang.' });
    }
}

export const deleteBarang = async (req, res) => {
    try {
        const deletedBarang = await Barang.destroy({
            where: {
                KodeBarang: req.params.KodeBarang
            }
        });
        if (deletedBarang) {
            res.status(200).json({ msg: "Barang deleted" });
        } else {
            res.status(404).json({ error: 'Barang not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menghapus barang.' });
    }
}
