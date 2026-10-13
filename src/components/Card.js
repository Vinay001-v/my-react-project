import react from 'react'
export default function Card() {
    return (
        <div>      <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Card  cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is some important text.</p>
                <div className="container w-100">
                    <select className='m-2 h-100 w-100 bg-success rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 w-100 bg-success rounded'>
                        <option value="half">Half </option>
                        <option value="half">Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        Total price
                    </div>
                </div>
            </div>
        </div></div></div>
    );
}