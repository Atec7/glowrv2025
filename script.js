function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    const cards = document.querySelectorAll('#products .card');
    resultsContainer.innerHTML = ''; // Limpa resultados anteriores

    if (query.trim() === '') {
        resultsContainer.innerHTML = 'Por favor, insira um termo de pesquisa.';
        return;
    }

    let resultsFound = false;

    cards.forEach(card => {
        const h3 = card.querySelector('h3');
        if (h3.textContent.toLowerCase().includes(query)) {
            card.style.display = 'block'; // Mostra o card que contém o termo de pesquisa
            resultsFound = true;
        } else {
            card.style.display = 'none'; // Esconde os cards que não contêm o termo de pesquisa
        }
    });

    if (!resultsFound) {
        resultsContainer.innerHTML = 'Nenhum resultado encontrado.';
    } else {
        resultsContainer.innerHTML = ''; // Limpa mensagem de "Nenhum resultado encontrado" se encontrar algo
    }
}

function showSection(section) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(sec => {
        if (sec.id === section) {
            sec.classList.remove('hidden');
        } else {
            sec.classList.add('hidden');
        }
    });
}
  
        let cart = [];
        let totalPrice = 0;

        function showSection(sectionId) {
            document.querySelectorAll('.container').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
        }

        function addToCart(productName, price) {
            cart.push({name: productName, price: price});
            showNotification(`${productName} foi adicionado ao seu Pedido!🛍️`);
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            cartItems.innerHTML = '';
            totalPrice = 0;

            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <p>${item.name}</p>
                    <p>R$ ${item.price.toFixed(2)}</p>
                `;
                cartItems.appendChild(itemElement);
                totalPrice += item.price;
            });

            document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
        }

        function showDeliveryForm() {
            const deliveryOption = document.getElementById('deliveryOption').value;
            document.getElementById('retiradaForm').classList.add('hidden');
            document.getElementById('entregaForm').classList.add('hidden');

            if (deliveryOption === 'retirada') {
                document.getElementById('retiradaForm').classList.remove('hidden');
            } else if (deliveryOption === 'entrega') {
                document.getElementById('entregaForm').classList.remove('hidden');
            }
        }

        function finalizeOrder() {
    const deliveryOption = document.getElementById('deliveryOption').value;
    let orderDetails = '*Pedido:*\n *_________________*\n';
    let deliveryFee = 0;

    cart.forEach(item => {
        orderDetails += `[•] ${item.name}: R$ ${item.price.toFixed(2)}\n`;
    });

    if (deliveryOption === 'entrega') {
        deliveryFee = 10; // Taxa de entrega
    }

    totalPrice += deliveryFee;
    orderDetails += `Taxa de Entrega: R$ ${deliveryFee.toFixed(2)}\n *_________________*`;
    
    orderDetails += `\n *Total:* R$ ${totalPrice.toFixed(2)}\n
    \n *_________________* \n` ;

    if (deliveryOption === 'retirada') {
        const retiradaNome = document.getElementById('retiradaNome').value;
        const retiradaContato = document.getElementById('retiradaContato').value;
        orderDetails += `*Opção de Entrega:* Retirada\n \n`;
        orderDetails += `*Nome:* ${retiradaNome}\n\n`;
        orderDetails += `*Contato:* ${retiradaContato}\n\n`;
    } else if (deliveryOption === 'entrega') {
        const entregaNome = document.getElementById('entregaNome').value;
        const entregaEndereco = document.getElementById('entregaEndereco').value;
        const entregaPagamento = document.getElementById('entregaPagamento').value;
        const entregaResponsavel = document.getElementById('entregaResponsavel').value;
        orderDetails += `Opção de Entrega: Entrega\n`;
        orderDetails += `Nome: ${entregaNome}\n`;
        orderDetails += `Endereço: ${entregaEndereco}\n`;
        orderDetails += `Forma de Pagamento: ${entregaPagamento}\n`;
        orderDetails += `Responsável pelo Recebimento: ${entregaResponsavel}\n`;
    }

    const whatsappUrl = `https://wa.me/5564992952748?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
}

        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.style.opacity = '1';
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.opacity = '0';
            }, 3000); // Exibe por 3 segundos

            setTimeout(() => {
                notification.style.display = 'none';
            }, 3500); // Tempo extra para o fade-out
        }

        // Exibir seção inicial
        showSection('home');
        // scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const acceptBtn = document.querySelector('.accept-btn');
    const cookieConsent = document.querySelector('.cookie-consent');

    acceptBtn.addEventListener('click', () => {
        cookieConsent.style.opacity = '0';
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 300);
    });
});
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('imgModal');
    const close = document.querySelector('.close');

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('thumbnail')) {
            modal.style.display = 'flex';
            modalImg.src = event.target.src;
        }
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});