const {dealClientModel,ValidDealclient,ValidDealUpdate}=require("../models/dealClientModel");
const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

router.get("/", async(req,res) => {
    res.json({msg:"Router work"});
  })
router.get("/list",auth, async (req, res) => {
  try {
    const deals = await dealClientModel.find({});
    res.json(deals);
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});
router.get("/:dealId",auth, async (req, res) => {
  const dealId = req.params.dealId;

  try {
    const deal = await dealClientModel.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    res.json(deal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", auth, async (req, res) => {
  const validBody = ValidDealclient(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try {
    const deal = new dealClientModel(req.body);
    await deal.save();
    res.status(201).json(deal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


router.put("/:dealId", auth, async (req, res) => {
  const dealId = req.params.dealId;
  const validBody = ValidDealUpdate(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try {
    const deal = await dealClientModel.findByIdAndUpdate(
      dealId,
      { $set: req.body },
      { new: true }
    );
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    res.json(deal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/:dealId", auth, async (req, res) => {
  const dealId = req.params.dealId;

  try {
    const deal = await dealClientModel.findByIdAndDelete(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    res.json(deal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
