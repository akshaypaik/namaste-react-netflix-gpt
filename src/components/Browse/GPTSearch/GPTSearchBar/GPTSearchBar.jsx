import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../../../../utils/langConstants';
import openAIClient from '../../../../utils/openai';

const GPTSearchBar = () => {

    const preferredLang = useSelector((store) => store.config.preferredLang);
    const userSearchString = useRef(null);

    const onGPTSearch = async () => {
        const searchString = userSearchString.current.value;

        // make an api call to openai and get movie results
        const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query 
        ${searchString}. only give me names of 5 movies, comma seperated like the example result given ahead. 
        Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

        const gptResults = await openAIClient.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-4o-mini',
        });
        console.log(gptResults.choices);

    }

    return (
        <div className='mx-auto left-0 right-0 bg-gray-900 w-6/12 rounded-lg p-4 text-white font-bold'>
            <h1 className='text-2xl pt-6 pl-8'>{lang[preferredLang].gptSearchBarHeader}</h1>
            <form onSubmit={(e) => e.preventDefault()} className='p-6 flex gap-6'>
                <input type='text'
                    className='py-2 px-4 w-10/12 border-2 rounded-lg'
                    placeholder={lang[preferredLang].gptSearchBarPlaceholder}
                    ref={userSearchString} />
                <button className='py-2 px-4 bg-red-600 text-white rounded-lg cursor-pointer'
                    onClick={onGPTSearch}>
                    {lang[preferredLang].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar