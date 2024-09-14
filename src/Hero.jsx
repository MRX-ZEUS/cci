import {ReactTyped} from 'react-typed';

export default function Hero(){
   let  mainStyles =  {
    backgroundImage: "url('cross_1.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize:"cover",
}
    return(
        <main className="text-white font-bold p-3 bg-gradient-to-r from-purple-900 to-blue-300" style={mainStyles}>
            <h1 className="text-3xl text-center mx-auto border-1 border-solid border-white p-2">
                The Christian Chronical International
            </h1>
            <div className="text-2xl text-center font-[Times new Roman]">
            <ReactTyped
            strings={[
                'Standing with the persecuted',

      'Fighting for freedom of faith',

      'United against oppression',

      'Voices for the voiceless',

      'Hope in the darkest times'
              ]}
              typeSpeed={60}
              backSpeed={50}
              loop
             />
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-10/12 mx-auto items-center">
            <img src="main_img.avif" className="border-2 border-solid border-white shadow-2xl rounded-xl inline-block mx-auto m-2" 
            />
            <div className="text-center">
            <ReactTyped
                        strings={[
                            'Join us in Supporting Christians in Pakistan',
                            'Be a Voice for the Silenced',
                            'Stand with the Brave',
                            'Empower the Faithful',
                            'Make a Difference Today'
                        ]}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                        className="text-gray-100 sm:p-4 md:text-2xl font-sans inline-block mx-auto sm:text-xl text-md p-0"
                    />
                    <br /><br />
            <button className="bg-blue-700 text-white p-3 rounded-lg hover:opacity-80 inline-block mx-auto" onClick={()=>{
                        alert("Thankyou for your kindness. We will add the option to support us financially soon .")
                    }}>
                Support Us
            </button>
            <br /><br />
            {/* <div className="text-white font-extrabold text-center text-2xl hidden md:inline-block">
            Christian persecution in Pakistan includes large-scale kidnappings of young believers who are thrust into forced marriages, dreadful violence directed at churches on feast days, and societal discrimination which keeps our brothers & sisters poor and vulnerable.
            </div> */}
            </div>
            </div>
        </main>
    )
}