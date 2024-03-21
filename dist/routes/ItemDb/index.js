"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EquipmentData_1 = __importDefault(require("../../models/Items/EquipmentData"));
const router = express_1.default.Router();
router.use((req, res, next) => {
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
        const { name, category, atkSpeed, atkNumber, range, piercing, defense, protection, magicDefense, magicProtection, damage, magicDamage, wound, crit, balance, durability, upgrades, repairCost, repairable, repairableBy, } = req.body;
        const equipment = new EquipmentData_1.default({
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
        return res.send({ message: 'Success' });
    }
    catch (e) {
        res.status(500).send({ message: 'Internal Server Error' });
        next(e);
    }
});
exports.default = router;
