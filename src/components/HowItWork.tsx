import React from 'react'

import incomePng from "../assets/income.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
const HowItWork = () => {
  return (
    <>
   <div className='block text-center'>
  <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold my-10'>Как это работает</h1>
  <div className='lg:px-32'>
    <div className='flex justify-center flex-wrap'>
      <div className='md:w-1/2 lg:w-1/4 p-4 flex flex-row lg:flex-col items-center lg:items-start'>
        {/* Блок 1 */}
        <img className='w-16' src={icon1} alt="" />
        <div className='md:ml-4'>
          <p className='text-start font-bold'>Прочитай задание внимательно</p>
          <p className='text-start text-[#83898f]'>Думаю у тебя не займет это больше двух-трех минут</p>
        </div>
      </div>
      <div className='md:w-1/2 lg:w-1/4 p-4 flex flex-row lg:flex-col items-center lg:items-start'>
    {/* Блок 2 */}
    <img className='w-16' src={icon1} alt="" />
        <div className='md:ml-4'>
    <p className='text-start font-bold'>Изучи весь макет заранее</p>
    <p className='text-start text-[#83898f]'>Подумай как это будет работать на разных разрешениях и при скролле</p>
  </div>
  </div>

  <div className='md:w-1/2 lg:w-1/4 p-4 flex flex-row lg:flex-col items-center lg:items-start'>

    <img className='w-16' src={icon1} alt="" />
        <div className='md:ml-4'>
    <p className='text-start  font-bold'>Сделай хорошо</p>
    <p className='text-start text-[#83898f]'>Чтобы мы могли доверить тебе подобные задачи в будущем</p>
  </div>
  </div>

   <div className='md:w-1/2 lg:w-1/4 p-4 flex flex-row lg:flex-col items-center lg:items-start'>
    {/* Блок 2 */}
    <img className='w-16' src={icon1} alt="" />
        <div className='md:ml-4'>
    <p className='text-start  font-bold'>Получи предложение</p>
    <p className='text-start text-[#83898f]'>Ну тут все просто, не я придумал правила, но думаю так и будет</p>
  </div>
  </div>
</div>
</div>
</div>

<div className='flex justify-center flex-wrap-reverse'>
    <div className=' lg:w-1/2 md:w-1/2 md:p-4 lg:px-32'>
        <div className=''>
<h1 className='text-xl md:text-2xl lg:text-3xl font-semibold my-1 sm:my-5 text-center sm:text-left p-4'>Круто, ты дошел до третьего блока</h1>
<p className=' text-[#83898f] text-center sm:text-left p-4'>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 Р</p>
<p className=' text-[#83898f] mt-5 text-center sm:text-left p-4'>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах</p>
</div>
    </div>
<div className=" lg:w-1/2 md:w-1/2 ">
<img className='lg:max-w-none' src={incomePng} alt="" />
</div>
</div>
    
</>
  )
}


export default HowItWork
