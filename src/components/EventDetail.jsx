function EventDetail({ detail }) {
    return (
      <div className="p-4 border rounded shadow">
        <p><strong>Organizador:</strong> {detail.organizer}</p>
        <p><strong>Asistentes:</strong> {detail.attendees}</p>
        <p><strong>Descripción:</strong> {detail.description}</p>
      </div>
    )
  }
  
  export default EventDetail  