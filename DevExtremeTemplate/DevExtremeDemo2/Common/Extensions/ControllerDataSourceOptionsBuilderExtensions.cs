using DevExtreme.AspNet.Mvc.Builders;
using DevExtreme.AspNet.Mvc.Builders.DataSources;
using Microsoft.AspNetCore.Mvc;

namespace DevExtremeDemo2.Common.Extensions;

public static class ControllerDataSourceOptionsBuilderExtensions
{
    public static ControllerDataSourceOptionsBuilder Controller<T>(this ControllerDataSourceOptionsBuilder me)
        where T : Controller
    {
        var name = typeof(T).Name;
        name = name.Remove(name.LastIndexOf("Controller", StringComparison.Ordinal));
        me.Controller(name);
        return me;
    }
}