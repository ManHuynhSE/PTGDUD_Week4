import React, { useEffect, useState } from 'react'

function Bai3_dynamic_fetch() {
    const [user, setUser] = useState(null);
    const [idFind, setIdFind] = useState('1');
    const [error, setError] = useState(null)
    useEffect(() => {


        async function fetchId() {
            try {
                if (!fetchApi.ok) {
                    throw new Error("Network..")
                }
                var fetchApi = await fetch(`https://jsonplaceholder.typicode.com/users/${idFind}`)
                var rs = await fetchApi.json()
                console.log(rs);
                setUser(rs);
            }
            catch (error) {
                console.log("dsds");
                setError(error.message)
            }

        }

        fetchId()
    }, [idFind])
    return <>
        <div>
            <input value={idFind} type="text" onChange={(e) => setIdFind(e.target.value)} />
            {
                error === null ? (
                    user === null ? (
                        <p>No such user</p>
                    ) : (
                        <p>{user.name}</p>
                    )
                ) : (
                    <p>No such user</p>

                )
            }
        </div>
    </>
}

export default Bai3_dynamic_fetch