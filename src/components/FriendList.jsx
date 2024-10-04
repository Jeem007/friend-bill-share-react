export default function FriendList({friends,selectedFriend}) {
    function onFriendSelected(friend){
        selectedFriend(friend)
    }


    if(!friends.length){
        return(
            <div className="text-lg font-extrabold">
                No Friends Added Yet!
            </div>
        )

    }

    return (
        <div>
              <h1 className="text-2xl font-extrabold">Friends List</h1>

              <div className="flex flex-col gap-2 mt-4">
                {
                    friends.map((friend,index) => 
                    <div key={friend.id} onClick={()=>onFriendSelected(friend)}>
                        <h1 className=" font-semibold text-lg"> {index+1}. {friend.name}</h1>
                    </div>
                    )
                }
              </div>
        </div>
    )
}