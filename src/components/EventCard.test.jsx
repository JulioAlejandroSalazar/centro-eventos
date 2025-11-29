import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EventCard from './EventCard'
import React from 'react'

describe('EventCard', () => {
  const mockEvent = {
    id: 10,
    title: 'Concierto de Rock',
    date: '2025-03-10',
    location: 'Santiago',
    category: 'Música'
  }

  test('renderiza los datos del evento', () => {
    render(
      <MemoryRouter>
        <EventCard event={mockEvent} />
      </MemoryRouter>
    )

    expect(screen.getByText('Concierto de Rock')).toBeInTheDocument()
    expect(screen.getByText('2025-03-10')).toBeInTheDocument()
    expect(screen.getByText('Santiago')).toBeInTheDocument()
    expect(screen.getByText('Música')).toBeInTheDocument()
  })

  test('contiene el link hacia el detalle del evento', () => {
    render(
      <MemoryRouter>
        <EventCard event={mockEvent} />
      </MemoryRouter>
    )

    const link = screen.getByText('Ver detalles')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe('/event/10')
  })
})
