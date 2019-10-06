var jogo = new JogoXadrez();

function init() {
	gerar_tabuleiro();
	atualizar_jogo();
	jogo.reiniciar();
}

function select(i,j) {
	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j]
	
	if (select.obj_clicado === undefined || select.obj_clicado === null) {
		var peca = jogo.getPeca(i, j);

		if (peca == null)
			return;
		
		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";
		
		if(peca.tipo == 1 && jogo.vez == 0 || peca.tipo == 0 && jogo.vez == 1)
		{
			alert("Jogador errado!");
			select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
			select.obj_clicado = null;
			atualizar_jogo();
		}
		
	} else if (jogo.moverPeca(select.peca, i, j)) {
		if(jogo.rei_b == 7)
		{
			alert("Vitória das peças brancas!");
			alert("Reiniciar jogo!");
			reiniciar_jogo();
		}
		else
		{
			if(jogo.rei_w == 1)
			{
				alert("Vitória das peças pretas!");
				alert("Reiniciar jogo!");
				reiniciar_jogo();
			}
			select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
			select.obj_clicado = null;
			atualizar_jogo();
		}
	} else {
		alert("Movimento invalido!");
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		atualizar_jogo();
	}
}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	jogo.reiniciar();
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro();

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
			obj = tabuleiro.rows[i].cells[j]
				obj.innerHTML = pecas[tabData[i][j]];
		}
	}
}

function reiniciar_jogo() {
	jogo = null;
	jogo = new JogoXadrez();
	jogo.reiniciar();
	atualizar_jogo();
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\">";
	var color = false;

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"silver\" onclick=\"select(" + i + "," + j + ");\"></td>";
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"white\" onclick=\"select(" + i + "," + j + ");\"></td>";
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}

init();
