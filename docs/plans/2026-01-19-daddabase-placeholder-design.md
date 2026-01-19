# Daddabase Placeholder Site Design

**Date:** 2026-01-19
**Status:** Approved for implementation

## Overview

Daddabase is a database of lessons from "Dadda" (Matt Walker) to his kids, covering topics like basic programming, AI literacy, Rubik's cube solving, and web development. The site should feel geeky and technical while remaining friendly and welcoming to children.

This design document covers the initial placeholder/"coming soon" site that establishes the visual identity and allows for design iteration.

## Design Goals

1. Communicate what Daddabase is and will become
2. Serve as "coming soon" placeholder
3. Establish futuristic, technical, database-themed aesthetic
4. Test and refine design styles for future content
5. Be welcoming and kid-friendly despite technical theme

## Visual Aesthetic

### Theme: Retro Computer/8-bit Database

Blend nostalgic 8-bit computer aesthetic (Commodore 64, Apple II era) with SQL/database command-line interfaces.

### Color Palette

- **Primary:** Amber/orange text (#FFB000) on deep charcoal (#1A1A1A)
- **Secondary:** Retro cyan/aqua (#00FFFF) for highlights and links
- **Accent:** Soft green (#00FF00) for success states and active elements
- **Effects:** CRT glow with subtle scanline overlay

### Typography

- **Headings:** VT323 (retro monospace from Google Fonts)
- **Body:** IBM Plex Mono (readable monospace with retro feel)
- **Decorative:** ASCII art using font characters
- **Fallback:** System monospace stack

### Visual Effects

- Blinking cursor on active lines
- CRT screen flicker animation on page load
- Scanline overlay across entire viewport
- Pixel-perfect borders with retro depth
- "Booting up database..." loading messages

## Homepage Structure

### Terminal-Style Interface

Simulate a retro computer terminal session querying the Daddabase.

### Header Section

```
 ██████╗  █████╗ ██████╗ ██████╗  █████╗ ██████╗  █████╗ ███████╗███████╗
 ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
 ██║  ██║███████║██║  ██║██║  ██║███████║██████╔╝███████║███████╗█████╗
 ██║  ██║██╔══██║██║  ██║██║  ██║██╔══██║██╔══██╗██╔══██║╚════██║██╔══╝
 ██████╔╝██║  ██║██████╔╝██████╔╝██║  ██║██████╔╝██║  ██║███████║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

v1.0 - INITIALIZING...█

LESSONS LOADED: [PENDING] | STATUS: COMING SOON
```

### Main Terminal Area

```
> SELECT * FROM dadda_lessons;

Query executing...

| TOPIC_ID | LESSON_NAME              | STATUS      |
|----------|--------------------------|-------------|
| 001      | Basic Programming        | Coming Soon |
| 002      | AI Literacy (Claude)     | Coming Soon |
| 003      | AI Literacy (Gemini)     | Coming Soon |
| 004      | AI Literacy (ChatGPT)    | Coming Soon |
| 005      | Solving Rubik's Cube     | Coming Soon |
| 006      | Building Websites        | Coming Soon |

6 rows returned.

> DESCRIBE daddabase;

Database: DADDABASE
Description: A collection of lessons, tutorials, and knowledge
             from Dadda to his kids (and anyone else curious
             enough to explore).
Status: Warming up... check back soon!

Query successful. Results pending...
```

### Visual Elements

- CRT screen border with rounded corners and glow
- Scanline overlay effect
- Pixel-art corner decorations
- Typing animation for queries
- Blinking cursor at prompt

## Footer Design

Terminal-style footer with ASCII separator:

```
================================================================================

SYSTEM ADMIN: Dadda (Matt Walker) [ABOUT]

© 2026 DADDABASE.NET // ALL RIGHTS RESERVED

> EMAIL dadda  |  > VIEW github/mrwalker

POWERED BY: JEKYLL + GITHUB PAGES + ❤️

================================================================================
```

## About Page

Command prompt style:

```
> SELECT * FROM about_dadda;

RECORD 1 OF 1
================================================================================
NAME:        Matt Walker (aka "Dadda")
ROLE:        Dad, Teacher, Learner
MISSION:     Sharing lessons learned with kids and anyone curious
INTERESTS:   Programming, AI tools, puzzles, web development
WHY:         My kids call me "Dadda" and it sounds like "data" when
             they say it quickly. This is my database of lessons I
             want to teach them.
================================================================================

> SELECT topics FROM future_lessons;

Retrieving expanded topic list...

[Detailed descriptions of each planned lesson topic]
```

## Favicon Design

**Concept:** Pixelated "D" icon in retro style

- Amber/orange (#FFB000) "D" on dark background
- High contrast for visibility in browser UI
- Works at all sizes (16x16 to 512x512)
- Subtle CRT glow in larger sizes
- Helps establish brand identity despite HTTP warning

**Formats:**
- favicon.ico (multi-size)
- PNG: 16x16, 32x32, 180x180, 192x192, 512x512
- Apple touch icon
- Manifest.json for PWA icons

## Technical Implementation

### File Structure

```
daddabase.net/
├── _layouts/
│   ├── terminal.html        # Custom terminal layout
│   └── default.html          # Minimal Minima modifications
├── _includes/
│   └── footer.html           # Custom footer
├── assets/
│   ├── css/
│   │   └── daddabase.css    # Main styles
│   └── js/
│       └── terminal.js       # Animation effects
├── images/
│   └── favicon/              # All favicon sizes
├── docs/
│   └── plans/                # Design docs
├── index.md                  # Homepage
├── about.md                  # About page
├── favicon.ico               # Root favicon
├── manifest.json             # PWA manifest
└── _config.yml               # Jekyll config
```

### CSS Architecture

**Main stylesheet structure:**
- CSS custom properties for color palette
- CRT screen effects (scanlines, glow, borders)
- Monospace typography stack
- Responsive design (terminal scales gracefully)
- Animation keyframes (cursor blink, typing, flicker)
- Print styles (remove effects for printing)

### JavaScript Enhancements

**Progressive enhancement approach:**
- Typing animation for SQL queries
- Blinking cursor implementation
- Optional CRT flicker on page load
- Site functions fully without JavaScript

### Font Loading

- Google Fonts: VT323, IBM Plex Mono
- Font-display: swap for performance
- System monospace fallback

### Jekyll Configuration

Update `_config.yml`:
- Custom collections if needed
- Exclude docs from build
- Custom permalink structure
- Social links for footer

## Responsive Behavior

- **Desktop:** Full terminal with all effects
- **Tablet:** Scaled terminal, maintained aesthetic
- **Mobile:** Simplified terminal, reduced animations
- **Print:** Clean text, effects removed

## Accessibility Considerations

- Sufficient color contrast (amber on dark)
- Semantic HTML structure
- Alt text for decorative ASCII art
- Keyboard navigation support
- Screen reader friendly (ARIA labels where needed)
- Motion preferences respected (reduce animations)

## Performance

- Minimal JavaScript (< 5KB)
- CSS < 20KB
- Web fonts loaded async
- No external dependencies beyond Google Fonts
- Static site = fast load times

## Future Extensibility

Design supports future additions:
- Topic detail pages (maintain terminal theme)
- Search functionality (SQL query interface)
- Progress tracking (database records)
- Comments (terminal-style discussion)
- Dark/light mode toggle (amber/green/cyan variants)

## Implementation Phases

1. **Phase 1:** Core HTML/CSS structure and styling
2. **Phase 2:** JavaScript animations and interactions
3. **Phase 3:** Favicon generation and manifest
4. **Phase 4:** About page content
5. **Phase 5:** Testing and polish

## Success Criteria

- Site loads and displays correctly on modern browsers
- Terminal aesthetic is clear and engaging
- Kids find it welcoming despite technical theme
- Design is flexible for future content additions
- Site looks professional despite HTTP limitation
- Mobile experience is functional and attractive
