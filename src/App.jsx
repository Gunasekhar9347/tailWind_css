import './App.css'
import React, {useState} from 'react';

function App() {

  const [text, setText] = useState("Hello")

 function handleChange(e) {
  setText(e.target.value)
 }

 const [bgColor, setBgColor] = useState("white");

 const chgBack = () => {
  setBgColor(bgColor === "white" ? "lightblue" : "white");
 }

 const [count, setCount] = useState(0);

  return (
    <>
    <div style={{backgroundColor: bgColor}}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className=' sgs text-lg underline font-bold mt-4 text-emerald-500'>Tailwind Makes Styling easy!</p>
      <div className='bg-gray-200 p-4 m-4'>BackGround Color demo</div>
      <div className='bg-green-300 border border-green-600 p-4 rounded-lg m-4'>Border Demo</div>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <div className='bg-blue-200 p-4 text-red-700'>1</div>
        <div className='bg-blue-400 p-4'>2</div>
        <div className='bg-blue-600 p-4 text-white'>3</div>
      </div>
      <div className='flex justify-center items-center gap-4 p-4 bg-gray-300 mt-4 flex-col'>
        <p className='text-xl font-bold'>Text 1</p>
        <p className='text-xl font-bold'>Text 2</p>
        <p className='text-xl font-bold'>Text 3</p>
      </div>
      <table class=" conbox table-auto border w-full mt-5">
        <thead>
          <tr className='border bg-gray-400'>
            <th className='border py-3'>Song</th>
            <th className='border '>Artist</th>
            <th className='border '>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className=' hover:bg-red-300 border bg-gray-300'>
            <td className='border  hover:bg-amber-100 py-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className='border  hover:bg-amber-100'>Malcolm Lockyer</td>
            <td className='border  hover:bg-amber-100'>1961</td>
          </tr>
          <tr className=' hover:bg-red-300 bg-gray-200'>
            <td className='border  hover:bg-amber-100 py-2'>Witchy Woman</td>
            <td className='border  hover:bg-amber-100'>The Eagles</td>
            <td className='border  hover:bg-amber-100'>1972</td>
          </tr>
          <tr className=' hover:bg-red-300 bg-white'>
            <td className='border  hover:bg-amber-100 py-2'>Shining Star</td>
            <td className='border  hover:bg-amber-100 '>Earth, Wind, and Fire</td>
            <td className='border  hover:bg-amber-100 px-6'>1975</td>
          </tr>
        </tbody>
      </table>
      <button className='px-6 py-2 m-5 bg-blue-400 text-white rounded-lg hover:bg-green-200 hover:text-red-400 transition duration-1000 ease-in-out transform hover:scale-110'> Click Me </button>
      <div className='max-w-sm rounded-lg shadow-lg bg-lime-100 p-6'>
        <h2 className='text-2xl font-bold mb-4'> Tailwind card</h2>
        <p className='text-gray-500'>This is a simple card built with tailwind css</p>
        <button className='bg-blue-300 rounded-lg h-10 px-3 mt-4 hover:bg-orange-200'>Read more</button>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>
        <div className='bg-blue-400'>1</div>
        <div className='bg-blue-400'>2</div>
        <div className='bg-blue-400'>3</div>
        <div className='bg-blue-400'>4</div>
      </div>

      <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl m-4'>
        I scale on different Screens!
      </p>
      <p className='text-2xl text-red-700 sm:text-orange-300 md:text-pink-600 lg:text-green-700 xl:text-blue-700 m-4'>
        Resize the screen to see changes!
      </p>

      <div className='bg-[#43afbd] h-[100px] flex items-center justify-center w-[400px] border-green-600 p-4 rounded-lg m-4'>Custom Width, Height and Color</div>

    <div>
      <h3>Enter Your Name: <input className='border border-black' type={text} onChange={handleChange} /></h3>
      <p>Your Name: {text}</p>
      <button className='border border-black bg-red-300 rounded-lg w-[60px]' onClick={() => setText('Hello')}> Reset </button>
    </div>


    <div className='m-2 border border-amber-400 bg-green-200 rounded-lg'>
      <h1>Change the backGound Color : 
        <button onClick={chgBack} className='m-2 border-amber-300 bg-blue-200 rounded-lg'>
        Click to Change
        </button> 
      </h1>
     
    </div>
    

    <div>
      <h1>Count : {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button> &nbsp;
        <button onClick={() => setCount(count - 1)}>Decrement</button> &nbsp;
        <button onClick={() => setCount(0)}>Reset</button> 
      </div>
    </div>

    </div>
    </>
  );
};

export default App
