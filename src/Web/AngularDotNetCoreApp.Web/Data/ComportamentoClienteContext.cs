using AngularDotNetCoreApp.Web.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage;


namespace AngularDotNetCoreApp.Web.Data
{
	public class ComportamentoClienteContext : DbContext
	{
		public ComportamentoClienteContext(DbContextOptions options) : base(options)
		{
			InitializeDatabase();
		}

		private void InitializeDatabase()
		{
			if (!(Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator).Exists())
			{
				Database.EnsureCreated();
			}
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<ComportamentoCliente>(ConfigureComportamentoCliente);
		}

		private void ConfigureComportamentoCliente(EntityTypeBuilder<ComportamentoCliente> builder)
		{
			builder.ToTable("ComportamentoCliente");

			builder.Property(c => c.Id)
				.ForSqlServerUseSequenceHiLo("comportamento_cliente_hilo")
				.IsRequired();

			builder.Property(c => c.IP)
				.IsRequired()
				.HasMaxLength(30);

			builder.Property(c => c.NomePagina)
				.IsRequired()
				.HasMaxLength(30);

			builder.Property(c => c.Browser)
				.IsRequired()
				.HasMaxLength(200);

			builder.Property(c => c.Parametros)
				.IsRequired()
				.HasMaxLength(100);
		}

		public DbSet<ComportamentoCliente> ComportamentoClientes { get; set; }
	}
}
