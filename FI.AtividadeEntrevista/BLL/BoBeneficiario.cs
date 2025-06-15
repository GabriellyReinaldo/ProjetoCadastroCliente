using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class BoBeneficiario
    {
        /// <summary>
        /// Inclui um novo beneficiario
        /// </summary>
        /// <param name="beneficiario">Objeto de beneficiario</param>
        public long Incluir(DML.Beneficiario beneficiario)
        {
            DAL.Beneficiario.DaoBeneficiario bo = new DAL.Beneficiario.DaoBeneficiario();
            return bo.Incluir(beneficiario);
        }

        /// <summary>
        /// Altera um beneficiario
        /// </summary>
        /// <param name="beneficiario">Objeto de beneficiario</param>
        public void Alterar(DML.Beneficiario beneficiario)
        {
            DAL.Beneficiario.DaoBeneficiario bo = new DAL.Beneficiario.DaoBeneficiario();
            bo.Alterar(beneficiario);
        }

        /// <summary>
        /// Consulta o beneficiario pelo id do cliente
        /// </summary>
        /// <param name="id">id do cliente</param>
        public List<DML.Beneficiario> ConsultarListaBeneficiario(long id)
        {
            DAL.Beneficiario.DaoBeneficiario bo = new DAL.Beneficiario.DaoBeneficiario();
            return bo.ConsultarListaBeneficiario(id);
        }

        /// <summary>
        /// Excluir o beneficiario pelo cpf
        /// </summary>
        /// <param name="cpf">cpf do beneficiario</param>
        public void Excluir(string cpf)
        {
            DAL.Beneficiario.DaoBeneficiario bo = new DAL.Beneficiario.DaoBeneficiario();
            bo.Excluir(cpf);
        }
    }
}
