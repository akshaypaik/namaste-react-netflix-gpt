import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../../../../utils/langConstants';

const GPTSearchBar = () => {

  const preferredLang = useSelector((store) => store.config.preferredLang);

  return (
    <div className='mx-auto left-0 right-0 bg-white w-6/12 rounded-lg p-4'>
        <h1 className='text-2xl pt-6 pl-8'>{lang[preferredLang].gptSearchBarHeader}</h1>
        <form className='p-6 flex gap-6'>
            <input type='text' className='py-2 px-4 w-10/12 border-2 rounded-lg' placeholder={lang[preferredLang].gptSearchBarPlaceholder} />
            <button className='py-2 px-4 bg-red-600 text-white rounded-lg cursor-pointer'>{lang[preferredLang].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar