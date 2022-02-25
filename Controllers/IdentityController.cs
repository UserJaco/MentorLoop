using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyAPI.Controllers
{
    public class IdentityController : ApiController
    {
        // GET: api/Identity
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Identity/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Identity
        public bool Post([FromBody] JObject value)
        {
            if(value["username"].ToString().ToLower() == "jaco" && value["password"].ToString() == "password")
            {
                return true;
            }
            else if (value["username"].ToString().ToLower() == "claudine" && value["password"].ToString() == "secret")
            {
                return true;
            }
            return false;
        }

        // PUT: api/Identity/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Identity/5
        public void Delete(int id)
        {
        }

        [HttpPost]
        [Route("api/Identity/LogIn")]
        [ActionName("LogIn")]
        [Description("Log In the user")]

        public bool LogIn(string userName)
        {
            // Listing listing = new Listing(name, description, price);
            // 
            // 
            // return listingProvider.CreateListing(listing);
            return true;
        }
    }
}
