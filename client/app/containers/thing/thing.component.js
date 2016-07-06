import './thing.scss';

class ThingCtrl {
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/thing/').then(res => {
      this.things = res.data;
    });
  }
}

export default {
  template: require('./thing.html'),
  controller: ThingCtrl
};