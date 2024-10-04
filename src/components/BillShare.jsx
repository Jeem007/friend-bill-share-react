import {useState} from "react";
import Button from "./Button";

export default function BillShare({friends, onBillPaid}) {

    const [bill,
        setBill] = useState(0);
    const [nullCheck,
        setNullCheck] = useState(false);
    const [friend,
        setFriend] = useState('');
    function submitBill(e) {
        e.preventDefault();
        const singleFriend = friends.find((fr) => + friend === + fr.id)
        const billDetails = {
            friendID: friend,
            name: singleFriend.name,
            bill: bill
        }
        onBillPaid(billDetails)
    }
    return (
        <div>
            <h1 className="text-2xl font-extrabold">Bill Share</h1>
            <form className="flex flex-col" onSubmit={submitBill}>
                <div className="mt-2">
                    <label className="font-semibold px-1">Who paid the bill</label>
                    <div className="flex flex-row">

                        <select
                            value={friend}
                            onChange={e => setFriend(e.target.value)}
                            className=" border-2 border-slate-600 rounded-full w-72 py-2 px-2 focus:outline-none">
                            <option value="">Select a friend</option>
                            {friends.map((friend) => <option value={friend.id} key={friend.id}>{friend.name}</option>)
}
                        </select>

                    </div>
                </div>
                <div className="mt-2">
                    <label className="font-semibold px-1">Bill Amount</label>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            className=" border-2 border-slate-600 rounded-l-full py-2 px-2 focus:outline-none"
                            value={bill}
                            onChange={(e) => setBill(e.target.value)}></input>
                        <Button>Bill</Button>
                    </div>
                </div>

            </form>

        </div>
    )
}