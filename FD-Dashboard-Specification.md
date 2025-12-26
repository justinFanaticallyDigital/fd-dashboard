# Fanatically Digital Dashboard - Technical Specification

**Version:** 1.0  
**Date:** December 2025  
**Target Deployment:** dashboard.fanaticallydigital.com (WP Engine WordPress Hosting)

---

## 1. Project Overview

### 1.1 Purpose
The FD Dashboard is an all-in-one client activity tracking and task management system for Fanatically Digital, a digital marketing agency. It replaces the current Excel-based SEO tracking workflow with a professional web-based dashboard.

### 1.2 Core Objectives
- Centralize client reporting and activity tracking
- Streamline monthly performance reviews
- Automate activity logging when accessing external tools
- Enable time tracking with QuickBooks export capability
- Support both direct FD clients and 15 Miles white-label clients

### 1.3 Key Features Summary
1. **Dashboard Home** - Client list with quick-access links to external tools
2. **Client Dashboards** - Individual client pages with monthly tracking
3. **Notes & Observations** - Nested note system with follow-up scheduling
4. **Activity Log** - Automated and manual activity recording
5. **Task Management** - Task creation, assignment, and completion tracking
6. **Time Tracking** - Timer with QuickBooks CSV export
7. **Monthly Reviews** - Last Month Summary & Next Steps/Recommendations sections

---

## 2. Brand Guidelines

### 2.1 Color Palette
```css
/* Primary Colors */
--fd-orange: #ff7e14;        /* Primary accent, CTAs */
--fd-orange-light: #fff7ed;  /* Orange backgrounds */
--fd-orange-dark: #e66a00;   /* Hover states */

--fd-gray: #787878;          /* Secondary text */
--fd-gray-light: #a8a8a8;    /* Muted text */
--fd-gray-dark: #4a4a4a;     /* Headings */

--fd-navy: #1a1aa6;          /* Headers, links, accents */
--fd-navy-light: #3d3dcc;    /* Hover states */
--fd-navy-dark: #12127a;     /* Dark accents */

/* UI Colors */
--bg-light: #f8f9fb;         /* Page background */
--card-bg: #ffffff;          /* Card backgrounds */
--border-color: #e5e7eb;     /* Borders, dividers */

/* Status Colors */
--success: #10b981;          /* Green - completed, positive */
--warning: #f59e0b;          /* Amber - attention needed */
--danger: #ef4444;           /* Red - errors, delete, overdue */
--highlight: #fef08a;        /* Yellow - highlighted text */
```

### 2.2 Typography
```css
/* Font Families */
--font-primary: 'DM Sans', sans-serif;     /* Body text, UI */
--font-heading: 'Outfit', sans-serif;       /* Headings */
--font-mono: 'JetBrains Mono', monospace;  /* Timer, code, numbers */

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px - metadata, badges */
--text-sm: 0.875rem;   /* 14px - secondary text */
--text-base: 1rem;     /* 16px - body text */
--text-lg: 1.125rem;   /* 18px - subtitles */
--text-xl: 1.25rem;    /* 20px - section headers */
--text-2xl: 1.5rem;    /* 24px - page titles */
--text-3xl: 1.875rem;  /* 30px - large headings */
```

### 2.3 Logo Assets
Logo files are provided in the `/assets/logos/` directory:
- `FD_Logo_Inline.png` - Fanatically Digital horizontal logo
- `LogoFDOverWordmark.png` - Fanatically Digital stacked logo
- Client logos (see Section 3)

---

## 3. Client Data Structure

### 3.1 FD Direct Clients (5 clients)

