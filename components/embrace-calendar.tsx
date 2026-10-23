'use client'

import { ChangeEvent, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ExternalLink,
  ImagePlus,
  Link2,
  Move,
  NotebookPen,
  Paperclip,
  Sparkles,
  Utensils,
  Waves,
  Wind,
} from 'lucide-react'

const pillars = [
  { name: 'Move', icon: Move, note: 'How did you move today?' },
  { name: 'Nourish', icon: Utensils, note: 'What nourished you today?' },
  { name: 'Recover', icon: Waves, note: 'How did you make room to recover?' },
  { name: 'Reflect', icon: NotebookPen, note: 'What are you noticing today?' },
  { name: 'Learn', icon: Sparkles, note: 'What did you learn today?' },
]

function getCountdown() {
  const now = new Date()
  const end = new Date('2027-01-01T00:00:00')
  const difference = Math.max(0, end.getTime() - now.getTime())
  const days = Math.floor(difference / 86400000)
  const hours = Math.floor((difference % 86400000) / 3600000)
  return { days, hours }
}

export function EmbraceCalendar() {
  const [selectedPillar, setSelectedPillar] = useState('Move')
  const [entry, setEntry] = useState('')
  const [link, setLink] = useState('')
  const [fileName, setFileName] = useState('')
  const [saved, setSaved] = useState(false)
  const countdown = useMemo(getCountdown, [])
  const activePillar = pillars.find((pillar) => pillar.name === selectedPillar) ?? pillars[0]
  const ActiveIcon = activePillar.icon

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setFileName(event.target.files?.[0]?.name ?? '')
  }

  function handleSave() {
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2400)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5fbff] text-[#16364a]">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#cfe8f5] pb-5">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em]">
            <span className="grid size-8 place-items-center rounded-full bg-[#b9e4f6] text-[#0d6f98]">
              <CalendarDays aria-hidden="true" data-icon="inline-start" />
            </span>
            <span>embrace / 2026</span>
          </a>
          <a href="#daily-log" className="text-sm font-medium text-[#227ca2] transition hover:text-[#125c7e]">
            Start today <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </a>
        </header>

        <section id="top" className="grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24 lg:py-24">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2786ad]">
              <span className="size-2 rounded-full bg-[#55b7df]" /> A daily calendar for the rest of 2026
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">
              Embrace the end of the <span className="text-[#38a4cf]">2026.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#55788b]">
              A calendar counting down towards 2027, helping you daily log your status — in whatever format feels right.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#daily-log" className="inline-flex items-center gap-2 rounded-full bg-[#2f9dcc] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-12px_#197ba5] transition hover:bg-[#227fa9]">
                Make today count <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </a>
              <a href="#pillars" className="inline-flex items-center gap-2 rounded-full border border-[#b9ddec] px-5 py-3 text-sm font-semibold text-[#287c9f] transition hover:bg-white">
                See the five pillars
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#dff4fc] blur-2xl" />
            <div className="relative rounded-[2rem] border border-[#c2e6f5] bg-white p-7 shadow-[0_24px_70px_-35px_#4da8ca] sm:p-9">
              <div className="flex items-start justify-between border-b border-[#e5f2f7] pb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#68a8bf]">Until 2027</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">You&apos;re good enough and can be better.</p>
                </div>
                <Wind className="text-[#64badc]" aria-hidden="true" />
              </div>
              <div className="flex items-end gap-5 py-9">
                <div><strong className="text-7xl font-semibold leading-none tracking-[-0.08em] text-[#2f9dcc]">{countdown.days}</strong><span className="ml-2 text-sm text-[#6e95a5]">days</span></div>
                <div className="pb-1 text-3xl font-light text-[#a7cad8]">+</div>
                <div><strong className="text-4xl font-semibold leading-none tracking-[-0.06em] text-[#67b8d6]">{countdown.hours}</strong><span className="ml-2 text-sm text-[#6e95a5]">hours</span></div>
              </div>
              <div className="rounded-2xl bg-[#effaff] p-4 text-sm leading-6 text-[#547b8c]">Noticing small changes early helps you adapt to the bigger changes that are to come.</div>
            </div>
          </div>
        </section>

        <section id="pillars" className="border-t border-[#cfe8f5] py-16 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2786ad]">The five pillars</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">One small check-in, five ways to arrive.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.name} className="rounded-2xl border border-[#cfe8f5] bg-white/70 p-5 transition hover:-translate-y-1 hover:bg-white">
                  <div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#a1c4d2]">0{index + 1}</span><Icon className="text-[#44a8cf]" aria-hidden="true" /></div>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.04em]">{pillar.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6c8e9d]">{pillar.note}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="daily-log" className="grid gap-12 rounded-[2rem] bg-[#dff4fc] p-6 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2786ad]">Today&apos;s log</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Fill in one pillar.</h2>
            <p className="mt-5 max-w-sm leading-7 text-[#55788b]">There is no prescribed format. Type your words, share a link, or upload an image — it all counts.</p>
            <div className="mt-9 flex items-center gap-3 text-sm font-medium text-[#287c9f]"><span className="grid size-8 place-items-center rounded-full bg-white"><Check aria-hidden="true" /></span> Your way is the right way.</div>
          </div>
          <div className="rounded-3xl border border-[#b9dfed] bg-white p-5 shadow-[0_20px_60px_-40px_#277e9e] sm:p-7">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a pillar">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                const isSelected = selectedPillar === pillar.name
                return <button key={pillar.name} type="button" onClick={() => setSelectedPillar(pillar.name)} aria-pressed={isSelected} className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${isSelected ? 'bg-[#2f9dcc] text-white' : 'bg-[#effaff] text-[#48849b] hover:bg-[#dff4fc]'}`}><Icon aria-hidden="true" data-icon="inline-start" />{pillar.name}</button>
              })}
            </div>
            <div className="mt-7 flex items-center gap-3 border-b border-[#dceff5] pb-4"><span className="grid size-9 place-items-center rounded-xl bg-[#e8f8fe] text-[#329ac2]"><ActiveIcon aria-hidden="true" /></span><div><p className="text-sm font-semibold">{selectedPillar}</p><p className="text-xs text-[#7b9aa7]">{activePillar.note}</p></div></div>
            <textarea value={entry} onChange={(event) => setEntry(event.target.value)} placeholder="Write a few words, or as much as you need…" aria-label={`${selectedPillar} entry`} className="mt-5 min-h-32 w-full resize-none bg-transparent text-base leading-7 text-[#16364a] outline-none placeholder:text-[#a5c2ce]" />
            <div className="flex flex-col gap-3 border-t border-[#e4f2f7] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#cfe8f5] px-3 py-2 text-xs font-semibold text-[#4a879e] transition hover:bg-[#effaff]"><ImagePlus aria-hidden="true" data-icon="inline-start" />{fileName || 'Upload image'}<input type="file" accept="image/*" onChange={handleFileChange} className="sr-only" /></label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#cfe8f5] px-3 py-2 text-xs font-semibold text-[#4a879e] focus-within:ring-2 focus-within:ring-[#70c4e0]"><Link2 aria-hidden="true" data-icon="inline-start" /><input value={link} onChange={(event) => setLink(event.target.value)} placeholder="Add a link" aria-label="Add a link" className="w-24 bg-transparent outline-none placeholder:text-[#9ebbc6]" /></label>
              </div>
              <button type="button" onClick={handleSave} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16364a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#24546c]">{saved ? <><Check aria-hidden="true" data-icon="inline-start" /> Saved</> : <>Save today <ExternalLink aria-hidden="true" data-icon="inline-end" /></>}</button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 py-10 text-sm text-[#7193a1] sm:flex-row sm:items-center sm:justify-between"><p>Made by <span className="font-semibold text-[#3c7185]">Joanne Chen</span></p><p className="flex items-center gap-2"><Paperclip aria-hidden="true" data-icon="inline-start" /> Spend the rest of 2026 cautiously.</p></footer>
      </div>
    </main>
  )
}
