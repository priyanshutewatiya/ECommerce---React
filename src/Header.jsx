export default function Header({ cartCount, search, setSearch })
{
    return(

    <div className="header">

        <img
        src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg"
        alt="Logo"
        />

        {/* Search Bar */}
        <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="search"
        />

        <p>Cart: {cartCount}</p>

    </div>

    );
}