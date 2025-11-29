import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EventCard from './EventCard'
import React from 'react'

describe('EventCard', () => {
  const mockEvent = {
    id: 10,
    title: 'Concierto de Rock',
    date: '2025-03-10',
    time: '20:00',
    location: 'Santiago',
    category: 'Música'
  }

  test('renderiza los datos del evento', () => {
    render(
      <MemoryRouter>
        <EventCard event={mockEvent} />
      </MemoryRouter>
    )

    expect(screen.getByText(/Concierto de Rock/i)).toBeInTheDocument()
    expect(screen.getByText(/2025-03-10/i)).toBeInTheDocument()
    expect(screen.getByText(/Santiago/i)).toBeInTheDocument()
    expect(screen.getByText(/Música/i)).toBeInTheDocument()
  })

  test('contiene el link hacia el detalle del evento', () => {
    render(
      <MemoryRouter>
        <EventCard event={mockEvent} />
      </MemoryRouter>
    )

    const link = screen.getByText(/Ver detalles/i)
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe('/event/10')
  })
})