```javascript
const fdClients = [
  {
    id: 'dwells',
    name: 'D. Wells Auto',
    type: 'FD',
    logo: 'dwells.png',
    brandColor: '#64748b', // Slate gray
    links: {
      drive: 'https://drive.google.com/drive/u/0/folders/1CkMrv6C72REIAHfWnmnueGxktyAj_iS0',
      looker: 'https://lookerstudio.google.com/u/1/reporting/97ab11b0-7975-4cef-96c0-dc9f55f744cf/page/eyPBF',
      analytics: 'https://analytics.google.com/analytics/web/?authuser=1#/a116792532p401818586/reports/intelligenthome',
      searchConsole: 'https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fdwellsautomotive.com%2F&hl=en&breakdown=page&metrics=CLICKS%2CIMPRESSIONS%2CPOSITION&num_of_months=3',
      cms: 'https://dwellsautomotive.com/wp-login.php?wpaas-standard-login=1',
      cmsType: 'WordPress'
    }
  },
  {
    id: 'pumpbiz',
    name: 'Pumpbiz',
    type: 'FD',
    logo: 'PumpbizLogo20161.png',
    brandColor: '#10b981', // Green
    links: {
      drive: 'https://drive.google.com/drive/u/0/folders/0B9ILw9qPYL9lZklZNURvT1IzQ2s?resourcekey=0-6J5eDtEsDzZJsy6Zdmbadw',
      looker: 'https://lookerstudio.google.com/u/1/reporting/6fe6f785-133c-47b5-9fff-3ede2e1042ab/page/eyPBF',
      analytics: 'https://analytics.google.com/analytics/web/?authuser=1#/a397816p312076042/reports/intelligenthome',
      searchConsole: 'https://search.google.com/u/1/search-console?resource_id=https://pumpbiz.com/&hl=en',
      cms: 'https://pumpbiz.com/todo8102/admin/index/index/key/8653c204f90a5fb25049e72511b80b1e618e29543502ec8e0498fbbb94d095c3/',
      cmsType: 'Magento'
    }
  },
  {
    id: 'korpak',
    name: 'Kor-Pak',
    type: 'FD',
    logo: 'Kor_Pak_Full_Size_color.jpg',
    brandColor: '#1a1aa6', // Navy (matches their logo)
    links: {
      drive: 'https://drive.google.com/drive/u/0/folders/0B9ILw9qPYL9lMmloR3M3YnlBRUU?resourcekey=0-Iz3n9Y-S9fBX4nrJ6ZHRQw',
      looker: 'https://lookerstudio.google.com/u/1/reporting/df17b042-0887-4202-9f8c-97be32064ba0/page/eyPBF/edit',
      analytics: 'https://analytics.google.com/analytics/web/?authuser=1#/a45940507p321078176/reports/intelligenthome',
      searchConsole: 'https://search.google.com/u/1/search-console?resource_id=https://kor-pak.com/&hl=en',
      cms: 'https://kor-pak.com/wp-admin/',
      cmsType: 'WordPress'
    }
  },
  {
    id: 'uew',
    name: 'UEW Healthcare',
    type: 'FD',
    logo: 'UEWlogohorizontal.webp',
    brandColor: '#0f766e', // Teal
    links: {
      drive: 'https://drive.google.com/drive/u/0/folders/11P9vKbprPoV5Kdie1naeEIMxTa2Ox8S8',
      looker: 'https://lookerstudio.google.com/u/1/reporting/9c5aaa5b-1b3a-4b0b-b883-42bb011bf763/page/eyPBF',
      analytics: 'https://analytics.google.com/analytics/web/?authuser=1#/a259312268p356597591/reports/intelligenthome',
      searchConsole: 'https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fuewhealth.com%2F',
      cms: 'https://uewhealth.com/wp-admin',
      cmsType: 'WordPress'
    }
  },
  {
    id: 'rieke',
    name: 'Rieke Interiors',
    type: 'FD',
    logo: 'rieke_full.png',
    brandColor: '#38bdf8', // Light blue
    links: {
      drive: 'https://drive.google.com/drive/u/0/folders/15l0pId8SXezTKfKElgGkziasuXPrJpQm',
      looker: 'https://lookerstudio.google.com/u/1/reporting/9b262909-9484-4313-a63a-bf45d40eb56f/page/eyPBF',
      analytics: 'https://analytics.google.com/analytics/web/?authuser=1#/a285398419p403761270/reports/intelligenthome',
      searchConsole: 'https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.rieke.com%2F',
      cms: 'https://rieke-interiors.squarespace.com/config/',
      cmsType: 'Squarespace'
    }
  }
];
```

### 3.2 15 Miles White-Label Clients (12 clients)

