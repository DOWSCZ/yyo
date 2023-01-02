using BlazorApp18.Zadání;

namespace BlazorApp18.Components;

public interface IPeriod : ISelecatble
{
    int Id { get; set; }
}

public class MonthlyPeriod : IPeriod
{
    public int Id { get; set; } = 1;
    public string Text { get; set; } = "Monthly";
    public string ImageUrl { get; set; }
}
public class YearlyPeriod : IPeriod
{
    public int Id { get; set; } = 2;
    public string Text { get; set; }= "Yearly";
    public string ImageUrl { get; set; }
}