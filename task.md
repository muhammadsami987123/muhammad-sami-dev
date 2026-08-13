# Portfolio UI Refinement: Startup Founder Section

Review the current homepage implementation and the attached screenshots carefully.

The current **Startup Founder / Founded Startups** section has good visual direction, but the cards are far too large and consume too much vertical space.

I want to refine this section without damaging the existing overall portfolio design.

The goal is:

**smaller cards + better information density + cleaner UI + better hierarchy + move the section lower on the homepage.**

Do NOT redesign the entire portfolio.

---

# 1. MOVE STARTUP SECTION LOWER ON THE HOMEPAGE

This is an important structural change.

The current Startup Founder / Founded Startups section appears too early on the homepage.

I do NOT want visitors to immediately see that I am a startup founder before they have seen my engineering capabilities.

The homepage should first communicate my:

* Engineering work
* Projects
* Skills
* Technical capabilities

Then introduce my startup/founder work later.

### Move the Startup section to:

**AFTER the Skills section**

The intended homepage order should approximately be:

```text
Hero
↓
About
↓
Featured Projects
↓
Skills
↓
Founded Startups / Startup Founder
↓
Contact
```

If there are existing sections between these, preserve the existing logical structure, but make sure **Startup Founder comes after Skills**.

Do not place Startup Founder near the top of the homepage.

---

# 2. KEEP THE SECTION TITLE SIMPLE

The current section title:

> Founded Startups.

is actually good.

Keep it simple.

Do not replace it with an overly promotional title.

Use:

## Founded Startups

Supporting text:

> Building products and companies around AI, software, and digital platforms.

Keep the description short.

Do not use phrases like:

* Entrepreneurial ecosystem
* Visionary leadership
* Transforming industries
* Innovation-driven ventures
* Founder excellence

The portfolio should remain professional and understated.

---

# 3. REMOVE THE OVERSIZED INTRO AREA

The current Startup section has too much empty space before the cards.

Reduce:

* top padding
* heading margin
* description margin
* gap between description and cards

The section should get to the actual startup cards quickly.

Target:

```text
Founded Startups

Building products and companies around AI,
software, and digital platforms.

┌───────────────┐  ┌───────────────┐
│ Startup       │  │ Startup       │
│ Card          │  │ Card          │
└───────────────┘  └───────────────┘
```

---

# 4. MAKE STARTUP CARDS MUCH SMALLER

This is the biggest visual issue.

The current cards are too large vertically.

They currently feel like large case-study panels.

They should instead feel like **compact professional company cards**.

Target desktop card height:

### Approximately 300–380px

Do not make them 500–600px+ tall.

The user should be able to see the **entire startup card in one viewport** or almost one viewport.

---

# 5. DESKTOP LAYOUT

Keep two startup cards per row.

Example:

```text
┌──────────────────────────┐   ┌──────────────────────────┐
│ Logo                 Date│   │ Logo                 Date│
│                          │   │                          │
│ Marsa Empower            │   │ CodePulse Innovations    │
│ FOUNDER + COO            │   │ FOUNDER                  │
│                          │   │                          │
│ Short description...     │   │ Short description...     │
│                          │   │                          │
│ Website / Role           │   │ Website / Product       │
└──────────────────────────┘   └──────────────────────────┘
```

The cards should remain visually balanced.

---

# 6. REDUCE CARD PADDING

Current card padding is excessive.

Use approximately:

```text
24px–28px
```

instead of very large internal spacing.

The information should feel compact but not cramped.

---

# 7. REDUCE LOGO AREA

The startup logo currently has too much visual space.

Use a compact logo container:

```text
48px × 48px
```

or approximately:

```text
52px × 52px
```

Do not use a huge logo block.

Keep the logo clean and recognizable.

---

# 8. DATE BADGE

Keep the date badge because it provides useful context.

For example:

```text
JAN 2026 — PRESENT
```

But make it smaller and more subtle.

Use approximately:

```text
11px–12px
```

with moderate letter spacing.

It should not compete with the company name.

---

# 9. COMPANY NAME

The company name should be the primary content.

Example:

## Marsa Empower

and:

## CodePulse Innovations

Use approximately:

```text
24px–28px
```

desktop.

Do not use huge 36–40px typography.

---

# 10. ROLE

Keep the role directly below the company name.

Example:

```text
FOUNDER + CHIEF OPERATING OFFICER
```

or the appropriate role from the existing data.

Make this a compact accent label.

Approximately:

```text
11px–12px
```

with medium letter spacing.

---

# 11. DESCRIPTION MUST BE SHORT

The current startup descriptions are too long.

Shorten them to approximately:

**2–3 lines maximum.**

Example:

### Marsa Empower

> Women-first AI health platform focused on accessible digital health, safety, and personalized care.

### CodePulse Innovations

> Product studio focused on AI-powered portfolio generation and digital presence workflows.

Use the actual existing project/company data where available.

Do not invent achievements or company details.

---

# 12. REMOVE UNNECESSARY CONTENT FROM CARDS

Do not put large paragraphs inside startup cards.

The card should answer only:

1. What company is this?
2. What was my role?
3. When?
4. What does it do?
5. Where can I learn more?

