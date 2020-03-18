

namespace RenataApp.API.Helpers
{
    public class InventoryParams
 {

    private const int MaxPageSize = 50;

    public int PageNumber { get; set; } = 1;

    private int pageSize = 10;
    
    public int PageSize
    {
        get { return pageSize ;}
        set { pageSize = (value > MaxPageSize) ? MaxPageSize: value ;}
    }

    //  public int InventoryId { get; set; }
    //  public string StoreName { get; set; }
    //  public string  OrderBy { get; set; }
  


 }
}