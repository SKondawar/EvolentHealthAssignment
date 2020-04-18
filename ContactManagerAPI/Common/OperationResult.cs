using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class OperationResult<TResult>
    {
        public TResult Result { get; set; }
        public string Message { get; set; }
        public OperationResult()
        {

        }
        public OperationResult(TResult result, string message)
        {
            this.Result = result;
            this.Message = message;
        }
    }
}