```javascript
const fifteenMilesClients = [
  { id: '15m-aaa', name: 'AAA', type: '15 Miles' },
  { id: '15m-brs', name: 'BRS', type: '15 Miles' },
  { id: '15m-herlihy', name: 'Herlihy', type: '15 Miles' },
  { id: '15m-mcmoving', name: 'McMoving', type: '15 Miles' },
  { id: '15m-molloy', name: 'Molloy', type: '15 Miles' },
  { id: '15m-schroeder', name: 'Schroeder', type: '15 Miles' },
  { id: '15m-lawrence', name: 'Lawrence', type: '15 Miles' },
  { id: '15m-ramar-united', name: 'RAMAR (United)', type: '15 Miles' },
  { id: '15m-ramar-mayflower', name: 'Ramar (Mayflower)', type: '15 Miles' },
  { id: '15m-chipman', name: 'Chipman', type: '15 Miles' },
  { id: '15m-sorensen', name: 'Sorensen', type: '15 Miles' },
  { id: '15m-tag', name: 'TAG', type: '15 Miles' },
  { id: '15m-arrow-utah', name: 'Arrow Utah', type: '15 Miles' }
];

// 15 Miles general links
const fifteenMilesLinks = {
  drive: 'https://drive.google.com/drive/u/0/folders/0B9ILw9qPYL9lTUU2NU5EUy1JX00?resourcekey=0-UJyUzRUSgsFFw0fAA46sHQ',
  searchConsole: 'https://search.google.com/u/2/search-console/not-verified?original_url=/search-console/performance/search-analytics&original_resource_id&pli=1',
  analytics: 'https://analytics.google.com/analytics/web/?authuser=2#/a75130678p321084970/reports/intelligenthome'
};
```

### 3.3 Internal Client

```javascript
const internalClient = {
  id: 'fd-internal',
  name: 'Fanatically Digital',
  type: 'Internal',
  links: {
    drive: 'https://drive.google.com/drive/u/0/shared-drives',
    analytics: 'https://analytics.google.com/analytics/web/?authuser=1#/a41195634p295833745/reports/intelligenthome',
    searchConsole: 'https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=sc-domain%3Afanaticallydigital.com&metrics=CLICKS%2CIMPRESSIONS&breakdown=query&num_of_days=28'
  }
};
```

---

## 4. Data Models

### 4.1 Note (with Observations)

```typescript
interface Note {
  id: string;                    // Unique identifier (e.g., 'note_1703123456789_abc123')
  clientId: string;              // Reference to client
  monthCreated: string;          // ISO month string (e.g., '2025-01')
  createdAt: string;             // ISO datetime
  updatedAt: string;             // ISO datetime
  createdBy: string;             // User name
  followUpDate: string | null;   // Optional specific date
  followUpMonth: string | null;  // Optional month for follow-up display (e.g., '2025-03')
  observations: Observation[];   // Array of nested observations
}

interface Observation {
  id: string;                    // Unique identifier
  content: string;               // Text content
  style: 'normal' | 'highlighted' | 'highlighted-bold';  // Visual style
  link: string | null;           // Optional URL
  createdAt: string;
  updatedAt: string;
}
```

**Behavior Notes:**
- The first observation in each note acts as the "header" and displays in bold
- Notes with a `followUpMonth` appear in both their creation month AND the follow-up month
- When displayed in the follow-up month, notes show a "📌 Follow-up from [original month]" indicator
- Notes can be collapsed to show only the first observation with a count badge (+N more)

### 4.2 Activity Entry

```typescript
interface ActivityEntry {
  id: string;
  clientId: string;
  action: string;                // Description of activity
  timestamp: string;             // ISO datetime
  autoRecorded: boolean;         // True if triggered by quick-link click
  category: 'review' | 'content' | 'technical' | 'meeting' | 'other';
}
```

**Auto-Recording Triggers:**
- Clicking "GSC" quick-link → "Reviewed Search Console performance"
- Clicking "GA4" quick-link → "Reviewed Google Analytics"
- Clicking "Looker" quick-link → "Reviewed Looker Studio report"
- Clicking "CMS" quick-link → "Accessed CMS"
- Clicking "Drive" quick-link → "Accessed Google Drive folder"

### 4.3 Task

```typescript
interface Task {
  id: string;
  clientId: string;
  title: string;
  description: string | null;
  dueDate: string | null;        // ISO date string
  completed: boolean;
  completedAt: string | null;
  createdAt: string;
  createdBy: string;
  linkedNoteId: string | null;   // Optional reference to source note
  linkedRecId: string | null;    // Optional reference to source recommendation
}
```

### 4.4 Recommendation (Next Steps)

```typescript
interface Recommendation {
  id: string;
  clientId: string;
  text: string;
  monthCreated: string;          // ISO month string
  createdAt: string;
  convertedToTask: boolean;
  linkedTaskId: string | null;
}
```

