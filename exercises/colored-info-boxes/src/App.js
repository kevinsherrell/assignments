import React from 'react'
import Box from './Box'


function App(){
    return (
        <div className="container">
            <Box title="Box 1" subTitle="The first box" information="blah" backgroundColor="red" />
            <Box title="Box 2" subTitle="The second box" information="blah" backgroundColor="blue" />
            <Box title="Box 3" subTitle="The third box" information="blah" backgroundColor="cyan" />
            <Box title="Box 4" subTitle="The fourth box" information="blah" backgroundColor="pink" />
            <Box title="Box 5" subTitle="The fifth box" information="blah" backgroundColor="orange" />
            <Box title="Box 6" subTitle="The sixth box" information="blah" backgroundColor="purple" />
            <Box title="Box 7" subTitle="The seventh box" information="blah" backgroundColor="green" />
            <Box title="Box 8" subTitle="The eighth box" information="blah" backgroundColor="beige" />
            <Box title="Box 9" subTitle="The ninth box" information="blah" backgroundColor="brown" />
            <Box className="last" title="Box 10" subTitle="The tenth box" information="blah" backgroundColor="black" />
        </div>
    )
}

export default App