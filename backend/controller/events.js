const models = require("../models");
const categories = models.categories;
const events = models.events;
const users = models.users;

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Events, formatDate, formatRupiah } = require("../helpers/functions");
exports.index = (req, res) => {
  events
    .findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${req.query.title}%`
            }
          },
          {
            start_time: {
              [Op.substring]: req.query.start_time
            }
          }
        ]
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
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(Events(data));
      } else {
        res.status(200).json({
          success: false,
          message: "event not founds"
        });
      }
    });
};

exports.startDate = (req, res) => {
  events
    .findAll({
      where: {
        startTime: req.query.start_time
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
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(Events(data));
      } else {
        res.status(200).json({
          message: "event not founds"
        });
      }
    });
};

exports.allevents = (req, res) => {
  events
    .findAll({
      attributes: {
        exclude: ["createAt", "updateAt"]
      },
      include: [
        {
          model: categories,
          as: "category",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        },
        {
          model: users,
          as: "user",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        }
      ]
    })
    .then(data => res.send(data));
};

exports.all = (req, res) => {
  events
    .findAll({
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
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(Events(data));
      } else {
        res.status(200).json({
          message: "event not founds"
        });
      }
    });
};

exports.detail = (req, res) => {
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
    .then(data => {
      if (data === null) {
        res.status(200).json({
          message: "event not found"
        });
      } else {
        res.status(200).json({
          id: data.id,
          title: data.title,
          category_name: data.category.name,
          category: {
            id: data.category.id,
            name: data.category.name
          },
          start_time: formatDate(data.start_time),
          end_time: formatDate(data.end_time),
          price: formatRupiah(data.price),
          desc: data.desc,
          address: data.address,
          urlmap: data.urlmap,
          image: data.image,
          createdby: {
            id: data.user.id,
            name: data.user.name,
            phone: data.user.phone,
            email: data.user.email,
            imgs: data.user.imgs
          }
        });
      }
    });
};

exports.post = (req, res) => {
  let storeTitle;
  const {
    title,
    category_id,
    start_time,
    end_time,
    price,
    desc,
    address,
    urlmap,
    image
  } = req.body;
  storeTitle = title.trim();
  events
    .findAll({
      where: {
        title: storeTitle
      }
    })
    .then(eventsData => {
      if (eventsData.length > 0) {
        res.status(200).json({
          message: "title has been used"
        });
      } else {
        events
          .create({
            title: storeTitle,
            category_id: category_id,
            start_time: start_time,
            end_time: end_time,
            price: price,
            desc: desc,
            address: address,
            urlmap: urlmap,
            image: image,
            createdby: req.user_id
          })
          .then(data => {
            categories
              .findOne({
                where: {
                  id: data.category_id
                }
              })
              .then(category => {
                users
                  .findOne({
                    where: {
                      id: data.createdby
                    }
                  })
                  .then(user => {
                    res.status(200).json({
                      id: data.id,
                      title: data.title,
                      category: {
                        id: category.id,
                        name: category.name
                      },
                      start_time: formatDate(data.start_time),
                      end_time: formatDate(data.end_time),
                      price: formatRupiah(data.price),
                      desc: data.desc,
                      address: data.address,
                      urlmap: data.urlmap,
                      image: data.image,
                      createdby: {
                        id: user.id,
                        name: user.name,
                        phone: user.phone,
                        email: user.email,
                        imgs: user.imgs
                      }
                    });
                  });
              });
          });
      }
    });
};

exports.patch = (req, res) => {
  events
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(event => {
      if (event != null) {
        if (event.createdBy != req.user_id) {
          res.status(403).json({
            message: "you are not authorized to update this event"
          });
        } else {
          events
            .update(req.body, {
              where: {
                id: req.params.id
              }
            })
            .then(data => {
              if (data === 0) {
                res.status(500).json({
                  message: "failed to update this event"
                });
              } else {
                res.status(200).json({
                  message: "success update this event"
                });
              }
            });
        }
      } else {
        res.status(200).json({
          message: "event is not found"
        });
      }
    });
};

exports.delete = (req, res) => {
  events
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(event => {
      if (event === null) {
        res.status(200).json({
          message: "event is not found"
        });
      } else {
        if (event.createdBy != req.user_id) {
          res.status(403).json({
            message: "you are not authorized to delete this event"
          });
        } else {
          events
            .destroy({
              where: {
                id: req.params.id
              }
            })
            .then(data => {
              if (data === 0) {
                res.status(500).json({
                  success: false,
                  message: "Failed to delete this event"
                });
              } else {
                res.status(200).json({
                  success: true,
                  message: "success delete this event"
                });
              }
            });
        }
      }
    });
};
