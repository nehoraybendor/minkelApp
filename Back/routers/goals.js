const express = require("express");
const { auth } = require("../middlewares/auth");
const { ValidGoal, goalModel, ValidGoalUpdate } = require("../models/goalModel");
const { UserModel } = require("../models/userModel");
const router = express.Router();

router.get("/:id", auth, async(req, res) => {
  
    try {
        let data = await goalModel.findOne({ user_id: req.tokenData._id, isActive: true })

        if (!data) {
            res.status(404).json({ msg: 'No goals found' })
        }
        res.status(200).json({ goal: data })

    } catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }

})
router.post('/', auth, async(req, res) => {
    let validBody = ValidGoal(req.body); 
      if (validBody.error) {
        return res.status(400).json({ err_msg: validBody.error.details });
    }
    try {
        const goalObj = req.body;
        goalObj.user_id = req.tokenData._id;
        const goal = new goalModel(goalObj);
        await goal.save()
        let user = await UserModel.findById(req.tokenData._id);
        user.goals_id.push(goal._id);
        await user.save();
        res.json(goal);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }

})



router.get("/archive", auth, async(req, res) => {
    try {
        const goals = await goalModel.find({ user_id: req.tokenData._id, isActive: false }).sort({ date: -1 })
        if (!goals.length) {
            return res.status(404).json({ err_msg: "No goals found in archive" });
        }
        res.json({ goals });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }
})


router.put("/archive/:id", auth, async(req, res) => {
    try {
        const goal = await goalModel.findOne({ _id: req.params.id, user_id: req.tokenData._id });
        if (!goal) {
            return res.status(404).json({ err_msg: "No goal found" });
        }
        if (goal.isActive) {
            goal.isActive = false;
            await goal.save();
            return res.json({ msg: "goal send to archive", isActive: false });
        } else {
            goal.isActive = true;
            await goal.save();
            return res.json({ msg: "goal is active", isActive: true });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }
})

router.delete("/:id", auth, async(req, res) => {
    try {
        const goal = await goalModel.findById(req.params.id);
        if (!goal) {
            return res.status(404).json({ err_msg: "No goal found" });
        }
        const data = await goalModel.deleteOne({ _id: req.params.id, user_id: req.tokenData._id })
        if (data.deletedCount === 0) {
            return res.status(403).json({ err_msg: "Something wrong" });
        }
        return res.json({ msg: "goal deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }
})

router.put("/completed/:id", auth, async(req, res) => {
    try {
        const goal = await goalModel.findOne({ _id: req.params.id, user_id: req.tokenData._id });
        if (!goal) {
            return res.status(404).json({ err_msg: "No goal found" });
        }

        if (!goal.isActive) {
            return res.status(403).json({ err_msg: 'Goal in archive can not change goal complete property', isCompleted: 'error' })
        }

        if (!goal.isCompleted) {
            goal.isCompleted = true;
            await goal.save();
            return res.json({ msg: "goal is completed", isCompleted: true });
        } else {
            goal.isCompleted = false;
            await goal.save();
            return res.json({ msg: `goal is isn't completed`, isCompleted: false });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }
})

router.put('/:id', auth, async(req, res) => {

    let validBody = ValidGoalUpdate(req.body);  
    if (validBody.error) {
        return res.status(400).json({ err_msg: validBody.error.details });
    }

    try {
        const goal = await goalModel.findOne({ _id: req.params.id, user_id: req.tokenData._id });
        if (!goal) {
            return res.status(404).json({ err_msg: "No goal found" });
        }
        if (!goal.isActive) {
            return res.status(403).json({ err_msg: 'goal in archive can not update goal' })
        }

        const data = await goalModel.updateOne({ _id: req.params.id, user_id: req.tokenData._id }, req.body)
        if (data.modifiedCount != 1) {
            return res.status(403).json({ err_msg: 'do not changed...', update: false });
        }

        const updated = await goalModel.findById(req.params.id)
        return res.json({ update: true, goal: updated });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }
})
module.exports = router;