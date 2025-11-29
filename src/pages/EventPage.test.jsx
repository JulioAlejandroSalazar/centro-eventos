import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import EventPage from './EventPage'
import { vi } from 'vitest'
import React from 'react'

vi.mock('../services/eventDetailApi', () => ({
  getEventDetail: vi.fn()
}))

vi.mock('../components/EventDetail', () => ({
  default: ({ detail }) => <div data-testid="event-detail">{detail.organizer}</div>
}))

import { getEventDetail } from '../services/eventDetailApi'

describe('EventPage', () => {
  test('muestra pantalla de carga y luego detalle', async () => {
    getEventDetail.mockResolvedValue({
      organizer: 'Live Nation',
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
    expect(detailEl.textContent).toBe('Live Nation')
    expect(screen.getByText('Detalle del evento')).toBeInTheDocument()
  })
})
