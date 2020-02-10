//Objeto animal
function Animal(){
  Object.defineProperty(this, 'peso', {
                      value: 30,
                       configurable:true,
                        writable:true });

  Object.defineProperty(this, 'edad', {
                        value: 10,
                         enumerable: true,
                          configurable:true,
                           writable:true });

  Object.defineProperty(this, 'crecer', {
            get: function(){
                return this.edad+1}} )
  };

  //Objeto mamifero
  function Mamifero(){
      Animal.call(this);
  Object.defineProperty(this, 'sonido', { value: 'ladrido', configurable:true, writable:true });
  Object.defineProperty(this, 'num_patas', { value: 4, configurable:true, writable:true });
  Object.defineProperty(this, 'mover', { get: function(){return "Se mueve en circulos"}} )
  };

  //Objeto ave
  function Ave(){
      Animal.call(this);
  Object.defineProperty(this, 'tipo', { value: 'de presa', configurable:true, writable:true });
  Object.defineProperty(this, 'volador', { value: 'si', configurable:true, writable:true });
  Object.defineProperty(this, 'volar', { get: function(){return "Vuelo un rato"}} )
  };

  //Objeto perro
  function Perro(){
      Mamifero.call(this);
  Object.defineProperty(this, 'raza', { value: 'Labrador', configurable:true, writable:true });
  Object.defineProperty(this, 'peligroso', { value: 'no', configurable:true, writable:true });
  Object.defineProperty(this, 'ladrar', { get: function(){return "Guau"}} )
  };

  //Testeo
  var perro1=new Perro();
  var ave1=new Ave();
  console.log(perro1.ladrar);
  console.log(ave1.volar);
  console.log(perro1.crecer);
