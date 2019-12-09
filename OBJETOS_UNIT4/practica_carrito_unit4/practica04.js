function Carrito(idCarrito,items,cantidad){
  this.idCarrito=idCarrito ;
  this.items=items;
  this.cantidad=cantidad;
}//end


class Producto{
  constructor(NumSerie,Nombre,Precio,Iva){
  this.NumSerie=NumSerie || "xxxxxxxx";
  this.Nombre=Nombre || "producto";
  this.Precio=Precio || 0;
  this.Iva=Iva || 0;
  }

    get NumSerie(){
      return this._NumSerie;
    }
    set NumSerie(){
      return this._NumSerie.value;
    }

    get Nombre(){
      return this._Nombre;
    }
    set Nombre(){
      return this._Nombre.value;
    }



}//end

class Camiseta extends Producto(){
  constructor(NumSerie,Nombre,Talla,Color,Precio,Iva,Talla,Color){
    super(NumSerie,Nombre,Talla,Color,Precio,Iva);
    this.Talla=Talla || "xs";
    this.Color=Color || " ";
  }//end constructor
  get Talla(){
    return this._Talla;
  }

  set Talla(){
    return this._Talla=value;
  }
}


function Zapatilla(Numero,Tipo){
  this.Numero=Numero || "numero";
  this.Tipo=Tipo || " tipo";
}
Zapatilla.prototype=new Producto;
