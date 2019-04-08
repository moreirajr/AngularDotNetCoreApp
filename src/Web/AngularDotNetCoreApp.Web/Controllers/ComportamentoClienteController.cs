using AngularDotNetCoreApp.Web.Data;
using AngularDotNetCoreApp.Web.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;


namespace AngularDotNetCoreApp.Web.Controllers
{
	[Produces("application/json")]
	[Route("api/[controller]")]
	public class ComportamentoClienteController : Controller
	{
		private readonly ComportamentoClienteContext _comportamentoClienteContext;

		public ComportamentoClienteController(ComportamentoClienteContext comportamentoClienteContext)
		{
			_comportamentoClienteContext = comportamentoClienteContext;

			((DbContext)comportamentoClienteContext).ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> Listar()
		{
			var items = await _comportamentoClienteContext.ComportamentoClientes.ToListAsync();

			return Ok(items);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Salvar([FromBody] ComportamentoCliente comportamentoCliente)
		{
			if (comportamentoCliente == null)
				return BadRequest("Objeto nulo");

			var item = new ComportamentoCliente
			{
				Id = comportamentoCliente.Id,
				IP = comportamentoCliente.IP.Substring(0, 30),
				Browser = comportamentoCliente.Browser.Substring(0, 200),
				NomePagina = comportamentoCliente.NomePagina.Substring(0, 30),
				Parametros = comportamentoCliente.Parametros.Substring(0, 100)
			};

			_comportamentoClienteContext.ComportamentoClientes.Add(item);
			await _comportamentoClienteContext.SaveChangesAsync();

			return Ok();
		}
	}
}
