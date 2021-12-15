using System.Configuration;
using System.Data.SqlClient;
using Ecommerce.Model;

namespace EcommerceBackEnd.Model
{
    public class ListingDataLayer
    {
        public ListingDataLayer()
        {
            connectionString = ConfigurationManager.ConnectionStrings["BuyAndSell"].ToString();
        }
        public string connectionString { get; set; }
        public User GetUserByID(int id)
        {
            SqlDataReader sqlDataReader;
            User customer = new User();
            using (var con = new SqlConnection(connectionString))
            {

                SqlCommand command = new SqlCommand("[dbo].[GetListingByID]", con);
                command.CommandType = System.Data.CommandType.StoredProcedure;
                SqlParameter sqlParameter = new SqlParameter("@Listing_ID", id);
                command.Parameters.Add(sqlParameter);
                command.Connection.Open();
                sqlDataReader = command.ExecuteReader();

                while (sqlDataReader.Read())
                {
                    customer.Listing_ID = sqlDataReader.GetInt32(0);
                    customer.Name = sqlDataReader.GetString(1);
                    customer.Description = sqlDataReader.GetString(2);
                    customer.Price = sqlDataReader.GetInt32(3);
                    customer.ContactNumber = sqlDataReader.GetString(4);

                }
                command.Connection.Close();

            }
            return customer;
        }

        public int MakeListing(Listing listing)
        {
            SqlDataReader sqlDataReader;
            int listing_ID = -1;
            using (var con = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand("[dbo].[CreateListing]", con);
                command.Connection.Open();
                command.CommandType = System.Data.CommandType.StoredProcedure;

                command.Parameters.AddWithValue("@Description", listing.Description);
                command.Parameters.AddWithValue("@Name", listing.Name);
                command.Parameters.AddWithValue("@Price", listing.Price);
                sqlDataReader = command.ExecuteReader();

                while (sqlDataReader.Read())
                {
                    listing_ID = sqlDataReader.GetInt32(0);
                }
                command.Connection.Close();

            }
            return listing_ID;
        }
    }
}