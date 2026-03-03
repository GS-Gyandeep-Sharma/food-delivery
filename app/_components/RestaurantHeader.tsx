import Link from 'next/link';
const RestaurantHeader = () => {
    return (
        <>
        <div className="header-wrapper">
            <div className="logo">
                <img style={{width:'100px'}} src="logo.jpg" alt="" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
        </>
    )
}
export default RestaurantHeader;