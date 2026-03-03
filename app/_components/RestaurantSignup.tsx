const RestaurantSignup = () => {
    return (
        <>
        <h3>SignUp</h3>
        <div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter email ID" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="passowrd" placeholder="Enter Password" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="passowrd" placeholder="Confirm Password" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Restaurant Name" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Restaurant City" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Full Address" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Contact Number" />
            </div>
            <div className="input-wrapper">
                <button className="button">Signup</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantSignup