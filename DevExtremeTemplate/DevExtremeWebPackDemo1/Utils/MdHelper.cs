using Markdig;

namespace DevExtremeWebPackDemo1.Utils;


public static class MdHelper
{
    public static string Parse(string markdown)
    {
        var pipeline = new MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            .Build();
        return Markdown.ToHtml(markdown, pipeline);
    }
}