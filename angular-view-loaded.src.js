module.exports = function ngViewLoaded(target) {
  return class extends target {
    constructor(...args) {
      super(...args);
      this.$scope && this.viewLoaded && typeof this.viewLoaded == 'function' && this.$scope.$on('$viewContentLoaded', this.viewLoaded.bind(this));
    }
  };
}
