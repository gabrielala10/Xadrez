function JogoXadrez() {
	// Identificador de cada peça!
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟
	
	const WHITE = 0;
	const BLACK = 1;
	const EMPTY = 2;
	
	
	
	
	var tabuleiro = new Tabuleiro([]);
	var pecas = [];
	var capturas_b = 0;
	var capturas_w = 0;
	this.rei_b = 0;
	this.rei_w = 0;




	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		return tabuleiro.getRepresentacao();
	}
	

	// Esse método reinicia o jogo.
	this.reiniciar = function() {
		tabuleiro.tabuleiro = new Array(8);
		for(let i = 0; i < 8; i++) {
			tabuleiro.tabuleiro[i] = new Array(8);
			for(let j = 0; j < 8; j++)
			{		
				tabuleiro.tabuleiro[i][j] = 0;
			}
		}
		
		
		
		for(var i = 0; i < 8; i++)
		{
			pecas.push( new Peao(WHITE, 1, i, W_PAWN));
			pecas.push( new Peao(BLACK, 6, i, B_PAWN));
		}
		for(var i = 0; i < 2; i++)
		{
			pecas.push(new Torre(WHITE, 0, i*7, W_ROOK));
			pecas.push( new Torre(BLACK, 7, i*7, B_ROOK));
			pecas.push( new Cavalo(WHITE, 0, 1+i*5, W_KNIGHT));
			pecas.push( new Cavalo(BLACK, 7, 1+i*5, B_KNIGHT));
			pecas.push( new Bispo(WHITE, 0, 2+i*3, W_BISHOP));
			pecas.push( new Bispo(BLACK, 7, 2+i*3, B_BISHOP));
		}
		
		pecas.push( new Rainha(WHITE, 0, 4, W_QUEEN));
		pecas.push( new Rainha(BLACK, 7, 4, B_QUEEN));
		pecas.push( new Rei(WHITE, 0, 3, W_KING));
		pecas.push( new Rei(BLACK, 7, 3, B_KING));
		
		for(var i = 0; i < 32; i++) {
			//tabuleiro[pecas[i].posI][pecas[i].posJ] = pecas[i].id;
			//console.log(pecas[i].id);
			tabuleiro.addPeca(pecas[i], pecas[i].posI, pecas[i].posJ);
			//console.log(tabuleiro.tabuleiro[i][i]);
		}
	}

	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	this.getPeca = function(i, j) {
		return tabuleiro.getPeca(pecas,i,j);
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. Obs: não é permitido que o usuário mova uma peça de outro jogador.
	this.moverPeca = function(peca, i, j) {
		
		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (peca.posI == i && peca.posJ == j)
			return false;
		
		if(tabuleiro.tabuleiro[i][j]!=0)
			var pecaa = tabuleiro.getPeca(pecas,i,j);
		else
			var pecaa = null;
		
		
		if(peca.mover(tabuleiro.tabuleiro,i,j))
		{	
			if(pecaa != null && pecaa.tipo == BLACK)
			{
				pecaa.posI = 0;
				pecaa.posJ = capturas_w + 8;
				capturas_w++;
				if(pecaa.id == 7)
					this.rei_b = 7;
			}
			else
				if(pecaa != null && pecaa.tipo == WHITE)
				{
					pecaa.posI = 7;
					pecaa.posJ = capturas_b + 8;
					capturas_b++;
					if(pecaa.id == 1)
						this.rei_w = 1;
				}
					
			tabuleiro.rmPeca(peca.posI, peca.posJ);
			tabuleiro.addPeca(peca, i, j);
			return true;
		}
		return false;
	}
}
