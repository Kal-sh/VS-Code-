using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication10.Models;
using System.Dynamic;

namespace WebApplication10.Controllers
{
    public class ProductController : Controller
    {
        private readonly EcommerceDatabaseContext _context;

        public ProductController(EcommerceDatabaseContext context)
        {
            _context = context;
        }

        public IActionResult Index(string search = "")
        {
            List<Product> products1 = _context.Products.ToList();
            List<Category> category1 = _context.Categories.ToList();
            var multitable = from p in products1
                             join c in category1 on p.CategoryId equals c.CategoryId
                             select
new Multiple { productdetails = p, Categorydetails = c };

            ViewBag.search = search;
            //   var products = _context.Products.ToList();
            // var products = _context.Products.Where(temp => temp.ProductId == 1 || temp.CategoryId==1).ToList();
            var products = _context.Products.Where(temp => temp.ProductName.Contains(search)).ToList();
            var p2 = _context.Categories.ToList();
            return View(multitable);
        }

        public IActionResult Details(long? id)
        {
            // var detailsProduct=_context.Products.Where(temp => temp.ProductId == id).FirstOrDefault();
            // var detailsProduct  = _context.Products.FirstOrDefault(temp => temp.ProductId == id);
            var detailsProduct = _context.Products.Find(id);
            return View(detailsProduct);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Edit(long? id)
        {
            var exsitingProduct = _context.Products.Find(id);
            return View(exsitingProduct);
        }

        [HttpPost]
        public IActionResult Edit(Product product)
        {
            _context.Products.Update(product);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Delete(long? id)
        {
            var exsitingProduct = _context.Products.Find(id);
            return View(exsitingProduct);
        }

        [HttpPost]
        public IActionResult Delete(long? id, Product product)
        {
            var exsitingProduct = _context.Products.Find(id);
            _context.Products.Remove(exsitingProduct);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}