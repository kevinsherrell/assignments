import React from 'react';

const Articles = (props) => {
    const bgImage = `url('${props.multimedia.length && [props.web_url.slice(0, 24), props.multimedia[0].url].join('')}')`

    // // const hide = {
    // //     display: 'none'
    // // }
    // console.log(props.multimedia)
    // console.log()
    //{props.multimedia.length ? "articleBackground" : "hide"} 
    return (
        <div>
            {/* <img src={props.multimedia.length && [props.web_url.slice(0, 24), props.multimedia[0].url].join('')} alt="" /> */}
            <h2 className='headline'>{props.headline.main}</h2>
            <div style={{ backgroundImage: props.multimedia.length && bgImage, height: !props.multimedia.length && `auto` }} className='articleBackground'>
                <div className='leadParagraph'>
                    <p className="leadParagraphText">{props.lead_paragraph}<span><a className='fullStoryLink' href={props.web_url}>Full Story Here</a></span></p>
                    {props.byline.original ? <p>{props.byline.original}</p> : <p>{props.source}</p>}
                </div>

            </div>



        </div>
    );
}

export default Articles;