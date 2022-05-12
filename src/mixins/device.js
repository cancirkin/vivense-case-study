let device = {
  data() {
    return {
      device: "",
    };
  },
  created() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      this.device = "tablet";
      return;
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      this.device = "mobile";
      return;
    }
    this.device = "desktop";
    return;
  },
};
export default device;
