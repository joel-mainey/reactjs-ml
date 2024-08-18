import React from 'react'
import { LANGUAGES } from '../utils/presets'

export default function Translation(props) {
  const { textElement, toLanguage, translating, setToLanguage, generateTranslation } = props

  return (
    <>
      {(textElement && !translating) && (
        <p>{textElement}</p>
      )}
      {!translating && (<div className='flex flex-col gap-1 mb-4'>
        <p className='text-xs sm:text-sm font-medium text-gray-600 mr-auto'>To language</p>
        <div className='flex items-stretch gap-2 sm:gap-4'>
          <select value={toLanguage} className='flex-1 outline-none bg-white focus:outline-none border border-solid border-transparent hover:border-gray-600 text-gray-600 duration-200 p-2 rounded' onChange={(e) => setToLanguage(e.target.value)}>
            <option value={'Select language'}>Select language</option>
            {Object.entries(LANGUAGES).map(([key, value]) => {
              return (
                <option key={key} value={value}>{key}</option>
              )
            })}

          </select>
          <button onClick={generateTranslation} className='specialBtn px-3 py-2 rounded-lg text-gray-400 hover:text-gray-600 duration-200'>Translate</button>
        </div>
      </div>)}
    </>
  )
}