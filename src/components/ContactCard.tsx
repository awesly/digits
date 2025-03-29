"use client";
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single Contact. See list/page.tsx. */
const ContactCard = ({ contact }: {contact: Contact} ) => (
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
  </Card>
);

export default ContactCard;