### 4.5 Time Entry

```typescript
interface TimeEntry {
  id: string;
  clientId: string;
  duration: number;              // Seconds
  date: string;                  // ISO datetime
  task: string;                  // Description of work
  billable: boolean;
}
```

### 4.6 Monthly Summary

```typescript
interface MonthlySummary {
  id: string;
  clientId: string;
  month: string;                 // ISO month string (e.g., '2025-01')
  content: string;               // Rich text or markdown
  createdAt: string;
  updatedAt: string;
}
```

---

## 5. Page Specifications

### 5.1 Dashboard Home (Client List)

**URL:** `/` or `/dashboard`

**Layout:**
- Header with FD logo, timer widget, and navigation
- Filter tabs: "All" | "FD Clients" | "15 Miles"
- Client cards grid (responsive: 3-4 columns on desktop, 1 on mobile)

**Client Card Components:**
```
┌─────────────────────────────────────────┐
│ [Logo]  Client Name                     │
│         Type Badge (FD / 15 Miles)      │
├─────────────────────────────────────────┤
│ Quick Links: [GSC] [GA4] [CMS] [Drive]  │
├─────────────────────────────────────────┤
│ 3 tasks • 5 notes     [Open Dashboard]  │
└─────────────────────────────────────────┘
```

**Quick Link Behavior:**
- Opens in new tab
- Triggers auto-activity recording
- Visual feedback (brief toast notification)

### 5.2 Client Dashboard

**URL:** `/client/{clientId}`

**Layout:** Three-column grid on desktop, stacked on mobile

**Header Section:**
```
[← Back] [Logo] Client Name        [Quick Links: Drive | Looker | GSC | GA4 | CMS]
         Type Badge

[◄ Prev] [December 2025] [Next ►]  [Month Indicators: J F M A M J J A S O N D]
```

**Month Navigation:**
- Dots indicate months with data (filled = has data)
- Current month has ring highlight
- Clicking dots navigates to that month

**Column 1: Notes & Activity**

```
┌─────────────────────────────────┐
│ NOTES & OBSERVATIONS    [+ Add] │
├─────────────────────────────────┤
│ ▼ Organic traffic up 15%        │
│   └ Product pages strongest     │
│   └ Top: /industrial-pumps      │
│                                 │
│ ▼ Core Web Vitals failing       │
│   └ LCP at 4.2s (mobile)        │
│   └ Hero images need optimize   │
│   📅 Follow-up: Feb 2025        │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ ACTIVITY LOG                    │
├─────────────────────────────────┤
│ ✓ Reviewed Search Console  2:30pm│
│ ✓ Added note               2:15pm│
│ ✓ Completed task           1:45pm│
└─────────────────────────────────┘
```

**Column 2: Tasks & Summary**

```
┌─────────────────────────────────┐
│ TASKS                   [+ Add] │
├─────────────────────────────────┤
│ [Quick add task... (Enter)]     │
│                                 │
│ ○ Update meta descriptions      │
│   Due: Dec 28                   │
│                                 │
│ ○ Fix mobile CWV issues         │
│   Due: Jan 5    ⚠️ High         │
│                                 │
│ ✓ Review Q4 keywords (done)     │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ LAST MONTH SUMMARY              │
├─────────────────────────────────┤
│ [Click to add summary...]       │
│                                 │
└─────────────────────────────────┘
```

**Column 3: Calendar & Recommendations**

```
┌─────────────────────────────────┐
│ CALENDAR         [◄] Dec [►]    │
├─────────────────────────────────┤
│ S  M  T  W  T  F  S             │
│ 1  2  3  4  5  6  7             │
│ 8  9  10 11 12 13 14            │
│ 15 16 17 18 19 20 21            │
│ 22 23 24● 25 26 27 28           │
│ 29 30 31                        │
│                                 │
│ ● = has tasks due               │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ NEXT STEPS / RECS       [+ Add] │
├─────────────────────────────────┤
│ │ Implement lazy loading for    │
│ │ all product images            │
│ └ [→ Create task]               │
│                                 │
│ │ Add schema markup to          │
│ │ service pages                 │
│ └ [→ Create task]               │
└─────────────────────────────────┘
```

### 5.3 Time Tracking Page

**URL:** `/time`

**Layout:**

