import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import EventDetail from './EventDetail'
import React from 'react'

describe('EventDetail', () => {
  const mockDetail = {
    title: 'Concierto de Rock',
    date: '2025-03-10',
    time: '20:00',
    location: 'Estadio Nacional',
    category: 'Concierto',
    organizer: 'Live Nation',
    capacity: 5000,
    attendees: 1500,
    description: 'Concierto masivo con bandas invitadas'
  }

  test('muestra correctamente los detalles del evento', () => {
    render(
      <MemoryRouter>
        <EventDetail detail={mockDetail} />
      </MemoryRouter>
    )

    expect(screen.getByText(/Organizador/i)).toBeInTheDocument()
    expect(screen.getByText(/Live Nation/i)).toBeInTheDocument()
    expect(screen.getByText(/Asistentes/i)).toBeInTheDocument()
    expect(screen.getByText(/1500/i)).toBeInTheDocument()
    expect(screen.getByText(/Descripción/i)).toBeInTheDocument()
    expect(screen.getByText(/Concierto masivo con bandas invitadas/i)).toBeInTheDocument()
  })

  test('botón de volver funciona', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <EventDetail detail={mockDetail} />
      </MemoryRouter>
    )

    const button = screen.getByRole('button', { name: /← Volver/i })
    expect(button).toBeInTheDocument()
    await user.click(button)
  })
})
