import React, { useEffect, useState } from 'react'

function Bai2_loading_error() {
    const url = "https://jsonplaceholder.typicode.com/users1"//url sai
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchApi(params) {
            try {
                var fetchApi = await fetch(url)
                if (!fetchApi.ok) {
                    throw new Error("Network..")
                }
                var rs = fetchApi.json().then((re) => {
                    console.log(re);
                    setData(re)
                })
            } catch (error) {
                console.log("dsds");
                setError(error.message)
            }
            finally {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }
        }
        fetchApi()

    }, [])
    return <>
        {
            loading ? (<p>Loading...</p>) : (
                error === null ? (
                    data.map((item) => {
                        return <div key={item.id}>
                            <ul style={{ listStyle: 'none' }}>
                                <li>{item.name}</li>
                                <li>{item.email}</li>
                            </ul>
                        </div>
                    })
                ) : (
                    <p>Error networking...</p>
                )
            )
        }
    </>
}

export default Bai2_loading_error