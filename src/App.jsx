
import { useState } from 'react'
import './App.css'

function App() {
  const loveLine = [
    "झुटो प्रेम 🤡",
    "साचो प्रेम ❤️",
    "देखावटी माया 😔",
    "१००% माया",
    "दुबैको देखावटी माया 😕",
    "मुनामदनको जोडी ❤️",
    "कुकुर बिराला जस्तो जोडी 😂",
    "हुन सकेको प्रेम 🤪",
    "नाटकीय प्रेम 🙄",
    "असली प्रेम ❤️",
    "कमजोर प्रेम 😔",
    "झूटो माया 🤥",
    "आत्मीयता भरिएको प्रेम",
    "हजुरलाई चुनाले लगाउँदै 🤡"
  ]

  const [love, setLove] = useState("");
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [button, setButton] = useState(false);
  const [tryButton, setTryButton] = useState(true);
  const [buttonText, setButtonText] = useState("Analysis")

  const tryAgain = () => {

    setLove("");
    setButton(false);
    setTryButton(true);
    setButtonText("Analysis")
  }
  const generateLine = () => {
    if (value && value1 && !button) {
      let random = Math.floor(Math.random() * loveLine.length);
      let line = loveLine[random];
      setLove(line);
      setButton(true);
      setTryButton(false)
      setButtonText("Thank You !")
    }
  }


  return (
    <>
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="text-red-500">Maya ko Jotish</span> - Love Analysis
          </h1>
          <div className="space-y-4">
            <input
              className=" text-2xl text-center w-full p-3 border border-gray-300 rounded-lg text-white"
              placeholder="Enter Your Name" onChange={(e) => { setValue(e.target.value) }}
            />
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-red-500 mx-3 fill-red animate-ping "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <input
              className=" text-white w-full p-3 border border-gray-300 rounded-lg text-2xl text-center"
              placeholder="Enter Your Partner's Name" onChange={(e) => { setValue1(e.target.value) }}
            />
            <button
              className="w-30 p-3 bg-blue-500 text-white rounded-lg mt-4 text-2xl text-center"
              onClick={generateLine} disabled={button}
            >
              {buttonText}
            </button>
            <button
              className="w-8 p-0 bg-slate-500 font-semibold text-black rounded-lg ml-2 text-xl text-center"
              onClick={tryAgain}
              disabled={tryButton}
            >
              &#x21BA;
              A
            </button>

            <br />
            <p className='text-center text-3xl font-semibold text-black border-b-8 '>Result:</p>
            <p className="text-center p-8 rounded-lg text-white text-2xl font-semibold mt-4 bg-slate-600">{love}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
