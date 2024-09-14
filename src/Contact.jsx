export default function Contact(){
    return(
        <div className="bg-gray-900 text-white font-mono p-4 " id="contact">
            <div>
            <button className="p-2 m-2 text-black border-2 border-solid border-white text-center hover:text-white bg-white hover:bg-black rounded-lg block mx-auto">
                <a href="mailto:rev.irfanjames@proton.me" className="text-center block mx-auto">
                    Contact Us
                </a>
            </button><br />
            <h2 className="text-white text-center p-2">
                Pastor Irfan James
            </h2>
            </div><br />
            <button className="p-2 m-2 text-black border-2 border-solid border-white text-center hover:text-white bg-white hover:bg-black rounded-lg block mx-auto">
                <a onClick={()=>{alert("Contact Pastor James! He knows how to find me .")}} className="text-center block mx-auto">
                    Contact the Developer of Website
                </a>
            </button>
        </div>
    )
}