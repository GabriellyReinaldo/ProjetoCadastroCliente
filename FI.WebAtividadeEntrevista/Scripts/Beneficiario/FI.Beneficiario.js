document.addEventListener("DOMContentLoaded", function () {
    const inputCPF = document.getElementById('cpfBeneficiario');
    const inputNome = document.getElementById('nomeBeneficiario');
    const form = document.getElementById('formAddBeneficiario');
    const tabela = document.getElementById('tabelaBeneficiarios');

    $('#cpfBeneficiario').on('input', function () {
        $(this).val(mascaraCPF($(this).val()));
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const cpf = inputCPF.value.trim();
        const nome = inputNome.value.trim();

        if (!cpf || !nome) {
            alert("Preencha os campos CPF e Nome.");
            return;
        }

        if (!verificarCPF(cpf.replace(/\D/g, ''))) {
            ModalDialog("CPF Inválido", "Por favor, informe um CPF válido.");
            return;
        }

        let cpfDuplicado = false;
        $('#tabelaBeneficiarios tr').each(function () {
            const cpfTabela = $(this).find('td').eq(0).text().trim();
            if (cpfTabela === cpf) {
                cpfDuplicado = true;
                return false; 
            }
        });

        if (cpfDuplicado) {
            ModalDialog("CPF Duplicado", "Este CPF já foi incluído como beneficiário.");
            return;
        }

        beneficiariosList.push({ CPF: cpf, Nome: nome });

        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <tr>
                <td>${cpf}</td>
                <td>${nome}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm">Alterar</button>
                    <button type="button" class="btn btn-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;

        tabela.appendChild(novaLinha);

        
        inputCPF.value = '';
        inputNome.value = '';
    });

    $('#modalBeneficiarios').on('hidden.bs.modal', function () {
        inputCPF.value = '';
        inputNome.value = '';
    });

    // Evento delegado para excluir beneficiário
    tabela.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-danger')) {
            const linha = event.target.closest('tr');
            if (linha) {
                linha.remove();
            }
        }

        // Evento delegado para alterar beneficiário
        if (event.target.classList.contains('btn-primary')) {
            const linha = event.target.closest('tr');
            if (linha) {
                const cpf = linha.children[0].textContent.trim();
                const nome = linha.children[1].textContent.trim();

                // Preenche os campos do formulário
                inputCPF.value = cpf;
                inputNome.value = nome;

                // Remove a linha para permitir reedição
                linha.remove();
            }
        }
    });
});

