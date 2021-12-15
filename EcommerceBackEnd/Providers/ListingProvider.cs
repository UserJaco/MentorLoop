using EcommerceBackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EcommerceBackEnd.Providers
{
    public class ListingProvider
    {
        private readonly ListingDataLayer listingDataLyer;
        
        private string name;
        private string description;
        private decimal price;

        public ListingProvider()
        {
            listingDataLyer = new ListingDataLayer();
        }

        public int CreateListing(Listing listing)
        {
            
            return listingDataLyer.MakeListing(listing);
        }
    }
}