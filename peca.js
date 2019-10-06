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

	mover(tabuleiro, i, j){
		if(j!= this.posJ && i!= this.posI)
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
		
		var movimentoI = i - this.posI;
		var movimentoJ = j - this.posJ;
		
		for(var z = 1; z < Math.abs(movimentoI + movimentoJ); z++)
		{
			if(movimentoI === 0)
			{
				if(movimentoJ < 0)
				{
					if(tabuleiro[i][this.posJ - z] != 0)
					return false;
				}
				else
					if(tabuleiro[i][this.posJ + z] != 0)
						return false;
			}
			
			else
			{		
				if(movimentoI < 0)
				{	
					if(tabuleiro[this.posI - z][j] != 0)
						return false;
				}
				else
					if(tabuleiro[this.posI + z][j] != 0)
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
		
		if(Math.abs(movimentoI) != 2 && Math.abs(movimentoJ) != 2)
			return false;
		if(Math.abs(movimentoI) == 2 && Math.abs(movimentoJ) != 1)
			return false;
		if(Math.abs(movimentoJ) == 2 && Math.abs(movimentoI) != 1)
			return false;
		
		this.posI = i;
		this.posJ = j;
		return true;
	}
}


class Bispo extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j)
	{
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
		if(Math.abs(movimentoI)!= Math.abs(movimentoJ))
			return false;
		
		for(var z = 1; z < Math.abs(movimentoI); z++)
		{
			if(movimentoI < 0)
			{
				if(movimentoJ < 0)
				{
					if(tabuleiro[this.posI - z][this.posJ - z] != 0)
					return false;
				}
				else
					if(tabuleiro[this.posI - z][this.posJ + z] != 0)
						return false;
			}
			
			else
			{		
				if(movimentoJ < 0)
				{
					if(tabuleiro[this.posI + z][this.posJ - z] != 0)
					return false;
				}
				else
					if(tabuleiro[this.posI + z][this.posJ + z] != 0)
						return false;
			}
		}
		this.posI = i;
		this.posJ = j;
		return true;
	}
}


class Rainha extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j)
	{
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
		
		if(Math.abs(movimentoI) == Math.abs(movimentoJ))
		{
			for(var z = 1; z < Math.abs(movimentoI); z++)
			{
				if(movimentoI < 0)
				{
					if(movimentoJ < 0)
					{
						if(tabuleiro[this.posI - z][this.posJ - z] != 0)
						return false;
					}
					else
						if(tabuleiro[this.posI - z][this.posJ + z] != 0)
							return false;
				}
				
				else
				{		
					if(movimentoJ < 0)
					{
						if(tabuleiro[this.posI + z][this.posJ - z] != 0)
						return false;
					}
					else
						if(tabuleiro[this.posI + z][this.posJ + z] != 0)
							return false;
				}
			}
		}
		else
		{
			for(var z = 1; z < Math.abs(movimentoI + movimentoJ); z++)
			{
				if(movimentoI === 0)
				{
					if(movimentoJ < 0)
					{
						if(tabuleiro[i][this.posJ - z] != 0)
						return false;
					}
					else
						if(tabuleiro[i][this.posJ + z] != 0)
							return false;
				}
				
				else
				{
				
					if(movimentoI < 0)
					{	
						if(tabuleiro[this.posI - z][j] != 0)
							return false;
					}
					else
						if(tabuleiro[this.posI + z][j] != 0)
							return false;
				}
			}
		}
			
		this.posI = i;
		this.posJ = j;
		return true;
	}
}

class Rei extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j)
	{
		if(Math.abs(this.posJ - j) > 1 || Math.abs(this.posI - i) > 1)
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

class Peao extends Peca
{
	constructor(tipo, posI, posJ, id){
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j)
	{
		if(Math.abs(this.posJ - j) > 1)
			return false; //se não estiver na coluna original ou na de captura
		if(Math.abs(this.posJ - j) == 1 && tabuleiro[i][j] == 0)
			return false;
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