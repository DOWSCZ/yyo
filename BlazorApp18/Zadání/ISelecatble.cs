using System.ComponentModel.DataAnnotations;

namespace BlazorApp18.Zadání;

public interface ISelecatble
{
    [Required]
    string Text { get; set; }
    [Required]
    string ImageUrl { get; set; }
}