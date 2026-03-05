export default function Contact() {
    return (
        <section className="relative flex justify-center items-center c-space section-spacing" id='contact'>
            <div
                className='flex flex-col items-center justify-center max-w-md p-5 border border-white/10 rounded-2xl bg-primary'>
                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className='text-heading'>Let's talk</h2>
                    <p className='font-normal text-neutral-400'>Please fill out the form below if you’d like to review my portfolio and discuss potential projects.</p>
                </div>
                <form className='w-full'>
                    <div className='mb-5'>
                        <label htmlFor='name' className={'field-label'}>Full Name</label>
                        <input
                            id='name'
                            type='text'
                            name='name'
                            className='field-input field-input-focus'
                            placeholder='Full Name'
                            autoComplete='name'
                            required/>
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='email' className={'field-label'}>Email</label>
                        <input
                            id='email'
                            type='email'
                            name='email'
                            className='field-input field-input-focus'
                            placeholder='Full.Name@email.com'
                            autoComplete='email'
                            required/>
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='message' className={'field-label'}>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            className='field-input field-input-focus'
                            placeholder='Message'
                            autoComplete='off'
                            required/>
                    </div>
                    <button className='w-full'></button>
                </form>
            </div>

        </section>
    )
}