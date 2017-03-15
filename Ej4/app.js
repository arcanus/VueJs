new Vue({
  el: '#exercise',
  data: {
    classHighlight: false,
    classShrink: false
  },
  computed: {
    classes: function(){
      return {highlight: this.classHighlight, shrink: this.classShrink};
    }
  },
  methods: {
    startEffect: function() {
      let vm = this;
      this.classHighlight = true;
      setInterval(function(){
        vm.classHighlight = !vm.classHighlight;
        vm.classShrink = !vm.classShrink;
      },2000);
    },
    startProgress: function() {

    }
  }
});
