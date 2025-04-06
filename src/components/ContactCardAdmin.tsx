"use client";
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { Contact, Note } from "@prisma/client";
import { ListGroup } from 'react-bootstrap';
import NoteItem from './NoteItem';

/* Renders a single Contact. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact; notes: Note[] }) => {
  return (
    <Card className="h-100">
      <Card.Header>
          <Image src={contact.image} alt="Contact Image" width={75} height={75} />
          <Card.Title>
              {contact.firstName}
              &nbsp;
              {contact.lastName}
          </Card.Title>
          <Card.Subtitle>
              {contact.address}
          </Card.Subtitle>
      </Card.Header>
      <Card.Body>
          <Card.Text>{contact.description}</Card.Text>
          <ListGroup variant="flush">
      {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
      </ListGroup>
          <p className = "blockquote-footer">{contact.owner}</p>
      </Card.Body>
    </Card>
  );
};

export default ContactCardAdmin;