function harryFase2() 
{
        var atravessaParede = prompt("Você confia na familia Weasley e atravessa a parede? 1:Sim 2: Não");

        if (atravessaParede == 1)
        {
            document.write (`
            <h1> Bem vinda a plataforma 9 3/4,
            Temos o prazer de informar que V. Sa. ${atravessaParede} tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. 
            </h1>
        `);
        }

        else if (atravessaParede == 2){
        
            document.write (`
            <h1> ${atravessaParede}. Você se tornará um elfo domestico dos Durleys para sempre.</h1>
            `);
        }
        else {
            alert('Escolha errada. Tente novamente!');
            harryFase2();
        }          
}   
    harryFase2()
