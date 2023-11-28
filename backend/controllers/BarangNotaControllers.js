import BarangNota from '../models/BarangNotaModels.js';

export const createBarangNota = async (req, res) => {
    try {
        const barangNota = await BarangNota.create(req.body);
        res.status(201).json({ msg: "BarangNota Created", data: barangNota });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data barangNota.' });
    }
}

export const showAllBarangNota = async (req, res) => {
    try {
        const response = await BarangNota.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data barangNota.' });
    }
}

export const getBarangNotaById = async (req, res) => {
    try {
        const barangNota = await BarangNota.findOne({
            where: {
                KodeNota: req.params.KodeNota,
                KodeBarang: req.params.KodeBarang
            }
        });
        if (barangNota) {
            res.status(200).json(barangNota);
        } else {
            res.status(404).json({ error: 'BarangNota not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data barangNota.' });
    }
}

export const updateBarangNota = async (req, res) => {
    try {
        const updatedBarangNota = await BarangNota.update(req.body, {
            where: {
                KodeNota: req.params.KodeNota,
                KodeBarang: req.params.KodeBarang
            }
        });
        res.status(200).json({ msg: "BarangNota updated", data: updatedBarangNota });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengupdate barangNota.' });
    }
}

export const deleteBarangNota = async (req, res) => {
    try {
        const deletedBarangNota = await BarangNota.destroy({
            where: {
                KodeNota: req.params.KodeNota,
                KodeBarang: req.params.KodeBarang
            }
        });
        if (deletedBarangNota) {
            res.status(200).json({ msg: "BarangNota deleted" });
        } else {
            res.status(404).json({ error: 'BarangNota not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menghapus barangNota.' });
    }
}
