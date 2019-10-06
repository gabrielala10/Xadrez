	const WHITE = 0;
	const BLACK = 1;
	const EMPTY = 2;

class Peca
{
	constructor(tipo, posI, posJ, id){
		this.tipo = tipo;
		this.posI = posI;
		this.posJ = posJ;
		this.id = id;
	}	
}

class Torre extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}

	mover(peca, i, j){
		var idPeca = getPeca(peca,i,j);
			
		if(idPeca.id <=6 && idPeca.id!= 0)
			var tipoPeca = WHITE;
		else 
		{
			if (idPeca.id != 0)
				var tipoPeca = BLACK;
			else
				var tipoPeca = EMPTY;
		}
		
		if(tipoPeca == EMPTY)
		{	
			rmPeca(this.posI, this.posJ);
			addPeca(Torre, i, j);
		}
		return true;
	}
}



class Cavalo extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
	
	mover(i, j){
		var idPeca = getPeca(i,j);
			
		if(idPeca <=6 && idPeca!= 0)
			var tipoPeca = WHITE;
		else 
		{
			if (idPeca != 0)
				var tipoPeca = BLACK;
			else
				var tipoPeca = EMPTY;
		}
			
		if((j != posJ && i!= posI))
			return false;
				
		if (peca.i == i && peca.j == j)
			return false;
			
		rmPeca(posI, posJ);
		return true;
	}
}


class Bispo extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
}


class Rainha extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
}

class Rei extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
}

class Peao extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
}

