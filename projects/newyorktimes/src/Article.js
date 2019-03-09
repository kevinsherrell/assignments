import React from 'react'
import Multimedia from './Multimedia'


const Article = (props) => {
    // const mMediaMapped = props.multimedia.map((media, i)=>{
    //     return media
    // })
    // console.log(props)

    // console.log(mMediaMapped)
    let media = props.multimedia.length && props.multimedia[4]
    let article = props
    return (
        <div>
            <h4 className="headline">{props.title}</h4>
            <Multimedia {...article} {...media}/>
            {/* <sub className="articleDate"></sub> */}

        </div>
    )
}

export default Article