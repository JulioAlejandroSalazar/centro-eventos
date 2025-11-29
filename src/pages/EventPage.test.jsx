import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import EventPage from './EventPage'
import { vi } from 'vitest'
import React from 'react'

vi.mock('../services/eventDetailApi', () => ({
  getEventDetail: vi.fn()
}))

vi.mock('../components/EventDetail', () => ({
  default: ({ detail }) => <div data-testid="event-detail">{detail.title}</div>
}))

import { getEventDetail } from '../services/eventDetailApi'

describe('EventPage', () => {
  test('muestra pantalla de carga y luego detalle', async () => {
    getEventDetail.mockResolvedValue({
      id: '1',
      title: 'Concierto de Rock',
      date: '2025-03-10',
      time: '20:00',
      location: 'Estadio Nacional',
      category: 'Concierto',
      organizer: 'Live Nation',
      capacity: 5000,
      attendees: 1500,
      description: 'Gran concierto'
    })

    render(
      <MemoryRouter initialEntries={['/event/1']}>
        <Routes>
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Cargando...')).toBeInTheDocument()
    const detailEl = await screen.findByTestId('event-detail')
    expect(detailEl).toBeInTheDocument()
    expect(detailEl.textContent).toBe('Concierto de Rock')
    expect(screen.getByText('Detalle del evento')).toBeInTheDocument()
  })
})
