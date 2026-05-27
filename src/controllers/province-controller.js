router.get("/", async (req, res) => {

    const provinces = await service.getAllAsync();

    res.json(provinces);

});

router.get("/:id", async (req, res) => {

    const province = await service.getByIdAsync(req.params.id);

    res.json(province);

});

router.post("/", async (req, res) => {

    let province = await service.createAsync(req.body);

    res.json(province);

});
router.post("/", async (req, res) => {

    let province = await service.updateAsync(req.body);

    res.json(province);

});