```
┌────────────────────────────────────────────────────────────────┐
│                         0:00:00                                │
│                                                                │
│              [Select client... ▼]                              │
│                                                                │
│              [  Start  ]  [  Reset  ]                          │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ TODAY'S ENTRIES                          [Export to QuickBooks]│
├────────────────────────────────────────────────────────────────┤
│ D. Wells Auto    General work                         0:45:00  │
│ Pumpbiz          SEO review                           1:23:00  │
│ Kor-Pak          Content updates                      0:30:00  │
└────────────────────────────────────────────────────────────────┘
```

**Timer Behavior:**
- Timer widget appears in header on all pages
- Selecting a client on any page auto-sets the timer client
- Opening a client dashboard auto-starts timer for that client (configurable)
- Timer persists across page navigation
- Stop saves entry automatically

**QuickBooks Export:**
- CSV format with columns: Client, Task, Duration (hours), Date
- Downloads immediately on click

---

## 6. Notes & Observations System (Detailed)

### 6.1 Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│ ▼ First observation (bold, acts as note title)     [○] [🔗]    │
│   └ Second observation (normal weight)             [○] [🔗]    │
│   └ Third observation (highlighted) ████████████   [🖍️] [🔗]   │
│   └ Fourth observation (highlighted bold) █████    [🖍️B] [🔗]  │
│                                                                │
│ ─────────────────────────────────────────────────────────────  │
│ Dec 15, 2025        📅 Follow-up: Feb 2025   [📅 Edit] [🗑️]   │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Interaction Patterns

**Creating a Note:**
1. User types in "New note..." input at bottom
2. Pressing Enter creates note with first observation
3. Focus moves to new blank observation below
4. Pressing Enter on empty observation exits edit mode

**Adding Observations:**
1. Pressing Enter on any observation creates new observation below
2. New observations inherit same nesting level
3. Empty observations auto-delete on blur

**Style Cycling:**
- Click style button to cycle: normal → highlighted → highlighted-bold → normal
- Highlighted = yellow background
- Highlighted-bold = yellow background + bold text

**Links:**
- Click 🔗 button to show URL input
- Enter URL and press Enter or blur to save
- Link icon appears next to observation when URL exists
- Clicking link icon opens URL in new tab

**Collapsing:**
- Click ▼ toggle to collapse/expand note
- Collapsed state shows only first observation + count badge
- Collapsed notes show follow-up badge inline

**Follow-ups:**
- Click "📅 Set Follow-up" to open month picker
- Notes appear in both creation month and follow-up month
- Follow-up month display shows "📌 Follow-up from [month]" badge

---

## 7. Component Specifications

### 7.1 Buttons

```css
/* Primary Button (Orange) */
.btn-primary {
  background: var(--fd-orange);
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 13px;
}
.btn-primary:hover { background: var(--fd-orange-dark); }

/* Secondary/Outline Button */
.btn-outline {
  background: white;
  border: 1px solid var(--border-color);
  color: var(--fd-gray);
  padding: 10px 18px;
  border-radius: 6px;
}
.btn-outline:hover { 
  border-color: var(--fd-orange); 
  color: var(--fd-orange); 
}

/* Small Button */
.btn-sm { padding: 5px 10px; font-size: 11px; }

/* Icon Button */
.btn-icon { 
  padding: 8px; 
  background: transparent;
  border-radius: 4px;
}
.btn-icon:hover { background: var(--bg-light); }
```

### 7.2 Cards

```css
.card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
```

### 7.3 Form Inputs

```css
.input, .select, .textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-family: var(--font-primary);
  font-size: 14px;
}
.input:focus, .select:focus, .textarea:focus {
  outline: none;
  border-color: var(--fd-orange);
  box-shadow: 0 0 0 3px rgba(255, 126, 20, 0.1);
}
```

### 7.4 Badges

```css
/* Type Badge */
.badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 500;
}
.badge-fd { background: var(--fd-navy); color: white; }
.badge-15miles { background: var(--fd-gray); color: white; }

/* Status Badge */
.badge-success { background: var(--success); color: white; }
.badge-warning { background: var(--warning); color: white; }
.badge-danger { background: var(--danger); color: white; }
```

### 7.5 Quick Links

```css
.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: var(--bg-light);
  border-radius: 6px;
  font-size: 12px;
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s;
}
.quick-link:hover {
  background: var(--fd-navy);
  color: white;
}
```

---

## 8. Technical Implementation

### 8.1 Technology Stack (Prototype Phase)

