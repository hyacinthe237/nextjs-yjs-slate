

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
            <button className="btn" onClick={() => createDocument()}>Create document</button>
        </div>
    );
}