using System.ComponentModel.DataAnnotations;

namespace BlazorApp18.Zadání;

public interface ISelecatble
{
    int Id { get; set; }
    [Required]
    string Text { get; set; }
    [Required]
    string ImageUrl { get; set; }
}