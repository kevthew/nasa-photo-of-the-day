import React from "react";
import {Card, CardTitle} from '../../../node_modules/reactstrap/'

function Title(props) {
    console.log(props.titleArray.title)
    return(
        <Card>
            <CardTitle>{props.titleArray.title}</CardTitle>
        </Card>
    )
}

export default Title