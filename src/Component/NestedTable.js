
import React from 'react'
import { Table } from 'react-bootstrap'
function App() {
    const users = [
        {
            name: 'rahul', email: 'anil@test.com', address: [
                { hn: '101', city: 'Noida', country: 'India' },
                { hn: '10', city: 'Gurgaon', country: 'India' },
                { hn: '23', city: 'Noida', country: 'India' },
                { hn: '45', city: 'Delhi', country: 'India' },
            ]
        },
        {
            name: 'Burce', email: 'bruce@test.com', address: [
                { hn: '101', city: 'Noida', country: 'India' },
                { hn: '10', city: 'Gurgaon', country: 'India' },
                { hn: '23', city: 'Noida', country: 'India' },
                { hn: '45', city: 'Delhi', country: 'India' },
            ]
        },
        {
            name: 'Peter', email: 'peter@test.com', address: [
                { hn: '101', city: 'Noida', country: 'India' },
                { hn: '10', city: 'Gurgaon', country: 'India' },
                { hn: '23', city: 'Noida', country: 'India' },
                { hn: '45', city: 'Delhi', country: 'India' },
            ]
        },
        {
            name: 'Sam', email: 'sam@test.com', address: [
                { hn: '101', city: 'Noida', country: 'India' },
                { hn: '10', city: 'Gurgaon', country: 'India' },
                { hn: '23', city: 'Noida', country: 'India' },
                { hn: '45', city: 'Delhi', country: 'India' },
            ]
        },
    ]
    return (
        <>
            <div className="App">
                <h1>List with Nested Array</h1>
                <Table variant="light" striped border hover  >
                    <tbody>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address
                                <Table variant='dark' striped border hover >
                                    <tbody>
                                        <tr>
                                            <th>HN</th>
                                            <th>City</th>
                                            <th>country</th>
                                        </tr>
                                    </tbody>
                                </Table>

                            </th>
                        </tr>
                        {
                            users.map((item, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Table variant='dark' striped border hover >
                                            <tbody>
                                                {
                                                    item.address.map((data, ind) =>

                                                        <tr key={ind}>
                                                            <td>{data.hn}</td>
                                                            <td>{data.city}</td>
                                                            <td>{data.country}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>




                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>
        </>

    );
}

export default App;