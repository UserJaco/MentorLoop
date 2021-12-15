using EcommerceBackEnd.Model;
using EcommerceBackEnd.Providers;
using System.ComponentModel;
using System.Web.Http;

namespace EcommerceBackEnd.Controllers
{
    public class ListingController
    {
        private ListingProvider listingProvider { get; set; }
        public ListingController()
        {
            listingProvider = new ListingProvider();
        }

        [HttpPost]
        [Route("api/Listing/CreateListing")]
        [ActionName("CreateListing")]
        [Description("Create a Listing")]

        public int CreateListing(string listingJson)
        {
            // Listing listing = new Listing(name, description, price);
            // 
            // 
            // return listingProvider.CreateListing(listing);
            return 0;
        }

        [HttpGet]
        [Route("api/listings")]
        [ActionName("Listings")]
        [Description("Get a Listing")]

        public Listing[] GetListings()
        {
            return new Listing[0];
        }
        // hello there

    }
}