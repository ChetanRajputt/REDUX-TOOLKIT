import React, { useState } from 'react'
import { FaEdit, FaShoppingCart, FaUser, FaUserTie, FaSave } from "react-icons/fa";
import { MdOutlinePayment, MdCancel } from "react-icons/md";

const UserInfo = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Master');
  const [lastName, setLastName] = useState('Man');
  const [email, setEmail] = useState('masterman@gmail.com');
  const [mobile, setMobile] = useState('7692943969');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <section >
      <div className='w-full lg:max-w-[1240px] lg:h-screen mx-auto gap-8 flex lg:flex-row flex-col items-center justify-center'>
        {/* first  */}
        <section className=' shadow-2xl w-full lg:w-1/3 h-full flex items-center flex-col'>
          <div className='px-2 p-1 font-bold  bg-orange-500 w-[200px] my-8 h-[200px] rounded-full flex items-center text-white justify-center shadow-2xl  text-center text-8xl'>{firstName.substring(0,1).toUpperCase()}</div>
          <div className='text-center text-black'>
            <h2 className='text-2xl'>Hello,</h2>
            <h1 className='text-3xl font-bold'>{firstName}{" "}{lastName}</h1>
          </div>

          <div className='lg:mt-5 mt-8'>
            <ul className='lg:block flex flex-wrap justify-center gap-3'>
              <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'><FaShoppingCart color={"orange"} />My Orders</li>
              <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>< FaUser color={"orange"} />Account Settings</li>
              <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>< MdOutlinePayment color={"orange"} />Payments</li>
              <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'><FaUserTie color={"orange"} />My Stuff</li>
            </ul>
          </div>

        </section>

        {/* second */}
        <section className=' shadow-2xl  w-full lg:h-full flex flex-col items-center '>
          <div className='lg:mt-8'>
            <h3 className='text-3xl lg:text-4xl font-bold font-mono text-orange-500'>Personal Information</h3>
          </div>



          <div className="flex  flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
            <div className="flex-grow">
              <h1 className="font-bold text-lg lg:text-xl ">First name</h1>
              {isEditing ? (
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
                  type="text"
                />
              ) : (
                <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
                  {firstName}
                </div>
              )}
            </div>
          </div>


          <div className="flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
            <div className="flex-grow">
              <h1 className="font-bold text-lg lg:text-xl">Last name</h1>
              {isEditing ? (
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
                  type="text"
                />
              ) : (
                <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
                  {lastName}
                </div>
              )}
            </div>
          </div>


          <div className="flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
            <div className="flex-grow">
              <h1 className="font-bold text-lg lg:text-xl">Email</h1>
              {isEditing ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
                  type="text"
                />
              ) : (
                <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
                  {email}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
            <div className="flex-grow">
              <h1 className="font-bold text-lg lg:text-xl">Mobile No</h1>
              {isEditing ? (
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
                  type="text"
                />
              ) : (
                <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
                  {mobile}
                </div>
              )}
            </div>
          </div>

          {isEditing ? (
            <div className='flex items-center mt-6 w-full gap-4 justify-around'>
              <button
                onClick={handleSaveClick}
                className="text-xl px-3 p-2 rounded-md w-[50%] text-white  mt-4 flex items-center gap-3 justify-center  lg:mt-0 mx-2 bg-orange-600 hover:bg-orange-800"
              >
                <FaSave /> Save
              </button>
              <button
                onClick={handleCancelClick}
                className="text-xl px-3 p-2 rounded-md w-[50%] text-white flex items-center justify-center gap-3  mt-4  lg:mt-0 mx-2 bg-red-600 hover:bg-red-400"
              >
                <MdCancel />Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="text-xl px-3 p-2 rounded-md w-[80%] text-white  mt-4 flex items-center gap-3 justify-center   mx-2 bg-orange-600 hover:bg-orange-800"
            >
              <FaEdit /> Edit
            </button>
          )}

        </section>
      </div>
    </section>
  )
}

export default UserInfo


