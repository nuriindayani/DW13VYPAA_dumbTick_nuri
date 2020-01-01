exports.formatDate = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hours = hours < 10 ? "0" + hours : hours;
  return (
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};
exports.formatTime = date => {
  return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
};

exports.formatRupiah = angka => {
  var reverse = angka
      .toString()
      .split("")
      .reverse()
      .join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan
    .join(".")
    .split("")
    .reverse()
    .join("");
  return "Rp." + ribuan + ",-";
};

const formatRupiah = angka => {
  var reverse = angka
      .toString()
      .split("")
      .reverse()
      .join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan
    .join(".")
    .split("")
    .reverse()
    .join("");
  return "Rp." + ribuan + ",-";
};

const formatDate = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hours = hours < 10 ? "0" + hours : hours;
  return (
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};

exports.Events = data => {
  const Event = data.map(item => {
    let items = {
      id: item.id,
      title: item.title,
      category: {
        id: item.category.id,
        name: item.category.name
      },
      start_time: formatDate(item.start_time),
      end_time: formatDate(item.end_time),
      price: formatRupiah(item.price),
      desc: item.desc,
      address: item.address,
      urlmap: item.urlmap,
      image: item.image,
      createdby: {
        id: item.user.id,
        name: item.user.name,
        email: item.user.email,
        imgs: item.user.imgs
      }
    };
    return items;
  });
  return Event;
};

exports.newOrders = data => {
  const newOrder = data.map(item => {
    let newItem = {
      id: item.id,
      event: {
        id: item.event.id,
        title: item.event.title,
        category: {
          id: item.event.category.id,
          name: item.event.category.name
        },
        start_time: item.event.start_time,
        end_time: item.event.end_time,
        price: item.event.price,
        desc: item.event.desc,
        address: item.event.address,
        urlmap: item.event.urlmap,
        image: item.event.image,
        createdby: {
          id: item.event.user.id,
          name: item.event.user.name,
          phone: item.event.user.phone,
          email: item.event.user.email,
          imgs: item.event.user.imgs
        }
      },
      quant: item.quant,
      tot: item.tot,
      stat: item.stat
    };
    return newItem;
  });
  return newOrder;
};

exports.newFavorites = data => {
  const newFavorite = data.map(item => {
    let newItems = {
      id: item.event.id,
      title: item.event.title,
      category: {
        id: item.event.category.id,
        name: item.event.category.name
      },
      start_time: formatDate(item.event.start_time),
      end_time: formatDate(item.event.end_time),
      price: formatRupiah(item.event.price),
      desc: item.event.desc,
      address: item.event.address,
      urlmap: item.event.urlmap,
      image: item.event.image,
      createdby: {
        id: item.event.user.id,
        name: item.event.user.name,
        email: item.event.user.email,
        phone: item.event.user.phone,
        imgs: item.event.user.imgs
      }
    };
    return newItems;
  });
  return newFavorite;
};
