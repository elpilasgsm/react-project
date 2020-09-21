import {Route, Switch, useParams} from "react-router-dom";
import React from "react";
import {WorkArea} from "../workArea";
import Edit from "../edit";

class NotesRouter extends React.Component {
    render() {
        return (<Switch>
            <Route path="/NEW">
                <New/>
            </Route>
            <Route path="/LIST">
                <List/>
            </Route>
            <Route path="/EDIT/:noteId">
                <EditNote/>
            </Route>
            <Route path="/">
                <List/>
            </Route>
        </Switch>)
    }
}

function New() {
    return <Edit/>
}

function List() {
    return <WorkArea/>
}

function EditNote() {
    let {noteId} = useParams();
    return <Edit noteId={noteId}/>
}

export default NotesRouter;