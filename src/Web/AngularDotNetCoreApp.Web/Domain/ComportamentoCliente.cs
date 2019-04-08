using System;


namespace AngularDotNetCoreApp.Web.Domain
{
	public class ComportamentoCliente
	{
		public int Id { get; set; }

		public string Browser { get; set; }

		public string IP { get; set; }

		public string NomePagina { get; set; }

		public string Parametros { get; set; }
	}
}