import express from "express";
import ProvinceService from "../modules/services/province-service.js";

const router = express.Router();
const service = new ProvinceService();

router.get("/", async (req, res) => {
    try {
        const provinces = await service.getAllAsync();
        res.json(provinces);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno al obtener provincias." });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const province = await service.getByIdAsync(req.params.id);
        if (!province) {
            return res.status(404).json({ error: "Provincia no encontrada." });
        }
        res.json(province);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno al obtener la provincia." });
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await service.createAsync(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || "Error al crear la provincia." });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await service.updateAsync(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ error: "Provincia no encontrada para actualizar." });
        }
        res.json({ message: "Provincia actualizada correctamente." });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || "Error al actualizar la provincia." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await service.deleteByIdAsync(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Provincia no encontrada para eliminar." });
        }
        res.json({ message: "Provincia eliminada correctamente." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar la provincia." });
    }
});

export default router;
