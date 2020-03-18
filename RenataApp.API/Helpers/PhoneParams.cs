using System;

namespace RenataApp.API.Helpers
{
    public class PhoneParams
 {

    private const int MaxPageSize = 50;

    public int PageNumber { get; set; } = 1;

    private int pageSize = 10;
    
    public int PageSize
    {
        get { return pageSize ;}
        set { pageSize = (value > MaxPageSize) ? MaxPageSize: value ;}
    }

    //  public int PhoneId { get; set; }
    // public int MyProperty { get; set; }
    //  public string SupplierName { get; set; }
    //  public string  OrderBy { get; set; }
  


 }
}