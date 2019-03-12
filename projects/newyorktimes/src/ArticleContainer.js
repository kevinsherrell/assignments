import React from 'react'
import Articles from './Articles'

const ArticleContainer = (props) => {
    console.log(props)
    // const mappedHeadline = props.

    return (
        <div>
            <Articles {...props}/>
        </div>
    );
}
 
export default ArticleContainer;