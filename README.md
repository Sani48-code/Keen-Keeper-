# Keen-Keeper-

> Keep your friendships alive — a personal relationship manager built with React.

## Tech Stack

- **Vite 8** + **React 19**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **React Router DOM v7**
- **Recharts** — donut chart on Stats page
- **React Hot Toast** — check-in notifications

## Features

- 50-friend contact list with photos, bios, and relationship goals
- Status tracking: On Track / Almost Due / Overdue
- Quick check-in logging (Call, Text, Video) with toast feedback
- Snooze a friend for 2 weeks with one click
- Archive or delete friends from your list
- Global Timeline with filter by interaction type
- Friendship Analytics donut chart
- Responsive grid layout — mobile through desktop

## Project Structure

```
src/
  components/   Navbar, Footer, FriendCard, SummaryCard, StatsCard, TimelineItem
  context/      FriendsContext, TimelineContext
  data/         friends.json (50 contacts)
  pages/        Home, FriendDetails, Timeline, Stats, NotFound
  assets/       PNG icons
```

## Getting Started

```bash
npm install
npm run dev
```
