import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { onError } from "../libs/onError";
import Form from 'react-bootstrap/Form'
import LoaderButton from "../sharedComponents/LoaderButton";
import config from "../config";
import { s3Upload, s3Delete } from "../libs/s3Uploads";

export default function Notes() {
    const file = useRef(null);
    const { id } = useParams();
    const history = useHistory();
    const [note, setNote] = useState(null);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        function loadNote() {
            return API.get("notes", `/notes/${id}`);
        }

        async function onLoad() {
            try {
                const note = await loadNote();
                const { content, attachment } = note;

                if (attachment) {
                    note.attachmentURL = await Storage.vault.get(attachment);
                }

                setContent(content);
                setNote(note);
            } catch (e) {
                onError(e);
            }
        }

        onLoad();
    }, [id]);

    function validateForm() {
        return content.length > 0;
    }

    function formatFilename(str) {
        return str.replace(/^\w+-/, "");
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
    }

    function saveNote(note) {
        return API.put("notes", `/notes/${id}`, {
            body: note
        });
    }

    async function handleSubmit(event) {
        let attachment;

        event.preventDefault();

        if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${
                config.MAX_ATTACHMENT_SIZE / 1000000
                } MB.`
            );
            return;
        }

        setIsLoading(true);

        try {


            if (file.current) {
                console.log(note.attachment)
                await s3Delete(note.attachment);
                attachment = await s3Upload(file.current);
            }

            await saveNote({
                content,
                attachment: attachment || note.attachment
            });
            history.push("/");
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    function deleteNote() {
        return API.del("notes", `/notes/${id}`);
    }

    async function handleDelete(event) {
        event.preventDefault();

        const confirmed = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        try {
            await deleteNote();
            await s3Delete(note.attachment);
            history.push("/");
        } catch (e) {
            onError(e);
            setIsDeleting(false);
        }
    }

    return (
        <div className="Notes">
            {note && (
                <form onSubmit={handleSubmit}>
                    <Form.Group controlId="content">
                        <Form.Control
                            value={content}
                            as="textarea"
                            rows="10"
                            onChange={e => setContent(e.target.value)}
                        />
                    </Form.Group>
                    {note.attachment && (
                        <Form.Group>
                            <Form.Label>Attachment</Form.Label>
                            <Form.Control defaultValue={formatFilename(note.attachment)} plaintext={true} readOnly />
                            {/* <a target="_blank" rel="noopener noreferrer" href={note.attachmentURL}>
                                    {}
                                </a> */}
                        </Form.Group>
                    )}
                    <Form.Group controlId="file">
                        {!note.attachment && <Form.Label>Attachment</Form.Label>}
                        <Form.Control onChange={handleFileChange} type="file" />
                    </Form.Group>
                    <LoaderButton
                        block
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={!validateForm()}
                    >
                        Save
          </LoaderButton>
                    <LoaderButton
                        block
                        variant="danger"
                        onClick={handleDelete}
                        isLoading={isDeleting}
                    >
                        Delete
          </LoaderButton>
                </form>
            )}
        </div>
    );
}