export default function Header(){
    return(
        <nav className="bg-[#202428] p-2 border-1 border-gray-500 border-solid">
            <div className="flex justify-evenly p-2 text-gray-500">
                <div className="hover:text-white transition-all cursor-pointer">
                    <a href="/">
                    Home
                    </a>
                </div>
                <div className="hover:text-white transition-all cursor-pointer">
                <a href="#about">
                    About
                    </a>
                </div>
                <div className="hover:text-white transition-all cursor-pointer">
                    <a href="#stories">
                        Stories
                    </a>
                </div>
                <div className="hover:text-white transition-all cursor-pointer">
                    <a onClick={()=>{
                        alert("Thankyou for your kindness. We will add the option to support us financially soon .")
                    }}>
                        Support
                    </a>
                </div>
                <div className="hover:text-white transition-all cursor-pointer">
                    <a href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}