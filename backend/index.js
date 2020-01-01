require("express-group-routes");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3003;
app.use(cors());
app.use(express.json());

const usersControllers = require("./controller/users");
const categoriesControllers = require("./controller/categories");
const eventsControllers = require("./controller/events");
const ordersControllers = require("./controller/orders");
const favoritesControllers = require("./controller/favorites");
const { authenticated } = require("./middleware");

app.group("/api/v1", router => {
  router.post("/register", usersControllers.register);
  router.post("/login", usersControllers.login);

  // API PROFILE
  router.get("/profile/:id", usersControllers.profile);
  router.get("/user", authenticated, usersControllers.user);
  router.patch("/profile/:id", authenticated, usersControllers.update);
  router.get(
    "/user/:user_id/favorites",
    authenticated,
    favoritesControllers.favorites
  );

  // API CATEGORIES

  router.get("/categories", categoriesControllers.index); // get all categories
  router.get("/category/:id/events", categoriesControllers.category); // get all event by category
  router.post("/category", categoriesControllers.post); // add category
  router.patch("/category/:id", categoriesControllers.patch); // update category
  router.delete("/category/:id", categoriesControllers.delete); // delete category

  // API EVENTS
  router.get("/eventAll", eventsControllers.allevents);
  router.get("/events", eventsControllers.index);
  router.get("/events?title=", eventsControllers.index); // get events by keywords
  router.get("/events?start_time=", eventsControllers.startDate); // get events by start time
  router.get("/event/:id", eventsControllers.detail); // get event by id
  router.post("/event", authenticated, eventsControllers.post); // post event
  router.patch("/event/:id", authenticated, eventsControllers.patch); // update event
  router.delete("/event/:id", authenticated, eventsControllers.delete); // delete event

  router.post("/event/:id/order", authenticated, ordersControllers.post); // add payment
  router.patch("/order/:id", authenticated, ordersControllers.confirm); // conrifm
  router.get("/order", authenticated, ordersControllers.approved);
  router.get("/order?status=", authenticated, ordersControllers.approved);
});

app.get("/", (req, res) => {
  res.send("Assalamualaikum");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
