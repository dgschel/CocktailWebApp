using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CocktailWebApp.Models
{
    public partial class CocktailDatabaseContext : DbContext
    {
        public CocktailDatabaseContext()
        {
        }

        public CocktailDatabaseContext(DbContextOptions<CocktailDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cocktail> Cocktail { get; set; }
        public virtual DbSet<CocktailIngredient> CocktailIngredient { get; set; }
        public virtual DbSet<Ingredient> Ingredient { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cocktail>(entity =>
            {
                entity.Property(e => e.Instruction).IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Summary).HasMaxLength(255);
            });

            modelBuilder.Entity<CocktailIngredient>(entity =>
            {
                entity.ToTable("Cocktail_Ingredient");

                entity.Property(e => e.Measure).HasMaxLength(50);

                entity.HasOne(d => d.Cocktail)
                    .WithMany(p => p.CocktailIngredient)
                    .HasForeignKey(d => d.CocktailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Cocktail___Cockt__5CD6CB2B");

                entity.HasOne(d => d.Ingredient)
                    .WithMany(p => p.CocktailIngredient)
                    .HasForeignKey(d => d.IngredientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Cocktail___Ingre__5DCAEF64");
            });

            modelBuilder.Entity<Ingredient>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
