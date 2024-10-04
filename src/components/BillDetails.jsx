export default function BillDetails({selected}){
    console.log(selected)
    return(
        <div className="mt-4">
            <h1 className="text-2xl font-extrabold">Bill Details</h1>

            <h4 className="font-semibold">Bill Details should be given by {selected.name}</h4>
            <ul className="mt-2">
            {
                selected.billDetails.map((bill)=>(
                    <li key={bill.id}>You need to pay {bill.price}$ to {bill.name}</li>
                ))
            }
            </ul>
            
        </div>
    )
}