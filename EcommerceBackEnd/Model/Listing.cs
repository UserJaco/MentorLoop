using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EcommerceBackEnd.Model
{
    public class Listing
    {
        public Listing()
        {

        }
        public Listing(string name, string description, decimal price)
        {
            Name = name;
            Description = description;
            Price = price;

        }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int ListingID { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}