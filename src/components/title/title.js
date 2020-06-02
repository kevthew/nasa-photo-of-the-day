import React from "react";
import {Card, CardTitle, CardText} from '../../../node_modules/reactstrap/'

function Title(props) {
    console.log(props.titleArray.title)
    return(
        <Card>
            <CardTitle>
                {props.titleArray.title}
            </CardTitle>
            <CardText>{props.titleArray.date}</CardText>
        </Card>
    )
}

export default Title