// Bubble class
class Votos {
  
  constructor(name,_numMesas,_censoMesas,_censoEscrutado,_porcentaje,_totalVotantes,_porcentajetotalVotantes,_abstencion,_porcentajeAbstencion,_votosBlanco,_pocentajeVotosBlanco,_votosNulos,_concejales,_alcaldes) {
    
  this.numMesas =_numMesas ;
  this.censoMesas =_censoMesas ;
  this.censoEscrutado = _censoEscrutado;
  this.porcentaje = _porcentaje;
  this.totalVotantes = _totalVotantes;
  this.porcentajetotalVotantes = _porcentajetotalVotantes;
  this.abstencion = _abstencion;
  this.porcentajeAbstencion =_porcentajeAbstencion;
  this.votosBlanco =_votosBlanco;
  this.pocentajeVotosBlanco =_pocentajeVotosBlanco;
  this.votosNulos =_votosNulos;
  this.concejales =_concejales;
  this.alcaldes =_alcaldes;
  
     print("------create Votos: "+this.alcaldes);
  }
}
