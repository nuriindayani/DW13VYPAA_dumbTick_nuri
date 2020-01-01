const models = require("../models");
const categories = models.categories;
const events = models.events;
const users = models.users;
const orders = models.orders;
const { newOrders, formatDate, formatRupiah } = require("../helpers/functions");

exports.post = (req, res) => {
  events
    .findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ]
    })
    .then(event => {
      if (event === null) {
        res.status(200).json({
          message: "event not found"
        });
      } else {
        const { quant, stat } = req.body;
        orders
          .create({
            quant: quant,
            tot: quant * event.price,
            stat: stat,

            event_id: req.params.id,
            buyer_id: req.user_id
          })
          .then(data => {
            if (data === 0) {
              res.status(500).json({
                message: "your orders failed"
              });
            } else {
              res.status(200).json({
                id: data.id,
                event: {
                  id: event.id,
                  title: event.title,
                  category: {
                    id: event.category.id,
                    name: event.category.name
                  },
                  start_time: formatDate(event.start_time),
                  end_time: formatDate(event.end_time),
                  price: formatRupiah(event.price),
                  desc: event.desc,
                  address: event.address,
                  urlmap: event.urlmap,
                  img: event.image,
                  createdby: {
                    id: event.user.id,
                    name: event.user.name,
                    phone: event.user.phone,
                    email: event.user.email,
                    img: event.user.imgs
                  }
                },
                quant: data.quant,
                tot: data.tot,

                stat: data.stat
              });
            }
          });
      }
    });
};

exports.confirm = (req, res) => {
  orders
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(order => {
      if (order === null) {
        res.status(200).json({
          message: "payment not found"
        });
      } else {
        if (order.buyer_id != req.user_id) {
          res.status(403).json({
            message: "you not autorized in this order"
          });
        } else {
          orders
            .update(
              {
                stat: req.body.stat
              },
              {
                where: {
                  id: req.params.id
                }
              }
            )
            .then(data => {
              if (data === 0) {
                res.status(500).json({
                  message: "update error"
                });
              } else {
                events
                  .findOne({
                    where: {
                      id: order.event_id
                    },
                    include: [
                      {
                        model: users,
                        as: "user"
                      },
                      {
                        model: categories,
                        as: "category"
                      }
                    ]
                  })
                  .then(event => {
                    res.status(200).json({
                      id: order.id,
                      event: {
                        id: event.id,
                        title: event.title,
                        category: {
                          id: event.category.id,
                          name: event.category.name
                        },
                        start_time: formatDate(event.start_time),
                        end_time: formatDate(event.end_time),
                        price: formatRupiah(event.price),
                        desc: event.desc,
                        address: event.address,
                        urlmap: event.urlmap,
                        image: event.image,
                        createdby: {
                          id: event.user.id,
                          name: event.user.name,
                          phone: event.user.phone,
                          email: event.user.email,
                          imgs: event.user.imgs
                        }
                      },
                      quant: order.quant,
                      tot: formatRupiah(order.tot),

                      stat: req.body.stat
                    });
                  });
              }
            });
        }
      }
    });
};

exports.approved = (req, res) => {
  orders
    .findAll({
      where: {
        stat: req.query.stat,
        buyer_id: req.user_id
      },
      include: [
        {
          model: events,
          as: "event",
          include: [
            {
              model: categories,
              as: "category"
            },
            {
              model: users,
              as: "user"
            }
          ]
        }
      ]
    })
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(newOrders(data));
      } else {
        res.status(200).json({
          message: "data payment is not found"
        });
      }
    });
};
