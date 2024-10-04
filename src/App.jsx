import {useState} from 'react';
import './App.css'
import AddFriend from './components/AddFriend';
import BillShare from './components/BillShare';
import FriendList from './components/FriendList';
import BillDetails from './components/BillDetails';

function App() {
    const [friendList,
        setFriendList] = useState([]);


    const [selectedFriend, setSelectedFriend] = useState('');

    function addFriend(name){
      setFriendList(friendList => [...friendList, {id:Date.now(), name:name, billDetails:[]}])
    }  

    function onBillPaid(billDetails) {
        setFriendList((friendList) => calculateBill(friendList, billDetails));
    }
    
    function calculateBill(friendList, billDetails) {
        const amountPrice = Math.round(+billDetails.bill / friendList.length);
        const friendDetails = [];
    
        for (let friend of friendList) {
          const singleFriend = { ...friend };
          if (singleFriend.id === +billDetails.friendID) {
            friendDetails.push(singleFriend);
            continue;
          }
    
          const billings = [];
          let found = false;
    
          if (singleFriend.billDetails.length) {
            for (var billing of singleFriend.billDetails) {
              if (billing.id === billDetails.friendID) {
                found = true;
                billings.push({ ...billing, ...{ price: billing.price + amountPrice } });
              } else {
                billings.push(billing);
              }
            }
          }
    
          if (!found) {
            billings.push({ id: billDetails.friendID, name: billDetails.name, price: +amountPrice });
          }
    
          singleFriend['billDetails'] = billings;
          friendDetails.push(singleFriend);
        }
    
        return friendDetails;
    }

    function onFriendSelected(friend){
        setSelectedFriend(friend)
    }

    return (
        <div className='mx-16 my-16'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col  w-full lg:w-1/2 gap-5'>
                    <AddFriend onAddFriend={addFriend}/>
                    <FriendList friends={friendList} selectedFriend={onFriendSelected}/>
                </div>
                <div className='lg:w-full lg:w-1/2'>
                    <BillShare friends={friendList} onBillPaid={onBillPaid} />
                    {selectedFriend && <BillDetails selected={selectedFriend}/>}
                </div>
            </div>
        </div>

    )
}

export default App
