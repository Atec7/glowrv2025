document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const formContainer = document.getElementById('form-container');
    const numerosEscolhidos = document.getElementById('numerosEscolhidos');
    const prizeImage = document.getElementById('prizeImage');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('imgModal');
    const close = document.querySelector('.close');
    let selectedNumbers = [];
    const precoPorNumero = 5; // Preço de cada número

    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.classList.add('thumbnail');

        // Adicionar manualmente a classe 'disabled' aos números indisponíveis
        if ([5, 10, 15].includes(i)) { // Por exemplo, desativar os números 5, 10 e 15
            numberDiv.classList.add('disabled');
        }

        numberDiv.addEventListener('click', () => {
            if (!selectedNumbers.includes(i) && !numberDiv.classList.contains('disabled')) {
                selectedNumbers.push(i);
                numberDiv.classList.add('selected');
            }
            if (selectedNumbers.length > 0) {
                formContainer.style.display = 'flex';
            } else {
                formContainer.style.display = 'none';
            }
            numerosEscolhidos.value = selectedNumbers.join(', ');
        });
        grid.appendChild(numberDiv);
    }

    // Exibir imagem do prêmio em tela cheia
    prizeImage.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = prizeImage.src;
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.getElementById('enviar').addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const contato = document.getElementById('contato').value;
        const pagamento = document.getElementById('pagamento').value;

        if (nome && contato && pagamento && selectedNumbers.length > 0) {
            const total = selectedNumbers.length * precoPorNumero;
            const whatsappNumber = '64992952748';
            const message = `Nome: ${nome}%0AContato: ${contato}%0AForma de Pagamento: ${pagamento}%0ANúmeros Escolhidos: ${selectedNumbers.join(', ')}%0ATotal a Pagar: R$ ${total},00`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(whatsappURL, '_blank');
        } else {
            alert('Por favor, preencha todos os campos e selecione pelo menos um número.');
        }
    });
});