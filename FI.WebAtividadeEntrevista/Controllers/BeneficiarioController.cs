using FI.AtividadeEntrevista.BLL;
using FI.AtividadeEntrevista.DML;
using FI.WebAtividadeEntrevista.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace FI.WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Incluir()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(string CPF, string Nome)
        {
            BoBeneficiario bo = new BoBeneficiario();

            //if (bo.VerificarExistencia(CPF))
            //{
            //    Response.StatusCode = 400;
            //    return Json("Já existe um beneficiário com este CPF.");
            //}

            return Json("Beneficiário incluído com sucesso.");
        }

        //[HttpPost]
        //public JsonResult Alterar(BeneficiarioModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        Response.StatusCode = 400;
        //        return Json("Dados inválidos para alteração.");
        //    }

        //    bo.Alterar(new Beneficiario
        //    {
        //        CPF = model.CPF,
        //        Nome = model.Nome
        //    });

        //    return Json("Beneficiário alterado com sucesso");
        //}

        //[HttpPost]
        //public JsonResult Excluir(string cpf)
        //{
        //    if (string.IsNullOrWhiteSpace(cpf))
        //    {
        //        Response.StatusCode = 400;
        //        return Json("CPF inválido.");
        //    }

        //    bo.Excluir(cpf);
        //    return Json("Beneficiário excluído com sucesso");
        //}
    }
}