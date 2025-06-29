﻿
$(document).ready(function () {
    $('#CPF').on('input', function () {
        $('#CPF').val(mascaraCPF($('#CPF').val()));
    });

    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
        $('#formCadastro #CPF').val(mascaraCPF(obj.CPF));

        if (obj.Beneficiarios && obj.Beneficiarios.length > 0) {
            beneficiariosList = obj.Beneficiarios;

            obj.Beneficiarios.forEach(function (b) {
                const novaLinha =
                    `<tr>
                        <td>${mascaraCPF(b.CPF)}</td>
                        <td>${b.Nome}</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-sm">Alterar</button>
                            <button type="button" class="btn btn-danger btn-sm">Excluir</button>
                        </td>
                    </tr>`;

                $('#tabelaBeneficiarios').append(novaLinha);
            });
        }
    }

    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        const cpf = $('#CPF').val();

        if (!verificarCPF(cpf)) {
            ModalDialog("CPF Inválido", "Por favor, informe um CPF válido.");
            return;
        }

        const beneficiariosFormatados = beneficiariosList.map(function (b) {
            return {
                CPF: b.CPF.replace(/\D/g, ''),
                Nome: b.Nome
            };
        });
        
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val(),
                "CPF": $(this).find("#CPF").val().replace(/\D/g, ''),
                "Beneficiarios": beneficiariosFormatados
            },
            error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();                                
                window.location.href = urlRetorno;
            }
        });
    })
    
})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
