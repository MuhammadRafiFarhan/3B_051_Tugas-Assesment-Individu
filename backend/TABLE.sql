-- Create database

CREATE DATABASE postgres;

-- Tabel Barang
CREATE TABLE Barang (
    KodeBarang SERIAL PRIMARY KEY,
    NamaBarang VARCHAR(255) NOT NULL,
    Satuan VARCHAR(50) NOT NULL,
    HargaSatuan NUMERIC(10, 2) NOT NULL,
    Stok INTEGER NOT NULL
);

-- Tabel Kasir
CREATE TABLE Kasir (
    KodeKasir SERIAL PRIMARY KEY,
    Nama VARCHAR(255) NOT NULL,
    HP VARCHAR(15) NOT NULL
);

-- Tabel Tenan
CREATE TABLE Tenan (
    KodeTenan SERIAL PRIMARY KEY,
    NamaTenan VARCHAR(255) NOT NULL,
    HP VARCHAR(15) NOT NULL
);

-- Tabel Nota
CREATE TABLE Nota (
    KodeNota SERIAL PRIMARY KEY,
    KodeTenan INTEGER REFERENCES Tenan(KodeTenan),
    KodeKasir INTEGER REFERENCES Kasir(KodeKasir),
    TglNota DATE NOT NULL,
    JamNota TIME NOT NULL,
    JumlahBelanja NUMERIC(10, 2) NOT NULL,
    Diskon NUMERIC(5, 2) NOT NULL,
    Total NUMERIC(10, 2) NOT NULL
);

-- Tabel BarangNota
CREATE TABLE BarangNota (
    KodeNota INTEGER REFERENCES Nota(KodeNota),
    KodeBarang INTEGER REFERENCES Barang(KodeBarang),
    JumlahBarang INTEGER NOT NULL,
    HargaSatuan NUMERIC(10, 2) NOT NULL,
    Jumlah NUMERIC(10, 2) NOT NULL,
    PRIMARY KEY (KodeNota, KodeBarang)
);

-- Hapus Schema
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- Drop table if exist untuk BarangNota
DROP TABLE IF EXISTS BarangNota;
DROP TABLE IF EXISTS Nota;
DROP TABLE IF EXISTS Tenan;
DROP TABLE IF EXISTS Kasir;
DROP TABLE IF EXISTS Barang;