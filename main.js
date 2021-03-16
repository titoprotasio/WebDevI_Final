const express = require("express"),
app = express(),
errorController = require("./controllers/errorController"),
subscriberController = require("./controllers/subscriberController"),
layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://tprotasio:Ballertama123.@clusterwebdevdb-zbx9m.azure.mongodb.net/eSports?retryWrites=true&w=majority",
{ useUnifiedTopology: true, useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

app.set("view engine", "ejs");
app.set("port",process.env.PORT || 3000);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/careers", (req, res) => {
    res.render("careers");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/newsletter", (req, res) => {
    res.render("newsletter");
});

app.get("/players", (req, res) => {
    res.render("players");
});

app.get("/schedule", (req, res) => {
    res.render("schedule");
});

app.get("/store", (req, res) => {
    res.render("store");
});

app.get("/thanks", (req, res) => {
    res.render("thanks");
});

app.get("/error", (req, res) => {
    res.render("error");
});

app.get("/subscribers", subscriberController.getAllSubscribers);
app.get("/newsletter", subscriberController.getSubscriptionPage);
app.post("/subscribe", subscriberController.saveSubscriber);


app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });