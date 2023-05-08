const { dealSupplierModel, ValidDealssupplier, ValidDealssupplierUpdate } = require("../models/dealSupplierModel");
const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

router.get("/", async (req, res) => {
  res.json({ msg: "Router work" });
});

router.get("/list",auth, async (req, res) => {
  try {
    const deals = await dealSupplierModel.find({user_id:req.tokenData._id});
    res.json(deals);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:dealId",auth, async (req, res) => {
  const dealId = req.params.dealId;

  try {
    const deal = await dealSupplierModel.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    if(deal.user_id._id !=req.tokenData._id){
      return res.status(401).json({err:"You dont have premission to this deal"});
    }
    res.json(deal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", auth, async (req, res) => {
  const dealObj=req.body;
  dealObj.user_id=req.tokenData._id;
  const validBody = ValidDealssupplier(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try {
    const deal = new dealSupplierModel(req.body);
    deal.total_price=deal.price*deal.amount;
    await deal.save();
    res.status(201).json(deal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/:dealId", auth, async (req, res) => {
  const dealId = req.params.dealId;
  const validBody = ValidDealssupplierUpdate(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try {
    const deal= await dealSupplierModel.findById(dealId)
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    if(deal.user_id._id!=req.tokenData._id){
      return res.status(401).json({err:"You dont have premission to this deal"})
    }
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

router.delete("/:dealId", auth, async (req, res) => {
  const dealId = req.params.dealId;
  try {
    const deal = await dealSupplierModel.findById(dealId);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    if(deal.user_id.toString() !== req.tokenData._id.toString()){
      return res.status(401).json({err:"You dont have permission to this deal"})
    }
    const dealDel = await dealSupplierModel.findByIdAndDelete(dealId);
    
    res.json(dealDel);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
