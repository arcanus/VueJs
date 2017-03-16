new Vue({
  el: '#exercise',
  data: {
    classHighlight: false,
    classShrink: false,
    classItalic: true,
    classBold: 'bold',
    userClass: '',
    userClass2: '',
    userClass2Bool: false,
    myStyle: {
      height: '100px',
      width: '100px',
      backgroundColor: 'green'
    },
    progress_counter: 0,
  },
  computed: {
    classes: function(){
      return {
        highlight: this.classHighlight,
        shrink: this.classShrink
      };
    },
    progress: function(){
      return this.progress_counter + 'px';
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
      let vm = this;
      let timer = setInterval(function(){
        vm.progress_counter ++;
        vm.progress_counter == 500 && clearInterval(timer);
      }, 10);
    }
  }
});
