using MyAPI.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace MyAPI.Controllers
{
    public class ListingsController : ApiController
    {
        // GET: api/id/listings
        public IEnumerable<Listing> Get(string id)
        {
            var listings = new List<Listing>();
            Listing listing = new Listing
            {
                Name = "blank",
                Description = "this string",
                Id = 1,
                Views = 1,
                Price = 1000
            };
            listings.Add(listing);

            var otherListing = new Listing
            {
                Name = "pietie",
                Description = "Number that is a string",
                Id = 2,
                Views = 11,
                Price = 100000
            };
            listings.Add(otherListing);

            return listings;
        }
    }
}
