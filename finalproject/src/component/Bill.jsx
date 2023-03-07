import Form from "./Form";
import "./Bill.css"

function BillItem() {
    return (
        <div className="Item">
            <div>
                <div>Sushi</div>
                <div>Money</div>
                <div>x Amount</div>
            </div>
            <div>
                <button> - </button>
                <button> + </button>
            </div>
        </div>
    );
}

function Bill() {
    return (
        <div className="bill">
            <BillItem />
            <div className="footerBill">
                <div>
                    <div>Total Amount</div>
                    <div>$ Total Money</div>
                </div>
                <div className="billButton">
                    <button>Close</button>
                    <button>Order</button>
                </div>
            </div>
            <Form />
        </div>
    );
}
export default Bill