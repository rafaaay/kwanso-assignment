import React from 'react';

function StoryCard(props) {
    const title = props.title;
    const author = props.author;
    const date = props.date;
    const topic = props.topic

    return (
        <article className='story'>
            <div className='story__img'>
                <img src='https://picsum.photos/id/26/200' alt='story image' />
            </div>

            <div className='story__info'>
                <h6 className='story__topic'>{topic}</h6>
                <h3 className='story__title'>{title}</h3>

                <div className='author'>
                    <div className='author__avatar'>
                        <img src='https://picsum.photos/id/1/200' alt='author image' />
                    </div>
                    <p className='author__name'>{author}</p>
                    <p className='story__date'><time datetime="2022-08-20 20:00">{date}</time></p>
                </div>
            </div>
        </article>
    );
}

export default StoryCard;