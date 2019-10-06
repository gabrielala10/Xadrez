class Tabuleiro
{
	constructor(tabuleiro){
		this.tabuleiro = tabuleiro;
	}
	
	addPeca(peca, i, j)
	{
		this.tabuleiro[i][j] = peca.id;
	}
	
	rmPeca(i, j)
	{
		this.tabuleiro[i][j] = 0;
	}
	
	getPeca(peca, i, j)
	{
		for(var z=0;z<32;z++)
			if(peca[z].id == this.tabuleiro[i][j] && peca[z].posI == i && peca[z].posJ == j)
				return peca[z];
		return null;
	}
	
	getRepresentacao()
	{
		return this.tabuleiro;
	}
}