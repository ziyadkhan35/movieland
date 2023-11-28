import React from 'react'

const Footer = () => {
  return (
    <div className='flex'>
      <div className="sm:mx-10 xl:mx-32 mt-14 mb-8 px-8 py-10 rounded-md" style={{backgroundColor:'#12323F'}} id='footer'>
        <h2 className='uppercase text-land-cyan text-2xl font-bold mb-8'>Movieland</h2>
        <div className="flex flex-col text-gray-400 justify-around space-y-4">
          <p>Designed inspired by the website <span className='text-land-cyan cursor-pointer underline hover:text-land-cyan-hover'>https://www.fullhdfilmizlesene.pw/</span></p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati molestiae alias cum, quos accusamus temporibus repellat mollitia. Facilis voluptatum praesentium est sequi provident eaque saepe fuga quibusdam, quaerat hic voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati molestiae alias cum, quos accusamus temporibus repellat mollitia. Facilis voluptatum praesentium est sequi provident eaque saepe fuga quibusdam, quaerat hic voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati molestiae alias cum, quos accusamus temporibus repellat mollitia. Facilis voluptatum praesentium est sequi provident eaque saepe fuga quibusdam, quaerat hic voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati molestiae alias cum, quos accusamus temporibus repellat mollitia. Facilis voluptatum praesentium est sequi provident eaque saepe fuga quibusdam, quaerat hic voluptates.</p>
          <span className='text-land-cyan'>© 2005-2022 MovieLand.pw</span>
        </div>
      </div>
    </div>
  )
}

export default Footer