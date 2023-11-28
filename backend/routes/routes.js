// routes.js

import express from "express";
import { createBarang, showAllBarang, getBarangById, updateBarang, deleteBarang } from "../controllers/BarangControllers.js";
import { createKasir, showAllKasir, getKasirById, updateKasir, deleteKasir } from "../controllers/KasirControllers.js";
import { createTenan, showAllTenan, getTenanById, updateTenan, deleteTenan } from "../controllers/TenanControllers.js";
import { createNota, showAllNota, getNotaById, updateNota, deleteNota } from "../controllers/NotaControllers.js";
import { createBarangNota, showAllBarangNota, getBarangNotaById, updateBarangNota, deleteBarangNota } from "../controllers/BarangNotaControllers.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('tess')
});

// Barang
router.post('/barang', createBarang);
router.get('/barang', showAllBarang);
router.get('/barang/:KodeBarang', getBarangById);
router.patch('/barang/:KodeBarang', updateBarang);
router.delete('/barang/:KodeBarang', deleteBarang);

// Kasir
router.post('/kasir', createKasir);
router.get('/kasir', showAllKasir);
router.get('/kasir/:KodeKasir', getKasirById);
router.patch('/kasir/:KodeKasir', updateKasir);
router.delete('/kasir/:KodeKasir', deleteKasir);

// Tenan
router.post('/tenan', createTenan);
router.get('/tenan', showAllTenan);
router.get('/tenan/:KodeTenan', getTenanById);
router.patch('/tenan/:KodeTenan', updateTenan);
router.delete('/tenan/:KodeTenan', deleteTenan);

// Nota
router.post('/nota', createNota);
router.get('/nota', showAllNota);
router.get('/nota/:KodeNota', getNotaById);
router.patch('/nota/:KodeNota', updateNota);
router.delete('/nota/:KodeNota', deleteNota);

// BarangNota
router.post('/barangnota', createBarangNota);
router.get('/barangnota', showAllBarangNota);
router.get('/barangnota/:KodeNota/:KodeBarang', getBarangNotaById);
router.patch('/barangnota/:KodeNota/:KodeBarang', updateBarangNota);
router.delete('/barangnota/:KodeNota/:KodeBarang', deleteBarangNota);

export default router;
