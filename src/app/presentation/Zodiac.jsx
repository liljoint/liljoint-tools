'use client'
import zodiacList from '@/resources/zodiacList'
import typeReading from '@/resources/typeReading'
import { useState } from 'react'
import randomFromArray from '@/app/helpers/randomFromArray'
const Zodiac = () => {
  const [selectedZodiac, setSelectedZodiac] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const onClick = () => {
    setSelectedZodiac(zodiacList[randomFromArray(zodiacList.length)])
    setSelectedType(typeReading[randomFromArray(typeReading.length)])
  }
  return (
    <div className='m-5 p-5'>
      <h1>Zodiac Helper</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center gap-2'>
          <span>Para seleccionar aleatoriamente presione </span>
          <button
            onClick={onClick}
            className='rounded-xl bg-purple-600 p-2 text-white'
          >
            AQUI
          </button>
        </div>
        {selectedType !== '' && selectedZodiac !== '' ? (
          <div className='flex flex-col gap-5'>
            <div>
              <h2>Signo Zodiacal</h2>
              <div>{selectedZodiac}</div>
            </div>
            <div>
              <h2>Tema</h2>
              <div>{selectedType}</div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default Zodiac
