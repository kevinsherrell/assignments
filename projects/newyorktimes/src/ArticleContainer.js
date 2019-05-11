import React from 'react'
import Articles from './Articles'

const ArticleContainer = (props) => {
    console.log('working')
    // const mappedHeadline = props.

    return (
        <div>
            <Articles {...props}/>
        </div>
    );
}
 
export default ArticleContainer;