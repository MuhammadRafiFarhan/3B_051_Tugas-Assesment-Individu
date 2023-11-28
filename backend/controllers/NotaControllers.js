import Nota from '../models/NotaModels.js';

export const createNota = async (req, res) => {
    try {
        const nota = await Nota.create(req.body);
        res.status(201).json({ msg: "Nota Created", data: nota });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data nota.' });
    }
}

export const showAllNota = async (req, res) => {
    try {
        const response = await Nota.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data nota.' });
    }
}

export const getNotaById = async (req, res) => {
    try {
        const nota = await Nota.findByPk(req.params.KodeNota);
        if (nota) {
            res.status(200).json(nota);
        } else {
            res.status(404).json({ error: 'Nota not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data nota.' });
    }
}

export const updateNota = async (req, res) => {
    try {
        const updatedNota = await Nota.update(req.body, {
            where: {
                KodeNota: req.params.KodeNota
            }
        });
        res.status(200).json({ msg: "Nota updated", data: updatedNota });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengupdate nota.' });
    }
}

export const deleteNota = async (req, res) => {
    try {
        const deletedNota = await Nota.destroy({
            where: {
                KodeNota: req.params.KodeNota
            }
        });
        if (deletedNota) {
            res.status(200).json({ msg: "Nota deleted" });
        } else {
            res.status(404).json({ error: 'Nota not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menghapus nota.' });
    }
}
