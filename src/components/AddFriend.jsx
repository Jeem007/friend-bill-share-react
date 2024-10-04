import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [nullName, setNullName] = useState(false);

    function addFriend(event) {
        event.preventDefault();
        if (name === '') {
            setNullName(true);
        } else {
            onAddFriend(name);
            setName('');
            setNullName(false);  
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-extrabold">Add Friend</h1>
            <form onSubmit={addFriend} className="flex flex-col">
                <div className="mt-2">
                    <label className="font-semibold px-1">Name</label>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            className="border-2 border-slate-600 rounded-l-full py-2 px-2 focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button>Add</Button>
                    </div>
                </div>
                {nullName && (
                    <h1 className="text text-red-500">Name is required *</h1>
                )}
            </form>
        </div>
    );
}
