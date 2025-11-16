import './index.css'

type SelectedItem = {
  title: string;
  price: number;
  quantity: number;
  subtotal: number;
};

type ShowDetailsProps = {
  selectedItems: SelectedItem[];
  totalCost: number;
  onClose: () => void;
};

function ShowDetails({selectedItems, totalCost, onClose}: ShowDetailsProps) {

    return <>
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-header'>
                <p className='close' onClick={onClose}>&times;</p>
            </div>
            <div className='modal-content'>
                <h2 className="detail-title">
                     Total Cost For The Event <br/>
                </h2>
                <h1 className='detail-total'>
                    ${totalCost}
                </h1>
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Cost</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedItems.length > 0 ? (
                            selectedItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.subtotal}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No items selected.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
}

export default ShowDetails