using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ecommerce.Model
{
    public class User
    {
        //Default Constructor
        public User()
        {
            Name = "";
            Description = "";
            ContactNumber = "";
            Listing_ID = 0;
            Price = 0;
        }

        // Custom Constructor
        public User(string firstName, string description, string contactNumber)
        {
            Name = firstName;
            Description = description;
            ContactNumber = contactNumber;
        }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ContactNumber { get; set; }

        public int Listing_ID { get; set; }

        public int Price { get; set; }

    }
}