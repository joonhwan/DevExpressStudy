namespace DevExtremeWebPackDemo1.Model;

public enum GenerationType
{
    Iris,
    Midews,
    Daq,
    Adc,
}

public class GenerationOption
{
    public string? Name { get; set; }
    public GenerationType Type { get; set; }
    public int DefectCount { get; set; }
    public DateTime MinTime { get; set; }
    public DateTime MaxTime { get; set; }
    public double MaskRatio { get; set; }

    public override string ToString()
    {
        return $"{nameof(Name)}: {Name}, {nameof(Type)}: {Type}, {nameof(DefectCount)}: {DefectCount}, {nameof(MinTime)}: {MinTime}, {nameof(MaxTime)}: {MaxTime}, {nameof(MaskRatio)}: {MaskRatio}";
    }
}