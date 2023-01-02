using BlazorApp18.Zadání;

namespace BlazorApp18.Classes;

public class DropDownItem : ISelecatble
{
    public int Id { get; set; }
    public string? Text { get; set; }
    public string ImageUrl { get; set; }

}