Everything else is unnecessary.

---

# 13. COMPACT CARD STRUCTURE

Use this structure:

```text
┌─────────────────────────────────────────┐
│ [Logo]                     JAN 2026–NOW │
│                                         │
│ Marsa Empower                           │
│ FOUNDER + CHIEF OPERATING OFFICER       │
│                                         │
│ Women-first AI health platform...       │
│                                         │
│ ─────────────────────────────────────   │
│ Website →                               │
└─────────────────────────────────────────┘
```

This is enough.

---

# 14. ADD A SUBTLE CARD FOOTER

Instead of large buttons, use a compact text link.

For example:

```text
Visit Website →
```

or:

```text
View Company →
```

Keep it subtle.

Do not use giant black CTA buttons.

The startup section is informational, not a sales page.

---

# 15. CARD VISUAL STYLE

Keep the existing premium visual language:

* white background
* subtle border
* rounded corners
* very light shadow
* thin top accent line
* subtle hover effect

But reduce visual intensity.

The cards should feel like part of the portfolio rather than separate landing pages.

---

# 16. HOVER EFFECT

Use a subtle hover state.

For example:

```text
translateY(-3px)
```

with a very light shadow/border transition.

Do NOT use:

* large scaling
* aggressive glow
* rotating cards
* excessive gradients

Keep it professional.

---

# 17. RESPONSIVE DESIGN

### Desktop

2 cards per row.

### Tablet

2 cards per row if there is enough width.

Otherwise:

1 card per row.

### Mobile

1 card per row.

Mobile cards should be even more compact.

Target:

```text
┌──────────────────────────┐
│ Logo              Date   │
│                          │
│ Marsa Empower            │
│ Founder + COO            │
│                          │
│ Short description...     │
│                          │
│ Visit Website →          │
└──────────────────────────┘
```

Do not create excessively tall mobile cards.

---

# 18. SECTION HEIGHT

The entire Startup section should become significantly shorter.

The user should be able to scroll through it quickly.

Do not let two startup cards consume an enormous amount of vertical space.

The section should feel approximately:

**40–50% more compact than the current implementation.**

---

# 19. HOMEPAGE HIERARCHY

This is extremely important.

The Startup section should NOT visually compete with:

* Hero
* Featured Projects
* Skills

Those are the primary portfolio sections.

Startup Founder should feel like an additional dimension of my professional profile.

The hierarchy should be:

```text
Technical Engineering
        ↓
Projects
        ↓
Skills
        ↓
Startup / Founder Experience
```

This allows visitors to first understand that I am a strong engineer before discovering my founder/operator work.

---

# 20. DO NOT REMOVE STARTUP INFORMATION

Do not remove the startup companies.

Keep all existing startup data.

Only change:

* position on homepage
* card size
* spacing
* typography
* content density
* interaction
* responsiveness

---

# 21. KEEP THE CURRENT NAVIGATION

Do not change the navbar.

Keep:

```text
About
Startups
Projects
Skills
Contact
GitHub
```

The Startups navigation item can still scroll/navigate to the Startup section.

If the section is moved lower, make sure the navigation anchor still works correctly.

---

# 22. UPDATE ANCHOR / SCROLL BEHAVIOR

Because the section is moving lower, verify that:

```text
#startups
```

or the existing startup section ID still works.

Clicking **Startups** in the navbar should smoothly navigate to the new position.

Account for the sticky navbar so the heading does not get hidden underneath it.

---

# 23. IMPORTANT: DO NOT CHANGE THE REST OF THE HOMEPAGE

Do not redesign:

* Hero
* About
* Featured Projects
* Skills
* Contact
* Navbar

unless a tiny spacing adjustment is required because the Startup section is being moved.

The task is specifically about:

### Startup section positioning + card refinement.

---

# 24. FINAL VISUAL TARGET

The section should ultimately feel like:

```text
────────────────────────────────────────

Founded Startups

Building products and companies around AI,
software, and digital platforms.

┌──────────────────────────┐
│ ◉                    DATE│
│                          │
│ Marsa Empower            │
│ FOUNDER + COO            │
│                          │
│ Women-first AI health    │
│ platform focused on...   │
│                          │
│ Visit Website →          │
└──────────────────────────┘

┌──────────────────────────┐
│ ◉                    DATE│
│                          │
│ CodePulse Innovations    │
│ FOUNDER                  │
│                          │
│ AI-powered portfolio and │
│ digital presence tools.  │
│                          │
│ Visit Website →          │
└──────────────────────────┘

────────────────────────────────────────
```

Compact.

Readable.

Professional.

No oversized cards.

No unnecessary empty space.

No giant paragraphs.

---

# 25. FINAL DESIGN PRINCIPLE

The current section is not bad because it lacks visual design.

It is bad because **there is too much visual space around too little information**.

Fix the information density.

Make it:

**Smaller**
**Cleaner**
**More scannable**
**More compact**
**More professional**

And most importantly:

### Move "Founded Startups" below the Skills section on the homepage.

The visitor should first see:

**Engineer → Projects → Skills**

and then:

**Founder / Startup Experience**

That hierarchy is intentional and should be preserved.
