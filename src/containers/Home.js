import React, { useState, useEffect } from "react";
import { useAppContext } from "../libs/userContext";
import { onError } from "../libs/onError";
import "./Home.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify";


export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const notes = await loadNotes();
        console.log(notes)
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
    i !== 0 ? (
      <LinkContainer key={note.noteid} to={`/notes/${note.noteid}`}>
        <ListGroup.Item>
          <div style={{fontSize: 20, fontWeight: 600}}>{note.content.trim().split("\n")[0]}</div> 
          <div style={{fontSize: 14, fontWeight: 300}}>{"Created: " + new Date(note.createdAt).toLocaleString()}</div>
        </ListGroup.Item>
      </LinkContainer>
    ) : (
      <LinkContainer key="new" to="/notes/new">
        <ListGroup.Item>
          <h4>
            <b>{"\uFF0B"}</b> Create a new note
          </h4>
        </ListGroup.Item>
      </LinkContainer>
    )
  );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Fountain Pen</h1>
        <p>A simple note taking app, try signup!</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h2>Your Notes</h2>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}