router.get("/", async (req, res) => {

    const provinces = await service.getAllAsync();

    res.json(provinces);

});