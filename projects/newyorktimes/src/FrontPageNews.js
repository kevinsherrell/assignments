import React from 'react';

const FrontPageNews = (props) => {
    // console.log(props)
    const frontPageMultiMedia = { ...props.multimedia[4] }
    // console.log(frontPageMultiMedia)
    return (
        <div className='frontPageNews'>
           
            <div>
                <img className="frontPageImage" src={frontPageMultiMedia.url} alt="" />
                <sub className='imageCopyright container'>{frontPageMultiMedia.copyright}</sub>
            </div>

            <div className='container'>
                <a href={props.url} target='blank'>
                    <h3 className='frontPageHeadline'>{props.title}</h3>
                    <p className='abstract'>{props.abstract}</p>
                    <sub>{props.byline}</sub>
                </a>
            </div>
        </div>
    );
}

export default FrontPageNews;