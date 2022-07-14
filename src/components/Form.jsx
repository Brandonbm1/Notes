import React from 'react'

const Form = ({handleChange}) => {
    return (
        <div className='form'>
            <form className="form__container">
                <div className="form__title">
                    <label htmlFor="title" className='form__title-label'>Titulo</label>
                    <input
                        type="text"
                        id="title"
                        className='form__title-text'
                        placeholder='Title'
                        name="title"
                        onChange={handleChange}
                    />
                </div>
                <div className="form__comment">
                    <label htmlFor="comment" className='form__comment-label'>Comentario</label>
                    <textarea
                        id="comment"
                        name="comment"
                        className='form__comment-text'
                        placeholder='Write a comment for this note.'
                        onChange={handleChange}
                    />
                </div>
                
            </form>

        </div>
    )
}

export default Form