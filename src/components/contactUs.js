

export default function ContactUs({classname}) {
  return (
    // <div className=' flex justify-center items-center flex-col mb-10'>
        // <h1 className='text-red-700 mt-10 mb-5'>MESSAGE US</h1>

        <form className={classname}>
          <h1 className='text-blue-950 mt-10 mb-5'><strong>Message Us</strong></h1>
          <label className=' text-blue-950'>Name:</label> <input className='w-full rounded-md shadow-sm mb-5'  type="text" value="" name="name" required />
          <label className=' text-blue-950'>Tel:</label> <input className='w-full rounded-md shadow-sm mb-5'  type="text" value="" name="tel" required />
          <label className=' text-blue-950'>Email:</label> <input className='w-full rounded-md shadow-sm mb-5'   type="email" value="" name="email" required />
          <label className=' text-blue-950'>Your Organisation:</label> <input className='w-full rounded-md shadow-sm mb-5'   type="text" value="" name="org" required />
          <label className=' text-blue-950'>Your Message:</label> <textarea className='w-full resize-y rounded-md shadow-sm mb-5 h-40'  ></textarea>

          <div className=" w-32 h-10 bg-blue-950 rounded-sm shadow-md my-10 mx-15 text-white flex justify-center items-center">
                
                <label><button type="submit" className='text-white'>Send Message</button></label>
            </div>
        
        </form>
    // </div>
  )
}
