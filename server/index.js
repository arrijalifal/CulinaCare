const express = require("express");
const cors = require("cors");
const { User, FoodList } = require("./config");
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
    const snapshot_user = await User.get();
    const list_user = snapshot_user.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
    const snapshot_food = await FoodList.get();
    const list_food = snapshot_food.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send({
        user: list_user,
        food: list_food
    });
});

app.listen(4000, () => console.log("Up & Running *4000"));