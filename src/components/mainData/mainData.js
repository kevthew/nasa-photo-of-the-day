import React from "react";
import {Card, CardImg, CardText} from '../../../node_modules/reactstrap/'

function MainContent(props) {
    console.log(props.dataArray)
    return(
        <Card>
            <div>
                <CardImg 
                    alt='astronmy photo'
                    className='NasaImg'
                    src={props.dataArray.url}
                    />
            </div>
           <CardText>{props.dataArray.explanation}</CardText>
        </Card>
    )
}

export default MainContent