**Frontend:**
- HTML5, CSS3 (CSS Custom Properties)
- Vanilla JavaScript (ES6+)
- LocalStorage for data persistence

**Later Production Phase:**
- WordPress/WP Engine deployment
- Consider: React or Vue for complex state management
- MySQL/WordPress database for persistence
- REST API endpoints via WordPress REST API or custom plugin

### 8.2 File Structure (Prototype)

```
/fd-dashboard/
├── index.html              # Single-page app
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── app.js              # Main app logic
│   ├── data.js             # Client data, storage
│   ├── notes.js            # Notes & observations
│   ├── tasks.js            # Task management
│   ├── timer.js            # Time tracking
│   └── utils.js            # Helpers
└── assets/
    └── logos/              # Client logos
```

### 8.3 LocalStorage Schema

```javascript
// Storage keys
const STORAGE_KEYS = {
  notes: 'fd_dashboard_notes',
  tasks: 'fd_dashboard_tasks',
  activity: 'fd_dashboard_activity',
  timeEntries: 'fd_dashboard_time',
  recommendations: 'fd_dashboard_recs',
  summaries: 'fd_dashboard_summaries',
  preferences: 'fd_dashboard_prefs'
};

// Example structure
localStorage.setItem('fd_dashboard_notes', JSON.stringify([
  {
    id: 'note_123',
    clientId: 'dwells',
    monthCreated: '2025-01',
    // ... rest of note data
  }
]));
```

### 8.4 Utility Functions

```javascript
// Generate unique ID
function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get month key from date
function getMonthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

// Parse month key
function parseMonthKey(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  return { year, month };
}

// Format month key to display string
function monthKeyToLabel(monthKey) {
  const { year, month } = parseMonthKey(monthKey);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Format duration (seconds to display)
function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
```

---

## 9. User Interactions & Workflows

### 9.1 Monthly Review Workflow

1. **Navigate to client** → Timer auto-starts
2. **Review GSC** → Click quick link → Auto-logs activity
3. **Review GA4** → Click quick link → Auto-logs activity
4. **Add notes** → Type observations with highlights for key findings
5. **Set follow-ups** → Mark notes needing future attention
6. **Write summary** → Add last month summary
7. **Add recommendations** → Create next steps
8. **Convert to tasks** → Click "Create task" on recommendations
9. **Stop timer** → Time entry saved

### 9.2 Note Creation Workflow

1. Click into "New note..." input
2. Type first observation (becomes note title)
3. Press Enter → Note created, new observation focused
4. Type additional observation
5. Press Enter → Add another, OR blur → Save
6. Click style button to highlight important items
7. Click 🔗 to add reference links
8. Click 📅 to set follow-up month

### 9.3 Quick Link Auto-Activity

```javascript
// On quick link click
function handleQuickLinkClick(clientId, linkType, url) {
  // Map link types to activity descriptions
  const activityMap = {
    searchConsole: 'Reviewed Search Console performance',
    analytics: 'Reviewed Google Analytics',
    looker: 'Reviewed Looker Studio report',
    cms: 'Accessed CMS',
    drive: 'Accessed Google Drive folder'
  };
  
  // Log activity
  logActivity(clientId, activityMap[linkType], true);
  
  // Open link in new tab
  window.open(url, '_blank');
  
  // Show toast notification
  showToast(`Activity logged: ${activityMap[linkType]}`);
}
```

---

## 10. Responsive Design

### 10.1 Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### 10.2 Layout Adaptations

**Client List Grid:**
- Desktop (xl+): 4 columns
- Desktop (lg): 3 columns  
- Tablet (md): 2 columns
- Mobile: 1 column

**Client Dashboard:**
- Desktop (lg+): 3 columns
- Tablet (md): 2 columns (calendar/recs stack)
- Mobile: 1 column (all sections stack)

**Header:**
- Desktop: Full timer widget visible
- Mobile: Timer minimized, expands on tap

---

## 11. Future Enhancements (Phase 2+)

### 11.1 Google Integration
- OAuth 2.0 authentication
- Pull data directly from Search Console API
- Pull data from Analytics API
- Sync files from Google Drive

### 11.2 Team Features
- User accounts and authentication
- Role-based permissions
- Activity attribution by user
- Team dashboards and reports

### 11.3 Automation
- Scheduled reports
- Email notifications for follow-ups
- Slack integration for activity updates

