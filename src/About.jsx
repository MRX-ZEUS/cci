export default function About() {
    return (
        <div className="p-2 bg-gray-900" id="about">
            <h1 className="text-2xl p-2 m-2 text-center text-white font-serif">
                About
            </h1>
            <div className="border-2 border-solid border-white w-10/12 rounded-xl grid grid-cols-1 md:grid-cols-2 mx-auto p-2 gap-1 items-center">
                <img 
                    src="pastor_img.jpg" 
                    alt="Pastor Irfan James" 
                    className="border border-solid border-white rounded-2xl w-10/12 mx-auto"
                />
                <div className="text-white text-center">
                    <h1 className="text-2xl text-green-600 font-extrabold font-mono p-2">
                        Pastor Irfan James
                    </h1>
                    <h3 className="text-xl font-serif w-10/12 mx-auto p-2">
                        Pastor Irfan James is a devoted Christian pastor in Pakistan who tirelessly works to support and protect those who are persecuted for their faith. <br />
                        His relentless efforts provide hope and help to those in need. <br />
                        Let his dedication inspire you.
                    </h3>
                </div>
            </div>
            <div className="border-2 border-solid border-white rounded-lg mx-auto w-10/12 text-center p-2">
                <iframe 
                    height="315" 
                    src="https://www.youtube.com/embed/6Fz5C5jQyKc?si=8AdkcFel5lSzSZQR" 
                    title="YouTube video player" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                    className="border-2 border-solid border-white rounded-lg mx-auto block w-11/12 sm:w-8/12 md:w-6/12 p-2 m-2"
                ></iframe>
            </div>
        </div>
    );
}