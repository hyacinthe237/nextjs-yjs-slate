const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

export function Buttons () {
    const emptyNode = {
        children: [{ text: "" }],
      };

    // create a document
    const createDocument = () => { 
        let data = {
            "liveblocksType": "LiveObject",
            "data": emptyNode
        }
        fetch(`/api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk_dev_YUbWWVSYbyKWXi8yTQ0ThyL9DM7AXvaColNiduYUW9MNCnklUs-4fdd_s57-Zaky'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received', res)
            if (res.status === 200) {
                console.log('Response succeeded!')
            }
        })
    }
    return (
        <div className="p-10">
            <button 
                className="btn" 
                onClick={() => createDocument()}
            >Create document</button>
        </div>
    );
}