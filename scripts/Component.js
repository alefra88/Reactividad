const Component = (function () {
  //creamos constructor
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //Agregamos los metodos al proto del constructor componente

  //RENDER UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  //Actualizar estado de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //Obtenemos copia inmutable del estado
  Constructor.prototype.getState = function () {
    const getState = () => JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
