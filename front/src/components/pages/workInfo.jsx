import React from 'react'

function WorkInfo({ profile }) {
    return (
        <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
                <div className="avatar flex justify-center">
                    <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profile.img} />
                    </div>
                </div>
                <h3 className="font-bold text-lg text-center mt-4">Name: {profile.name}</h3>
                <p className="px-[40px] py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iusto possimus fugit dicta suscipit consequuntur fugiat in velit placeat, totam culpa quod perferendis molestiae animi nisi? Blanditiis atque fugiat sunt.</p>
                <div className='flex justify-center'>
                    <button className="btn btn-outline btn-success mx-5">Success</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>

            </form>

        </dialog>
    )
}

export default WorkInfo