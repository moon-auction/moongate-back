import express from 'express';
import EquipmentData from '@/models/Items/EquipmentData';

const router = express.Router();

router.use((req,res, next) => {
    // TODO: by admin only
    next();
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Returns a list of users.
 *     description: Optional extended description in Markdown.
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.post('/add', (req, res, next) => {
    try {
        const {
            name,
            category,
            atkSpeed,
            atkNumber,
            range,
            piercing,
            defense,
            protection,
            magicDefense,
            magicProtection,
            damage,
            magicDamage,
            wound,
            crit,
            balance,
            durability,
            upgrades,
            repairCost,
            repairable,
            repairableBy,
        } = req.body;

        const equipment = new EquipmentData({
            name,
            category,
            atkSpeed,
            atkNumber,
            range,
            piercing,
            defense,
            protection,
            magicDefense,
            magicProtection,
            damage,
            magicDamage,
            wound,
            crit,
            balance,
            durability,
            upgrades,
            repairCost,
            repairable,
            repairableBy,
        });

        equipment.save();

        return res.send({message: 'Success'});

    } catch (e) {
        res.status(500).send({message: 'Internal Server Error'});
        next(e);
    }
});

export default router;