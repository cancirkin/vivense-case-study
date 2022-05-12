const PriceFormat = {
  install(Vue) {
    Vue.filter("PriceFormat", function (price) {
      return new Intl.NumberFormat().format(price);
    });
  },
};

export default PriceFormat;
