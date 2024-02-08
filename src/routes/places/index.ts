import { Router } from "express";
import Places from "../../models/Places";

const router = Router();
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const place = await Places.findById(id);
    console.log(place)
    res.json(place);
});

router.get("/:id/within/:distance", async (req, res, next) => {
    const { id, distance } = req.params;
    const place = await Places.findById(id);

})

export default router;