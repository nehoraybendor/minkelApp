import React from 'react'

const ErrorReload = () => {
    return (
        <div>
            <dialog id='errorReload' className='bg-neutral-focus  rounded-md'>
                <div className='px-10 flex flex-col h-[20vh] justify-around '>
                    <h1 className='text-error text-3xl capitalize'>shomthing gose worng reload the page!</h1>
                    <button className="btn btn-error" onClick={() => location.reload()}> reload</button>
                </div>
            </dialog>
        </div>
    )
}

export default ErrorReload