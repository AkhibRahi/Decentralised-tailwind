import React from 'react'

function AboutCards(props) {
    return (
        <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
            <div>
                <div className='bg-[var(--primary-blue)] inline-flex p-3 rounded-full '>
                    {props.icons}
                </div>
                <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
                <p>{props.text}
                </p>
            </div>
        </div>
    )
}

export default AboutCards