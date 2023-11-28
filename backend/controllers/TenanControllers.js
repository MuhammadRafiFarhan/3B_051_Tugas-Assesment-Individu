import Tenan from '../models/TenanModels.js';

export const createTenan = async (req, res) => {
    try {
        const tenan = await Tenan.create(req.body);
        res.status(201).json({ msg: "Tenan Created", data: tenan });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data tenan.' });
    }
}

export const showAllTenan = async (req, res) => {
    try {
        const response = await Tenan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data tenan.' });
    }
}

export const getTenanById = async (req, res) => {
    try {
        const tenan = await Tenan.findByPk(req.params.KodeTenan);
        if (tenan) {
            res.status(200).json(tenan);
        } else {
            res.status(404).json({ error: 'Tenan not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data tenan.' });
    }
}

export const updateTenan = async (req, res) => {
    try {
        const updatedTenan = await Tenan.update(req.body, {
            where: {
                KodeTenan: req.params.KodeTenan
            }
        });
        res.status(200).json({ msg: "Tenan updated", data: updatedTenan });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengupdate tenan.' });
    }
}

export const deleteTenan = async (req, res) => {
    try {
        const deletedTenan = await Tenan.destroy({
            where: {
                KodeTenan: req.params.KodeTenan
            }
        });
        if (deletedTenan) {
            res.status(200).json({ msg: "Tenan deleted" });
        } else {
            res.status(404).json({ error: 'Tenan not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menghapus tenan.' });
    }
}
