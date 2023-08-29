import { Router } from "express";
import { validateDSupplier, dealSupplierModel, } from "../models/dealSupplierModel"
import { authGuard } from "../middlewares/auth"
const router = Router()
  .get("/", authGuard,)
  .post("/", authGuard,)
  .put("/:dealId", authGuard, async (req, res) => {
    const dealId = req.params.dealId;
    const validBody = validateDSupplier(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }

    try {
      const deal = await dealSupplierModel.findById(dealId)
      if (!deal) {
        return res.status(404).json({ message: "Deal not found" });
      }
      // if (deal.user_id._id != req.tokenData._id) {
      //   return res.status(401).json({ err: "You dont have premission to this deal" })
      // }
      const dealUpdate = await dealSupplierModel.findByIdAndUpdate(
        dealId,
        { $set: req.body },
        { new: true }
      );

      res.json(dealUpdate);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

router.delete("/:dealId", authGuard, async (req, res) => {
  const dealId = req.params.dealId;
  try {
    const deal = await dealSupplierModel.findById(dealId);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    // if (deal.user_id.toString() !== req.tokenData._id.toString()) {
    //   return res.status(401).json({ err: "You dont have permission to this deal" })
    // }
    const dealDel = await dealSupplierModel.findByIdAndDelete(dealId);

    res.json(dealDel);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
