function inicioHogwarts() 
{
        var abrirCarta = prompt("Você aceita o convite para Hogwarts? 1:Sim 2: Não");

        if (abrirCarta == 1)
        {
            document.write (`
            <h1> Prezado Sr. Potter,
            Temos o prazer de informar que V. Sa. ${abrirCarta} tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. 
            </h1>
        `);
        }

        else if (abrirCarta == 2){
        
            document.write (`
            <h1> ${abrirCarta}. Você se tornará um elfo domestico dos Durleys para sempre.</h1>
            `);
        }
        else {
            alert('Escolha errada. Tente novamente!');
            inicioHogwarts();
        }          
}   
    inicioHogwarts()
