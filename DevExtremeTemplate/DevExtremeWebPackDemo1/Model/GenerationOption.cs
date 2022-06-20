using FluentValidation;

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

public class GenerationOptionValidator : AbstractValidator<GenerationOption>
{
    public GenerationOptionValidator()
    {
        RuleFor(x => x.Name).NotEmpty();
        RuleFor(x => x.DefectCount).GreaterThan(0);
        RuleFor(x => x.MinTime)
            .GreaterThan(new DateTime(2020, 1, 1))
            .WithMessage("어우, 2020년 이전 날짜는 안되요.");
        RuleFor(x => x.MaxTime).GreaterThan(x => x.MinTime);
        RuleFor(x => x.MaskRatio).GreaterThanOrEqualTo(0.0);
    }
}