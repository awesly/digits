"use client";
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { Contact, Note } from '@prisma/client';
import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';

/* Renders a single Contact. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => {
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
      </Card.Body>
      <Card.Footer>
      <ListGroup variant="flush">
      {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
  </ListGroup>
  <AddNoteForm contact={contact} />
    <Link href={`edit/${contact.id}`}>Edit</Link>
  </Card.Footer>
    </Card>
  );
};

export default ContactCard;