new Vue({
  el: '#VueApp',
  data: {
    tareas: JSON.parse(localStorage.getItem('tareas')),
    nuevaTarea: {
      nombre: '',
      usuario: '',
      ticket: '',
      desc: ''
    }
  },
  methods: {
    eliminarTarea: function(i) {
      this.tareas.splice(i, 1);
      this.guardarEnLS();
    },
    guardarEnLS: function() {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    },
    resetFormTareas: function() {
      this.nuevaTarea.nombre = '';
      this.nuevaTarea.usuario = '';
      this.nuevaTarea.ticket = '';
      this.nuevaTarea.desc = '';
    },
    submitFormTarea: function(e) {
      this.tareas.push({
        nombre: this.nuevaTarea.nombre,
        usuario: this.nuevaTarea.usuario,
        ticket: this.nuevaTarea.ticket,
        desc: this.nuevaTarea.desc
      });
      this.guardarEnLS();
      this.resetFormTareas();
      e.preventDefault();
    },
    tareas_activas: function() {
      return 'Hay 1 tarea activa';
    }
  }
});
