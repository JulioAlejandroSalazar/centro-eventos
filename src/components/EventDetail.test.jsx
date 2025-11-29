import { render, screen } from '@testing-library/react'
import EventDetail from './EventDetail'
import React from 'react'

describe('EventDetail', () => {
  const mockDetail = {
    organizer: 'Live Nation',
    attendees: 1500,
    description: 'Concierto masivo con bandas invitadas'
  }

  test('muestra correctamente los detalles del evento', () => {
    render(<EventDetail detail={mockDetail} />)

    expect(screen.getByText(/Organizador/i)).toBeInTheDocument()
    expect(screen.getByText('Live Nation')).toBeInTheDocument()

    expect(screen.getByText(/Asistentes/i)).toBeInTheDocument()
    expect(screen.getByText('1500')).toBeInTheDocument()

    expect(screen.getByText(/Descripción/i)).toBeInTheDocument()
    expect(
      screen.getByText('Concierto masivo con bandas invitadas')
    ).toBeInTheDocument()
  })
})
