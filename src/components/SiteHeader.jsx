

function Header() {
    return (
        <header className="w-full fixed flex justify-between place-items-center z-50 border-b border-b-[#F3F4F6] px-12 py-6">
            <div className="flex place-items-center">
                <img src="/logo.png" alt="Logo icon" />
                <h1 className="text-3xl font-black">Right<span className="text-[#16A34A]">PICK</span></h1>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            <button className="bg-[#F3F4F6] border border-[#E5E7EB] shadow shadow-[#0000000D] px-6 py-1.5 rounded-xl">Free Demo</button>
        </header>
    );
}

export default Header;