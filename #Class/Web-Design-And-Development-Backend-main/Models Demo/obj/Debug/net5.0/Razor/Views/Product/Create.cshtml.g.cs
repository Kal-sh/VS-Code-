#pragma checksum "C:\Users\Jafar\Desktop\Layout Demos\Views\Product\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b0eaa6af2136e6a9cc4f75017d3438c48f8d67d7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Product_Create), @"mvc.1.0.view", @"/Views/Product/Create.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b0eaa6af2136e6a9cc4f75017d3438c48f8d67d7", @"/Views/Product/Create.cshtml")]
    public class Views_Product_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\Jafar\Desktop\Layout Demos\Views\Product\Create.cshtml"
  
    ViewData["Title"] = "Create";
    Layout = "~/Views/Shared/_Layout1.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""col-6"">
    <form action=""/Product/Create"" method=""post"">
        <div class=""form-group"">
            <label>Product ID</label>
            <input type=""text"" class=""form-control"" id=""txtProductId"" name=""Id"" />
        </div>
        <div class=""form-group"">
            <label>Product Name</label>
            <input type=""text"" class=""form-control"" id=""txtProductId"" name=""ProductName"" />
        </div>
        <div class=""form-group"">
            <label>Price</label>
            <input type=""text"" class=""form-control"" id=""txtProductId"" name=""Price"" />
        </div>
        <button>Submit</button>
    </form>
</div>



");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
