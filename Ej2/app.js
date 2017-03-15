new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            ShowAlert: function(){
                alert('Se ha pulsado el botón');
            },
            SaveKeys: function(event){
                this.value = event.target.value;
            }
        }
    });
