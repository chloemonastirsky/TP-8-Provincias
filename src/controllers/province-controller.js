import express from "express";
import ProvinceService from "../modules/services/province-service.js";

const router = express.Router();
const service = new ProvinceService();

/**
 * #swagger.tags = ['Provinces']
 * #swagger.summary = 'Obtener todas las provincias'
 * #swagger.description = 'Retorna un listado completo de todas las provincias registradas'
 * #swagger.responses[400] = { description: 'Lista holaaaaaaa' }
 * #swagger.responses[500] = { description: 'Error interno del servidor' }
 */
router.get("/", async (req, res) => {
    try {
        const provinces = await service.getAllAsync();
        res.json(provinces);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno al obtener provincias." });
    }
});

/**
 * #swagger.tags = ['Provinces']
 * #swagger.summary = 'Obtener provincia por ID'
 * #swagger.description = 'Retorna los datos de una provincia específica'
 * #swagger.parameters['id'] = { description: 'ID de la provincia', required: true, type: 'integer' }
 * #swagger.responses[200] = { description: 'Provincia encontrada' }
 * #swagger.responses[404] = { description: 'Provincia no encontrada' }
 * #swagger.responses[500] = { description: 'Error interno del servidor' }
 */
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

/**
 * #swagger.tags = ['Provinces']
 * #swagger.summary = 'Crear una nueva provincia'
 * #swagger.description = 'Crea una nueva provincia con los datos proporcionados'
 * #swagger.requestBody = { required: true, content: { "application/json": { schema: { $ref: "#/definitions/Province" } } } }
 * #swagger.responses[201] = { description: 'Provincia creada exitosamente' }
 * #swagger.responses[400] = { description: 'Error en la solicitud' }
 */
router.post("/", async (req, res) => {

    console.log("BODY:", req.query);
    try {
        const result = await service.createAsync(req.query);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || "Error al crear la provincia." });
    }
});

/**
 * #swagger.tags = ['Provinces']
 * #swagger.summary = 'Actualizar una provincia'
 * #swagger.description = 'Actualiza los datos de una provincia existente'
 * #swagger.parameters['id'] = { description: 'ID de la provincia', required: true, type: 'integer' }
 * #swagger.requestBody = { required: true, content: { "application/json": { schema: { $ref: "#/definitions/Province" } } } }
 * #swagger.responses[200] = { description: 'Provincia actualizada correctamente' }
 * #swagger.responses[404] = { description: 'Provincia no encontrada' }
 * #swagger.responses[400] = { description: 'Error en la solicitud' }
 */
router.put("/:id", async (req, res) => {
    try {
        const updated = await service.updateAsync(req.params.id, req.query);
        if (!updated) {
            return res.status(404).json({ error: "Provincia no encontrada para actualizar." });
        }
        res.json({ message: "Provincia actualizada correctamente." });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || "Error al actualizar la provincia." });
    }
});

/**
 * #swagger.tags = ['Provinces']
 * #swagger.summary = 'Eliminar una provincia'
 * #swagger.description = 'Elimina una provincia existente por su ID'
 * #swagger.parameters['id'] = { description: 'ID de la provincia', required: true, type: 'integer' }
 * #swagger.responses[200] = { description: 'Provincia eliminada correctamente' }
 * #swagger.responses[404] = { description: 'Provincia no encontrada' }
 * #swagger.responses[500] = { description: 'Error interno del servidor' }
 */
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
