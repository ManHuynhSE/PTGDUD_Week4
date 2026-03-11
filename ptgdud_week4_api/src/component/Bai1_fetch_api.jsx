import React, { useEffect, useState } from 'react'

function Bai1_fetch_api() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])

    useEffect(() => {
        var fetchApi = fetch(url);
        var re = fetchApi.then((response) => {
            return response.json()
        }).then((data) => {
            setData(data)
            console.log(data);
        })
    }, [])
    return <>
        {
            data.map((item) => {
                return <div key={item.id}>
                    <ul style={{ listStyle: 'none' }}>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                    </ul>
                </div>
            })
        }
    </>
}

export default Bai1_fetch_api