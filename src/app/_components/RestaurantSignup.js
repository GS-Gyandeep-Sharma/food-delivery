import { useRouter } from "next/navigation";
import { useState } from "react"

const RestaurantSignup = async () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");
    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const router = useRouter();
    const [error,setError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const handleSignup = async () => {
        if(!email || !password || !cpassword || !name || !city || !address || !phone){
            setError(true);
            return false;
        }
        else{
            setError(false);
        }
        if(password!=cpassword){
            return false;
            setPasswordError(true);
        }
        else{
            setPasswordError(false)
        }
        let response = await fetch('http://localhost:3000/api/restaurant',{
            method:"POST",
            body:JSON.stringify({email,password,name,city,address,phone})
        });
        response = await response.json();
        if(response.success){
            const {result} = response;
            delete result.password;
            localStorage.setItem("restaurantUser",JSON.stringify(result))
            router.push('/restaurant/dashboard')
        }
        else{
            alert("Some error occured!")
        }
    }
    return (
        <>
        <h3>SignUp</h3>
        <div>
            <div className="input-wrapper">
                <input className="input-field" value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Enter email ID" />
                { error && !email && <span className="input-error">Please enter Email</span>}
            </div>
            <div className="input-wrapper">
                <input className="input-field" value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter Password" />
                { error && !password && <span className="input-error">Please enter Password</span>}
            </div>
            <div className="input-wrapper">
                <input className="input-field" value={cpassword} onChange={(event) => setCpassword(event.target.value)} type="password" placeholder="Confirm Password" />
                { error && !cpassword && <span className="input-error">Please Confirm Password</span>}
                { passwordError && <span className="input-error">Canfirm Password not matched</span>}
            </div>
            <div className="input-wrapper">
                <input className="input-field" value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter Restaurant Name" />
                { error && !name && <span className="input-error">Please enter Name</span>}
                
            </div>
            <div className="input-wrapper">
                <input className="input-field" value={city} onChange={(event) => setCity(event.target.value)} type="text" placeholder="Enter Restaurant City" />
                { error && !city && <span className="input-error">Please enter City</span>}
            </div>
            <div className="input-wrapper">
                <input className="input-field" value={address} onChange={(event) => setAddress(event.target.value)} type="text" placeholder="Enter Full Address" />
                { error && !address && <span className="input-error">Please enter Address</span>}
            </div>
            <div className="input-wrapper">
                <input className="input-field" value={phone} onChange={(event) => setPhone(event.target.value)} type="text" placeholder="Enter Contact Number" />
                { error && !phone && <span className="input-error">Please enter Contact Number</span>}
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleSignup}>Signup</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantSignup