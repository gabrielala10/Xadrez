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
		//this.emJogo = 1;
	}	
}

class Torre extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}

	mover(tabuleiro, i, j){
		//console.log(i,this.posI, j, this.posJ);
		if(j!= this.posJ && i!= this.posI)
			return false;
		//console.log(i,this.posI, j, this.posJ);
		if(tabuleiro[i][j] <=6 && tabuleiro[i][j]!= 0)
			var tipoPeca = WHITE;
		else 
		{
			if (tabuleiro[i][j] > 6)
				var tipoPeca = BLACK;
			else
				var tipoPeca = EMPTY;
		}
		
		if(tipoPeca == this.tipo)
			return false;
		
		var movimentoI = i - this.posI;
		var movimentoJ = j - this.posJ;
		
		for(var z = 1; z < Math.abs(movimentoI + movimentoJ); z++)
		{
			if(movimentoI === 0)
			{
				console.log(i,this.posI, j, this.posJ);
				if(movimentoJ < 0)
					if(tabuleiro[i][this.posJ - z] != 0)
						return false;
				else
					if(tabuleiro[i][this.posJ + z] != 0)
						return false;
			}
			
			else
			{
				console.log(i,this.posI, j, this.posJ);
				if(movimentoI < 0)
					if(tabuleiro[this.posI - z][j] != 0)
						return false;
				else
					if(tabuleiro[this.posI - z][j] != 0)
						return false;
			}
		}
		this.posI = i;
		this.posJ = j;
		return true;
	}
}



class Cavalo extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j){
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
	
	mover(tabuleiro, i, j)
	{
		if(j!= this.posJ && (this.posJ != this.posJ - 1 || this.posJ != this.posJ + 1))
			return false; //se não estiver na coluna original ou na de captura
		if(this.tipo == WHITE) //pode andar duas casas quando esta na posicao inicial
		{
			if(i-this.posI > 2 || i - this.posI < 1)
				return false;
			if(i-this.posI == 2 && (j != this.posJ || this.posI != 1|| tabuleiro[this.posI+1][this.posJ] != 0))
				return false;
		}
		else
		{
			if(this.posI - i> 2 || this.posI - i < 1)
				return false;
			if(this.posI - i == 2 && (j != this.posJ || this.posI != 6 || tabuleiro[this.posI-1][this.posJ] != 0))
				return false;
		}
		if(this.posJ == j && tabuleiro[i][j] != 0)//tem peca na proxima casa
			return false;
		
		if(tabuleiro[i][j] <=6 && tabuleiro[i][j]!= 0)
			var tipoPeca = WHITE;
		else 
		{
			if (tabuleiro[i][j] > 6)
				var tipoPeca = BLACK;
			else
				var tipoPeca = EMPTY;
		}
		
		if(tipoPeca == this.tipo)
			return false;
		
		this.posI = i;
		this.posJ = j;
		return true;
	}
}

