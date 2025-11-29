import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import { vi } from 'vitest'
import React from 'react'

// mock del servicio
vi.mock('../services/eventsApi', () => ({
  getEvents: vi.fn()
}))

// mock del EventCard
vi.mock('../components/EventCard', () => ({
  default: ({ event }) => <div data-testid="event-card">{event.title}</div>
}))

import { getEvents } from '../services/eventsApi'

describe('Home page', () => {
  test('muestra el título y los eventos', async () => {
    getEvents.mockResolvedValue([
      { id: 1, title: 'Concierto de Rock' },
      { id: 2, title: 'Expo Tecnología' }
    ])

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByText('Centro de eventos')).toBeInTheDocument()
    const cards = await screen.findAllByTestId('event-card')
    expect(cards.length).toBe(2)
    expect(screen.getByText('Concierto de Rock')).toBeInTheDocument()
    expect(screen.getByText('Expo Tecnología')).toBeInTheDocument()
  })
})
