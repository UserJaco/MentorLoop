using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyAPI.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Views { get; set; }
    }
}