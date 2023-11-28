import Kasir from '../models/KasirModels.js';

export const createKasir = async (req, res) => {
    try {
        const kasir = await Kasir.create(req.body);
        res.status(201).json({ msg: "Kasir Created", data: kasir });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data kasir.' });
    }
}

export const showAllKasir = async (req, res) => {
    try {
        const response = await Kasir.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data kasir.' });
    }
}

export const getKasirById = async (req, res) => {
    try {
        const kasir = await Kasir.findByPk(req.params.KodeKasir);
        if (kasir) {
            res.status(200).json(kasir);
        } else {
            res.status(404).json({ error: 'Kasir not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data kasir.' });
    }
}

export const updateKasir = async (req, res) => {
    try {
        const updatedKasir = await Kasir.update(req.body, {
            where: {
                KodeKasir: req.params.KodeKasir
            }
        });
        res.status(200).json({ msg: "Kasir updated", data: updatedKasir });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengupdate kasir.' });
    }
}

export const deleteKasir = async (req, res) => {
    try {
        const deletedKasir = await Kasir.destroy({
            where: {
                KodeKasir: req.params.KodeKasir
            }
        });
        if (deletedKasir) {
            res.status(200).json({ msg: "Kasir deleted" });
        } else {
            res.status(404).json({ error: 'Kasir not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menghapus kasir.' });
    }
}
