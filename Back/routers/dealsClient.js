const {dealClientModel,ValidDealclient,ValidDealUpdate}=require("../models/dealClientModel");
const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {UserModel}=require("../models/userModel")

router.get("/", async(req,res) => {
    res.json({msg:"Router work"});
  })
router.get("/list",auth, async (req, res) => {
  try {
    const deals = await dealClientModel.find({user_id:req.tokenData._id});
    res.json(deals);
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});
router.get("/:dealId",auth, async (req, res) => {
  const dealId = req.params.dealId;
  try {
    const deal = await dealClientModel.findById(dealId).populate({path:"user_id",select:"name"});
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    if(deal.user_id._id != req.tokenData._id){
      return res.status(401).json({err:"You dont have premission to this deal"})
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
  let validBody = ValidDealclient(dealObj);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const user = await UserModel.findById(req.tokenData._id)
    const deal = new dealClientModel(req.body);
    deal.total_price=deal.sum*deal.amount;
    await deal.save();
    res.status(201).json({deal,userName:user.name});
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
    const deal=await dealClientModel.findById(dealId)
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    if(deal.user_id._id != req.tokenData._id){
      return res.status(401).json({err:"You dont have premission to this deal"})
    }
    const dealupdate = await dealClientModel.findByIdAndUpdate(
      dealId,
      { $set: req.body },
      { new: true }
    );

    res.json(dealupdate);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/:dealId", auth, async (req, res) => {
  const dealId = req.params.dealId;
  try {
    const deal = await dealClientModel.findById(dealId);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    if(deal.user_id.toString() !== req.tokenData._id.toString()){
      return res.status(401).json({err:"You dont have permission to this deal"})
    }

    const deletedDeal = await dealClientModel.findByIdAndDelete(dealId);

    res.json(deletedDeal);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