### 11.4 Advanced Reporting
- Historical trend charts
- Client comparison views
- Export to PDF reports

---

## 12. Appendix

### 12.1 Icon Reference

Use simple emoji icons for the prototype:
- 📋 Notes
- ✓ Tasks/Complete
- ⏱️ Timer
- 📅 Calendar/Follow-up
- 🔗 Link
- 🖍️ Highlight
- 📌 Follow-up indicator
- 🗑️ Delete
- ⚠️ Warning/Priority
- ↗️ External link

### 12.2 Quick Reference: Key CSS Classes

```css
/* Layout */
.app-container    /* Main app wrapper */
.header           /* Top navigation bar */
.main-content     /* Page content area */
.page             /* Page container */

/* Client List */
.clients-grid     /* Client cards grid */
.client-card      /* Individual client card */
.quick-links      /* Quick link button group */

/* Client Dashboard */
.client-dashboard-grid  /* 3-column layout */
.dashboard-section      /* Section card */
.section-header         /* Section title bar */
.section-content        /* Section body */

/* Notes */
.note-card              /* Note container */
.observations-list      /* Observations wrapper */
.observation-item       /* Single observation */
.observation-content    /* Editable text */

/* Timer */
.timer-widget          /* Header timer */
.timer-display         /* Time numbers */
.timer-btn             /* Start/stop button */
```

### 12.3 Sample Data for Testing

```javascript
const sampleNotes = [
  {
    id: 'note_sample_1',
    clientId: 'dwells',
    monthCreated: '2025-01',
    createdAt: '2025-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:35:00Z',
    createdBy: 'Justin',
    followUpMonth: '2025-02',
    observations: [
      { id: 'obs_1', content: 'Organic traffic up 15% month-over-month', style: 'normal', link: null },
      { id: 'obs_2', content: 'Product pages showing strongest growth', style: 'highlighted', link: null },
      { id: 'obs_3', content: 'Top performer: /industrial-pumps (2,400 sessions)', style: 'normal', link: 'https://analytics.google.com' }
    ]
  },
  {
    id: 'note_sample_2',
    clientId: 'dwells',
    monthCreated: '2025-01',
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
    createdBy: 'Justin',
    followUpMonth: null,
    observations: [
      { id: 'obs_4', content: 'Core Web Vitals failing on mobile - LCP at 4.2s', style: 'highlighted-bold', link: 'https://pagespeed.web.dev' },
      { id: 'obs_5', content: 'Main culprit: unoptimized hero images', style: 'normal', link: null },
      { id: 'obs_6', content: 'Recommendation: lazy loading + WebP format', style: 'highlighted', link: null }
    ]
  }
];
```

---

## 13. Development Checklist

### Phase 1: Core Structure
- [ ] Set up file structure
- [ ] Implement base styles and CSS variables
- [ ] Create header component with FD logo
- [ ] Build client card component
- [ ] Create client data store

### Phase 2: Client List Page
- [ ] Render client grid
- [ ] Implement filter tabs (All/FD/15 Miles)
- [ ] Add quick links with auto-activity logging
- [ ] Toast notification system

### Phase 3: Client Dashboard
- [ ] Three-column layout
- [ ] Month navigation component
- [ ] Month indicator dots
- [ ] Section scaffolding

### Phase 4: Notes & Observations
- [ ] Note card component
- [ ] Observation rendering with nesting
- [ ] Inline editing (contenteditable)
- [ ] Style cycling (normal/highlighted/bold)
- [ ] Link management
- [ ] Collapse/expand functionality
- [ ] Follow-up scheduling
- [ ] New note creation flow

### Phase 5: Tasks
- [ ] Task list component
- [ ] Quick-add input
- [ ] Task completion toggle
- [ ] Due date display
- [ ] Calendar mini view

### Phase 6: Activity & Recommendations
- [ ] Activity log component
- [ ] Auto-recording from quick links
- [ ] Recommendations section
- [ ] Convert recommendation to task

### Phase 7: Time Tracking
- [ ] Timer widget in header
- [ ] Timer page with large display
- [ ] Start/stop/reset functionality
- [ ] Time entry storage
- [ ] QuickBooks CSV export

### Phase 8: Polish
- [ ] Responsive design testing
- [ ] Keyboard navigation
- [ ] Loading states
- [ ] Error handling
- [ ] Confirmation dialogs

---

*End of Specification Document*
